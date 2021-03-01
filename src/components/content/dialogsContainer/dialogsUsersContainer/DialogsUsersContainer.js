import img from "../../../../assets/img/ava.png"

const DialogsUsersContainer = () => {
    const style = {
        img: {
            width: "50px"
        }
    }

    return (
        <div>
            <div>
                <div><img style={style.img} src={img} alt={"ava"}/></div>
                <div>My name</div>
            </div>

            <div>
                <div><img style={style.img} src={img} alt={"ava"}/></div>
                <div>My name</div>
            </div>

            <div>
                <div><img style={style.img} src={img} alt={"ava"}/></div>
                <div>My name</div>
            </div>

            <div>
                <div><img style={style.img} src={img} alt={"ava"}/></div>
                <div>My name</div>
            </div>
        </div>
    )
}

export default DialogsUsersContainer;