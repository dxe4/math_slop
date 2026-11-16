# Use the population convention

*Medium · [Statistics and probability](index.md)*

Treat $0,0,4,4$ as the complete population. Divide squared deviations by $n=4$. Find variance and standard\_deviation.

| Given information | Value |
| --- | --- |
| observations | \[0,0,4,4\] |
| convention | population divide by n |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"variance":"4","standard_deviation":"2"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The population mean is $2$.

</details>

<details>
<summary>Hint 2</summary>

Each squared deviation is $4$; divide their sum by four before taking a square root.

</details>

<details>
<summary>Worked solution</summary>

The denominator is part of the variance definition.

1. The squared deviations are $4,4,4,4$, with total $16$.
2. Population variance is $16/4=4$ and standard deviation is√$4=2$.

</details>
