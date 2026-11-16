# Solve the implicit trapezoidal amplification equation

*Easy · [Differential equations problems](index.md)*

For $y'=-lambda*y$ with lambda&gt;0, implicit trapezoidal stepping satisfies (1+h\*lambda/2)\*Y\_(n+1)=(1-h\*lambda/2)\*Y\_n. Find its amplification factor when h\*lambda=2.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested finite numerical-method quantity only; a numerical iterate is not treated as an exact ODE solution."}}
```

<details>
<summary>Hint 1</summary>

Divide the two coefficients in the stated recurrence.

</details>

<details>
<summary>Hint 2</summary>

The numerator vanishes at the specified step product.

</details>

<details>
<summary>Worked solution</summary>

A particular test mode can be annihilated by one trapezoidal step.

1. The amplification is R=(1-h\*lambda/2)/(1+h\*lambda/2).
2. At h\*lambda=2 the numerator is zero and the denominator is two.
3. Thus R=0.

</details>
