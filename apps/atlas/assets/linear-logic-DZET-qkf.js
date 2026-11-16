var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: linear-logic
title: "Linear Logic"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Linear Logic

Linear logic, introduced by Jean-Yves Girard in 1987, is a refinement of classical and intuitionistic logic in which formulas are treated as resources that must be consumed exactly once. It has deep connections to computer science (type systems, proof nets, semantics of programming languages) and to category theory. This chapter introduces the sequent calculus, the multiplicative and additive connectives, and the exponentials.

## The sequent calculus

**Definition 16.1 (linear sequent).** A *sequent* has the form $\\Gamma \\vdash \\Delta$ where $\\Gamma$ and $\\Delta$ are multisets of formulas. The intended meaning is that the resources in $\\Gamma$ can be transformed into the resources in $\\Delta$.

**Structural rules in classical logic:**
- Weakening: from $\\Gamma \\vdash \\Delta$, infer $\\Gamma, A \\vdash \\Delta$.
- Contraction: from $\\Gamma, A, A \\vdash \\Delta$, infer $\\Gamma, A \\vdash \\Delta$.
- Exchange: from $\\Gamma, A, B, \\Gamma' \\vdash \\Delta$, infer $\\Gamma, B, A, \\Gamma' \\vdash \\Delta$.

In linear logic, weakening and contraction are *not* freely available. They are recovered through the *exponential* modalities.

## Multiplicative connectives

**Definition 16.2 (multiplicative conjunction, tensor).** $A \\otimes B$ represents having both $A$ and $B$ as resources.

$$\\frac{\\Gamma \\vdash A, \\Delta \\quad \\Gamma' \\vdash B, \\Delta'}{\\Gamma, \\Gamma' \\vdash A \\otimes B, \\Delta, \\Delta'}$$

**Definition 16.3 (multiplicative disjunction, par).** $A \\mathbin{\\mathrm{par}} B$ (usually written with an inverted ampersand) is the De Morgan dual of tensor. In a one-sided sequent calculus, its rule combines $A$ and $B$ in the same succedent context. It is not exclusive choice; the additive connective $\\oplus$ carries the internal-choice rule.

**Definition 16.4 (linear implication).** $A \\multimap B$ is defined as $A^\\perp \\mathbin{\\mathrm{par}} B$, where $A^\\perp$ is the linear negation.

**Definition 16.5 (linear negation).** $A^\\perp$ is the De Morgan dual of $A$:
- $(A \\otimes B)^\\perp = A^\\perp \\mathbin{\\mathrm{par}} B^\\perp$
- $(A \\mathbin{\\mathrm{par}} B)^\\perp = A^\\perp \\otimes B^\\perp$
- $(A \\oplus B)^\\perp = A^\\perp \\mathbin{\\&} B^\\perp$
- $(A \\mathbin{\\&} B)^\\perp = A^\\perp \\oplus B^\\perp$
- $1^\\perp = \\bot$, $\\bot^\\perp = 1$
- $0^\\perp = \\top$, $\\top^\\perp = 0$

## Additive connectives

**Definition 16.6 (additive conjunction, with).** $A \\mathbin{\\&} B$ offers both behaviors under the same resources; the consumer selects which component is used.

$$\\frac{\\Gamma \\vdash A, \\Delta \\quad \\Gamma \\vdash B, \\Delta}{\\Gamma \\vdash A \\mathbin{\\&} B, \\Delta}$$

**Definition 16.7 (additive disjunction, plus).** $A \\oplus B$ makes an internal choice: a proof supplies either the left component or the right component.

$$\\frac{\\Gamma \\vdash A, \\Delta}{\\Gamma \\vdash A \\oplus B, \\Delta} \\quad \\frac{\\Gamma \\vdash B, \\Delta}{\\Gamma \\vdash A \\oplus B, \\Delta}$$

## Exponentials

**Definition 16.8 (of course, !).** $!A$ means unlimited use of $A$ is permitted. It allows weakening and contraction:

$$\\frac{\\Gamma \\vdash \\Delta}{\\Gamma, !A \\vdash \\Delta} \\quad \\frac{\\Gamma, !A, !A \\vdash \\Delta}{\\Gamma, !A \\vdash \\Delta}$$

Dereliction makes one ordinary use available:

$$\\frac{\\Gamma,A\\vdash\\Delta}{\\Gamma,!A\\vdash\\Delta}.$$

Promotion, whose side condition requires the surrounding reusable context to be exponential, introduces $!$ on the other side. The full exponential calculus needs all four rules; weakening and contraction alone do not explain how $!A$ supplies an $A$.

