import React from "react";
import listProductsCSS from "./ListProducts.module.css";
import BlockList from "./BlocksElemets/BlockList";
import BlockFiltr from "./BlocksElemets/BlockFiltr";

const ListProducts = (props) => {
	debugger
    return (
			<div className={listProductsCSS.listProducts} onClick={props.toggleNavVisibility }>
				<BlockList ProductList={props.ProductListPage.ProductList} />
				<BlockFiltr
					ListFiltrs={props.ProductListPage.ListFiltrs}
					Type='Элемент фильтрации'
				/>
			</div>
		)
}

export default ListProducts;