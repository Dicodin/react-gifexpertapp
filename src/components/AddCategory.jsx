// Iniciando todo con el snnipet "rafc"
import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    // El estado se inicia con "inputValue = ''"
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // Para igualar nuestro estado a lo que escribamos en el input
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // De esta forma si podemos mutar el estado del arreglo que viene "dentro" de la función de nuestro prop "setCategories"
            setCategories(categ => [inputValue, ...categ]);
            // Esta es la función que llamamos de nuestro estado para "limpiar" nuestro input
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>
    )
}

// Validamos que nuestro prop "setCategories" sea del tipo correspondiente "func" y que sea requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
