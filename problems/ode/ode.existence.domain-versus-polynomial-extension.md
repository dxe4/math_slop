# Distinguish a solution formula from the equation domain

*Medium · [Differential equations problems](index.md)*

The equation $y^{\prime}=y/t$ is defined only for $t\ne0$. For $y(1)=3$, find the maximal solution interval containing the initial time.

```answer
{"answer":{"kind":"interval","expected":"(0, infinity)","checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Solve on the connected component of the equation domain containing the initial point.

</details>

<details>
<summary>Hint 2</summary>

An algebraic formula may extend to a time where the original equation is still undefined.

</details>

<details>
<summary>Worked solution</summary>

The maximal solution interval must lie within one connected component of the vector-field domain.

1. On $t>0$, separation gives $y=Ct$, and the initial condition fixes $C=3$.
2. The formula satisfies $y^{\prime}=3=y/t$ at every positive time.
3. The equation remains undefined at zero even though the polynomial formula extends there. The interval is $(0,\infty)$.

</details>
