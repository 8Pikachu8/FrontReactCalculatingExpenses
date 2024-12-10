import { rerenderApp } from "./Render"


let ProductList = [
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
]

let ListFiltrs = [
	{ NameElement: 'Фильтр', Id: '1' },
	{ NameElement: 'Второй фильтр', Id: '2' },
	{ NameElement: 'Третий фильтр', Id: '3' },
	{ NameElement: 'Третий фильтр', Id: '3' },
]

let newValue = {
	Type: 'Деталь',
	Price: '133,6 р.',
	Product: 'Творожанная масса',
	Date: new Date().toISOString().split('T')[0],
	Count: '1',
	Shop: 'Пятерочка',
}

let state = {
	ProductListPage: {
		ProductList: ProductList,
		ListFiltrs: ListFiltrs,
		newValue: newValue
	},
}
window.state = state;
window.newValue = newValue;
export let addProduct = (Product, price, Date, Count, Shop, type) => {
	let newproduct = {
		Product: Product,
		Price: price,
		Date: Date,
		Count: Count,
		Shop: Shop,
		Type: type
	}
	state.ProductListPage.ProductList.push(newproduct)
	rerenderApp(state)
}

export let UpdateProduct = val => {state.ProductListPage.newValue.Product = val
	rerenderApp(state)
}

export let UpdatePrice = val => {state.ProductListPage.newValue.Price = val
	rerenderApp(state)
}

export let UpdateDate = val => {debugger; state.ProductListPage.newValue.Date = val
	rerenderApp(state)
}

export let UpdateCount = val => {state.ProductListPage.newValue.Count = val
	rerenderApp(state)
}

export let UpdateShop = val => {state.ProductListPage.newValue.Shop = val
	rerenderApp(state)
}

export let UpdateType = val => {state.ProductListPage.newValue.Type = val
	rerenderApp(state)
}

export default state;