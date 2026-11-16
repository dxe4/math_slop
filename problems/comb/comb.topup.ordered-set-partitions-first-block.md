# Prove a recurrence by selecting the first nonempty block

*Hard · [Combinatorics](index.md)*

Let $F_n$ count ordered partitions of an n-element labeled set into nonempty blocks, allowing the empty ordered partition when n=0. Derive F0=1 and F\_n=sum from k=1 to n of binomial(n,k)F\_(n-k). Use it to find F3.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For a nonempty ground set the first block has some size k&gt;=1.

</details>

<details>
<summary>Hint 2</summary>

After choosing that first block, order-partition the remaining labeled elements.

</details>

<details>
<summary>Model proof</summary>

The first block provides a unique decomposition of every ordered partition.

1. There is one empty ordered partition, so F\_0=1. For n&gt;=1, choose the first block size k, then choose its k members in binomial(n,k) ways.
2. The remaining elements have F\_(n-k) ordered partitions, so summing those disjoint first-block cases gives the recurrence.
3. It yields F\_1=1, F\_2=3, and F\_3=3F\_2+3F\_1+F\_0=13. No ordering is imposed inside individual blocks.

**Self-assessment rubric**

- Give the correct empty ordered-partition base count.
- Select a nonempty first block and justify the remaining independent ordered partition.
- Derive the recurrence and compute the small values without ordering block members.

</details>
