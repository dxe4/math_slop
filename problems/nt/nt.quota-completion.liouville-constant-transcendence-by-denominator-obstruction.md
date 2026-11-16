# Prove a decimal constant is transcendental through excessive approximation

*Hard · [Number theory](index.md)*

Let $L=\sum_{k=1}^{\infty}10^{-k!}$. Prove L is transcendental. Use the truncation P\_n/Q\_n with Q\_n=10^{n!}, derive an explicit upper error bound, and show any nonzero integer polynomial vanishing at L would impose an incompatible lower bound. You may use the real mean value theorem and that a nonzero polynomial has finitely many roots.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Multiplying a polynomial value at P\_n/Q\_n by Q\_n^d gives an integer.

</details>

<details>
<summary>Hint 2</summary>

The tail is smaller than a constant times Q\_n^{−(n+1)}, beating every fixed degree-d denominator bound.

</details>

<details>
<summary>Model proof</summary>

A fixed algebraic degree cannot admit arbitrarily many distinct rational approximations with unbounded approximation order.

1. Set Q\_n=10^{n!} and P\_n=Σ\_{k=1}^n10^{n!−k!}, an integer. The truncations are distinct and increase to L∈(0,1). The omitted factorial exponents increase by at least one each time, so 0&lt;L−P\_n/Q\_n&lt;2·10^{−(n+1)!}=2/Q\_n^{n+1}.
2. Suppose a nonzero H∈Z\[X\] of degree d has H(L)=0. Its derivative is bounded on \[0,1\] by some M≥1. Since H has finitely many roots and the distinct truncations converge to L without equaling L, for all sufficiently large n the value H(P\_n/Q\_n) is nonzero.
3. The number Q\_n^d H(P\_n/Q\_n) is then a nonzero integer, so \|H(P\_n/Q\_n)\|≥Q\_n^{−d}. The mean value theorem gives \|H(P\_n/Q\_n)−H(L)\|≤M\|P\_n/Q\_n−L\|. Thus the error is at least 1/(M Q\_n^d).
4. Combining bounds forces Q\_n^{n+1−d}&lt;2M for every sufficiently large n, impossible as n grows past d and Q\_n→∞. No nonzero integer polynomial can vanish at L, which is precisely transcendence.

**Self-assessment rubric**

- Constructs integer numerators and denominators and proves the positive factorial-tail bound.
- Ensures the truncation values eventually avoid every polynomial root before using an integer lower bound.
- Combines denominator clearing with a derivative bound and the mean value theorem.
- Compares fixed algebraic degree with growing approximation order to conclude transcendence.

</details>
