# Integrate a linearly changing density

*Easy · [Statistics and probability](index.md)*

Let $f(x)=2$ x on\[$0,1$\] and zero elsewhere. Find $P(0\leq X\leq 1/2)$. You may use the antiderivative ∫$2$ x $dx=x^{2}$.

| Given information | Value |
| --- | --- |
| coefficient | 2 |
| support | \[0,1\] |
| interval | \[0,"1/2"\] |
| supplied antiderivative | x² |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

A changing density requires an integral rather than endpoint height times width.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the supplied antiderivative at both requested endpoints.

</details>

<details>
<summary>Worked solution</summary>

Integrating a nonconstant density accumulates its changing height.

1. The total support area is\[$x^{2}$\]\_0^1=1, so the model is normalized.
2. The requested area is\[$x^{2}$\]\_0^$(1/2)=(1/2)^{2}-0^{2}=1/4$.

</details>
