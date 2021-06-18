
import AuthThumb from '../../components/AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Header from '../../components/Header/Header';



const RegisterPage = () => {
    return (
        <AuthThumb>
            <Header/>
            <Container>
                <RegisterForm />
            </Container>
        </AuthThumb>
    );
};

export default RegisterPage
