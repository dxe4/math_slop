# Fixed sum product ones

*Hard · [Original Putnam-style training](index.md)*

For $x_1,\ldots,x_n\ge0$ with sum $S$, prove $\prod_{i=1}^n(1+x_i)\le(1+S/n)^n$ and characterize equality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Apply AM–GM to the positive numbers $1+x_i$.

</details>

<details>
<summary>Hint 2</summary>

Use the fixed sum to simplify their arithmetic mean.

</details>

<details>
<summary>Model proof</summary>

Raising to power $n$ proves the bound; equality requires all $y_i$ equal, equivalently $x_i=S/n$.

1. The positive numbers $y_i=1+x_i$ have sum $\sum y_i=n+S$.
2. AM–GM gives $(\prod y_i)^{1/n}\le(n+S)/n=1+S/n$.
3. Raising to power $n$ proves the bound; equality requires all $y_i$ equal, equivalently $x_i=S/n$.

**Self-assessment rubric**

- Shift variables to positive 1+x\_i with known total sum.
- Apply AM–GM with the correct arithmetic mean.
- Identify and verify the equal-variable equality case.

</details>
