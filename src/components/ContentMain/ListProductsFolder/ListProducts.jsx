import React from "react";
import listProductsCSS from "./ListProducts.module.css";
import BlockList from "./BlocksElemets/BlockList";
import BlockFiltr from "./BlocksElemets/BlockFiltr";

const ListProducts = () => {
    return <div className={listProductsCSS.listProducts}>
        <BlockList />
        <BlockFiltr Type = 'Элемент фильтрации' />
    </div>
}

export default ListProducts;