import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';

import authOperations from '../../redux/auth/authOperations';
import isLoading  from '../../redux/loading/loadingSelector';

import FormControl from '../FormControl/FormControl'
import Button from "../shared/button/Button"
import loginSchema from '../../utils/schemas/LoginSchema';
import styles from "./LoginForm.module.css"


const LoginForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading);
    const login = useCallback(
        (values, { resetForm }) => {
            const { login, password, } = values;
            const normalizedLogin = login.toLowerCase()
            dispatch(authOperations.getLogin({ login:normalizedLogin, password}));
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
            onSubmit={login}
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
