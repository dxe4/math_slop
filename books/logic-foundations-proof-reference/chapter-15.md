
# Chapter 15: Constructive Mathematics and Realizability

Constructive mathematics requires that proofs of existence provide explicit constructions. This chapter introduces intuitionistic logic, Brouwer’s continuity principles, realizability, and the extraction of algorithms from proofs.

## Intuitionistic logic

**Definition 8.3 (intuitionistic logic).** Intuitionistic logic is given by proof rules that require constructive evidence for disjunction and existence and do not validate unrestricted excluded middle or double-negation elimination. It is better specified by those positive rules than by merely deleting two formulas from an unspecified classical calculus.

**Brouwer–Heyting–Kolmogorov (BHK) interpretation.**
- A proof of $\varphi \land \psi$ is a pair $(p, q)$ where $p$ proves $\varphi$ and $q$ proves $\psi$.
- A proof of $\varphi \lor \psi$ is either $(0, p)$ where $p$ proves $\varphi$, or $(1, q)$ where $q$ proves $\psi$.
- A proof of $\varphi \to \psi$ is a function mapping proofs of $\varphi$ to proofs of $\psi$.
- A proof of $\exists x \, \varphi(x)$ is a pair $(a, p)$ where $a$ is a witness and $p$ proves $\varphi(a)$.
- A proof of $\forall x \, \varphi(x)$ is a function mapping each $a$ to a proof of $\varphi(a)$.
- There is no proof of $\bot$.

**Theorem 8.4.** Intuitionistic logic proves $\varphi \to \neg\neg\varphi$ and $\neg\neg\neg\varphi \to \neg\varphi$, but not $\neg\neg\varphi \to \varphi$ in general.

## Realizability

**Definition 8.5 (Kleene realizability).** A number $e \in \mathbb{N}$ *realizes* a formula $\varphi$ of Heyting arithmetic (HA), written $e \Vdash \varphi$, by recursion:
- For an atomic equation $s=t$, every number realizes it when the equation is true in $\mathbb N$, and no number realizes it when it is false; no number realizes $\bot$.
- $e \Vdash \varphi \land \psi$ iff $\pi_1(e) \Vdash \varphi$ and $\pi_2(e) \Vdash \psi$.
- $e\Vdash\varphi\lor\psi$ iff $\pi_1(e)=0$ and $\pi_2(e)\Vdash\varphi$, or $\pi_1(e)=1$ and $\pi_2(e)\Vdash\psi$.
- $e \Vdash \varphi \to \psi$ iff for all $d$ with $d \Vdash \varphi$, $\{e\}(d)$ is defined and realizes $\psi$.
- $e \Vdash \exists x \, \varphi(x)$ iff $\pi_1(e)$ is a witness $n$ and $\pi_2(e) \Vdash \varphi(n)$.
- $e \Vdash \forall x \, \varphi(x)$ iff for all $n$, $\{e\}(n)$ is defined and realizes $\varphi(n)$.

**Theorem 8.7 (HA realizability soundness; imported).** For a closed arithmetic sentence $\varphi$, if HA $\vdash \varphi$, there exists a realizer $e \Vdash \varphi$, extractable effectively from the proof. Open theorem schemas are read with their universal closure.

**Imported proof architecture, not a complete HA soundness proof.** The proof proceeds by induction on the HA derivation and supplies realizers for every arithmetic axiom and induction instance as well as the logical rules. The extraction is uniform and effective. The local constructions below verify particular logical cases; they do not replace the full arithmetic induction verification in the cited realizability theorem.

## Choice principles

**Countable numerical choice (in a language with function objects).** If $\forall n\in\mathbb N\,\exists m\in\mathbb N\,R(n,m)$, then there exists $f:\mathbb N\to\mathbb N$ such that $\forall n\,R(n,f(n))$.

