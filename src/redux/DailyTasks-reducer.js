import {
    AddTask,
    UpdateTask
} from './UpdTasksCreateActions'

let AddTaskF= (state)=> {
        let newtaks = {
            Id: state.newTask.Id,
            Task: state.newTask.Task,
        }
        state.listTasks.push(newtaks)
        state.newTask.Id = ''
        state.newTask.Task = ''
    }

let	UpdateTaskF = (val, state)=>  {
        state.newTask.Task = val
}



export const DailyTasksReducer = (state, action) =>{
    switch(action.type){
        case AddTask:
            AddTaskF(state)
            break
        case UpdateTask:
            UpdateTaskF(action.val, state)
            break
        
        default:
            break
    }
}