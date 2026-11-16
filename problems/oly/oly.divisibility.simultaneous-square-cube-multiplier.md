# Match prime exponents for two perfect-power conditions

*Hard · [Original olympiad-style problems](index.md)*

Find the least positive integer $N$ such that $12N$ is a perfect square and $18N$ is a perfect cube.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Write the exponents of two and three in N as separate unknowns.

</details>

<details>
<summary>Hint 2</summary>

For each prime, impose the square condition modulo two and the cube condition modulo three.

</details>

<details>
<summary>Worked solution</summary>

Independent exponent congruences determine the smallest possible prime factors.

1. If the exponents of two and three in N are a and b, the conditions require $a+2$ even, $a+1\equiv0\pmod3$, $b+1$ even and $b+2\equiv0\pmod3$.
2. The least nonnegative choices are $a=2$ and $b=1$. Any other prime exponent must be divisible by six, so zero is minimal.
3. Thus the least N is $2^2\cdot3=12$; indeed $12N=144$ and $18N=216$.

</details>
