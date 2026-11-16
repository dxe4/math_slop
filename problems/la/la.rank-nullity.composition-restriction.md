# Rank of a composition

*Medium · [Linear algebra problems](index.md)*

Let $A:\mathbb R^5\to\mathbb R^4$ have rank $3$, and $B:\mathbb R^4\to\mathbb R^2$ have rank $2$. Suppose $\dim(\operatorname{im}A\cap\ker B)=1$. Find $\operatorname{rank}(B\circ A)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Restrict the second map to the image of the first map.

</details>

<details>
<summary>Hint 2</summary>

The kernel of that restriction is exactly the intersection specified in the question.

</details>

<details>
<summary>Worked solution</summary>

Apply rank-nullity to a restriction whose image is the image of the composition.

1. The restricted map $B|_{\operatorname{im}A}$ has a three-dimensional domain.
2. Its kernel is $\operatorname{im}A\cap\ker B$, of dimension $1$.
3. Its image is $\operatorname{im}(B\circ A)$, so the composition has rank $3-1=2$.

</details>
