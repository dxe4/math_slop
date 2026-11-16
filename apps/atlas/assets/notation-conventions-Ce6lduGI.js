var e=`---
parent_id: book-galois-theory
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

All fields are commutative and have an identity, and field homomorphisms preserve that identity. An extension E/F includes a specified embedding of F into E. In a nested diagram we identify F with its image. The degree [E:F] is vector-space dimension and can be infinite; the tower-law multiplication used for numerical degree calculations is explicitly finite.

F(α₁,…,αᵣ) is the smallest field containing F and the listed elements. F[α] is initially the ring of polynomial values; it equals F(α) when α is algebraic. An algebraic closure is fixed when several extensions are compared inside one field. Uniqueness up to F-isomorphism does not assert that two concrete subfields are literally equal.

The minimal polynomial m_(α,F) is monic and irreducible. A polynomial is separable when its roots in a splitting field are distinct; an algebraic extension is separable when every element has separable minimal polynomial. A finite Galois extension is normal and separable. The notation Gal(E/F) still denotes the base-fixing automorphism group when the extension fails those hypotheses; in that case the group may not recover the extension degree.

Permutation products act right to left. For a subgroup H of Aut(E), E^H denotes the elements fixed by every member of H. The order of a finite group is its number of elements, while the order of an element is the order of its cyclic subgroup. Distinguishing these uses of order prevents an erroneous identification of a subgroup with its index.
`;export{e as default};