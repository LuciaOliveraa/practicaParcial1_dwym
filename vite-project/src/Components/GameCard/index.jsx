import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import styles from "./GameCard.module.css";

export function GameCard({ id, title, deleteFunction }) {

    const navigate = useNavigate();

    const openDetails = ( id ) => {
        navigate(`/games/${id}`);
    }
    return (
        <div className={`${styles.card} card`} >
            <div className={`${styles.card} card-content`}>
                <h2 className={`${styles.header} header subtitle`} > {title} </h2>
                <button className={`${styles.cardButton} button`} label={"Details"} onClick={() => openDetails(id)}> Details </button>
                <button className={`${styles.cardButton} button`} label={"Delete"} onClick={() => deleteFunction(id)}> Delete </button>
            </div>
        </div>
    );
}