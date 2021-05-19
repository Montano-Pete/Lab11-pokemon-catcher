// IMPORT MODULES under test here:
import { capturePokemon, encounterPokemon, getDex, setDex } from '../local-storage-utils.js';

const test = QUnit.test;

test('getDex will grab the latest pokedex array and return it', (expect) => {
    //Arrange
    const newPokedex = [{id: 1, captured: 0, encountered: 1}, {id: 2, captured: 0, encountered: 1 }];
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem('DEX', stringyPokedex);
    // Set up your arguments and expectations
    const expected = [{id: 1, captured: 0, encountered: 1}, {id: 2, captured: 0, encountered: 1 }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setDex will set the latest pokedex array and return it', (expect) => {
    //Arrange
    const newPokedex = [{id: 1, captured: 0, encountered: 1}, {id: 2, captured: 0, encountered: 1 }];
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    setDex(newPokedex);

    //Expect
    const stringyPokedex = localStorage.getItem('DEX');
    const expected = JSON.parse(stringyPokedex);
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(newPokedex, expected);
});

test('encounterPokemeon should increment encountered in the array', (expect) => {
    //Arrange
    const newPokedex = [{id: 1, captured: 0, encountered: 1}, {id: 2, captured: 0, encountered: 1 }];
    // Set up your arguments and expectations
    const expected = [{id: 1, captured: 0, encountered: 2}, {id: 2, captured: 0, encountered: 1 }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    setDex(newPokedex);
    encounterPokemon(1);
    const stringyPokedex = localStorage.getItem('DEX')
    const actual = JSON.parse(stringyPokedex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('capturePokemeon should increment captured in the array', (expect) => {
    //Arrange
    const newPokedex = [{id: 1, captured: 0, encountered: 1}, {id: 2, captured: 0, encountered: 1 }];
    // Set up your arguments and expectations
    const expected = [{id: 1, captured: 1, encountered: 1}, {id: 2, captured: 0, encountered: 1 }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    setDex(newPokedex);
    capturePokemon(1);
    const stringyPokedex = localStorage.getItem('DEX')
    const actual = JSON.parse(stringyPokedex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});