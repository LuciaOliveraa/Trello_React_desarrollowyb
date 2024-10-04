import React from "react";
import { Card } from "../Card";

export function ColumnContent({ title, tasks }) {
    
    return (
        <>
            <label> {title} </label>
            <ul> {tasks.map((task) => (
                <li><Card 
                id={task.id}
                titulo={task.titulo}
                descripcion={task.descripcion}
                prioridad={task.prioridad}
                asignado={task.asignado}
                fecha={task.fecha}
                estado={title}
            ></Card></li>))} </ul>
        </>
    );
}