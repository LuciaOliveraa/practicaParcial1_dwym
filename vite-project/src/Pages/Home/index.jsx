import { React, useState, useEffect } from "react";
import { Button } from "../../Components/Button";
import { ModalCreateGame } from "../../Components/ModalCreateGame"
import { GameScroller } from "../../Components/GameScroller";
import styles from "./Home.module.css";
import { SearchBar } from "../../Components/SearchBar";

export function Home({ games, postGame, deleteGame }) {

    // Managing create game modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Managing filtered games
    const [filteredGames, setFilteredGames] = useState(games);


    return (
        <div className={`${styles.home}`}>
            {/* Header */}
            <h1 className="title is-1"> Colimpiadas </h1>
            <div className={`${styles.buttonDiv}`}>
                <SearchBar className={styles.searchBar} data={games} setFilteredGames={setFilteredGames}></SearchBar>
                <Button label={"Add game"} onClick={openModal} />
            </div>

            <GameScroller games={filteredGames} deleteFunction={deleteGame} ></GameScroller>

            {/* Modal add game */}
            <ModalCreateGame isActive={isModalOpen} onClose={closeModal} postGame={postGame} > </ModalCreateGame>
        </div>
    );
}