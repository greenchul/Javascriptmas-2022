const faveFoods = {
  breakfast: "fried eggs",
  lunch: "McDonalds",
  supper: "KFC",
};

const { breakfast, lunch, supper } = faveFoods;

const mealsSection = document.getElementById("meals");
console.log(meals);
mealsSection.innerHTML = `<p>For breakfast, I only like ${breakfast}. For lunch, I love ${lunch},and for supper I want usually want ${supper}.</p>`;
console.log(mealsSection.innerHTML);
