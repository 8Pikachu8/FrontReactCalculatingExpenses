import React from "react";
import profileCSS from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component  {

	state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
            
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
            
    }

    activateEditMode = () => {
        if(this.props.authId === this.props.userId){
            this.setState({
                editMode: true
            })
        }
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.UpdateNewStatus(this.state.status);

    }

    setNewLocalStateStatus = (event) => { 
        this.setState({
            status: event.target.value
        })
    }

 
    render(){ 
		return (<div className={profileCSS.profile} >
                    {this.state.editMode === true ?
                        
                        <input autoFocus = {true} onBlur={this.deactivateEditMode} type="text" value={this.state.status } onChange={this.setNewLocalStateStatus}/> :
                        <label onDoubleClick={this.activateEditMode} >{this.props.status || "NONSTATUS"}</label>
                        
                    }
			    </div>)
		
    }
}

export default ProfileStatus;