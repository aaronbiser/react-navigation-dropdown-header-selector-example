import React from 'react'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './components/navigation/Navigator'

const AppContainer = createAppContainer(AppNavigator)

const App = () => <AppContainer />

export default App
