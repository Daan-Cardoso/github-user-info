'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Digite o nome do usuário' />
        </div>

        <div className='user-info'>
          <img src='https://via.placeholder.com/150x150' alt='' srcset='' />

          <h2>
            <a href='#'>Fernando Daciuk</a>
          </h2>

          <ul className='repo-info'>
            <li>Repositórios: 122</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 10</li>
          </ul>

          <div className='actions'>
            <button>Ver Repositórios</button>
            <button>Ver Favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios</h2>
            <ul>
              <li>
                <a href='#'>link do Repositório</a>
              </li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos</h2>
            <ul>
              <li>
                <a href='#'>link do Repositório</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    )
  }
}
export default App
