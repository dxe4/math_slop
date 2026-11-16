var e=`---
id: book-introduction-to-logic-and-set-theory
title: "Introduction to Logic and Set Theory"
level: advanced-undergraduate
estimated_minutes: 1950
license: "CC BY-SA 4.0"
---

# Introduction to Logic and Set Theory

This advanced undergraduate book develops formal logic and the elementary foundations of set theory. It starts with formulas, interpretations and deduction, proves completeness and compactness, then builds ordinal and cardinal arguments from ZF. Choice, computability and metamathematics show how assumptions about constructions and proofs affect the conclusions available.

## Before you begin

Complete [Introduction to Proof](/books/library-book-introduction-to-proof/) and the [Proof Foundations course](/atlas/#/item/course-proof-foundations), or bring equivalent experience with sets, functions, equivalence relations, induction and elementary proof. The book does not repeat the first introduction to those objects. It teaches formal syntax, deduction, model construction and transfinite arguments from their definitions. The [reader guide](introduction-to-logic-and-set-theory/front-matter/reader-guide.md) states the logical and set-theoretic conventions.

## Formal logic

1. [Propositional Logic: Syntax, Truth Tables and Normal Forms](introduction-to-logic-and-set-theory/propositional-syntax-truth-tables-normal-forms.md)
2. [Propositional Deduction, Soundness and Completeness](introduction-to-logic-and-set-theory/propositional-deduction-soundness-completeness.md)
3. [Predicates, Quantifiers and Structures](introduction-to-logic-and-set-theory/predicates-quantifiers-structures.md)
4. [First-Order Deduction and Soundness](introduction-to-logic-and-set-theory/first-order-deduction-soundness.md)
5. [The First-Order Completeness Theorem](introduction-to-logic-and-set-theory/first-order-completeness.md)
6. [Compactness, Löwenheim–Skolem and Applications](introduction-to-logic-and-set-theory/compactness-lowenheim-skolem.md)

The [reversible reasoning workshop](/conditions/) and [witness laboratory](/conditions/witnesses/index.html) offer concrete ways to inspect implication and quantifier dependencies. Their examples complement the proofs here; completing a laboratory interaction is not evidence of having proved a theorem.

## Sets and infinite constructions

7. [The Axioms of ZF](introduction-to-logic-and-set-theory/zf-axioms.md)
8. [Ordinals and Transfinite Recursion](introduction-to-logic-and-set-theory/ordinals-transfinite-recursion.md)
9. [Cardinals and Cardinal Arithmetic](introduction-to-logic-and-set-theory/cardinals-cardinal-arithmetic.md)
10. [Choice, Zorn's Lemma and Well-Ordering](introduction-to-logic-and-set-theory/choice-zorn-well-ordering.md)

ZF is the base for these constructions until Choice is explicitly added. An ordinal is an ordered position; a cardinal comparison is an injection or bijection claim. The proof of Zorn's lemma uses the proved Hartogs bound rather than an assumed well-ordering of every set.

## Computation and metatheory

11. [Computable Functions and Turing Machines](introduction-to-logic-and-set-theory/computable-functions-turing-machines.md)
12. [Representability and Gödel's Incompleteness Theorems](introduction-to-logic-and-set-theory/representability-incompleteness.md)
13. [Independence and Models of Set Theory](introduction-to-logic-and-set-theory/independence-set-theoretic-models.md)

The arithmetic coding theorem, Rosser strengthening, second incompleteness theorem and deep set-theoretic independence results are named cited inputs where their full proofs are outside this first course. The diagonal lemma, ordinary Gödel unprovability argument and elementary model implications are proved. The final chapter's generic-real example is explicitly conditional on a countable transitive model; it does not assert that bare consistency supplies one or that one new real refutes CH.

## How to study this book

Reconstruct each definition before reading its proof. At a quantifier rule, record the free-variable and freshness restrictions. At an infinite construction, identify its set-sized input and the axiom that collects the outputs. Each chapter includes worked examples and ten exercises with separate hints and full solutions. Try an argument before opening a reveal, then compare its hypotheses and inferences with the model solution.

The [references and provenance](introduction-to-logic-and-set-theory/back-matter/references.md) identify the sources and the deep theorems cited in the text.
`;export{e as default};