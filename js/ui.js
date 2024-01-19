export const displayGames = (result) => {
  let cartona = '';
  const gamesName = result.map((game) => {
    cartona += `
    <div class="col-md-3">
    <div class="card h-100" onclick="games.getGameDetails(${game.id})">
      <img src="${game.thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
        <div class="card-title d-flex justify-content-between align-items-center">
          <h3 class="game-title small">${game.title}</h3>
          <p class=" small badge text-bg-primary p-2 ">Free</p>
        </div>
        <p class="card-text fs-6 text-center text-secondary">${game.short_description.slice(
          0,
          70
        )}...</p>
      </div>
      <footer class=" card-footer w-100 d-flex justify-content-between  align-items-center">
      <p class="foot-card-label mb-0 pb-0 badge badge-color"> ${game.genre}</p>
      <p class="foot-card-label mb-0 pb-0 badge  badge-color"> 
      ${game.platform}
        </p>
      </footer>
      </div>
    </div>`;
  });
  document.querySelector('.row').innerHTML = cartona;
};

export const displayGameDetail = (result) => {
  const cartona = `     <div class="col-md-4">
    <img class="w-100" src="${result.thumbnail}" alt="" id="imgGame" />
  </div>

  <div class="col-md-8">
    <h3>Title: ${result.title}</h3>
    <p>Category: <span class="badge text-bg-info"> ${result.genre}</span> </p>
    <p>Platform: <span class="badge text-bg-info"> ${result.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info"> ${result.status}</span> </p>
    <p class="small">${result.description}</p>
    <a class="btn btn-outline-warning" target="_blank"
      href="${result.game_url}">Show Game</a>
  </div>`;

  document.querySelector('.details-row').innerHTML = cartona;

  document.querySelector('.games-section').classList.remove('d-block');
  document.querySelector('.games-section').classList.add('d-none');

  document.querySelector('.games-details').classList.remove('d-none');
  document.querySelector('.games-details').classList.add('d-block');
};

document.querySelector('#btnClose').addEventListener('click', () => {
  document.querySelector('.games-section').classList.remove('d-none');
  document.querySelector('.games-section').classList.add('d-block');

  document.querySelector('.games-details').classList.remove('d-block');
  document.querySelector('.games-details').classList.add('d-none');
});
