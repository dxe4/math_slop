# Permutation descents seven

*Medium · [Original Putnam-style training](index.md)*

For a uniform random permutation $\pi$ of $\{1,\ldots,7\}$, find the expected number of indices $i$ with $\pi(i)>\pi(i+1)$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use one indicator per adjacent position.

</details>

<details>
<summary>Hint 2</summary>

By swapping two adjacent values, each such comparison is equally likely in either order.

</details>

<details>
<summary>Worked solution</summary>

Linearity gives expected descents $\sum_{i=1}^6E[I_i]=6/2=3$.

1. There are six adjacent comparisons. Let $I_i=1$ when $\pi(i)>\pi(i+1)$.
2. For each $i$, symmetry of a uniform permutation gives $P(I_i=1)=1/2$; independence between the indicators is not needed.
3. Linearity gives expected descents $\sum_{i=1}^6E[I_i]=6/2=3$.

</details>
