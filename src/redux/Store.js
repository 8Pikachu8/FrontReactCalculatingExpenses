import { combineReducers, createStore } from "redux";
import {DailyTasksReducer }from './DailyTasks-reducer'
import {UpdateProductReducer} from './UpdateProduc-reducer'

let reducers = combineReducers(
    {
        UpdateProductPage:    UpdateProductReducer,
        DailyTasksPage:     DailyTasksReducer,
    }
);

let store = createStore(reducers);

export default store