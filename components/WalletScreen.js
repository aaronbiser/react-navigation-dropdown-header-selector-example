import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import Screen from './Screen'
import WalletCard from './WalletCard'
import WalletDetails from './WalletDetails'
import { WALLET_TYPES } from '../walletData'

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

  return (
    <Screen>
      {isWalletDropdownVisible ? (
        wallets.map(w => (
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
      ) : (
        <View style={styles.card}>
          <WalletDetails wallet={wallet} />
        </View>
      )}
    </Screen>
  )
}

WalletScreen.defaultProps = {
  wallets: []
}

WalletScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      type: PropTypes.oneOf(Object.values(WALLET_TYPES)).isRequired,
      message: PropTypes.string
    })
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  }
})

export default withNavigation(WalletScreen)
