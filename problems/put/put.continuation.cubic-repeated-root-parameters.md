# Cubic repeated root parameters

*Medium · [Original Putnam-style training](index.md)*

For $P_t(x)=x^3-3x+t$, find the product of all real $t$ for which $P_t$ has a repeated complex root.

```answer
{"answer":{"kind":"integer","expected":"-4","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A repeated root must also be a root of $P_t^{\prime}$.

</details>

<details>
<summary>Hint 2</summary>

The derivative has only two candidate roots; substitute both.

</details>

<details>
<summary>Worked solution</summary>

These are all parameters, and their product is $-4$.

1. $P_t^{\prime}(x)=3(x^2-1)$, so any repeated root is $1$ or $-1$.
2. $P_t(1)=t-2$ vanishes at $t=2$, while $P_t(-1)=t+2$ vanishes at $t=-2$; each is genuinely repeated because derivative also vanishes.
3. These are all parameters, and their product is $-4$.

</details>
