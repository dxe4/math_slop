# A degenerate U-statistic has a second-order limit

*Medium · [Statistics and probability](index.md)*

Let iid real $X_i$ satisfy $E[X_i]=0$ and $E[X_i^2]=\sigma^2\in(0,\infty)$. For estimating the squared mean, consider $U_n=\binom n2^{-1}\sum_{i<j}X_iX_j$. Use the Hoeffding first-order projection and the identity relating $U_n$ to the sample sum to derive the limit of $nU_n$. Explain how a zero first-order gradient is compatible with a nondegenerate second-order limit. The ordinary CLT and LLN may be used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the conditional expectation of the kernel when one argument is fixed.

</details>

<details>
<summary>Hint 2</summary>

Expand the square of the full sample sum and separate diagonal from off-diagonal products.

</details>

<details>
<summary>Model proof</summary>

The first-order projection vanishes, leaving a quadratic Gaussian fluctuation.

1. For the kernel $h(x,y)=xy$, the target is $(EX)^2=0$ and $E[h(x,X)]-0=xEX=0$. Its first Hoeffding projection vanishes. The corresponding first-order gradient for the squared-mean functional is $2(EX)(X-EX)=0$.
2. The exact identity is $U_n=[(\sum_iX_i)^2-\sum_iX_i^2]/[n(n-1)]$, so $nU_n=[(n^{-1/2}\sum_iX_i)^2-n^{-1}\sum_iX_i^2]/(1-1/n)$.
3. The CLT gives $n^{-1/2}\sum_iX_i\Rightarrow\sigma Z$, and the LLN gives $n^{-1}\sum_iX_i^2\to\sigma^2$. Slutsky therefore yields $nU_n\Rightarrow\sigma^2(Z^2-1)$, with $Z\sim N(0,1)$.
4. In particular $\sqrt nU_n\to0$ in probability, while the finer $n$ scale retains a centered chi-squared fluctuation. A zero first-order efficiency bound does not eliminate second-order estimation behavior.

**Self-assessment rubric**

- Compute the degenerate first projection and connect it to the functional gradient.
- Derive the exact sum identity with its normalization.
- Apply CLT and LLN at the correct scale and interpret the first-order degeneracy.

</details>
