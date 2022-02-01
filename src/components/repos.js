'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'

const Repos = ({ title, repos }) => (
  <div className='repos default-background default-border-radius'>
    <h2 className='repos__title title'>{title}</h2>
    <ul className='repos__list'>
      {repos.map((repo) => (
        <li className='repos__item' key={repo.id}>
          <a className='repos__link' href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
