import _ from 'lodash'
import React from 'react'
import { Text } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Screen from '../Screen'
import WalletScreen from '../WalletScreen'
import HeaderDropdown from '../HeaderDropdown'
import { WALLET_DATA } from '../../walletData'

const ACTIVE_TAB_COLOR = '#69A6F7'
const INACTIVE_TAB_COLOR = '#aaa'

const headerStyles = {
  headerTintColor: '#fff',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ACTIVE_TAB_COLOR,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
}

const Icon = ({ name, focused }) => (
  <Ionicons
    name={name}
    size={30}
    color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
  />
)

export default createBottomTabNavigator(
  {
    TAB_WALLET: {
      screen: createStackNavigator({
        Wallet: {
          screen: () => <WalletScreen wallets={WALLET_DATA} />,
          path: '/wallet/:selectedWalletId',
          navigationOptions: ({ navigation }) => {
            const selectedWalletId = navigation.getParam('selectedWalletId')
            const title = selectedWalletId
              ? WALLET_DATA.find(w => w.id === selectedWalletId).label
              : WALLET_DATA[0].label

            return {
              headerTitle: () => <HeaderDropdown title={title} />,
              ...headerStyles
            }
          }
        }
      }),
      navigationOptions: ({ navigation }) => {
        const walletScreen = navigation.state.routes.find(
          obj => obj.routeName === 'Wallet'
        )

        const isTabBarVisible = _.get(
          walletScreen,
          'params.isWalletDropdownVisible'
        )

        return {
          tabBarVisible: !isTabBarVisible,
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ focused }) => (
            <Icon name='ios-wallet' focused={focused} />
          )
        }
      }
    },
    TAB_SEND: {
      screen: createStackNavigator({
        Send: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: 'center' }}>Send Screen</Text>
            </Screen>
          ),
          path: '/send',
          navigationOptions: {
            title: 'Send',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Send',
        tabBarIcon: ({ focused }) => <Icon name='ios-send' focused={focused} />
      }
    },
    TAB_ACTIVITIES: {
      screen: createStackNavigator({
        Activities: {
          screen: () => (
            <Screen>
              <Text style={{ textAlign: 'center' }}>Activities Screen</Text>
            </Screen>
          ),
          path: '/activities',
          navigationOptions: {
            title: 'Activities',
            ...headerStyles
          }
        }
      }),
      navigationOptions: {
        tabBarLabel: 'Activities',
        tabBarIcon: ({ focused }) => <Icon name='ios-list' focused={focused} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: ACTIVE_TAB_COLOR,
      inactiveTintColor: INACTIVE_TAB_COLOR,
      showLabel: true,
      style: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 4,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 }
      }
    }
  }
)
