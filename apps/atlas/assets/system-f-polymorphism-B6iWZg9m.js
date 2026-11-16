var e=`---
parent_id: book-types-proofs-construction
chapter_id: system-f-polymorphism
title: "System F and Polymorphism"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# System F and Polymorphism

The simply typed identity has type $A\\to A$ for any chosen simple type $A$. That metatheoretic sentence describes a family of typing derivations. It is not yet a single term whose type quantifies over $A$ inside the calculus. System F adds that internal quantification. A programme can receive a type argument and then act uniformly at that type. The additional syntax is small, but it changes the questions of type checking, inference and proof interpretation.

This chapter uses Church-style explicitly annotated System F. Type arguments and type abstractions are written in the term; we do not ask an algorithm to invent their placement. The core contains only variables, functions and universal types, without subtyping, recursive types, effects or general recursion. Products, sums and numerals will be encodings in that core. The preceding chapters provide capture-avoiding substitution and the distinction between type safety and termination. The examples here are symbolic derivations, not claims that a compiler has been executed.

## Two contexts, two binders

Types are finite expressions
$$A,B ::= X\\mid A\\to B\\mid\\forall X.A.$$
A type-variable context $\\Delta$ is a finite set of permitted free type variables. Write $\\Delta\\vdash A\\ \\mathrm{type}$ when every free type variable of $A$ belongs to $\\Delta$. The binder in $\\forall X.A$ binds type occurrences of $X$. Types differing only by consistent renaming of bound variables are identified.

Terms are
$$t,u ::= x\\mid\\lambda x:A.t\\mid tu\\mid\\Lambda X.t\\mid t[A].$$
The lowercase lambda binds a term variable. The uppercase lambda binds a type variable throughout its body, including annotations. Square brackets supply a type argument. A term-variable context $\\Gamma$ assigns well-formed types to distinct variables. A judgement $\\Delta;\\Gamma\\vdash t:A$ carries both contexts so that their different scopes remain visible.

The variable, function introduction and application rules retain their ordinary meanings. To introduce a universal type, derive
$$\\frac{\\Delta,X;\\Gamma\\vdash t:A}{\\Delta;\\Gamma\\vdash\\Lambda X.t:\\forall X.A},$$
where $X$ is fresh for $\\Delta$ and does not occur freely in the types of $\\Gamma$. This restriction prevents generalising a type variable on which an undischarged assumption depends. Elimination is
$$\\frac{\\Delta;\\Gamma\\vdash t:\\forall X.A\\qquad\\Delta\\vdash B\\ \\mathrm{type}}{\\Delta;\\Gamma\\vdash t[B]:A[B/X]}.$$
Type substitution is capture-avoiding just like term substitution. Rename a bound type variable before replacement when the inserted type would otherwise be captured.

System F is **impredicative**: the type $B$ supplied at elimination can itself contain universal quantifiers. There is no restriction that it be simpler than the quantified type. This is a rule about substituting types into types, not an equation saying that one universe is an element of itself. System F's type-variable syntax and a dependent theory with an unrestricted Type:Type rule are different systems.

## Worked example 1: one polymorphic identity

Define
$$\\mathit{id}=\\Lambda X.\\lambda x:X.x.$$
Under $\\Delta=X$ and $\\Gamma=x:X$, the variable rule gives $x:X$. Function introduction discharges $x$ and gives $\\lambda x:X.x:X\\to X$. The remaining term context is empty, so $X$ is not free in an assumption type. Universal introduction gives
$$\\varnothing;\\varnothing\\vdash\\mathit{id}:\\forall X.X\\to X.$$
For any well-formed $B$, elimination gives $\\mathit{id}[B]:B\\to B$. Supplying $u:B$ then gives $\\mathit{id}[B]u:B$.

The term can even be instantiated at its own whole type. Put $I=\\forall X.X\\to X$. Then $\\mathit{id}[I]:I\\to I$, so $\\mathit{id}[I]\\mathit{id}:I$. This is typable because the function occurrence is first instantiated at $I$; the argument occurrence retains type $I$. It does not require solving the impossible simple-type equation $A=A\\to B$. Explicit polymorphic instantiation changes the typing problem.

## Two forms of computation

Term beta reduction remains
$$ (\\lambda x:A.t)u\\to t[u/x].$$
The new type beta rule is
$$ (\\Lambda X.t)[B]\\to t[B/X].$$
Type substitution updates annotations as well as term-level type arguments. For example, $\\mathit{id}[B]u$ reduces first to $(\\lambda x:B.x)u$ and then to $u$. Forgetting annotations in the first step would leave an occurrence of a type variable whose binder has disappeared.

Use the compatible closure of these two rules for full reduction. A programming implementation may choose a more restrictive evaluation strategy and erase type arguments at run time. Such erasure is a separate translation with its own preservation claims; it is not a licence to omit type information from this chapter's typing derivations. All syntactic substitutions remain finite operations even when the term being substituted might have a long computation.

**Lemma 6.1 (Type substitution).** If $\\Delta,X;\\Gamma\\vdash t:A$ and $\\Delta\\vdash B\\ \\mathrm{type}$, then
$$\\Delta;\\Gamma[B/X]\\vdash t[B/X]:A[B/X].$$

*Proof.* Induct on the typing derivation. A variable's context entry is replaced by the corresponding substituted type, so the variable rule still applies. For a term abstraction, substitute in its argument annotation and use induction on its body; the function type becomes the arrow between the two substituted types. For application, induction gives the substituted function and argument with matching substituted domain, so application yields the substituted codomain. For universal introduction at a variable $Y$, rename $Y$ fresh for $B$ and $X$ first. Induction gives its body derivation, and the original freshness condition remains true after substitution because $Y$ is absent from $B$. Reintroduce $Y$. For type application, induction gives the substituted polymorphic function and type argument. Capture-avoiding substitutions commute after the same freshness renaming, so universal elimination produces exactly the required substituted result type. These are all term forms. ∎

**Proposition 6.2 (Preservation at the new redex).** If $(\\Lambda X.t)[B]$ has type $A[B/X]$ in a well-formed context, its type-beta reduct has that same type.

*Proof.* Invert universal application and abstraction. The latter supplies a derivation of $t:A$ with fresh $X$ and with $X$ absent from the outer assumption types. Apply Lemma 6.1. Since the context is unchanged by substituting for that absent variable, the reduct $t[B/X]$ has type $A[B/X]$ in the original context. Ordinary beta preservation uses the term-substitution lemma; compatible inner reductions use induction and the corresponding outer typing rule. ∎

## Worked example 2: polymorphic composition

The type
$$\\forall X.\\forall Y.\\forall Z.(Y\\to Z)\\to(X\\to Y)\\to X\\to Z$$
is inhabited by
$$\\Lambda X.\\Lambda Y.\\Lambda Z.\\lambda g:Y\\to Z.\\lambda f:X\\to Y.\\lambda x:X.g(fx).$$
Inside the three term assumptions, $fx:Y$ and $g(fx):Z$ by two applications. Discharge $x$, then $f$, then $g$, obtaining the indicated arrow chain. The term context is now empty, so the three type abstractions satisfy their freshness restrictions. Instantiation at types $A,B,C$ gives ordinary composition at those types. The derivation shows the order of inputs: the outer function $g$ consumes the output of the later-supplied $f$.

The term makes no inspection of $X,Y,Z$. A language with run-time type analysis, mutable state or exceptions needs a different semantic account of uniformity. System F's normalisation and relational-parametricity theorems are substantial metatheorems; the simple-type reducibility proof in Chapter 4 does not prove them merely by reusing the word type. We cite those stronger results rather than silently treating impredicative quantification as an arrow constructor.

## Encoded data and what the encoding promises

Define the Boolean type
$$\\mathrm{Bool}=\\forall X.X\\to X\\to X.$$
Its two familiar inhabitants are
$$\\mathit{true}=\\Lambda X.\\lambda a:X.\\lambda b:X.a,$$
$$\\mathit{false}=\\Lambda X.\\lambda a:X.\\lambda b:X.b.$$
A conditional at result type $C$ is $p[C]uv$ for $p:\\mathrm{Bool}$ and $u,v:C$. With $p=\\mathit{true}$ it reduces to $u$; with false it reduces to $v$. The result type must be the same in both branches. An evaluation strategy that evaluates both arguments before selecting one has different effects in a language with divergence or side effects, even though this pure calculus contains neither as primitives.

For fixed types $A,B$, the encoded product is
$$\\mathrm{Pair}(A,B)=\\forall X.(A\\to B\\to X)\\to X.$$
Construct a pair from $a:A,b:B$ as $\\Lambda X.\\lambda k:A\\to B\\to X.kab$, choosing $X$ fresh for the context. To project the first entry instantiate at $A$ and apply $\\lambda a:A.\\lambda b:B.a$; to project the second instantiate at $B$ and apply the second selector. Beta reductions recover the supplied components. These are operational equations for constructed pairs. A universal claim that all inhabitants of an encoding behave exactly like a primitive datatype needs a precisely stated normal-form or parametricity theorem.

## Worked example 3: numerals and their recurrence

Put
$$\\mathrm{Nat}_F=\\forall X.(X\\to X)\\to X\\to X.$$
For each external natural number $n$, its Church numeral is $\\underline n=\\Lambda X.\\lambda f:X\\to X.\\lambda x:X.f^n x$, where $f^0x=x$ and $f^{n+1}x=f(f^nx)$. This is a family of finite terms, with the type checked by induction on $n$.

Successor is the term
$$\\mathit{succ}=\\lambda n:\\mathrm{Nat}_F.\\Lambda X.\\lambda f:X\\to X.\\lambda x:X.f(n[X]fx).$$
The elimination $n[X]$ has type $(X\\to X)\\to X\\to X$, so the body has type $X$. Type introduction is allowed because the only outer assumption is $n:\\mathrm{Nat}_F$, whose type contains no free $X$. For input $\\underline2$, reductions produce $\\Lambda X.\\lambda f.\\lambda x.f(f(fx))$, the numeral three. This calculation proves the successor equation on the displayed numeral family, without presupposing that every closed term of the encoded type has already been classified.

**Proposition 6.3 (A normal-body classification).** In a context containing only $f:X\\to X$ and $x:X$, where $X$ is a type variable, every beta-normal term of type $X$ is $f^n x$ for some natural number $n$.

*Proof.* A normal term of the atomic type cannot begin with a term abstraction or type abstraction, since those have arrow or universal types. Its head must be a variable from the context. Head $x$ permits no arguments, giving $n=0$. Head $f$ needs exactly one argument of type $X$; there can be no type argument, because $f$ is not universal. Its argument is a smaller beta-normal term in the same context. Induction on finite term size makes that argument $f^n x$, giving $f^{n+1}x$. No other head variable or primitive constant is available. ∎

This proposition has an explicit normal-form and context hypothesis. It is not, by itself, a proof of System F normalisation. The latter is the additional theorem needed to turn normal-form analysis into a theorem about arbitrary well-typed computations.

## Checking and inference are different problems

With every lambda annotation and type argument supplied, checking a derivation follows the written syntax and compares finite types up to bound-variable renaming. Universal introduction checks freshness; elimination performs finite type substitution. This explicit Church-style problem is different from finding missing type abstractions, annotations and instantiations for an unannotated expression. General System F typability and inference are undecidable; that is a cited metatheorem, not a consequence of one failed search example.

Hindley–Milner let polymorphism, explicit System F, dependent type theory and a proof assistant's elaborator have different rules. A particular elaborator may infer many omitted expressions through restricted search while still relying on an explicit core checker. Failure of inference need not mean absence of a typing derivation, and success of a heuristic frontend is meaningful only insofar as its result is checked under the core rules. The proof-assistant chapter returns to that distinction.

## Scope is visible in the type

Compare a term having type $\\forall X.X\\to X$ with a term supplied merely at one fixed $A\\to A$. The polymorphic term can be instantiated separately at $A$ and at $A\\to A$ in the same larger derivation. A monomorphic variable at $A\\to A$ cannot automatically be reused at the second type: the context fixed its type already. Replacing that context entry during one use would change the judgement rather than instantiate a quantifier that was never present.

Quantifier placement also changes a function interface. An input of type $\\forall X.X\\to X$ must work at every supplied type. An input selected only after a surrounding type quantifier may depend on that selected type. Reading the binders from the outside in identifies who chooses the type and when. This is the same dependency discipline that distinguished a single witness working for every challenge from a family of witnesses indexed by challenges in the logic book.

The explicit syntax makes these choices checkable locally. Every type application must point to a universal type; every type abstraction must pass its freshness condition. The finite derivation tree therefore exposes the instantiation decisions that an informal phrase such as “generic identity” can hide. The examples are useful preparation for proof-assistant elaboration because they show which choices the frontend must eventually make explicit for its core checker.

## Exercises

### Exercise 1
<a id="system-f-polymorphism-ex-1"></a>
Derive the type of $\\mathit{id}[A\\to A]$ and reduce its application to $\\lambda z:A.z$.

<details><summary>Hint 1</summary>

Replace the quantified variable in both domain and codomain.

</details>
<details><summary>Hint 2</summary>

The argument is itself an identity at $A$.

</details>
<details><summary>Solution</summary>

Universal elimination gives $(A\\to A)\\to(A\\to A)$. Type beta reduction makes it $\\lambda x:A\\to A.x$. Applying this to $\\lambda z:A.z$ contracts the term beta redex to that argument. The result has type $A\\to A$, and every step follows the stated explicit instantiation. No self-referential simple-type equation is required.

</details>

### Exercise 2
<a id="system-f-polymorphism-ex-2"></a>
Why can a variable $x:X$ in the term context not be generalised directly to $\\Lambda X.x:\\forall X.X$?

<details><summary>Hint 1</summary>

Inspect the universal-introduction freshness requirement.

</details>
<details><summary>Hint 2</summary>

The assumption itself depends on the type being generalised.

</details>
<details><summary>Solution</summary>

$X$ occurs freely in the type of the undischarged assumption $x:X$. The rule explicitly forbids that occurrence. The assumed value is available only at the particular type of the assumption; it has not supplied a value at every unrelated type. Renaming the binder does not remove the dependence. Discharging a term assumption or choosing a genuinely fresh type variable is required before universal introduction can apply.

</details>

### Exercise 3
<a id="system-f-polymorphism-ex-3"></a>
Reduce $\\mathit{false}[C]uv$ and explain why branches of different types cannot be substituted in this expression.

<details><summary>Hint 1</summary>

Instantiate the Boolean type at $C$ first.

</details>
<details><summary>Hint 2</summary>

Both argument positions then have the same domain.

</details>
<details><summary>Solution</summary>

Type beta gives $(\\lambda a:C.\\lambda b:C.b)uv$. Two term beta steps give $v:C$. The instantiated function has type $C\\to C\\to C$, so application requires both $u$ and $v$ at $C$. A branch at a distinct unrelated type fails an application premise. A language with a sum or supertype result would need an explicit construction or different typing rule; System F does not silently choose it.

</details>

### Exercise 4
<a id="system-f-polymorphism-ex-4"></a>
Construct a term of type $\\forall X.\\forall Y.X\\to Y\\to X$ and check both universal freshness conditions.

<details><summary>Hint 1</summary>

Return the first term argument.

</details>
<details><summary>Hint 2</summary>

Discharge both term variables before introducing type quantifiers.

</details>
<details><summary>Solution</summary>

Use $\\Lambda X.\\Lambda Y.\\lambda a:X.\\lambda b:Y.a$. Under $a:X,b:Y$, the variable rule gives $a:X$. Abstraction twice gives $X\\to Y\\to X$ with an empty term context. Universal introduction at $Y$ and then $X$ is therefore allowed: neither is free in an assumption type. The unused $b$ is permitted because the context admits weakening.

</details>

### Exercise 5
<a id="system-f-polymorphism-ex-5"></a>
Write the first projection for an encoded pair and show its reduction on a constructed pair $a,b$.

<details><summary>Hint 1</summary>

Instantiate the pair at its first component type.

</details>
<details><summary>Hint 2</summary>

Pass a function that ignores its second argument.

</details>
<details><summary>Solution</summary>

For $p:\\mathrm{Pair}(A,B)$ use $p[A](\\lambda u:A.\\lambda v:B.u)$. On the constructed pair, type beta produces a function passing $a,b$ to the selector. Its application reduces to $(\\lambda u:A.\\lambda v:B.u)ab$, then to $a$. All intermediate expressions have type $A$. This proves the projection equation for the constructed pair, without assuming an unproved classification of arbitrary encoded inhabitants.

</details>

### Exercise 6
<a id="system-f-polymorphism-ex-6"></a>
Derive a term implementing addition of Church numerals and explain its action on $\\underline m,\\underline n$.

<details><summary>Hint 1</summary>

First apply the second numeral's iteration to the starting value.

</details>
<details><summary>Hint 2</summary>

Then perform the first numeral's iterations on that result.

</details>
<details><summary>Solution</summary>

Use $\\lambda p:\\mathrm{Nat}_F.\\lambda q:\\mathrm{Nat}_F.\\Lambda X.\\lambda f:X\\to X.\\lambda x:X.p[X]f(q[X]fx)$. The inner $q[X]fx$ has type $X$, so the outer instantiated iteration also has type $X$. On the displayed numeral family the result reduces to $f^m(f^n x)$, which is $f^{m+n}x$ by induction on $m$. The outer term context types are closed, satisfying type-introduction freshness.

</details>

### Exercise 7
<a id="system-f-polymorphism-ex-7"></a>
Find the capture problem in substituting $Y$ for $X$ in $\\forall Y.X\\to Y$, and give the correct result.

<details><summary>Hint 1</summary>

The inserted type variable must remain free.

</details>
<details><summary>Hint 2</summary>

Rename the quantified variable before substitution.

</details>
<details><summary>Solution</summary>

Naive substitution gives $\\forall Y.Y\\to Y$, capturing the inserted free $Y$. First alpha-rename the original binder to fresh $Z$, obtaining $\\forall Z.X\\to Z$. Substitution then gives $\\forall Z.Y\\to Z$. Its $Y$ remains free, as required by replacing a free occurrence. The result is not equivalent merely by binder renaming to the captured version, because their sets of free type variables differ.

</details>

### Exercise 8
<a id="system-f-polymorphism-ex-8"></a>
What additional theorem is required before Proposition 6.3 can classify the computations of arbitrary well-typed numeral terms? Explain the gap in using the proposition alone.

<details><summary>Hint 1</summary>

The proposition starts with a beta-normal body in a particular context.

</details>
<details><summary>Hint 2</summary>

Reachability of an appropriate normal representation is a separate claim.

</details>
<details><summary>Solution</summary>

One needs System F normalisation and the canonical or eta-long normal-form analysis exposing the type and term abstractions. Proposition 6.3 then identifies the body under exactly $f:X\\to X,x:X$. It does not show that an arbitrary supplied term reaches such a form, because its hypothesis already assumes normality and that context. Citing the stronger metatheorem honestly supplies the missing step; the simple-type proof cannot cover universal instantiation without new reasoning.

</details>

### Exercise 9
<a id="system-f-polymorphism-ex-9"></a>
Explain why decidable checking of explicit terms is compatible with undecidable general System F inference.

<details><summary>Hint 1</summary>

Compare the data supplied to the two problems.

</details>
<details><summary>Hint 2</summary>

The checker is given the placement of type abstractions and applications.

</details>
<details><summary>Solution</summary>

An explicit checker follows a finite annotated syntax, verifies scopes and compares the resulting finite types. Inference for an unannotated expression must discover suitable type information and instantiation structure, a different search problem. A method deciding the first does not decide the second merely by trying annotations forever: failure to find one would have no general finite stopping criterion. The undecidability claim is a cited theorem about the latter problem, not a failure of the explicit local rules.

</details>

### Exercise 10
<a id="system-f-polymorphism-ex-10"></a>
Does impredicative instantiation itself assert Type:Type or introduce general recursion? Give the exact rule that is being used instead.

<details><summary>Hint 1</summary>

Separate type substitution from a dependent universe rule.

</details>
<details><summary>Hint 2</summary>

The supplied argument may contain a universal quantifier.

</details>
<details><summary>Solution</summary>

Neither assertion follows. The rule says that from $t:\\forall X.A$ and a well-formed type $B$, obtain $t[B]:A[B/X]$, allowing $B$ itself to be universal. It neither identifies a universe with one of its elements nor supplies a fixed-point operator on terms. Consistency and normalisation still require metatheorems for these exact rules; they are not established solely by naming impredicativity. The distinction prevents importing a paradox from a different dependent theory by a verbal analogy.

</details>

## Summary and sources

System F makes type quantification internal through explicit type abstraction and application. Freshness prevents generalising assumption-dependent types; capture-avoiding type substitution explains the new computation rule. Encodings illustrate polymorphic data, while their full semantic classifications require additional theorems. Explicit checking, omitted-type inference, safety and normalisation remain distinct questions.

Benjamin C. Pierce, *Types and Programming Languages*, is the comparison text for the explicit calculus. Jean-Yves Girard's work on second-order arithmetic and polymorphic calculi supplies the cited normalisation theorem; John C. Reynolds, [“Types, Abstraction and Parametric Polymorphism”](https://people.mpi-sws.org/~dreyer/ats/papers/reynolds.pdf) (1983), is the source for relational parametricity; Joe B. Wells, [“Typability and Type Checking in System F Are Equivalent and Undecidable”](https://www.macs.hw.ac.uk/~jbw/papers/) (1999), concerns the unannotated Curry-style problems and must not be confused with checking the explicitly annotated syntax here. These deeper results are cited, not claimed proved by this chapter's local derivations. The following chapters introduce dependent types, where types may depend on terms as well as types.
`;export{e as default};