# Follow an oscillator in the phase plane

*Medium · [Differential equations problems](index.md)*

For $x^{\prime}=y$, $y^{\prime}=-x$ with $(x(0),y(0))=(1,0)$, find the state at $t=\pi/2$.

```answer
{"answer":{"kind":"vector","expected":[0,-1],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The first coordinate satisfies a second-order oscillator equation.

</details>

<details>
<summary>Hint 2</summary>

Recover the second coordinate from the first derivative, keeping its sign.

</details>

<details>
<summary>Worked solution</summary>

The initial state determines a clockwise rotation on the unit circle.

1. The first coordinate has $x^{\prime\prime}=-x$ and initial data $x(0)=1$, $x^{\prime}(0)=0$, so $x=\cos t$.
2. Then $y=x^{\prime}=-\sin t$; it also satisfies $y^{\prime}=-x$.
3. At $t=\pi/2$, the state is $[0,-1]$.

</details>
