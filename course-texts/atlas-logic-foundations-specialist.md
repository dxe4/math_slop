
# Forcing, Games, and Constructive Metatheory

<!-- euler-course-route -->

## Current course route

The [current course page](#/courses/atlas-logic-foundations-specialist) now links all thirteen chapters of [Set Theory](#/books/set-theory). They supply L4 preparation for the forcing and games work below. The complete L5 seminar remains Outline; an available preparation book does not supply its missing teaching.

Preparation courses: [Models, Proofs and Foundations: An Advanced Course](#/courses/atlas-logic-foundations-advanced) · [Logic and set theory](#/courses/course-logic).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A generic extension changes sets while preserving a precise relation between names and truth. An infinite game can be decided by a transfinite rank even when no finite horizon suffices. A typed construction can carry a witness without making its ambient foundation prove its own consistency. This course develops these three mechanisms together, with proofs, counterexamples and executable finite comparisons.

The specialist scope is **forcing, descriptive set theory, type theory and specialist metamathematics**. Required work reconstructs the forcing theorem for complete Boolean algebras and separative set posets, proves c.c.c. cardinal/cofinality preservation and the uncountable Cohen example, proves open/closed determinacy, constructs an undetermined game under Choice, proves arrow-calculus strong normalization, and develops dependent pairs, functions, identity elimination and their set interpretation. The tree and strategy constructions are general mathematics; the supplied finite program checks a restricted reachability problem. Full Borel determinacy, projective determinacy, determinacy-to-measure regularity, general dependent-type normalization and the Boolean verification of every ZFC axiom retain their named imported proofs. No finite computation supplies those proofs.

**study time depends on the selected reading, attempts and corrections.** Source reading estimates overlap and do not measure this course. All preparation, selected source exercises, local proof tasks, actual public computations and three cumulative portfolios are required. Their public keys and self-review criteria support revision; they supply no grade, unseen performance, enforced delay or specialist qualification.

## Preparation and records

Complete [Models, Proofs and Foundations: An Advanced Course](#/courses/atlas-logic-foundations-advanced) in its authored A–J order, including M1–M3, I1–I2, PT1–PT3, S1–S3 and LOG-ADV-P/C/R. Its Henkin truth lemma, Tarski–Vaught argument, substitution, transfinite recursion and consistency audit are preparation, rather than replacements for the new proofs here. Bring countable metric topology, elementary complete Boolean algebras, ordinal/cardinal arithmetic and capture-avoiding substitution. Basic JavaScript is needed to inspect and execute the public reference below, or to justify and execute an equivalent implementation with the same inputs, complete outputs and refusals. A hand ledger alone does not replace that execution.

Attempt these diagnostics before the key.

1. **D1:** In a Boolean algebra, does a filter containing every member of a countable family necessarily contain their meet? Does an ultrafilter containing a join necessarily contain one summand?
2. **D2:** Explain why a countable transitive model M of ZFC can regard a set as uncountable. Is the existence of such an M equivalent to Con(ZFC)?
3. **D3:** Give a decreasing sequence of ordinals of length three. Can there be an infinite strictly decreasing sequence? Does a rank function for a countably branching game necessarily take only finite values?
4. **D4:** Substitute y for free x in λy.x, and type λf.λx.f x. Why does typing the identity not prove normalization of every typed term?
5. **D5:** If p:Id_A(a,b) and u:B(a), state the type of transport(p,u). Compare Πx:A.Σy:B(x).R(x,y) with a truncated or classical existential statement.
6. **D6:** For a name of a function f:λ→κ, what extra data are needed to bound its possible values in the ground model? Explain why same ordinals does not imply same cardinals.

**Diagnostic key and ordered repairs.** D1: neither assertion holds for arbitrary infinite families. In the nonprincipal ultrafilter on N, every cofinite set belongs but their countable intersection may be empty; N is the join of its singletons and no singleton belongs. The generic join lemma below is extra information for ground-model families, not countable completeness of an arbitrary ultrafilter. First repair Boolean operations in the local completion lesson; then prove F1. D2: countability of M is external; M has no internal enumeration of its own ω₁. A countable transitive ZFC model is a stronger metatheoretic assumption than mere syntactic consistency; completeness gives a model, with no automatic well-foundedness or transitivity. First repair advanced Model construction and Axioms, recursion and choice, then the native Model Theory exercises 1–5 and Forcing common errors. D3: ω+2>ω+1>ω; a hypothetical infinite descent has a least member among its range and then a smaller successor, contradiction. At a countably branching universal node child ranks may be unbounded in ω, so the parent first enters at ω+1. Repair advanced S1–S3, then the local transfinite attractor before any finite algorithm. D4: λz.y after renaming; the term has type (A→B)→A→B. One example does not establish a theorem over all derivations and all reduction paths. Repair native Simply typed lambda calculus exercises 1–4, then Reduction exercises 1–4, then T1–T3 below. D5: B(b). A dependent function returning a dependent pair already supplies a witness at each x; mere classical existence or propositional truncation need not supply such a function. Repair Dependent function and pair types exercises 1–4 before Identity types exercises 1–4. D6: maximal antichains deciding each coordinate and a ground-model countability bound for them; collapse forcing has the same ordinals but makes an old uncountable ordinal countable. Repair native Forcing exercises 3–5 before P1–P3.

Keep dated first, comparison and revised worksheets for every task, labelled with course ID, source/task identity and help used. Follow the worksheet portfolio workflow; the shared mutable note does not retain this portfolio. Keep actual program text, inputs, outputs, refusal messages and corrections. Later public return work cannot verify elapsed time or lack of earlier exposure. Existing Practice records and writing identities are unchanged.

## Required native source sequence

Read each whole selected chapter, including definitions, worked examples, proof boundaries and common errors. The following **38 native questions** are required in this order; every key is printed under the identically numbered question in that chapter's **Practice exercises**. Unselected books and their nominal workloads are additional.

| Stage | Exact native reading and required tasks | Complete comparison location |
| --- | --- | --- |
| A | [Set-Theoretic Topology](#/books/logic-foundations-proof-reference), Practice exercises **1–5** | Each question's Solution; repair countability, ω₁ and topology before B. |
| B | [Forcing](#/books/logic-foundations-proof-reference), Practice exercises **1–5** | Five inline Solutions. Exercise 2 cites a density lemma: F1–F4 here supply its proof. Reconstruct the chapter's Fn(ω₂×ω,2) example using P1–P3, not only the countable one-real subexample. |
| C | [Descriptive Set Theory](#/books/logic-foundations-proof-reference), Practice exercises **1–5** | Five inline Solutions. Exercise 4 is an honest imported measure-regularity boundary; the local game proof below is a different theorem. |
| D | [Simply typed lambda calculus](../books/types-proofs-construction/simply-typed-lambda-calculus.md), Practice exercises **1–4** | Four inline Solution paragraphs; repeat after preparation as a fresh typed worksheet. |
| E | [Reduction, preservation, and normalization](../books/types-proofs-construction/reduction-preservation-and-normalization.md), Practice exercises **1–4** | Four inline Solutions. Its candidate argument is an outline; T1–T3 reconstruct the arrow fragment in full here. |
| F | [Dependent function and pair types](../books/types-proofs-construction/dependent-function-and-pair-types.md), Practice exercises **1–4** | Four inline Solutions; include the actual inequality/equality evidence named in numerical witnesses. |
| G | [Identity types and equality](../books/types-proofs-construction/identity-types-and-equality.md), Practice exercises **1–4** | Four inline Solutions. Exercise 3's nonderivability claim needs its imported metatheoretic model; deriving transport is not that model. |
| H | [Universes and paradox control](../books/types-proofs-construction/universes-and-paradox-control.md), Practice exercises **1–4** | Four inline Solutions; retain the product-closure hypothesis in the Girard boundary. |
| I | [Proof assistant trust map](../books/types-proofs-construction/proof-assistant-trust-map.md), Practice exercises **1–3** | Three inline Solutions. The bounded game verifier here is ordinary code, not a kernel proof of the course. |

For every answer write its hypotheses and the exact conclusion. The direct recursion and genericity proof here does not use first-order completeness or compactness. Completeness remains relevant to separate model-existence/relative-consistency arguments; those are different dependencies. Forcing over full ZFC models preserves AC; independence of AC uses symmetric submodels or other additional machinery, which is not supplied by simply taking the full generic extension. Preserve that distinction when reading the chapter's historical opening.

Complete local F1–F4, P1–P3, G1–G3, T1–T3, DT1–DT3 and all LOG-SP-P/C/R portfolio tasks. Their keys are the labelled Complete local models and Public models sections below. No undisclosed key or external paid text is needed for an assigned task.

## Completing a separative forcing poset

Fix a countable transitive set M satisfying ZFC, and a set forcing poset P∈M with greatest element 1, stronger conditions smaller. Separative means p≰q implies some r≤p incompatible with q. Finite partial-function Cohen posets are separative: if p does not extend q, either they already conflict or an undecided q-coordinate can be assigned the opposite bit below p. All completeness, cardinality and maximal-antichain assertions in the following constructions are interpreted **inside M**. The Boolean completion need not be externally complete for families missing from M.

Put the downward topology on P: a set is open iff closed under strengthening, with basic opens ↓p. For an open U define r(U)=int(cl U). The regular open sets B=RO(P), those U=r(U), form a complete Boolean algebra: 0=∅, 1=P, finite meet is intersection, ¬U=int(P∖U), and ∨_i U_i=r(∪_i U_i). Here cl and int are in the downward topology. To verify the formulas, an open V is contained in r(U) exactly when U is dense below every p∈V. This gives r(r(U))=r(U), and shows that the displayed join is the least regular open upper bound. For regular opens U,V, a point of int(cl(U∩V)) outside U or V would contradict regularity by a stronger neighborhood, so U∩V is regular. The complement formula gives U∧¬U=0 and U∨¬U=1. Distributivity follows by testing density below each condition: U∩r(∪V_i)=r(∪(U∩V_i)). Thus the formulas give the Boolean laws and all set-indexed joins, without assuming that arbitrary unions are themselves regular open.

Define i(p)=r(↓p). It is nonzero and monotone. If p⊥q, no common extension lies in both basic opens, so i(p)∩i(q)=∅; conversely a common extension has its nonzero regular open below both. If p≰q, separativity gives r≤p incompatible with q, so i(p) is not below i(q). Therefore i reflects order and incompatibility. Finally any nonzero U∈RO(P) contains p, hence ↓p⊂U and i(p)⊂r(U)=U: **i[P] is dense in B⁺**.

A generic through any prescribed nonzero Boolean condition exists externally: enumerate the dense subsets belonging to countable M as D₀,D₁,…, start below that condition, recursively strengthen into Dₙ, and take the upward closure of the descending sequence. A fixed external enumeration of B supplies each next choice. The same argument works in P through any condition. A P-generic filter G induces U={b∈B:∃p∈G, i(p)≤b}. It is a proper filter. For each b the conditions p with i(p)≤b or i(p)≤¬b are dense, since one may first pass to a nonzero piece below i(p) and then use density of i[P]. Thus U decides every b and is an ultrafilter. If E⊂B⁺ is dense and E∈M, the p with i(p)≤e for some e∈E are dense in P; hence U meets E. Conversely a B⁺-generic ultrafilter U gives G={p:i(p)∈U}. To see directedness, given p,q∈G, the meet b=i(p)∧i(q) is in U; the set of i(r) with r≤p,q is dense below b, so genericity yields such r with i(r)∈U. The same below-b argument makes G meet every ground dense subset of P. These constructions are inverse: below any b∈U, genericity meets i[P], and i reflects order. Translating each Boolean coefficient to the set of conditions p with i(p)≤b translates Boolean names to P-names without changing evaluation; translate P coefficients by i in the other direction.

For a nonseparative poset one first identifies conditions with the same regular-open image; that quotient step requires its own order check. All applications here are already separative. No class forcing or arbitrary proper-class Boolean completion is asserted.

## Boolean names, definability and truth

Write ∧,∨,¬ for Boolean operations. A B-name τ is a set of pairs (σ,b), with σ a lower-rank name and b∈B. Let rank_N(τ)=sup{rank_N(σ)+1:(σ,b)∈τ}. Canonical names use coefficient 1. Define, simultaneously by well-founded recursion,

$$\|\sigma\in\tau\|=\bigvee_{(\rho,b)\in\tau}(b\wedge\|\sigma=\rho\|),$$

$$\|\sigma=\tau\|=\bigwedge_{(\rho,b)\in\sigma}(\neg b\vee\|\rho\in\tau\|)\ \wedge\!\bigwedge_{(\rho,b)\in\tau}(\neg b\vee\|\rho\in\sigma\|).$$

The two ranks form a well-founded measure: sort them into (maximum,minimum) and order lexicographically. Replacing either name by one of its immediate subnames strictly decreases that pair. Each join/meet is set-indexed in M; the recursion theorem gives a definable relation for these atomic values in M.

For a **fixed formula** extend by ||¬φ||=¬||φ|| and ||φ∧ψ||=||φ||∧||ψ||. For ∃x φ(x,τ⃗), it would be careless to claim an arbitrary proper-class join. By induction the lower-complexity value relation for φ is definable. Separation in M forms the set

$$S=\{b\in B: \exists\hbox{ B-name }\sigma\ (b=\|\varphi(\sigma,\vec\tau)\|)\}.$$

Collection chooses a set W of witness names covering every b∈S; its name ranks have a supremum α in M, giving a common set-sized rank bound for this particular formula and parameters. Define ||∃x φ||=∨S=∨_{σ∈W}||φ(σ)||. No prior maximum principle is used. This construction gives a **definability schema, one ground-model defining formula for each fixed object-language formula**. It is not a single definable truth predicate for all formulas of M; no conflict with Tarski is being hidden.

Let U be M-generic for B⁺. Evaluate names by τ_U={σ_U:(σ,b)∈τ and b∈U}. Genericity, rather than ordinary ultrafilterhood alone, proves the crucial **join lemma**: for S∈M, if ∨S∈U then some s∈S belongs to U. In M choose a maximal antichain A of nonzero elements below some s∈S. Zorn's lemma uses Choice in M. Maximality makes ∨A=∨S: any nonzero remaining part below ∨S meets a summand s and could extend A. A∪{¬∨S}, omitting zero, is maximal in B. Conditions below its elements are dense, so genericity selects one in U. If ∨S∈U it cannot select the complementary element; upward closure then gives a∈A∩U and its s∈S∩U. A generic meets exactly one member of each ground-model maximal antichain, since two different members have zero meet.

**Atomic truth lemma, with both difficult directions.** Induct on the sorted rank pair. Membership value in U selects a summand b∧||σ=ρ|| in U by the join lemma; induction gives σ_U=ρ_U and b∈U, hence σ_U∈τ_U. Conversely actual membership supplies such ρ,b and induction puts that summand in U. If ||σ=τ||∈U and ρ_U∈σ_U via b∈U, its factor forces ||ρ∈τ||∈U, giving ρ_U∈τ_U by induction; reverse the roles for equality. For the converse, if σ_U=τ_U but ||σ=τ||∉U, the complement of the displayed meet belongs to U. De Morgan and the join lemma choose a factor failure b∧¬||ρ∈τ||∈U from one of the two names. Then b∈U makes ρ_U belong to one evaluation and ¬||ρ∈τ||∈U makes it absent from the other by the already established lower-rank membership case: contradiction. Infinite conjunction has not been treated as an ordinary finite filter intersection.

**Full truth lemma.** Structural induction now proves

$$M[U]\models\varphi(\vec\tau_U)\quad\Longleftrightarrow\quad\|\varphi(\vec\tau)\|\in U.$$

Negation uses ultrafilter complementation; finite conjunction uses the filter law. If an existential value belongs to U, the witness set W and join lemma select σ with ||φ(σ)||∈U; induction supplies its semantic witness. Conversely every object in M[U] is some σ_U, so a semantic witness gives one summand in U and hence the existential value in U. Atomic cases were proved above, not assumed. Define b⊩φ iff 0<b≤||φ||; then truth is equivalent to some b∈U forcing φ, since the value itself is a condition when in U. For P use i(p)≤||φ|| and generic density of i[P]. This proves definability and truth for all fixed first-order formulas in the stated model setting.

**Density, decision and fullness.** Monotonicity follows from Boolean order. If the conditions forcing φ are dense below b and b≰||φ||, the nonzero condition b∧¬||φ|| has no extension forcing φ, contradiction. Thus density below b implies b⊩φ. In particular b⊩¬¬φ implies b⊩φ, and conditions deciding φ or ¬φ are dense. This supplies the lemma imported in native Forcing Exercise 2.

Fullness is stronger than the join lemma and can now be derived. For a=||∃x φ||, choose in M a maximal antichain A below a, each c∈A lying below ||φ(σ_c)|| for a selected witness name; the witness set W above and Choice supply these selections. Its join is a. Mix names by

$$\sigma=\{(\rho,c\wedge d):c\in A,(\rho,d)\in\sigma_c\}.$$

Use the already proved truth lemma and generic separation: if b≰d, an external M-generic through nonzero b∧¬d exists by the preceding enumeration. For any such generic V containing c∈A, no other member of A belongs to V, and a coefficient c∧d belongs to V exactly when d does. Thus σ_V=(σ_c)_V by the evaluation definition. Atomic truth and separation give c≤||σ=σ_c||. Since c≤||φ(σ_c)||, full truth gives φ((σ_c)_V), hence φ(σ_V), in every generic V containing c. Separation again gives c≤||φ(σ)||. Joining over A yields a≤||φ(σ)||; the reverse inequality follows from the definition of a. This semantic route uses the truth theorem already proved, and avoids importing an unproved three-name substitution induction. The mixed σ witnesses ||φ(σ)||=a. Its rank is bounded by a supremum of the ranks of the set {σ_c}, so it is a name in M. This is a proof using the prior recursion and set bounds, not an assumption that the generic must make a uniform witness choice.

The construction immediately gives transitivity of M[U], M⊂M[U] by canonical names, and unchanged ordinals: rank(τ_U)≤rank_N(τ); if an evaluated name is an ordinal, it is bounded by an ordinal of M and transitivity of M makes that ordinal a member of M. Canonical names give the reverse inclusion. The complete ZFC extension theorem additionally verifies Pairing, Union, Infinity, Separation, Replacement, Power Set and Choice by name constructions. That general axiom-verification theorem is retained from the native forcing contract; it is **not claimed proved by the truth lemma alone**. For the preservation applications below assume that standard set-forcing ZFC extension theorem, separately from the definability/truth theorem just reconstructed.

**F1.** Prove the generic join lemma and exhibit why ordinary ultrafilterhood is insufficient. **F2.** Reconstruct the reverse atomic equality implication. **F3.** Explain how Collection bounds the existential witness names, then derive the density lemma. **F4.** For B=P({a,b}), use coefficient sets A={a}, B₀={b}, 1={a,b}; let 0̂=∅, 1̂={(0̂,1)}, x={(0̂,A)}, y={(0̂,B₀)}. Compute ||x=0̂||, ||x=1̂||, ||0̂∈x||, ||x∈1̂||, ||x=y|| and both evaluations.

**Complete local models.** F1–F3 are the join, atomic-converse and Collection/density arguments just proved; a valid reconstruction must include their antichain, failed-factor and rank-bound steps, respectively. For the counterexample use D1's nonprincipal ultrafilter. F4: the five values are B₀,A,A,B₀,∅. At atom a, x_U=1 and y_U=0; at b, x_U=0 and y_U=1, where 0=∅ and 1={∅}. Hence x=y has value zero. For x∈1̂ the only potential member is 0̂, so its value is ||x=0̂||, not ||x=1̂||. These finite atomic evaluations have principal generics already in M and add no new set.

## Cardinal preservation and the Cohen construction

The truth theorem tells us how to decide a coordinate; the chain condition controls how many alternatives must be retained. Work in M with a c.c.c. poset P and its ZFC generic extension. Suppose a condition p forces that f̂ is a function λ̌→Ord, where λ is a ground ordinal. For each ξ<λ the conditions below p deciding f̂(ξ̌) as some ground ordinal are dense. Indeed in every generic the value is an ordinal, all ordinals are ground ordinals, and the truth lemma supplies a deciding extension. If density failed below a condition, construct a generic through it to obtain a contradiction. Definability makes this a set-definable choice problem in M; equivalently apply Boolean fullness to the ordinal-valued assertion and use the ordinal rank bound. Choose a maximal deciding antichain A_ξ below p in M. Its members give a set C_ξ of possible ordinal values, countable in M by c.c.c. For every generic containing p, f(ξ)∈C_ξ. Choice and Replacement in M collect the family and its union C; |C|^M≤|λ|^M·ℵ₀ for infinite λ. The antichains need not be the same for different coordinates.

**Cardinals.** If an uncountable ground cardinal κ collapsed, some ground ordinal λ<κ would map onto κ in the extension (all ordinals are unchanged). Choose a condition forcing such a surjection. The preceding ground range cover has size at most max(|λ|,ℵ₀)<κ, so cannot contain every ordinal below κ, contradiction. ω cannot become finite: an ordinal bijection with a finite ordinal is absolute and a finite range cannot cover ω. Finite cardinals cannot collapse either. Thus every ground cardinal stays a cardinal; an old noncardinal stays noncardinal because its old bijection persists. This proves equality of the cardinal structures.

**Cofinalities.** Let δ be a ground limit ordinal and μ=cf^M(δ). Its old cofinal map persists, so cofinality cannot increase. If μ=ω it cannot become finite, since a finite subset of a limit ordinal is bounded. If μ is uncountable and a new cofinal map had domain λ with |λ|^M<μ, the cover C has ground size <μ and is bounded in δ by the definition of μ. Its range therefore cannot be cofinal. Cofinalities of zero and successor ordinals retain their usual 0 and 1 conventions. Thus c.c.c. preserves all cofinalities as well as cardinals; unchanged ordinals alone would not prove either assertion.

**The finite Δ-system lemma, proved.** Every uncountable family of distinct finite sets has an uncountable subfamily whose pairwise intersections equal one fixed finite root. Restrict to sets of a fixed size n, since a countable union of countable families is countable in ZFC, and induct on n. For n=0 there is no uncountable family of distinct such sets, so the implication is vacuous. If some point x belongs to uncountably many sets, remove x from that subfamily; the resulting distinct (n−1)-sets have an uncountable Δ-system by induction, and reinserting x adds it to the root. Otherwise each point belongs to at most countably many sets. Choose sets by recursion of length ω₁, making each new set disjoint from the union of earlier sets. At stage α<ω₁ that union is countable; the sets touching it form a countable union of countable families, so there remain uncountably many choices. The resulting uncountable pairwise-disjoint family has empty root. Choice/ω₁ recursion is part of this ZFC proof; it makes no CH assumption.

Let κ=ω₂^M and P=Fn(κ×ω,2), finite partial binary functions ordered by extension. To prove c.c.c., take an uncountable family of conditions in M. If uncountably many distinct domains occur, use the Δ-system lemma on the domains; there are only finitely many binary assignments on the root, so an uncountable subfamily agrees there. Any two have a compatible union. If only countably many distinct domains occurred, the family of conditions itself would be countable because each domain supports finitely many assignments, contradiction. Thus no uncountable antichain exists.

For each (α,n), the conditions deciding that coordinate are dense: assign a bit if absent. Hence g=∪G is a total κ×ω→2 function. For α≠β the conditions making the rows disagree somewhere are dense: choose n unused on both finite rows and assign opposite bits. Therefore c_α(n)=g(α,n) are distinct reals. Cardinal preservation identifies κ with ω₂ in the extension, giving 2^{ℵ₀}≥ℵ₂ and ¬CH there. No exact continuum value is inferred without ground cardinal arithmetic and a name count. A single row is new: for each ground real r, conditions disagreeing with r at a fresh coordinate of that row are dense, so c_α≠r. This is a conditional model construction from the specified M, not an unconditional proof of Con(ZFC), and the continuum need not be exactly ℵ₂.

For contrast, Q=Fn(ω,ω₁^M), finite functions with arbitrary values below ω₁^M, has an antichain { {(0,α)}:α<ω₁^M }. Its generic union is total by the domain dense sets and onto ω₁^M by the range dense sets: a fresh natural coordinate can receive any requested α. The old ω₁ is countable in the extension. The c.c.c. hypothesis fails at exactly the decision antichain used to cover a coordinate. Neither this collapse nor adding one Cohen real by itself settles the extension's exact continuum.

**P1.** Reconstruct the range-cover proof for preservation of both cardinals and cofinalities; isolate μ=ω. **P2.** Supply the uniform-size Δ-system induction and its application to Fn(ω₂×ω,2); prove row distinctness and conditional ¬CH. **P3.** Display the antichain and the two dense-set families for the collapse Q, and say which part of P1 fails.

**Complete local models.** P1–P3 are the proofs in this section, with all quantifiers part of their answer. P1 requires one antichain per coordinate, a ground-model union bound and the finite-cofinality argument, rather than the slogan “c.c.c. preserves cardinals.” P2 needs the second branch of the Δ-system induction, finite root assignments and unchanged ω₂. P3 needs mutually incompatible values at coordinate 0 and the fresh-coordinate extension for each requested range value. Same ordinals and countability outside M are not repairs for a missing chain condition.

## Trees and descriptive complexity

Use the metric d(x,y)=2^{-k}, where k is the first disagreement, on ω^ω or 2^ω. A Cauchy sequence eventually fixes each coordinate; the resulting point is its limit, proving completeness. Eventually zero sequences form a countable dense subset, proving separability. Basic cylinders [s] for finite strings s are clopen. A tree T⊂ω^{<ω} is prefix closed; [T]={x:∀n,x↾n∈T} is closed, since a missing prefix witnesses the open complement. Conversely for closed F take T_F={s:[s]∩F≠∅}. If x∈[T_F], choose x_n∈F∩[x↾n]; then x_n→x and closedness gives x∈F. Thus F=[T_F]. Empty and terminal trees cause no exception: they have no infinite branches.

A closed C⊂ω^ω×ω^ω is represented by a tree of pairs of strings of the same length, by the same cylinder argument. Its projection has the form A={x:∃y∀n,(x↾n,y↾n)∈T}; we use this closed-projection representation for analytic subsets of Baire space. It is equivalent to the native chapter's continuous-image/Borel-projection definition; the general equivalence is a named descriptive-set-theory representation theorem, rather than a deduction from a finite tree. For the explicit constructions below the witnesses are already closed projections, so no equivalence proof is needed to verify them.

Countable unions of closed-projection analytic sets A_i=proj(C_i) remain analytic: encode i as the first witness coordinate, and the rest as the witness for C_i. The union D in the product with the disjoint tagged witness slices is closed: convergence fixes the discrete tag eventually, then closedness of C_i applies. Countable intersections remain analytic too: encode a sequence of witnesses (y_i)_i by one real using a fixed bijection ω×ω→ω, and require (x,y_i)∈C_i for every i. Each requirement is closed, so their intersection is closed. This shows why projection is existential quantification over reals and why a complement is a different operation. It does not prove that every analytic set is Borel. The full Suslin theorem and analytic regularity theorem remain imported from the native chapter; the course proves the specific determinacy implication below independently.

A useful changed complexity example is A={x∈2^ω: x(n)=1 for infinitely many n}. It is ⋂_k⋃_{n≥k}{x:x(n)=1}, hence G_δ. Its complement consists of eventually zero sequences and is countable. A is not open: every cylinder around an element of A also contains an eventually zero extension. Nor is it closed: sequences which are zero for n<k and one for n≥k belong to A and converge to the all-zero sequence outside A. These facts do not prove A is outside every lower Borel class. Keep the claimed level, not an unsupported exact-complexity label.

## General determinacy and its boundaries

For a game on natural numbers with an open payoff O for player I, a play enters O exactly when some finite prefix lies in a target set E of histories whose entire cylinders lie in O. Let W₀=E. For every ordinal α define

$$W_{\alpha+1}=W_\alpha\cup\{s:\text{I moves at }s\text{ and some child is in }W_\alpha\}\cup\{s:\text{II moves at }s\text{ and every child is in }W_\alpha\},$$

and take unions at limits. All nodes have at least one legal successor; for the full natural-number game there are countably many. The set of histories is countable. The process stabilizes at a countable ordinal: if every α<ω₁ were a strict stage, choose for each such α the first newly added history in a fixed enumeration, injecting ω₁ into a countable set. If W_α=W_{α+1}, the defining operator is fixed and no later additions occur. Let W be the fixed point, and rank(s) its first-entry ordinal for s∈W. Target nodes have rank 0 and no node first enters at a nonzero limit.

At a positive-rank I-node select a child of smaller rank (the first such child in the fixed enumeration); at a positive-rank II-node **every** child has smaller rank. Following this strategy cannot avoid E forever, because an infinite play avoiding E would yield an infinite strictly descending sequence of ordinals. Thus I wins from every node in W. Outside W an I-node has every child outside W, and a II-node has at least one child outside W; II selects such a child and stays outside forever. Since E⊂W, that play never reaches E and hence stays outside O. This proves open determinacy, including arbitrary countably branching trees with nonempty legal successors. It also proves closed determinacy by targeting the player whose winning set is the complementary open set and interchanging players in the same construction; no parity-specific assertion is needed.

Transfinite ranks matter. Attach at a II-node one child which is an I-forced chain of length n to a target, for each n∈ω. The child ranks are unbounded finite ordinals. Every child is in W_ω, and the parent first enters W_{ω+1}; it does not enter at any finite stage. A fixed finite iteration cap does not decide all open games. On a finite graph, unfolding walks to histories gives an open reachability payoff; finite vertex attraction computes its winning region and supplies positional strategies, as proved in the next lesson.

Here is an actual determinacy-to-regularity proof, with its hypothesis visible. **Assume determinacy for the splitting game described below** (AD implies this). For A⊂2^ω, player I presents two incompatible proper finite extensions of the currently chosen string; II chooses one. Repeat, producing x, and let I win iff x∈A. This is a game on a countable move alphabet with decidable legal moves. Encode finite strings and pairs by naturals; an illegal move loses immediately. Determinacy for ordinary games on ω therefore applies.

If I has a winning strategy, feed it the successive bits of an arbitrary z∈2^ω as II's choices. The resulting x=F(z) is in A. Each output prefix is fixed by finitely many choices, so F is continuous; two choice sequences first differing at a turn enter incompatible strings, so F is injective. A continuous injection from compact Cantor space into Hausdorff Cantor space is a homeomorphism onto its compact image: images of closed subsets are compact and closed, so the inverse is continuous. Its image is nonempty, closed and has no isolated points, hence is a perfect subset of A.

If II has a winning strategy σ, call x **blocked at a finite legal history h consistent with σ** when x extends its current string and every proposed pair with a branch along x makes σ choose the other branch. There is at most one blocked x at any h: for two different x,y extend their distinct prefixes until they are incompatible and propose precisely that pair. Blocking x requires σ to choose the y-branch, while blocking y requires it to choose the x-branch, contradiction. There are countably many finite histories, so the set of points blocked somewhere is countable. Every x∈A is blocked somewhere: otherwise start at the empty history and at each turn choose a pair whose σ-selected branch is a proper prefix of x. The chosen lengths strictly increase, so the resulting play is x, consistent with σ, contradicting its being winning for II. Therefore A is countable. We have proved that determinacy of this splitting game yields the perfect-set property for A. This proves **AD⇒every subset of Cantor space is countable or contains a perfect subset**. It does not prove the native measure/Baire regularity implications, which require different games.

**Choice supplies an undetermined game.** Work in ZFC. There are c=2^{ℵ₀} strategies for each player in a natural-number game: a strategy is a function on countably many finite histories, and all such functions number c. Each fixed strategy is compatible with c plays, because the opponent may choose any real sequence of moves. Well-order the two strategy sets as (σ_α)_{α<c}, (τ_α)_{α<c}, where c denotes its initial ordinal. At stage α select a fresh play x_α compatible with I's σ_α and a different fresh play y_α compatible with II's τ_α, avoiding every earlier selected play. This is possible because fewer than c plays have been selected before α, while each strategy has c compatible plays; two times an infinite cardinal below c is still below c. No regularity of c and no CH are assumed. Define A={y_α:α<c}. The x_α are all excluded from A, so σ_α fails to win A; each y_α is in A, so τ_α fails to win its complement. G(A) is undetermined. Thus AD contradicts AC in this setting. The constructed A has no asserted Borel/projective definition.

**G1.** Reconstruct the transfinite open-game proof, including stabilization and the outside-W strategy. **G2.** Prove the splitting-game perfect-set theorem, including both the continuity/injectivity and the one-blocked-point-per-history claims. **G3.** Give the Choice diagonal construction and explain why it neither refutes Borel determinacy nor supplies a projective counterexample in ZFC.

**Complete local models.** G1–G3 are the three complete proofs above. For G1 a finite backward-induction argument omits the ω+1 example and is incomplete. For G2 an II-winning strategy does not itself enumerate A: the countable obstruction histories provide the countability proof. For G3 both chosen play families must remain disjoint at every stage; otherwise putting y into A could repair an earlier σ failure. Borel determinacy is a theorem of ZFC; projective determinacy is an additional principle, with the native large-cardinal implication carrying its exact hypotheses. Neither the open attractor proof nor the splitting-game argument reconstructs Martin's full Borel determinacy theorem or the Woodin-cardinal implication. Their specialist proof gaps remain explicit; the selected general game theorems just proved require no imported Borel determinacy.

## Normalization as a metatheorem

The native reduction chapter states full simple-type normalization and sketches candidates. We now prove the theorem completely for the **pure arrow fragment**, with types A::=o|A→A and terms x, λx.t, t u; reduction is beta reduction closed under every term context, including lambda bodies. Products, sums, inductive types, universes and general recursion are not secretly included in this proof. The native full simple-type theorem retains its broader imported candidate proof. Every context assigns one finite simple type to each variable, and all substitutions below avoid capture.

First prove substitution by induction on a typing derivation. The variable case uses either the assigned replacement u:A for x or the unchanged context variable. Application applies the two induction hypotheses and →E. At an abstraction λy.s rename y away from x and the free variables of u; apply the induction hypothesis under the weakened context, then →I. Hence Γ,x:A⊢s:B and Γ⊢u:A imply Γ⊢s[u/x]:B. The principal beta step preserves B by this lemma; context closure preserves types by the corresponding typing rule, proving subject reduction. This is a derivation theorem, not the claim that every untyped substitution is meaningful.

Let SN be terms with no infinite beta reduction. Since a finite term has only finitely many one-step reducts, every SN term has a finite reduction height h(t): recursively take one plus the maximum height of its immediate reducts, with h=0 for a normal form. The recursion is well founded on reduction; finite branching makes each value a natural number. Define reducibility for typed open terms:

$$R_o=\mathrm{SN},\qquad R_{A\to B}=\{t:\forall u\in R_A,\ t\,u\in R_B\}.$$

Contexts may be weakened to a common fresh-variable context when forming t u. A term is **neutral** here if it is a variable or an application, never a lambda abstraction. Prove simultaneously by induction on the type:

- **C1:** R_A⊂SN.
- **C2:** t∈R_A and t→t′ imply t′∈R_A.
- **C3:** a neutral t whose every immediate reduct lies in R_A itself lies in R_A.

At base type C1 is the definition; C2 follows because an infinite reduction from t′ would extend to one from t; C3 follows because any infinite reduction from t must begin with an immediate reduct. For A→B, first C1: a fresh variable z:A lies in R_A by lower-type C3 (it has no reducts), so t z∈R_B⊂SN. Any infinite reduction of t induces one of t z, impossible. For C2, each t′u is an immediate reduct of t u∈R_B, so lower-type C2 puts it in R_B. For C3 fix u∈R_A and induct on h(u). The application t u is neutral. Its one-step reducts either reduce t to t′, in which case t′u∈R_B by the hypothesis on t′, or reduce u to u′, in which case u′∈R_A by C2 and the height induction gives t u′∈R_B. There is no head beta contraction since t is neutral. Lower-type C3 puts t u in R_B. This proves the arrow C3 and completes the simultaneous type induction. In particular every variable is reducible at its assigned type.

A separate **beta expansion lemma** is essential: if s∈SN, u∈R_A and s[u/x]∈R_B, then (λx.s)u∈R_B. Induct on h(s)+h(u) and use C3_B on this neutral application. Its head reduct is s[u/x], already reducible. A reduction s→s′ gives a redex (λx.s′)u; substitution preserves that reduction, so C2 puts s′[u/x] in R_B and the smaller-height induction applies. A reduction u→u′ gives (λx.s)u′; all finitely many free occurrences of u in s[u/x] can be reduced to u′, yielding s[u′/x] by a finite sequence (possibly zero steps). C2 therefore puts that term in R_B; C2_A and the smaller-height induction apply again. These are all one-step reducts, so C3_B gives the lemma. The body-SN premise is convenient for the height induction and follows from s[u/x]∈SN, because substitution preserves each beta step. The argument-SN/reducibility premise remains essential: contractum-only beta expansion would be false.

The **fundamental lemma** says that if Γ⊢t:A and θ substitutes a reducible term of the assigned type for every variable in Γ, then tθ∈R_A. Induct on the derivation. A variable uses θ; application uses the arrow definition. For λx.s:A→B, first apply the induction hypothesis to the environment θ extended by a fresh reducible variable z:A. It yields sθ[z/x]∈R_B⊂SN, hence sθ itself is SN (renaming a free variable preserves reduction). For any u∈R_A the same induction hypothesis with x↦u gives (sθ)[u/x]∈R_B. Beta expansion gives (λx.sθ)u∈R_B, establishing the arrow case. The identity substitution consists of reducible variables, so every typable arrow term lies in its candidate and is strongly normalizing. This covers **all** reduction paths, including reductions inside arguments that an evaluation strategy might never inspect.

Consequently the pure arrow calculus with no constants has no closed inhabitant of its atomic type o. A closed typed term normalizes by the theorem and retains type o by preservation. A beta-normal term at atomic type must be a variable applied to zero or more normal arguments: it cannot begin with a lambda, whose type is an arrow, or with a lambda-headed application, which is a redex. In empty context no such head variable exists. This is a consistency statement for this precise calculus in the metatheory, not a proof by an arithmetic theory of its own consistency and not consistency of every type theory.

**T1.** Give the full substitution/preservation proof and identify the renamed binder case. **T2.** Reconstruct C1–C3 and beta expansion; justify the body-SN premise from the reducible contractum and show why omitting argument reducibility/SN breaks contractum-only expansion. **T3.** Prove atomic noninhabitation and contrast it with a primitive fix:(A→A)→A satisfying fix(f)→f(fix(f)).

**Complete local models.** T1–T2 are the derivation and candidate proofs above. In T2 an infinite reduction of s would remain an infinite reduction after substitution, so s[u/x]∈R_B⊂SN implies s∈SN. It is a derived premise available for the height induction, not an independent necessity claim. Argument reducibility cannot be discarded: in the untyped extension take Ω=(λw.w w)(λw.w w), normal a, and x absent from a. The beta contractum of (λx.a)Ω is normal a, but reducing inside Ω gives an infinite path. Thus contractum-only expansion fails and the u∈R_A premise supplies essential SN data. T3 is the normal-head argument above. For fix, f=λx.x creates the repeatable cycle fix(f)→f(fix(f))→fix(f); preservation may still hold while strong normalization fails. No fix term can be added to the proved normalization theorem without changing its conclusion.

## Dependent constructions and a model

A dependent context Γ,x:A,y:B(x) is a sequence: later types may mention earlier variables. In Π/Σ/Id theory, declare Γ⊢A type and Γ,x:A⊢B(x) type. Then Πx:A.B(x) and Σx:A.B(x) are types. From Γ,x:A⊢t:B(x) form λx.t:Πx:A.B(x); from f of that type and a:A form f a:B(a), with (λx.t)a≡t[a/x]. From a:A and b:B(a) form (a,b):Σx:A.B(x); projections have types π₁p:A and π₂p:B(π₁p), with the expected pair computation rules. A plain product is the case where B is constant. For identities, a,b:A give Id_A(a,b); refl_a:Id_A(a,a). Given a motive C(x,y,p) and d:Πz:A.C(z,z,refl_z), elimination J(d,a,b,p):C(a,b,p) computes to d(a) when p=refl_a. No equality reflection or function extensionality is added by these rules.

Dependent substitution changes both term and type: from Γ,x:A⊢t:B(x) and Γ⊢a:A infer Γ⊢t[a/x]:B(a). Prove this with a simultaneous induction on context, type-formation and term derivations. Variable and binding cases use the capture-avoidance argument above; Π application substitutes in both f and its argument, producing B[a/x][u[a/x]/y], which equals B[u/y][a/x] after renaming y fresh. Σ's second projection substitutes in B(π₁p), and J substitutes in its motive as well as its endpoints and path. The commuting-substitution identity is proved by induction on expressions; it is what makes these eliminator cases type correct. In a beta or pair/J computation the two substituted types are definitionally equal by these same equations. These rules therefore preserve typing for their displayed principal computations. A general normalization theorem for all extensions is a separate metatheorem.

**Transport and its composition law.** For B:A→Type and p:Id_A(a,b), use the motive B(x)→B(y) and reflexivity branch λz.λu.u to define transport_B(p):B(a)→B(b). The J computation gives transport_B(refl_a,u)≡u. Define path concatenation p·q:Id_A(a,c) for p:a=b and q:b=c by identity induction on q with refl branch p; hence p·refl_b≡p. To prove

$$\operatorname{transport}_B(q,\operatorname{transport}_B(p,u))=_{B(c)}\operatorname{transport}_B(p\cdot q,u),$$

apply J on q with motive quantifying p:a=b and u:B(a). At q=refl_b both sides compute to transport_B(p,u), so refl proves the branch. Identity elimination supplies the general path, with no function extensionality. For vector lengths, a path m+n=n+m allows transport of v:Vec(D,m+n) to Vec(D,n+m); for variables this need not be definitional equality even though both closed numerals 2+3 and 3+2 compute to 5.

**Dependent choice of existing data.** Given h:Πx:A.Σy:B(x).R(x,y), set f=λx.π₁(h x) and r=λx.π₂(h x). Their types are f:Πx:A.B(x) and r:Πx:A.R(x,f x). Thus (f,r):Σf:(Πx:A.B(x)).Πx:A.R(x,f x). Every witness was already contained in h; projection makes the computation explicit. Replacing h's Σ by propositional truncation or classical existence removes precisely the data used by π₁. This derivation cannot be transferred to set-theoretic AC by silently replacing one premise with the other.

**Set interpretation without a self-containing universe.** In classical ZFC interpret a closed type as a set, a context as the set of its satisfying assignments, and a type in context as a family of sets over those assignments. Interpret Π by the set of dependent functions, Σ by the disjoint union {(a,b):a∈A,b∈B(a)}, and Id_A(a,b) by a singleton {∗} when a=b and by ∅ otherwise. Interpret terms as sections of their families. Substitution is reindexing: evaluating a syntactic substitution at an assignment gives the same set/element as evaluating the original expression at the extended assignment; prove this simultaneously on expressions. Lambda/application and pair/projections satisfy the computation equations by ordinary function evaluation and ordered-pair projection. For J, a path element can exist only when a=b and equals ∗; define the eliminated value to be the reflexivity branch at that element. Its type and computation rule follow immediately. This verifies each listed formation/introduction/elimination/computation rule and its substitution interpretation, so derivation induction establishes soundness of this Π/Σ/Id fragment in this model. Interpret an empty type as ∅: no closed term of it can exist, conditional on this metatheory and interpretation.

This model validates extra extensional principles; its validating function extensionality does not make that principle derivable in the initial intensional syntax. It proves no independence claim about function extensionality. Types range over sets in a metatheoretic class: there is **no internal set of all these sets**. Interpreting a specified closed hierarchy of full universes requires additional closure assumptions, usually suitably large set universes, and a separate soundness proof. The native universe constraints and Girard theorem cannot be waived by writing “all sets” for Type. The model is an actual interpretation of the fragment stated above, not a consistency proof for univalence, arbitrary inductive universes or ZFC by itself.

**DT1.** Derive the transport composition path with its J motive and reflexivity branch. **DT2.** Derive the dependent-pair choice map and identify the failed projection after truncation. **DT3.** Verify the Σ second-projection and J rules in the set model, and say why adding an internal universe of all model sets is unavailable.

**Complete local models.** DT1–DT3 are the derivations and interpretation just given. For DT1 the type of the displayed equality is in B(c), and the reflexivity branch quantifies p and u so those parameters remain available. DT2's second component has R(x,π₁(h x)); it is not merely an unnamed existential. DT3 interprets p=(a,b) in the disjoint union, so π₂p=b∈B(a)=B(π₁p); J is only needed on equal endpoints, and its unique path interpretation selects the stated branch. A universal set of all sets would violate the ordinary ZFC separation/power-set constraints; class-level interpretation supplies no inhabitant Type:Type.

## Finite games and required public computation

A finite directed graph has vertices 0,…,n−1, a nonempty list of successors at each vertex, a turn 0 (I) or 1 (II), and a target set. I wins a play once it hits a target; II wins an infinite play avoiding every target. Use the least attractor: targets have rank 0; at round k add an I-vertex with a previously ranked successor and a II-vertex all of whose successors were previously ranked. Assign new vertices rank k **simultaneously**, so traversal order does not change the printed ranks. At most n additions can occur before a fixed point. Rank decrease proves I's selected move wins from each ranked vertex; outside the fixed point all I-successors stay outside and II can select an outside successor. These two statements prove exactness, including cycles; a self-loop outside the target never becomes winning merely because its own status is assumed winning.

The verifier checks a two-sided certificate: nonnegative ranks with target rank 0, a decreasing I move on every winning non-target I-vertex, all II successors decreasing on winning II-vertices, every I successor losing outside, and an avoiding II move outside. These conditions prove both halves of the partition, even when a submitted valid rank is not the least possible rank. The reference solver prints the least simultaneous-round ranks. No computed finite graph result decides determinacy for arbitrary payoff sets.

| ID | n | turns, indexed by vertex | successor lists, indexed by vertex | targets |
| --- | --- | --- | --- | --- |
| LOG-SP-P | 6 | 0,1,0,1,0,1 | [1,2]; [3,4]; [4]; [3]; [5]; [5] | 5 |
| LOG-SP-C | 6 | 0,1,0,1,0,1 | [1,2]; [3,4]; [4]; [3]; [5]; [5] | 3 |
| LOG-SP-R | 8 | 0,1,0,1,0,1,0,1 | [1,2]; [3,4]; [2,5]; [6]; [6,7]; [6,7]; [6]; [7] | 6 |

Copy and run this whole public reference in an existing JavaScript environment. It accepts JSON-shaped records with exactly n, turn, edges, target; n≤8, each successor list has 1–3 distinct vertices, and target has at most n distinct vertices. It reads no files, accesses no network, evaluates no input code and mutates no input. Arithmetic is on the displayed small integers. Its run time is bounded by at most eight rounds over at most 24 edges, plus certificate checks. Required comparisons and refusals follow the code.

```js
// EULER-LOGIC-SPECIALIST-GAME-V1
(() => {
  const fail = message => { throw new Error(message); };
  const exact = (x, keys) => x !== null && typeof x === 'object' && !Array.isArray(x)
    && Object.keys(x).sort().join(',') === keys;
  function data(s) {
    if (!exact(s, 'edges,n,target,turn')) fail('record');
    const {n, turn, edges, target} = s;
    if (!Number.isInteger(n) || n < 1 || n > 8) fail('domain');
    const vertex = x => Number.isInteger(x) && x >= 0 && x < n;
    if (!Array.isArray(turn) || turn.length !== n
        || !Array.from(turn).every(x => x === 0 || x === 1)) fail('turn');
    if (!Array.isArray(edges) || edges.length !== n) fail('edges');
    for (const row of edges) {
      if (!Array.isArray(row) || row.length < 1 || row.length > 3
          || !Array.from(row).every(vertex) || new Set(row).size !== row.length) fail('edge');
    }
    if (!Array.isArray(target) || target.length > n || !Array.from(target).every(vertex)
        || new Set(target).size !== target.length) fail('target');
    return {n, turn: [...turn], edges: edges.map(row => [...row]), target: [...target]};
  }
  function verify(s, c) {
    const {n, turn, edges, target} = data(s);
    if (!exact(c, 'first,ranks,second,win')) fail('certificate');
    const vertex = x => Number.isInteger(x) && x >= 0 && x < n;
    const rank = x => x === null || (Number.isInteger(x) && x >= 0 && x <= n);
    const move = x => x === null || vertex(x);
    if (!Array.isArray(c.ranks) || c.ranks.length !== n || !Array.from(c.ranks).every(rank)
        || !Array.isArray(c.first) || c.first.length !== n || !Array.from(c.first).every(move)
        || !Array.isArray(c.second) || c.second.length !== n || !Array.from(c.second).every(move)
        || !Array.isArray(c.win) || c.win.length > n || !Array.from(c.win).every(vertex)) fail('certificate');
    const {ranks, first, second, win} = c;
    const expected = Array.from({length:n}, (_,i) => i).filter(i => ranks[i] !== null);
    if (win.length !== expected.length || win.some((v,i) => v !== expected[i])) {
      return {ok:false, kind:'partition'};
    }
    const targets = new Set(target);
    for (let i=0; i<n; i+=1) {
      if (targets.has(i)) {
        if (ranks[i] !== 0 || first[i] !== null || second[i] !== null) return {ok:false, kind:'target', at:i};
      } else if (ranks[i] !== null) {
        if (ranks[i] === 0 || second[i] !== null) return {ok:false, kind:'rank', at:i};
        const lower = j => ranks[j] !== null && ranks[j] < ranks[i];
        if (turn[i] === 0) {
          if (!edges[i].includes(first[i]) || !lower(first[i])) return {ok:false, kind:'first', at:i};
        } else if (first[i] !== null || !edges[i].every(lower)) return {ok:false, kind:'all', at:i};
      } else if (turn[i] === 0) {
        if (first[i] !== null || second[i] !== null || edges[i].some(j => ranks[j] !== null)) {
          return {ok:false, kind:'outside-first', at:i};
        }
      } else if (first[i] !== null || !edges[i].includes(second[i]) || ranks[second[i]] !== null) {
        return {ok:false, kind:'outside-second', at:i};
      }
    }
    return {ok:true};
  }
  function solve(s) {
    const {n, turn, edges, target} = data(s);
    let ranks = Array(n).fill(null);
    for (const i of target) ranks[i] = 0;
    let stable = false;
    for (let pass=1; pass<=n; pass+=1) {
      const next = [...ranks];
      for (let i=0; i<n; i+=1) if (ranks[i] === null) {
        const known = j => ranks[j] !== null;
        if (turn[i] === 0 ? edges[i].some(known) : edges[i].every(known)) next[i] = pass;
      }
      if (next.every((v,i) => v === ranks[i])) { stable = true; break; }
      ranks = next;
    }
    if (!stable) fail('round bound');
    const targets = new Set(target);
    const first = Array(n).fill(null), second = Array(n).fill(null);
    for (let i=0; i<n; i+=1) if (!targets.has(i)) {
      if (ranks[i] !== null && turn[i] === 0) {
        first[i] = edges[i].find(j => ranks[j] !== null && ranks[j] < ranks[i]);
      } else if (ranks[i] === null && turn[i] === 1) second[i] = edges[i].find(j => ranks[j] === null);
    }
    const win = Array.from({length:n}, (_,i) => i).filter(i => ranks[i] !== null);
    const result = {win, ranks, first, second};
    if (!verify(s, result).ok) fail('internal certificate');
    return result;
  }
  globalThis.logicSpecialistGame = Object.freeze({solve, verify});
})();
```

For example run logicSpecialistGame.solve({n:6,turn:[0,1,0,1,0,1],edges:[[1,2],[3,4],[4],[3],[5],[5]],target:[5]}). Run solve and verify for **all three printed records**, retaining the complete outputs and {ok:true} checks. Compare with the public models after your first ledger.

Run these format/bound controls starting with LOG-SP-P and changing only the named field: n=9 gives “domain”; turn[0]=2 gives “turn”; removing the last edge row gives “edges”; edges[0]=[] or [1,1] or [1,2,3,4] or [6] gives “edge”; target=[5,5] gives “target”; an extra record field gives “record”; passing only five ranks in an otherwise complete certificate gives “certificate”; a certificate win array of seven entries gives “certificate” before its entries are scanned. Record each thrown message. These are refusals, not counterexamples to a theorem. Also run solve on {n:1,turn:[0],edges:[[0]],target:[]}; all arrays except win must be [null], and win is []. A self-supporting proposed winning certificate {win:[0],ranks:[1],first:[0],second:[null]} must return {ok:false,kind:'first',at:0}. Finally corrupt P's first[0] to 1; verify must give {ok:false,kind:'first',at:0}. Replace P's second[1] by 4; it must give {ok:false,kind:'outside-second',at:1}. These last controls test mathematical invariants rather than input format.

## Primary cumulative portfolio LOG-SP-P

Attempt all seven deliverables before the next public model. The complete project combines the proved theories; it is not seven unrelated quotations.

1. **P-a, names and truth:** work over B=P({a,b}) with 0̂,1̂,x,y from F4. Draw the two principal filters, evaluate the names and give all five Boolean values in F4. State which generic join/truth steps survive for arbitrary ground complete B and which finite atoms add no sets.
2. **P-b, forcing reconstruction:** reproduce the existential set-bound, atomic equality converse and full negation/existential truth cases. Prove density and indicate exactly where Choice enters the antichain argument.
3. **P-c, preservation:** reproduce the Δ-system proof, the coordinate-deciding range cover and the κ=ω₂ Cohen-row argument. State the assumptions needed for ¬CH and why there is no exact continuum computation.
4. **P-d, games:** derive the least ranks and two-sided strategies for the printed LOG-SP-P graph by hand; unfold it into an open payoff tree and prove that the selected start-0 strategy wins regardless of II's moves. Relate finite ranks to the general transfinite construction.
5. **P-e, typed construction:** type and beta-reduce c=λf.λg.λx.g(f x) applied to f:A→B, g:B→C and a:A. Give the normalization proof dependency from candidates to the fundamental lemma, then derive transport_B(refl_a,u) and the dependent-pair choice map.
6. **P-f, actual computation:** run the exact public reference on P and every required format/mathematical control, preserve outputs and compare to your first ledger. Explain one refused format and one failed invariant in mathematical language.
7. **P-g, metatheory ledger:** attach your completed G1/G2 general open-game and splitting-game reconstructions, using their full public proofs for comparison; then distinguish the CTM assumption, imported ZFC extension theorem, proved forcing truth schema, open/closed determinacy, splitting-game perfect-set implication, imported full Borel/PD theorems and the Π/Σ/Id set interpretation. Give one conclusion that the finite outputs cannot support.

## Public primary model

**P-a.** U_a consists of {a} and {a,b}; U_b consists of {b} and {a,b}. The five F4 values are {b},{a},{a},{b},∅. At a, (x_U,y_U)=(1,0); at b, (0,1). Principal U_a,U_b already belong to M, and every evaluation is a ground set. The general join lemma needs genericity for families in M; in this finite algebra it follows directly because a union contains its selected atom precisely when some summand does. The full rank/structural proof remains necessary for arbitrary names/formulas.

**P-b.** Separation takes values inside the set B using the fixed lower-formula definition; Collection supplies witness names and their rank supremum before joining. In the equality converse, a failed factor selected from ¬||σ=τ|| gives one evaluated member present on only one side, contradicting equality. For negation the ultrafilter contains exactly one of b,¬b; for ∃ the selected witness set and generic join choose a name, and every semantic witness is already an evaluated name. Density follows because a nonzero b∧¬||φ|| would admit no extension forcing φ. Zorn/Choice chooses maximal antichains, and Choice selects witnesses for their members; no Choice principle has been inferred from a finite game run.

**P-c.** Uniformize finite domain size, remove a point in uncountably many domains or recursively choose an ω₁ disjoint family when every point occurs only countably often. Agreement on the finite root gives compatible Cohen conditions. Each f̂(ξ) has a countable ground set of values from its deciding antichain, and the ground union over λ has size at most max(|λ|,ℵ₀). This forbids a surjection from λ<κ onto uncountable κ and a shorter cofinal sequence at an uncountable cofinality; cofinality ω cannot become finite. Dense fresh coordinates totalize every Cohen row and separate each pair, while preservation retains ω₂. Thus the extension satisfies ¬CH assuming the named ground model and ZFC extension theorem. The inequality 2^{ℵ₀}≥ℵ₂ does not give equality.

**P-d.** The exact result is win=[0,2,4,5], ranks=[3,null,2,null,1,0], first=[2,null,4,null,5,null], second=[null,3,null,3,null,null]. Target 5 enters first; 4 then enters; 2 then 0 enter. Vertex 1 remains outside because II may choose 3, which loops forever. I chooses 0→2→4→5, reaching the target in three moves; II has no opportunity on that path to prevent it. A graph play unfolds to a sequence of legal moves, and reaching vertex 5 is witnessed by a finite prefix, hence is open. The general proof also allows ranks beyond every finite stage.

**P-e.** c:(A→B)→(B→C)→A→C, and c f g a→(λg.λx.g(f x))g a→(λx.g(f x))a→g(f a), with alpha-renaming implicit when needed. C1–C3, separate beta expansion and derivation induction give the fundamental lemma; reducible variables make the identity substitution and C1 yields SN. One trace is not that theorem. J with motive B(x)→B(y) and identity branch computes transport_B(refl_a,u) to u. The choice pair is (λx.π₁(h x),λx.π₂(h x)), with dependent second type R(x,π₁(h x)).

**P-f.** solve(P) must return exactly P-d's four arrays, and verify(P,result) must return {ok:true}. The single-loop result has win=[], ranks=[null], first=[null], second=[null]. The three mathematical corruptions return exactly the failures printed in the computation lesson. A turn value 2 is rejected because the game signature contains only the two players; the proposed self-loop rank fails because its chosen successor has equal rank, so it cannot guarantee eventual reachability. These are expected public reference values, not an assertion that any learner or author executed the code.

**P-g.** The required G1/G2 reconstructions are the complete transfinite-attractor and splitting-game proofs in General determinacy and its boundaries, including stabilization/outside-W and one-blocked-point-per-history, respectively; attach both to this ledger. The CTM is an external assumption; the Boolean theorem is per fixed formula; the ZFC axiom verification remains separately imported. Open/closed games are proved determined, and determinacy of the splitting game implies its payoff has the perfect-set property. Borel determinacy and Woodin→PD remain imported, and AD for all payoffs is incompatible with AC by the proved diagonal. The Π/Σ/Id model gives soundness for its specified fragment in ZFC, with no internal universe of all sets. A finite winning certificate cannot prove ¬CH without those forcing hypotheses, decide all infinite games or establish consistency of ZFC.

## Changed cumulative portfolio LOG-SP-C

Change the finite Boolean algebra to P({a,b,c}). Keep 0̂=∅ and 1̂={(0̂,1)}, but now x={(0̂,{a,b})}, y={(0̂,{b,c})}. Change the game target from 5 to 3 while keeping all P edges/turns, as in the printed C record. Change the set forcing from the Cohen product to Q=Fn(ω,ω₁^M). Keep the same type fragment; general recursion is now proposed as an extra primitive.

Complete **C-a** all atomwise evaluations and ||x=y||, ||x∈y||, ||x=0̂||; **C-b** explain why the generic join/truth proof survives but “all forcing preserves cardinals” fails, with the exact collapse antichain and dense sets; **C-c** derive every graph rank and strategy, locate the precise failed P start-0 claim, and execute solve/verify on C; **C-d** exhibit the fix(identity) reduction cycle and say which candidate theorem hypothesis changed; **C-e** derive the dependent-pair choice map again but explain why a truncated premise blocks that construction; **C-f** give a full Choice-diagonal undetermined game proof, with the cardinal bound at each stage and no assertion that this payoff is Borel. Retain actual C execution and one invariant-corruption check. Supply one comparison paragraph connecting all six changes to an explicit hypothesis of P.

## Public changed model

**C-a.** At a, (x,y)=(1,0); at b, (1,1); at c, (0,1). Therefore ||x=y||={b}, ||x∈y||={c}, ||x=0̂||={c}. Membership requires x to evaluate to 0 and y to contain 0; the common atom b has x=y=1 but 1∉1, so it contributes no membership value. Boolean masks for these three results under a=1,b=2,c=4 are 2,4,4.

**C-b.** Truth/definability hold for this finite Boolean algebra, and for the set forcing Q by completion; c.c.c. does not. The incompatible singleton conditions assigning 0 every possible α<ω₁ form an uncountable antichain. Domain and range dense sets make the union a surjection ω→ω₁^M, so the old ω₁ is countable. A coordinate's possible values need not be countable in M, exactly defeating the range-cover proof. Same ordinals have survived throughout.

**C-c.** win=[3], ranks=[null,null,null,0,null,null], first=[null,null,null,null,null,null], second=[null,4,null,null,null,5]. Vertex 1 can avoid 3 by choosing 4, then 5 loops forever. Every I move from 0,2,4 stays outside; consequently start 0 is now losing. solve(C) must return these arrays and verify must return {ok:true}. Changing second[1] to 3 returns {ok:false,kind:'outside-second',at:1}, because that move hits the target rather than avoiding it. The graph did not change, but the payoff did, so P's winning path is irrelevant to C.

**C-d.** fix(id)→id(fix(id))→fix(id), repeat forever. The term system now includes a primitive absent from the arrow syntax to which the candidate fundamental lemma applies. Subject reduction can coexist with this cycle; no contradiction to the proved SN theorem follows.

**C-e.** From untruncated h the same two projections yield (f,r). From a truncated pair, ordinary π₁ is not licensed: the eliminator cannot in general extract arbitrary witness data into B(x). The change in premise, not a syntactic spelling of ∃, matters.

**C-f.** Enumerate c strategies for each player under Choice. Each fixes only its own alternating coordinates, leaving c compatible plays. At every α<c fewer than c plays were previously selected, even if c is singular, so choose distinct fresh x_α for I's strategy and y_α for II's. Put exactly the y's in A. Each I-strategy admits its excluded x and each II-strategy admits its included y. Neither wins. The construction supplies no definability bound, so it does not conflict with Borel determinacy. The changed comparison must name the altered payoff, chain condition, recursion rule and witness premise rather than claim a single generic notion of “failure.”

## Later public reconstruction LOG-SP-R

After working elsewhere, return without your earlier working if feasible and declare any earlier model exposure; public access cannot enforce that separation. Use B=P({a,b,c,d}), x={(0̂,{a,c})}, y={(0̂,{a,b})}, the printed eight-vertex R game, and the original uncountable Cohen forcing. Write **R-a** the four evaluations and ||x=y||, ||x∈y||; **R-b** the complete atomic equality converse and existential class-bound truth argument; **R-c** the Δ-system and cardinal/cofinality proofs followed by the conditional ¬CH conclusion; **R-d** the transfinite open/closed game proof and splitting-game perfect-set proof; **R-e** every finite rank and both strategy arrays plus actual R solve/verify and a failed-cycle certificate; **R-f** a transport composition derivation, the Σ-choice construction and a Π/Σ/Id model soundness audit, distinguishing them from the arrow SN proof and imported stronger type theories. Finish **R-g** a corrected theorem ledger listing exactly what the three public computations establish.

## Public reconstruction model

**R-a.** At a,b,c,d respectively the pairs are (1,1),(0,1),(1,0),(0,0). Equality has value {a,d}; membership has value {b}; in bit masks a=1,b=2,c=4,d=8 these are 9 and 2. The atom d gives equal empty sets but no membership; the atom a gives equal singletons but 1∉1. Those cases separate equality from membership.

**R-b.** If equal evaluations had a Boolean equality value outside U, the join of failed equality factors would be in U; genericity selects b∧¬||ρ∈τ||, giving an evaluated member on only one side and contradiction by lower-rank membership. For ∃ use the fixed lower-complexity defining formula to separate possible values S⊂B, collect a set W of witness names and bound its ranks before taking ∨S. A generic in that join meets a summand and supplies a semantic witness; every semantic witness has a name for the reverse direction. Negation uses the ultrafilter, not an assumption that infinite meets are preserved.

**R-c.** The full models are P1–P3. Reconstruct both Δ-system branches, agreement on its finite root, each coordinate-deciding antichain and the ground union bound. Explain μ=ω separately. Dense fresh coordinates make κ distinct reals, while c.c.c. keeps κ=ω₂; obtain at least ℵ₂ reals, with no exact continuum value and no claim that Con(ZFC) alone supplied this particular transitive M.

**R-d.** Targets seed W₀, successor stages use existential I/universal II predecessor rules, limits take unions. Countably many histories force countable stabilization; ranks strictly decrease along I's strategy and every II response. Outside W, II keeps the play outside. Swapping the target player proves closed determinacy. In the splitting game, I's winning strategy continuously embeds Cantor space into A; II's winning strategy leaves at most one obstructed point per finite history, and every A-point is obstructed somewhere, making A countable. No measure-regularity conclusion follows from the perfect-set proof alone.

**R-e.** win=[0,1,3,4,6], ranks=[3,2,null,1,1,null,0,null], first=[1,null,null,null,6,null,null,null], second=[null,null,null,null,null,7,null,7]. Vertex 6 seeds; 3 and 4 enter; then 1; then 0. Vertices 2,5,7 remain outside: I at 2 cannot escape through 5, since II at 5 selects 7. The self-loop at 2 supplies no finite reachability rank. solve(R) must return these arrays and verify(R,result) must give {ok:true}. The one-loop bad certificate from the computation lesson is the required failed-cycle check; retain its actual rejection. I's start-0 move goes to 1, where either response 3 or 4 reaches 6, so the rank bound of three moves is respected.

**R-f.** Identity elimination on q proves the transport-composition equality; its reflexivity branch is refl of transport(p,u). The Σ-choice pair projects h pointwise. The set model uses dependent functions, disjoint unions and singleton/empty identity fibers; substitution is reindexing, and J evaluates its branch only when endpoints agree. This gives soundness of the specified Π/Σ/Id fragment, and no internal universal set. Arrow SN instead uses reducibility and beta expansion; neither theorem establishes normalization of arbitrary universe/univalence extensions.

**R-g.** The three runs concern only their three finite reachability signatures and refusal controls; their two-sided certificates prove the exact finite winning partitions under the printed payoff. They check neither a generic's meeting all dense sets nor infinite transfinite recursion, ZFC consistency, full Borel/PD determinacy, general type conversion or learner performance. Record actual outputs and any discrepancies instead of turning these expected public values into an invented run receipt.

## Rubric, repairs and theorem provenance

Use seven criteria separately for each P and R portfolio: (1) Boolean evaluations and rank/Collection truth proof; (2) complete antichain/Δ-system/preservation argument; (3) general game proof and stated determinacy hypotheses; (4) finite ranks and both strategies; (5) typed derivations/normalization and dependent model boundaries; (6) actual code/inputs/output/refusals with comparison; (7) exact metatheory/source/exposure ledger. Score each **0** if absent or materially false, **1** if substantial work has a specific unresolved gap, **2** if complete with the stated hypotheses and a checked repair trail. The public maximum is 14 for P and 14 for R, self-review only. C uses six criteria, one per C-a–C-f, each on the same 0–2 scale, maximum 12; its comparison paragraph is required to reach 2 on C-f. Scores are neither grades nor a claim of independent work; a total cannot compensate for a false main theorem or missing required execution.

Repair one failed mechanism at a time. An incorrect membership value returns to F4's atomwise evaluation before forcing abstraction. A class-sized existential join returns to the Separation/Collection construction before the truth induction. A preservation slogan returns to the per-coordinate antichains before the Δ-system/Cohen application. A cycle given a winning rank returns to the decreasing-rank proof and the one-loop refusal. A finite-only determinacy proof returns to the ω+1 rank example, stabilization and the outside-W strategy. A claim of AD measure regularity from a perfect-set game returns to native DST Exercise 4 and its imported boundary. A normalization proof missing abstraction returns to beta expansion and the fundamental lemma. A dependent witness without a second-component type returns to Σ formation/projection and DT2. Repeat the corresponding local task, explain the correction, then revisit the affected portfolio. There is no automatic mastery threshold.

The native readings are Euler's existing CC BY-SA 4.0 teaching sources, linked with their stable item/chapter IDs; this new exposition, assignments, public models and reference code carry the same source license. No third-party manuscript, PDF or code is embedded. Classical results are mathematical dependencies rather than claims of originality. For external comparison, [Itay Neeman's 2011 forcing lecture notes, Section 1](https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf) give a direct poset reconstruction; the present Boolean reconstruction is written here in full. The reference to those notes is attribution and optional comparison, not an unprovided assigned solution. No external permission to redistribute that PDF is assumed.

Forcing definability/truth, c.c.c. preservation, the finite Δ-system lemma, open/closed determinacy, the splitting-game perfect-set implication, the Choice diagonal, arrow normalization and the stated Π/Σ/Id interpretation are proved at the scopes printed here. The native complete ZFC extension theorem and descriptive representation/Suslin/analytic regularity theorems remain imported, as do full Borel determinacy, determinacy-to-Lebesgue/Baire regularity and the Woodin-cardinal projective-determinacy implication. Native incompleteness retains its effective-axiomatization, arithmetic-strength, consistency/soundness and provability-predicate hypotheses. The word “model” in this course never removes those hypotheses.

These are established theorem exercises, with explicit imported proof boundaries. No new solution of an open independence problem, no new large-cardinal consistency result, no novel normalization theorem and no observed learner or performance result is claimed. Broader research questions require an identified theorem/problem and current primary-source review; none of the finite portfolios is research evidence by itself. Retained source PDFs may predate online additions; use the linked online chapters for the selected keys. Existing book release and human-publication contracts retain their own scopes.
