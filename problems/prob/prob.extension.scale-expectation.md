# An affine expectation

*Easy · [Probability problems](index.md)*

An integrable random variable $X$ satisfies $E[X]=2$. Find $E[3X-4]$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the transformed mean under the stated integrability assumption only."}}
```

<details>
<summary>Hint 1</summary>

Use linearity of expectation.

</details>

<details>
<summary>Hint 2</summary>

A constant has expectation equal to that constant; no independence assumption is involved.

</details>

<details>
<summary>Worked solution</summary>

Separate the scalar multiple and the constant.

1. Integrability of $X$ implies $E[|3X-4|]\le3E[|X|]+4<\infty$, so the requested mean exists.
2. Linearity gives $E[3X-4]=3E[X]-4$.
3. Substituting the given mean yields $3\cdot2-4=2$.

Linearity gives transformed mean $3(2)-4=2$.

</details>
