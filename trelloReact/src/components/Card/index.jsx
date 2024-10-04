import React, {useState} from "react";
import classes from "./Card.module.css"
import { Modal2 } from "../Modal2"

export function Card({ id, titulo, descripcion, prioridad, asignado, fecha, estado }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className={`${classes.Card} card`} onClick={openModal} >
            <header className="header">
                <span> { prioridad } </span>
                <p className="title"> { titulo }</p>
            </header>
            <div className="card-content">
                <div className="content">
                    { descripcion }
                </div>
            </div>
            <footer className="card-footer">
                <span className="card-footer-item"> { asignado } </span>
                <span className="card-footer-item"> { fecha } </span>
            </footer>
        </div>

        <Modal2 isActive={isModalOpen} onClose={closeModal} 
            Id={id}
            Titulo={titulo} 
            Descripcion={descripcion}
            Prioridad={prioridad}
            Asignado={asignado}
            Fecha={fecha}
            Estado={estado}
            ></Modal2>
        </>
        
    );
}