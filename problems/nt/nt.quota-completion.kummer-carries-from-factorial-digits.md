# Derive Kummer valuation from base-p carries

*Hard · [Number theory](index.md)*

For prime p and integers 0≤K≤N, prove $v_p\binom NK$ equals the number of carries when K and N−K are added in base p. Derive the digit-sum formula for v\_p(n!) used in the proof, including n=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Count multiples of p,p²,… in n!, then expand n in base p.

</details>

<details>
<summary>Hint 2</summary>

In each addition column compare input digits, output digit and incoming/outgoing carries, then sum the column equations.

</details>

<details>
<summary>Model proof</summary>

A factorial valuation becomes a digit-sum defect, and each carry contributes exactly p−1 to that defect.

1. Counting the p factors in n! gives v\_p(n!)=Σ\_{j≥1}⌊n/pʲ⌋. If n=Σ\_i d\_i pⁱ, reversing these finite sums gives Σ\_i d\_i(1+p+⋯+p^{i−1})=(n−s\_p(n))/(p−1), also zero at n=0.
2. Subtracting the factorial valuations in the binomial coefficient yields v\_p binom(N,K)=\[s\_p(K)+s\_p(N−K)−s\_p(N)\]/(p−1).
3. Write the column addition as a\_i+b\_i+c\_i=d\_i+p c\_{i+1}, with c₀=0 and eventually zero carries. Since two digits and one incoming carry sum to at most 2p−1, each c\_{i+1} is 0 or 1.
4. Summing the digit equations without place weights gives s\_p(K)+s\_p(N−K)−s\_p(N)=(p−1)Σ\_{i≥1}c\_i. Dividing by p−1 proves the claimed carry count, including zero-carry and endpoint K=0,N cases.

**Self-assessment rubric**

- Derives the factorial valuation and its digit-sum form from finite counting.
- Subtracts the three factorial expressions correctly.
- Defines both carry indices and verifies their binary values for adding two base-p numbers.
- Obtains the unweighted digit defect and covers zero/endpoint cases.

</details>
