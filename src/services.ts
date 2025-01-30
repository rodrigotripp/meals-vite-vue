export const getCategories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_MEALS_API}/categories.php`,
      {
        method: "GET",
      }
    )
    const res = await response.json();
    return res.categories
  } catch (error) {
    console.error(error);
  }
}

export const getFilterByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_MEALS_API}/filter.php?c=${category}`,
      {
        method: "GET",
      }
    )
    const res = await response.json();
    return res.meals
  } catch (error) {
    console.error(error);
  }
}

export const getMealsByLetter = async (letter: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_MEALS_API}/search.php?f=${letter}`,
      {
        method: "GET",
      }
    )
    const res = await response.json();
    return res.meals
  } catch (error) {
    console.error(error);
  }
}

export const searchByMeals = async (word: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_MEALS_API}/search.php?s=${word}`,
      {
        method: "GET",
      }
    )
    console.log('response')
    const res = await response.json();
    return res.meals
  } catch (error) {
    console.error(error);
  }
}
