export let AddProductActionCreator = () => ( {type: AddType,}
    
)
export let UpdateProductActionCreator = (val) => ( {
        type: UpdateProduct,
        val: val
    }
)
export let UpdatePriceActionCreator = (val) => ( {
        type: UpdatePrice,
        val: val
    }
)
export let UpdateDateActionCreator = (val) => ( {
        type: UpdateDate,
        val: val
    }
)
export let UpdateCountActionCreator = (val) => ( {
        type: UpdateCount,
        val: val
    }
)
export let UpdateShopActionCreator = (val) => ({
        type: UpdateShop,
        val: val
    }
)
export let UpdateTypeActionCreator = (val) => ({
        type: UpdateType,
        val: val
    }
)

export const AddType = 'Add-Product'

export const UpdateProduct = 'Update-Product'

export const UpdatePrice = 'Update-Price'

export const UpdateDate = 'Update-Date'

export const UpdateCount = 'Update-Countt'

export const UpdateShop = 'Update-Shop'

export const UpdateType = 'Update-Type'