# Quadratic shift coefficients

*Medium · [Original Putnam-style training](index.md)*

A quadratic polynomial $P(x)=x^2+ax+b$ satisfies $P(x+1)-P(x)=2x+5$ and $P(0)=3$. Find $P(2)$.

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the shift difference to isolate $a$.

</details>

<details>
<summary>Hint 2</summary>

Use the initial value for $b$.

</details>

<details>
<summary>Worked solution</summary>

Therefore $P(2)=4+8+3=15$.

1. Expansion gives $P(x+1)-P(x)=2x+1+a$, so comparison with $2x+5$ yields $a=4$.
2. $P(0)=b=3$.
3. Therefore $P(2)=4+8+3=15$.

</details>
