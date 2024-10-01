import React from "react";
import classes from "./Title.module.css"

export function Title({ title }) {
    return (
        <h1 className={classes.Title}> { title } </h1>
    );
}