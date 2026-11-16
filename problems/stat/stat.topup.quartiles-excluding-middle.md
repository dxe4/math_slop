# Compute quartiles under an explicit odd-count convention

*Medium · [Statistics and probability](index.md)*

For sorted data $0,2,4,6,8,10,12$, omit the overall median when forming the lower and upper halves. Let Q1 and Q3 be the medians of those halves. Return Q1, Q3 and IQR=Q3-Q1.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"Q1":"2","Q3":"10","IQR":"8"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Remove the middle observation six before splitting.

</details>

<details>
<summary>Hint 2</summary>

Each remaining half contains three values.

</details>

<details>
<summary>Worked solution</summary>

The stated convention determines which observations enter each quartile.

1. The lower half is $0,2,4$, whose median is two.
2. The upper half is $8,10,12$, whose median is ten.
3. Thus $Q_1=2$, $Q_3=10$ and the interquartile range is eight.

</details>
