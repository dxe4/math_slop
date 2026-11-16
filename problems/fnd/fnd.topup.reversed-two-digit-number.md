# Build an equation from a digit reversal

*Hard · [Foundations bridge](index.md)*

A two-digit positive integer has digit sum $11$ and exceeds its digit reversal by $27$. Find the integer.

```answer
{"answer":{"kind":"integer","expected":"74","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Use place values, not a sum of the digits, to represent the integer and its reversal.

</details>

<details>
<summary>Hint 2</summary>

Express one digit using the digit-sum condition so that only one variable remains.

</details>

<details>
<summary>Worked solution</summary>

Place-value translation converts the puzzle into a single linear equation.

1. Let the tens digit be a and the units digit be $11-a$. The number is $10a+(11-a)$; its reversal is $10(11-a)+a$.
2. The difference condition gives $9(2a-11)=27$, hence $2a-11=3$ and a=7.
3. The units digit is four, so the integer is $74$. Both digits are valid and the reversal difference is 27.

</details>
