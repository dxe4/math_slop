# Cancel a growing mode to find an exact stable manifold

*Medium · [Differential equations problems](index.md)*

For $x'=-x$, y'=y+x^2, the initial states whose trajectories tend to the origin form y\_0=c\*x\_0^2. Find c.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":3},"checker_scope":"Exact requested manifold or linearization coefficient only; no full dynamical argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Solve x first, then apply an integrating factor to the forced y equation.

</details>

<details>
<summary>Hint 2</summary>

The coefficient of the growing exp(t) mode must vanish.

</details>

<details>
<summary>Worked solution</summary>

An exact stable graph is the condition cancelling the unstable homogeneous component.

1. The first equation gives x(t)=x\_0\*exp(-t). The second becomes yprime-y=x\_0^2\*exp(-2t).
2. Integration gives y(t)=exp(t)\*(y\_0+x\_0^2/3)-(x\_0^2/3)\*exp(-2t).
3. The solution tends to zero exactly when y\_0+x\_0^2/3=0. Thus c=-1/3; the remaining two coordinates then decay.

</details>
