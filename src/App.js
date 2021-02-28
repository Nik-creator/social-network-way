import React from "react";
import c from "./App.module.css";
import SiteBar from "./components/sitebar/Sitebar";
import Profile from "./components/content/profile/ProfileContainer";
import UsersContainer from "./components/content/usersContainer/UsersContainer";
import {Route } from 'react-router-dom';
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import Dialogs from "./components/content/dialogs/Dialogs";



function App() {
  return (
      <div className={c.wrapper}>
          <HeaderContainer/>
          <SiteBar/>
          <div className={c.content}>
              {/*<Route exact path='/' component={ProfileContainer}></Route>*/}
              <Route path='/Profile/:usersId?' component={Profile}></Route>
              <Route path='/Dialogs' component={Dialogs}></Route>
              <Route path='/Users' render={() => <UsersContainer/>}></Route>
              <Route path='/login' render={()=><Login />}></Route>
          </div>

      </div>
  );
}

export default App;
