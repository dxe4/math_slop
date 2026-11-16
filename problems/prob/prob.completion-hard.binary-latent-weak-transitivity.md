# Locate the binary boundary of a conditional-independence principle

*Hard · [Probability problems](index.md)*

Let $X,Y,Z$ be binary variables with strictly positive joint probabilities. Assume $X\perp Y\mid Z$ and $X\perp Y$. Prove that either $X\perp Z$ or $Y\perp Z$. Then disprove the same conclusion when $Z$ takes three values by constructing a strictly positive joint law with both stated independences but neither concluding independence. Give exact probabilities or an exact sampling specification.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For the binary case, express marginal covariance as the covariance of the two conditional means.

</details>

<details>
<summary>Hint 2</summary>

With three latent states, two nonconstant centred mean vectors can be orthogonal. Use conditionally independent Bernoulli draws.

</details>

<details>
<summary>Model proof</summary>

A binary latent variable has only one centred direction; three latent states have room for orthogonal directions.

1. Write $\theta=P(Z=1)$, $a_z=P(X=1\mid Z=z)$ and $b_z=P(Y=1\mid Z=z)$. Conditional independence gives $E[XY\mid Z]=a_Zb_Z$, so $\operatorname{Cov}(X,Y)=\theta(1-\theta)(a_1-a_0)(b_1-b_0)$.
2. Marginal independence makes this zero. Strict positivity ensures $0<\theta<1$, so one mean difference is zero. For a binary response its conditional mean specifies its whole law; thus the corresponding variable is independent of $Z$.
3. For a counterexample let $Z$ be uniform on three states, let $a=(1/2-1/8,1/2,1/2+1/8)$ and $b=(1/2+1/8,1/2-2/8,1/2+1/8)$, and draw $X,Y$ independently given $Z$ with respective Bernoulli means $a_Z,b_Z$. Every mean lies strictly between zero and one, so every joint cell is positive.
4. Both marginal means are $1/2$. The centred vectors $(-1,0,1)/8$ and $(1,-2,1)/8$ have dot product zero, so $E[XY]=1/4$. For binary variables these means and this joint success probability imply marginal independence. Both mean vectors are nonconstant, so neither variable is independent of $Z$.

**Self-assessment rubric**

- Derive the binary factorisation from conditional independence.
- Explain why vanishing one mean difference gives independence.
- Verify positivity, orthogonal mean deviations and both failures of latent independence.

</details>
