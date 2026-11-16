# Exclude every finite last occurrence under divergent independent probabilities

*Medium · [Probability problems](index.md)*

Let $(A_n)$ be independent events with $\sum_nP(A_n)=\infty$. Prove $P(A_n\text{ infinitely often})=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For each starting index, bound the probability of avoiding every event up to a later endpoint.

</details>

<details>
<summary>Hint 2</summary>

Write finitely many occurrences as a countable union of events with no occurrences after some index.

</details>

<details>
<summary>Model proof</summary>

A divergent tail sum makes an infinite avoidance event have probability zero.

1. For fixed $r\le m$, independence gives $P(\bigcap_{n=r}^m A_n^c)=\prod_{n=r}^m(1-P(A_n))\le\exp(-\sum_{n=r}^mP(A_n))$.
2. The sum diverges as $m\to\infty$. Continuity from above therefore gives $P(\bigcap_{n=r}^\infty A_n^c)=0$ for every $r$.
3. The event of finitely many occurrences is $\bigcup_{r\ge1}\bigcap_{n=r}^\infty A_n^c$, a countable union of null events. Its complement has probability one.

**Self-assessment rubric**

- Obtain the finite avoidance product and exponential estimate.
- Pass to each infinite tail using continuity of probability.
- Identify and eliminate the event of finitely many occurrences.

</details>