**BHK/type-theoretic metatheorem.** A proof object for $\prod_n\sum_m R(n,m)$ computes the choice function $f(n)=\pi_1(h(n))$ and the evidence $\pi_2(h(n)):R(n,f(n))$. This is a valid type-theoretic choice term. First-order HA has only number variables and cannot state “there exists a function $f$” in this form, so the BHK explanation is not a proof of a new first-order HA axiom. One must move to a higher-type or second-order constructive system and state its choice schema explicitly.

**Boundary.** The full axiom of choice in set theory (every set of nonempty sets has a choice function) is not constructively valid in the same way. Constructive type-theoretic “choice” extracted from dependent witnesses need not imply every classical set-theoretic consequence called choice.

## Continuity and the fan theorem

**Brouwer’s continuity principle (in suitable intuitionistic analysis).** Every total function $f:\mathbb N^{\mathbb N}\to\mathbb N$ in the intended constructive universe is continuous: for every $\alpha$, some finite initial segment determines $f(\alpha)$. This is not a theorem of first-order HA and conflicts with treating all arbitrary classical set-theoretic functions as available.

**Fan theorem (decidable-bar version).** Every decidable bar in the full binary tree is uniform: some level meets every infinite binary path. Corresponding uniform-continuity and open-cover formulations require matching choices about how functions, bars, and covers are presented; several inequivalent constructive fan principles exist.

**Theorem 8.6 (matching representations).** In constructive analysis where continuous functions and covers are presented by the corresponding bars, the appropriate fan theorem implies that every continuous function on $[0,1]$ is uniformly continuous. The representation hypotheses are part of the theorem.

## Common errors

**Error: identifying constructive with computable.** Constructive proofs yield algorithms, but the algorithms may not be efficient or practical. Constructivity is a logical property, not a complexity bound.

**Error: rejecting classical logic outright.** Intuitionistic logic is a refinement, not a replacement. Many classical theorems have constructive proofs, and double negation translation embeds classical arithmetic into intuitionistic arithmetic.

**Error: confusing realizability with truth.** Realizability is a model of intuitionistic logic, not a definition of truth. Different realizability interpretations exist (Kleene, modified realizability, etc.).


## Persistent Kripke semantics

For propositional intuitionistic logic use a nonempty partially ordered set $(W,\le)$ of stages, a persistent valuation of atoms, and no stage forcing falsehood. Persistence of an atom means that once forced it remains forced at every later stage. Conjunction and disjunction are local: both conjuncts, or one actual disjunct, must be forced at the current stage. Implication is defined by
$$w\Vdash A\to B\quad\Longleftrightarrow\quad
\forall v\ge w\,(v\Vdash A\Rightarrow v\Vdash B).$$
Negation abbreviates implication to falsehood. Thus $w\Vdash\neg A$ says that no later stage forces $A$, not merely that $A$ is absent now.

**Lemma 8.1 (Persistence).** If $w\Vdash A$ and $v\ge w$, then $v\Vdash A$.

*Proof.* Induct on formulas. Atomic persistence is assumed and falsehood is never forced. The conjunction and disjunction cases pass their current evidence to $v$ by induction. If an implication holds at $w$, every stage above $v$ is also above $w$, so its defining implication holds there. This proves persistence for implication and hence for negation. ∎

**Theorem 8.2 (Propositional soundness).** Intuitionistic natural deduction with conjunction, disjunction, implication and falsehood preserves forcing from its undischarged assumptions.

*Proof.* Induct on derivations. Assumptions are forced by the hypothesis. Conjunction introduction joins two forced formulas and its eliminations retrieve them. Disjunction introduction retains its forced disjunct. Disjunction elimination is sound because the current stage forces one of the actual disjuncts; the corresponding case derivation then forces its common conclusion under the unchanged other assumptions.

