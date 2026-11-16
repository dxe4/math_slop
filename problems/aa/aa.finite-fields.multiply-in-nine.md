# Multiply in a quadratic finite extension

*Medium · [Abstract algebra problems](index.md)*

Let $\mathbb F_9=\mathbb F_3[\beta]/(\beta^2+1)$. Compute $(1+\beta)(2+\beta)$ as $[a,b]$ representing $a+b\beta$, with canonical coefficients in $\{0,1,2\}$.

```answer
{"answer":{"kind":"vector","expected":[1,0],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Expand first, keeping both the quadratic term and the characteristic-three coefficient reductions.

</details>

<details>
<summary>Hint 2</summary>

Use the defining quadratic relation only after the ordinary product is collected.

</details>

<details>
<summary>Worked solution</summary>

Reduce both the coefficient arithmetic and the quadratic generator relation.

1. The expanded product is $2+3\beta+\beta^2$.
2. In characteristic three, $3\beta=0$ and $\beta^2=-1$, so the result is $2-1=1$.
3. The canonical coefficient vector is $[1,0]$.

</details>
