import React from "react";

// Muestra un alumno con sus datos y botones de editar/eliminar
function Item({ alumno, eliminarAlumno, editarAlumno }) {
  return (
    <li>
      {alumno.nombre} | {alumno.asignatura} | Promedio: {alumno.promedio} | Escala: {alumno.escala}
      <button onClick={() => editarAlumno(alumno)}>Editar</button>
      <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
    </li>
  );
}

export default Item;