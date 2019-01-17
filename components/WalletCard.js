import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Badge from './Badge'
import { WALLET_TYPES } from '../walletData'

const WalletCard = ({ id, label, value, type, isSelected, onPress }) => (
  <TouchableOpacity
    activeOpacity={isSelected ? 1 : 0.7}
    onPress={() => onPress(id)}
    style={[
      styles.cardTouchable,
      { borderColor: isSelected ? '#69A6F7' : '#fff' }
    ]}
  >
    <View style={[styles.cardWrap, { opacity: isSelected ? 1 : 0.6 }]}>
      <Text style={styles.header}>{label}</Text>
      <View style={styles.cardBottom}>
        <Badge type={type} />
        <Text style={styles.value}>
          $
          {value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            currency: 'USD'
          })}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
)

WalletCard.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(WALLET_TYPES)).isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 18,
    borderWidth: 3,
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 110
  },
  header: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: '400'
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  value: {
    fontSize: 28,
    fontWeight: '200',
    color: '#666'
  }
})

export default WalletCard
