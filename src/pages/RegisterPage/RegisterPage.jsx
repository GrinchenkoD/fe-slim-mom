
import { useSelector } from 'react-redux';

import isLoading from '../../redux/loading/loadingSelector';

import AuthThumb from '../../components/AuthThumb/AuthThumb'
import Container from '../../components/Container/Container';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';


const RegisterPage = () => {
  const loading = useSelector(isLoading);

    return (
        <>
            <AuthThumb>
                <Header />
                <Container>
                    <RegisterForm />
                </Container>
            </AuthThumb>
            {loading && <Spinner />}

        </>
    );
};

export default RegisterPage
