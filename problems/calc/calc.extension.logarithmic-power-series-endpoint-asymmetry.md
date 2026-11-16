# Check both endpoints of a power-series interval

*Medium · [Calculus](index.md)*

Find the real convergence interval of $\sum_{n=1}^\infty x^n/n$. Include exactly the convergent endpoints.

```answer
{"answer":{"kind":"interval","expected":"[-1,1)","checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The ratio test handles \|x\|&lt;1 and \|x\|&gt;1.

</details>

<details>
<summary>Hint 2</summary>

At each endpoint use its own series rather than the inconclusive ratio limit one.

</details>

<details>
<summary>Worked solution</summary>

Absolute interior convergence can coexist with different endpoint behaviors.

1. The absolute ratio tends to \|x\|, so the series converges absolutely inside (−1,1) and diverges outside \[−1,1\].
2. At x=1 it is the divergent harmonic series. At x=−1 it is an alternating harmonic series, which converges.
3. The complete interval is \[−1,1).

</details>
