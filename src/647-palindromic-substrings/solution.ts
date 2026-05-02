export function countSubstrings(s: string): number {
  // Cadena normalizada
  const S = '#' + s.split('').join('#') + '#';
  const n = S.length;
  // Lista de radios
  const P = Array.from({ length: n }).fill(0) as number[];

  // Centro y Radio relativos a la posición actual
  let C = 0;
  let R = 0;

  // Glen Manacher espero que entiendas que inverti toda mi tarde en entender tu algoritmo de
  // los cojones que seguro olvidare en un par de dias. Mardito desgraciado como xuxa haces
  // O(n) con palindromos, te odio
  for (let i = 0; i < n; i++) {
    if (i < R) {
      const mirror = 2 * C - i; // Ayuda con mirror
      // P[mirror]: Nos ayudamos del valor ya calculado en el espejo
      // R - i: Si P[mirror] es muy grande. Necesitamos este valor para evitar desbordamiento
      P[i] = Math.min(P[mirror], R - i);
    } else {
      P[i] = 0; // Sin ayuda y sin P[i] inicial
    }

    // Exploración manual
    // S[i - P[i] - 1] -> Explorar a la izquierda con P[i] variando
    // S[i + P[i] + 1] -> Explorar a la derecha con P[i] variando
    while (
      S[i - P[i] - 1] === S[i + P[i] + 1] &&
      S[i - P[i] - 1] !== undefined &&
      S[i + P[i] + 1] !== undefined
    ) {
      P[i]++;
    }

    // Actualizar C y R si la nueva expansión ha superado la frontera (R) actual
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }

  // La suma de las divisiones entre 2 y enteras de cada elemento nos deja la cantidad de
  // palindromos de toda la cadena. Esto es asi porque los "#" nos dejan doble cuenta
  return P.reduce((acc, curr) => acc + Math.ceil(curr / 2));
}
