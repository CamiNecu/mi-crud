import React from "react";
import Item from "./Item";

// Lista de alumnos
function List({ alumnos, eliminarAlumno, editarAlumno }) {
  return (
    <ul>
      {alumnos.map((al) => (
        <Item
          key={al.id}
          alumno={al}
          eliminarAlumno={eliminarAlumno}
          editarAlumno={editarAlumno}
        />
      ))}
    </ul>
  );
}

export default List;