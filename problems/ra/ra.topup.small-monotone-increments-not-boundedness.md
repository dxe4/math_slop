# Disprove convergence from decreasing increments alone

*Hard · [Real analysis](index.md)*

Let $s_n=\sum_{k=1}^n1/k$. Prove s\_n is increasing and s\_(n+1)-s\_n tends to zero, but s\_n does not converge to a finite real limit. Identify the missing boundedness condition.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The next increment is a single positive reciprocal.

</details>

<details>
<summary>Hint 2</summary>

Group terms between consecutive powers of two to force unbounded partial sums.

</details>

<details>
<summary>Model proof</summary>

Vanishing successive increments do not replace boundedness in monotone convergence.

1. Each increment is 1/(n+1)&gt;0 and tends to zero, so the partial sums increase with vanishing steps.
2. For every j&gt;=1, the block k=2^(j-1)+1 through 2^j has 2^(j-1) terms each at least 1/2^j, contributing at least one half.
3. Thus s\_(2^m)&gt;=1+m/2, so the sequence is unbounded and cannot have a finite limit. The boundedness hypothesis of monotone convergence is missing.

**Self-assessment rubric**

- Show both positivity and convergence to zero of the individual increments.
- Give an explicit uniform lower bound for every dyadic block.
- Deduce unboundedness and state precisely why the monotone theorem does not apply.

</details>
