import { useState, useEffect } from 'react'
import './App.css'
import { Home } from './Pages/Home'
import { GameDetails } from './Pages/GameDetails';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  // Loading games.
  const [games, setGames] = useState([]);

  async function fetchGames() {
      try {
      const url = "http://localhost:3000/api/games"
      const response = await fetch(url, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      setGames(data);
      } catch (error) {
      console.log("Error fetching data: ", error);
      }
  }

  useEffect(() => {
    fetchGames();
  }, [])

  // Adding new game.
  async function postGame(game) {
      try {
          const url = "http://localhost:3000/api/games"
          const response = await fetch(url, { 
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(game) });
          const data = await response.json(); // extract JSON from response
          setGames(data);
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
  }

  // Deleting game.
  async function deleteGame(id) {
      try {
        const url = `http://localhost:3000/api/games/${id}`
        await fetch(url, { 
          method: "DELETE",
          headers: {
            "Content-Type":"application/json"
          },
        });
        console.log("entre a delete");
        console.log(games);
        console.log(id);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
  }

  const deleteHandler = (id) => {
    deleteGame(id);
    setGames([...games.filter(game => game.id !== id)]);
  }

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home games={games} postGame={postGame} deleteGame={deleteHandler}> </Home>} />
          <Route path="/games/:id" element={<GameDetails />}/>
        </Routes>
      </div>
    </Router>
      
  )
}

export default App
