# A probability-tree path

*Easy · [Probability problems](index.md)*

Events $A,B$ satisfy $P(A)=1/3$ and $P(B\mid A)=3/4$. Find $P(A\cap B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the joint event probability only; no independence is presumed."}}
```

<details>
<summary>Hint 1</summary>

Start from the definition of $P(B\mid A)$.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the probability of the conditioning event to recover the joint mass.

</details>

<details>
<summary>Worked solution</summary>

Use the conditional multiplication rule.

1. The conditioning event has positive probability $P(A)=1/3$, so $P(B\mid A)$ is defined.
2. The definition gives $P(B\mid A)=P(A\cap B)/P(A)$, hence $P(A\cap B)=P(A)P(B\mid A)$.
3. Substitution gives $(1/3)(3/4)=1/4$. The factor is a conditional probability, so no independence assumption is required.

The joint path mass is $(1/3)(3/4)=1/4$.

</details>
