import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from 'react-native'
import { WALLET_TYPES } from '../walletData'

const Badge = ({ id, label, value, type, selectedWalletId, onPress }) => (
  <Text
    style={[
      styles.badge,
      type === WALLET_TYPES.BITCOIN ? styles.bitcoin : styles.ethereum
    ]}
  >
    {type}
  </Text>
)

Badge.propTypes = {
  type: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  badge: {
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6
  },
  bitcoin: {
    color: '#222',
    backgroundColor: '#F9B23B'
  },
  ethereum: {
    color: '#fff',
    backgroundColor: '#8F9EB0'
  }
})

export default Badge
