# Combine two decay rates in a triangular system

*Medium · [Differential equations problems](index.md)*

For $x^{\prime}=-x$, $y^{\prime}=x-2y$ with $(x(0),y(0))=(1,0)$, find the state at $t=\log2$.

```answer
{"answer":{"kind":"vector","expected":["1/2","1/4"],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Solve the independent first coordinate, then insert it into the second equation.

</details>

<details>
<summary>Hint 2</summary>

The second coordinate is a difference of two exponential modes after the initial value is imposed.

</details>

<details>
<summary>Worked solution</summary>

An integrating factor solves the forced lower coordinate.

1. The first coordinate is $x=e^{-t}$. The second satisfies $y^{\prime}+2y=e^{-t}$, giving $y=e^{-t}+Ce^{-2t}$.
2. The initial value gives $C=-1$. Differentiation verifies $y^{\prime}=x-2y$.
3. At $\log2$, the state is $[1/2,1/2-1/4]=[1/2,1/4]$.

</details>
