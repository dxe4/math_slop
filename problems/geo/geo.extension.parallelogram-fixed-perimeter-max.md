# Maximize a parallelogram area at fixed perimeter

*Medium · [Geometry and trigonometry problems](index.md)*

A nondegenerate parallelogram has perimeter $20$. Find its greatest possible area and explain the equality case.

```answer
{"answer":{"kind":"integer","expected":"25","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

If adjacent side lengths are $a,b$, then $a+b=10$.

</details>

<details>
<summary>Hint 2</summary>

Area is $ab\sin\theta\le ab$, and $ab\le(a+b)^2/4$.

</details>

<details>
<summary>Worked solution</summary>

Combine the angle bound and the product bound.

1. The perimeter condition gives $a+b=10$.
2. Area satisfies $A=ab\sin\theta\le ab\le(10/2)^2=25$.
3. Equality requires $\sin\theta=1$ and $a=b=5$. Thus a square of side $5$ attains the maximum, and every maximizer is such a square.

</details>
