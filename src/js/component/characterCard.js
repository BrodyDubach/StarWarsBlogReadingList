import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'

export default function CharacterCard() {
    const [characters, setCharacters] = useState([])
    const { store, actions } = useContext(Context)
    useEffect(() => {
        async function getCharacters() {
            let response = await fetch("https://swapi.dev/api/people")
            let data = await response.json()
            setCharacters(data.results)
        }
        getCharacters()
    }, [])

    function handleFavorites(item) {
        if (store.favorites.includes(item)) {
            actions.removeFavorites(item)
        }
        else {
            actions.addFavorites(item)
        }
    }
    return (
        <div className='d-flex col-10 mx-auto overflow-auto mt-5'>
            {characters?.map((character, index) => (
                <div className="card" style={{ minWidth: "18rem" }} key={index}>
                    <img src="https://media.timeout.com/images/105863223/image.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <button style={{
                            background: "transparent",
                            border: "none",
                            outline: "none",
                        }} onClick={(e) => handleFavorites(character.name)}>❤️</button>
                        <Link to={"character-description/" + (index + 1)} className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
