# Recover two coefficients from two derivative observations

*Hard · [Calculus](index.md)*

Let $p(x)=ax^4+bx^2$. If pprime(1)=6 and pprime(2)=36, return a and b.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a":"1","b":"1"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Differentiate first, keeping the coefficients unknown.

</details>

<details>
<summary>Hint 2</summary>

The two slope values give two linear equations.

</details>

<details>
<summary>Worked solution</summary>

Derivative observations can identify polynomial coefficients.

1. The derivative is 4ax^3+2bx, so the equations are 4a+2b=6 and 32a+4b=36.
2. Subtract twice the first equation from the second to get 24a=24, hence a=1.
3. Substitution gives b=1, and both supplied slopes are then satisfied.

</details>
