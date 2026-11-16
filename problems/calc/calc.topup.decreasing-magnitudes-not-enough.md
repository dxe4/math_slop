# Explain why an alternating error theorem needs decay to zero

*Hard · [Calculus](index.md)*

Consider $\sum_{n=1}^{\infty}(-1)^{n+1}(1+1/n)$. Its positive magnitudes decrease. Prove the series diverges and explain why a standard alternating remainder estimate cannot justify approximating a finite sum for it.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Check the magnitude limit as well as its monotonicity.

</details>

<details>
<summary>Hint 2</summary>

Convergence of any real series requires its terms to tend to zero.

</details>

<details>
<summary>Model proof</summary>

Monotonicity alone does not satisfy the alternating-series criterion.

1. The magnitudes 1+1/n decrease but tend to one, not zero.
2. The signed terms consequently do not tend to zero; their even and odd subsequences tend to negative one and one.
3. The necessary term condition fails, so the series diverges. The standard alternating remainder theorem presupposes a convergent alternating series with magnitudes decreasing to zero, so it supplies no finite-sum error claim here.

**Self-assessment rubric**

- Compute the nonzero limit of the decreasing magnitudes.
- Use failure of term convergence to zero to prove divergence.
- Identify the missing hypothesis and avoid applying an error theorem without a finite target sum.

</details>
