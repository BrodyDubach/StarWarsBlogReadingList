import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

export default function CharacterDescription() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        async function getCharacter(){
            let response = await fetch("https://swapi.dev/api/people/" + id)
            let data = await response.json()
            setCharacter(data)
        }
        getCharacter()
    },[])

  return (
    <div className='container mx-auto text-center'>
        <h1>{character.name}</h1>
        <h3>Height: {character.height}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Eye Color: {character.eye_color}</h3>
        <h3>Hair Color: {character.hair_color}</h3>
        <h3>Mass: {character.mass}</h3>
    </div>
  )
}
