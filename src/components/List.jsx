import React from "react";

export default function List({ drinksList }) {
	return (
		<div>
			{drinksList.map((drinkInfo) => {
				const {
					strDrink,
					strDrinkThumb,
					strAlcoholic,
					strInstructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5 } = drinkInfo;

				return (
					<section className="drink-card">
						<div className='title'>Name: {strDrink} </div>
						<img src={strDrinkThumb} className='image' alt={strDrink} />
						<div className="type">Drink type: {strAlcoholic}</div>
						<div className="instructions">Instructions: {strInstructions}</div>
						<ul className="ingredients">
							Ingredients:
							<li>{strIngredient1}</li>
							<li>{strIngredient2}</li>
							<li>{strIngredient3}</li>
							<li>{strIngredient4}</li>
							<li>{strIngredient5}</li>
						</ul>
					</section>
				)
			})}
		</div>
	)
}