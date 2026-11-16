# Even odd polynomial split

*Medium · [Original Putnam-style training](index.md)*

A polynomial $P$ satisfies $P(x)+P(-x)=2x^2+6$ and $P(x)-P(-x)=4x^3+2x$ for every real $x$. Find $P(2)$.

```answer
{"answer":{"kind":"integer","expected":"25","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Add the two displayed equations.

</details>

<details>
<summary>Hint 2</summary>

The even and odd components recover $2P(x)$.

</details>

<details>
<summary>Worked solution</summary>

At $x=2$ this is $4+3+16+2=25$.

1. Adding the equations yields $2P(x)=2x^2+6+4x^3+2x$.
2. Thus $P(x)=x^2+3+2x^3+x$.
3. At $x=2$ this is $4+3+16+2=25$.

</details>
