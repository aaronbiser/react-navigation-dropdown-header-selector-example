import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { WALLET_TYPES } from '../walletData'
import Badge from './Badge';

const WalletRow = ({ children }) => (
  <View style={[styles.walletRow, { justifyContent: Array.isArray(children) ? 'space-between' : 'center', }]}>
    {children}
  </View>
)

const WalletDetails = ({ wallet }) => (
  <View style={styles.wrapper}>
    <Text style={styles.header}>{wallet.label}</Text>
    <Text style={styles.value}>
      ${wallet.value.toLocaleString('en-US', { minimumFractionDigits: 2, currency: 'USD' })}
    </Text>
    <WalletRow>
      <Text style={styles.label}>Wallet Type</Text>
      <Badge type={wallet.type} />
    </WalletRow>
    <WalletRow>
      <Text style={styles.message}>{wallet.message}</Text>
    </WalletRow>
  </View>
)

WalletDetails.propTypes = {
  wallets: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.oneOf(Object.keys(WALLET_TYPES)).isRequired,
    message: PropTypes.number.isRequired
  })
}

const styles = StyleSheet.create({
  wrapper: { 
    flex: 1, 
    width: '100%'
  },
  walletRow: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 12, 
    borderTopColor: '#ddd',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  header: {
    textAlign: 'center', 
    fontSize: 20, 
    fontWeight: '400'
  },
  value: { 
    textAlign: 'center',
    fontSize: 34, 
    fontWeight: '200', 
    color: '#666',
    marginTop: 10,
    marginBottom: 28
  },
  label: {
    fontWeight: '600'
  },
  message: { 
    textAlign: 'center', 
    paddingHorizontal: 10
  }
})

export default WalletDetails