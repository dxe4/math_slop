# Prove integrability and integral convergence from uniform approximation

*Hard · [Real analysis](index.md)*

Let real Riemann-integrable f\_n on $[a,b]$, a&lt;=b, converge uniformly to f. Prove f is Riemann integrable and its integral is the limit of their integrals. Include the degenerate interval case and justify integrability before using an integral error bound.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For a&lt;b, compare upper and lower sums of uniformly close functions on one partition.

</details>

<details>
<summary>Hint 2</summary>

After integrability is established, bound the integral difference by interval length times uniform error.

</details>

<details>
<summary>Model proof</summary>

Uniform approximation controls both Darboux gaps and integral differences.

1. If a=b all integrals are zero and the conclusion is immediate. Otherwise f is bounded, since it is within one of a bounded integrable f\_N. Given epsilon&gt;0, choose N with uniform error below eta=epsilon/(4(b-a)).
2. Choose a partition whose f\_N upper-minus-lower sum is below epsilon/2. On each cell, replacing f\_N by f increases the oscillation by at most 2eta, so the f gap is below epsilon/2+2eta(b-a)=epsilon. The Darboux criterion proves f integrable.
3. Now the absolute integral difference is at most (b-a) times the uniform error, which tends to zero. This proves the asserted integral limit after its required integrability hypotheses are available.

**Self-assessment rubric**

- Handle the zero-length interval and justify boundedness for the nondegenerate case.
- Transfer a small-gap partition with a controlled uniform oscillation error.
- After establishing integrability, apply the valid integral difference bound.

</details>
