import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const AddProductForm = () => {
  const [searchQuerry, setSearchQuerry] = useState('');
  console.log(searchQuerry);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const [options,setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]);
console.log(options);
  useEffect(() => {
              axios
                .get(`products/${searchQuerry}`)
                .then(({ data }) => data.products.map(product => ({value: product,name: product})))
                .then(data=>setOptions(data));
  }, [searchQuerry]);

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
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductForm;
