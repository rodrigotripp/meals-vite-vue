const _api_ = import.meta.env.VITE_APP_MEALS_API ?? 'https://www.themealdb.com/api/json/v1/1'

export const getCategories = async () => {
  try {
    const response = await fetch(`${_api_}/categories.php`, {
      method: 'GET',
    })
    const res = await response.json()
    return res.categories
  } catch (error) {
    console.error(error)
  }
}

export const getFilterByCategory = async (category: string) => {
  try {
    const response = await fetch(`${_api_}/filter.php?c=${category}`, {
      method: 'GET',
    })
    const res = await response.json()
    return res.meals
  } catch (error) {
    console.error(error)
  }
}

export const getMealsByLetter = async (letter: string | string[]) => {
  try {
    const response = await fetch(`${_api_}/search.php?f=${letter}`, {
      method: 'GET',
    })
    const res = await response.json()
    return res.meals
  } catch (error) {
    console.error(error)
  }
}

export const searchByMeals = async (word: string) => {
  try {
    const response = await fetch(`${_api_}/search.php?s=${word}`, {
      method: 'GET',
    })
    const res = await response.json()
    return res.meals
  } catch (error) {
    console.error(error)
  }
}

export const mealById = async (id: string) => {
  try {
    const response = await fetch(`${_api_}/lookup.php?i=${id}`, {
      method: 'GET',
    })
    const res = await response.json()
    return res.meals[0]
  } catch (error) {
    console.error(error)
  }
}
