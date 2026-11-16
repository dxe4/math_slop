# Order of a power

*Medium · [Abstract algebra problems](index.md)*

An element $a$ of a group has order $20$. Find the order of $a^6$.

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A power of the new element is the identity precisely when the original order divides the product of the exponents.

</details>

<details>
<summary>Hint 2</summary>

Reduce that divisibility condition to its least positive solution.

</details>

<details>
<summary>Worked solution</summary>

Use the defining order condition without assuming that exponents can simply be divided.

1. We have $(a^6)^k=e$ exactly when $20\mid6k$.
2. Dividing the common factor $2$ gives $10\mid3k$, which is equivalent to $10\mid k$.
3. Thus $a^6$ has order $10$.

</details>
