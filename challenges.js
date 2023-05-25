// Desafio 1 - Crie a função compareTrue
console.log(`Desafio 1
`);

const girafa = true;
const elefante = true;
const macaco = false;

const compareTrue = (animal1, animal2) => (animal1 && animal2) ? true : false

console.log(compareTrue(girafa, macaco));

console.log(`
---------------
`);
 

// Desafio 2 - Crie a função splitSentence
console.log(`Desafio 2
`);

const splitSentence = (frase) => frase.split(" ")

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

console.log(`
---------------
`);

// Desafio 3 - Crie a função concatName

console.log(`Desafio 3
`);

const concatName = (nome) => `${nome[nome.length - 1]}, ${nome[0]}`

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

console.log(`
---------------
`);


// Desafio 4 - Crie a função footballPoints
console.log(`Desafio 4
`);

const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

console.log(`
---------------
`);

// Desafio 5 - Crie a função highestCount

console.log(`Desafio 5
`);

let highestNum = 0;


const highestCount = (numeros) => {
  let highestNum = Math.max.apply(null, numeros)
  let counter = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === highestNum) {
      counter = counter += 1;
    }
  }
  return counter
} 


console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));



console.log(`
---------------
`);

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

console.log(`Desafio 6
`);

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {
  const calcTriangleArea = (base, height) => (base * height) / 2;
  const calcRectangleArea = (base, height) => (base * height);

  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  }
  else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`
  }
  else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`
  }
}

console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'triângulo'));
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado'));

console.log(`
---------------
`);

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  
  if ((Math.abs(cat1 - mouse)) < Math.abs(cat2 - mouse)) {
    return `cat1`
  }
  else if (Math.abs((cat2 - mouse)) < Math.abs(cat1 - mouse)) {
    return `cat2`
  }
  else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge'
  } 
  } 
  

console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 0, 2));



// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      result.push("fizz");
    } else if (array[index] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));


// Desafio 9 - Crie a função encode e a função decode




// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
