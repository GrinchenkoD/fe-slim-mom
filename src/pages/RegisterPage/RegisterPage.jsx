
import AuthThumb from '../../components/AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import RegisterForm from '../../components/RegisterForm/RegisterForm';


const RegisterPage = () => {
    return (
        <AuthThumb>
            <Container>
                <RegisterForm />
            </Container>
        </AuthThumb>
    );
};

export default RegisterPage
