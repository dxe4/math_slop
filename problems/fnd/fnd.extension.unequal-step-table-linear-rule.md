# Infer an affine rule from unequal input steps

*Medium · [Foundations bridge](index.md)*

A function is affine and has table values $f(0)=2$, $f(2)=8$, $f(5)=17$ and $f(9)=29$. Find f(7).

```answer
{"answer":{"kind":"integer","expected":23,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Divide each output change by its corresponding input change; the input steps are unequal.

</details>

<details>
<summary>Hint 2</summary>

Use f(0) as the intercept after determining the slope.

</details>

<details>
<summary>Worked solution</summary>

Equal slopes, rather than equal raw output differences, characterize an affine table.

1. The slopes are (8−2)/2=3, (17−8)/3=3 and (29−17)/4=3.
2. With f(0)=2 the rule is f(x)=3x+2.
3. Therefore f(7)=21+2=23.

</details>
