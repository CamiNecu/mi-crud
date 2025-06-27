import React from "react";

// Muestra un alumno con sus datos y botones de editar/eliminar
function Item({ alumno, eliminarAlumno, editarAlumno }) {
  return (
    <li>
      <strong>{alumno.nombre}</strong> | {alumno.asignatura} | Promedio: {alumno.promedio} | Escala: <em>{alumno.escala}</em>
      <button onClick={() => editarAlumno(alumno)}>Editar</button>
      <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
    </li>
  );
}

export default Item;