let ProductList = [
	{ Type: 'Продукт', Price: '133,6 р.' },
	{ Type: 'Продйкт', Price: '13243,6 р.' },
	{ Type: 'Деталь', Price: '1143,6 р.' },
	{ Type: 'Продукт', Price: '4143,6 р.' },
]

let ListFiltrs = [
	{ NameElement: 'Фильтр', Id: '1' },
	{ NameElement: 'Второй фильтр', Id: '2' },
	{ NameElement: 'Третий фильтр', Id: '3' },
	{ NameElement: 'Третий фильтр', Id: '3' },
]

let state = {
	ProductListPage: { ProductList: ProductList, ListFiltrs: ListFiltrs },
}
export default state;