import React from "react";
import c from "../inputPost/InputPost.module.css";
import ava from "../../../../assets/img/ava.png"

const ProfileAva = (props)=>{
    return(
        <>
            <div>
                {!props.ava ? <img src={ava} className={c.ava}/> : <img src={props.ava} className={c.ava} alt='ava'/> }
            </div>
        </>
    )
}

export default ProfileAva;