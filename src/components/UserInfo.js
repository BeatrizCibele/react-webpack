"use-strict";
import React, { PropTypes } from "react";
import { prototype } from "webpack-dev-server";

const UserInfo = ({ userInfo }) => (
  <div className="user-info">
    <img src={userInfo.photo} />
    <h1>
      <a href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a>
    </h1>

    <ul className="repos-info">
      <li>Repoistório: {userInfo.repos}</li>
      <li>Seguidores: {userInfo.followers}</li>
      <li>Seguindo: {userInfo.following}</li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequerid,
    photo: PropTypes.string.isRequerid,
    login: PropTypes.string.isRequerid,
    repos: PropTypes.number.isRequerid,
    followers: PropTypes.number.isRequerid,
    following: PropTypes.number.isRequerid,
  }),
};

export default UserInfo;
