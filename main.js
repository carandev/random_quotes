import './style.css'

const $button = document.querySelector('#button');
const $quote = document.querySelector('#quote');
const $author = document.querySelector('#author');

const quotes = {
  'Lao Tsé': 'No hay que ir para atrás ni para darse impulso',
  'Mahatma Gandhi': 'No hay caminos para la paz; la paz es el camino',
  'John Lennon': 'Haz el amor y no la guerra ',
  'Charles Baudelaire': 'Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse',
  'Jacinto Benavente': 'Lo peor que hacen los malos es obligarnos a dudar de los buenos',
  'Bob Marley': 'Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos',
  'Confucio': 'Aprende a vivir y sabrás morir bien',
  'Albert Einstein': 'Cada día sabemos más y entendemos menos',
  'Albert Einstein': 'El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad',
  'San Agustín': 'La medida del amor es amar sin medida',
  'Casanova': 'No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira',
  'Albert Einstein': 'Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera',
  'Bob Marley': 'El dinero no puede comprar la vida',
  'Antonio Machado': 'Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar',
  'Platón': 'La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco',
  'Lao Tsé': 'Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida',
  'Giovanni Boccaccio': 'Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada',
  'Abraham Lincoln': 'Ningún hombre es lo bastante bueno para gobernar a otros sin su consentimiento',
  'Mahatma Gandhi': 'Todo lo que se come sin necesidad se roba al estómago de los pobres',
  'Marilyn Monroe': 'Vivir sola es como estar en una fiesta donde nadie te hace caso'
}

const quote_choose = () => {
  let number_choice = parseInt(Math.random()*Object.keys(quotes).length);
  
  $quote.innerHTML = `${Object.values(quotes)[number_choice]}`;

  $author.innerHTML = `${Object.keys(quotes)[number_choice]}`;
}

window.addEventListener('load', quote_choose)
$button.addEventListener('click', quote_choose);
