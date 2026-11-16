
# Earlier Construction Examples

This preserves the earlier overview and its mathematical examples. Its chapter numbers describe the earlier thirteen-chapter arrangement.

# Types, Proofs, and Construction

This book follows one question: what information does a proof carry? Intuitionistic logic, typed lambda calculi, constructive mathematics, and proof assistants answer in related but not identical ways. The aim is to expose the correspondences without turning “proofs are programs” into a slogan broader than its formal scope.

## 1. The Brouwer–Heyting–Kolmogorov reading

Under a constructive evidence reading:

- evidence for $A\land B$ is a pair containing evidence for A and for B;
- evidence for $A\lor B$ identifies a side and carries evidence for that side;
- evidence for $A\to B$ is a method transforming any evidence for A into evidence for B;
- evidence for $\neg A$ is a method transforming evidence for A into contradiction;
- evidence for $∀x\in X \mathbb{P}(x)$ is a method producing evidence for P(x) from any x;
- evidence for $∃x\in X \mathbb{P}(x)$ is a pair of a witness x and evidence for P(x).

This is not a definition of everyday truth. It motivates proof rules for intuitionistic logic and their computational interpretation.

Excluded middle $A\lor\neg A$ is not accepted for arbitrary A without a uniform way to choose a side. For a decidable proposition—equality of two explicitly given natural numbers, for example—one can compute the side, so that instance is constructively valid.

Intuitionistic logic still validates $A\to ¬¬A$, contradiction elimination, and $¬¬(A∨¬A)$. It rejects the general inference $¬¬A\to A$, not the law that contradictions are unacceptable.

## 2. Natural deduction as construction rules

An introduction rule explains how to build evidence for a connective; an elimination rule explains how to use it.

For implication:

```text
assume x : A
derive t : B
---------------- introduction
λx.t : A → B

f : A → B    u : A
--------------------- elimination
f u : B
```

Introducing an implication packages a derivation depending on assumption x. Eliminating it applies the package to evidence u.

For conjunction, introduction pairs evidence $(a,b):A\times B$; elimination projects $first(a,b):A$ or $second(a,b):B$. For disjunction, evidence is tagged $left(a)$ or $right(b)$, and elimination performs case analysis with one branch for each tag.

The empty proposition $\bot$ has no constructor. From a term $e:\bot$, elimination can produce a term of any type A: if contradiction evidence existed, the current assumptions were already impossible.

## 3. Simply typed lambda calculus

Types can be generated from base types with function type $A\to B$, product $A\times B$, sum $A+B$, unit $1$, and empty type $0$. Terms include variables, lambda abstraction, application, pairs, projections, injections, and case analysis.

A typing judgment $\Gamma \vdash t:A$ says term t has type A under variable declarations Γ.

### Example: swap a conjunction

The proposition $(A∧B)\to (B∧A)$ corresponds to type

$A\times B \to B\times A$.

An inhabitant is

$swap = \lambda p.(second p, first p)$.

Given pair $(a,b)$, beta/projection reduction computes $(b,a)$.

### Example: composition

$(A\to B)\to (B\to C)\to (A\to C)$

is inhabited by

$\lambda f.\lambda g.\lambda x.g(f x)$.

The term records the proof’s data flow exactly.

## 4. Reduction, preservation, and normalization

Beta reduction performs function application:

$(\lambda x.t)u \to t[u/x]$,

using capture-avoiding substitution. Product projection reduces $first(a,b)\to a$; sum case analysis selects the branch matching its tag.

**Subject reduction** (preservation) says if $\Gamma \vdash t:A$ and $t\to t'$, then $\Gamma \vdash t':A$. The proof proceeds by induction on the reduction/typing derivation and uses a substitution lemma.

**Strong normalization** for the simply typed lambda calculus says every reduction sequence terminates. It implies there is no typed term that reduces forever in this calculus. A proof often uses Tait’s reducibility candidates: define, by induction on types, sets of terms with sufficiently strong normalization behavior and prove every typed term belongs.

This theorem does not say every programming language terminates. Adding unrestricted general recursion permits nontermination. Dependent type theories used as logical foundations usually control recursion with structural or well-founded termination checks so definitional equality remains decidable and logical consistency is protected.

### Normalization and proof theory

An implication introduction immediately followed by elimination is a proof detour analogous to a beta redex. Normalization removes such detours. In sequent calculus, cut elimination plays a related role. Exact correspondences depend on the systems; “normalization equals cut elimination” is a guide, not one undifferentiated theorem.

## 5. Curry–Howard: precise scope

Curry–Howard is a family of correspondences:

