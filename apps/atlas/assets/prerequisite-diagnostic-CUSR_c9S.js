var e=`---
parent_id: book-representation-theory-finite-groups
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

Try these prompts before opening the answers. (1) Why do AB and BA have the same trace? (2) Why can a homomorphism be checked on generators but not on an arbitrary assignment of generator images? (3) How do you find the kernel of a map on a quotient? (4) Why is an orthogonal complement a direct complement? (5) What is the kernel of a permutation action on G/H?

<details>
<summary>Worked answers and repair route</summary>

1. For square matrices of the same size, tr(AB)=Σ_iΣ_j a_ij b_ji. Reordering the finite sum gives Σ_jΣ_i b_ji a_ij=tr(BA). In particular trace survives conjugation. Repair trace and change of basis in the linear-algebra book before using characters.

2. A homomorphism is determined by its values on generators because products and inverses determine all other values. An assignment defines a homomorphism from a presented group only when every defining relation becomes the identity; different words representing the same group element must produce the same matrix. Repair presentations and quotients in the algebra book.

3. A linear map T:V→W descends to V/U exactly when U⊆ker T; then the induced kernel is (ker T)/U. For an action on a quotient one checks that every action map preserves U. Repair the universal property of the quotient space.

4. For a finite-dimensional positive-definite inner product, choose an orthonormal basis of U and subtract the components of v along it. The remainder lies in U^⊥, giving V=U+U^⊥. Their intersection is zero because a vector orthogonal to itself has zero norm. A nondegenerate indefinite bilinear form does not give the same argument for every subspace.

5. An element x fixes every left coset gH exactly when g^(−1)xg∈H for every g. Therefore the kernel is the core ⋂_(g∈G)gHg^(−1), the largest normal subgroup of G contained in H. A faithful coset action requires trivial core, not necessarily trivial H. Repair stabilisers and normal subgroups if these conditions seem equivalent.

</details>
`;export{e as default};