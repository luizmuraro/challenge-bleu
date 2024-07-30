const ABI = [
  {
    inputs: [
      {
        internalType: 'contract IVault',
        name: 'vault',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'poolId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'metadataCID',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'PoolMetadataUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'poolIdMetadataCIDMap',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'poolIds',
        type: 'bytes32[]',
      },
      {
        internalType: 'string[]',
        name: 'metadataCIDs',
        type: 'string[]',
      },
    ],
    name: 'setBatchPoolMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'poolId',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: 'metadataCID',
        type: 'string',
      },
    ],
    name: 'setPoolMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export default ABI
