# Check which domain contains a Cauchy limit

*Medium · [Real analysis](index.md)*

Suppose $q_{n}\in Q$ and \|$q_{n}-\sqrt{3}$\|≤$1/n$ for every positive integer n. You may use that $\sqrt{3}$ is irrational. Which statement is correct? Select the mathematically correct statement from the four alternatives.

**Options**

1. $q_{n}$ cannot be Cauchy because its proposed limit is irrational.
2. $q_{n}$ is Cauchy and converges in R to $\sqrt{3}$, but it has no limit in Q.
3. $q_{n}$ converges in Q to a rational nearest to $\sqrt{3}$.
4. The error bound forces the rational sequence to be eventually constant.

```answer
{"answer":{"kind":"multiple_choice","expected":"q_n_is_cauchy","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["q_n_cannot_be","q_n_is_cauchy","q_n_converges_in","the_error_bound_forc"]}
```

<details>
<summary>Hint 1</summary>

The error bound proves real convergence to $\sqrt{3}$.

</details>

<details>
<summary>Hint 2</summary>

A convergent sequence is Cauchy, and real limits are unique.

</details>

<details>
<summary>Worked solution</summary>

Cauchy behavior does not guarantee the limit lies in an incomplete subdomain.

1. The bound tends to zero, giving $q_{n}\to \sqrt{3}$ in R and therefore the Cauchy condition.
2. Any rational limit would also be a real limit and would equal $\sqrt{3}$ by uniqueness, contradicting irrationality. Thus B holds.

</details>
