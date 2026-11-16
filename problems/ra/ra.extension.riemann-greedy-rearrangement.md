# Build a rearrangement with an arbitrary prescribed real sum

*Hard · [Real analysis](index.md)*

Let a real series be conditionally convergent. Prove that for every prescribed $L\in\mathbb R$ there is a rearrangement converging to L. Describe a permutation using every original term, including any zero terms, and control partial sums inside the greedy blocks.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The sums of positive terms and of negative terms diverge to opposite infinities.

</details>

<details>
<summary>Hint 2</summary>

Alternate unused positive and negative terms until crossing the target; the last-term overshoots tend to zero.

</details>

<details>
<summary>Model proof</summary>

Divergent signed masses and vanishing term sizes allow a complete greedy construction.

1. Write each term's positive and negative parts. Since the original series converges but not absolutely, the positive-term sum is positive infinity and the negative-term sum is negative infinity; otherwise finiteness of one would force finiteness of both. Also all original term sizes tend to zero.
2. List positive terms and negative terms separately in their original orders. Add unused positive terms until the partial sum first exceeds L, then unused negative terms until it first falls below L, and repeat, choosing the starting sign as needed. Each block is finite by the divergent signed masses. Each sign list advances without bound, so every nonzero term is eventually used. After block k insert the next unused zero term if one exists; this also eventually uses every zero without affecting sums.
3. The overshoot of each crossing is bounded by the magnitude of the last term added. Those terms go to zero because their original indices tend to infinity. Within a block, partial sums move monotonically between a preceding near-target endpoint and the next near-target crossing. Hence all rearranged partial sums tend to L, and the construction is a permutation of all original indices.

**Self-assessment rubric**

- Derive divergence of both signed subseries and vanishing term sizes.
- Construct finite crossing blocks and ensure every index, including zero terms, appears.
- Bound overshoots and the intermediate sums to prove full convergence.

</details>
