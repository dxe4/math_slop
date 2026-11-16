# Label a double-star with every edge difference once

*Hard · [Original olympiad-style problems](index.md)*

A tree consists of an edge uv, a additional leaves attached to u and b additional leaves attached to v, where $a,b\ge0$. Construct distinct vertex labels $0,1,\ldots,a+b+1$ whose edge differences are exactly $1,\ldots,a+b+1$. Also make every label in one bipartition smaller than every label in the other.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Give u label zero and v label b plus one.

</details>

<details>
<summary>Hint 2</summary>

Use the low unused labels on v’s leaves and high unused labels on u’s leaves.

</details>

<details>
<summary>Model proof</summary>

Partition the required differences into two intervals and one middle edge.

1. Put $N=a+b+1$. Label u zero and v b plus one. Give v’s b leaves labels one through b, and u’s a leaves labels b plus two through N.
2. All vertex labels are distinct and cover exactly zero through N. The v-leaf differences are one through b.
3. The central edge has difference b plus one. The u-leaf differences are b plus two through N, so every required difference appears exactly once.
4. The bipartition consisting of u and v’s leaves has labels zero through b, while the other has labels b plus one through N. This proves the separation property.
5. The same assignment handles zero a or zero b, including the single-edge case, without inventing absent leaf labels.

**Self-assessment rubric**

- Assign every vertex a distinct label in the required range.
- Account exactly for both difference intervals and the central edge.
- Verify all labels of one class are below those of the other.
- Include the boundary cases a=0 or b=0.

</details>
