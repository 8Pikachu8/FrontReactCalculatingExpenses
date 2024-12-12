import React from "react";
import listProductsCSS from "./BlockWeeks.module.css";
import navCSS from './../../../Nav.module.css'
import { NavLink } from "react-router-dom";

const BlockWeeks = (props) => {
	let product = props.store.listWeeks.map(product => (
		
            <NavLink to=''>
                        <div>День номер {product.Id}</div>
                        <div>{product.Day}</div>
            </NavLink>
        
	))
    return (
			<div className={listProductsCSS.listProducts}>
				{product}
			</div>
		)
}

export default BlockWeeks;