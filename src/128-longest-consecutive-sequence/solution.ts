export function longestConsecutive(nums: number[]): number {
  // El edge case
  if (nums.length == 0) return 0;

  // Convertimos a Set por dos motivos
  // Implementa un Hash Table internamente. Bro es O(1) en tiempo de busqueda
  // Nos evita recorrer el array original de forma anidada [O(n²)] lo cual no deseamos
  const setNums = new Set(nums);

  // Como asumimos que, al menos, existe un elemento en el array, el valor inicial de max debe ser 1
  let max = 1;

  // Solo hace falta recorrer una sola vez el Set [O(n)]
  for (const num of setNums) {
    // Verificamos que el numero actual no tenga antecesor
    // Esto signifca que hayamos un principio de secuencia
    if (!setNums.has(num - 1)) {
      // Preparamos variables para empezar a buscar sucesores
      let i = 1;
      let counter = 1;

      // Buscamos elementos consecutivos seguidos
      while (setNums.has(num + i)) {
        counter++;
        i++;
      }

      // Si en la secuencia actual hemos superado max debemos actualizar este ultimo
      if (counter > max) {
        max = counter;
      }
    }
    // cualquier otro caso no nos interesa
  }

  // Devolvemos el max ya calculado. Qué bueno que hoy si estuvo tranquilo.
  return max;
}
