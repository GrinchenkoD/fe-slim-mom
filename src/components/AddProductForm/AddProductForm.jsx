import React from 'react';
import Select from 'react-select'
const AddProductForm = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
        <div>
            <form>
                <input type="text"/>
                <Select options={options} />
                <button type="submit"></button>
            </form>
        </div>
    );
};

export default AddProductForm;