import React, {useState} from 'react';
import ProtoTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            //console.log('Submit hecho');
            setCategories(cats => [inputValue, ...cats])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>            
            <input
                type="text"         
                value={inputValue}       
                onChange={ handleChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: ProtoTypes.func.isRequired
}
