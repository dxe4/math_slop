# Match a logarithmic chain rule with the original real domain

*Medium · [Calculus](index.md)*

For the real function $f(x)=\ln(x^2-4)$, which derivative and domain pair is correct? Choices: Derivative 2x/(x^2-4) on x&lt;-2 or x&gt;2.; Derivative 1/(x^2-4) on x&lt;-2 or x&gt;2.; Derivative 2x/(x^2-4) on every real x except -2 and 2.; Derivative 2x/(x^2-4) only on -2&lt;x&lt;2.

**Options**

1. Derivative 2x/(x^2-4) on x&lt;-2 or x&gt;2.
2. Derivative 1/(x^2-4) on x&lt;-2 or x&gt;2.
3. Derivative 2x/(x^2-4) on every real x except -2 and 2.
4. Derivative 2x/(x^2-4) only on -2&lt;x&lt;2.

```answer
{"answer":{"kind":"multiple_choice","expected":"outside_with_chain","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."},"options":["outside_with_chain","outside_without_chain","all_nonpoles","inside_with_chain"]}
```

<details>
<summary>Hint 1</summary>

A real logarithm needs a strictly positive argument.

</details>

<details>
<summary>Hint 2</summary>

Its derivative includes the derivative of x squared minus four.

</details>

<details>
<summary>Worked solution</summary>

The algebraic derivative denominator alone does not determine the original logarithm domain.

1. The original condition x^2-4&gt;0 gives x&lt;-2 or x&gt;2.
2. On that domain, the logarithmic chain rule gives 2x/(x^2-4).
3. The first option is correct; the other options omit the inner derivative or admit points where the original real logarithm does not exist.

</details>
