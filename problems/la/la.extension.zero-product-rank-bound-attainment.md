# Find an attainable rank bound from a zero composition

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Fix $A:\mathbb R^5\to\mathbb R^3$ of rank two. Among maps $B:\mathbb R^4\to\mathbb R^5$ with $AB=0$, find the greatest possible rank of $B$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The image of $B$ must lie in the kernel of $A$.

</details>

<details>
<summary>Hint 2</summary>

For attainability, map three independent input vectors onto a basis of that kernel.

</details>

<details>
<summary>Worked solution</summary>

Combine a necessary image containment with an explicit dimension-level construction.

1. Rank-nullity gives $\dim\ker A=5-2=3$. The equation $AB=0$ means $\operatorname{im}B\subseteq\ker A$.
2. Thus the rank of $B$ is at most three, also within its input dimension four.
3. Choose a kernel basis, send the first three input basis vectors to it and the fourth to zero. This realizes rank three and the zero composition.

</details>
