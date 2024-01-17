// Funciones sin parámetros ni valor de retorno y por declaración
function Greeting(): void {
   console.info("Hello Javascript");
}
Greeting();

// Funciones con parámetros y sin valor de retorno y por declaración
function GreetingUser(name: string): void {
   console.log(`Hello ${name}`);
}
GreetingUser("Alicia");

// Funciones con valor de retorno y parámetros
function SumOfNumbers(x: number, y: number, ...rest: number[]): number {
   return rest.reduce((count, current) => count + current, 0) + (x + y);
}

console.log(SumOfNumbers(1, 2, 3, 4, 5, 7));

// Funciones expresadas sin valor de retorno ni parámetros
// Usamos un array global para que las funciones puedan usarlo
const Fruits: string[] = ["Apple", "Pear", "Grapes", "Cherry", "Blueberry", "Strawberry"];

const ShowFruitList = function (): void {
   Fruits.forEach((fruit) => {
      console.log(fruit);
   });
};
ShowFruitList();

const FindFruit = function (fruit: string): void {
    Fruits.forEach((currentFruit) => {
        if (currentFruit === fruit) {
            console.log("La manzana si existe!");
            return;
        }
    });
};

FindFruit("Apple");

// Closure
function miFuncion(): Function {
    let contador = 0;

    function incrementar() {
        contador++;
        return contador;
    }

    return incrementar;
}

const incremento = miFuncion();

console.log(incremento()); // 1
console.log(incremento()); // 2

/* DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue unas convenciones que debes respetar para que el código se entienda.
 **/

const Challenge = (str1: string, str2: string): number | string => {
   for (let i = 1; i <= 100; i++) {
      (i % 3 === 0 && i % 5 === 0) ? console.log(str1 + str2)
         : (i % 3 === 0) ? console.log(str1)
            : (i % 5 === 0) ? console.log(str2)
               : console.log(i);
   }
   return 100; // Retornando 100, ya que imprime 100 números
};

Challenge("Fizz", "Buzz");
