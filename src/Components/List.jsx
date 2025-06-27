import React from "react";
import Item from "./Item";

// Lista de alumnos
function List({ alumnos, eliminarAlumno, editarAlumno }) {
  return (
    <ul>
      {alumnos.map((alumno) => (
        <Item
          key={alumno.id}
          alumno={alumno}
          eliminarAlumno={eliminarAlumno}
          editarAlumno={editarAlumno}
        />
      ))}
    </ul>
  );
}

export default List;