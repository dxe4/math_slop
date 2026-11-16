# Three letters in the wrong envelopes

*Medium · [Probability problems](index.md)*

$3$ labelled letters are placed one per envelope into three correspondingly labelled envelopes, with all bijections equally likely. Find the probability that no letter goes into its own envelope.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the no-fixed-point probability under the uniform permutation model only."}}
```

<details>
<summary>Hint 1</summary>

Start with the destination of letter $1$, excluding envelope $1$.

</details>

<details>
<summary>Hint 2</summary>

For each allowed destination, enforce the remaining no-correct-envelope conditions; then compare with all bijections.

</details>

<details>
<summary>Worked solution</summary>

Enumerate the permitted bijections rather than treating destinations as independent.

1. Write a permutation as the destinations of letters $1,2,3$. There are $3!=6$ equally likely permutations.
2. If letter $1$ goes to envelope $2$, letter $2$ must go to $3$ and letter $3$ to $1$. If letter $1$ goes to $3$, the only possibility is $(3,1,2)$.
3. Thus exactly $(2,3,1)$ and $(3,1,2)$ have no fixed point. Their total probability is $2/6=1/3$; separate avoidance events are not independent.

The two favourable destination triples are $(2,3,1)$ and $(3,1,2)$, giving $2/6=1/3$.

</details>
