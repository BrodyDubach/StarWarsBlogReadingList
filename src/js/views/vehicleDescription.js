import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function VehicleDescription() {
    const { id } = useParams()
    const [vehicle, setVehicle] = useState([])

    function transformNumber(originalNumber) {
        const transformations = {
            1: 4,
            2: 6,
            3: 7,
            4: 8,
            5: 14,
            6: 16,
            7: 18,
            8: 19,
            9: 20,
            10: 24
        };
    
        return transformations[originalNumber] || originalNumber;
    }

    let updateId = transformNumber(id)
    console.log(transformNumber(id))

    useEffect(() => {
        async function getVehicle() {
            let response = await fetch("https://swapi.dev/api/vehicles/" + updateId)
            let data = await response.json()
            setVehicle(data)
        }
        getVehicle()
    }, [])

    return (
        <div className='container mx-auto text-center'>
            <h1>{vehicle.name}</h1>
            <h3>Model: {vehicle.model}</h3>
            <h3>Manufacturer: {vehicle.manufacturer}</h3>
            <h3>Cost in Credits: {vehicle.cost_in_credits}</h3>
            <h3>Max Speed: {vehicle.max_atmosphering_speed}</h3>
            <h3>Crew: {vehicle.crew}</h3>
        </div>
    )
}
