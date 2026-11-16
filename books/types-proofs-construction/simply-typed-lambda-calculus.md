
# Simply typed lambda calculus

The simply typed lambda calculus ($\lambda^{\to}$) is the computational language that corresponds to intuitionistic propositional natural deduction. This chapter defines its syntax, typing rules, and basic properties. We work several explicit typing derivations and identify common errors in term construction.

## Syntax

**Types.**

$$A, B ::= \iota \mid A \to B \mid A \times B \mid A + B \mid 1 \mid 0$$

Here $\iota$ ranges over base types (for example, $\mathbb{N}$ or $\operatorname{Bool}$). The unit type $1$ has one inhabitant $()$. The empty type $0$ has no inhabitants.

**Terms.**

$$t, u ::= x \mid \lambda x.\, t \mid t\,u \mid (t, u) \mid \pi_1(t) \mid \pi_2(t) \mid \operatorname{inl}(t) \mid \operatorname{inr}(t) \mid \operatorname{case}(t; x.\, u; y.\, v) \mid () \mid \operatorname{abort}(t)$$

## Typing judgments

A typing judgment has the form $\Gamma \vdash t : A$, where $\Gamma$ is a context of variable declarations $x_1 : A_1, \dots, x_n : A_n$. The rules are:

$$\frac{}{\Gamma, x : A \vdash x : A}\;(var)$$

$$\frac{\Gamma, x : A \vdash t : B}{\Gamma \vdash \lambda x.\, t : A \to B}\;({\to}I)$$

$$\frac{\Gamma \vdash f : A \to B \quad \Gamma \vdash u : A}{\Gamma \vdash f\,u : B}\;({\to}E)$$

$$\frac{\Gamma \vdash t : A \quad \Gamma \vdash u : B}{\Gamma \vdash (t, u) : A \times B}\;({\times}I)$$

$$\frac{\Gamma \vdash p : A \times B}{\Gamma \vdash \pi_1(p) : A}\;({\times}E_1) \qquad \frac{\Gamma \vdash p : A \times B}{\Gamma \vdash \pi_2(p) : B}\;({\times}E_2)$$

$$\frac{\Gamma \vdash t : A}{\Gamma \vdash \operatorname{inl}(t) : A + B}\;({+}I_1) \qquad \frac{\Gamma \vdash u : B}{\Gamma \vdash \operatorname{inr}(u) : A + B}\;({+}I_2)$$

$$\frac{\Gamma \vdash s : A + B \quad \Gamma, x : A \vdash t : C \quad \Gamma, y : B \vdash u : C}{\Gamma \vdash \operatorname{case}(s; x.\, t; y.\, u) : C}\;({+}E)$$

$$\frac{}{\Gamma \vdash () : 1}\;(1I)$$

$$\frac{\Gamma \vdash e : 0}{\Gamma \vdash \operatorname{abort}(e) : A}\;(0E)$$

These are exactly the natural deduction rules of Chapter 2, read as term constructors.

## Worked example: swap

We derive $\vdash \operatorname{swap} : (A \times B) \to (B \times A)$ where $\operatorname{swap} = \lambda p.\, (\pi_2(p), \pi_1(p))$.

1. Assume $p : A \times B$.
2. By ${\times}E_2$, $\Gamma \vdash \pi_2(p) : B$.
3. By ${\times}E_1$, $\Gamma \vdash \pi_1(p) : A$.
4. By ${\times}I$, $\Gamma \vdash (\pi_2(p), \pi_1(p)) : B \times A$.
5. By ${\to}I$, $\vdash \lambda p.\, (\pi_2(p), \pi_1(p)) : (A \times B) \to (B \times A)$.

The term is well-typed. Beta-reduction on an input $(a, b)$ yields $(b, a)$, as expected.

## Worked example: composition

We derive $\vdash \operatorname{comp} : (A \to B) \to (B \to C) \to (A \to C)$ where $\operatorname{comp} = \lambda f.\, \lambda g.\, \lambda x.\, g(f(x))$.

