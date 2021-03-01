import {connect} from "react-redux";
import Message from "./message/Message";
import OutPutMessage from "./outputMessage/OutPutMessage";
import {fetchingMessage} from "../../../../redux/reducers/DialogsReducer";

const MessageContainer = (props)=>{
    const {message, fetchingMessage} = props;

    const style = {
        item:{
            flexBasis:"80%"
        }
    }
    return (
        <div style={style.item}>
            <OutPutMessage message={message}/>
            <Message  fetchingMessage={fetchingMessage}/>
        </div>
    )
}

let mapStateToProps = (state)=>{
    return{
        message: state.dialogs.message
    }
}



export default connect(mapStateToProps, {fetchingMessage})(MessageContainer);