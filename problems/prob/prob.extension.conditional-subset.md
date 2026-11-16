# Restrict the finite sample space

*Easy · [Probability problems](index.md)*

A sample space has $8$ equally likely outcomes. Event $B$ contains $4$ outcomes, exactly $3$ of which also belong to $A$. Find $P(A\mid B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the exact conditional probability under this observation only; reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The observation that $B$ occurred removes outcomes outside $B$.

</details>

<details>
<summary>Hint 2</summary>

Within the retained equally likely outcomes, compare the intersection count with the count of $B$.

</details>

<details>
<summary>Worked solution</summary>

Conditioning renormalises probability on the observed event.

1. The given counts imply $P(B)=4/8>0$ and $P(A\cap B)=3/8$.
2. By definition, $P(A\mid B)=P(A\cap B)/P(B)$; the denominator is the observed event, not the original whole space.
3. The ratio is $(3/8)/(4/8)=3/4$.

Conditioning retains the four outcomes of $B$ and renormalises their equal masses. Three are in $A$, so $P(A\mid B)=3/4$.

</details>