1. Assume $f : A \to B$, $g : B \to C$, $x : A$.
2. By ${\to}E$, $f(x) : B$.
3. By ${\to}E$, $g(f(x)) : C$.
4. Discharge $x$, then $g$, then $f$ by successive ${\to}I$ applications.

The term records the proof's data flow exactly: output from $f$ becomes input to $g$.

## Worked example: distributivity

We derive a term for $A \times (B + C) \to (A \times B) + (A \times C)$.

1. Assume $p : A \times (B + C)$.
2. Let $a = \pi_1(p) : A$ and $s = \pi_2(p) : B + C$.
3. Eliminate $s$ by ${+}E$:
   - If $s = \operatorname{inl}(b)$ with $b : B$, return $\operatorname{inl}((a, b)) : (A \times B) + (A \times C)$.
   - If $s = \operatorname{inr}(c)$ with $c : C$, return $\operatorname{inr}((a, c)) : (A \times B) + (A \times C)$.
4. Both branches yield $(A \times B) + (A \times C)$, so ${+}E$ applies.
5. Discharge $p$ by ${\to}I$.

The term is

$$\lambda p.\, \operatorname{case}(\pi_2(p); b.\, \operatorname{inl}((\pi_1(p), b)); c.\, \operatorname{inr}((\pi_1(p), c))).$$

## Common errors

**Error: applying a non-function.** If $\Gamma \vdash t : A$ and $A$ is not a function type, then $t\,u$ is not well-typed. The typing derivation fails at ${\to}E$ because the premise $\Gamma \vdash t : A \to B$ is unsatisfied.

**Error: projection from a non-pair.** $\pi_1(t)$ requires $t : A \times B$. Applying it to a function or sum is a type error.

**Error: case analysis with mismatched branch types.** In ${+}E$, both branches must produce the same type. A common mistake is to return $A$ in one branch and $B$ in the other.

**Error: variable capture.** In $\lambda x.\, t$, the variable $x$ binds occurrences of $x$ in $t$. When substituting $u$ for $x$ in $t$, bound variables in $t$ must be renamed to avoid capturing free variables in $u$. This is capture-avoiding substitution.

## Worked example: inferring an iterator type

Consider $\lambda f.\lambda x.f(fx)$ in the arrow-only fragment. Give $f$ an unknown type $\alpha$ and $x$ an unknown type $\beta$. The inner application introduces a result variable $\gamma$ and requires $\alpha=\beta\to\gamma$. The outer application introduces $\delta$ and requires $\alpha=\gamma\to\delta$. Equating the two arrow types gives $\beta=\gamma$ and $\gamma=\delta$. Thus all three value types agree, and the resulting type is
$$ (A\to A)\to A\to A.$$
The equality of domain and codomain has been derived from the two uses of $f$; it was not assumed merely because the same printed function occurs twice. Replacing the body by $f(gx)$ would allow different intermediate types and yield a composition type instead.

Finite simple-type inference can organise these requirements as equations. Different arrow types unify by equating domains and codomains. Matching product and sum constructors similarly gives component equations; distinct outer constructors clash. An equation $X=T$ can replace the variable $X$ everywhere by $T$ provided $X$ does not occur properly inside $T$. The trivial equation $X=X$ can be removed. This is a syntactic procedure on finite types, not a search over programme executions.

The **occurs check** has a mathematical reason. A putative solution of $X=X\to B$ would require a finite type to equal a type containing itself as a proper part. Count its constructors: the right side contains all constructors of $X$, at least the arrow constructor, and those of $B$. Its size is strictly greater than the left side's, an impossibility for equality of finite syntax. Recursive types deliberately change the permitted objects and their equality rules; they do not refute this finite-type argument.

