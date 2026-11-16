# Solve a rational equation with both exclusions retained

*Medium · [Original olympiad-style problems](index.md)*

Find all real $x\ne0,1$ satisfying $x/(x-1)+(x-1)/x=5/2$. Enter the finite set.

```answer
{"answer":{"kind":"set","expected":["-1","2"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Combine the left side as two plus the reciprocal of $x(x-1)$.

</details>

<details>
<summary>Hint 2</summary>

Only multiply by denominators after recording their nonzero domain.

</details>

<details>
<summary>Worked solution</summary>

Simplify with a product substitution and restore all candidates.

1. On the stated domain, the left side is $2+1/[x(x-1)]$.
2. The equation therefore gives $x(x-1)=2$, or $(x-2)(x+1)=0$.
3. Both candidates two and negative one avoid the excluded inputs and satisfy the original equation.

</details>
