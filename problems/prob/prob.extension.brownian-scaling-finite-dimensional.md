# Brownian scaling at finitely many times

*Medium · [Probability problems](index.md)*

For standard Brownian motion and a constant $c>0$, define $X_t=c^{-1/2}B_{ct}$ for $t\ge0$. Using centred joint Gaussianity and covariance, prove that $X$ and standard Brownian motion have the same finite-dimensional distributions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Fix any finite list of nonnegative times and identify the type of their joint vector.

</details>

<details>
<summary>Hint 2</summary>

Calculate every covariance entry of the rescaled vector. A centred Gaussian vector is determined by its covariance matrix.

</details>

<details>
<summary>Model proof</summary>

Check the complete mean vector and covariance matrix at arbitrary finite times.

1. For any $t_1,\ldots,t_m\ge0$, the vector $(B_{ct_1},\ldots,B_{ct_m})$ is jointly Gaussian and centred; multiplying by $c^{-1/2}$ preserves these properties.
2. For every $i,j$, $\operatorname{Cov}(X_{t_i},X_{t_j})=c^{-1}\min(ct_i,ct_j)=\min(t_i,t_j)$, which is the standard Brownian covariance matrix at the chosen times.
3. Centred Gaussian vectors, including degenerate ones at repeated times or time zero, are determined by covariance. Thus the two finite-time vectors have the same law for every finite list, proving equality of finite-dimensional distributions. This argument compares distributions, not pathwise equality of the two processes.

The centred Gaussian covariance remains $\min(s,t)$, so every finite-dimensional law matches.

**Self-assessment rubric**

- Identify a centred jointly Gaussian vector at every arbitrary finite list of times.
- Compute all covariance entries using the positive time and amplitude scales.
- Use Gaussian determination by mean and covariance to identify the finite-dimensional laws, without claiming pathwise equality.

</details>
