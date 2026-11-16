# Analyze a finite map whose third iterate is the identity

*Hard · [Foundations bridge](index.md)*

Let X={1,2,3,4,5} and f:X→X satisfy $f(f(f(x)))=x$ for every x. Prove f is bijective with inverse f², and determine every possible number of fixed points, giving a realizing map for each count.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The third-iterate identity gives both a left and a right inverse.

</details>

<details>
<summary>Hint 2</summary>

A cycle length must divide three; partition five points into cycles of those allowable lengths.

</details>

<details>
<summary>Model proof</summary>

An iterate identity supplies invertibility and restricts orbit lengths simultaneously.

1. The identity says f∘f²=id and f²∘f=id, so f is bijective with inverse f². It therefore partitions the finite set into disjoint cycles.
2. On a cycle of length l, the third iterate is the identity exactly when l divides 3. Thus each cycle has length 1 or 3.
3. With five points, the number of three-cycles is either zero or one. The fixed-point count is therefore 5 or 2 respectively.
4. The identity realizes five fixed points. The map cycling 1→2→3→1 and fixing 4,5 realizes two. No other count is possible because all points must lie in those allowable cycles.

**Self-assessment rubric**

- Uses both compositions with f² to establish bijectivity and the inverse formula.
- Shows every cycle length divides 3.
- Exhausts cycle partitions of five and constructs maps for both fixed-point counts.

</details>
