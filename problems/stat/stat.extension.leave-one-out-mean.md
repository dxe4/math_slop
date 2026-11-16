# Leave one out mean

*Easy · [Statistics and probability](index.md)*

The observations $2,4,6,8$ have mean $5$. Delete the observation $8$. What is the arithmetic mean of the remaining observations?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Use the given mean to recover the total, or sum the retained values directly.

</details>

<details>
<summary>Hint 2</summary>

Both the total and the number of observations change when one value is deleted.

</details>

<details>
<summary>Worked solution</summary>

A leave-one-out mean divides the remaining total by the remaining count.

1. The original total is $4\cdot5=20$.
2. Deleting $8$ leaves total $12$ and count $3$.
3. The new mean is $12/3=4$. Keeping denominator $4$ would not be the mean of the retained sample.

</details>
