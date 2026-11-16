# Median contamination

*Easy · [Statistics and probability](index.md)*

The ordered observations are $1,2,3,4,5$. Replace the largest observation by $1000$. What is the median of the modified sample?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Locate the middle order position for a sample of this size.

</details>

<details>
<summary>Hint 2</summary>

Check whether moving the largest value upward changes the value occupying that position.

</details>

<details>
<summary>Worked solution</summary>

The median is determined by its order position rather than the magnitude of the largest value.

1. The modified observations in order are $1,2,3,4,1000$.
2. With $5$ observations, the median is the third order statistic.
3. That value is still $3$. This replacement leaves this median unchanged; it is not a claim that every replacement leaves every median unchanged.

</details>
