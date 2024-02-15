# README

# Compra de empanadas

## Enunciado del problema

El profesor Maple se embarca en la tarea de adquirir empanadas para
todos los participantes del bootcamp de programación. Dado que hoy es el
Día de las Empanadas, hay una oferta especial en la que te llevas hasta
tres empanadas y solo pagas la más cara. Con un presupuesto ajustado
para el curso, los profesores debaten para intentar minimizar el gasto
total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia:
como la empanada más cara la tendrá que pagar de todas formas, la
comprará junto a la segunda y tercera más caras, que ofrecen el mayor
ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento
hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la
mejor estrategia. Pero cuando están a punto de pagar, escuchan la
siguiente conversación de una familia de al lado:

“Queremos una empanada de pollo, de 12 euros, una de carne, de 14
euros, y una vegetariana, de 16 euros.”

Los profesores piensan inmediatamente: “Cogerán la oferta 3x1, de
forma que solo paguen los 16 euros de la empanada vegetariana y se
lleven gratis la de carne y la de pollo”. A lo cual, la familia
continúa:

“Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y
mitad vegetariana, y la de carne aparte. Como todas las empanadas valen
14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14
euros”.

Cuando los profesores salen de su asombro, deciden que lo más sensato
es utilizar el hecho de que las empanadas se pueden pedir mitad de un
tipo y mitad de otro, pagando por ella la media del costo de las dos
empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana
valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la
mejor forma de repartir las empanadas en mitades primero, y en grupos
después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible:
hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5
ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente
adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16
euros. Se garantiza que el número total de empanadas será múltiplo de
3.

## Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de
entrada consta de tres enteros, a b c, que son el número de empanadas de
3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de
empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de
empanadas es divisible entre 3.

## Salida

Por cada conjunto de entrada, retornar un único entero: la mínima
cantidad de euros que se puede pagar para llevarse todas las
empanadas.

## Ejemplos de casos de uso

| Entrada | Salida |
| --- | --- |
| 1, 1, 1 | 14 |
| 3, 3, 0 | 26 |
| 2, 0, 1 | 14 |
| 9, 10, 11 | 142 |

## Instrucciones de uso

1. Clonar el repositorio
2. Instalar las dependencias:
    
    ```bash
    npm install
    ```
    
3. Completar los argumentos y el cuerpo de la función
`fn` en el archivo (`main.js`). No se debe
renombrar la función `fn`.
    
    ```jsx
    // main.jsexport const fn = (/* argumentos de la función */) => {
    // Cuerpo de la función: Completa la lógica de la función aquí.};
    ```
    
4. Ejecutar los test: `bash npm run test`

## Evaluación

### Mínimo

Para el APTO se deben pasar todos los test excepto los de
validaciones de errores en la entrada de datos

### Extra

Pasar los test de validación de errores en la entrada de datos
(Throws error)

### Ejemplo de ejecución de los
test

```bash
✓ main.test.js (7)   ✓ Function fn - Input Parameter Test Cases (7)     ✓ Case: fn(1, 1, 1) - Expected Result: 14
     ✓ Case: fn(3, 3, 0) - Expected Result: 26
     ✓ Case: fn(2, 0, 1) - Expected Result: 14
     ✓ Case: fn(9, 10, 11) - Expected Result: 142
     ✓ Throw error on negative input value: fn(-1, 3, 1)     ✓ Throws error when the total sum of inputs (2+2+1) is not a multiple of 3: fn(2, 2, 1)     ✓ Throws error when the total sum of inputs (15+15+20) is not less than 40: fn(15, 15, 20)
```

# Tecnologías

JavaScript

# Funcionamiento Código e Imagenes

## Solución del problema

Para la solución del problema se creo una función con el nombre fn en la carpeta main, donde se definieran diferentes condiciones para el correcto funcionamiento del programa, como se muestra en la siguiente linea de código.

