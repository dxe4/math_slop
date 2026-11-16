# Two distinct letters in order

*Easy · [Probability problems](index.md)*

How many ordered arrangements of two distinct letters from $\{A,B,C,D\}$ are possible?

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Checks the exact arrangement count only; written reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Treat an arrangement as a first position followed by a second position.

</details>

<details>
<summary>Hint 2</summary>

After filling the first position, exclude its letter from the second-position choices and use the product rule.

</details>

<details>
<summary>Worked solution</summary>

Count successive choices without replacement.

1. There are $4$ choices for the first position.
2. For each such choice, precisely $3$ different letters remain for the second position.
3. The branches are disjoint and exhaust the ordered arrangements, giving $4\cdot3=12$. Reversing two different letters gives a different arrangement.

The first position has four choices and the second has three remaining choices, giving $12$ ordered pairs.

</details>
