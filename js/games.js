import { displayGameDetail, displayGames } from './ui.js';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aca698dademshc6b75bc05e0a217p16e885jsnc4a260154e0c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

class Games {
  async getGames(category = 'mmorpg	') {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const result = await response.json();
    displayGames(result);

    return result;
  }

  async getGameDetails(id) {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const result = await response.json();
    displayGameDetail(result);
    return result;
  }
}

export default Games;
