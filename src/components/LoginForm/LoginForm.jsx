import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import FormControl from '../FormControl/FormControl'
import styles from "./LoginForm.module.css"
import loginSchema from './LoginSchema';
import { useDispatch, useSelector } from 'react-redux';
import getLogin from "../../redux/auth/authOperations"


const LoginForm = () => {
    const dispatch = useDispatch();
    // const loading = useSelector(isLoading);
    const loading = false;  //!подставить селектор
      const login = useCallback(
    values => {
      dispatch(getLogin(values));
    },
    [dispatch],
  );
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={()=>{console.log("СКИДЫЩЬ!!")}} //!подставить операцию
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
                    <button type="submit" disabled={loading} className={styles.acceptBtn}>
                        Готово
          </button>
                </div>
            </Form>
        </Formik>
    );
};

export default LoginForm