Implication elimination uses the defining implication at the current stage, which is accessible by reflexivity. For implication introduction, take any later stage forcing the temporary antecedent. The other assumptions persist by Lemma 8.1, so the induction hypothesis for the subderivation gives the consequent there. Discharging the temporary assumption establishes the implication at the original stage. Falsehood elimination is sound because no stage can satisfy its falsehood premise. These cover every rule of the stated calculus. Negation rules are the implication rules with falsehood as consequent. ∎

For first-order versions, use nonempty domains $D_w$ with $D_w\subseteq D_v$ when $w\le v$, coherent total function interpretations and persistent predicates. Equality is identity. An existential has a witness in $D_w$. A universal at $w$ must hold for every $a\in D_v$ at every $v\ge w$. Quantifying only over the present domain would not preserve universals when new objects become available.

The first-order rule checks now have their exact conditions. Universal elimination uses $v=w$ and the current value of its substitutable term. Existential introduction uses that same current witness. For universal introduction, move to an arbitrary later stage and assign the fresh variable an arbitrary element of its domain; persistence carries the open assumptions there, and freshness ensures they do not constrain that variable. The subderivation then forces the body. For existential elimination, use the existing current witness in the case derivation; the eigenvariable is absent from the conclusion and the other undischarged assumptions, so its chosen value does not alter those formulas. Capture-avoiding substitution and coherent equality give the remaining term and equality checks. This explains the semantic role of the familiar side conditions rather than deleting them in the constructive setting.

## Worked example 1: double negation without an available witness

Take two stages $r<u$. Force atom $p$ only at $u$. At $r$, $p$ is not forced. Nor is $\neg p$, because the future stage $u$ forces $p$. At $u$, $\neg p$ is also not forced, since $u$ itself forces $p$. Therefore no stage at or above $r$ forces $\neg p$, so $r\Vdash\neg\neg p$. The root forces the double negation and not the atom. It consequently refutes $\neg\neg p\to p$, and soundness proves that unrestricted double-negation elimination is not intuitionistically derivable.

The positive directions have explicit derivations. Given $A$, assume $\neg A$ and obtain falsehood, then discharge that assumption to prove $\neg\neg A$. Given $h:\neg\neg\neg A$, assume $A$; the preceding construction supplies $\neg\neg A$, and $h$ turns it into falsehood. Discharging $A$ yields $\neg A$. These are complete deductions of the two positive formulas in the original theorem, together with a countermodel for the negative claim.

## Worked example 2: disjunction cannot be postponed to different futures

Use a fork with root $r$ and incomparable terminal stages $u,v$. Force $p$ at $u$ and $q$ at $v$, with neither forced at the root. No stage forces $p\land q$. Thus every stage, including $r$, forces $\neg(p\land q)$. At the root neither $\neg p$ nor $\neg q$ holds, because its two extensions respectively refute those negations. Hence the disjunction $\neg p\lor\neg q$ is not forced there.

At $u$, $\neg q$ does hold; at $v$, $\neg p$ does hold. That does not give the root one current disjunct. The original first exercise is therefore a semantic proof of failure of one De Morgan direction, not merely an observation that a choice has not yet been made. Conversely $(\neg p\lor\neg q)\to\neg(p\land q)$ is constructively derivable by cases: either negative disjunct contradicts its corresponding conjunct. The two directions have different proof behavior.

## Realizer constructions with the correct arity

Fix effective pairing and projections and a numbering of partial recursive unary functions. In the realizability clauses already stated, a conjunction realizer stores two pieces of evidence, while an implication realizer is an index that transforms any valid input evidence into valid output evidence. It need not terminate on numbers that do not realize the antecedent. The universal clause asks for a program taking a number and returning an index or evidence for the corresponding instance.

For conjunction exchange, the total program $e\mapsto\langle\pi_2(e),\pi_1(e)\rangle$ transforms realizers of $A\land B$ into realizers of $B\land A$. For composition, given indices $f$ realizing $A\to B$ and $g$ realizing $B\to C$, parameterisation supplies an index $h$ for $d\mapsto\{g\}(\{f\}(d))$. On every realizer $d$ of $A$, the first computation terminates with a realizer of $B$ and the second terminates with a realizer of $C$. Thus $h$ realizes $A\to C$. Divergence away from valid evidence is permitted by the definition.