Each unification transformation preserves the set of solutions to its remaining equations, together with the substitutions already recorded. Decomposing equal constructors is valid because their corresponding subexpressions must agree. Eliminating $X=T$ substitutes an equality that every solution must satisfy. A clash or failed occurs check leaves no finite solution. Termination can be measured lexicographically by the number of variables still appearing in unsolved equations and their total constructor count: eliminating a variable reduces the first measure; decomposition without eliminating variables reduces the second. The substituted equation set may grow in size, but a strict decrease of the first coordinate still takes priority.

Consequently a successful final substitution solves all original constraints. A principal-type conclusion additionally tracks that other solutions factor through the recorded substitution; it is a theorem of this finite unification setting, not a universal property of languages with polymorphism, subtyping or dependent equality. The System F chapter will separate inference of omitted type structure from checking structure already written explicitly.

## Open derivations and closed behaviour

The typing of a term is always relative to its context. For example, $f:A\to B\vdash\lambda x.fx:A\to B$ uses a free $f$. Closing the term requires an additional abstraction, yielding $(A\to B)\to A\to B$. Erasing the context would incorrectly treat a supplied function as one constructed from nothing. A proof assistant similarly distinguishes a theorem under parameters from a closed declaration with those parameters bound in its type.

Type safety is stated for a particular evaluation semantics and a closed term. A variable can be well typed in an open context while having no computation rule; that is not a failure of the closed progress theorem. Likewise a case on a free sum variable may be neutral rather than a tagged value. To apply a closed theorem about evaluation, supply closed values or close the assumptions by abstraction and application. The next chapter's reducibility argument deliberately works with open terms because fresh variables are needed to prove its arrow case.

Finally, a type derivation should distinguish a metavariable from a base type. In inference, $X$ may be a placeholder to solve. In an already fixed derivation, a base type $A$ is part of the statement and cannot be replaced opportunistically when an application fails. Explicit annotations are useful precisely because they expose that commitment. Solving a different type equation would prove a different judgement, not repair the original one without explanation.

## A checking theorem needs the annotations it uses

The raw terms above omit binder types, so one term can have several typings. The identity lambda can have A→A or B→B for different base types. This does not contradict type safety, and it prevents a uniqueness theorem about the raw printed syntax in a fixed empty context. Inference expresses that flexibility through type variables and constraints. Checking a sufficiently annotated term asks a different question.

For a checking presentation, write the input type at each lambda binder. For a left injection annotate the missing right summand; for a right injection annotate the missing left summand. Annotate the target type of empty elimination as well. These annotations are needed because the payload of a left injection determines its left type but says nothing about which right type was intended. Pairing, projection and application need no extra result annotation when their input derivations already determine it.

**Theorem 3.1 (Uniqueness for this annotated presentation).** In one fixed context assigning one type to each variable name, an annotated term has at most one type.

*Proof.* Induct on its syntax. A variable has its one context type and unit has type one. An annotated lambda fixes its domain; the induction hypothesis fixes its body type under that extended context, so the arrow type is fixed. For an application, the function's induction hypothesis fixes one type, which must be an arrow in any valid derivation. Its domain and codomain are therefore fixed, and any valid application returns that same codomain.

For a pair the induction hypotheses fix both component types. A projection's input similarly has one product type, fixing the selected component. An injection combines its payload's uniquely determined type with the explicitly annotated missing summand. For a case, the scrutinee's unique sum type fixes both branch contexts. The branch induction hypotheses fix their result types, and validity requires them to agree, so the case result is fixed. Empty elimination has its explicitly annotated target. These are every constructor, proving the claim. ∎

This proof also gives a terminating checking algorithm. Traverse the finite term, look up variables, extend the context at binders, construct pair and injection types, and demand the required arrow, product or sum shape at each elimination. At a case compare its two result types by structural equality of finite type syntax. If a required shape or equality fails, reject that judgement. Every recursive call uses a proper subterm, so termination follows from term size. Induction through the same cases proves that a returned type has a derivation and that any derivation returns that type.

