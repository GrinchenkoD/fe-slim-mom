import { Formik, Form, Field } from 'formik';

import styles from './Calculator.module.css';
import calculatorSchema from '../../utils/schemas/CalculatorSchema';
import FormControl from '../FormControl/FormControl';

const Calculator = ({title, onSubmit}) => {
  return (
    <>
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
        >
          <Form className={styles.form}>
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
    </>
  );
};

export default Calculator;
