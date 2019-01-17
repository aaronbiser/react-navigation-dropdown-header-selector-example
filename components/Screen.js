import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'

const Screen = ({ children, style }) => (
  <React.Fragment>
    <StatusBar barStyle='light-content' />
    <ScrollView
      style={[styles.scrollView, style]}
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

Screen.defaultProps = {
  children: null,
  style: {}
}

Screen.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default Screen
