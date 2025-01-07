import {
	AddType,
} from './UpdPageCreateActions'

let addProduct = (state, action) => {
    const newProduct = {
        Type: action.newProduct.type,
        Price: action.newProduct.price,
        Product: action.newProduct.nameProduct,
        Date: action.newProduct.DateProduct,
        Count: action.newProduct.countProuduct,
        Shop: action.newProduct.shop,
    };

    return {
        ...state,
        ProductList: [...state.ProductList, newProduct], // Создаём новый массив
        newValue: {
            Type: '',
            Price: '',
            Product: '',
            Date: new Date().toISOString().split('T')[0],
            Count: '1',
            Shop: '',
        },
    };
};


let defState = {
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
				{ NameElement: 'Четвертый фильтр', Id: '3' },
			]
		}
export const UpdateProductReducer = (state = defState, action) =>{
    switch (action.type) {
        case AddType:
            return addProduct(state, action); // Возвращаем новое состояние
        
        default:
            return state;
    }
}