- intuitionistic propositional natural deduction and simply typed lambda calculus;
- intuitionistic predicate logic and dependent types;
- classical calculi and languages with control operators/continuations;
- linear logic and resource-aware type systems;
- modal logics and staged/comonadic systems.

One must specify both the logic and calculus. An arbitrary informal proof does not automatically compile to useful software. Proof irrelevance, quotienting, axioms, noncomputable constants, effects, extraction settings, and trusted runtime code affect what computation remains.

Classical axioms may be represented consistently in proof assistants but can block direct normalization-based computation or require translations. “Formalized” and “constructively executable” are different properties.

## 6. Dependent function and pair types

In a dependent function type

$\Pi x:A. B(x)$,

the output type can depend on the input. It represents a universally quantified construction: given x:A, produce B(x).

A dependent pair

$\sum x:A. B(x)$

contains a witness x and evidence/data of type B(x). It represents constructive existence.

### Vectors indexed by length

Let $Vec(A,n)$ be vectors of elements of A with length n. An append function can have type

$\Pi m,n:N. Vec(A,m)\to Vec(A,n)\to Vec(A,m+n)$.

The length equation is in the type. An implementation proved/checked at this type cannot return a vector of the wrong indexed length, subject to the correctness of the type theory and checker.

### Existential package

The claim “there is an even natural above 100” corresponds to

$\sum n:N. (100<n) \times \sum k:N. (n=2k)$.

One inhabitant packages $102$, a proof $100<102$, witness $51$, and proof $102=2\cdot 51$.

## 7. Identity types and equality

An identity type $Id_{A}(a,b)$ or $a=_{A} b$ is inhabited by evidence that a and b are equal. Reflexivity constructs $refl_{a}:a=a$. The eliminator J expresses that properties respecting reflexivity extend across equality evidence.

Definitional equality is computation recognized by the checker, such as beta reduction. Propositional equality is an inhabited type requiring an explicit proof. Conflating them causes proof engineering errors.

Extensional principles vary. Function extensionality says pointwise equal functions are equal. Propositional extensionality relates logically equivalent propositions. Univalence, in homotopy type theory, relates equivalences of types to identities in a universe. These are not automatic theorems of every dependent type theory; they are axioms or principles in specified systems with specified computational interpretations.

## 8. Universes and paradox control

A naïve type $\operatorname{Type}:\operatorname{Type}$ can enable Girard-style paradoxes in sufficiently expressive dependent systems, analogous in spirit—not identical detail—to unrestricted self-reference in set formation. Many systems use a hierarchy

$Type_{0} : Type_{1} : Type_{2} : …$

with cumulative or noncumulative rules. Universe polymorphism avoids fixing every reusable definition at one level.

The hierarchy is part of the trusted foundation. User-facing omission of levels is elaborator convenience, not evidence that the issue vanished.

## 9. A constructive theorem: a larger prime

Given natural n, construct a prime p>n.

Form $N=n!+1$. Since $N>1$, it has a least divisor $p>1$. The least divisor must be prime: if $p=ab$ with $1<a<p$, then $a$ would be a smaller divisor of $N$. If $p\le n$, then $p$ divides both $n!$ and $N$, so it divides their difference $N-n!=1$, impossible. Hence $p>n$.

The proof describes an algorithm in principle:

1. compute $N=n!+1$;
2. search from 2 upward for the least divisor;
3. return it with divisibility and primality proofs.

This is not an efficient prime-generation method—the factorial grows rapidly and trial division is costly—but it has explicit witness content.

## 10. A classical existence proof without branch information

There exist irrational positive a,b with rational $a^{b}$. Let $r=(\sqrt 2)^{\sqrt 2}$.

- If r is rational, choose $a=b=\sqrt 2$.
- If r is irrational, choose $a=r$, $b=\sqrt 2$; then $a^{b}=((\sqrt 2)^{\sqrt 2})^{\sqrt 2}=2$ under positive-real exponent laws.

Classically, excluded middle says r is rational or not, proving existence. The argument as stated does not decide which pair to return. It illustrates a difference between existence by cases on an undecided proposition and a uniform constructive witness.

This example is pedagogical, not a claim that the rationality of r is forever unknowable. The issue is information supplied by this proof.

## 11. Choice principles are setting-sensitive

In set theory, AC says every set of nonempty sets has a choice function. It implies the well-ordering theorem and Zorn’s lemma over ZF and is independent of ZF relative to consistency.

In dependent type theory, a term of

$\Pi x:A. \sum y:B. R(x,y)$

