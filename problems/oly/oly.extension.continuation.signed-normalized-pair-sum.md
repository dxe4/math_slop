# Keep the signs in a norm-constrained maximum

*Medium · [Original olympiad-style problems](index.md)*

Real numbers satisfy $x^2+y^2+z^2=1$. Find the maximum of $xy+yz+zx$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Use the sum of squared pair differences without assuming the variables positive.

</details>

<details>
<summary>Hint 2</summary>

Equality requires all three entries equal; both common signs are allowed.

</details>

<details>
<summary>Worked solution</summary>

Apply a sign-independent quadratic identity.

1. The sum of squared pair differences equals twice $1-(xy+yz+zx)$, so the objective is at most one.
2. Equality requires x, y and z all equal.
3. The common value can be either $1/\sqrt3$ or its negative; both satisfy the norm and attain one.

</details>
