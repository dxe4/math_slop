# A distribution-free minimum-variance argument from two observations

*Hard · [Statistics and probability](index.md)*

Let $X_1,X_2$ be independent with common law $P$. A real-valued statistic $T(X_1,X_2)$ is unbiased for $\operatorname{Var}_P(X)$ for every finitely supported real distribution $P$. Prove that its symmetrization is necessarily $(X_1-X_2)^2/2$, and that this symmetric statistic is the unique uniformly minimum-variance unbiased rule over that class. Do not assume beforehand that $T$ is a polynomial.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

First use a point-mass distribution, then a distribution supported on two arbitrary distinct real points.

</details>

<details>
<summary>Hint 2</summary>

For independent identically distributed observations, conditioning on the unordered pair averages the two possible orders.

</details>

<details>
<summary>Model proof</summary>

Universal unbiasedness determines the symmetric kernel through two-point distributions.

1. Taking $P=\delta_x$ gives $T(x,x)=0$ for every $x$. For $P=(\delta_x+\delta_y)/2$, unbiasedness gives $[T(x,y)+T(y,x)]/4=(x-y)^2/4$.
2. Thus the symmetrized function $[T(x,y)+T(y,x)]/2$ is exactly $U(x,y)=(x-y)^2/2$, including the diagonal. For any iid pair, $EU=\operatorname{Var}(X)$ whenever the second moment exists.
3. Under any finite-support $P$, conditional expectation of $T$ given the unordered pair equals its symmetrization, because the two distinct orders have equal conditional probabilities. Hence $E[T\mid\{X_1,X_2\}]=U$.
4. All values on that finite support are finite. Conditional variance decomposition therefore yields $\operatorname{Var}_P(T)=\operatorname{Var}_P(U)+E_P\operatorname{Var}(T\mid\{X_1,X_2\})\ge\operatorname{Var}_P(U)$.
5. If a rule achieves equality for every such $P$, choosing each two-point distribution forces its values in both orders to equal $U(x,y)$. Together with the diagonal identity, it is the same function everywhere. This proves the stated universal uniqueness.

**Self-assessment rubric**

- Derive pointwise constraints without assuming a polynomial statistic.
- Identify and verify the universal unbiased symmetrization.
- Use iid ordering symmetry in conditional expectation.
- Prove the variance inequality and its universal equality condition.

</details>