The theorem is limited to the annotated finite calculus just specified. It does not claim uniqueness of an unannotated principal-type instance, completeness of a polymorphic inference engine, or decidability of dependent definitional equality. The distinction is practical: supplying annotations can turn a reconstruction problem into a direct structural judgement without changing the mathematical rules that the resulting derivation must obey. No checker is executed here; the algorithm's justification is the syntax induction above.

## Practice exercises

### Exercise 1
<a id="simply-typed-lambda-calculus-ex-1"></a>
Give a well-typed term for $1 \to A \to A$ and show the derivation.


<details><summary>Hint 1</summary>

The unit input does not need to be used.

</details>
<details><summary>Hint 2</summary>

Return the following A input unchanged.

</details>
<details><summary>Solution</summary>

The term is $\lambda u.\, \lambda x.\, x$. Derivation: assume $u : 1$ and $x : A$. Then $x : A$ by $(var)$. Discharge $x$ by ${\to}I$, then $u$ by ${\to}I$. The unit argument is ignored.

</details>

### Exercise 2
<a id="simply-typed-lambda-calculus-ex-2"></a>
Give a well-typed term for $(A \to B) \to (C \to A) \to (C \to B)$.


<details><summary>Hint 1</summary>

Follow the codomain of g into the domain of f.

</details>
<details><summary>Hint 2</summary>

Abstract over the two functions and their eventual input.

</details>
<details><summary>Solution</summary>

$\lambda f.\, \lambda g.\, \lambda x.\, f(g(x))$. Assume $f : A \to B$, $g : C \to A$, $x : C$. Then $g(x) : A$ and $f(g(x)) : B$.

</details>

### Exercise 3
<a id="simply-typed-lambda-calculus-ex-3"></a>
Explain why $\lambda x.\, x\,x$ is not well-typed in $\lambda^{\to}$.


<details><summary>Hint 1</summary>

Both occurrences of x must have one context type.

</details>
<details><summary>Hint 2</summary>

The application would force a finite type to contain itself.

</details>
<details><summary>Solution</summary>

For $x\,x$ to be well-typed, $x$ must have type $A \to B$ and also type $A$. This requires $A = A \to B$, which has no finite solution in the simple type system. Self-application is ruled out by the stratification of types.

</details>

### Exercise 4
<a id="simply-typed-lambda-calculus-ex-4"></a>
Give a term for $A \to B \to A \times B$ and describe its computational behaviour.


<details><summary>Hint 1</summary>

Assume one value of each component type.

</details>
<details><summary>Hint 2</summary>

Use pair introduction and discharge the two assumptions.

</details>
<details><summary>Solution</summary>

$\lambda a.\, \lambda b.\, (a, b)$. It takes evidence for $A$ and $B$ and pairs them. This is the ${\times}I$ rule as a function.

</details>

## Chapter summary

The simply typed lambda calculus gives a term language for intuitionistic natural deduction. Types are built from base types, functions, products, sums, unit, and empty. Typing rules correspond exactly to introduction and elimination rules. Well-typed terms encode proofs, and type errors correspond to invalid proof steps.

**Backward pointers:** This chapter uses the natural deduction rules from Chapter 2, "Natural deduction as construction rules." The BHK reading from Chapter 1 motivates the typing rules.

**Forward pointers:** Chapter 4, "Reduction, preservation, and normalization," studies the dynamics of these terms. Chapter 5, "Curry–Howard: precise scope," places the correspondence in its proper context.


## Binding, strategies and type inference: extended reading

The following preserved formal-calculus treatment extends the typing examples above. Its divergence examples concern untyped terms; they do not contradict typed strong normalisation. The complete reducibility proof is in the next chapter.

# Lambda Calculus, Type Safety, and Proof Terms

The lambda calculus isolates variables, abstraction, application, and substitution. Those few constructors expose binding, evaluation strategy, and the boundary between computation and proof. Simple types rule out certain stuck terms and support normalisation; under Curry–Howard, typing derivations become proofs of implicational propositions.

## 1. Terms and binding

