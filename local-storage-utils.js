import { findById } from './utils.js';

export function getDex() {
    const stringyDex = localStorage.getItem('DEX');
    if (!stringyDex) {
        return [];
    }
    const dex = JSON.parse(stringyDex);
    return dex;
}

export function setDex(newDex) {
    const stringyDex = JSON.stringify(newDex);
    localStorage.setItem('DEX', stringyDex);
}

export function capturePokemon(selectedPokemonId) {
    const dex = getDex();
    const matchingPokemon = findById(dex, selectedPokemonId);
    matchingPokemon.captured++;
    setDex(dex);
}

export function encounterPokemon(PokemonId) {
    const dex = getDex();
    const matchingPokemon = findById(dex, PokemonId);
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newItem = {
            id: PokemonId,
            captured: 0,
            encountered: 1
        };
        dex.push(newItem);
    }
    setDex(dex);
}

export function getTotalCaptured() {
    let total = 0;
    const pokedex = getDex();

    for (let poke of pokedex) {
        total += poke.captured
    }
    return total;
}