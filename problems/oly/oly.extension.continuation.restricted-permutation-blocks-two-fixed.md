# Decode restricted permutations into compositions

*Hard · [Original olympiad-style problems](index.md)*

How many permutations $p_1,\ldots,p_8$ satisfy $p_i\le i+1$ at every position and have exactly two fixed points?

```answer
{"answer":{"kind":"integer","expected":"31","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

If the first entry is not one, locate the position of one; all preceding entries are forced successively.

</details>

<details>
<summary>Hint 2</summary>

This makes a consecutive block that shifts left labels forward once, and fixed points correspond exactly to blocks of length one.

</details>

<details>
<summary>Worked solution</summary>

Derive a unique composition into forced interval blocks.

1. If one occurs at position j, then for every earlier position i the upper bound and unused-label condition force $p_i=i+1$. The block is $(2,3,\ldots,j,1)$; the case j one is a singleton.
2. Remove this first interval block and subtract its size from remaining labels and positions. The same condition recurs. Hence permitted permutations are bijective with compositions of eight into positive block lengths.
3. A block longer than one has no fixed point; a singleton has one. Exactly two singleton parts leave total six for all other parts, each at least two.
4. With one other part there are three placements of the two ones. With two others the ordered size pairs are $(2,4),(3,3),(4,2)$ and there are six singleton placements, giving eighteen. With three others all are two and there are ten singleton placements.
5. The complete total is $3+18+10=31$. Larger counts of nonsingleton parts cannot fit the remaining six.

</details>
