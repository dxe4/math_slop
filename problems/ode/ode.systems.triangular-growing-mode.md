# A triangular system with repeated growth rate

*Medium · [Differential equations problems](index.md)*

For $x^{\prime}=x+y$, $y^{\prime}=y$ with $(x(0),y(0))=(0,1)$, find the normalized vector $e^{-1}[x(1),y(1)]$.

```answer
{"answer":{"kind":"vector","expected":[1,1],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Solve the uncoupled second equation first.

</details>

<details>
<summary>Hint 2</summary>

Use an integrating factor for the resulting forced first equation.

</details>

<details>
<summary>Worked solution</summary>

The triangular structure determines one coordinate before the other.

1. The second equation gives $y=e^t$. Then $x^{\prime}-x=e^t$, so $(e^{-t}x)^{\prime}=1$.
2. The initial value yields $x=te^t$. Its derivative $(1+t)e^t$ equals $x+y$, verifying the system.
3. At one, the state is $[e,e]$, and the requested normalization gives $[1,1]$.

</details>
