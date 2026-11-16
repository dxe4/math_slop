# Find a sharp singularity perturbation threshold

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $D=\operatorname{diag}(2,5)$, find the minimum induced Euclidean norm of a real perturbation $E$ for which $D+E$ is singular.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

If a unit vector is killed by the perturbed map, compare $Ev$ with $Dv$.

</details>

<details>
<summary>Hint 2</summary>

A perturbation killing the least-stretched coordinate gives an attainable bound.

</details>

<details>
<summary>Worked solution</summary>

A lower stretching bound and a rank-one perturbation meet exactly.

1. For every unit vector $v$, $\|Dv\|\ge2$. If $(D+E)v=0$, then $\|E\|_2\ge\|Ev\|=\|Dv\|\ge2$.
2. The choice $E=\operatorname{diag}(-2,0)$ has norm two and makes $D+E$ singular.
3. The lower bound is attained, so the requested minimum is two.

</details>
