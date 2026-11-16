# Keep both neighboring indices in a coefficient recurrence

*Medium · [Differential equations problems](index.md)*

The analytic solution of $(1-t^2)y'=y$, y(0)=1, has Taylor coefficients a\_n. Find a\_4.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Exact requested indicial or series coefficient only; formal and analytic justification are not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Equate coefficients after multiplying the derivative by 1-t^2.

</details>

<details>
<summary>Hint 2</summary>

The t^2 factor shifts the derivative index by two.

</details>

<details>
<summary>Worked solution</summary>

A variable leading coefficient couples the next coefficient to two earlier positions.

1. The constant equation gives a\_1=a\_0=1. For n&gt;=1, (n+1)\*a\_(n+1)-(n-1)\*a\_(n-1)=a\_n.
2. For n=1 this gives a\_2=1/2. For n=2 it gives 3\*a\_3=a\_2+a\_1=3/2, so a\_3=1/2.
3. For n=3, 4\*a\_4=a\_3+2\*a\_2=3/2, yielding a\_4=3/8.

</details>
