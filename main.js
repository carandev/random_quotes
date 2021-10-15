import './style.css'

const $button = document.querySelector('#button');
const $quote = document.querySelector('#quote');
const quotes = [
  'Piensa en el hoy y no mueras por esperar el mañana',
  'Espera de las personas lo que tú les ofreces',
  'Hola mis amigos'
]

$button.addEventListener('click', () => $quote.innerHTML = quotes[parseInt(Math.random()*quotes.length)]);
