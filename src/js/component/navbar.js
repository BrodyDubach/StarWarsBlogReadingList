import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown ">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites?.map((favorite, index) => (
							<li className="dropdown-item" key={index}>{favorite}<span role="button" onClick={() => actions.removeFavorites(favorite)}>     🗑️</span></li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
