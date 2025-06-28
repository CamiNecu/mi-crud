import React, {useState, useEffect } from 'react'
import Form from './Components/Form';
import List from './Components/List';
import './App.css'

// Maneja el estado de los ítems y el ítem en edición.
// Usa useEffect para cargar y guardar datos en localStorage.
function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [primeraCarga, setPrimeraCarga] = useState(true);

  useEffect(() => {
    const guardados =localStorage.getItem("alumnos");
    if(guardados){
      try {
        const datos =JSON.parse(guardados);
        if (Array.isArray(datos)){
          setAlumnos(datos);
        }
      } catch (e) {
        console.error("Error al leer localStorage:",e);
      }
    }
    setPrimeraCarga(false);
  }, []);

  useEffect(() => {
    if (!primeraCarga) {
      localStorage.setItem("alumnos", JSON.stringify(alumnos));
    }
    console.log("Alumnos guardados en localStorage:", alumnos);
  }, [alumnos, primeraCarga]);

  const calcularEscala = (promedio) => {
    if (promedio < 4) return "Deficiente";
    if (promedio < 5.6) return "Con mejora";
    if (promedio < 6.5) return "Buen trabajo";
    return "Destacado";
  };

  const guardarAlumno = (datos) => {
    const promedioNum = parseFloat(datos.promedio);
    if (isNaN(promedioNum) || promedioNum < 1 || promedioNum > 7) return;

    const escala = calcularEscala(promedioNum);
    if (editando) {
      setAlumnos(
        alumnos.map((a) =>
          a.id === editando.id ? { ...datos, id: a.id, escala } : a
        )
      );
      setEditando(null);
    } else {
      setAlumnos([...alumnos, { ...datos, id: Date.now(), escala }]);
    }
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h1>Evaluación de Alumnos</h1>
      <Form agregarOActualizarAlumno={guardarAlumno} alumnoEditar={editando} />
      <List alumnos={alumnos} eliminarAlumno={eliminarAlumno} editarAlumno={setEditando} />
    </div>
  );
}

export default App
