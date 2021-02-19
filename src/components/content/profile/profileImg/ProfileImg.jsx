import img from "../../../../assets/unnamed.jpg";
import c from "./ProfileImg.module.css";

const ProfileImg = (props)=>{


    return(
        <div className={c.wrapper}>
            {!props.img ? <img src={img} className={c.img} alt='ava'/> : <img src={props.img} className={c.img} alt='ava'/>}

        </div>
    )
}

export default ProfileImg;