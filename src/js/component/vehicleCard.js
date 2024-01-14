import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'

export default function VehiclesCard() {
    const [vehicles, setVehicles] = useState([])
    const { store, actions } = useContext(Context)
    useEffect(() => {
        async function getVehicles() {
            let response = await fetch("https://swapi.dev/api/vehicles")
            let data = await response.json()
            setVehicles(data.results)
        }
        getVehicles()
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
            {vehicles?.map((vehicle, index) => (
                <div className="card" style={{ minWidth: "18rem" }} key={index}>
                    <img src="https://media.timeout.com/images/105863223/image.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <button style={{
                            background: "transparent",
                            border: "none",
                            outline: "none",
                        }} onClick={(e) => handleFavorites(vehicle.name)}>❤️</button>
                        <Link to={"vehicle-description/" + (index + 1)} className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
