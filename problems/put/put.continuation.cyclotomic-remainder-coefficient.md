# Cyclotomic remainder coefficient

*Medium · [Original Putnam-style training](index.md)*

Let $R(x)$ be the remainder of $x^{100}+x^{50}+1$ on division by $x^2+x+1$. Find the coefficient of $x$ in $R$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Work modulo $x^2+x+1$, where $x^3\equiv1$.

</details>

<details>
<summary>Hint 2</summary>

Reduce exponents modulo three before reducing $x^2$.

</details>

<details>
<summary>Worked solution</summary>

This equals the divisor and has zero remainder, so its $x$ coefficient is $0$.

1. Because $x^3-1=(x-1)(x^2+x+1)$, $x^3\equiv1$ modulo the divisor.
2. Exponents $100$ and $50$ reduce to $1$ and $2$, so the expression is congruent to $x+x^2+1$.
3. This equals the divisor and has zero remainder, so its $x$ coefficient is $0$.

</details>
