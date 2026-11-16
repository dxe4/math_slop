# An average-effect gradient by conditional score decomposition

*Medium · [Statistics and probability](index.md)*

Let $O=(X,A,Y)$ have an unrestricted observed-data law with binary $A$, bounded real $Y$, and $\varepsilon<e(X)=P(A=1\mid X)<1-\varepsilon$ for some $\varepsilon>0$. Put $\mu_a(X)=E[Y\mid A=a,X]$ and $\Psi=E[\mu_1(X)-\mu_0(X)]$. Derive its canonical gradient by decomposing a regular submodel score as $s=s_X+s_A+s_Y$, with the usual conditional mean-zero components. You may use that the unrestricted tangent closure is $L_0^2(P)$. This is an observed-law functional; a causal interpretation requires additional assumptions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the covariate marginal contribution separately from the two conditional outcome means.

</details>

<details>
<summary>Hint 2</summary>

Express each conditional-outcome derivative as an observed-data expectation by weighting its treatment stratum.

</details>

<details>
<summary>Model proof</summary>

Conditional score factorization identifies which nuisance components affect the target.

1. The covariate-marginal derivative is $E[(\mu_1-\mu_0-\Psi)s_X]$. The treatment-mechanism derivative is zero because the target depends on the conditional outcome laws and covariate law, not on their treatment weights.
2. The outcome derivative is $E_X[E[(Y-\mu_1)s_Y\mid A=1,X]-E[(Y-\mu_0)s_Y\mid A=0,X]]$. Reweighting the strata expresses it as $E[\{A(Y-\mu_1)/e-(1-A)(Y-\mu_0)/(1-e)\}s_Y]$.
3. Thus $\phi=\mu_1-\mu_0-\Psi+A(Y-\mu_1)/e-(1-A)(Y-\mu_0)/(1-e)$ has mean zero. Conditioning shows its inner product with $s_A$ vanishes, and its inner products with $s_X,s_Y$ give exactly the two derivatives just calculated.
4. Bounded outcomes and overlap give $\phi\in L_0^2(P)$. Since the tangent closure is the full mean-zero space, this gradient is canonical and its squared norm is the efficiency bound for regular asymptotically linear estimation of the observed-law target.

**Self-assessment rubric**

- Differentiate the covariate and outcome components and exclude treatment-weight dependence.
- Represent the outcome derivatives by observed-data residuals.
- Verify the gradient against all three conditional score components.
- Use the tangent closure and integrability assumptions to identify the canonical gradient.

</details>
