/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Router from './router';
import { StoreProvider } from './store'


const App = () => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  )
}

export default App;
