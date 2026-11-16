# Express a fourfold cosine as a polynomial

*Medium · [Geometry and trigonometry problems](index.md)*

Put $x=\cos\theta$. Find the polynomial in $x$ equal to $\cos4\theta$ for every real $\theta$. Enter the polynomial and its excluded real inputs, using $\{\}$ when there are none.

```answer
{"answer":{"kind":"expression","expected":"8x^4-8x^2+1","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Apply $\cos2u=2\cos^2u-1$ twice.

</details>

<details>
<summary>Hint 2</summary>

First write $\cos2\theta=2x^2-1$, then square that entire expression.

</details>

<details>
<summary>Worked solution</summary>

Compose the double-angle polynomial.

1. The first application gives $\cos2\theta=2x^2-1$.
2. The second gives $\cos4\theta=2(2x^2-1)^2-1$.
3. Expansion gives $8x^4-8x^2+1$.

</details>
