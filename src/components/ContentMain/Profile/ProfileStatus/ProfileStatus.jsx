import React from "react";
import profileCSS from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component  {
    
	state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

 
    render(){ 
		return (<div className={profileCSS.profile} >
                    {this.state.editMode === false?
                        <label onDoubleClick={this.activateEditMode} >{this.props.status}</label>:
                        <input autoFocus = {true} onBlur={this.deactivateEditMode} type="text" value={this.props.status} /> 
                    }
                    
			    </div>)
		
    }
}

export default ProfileStatus;