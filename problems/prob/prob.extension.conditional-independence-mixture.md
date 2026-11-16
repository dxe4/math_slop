# Mix conditionally independent events

*Medium · [Probability problems](index.md)*

A bit $H$ is fair. Events $A,B$ are independent conditional on each value of $H$. Their conditional probabilities are both $1/4$ when $H=0$, and both $3/4$ when $H=1$. Find $P(A\cap B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":16},"checker_scope":"Checks the mixed joint probability under the given conditional independence model only."}}
```

<details>
<summary>Hint 1</summary>

Factor the intersection probability separately within each hidden-state stratum.

</details>

<details>
<summary>Hint 2</summary>

Average the two conditional joint probabilities with the hidden-state weights. Do not multiply the unconditional marginals.

</details>

<details>
<summary>Worked solution</summary>

Conditional independence allows products inside strata, followed by total probability.

1. Within $H=0$, the intersection probability is $(1/4)^2=1/16$; within $H=1$, it is $(3/4)^2=9/16$.
2. The two strata have probability $1/2$ each, so total probability gives $P(A\cap B)=(1/2)(1/16)+(1/2)(9/16)=5/16$.
3. Indeed $P(A)=P(B)=1/2$, whose product is $1/4\ne5/16$. Conditional independence in this model does not imply unconditional independence.

Average the conditional joint masses $1/16$ and $9/16$ to obtain $5/16$.

</details>
