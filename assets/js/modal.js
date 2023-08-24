const modalContainer = document.querySelector(".modal-container");
const buttonCloseModal = document.querySelector(".close-modal");

const activeModalClass = "modal-show";
const openModal = () => modalContainer.classList.add(activeModalClass);
const closeModal = () => modalContainer.classList.remove(activeModalClass);

const openDetailPokemon = (pokemonId) => {
  pokeApi.getPokemonDetail(pokemonId).then(createDatailPokemon);
};

function createDatailPokemon(pokemonDetail) {
  modalContainer.innerHTML = `
  <main class="modal ${pokemonDetail.type}">
        <div class="container-button">
          <button class="close-modal ${
            pokemonDetail.type
          }" onClick="closeModal()">x</button>
        </div>
        <img
          src="${pokemonDetail.photo}"
          alt="nome"
        />
        <div class="title">
          <h1>${pokemonDetail.name}</h1>
          <span>${pokemonDetail.number}</span>
        </div>
        <div class="attributes">
          <ul class="listAttributes">
          ${pokemonDetail.stats
            .map(
              (stat) => `<li class="itens">${stat.name}: ${stat.baseStat}</li>`
            )
            .join("")}
          </ul>
        </div>
      </main>
  `;
  openModal();
}
