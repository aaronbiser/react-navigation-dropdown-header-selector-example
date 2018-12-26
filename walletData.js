export const WALLET_TYPES = {
  ETHEREUM: 'Ethereum',
  BITCOIN: 'Bitcoin'
}

export const WALLET_DATA = [
  {
    id: 1,
    label: 'Investco Partners Wallet',
    value: 18675,
    type: WALLET_TYPES.ETHEREUM,
    message: '3 of 4 signatures required to process transactions'
  },
  {
    id: 2,
    label: 'Bitcoin Multisig Wallet',
    value: 98368,
    type: WALLET_TYPES.BITCOIN,
    message: '4 of 8 signatures required to process transactions'
  },
  {
    id: 3,
    label: 'Ethereum Singlesig Wallet',
    value: 3456,
    type: WALLET_TYPES.ETHEREUM,
    message: '1 signature required to process transactions'
  },
  {
    id: 4,
    label: 'Capital Ventures Wallet',
    value: 8761,
    type: WALLET_TYPES.ETHEREUM,
    message: '1 signature required to process transactions'
  },
  {
    id: 5,
    label: 'Delmar Group Wallet',
    value: 76789,
    type: WALLET_TYPES.BITCOIN,
    message: '4 of 5 signature required to process transactions'
  }
]
