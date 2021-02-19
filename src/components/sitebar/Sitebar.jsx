import React from "react";
import c from "./Sitebar.module.css"
import {NavLink} from "react-router-dom";

const SiteBar = ()=>{
    return(
        <div className={c.wrapper}>
            <div className={c.link}><NavLink to="/Profile" activeClassName={c.active}>Profile</NavLink></div>
            <div className={c.link}><NavLink to="/Dialogs" activeClassName={c.active}>Dialogs</NavLink></div>
            <div className={c.link}><NavLink to="/Users" activeClassName={c.active}>Users</NavLink></div>
        </div>
    )
}

export default SiteBar;