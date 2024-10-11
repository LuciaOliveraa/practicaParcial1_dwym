import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GameDetails.css"
import { Button } from "../../Components/Button";

export function GameDetails() {

    // Getting game details
    const { id } = useParams();

    const [gameDetails, setGameDetails] = useState([{
        title: "test",
        description: "description of the test",
        players: 4,
        categories: "categories"
    }]);

    async function fetchGame() {
        try {
        const url = `http://localhost:3000/api/games/${id}`
        const response = await fetch(url, { method: "GET" });
        const data = await response.json(); // extract JSON from response
        setGameDetails(data);
        console.log("hola", data);
        } catch (error) {
        console.log("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchGame();
    }, [id]);

    const game = gameDetails[0];

    // Going back /home
    const navigate = useNavigate();

    const backHome = () => {
        navigate("/");
    }

    return (
        <div className="div-game-details">
            <Button className={"home-button"} label={"< Home"} onClick={backHome} />
            <h2 className="title is-3"> {game.title} </h2>
            <span> {game.description} </span>
            <span> Players: {game.players} </span>
            <span> Categories: {game.categories} </span>
        </div>
    );
}