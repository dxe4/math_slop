# Transform a disk into an ellipse

*Medium · [Multivariable calculus problems](index.md)*

Let $E=\{(x,y):x^2/4+y^2/9\leq1\}$. Find $\operatorname{area}(E)/\pi$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Scale a unit disk separately in each coordinate.

</details>

<details>
<summary>Hint 2</summary>

The two scale factors multiply in the Jacobian.

</details>

<details>
<summary>Worked solution</summary>

An invertible diagonal linear map carries the unit disk onto the ellipse.

1. Set $x=2u$ and $y=3v$; the new region is $u^2+v^2\leq1$.
2. The Jacobian magnitude is $2\cdot3=6$.
3. The ellipse area is $6\pi$, so the requested ratio is $6$.

</details>
