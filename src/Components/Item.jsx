import React from "react";

// Muestra un alumno con sus datos y botones de editar/eliminar
function Item({ alumno, eliminarAlumno, editarAlumno }) {
  return (
    <li>
      <div>
        Nombre: {alumno.nombre} — Asignatura: {alumno.asignatura} <br />
        Promedio: {alumno.promedio} | Escala: <em>{alumno.escala}</em>
      </div>
      <div>
        <button onClick={() => editarAlumno(alumno)}>Editar</button>
        <button onClick={() => eliminarAlumno(alumno.id)} style={{ marginLeft: '10px' }}>Eliminar</button>
      </div>
    </li>
  );
}

export default Item;