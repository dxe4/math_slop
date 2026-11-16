# Count overlapping triangles on seven cyclic vertices

*Hard · [Original olympiad-style problems](index.md)*

Seven labeled points lie on a circle. How many unordered pairs of triangles use $6$ distinct vertices and have intersecting interiors? Assume no three of the seven points are collinear, as holds for distinct circle points.

```answer
{"answer":{"kind":"integer","expected":"49","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Fix the six used vertices. There are $\binom63/2=10$ unordered partitions into two triples.

</details>

<details>
<summary>Hint 2</summary>

The two convex triangles have disjoint interiors exactly when the two triples form separate consecutive blocks in the cyclic order. Count those partitions.

</details>

<details>
<summary>Worked solution</summary>

For vertices on a strictly convex boundary, noninterlacing blocks are precisely the separable pairs.

1. Choose the six used vertices in $7$ ways. For a fixed cyclic six-set, an unordered partition into two triples gives a pair of triangles, so there are $20/2=10$ candidates.
2. If each triple is a consecutive block of three around the six-set, the chord joining the two gaps separates their convex hulls; their interiors are disjoint. There are six starting blocks, with complementary blocks identifying pairs, giving $3$ such partitions.
3. Conversely, if the two triples are not separate cyclic blocks, their colors alternate at least four times around the circle. Choosing one vertex in each of four successive alternating runs produces two crossing chords, one joining two vertices of each triangle. A small neighborhood of their transverse crossing has points interior to both triangles, so the interiors intersect.
4. Thus $10-3=7$ pairs overlap for each six-set, yielding $7\cdot7=49$. Every pair has a unique six-set and unordered partition, so no pair is repeated.

</details>
