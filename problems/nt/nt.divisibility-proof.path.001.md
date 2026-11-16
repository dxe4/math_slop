# Divisibility arguments: linear combination reasoning

*Medium · [Number theory](index.md)*

Let d,a,b be arbitrary integers with d dividing a and b. Which conclusions always follow? Return their numbers. $1$: d divides $2a - 3b$. $2$: d divides ab. $3$: d divides $a + b + 1$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Write $a = du$ and b = dv with integer witnesses u,v.

</details>

<details>
<summary>Hint 2</summary>

For a claim that fails, a single concrete counterexample is enough.

</details>

<details>
<summary>Worked solution</summary>

A supplied proof scaffold recognizes valid general inferences; it does not assess independent open-proof construction.

1. $2a - 3b = d(2u - 3v)$, and ab = d(ub), so conclusions $1$ and $2$ have integer witnesses.
2. Conclusion $3$ fails at $d=2,a=2,b=2$, since $2$ does not divide $5$. The valid set is $\{1,2\}$.

</details>
