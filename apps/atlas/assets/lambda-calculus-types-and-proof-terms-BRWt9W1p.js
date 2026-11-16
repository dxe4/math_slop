var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: lambda-calculus-types-and-proof-terms
title: "Lambda Calculus, Type Safety, and Proof Terms"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Lambda Calculus, Type Safety, and Proof Terms

The lambda calculus isolates variables, abstraction, application, and substitution. Those few constructors expose binding, evaluation strategy, and the boundary between computation and proof. Simple types rule out certain stuck terms and support normalization; under Curry–Howard, typing derivations become proofs of implicational propositions.

## 1. Terms and binding

Terms are $t ::= x | \\lambda x.t | t t$. In $\\lambda x.t$, occurrences of $x$ in $t$ are bound unless shadowed; other occurrences are free. Alpha-equivalent terms differ only by consistent names of bound variables.

Capture-avoiding substitution $[s/x]t$ replaces free $x$ occurrences by $s$. Under $\\lambda y.t$, if $y$ occurs free in $s$, first alpha-rename $y$ to a fresh variable. Naive textual substitution turns $(\\lambda x. \\lambda y. x) y$ into $\\lambda y.y$, incorrectly capturing the free argument; correct reduction yields an alpha-variant of $\\lambda z.y$.

De Bruijn indices replace names by binder distances, trading alpha-renaming for index shifting. Any implementation must declare its representation and prove substitution lemmas appropriate to it.

## 2. Beta reduction and strategies

Beta reduction is

$(\\lambda x.t) s \\to  [s/x]t$.

Full beta reduction may contract any redex. Call-by-name reduces the outermost function without first evaluating the argument; call-by-value beta-reduces only when the argument is a value. They can differ on divergence: $(\\lambda x.\\lambda y.y) \\Omega$ terminates under call-by-name but evaluates divergent $\\Omega$ first under call-by-value.

Church–Rosser confluence says if a term reduces by full beta reduction to $u$ and $v$, there is a common reduct. Thus a normal form, when it exists, is unique up to alpha-equivalence. Confluence does not say every strategy terminates or every term has a normal form.

## 3. Simply typed lambda calculus

Types are base types and arrows $A \\to  B$. A typing context $\\Gamma$ maps variables to types. Judgments $\\Gamma \\vdash  t:A$ follow:

- variable: if $x:A \\in \\Gamma$, then $\\Gamma \\vdash  x:A$;
- abstraction: if $\\Gamma,x:A \\vdash  t:B$, then $\\Gamma \\vdash  \\lambda x.t:A\\to B$;
- application: if $\\Gamma \\vdash  f:A\\to B$ and $\\Gamma \\vdash  s:A$, then $\\Gamma \\vdash  f s:B$.

Typing is syntax-directed except where annotations or inference variables must be supplied. Context shadowing and freshness conventions are explicit.

## 4. Structural lemmas

**Weakening.** If $\\Gamma \\vdash  t:A$ and fresh $x$ is not used incompatibly, then $\\Gamma,x:B \\vdash  t:A$.

**Lemma 14.1 (Substitution).** If $\\Gamma,x:A \\vdash  t:B$ and $\\Gamma \\vdash  s:A$, then $\\Gamma \\vdash  [s/x]t:B$.

Proof is induction on the typing derivation of $t$. The abstraction case alpha-renames its binder fresh for $s$; this is why capture avoidance is part of metatheory, not an implementation detail.

**Canonical forms.** A closed value of arrow type is a lambda abstraction. With Booleans added, a closed Boolean value is $\\mathrm{true}$ or $\\mathrm{false}$. These inversion facts connect static type to runtime shape.

## 5. Preservation and progress

**Preservation.** If $\\Gamma \\vdash  t:A$ and $t \\to  t'$, then $\\Gamma \\vdash  t':A$. The beta case follows from the substitution lemma; congruence cases use induction.

**Progress.** If $\\varnothing \\vdash  t:A$, then $t$ is a value or some $t'$ satisfies $t \\to  t'$. For an application, induction analyzes function and argument; if both are values, canonical forms makes the function a lambda and beta reduction applies.

Together these give type safety: a closed well-typed term does not become stuck under the specified semantics. They do not prove termination, desired functional output, absence of resource exhaustion, secrecy, or external correctness.

## 6. Strong normalization