**Worked example 3 (The outer universal program).** Let $i$ be an index of the identity on evidence. For a fixed number $n$, it realizes $P(n)\to P(n)$. To realize $\forall n(P(n)\to P(n))$, use a different index $e$ whose program returns $i$ for every numeric input $n$. Then the universal clause first calls $e$ on $n$, obtaining $i$, and the implication clause calls $i$ on evidence $d$, obtaining $d$. Returning $n$ itself at the first stage would confuse a number argument with an evidence-transformer index. The original second exercise retains precisely this two-stage construction.

These logical constructions are not a complete verification of HA realizability soundness. In particular arithmetic induction needs a realizer iterating the supplied step evidence, together with all numerical coding and substitution conditions. The named theorem records that additional work. Other realizability interpretations can validate different principles; the notation $\Vdash$ must be tied to the specific clauses in use.

## A proved fan-theorem application in its own representation

Let a total numerical function on Cantor space be presented by an associate $a:2^{<\omega}\to\mathbb N$: every infinite binary path has a prefix with positive value, positive values remain stable on extensions, and a positive value $a(s)$ announces output $a(s)-1$ for every extension of $s$. Then $B=\{s:a(s)>0\}$ is a decidable bar, since $a$ is given as a total numerical function.

Assume the decidable-bar fan theorem. It supplies $N$ such that every path has a prefix in $B$ of length at most $N$. If paths $\alpha,\beta$ agree on their first $N$ bits, choose such a prefix $s$ of $\alpha$. It is also a prefix of $\beta$, so the associate gives the same announced value on both paths. Hence the function has a uniform finite-prefix modulus $N$ for its discrete output. This proves the stated application directly from the exact bar representation.

The earlier interval compactness and uniform-continuity statements additionally depend on how real names and rational covers are presented. Their matching-representation theorem remains a named input; the preceding Cantor-space argument does not automatically settle every constructive cover definition. Nor does first-order HA acquire function objects merely because a type-theoretic dependent pair can be projected. The original choice and cover boundaries remain essential.

Markov's principle similarly needs a system and a predicate convention: for a decidable numerical predicate, double-negated existence is asserted to imply existence. Its arithmetic nonprovability is a separate semantic proof-theoretic result, not a consequence of the two-stage propositional countermodel above. Undecidability of HALT supplies no decider for its double-negated premise. The original exercise correctly asks for this distinction rather than claiming a halting reduction proves independence.

## Practice exercises

### Exercise 1
<a id="chapter-15-ex-1"></a>

Show that in intuitionistic logic, $\neg(\varphi \land \psi)$ is not equivalent to $\neg\varphi \lor \neg\psi$.

<details><summary>Hint 1</summary>

Use two incomparable futures rather than one linear future.

</details>
<details><summary>Hint 2</summary>

No future needs to force both atoms simultaneously.

</details>
<details><summary>Solution</summary>

Use a Kripke frame with a root $r$ and two incomparable terminal extensions $u,v$. Force $\varphi$ only at $u$ and $\psi$ only at $v$. No node forces $\varphi\land\psi$, so $r\Vdash\neg(\varphi\land\psi)$. But $u\Vdash\varphi$ prevents $r\Vdash\neg\varphi$, and $v\Vdash\psi$ prevents $r\Vdash\neg\psi$; hence $r\nVdash\neg\varphi\lor\neg\psi$. This semantic countermodel proves nonderivability, whereas saying that no method is apparent would not.

</details>

### Exercise 2
<a id="chapter-15-ex-2"></a>

Extract a realizer for $\forall x \, (P(x) \to P(x))$ in HA.

<details><summary>Hint 1</summary>

The first program takes the numerical argument.

</details>
<details><summary>Hint 2</summary>

It must return the identity evidence-program index.