Terms are $t ::= x | \lambda x.t | t t$. In $\lambda x.t$, occurrences of $x$ in $t$ are bound unless shadowed; other occurrences are free. Alpha-equivalent terms differ only by consistent names of bound variables.

Capture-avoiding substitution $[s/x]t$ replaces free $x$ occurrences by $s$. Under $\lambda y.t$, if $y$ occurs free in $s$, first alpha-rename $y$ to a fresh variable. Naive textual substitution turns $(\lambda x. \lambda y. x) y$ into $\lambda y.y$, incorrectly capturing the free argument; correct reduction yields an alpha-variant of $\lambda z.y$.

De Bruijn indices replace names by binder distances, trading alpha-renaming for index shifting. Any implementation must declare its representation and prove substitution lemmas appropriate to it.

## 2. Beta reduction and strategies

Beta reduction is

$(\lambda x.t) s \to  [s/x]t$.

Full beta reduction may contract any redex. Call-by-name reduces the outermost function without first evaluating the argument; call-by-value beta-reduces only when the argument is a value. They can differ on divergence: $(\lambda x.\lambda y.y) \Omega$ terminates under call-by-name but evaluates divergent $\Omega$ first under call-by-value.

Church–Rosser confluence says if a term reduces by full beta reduction to $u$ and $v$, there is a common reduct. Thus a normal form, when it exists, is unique up to alpha-equivalence. Confluence does not say every strategy terminates or every term has a normal form.

## 3. Simply typed lambda calculus

Types are base types and arrows $A \to  B$. A typing context $\Gamma$ maps variables to types. Judgments $\Gamma \vdash  t:A$ follow:

- variable: if $x:A \in \Gamma$, then $\Gamma \vdash  x:A$;
- abstraction: if $\Gamma,x:A \vdash  t:B$, then $\Gamma \vdash  \lambda x.t:A\to B$;
- application: if $\Gamma \vdash  f:A\to B$ and $\Gamma \vdash  s:A$, then $\Gamma \vdash  f s:B$.

Typing is syntax-directed except where annotations or inference variables must be supplied. Context shadowing and freshness conventions are explicit.

## 4. Structural lemmas

**Weakening.** If $\Gamma \vdash  t:A$ and fresh $x$ is not used incompatibly, then $\Gamma,x:B \vdash  t:A$.

**Lemma 3.2 (Substitution).** If $\Gamma,x:A \vdash  t:B$ and $\Gamma \vdash  s:A$, then $\Gamma \vdash  [s/x]t:B$.

Proof is induction on the typing derivation of $t$. The abstraction case alpha-renames its binder fresh for $s$; this is why capture avoidance is part of metatheory, not an implementation detail.

**Canonical forms.** A closed value of arrow type is a lambda abstraction. With Booleans added, a closed Boolean value is $\mathrm{true}$ or $\mathrm{false}$. These inversion facts connect static type to runtime shape.

## 5. Preservation and progress

**Preservation.** If $\Gamma \vdash  t:A$ and $t \to  t'$, then $\Gamma \vdash  t':A$. The beta case follows from the substitution lemma; congruence cases use induction.

**Progress.** If $\varnothing \vdash  t:A$, then $t$ is a value or some $t'$ satisfies $t \to  t'$. For an application, induction analyzes function and argument; if both are values, canonical forms makes the function a lambda and beta reduction applies.

Together these give type safety: a closed well-typed term does not become stuck under the specified semantics. They do not prove termination, desired functional output, absence of resource exhaustion, secrecy, or external correctness.

## 6. Strong normalization

Every well-typed simply typed lambda term is strongly normalising: no infinite beta-reduction sequence exists. A standard proof uses reducibility candidates. Interpret base types as strongly normalising terms and arrow type $A\to B$ as terms that, when applied to every reducible $A$ term, yield a reducible $B$ term. The fundamental lemma proves typed substitutions map terms into their type interpretations; identity substitution then yields normalisation.

This is stronger than progress/preservation. Adding unrestricted general recursion destroys normalisation while type safety can remain.

## 7. Curry–Howard

