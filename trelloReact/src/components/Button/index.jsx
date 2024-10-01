import React from "react";
import classes from "./Button.module.css"
import { Modal } from "../Modal";

export function Button({ buttonType, label, onClick }) {

        return (<div>
                <button className={`${buttonType == "Agregar" ? classes.Button : ""} button `} onClick={onClick} > { label } </button>
            </div>);
}