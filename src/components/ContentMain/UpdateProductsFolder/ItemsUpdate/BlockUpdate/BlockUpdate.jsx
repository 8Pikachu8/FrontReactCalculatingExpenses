import React from 'react'
import BlockUpdateCSS from './BlockUpdate.module.css'

import { useForm } from 'react-hook-form'


const BlockUpdate = (props) => {

	const onSubmit = (data)=>{
		props.onInsert(data);
	}

	return (
		
		<div className='block'>
			<InsertUpdateForm  onSubmit = {onSubmit}/>
		</div>
	)
}

function InsertUpdateForm(props) {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    
    const onSubmit = (data) => {
        // Вызов переданного onSubmit из родителя
        if (props.onSubmit) {
            props.onSubmit(data);
        }
		reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
				<label htmlFor="type">Тип продукта</label>
				<input
					type="text"
					id="type"
					{...register("type", { required: "Поле обязательно для заполнения" })}
				/>
    		</div>
			<div>
				<label htmlFor="shop">Магазин</label>
				<input
					type="text"
					id="shop"
					{...register("shop", { required: "Поле обязательно для заполнения" })}
				/>
			</div>
			<div>
				<label htmlFor="nameProduct">Название продукта </label>
				<input
					type="text"
					id="nameProduct"
					{...register("nameProduct", { required: "Поле обязательно для заполнения" })}
				/>
			</div>
			<div>
				<label htmlFor="price">Цена </label>
				<input
					type="text"
					id="price"
					{...register("price", { required: "Поле обязательно для заполнения" })}
				/>
			</div>
			<div>
				<label htmlFor="countProuduct">Количество </label>
				<input
					type="text"
					id="countProuduct"
					{...register("countProuduct", { required: "Поле обязательно для заполнения" })}
				/>
			</div>
			<div>
				<label  htmlFor="DateProduct">Дата покупки </label>
				<input
					type="date"
					id="DateProduct"
					{...register("DateProduct", { required: "Поле обязательно для заполнения" })}
				></input>
			</div>
        	<button  type="submit" >Добавить товар</button>
        </form>
    );
}

export default BlockUpdate
