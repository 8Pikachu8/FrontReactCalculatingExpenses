import { combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {DailyTasksReducer }from './DailyTask/DailyTasks-reducer'
import {UpdateProductReducer} from './UpdateProduct/UpdateProduc-reducer'
import {UsersReducer} from './Users/Users-reducer'

let reducers = combineReducers(
    {
        UpdateProductPage:    UpdateProductReducer,
        DailyTasksPage:     DailyTasksReducer,
        UsersPage:     UsersReducer,
    }
);

const store = configureStore({
    reducer: reducers, // Ваш редюсер или редюсеры
});

export default store