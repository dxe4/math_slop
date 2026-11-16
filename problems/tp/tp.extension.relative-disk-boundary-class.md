# Find the homology of a disk relative to its boundary

*Medium · [Topology problems](index.md)*

For the pair $(D^2,S^1)$ with usual closed disk and boundary circle, return \[rank H₂(D²,S¹;Z), rank H₁(D²,S¹;Z)\]. Identify the connecting map used in the calculation in your personal argument.

```answer
{"answer":{"kind":"vector","expected":["1","0"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the long exact sequence of the pair and contractibility of D².

</details>

<details>
<summary>Hint 2</summary>

The H₀ map from the boundary to the disk is an isomorphism, while the H₂ relative boundary map lands on H₁(S¹).

</details>

<details>
<summary>Worked solution</summary>

The relative top-dimensional class records a disk whose boundary is allowed to lie in the subspace.

1. The long exact sequence contains 0=H₂(D²)→H₂(D²,S¹)→H₁(S¹)=Z→H₁(D²)=0. Hence its connecting map identifies H₂(D²,S¹) with Z.
2. The next portion is 0→H₁(D²,S¹)→H₀(S¹)=Z→H₀(D²)=Z. The last arrow is an isomorphism because both spaces are nonempty and connected.
3. Exactness gives H₁(D²,S¹)=0. The requested ranks are \[1,0\], and the connecting map sends the relative oriented disk class to its oriented boundary circle.

</details>
