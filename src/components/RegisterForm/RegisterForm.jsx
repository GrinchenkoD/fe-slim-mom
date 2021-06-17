import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import FormControl from '../FormControl/FormControl'
import styles from "./RegisterForm.module.css"
import registerSchema from './RegisterSchema';
import { useDispatch, useSelector } from 'react-redux';
import {getRegister} from "../../redux/auth/authOperations"
import Button from "../../shared/button/Button"
import { Link } from 'react-router-dom';
import isLoading  from '../../redux/loading/loadingSelector';

const RegisterForm = () => {
      const dispatch = useDispatch();
    const loading = useSelector(isLoading);
      const register = useCallback(
          values => {
      dispatch(getRegister(values));
    },
    [dispatch],
  );
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Регистрация</h3>

            <Formik
                initialValues={{
                    name:'',
                    login: '',
                    password: '',
                }}
                validationSchema={registerSchema}
                onSubmit={register} //!подставить операцию
            >
                <Form>
                    <FormControl
                        label="Имя"
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Имя"
                    />

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
                        <Link to="/login" className={styles.regBtn}><Button view="btnReg">Вход</Button></Link>
                        <Button disabled={loading}>Регистрация</Button>
                    
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default RegisterForm
