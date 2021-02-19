import React from "react";
import c from "./App.module.css";
import Header from "./components/header/Header";
import SiteBar from "./components/sitebar/Sitebar";
import Dialogs from "./components/content/dialogs/Dialogs";
import ProfileContainer from "./components/content/profile/ProfileContainer";
import UsersContainer from "./components/content/usersContainer/UsersContainer";
import {Route } from 'react-router-dom';
import HeaderContainer from "./components/header/HeaderContainer";



function App() {
  return (
      <div className={c.wrapper}>
          <HeaderContainer/>
          <SiteBar/>
          <div className={c.content}>
              {/*<Route exact path='/' component={ProfileContainer}></Route>*/}
              <Route path='/Profile/:usersId' component={ProfileContainer}></Route>
              <Route path='/Dialogs' component={Dialogs}></Route>
              <Route path='/Users' render={() => <UsersContainer/>}></Route>
          </div>

      </div>
  );
}

export default App;
