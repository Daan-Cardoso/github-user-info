'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
    )
  }

  handleSearch (e) {
    const keyCode = e.which || e.keycode
    const value = e.target.value
    const enter = 13
  
    if (keyCode === enter) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then(r => this.setState({
          userInfo: {
            username: r.name,
            photo: r.avatar_url,
            login: r.login,
            repos: r.public_repos,
            followers: r.followers,
            following: r.following
          }
        }))
    }
  }
}

export default App
