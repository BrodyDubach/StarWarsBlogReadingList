import React from "react";
import CharacterCard from "../component/characterCard";
import PlanetCard from "../component/planetCard";
import VehiclesCard from "../component/vehicleCard";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<CharacterCard />
		<PlanetCard />
		<VehiclesCard/>
	</div>
);
