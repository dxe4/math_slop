# Find a largest relative-domain continuity radius at an endpoint

*Medium · [Real analysis](index.md)*

For $f(x)=\sqrt x$ on \[0,infinity), at the endpoint x=0 and tolerance 3/5, find the largest delta&gt;0 for which every domain point with \|x\|&lt;delta satisfies \|f(x)\|&lt;3/5.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":25},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Use the actual nonnegative domain rather than a two-sided ambient interval.

</details>

<details>
<summary>Hint 2</summary>

Squaring the positive output tolerance gives the input threshold.

</details>

<details>
<summary>Worked solution</summary>

Relative-domain continuity at an endpoint has a one-sided error condition.

1. For nonnegative x, sqrt(x)&lt;3/5 exactly when x&lt;9/25.
2. The radius delta=9/25 therefore works with the strict input inequality.
3. Any larger radius admits the domain point x=9/25, whose output equals rather than falls below the tolerance, so the stated radius is largest.

</details>
