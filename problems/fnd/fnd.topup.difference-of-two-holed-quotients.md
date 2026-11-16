# Retain both original holes after a constant simplification

*Hard · [Foundations bridge](index.md)*

Simplify $(x^2-4)/(x-2)-(x^2-9)/(x-3)$ to a polynomial rule p(x), and separately list every real input excluded by the original expression.

```answer
{"answer":{"kind":"expression","expected":"-1","domain":{"variable":"x","excluded":["2","3"]},"checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

First record a domain restriction from each denominator.

</details>

<details>
<summary>Hint 2</summary>

After factoring the two numerators, the remaining linear terms have a constant difference.

</details>

<details>
<summary>Worked solution</summary>

The final rule can be constant while the original two-hole domain stays restricted.

1. The original denominators exclude x=2 and x=3.
2. On the common domain, the two quotients simplify to x+2 and x+3.
3. The polynomial rule is p(x)=-1 with original excluded set $\{2,3\}$.

</details>
