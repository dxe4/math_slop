# Combine independence with a complement

*Medium · [Probability problems](index.md)*

Events $A,B$ are independent, with probabilities $2/5$ and $1/2$. Find $P(A^c\cap B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":10},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The complement of one independent event remains independent of the other.

</details>

<details>
<summary>Hint 2</summary>

Alternatively, subtract the overlap from the probability of the second event.

</details>

<details>
<summary>Worked solution</summary>

Split the second event according to whether the first occurs.

1. Independence gives $P(A\cap B)=(2/5)(1/2)=1/5$.
2. The disjoint decomposition of $B$ gives $P(A^c\cap B)=P(B)-P(A\cap B)$.
3. The result is $1/2-1/5=3/10$.

</details>
