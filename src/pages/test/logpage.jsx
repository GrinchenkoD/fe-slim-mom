import React from 'react'
import AuthThumb from '../../AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm'


const logpage = () => {
    return (
        <AuthThumb>
            <Container>
                <LoginForm />
            </Container>
        </AuthThumb>
    );
};

export default logpage
