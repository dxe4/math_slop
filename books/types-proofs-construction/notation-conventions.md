
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Logical notation

### Object-language symbols

- $\neg$, $\land$, $\lor$, $\to$: propositional connectives (negation, conjunction, disjunction, implication).
- $\forall$, $\exists$: universal and existential quantifiers.
- $\bot$: falsum, the always-false formula; also the empty type $0$.
- $\top$: verum, the always-true formula.

### Syntactic relations

- $\Gamma \vdash t : A$: context $\Gamma$ proves that term $t$ has type $A$.
- $\Gamma \vdash A \; \text{type}$: $A$ is a well-formed type in context $\Gamma$.
- $t[u/x]$: capture-avoiding substitution of $u$ for free occurrences of $x$ in $t$.

### Equality and reduction

- $t \to_{\beta} t'$: beta reduction.
- $t \to t'$: one-step reduction (beta, projection, or case reduction).
- $t = t'$: definitional equality.
- $a =_{A} b$ or $\operatorname{Id}_{A}(a, b)$: propositional equality (identity type).

## Type-theoretic notation

### Simple types

- $\iota$: a base type (e.g., $\mathbb{N}$, $\operatorname{Bool}$).
- $A \to B$: function type.
- $A \times B$: product type (conjunction).
- $A + B$: sum type (disjunction).
- $1$: unit type, with single inhabitant $()$.
- $0$: empty type (falsum).

### Dependent types

- $\Pi x : A.\, B(x)$: dependent function type (universal quantification).
- $\Sigma x : A.\, B(x)$: dependent pair type (existential quantification).
- $\operatorname{Vec}(A, n)$: type of vectors of length $n$ with elements of type $A$.

### Identity and equality

- $\operatorname{refl}_{a} : a =_{A} a$: reflexivity proof.
- $J(c, d)$: eliminator for identity types (path induction).
- $\operatorname{transport}^{B}(p, t)$: transport of $t$ along equality proof $p$ in family $B$.
- $\operatorname{funext}(p)$: function extensionality.
- $\operatorname{propext}(p, q)$: propositional extensionality.

### Universes

- $\operatorname{Type}_{i}$: the $i$-th universe in the hierarchy.
- $\operatorname{Type}_{i} : \operatorname{Type}_{i+1}$: universe formation.
- Cumulativity: if $A : \operatorname{Type}_{i}$, then $A : \operatorname{Type}_{i+1}$.

## Lambda-calculus notation

- $\lambda x.\, t$: lambda abstraction.
- $t\,u$: function application.
- $(t, u)$: ordered pair.
- $\pi_{1}(t)$, $\pi_{2}(t)$: first and second projections.
- $\operatorname{inl}(t)$, $\operatorname{inr}(t)$: left and right injections into a sum type.
- $\operatorname{case}(s; x.\, u; y.\, v)$: case analysis on a sum.
- $\operatorname{abort}(t)$: ex falso elimination (from $0$).
- $\operatorname{swap} = \lambda p.\, (\pi_{2}(p), \pi_{1}(p))$: pair swap.
- $\operatorname{comp} = \lambda f.\, \lambda g.\, \lambda x.\, g(f(x))$: function composition.

## Number systems and standard structures

- $\mathbb{N}$: the natural numbers $\{0, 1, 2, \dots\}$. When $1$ is the least element, the text says so explicitly.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\mathbb{R}$: the real numbers.
- $\mathbb{Q}^{+}$: the positive rationals (used for moduli of convergence).

## Proof-theoretic notation

- $\Gamma \Rightarrow \Delta$: a sequent.
- $\Gamma \vdash \Delta$: derivability of sequent $\Gamma \Rightarrow \Delta$.
- Cut elimination: transformation of a proof into a cut-free proof.
- Subformula property: in a cut-free proof, every formula is a subformula of the endsequent.

## Set-theoretic notation

- $\in$, $\notin$: membership and non-membership.
- $\subseteq$, $\subset$, $\supseteq$, $\supset$: subset, proper subset, superset, proper superset.
- $\cup$, $\cap$, $\setminus$: union, intersection, set difference.
- $\mathcal{P}(X)$: the power set of $X$.
- $\emptyset$: the empty set.
- $\{x \in A : \varphi(x)\}$: set comprehension.
- $f: A \to B$: a function from $A$ to $B$.
- $f^{-1}(Y)$: preimage of $Y$ under $f$.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Axioms, definitions, inference rules |
| Sketch | Recoverable proof outline; standard constructions suppressed | Textbook arguments, standard inductions |
| Independence result | Models of $T + \varphi$ and $T + \neg\varphi$, or forcing | Forcing constructions, inner models |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Simply typed lambda calculus."
- Chapter IDs are used in internal links: `simply-typed-lambda-calculus`, `identity-types-and-equality`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
