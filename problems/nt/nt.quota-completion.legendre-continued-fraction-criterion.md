# Prove a sharp convergent-recognition criterion

*Hard · [Number theory](index.md)*

Let α be irrational and p/q reduced with q&gt;0. Prove $|\alpha-p/q|<1/(2q^2)$ implies p/q is a continued-fraction convergent of α. You may use the consecutive-convergent determinant ±1, opposite signs of their errors q\_nα−p\_n, and unbounded denominators. Derive the best-approximation inequality used in your proof.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose the last convergent denominator q\_n not exceeding q, so q&lt;q\_(n+1).

</details>

<details>
<summary>Hint 2</summary>

Expand the integer pair (p,q) in the unimodular basis formed by consecutive convergents; the denominator bound restricts the coefficient signs.

</details>

<details>
<summary>Model proof</summary>

An integer determinant lower bound conflicts with an approximation smaller than both the candidate and best-convergent error scales.

1. First prove the needed best-approximation fact. Write (p,q)=A(p\_n,q\_n)+B(p\_{n+1},q\_{n+1}) with integers A,B, possible by determinant ±1. If 0&lt;q&lt;q\_{n+1}, the two coefficients cannot both be positive, both nonpositive, or have A=0.
2. If B=0, \|qα−p\|=\|A\|\|q\_nα−p\_n\|≥\|q\_nα−p\_n\|. Otherwise A,B have opposite signs. Since the two convergent errors have opposite signs, A and B multiply them to terms of the same sign, again giving \|qα−p\|≥\|q\_nα−p\_n\|. This proves the inequality.
3. Choose n maximal with q\_n≤q, which exists by unbounded denominators and handles any initial denominator tie. Then q&lt;q\_{n+1}. If p/q is not this convergent, the nonzero integer p q\_n−q p\_n has absolute value at least one.
4. But its magnitude is at most q\_n\|p−qα\|+q\|q\_nα−p\_n\|≤(q\_n+q)\|qα−p\|&lt;(q\_n+q)/(2q)≤1, a contradiction. Thus the rational is a convergent, with strictness of the approximation supplying the final contradiction.

**Self-assessment rubric**

- Uses consecutive convergents as an integer lattice basis.
- Handles coefficient sign possibilities and opposite errors to prove the required bound.
- Chooses the correct n despite possible initial equal denominators.
- Combines the nonzero determinant lower bound and strict approximation upper bound without reversing an inequality.

</details>
