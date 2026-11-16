# A complement inside the observed event

*Medium · [Probability problems](index.md)*

Events satisfy $P(B)=3/5$ and $P(A\cap B)=1/5$. Find $P(A^c\mid B)$, where $A^c$ is the complement of $A$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks the exact conditional-complement probability for the supplied event masses only."}}
```

<details>
<summary>Hint 1</summary>

Partition $B$ into its part inside $A$ and its part outside $A$.

</details>

<details>
<summary>Hint 2</summary>

Subtract the supplied intersection mass from $P(B)$ and renormalise by $P(B)$, which is positive.

</details>

<details>
<summary>Worked solution</summary>

Take a complement within the conditioning event before renormalising.

1. The disjoint decomposition $B=(A\cap B)\cup(A^c\cap B)$ gives $P(A^c\cap B)=3/5-1/5=2/5$.
2. The observed event has positive mass $3/5$, so conditional probability is defined.
3. Thus $P(A^c\mid B)=(2/5)/(3/5)=2/3$; no value for $P(A)$ or independence is needed.

The mass of $A^c\cap B$ is $2/5$, and dividing by the observed mass $3/5$ gives $2/3$.

</details>
