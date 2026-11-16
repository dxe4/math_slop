# Separate a closed proper subspace without assuming nearest-point attainment

*Medium · [Real analysis](index.md)*

Let M be a proper closed linear subspace of a normed space X, and let 0&lt;alpha&lt;1. Prove there is a unit vector $x$ with dist(x,M)&gt;alpha. Do not assume M has a nearest point to an arbitrary vector.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose z outside M; its distance d from M is strictly positive.

</details>

<details>
<summary>Hint 2</summary>

Choose one approximate minimizer close enough to d and normalize the residual.

</details>

<details>
<summary>Model proof</summary>

An approximate minimizer suffices for quantitative separation.

1. Choose z outside M. Since M is closed, d=dist(z,M)&gt;0. By the infimum definition choose m\_0 in M with \|\|z-m\_0\|\|&lt;d/alpha, possible because alpha&lt;1.
2. Set x=(z-m\_0)/\|\|z-m\_0\|\|, which has norm one. For any m in M, linearity shows m\_0+\|\|z-m\_0\|\|\*m lies in M.
3. Thus \|\|x-m\|\|=\|\|z-(m\_0+\|\|z-m\_0\|\|\*m)\|\|/\|\|z-m\_0\|\|&gt;=d/\|\|z-m\_0\|\|&gt;alpha. Taking the infimum proves the claim, without requiring attainment of d.

**Self-assessment rubric**

- Use closedness and a legitimate approximate minimizer.
- Preserve subspace membership under the required affine combination.
- Retain the strict factor and prove a unit vector has the stated distance.

</details>
