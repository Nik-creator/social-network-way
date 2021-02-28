import React from "react";
import ProfileStatus from "../profileStatus/ProfileStatus";
import ProfileAva from "../profileAva/ProfileAva";

const MyProfile = (props)=>{
    return (
        <>
            <ProfileAva ava={props.img}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </>
    )
}

export default MyProfile;