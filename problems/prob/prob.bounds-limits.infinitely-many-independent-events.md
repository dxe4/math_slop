# Do independent fair events keep recurring?

*Hard · [Probability problems](index.md)*

Events $A_1,A_2,\ldots$ are jointly independent and each has probability $1/2$. Find the probability that infinitely many of them occur.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For each fixed starting index, examine the event that none ever occurs afterward.

</details>

<details>
<summary>Hint 2</summary>

First compute a finite stretch of nonoccurrences, then take a probability limit and a countable union.

</details>

<details>
<summary>Worked solution</summary>

Every eventual-absence event has probability zero, and finite occurrence is a countable union of them.

1. For fixed $N$ and $m\ge N$, independence gives $P(\bigcap_{n=N}^m A_n^c)=2^{-(m-N+1)}$.
2. These finite-stretch events decrease as $m$ grows. Probability continuity gives $P(\bigcap_{n=N}^\infty A_n^c)=0$.
3. The event of only finitely many occurrences is $\bigcup_{N\ge1}\bigcap_{n=N}^\infty A_n^c$.
4. It has probability zero by countable subadditivity. Its complement, infinitely many occurrences, therefore has probability $1$.

</details>
