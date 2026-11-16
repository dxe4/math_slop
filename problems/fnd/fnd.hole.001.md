# Keep the domain when cancelling

*Medium · [Foundations bridge](index.md)*

Simplify $(x^2-4)/(x-2)$ over the real numbers and state every excluded real input of the original expression.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"x+2","excluded":["2"]},"checker_scope":"Proposed restricted polynomial equivalence and exact exclusion-set check; no unrestricted symbolic checker exists in this artifact."}}
```

<details>
<summary>Hint 1</summary>

Record where the original denominator is zero before simplifying.

</details>

<details>
<summary>Hint 2</summary>

Factor $x^2-4$ as a difference of squares.

</details>

<details>
<summary>Worked solution</summary>

Cancellation preserves values on the original domain; it does not fill a missing input.

1. The original denominator is zero at $x=2$, so that input is excluded.
2. $x^2-4=(x-2)(x+2)$; for $x\ne 2$ the quotient is $x+2$.
3. The simplified rule must retain the domain $x\ne 2$.

A value table marks $x=2$ undefined and displays the rule $x+2$ for every permitted input.

</details>
