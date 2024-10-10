import React, {useState} from "react";
import { Button } from "../Button";

export function ModalCreateGame({ isActive, onClose, postGame }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [playersQuantity, setPlayersQuantity] = useState(0);
    const [categories, setCategories] = useState("");

    // Creating Game
    function createGame() {
        const newGame = { title: title,
                    description: description,
                    players: playersQuantity,
                    categories: categories
                };
        postGame(newGame);

        cleanCloseModal();
    }

    function cleanCloseModal() {
        setTitle("");
        setDescription("");
        setPlayersQuantity(0);
        setCategories("");

        onClose();
    }

    return (
        <>
        { isActive && 
        <div className={`modal ${isActive ? "is-active" : ""}`}>
            <div className="modal-background" onClick={onClose}> </div>
            <div className="modal-content box">
                <h3>Información del juego:</h3>

                {/* Title */}
                <div className="box">
                    <label> Title </label>
                    <input
                        className="input"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="box">
                    <label> Description </label>
                    <input
                        className="input"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Players Quantity */}
                <div className="box">
                    <label> Players quantity </label>
                    <input
                        className="input"
                        type="number"
                        value={playersQuantity}
                        onChange={(e) => setPlayersQuantity(e.target.value)}
                        />
                </div>

                {/* Categories */}
                <div className="box">
                    <label> Categories </label>
                    <input
                        className="input"
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    />
                </div>

                {/* Botones */}
                <div className="buttons-container">
                    <Button buttonType={"Aceptar"} onClick={() => createGame()} label={"Aceptar"}></Button>
                    <Button buttonType={"Cancelar"} onClick={cleanCloseModal} label={"Cancelar"} ></Button>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div> }
        </>
    )
}