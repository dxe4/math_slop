# Prove arithmetic averaging preserves convergence but does not detect it

*Hard · [Calculus](index.md)*

If a\_n→L, prove $m_n=(1/n)\sum_{k=1}^na_k\to L$. Show the converse fails using a\_n=sin(nπ/2), and distinguish convergence of these arithmetic means from ordinary convergence of the original sequence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Split the average error into a fixed finite prefix and a uniformly small tail.

</details>

<details>
<summary>Hint 2</summary>

The counterexample has period four and zero sum over each complete period.

</details>

<details>
<summary>Model proof</summary>

A fixed initial contribution is diluted by averaging, while persistent oscillation can also be diluted.

1. For ε&gt;0 choose K with \|a\_k−L\|&lt;ε for k&gt;K. Then \|m\_n−L\|≤(1/n)Σ\_{k=1}^K\|a\_k−L\|+ε(n−K)/n for n&gt;K.
2. The finite-prefix numerator is constant, so its contribution tends to zero. Hence limsup \|m\_n−L\|≤ε, and arbitrary ε proves m\_n→L.
3. For a\_n=sin(nπ/2), each four-term block is 1,0,−1,0 and sums to zero. The remaining incomplete block has uniformly bounded sum, so its mean divided by n tends to zero.
4. But the original sequence has subsequences constantly 1 and −1 and does not converge. Thus averaging is a regular summation operation with a genuinely weaker converse, not a proof of ordinary convergence.

**Self-assessment rubric**

- Chooses a tail index and gives the explicit average-error split.
- Lets n grow with the prefix fixed, then uses arbitrary ε to prove the limit.
- Computes bounded period-four partial sums and exhibits distinct subsequential values.
- Distinguishes mean convergence from original sequence convergence.

</details>
