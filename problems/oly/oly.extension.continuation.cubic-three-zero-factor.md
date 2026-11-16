# Use all given zeros before fixing scale

*Medium · [Original olympiad-style problems](index.md)*

A real polynomial of degree at most three vanishes at $-1,0,1$ and has $P(2)=12$. Find $P(3)$.

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The three distinct roots force a cubic factor product, unless the polynomial is zero.

</details>

<details>
<summary>Hint 2</summary>

The nonzero supplied value rules out zero and fixes the remaining constant multiplier.

</details>

<details>
<summary>Worked solution</summary>

Use the degree ceiling and root factor theorem together.

1. The factor theorem gives $P(x)=c(x+1)x(x-1)$ because there is no room for another nonconstant factor.
2. At two this is $6c=12$, so $c=2$.
3. At three it is $2\cdot4\cdot3\cdot2=48$. The degree bound is essential to the uniqueness.

</details>
