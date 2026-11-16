var e=`---
parent_id: book-introduction-to-category-theory
chapter_id: additive-abelian-categories-first-look
title: "Additive and Abelian Categories: A First Look"
level: advanced-undergraduate
status: outline
license: CC BY-SA 4.0
---

# Additive and Abelian Categories: A First Look

This is a short navigation companion. The authored Homological Algebra [Abelian Categories](/books/library-book-morphisms-modules-categories/abelian-categories/) reading develops the categorical definitions, kernels, cokernels, image comparison and exactness. For the concrete module preparation, use [Modules and Exact Sequences](/books/library-book-commutative-algebra/modules-exact-sequences/). Those actual chapters are now expanded with proofs and supported exercises while retaining their original identities; all fourteen primary Homological Algebra chapters now form an authored Draft manuscript, with additional preparation stated locally and independent review outstanding.

An additive category has abelian groups of parallel arrows, bilinear composition, a zero object and finite biproducts. Chapter 4 proved the finite biproduct structure in Ab, including the projection/inclusion equations. An abelian category additionally has kernels and cokernels with the required normality property: the canonical comparison from coimage to image is an isomorphism for every arrow. The concrete model is modules over a fixed ring, where the first isomorphism theorem supplies that comparison.

Additivity alone does not imply the abelian property. In the category of free abelian groups, multiplication by two on the integers is monic and epic but is not invertible. Epicity there follows because its free target groups have no two-torsion: two maps agreeing on all even integers must agree everywhere. The same map is not epic in all abelian groups, where reduction modulo two gives an explicit obstruction. This is the category dependence already encountered in the first chapter.

Continue to that primary teaching reading for exactness and its stated imported diagram lemmas. Complexes, derived functors, resolutions and spectral sequences require the fuller homological sequence; this companion does not supply those prerequisites or claim its own full exercise chapter.
`;export{e as default};