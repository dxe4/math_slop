# Derive a finite weighted geometric sum by shifting indices

*Hard · [Foundations bridge](index.md)*

For every integer n≥1 prove $\sum_{k=1}^n k2^k=(n-1)2^{n+1}+2$ by subtracting a shifted copy of the sum. Track both boundary terms explicitly rather than citing a differentiated infinite series.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Multiply the finite sum by 2 and shift its index from k to k+1.

</details>

<details>
<summary>Hint 2</summary>

In 2S−S, interior coefficients differ by −1, and the top term has no partner.

</details>

<details>
<summary>Model proof</summary>

Finite index shifts give the exact boundary correction without any convergence argument.

1. Write S=∑\_{j=1}^n j2ʲ. Then 2S=∑\_{j=2}^{n+1}(j−1)2ʲ.
2. Subtracting gives S=n2^{n+1}−∑\_{j=2}^n2ʲ−2. The −2 is the unmatched j=1 term, and n2^{n+1} is the unmatched top term.
3. The finite geometric sum ∑\_{j=2}^n2ʲ equals 2^{n+1}−4, also for n=1 when both sides are zero by the empty-sum convention.
4. Substitution yields S=n2^{n+1}−(2^{n+1}−4)−2=(n−1)2^{n+1}+2. The argument uses only finite sums and holds for every n≥1.

**Self-assessment rubric**

- Writes the doubled sum with the correct new index and coefficient j−1.
- Computes interior differences and both unmatched endpoint terms correctly.
- Evaluates the finite geometric remainder, including n=1, and derives the formula without an infinite series.

</details>
