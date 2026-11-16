# Prufer cayley tree count

*Hard · [Original Putnam-style training](index.md)*

Prove there are $n^{n-2}$ labelled trees on vertex set $[n]$ for $n\ge2$ using Prüfer codes.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Repeatedly remove the smallest leaf and record its neighbor.

</details>

<details>
<summary>Hint 2</summary>

Explain how to reconstruct a unique tree from any word of length $n-2$ over $[n]$.

</details>

<details>
<summary>Model proof</summary>

Encoding and decoding are inverse bijections. Since each of the $n-2$ word positions has $n$ choices, the tree count is $n^{n-2}$.

1. Given a labelled tree, delete its smallest leaf $n-2$ times, recording its neighbor at each deletion. This yields a word of length $n-2$ over $[n]$.
2. To decode a word, take the smallest remaining label absent from the remaining word as the next leaf, join it to the first word symbol, remove that symbol, and repeat; at the end join the two remaining labels. Inductively these are exactly the leaves and neighbors removed in encoding.
3. Encoding and decoding are inverse bijections. Since each of the $n-2$ word positions has $n$ choices, the tree count is $n^{n-2}$.

**Self-assessment rubric**

- Describe smallest-leaf deletion and resulting code length.
- Reconstruct the tree using the smallest remaining label absent from the remaining code.
- Prove inverse bijection and count n choices at each code position.

</details>
