'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
  
    this.getRepos().bind(this)
  
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
        getRepos={this.getRepos()}
        getStarred={this.getRepos('starred')}
      />
    )
  }

  handleSearch (e) {
    const keyCode = e.which || e.keycode
    const value = e.target.value
    const enter = 13
    const baseUrl = 'https://api.github.com/users/'
  
    if (keyCode === enter) {
      ajax().get(`${baseUrl}${value}`)
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

  getRepos (type = 'repos') {
    return (e) => {
      const user = this.state.userInfo.login
      const baseUrl ='https://api.github.com/users/'
      const repos = type === 'repos' ? '/repos' : ''
      const starred = type === 'starred' ? '/starred' : ''
  
      ajax().get(`${baseUrl}${user}${repos}${starred}`)
        .then(r => this.setState({
          [type]: r.map(repo => {
            return {
              name: repo.name,
              link: repo.html_url,
              id: repo.id
            }
          })
        }))
    }
  }
}

export default App
