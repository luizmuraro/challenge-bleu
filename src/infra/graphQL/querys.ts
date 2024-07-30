import { gql } from '@apollo/client'

const GET_POOLS = gql`
  query GetPools {
    pools {
      items {
        id
        metadataCID
      }
    }
  }
`

export { GET_POOLS }
