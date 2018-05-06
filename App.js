import React, { Component } from 'react'
import TabBarNavigation from './TabBarNavigation'
import { AppRegistry } from 'react-native'

import {
  applyMiddleware,
  createStore,
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default class CustomTabNavigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TabApp', () => CustomTabNavigation);
