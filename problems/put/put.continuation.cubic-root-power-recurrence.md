# Cubic root power recurrence

*Medium · [Original Putnam-style training](index.md)*

If $a,b$ are the complex roots of $x^2-3x+1$, find $a^3+b^3$.

```answer
{"answer":{"kind":"integer","expected":"18","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Record $a+b$ and $ab$ from the polynomial.

</details>

<details>
<summary>Hint 2</summary>

Use $a^3+b^3=(a+b)^3-3ab(a+b)$.

</details>

<details>
<summary>Worked solution</summary>

Substitution gives $27-9=18$.

1. Vieta gives $a+b=3$ and $ab=1$.
2. Expanding $(a+b)^3$ shows $a^3+b^3=(a+b)^3-3ab(a+b)$.
3. Substitution gives $27-9=18$.

</details>
