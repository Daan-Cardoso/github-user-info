'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      onKeyUp={(e) => {
        const keyCode = e.which || e.keycode
        const value = e.target.value
        const enter = 13

        if (keyCode === enter) {
          ajax().get(`https://api.github.com/users/${value}`)
            .then(r => console.log(r))
        }
      }}
    />
  </div>
)

export default Search
