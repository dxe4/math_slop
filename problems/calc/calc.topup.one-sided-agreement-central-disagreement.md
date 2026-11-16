# Separate two one-sided limits from the point value

*Medium · [Calculus](index.md)*

Let $f(x)=2+x$ for x&lt;0, f(x)=2-x for x&gt;0, and f(0)=-7. Return left\_limit, right\_limit and point\_value at zero.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"left_limit":"2","right_limit":"2","point_value":"-7"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Use only the relevant branch for each one-sided approach.

</details>

<details>
<summary>Hint 2</summary>

The point value is specified independently.

</details>

<details>
<summary>Worked solution</summary>

Matching one-sided limits determine a limit without fixing the central value.

1. The left expression tends to two and the right expression also tends to two.
2. Thus the two-sided punctured limit is two.
3. The given point value remains negative seven, so the fields are two, two and negative seven; continuity fails.

</details>
