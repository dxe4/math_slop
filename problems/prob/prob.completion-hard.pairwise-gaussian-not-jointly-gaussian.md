# Construct Gaussian pairs without a Gaussian triple

*Hard · [Probability problems](index.md)*

Construct centred variables $X,Y,Z$ such that every pair is a pair of independent standard normals, but the triple is not jointly Gaussian. Use a fully specified sampling construction and prove the pair laws, not just zero covariances. Give a finite mixed moment that certifies failure of joint Gaussianity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Separate a standard normal into an independent fair sign and half-normal magnitude.

</details>

<details>
<summary>Hint 2</summary>

Three signs can be pairwise independent while their product is deterministic. Combine them with independent magnitudes.

</details>

<details>
<summary>Model proof</summary>

Pairwise Gaussian laws cannot see a dependence constraint imposed on the three signs together.

1. Let $U,V$ be independent fair signs, and let $A,B,C$ be independent copies of $|G|$ for $G\sim N(0,1)$, independent of the signs. Set $X=UA$, $Y=VB$, $Z=UV\,C$. Each variable is a standard normal because its sign is fair and independent of its half-normal magnitude.
2. The sign pairs $(U,V)$, $(U,UV)$ and $(V,UV)$ are each uniform on the four sign pairs. Since the corresponding magnitudes are independent and independent of all signs, each of $(X,Y),(X,Z),(Y,Z)$ is exactly a pair of independent standard normals.
3. Their product is $XYZ=ABC>0$ almost surely and has expectation $(E|G|)^3=(2/\pi)^{3/2}$, using $E|G|=\sqrt{2/\pi}$ from the normal density integral.
4. Every centred jointly Gaussian vector is invariant under simultaneous sign reversal, so its integrable odd-degree mixed moment $E[XYZ]$ is zero. Alternatively covariance identity would force independent coordinates in a jointly Gaussian triple. Either conclusion contradicts the constructed positive mixed moment.

**Self-assessment rubric**

- Specify independent primitives and prove each normal marginal.
- Verify the full pair laws using the sign pairs, not only covariance.
- Compute a finite mixed moment that a centred Gaussian triple cannot have.

</details>
