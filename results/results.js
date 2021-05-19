import { mungeNames, mungeCaptured } from '../data-utils.js';
import { getDex, setDex } from '../local-storage-utils.js';

let ctx = document.getElementById('myChart').getContext('2d');
const resetButton = document.querySelector('#reset-game');

const pokemon = getDex();
console.log(pokemon);
const pokemonNames = mungeNames(pokemon);
console.log(pokemonNames);
const capturedData = mungeCaptured(pokemon);
console.log(capturedData);

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonNames,
        datasets: [{
            label: 'Number of catches for each Pokemon',
            data: capturedData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

resetButton.addEventListener('click', () => {
    window.location.replace('../');
    setDex([]);
});