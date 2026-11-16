# Srs covariance indicators

*Medium · [Statistics and probability](index.md)*

Let $N\ge2$ and $0\le n\le N$ be integers. A simple random sample is a uniformly selected $n$-subset of $N$ labelled units. For distinct units $i,j$, prove $\operatorname{Cov}(I_i,I_j)=-n(N-n)/(N^2(N-1))$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Obtain a marginal inclusion chance and a joint inclusion chance from the uniform fixed-size design.

</details>

<details>
<summary>Hint 2</summary>

Express covariance through the joint indicator expectation and the two marginal expectations before simplifying.

</details>

<details>
<summary>Model proof</summary>

Fixed sample size makes distinct inclusion indicators negatively dependent except in degenerate designs.

1. Uniform sampling gives $E I_i=E I_j=n/N$ and $E(I_iI_j)=n(n-1)/(N(N-1))$. The joint formula also gives zero when fewer than two units are selected.
2. Subtracting the product of marginals gives $\operatorname{Cov}(I_i,I_j)=n(n-1)/(N(N-1))-n^2/N^2$.
3. With denominator $N^2(N-1)$, the numerator is $nN(n-1)-n^2(N-1)=-n(N-n)$, proving the formula. It is negative for $0<n<N$ and zero for $n=0$ or $n=N$.

**Self-assessment rubric**

- Derive both marginal and joint inclusion probabilities from the fixed-size design.
- Use the covariance identity before algebraic simplification.
- Simplify with the stated positive denominator and handle degenerate sample sizes.

</details>
