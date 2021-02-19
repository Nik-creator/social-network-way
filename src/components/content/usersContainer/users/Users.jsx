import React from "react";
import ava from "../../../../assets/img/ava.png"
import c from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props)=>{

    let count =  Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for(let i = 1; i <= count; i++) {
        pages.push(i);
    }


    return(
        <>
            {pages.map((p, index )=> {
                return <span key={index} className={props.currentPages === p ? c.activePage : ''}
                              onClick={ () => {props.handlerClick(p)}}>{p}</span>
            })
            }
            <div>
                {
                    props.users.map(u =>
                        <div key={u.id} className={c.div}>
                            <div>
                                <NavLink to={'/Profile/' + u.id } onClick={()=> {props.fetchingUserProfile(u.id)}}>
                                    <img src={u.photos.small != null ? u.photos.small : ava} className={c.img} alt='ava'/>
                                </NavLink>
                                {u.followed ?
                                    <button onClick={() => {props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={()=>{props.follow(u.id)}}>follow</button>
                                }
                            </div>

                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                {/*<div>{u.location.country}</div>*/}
                                {/*<div>{u.location.city}</div>*/}
                            </div>

                        </div>
                    )
                }

            </div>
        </>
    )
}


export default Users;





