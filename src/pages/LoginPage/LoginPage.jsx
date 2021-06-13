import React from 'react'
import AuthThumb from '../../components/AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
    return (
        <AuthThumb>
            <Container>
                <LoginForm />
            </Container>
        </AuthThumb>
    )
}

export default LoginPage
