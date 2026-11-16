# Prime, composite or neither: prime composite neither

*Easy · [Number theory](index.md)*

Return the numbers of all correct classifications. $1$: $1$ is prime. $2$: $2$ is prime. $3$: $27$ is composite. $4$: $1$ is neither prime nor composite.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,3,4],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Both prime and composite require an integer greater than $1$.

</details>

<details>
<summary>Hint 2</summary>

Use $27 = 3 \times  9$ to check its classification.

</details>

<details>
<summary>Worked solution</summary>

The exceptional integer $1$ belongs to neither class.

1. $2$ has exactly the positive divisors $1$ and $2$; $27$ has the nontrivial divisor $3$.
2. $1$ meets neither definition, so the true statements are $\{2,3,4\}$.

</details>