</details>
<details><summary>Solution</summary>

Let $i$ be an index for the partial recursive identity on evidence: $\{i\}(d)=d$. A realizer $e$ for the universal formula must first accept the number $x$ and return that program index, so choose a constant-index program with $\{e\}(x)=i$ for every $x$. Then $i$ maps each realizer of $P(x)$ to itself. The identity index alone realizes $P(x)\to P(x)$ for a fixed $x$, not the outer universal quantifier.

</details>

### Exercise 3
<a id="chapter-15-ex-3"></a>

Why does computability of search or undecidability of HALT not by itself prove that Markov's principle is independent of HA?

<details><summary>Hint 1</summary>

The premise of Markov's principle is not supplied by a halting decider.

</details>
<details><summary>Hint 2</summary>

A genuine nonprovability result needs an appropriate arithmetic model.

</details>
<details><summary>Solution</summary>

Markov's principle turns double-negated existence for a decidable predicate into existence; it does not give a uniform decider for whether the double-negated premise holds, so it does not solve HALT. A valid nonprovability argument supplies a model of HA in which the principle fails (standard Kripke and topological models do this), while realizability models show that some constructive extensions validate it. The separation is semantic proof theory, not a reduction to a halting algorithm.

</details>

### Exercise 4
<a id="chapter-15-ex-4"></a>

Explain why the law of excluded middle fails in the BHK interpretation.

<details><summary>Hint 1</summary>

An atom can become true only at a later stage.

</details>
<details><summary>Hint 2</summary>

Negation must exclude that possibility at every extension.

</details>
<details><summary>Solution</summary>

Let a Kripke frame have a root $r$ with an extension $u$ at which an atomic proposition $\varphi$ first becomes true. Then $r\nVdash\varphi$, but also $r\nVdash\neg\varphi$ because $u\Vdash\varphi$. Therefore $r\nVdash\varphi\lor\neg\varphi$. This is a countermodel to derivability. Our present ignorance of a statement such as Goldbach's conjecture would not establish that its excluded-middle instance is unprovable.

</details>

### Exercise 5
<a id="chapter-15-ex-5"></a>

Show that the fan theorem implies that the interval $[0,1]$ is compact in the constructive sense.

<details><summary>Hint 1</summary>

Turn the given cover evidence into a bar with its stated presentation.

</details>
<details><summary>Hint 2</summary>

Decidability and a uniform finite depth permit only finitely many required choices.

</details>
<details><summary>Solution</summary>

Use an open cover presented by an enumerable family of basic rational intervals together with evidence that each binary name of a real is covered after a finite prefix. Those covering prefixes form a bar in the binary tree. For a version where this bar satisfies the decidability hypothesis, the fan theorem gives a uniform depth $N$; only finitely many binary prefixes have length at most $N$, and their witnessing intervals form a finite subcover. Without a specified cover/bar presentation, this argument does not establish every possible constructive compactness formulation.

</details>

### Exercise 6
<a id="chapter-15-ex-6"></a>

Give a complete intuitionistic derivation of $A\to\neg\neg A$.

<details><summary>Hint 1</summary>

Assume A, then temporarily assume its negation.

</details>
<details><summary>Hint 2</summary>

Negation is implication to falsehood.

</details>
<details><summary>Solution</summary>

From assumptions $A$ and $A\to\bot$, implication elimination yields falsehood. Discharge the second assumption to obtain $(A\to\bot)\to\bot$, namely $\neg\neg A$, while keeping $A$ open. Discharge $A$ to conclude the desired implication. No classical reductio or excluded-middle instance occurs.

</details>

### Exercise 7
<a id="chapter-15-ex-7"></a>

Prove persistence for implication in the Kripke semantics.

<details><summary>Hint 1</summary>

Take a later stage and then an arbitrary extension of it.

</details>
<details><summary>Hint 2</summary>

Transitivity places that extension above the original stage.

