import React from "react";
import { useState, useEffect } from "react";

export function SearchBar({ data, setFilteredGames }) {

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (searchValue === "") {
            setFilteredGames(data);
        } else {
            let filtredData = data.filter((game) =>
                game.title.toLowerCase().includes(searchValue.toLowerCase()));
            setFilteredGames(filtredData);
        }
    }, [searchValue]);

    return (
        <div className="control">
            <input className="input" type="text" placeholder="Search here..." onChange={(e) => {setSearchValue(e.target.value)}}></input>
        </div>
    );
}