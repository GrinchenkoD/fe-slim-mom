import React from 'react'
import AuthThumb from '../../AuthThumb/AuthThumb'
import LoginForm from '../../components/LoginForm/LoginForm'


const logpage = () => {
    return (
        <AuthThumb>
            <h3 style={{ color: "#FC842D" }}>Вход</h3>
            <LoginForm />
        </AuthThumb>
    )
};

export default logpage
