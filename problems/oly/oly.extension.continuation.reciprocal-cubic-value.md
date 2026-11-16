# Recover a reciprocal cubic without choosing a root

*Medium · [Original olympiad-style problems](index.md)*

A nonzero real number satisfies $x+1/x=3$. Find $x^3+1/x^3$.

```answer
{"answer":{"kind":"integer","expected":"18","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Cube the given sum as a whole.

</details>

<details>
<summary>Hint 2</summary>

The two mixed cubic terms combine to three times the original sum.

</details>

<details>
<summary>Worked solution</summary>

Use a symmetric identity that does not require a radical root.

1. Expansion gives $(x+1/x)^3=x^3+1/x^3+3(x+1/x)$.
2. The given relation makes the left side twenty-seven and the final term nine.
3. The requested value is eighteen for either real root of the original equation.

</details>
