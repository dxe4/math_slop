# Use a non-discrete totally disconnected target

*Easy · [Topology problems](index.md)*

Let $f:[0,1]\to\mathbb Q$ be continuous, with Q carrying its usual subspace topology. Find the number of points in the image of f.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The image is connected.

</details>

<details>
<summary>Hint 2</summary>

Two distinct rational image values would force every real intermediate value in the image under the inclusion into the real line.

</details>

<details>
<summary>Worked solution</summary>

A target can have only singleton connected subsets without being discrete.

1. The interval is nonempty and connected, so its image is a nonempty connected subset of the rationals.
2. Including this image in the real line preserves connectedness. A real connected set containing two distinct rationals contains the interval between them, including an irrational, which is impossible.
3. The image must therefore consist of exactly one point.

</details>
