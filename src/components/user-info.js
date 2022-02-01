'use strict'

import React from 'react'
import { PropTypes } from 'prop-types'

const UserInfo = ({ userinfo }) => (
  <div className='user-info default-background default-border-radius'>
    <img className='user-info__photo' src={userinfo.photo} />

    <div className='user-info__content'>

      <h2 className='user-info__title title'>
        <a
          className='user-info__link'
          href={`https://github.com/${userinfo.login}`}
          target='_blank'
          rel='noreferrer'
        >
          {userinfo.username}
        </a>
      </h2>

      <ul className='repo-info'>
        <li className='repo-info__item'>Repositórios: {userinfo.repos}</li>
        <li className='repo-info__item'>Seguidores: {userinfo.followers}</li>
        <li className='repo-info__item'>Seguindo: {userinfo.following}</li>
      </ul>

    </div>

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
