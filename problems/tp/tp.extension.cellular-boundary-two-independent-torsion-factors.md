# Compute integral homology from a two-cell attachment matrix

*Medium · [Topology problems](index.md)*

A connected CW complex has one vertex, two oriented one-cells and two two-cells, with cellular $d_2=\begin{pmatrix}2&4\\0&6\end{pmatrix}$ and no higher cells. The matrix columns are the oriented two-cell boundaries. Return \[free rank of H₁, smaller torsion order, larger torsion order\] over Z.

```answer
{"answer":{"kind":"vector","expected":["0","2","6"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

H₁ is the cokernel because d₁=0; check d₂ has full rational rank.

</details>

<details>
<summary>Hint 2</summary>

For a full-rank 2×2 integer matrix the first Smith invariant is the entry gcd and the product is the absolute determinant.

</details>

<details>
<summary>Worked solution</summary>

Cellular attachment coefficients can leave torsion even when rational first homology vanishes.

1. With one vertex, both loops have zero cellular d₁. Therefore H₁=Z²/im d₂. The determinant 12 is nonzero, so its free rank is zero.
2. The gcd of 2,4,0,6 is 2, and the product of the Smith invariant factors is 12. Thus they are 2 and 6, with 2 dividing 6.
3. H₁ is Z/2⊕Z/6 and the requested vector is \[0,2,6\]. Full rank also gives H₂=ker d₂=0, although no H₂ entry was requested.

</details>
