import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function GameDetails() {

    const { id } = useParams();

    const [gameDetails, setGameDetails] = useState({
        title: "test",
        description: "description of the test",
        players: 4,
        categories: "categories"
    });

    async function fetchGame() {
        try {
        const url = `http://localhost:3000/api/games/${id}`
        const response = await fetch(url, { method: "GET" });
        const data = await response.json(); // extract JSON from response
        setGameDetails(data);
        console.log(data);
        } catch (error) {
        console.log("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchGame();
    }, [id]);

    function ola() {
        console.log(gameDetails);
    }

    return (
        <div>
            <h2> {gameDetails.title} </h2>
            <span> {gameDetails.description} </span>
            <span onClick={ola}> Players: {gameDetails.playersQuantity} </span>
            <span> Categories: {gameDetails.categories} </span>
        </div>
    );
}