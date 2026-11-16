# Identify an isolated removable discontinuity

*Medium · [Calculus](index.md)*

Let $f(x)=0$ for x!=0 and f(0)=1. Which classification at zero is correct? Choices: Removable discontinuity, because the punctured limit is 0 but the point value is 1.; Jump discontinuity with distinct left and right limits.; Infinite discontinuity because division by zero occurs.; It is continuous because the two punctured one-sided limits agree.

**Options**

1. Removable discontinuity, because the punctured limit is 0 but the point value is 1.
2. Jump discontinuity with distinct left and right limits.
3. Infinite discontinuity because division by zero occurs.
4. It is continuous because the two punctured one-sided limits agree.

```answer
{"answer":{"kind":"multiple_choice","expected":"removable_point","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."},"options":["removable_point","jump","infinite","continuous_same_sides"]}
```

<details>
<summary>Hint 1</summary>

Compute both punctured one-sided limits before classifying.

</details>

<details>
<summary>Hint 2</summary>

An exceptional assigned value can disagree even when the two approach limits agree.

</details>

<details>
<summary>Worked solution</summary>

The failure occurs in matching the value, rather than in matching the approach limits.

1. Both one-sided limits are zero because every nonzero nearby value is zero.
2. The central value is one and therefore differs from the common limit.
3. Resetting that value to zero would restore continuity, so the discontinuity is removable.

</details>
