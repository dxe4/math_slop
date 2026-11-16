# Bound complement diameter through a forbidden covering pair

*Medium · [Original olympiad-style problems](index.md)*

Prove that if a finite connected simple graph $G$ has diameter at least $4$, its complement has diameter at most $2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For an original adjacent pair, seek a third vertex adjacent to neither.

</details>

<details>
<summary>Hint 2</summary>

If none exists, those two endpoints and their edge connect every pair of original vertices within three steps.

</details>

<details>
<summary>Model proof</summary>

Turn failure of a common complement neighbor into a short original path bound.

1. Take any two vertices. If they are not adjacent originally, they are already adjacent in the complement.
2. If they are adjacent originally and have no common complement neighbor, every other vertex is adjacent originally to at least one of the two.
3. Then any original pair can be connected through those two endpoints by a path of at most three edges, contradicting the diameter hypothesis.
4. Thus every original edge has a common complement neighbor, giving a complement path of length two. This also proves complement connectivity.

**Self-assessment rubric**

- Separate original edges from original nonedges.
- Prove the absence of a common complement neighbor forces original diameter at most three.
- Conclude the complement bound for every pair.

</details>