Every well-typed simply typed lambda term is strongly normalizing: no infinite beta-reduction sequence exists. A standard proof uses reducibility candidates. Interpret base types as strongly normalizing terms and arrow type $A\\to B$ as terms that, when applied to every reducible $A$ term, yield a reducible $B$ term. The fundamental lemma proves typed substitutions map terms into their type interpretations; identity substitution then yields normalization.

This is stronger than progress/preservation. Adding unrestricted general recursion destroys normalization while type safety can remain.

## 7. Curry–Howard

Read type $A\\to B$ as proposition $A \\Rightarrow B$, a term as a proof, and typing as proof checking. Abstraction discharges an assumption; application is modus ponens. Product types correspond to conjunction, sum types to disjunction, and empty type to falsehood in richer calculi.

Beta reduction performs proof normalization: introducing an implication and immediately eliminating it simplifies by substitution. This correspondence depends on the logic and calculus selected. Classical principles, effects, recursion, and dependent types require richer interpretations.

## 8. Type inference boundary

For simply typed lambda calculus with type variables, unification can infer principal types when terms are typable. The occurs check rejects equations like $\\alpha = \\alpha \\to  \\beta$, which would require an infinite type. Polymorphic let, subtyping, effects, and dependent types change decidability and principal-type results.

An inferred type is a certificate only with a checker that reconstructs or validates the derivation. Trust can be concentrated in a small kernel.

## 9. Boundaries

- Alpha-equivalence differs from textual equality.
- Substitution must avoid capture.
- Confluence does not imply termination.
- Progress applies to closed well-typed terms under a named semantics.
- Type safety is not full correctness or security.
- Curry–Howard is parameterized by a particular logic/type theory.

## Exercises with complete solutions

### 1. Free variables

Find free variables of $\\lambda x. x (\\lambda y. z y)$.

**Solution.** Occurrences of $x,y$ are bound by their lambdas. $z$ has no binder, so the free-variable set is $\\{z\\}$.

### 2. Alpha-renaming

Give an alpha-equivalent term to $\\lambda x.\\lambda y.x y$.

**Solution.** $\\lambda u.\\lambda v.u v$, with both binders and their bound occurrences renamed consistently to fresh names.

### 3. Capture avoidance

Reduce $(\\lambda x.\\lambda y.x) y$.

**Solution.** Rename bound $y$ to fresh $z$, obtaining $(\\lambda x.\\lambda z.x) y$, then substitute to get $\\lambda z.y$. The argument's $y$ remains free.

### 4. Strategy difference

Why can call-by-name terminate when call-by-value does not?

**Solution.** If a function ignores its argument, call-by-name substitutes without evaluating it. Call-by-value first evaluates the argument, which may diverge unnecessarily.

### 5. Identity type

Derive a type for $\\lambda x.x$.

**Solution.** Under $x:A$, the variable rule gives $x:A$. Abstraction yields $\\varnothing \\vdash  \\lambda x.x:A\\to A$ for any type $A$.

### 6. Application type

Type $\\lambda f.\\lambda x.f x$.

**Solution.** Assume $f:A\\to B$ and $x:A$; application gives $f x:B$. Abstracting twice yields $(A\\to B)\\to A\\to B$, with arrows right-associative.

### 7. Substitution typing

Which lemma handles beta preservation?

**Solution.** From $\\Gamma,x:A \\vdash  t:B$ and $\\Gamma \\vdash  v:A$, substitution gives $\\Gamma \\vdash  [v/x]t:B$, exactly the reduct's required type.

### 8. Canonical arrow

What is a closed call-by-value value of type $A\\to B$?

**Solution.** A lambda abstraction, by inspecting value syntax and excluding variables because the term is closed.

### 9. Safety scope

Can a well-typed function still return the wrong business result?

**Solution.** Yes. Progress/preservation prevent specified stuck states and type mismatches, not violations of an external functional requirement.

### 10. Confluence claim

What does confluence guarantee about normal forms?

**Solution.** If a term has a normal form, every reduction path reaching a normal form reaches the same one up to alpha-equivalence. It does not guarantee a normal form exists.

### 11. Recursion

Why does a general fixed-point operator threaten normalization?

**Solution.** It can define a term that unfolds to itself indefinitely, producing an infinite reduction sequence despite consistent types.

### 12. Occurs check

Why reject $\\alpha=\\alpha\\to \\beta$ in finite simple types?

**Solution.** Solving it would require $\\alpha$ to contain itself as a proper subexpression forever, an infinite type outside the finite type grammar.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};