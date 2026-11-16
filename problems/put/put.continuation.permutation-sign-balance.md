# Permutation sign balance

*Hard · [Original Putnam-style training](index.md)*

For $n\ge2$, prove exactly half the permutations in $S_n$ are even and half odd.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Choose a fixed transposition $\tau$.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by $\tau$ is an involutive bijection that reverses parity.

</details>

<details>
<summary>Model proof</summary>

There are $n!$ permutations and no fixed point under the parity-reversing map, so each class has $n!/2$.

1. Fix any transposition $\tau$, possible because $n\ge2$. The map $\pi\mapsto\tau\pi$ is a bijection of $S_n$ with inverse itself.
2. Sign multiplicativity gives $\operatorname{sgn}(\tau\pi)=-\operatorname{sgn}(\pi)$, so each pair under this map contains one even and one odd permutation.
3. There are $n!$ permutations and no fixed point under the parity-reversing map, so each class has $n!/2$.

**Self-assessment rubric**

- Choose a fixed transposition and define its bijective action on S\_n.
- Show each image has opposite sign and no fixed point.
- Pair all permutations and count both parity classes.

</details>
