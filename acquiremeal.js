const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

//Event Listener.
get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php.')
		.then((res) => res.json())
		.then((res) => {
			createMeal(res.meals[0]);
		})
		.catch((e) => {
			console.warn(e);
		});
});

//createMeal Function
const createMeal = (meal) => {
	const ingredients = [];

	//Get all ingredients from object up to 20.
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure{i}`]}`);
		} else {
			//Stop if no more ingredients
			break;
		}
	}

	const newInnerHTML = ``;

	meal_container.innerHTML = newInnerHTML;
};
