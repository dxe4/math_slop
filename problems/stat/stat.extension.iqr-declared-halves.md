# Iqr declared halves

*Easy · [Statistics and probability](index.md)*

For the ordered values $1,2,4,7,9,12$, define $Q_1$ as the median of the lower three values and $Q_3$ as the median of the upper three. What is $\operatorname{IQR}=Q_3-Q_1$ under this convention?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Use the stated three-value halves instead of another software quantile convention.

</details>

<details>
<summary>Hint 2</summary>

Take the middle member of each half and then their difference.

</details>

<details>
<summary>Worked solution</summary>

The declared quartile convention fixes which order statistics must be used.

1. The lower half is $1,2,4$, so $Q_1=2$.
2. The upper half is $7,9,12$, so $Q_3=9$.
3. Thus $\operatorname{IQR}=9-2=7$. Other quartile interpolation conventions are not part of this question.

</details>