Read type $A\to B$ as proposition $A \Rightarrow B$, a term as a proof, and typing as proof checking. Abstraction discharges an assumption; application is modus ponens. Product types correspond to conjunction, sum types to disjunction, and empty type to falsehood in richer calculi.

Beta reduction performs proof normalisation: introducing an implication and immediately eliminating it simplifies by substitution. This correspondence depends on the logic and calculus selected. Classical principles, effects, recursion, and dependent types require richer interpretations.

## 8. Type inference boundary

For simply typed lambda calculus with type variables, unification can infer principal types when terms are typable. The occurs check rejects equations like $\alpha = \alpha \to  \beta$, which would require an infinite type. Polymorphic let, subtyping, effects, and dependent types change decidability and principal-type results.

An inferred type is a certificate only with a checker that reconstructs or validates the derivation. Trust can be concentrated in a small kernel.

## 9. Boundaries

- Alpha-equivalence differs from textual equality.
- Substitution must avoid capture.
- Confluence does not imply termination.
- Progress applies to closed well-typed terms under a named semantics.
- Type safety is not full correctness or security.
- Curry–Howard is parameterized by a particular logic/type theory.

## Exercises with complete solutions

### Exercise 1. Free variables
<a id="lambda-calculus-types-and-proof-terms-ex-1"></a>
Find free variables of $\lambda x. x (\lambda y. z y)$.

<details><summary>Hint 1</summary>

Track which binder surrounds each variable occurrence.

</details>
<details><summary>Hint 2</summary>

Only an occurrence without a surrounding matching lambda is free.

</details>
<details><summary>Solution</summary>

Occurrences of $x,y$ are bound by their lambdas. $z$ has no binder, so the free-variable set is $\{z\}$.

</details>

### Exercise 2. Alpha-renaming
<a id="lambda-calculus-types-and-proof-terms-ex-2"></a>
Give an alpha-equivalent term to $\lambda x.\lambda y.x y$.

<details><summary>Hint 1</summary>

Choose two fresh variable names.

</details>
<details><summary>Hint 2</summary>

Rename each binder and exactly its bound occurrences together.

</details>
<details><summary>Solution</summary>

$\lambda u.\lambda v.u v$, with both binders and their bound occurrences renamed consistently to fresh names.

</details>

### Exercise 3. Capture avoidance
<a id="lambda-calculus-types-and-proof-terms-ex-3"></a>
Reduce $(\lambda x.\lambda y.x) y$.

<details><summary>Hint 1</summary>

The argument has a free variable matching an inner binder.

</details>
<details><summary>Hint 2</summary>

Rename the inner binder before replacing the outer variable.

</details>
<details><summary>Solution</summary>

Rename bound $y$ to fresh $z$, obtaining $(\lambda x.\lambda z.x) y$, then substitute to get $\lambda z.y$. The argument's $y$ remains free.

</details>

### Exercise 4. Strategy difference
<a id="lambda-calculus-types-and-proof-terms-ex-4"></a>
Why can call-by-name terminate when call-by-value does not?

<details><summary>Hint 1</summary>

One strategy evaluates an argument before substitution.

</details>
<details><summary>Hint 2</summary>

An ignored divergent argument separates their behaviour in the untyped example.

</details>
<details><summary>Solution</summary>

If a function ignores its argument, call-by-name substitutes without evaluating it. Call-by-value first evaluates the argument, which may diverge unnecessarily.

</details>

### Exercise 5. Identity type
<a id="lambda-calculus-types-and-proof-terms-ex-5"></a>
Derive a type for $\lambda x.x$.

<details><summary>Hint 1</summary>

Begin under one variable assumption.

</details>
<details><summary>Hint 2</summary>

Discharge that assumption by arrow introduction.

</details>
<details><summary>Solution</summary>

Under $x:A$, the variable rule gives $x:A$. Abstraction yields $\varnothing \vdash  \lambda x.x:A\to A$ for any type $A$.

</details>

