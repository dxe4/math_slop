
# Quadratic fields and lost unique factorisation

Factoring an integer in a larger ring can reveal useful structure. It can also invalidate the familiar step that an irreducible factor dividing a product must divide one of the factors. In ordinary integer arithmetic those notions agree; in a quadratic integer ring they can separate. A norm lets us prove the separation rather than infer it from two suggestive expressions.

This **Years 2–3 (L3)** article assumes rings, divisibility and the [number-fields orientation](#/articles/algebraic-number-theory-number-fields-integers). Its primary is the actual [Quadratic Integers, Ideals and Factorization Failure chapter](#/books/algebraic-analytic-number-theory/quadratic-integers-ideals), which supplies the integer-ring classification, Gaussian Euclidean proof and ideal continuation. Here the single question is why two decompositions of six genuinely disprove unique element factorisation in one specified ring.

## Name the ring before factoring

Work in the ring of integer combinations of one and the square root of minus five. This is the full ring of integers of that quadratic field: the squarefree radicand is three modulo four, so the quadratic classification gives no half-integer enlargement. That structural identification is a theorem in the linked primary. We are not taking an arbitrary nonmaximal order and silently applying theorems about maximal integer rings.

Conjugation changes the sign of the square-root coefficient. Its product with the original element gives the norm

$$N(a+b\sqrt{-5})=a^2+5b^2.$$

The norm is a nonnegative integer, zero only at zero, and it multiplies under products because conjugation respects multiplication. If an element is a unit, its norm times its inverse's integer norm is one. Hence its norm is one. Solving that equation gives only plus one and minus one, which really are units. Every nonzero nonunit consequently has norm at least two.

An element is irreducible when it is a nonzero nonunit and every factorization has a unit factor. It is prime when divisibility of a product forces divisibility of one factor. Prime implies irreducible in any integral domain: cancel a nonzero factor after applying the prime condition. The reverse implication requires extra ring structure and is the implication we will see fail.

## Worked example: certify both factorizations of six

The equality is

$$6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5}).$$

The four displayed factors have norms four, nine, six and six, respectively. There is no element of norm two or three: if the square-root coefficient is zero the norm is an integer square, and if it is nonzero the norm is at least five. This simple obstruction proves all four factors irreducible.

For two, any nontrivial factorization would have two nonunit norms multiplying to four. Both would therefore have to be two, impossible. For three, the analogous norms would both have to be three, also impossible. For either conjugate factor of norm six, the only nonunit norm possibilities are two and three, again impossible. We have ruled out every allowed factor-norm case, not just failed to find a factor by inspection.

The two decompositions are inequivalent even after reordering and multiplying factors by units. Associate elements have equal norm, since the only units have norm one. Neither norm-four nor norm-nine factor can be associate to a norm-six factor. The conjugate norm-six factors are not associates of each other either: the only possible unit multiples are their positive and negative, and neither makes their two integer coefficients agree. Thus these really are two different irreducible factorizations of the same element.

One explicit counterexample is enough to disprove unique factorization in the ring. It does not say that every element has several factorizations, that ordinary integer factorization has failed, or that all quadratic integer rings share the failure. The ambient ring and the meaning of unit have changed.

## The precise broken inference

The element two divides the product of the conjugate factors, because that product is six. But it divides neither factor individually. Divisibility by the element two in this ring means that both integer coefficients are even: multiplying any ring element by two doubles each coordinate, and conversely even coordinates can be halved inside the ring. Each conjugate factor has constant coefficient one, excluding divisibility.

Therefore two is irreducible but not prime. This is the exact logical failure behind an invalid Euclid-lemma step in an attempted Diophantine proof. Knowing that a factor cannot be decomposed further does not automatically let us allocate it to one factor of an unrelated product.

The norm test is powerful but asymmetric. Prime norm guarantees irreducibility, since two positive nonunit integer norms cannot multiply to a prime. Composite norm does not guarantee reducibility: the element two just supplied a counterexample. In a different ring, the same rational integer can behave differently because the available norms and units differ.

## Ideals repair a different factorization problem

In a full number-field integer ring, nonzero ideals factor uniquely into prime ideals. This is the Dedekind factorization theorem proved in the actual [Ideal Factorisation and Prime Splitting chapter](#/books/algebraic-analytic-number-theory/ideal-factorisation-prime-splitting). It is not a claim that the earlier element decompositions become identical as lists of elements.

For the present ring, the ideal generated by two and one plus the square root of minus five is a nonprincipal prime ideal. Its square is the principal ideal generated by two. The [class-group orientation](#/articles/algebraic-number-theory-class-group) computes these assertions explicitly and explains the missing element generator. Ideal factorization retains information that an element-only decomposition cannot express.

The Gaussian integers provide a useful comparison rather than another counterexample. Rounding a complex quotient to its nearest Gaussian lattice point produces a remainder of strictly smaller norm. The linked quadratic primary proves the resulting Euclidean algorithm, principal-ideal property and unique element factorization. A quadratic extension itself is neither a guarantee of failure nor a guarantee of success; the relevant arithmetic must be established in its own integer ring.

## Exercises

### Exercise 1 {#algebraic-number-theory-factorisation-ex-1}

In the Gaussian integers, factor five as a product of two irreducibles. Prove irreducibility using norms, and explain why reducibility of the rational integer five is compatible with unique factorization in the larger ring.

<details><summary>Hint 1</summary>
The Gaussian norm of a plus b times i is the sum of the two squares.
</details>
<details><summary>Hint 2</summary>
Use two plus i and its conjugate. Each has norm five, an ordinary prime.
</details>
<details><summary>Full solution</summary>
The factorization is five equal to the product of two plus i and two minus i. Each factor has norm five. A nontrivial factorization would require two integer norms at least two whose product is five, impossible, so both are irreducible. Unique factorization in the Gaussian ring means uniqueness up to its units and ordering among Gaussian irreducibles. It does not require a rational prime to remain irreducible after enlarging the ring. Splitting changes the irreducible building blocks; it need not destroy their uniqueness.
</details>

### Exercise 2 {#algebraic-number-theory-factorisation-ex-2}

Prove that an element of prime norm in the square-root-minus-five ring is irreducible. Then disprove the converse with an explicit element from the worked example.

<details><summary>Hint 1</summary>
A product decomposition induces a product of nonnegative integer norms.
</details>
<details><summary>Hint 2</summary>
An element of norm one is a unit, but an irreducible need not have prime norm.
</details>
<details><summary>Full solution</summary>
For a nonzero element with prime norm, any factorization has one factor norm one because its two integer norms multiply to that prime. Such a factor is a unit, proving irreducibility. Conversely two is irreducible by the absence of norm-two elements, yet its norm is four, a composite integer. The norm criterion is sufficient, not necessary. This distinction also shows why seeing a composite norm cannot by itself justify proposing a nontrivial element factorization.
</details>

*Source provenance: original Euler orientation proof and exercises, linked to actual quadratic-integer and ideal-factorization primaries. Full-ring and unit hypotheses remain explicit; general Dedekind factorization is a named primary theorem. CC BY-SA 4.0. Draft; no independent review is claimed.*
