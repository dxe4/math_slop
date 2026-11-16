var e=`---
parent_id: book-introduction-to-category-theory
chapter_id: monoidal-categories-first-look
title: "Monoidal Categories: A First Look"
level: advanced-undergraduate
status: outline
license: CC BY-SA 4.0
---

# Monoidal Categories: A First Look

This short navigation companion locates the next subject; it is not a second full monoidal chapter. Continue to the authored primary [Monoidal Categories](../advanced-category-theory/monoidal-categories.md) chapter in Advanced Category Theory for definitions, coherence, functors, closed structure and duality. The earlier [retained monoidal reading](../morphisms-modules-categories/monoidal-categories.md) also remains live with its source, exercises and learner identity preserved. The new primary explicitly imports Mac Lane's general coherence theorem; the product coherence proof in this book was a direct special-case proof.

A monoidal structure adds a bifunctor combining two objects, a unit object, natural associativity and unit isomorphisms, and the pentagon and triangle compatibility equations. An arbitrary binary operation on object names is insufficient. Different combinations on the same category have different units: Cartesian product on Set has a singleton as unit, whereas disjoint union has the empty set. The product pairing and compatibility arguments of Chapter 4 supply the first example's canonical maps.

Tensor products of modules provide another example after the commutative-ring and tensor preparation in [Commutative Algebra](/books/library-book-commutative-algebra/tensor-products-flatness/). Their tensor–Hom correspondence is the adjunction proved in Chapter 7. Endofunctor composition supplies a further example in which the unit is the identity functor; the monad multiplication from Chapter 9 lives in that setting.

Keep two questions separate when continuing: which canonical maps exist, and which equations between their composites have been proved? The authored Advanced Category Theory chapter states its imported general theorem and additional algebraic hypotheses. Its stable native identity is \`library:book-advanced-category-theory:monoidal-categories\`; all twelve primary chapters of that book are now authored as a Draft manuscript, with their additional preparation stated locally and no independent review claimed.
`;export{e as default};