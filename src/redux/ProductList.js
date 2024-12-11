
 let ProductListPage = {

	_state: {
		
	},

	SetState(state){
		this._state = state
	},

	RerenderApp() {},

	_addProduct() {
		let newproduct = {
			Product: this.State.ProductListPage.newValue.Product,
			Price: this.State.ProductListPage.newValue.Price,
			Date: this.State.ProductListPage.newValue.Date,
			Count: this.State.ProductListPage.newValue.Count,
			Shop: this.State.ProductListPage.newValue.Shop,
			Type: this.State.ProductListPage.newValue.Type,
		}
		this.State.ProductListPage.ProductList.push(newproduct)
		this.State.ProductListPage.newValue.Type = ''
		this.State.ProductListPage.newValue.Price = ''
		this.State.ProductListPage.newValue.Product = ''
		this.State.ProductListPage.newValue.Shop = ''
		this.State.ProductListPage.newValue.Date = new Date().toISOString().split('T')[0]
		this.State.ProductListPage.newValue.Count = '1'
		this.RerenderApp(this.State)
	},

	_UpdateProduct(val)  {
		this.State.ProductListPage.newValue.Product = val
		this.RerenderApp(this.State)
    },

	_UpdatePrice(val) {
		this.State.ProductListPage.newValue.Price = val
		this.RerenderApp(this.State)
    },

	_UpdateDate(val) {
		this.State.ProductListPage.newValue.Date = val
		this.RerenderApp(this.State)
    },

	_UpdateCount(val)  {
		this.State.ProductListPage.newValue.Count = val
		this.RerenderApp(this.State)
    },
	
	_UpdateShop(val) {
		this.State.ProductListPage.newValue.Shop = val
		this.RerenderApp(this.State)
    },

	_UpdateType(val) {
		debugger
		this.State.ProductListPage.newValue.Type = val
		this.RerenderApp(this.State)
    },

	SetSubscribe(observer) {
		debugger
		this.RerenderApp = observer
	}
}

export default ProductListPage