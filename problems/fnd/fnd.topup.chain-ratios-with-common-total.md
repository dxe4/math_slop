# Align a shared part before using the total

*Hard · [Foundations bridge](index.md)*

Positive quantities A,B,C satisfy $A:B=2:5$ and $B:C=3:4$, with $A+B+C=82$. Find C.

```answer
{"answer":{"kind":"integer","expected":"40","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The two ratios must describe the same B before their parts can be combined.

</details>

<details>
<summary>Hint 2</summary>

Scale the B-parts to a common value, then apply the supplied combined total.

</details>

<details>
<summary>Worked solution</summary>

A common middle part converts two ratios into one three-way ratio.

1. Scale the first ratio by three and the second by five, giving $A:B:C=6:15:20$.
2. There are $6+15+20=41$ parts in total, so each part is $82/41=2$.
3. Thus C is $20\cdot2=40$.

</details>
