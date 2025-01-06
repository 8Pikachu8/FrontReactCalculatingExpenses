import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {AddTaskActionCreator} from './../../../redux/DailyTask/UpdTasksCreateActions'
import DailyTasks from "./DailyTasks";
import { connect } from "react-redux";
import React from 'react';


class ConteinerDT extends React.Component{

    render() {
        return <DailyTasks {...this.props} />
    }
}

const mapStateToProps = (state) =>{
    return {
        listWeeks: state.DailyTasksPage.listWeeks,
        listTasks: state.DailyTasksPage.listTasks,
        newDay: state.DailyTasksPage.newDay,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        CallBackAdd: (val) => {
            dispatch(AddTaskActionCreator(val))
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(ConteinerDT)