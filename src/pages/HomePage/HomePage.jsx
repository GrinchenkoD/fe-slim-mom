import Calculator from '../../components/Calculator/Calculator';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import productsOperations from '../../redux/products/productsOperations';
import modalActions from '../../redux/modal/modalActions';
import  isModalOpenSelector  from '../../redux/modal/modalSelector';
import isLoading from '../../redux/loading/loadingSelector';




const homeCalcTitle = "Просчитай свою суточную норму калорий прямо сейчас"


const HomePage = () => {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [forbidenCategories, setForbidenCategories] = useState([])
  const isModalOpen = useSelector(isModalOpenSelector)
  const loading = useSelector(isLoading)
  
  const history = useHistory();

  const dispatch = useDispatch()

  const onOpenModal = () => {
    dispatch(modalActions.modalOpen())
    
  }
  
  const onCloseModal = () => {
    dispatch(modalActions.modalClose())
  }

  const onSubmit = (values, { resetForm }) => {
    dispatch(productsOperations.dailyRatePublic(values))
      .then((data) => {
        console.log(data)
        setDailyCalories(data?.dailyCalories);
        setForbidenCategories(data?.forbidenCategories)
        
      })
      onOpenModal()
    resetForm();
  }
  const handleClickStartDiet = () => {
    onCloseModal()
    history.push('/registration')
  }
  


  return (
    <>
    <Calculator title={homeCalcTitle} onSubmit={onSubmit} />
      {isModalOpen && !loading && <Modal
        onClose={onCloseModal}
        dailyCalories={dailyCalories}
        forbidenCategories={forbidenCategories}
handleClickStartDiet={handleClickStartDiet}      
      />}
    </>
  );
  
};

export default HomePage;
