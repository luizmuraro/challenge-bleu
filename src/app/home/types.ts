export interface Pool {
  id: string
  metadataCID: string
}

export interface IQueryData {
  pools: {
    items: Pool[]
  }
}

export interface IOnPinJSONToIPFS {
  name: string
  description: string
  external_url: string
}
