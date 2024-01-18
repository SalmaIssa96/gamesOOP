const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aca698dademshc6b75bc05e0a217p16e885jsnc4a260154e0c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


export const getGamesByCategory = async (category='mmorpg')=>{
  console.log(category)
	const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
	const result = await response.json();
return result
}



