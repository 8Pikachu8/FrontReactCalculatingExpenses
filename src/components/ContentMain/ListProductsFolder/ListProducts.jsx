import React from "react";
import listProductsCSS from "./ListProducts.module.css";
import BlockList from "./BlocksElemets/BlockList";
import BlockFiltr from "./BlocksElemets/BlockFiltr";

const ListProducts = (props) => {
    return (
			<div className={listProductsCSS.listProducts} onClick={props.toggleNavVisibility }>
				<BlockList ProductList={props.ProductListPage.UpdateProductPage.ProductList} />
				<BlockFiltr
					ListFiltrs={props.ProductListPage.UpdateProductPage.ListFiltrs}
					Type='Элемент фильтрации'
				/>
			</div>
		)
}

export default ListProducts;