import React from "react";
import c from "./App.module.css";
import SiteBar from "./components/sitebar/Sitebar";
import Profile from "./components/content/profile/ProfileContainer";
import UsersContainer from "./components/content/usersContainer/UsersContainer";
import {Route, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import DialogsContainer from "./components/content/dialogsContainer/DialogsContainer";
import {connect} from "react-redux";
import {getAuthMe} from "./redux/reducers/authReducer";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/appReducer";
import {Preloader} from "./components/Preloder/Preloader";


class App extends React.Component {

    componentDidMount() {

        this.props.initializeApp();
    }

    render() {
        if(!this.props.initial) return <Preloader/>
        return (
            <div className={c.wrapper}>
                <HeaderContainer/>
                <SiteBar/>
                <div className={c.content}>
                    {/*<Route exact path='/' component={ProfileContainer}></Route>*/}
                    <Route path='/Profile/:usersId?' component={Profile}></Route>
                    <Route path='/Dialogs' component={DialogsContainer}></Route>
                    <Route path='/Users' render={() => <UsersContainer/>}></Route>
                    <Route path='/login' render={() => <Login/>}></Route>
                </div>

            </div>
        );
    }
}

let mapStateToProps = (state)=>{
    return{
        initial: state.initial.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
