
import {
    AddTask
} from './UpdTasksCreateActions'

const AddTaskF = (state, action) => {
    const newTask = {
        Id: action.task,
        Task: action.task,
    };

    return {
        ...state,
        listTasks: [...state.listTasks, newTask], // Создаем новый массив с добавленным элементом
    };
};




let defState = {
			listWeeks: [
				{Id: '1', Day: '11.12.2024'},
				{Id: '2', Day: '12.12.2024'},
				{Id: '3', Day: '13.12.2024'},
				{Id: '4', Day: '14.12.2024'},
			],
			listTasks:[
				{Id: '1', Task: 'Умыться'},
				{Id: '2', Task: 'Покушать'},
				{Id: '3', Task: 'Попрограммировать'},
				{Id: '4', Task: 'Приготовить'},
				{Id: '5', Task: 'Сходить на улицу'},
				{Id: '6', Task: '!!!!!!!!!!!!!!'},
				{Id: '7', Task: 'Посмотреть фильм'},
				{Id: '8', Task: 'Лечь спать'},
			],
			newDay:{
				Id: "--",
				Day: "--"
			}
		}
export const DailyTasksReducer = (state = defState, action) =>{
    switch (action.type) {
        case AddTask:
            return AddTaskF(state, action); // Возвращаем новое состояние
        default:
            return state;
    }
}