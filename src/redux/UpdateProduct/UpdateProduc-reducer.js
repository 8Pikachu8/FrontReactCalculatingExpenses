import {
	AddType,
	UpdateProduct,
	UpdatePrice,
	UpdateDate,
	UpdateCount,
	UpdateShop,
	UpdateType,
} from './UpdPageCreateActions'

let addProduct = (state) => {
    const newProduct = {
        Type: state.newValue.Type,
        Price: state.newValue.Price,
        Product: state.newValue.Product,
        Date: state.newValue.Date,
        Count: state.newValue.Count,
        Shop: state.newValue.Shop,
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

let UpdateProductF = (val, state) => {
    return {
        ...state,
        newValue: {
            ...state.newValue,
            Product: val, // Создаём новый объект
        },
    };
};

let UpdatePriceF = (val, state) => {
    return {
        ...state,
        newValue: {
            ...state.newValue,
            Price: val,
        },
    };
};

let UpdateDateF = (val, state) => {
    return {
        ...state,
        newValue: {
            ...state.newValue,
            Date: val,
        },
    };
};

let UpdateCountF = (val, state) => {
    return {
        ...state,
        newValue: {
            ...state.newValue,
            Count: val,
        },
    };
};

let UpdateShopF = (val, state) => {
    return {
        ...state,
        newValue: {
            ...state.newValue,
            Shop: val,
        },
    };
};

let UpdateTypeF = (val, state) => {
    return {
        ...state,
        newValue: {
            ...state.newValue,
            Type: val,
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
		}
export const UpdateProductReducer = (state = defState, action) =>{
    switch (action.type) {
        case AddType:
            return addProduct(state); // Возвращаем новое состояние
        case UpdateProduct:
            return UpdateProductF(action.val, state); // Возвращаем новое состояние
        case UpdatePrice:
            return UpdatePriceF(action.val, state); // Возвращаем новое состояние
        case UpdateDate:
            return UpdateDateF(action.val, state); // Возвращаем новое состояние
        case UpdateCount:
            return UpdateCountF(action.val, state); // Возвращаем новое состояние
        case UpdateShop:
            return UpdateShopF(action.val, state); // Возвращаем новое состояние
        case UpdateType:
            return UpdateTypeF(action.val, state); // Возвращаем новое состояние
        default:
            return state;
    }
}