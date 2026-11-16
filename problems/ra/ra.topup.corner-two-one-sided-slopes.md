# Compare the one-sided slopes at a translated absolute-value corner

*Medium · [Real analysis](index.md)*

For $f(x)=|x-2|$, return the ordered vector (left\_difference\_quotient\_limit,right\_difference\_quotient\_limit) at x=2.

```answer
{"answer":{"kind":"vector","expected":["-1","1"],"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

At x=2 the central function value is zero.

</details>

<details>
<summary>Hint 2</summary>

The quotient \|h\|/h has a different sign on the two sides.

</details>

<details>
<summary>Worked solution</summary>

A continuous corner fails differentiability through disagreeing one-sided derivative limits.

1. The difference quotient is \|h\|/h for h nonzero.
2. It is negative one for negative h and positive one for positive h.
3. The one-sided limits therefore form (-1,1), so there is no two-sided derivative at the corner.

</details>
