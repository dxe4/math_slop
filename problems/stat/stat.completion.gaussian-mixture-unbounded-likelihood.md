# A Gaussian mixture need not have a finite MLE

*Hard · [Statistics and probability](index.md)*

For a fixed real sample $x_1,\ldots,x_n$ with $n\ge2$, consider the two-component Gaussian mixture family with mixing weight $1/2$, freely varying means, and strictly positive component variances. Prove that its likelihood is unbounded above. Your argument must retain a positive density for every observation while making the likelihood diverge.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A component need not fit the whole sample if the other component maintains positive density everywhere.

</details>

<details>
<summary>Hint 2</summary>

Let one component concentrate on one observed point while keeping the other fixed.

</details>

<details>
<summary>Model proof</summary>

Variance collapse at one observation creates an unbounded likelihood.

1. Write $\phi$ for the standard normal density. Consider the allowed subfamily $f_\varepsilon(x)=\tfrac12\varepsilon^{-1}\phi((x-x_1)/\varepsilon)+\tfrac12\phi(x)$, with $\varepsilon>0$.
2. At the first observation, $f_\varepsilon(x_1)\ge1/(2\varepsilon\sqrt{2\pi})$. At every other observation, $f_\varepsilon(x_j)\ge\phi(x_j)/2>0$.
3. Thus $\prod_{j=1}^n f_\varepsilon(x_j)\ge[1/(2\varepsilon\sqrt{2\pi})]\prod_{j=2}^n[\phi(x_j)/2]\to\infty$. This lower bound works even when observations coincide.
4. Every allowed parameter vector has finite positive component variances and hence a finite likelihood at the fixed sample. The supremum is infinite and no finite parameter vector maximizes it. A variance lower bound or other regularization changes this optimization problem.

**Self-assessment rubric**

- Construct a subfamily with strictly positive variances.
- Keep all other observation densities uniformly positive.
- Prove divergence and explain why no allowed finite maximizer exists.

</details>
