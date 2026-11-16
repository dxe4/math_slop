# Discard higher-order coefficients only at the indicial step

*Easy · [Differential equations problems](index.md)*

At t=0, the equation $t^2y''+t(1+t)y'+(t^2-4)y=0$ is regular singular. Find its positive indicial root.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested indicial or series coefficient only; formal and analytic justification are not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Only the lowest-power coefficient contributes to the indicial polynomial.

</details>

<details>
<summary>Hint 2</summary>

After computing r\*(r-1)+r-4, solve the two-root equation.

</details>

<details>
<summary>Worked solution</summary>

The indicial equation uses the leading coefficient data at the singular point.

1. A trial leading term t^r contributes r\*(r-1)+r-4 to the lowest power.
2. This is r^2-4, whose roots are -2 and 2.
3. The requested positive root is 2.

</details>
