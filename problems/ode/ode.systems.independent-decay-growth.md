# Solve independent scalar modes

*Easy · [Differential equations problems](index.md)*

For $x^{\prime}=x$, $y^{\prime}=-y$ with $(x(0),y(0))=(1,2)$, find $[x(\log2),y(\log2)]$.

```answer
{"answer":{"kind":"vector","expected":[2,1],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The two equations are already uncoupled.

</details>

<details>
<summary>Hint 2</summary>

Evolve each initial coordinate with its own signed exponential rate.

</details>

<details>
<summary>Worked solution</summary>

The coordinate modes can be solved independently.

1. The solutions are $x=e^t$ and $y=2e^{-t}$, whose derivatives satisfy the given equations and initial data.
2. At $t=\log2$, the two exponentials are $2$ and $1/2$.
3. The state vector is $[2,1]$.

</details>
