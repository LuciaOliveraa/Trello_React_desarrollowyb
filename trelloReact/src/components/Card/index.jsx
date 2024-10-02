import React from "react";
import classes from "./Card.module.css"

export function Card({ titulo, descripcion, prioridad, asignado, fecha, estado }) {

    return (
        <div className={`${classes.Card} card` }>
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
    );
}