# Theorem, bound, or conjecture on a curve

*Difficulty 5 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 10 of 13*

Match each statement to its correct status and setting: Hasse's bound for E(F_q), finite generation of E(Q), finiteness of C(Q) for a smooth projective genus-g curve with g greater than 1, and the Birch-Swinnerton-Dyer relation between rank and an L-function. State one hypothesis for each.

<details>
<summary>Hint 1</summary>

Hasse concerns a nonsingular elliptic curve over a finite field

</details>

<details>
<summary>Hint 2</summary>

Mordell-Weil concerns rational points on an abelian variety over a number field

</details>

<details>
<summary>Hint 3</summary>

Faltings proves finiteness in genus greater than one; BSD remains conjectural in general

</details>

<details>
<summary>Worked solution</summary>

For an elliptic curve E over F_q, Hasse's proved bound is |#E(F_q)-(q+1)| at most 2 square-root-of-q; E must be nonsingular and q a prime power. Mordell-Weil is a proved finite-generation theorem: for an elliptic curve over Q, E(Q) is a finitely generated abelian group (more generally, rational points of an abelian variety over a number field are finitely generated). Faltings's theorem proves that a smooth projective curve C over a number field with genus greater than 1 has only finitely many rational points over that field; it does not say how to find them all in every case. The Birch-Swinnerton-Dyer conjecture predicts, among deeper assertions, that the algebraic rank of E(Q) equals the order of vanishing of L(E,s) at $s=1$. It remains open in general, though important cases are known. The four statements therefore concern different fields, curve classes, and claim strengths.

**Answer.** Hasse, Mordell-Weil, and Faltings are theorems under their stated finite-field/number-field hypotheses; BSD is a conjecture in general.

</details>

*Tags: arithmetic geometry, Hasse bound, Mordell-Weil, Faltings theorem, BSD*
