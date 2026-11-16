# Transform an integrand and its area factor

*Hard · [Multivariable calculus problems](index.md)*

Let $R=[1,2]\times[0,1]$ in the $(u,v)$ plane and $D=T(R)$ for $T(u,v)=(u^2,v)$. Compute $\iint_D x\,dA$. Use the stated positive-$u$ branch.

```answer
{"answer":{"kind":"rational","expected":{"numerator":15,"denominator":2},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The positive branch makes the map one-to-one.

</details>

<details>
<summary>Hint 2</summary>

Both $x$ and the Jacobian must be expressed in the new variables.

</details>

<details>
<summary>Worked solution</summary>

Transforming only the integrand would omit the varying area scale.

1. On $1\leq u\leq2$, the map is one-to-one and has positive determinant $2u$.
2. The integrand becomes $u^2$, so the transformed integral is $\int_1^2\int_0^12u^3\,dv\,du$.
3. This equals $[u^4/2]_1^2=(16-1)/2=15/2$.

</details>
