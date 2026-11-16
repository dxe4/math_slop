# Find a coset order in a product quotient

*Medium · [Abstract algebra problems](index.md)*

In the additive group $G=(\mathbb Z/2\mathbb Z)\times(\mathbb Z/4\mathbb Z)$, let $N=\langle(1,2)\rangle$. Find the order of $(0,1)+N$ in $G/N$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

List the small subgroup before testing multiples of the given representative.

</details>

<details>
<summary>Hint 2</summary>

A multiple whose first coordinate is zero cannot equal a subgroup member whose first coordinate is nonzero.

</details>

<details>
<summary>Worked solution</summary>

Coset order is the least positive multiple whose representative enters the normal subgroup.

1. The subgroup is $N=\{(0,0),(1,2)\}$; normality holds because $G$ is abelian.
2. Multiples of $(0,1)$ have form $(0,k\bmod4)$. Such a multiple lies in $N$ exactly when its second coordinate is zero.
3. The least positive such multiplier is $4$, the coset order.

</details>
