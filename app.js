import { capturePokemon, getTotalCaptured } from './local-storage-utils.js';
import { renderThreePokemon } from './pokemon/render-three-pokemon.js';

const button = document.querySelector('#catch');

renderThreePokemon();

button.addEventListener('click', () => {
    const userSelect = document.querySelector('input:checked');
    const PokemonId = userSelect.value;
    capturePokemon(PokemonId);

    const totalCaptured = getTotalCaptured();
    if (totalCaptured === 20) {
        window.location.replace('./results')
    } else {
        renderThreePokemon();
    }
});