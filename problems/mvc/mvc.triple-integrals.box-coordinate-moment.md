# Integrate a coordinate over a box

*Easy · [Multivariable calculus problems](index.md)*

For $B=[0,1]\times[0,2]\times[0,3]$, compute $\iiint_B x\,dV$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The two coordinates absent from the integrand contribute interval lengths.

</details>

<details>
<summary>Hint 2</summary>

The remaining integral is the first moment of the unit interval.

</details>

<details>
<summary>Worked solution</summary>

Product geometry separates the coordinate integral from the other lengths.

1. The $y$ and $z$ integrations contribute factors $2$ and $3$.
2. The $x$ integral is $\int_0^1x\,dx=1/2$.
3. Thus the integral is $6\cdot(1/2)=3$.

</details>
