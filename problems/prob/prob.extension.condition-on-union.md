# Condition on a disjoint union

*Medium · [Probability problems](index.md)*

Events $A,B$ are disjoint, with $P(A)=1/5$ and $P(B)=3/10$. Find $P(A\mid A\cup B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Checks the conditional probability on the stated union only."}}
```

<details>
<summary>Hint 1</summary>

Compute the probability of the observed union using disjointness.

</details>

<details>
<summary>Hint 2</summary>

Simplify $A\cap(A\cup B)$ before applying the conditional-probability definition.

</details>

<details>
<summary>Worked solution</summary>

The conditioning event contains $A$, so its whole mass is the denominator.

1. Disjointness gives $P(A\cup B)=1/5+3/10=1/2>0$.
2. Since $A\subseteq A\cup B$, their intersection is $A$ and has probability $1/5$.
3. Therefore $P(A\mid A\cup B)=(1/5)/(1/2)=2/5$. This asks which part of the observed union occurred, not whether $A$ and $B$ can occur together.

The conditional mass of $A$ is $(1/5)/(1/2)=2/5$.

</details>
