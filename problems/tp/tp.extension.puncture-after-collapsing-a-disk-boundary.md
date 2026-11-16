# Analyze a complement of one quotient class

*Medium · [Topology problems](index.md)*

Let Y be the quotient of the closed disk $D^2$ collapsing its whole boundary to one point p and leaving other points distinct. How many connected components does $Y\setminus\{p\}$ have?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The full preimage of this punctured quotient is the open disk.

</details>

<details>
<summary>Hint 2</summary>

The quotient restriction is one-to-one there, and open subsets of the interior are saturated open subsets of the original disk.

</details>

<details>
<summary>Worked solution</summary>

Removing a quotient class must be analyzed through its full preimage.

1. The restriction of q to the open disk is a continuous bijection onto the punctured quotient.
2. Every open subset of the interior is open in the closed disk and saturated, so its quotient image is open. The restriction is therefore a homeomorphism.
3. The open disk is nonempty and path connected, giving exactly one connected component of the punctured quotient.

</details>
