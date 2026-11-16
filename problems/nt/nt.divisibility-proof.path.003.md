# Divisibility arguments: refute product cancellation

*Medium · [Number theory](index.md)*

The claim “d divides ab implies d divides a or d divides b” is false in general. Check the proposed counterexample $d=6,a=2,b=3$: return product=ab, remainder\_a when a is divided by d, and remainder\_b when b is divided by d.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"product":6,"remainder_a":2,"remainder_b":3},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Multiply a and b, then compare their separate division remainders.

</details>

<details>
<summary>Hint 2</summary>

A nonzero remainder shows that an individual factor is not divisible by d.

</details>

<details>
<summary>Worked solution</summary>

A counterexample must make the premise true and conclusion false.

1. $ab = 6$ is divisible by $d=6$, while $a=2$ and $b=3$ have remainders $2$ and $3$.
2. Thus the hypothesis holds but neither disjunct holds, which verifies this particular counterexample.

</details>
