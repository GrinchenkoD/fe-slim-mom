import Calculator from '../../components/Calculator/Calculator';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DailyCalories from '../../components/ModalDailyCalories/ModalDailyCalories';

import productsOperations from '../../redux/products/productsOperations';
import modalActions from '../../redux/modal/modalActions';
import isModalOpenSelector from '../../redux/modal/modalSelector';
import isLoading from '../../redux/loading/loadingSelector';
import Header from '../../components/Header/Header';
import HomePageBackground from "../../components/HomePageBackground/HomePageBackground"

const homeCalcTitle = 'Просчитай свою суточную норму калорий прямо сейчас';

const HomePage = () => {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [forbidenCategories, setForbidenCategories] = useState([]);
  const isModalOpen = useSelector(isModalOpenSelector);
  const loading = useSelector(isLoading);

  const history = useHistory();

  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.modalOpen());
  };

  const onCloseModal = () => {
    dispatch(modalActions.modalClose());
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(productsOperations.dailyRatePublic(values)).then(data => {
      console.log(data);
      setDailyCalories(data?.dailyCalories);
      setForbidenCategories(data?.forbidenCategories);
    });
    onOpenModal();
    resetForm();
  };
  const handleClickStartDiet = () => {
    onCloseModal();
    history.push('/registration');
  };

  return (
    
       <HomePageBackground>
      <Header/>
      <Calculator title={homeCalcTitle} onSubmit={onSubmit} />
      {isModalOpen && !loading && (
        <Modal>
          <DailyCalories
            dailyCalories={dailyCalories}
            forbidenCategories={forbidenCategories}
            handleClickStartDiet={handleClickStartDiet}
          />
        </Modal>
      )}
    </HomePageBackground>
  );
};

export default HomePage;
