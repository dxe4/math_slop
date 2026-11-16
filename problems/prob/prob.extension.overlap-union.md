# Count a union with overlap

*Medium · [Probability problems](index.md)*

A sample space has $12$ equally likely outcomes. Events satisfy $|A|=5$, $|B|=6$ and $|A\cap B|=2$. Find $P(A\cup B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the exact union probability only; the counting argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Adding the two event counts counts outcomes in the overlap twice.

</details>

<details>
<summary>Hint 2</summary>

Remove one copy of the overlap before converting the union count to a probability.

</details>

<details>
<summary>Worked solution</summary>

Inclusion–exclusion corrects the double counting of the intersection.

1. The count $|A|+|B|$ includes each intersection outcome twice, although a union includes it once.
2. Thus $|A\cup B|=5+6-2=9$.
3. Uniformity gives $P(A\cup B)=9/12=3/4$; no independence assumption is needed.

Inclusion–exclusion gives $|A\cup B|=5+6-2=9$, so its probability is $9/12=3/4$.

</details>
