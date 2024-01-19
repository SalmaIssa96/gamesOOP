import Games from './games.js';
const games = new Games();

window.games = games;

window.onload = () => {
  games.getGames();
};
