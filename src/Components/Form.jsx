import React, {useState, useEffect} from "react";

// Este componente muestra un formulario para agregar o actualizar elementos.
// Si se está editando un ítem, precarga su valor en el input.
// Al enviar, llama a la función addOrUpdateItem con el valor ingresado.
function Form({ agregarOActualizarAlumno, alumnoEditar }) {
  const [nombre, setNombre] = useState("");
  const [asignatura, setAsignatura] = useState("");
  const [promedio, setPromedio] = useState("");

  useEffect(() => {
    if (alumnoEditar) {
      setNombre(alumnoEditar.nombre);
      setAsignatura(alumnoEditar.asignatura);
      setPromedio(alumnoEditar.promedio);
    } else {
      setNombre("");
      setAsignatura("");
      setPromedio("");
    }
  }, [alumnoEditar]);

  const guardar = (e) => {
    e.preventDefault();
    if (nombre && asignatura && promedio) {
      agregarOActualizarAlumno({ nombre, asignatura, promedio });
      setNombre("");
      setAsignatura("");
      setPromedio("");
    }
  };

  return (
    <form onSubmit={guardar}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promedio"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
        min="1"
        max="7"
        step="0.1"
        required
      />
      <button type="submit">{alumnoEditar ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}

export default Form;