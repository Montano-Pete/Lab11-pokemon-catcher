import { capturePokemon } from './local-storage-utils.js';
import { renderThreePokemon } from './pokemon/render-three-pokemon.js';

const button = document.querySelector('#catch');

renderThreePokemon();

button.addEventListener('click', () => {
    const userSelect = document.querySelector('input:checked');
    const PokemonId = userSelect.value;
    capturePokemon(PokemonId);
    renderThreePokemon();
});