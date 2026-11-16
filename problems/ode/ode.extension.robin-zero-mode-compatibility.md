# Keep the outward-normal sign in Robin boundary conditions

*Medium · [Differential equations problems](index.md)*

On \[0,1\], consider $-y''=\lambda y$ with y'(0)=y(0) and y'(1)=-beta\*y(1), where beta may be real. Find beta for which lambda=0 is an eigenvalue.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Exact requested spectral quantity or trial bound only; no general spectral proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A zero-eigenvalue solution is affine.

</details>

<details>
<summary>Hint 2</summary>

The left condition ties its slope to its intercept; retain the minus sign in the right condition.

</details>

<details>
<summary>Worked solution</summary>

A zero mode is a boundary compatibility condition on an affine function.

1. For lambda=0 write y=a+b\*t. The left condition gives b=a.
2. A nonzero eigenfunction therefore has a nonzero and y(1)=2a, yprime(1)=a.
3. The right condition is a=-2\*beta\*a, so beta=-1/2. Conversely y=1+t verifies this value.

</details>
