import React from "react";
import { useForm } from "react-hook-form";
import authCSS from "./Auth.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = (props) => {
    return (
        <div className={authCSS.listProducts}>
            <h2>Авторизация</h2>
            {props.state.AuthPage.id?<Navigate to = {`/profile/${props.state.AuthPage.id}`}/>:<LoginForm LogInFunc = {props.LogInFunc} />}
        </div>
    );
};

function LoginForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
		props.LogInFunc(data.login, data.password).then((response) => {
                // Перенаправление на профиль после успешного входа\
                navigate("/profile/"+response.id);
            })
            .catch((err) => {
                console.error("Ошибка входа:", err);
            });
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={authCSS.form}>
            <div className={authCSS.inputGroup}>
                <label>Логин:</label>
                <input
                    type="text"
                    {...register("login", { required: "Поле обязательно для заполнения" })}
                />
                {errors.login && <p className={authCSS.errorMessage}>{errors.login.message}</p>}
            </div>

            <div className={authCSS.inputGroup}>
                <label>Пароль:</label>
                <input
                    type="password"
                    {...register("password", { required: "Поле обязательно для заполнения" })}
                />
                {errors.password && <p className={authCSS.errorMessage}>{errors.password.message}</p>}
            </div>

            <button type="submit" className={authCSS.submitButton}>Отправить</button>
        </form>
    );
}

export default Auth;
