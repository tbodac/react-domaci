import React from "react";

export default function Search({ onSearch }) {
	return (
		<div className="input-card">
			<h1>Cocktail time</h1>
			<input
				type="text"
				onKeyDown={onSearch}
				placeholder="What drink do you have in mind?"
			/>
		</div>
	)
}

