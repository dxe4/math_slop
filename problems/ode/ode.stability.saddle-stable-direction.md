# Isolate the stable direction of a saddle

*Medium · [Differential equations problems](index.md)*

For $x^{\prime}=x$, $y^{\prime}=-2y$, find a generator of the stable subspace normalized to have second coordinate $1$.

```answer
{"answer":{"kind":"vector","expected":[0,1],"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A stable initial state must have no contribution from a growing mode.

</details>

<details>
<summary>Hint 2</summary>

Solve the independent coordinates and inspect their forward limits.

</details>

<details>
<summary>Worked solution</summary>

The stable subspace contains exactly the initial vectors with no growing coordinate.

1. The solutions are $x(t)=x(0)e^t$ and $y(t)=y(0)e^{-2t}$, satisfying the equations directly.
2. The state tends to zero forward in time exactly when $x(0)=0$.
3. The stable subspace is the second coordinate axis, with normalized generator $[0,1]$.

</details>
