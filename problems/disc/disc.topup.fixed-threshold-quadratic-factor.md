# Find a uniform sharp integer factor without calculus

*Hard · [Discrete mathematics](index.md)*

For every integer $n\geq2$, let $T(n)=n^2+5n+7$. Find the smallest positive integer C such that $T(n)\leq Cn^2$ for all integers n&gt;=2. The threshold is fixed at two.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Bound each lower-degree term by a fixed multiple of n squared using n&gt;=2.

</details>

<details>
<summary>Hint 2</summary>

The first permitted input can show that one smaller integer constant fails.

</details>

<details>
<summary>Worked solution</summary>

A uniform estimate and a boundary obstruction identify the sharp integer constant.

1. For n&gt;=2, $5n\leq(5/2)n^2$ and $7\leq(7/4)n^2$, so $T(n)\leq(21/4)n^2\leq6n^2$.
2. At n=2, T(n)=21, greater than $5n^2=20$. Thus C=5 fails, as does every smaller positive integer.
3. The least admissible integer factor is $6$.

</details>
