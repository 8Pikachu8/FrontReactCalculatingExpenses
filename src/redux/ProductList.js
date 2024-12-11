
 let ProductListPage = {

	_state: {
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

	SetState(state){
		
		this._state = state
	},

	GetState(){
		return this._state
	},

	RerenderApp() {},

	addProduct() {
		debugger
		let newproduct = {
			Product: this.GetState().newValue.Product,
			Price: this.GetState().newValue.Price,
			Date: this.GetState().newValue.Date,
			Count: this.GetState().newValue.Count,
			Shop: this.GetState().newValue.Shop,
			Type: this.GetState().newValue.Type,
		}
		this.GetState().ProductList.push(newproduct)
		this.GetState().newValue.Type = ''
		this.GetState().newValue.Price = ''
		this.GetState().newValue.Product = ''
		this.GetState().newValue.Shop = ''
		this.GetState().newValue.Date = new Date().toISOString().split('T')[0]
		this.GetState().newValue.Count = '1'
		this.RerenderApp(this.GetState())
	},

	UpdateProduct(val)  {
		this.GetState().newValue.Product = val
		this.RerenderApp(this.GetState())
    },

	UpdatePrice(val) {
		this.GetState().newValue.Price = val
		this.RerenderApp(this.GetState())
    },

	UpdateDate(val) {
		this.GetState().newValue.Date = val
		this.RerenderApp(this.GetState())
    },

	UpdateCount(val)  {
		this.GetState().newValue.Count = val
		this.RerenderApp(this.GetState())
    },
	
	UpdateShop(val) {
		this.GetState().newValue.Shop = val
		this.RerenderApp(this.GetState())
    },

	UpdateType(val) {
		this.GetState().newValue.Type = val
		this.RerenderApp(this.GetState())
    },

	SetSubscribe(observer) {
		this.RerenderApp = observer
	}
}

export default ProductListPage