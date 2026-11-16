# Prove convergence through opposite monotone parity subsequences

*Hard · [Real analysis](index.md)*

Define $x_1=0$ and x\_(n+1)=1-x\_n/2. Show the odd-index subsequence increases, the even-index subsequence decreases, and both converge to 2/3. Explain why the full sequence converges despite not being monotone.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Apply the recurrence twice to obtain a parity-preserving map.

</details>

<details>
<summary>Hint 2</summary>

Subtract the proposed fixed point to obtain an exact geometric error.

</details>

<details>
<summary>Model proof</summary>

An order-reversing iteration can converge through two monotone interlaced subsequences.

1. Two steps give x\_(n+2)=1/2+x\_n/4. The odd values start at zero below 2/3 and increase under this map without crossing 2/3; the even values start at one above 2/3 and decrease without crossing it.
2. Subtracting the fixed point in the one-step relation gives x\_n-2/3=(-1/2)^(n-1)(-2/3), so both parity errors tend to zero.
3. The full error also tends to zero. The first values 0,1,1/2 show the full sequence is neither increasing nor decreasing, so its convergence did not follow from full-sequence monotonicity.

**Self-assessment rubric**

- Derive the two-step map and show the correct directions and invariant ranges.
- Control both parity errors or derive their common fixed point rigorously.
- Show full convergence and distinguish it from full monotonicity.

</details>
