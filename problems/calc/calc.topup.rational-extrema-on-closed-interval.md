# Compare a rational critical point against both interval endpoints

*Hard · [Calculus](index.md)*

For $f(x)=x/(1+x^2)$ on \[0,2\], return minimum and maximum values.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"minimum":"0","maximum":"1/2"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The denominator is positive over the full interval.

</details>

<details>
<summary>Hint 2</summary>

Use the derivative to find every interior critical point, then compare endpoint values.

</details>

<details>
<summary>Worked solution</summary>

The closed interval supplies attained extrema after a complete candidate comparison.

1. The derivative is (1-x^2)/(1+x^2)^2, giving the single interior critical point x=1.
2. Values at x=0,1,2 are zero, one half and two fifths.
3. Therefore the minimum is zero and the maximum one half.

</details>
