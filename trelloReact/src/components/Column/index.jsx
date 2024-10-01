import React from "react";
import classes from "./Column.module.css"

export function Column({ children }) {
    return (
        <div className={`${classes.column} column`} >
            {children}
        </div>
    );
}