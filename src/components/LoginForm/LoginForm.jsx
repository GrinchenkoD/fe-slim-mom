import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import FormControl from '../FormControl/FormControl'
import styles from "./LoginForm.module.css"
import loginSchema from './LoginSchema';
import { useDispatch, useSelector } from 'react-redux';
import {getLogin} from "../../redux/auth/authOperations"
import Button from "../../shared/button/Button"
import { Link } from 'react-router-dom';
import isLoading  from '../../redux/loading/loadingSelector';


const LoginForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const login = useCallback(
        (values, {resetForm}) => {
            dispatch(getLogin(values));
            resetForm()
    },
    [dispatch],
  );
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Вход</h3>

        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={login} //!подставить операцию
        >
            <Form>
                <FormControl
                    label="Логин"
                    name="login"
                    type="text"
                    id="login"
                    placeholder="Логин"
                />

                <FormControl
                    label="Пароль"
                    name="password"
                    type="text"
                    id="password"
                    placeholder="Пароль"
                />
                <div className={styles.btnThumb}>
                    <Button disabled={loading}>Вход</Button>
                    <Link to="/registration" className={styles.regBtn}><Button view="btnReg">Регистрация</Button></Link>
                    
                </div>
            </Form>
            </Formik>
            </div>
    );
};

export default LoginForm
