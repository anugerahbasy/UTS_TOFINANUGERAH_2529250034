const mealContainer = document.getElementById("mealContainer");
const loading = document.getElementById("loading");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Event
searchBtn.addEventListener("click", searchMeal);

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchMeal();
});

// Load awal
window.addEventListener("DOMContentLoaded", loadDefaultMeals);

async function loadDefaultMeals() {
  try {
    const res = await fetch("https://gist.githubusercontent.com/nurrachmat/f954f3aa979ab2a05daacae722418e72/raw/2cf704f88aa1a34255c281772abea2b88e121b76/harga-emas-maret2026.json"
    );
    const data = await res.json();
    if (data.meals) displayMeals(data.meals);
  } catch (err) {
    console.error(err);
  }
}

async function searchMeal() {
  const query = searchInput.value.trim();

  if (!query) {
    alert("Masukkan nama makanan!");
    return;
  }
}