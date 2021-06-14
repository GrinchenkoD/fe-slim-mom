import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useDispatch,useSelector } from 'react-redux';
import sprite from '../../icons/symbol-defs.svg';
import styles from './AddProductForm.module.css';
import useDebounce from '../../hooks/useDebounce';
import operations from '../../redux/products/productsOperations';
import {getPickedDate} from '../../redux/products/productsSelectors'
const AddProductForm = () => {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [weight,setWeight]=useState(0);
  console.log(searchQuerry);
  const [selectedOption, setSelectedOption] = useState(null);
  const debouncedSearchQuerry = useDebounce(searchQuerry, 500);
  const dispatch=useDispatch()
  const date=useSelector(getPickedDate);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const [options, setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]);
  console.log(options);

  const postNewProduct=()=>{
      const newProduct={
          title:selectedOption.value,
          weight,
          date,
      }
      dispatch(operations.addUserProduct(newProduct))

  }
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

  return (
    <div>
      <form>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          inputValue={searchQuerry}
          onInputChange={setSearchQuerry}
        />
        {/* <SelectSearch
        debounce={500}
        value={searchQuerry}
          options={[]}
          getOptions={query => {
            return new Promise((resolve, reject) => {
              axios
                .get(`products/`)
                .then(({ data }) => {
                    resolve(
                        data.map(product => ({
                          value: product,
                          name: product,
                        }))
                      )
                })
                .catch(reject);
          })
        }}
          search
          placeholder="Your favorite drink"
        /> */}
        <input name="weight" value={weight} onChange={({target})=>setWeight(target.value)} type="number" />
        <button className={styles.button} type="submit">
          <svg className={styles.svg}>
            <use href={sprite + '#icon-plus'}></use>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
