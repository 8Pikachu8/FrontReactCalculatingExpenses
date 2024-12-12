import {
	AddType,
	UpdateProduct,
	UpdatePrice,
	UpdateDate,
	UpdateCount,
	UpdateShop,
	UpdateType,
} from './UpdPageCreateActions'
import { UpdateProductReducer } from './UpdateProduc-reducer'
import {DailyTasksReducer } from './DailyTasks-reducer'

 let ProductListPage = {

	_state: {
		UpdateProductPage:{
			ProductList: [
				{
					Type: 'Деталь',
					Price: '133,6 р.',
					Product: 'Творожанная масса',
					Date: '23.09.2001',
					Count: '1',
					Shop: 'Пятерочка',
				},
				{
					Type: 'Продукт',
					Price: '13243,6 р.',
					Product: 'телеграм канал',
					Date: '13.11.2024',
					Count: '1',
					Shop: 'дмитрий никотин',
				},
				{
					Type: 'Связь',
					Price: '750,6 р.',
					Product: 'интернет',
					Date: '12.11.2024',
					Count: '1',
					Shop: 'дом ру',
				},
				{
					Type: 'Продукт',
					Price: '110,6 р.',
					Product: 'сыр плавленный',
					Date: '14.11.2024',
					Count: '1',
					Shop: 'molochnyj dom',
				},
			],
			ListFiltrs: [
				{ NameElement: 'Фильтр', Id: '1' },
				{ NameElement: 'Второй фильтр', Id: '2' },
				{ NameElement: 'Третий фильтр', Id: '3' },
				{ NameElement: 'Третий фильтр', Id: '3' },
			],
			newValue: {
				Type: 'Деталь',
				Price: '133,6 р.',
				Product: 'Творожанная масса',
				Date: new Date().toISOString().split('T')[0],
				Count: '1',
				Shop: 'Пятерочка',
			}
		},

		DailyTasksPage:{
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
		
	},

	SetState(state){
		
		this._state = state
	},

	GetState(){
		return this._state
	},

	RerenderApp() {},

	SetSubscribe(observer) {
		this.RerenderApp = observer
	},

	dispatch(action){
		UpdateProductReducer(this.GetState().UpdateProductPage, action)
		DailyTasksReducer(this.GetState().DailyTasksPage, action)
		this.RerenderApp(this.GetState())
	}
}

export default ProductListPage