already assigns to each x a witness y. Projecting first components produces a function $f:\Pi x:A.B$, and second components prove $R(x,f(x))$. This “type-theoretic choice” is constructive unpacking, not automatically the full classical set-theoretic AC for quotiented/extensional sets.

Countable choice, dependent choice, unique choice, and choice for decidable families may have different constructive status. Always name the formulation and ambient foundation.

## 12. Constructive real-number boundaries

Classically equivalent definitions may separate constructively. Cauchy reals often require a modulus controlling convergence to provide computational content. Dedekind cuts require locatedness or related conditions depending on the system. The theorem “every bounded increasing sequence converges” can encode nonconstructive principles unless convergence data are effective.

Constructive analysis is not simply classical analysis with proof by contradiction deleted. Definitions are redesigned to expose approximation and witness data. The Atlas’s real-analysis material is classical unless explicitly labelled otherwise.

## 13. Proof assistant trust map

A modern prover typically contains:

- a small kernel checking terms against typing rules;
- an elaborator translating convenient syntax into kernel terms;
- tactics constructing terms;
- libraries of definitions and prior theorems;
- extraction/evaluation machinery;
- compiler, runtime, operating system, and hardware.

A kernel-checked theorem has high assurance relative to the kernel, foundation, definitions, and computing stack. It does not certify that the formal statement matches the intended informal problem. That specification bridge remains human mathematical work.

The finite-model Atlas lab does not construct proof terms or check arbitrary user derivations. Calling it a proof assistant would misstate its jurisdiction.

## Exercises

1. Give a term inhabiting $A\to (B\to A)$ and explain its data flow.
2. Give a term inhabiting $(A\to B)\to (\neg B\to \neg A)$ where $\neg A$ abbreviates $A\to 0$.
3. Reduce $(\lambda x.(x,x)) u$ one step and state its product type.
4. Explain why $\sum x:A.B(x)$ contains more direct computational information than $¬∀x:A.¬B(x)$ intuitionistically.
5. State the difference between definitional and propositional equality for $(\lambda x.x)u$ and u.
6. Which part of the larger-prime construction is inefficient, and does inefficiency undermine constructivity?
7. Why does the irrational-exponent proof not directly return one named pair?
8. Diagnose: “Curry–Howard proves all classical mathematical proofs are terminating programs.”
9. Explain why projecting a dependent witness is not automatically the full set-theoretic axiom of choice.
10. What must be trusted when a proof assistant kernel accepts a theorem?

## Solutions

1. $\lambda a.\lambda b.a$. It stores the A-evidence, ignores the later B-evidence, and returns A.
2. $\lambda f.\lambda notB.\lambda a.notB(f a)$. From A, f produces B, which notB sends to contradiction.
3. It reduces to $(u,u)$. If $u:A$, the pair has type $A\times A$.
4. The dependent pair gives an explicit x and evidence of B(x). The double-negated universal failure may rule out universal refutation without selecting any x.
5. $(\lambda x.x)u$ reduces by definition to u, so the checker can recognize definitional equality. A noncomputational theorem equating two terms requires an inhabitant of an identity type.
6. Computing $n!+1$ and searching divisors can be enormous. Constructivity asks for a finite witness-producing method with proof, not practical efficiency; complexity is a separate quality.
7. It branches on whether r is rational without deciding that proposition. Excluded middle establishes that one branch works but the proof as written does not identify which.
8. Overbroad. Curry–Howard relates specified logics and calculi. Classical principles need appropriate calculi/translations, and real programming languages may include nontermination/effects. Informal proofs also require formalization.
9. The dependent premise already supplies a witness for each x, so projection merely unpacks data. Set-theoretic families may present only truncated/propositional nonemptiness, quotient structures, or extensionality constraints; the formulations differ.
10. The checking computation trusts the kernel implementation, stated type theory and conversion rules, declared axioms, and surrounding compilation/hardware chain. Rechecked proof terms and library theorem bodies are evidence, while the statement, definitions, and opaque declarations require a separate specification audit. Acceptance establishes the formal judgment relative to those assumptions.

## Sources and future shelves

See the [Stanford Encyclopedia entry on intuitionistic logic](https://plato.stanford.edu/entries/logic-intuitionistic/), its [type theory entry](https://plato.stanford.edu/entries/type-theory/), and the open [Homotopy Type Theory book](https://homotopytypetheory.org/book/) for fuller treatments. Future Atlas shelves should cover realizability, categorical logic, Martin-Löf type theory, Calculus of Constructions, cubical type theory, univalence computation, linear/dependent type systems, program extraction, proof irrelevance, quotient types, constructive reverse mathematics, and formalized case studies in several proof assistants.
