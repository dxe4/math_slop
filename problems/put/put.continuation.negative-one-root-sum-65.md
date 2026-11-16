# Negative one root sum 65

*Medium · [Original Putnam-style training](index.md)*

Find the sum of all residues $x\in\{0,\ldots,64\}$ with $x^2\equiv-1\pmod{65}$.

```answer
{"answer":{"kind":"integer","expected":"130","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Work separately modulo $5$ and $13$.

</details>

<details>
<summary>Hint 2</summary>

Each chosen root has a distinct additive inverse among the solutions.

</details>

<details>
<summary>Worked solution</summary>

Each pair sums to $65$, so the requested sum is $130$.

1. Because $65=5\cdot13$, roots modulo $5$ are $\pm2$ and roots modulo $13$ are $\pm5$; CRT gives four solutions modulo $65$.
2. The negation map $x\mapsto65-x$ preserves $x^2\equiv-1$ and pairs the four nonzero roots into two pairs.
3. Each pair sums to $65$, so the requested sum is $130$.

</details>
