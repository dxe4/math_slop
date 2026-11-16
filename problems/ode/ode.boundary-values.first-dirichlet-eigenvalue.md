# Find a first boundary eigenvalue

*Medium · [Differential equations problems](index.md)*

Find the smallest positive $\lambda$ for which $y^{\prime\prime}+\lambda y=0$, $y(0)=y(\pi)=0$, has a nonzero real solution.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a positive parameter, use its positive square root as the oscillation frequency.

</details>

<details>
<summary>Hint 2</summary>

The endpoint condition quantizes that frequency.

</details>

<details>
<summary>Worked solution</summary>

Nontrivial Dirichlet modes require an integer number of half-waves.

1. For $\lambda>0$, the first boundary condition gives $y=B\sin(\sqrt\lambda\,t)$.
2. Nonzero $B$ requires $\sin(\pi\sqrt\lambda)=0$, so $\sqrt\lambda$ is a positive integer.
3. The smallest value is $\lambda=1$, attained by $y=\sin t$, which verifies the equation and both boundary conditions.

</details>