**Definition 16.9 (why not, ?).** $?A$ is the De Morgan dual of $!A$: $?A = (!A^\\perp)^\\perp$.

**Theorem 16.10 (one fragmentary translation of intuitionistic logic).** Restrict formulas to atoms, conjunction, and implication. Fix the call-by-name translation $(\\cdot)^*$ by $p^*=p$, $(A\\land B)^*=A^*\\mathbin{\\&}B^*$, and $(A\\to B)^*=!A^*\\multimap B^*$. A derivable intuitionistic sequent $A_1,\\ldots,A_n\\vdash B$ in this fragment maps to $!A_1^*,\\ldots,!A_n^*\\vdash B^*$. The translation of the entire reusable context is essential; the isolated equation for implication is not by itself an embedding theorem. Extending the theorem to disjunction or falsity requires additional, explicitly chosen clauses and is outside this displayed fragment.

## Proof nets

**Definition 16.11 (proof net).** A *proof net* is a graphical representation of a linear logic proof that eliminates bureaucratic distinctions between sequent proofs. It consists of a linking of atomic formulas satisfying certain correctness criteria (e.g., the Danos–Regnier criterion).

**Theorem 16.12 (sequentialization, unit-free MLL).** For the standard unit-free multiplicative syntax and Danos--Regnier correctness criterion, a proof structure is a proof net if and only if it sequentializes to a sequent-calculus proof. Units, additives, and exponentials require additional syntax and correctness machinery.

Proof nets are the canonical proof objects of linear logic, analogous to lambda terms for intuitionistic logic.

## Common errors

**Error: treating linear implication like intuitionistic implication.** An unmarked hypothesis $A$ cannot in general be weakened or contracted when proving $B$ from $A$. Marking a hypothesis with $!$ licenses the structural behavior through the exponential rules.

**Error: forgetting that weakening and contraction are restricted.** In linear logic, you cannot freely discard or duplicate formulas. The exponential modalities control where these operations are allowed.

**Error: confusing multiplicative and additive connectives.** $A \\otimes B$ means you have both; $A \\mathbin{\\&} B$ means you have a choice. In classical logic, both are represented by $\\land$, but they behave differently in linear logic.

## Practice exercises

**Exercise 1.** Prove $A \\vdash A$ in linear logic.

**Solution.** This is the identity axiom, valid for all formulas in linear logic.

**Exercise 2.** Show that $(A \\otimes B) \\multimap C$ is equivalent to $A \\multimap (B \\multimap C)$.

**Solution.** Both formulas express that given one $A$ and one $B$, you can produce one $C$. The proof uses the associativity of tensor and the definition of linear implication.

**Exercise 3.** Under the fixed call-by-name translation of the atom--conjunction--implication fragment above, translate the intuitionistic formula $(A \\land B) \\to C$.

**Solution.** It becomes

$$!(A^*\\mathbin{\\&}B^*)\\multimap C^*.$$

This answer follows the stated translation rather than silently switching between tensor and with. If the formula occurs as a reusable hypothesis in a translated sequent, the context translation adds its outer $!$ as well.

**Exercise 4.** For an arbitrary atom $p$, explain why $!p \\vdash p \\otimes p$ is provable while $p \\vdash p \\otimes p$ is not derivable in unit-free multiplicative-exponential linear logic.

**Solution.** Contract $!p$ to two copies, derelict each copy to $p$, and apply tensor introduction. In a cut-free proof of $p\\vdash p\\otimes p$, tensor introduction would have to split the single atomic occurrence between two premises, leaving one premise without a matching $p$; no rule can create it. The restriction to an arbitrary atom matters: formulas such as $!B$ and multiplicative units have structural rules that defeat the blanket claim for every $A$.

**Exercise 5.** Draw a proof net for $\\vdash A^\\perp \\mathbin{\\mathrm{par}} A$.

**Solution.** The proof net has two atomic formulas $A^\\perp$ and $A$ linked by an axiom edge. The par node combines them into $A^\\perp \\mathbin{\\mathrm{par}} A$. This is the linear logic version of the law of excluded middle for atomic formulas.

## Looking backward and forward

This chapter introduced a resource-sensitive logic that refines the classical and intuitionistic systems from earlier chapters. The proof-theoretic tools connect to “Reference desk E — proof theory” in the flat file. The next chapter, “Homotopy Type Theory”, extends type theory with geometric intuitions and univalent foundations.
`;export{e as default};