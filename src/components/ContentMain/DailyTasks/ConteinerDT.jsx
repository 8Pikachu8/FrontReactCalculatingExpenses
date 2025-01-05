import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {UpdateTaskActionCreator,AddTaskActionCreator} from './../../../redux/DailyTask/UpdTasksCreateActions'
import DailyTasks from "./DailyTasks";
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
    return {
        listWeeks: state.DailyTasksPage.listWeeks,
        listTasks: state.DailyTasksPage.listTasks,
        newDay: state.DailyTasksPage.newDay,
        newTask: state.DailyTasksPage.newTask,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        CallBackUpdate: (event) => {
            let text = event.target.value
            dispatch(UpdateTaskActionCreator(text))
            console.log(text)
        },
        CallBackAdd: () => {
            dispatch(AddTaskActionCreator())
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(DailyTasks)