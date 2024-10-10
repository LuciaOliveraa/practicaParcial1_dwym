import React from "react";
import { GameCard } from "../GameCard";
import "./GameScroller.css"

export function GameScroller({ games, deleteFunction }) {


    return (
        <div>
            <ul className="game-scroll">
                {games.map((game) => (
                    <li key={game.id}>
                        <GameCard id={game.id}
                            title={game.title} 
                            description={game.description}
                            playersQuantity={game.players}
                            categories={game.categories}
                            deleteFunction={deleteFunction}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}