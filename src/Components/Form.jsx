import React, {useState, useEffect} from "react";

// Este componente muestra un formulario para agregar o actualizar elementos.
// Si se está editando un ítem, precarga su valor en el input.
// Al enviar, llama a la función addOrUpdateItem con el valor ingresado.
function Form({ addOrUpdateItem, itemToEdit }){
    const [inputValue, setInputValue]= useState('');

    useEffect(()=>{
        if (itemToEdit){
            setInputValue(itemToEdit.value);
        }else{
            setInputValue('');
        }
    },[itemToEdit]);
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            addOrUpdateItem(inputValue);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={(e)=>
                setInputValue(e.target.value)}
                />
                <button type="submit">{itemToEdit ?
                'Actualizar':'Agregar'}</button>
        </form>
    );
}

export default Form;