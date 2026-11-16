/* Elementary models for words in two loops and the square quotient torus.
   Finite computations illustrate the group laws; the accompanying lecture
   supplies the topological arguments identifying those laws with homotopy. */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.LoopWordMath = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const INVERSE = Object.freeze({ a: 'A', A: 'a', b: 'B', B: 'b' });
  const MAX_INPUT_LENGTH = 4000;

  function parseWord(input) {
    if (typeof input !== 'string') throw new TypeError('word must be a string');
    if (input.length > MAX_INPUT_LENGTH) throw new RangeError('word must contain at most 4000 characters, including whitespace');
    const letters = [];
    for (const letter of input) {
      if (Object.hasOwn(INVERSE, letter)) letters.push(letter);
      else if (!/\s/u.test(letter)) throw new SyntaxError('word may contain only a, A, b, B, and whitespace');
    }
    return letters;
  }

  function inverted(letters) {
    return letters.slice().reverse().map(letter => INVERSE[letter]);
  }

  function reduced(letters) {
    const stack = [];
    for (const letter of letters) {
      if (stack.length && INVERSE[letter] === stack[stack.length - 1]) stack.pop();
      else stack.push(letter);
    }
    return stack.join('');
  }

  function inverseWord(input) {
    return inverted(parseWord(input)).join('');
  }

  function reductionSteps(input) {
    const letters = parseWord(input), stack = [], steps = [];
    letters.forEach((letter, index) => {
      const before = stack.join('');
      const cancelled = stack.length > 0 && INVERSE[letter] === stack[stack.length - 1];
      if (cancelled) stack.pop();
      else stack.push(letter);
      steps.push({ index, letter, before, after: stack.join(''), cancelled });
    });
    return { word: letters.join(''), reduced: stack.join(''), steps };
  }

  function reduceWord(input) {
    return reduced(parseWord(input));
  }

  function sums(letters) {
    const result = { a: 0, b: 0 };
    for (const letter of letters) {
      if (letter === 'a') result.a++;
      else if (letter === 'A') result.a--;
      else if (letter === 'b') result.b++;
      else result.b--;
    }
    return result;
  }

  function exponentSums(input) {
    return sums(parseWord(input));
  }

  function compareWords(left, right) {
    const leftLetters = parseWord(left), rightLetters = parseWord(right);
    const leftReduced = reduced(leftLetters), rightReduced = reduced(rightLetters);
    // Both public inputs satisfy the length limit separately. Their internal
    // difference can legitimately contain up to 8000 letters.
    const difference = leftLetters.concat(inverted(rightLetters));
    const exponents = sums(difference);
    return {
      leftReduced,
      rightReduced,
      freeEqual: leftReduced === rightReduced,
      torusEqual: exponents.a === 0 && exponents.b === 0,
      differenceReduced: reduced(difference),
      exponents
    };
  }

  function unit(value, name) {
    if (!Number.isFinite(value) || value < 0 || value > 1) {
      throw new RangeError(name + ' must be a finite number in [0, 1]');
    }
  }

  function squareContraction(s, t) {
    unit(s, 's'); unit(t, 't');
    if (s === 0 || s === 1 || t === 1) return [0, 0];
    let point;
    if (s < 0.25) point = [4 * s, 0];
    else if (s < 0.5) point = [1, 4 * s - 1];
    else if (s < 0.75) point = [3 - 4 * s, 1];
    else point = [0, 4 - 4 * s];
    return point.map(coordinate => (1 - t) * coordinate);
  }

  function generatorScaling(s, t) {
    unit(s, 's'); unit(t, 't');
    if (s === 0 || t === 1) return [0, 0];
    // In exact real arithmetic the projected right endpoint [1-t, 0]
    // differs from the left endpoint for 0<t<1. This analytic statement,
    // not equality of rounded coordinates, shows those slices are not loops.
    // For example, JavaScript rounds 1-Number.MIN_VALUE to 1.
    return [(1 - t) * s, 0];
  }

  function projection(point) {
    if (!Array.isArray(point) || point.length !== 2 || !Number.isFinite(point[0]) || !Number.isFinite(point[1])) {
      throw new TypeError('point must contain two finite coordinates');
    }
    // These are canonical coordinate representatives. The quotient map is
    // continuous as a map into the torus, but the wrapped representatives
    // need not be continuous as a map into the Euclidean half-open square.
    return point.map(coordinate => {
      const remainder = coordinate % 1;
      if (remainder === 0) return 0; // Canonicalize negative zero as well.
      if (remainder > 0) return remainder;
      const wrapped = remainder + 1;
      // For tiny negative remainders the exact value below 1 rounds to 1.
      // Keep its representative on the correct side of the half-open seam.
      return wrapped === 1 ? 1 - Number.EPSILON / 2 : wrapped;
    });
  }

  return Object.freeze({ parseWord, inverseWord, reductionSteps, reduceWord, exponentSums, compareWords, squareContraction, generatorScaling, projection });
});
