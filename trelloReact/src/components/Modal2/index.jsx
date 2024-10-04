import React, {useState} from "react";
import { Button } from "../Button";

export function Modal2({ isActive, onClose, Id, Titulo, Descripcion, Prioridad, Fecha, Asignado, Estado }) {
    const [titulo, setTitulo] = useState(Titulo);
    const [descripcion, setDescripcion] = useState(Descripcion);
    const [prioridad, setPrioridad] = useState(Prioridad);
    const [fecha, setFecha] = useState(Fecha);
    const [asignado, setAsignado] = useState(Asignado);
    const [estado, setEstado] = useState(Estado);

    async function updateTask() {
        const task = {
            titulo: titulo,
            descripcion: descripcion,
            prioridad: prioridad,
            fecha: fecha,
            asignado: asignado,
            estado: estado
        }

        try {
            const url = `http://localhost:3000/tasks/${Id}`
            const response = await fetch(url, { 
              method: "PUT",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(task)
            });
      
            const data = await response.json(); // extract JSON from response
            onClose();
          } catch (error) {
            console.log("Error fetching data: ", error);
          }
    }

    async function deleteTask() {
        try {
          const url = `http://localhost:3000/tasks/${Id}`
          const response = await fetch(url, { 
            method: "DELETE",
            body: JSON.stringify()
          });

          const data = await response.json(); // extract JSON from response
          onClose();
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
      }
    
    return (
        <>
        { isActive && 
        <div className={`modal ${isActive ? "is-active" : ""}`}>
            <div className="modal-background" onClick={onClose}> </div>
            <div className="modal-content box">
                <h3>Información de la tarea:</h3>

                {/* Título */}
                <div className="box">
                    <label>Título</label>
                    <input
                        className="input"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                {/* Descripción */}
                <div className="box">
                    <label>Descripción</label>
                    <input
                        className="input"
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                {/* Asignado */}
                <div className="box">
                    <label>Asignado</label>
                    <div className="select">
                        <select
                        value={asignado}
                        onChange={(e) => setAsignado(e.target.value)}
                        >
                        <option value="Persona">Persona</option>
                        <option value="Alien">Alien</option>
                        <option value="Cucaracha">Cucaracha</option>
                        <option value="Pingüino">Pingüino</option>
                        </select>
                    </div>
                </div>

                {/* Estado */}
                <div className="box">
                    <label>Estado</label>
                    <div className="select">
                        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option>Backlog</option>
                        <option>To do</option>
                        <option>In progress</option>
                        <option>Blocked</option>
                        <option>Done</option>
                        </select>
                    </div>
                </div>

                {/* Prioridad */}
                <div className="box">
                    <label>Prioridad</label>
                    <div className="select">
                        <select
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                        >
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                        </select>
                    </div>
                </div>

                {/* Fecha límite */}
                <div className="box">
                    <label>Fecha límite</label>
                    <input
                        type="date"
                        className="input"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                {/* Botones */}
                <div className="buttons-container">
                    <Button buttonType={"Actualizar"} onClick={updateTask} label={"Actualizar"}></Button>
                    <Button buttonType={"Eliminar"} onClick={deleteTask} label={"Eliminar"}></Button>
                    <Button buttonType={"Cancelar"} onClick={onClose} label={"Cancelar"} ></Button>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div> }
        </>
    )
}