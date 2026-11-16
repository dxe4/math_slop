# All four stages succeed

*Easy · [Probability problems](index.md)*

The success events for four stages are mutually independent, and each stage succeeds with probability $1/2$. Find the probability that all four stages succeed.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":16},"checker_scope":"Checks the exact all-success probability under mutual independence only."}}
```

<details>
<summary>Hint 1</summary>

All four successes means the intersection of four events.

</details>

<details>
<summary>Hint 2</summary>

Use mutual independence to factor that intersection into one probability factor for each stage.

</details>

<details>
<summary>Worked solution</summary>

Mutual independence supplies the probability of the four-event intersection.

1. Write $S_i$ for success at stage $i$; the requested event is $\bigcap_{i=1}^4 S_i$.
2. Mutual independence, which is stronger than merely pairwise independence, gives $P(\bigcap_iS_i)=\prod_iP(S_i)$.
3. The product is $(1/2)^4=1/16$.

The four-event success intersection factors under mutual independence, giving $(1/2)^4=1/16$.

</details>
