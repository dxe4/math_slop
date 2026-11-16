# Find a preserved quadratic form with a cross term

*Medium · [Differential equations problems](index.md)*

Symplectic Euler for q'=p, p'=-q uses P=p-h\*q and Q=q+h\*P. At h=1/2, find c such that $Q^2+P^2+cQP=q^2+p^2+cqp$ for every q,p.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Exact requested finite numerical-method quantity only; a numerical iterate is not treated as an exact ODE solution."}}
```

<details>
<summary>Hint 1</summary>

Write the update matrix in the coordinate order (q,p).

</details>

<details>
<summary>Hint 2</summary>

Match the mixed and squared coefficients rather than checking one sample state.

</details>

<details>
<summary>Worked solution</summary>

The method preserves a modified quadratic energy rather than the usual energy exactly.

1. The update is \[Q,P\]=\[(1-h^2)\*q+h\*p, p-h\*q\]. Expanding a general form q^2+p^2+c\*q\*p through this update and comparing coefficients gives c=-h.
2. For example the coefficient of p^2 becomes h^2+1+c\*h, which equals one only when c=-h for h nonzero; substitution of that c also matches the other two coefficients.
3. At h=1/2 this gives c=-1/2 and proves the identity for all states.

</details>
