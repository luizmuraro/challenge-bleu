import { editMetadata } from '@/api'
import {
  Container,
  SearchBarContainer,
  SearchButton,
  SearchInput,
} from '@/app/home/styles'
import { IOnPinJSONToIPFS, IQueryData, Pool } from '@/app/home/types'
import MetadataForm from '@/components/MetadataForm'
import Sidebar from '@/components/SideBar'
import ABI from '@/constants/abi'
import EMPTY_METADATA from '@/constants/emptyMetadata'
import { GET_POOLS } from '@/infra/graphQL/querys'
import { useModal } from '@/infra/hooks/modal/use-modal'
import { useQuery } from '@apollo/client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'

// USAR NO ENV
const CONTRACT_ADDRES = '0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02'
const URL = `https://purple-wrong-grasshopper-620.mypinata.cloud/ipfs`

const Home = () => {
  const { isConnected } = useAccount()

  const [selectedPoolID, setSelectedPoolID] = useState('')
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: contractData, isLoading: isReadContractLoading } =
    useReadContract({
      address: CONTRACT_ADDRES,
      abi: ABI,
      functionName: 'poolIdMetadataCIDMap',
      args: [selectedPoolID],
    })

  const { writeContract } = useWriteContract()

  const { show, hide } = useModal(() => onClose())

  const onClose = useCallback(() => {
    setSelectedPoolID('')
    setSearch('')
    setIsModalOpen(false)
  }, [])

  const { data, refetch: refetchPools } = useQuery<IQueryData>(GET_POOLS)

  const onPinJSONToIPFS = useCallback(async (formData: IOnPinJSONToIPFS) => {
    const data = JSON.stringify({
      pinataContent: {
        name: formData.name,
        description: formData.description,
        external_url: formData.external_url,
      },
      pinataMetadata: {
        name: 'metadata.json',
      },
    })

    try {
      const response = await editMetadata(data)
      return response
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleOnSubmit = useCallback(
    async (e: any, poolId: string) => {
      e.preventDefault()

      const formData = new FormData(e.target)

      const data = Object.fromEntries(
        formData.entries(),
      ) as unknown as IOnPinJSONToIPFS

      const response = await onPinJSONToIPFS(data)

      if (response) {
        writeContract({
          abi: ABI,
          address: CONTRACT_ADDRES,
          functionName: 'setPoolMetadata',
          args: [poolId, response.data.IpfsHash],
        })
        refetchPools()
      }
    },
    [onPinJSONToIPFS, refetchPools, writeContract],
  )
  const handleEmptyContract = useCallback(() => {
    if (data && data.pools.items.find(({ id }) => id === selectedPoolID)) return

    writeContract({
      abi: ABI,
      address: CONTRACT_ADDRES,
      functionName: 'setPoolMetadata',
      args: [search, EMPTY_METADATA],
    })
  }, [data, writeContract, search, selectedPoolID])

  const fetchFileFromIPFS = useCallback(
    async ({ poolId, cid }: { poolId: string; cid: string }) => {
      try {
        const request = await fetch(`${URL}/${cid}`)
        const response = await request.json()
        setIsModalOpen(true)

        if (!isModalOpen) {
          show({
            title: `PoolID: ${poolId}`,
            content: (
              <MetadataForm
                initialData={response}
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  handleOnSubmit(e, poolId)
                }}
              />
            ),
            actions: [
              {
                title: 'Close',
                onClick: () => {
                  setSelectedPoolID('')
                  hide()
                },
              },
            ],
          })
        }

        return response
      } catch (error) {
        handleEmptyContract()
        console.log('error:', error)
      }
    },
    [show, handleOnSubmit, hide, handleEmptyContract, isModalOpen],
  )

  const handleSearchPress = () => {
    setSelectedPoolID(search)
  }

  useEffect(() => {
    if (selectedPoolID && !isReadContractLoading) {
      fetchFileFromIPFS({ cid: String(contractData), poolId: selectedPoolID })
    }
  }, [contractData, fetchFileFromIPFS, selectedPoolID, isReadContractLoading])

  return (
    <Container>
      {!isConnected ? (
        <ConnectButton />
      ) : (
        <>
          <SearchBarContainer>
            <SearchInput
              type="text"
              placeholder="Search your pool ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchButton onClick={handleSearchPress}>
              <FaSearch size={18} />
            </SearchButton>
          </SearchBarContainer>
          <Sidebar
            pools={data?.pools.items || []}
            onPoolClick={({ id, metadataCID }: Pool) =>
              fetchFileFromIPFS({ poolId: id, cid: metadataCID })
            }
          />
        </>
      )}
    </Container>
  )
}

export default Home
