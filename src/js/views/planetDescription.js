import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

export default function PlanetDescription() {
    const { id } = useParams()
    const [planet, setPlanet] = useState([])

    useEffect(() => {
        async function getPlanet(){
            let response = await fetch("https://swapi.dev/api/planets/" + id)
            let data = await response.json()
            setPlanet(data)
        }
        getPlanet()
    },[])

  return (
    <div className='container mx-auto text-center'>
        <h1>{planet.name}</h1>
        <h3>Rotation Period: {planet.rotation_period}</h3>
        <h3>Orbital Period: {planet.orbital_period}</h3>
        <h3>Diameter: {planet.diameter}</h3>
        <h3>Climate: {planet.climate}</h3>
        <h3>Gravity: {planet.gravity}</h3>
    </div>
  )
}
