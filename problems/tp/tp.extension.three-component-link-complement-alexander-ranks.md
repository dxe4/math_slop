# Compute complement Betti numbers without knowing linking

*Medium · [Topology problems](index.md)*

Let A⊂S³ be a disjoint union of three smoothly embedded circles, with arbitrary linking. Using Alexander duality $\widetilde H_i(S^3\setminus A;\mathbb Z)\cong\widetilde H^{2-i}(A;\mathbb Z)$, return \[rank H₁(S³ minus A), rank H₂(S³ minus A)\].

```answer
{"answer":{"kind":"vector","expected":["3","2"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A has three H¹ generators and reduced H⁰ of rank two.

</details>

<details>
<summary>Hint 2</summary>

Apply the degree reversal carefully; no pairwise linking numbers are required for these groups.

</details>

<details>
<summary>Worked solution</summary>

Complement homology detects component counts here, while linking needs additional structure.

1. The compact locally contractible subspace A has H¹(A;Z)=Z³ and H̃⁰(A;Z)=Z². The latter rank is one less than the number of connected components.
2. Alexander duality sends i=1 to degree-one cohomology of A, giving H₁=Z³. It sends i=2 to reduced degree-zero cohomology, giving H₂=Z².
3. The vector is \[3,2\]. These ranks remain the same for different linking patterns and do not determine the complement’s fundamental group or its linking information.

</details>