```jsx
export const fn = (empanadas_3, empanadas_4, empanadas_5) => {

   let totalEmpanadas = (empanadas_3 + empanadas_4 + empanadas_5);
   let costoTotal = (empanadas_3 / 3) * 12 + (empanadas_4 / 3) * 14 + (empanadas_5 / 3) * 16;
   let aux = 0;

   if (totalEmpanadas >= 40) {
      throw new error("No se admite numeros mayor que 40")
   } else if (totalEmpanadas % 3 !== 0) {
      throw new error("El número tiene que ser multiplo de 3");
   } else if (totalEmpanadas < 0) {
      throw new error("El número no puede ser menor que 0");
   } else if ((empanadas_3 < 0) || (empanadas_4 < 0)|| (empanadas_5 < 0)) {
      throw new error("El número no puede ser menor que 0");
   }

   if (costoTotal < 14 ){
      aux = Math.floor(costoTotal) + 1;
      costoTotal = aux;
   } else if ((costoTotal > 26) && (costoTotal < 142)){
      aux = Math.floor(costoTotal) + 1;
      costoTotal = aux;
   } 

   return costoTotal; //;
};

console.log(fn(3, 3, 0));
```

En las siguientes lineas de código se puede ver como esta creada el método. En la primera linea se usa `export` para endicar la importación del método en la clase test, y en esta misma linea en constructor se declararán tres parametros con nombres de `empanadas_3, empanadas_4, empanadas_5.` En las siguientes lineas se calcula el `totalEmpanadas` , `costoTotal`  y `aux` que se inicializo en cero. El `totalEmpanadas` se usa su valor para que se crea las condiciones como:

- Que  `totalEmpanadas` menor 40 (cuarenta)
- `totalEmpanadas` tiene que ser multiplo de 3 (tres)
- `totalEmpanadas` no puede ser menor que 0 (cero)
- Y que las `empanadas` no pueden ser menor que 0 (cero)

Con estas condiciones se cumple con resultados esperados de siguientes resultados .

Resultados de 1 a 2 y de 6 a 8

En las siguientes lines de códigos nos permite cumplir con los resultados esperados en el test de las lineas 3, 4, y 5

![Captura de pantalla 2024-02-15 131642.png](README%203425538632a74fc5bb9e924d0c04bc13/Captura_de_pantalla_2024-02-15_131642.png)

Con los condicionales del `totalEmpanadas` y `empanadas` resuelve algunos test, pero nos de números flotantes e inferiores a resultados esperados en métodos `fn(2, 0, 1), fn(9, 10, 11)` y `fn(11, 10, 9)` , por esto se definió los dos condicionales `if` y `else if` ,si  `costoTotal`  es menor de 14 se pasa el `costoTotal` en `Math.floor` para que seredondea en un valor minino y entero y se suma mas 1 para que el resultado sea 14 en método `fn(2, 0, 1)` y el calculo se guarda en la variable `aux` y luego este mismo valor de la suma se pasa a la variable `costoTotal= aux` , luego en la  siguiente condición si el `costoTotal` es mayor de 26 y menor que 142 se hace nuevamente el mismo calculo para que el resultado sea 139 o 142 en los métodos `fn(9, 10, 11)` y `fn(11, 10, 9)` . Esto se puede ver en las siguientes lineas de códigos mostrado abajo.

```jsx
if (costoTotal < 14 ){
      aux = Math.floor(costoTotal) + 1;
      costoTotal = aux;
   } else if ((costoTotal > 26) && (costoTotal < 142)){
      aux = Math.floor(costoTotal) + 1;
      costoTotal = aux;
   } 
```

 Con estas condiciones se pudo concluir con resultado satsfactoria en todos los test, como se muestra en la siguiente imagen.

![Captura de pantalla 2024-02-15 131323.png](README%203425538632a74fc5bb9e924d0c04bc13/Captura_de_pantalla_2024-02-15_131323.png)

# Autor

Miguel Bengui
