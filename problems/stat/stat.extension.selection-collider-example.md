# Selection collider example

*Medium · [Statistics and probability](index.md)*

Let $A,B$ be independent fair bits in a population, and let inclusion satisfy $S=1$ exactly when $A=B$. Verify independence before selection and prove perfect positive association conditional on $S=1$ by deriving the conditional joint distribution.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Write the unconditional joint probabilities of the four bit pairs.

</details>

<details>
<summary>Hint 2</summary>

Identify the retained pairs and renormalize their probabilities before comparing conditional joint and marginal probabilities.

</details>

<details>
<summary>Model proof</summary>

Conditioning on a common selection rule changes the joint distribution even when the original bits are independent.

1. Every unconditional pair $(a,b)\in\{0,1\}^2$ has probability $1/4=(1/2)(1/2)$, verifying factorization.
2. The event $S=1$ has probability $1/2$ and retains only $(0,0),(1,1)$, each with conditional probability $1/2$.
3. Both conditional marginals remain fair, but $P(A=1,B=1\mid S=1)=1/2\ne1/4=P(A=1\mid S=1)P(B=1\mid S=1)$. In fact $B=A$ on the selected population, giving perfect positive association.
4. This association follows from selection and does not by itself establish a causal effect of one bit on the other.

**Self-assessment rubric**

- Obtain the four unconditional joint probabilities and factor them into marginals.
- Restrict to the selection event and renormalize its two retained pairs.
- Compare conditional joint and marginal probabilities and separate selection association from a causal claim.

</details>
