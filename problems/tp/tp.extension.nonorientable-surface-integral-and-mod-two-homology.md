# Compare coefficients on a nonorientable surface

*Medium · [Topology problems](index.md)*

Let N be the connected sum of three projective planes, with one vertex, three one-cells a,b,c and one two-cell attached by $a^2b^2c^2$. Return \[free rank of H₁(N;Z), order of its torsion factor, rank H₂(N;Z), dim H₁(N;F₂), dim H₂(N;F₂)\].

```answer
{"answer":{"kind":"vector","expected":["2","2","0","3","1"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The integral cellular boundary of the two-cell is the column (2,2,2).

</details>

<details>
<summary>Hint 2</summary>

Reduce that column modulo 2 only after computing its integral kernel and cokernel.

</details>

<details>
<summary>Worked solution</summary>

The top mod-two class survives even though the integral orientation class does not.

1. Integrally d₂:Z→Z³ sends 1 to (2,2,2), so it is injective and H₂(N;Z)=0. A primitive basis change sends (1,1,1) to a basis vector, giving H₁(N;Z)=Z²⊕Z/2.
2. Over F₂ the boundary column is zero. With one vertex d₁=0, so H₁ has dimension 3 and H₂ has dimension 1.
3. Thus the vector is \[2,2,0,3,1\]. These are group and vector-space invariants with their stated coefficients; the top F₂ class is not an integral orientation.

</details>
