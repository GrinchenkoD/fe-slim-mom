import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../icons/symbol-defs.svg';
import styles from './AddProductForm.module.css';
import useDebounce from '../../hooks/useDebounce';
import operations from '../../redux/products/productsOperations';
import getDate from '../../redux/date/dateSelector';
import { useDevice } from '../../hooks/useDevice';
import customStyles from './selectStyles';

const AddProductForm = () => {
  const { isTabletAndDesktop, isMobileDevice } = useDevice();

  const [searchQuerry, setSearchQuerry] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const debouncedSearchQuerry = useDebounce(searchQuerry, 500);
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  const [options, setOptions] = useState([
    // { value: 'chocolate', label: 'Chocolate' },
    // { value: 'strawberry', label: 'Strawberry' },
    // { value: 'vanilla', label: 'Vanilla' },
  ]);
  
    useEffect(() => {
      if (debouncedSearchQuerry) {
        axios
          .get(`products/${debouncedSearchQuerry}`)
          .then(({ data }) =>
            data.products.map(product => ({ value: product, label: product })),
          )
          .then(data => setOptions(data));
      }
    }, [debouncedSearchQuerry]);


  const postNewProduct = e => {
    e.preventDefault();
    console.log(selectedOption);
    // const newProduct = {
    //   title: selectedOption.value,
    //   weight,
    //   date,
    // };
    // dispatch(operations.addUserProduct(newProduct));
  };


  const handleNumberValue = ({ target }) => {
    const regexp = /^[0-9\b]+$/;
    const { value } = target;

    if (value === '' || regexp.test(value)) {
      setWeight(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      {isTabletAndDesktop && (
        <form onSubmit={postNewProduct} className={styles.form}>
          <Select
            required
            value={selectedOption}
            onChange={handleChange}
            options={options}
            inputValue={searchQuerry}
            onInputChange={setSearchQuerry}
            styles={customStyles}
            placeholder="Введите название продукта"
          />
          <input
            className={styles.test}
            type="text"
            required
            value={selectedOption}
          />
          <input
            className={styles.weight}
            name="weight"
            value={weight}
            min="1"
            components={{
              IndicatorSeparator: () => null,
            }}
            onChange={handleNumberValue}
            type="input"
            placeholder="Граммы"
          />
          <button className={styles.button} type="submit">
            <svg className={styles.svg}>
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </button>
        </form>
      )}
      {isMobileDevice && (
        <button className={styles.button} type="submit">
          <svg className={styles.svg}>
            <use href={sprite + '#icon-plus'}></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default AddProductForm;
