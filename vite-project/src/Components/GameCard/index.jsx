import React from "react";
import { Button } from "../Button";
import "./GameCard.css"

export function GameCard({ id, title, description, playersQuantity, categories, deleteFunction }) {

    return (
        <div className="card">
            <div className="card-content">
                <h2 className="header subtitle" > {title} </h2>
                <Button className="card-button" label={"Details"}  />
                <Button className="card-button" label={"Delete"} onClick={() => deleteFunction(id)}/>
            </div>
        </div>
    );
}