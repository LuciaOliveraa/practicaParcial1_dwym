import { React, useState, useEffect } from "react";
import { Button } from "../../Components/Button";
import { ModalCreateGame } from "../../Components/ModalCreateGame"
import "./Home.css"
import { GameScroller } from "../../Components/GameScroller";

export function Home({ games, postGame, deleteGame }) {

    // Managing create game modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="home">
            {/* Header */}
            <h1 className="title is-1"> Colimpiadas </h1>
            <div className="button-div">
                <Button label={"Add game"} onClick={openModal} />
            </div>

            <GameScroller games={games} deleteFunction={deleteGame} ></GameScroller>

            {/* Modal add game */}
            <ModalCreateGame isActive={isModalOpen} onClose={closeModal} postGame={postGame} > </ModalCreateGame>
        </div>
    );
}