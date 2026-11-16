var e=`---
parent_id: book-logic-foundations-proof-reference
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions {#section-1-notation-and-conventions}

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

<a id="section-3-logical-notation"></a>
## Logical notation {#section-5-logical-notation}

<a id="section-5-object-language-symbols"></a>
### Object-language symbols {#section-7-object-language-symbols}

- $\\neg$, $\\land$, $\\lor$, $\\to$: propositional connectives (negation, conjunction, disjunction, implication).
- $\\forall$, $\\exists$: universal and existential quantifiers.
- $\\bot$: falsum, the always-false formula.
- $\\top$: verum, the always-true formula.

<a id="section-12-syntactic-relations"></a>
### Syntactic relations {#section-14-syntactic-relations}

- $T \\vdash \\varphi$: theory $T$ proves formula $\\varphi$; there exists a finite derivation of $\\varphi$ from axioms in $T$ and logical rules.
- $T \\not\\vdash \\varphi$: $T$ does not prove $\\varphi$.
- $\\vdash \\varphi$: $\\varphi$ is provable from the empty theory (a logical theorem).

<a id="section-18-semantic-relations"></a>
### Semantic relations {#section-20-semantic-relations}

- $\\mathcal{M} \\models \\varphi$: structure $\\mathcal{M}$ satisfies formula $\\varphi$ (under a given variable assignment, when $\\varphi$ is not a sentence).
- $T \\models \\varphi$: every model of $T$ satisfies $\\varphi$ (semantic consequence).
- $\\mathcal{M} \\not\\models \\varphi$: $\\mathcal{M}$ does not satisfy $\\varphi$.

<a id="section-24-modal-and-temporal-operators"></a>
### Modal and temporal operators {#section-26-modal-and-temporal-operators}

- $\\Box \\varphi$: necessity ("$\\varphi$ holds in all accessible worlds").
- $\\Diamond \\varphi$: possibility, defined as $\\neg \\Box \\neg \\varphi$.
- $\\mathsf{X} \\varphi$: next (in temporal logic).
- $\\mathsf{G} \\varphi$: always (globally).
- $\\mathsf{F} \\varphi$: eventually.
- $\\varphi \\, \\mathsf{U} \\, \\psi$: until.

<a id="section-33-set-theoretic-notation"></a>
## Set-theoretic notation {#section-35-set-theoretic-notation}

- $\\in$, $\\notin$: membership and non-membership.
- $\\subseteq$, $\\subset$, $\\supseteq$, $\\supset$: subset, proper subset, superset, proper superset.
- $\\cup$, $\\cap$, $\\setminus$: union, intersection, set difference.
- $\\mathcal{P}(X)$: the power set of $X$.
- $\\emptyset$: the empty set.
- $\\{x \\in A : \\varphi(x)\\}$: set comprehension.
- $\\bigcup_{i \\in I} A_{i}$, $\\bigcap_{i \\in I} A_{i}$: indexed union and intersection.
- $\\langle a, b \\rangle$: ordered pair.
- $A \\times B$: Cartesian product.
- $f: A \\to B$: a function from $A$ to $B$.
- $f^{-1}(Y)$: preimage of $Y$ under $f$.
- $\\text{dom}(f)$, $\\text{ran}(f)$: domain and range of $f$.

<a id="section-48-cardinals-and-ordinals"></a>
### Cardinals and ordinals {#section-50-cardinals-and-ordinals}

- $\\aleph_{0}$: the cardinality of $\\mathbb{N}$.
- $\\aleph_{\\alpha}$: the $\\alpha$-th infinite cardinal.
- $\\omega$: the first infinite ordinal (also $\\aleph_{0}$ as a cardinal).
- $\\omega_{1}$: the first uncountable ordinal.
- $\\text{cf}(\\kappa)$: the cofinality of cardinal $\\kappa$.
- $2^{\\kappa}$: cardinal exponentiation.
- $V_{\\alpha}$: the $\\alpha$-th stage of the cumulative hierarchy.

<a id="section-58-the-arithmetical-hierarchy"></a>
## The arithmetical hierarchy {#section-60-the-arithmetical-hierarchy}

The arithmetical hierarchy classifies definable sets of natural numbers by quantifier complexity.

- $\\Sigma^{0}_{1}$: relations definable by a formula of the form $\\exists x \\, R(x, \\vec{n})$ where $R$ is computable.
- $\\Pi^{0}_{1}$: relations definable by a formula of the form $\\forall x \\, R(x, \\vec{n})$ where $R$ is computable.
- $\\Sigma^{0}_{n+1}$: existential over $\\Pi^{0}_{n}$.
- $\\Pi^{0}_{n+1}$: universal over $\\Sigma^{0}_{n}$.
- $\\Delta^{0}_{n}$: $\\Sigma^{0}_{n} \\cap \\Pi^{0}_{n}$.

**Examples.** The halting set HALT is $\\Sigma^{0}_{1}$-complete. The set of indices of total computable functions is $\\Pi^{0}_{2}$-complete. These classifications appear in Chapter 12 (Computability and Turing Machines) and in "Descriptive Set Theory".

<a id="section-70-the-borel-and-projective-hierarchies"></a>
## The Borel and projective hierarchies {#section-72-the-borel-and-projective-hierarchies}

For a Polish space $X$:

- $\\boldsymbol{\\Sigma}^{0}_{1}$: open sets.
- $\\boldsymbol{\\Pi}^{0}_{\\alpha}$: complements of $\\boldsymbol{\\Sigma}^{0}_{\\alpha}$ sets.
- For countable $\\alpha>1$, $\\boldsymbol{\\Sigma}^{0}_{\\alpha}$: countable unions of sets in $\\bigcup_{\\beta < \\alpha} \\boldsymbol{\\Pi}^{0}_{\\beta}$.
- $\\boldsymbol{\\Delta}^{0}_{\\alpha}$: $\\boldsymbol{\\Sigma}^{0}_{\\alpha} \\cap \\boldsymbol{\\Pi}^{0}_{\\alpha}$.
- $\\boldsymbol{\\Sigma}^{1}_{1}$: analytic sets (continuous images of Borel sets).
- For natural numbers $n\\geq 1$, $\\boldsymbol{\\Pi}^{1}_{n}$: complements of $\\boldsymbol{\\Sigma}^{1}_{n}$ sets.
- $\\boldsymbol{\\Sigma}^{1}_{n+1}$: projections of $\\boldsymbol{\\Pi}^{1}_{n}$ subsets of a product of Polish spaces.
- $\\boldsymbol{\\Delta}^{1}_{n}$: $\\boldsymbol{\\Sigma}^{1}_{n} \\cap \\boldsymbol{\\Pi}^{1}_{n}$.

These appear in "Descriptive Set Theory".

<a id="section-85-forcing-notation"></a>
## Forcing notation {#section-87-forcing-notation}

- $(\\mathbb{P}, \\leq)$: a forcing notion, a partially ordered set with greatest element $\\mathbb{1}$.
- $p \\leq q$: $p$ is stronger than $q$ (extends $q$).
- $p \\perp q$: $p$ and $q$ are incompatible (no common extension).
- $D \\subseteq \\mathbb{P}$: a dense set.
- $G \\subseteq \\mathbb{P}$: a generic filter.
- $\\tau$: a $\\mathbb{P}$-name.
- $\\tau_{G}$: the valuation of $\\tau$ by $G$.
- $M[G]$: the generic extension of ground model $M$ by $G$.
- $p \\Vdash \\varphi$: condition $p$ forces formula $\\varphi$.

These conventions are established in "Forcing" and used in "Large Cardinals" and Chapter 16.

<a id="section-99-type-theoretic-notation"></a>
## Type-theoretic notation {#section-101-type-theoretic-notation}

- $A \\to B$: function type.
- $\\prod_{x:A} B(x)$: dependent product (universal quantification).
- $\\sum_{x:A} B(x)$: dependent sum (existential quantification).
- $\\text{Id}_{A}(a, b)$ or $a =_{A} b$: identity type (path type).
- $\\mathcal{U}$: a universe of types.
- $A \\simeq B$: equivalence of types.
- $\\|A\\|_{-1}$: propositional truncation.

These appear in "Homotopy Type Theory".

<a id="section-111-proof-theoretic-notation"></a>
## Proof-theoretic notation {#section-113-proof-theoretic-notation}

- $\\Gamma \\Rightarrow \\Delta$: a sequent; if all formulas in $\\Gamma$ hold, then some formula in $\\Delta$ holds.
- $\\Gamma \\vdash \\Delta$: derivability of sequent $\\Gamma \\Rightarrow \\Delta$.
- $\\varepsilon_{0}$: the usual proof-theoretic ordinal assigned to Peano arithmetic; the least fixed point of $\\alpha\\mapsto\\omega^\\alpha$.
- $|T|$: the proof-theoretic ordinal of theory $T$.

These appear in Chapter 14 (Sequent Calculus and Proof Theory).

<a id="section-120-number-systems-and-standard-structures"></a>
## Number systems and standard structures {#section-122-number-systems-and-standard-structures}

- $\\mathbb{N}$: the natural numbers $\\{0, 1, 2, \\dots\\}$. When $1$ is the least element, the text says so explicitly.
- $\\mathbb{Z}$: the integers.
- $\\mathbb{Q}$: the rational numbers.
- $\\mathbb{R}$: the real numbers.
- $2^{\\omega}$: Cantor space (infinite binary sequences).
- $\\omega^{\\omega}$: Baire space (infinite sequences of natural numbers).

<a id="section-129-claim-status-conventions"></a>
## Claim-status conventions {#section-131-claim-status-conventions}

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Axioms, definitions, inference rules |
| Sketch | Recoverable proof outline; standard constructions suppressed | Textbook arguments, standard inductions |
| Independence result | Models of $T + \\varphi$ and $T + \\neg\\varphi$, or forcing | Forcing constructions, inner models |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

<a id="section-140-cross-reference-conventions"></a>
## Cross-reference conventions {#section-142-cross-reference-conventions}

- Chapters are cited by title in quotation marks: "Model Theory".
- Chapter IDs are used in internal links: \`model-theory\`, \`forcing\`, \`chapter-12\`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

<a id="section-147-accessibility-and-notation-policy"></a>
## Accessibility and notation policy {#section-149-accessibility-and-notation-policy}

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\\leq$, $\\to$, and $\\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

<a id="section-151-citation-policy"></a>
## Citation policy {#section-153-citation-policy}

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.

<a id="section-159-conventions-for-the-current-graduate-route"></a>
## Conventions for the current graduate route {#section-161-conventions-for-the-current-graduate-route}

Route position and chapter identity are distinct. The files chapter-13, chapter-14 and chapter-15 keep their earlier stable names while appearing as route chapters5,6 and8. A reference to old printed Chapter12 concerns the preserved computability source or its current alias, not the new second-order chapter. Semantic links and chapter titles disambiguate them.

First-order domains are nonempty, substitution avoids capture, and eigenvariables or eigenconstants obey the displayed freshness restrictions. Model-theoretic constructions use the stated ambient classical metatheory. The cut theorem deliberately fixes an equality-free cumulative NNF calculus; equality and arbitrary nonlogical initial sequents are separate extensions. Q is the seven-axiom arithmetic specified in its chapter; PA and HA have their separately stated induction schemes.

A modal frame relation and an intuitionistic extension order have different truth clauses. Full second-order relation ranges and Henkin relation families also differ. Uniform well-foundedness at epsilon-zero is distinguished from each fixed smaller induction instance. Named imported inputs remain theorem statements with references; their use does not turn their proof architecture into a local full proof.
`;export{e as default};