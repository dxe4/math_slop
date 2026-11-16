# Stirling surjection recurrence

*Hard · [Original Putnam-style training](index.md)*

Let $S(n,k)$ count partitions of an $n$-element labelled set into $k$ nonempty unlabelled blocks. Prove $S(n,k)=S(n-1,k-1)+kS(n-1,k)$ and that surjections $[n]\to[k]$ number $k!S(n,k)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Locate the block containing the final element $n$.

</details>

<details>
<summary>Hint 2</summary>

After partitioning, label the blocks by target values.

</details>

<details>
<summary>Model proof</summary>

Every surjection has exactly its $k$ nonempty fibers as a partition, and assigning the $k$ target labels to those blocks gives $k!$ functions per partition.

1. If $n$ is alone, the other $n-1$ elements form $k-1$ blocks, giving $S(n-1,k-1)$ choices.
2. Otherwise remove $n$ from its block: partition the others into $k$ blocks and choose one of the $k$ blocks to receive it, giving $kS(n-1,k)$.
3. Every surjection has exactly its $k$ nonempty fibers as a partition, and assigning the $k$ target labels to those blocks gives $k!$ functions per partition.

**Self-assessment rubric**

- Count partitions where the final element forms a singleton block.
- Count partitions inserting it into an existing block.
- Relate each unlabelled fiber partition to k! labelled surjections.

</details>
