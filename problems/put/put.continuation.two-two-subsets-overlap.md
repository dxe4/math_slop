# Two two subsets overlap

*Medium · [Original Putnam-style training](index.md)*

Choose independently and uniformly two $2$-element subsets $A,B$ of a $4$-element set. Find $P(|A\cap B|=1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Condition on the first subset $A$.

</details>

<details>
<summary>Hint 2</summary>

Choose one element of $B$ inside $A$ and one outside.

</details>

<details>
<summary>Worked solution</summary>

The conditional and unconditional probability is $4/6=2/3$.

1. For any fixed $A$, there are $\binom42=6$ equally likely choices of $B$.
2. To have intersection size one, choose one of the two elements in $A$ and one of the two outside, giving $2\cdot2=4$ choices.
3. The conditional and unconditional probability is $4/6=2/3$.

</details>
