import img from "../../../../../assets/img/ava.png"

const OutPutMessage = (props)=>{
    const {message} = props;
    const style = {
        img:{
            width: "20px"
        },
        wrapper:{
            display: "flex"
        },
        item:{
            marginLeft:"20px"
        }
    }
    return(
        <>
            {
                message.map((message, index) =>
                    <div style={style.wrapper}>
                        <div><img src={img} style={style.img}/></div>
                        <div key={index} style={style.item}>{message}</div>
                    </div>
                )
            }
        </>
    )
}

export default OutPutMessage;