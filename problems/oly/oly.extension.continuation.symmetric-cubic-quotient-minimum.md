# Expose the equality factor in a rational inequality

*Medium · [Original olympiad-style problems](index.md)*

For positive $x+y=3$, find the minimum of $x^3/y+y^3/x$ as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":2},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Compare the expression with $(x+y)^2/2$.

</details>

<details>
<summary>Hint 2</summary>

After multiplication by $2xy$, factor the difference by $(x-y)^2$.

</details>

<details>
<summary>Worked solution</summary>

Factor a homogeneous nonnegative difference.

1. The exact difference from $(x+y)^2/2$ is $(x-y)^2(2x^2+3xy+2y^2)/(2xy)$.
2. All factors except the square are strictly positive, so the difference is nonnegative, with equality exactly at x equal to y.
3. The constraint gives $x=y=3/2$, where the objective is $9/2$. This proves the sharp minimum and its sole equality pair.

</details>
