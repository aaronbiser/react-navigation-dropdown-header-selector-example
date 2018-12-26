import React from 'react'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'

const Screen = ({ children }) => (
  <React.Fragment>
    <StatusBar barStyle='light-content' />
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContentContainer}
    >
      {children}
    </ScrollView>
  </React.Fragment>
)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee'
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20
  }
})

export default Screen
