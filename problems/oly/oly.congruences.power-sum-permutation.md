# Use a residue permutation to annihilate a sum

*Hard · [Original olympiad-style problems](index.md)*

Find the least nonnegative residue modulo $101$ of $S=\sum_{k=1}^{100}k^{2024}$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by a nonzero residue permutes the one hundred nonzero classes.

</details>

<details>
<summary>Hint 2</summary>

Choose the multiplier two and show its 2024th power is not one modulo 101.

</details>

<details>
<summary>Worked solution</summary>

A modular permutation forces the power sum to equal a nontrivial scalar multiple of itself.

1. Multiplication by two permutes the nonzero residues modulo prime 101, so $S\equiv2^{2024}S$. Fermat gives $2^{2024}\equiv2^{24}$.
2. Now $2^{10}\equiv14$, $2^{20}\equiv95$, and $2^{24}\equiv95\cdot16\equiv5\pmod{101}$.
3. Thus $S\equiv5S$, giving $4S\equiv0$. Four is invertible modulo 101, so the residue is $0$.

</details>
