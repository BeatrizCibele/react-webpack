"use-strict";

import React from "react";
import Actions from "./components/Actions";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Repos from "./components/Repos";

const AppContent = ({ userInfo, repos, starred }) => (
  <div className="app">
    <Search />

    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions />}

    {!!repos.length && (
      <Repos className="repos" title="Repositórios:" repos={repos} />
    )}
    {!!starred.length && (
      <Repos className="starred" title="Favoritos:" repos={starred} />
    )}
  </div>
);

AppContent.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
};

export default AppContent;
