# Expected fixed points

*Medium · [Probability problems](index.md)*

Let $\pi$ be a uniformly random permutation of five labels. What is the expected number of fixed points, meaning labels $i$ such that $\pi(i)=i$?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks the exact expected count only; indicator reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write the fixed-point count as a sum of one indicator per label.

</details>

<details>
<summary>Hint 2</summary>

For a specified label, count the permutations that fix it and use linearity of expectation without assuming independence.

</details>

<details>
<summary>Worked solution</summary>

Linearity of expectation avoids the distribution of the whole count.

1. Let $I_i$ indicate $\pi(i)=i$ and set $N=\sum_{i=1}^5I_i$.
2. There are $4!$ permutations fixing a given label among $5!$ equally likely permutations, so $E[I_i]=P(\pi(i)=i)=1/5$.
3. Linearity gives $E[N]=\sum_{i=1}^5E[I_i]=5(1/5)=1$. The indicators need not be independent; in fact they are dependent.

Five indicators each have expectation $4!/5!=1/5$; their expected sum is $1$.

</details>
