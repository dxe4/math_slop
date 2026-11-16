# Permutation cycle count mean

*Hard · [Original Putnam-style training](index.md)*

For a uniform random permutation of $[n]$, prove its expected number of cycles is $H_n=\sum_{k=1}^n1/k$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Build a uniform permutation by inserting label $n$ into a permutation of $[n-1]$.

</details>

<details>
<summary>Hint 2</summary>

One of the $n$ insertion positions creates a new singleton cycle.

</details>

<details>
<summary>Model proof</summary>

With $E[C_1]=1$, summing the recurrence gives $E[C_n]=H_n$.

1. Every permutation of $[n]$ arises uniquely by removing $n$ from its cycle: either it was a singleton or it followed one of the other $n-1$ labels. Thus from each permutation of $[n-1]$ there are $n$ equiprobable insertions.
2. Exactly one insertion makes $n$ a singleton and increases the cycle count by one; the other $n-1$ preserve the count. Hence $E[C_n]=E[C_{n-1}]+1/n$.
3. With $E[C_1]=1$, summing the recurrence gives $E[C_n]=H_n$.

**Self-assessment rubric**

- Describe the n insertion sites of label n and their uniform correspondence.
- Identify the unique insertion that creates a new singleton cycle.
- Sum the expectation increments 1/k.

</details>
