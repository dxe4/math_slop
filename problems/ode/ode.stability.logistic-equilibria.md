# Identify the attracting logistic equilibrium

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}=y(1-y)$, which real equilibrium points are locally asymptotically stable? Enter those equilibrium values.

```answer
{"answer":{"kind":"set","expected":[1],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Find every zero of the right-hand side first.

</details>

<details>
<summary>Hint 2</summary>

At these hyperbolic equilibria, the sign of the derivative of the scalar vector field determines local stability.

</details>

<details>
<summary>Worked solution</summary>

The equilibrium derivative distinguishes attraction from repulsion.

1. The equilibrium values are $0$ and $1$. For $F(y)=y(1-y)$, $F^{\prime}(y)=1-2y$.
2. At zero the derivative is $1>0$, giving local repulsion. At one it is $-1<0$, giving local asymptotic attraction.
3. The requested equilibrium set is $\{1\}$.

</details>