### Exercise 6. Application type
<a id="lambda-calculus-types-and-proof-terms-ex-6"></a>
Type $\lambda f.\lambda x.f x$.

<details><summary>Hint 1</summary>

Choose a domain and codomain for f.

</details>
<details><summary>Hint 2</summary>

Then match the type of x to the domain.

</details>
<details><summary>Solution</summary>

Assume $f:A\to B$ and $x:A$; application gives $f x:B$. Abstracting twice yields $(A\to B)\to A\to B$, with arrows right-associative.

</details>

### Exercise 7. Substitution typing
<a id="lambda-calculus-types-and-proof-terms-ex-7"></a>
Which lemma handles beta preservation?

<details><summary>Hint 1</summary>

Inspect the typing of the beta redex body.

</details>
<details><summary>Hint 2</summary>

Replacing its assumed variable by an argument needs a structural typing lemma.

</details>
<details><summary>Solution</summary>

From $\Gamma,x:A \vdash  t:B$ and $\Gamma \vdash  v:A$, substitution gives $\Gamma \vdash  [v/x]t:B$, exactly the reduct's required type.

</details>

### Exercise 8. Canonical arrow
<a id="lambda-calculus-types-and-proof-terms-ex-8"></a>
What is a closed call-by-value value of type $A\to B$?

<details><summary>Hint 1</summary>

Inspect the value constructors of the given calculus.

</details>
<details><summary>Hint 2</summary>

Closedness excludes a variable value.

</details>
<details><summary>Solution</summary>

A lambda abstraction, by inspecting value syntax and excluding variables because the term is closed.

</details>

### Exercise 9. Safety scope
<a id="lambda-calculus-types-and-proof-terms-ex-9"></a>
Can a well-typed function still return the wrong business result?

<details><summary>Hint 1</summary>

Compare a type with a complete functional specification.

</details>
<details><summary>Hint 2</summary>

A constant function may have the expected output type while returning an unintended value.

</details>
<details><summary>Solution</summary>

Yes. Progress/preservation prevent specified stuck states and type mismatches, not violations of an external functional requirement.

</details>

### Exercise 10. Confluence claim
<a id="lambda-calculus-types-and-proof-terms-ex-10"></a>
What does confluence guarantee about normal forms?

<details><summary>Hint 1</summary>

Join the two reductions using the confluence hypothesis.

</details>
<details><summary>Hint 2</summary>

A normal form has no further reducts.

</details>
<details><summary>Solution</summary>

If a term has a normal form, every reduction path reaching a normal form reaches the same one up to alpha-equivalence. It does not guarantee a normal form exists.

</details>

### Exercise 11. Recursion
<a id="lambda-calculus-types-and-proof-terms-ex-11"></a>
Why does a general fixed-point operator threaten normalisation?

<details><summary>Hint 1</summary>

Take a fixed point of the identity.

</details>
<details><summary>Hint 2</summary>

Unfolding and beta reduction give a repeatable cycle.

</details>
<details><summary>Solution</summary>

It can define a term that unfolds to itself indefinitely, producing an infinite reduction sequence despite consistent types.

</details>

### Exercise 12. Occurs check
<a id="lambda-calculus-types-and-proof-terms-ex-12"></a>
Why reject $\alpha=\alpha\to \beta$ in finite simple types?

<details><summary>Hint 1</summary>

Measure finite type syntax by its number of constructors.

</details>
<details><summary>Hint 2</summary>

The proposed type would contain itself as a proper subtype.

</details>
<details><summary>Solution</summary>

Solving it would require $\alpha$ to contain itself as a proper subexpression forever, an infinite type outside the finite type grammar.

</details>

[Book overview](#/books/types-proofs-construction)

## Summary of the extended chapter

Contexts and capture-avoiding substitution connect finite syntax to valid typing derivations. Explicit derivations explain composition, products and sums; strategy examples separate untyped divergence from typed normalisation. The next chapter proves the latter theorem for the stated finite typed calculus.
