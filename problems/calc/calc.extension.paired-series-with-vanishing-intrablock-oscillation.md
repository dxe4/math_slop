# Justify convergence of a paired series without assuming grouping is reversible

*Hard · [Calculus](index.md)*

Define a\_(2n−1)=1/√n and a\_(2n)=−1/√n+1/n² for n≥1. Prove $\sum a_n$ converges conditionally. Establish convergence of all partial sums rather than only the even ones; no exact value of Σ1/n² is required.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The pair sum is 1/n².

</details>

<details>
<summary>Hint 2</summary>

Compare an odd partial sum with the adjacent even one; the unmatched term tends to zero.

</details>

<details>
<summary>Model proof</summary>

Convergent grouped sums imply the original convergence here only because the unfinished block excursion vanishes.

1. The even partial sums satisfy S\_{2N}=Σ\_{n=1}^N1/n² and converge by the p-series criterion.
2. The next odd partial sum is S\_{2N+1}=S\_{2N}+1/√(N+1). The added excursion tends to zero, so odd partial sums approach the same limit. Together both parities prove convergence of the full sequence of partial sums.
3. Absolute convergence fails because the odd absolute terms alone sum to Σ1/√n, a divergent p-series. The absolute series dominates those nonnegative terms.
4. Therefore the original series converges conditionally. Merely noting cancellation within each pair would have omitted the necessary control of partial sums ending inside a pair.

**Self-assessment rubric**

- Finds the exact convergent even partial sums from pair sums.
- Controls odd partial sums by a vanishing residual and concludes full convergence.
- Uses the divergent nonnegative odd subsequence sum to rule out absolute convergence.

</details>
