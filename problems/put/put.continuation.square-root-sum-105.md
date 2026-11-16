# Square root sum 105

*Medium · [Original Putnam-style training](index.md)*

Find the sum of all residues $x\in\{0,\ldots,104\}$ satisfying $x^2\equiv1\pmod{105}$.

```answer
{"answer":{"kind":"integer","expected":"420","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Factor $105$ into distinct primes and count sign choices for each.

</details>

<details>
<summary>Hint 2</summary>

Pair each root with its additive inverse modulo $105$.

</details>

<details>
<summary>Worked solution</summary>

It forms four pairs summing to $105$, so the total is $4\cdot105=420$.

1. Since $105=3\cdot5\cdot7$, each prime congruence $x^2\equiv1$ has the two roots $\pm1$; CRT gives $2^3=8$ roots modulo $105$.
2. The map $x\mapsto105-x$ preserves the root condition and has no fixed point among these residues, because none is zero and $105$ is odd.
3. It forms four pairs summing to $105$, so the total is $4\cdot105=420$.

</details>
