# Neither independent event occurs

*Medium · [Probability problems](index.md)*

Independent events $A,B$ have probabilities $2/3$ and $3/4$, respectively. Find $P(A^c\cap B^c)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":12},"checker_scope":"Checks the neither-event probability under the stated independence assumption only."}}
```

<details>
<summary>Hint 1</summary>

Express the complement intersection using the complement of a union.

</details>

<details>
<summary>Hint 2</summary>

Use inclusion–exclusion and independence of $A,B$; the expression factors into the product of the complement probabilities.

</details>

<details>
<summary>Worked solution</summary>

Derive complement independence from event independence.

1. By De Morgan's law and inclusion–exclusion, $P(A^c\cap B^c)=1-P(A)-P(B)+P(A\cap B)$.
2. Independence gives $P(A\cap B)=P(A)P(B)$, so the expression equals $(1-P(A))(1-P(B))$.
3. Substitution gives $(1/3)(1/4)=1/12$. This justifies using the complement product rather than presuming it without a reason.

The complement product is $(1-2/3)(1-3/4)=1/12$.

</details>
