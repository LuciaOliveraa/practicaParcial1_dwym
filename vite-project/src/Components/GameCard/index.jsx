import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import "./GameCard.css"
import { GameDetails } from "../../Pages/GameDetails";

export function GameCard({ id, title, deleteFunction }) {

    const navigate = useNavigate();

    const openDetails = ( id ) => {
        navigate(`/games/${id}`);
    }
    return (
        <div className="card" >
            <div className="card-content">
                <h2 className="header subtitle" > {title} </h2>
                <Button className="card-button" label={"Details"} onClick={() => openDetails(id)} />
                <Button className="card-button" label={"Delete"} onClick={() => deleteFunction(id)}/>
            </div>
        </div>
    );
}