import React from 'react'
import AuthThumb from '../../components/AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm'
import Header from '../../components/Header/Header';

const LoginPage = () => {
    return (
        <AuthThumb>
             <Header/>
            <Container>
                <LoginForm />
            </Container>
        </AuthThumb>
    )
}

export default LoginPage
