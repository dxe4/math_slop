# Find a sharp weighted quadratic minimum

*Hard · [Original olympiad-style problems](index.md)*

For positive reals x,y with $x+y=10$, find the minimum of $x^2+4y^2$.

```answer
{"answer":{"kind":"integer","expected":"80","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

A weighted Cauchy-Schwarz inequality can use vectors (x,2y) and (1,1/2).

</details>

<details>
<summary>Hint 2</summary>

After finding a bound, check that its equality ratio is compatible with the constraint.

</details>

<details>
<summary>Worked solution</summary>

A sharp weighted inequality gives both the bound and its attaining point.

1. Cauchy-Schwarz gives $(x+y)^2\leq(x^2+4y^2)(1+1/4)$, so the objective is at least $100\cdot4/5=80$.
2. Equality requires (x,2y) proportional to (1,1/2), hence x=4y.
3. Together with x+y=10 this gives x=8,y=2, which is allowed and attains $80$.

</details>
