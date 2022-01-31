'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} />

    <h2>
      <a href={`https://github.com/${userinfo.login}`} target='_blank' rel='noreferrer'>{userinfo.username}</a>
    </h2>

    <ul className='repo-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>

  </div>
)

UserInfo.proptypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.object.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
  })
}

export default UserInfo
