# Upgrade a homology equivalence using relative Hurewicz

*Hard · [Topology problems](index.md)*

Let $f:X\to Y$ be a map of connected simply connected CW complexes inducing isomorphisms on all integral homology groups. Prove f is a homotopy equivalence. You may use cellular approximation, relative Hurewicz for a simply connected CW pair in its first possible nonzero relative homotopy degree, and Whitehead’s theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Replace f by a cellular map and use its mapping cylinder to obtain a CW pair (M\_f,X).

</details>

<details>
<summary>Hint 2</summary>

Its relative homology vanishes; a least nonzero relative homotopy group would contradict relative Hurewicz.

</details>

<details>
<summary>Model proof</summary>

The mapping cylinder turns a map into a pair so relative homology can eliminate every relative homotopy obstruction.

1. By cellular approximation replace f by a homotopic cellular map. Its mapping cylinder M\_f is a CW complex containing X as a subcomplex and deformation retracting to Y. In particular M\_f and X are simply connected, and the inclusion X→M\_f induces the same homology isomorphisms as f.
2. The long exact homology sequence of the pair gives H\_k(M\_f,X;Z)=0 in every degree. The pair is 1-connected because both spaces are path connected and simply connected.
3. If any relative homotopy group is nonzero, take the least degree n≥2 with that property. Relative Hurewicz for this simply connected (n−1)-connected pair identifies its first relative homotopy group with its zero relative homology group, a contradiction. Thus all relative homotopy groups vanish.
4. The long exact homotopy sequence now shows X→M\_f induces isomorphisms in all homotopy degrees, including the already trivial fundamental groups and connected components. Whitehead makes the inclusion a homotopy equivalence. Composing with the mapping-cylinder retraction proves f is a homotopy equivalence.

**Self-assessment rubric**

- Constructs a CW pair after cellular approximation and checks simple connectedness.
- Uses the pair homology sequence to prove all relative groups vanish.
- Rules out a first nonzero relative homotopy group with the required connectivity assumptions.
- Uses the homotopy sequence and Whitehead to obtain the asserted equivalence of the original map.

</details>
