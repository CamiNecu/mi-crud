import React from "react";

// Al hacer clic en "Editar" o "Eliminar", llama a las funciones correspondientes.
function Item({item,deleteItem,editItem}){
    return(
        <li>
            {item.value}
            <button onClick={()=> editItem(item)}>Editar</button>
            <button onClick={()=> deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;