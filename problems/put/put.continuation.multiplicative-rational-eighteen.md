# Multiplicative rational eighteen

*Medium · [Original Putnam-style training](index.md)*

A function $f:\mathbb Q_{>0}\to\mathbb Q_{>0}$ satisfies $f(xy)=f(x)f(y)$, $f(2)=3$, and $f(3)=2$. Find $f(18)$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Factor $18$ using only the supplied prime arguments.

</details>

<details>
<summary>Hint 2</summary>

Apply the multiplicative law more than once.

</details>

<details>
<summary>Worked solution</summary>

The value is $3\cdot2^2=12$.

1. $18=2\cdot3^2$.
2. Multiplicativity gives $f(18)=f(2)f(3)^2$.
3. The value is $3\cdot2^2=12$.

</details>
