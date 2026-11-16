# Meet two remainder conditions at once

*Hard · [Foundations bridge](index.md)*

Find the greatest whole number N not exceeding $100$ that leaves remainder $5$ when divided by $12$ and remainder $1$ when divided by $8$.

```answer
{"answer":{"kind":"integer","expected":"89","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

List or parameterize the numbers meeting the first remainder condition.

</details>

<details>
<summary>Hint 2</summary>

Impose the second condition on that list, then use the upper bound.

</details>

<details>
<summary>Worked solution</summary>

Two division conventions select a sparse subsequence of the first candidate list.

1. The first condition gives $N=5+12k$ with k a whole number. Within the bound the candidates are 5,17,29,41,53,65,77,89.
2. Their remainders modulo eight alternate five and one, so the permitted candidates are 17,41,65,89.
3. The greatest is $89$, with $89=7\cdot12+5=11\cdot8+1$.

</details>
