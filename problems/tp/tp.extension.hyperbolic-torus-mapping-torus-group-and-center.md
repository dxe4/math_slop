# Determine the fundamental group and center of a torus mapping torus

*Hard · [Topology problems](index.md)*

Let $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and choose the mapping-torus generator t so its fundamental-group conjugation is tvt⁻¹=Av for v∈Z². Prove the group is $\mathbb Z^2\rtimes_A\mathbb Z$ and its center is trivial. Explain the torus-bundle or van Kampen origin of the presentation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Transporting a fiber loop once around the base circle applies the torus automorphism A.

</details>

<details>
<summary>Hint 2</summary>

For a central pair (v,k), first commute with all fiber translations, then with t.

</details>

<details>
<summary>Model proof</summary>

The bundle monodromy supplies a semidirect relation, and hyperbolicity eliminates central elements.

1. The mapping torus is a bundle over S¹ with fiber T². Cutting the base circle into two overlapping arcs gives trivialized bundle pieces. Applying van Kampen with paths joining the two overlap components introduces one base generator t and identifies its conjugation on π₁(T²)=Z² with A, by the stated direction convention. Thus the presentation has commuting fiber generators and exactly the relations tvt⁻¹=Av.
2. The resulting group has normal form (v,k) and multiplication (v,k)(w,l)=(v+Aᵏw,k+l). Every word reduces to this form; conversely this explicit group satisfies the presentation and shows no further relations occur. Hence it is Z²⋊\_A Z.
3. If (v,k) is central, commuting it with every (w,0) forces Aᵏw=w for all w∈Z² and therefore Aᵏ=I. The eigenvalues of A are (3±√5)/2, one greater than 1, so no nonzero power is the identity. Thus k=0.
4. Commuting (v,0) with t=(0,1) then requires Av=v. But det(A−I)=−1, so A−I is invertible over R and v=0. The center contains only the identity.

**Self-assessment rubric**

- Explains how the fiber group and monodromy produce the stated conjugation presentation.
- Provides the multiplication law and verifies the presentation has the claimed normal forms.
- Uses fiber commutation and eigenvalues to force k=0.
- Uses Av=v and invertibility of A−I to force v=0.

</details>
