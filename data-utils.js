import pokedex from './pokemon/pokedex.js';
import { findById } from './utils.js';

export function mungeCaptured(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        results.push(poke.captured);
    }
    return results;
}

export function mungeNames(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokedex, poke.id);
        results.push(data.name);
    }
    return results;
}

export function mungeColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokedex, poke.id);
        results.push(data.color_1);
    }
    return results;
}