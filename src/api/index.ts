import axios from 'axios'

const editMetadata = async (data: string) => {
  const response = await axios({
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    data,
    headers: {
      pinata_api_key: 'd213c8c1d874fe978695',
      pinata_secret_api_key:
        '9bdd0d491f744412e7042433a63ead3ddb068bd63e14cfd61aac1ab21280016e',
      'Content-Type': 'application/json',
    },
  })

  return response
}

export { editMetadata }
