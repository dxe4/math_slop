# A distribution function between atoms

*Easy · [Probability problems](index.md)*

A variable has $P(X=0)=1/4$ and $P(X=2)=3/4$. Define $F(t)=P(X\le t)$. Find $F(1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the distribution-function value at the stated argument only."}}
```

<details>
<summary>Hint 1</summary>

Identify which support values are at most the argument of the distribution function.

</details>

<details>
<summary>Hint 2</summary>

Add precisely those atomic masses; do not interpolate the jump sizes between support points.

</details>

<details>
<summary>Worked solution</summary>

A distribution function sums masses at or below its argument.

1. The supplied masses sum to one, so zero and two exhaust the support.
2. At argument one, zero satisfies $0\le1$ while two does not satisfy $2\le1$.
3. Thus $F(1)=P(X=0)=1/4$. A discrete distribution function stays constant between these two atoms.

Only the zero atom is included, giving $F(1)=1/4$.

</details>
