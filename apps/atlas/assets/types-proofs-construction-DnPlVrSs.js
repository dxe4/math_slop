var e=`---
id: book-types-proofs-construction
title: "Type Theory and Proof Assistants"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Type Theory and Proof Assistants

What information does a proof carry? Constructive evidence, typed lambda calculi, dependent types and proof assistants answer that question in related ways. This book develops their exact rules and keeps track of the hypotheses under which a computation, a proof and a checked declaration can be connected.

## Preparation

Bring the formal syntax, deduction and metamathematical distinctions of [Introduction to Logic and Set Theory](/books/library-book-introduction-to-logic-and-set-theory/). The route begins at Years 2–3 and reaches Year 4/Master’s material in its dependent and homotopy type theory chapters. Familiarity with functions and structural induction is required. The [reader guide](types-proofs-construction/front-matter/reader-guide.md) gives the constructive conventions; no programming installation is needed for the symbolic derivations.

## Chapter route

1. [The Brouwer–Heyting–Kolmogorov reading](types-proofs-construction/the-brouwer-heyting-kolmogorov-reading.md)
2. [Natural deduction as construction rules](types-proofs-construction/natural-deduction-as-construction-rules.md)
3. [Simply typed lambda calculus](types-proofs-construction/simply-typed-lambda-calculus.md)
4. [Reduction, preservation, and normalization](types-proofs-construction/reduction-preservation-and-normalization.md)
5. [Curry–Howard: precise scope](types-proofs-construction/curry-howard-precise-scope.md)
6. [System F and Polymorphism](types-proofs-construction/system-f-polymorphism.md)
7. [Dependent function and pair types](types-proofs-construction/dependent-function-and-pair-types.md)
8. [Inductive Types and Recursion](types-proofs-construction/inductive-types-and-recursion.md)
9. [Identity types and equality](types-proofs-construction/identity-types-and-equality.md)
10. [Universes and paradox control](types-proofs-construction/universes-and-paradox-control.md)
11. [Writing and Checking Proofs in Lean 4](types-proofs-construction/writing-checking-proofs-lean4.md)
12. [Constructive and Classical Existence](types-proofs-construction/a-constructive-theorem-a-larger-prime.md)
13. [Choice Principles and Constructive Reals](types-proofs-construction/choice-principles-are-setting-sensitive.md)
14. [Linear Logic](types-proofs-construction/linear-logic.md)
15. [Homotopy Type Theory](types-proofs-construction/homotopy-type-theory.md)
16. [Proof assistant trust map](types-proofs-construction/proof-assistant-trust-map.md)

All sixteen readings are available now. The inductive-types chapter develops structural recursion and positivity; the Lean practice chapter uses textual listings with expected results and requires no installed toolchain. Each chapter has worked examples and supported exercises. Read the formal rules before the examples, then try an exercise before revealing its hints or solution. The normalisation chapter includes a full reducibility proof for the specified finite calculus with products and sums. The System F chapter distinguishes explicit checking from omitted-type inference and states which stronger metatheorems are cited.

## Computation and its assumptions

An introduction rule constructs evidence; an elimination rule uses it. Beta reduction removes an immediately introduced and eliminated implication. Preservation maintains types under that computation; progress rules out specified stuck states; strong normalisation excludes infinite reductions in a stated calculus. Those are distinct claims. General recursion can preserve safety while destroying normalisation, and classical axioms or effects need a corresponding interpretation.

Dependent types make the result type depend on an input. Identity proofs and universes add further rules whose computational meaning must be stated. A proof assistant checks a term against an exact formal statement under declarations and axioms. Matching that statement to the intended mathematics remains a separate task.

The [earlier construction examples](types-proofs-construction/back-matter/earlier-construction-examples.md) preserve the original overview examples. The [references](types-proofs-construction/back-matter/references.md) include the comparison texts. The expanded binding and strategy treatment comes from Formal Computation; the trust chapter preserves the computing course’s complete safety argument, reference listing and solved practice. Linear logic and homotopy type theory retain their original chapter identities and mathematical statements in their new place here.
`;export{e as default};