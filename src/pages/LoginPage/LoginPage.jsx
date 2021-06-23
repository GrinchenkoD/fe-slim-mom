import React from 'react'
import { useSelector } from 'react-redux';

import isLoading from '../../redux/loading/loadingSelector';

import AuthThumb from '../../components/AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm'
import Spinner from '../../components/Spinner/Spinner';




const LoginPage = () => {
  const loading = useSelector(isLoading);

    return (
        <>
            <AuthThumb>
                <Header />
                <Container>
                    <LoginForm />
                </Container>
            </AuthThumb>
            {loading && <Spinner />}

        </>
    );
}

export default LoginPage
