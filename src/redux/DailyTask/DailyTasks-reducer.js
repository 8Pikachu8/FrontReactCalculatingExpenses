import {
    AddTask,
    UpdateTask
} from './UpdTasksCreateActions'

const AddTaskF = (state) => {
    const newTask = {
        Id: state.newTask.Id,
        Task: state.newTask.Task,
    };

    return {
        ...state,
        listTasks: [...state.listTasks, newTask], // Создаем новый массив с добавленным элементом
        newTask: { Id: '', Task: '' }, // Создаем новый объект
    };
};

const UpdateTaskF = (val, state) => {
    return {
        ...state,
        newTask: { ...state.newTask, Task: val }, // Создаем новый объект с обновленным значением
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
			},
			newTask:{
				Id: '--', Task: '--'
			}
		}
export const DailyTasksReducer = (state = defState, action) =>{
    switch (action.type) {
        case AddTask:
            return AddTaskF(state); // Возвращаем новое состояние
        case UpdateTask:
            return UpdateTaskF(action.val, state); // Возвращаем новое состояние
        default:
            return state;
    }
}