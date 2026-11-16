# A least-favorable direction by exponential tilting

*Medium · [Statistics and probability](index.md)*

In a nonparametric model, a real target has bounded canonical gradient $\phi\in L_0^2(P)$, with $v=E\phi^2>0$. Along a score $s$, its derivative is $E[\phi s]$. Use the exponential submodel $dP_t/dP=e^{t\phi}/E[e^{t\phi}]$ to find a least-favorable one-dimensional direction. Verify its score and DQM property, compute its parametric information bound for the target, and show no other square-integrable score gives a larger directional bound. You may use the regular parametric asymptotic information inequality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the normalized exponential density at zero; boundedness controls its square-root remainder.

</details>

<details>
<summary>Hint 2</summary>

Compare each directional derivative squared over score information using a Hilbert-space inequality.

</details>

<details>
<summary>Model proof</summary>

Tilting in the canonical-gradient direction attains the largest one-dimensional information lower bound.

1. Boundedness makes the normalizer finite near zero. The log-density derivative is $\phi-E_t\phi$, so at zero the score is $\phi$, since $E\phi=0$. A bounded Taylor expansion of the square-root density ratio gives an $O(t^2)$ norm remainder, verifying DQM.
2. The submodel information is $I_t|_{t=0}=v$. The target derivative is $E[\phi\cdot\phi]=v$, so its parametric asymptotic variance lower bound is $v^2/v=v$.
3. For any nonzero score $s\in L_0^2(P)$, Cauchy–Schwarz gives $(E[\phi s])^2/E[s^2]\le E\phi^2=v$. Equality holds when $s$ is proportional to $\phi$.
4. Thus the proposed submodel attains the largest directional lower bound and is least favorable at first order. This constructs a local information bound; it does not itself construct an estimator attaining it in the full model.

**Self-assessment rubric**

- Derive the score and justify the DQM expansion.
- Compute the target derivative and submodel lower bound.
- Prove the directional optimum and identify its equality condition.
- Distinguish a least-favorable information direction from estimator construction.

</details>
