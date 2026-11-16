# Translate one root through the prime field

*Easy · [Abstract algebra problems](index.md)*

Over a field $K$ of characteristic $5$, suppose $u$ satisfies $u^5-u=a$. How many distinct roots does $X^5-X-a$ have in $K(u)$?

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact invariant is checked; no written proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Try adding an element of the prime field to $u$.

</details>

<details>
<summary>Hint 2</summary>

Check both that these translates are distinct and that they exhaust a degree-five polynomial.

</details>

<details>
<summary>Worked solution</summary>

The additive polynomial is unchanged by prime-field translation.

1. For each $c\in\mathbf F_5$, $(u+c)^5-(u+c)=u^5-u=a$.
2. The five elements $u+c$ are distinct.
3. A degree-five polynomial has at most five roots, and its derivative is $-1$, so these are all its roots.

</details>
