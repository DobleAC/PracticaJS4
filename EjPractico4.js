const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeros = [];

const solicitarNumeros = (contador = 0) => {
  if (contador < 6) {
    rl.question(`Introduce el número ${contador + 1}: `, (input) => {
      const numero = parseFloat(input);
      if (!isNaN(numero)) {
        numeros.push(numero);
        solicitarNumeros(contador + 1); 
      } else {
        console.log('Por favor, introduce un número válido.');
        solicitarNumeros(contador); 
      }
    });
  } else {
    numeros.sort((a, b) => a - b);
    console.log('Arreglo ordenado:', numeros);
    rl.close(); 
  }
};

solicitarNumeros();
