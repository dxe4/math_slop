var e=`---
parent_id: book-types-proofs-construction
chapter_id: reduction-preservation-and-normalization
title: "Reduction, preservation, and normalization"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Reduction, preservation, and normalization

A well-typed term in the simply typed lambda calculus can be executed. This chapter defines the reduction relation, proves that types are preserved under reduction (subject reduction), and states the strong normalisation theorem. We also explain the connection between normalisation and cut elimination in proof theory.

## Beta reduction

The basic computation step is beta reduction:

$$(\\lambda x.\\, t)\\,u \\;\\to_\\beta\\; t[u/x]$$

where $t[u/x]$ denotes capture-avoiding substitution of $u$ for free occurrences of $x$ in $t$. If $u$ contains variables that would be captured by binders in $t$, those binders are renamed first.

Product projections reduce:

$$\\pi_1((t, u)) \\;\\to\\; t \\qquad \\pi_2((t, u)) \\;\\to\\; u$$

Sum case analysis reduces:

$$\\operatorname{case}(\\operatorname{inl}(t); x.\\, u; y.\\, v) \\;\\to\\; u[t/x]$$

$$\\operatorname{case}(\\operatorname{inr}(t); x.\\, u; y.\\, v) \\;\\to\\; v[t/y]$$

These are the computational content of the elimination rules from Chapter 3.

## Subject reduction

**Theorem 4.3 (Subject reduction).** If $\\Gamma \\vdash t : A$ and $t \\to t'$, then $\\Gamma \\vdash t' : A$.

The proof proceeds by induction on the derivation of $t \\to t'$. The critical case is beta reduction. We need a substitution lemma: if $\\Gamma, x : A \\vdash t : B$ and $\\Gamma \\vdash u : A$, then $\\Gamma \\vdash t[u/x] : B$. This is proved by induction on the typing derivation of $t$, with renaming to avoid capture.

Subject reduction is sometimes called type preservation. It guarantees that a term that starts with type $A$ retains type $A$ after every reduction step. The separate **progress** theorem—every closed well-typed term is a value or can take a step—combines with preservation to give the usual safety statement that evaluation does not get stuck.

## Strong normalization

**Theorem 4.4 (Strong normalization).** Every typable term in the simply typed lambda calculus has no infinite reduction sequence.

This means the calculus is strongly normalising: every reduction path terminates in a normal form. The theorem does not claim that every programming language terminates; it is specific to $\\lambda^{\\to}$ without general recursion.

A standard proof uses Tait's reducibility candidates. One suitable definition for the calculus in this chapter assigns a set $R(A)$ of terms to each type:

- $R(\\iota)$ is the set of strongly normalising terms of base type $\\iota$.
- $R(0)$ and $R(1)$ are the strongly normalising terms of the empty and unit types, respectively.
- $R(A \\to B)$ is the set of terms $t$ such that for every $u \\in R(A)$, the application $t\\,u \\in R(B)$.
- $R(A \\times B)$ is the set of terms $t$ such that $\\pi_1(t) \\in R(A)$ and $\\pi_2(t) \\in R(B)$.
- $R(A + B)$ contains the strongly normalising terms $t$ such that every reachable injection has a reducible component: if $t\\to^{*}\\operatorname{inl}(u)$, then $u\\in R(A)$, and if $t\\to^{*}\\operatorname{inr}(v)$, then $v\\in R(B)$.

The proof also establishes closure under reduction and neutral expansion. Those lemmas are essential: a neutral variable of sum type must be reducible even though it reduces to neither injection. The fundamental lemma then shows that a well-typed term under a reducible substitution belongs to the candidate for its type; the identity substitution gives strong normalisation. This is a proof outline rather than the full candidate argument.

## A complete reducibility proof

We supply the candidate argument for exactly the finite syntax in Chapter 3: base types without extra computational constants, arrows, products, sums, unit and empty type. Reduction is the compatible closure of beta, projection and case contraction; it may reduce inside abstractions and inside either case branch. No eta rule, commuting conversion or recursive constant is included. A stronger reduction relation needs its own argument. Terms are identified up to alpha-renaming, and all substitutions avoid capture.

Write $SN$ for terms with no infinite reduction sequence. Every finite term has finitely many immediate reducts. For $t\\in SN$, its reduction tree therefore has finite height: otherwise one of its finitely many children would have arbitrarily long descendants, and repeating that selection would construct an infinite path. Let $h(t)$ be the maximum length of a reduction from $t$. Then $t\\to t'$ implies $h(t')<h(t)$. This height is a proof device; we do not assume a procedure computing it for arbitrary untyped terms.

Use a supply of fresh variables of every type, considering open typable terms in compatible finite contexts. A **neutral term**, for this argument, is a term not headed by an introduction constructor: a variable, application, projection, case or empty-type elimination. In particular an application whose function is an abstraction still counts as neutral. This convention lets us handle a beta redex through all its immediate reducts; it does not assert that the redex is in normal form.

For each type, use the sets $R(A)$ already defined. We prove three properties simultaneously by induction on the type:

1. **Normalisation:** $R(A)\\subseteq SN$.
2. **Reduction closure:** if $t\\in R(A)$ and $t\\to t'$, then $t'\\in R(A)$.
3. **Neutral closure:** if a neutral $t:A$ has every immediate reduct in $R(A)$, then $t\\in R(A)$.

All three refer to the same compatible reduction. The third condition allows no immediate reducts: a fresh variable is therefore reducible at its type once these properties hold. Having one terminating path would not suffice for the first property; every possible path must terminate.

### Base, unit and empty types

At these types $R(A)=SN$. The first property is its definition. A reduct of a strongly normalising term is strongly normalising, since an infinite path below the reduct would extend to one from the original. If every immediate reduct is strongly normalising, an infinite path from the original is impossible: it would begin with one of those reducts. Thus neutral closure holds, even without using neutrality in this case.

This does not assert a closed inhabitant of the empty type. Open terms such as $z:0$ are strongly normalising, so the candidate must accommodate inconsistent assumptions. The eventual absence of a closed empty-type proof uses typing and canonical forms as well as normalisation.

### Arrows

Suppose the three properties hold at $A$ and $B$. If $t\\in R(A\\to B)$, choose a fresh variable $z:A$. Neutral closure puts it in $R(A)$ because it has no reducts. Hence $tz\\in R(B)\\subseteq SN$. An infinite reduction inside $t$ would give one inside $tz$. Therefore $t\\in SN$, proving the first arrow property.

For reduction closure, let $t\\to t'$ and fix $u\\in R(A)$. We know $tu\\in R(B)$ and $tu\\to t'u$. Closure at $B$ gives $t'u\\in R(B)$. Since $u$ was arbitrary, the defining arrow condition gives $t'\\in R(A\\to B)$.

For neutral closure, assume $t$ is neutral and every immediate $t'$ is in $R(A\\to B)$. Fix $u\\in R(A)$. Induct on $h(u)$ to prove $tu\\in R(B)$ by neutral closure at $B$. Its immediate reducts have form $t'u$ or $tu'$. The first is reducible by the hypothesis on $t'$. The second is reducible by height induction and reduction closure for $u$. There is no outer beta step because neutral $t$ is not syntactically an abstraction. Thus every immediate reduct is reducible, giving $tu\\in R(B)$. This holds for every reducible $u$, proving the arrow case.

### Products

If $t\\in R(A\\times B)$, its first projection is in $R(A)\\subseteq SN$. An infinite reduction in $t$ would lift to one in that projection, so $t\\in SN$. Reduction closure follows by lifting $t\\to t'$ to both projections and using closure at their component types.

If $t$ is neutral and all its reducts are reducible products, consider $\\pi_1(t)$. It is neutral. Since $t$ is not a pair, its immediate reducts are exactly $\\pi_1(t')$ for $t\\to t'$, all in $R(A)$ by the product condition. Neutral closure gives $\\pi_1(t)\\in R(A)$. The same argument for the second projection gives membership in $R(B)$. These are the two requirements defining the product candidate.

### Sums

For sums, normalisation is explicit in the definition of $R(A+B)$. If $t$ reduces to $t'$, then $t'$ is strongly normalising; any injection reachable from $t'$ is also reachable from $t$, so its component has the required membership. This proves reduction closure.

For neutral closure, all immediate reducts of $t$ are strongly normalising, so $t$ is strongly normalising. If $t\\to^*\\operatorname{inl}(u)$, at least one step occurred because neutral $t$ is not an injection. That first reduct is in $R(A+B)$, and its reachable-injection condition gives $u\\in R(A)$. A reachable right injection is handled identically. Thus the whole sum condition holds. A definition containing only terms already headed by a tag would fail here: a neutral sum variable has no tag, but must still be reducible.

### Constructors and eliminators

We need several consequences before induction on typing. First, **beta expansion** holds in this form: if $r,u\\in SN$ and $r[u/x]\\in R(B)$, then $(\\lambda x.r)u\\in R(B)$. Induct on $h(r)+h(u)$ and apply neutral closure to the application. Its outer reduct is the assumed reducible substitution. A reduction $r\\to r'$ gives a reduction $r[u/x]\\to r'[u/x]$, so closure gives membership of the latter. A reduction $u\\to u'$ can be performed at each substituted occurrence of $u$, making $r[u'/x]$ reachable from $r[u/x]$, possibly in zero steps if $x$ is unused. Closure gives membership again. In both inner cases the height sum decreases, so induction handles the corresponding application. These exhaust its immediate reductions.

If $r[u/x]\\in R(B)$ for **every** $u\\in R(A)$, then $\\lambda x.r\\in R(A\\to B)$. Use a fresh variable for $x$ to see $r\\in SN$ up to renaming, and use candidate normalisation for each chosen $u$. Beta expansion proves the defining arrow condition. The fresh-variable argument prevents assuming that a body normalises merely because one special substitution erased its problematic part.

If $a\\in R(A)$ and $b\\in R(B)$, then $(a,b)\\in R(A\\times B)$. For $\\pi_1((a,b))$, induct on $h(a)+h(b)$ and use neutral closure. Its root reduct is $a$, already reducible; reducts inside either component lower the height sum and preserve component membership. The second projection has the same proof with root reduct $b$. This accounts for reductions in the component that a projection will ultimately discard.

If $a\\in R(A)$, then $\\operatorname{inl}(a)\\in R(A+B)$. Only the component reduces, so the injection is strongly normalising, and every reachable left component is a reduct of $a$, hence reducible by closure. No right injection is reachable. The other injection is symmetric. Unit is in $SN$ because it has no reducts.

For **case elimination**, suppose $s\\in R(A+B)$, $r[u/x]\\in R(C)$ for all $u\\in R(A)$, and $q[v/y]\\in R(C)$ for all $v\\in R(B)$. Fresh reducible variables show $r,q\\in SN$ up to renaming. Prove
$$\\operatorname{case}(s;x.r;y.q)\\in R(C)$$
by induction on $h(s)+h(r)+h(q)$, applying neutral closure. A reduct in any of the three subterms lowers the sum. The branch substitution conditions persist under a branch reduction by reduction closure. A root contraction is possible only if $s$ is an injection; its component is reducible by the sum condition, so the selected substituted branch is in $R(C)$ by assumption. These exhaust the reduction rules. Finally, if $e\\in R(0)=SN$, induction on $h(e)$ and neutral closure gives $\\operatorname{abort}(e)\\in R(C)$: its only reducts are inside $e$, with no introduction-triggered root reduction.

### The fundamental lemma and conclusion

**Lemma 4.1 (Reducible substitution).** If $\\Gamma\\vdash t:A$ and a simultaneous capture-avoiding substitution $\\sigma$ assigns a term in $R(B)$ to each declaration $x:B$ in $\\Gamma$, then $t\\sigma\\in R(A)$.

*Proof.* Induct on the typing derivation. A variable is sent to its assigned reducible term. Application uses the defining arrow condition. Abstraction uses the induction hypothesis with $\\sigma$ extended by an arbitrary reducible argument, then the abstraction consequence of beta expansion. Pairing and injections use their constructor results; projection uses the product candidate definition. For case, the scrutinee hypothesis gives the reducible sum, and the two branch hypotheses under arbitrary reducible extensions give exactly the case-elimination assumptions. Unit has no reduct. Empty elimination uses the abort consequence. These are all rules of the finite syntax. Freshening binders before extension keeps the substitutions capture-avoiding. ∎

**Theorem 4.2 (Strong normalisation, full stated calculus).** Every typable term built from the Chapter 3 constructors is strongly normalising for the compatible beta, projection and case reductions.

*Proof.* Assign each free variable to itself. Neutral closure makes this a reducible substitution. The fundamental lemma gives $t\\in R(A)$; candidate normalisation gives $t\\in SN$. The argument selects no evaluation strategy, so it excludes every infinite path for the specified relation. ∎

This proof does not establish confluence. Strong normalisation gives termination; uniqueness of a normal form requires a separate confluence argument. It does not include recursive definitions, arbitrary arithmetic constants or proof-assistant extensions merely because they carry types. Each added constructor must preserve the candidate argument or receive another metatheorem.

## Normalization and proof theory

An introduction immediately followed by an elimination is a **detour** in a proof, analogous to a beta redex in a term. Normalization removes detours. In sequent calculus, the corresponding operation is **cut elimination**: the removal of a cut rule that introduces and immediately eliminates a formula.

The correspondence is precise for many systems but not universal. The exact relationship depends on the formulation of the logic and the calculus. Normalization in natural deduction and cut elimination in sequent calculus are related but not identical processes.

## Worked example: normalization trace

Consider the term $(\\lambda p.\\, (\\pi_2(p), \\pi_1(p)))(a, b)$ of type $B \\times A$, where $a : A$ and $b : B$.

Step 1 (beta): $(\\pi_2((a, b)), \\pi_1((a, b)))$.

Step 2 (projection): $(b, \\pi_1((a, b)))$.

Step 3 (projection): $(b, a)$.

The result $(b, a)$ is in normal form: no redexes remain. The trace confirms that $\\operatorname{swap}$ behaves as expected.

## Worked example 2: capture avoidance changes the visible result

Let $y:A$ be free and consider $(\\lambda x:A.\\lambda y:B.x)y$. Rename the inner binder to fresh $z:B$ before substitution. The beta reduct is $\\lambda z:B.y$, of type $B\\to A$ in the original free context $y:A$. Writing $\\lambda y.y$ instead would capture the supplied free variable, giving an identity at an unrelated type rather than a constant function returning the original evidence. The substitution lemma preserves both the type and the free-variable dependence; comparing printed variable names without their scopes would miss the error.

## Worked example 3: a neutral sum and two reduction orders

Take $s:A+B$, $f:A\\to C$ and $g:B\\to C$ as variables. The term $\\operatorname{case}(s;x.fx;y.gy)$ is neutral and may already be in normal form even though no injection tag appears. The reducibility argument includes it because neutral closure does not demand a chosen branch. After substitution of $\\operatorname{inl}(a)$ for $s$, the case contracts to $fa$. If a reducible argument $a$ first reduces to $a'$, reducing inside the scrutinee gives $\\operatorname{case}(\\operatorname{inl}(a');x.fx;y.gy)$ and then $fa'$. The candidate proof covers both orders without declaring them the only possible reductions of a larger surrounding term. Each stage remains of type $C$.

## Common errors

**Error: assuming strong normalisation extends to all languages.** Adding a fixed-point combinator $Y$ or general recursion permits nontermination. Strong normalisation is a property of $\\lambda^{\\to}$, not of programming languages in general.

**Error: conflating weak and strong normalisation.** Weak normalization says there exists some terminating reduction sequence. Strong normalisation says every reduction sequence terminates. For $\\lambda^{\\to}$, both hold, but the proofs differ in difficulty.

**Error: forgetting capture-avoidance.** Substitution $t[u/x]$ must rename bound variables in $t$ to avoid capturing free variables in $u$. Failure to do so produces terms that are not alpha-equivalent to the intended result.

## Practice exercises

### Exercise 1
<a id="reduction-preservation-and-normalization-ex-1"></a>
Reduce $(\\lambda x.\\, (x, x))\\,u$ one step and state the type of the result, assuming $u : A$.


<details><summary>Hint 1</summary>

Substitute the argument for each free occurrence of the bound variable.

</details>
<details><summary>Hint 2</summary>

Both entries of the resulting pair have the argument type.

</details>
<details><summary>Solution</summary>

$(u, u) : A \\times A$. The beta redex is replaced by the pair, and both components have type $A$.

</details>

### Exercise 2
<a id="reduction-preservation-and-normalization-ex-2"></a>
Show that $\\lambda x.\\, \\lambda y.\\, x$ is in normal form.


<details><summary>Hint 1</summary>

Inspect the syntax for an elimination applied to an introduction.

</details>
<details><summary>Hint 2</summary>

Neither lambda binder creates a beta redex by itself.

</details>
<details><summary>Solution</summary>

The term is a lambda abstraction whose body is a lambda abstraction whose body is a variable. There are no applications, projections, or case analyses, so no reduction rule applies. It is in normal form.

</details>

### Exercise 3
<a id="reduction-preservation-and-normalization-ex-3"></a>
Trace the reduction of $\\operatorname{case}(\\operatorname{inl}(a); x.\\, (x, x); y.\\, y)$ where $a:A$ and the scrutinee is assigned type $A+(A\\times A)$.


<details><summary>Hint 1</summary>

The left injection chooses the first branch.

</details>
<details><summary>Hint 2</summary>

Replace each free x in that branch by a.

</details>
<details><summary>Solution</summary>

The outer term is a case analysis on $\\operatorname{inl}(a)$. By the sum reduction rule, it reduces to $(a, a) : A \\times A$. No further reductions apply if $a$ is a variable or normal form.

</details>

### Exercise 4
<a id="reduction-preservation-and-normalization-ex-4"></a>
Explain why adding a primitive fixed-point operator $\\operatorname{fix}:(A\\to A)\\to A$ with $\\operatorname{fix}(f)\\to f(\\operatorname{fix}(f))$ breaks strong normalisation.


<details><summary>Hint 1</summary>

Apply the unfolding rule to the identity function.

</details>
<details><summary>Hint 2</summary>

The following beta step returns to the initial term.

</details>
<details><summary>Solution</summary>

Let $f=\\lambda x.x$. The primitive rule gives $\\operatorname{fix}(f)\\to f(\\operatorname{fix}(f))$, and beta reduction returns $f(\\operatorname{fix}(f))$ to $\\operatorname{fix}(f)$. This repeatable two-step cycle is an infinite reduction sequence. General recursion therefore breaks strong normalisation.

</details>

### Exercise 5
<a id="reduction-preservation-and-normalization-ex-5"></a>
Why is it insufficient to define the candidate for $A+B$ as only injections with reducible components? Give a typable counterexample to the intended fundamental lemma under that definition.

<details><summary>Hint 1</summary>

A typing context can contain a variable of sum type.

</details>
<details><summary>Hint 2</summary>

The identity substitution must be reducible to finish the proof.

</details>
<details><summary>Solution</summary>

In context $s:A+B$, the variable rule derives $s:A+B$. This term is not an injection and has no reduction to one, so the proposed candidate excludes it. The identity substitution would fail the reducibility condition on $s$, blocking the intended conclusion for open terms. The chapter's actual definition includes strongly normalising neutral sums whose reachable injections, if any, have reducible components; for $s$, the latter condition is vacuous. Thus fresh variables can supply the identity substitution.

</details>

### Exercise 6
<a id="reduction-preservation-and-normalization-ex-6"></a>
Explain how $tz\\in SN$, for a fresh variable $z$, implies $t\\in SN$. Does strong normalisation of two arbitrary untyped subterms imply strong normalisation of their application?

<details><summary>Hint 1</summary>

An inner reduction remains available in an application context.

</details>
<details><summary>Hint 2</summary>

For the converse replace the variable argument by a strongly normalising self-application function.

</details>
<details><summary>Solution</summary>

If $t$ had an infinite sequence $t\\to t_1\\to\\cdots$, compatibility would give $tz\\to t_1z\\to\\cdots$, contradicting the premise. Two arbitrary strongly normalising subterms need not have a strongly normalising application. Take $d=\\lambda x.xx$, which has no beta redex and is in normal form, but $dd\\to dd$ forever. This is why the arrow candidate requires behaviour on every reducible argument rather than only normalisation of the function itself. No claim about this untypable self-application is transferred to the typed theorem.

</details>

### Exercise 7
<a id="reduction-preservation-and-normalization-ex-7"></a>
In the pairing constructor proof, why must the induction account for reductions in $b$ while proving reducibility of $\\pi_1((a,b))$?

<details><summary>Hint 1</summary>

The reduction relation permits inner steps before root contraction.

</details>
<details><summary>Hint 2</summary>

Strong normalisation quantifies over all allowed paths.

</details>
<details><summary>Solution</summary>

Although the root projection discards $b$, a compatible reduction can first reduce inside $b$ any number of times. Neutral closure therefore needs the immediate reduct $\\pi_1((a,b'))$ whenever $b\\to b'$, as well as the root reduct $a$ and steps in $a$. The induction on $h(a)+h(b)$ covers that reduct because $h(b')<h(b)$ and reduction closure preserves $b'\\in R(B)$. An argument following only the intended evaluation order would establish less than the stated all-path theorem.

</details>

### Exercise 8
<a id="reduction-preservation-and-normalization-ex-8"></a>
Suppose $r[u/x]\\in R(B)$ for every reducible $u:A$. Explain the fresh-variable step used to infer $r\\in SN$.

<details><summary>Hint 1</summary>

A fresh variable is neutral and has no immediate reducts.

</details>
<details><summary>Hint 2</summary>

Renaming free $x$ to a fresh variable preserves reduction paths.

</details>
<details><summary>Solution</summary>

Choose fresh $z:A$. Neutral closure gives $z\\in R(A)$, so the premise gives $r[z/x]\\in R(B)\\subseteq SN$. The replacement is an injective fresh renaming, not an erasing substitution. Every reduction of $r$ therefore has its renamed counterpart in $r[z/x]$; an infinite original path would produce an infinite renamed path. Thus $r\\in SN$. One special argument could erase an occurrence or simplify a computation, so it would not justify this renaming argument without the universal premise.

</details>

### Exercise 9
<a id="reduction-preservation-and-normalization-ex-9"></a>
State which result is needed for each conclusion: no stuck closed well-typed execution; no infinite full reduction; at most one normal form up to alpha-equivalence. Explain why these conclusions must be distinguished.

<details><summary>Hint 1</summary>

Match safety, termination and uniqueness to separate metatheorems.

</details>
<details><summary>Hint 2</summary>

A typed recursive language can satisfy preservation and progress while looping.

</details>
<details><summary>Solution</summary>

Progress with preservation gives the stated safety conclusion for the chosen evaluation semantics. Strong normalisation rules out infinite full reductions. Confluence gives uniqueness of any normal form reached, because two normal forms with a common reduct must coincide up to alpha-equivalence. Safety alone permits typed loops after adding recursion. Confluence alone permits divergent terms with no normal form. The normalisation proof does not automatically prove uniqueness, because it only excludes infinite paths and does not join branching paths.

</details>

### Exercise 10
<a id="reduction-preservation-and-normalization-ex-10"></a>
Show explicitly how the fundamental lemma handles a case term, including its two branch contexts. Explain where a common result type is used.

<details><summary>Hint 1</summary>

Extend a reducible substitution separately by each possible component.

</details>
<details><summary>Hint 2</summary>

The case-elimination candidate lemma needs both branches in the same $R(C)$.

</details>
<details><summary>Solution</summary>

Suppose $s:A+B$, $r:C$ in context extended by $x:A$, and $q:C$ in context extended by $y:B$. Under reducible $\\sigma$, induction gives $s\\sigma\\in R(A+B)$. For every $u\\in R(A)$, induction with $\\sigma[x\\mapsto u]$ gives $(r\\sigma)[u/x]\\in R(C)$; similarly every $v\\in R(B)$ gives $(q\\sigma)[v/y]\\in R(C)$. The case candidate lemma now yields the entire substituted case term in $R(C)$. Matching result types are essential: neutral closure at one candidate cannot combine a left branch at $R(C)$ with a right branch at an unrelated type.

</details>

## Chapter summary

Beta reduction, projection reduction, and sum case reduction give the operational semantics of $\\lambda^{\\to}$. Subject reduction guarantees that types are preserved during execution. Strong normalisation guarantees that every well-typed term terminates. Strong normalisation here depends on omitting general recursion. Adding the typed primitive fixed-point operator of Exercise 4 preserves subject reduction but permits infinite reduction sequences, so strong normalisation fails. The full candidate argument accounts for neutral sums and every allowed reduction order.

**Backward pointers:** This chapter uses the syntax and typing rules from Chapter 3, "Simply typed lambda calculus." The proof structures echo the natural deduction rules from Chapter 2.

**Forward pointers:** Chapter 5, "Curry–Howard: precise scope," explains why the correspondence between proofs and programs is limited. Chapter 7, "Dependent function and pair types," extends the type system so that types themselves can depend on terms.
`;export{e as default};