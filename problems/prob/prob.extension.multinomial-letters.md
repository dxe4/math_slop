# Arrange repeated letters

*Medium · [Probability problems](index.md)*

How many distinct five-letter arrangements of $A,A,B,B,C$ are there? The two copies of each repeated letter are indistinguishable.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Checks the number of distinct letter strings only."}}
```

<details>
<summary>Hint 1</summary>

Temporarily distinguish the two copies of each repeated letter.

</details>

<details>
<summary>Hint 2</summary>

Determine how many temporarily labelled arrangements collapse to any one unlabelled letter string.

</details>

<details>
<summary>Worked solution</summary>

Correct a uniform overcount caused by labels on identical letters.

1. Give the copies temporary labels $A_1,A_2,B_1,B_2$. The five distinct objects have $5!=120$ arrangements.
2. For any fixed letter string, the two $A$ labels can be assigned in $2!$ ways and the two $B$ labels in $2!$ ways, independently as combinatorial choices.
3. Every letter string therefore has exactly $2!2!=4$ labelled preimages, so there are $5!/(2!2!)=30$ distinct strings.

Each string corresponds to four arrangements of temporarily distinguished copies; $120/4=30$.

</details>
