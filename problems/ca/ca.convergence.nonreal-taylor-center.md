# A Taylor radius at a nonreal center

*Medium · [Complex analysis problems](index.md)*

Let $R$ be the radius of the Taylor expansion of $1/(z-1)$ about $z=i$. Find $R^2$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Locate the singularity relative to the new center.

</details>

<details>
<summary>Hint 2</summary>

A geometric expansion in the displacement from the center also confirms the exact convergence disk.

</details>

<details>
<summary>Worked solution</summary>

The distance from the expansion center to the sole pole determines the radius.

1. Write $1/(z-1)=(i-1)^{-1}\big(1+(z-i)/(i-1)\big)^{-1}$.
2. The geometric expansion converges for $|z-i|<|i-1|=\sqrt2$, and the pole at the boundary prevents a larger radius.
3. Therefore $R^2=2$.

</details>
