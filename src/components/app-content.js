'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import { PropTypes } from 'prop-types'

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isLoading
}) => (
  <div className='content'>
    <Search isDisable={isLoading} handleSearch={handleSearch} />

    {!!isLoading && <p>Carregando..</p>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {repos.length > 0 &&
      <Repos
        title='Repositórios'
        repos={repos}
      />}

    {starred.length > 0 &&
      <Repos
        title='Favoritos'
        repos={starred}
      />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default AppContent
