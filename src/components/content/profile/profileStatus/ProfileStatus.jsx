import React,{Component} from "react";

class ProfileStatus extends Component {
    state = {
        editMode:false,
        status: this.props.status
    }
    activateEditMode=()=>{
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e)=>{
        this.setState({
            status: e.currentTarget.value
        })

    }

    render(){
        debugger;
        return(
            <>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                    <input autoFocus={true}
                            onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}></input>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;
