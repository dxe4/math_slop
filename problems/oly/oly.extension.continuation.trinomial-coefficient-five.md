# Extract a coefficient by complete exponent cases

*Medium · [Original olympiad-style problems](index.md)*

Find the coefficient of $x^5$ in $(1+x+x^2)^4$.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

If a terms of degree two and b terms of degree one are chosen, then $2a+b=5$.

</details>

<details>
<summary>Hint 2</summary>

Also at most four factors are used; enumerate every admissible pair of nonnegative counts.

</details>

<details>
<summary>Worked solution</summary>

Count distinct monomial selections by their degree composition.

1. The only count pairs are $(a,b)=(1,3)$ and $(2,1)$; the corresponding constant-term counts are zero and one.
2. The first has four placements for the degree-two factor. The second has $4!/(2!1!1!)=12$ placements.
3. All coefficients of selected terms are one, so adding gives coefficient sixteen.

</details>
