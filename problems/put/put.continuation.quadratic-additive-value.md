# Quadratic additive value

*Medium · [Original Putnam-style training](index.md)*

A continuous $f:\mathbb R\to\mathbb R$ satisfies $f(x+y)=f(x)+f(y)+xy$ and $f(1)=2$. Find $f(3)$.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Subtract $x^2/2$ so the remainder becomes additive.

</details>

<details>
<summary>Hint 2</summary>

Use continuity to determine the additive remainder from its value at one.

</details>

<details>
<summary>Worked solution</summary>

Thus $f(3)=9/2+(3/2)3=9$.

1. Let $g(x)=f(x)-x^2/2$. The given identity makes $g(x+y)=g(x)+g(y)$; continuity gives $g(x)=cx$.
2. $f(1)=1/2+c=2$, so $c=3/2$.
3. Thus $f(3)=9/2+(3/2)3=9$.

</details>