</details>
<details><summary>Solution</summary>

Assume $w\Vdash A\to B$ and $v\ge w$. To verify the implication at $v$, choose any $u\ge v$ forcing $A$. Transitivity gives $u\ge w$, and the implication at $w$ therefore forces $B$ at $u$. This is exactly the condition for $v\Vdash A\to B$. It does not require deciding $A$ at $v$.

</details>

### Exercise 8
<a id="chapter-15-ex-8"></a>

Why is the current-domain-only clause insufficient for universal forcing in an expanding-domain model?

<details><summary>Hint 1</summary>

A future stage can introduce a new object.

</details>
<details><summary>Hint 2</summary>

Its body need not hold merely because it held of every old object.

</details>
<details><summary>Solution</summary>

Let a root domain contain only $a$ and a later domain contain $a,b$. Let predicate $P$ hold of $a$ throughout but not of $b$. A clause quantifying only over the present domain would make the root force $\forall xP(x)$ and the later stage refute it. That violates persistence. The correct clause checks every object in every later domain, so it already fails at the root on the future object $b$.

</details>

### Exercise 9
<a id="chapter-15-ex-9"></a>

Verify the realizer construction for conjunction exchange.

<details><summary>Hint 1</summary>

Project the two components of valid input evidence.

</details>
<details><summary>Hint 2</summary>

Rebuild the ordered pair in reverse order.

</details>
<details><summary>Solution</summary>

If $d$ realizes $A\land B$, then $\pi_1(d)$ realizes $A$ and $\pi_2(d)$ realizes $B$. The total computable swapping program returns $\langle\pi_2(d),\pi_1(d)\rangle$, whose components realize $B$ and $A$ respectively. Hence its index realizes $(A\land B)\to(B\land A)$ by the implication clause. The assertion concerns inputs that actually realize the antecedent; arbitrary malformed evidence need not have those logical properties.

</details>

### Exercise 10
<a id="chapter-15-ex-10"></a>

Prove the uniform-prefix conclusion for an associate using the decidable-bar fan theorem.

<details><summary>Hint 1</summary>

Use the announced positive-prefix bar.

</details>
<details><summary>Hint 2</summary>

Two paths sharing the uniform length also share every shorter witness prefix.

</details>
<details><summary>Solution</summary>

The set of prefixes with positive associate value is decidable and meets every path by the associate hypotheses. A uniform bar depth $N$ ensures each path has a positive prefix $s$ with length at most $N$. If a second path shares the first $N$ bits, it extends the same $s$. Stability of the associate gives both paths output $a(s)-1$. Thus agreement on that fixed finite prefix forces equality of outputs, proving a uniform modulus for this representation. No unpresented family of arbitrary classical functions is covered.

</details>

## Looking backward and forward

This chapter applied the proof-theoretic tools from Chapter 14 to constructive mathematics. Realizability provides a computational semantics for intuitionistic logic. The final chapter, Chapter 16, surveys advanced topics and open problems in logic and foundations.


## Sources

The original chapter, its BHK and realizability clauses, choice/continuity qualifications and five complete original solutions are preserved. Troelstra and van Dalen, *Constructivism in Mathematics*, and Troelstra and Schwichtenberg, *Basic Proof Theory*, are the references retained in the book bibliography. Full HA realizability soundness and the stated arithmetic independence results are named imported inputs; local Kripke soundness, countermodels, evidence transformations and the associate/bar application are proved here. The stable path and chapter ID remain chapter-15 despite its position in the new route.

## Summary

Intuitionistic evidence is persistent, implication inspects future stages, and existential witnesses and disjunction tags must be available where asserted. The explicit Kripke models refute unrestricted double-negation elimination and one De Morgan direction. Realizer programs must match their numerical and evidence arities. HA soundness, arithmetic independence and real-cover principles keep their named proof boundaries. The precise associate representation permits a complete fan-theorem application without conflating first-order arithmetic, dependent types and classical set functions.
