# Harmonic generating identity

*Hard · [Original Putnam-style training](index.md)*

For $|x|<1$, prove $\sum_{n\ge1}H_nx^n=-\log(1-x)/(1-x)$, where $H_n=\sum_{k=1}^n1/k$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Write $H_n$ as its defining finite sum and reverse the two summations.

</details>

<details>
<summary>Hint 2</summary>

After fixing $k$, sum the remaining geometric tail in $n$.

</details>

<details>
<summary>Model proof</summary>

The logarithm series $\sum_{k\ge1}x^k/k=-\log(1-x)$ gives the stated identity.

1. Absolute convergence holds for $|x|<1$ because $H_n\le n$ and $\sum n|x|^n<\infty$, so $\sum_n\sum_{k\le n}x^n/k$ may be rearranged.
2. For fixed $k$, $\sum_{n=k}^{\infty}x^n=x^k/(1-x)$, giving $(1-x)^{-1}\sum_{k\ge1}x^k/k$.
3. The logarithm series $\sum_{k\ge1}x^k/k=-\log(1-x)$ gives the stated identity.

**Self-assessment rubric**

- Show the double series may be rearranged for \|x\|&lt;1.
- Sum the n tail after fixing the harmonic index k.
- Identify the remaining logarithm series and denominator.

</details>
