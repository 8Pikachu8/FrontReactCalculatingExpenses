import {
	AddType,
	UpdateProduct,
	UpdatePrice,
	UpdateDate,
	UpdateCount,
	UpdateShop,
	UpdateType,
} from './UpdPageCreateActions'

let addProduct= (state)=> {
		debugger
		let newproduct = {
			Product: state.newValue.Product,
			Price: state.newValue.Price,
			Date: state.newValue.Date,
			Count: state.newValue.Count,
			Shop: state.newValue.Shop,
			Type: state.newValue.Type,
		}
		state.ProductList.push(newproduct)
		state.newValue.Type = ''
		state.newValue.Price = ''
		state.newValue.Product = ''
		state.newValue.Shop = ''
		state.newValue.Date = new Date().toISOString().split('T')[0]
		state.newValue.Count = '1'
	}

let	UpdateProductF = (val, state)=>  {
		state.newValue.Product = val
    }

let	UpdatePriceF = (val, state)=>  {
	state.newValue.Price = val
}

let	UpdateDateF = (val, state)=>  {
		state.newValue.Date = val
    }

let	UpdateCountF = (val, state)=>   {
		state.newValue.Count = val
    }
	
let	UpdateShopF = (val, state)=>  {
		state.newValue.Shop = val
    }

let	UpdateTypeF = (val, state) =>  {
		state.newValue.Type = val
}

export const UpdateProductReducer = (state, action) =>{
    switch(action.type){
        case AddType:
            addProduct(state)
            break
        case UpdateProduct:
            UpdateProductF(action.val, state)
            break
        case UpdatePrice:
            UpdatePriceF(action.val, state)
            break
        case UpdateDate:
            UpdateDateF(action.val, state)
            break
        case UpdateCount:
            UpdateCountF(action.val, state)
            break
        case UpdateShop:
            UpdateShopF(action.val, state)
            break
        case UpdateType:
            UpdateTypeF(action.val, state)
            break
        default:
            break
    }
}