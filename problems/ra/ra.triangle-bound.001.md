# Combine two distance bounds

*Medium · [Real analysis](index.md)*

Real numbers x,a,b satisfy \|x−a\|≤1/4 and \|a−b\|≤2/3. Give the smallest number B guaranteed by these two assumptions to satisfy \|x−b\|≤B for every permitted triple. The requested answer is the sharp worst-case bound, not the actual distance for an unspecified triple.

```answer
{"answer":{"kind":"rational","expected":{"numerator":11,"denominator":12},"checker_scope":"Checks the numerical sharp upper bound for the stated two-distance constraint. A general proof is not assessed."}}
```

<details>
<summary>Hint 1</summary>

Use $x-b=(x-a)+(a-b)$ and the triangle inequality.

</details>

<details>
<summary>Hint 2</summary>

For sharpness, consider placing both displacements in the same direction.

</details>

<details>
<summary>Worked solution</summary>

Adding distance bounds is sharp when the permitted displacements align.

1. The triangle inequality gives $|x-b|\leq |x-a|+|a-b|\leq 1/4+2/3=11/12$.
2. Take $b=0, a=2/3$ and $x=11/12$. Both assumptions hold with equality, and $|x-b|=11/12$.
3. Therefore $11/12$ is guaranteed and no smaller uniform bound works.

</details>
