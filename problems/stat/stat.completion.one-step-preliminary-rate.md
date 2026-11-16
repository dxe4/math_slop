# Why a one-step update needs a product-rate condition

*Medium · [Statistics and probability](index.md)*

In a scalar regular model let $E\psi_{\theta_0}=0$, $\operatorname{Var}(\psi_{\theta_0})=I>0$. Suppose, uniformly for consistent local arguments, $P_n\psi_t=P_n\psi_{\theta_0}-I(t-\theta_0)+O_P(n^{-1/2}|t-\theta_0|)+O_P(|t-\theta_0|^2)$. Let $\widetilde\theta-\theta_0=o_P(n^{-1/4})$ and $\widehat I-I=o_P(n^{-1/4})$. With the score CLT assumed, use one-step linearization to prove that $\theta_1=\widetilde\theta+\widehat I^{-1}P_n\psi_{\widetilde\theta}$ has limit variance $I^{-1}$ at root-$n$ scale. Explain why consistency of $\widehat I$ alone is not the stated sufficient rate condition.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Insert the local score expansion into the update before multiplying by the root sample size.

</details>

<details>
<summary>Hint 2</summary>

Separate the quadratic preliminary-estimation error from the product involving information-estimation error.

</details>

<details>
<summary>Model proof</summary>

The update cancels the first-order preliminary error; the remaining errors are quadratic or products.

1. Write $d=\widetilde\theta-\theta_0$. Substitution gives $\theta_1-\theta_0=\widehat I^{-1}P_n\psi_{\theta_0}+(1-\widehat I^{-1}I)d+O_P(n^{-1/2}|d|)+O_P(d^2)$, with inverse information bounded in probability.
2. At root-$n$ scale, the last two errors vanish because $d=o_P(n^{-1/4})$. The middle term also vanishes: $1-\widehat I^{-1}I=\widehat I^{-1}(\widehat I-I)$, and $\sqrt n(\widehat I-I)d=o_P(1)$.
3. Therefore $\sqrt n(\theta_1-\theta_0)=I^{-1}n^{-1/2}\sum_i\psi_{\theta_0}(X_i)+o_P(1)\Rightarrow N(0,I^{-1})$.
4. Mere $\widehat I-I=o_P(1)$ does not itself bound $\sqrt n(\widehat I-I)d$ when the preliminary error can be larger than $n^{-1/2}$. Other assumptions could ensure that product vanishes, but consistency alone is not the displayed sufficient guarantee.

**Self-assessment rubric**

- Separate the canceled first-order error from the remaining terms.
- Verify each root-n remainder with the stated rates.
- Apply the CLT with the correct inverse-information variance.
- Explain the uncontrolled product under information consistency alone.

</details>
