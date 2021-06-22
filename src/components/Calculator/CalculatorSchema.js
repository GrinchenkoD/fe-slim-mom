import * as Yup from 'yup';

const calculatorSchema = Yup.object().shape({
  height: Yup.number()
    .required('Обязательное поле')
    .positive('Не может быть меньше 0')
    .integer(),
  age: Yup.number()
    .required('Обязательное поле')
    .positive('Не может быть меньше 0')
    .integer(),
  currentWeight: Yup.number()
    .required('Обязательное поле')
    .positive('Не может быть меньше 0')
    .integer(),
  desiredWeight: Yup.number()
    .required('Обязательное поле')
    .positive('Не может быть меньше 0')
    .integer(),
  bloodType: Yup.string().required('Обязательное поле'),
});
export default calculatorSchema;
