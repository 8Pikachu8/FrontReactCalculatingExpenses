import React from "react";
import listProductsCSS from "./ListProducts.module.css";
import BlockList from "./BlocksElemets/BlockList";
import BlockFiltr from "./BlocksElemets/BlockFiltr";

const ListProducts = (props) => {
    return (
			<div className={listProductsCSS.listProducts}>
				<BlockList ProductList={props.store.ProductList} />
				<BlockFiltr
					ListFiltrs={props.store.ListFiltrs}
					Type='Элемент фильтрации'
				/>
			</div>
		)
}

export default ListProducts;