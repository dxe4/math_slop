# Invert an element in a four-element field

*Medium · [Abstract algebra problems](index.md)*

Let $\mathbb F_4=\mathbb F_2[\alpha]/(\alpha^2+\alpha+1)$. Find $\alpha^{-1}$ as the coefficient vector $[a,b]$ representing $a+b\alpha$, with $a,b\in\{0,1\}$.

```answer
{"answer":{"kind":"vector","expected":[1,1],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Use the defining quadratic relation to reduce a product involving the generator.

</details>

<details>
<summary>Hint 2</summary>

Seek a product of the generator with a linear expression that reduces to the identity.

</details>

<details>
<summary>Worked solution</summary>

The defining relation produces a multiplicative inverse directly.

1. The relation gives $\alpha^2+\alpha=1$, since the characteristic is two.
2. Therefore $\alpha(\alpha+1)=1$, so $\alpha^{-1}=1+\alpha$.
3. The requested canonical coefficient vector is $[1,1]$.

</details>
