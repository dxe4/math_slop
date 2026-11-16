# Likelihood ratio scale

*Easy · [Statistics and probability](index.md)*

Two nested fits have maximized log likelihoods $\ell_{\mathrm{restricted}}=-10$ and $\ell_{\mathrm{full}}=-7$. What is $2(\ell_{\mathrm{full}}-\ell_{\mathrm{restricted}})$?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Take the full-model value minus the restricted-model value.

</details>

<details>
<summary>Hint 2</summary>

Apply the factor of two only after computing that difference.

</details>

<details>
<summary>Worked solution</summary>

Compute twice the log-likelihood gain.

1. The log-likelihood gain is $(-7)-(-10)=3$.
2. The requested statistic is $2\cdot3=6$.
3. Nested maximization makes this gain nonnegative. A chi-squared reference approximation requires additional regularity and asymptotic assumptions; it does not follow from these two values alone.

</details>
