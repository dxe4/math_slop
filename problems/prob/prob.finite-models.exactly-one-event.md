# Separate exactly one occurrence

*Medium · [Probability problems](index.md)*

Given $P(A)=3/5$, $P(B)=1/2$ and $P(A\cap B)=1/5$, find the probability that exactly one of $A,B$ occurs.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":10},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Exactly one occurrence is the disjoint union of two set differences.

</details>

<details>
<summary>Hint 2</summary>

Subtract the overlap from each event before adding the two remaining parts.

</details>

<details>
<summary>Worked solution</summary>

The overlap must be removed from both individual event contributions.

1. The desired event is $(A\setminus B)\cup(B\setminus A)$, with disjoint parts.
2. Its probability is $P(A)+P(B)-2P(A\cap B)$.
3. Thus it equals $3/5+1/2-2/5=7/10$.

</details>
