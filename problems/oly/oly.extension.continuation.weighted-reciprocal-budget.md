# Find a sharp weighted reciprocal minimum

*Medium · [Original olympiad-style problems](index.md)*

For positive reals $x+y=1$, find the minimum of $1/x+4/y$.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Use Cauchy on the vectors with entries $1/\sqrt{x},2/\sqrt{y}$ and $\sqrt{x},\sqrt{y}$.

</details>

<details>
<summary>Hint 2</summary>

The equality condition makes y twice x.

</details>

<details>
<summary>Worked solution</summary>

Choose weights that match both reciprocal numerators.

1. Cauchy gives $(1+2)^2\le(1/x+4/y)(x+y)$.
2. The constraint makes the objective at least nine.
3. At $x=1/3,y=2/3$, the two Cauchy vectors are proportional and the objective is nine, so it is the minimum.

</details>
