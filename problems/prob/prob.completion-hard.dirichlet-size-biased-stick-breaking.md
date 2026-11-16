# Derive independent breaks in a size-biased Dirichlet ordering

*Hard · [Probability problems](index.md)*

Let $(P_1,\ldots,P_n)\sim\operatorname{Dirichlet}(\alpha,\ldots,\alpha)$, $n\ge2$, $\alpha>0$. Order its coordinates by sequential size-biased sampling: choose the next unused label with probability proportional to its mass. If $V_j$ is the selected mass divided by the remaining total just before selection, prove that $V_1,\ldots,V_{n-1}$ are independent and identify each beta distribution. Derive the required density factorisation, including the effect of selecting a coordinate by its own mass; do not mistake the selected coordinate for a uniformly chosen one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

First condition on which label is chosen. Its selection multiplies the symmetric Dirichlet density by that coordinate.

</details>

<details>
<summary>Hint 2</summary>

For a distinguished coordinate $v$, replace the others by $(1-v)$ times a normalised remaining vector and compute the Jacobian.

</details>

<details>
<summary>Model proof</summary>

Size-bias adds one to the chosen Dirichlet parameter, while neutrality leaves the remaining symmetric vector unchanged.

1. For a symmetric Dirichlet vector of dimension $k$, the density on the simplex is proportional to $\prod_{i=1}^kp_i^{\alpha-1}$. By symmetry the first size-biased label $I$ is uniform among the $k$ labels, since $P(I=i)=EP_i=1/k$. Conditional on $I=i$, its density is multiplied by $kp_i$, so the chosen parameter becomes $\alpha+1$ and all others remain $\alpha$.
2. Write $v=p_i$ and $r_l=p_l/(1-v)$ for the other $k-1$ coordinates. The simplex Jacobian is $(1-v)^{k-2}$. Combining powers gives density proportional to $v^\alpha(1-v)^{(k-1)\alpha-1}\prod_{l\ne i}r_l^{\alpha-1}$. Thus $v\sim\operatorname{Beta}(\alpha+1,(k-1)\alpha)$ and the normalised remainder is an independent symmetric Dirichlet vector of dimension $k-1$.
3. The factorised distributions do not depend on the identity $i$. Therefore the independence and symmetric remainder conclusion also hold after the selected label is forgotten. Given the remaining normalised vector, the next size-biased selection uses exactly its coordinate proportions; the past total mass cancels.
4. Iterating this factorisation with $k=n,n-1,\ldots,2$ proves independent $V_j\sim\operatorname{Beta}(\alpha+1,(n-j)\alpha)$ for $1\le j<n$. The final break is one. The selected original masses are $V_j\prod_{l<j}(1-V_l)$, so the result specifies the whole size-biased mass ordering while keeping the distinction from a uniform coordinate sample.

**Self-assessment rubric**

- Condition on a size-biased label and derive the added Dirichlet parameter.
- Compute the beta density and independent normalised remainder.
- Explain why the same factorisation repeats independently after each selection.
- Translate the breaks back to actual selected masses and identify the final break.

</details>
