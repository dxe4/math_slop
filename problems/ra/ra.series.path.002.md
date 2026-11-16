# Use partial sums to reject a zero-term converse

*Medium · [Real analysis](index.md)*

For the harmonic series Σ $1/k$, you are given S\_{$2^m$}≥$1+m/2$ for every integer $m\geq 0$. Which conclusion follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. The series diverges although its terms tend to zero.
2. The series converges because $1/k$ tends to zero.
3. The series converges to $1$ because its first term is $1$.
4. It diverges because its individual terms fail to tend to zero.

```answer
{"answer":{"kind":"multiple_choice","expected":"the_series_diverges","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["the_series_diverges","the_series_converges","first_term_is_1","it_diverges_because"]}
```

<details>
<summary>Hint 1</summary>

The displayed lower bound grows without bound.

</details>

<details>
<summary>Hint 2</summary>

A convergent real partial-sum sequence must be bounded.

</details>

<details>
<summary>Worked solution</summary>

The zero-term condition is necessary, while partial sums decide convergence.

1. The subsequence of partial sums at indices $2^m$ is at least $1+m/2$ and hence unbounded.
2. Therefore the partial sums cannot converge to a finite limit, despite $1/k\to 0$.

</details>
