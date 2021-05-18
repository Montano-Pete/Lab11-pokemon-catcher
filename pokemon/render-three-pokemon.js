import pokedex from '../pokemon/pokedex.js';

import { encounterPokemon } from "../local-storage-utils.js";

const radio1 = document.querySelector('#pokemon-1');
const radio2 = document.querySelector('#pokemon-2');
const radio3 = document.querySelector('#pokemon-3');
const img1 = document.querySelector('#pokemon-img-1');
const img2 = document.querySelector('#pokemon-img-2');
const img3 = document.querySelector('#pokemon-img-3');

export function renderThreePokemon() {
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();

    while (
        pokemon1.id === pokemon2.id ||
        pokemon1.id === pokemon3.id ||
        pokemon2.id === pokemon3.id
    ) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
    }

    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);

    img1.src = `./assets/${pokemon1.image}`;
    img2.src = `./assets/${pokemon2.image}`;
    img3.src = `./assets/${pokemon3.image}`;

    radio1.value = pokemon1.id;
    radio2.value = pokemon2.id;
    radio3.value = pokemon3.id;
};

function getRandomPokemon() {
    const randomizedPokedex = Math.floor(Math.random() * pokedex.length);
    const randomPokemon = pokedex[randomizedPokedex];
    return randomPokemon;
};