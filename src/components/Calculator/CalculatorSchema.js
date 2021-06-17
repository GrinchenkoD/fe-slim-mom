import * as Yup from 'yup';

const calculatorSchema = Yup.object().shape({
  height: Yup.number().required('Обязательное поле'),
  age: Yup.number().required('Обязательное поле'),
  currentWeight: Yup.number().required('Обязательное поле'),
  desiredWeight: Yup.number().required('Обязательное поле'),
  bloodType: Yup.string().required('Обязательное поле'),
});
export default calculatorSchema;
