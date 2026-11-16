# Find a common whole batch before combining its portions

*Hard · [Foundations bridge](index.md)*

Let N be the smallest positive whole number for which both $3N/4$ and $5N/6$ are whole numbers. Find $3N/4+5N/6$.

```answer
{"answer":{"kind":"integer","expected":"19","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The two fractions are reduced, so their denominators constrain N.

</details>

<details>
<summary>Hint 2</summary>

Use the least common positive multiple of those denominator requirements before evaluating the two amounts.

</details>

<details>
<summary>Worked solution</summary>

Whole-valued portions force a shared batch size.

1. Since three and four are coprime, $3N/4$ being whole requires four to divide N. Similarly six divides N.
2. The smallest permitted N is the least common multiple of four and six, namely twelve.
3. The two amounts are nine and ten, whose sum is $19$.

</details>
