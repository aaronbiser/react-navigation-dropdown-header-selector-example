import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { View } from 'react-native'
import Screen from './Screen'
import WalletCard from './WalletCard'
import WalletDetails from './WalletDetails'
import { WALLET_TYPES } from '../walletData'

const Card = ({ children, style }) => (
  <View
    style={{
      borderRadius: 6,
      backgroundColor: '#fff',
      marginVertical: 8,
      padding: 24,
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
      ...style
    }}
  >
    {children}
  </View>
)

const WalletScreen = ({ navigation, wallets }) => {
  const isWalletDropdownVisible = navigation.getParam('isWalletDropdownVisible')
  const selectedWalletId =
    navigation.getParam('selectedWalletId') || wallets[0].id
  const wallet = wallets.find(w => w.id === selectedWalletId)

  const handleSelectWalletCard = id => {
    navigation.setParams({
      selectedWalletId: id,
      isWalletDropdownVisible: !isWalletDropdownVisible
    })
  }

  const renderWalletScreen = () => {
    if (isWalletDropdownVisible) {
      return wallets.map(w => (
        <WalletCard
          key={w.id}
          id={w.id}
          label={w.label}
          value={w.value}
          type={w.type}
          isSelected={w.id === selectedWalletId}
          onPress={handleSelectWalletCard}
        />
      ))
    }

    return (
      <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
        <WalletDetails wallet={wallet} />
      </Card>
    )
  }

  return <Screen>{renderWalletScreen()}</Screen>
}

WalletScreen.defaultProps = {
  wallets: []
}

WalletScreen.propTypes = {
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      type: PropTypes.oneOf(Object.values(WALLET_TYPES)).isRequired,
      message: PropTypes.string
    })
  ).isRequired
}

export default withNavigation(WalletScreen)
