'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button
      className='actions__buttons'
      onClick={getRepos}
    >
      Ver Repositórios
    </button>
    <button
      className='actions__buttons'
      onClick={getStarred}
    >
      Ver Favoritos
    </button>
  </div>
)

Actions.proptypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}
export default Actions
