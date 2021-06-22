import Container from '../Container/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import styles from './Calculator.module.css';
import calculatorSchema from './CalculatorSchema';
import FormControl from '../FormControl/FormControl';

const Calculator = ({title, onSubmit}) => {
  return (
    <>
      {/* <Container> */}
        <h1 className={styles.title}>
          {title}
        </h1>
        <Formik
          initialValues={{
            height: '',
            age: '',
            currentWeight: '',
            desiredWeight: '',
            bloodType: '',
          }}
          validationSchema={calculatorSchema}
          onSubmit={onSubmit}
        // onSubmit={(values, { resetForm }) => {
        //   console.log(values);
        //   resetForm();
        // }}
        >
          <Form className={styles.form}>
            {/* <Field
              className={styles.inputName}
              name="height"
              type="number"
              placeholder="Рост *"
              />
              <ErrorMessage
              className={styles.errorName}
              component="span"
              name="height"
            />
            
            <Field
              className={styles.inputName}
              name="age"
              type="number"
              placeholder="Возраст *"
              />
              <ErrorMessage
              className={styles.errorName}
              component="span"
              name="age"
            />
            <Field
              className={styles.inputName}
              name="currentWeight"
              type="number"
              placeholder="Текущий вес *"
              />
              <ErrorMessage
              className={styles.errorName}
              component="span"
              name="currentWeight"
            />
            <Field
              className={styles.inputName}
              name="desiredWeight"
              type="number"
              placeholder="Желаемый вес *"
              />
              <ErrorMessage
              className={styles.errorName}
              component="span"
              name="desiredWeight"
            /> */}
            <FormControl
              label="Рост"
              name="height"
              type="number"
              id="height"
              placeholder="Рост"
            />
            <FormControl
              label="Возраст"
              name="age"
              type="number"
              id="age"
              placeholder="Возраст"
            />
            <FormControl
              label="Текущий вес"
              name="currentWeight"
              type="number"
              id="currentWeight"
              placeholder="Текущий вес"
            />
            <FormControl
              label="Желаемый вес"
              name="desiredWeight"
              type="number"
              id="desiredWeight"
              placeholder="Желаемый вес"
            />
            <div className={styles.radioTitle} id="my-radio-group">
              Группа крови *
            </div>
            <div
              role="group"
              className={styles.wrapper}
              aria-labelledby="my-radio-group"
            >
              <Field
                id="1"
                className={styles.radioButton}
                type="radio"
                name="bloodType"
                value="1"
              />
              <label htmlFor="1" className={styles.radioButtonLabel}>
                1
              </label>
              <Field
                id="2"
                className={styles.radioButton}
                type="radio"
                name="bloodType"
                value="2"
              />

              <label htmlFor="2" className={styles.radioButtonLabel}>
                2
              </label>
              <Field
                id="3"
                className={styles.radioButton}
                type="radio"
                name="bloodType"
                value="3"
              />
              <label htmlFor="3" className={styles.radioButtonLabel}>
                3
              </label>
              <Field
                id="4"
                className={styles.radioButton}
                type="radio"
                name="bloodType"
                value="4"
              />
              <label htmlFor="4" className={styles.radioButtonLabel}>
                4
              </label>
            </div>
            <button className={styles.button} type="submit">Похудеть</button>
          </Form>
        </Formik>
      {/* </Container> */}
    </>
  );
};

export default Calculator;
