# Use positivity to choose a functional square root

*Medium · [Original olympiad-style problems](index.md)*

A function $f:(0,\infty)\to(0,\infty)$ satisfies $f(xy)=f(x)f(y)$ and has $f(4)=16$, $f(9)=81$. Find $f(6)$.

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Compute the value at thirty-six in two different multiplicative ways.

</details>

<details>
<summary>Hint 2</summary>

The codomain excludes a negative square-root branch.

</details>

<details>
<summary>Worked solution</summary>

Use one product identity and a positive square root.

1. Multiplicativity gives $f(36)=f(4)f(9)=1296$.
2. It also gives $f(36)=f(6)^2$.
3. Positivity forces $f(6)=36$. This finite conclusion does not assume a power-law classification without regularity.

</details>
