# Keep the expansion basis centered at its declared input

*Medium · [Calculus](index.md)*

Write the cubic Taylor polynomial of $f(x)=x^3$ about x=2 as c0+c1(x-2)+c2(x-2)^2+c3(x-2)^3. Return c0,c1,c2,c3 as an ordered vector.

```answer
{"answer":{"kind":"vector","expected":["8","12","6","1"],"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Evaluate successive derivatives at the center two.

</details>

<details>
<summary>Hint 2</summary>

Divide each derivative by the corresponding factorial, while retaining the shifted basis.

</details>

<details>
<summary>Worked solution</summary>

A polynomial can have different coefficients in ordinary and centered power bases.

1. At two the value is eight and the first three derivatives are twelve, twelve and six.
2. Dividing by 0!,1!,2!,3! gives coefficients 8,12,6,1.
3. The centered expansion is exact for this cubic, giving the ordered coefficient vector (8,12,6,1).

</details>
