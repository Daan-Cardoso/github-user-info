'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        username: 'Danilo Cardoso',
        repos: 12,
        followers: 10,
        following: 10,
        photo: 'https://via.placeholder.com/200x200/ff0000/ffffff?text=Profile',
        login: 'Daan-Cardoso'
      },
      repos: [{
        name: 'repo repos',
        link: '#'
      }],
      starred: [{
        name: 'repo starred',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}
export default App
