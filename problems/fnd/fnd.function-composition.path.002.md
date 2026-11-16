# Compare the two composition orders

*Easy · [Foundations bridge](index.md)*

Let $f(x)=x+2$ and $g(x)=3x$ on the real numbers. Return fg = f(g(1)) and gf = g(f(1)).

```answer
{"answer":{"kind":"record_of_rationals","expected":{"fg":"5","gf":"9"},"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

Compute each order as its own two-step process.

</details>

<details>
<summary>Hint 2</summary>

Adding two before multiplying by three need not match the reversed order.

</details>

<details>
<summary>Worked solution</summary>

Composition generally depends on order.

1. For $f(g(1))$, first $g(1)=3$ and then $f(3)=5$.
2. For $g(f(1))$, first $f(1)=3$ and then $g(3)=9$.
3. Return fg=5 and gf=9.

</details>
