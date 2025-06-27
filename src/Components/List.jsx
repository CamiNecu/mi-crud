import React from "react";
import Item from "./Item";

// Este componente recibe una lista de ítems y la recorre con componente Item.
// También pasa las funciones de eliminar y editar a cada ítem individual.
function List({items,deleteItem, editItem}){
    return(
        <ul>
            {items.map((item)=>(
                <Item
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                editItem={editItem}
                />
            ))}
        </ul>
    );
}

export default List;