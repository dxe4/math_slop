
# Models, Proofs and Foundations: An Advanced Course

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-logic-foundations-advanced) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Logic and set theory](#/courses/course-logic) · [Abstract algebra I](#/courses/atlas-abstract-algebra-proof).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A model supplies objects; a derivation supplies reasons; a constructive proof may also supply a program. Moving between these requires work. This course builds a term model from a consistent theory, closes a structure under witnesses, reduces a proof detour, and separates an arithmetic consistency assertion from the metatheory asserting it. A cumulative finite presentation then joins those ideas with axiomatic sets and explicit witness extraction.

The advanced scope is **model/proof theory, incompleteness and axiomatic/constructive foundations**. The model-theory and proof-theory branches both carry required work. This is a working advanced undergraduate course, with selected graduate-labelled sources unpacked below. Full selected study time is unknown. Component reading estimates are not a total. The public answers support comparison and revision; neither opening them nor marking a step studied establishes independent performance.

## Preparation and study contract

Bring the [logic core](#/courses/atlas-logic-sets-foundations-standard), especially Units 2–4 and 7–11 and its required computability bridge. You need capture-avoiding substitution, induction on a finite expression or proof, equivalence classes, countability, computable enumeration and ordinary function notation. Basic JavaScript is needed to run and inspect the bounded public program here, or an independently justified implementation with the same records and refusals. A hand table alone does not replace the assigned actual execution.

Attempt D1–D6 before reading their answers.

1. **D1:** Substitute y for free x in ∀y R(x,y). Explain why the obvious substitution is wrong.
2. **D2:** If E is an equivalence relation on D, what condition makes [x]↦[f(x)] a function on D/E?
3. **D3:** Why are the formulas of a countable signature countable? Why does this not make all its structures countable?
4. **D4:** Distinguish a decider from an enumerator of axioms. How can a proof using an enumerated axiom carry a finite certificate?
5. **D5:** Type λf.λg.λx.g(f x) and reduce its application to f, g and a.
6. **D6:** Compare 1+ω and ω+1. Distinguish forming a definable subset of a given set from collecting a definable family of outputs.

**Diagnostic key and repair.** D1: rename first, obtaining ∀z R(x,z), then ∀z R(y,z); ∀y R(y,y) captures the supplied parameter. Repair with the logic core Unit 2 and [levels of language](../books/logic-foundations-proof-reference/reference-desk-a-levels-of-language.md). D2: require E(x,y)⇒E(f(x),f(y)); otherwise two names for one class could give different outputs. Repair with the quotient lesson below before proceeding. D3: finite strings over a countable alphabet form a countable union of countable finite products; formulas are a subset. An interpretation may have any suitable nonempty domain, independent of the number of symbols. Repair countability in core Unit 6 and read [Model Theory](../books/logic-foundations-proof-reference/model-theory.md). D4: a decider halts with yes/no on every input; an enumeration need only eventually list each axiom. Record the enumeration stage and its finite computation, so a checker can verify that occurrence without deciding bare axiom membership. Repair [Computability](#/books/logic-foundations-proof-reference), definitions and Exercises 1, 3, 5, then [arithmetization](../books/logic-foundations-proof-reference/chapter-13.md). D5: (A→B)→(B→C)→A→C, with application right-associated in the type and left-associated in the term; three beta steps give g(f a). Repair [natural deduction](../books/types-proofs-construction/natural-deduction-as-construction-rules.md), then the simply typed chapter below. D6: 1+ω=sup_n(1+n)=ω; ω+1 has a largest element. Separation bounds inputs and outputs inside an existing set; Replacement collects unique definable outputs from a set of inputs when a prior output bound has not been supplied. Repair core Units 7–8 and the axioms lesson below.

For every assignment retain a dated first worksheet, a comparison worksheet naming the public support opened, and a revised worksheet explaining each repair. Use the worksheet portfolio workflow. Label files with the course ID, source chapter, exercise or portfolio ID and attempt date. Save actual code, inputs, output and refusals separately. The shared note is mutable and does not preserve this portfolio. Return work is a later self-study opportunity; its public availability cannot verify a delay or absence of prior exposure. No private assessment store or grade is introduced.

## Required source sequence and assignments

Follow A–J in order. Read each selected chapter's definitions, worked examples, proofs/sketches and common errors before its questions. Sources keep their own chapter IDs and original hypotheses. Each listed question already prints a complete local solution immediately after it; compare only after your first attempt. These **45 source questions** are required in addition to D1–D6, the eleven local questions below and all three portfolios. No unlisted whole-book exercise programme or nominal book workload is assigned.

| Stage | Exact reading and required questions | Feedback and purpose |
| --- | --- | --- |
| A | [Reference book overview](#/books/logic-foundations-proof-reference): Reference desks A, C–F; Theorem contracts 1–7; Proof clinics; Exercises with solutions **3, 4, 7, 8** | The four numbered local solutions separate axioms, object/meta language, countermodels and diagonal sets. |
| B | [Model Theory](../books/logic-foundations-proof-reference/model-theory.md), all sections; Practice exercises **1–5** | Five printed solutions; Exercise 1 needs both compactness and downward LS for exact cardinality, not merely a lower bound. Complete M1–M3 below. |
| C | [Computability and Turing Machines](#/books/logic-foundations-proof-reference), all sections; Practice exercises **1–5** | Five printed solutions include complete NONEMPTY and complement-HALT reductions. Preserve the difference between halting and accepting. |
| D | [Incompleteness and Arithmetization](../books/logic-foundations-proof-reference/chapter-13.md), all sections; Practice exercises **1–5** | Five printed solutions distinguish Rosser, the standard provability predicate, consistency and soundness. Complete I1–I2 below. |
| E | [Sequent Calculus and Proof Theory](../books/logic-foundations-proof-reference/chapter-14.md), all sections; Practice exercises **1–5** | Five printed solutions. The general cut-elimination and ordinal-analysis results remain imported theorems, with their stated calculus and induction hypotheses; PT1 supplies an actual reduction. |
| F | [Intuitionistic and Constructive Logic](../books/logic-foundations-proof-reference/chapter-15.md), all sections; Practice exercises **1–5** | Five printed solutions include semantic countermodels, the extra outer realizer index and the conditional bar/cover argument. Do not infer Markov independence from a failed search. |
| G | [Simply typed lambda calculus](../books/types-proofs-construction/simply-typed-lambda-calculus.md), all sections; Practice exercises **1–4** | Four derivation keys. Read the natural-deduction repair above first if proof terms are unfamiliar. |
| H | [Reduction, preservation, and normalization](../books/types-proofs-construction/reduction-preservation-and-normalization.md), all sections; Practice exercises **1–4** | Four reduction keys, including the explicit two-step fixed-point cycle. Complete PT2–PT3 below. |
| I | [Dependent function and pair types](../books/types-proofs-construction/dependent-function-and-pair-types.md), all sections; Practice exercises **1–4** | Four printed keys give indexed outputs and witnessed existence. Names of inequality proofs must accompany the chosen numerical witnesses. |
| J | [Choice principles are setting-sensitive](../books/types-proofs-construction/choice-principles-are-setting-sensitive.md), all sections; Practice exercises **1–4** | Four complete conceptual keys. Complete S1–S3 and all P/C/R work; type-theoretic projection and set-theoretic AC have different premises. |

For each source question write the statement, solution and hypothesis audit. For Exercise 2 of Model Theory use “T entails the at-least-n sentence” if T is not assumed deductively closed: completeness of a theory decides sentences up to derivability, not literal membership in an arbitrarily chosen axiom list. For Chapter 14 Exercise 4, explain that citing the imported cut-elimination theorem proves admissibility; it does not reconstruct the general cut-elimination argument. In Chapter 15 Exercise 5 retain the supplied cover/bar presentation and decidability condition; it does not prove every constructive formulation of compactness.

## Model construction from consistency

A consistent list of sentences is not yet a displayed model. We work in classical first-order logic with equality, nonempty domains, a sound calculus with the usual deduction theorem, and a countable signature. Consistency here is syntactic: no finite derivation of contradiction. The metatheory for the following constructions is classical ZFC. These choices matter when comparing foundations.

**Fresh witness lemma.** Let S be consistent, and let ∃x φ(x) be a sentence in its language. Introduce a constant c occurring neither in S nor in φ. Then adding H=(∃x φ(x)→φ(c)) preserves consistency. Otherwise the deduction theorem and classical propositional reasoning give S⊢¬H, hence S⊢∃x φ(x) and S⊢¬φ(c). Because c is fresh in S and φ, replace c throughout the latter finite proof by a variable absent from the proof, and universally generalize. This gives S⊢∀x¬φ(x), contradicting S⊢∃x φ(x). Freshness licenses that generalization. Reusing an old named constant does not.

Start by adding a dummy constant if there are no closed terms; the same fresh-variable argument makes this conservative for sentences in the old language. Let L_0 be the resulting language. At stage n, enumerate all existential sentences in L_n, add a distinct fresh constant and witness axiom for each, one at a time, and let L_{n+1} contain those constants. Every finite subset of the union theory occurs within finitely many such additions, so a contradictory finite proof would contradict the witness lemma. Every existential sentence of L_∞ uses finitely many symbols and therefore appears at some stage. A single pass through the original language would miss formulas using new constants.

Now enumerate all L_∞ sentences σ_0,σ_1,… . At step k add σ_k if that remains consistent, otherwise add ¬σ_k. One of the two extensions is consistent: if both yielded contradiction, the deduction theorem would yield both ¬σ_k and ¬¬σ_k from the previous theory. The union S* is complete, consistent, contains all witness axioms, and is deductively closed: a consequence absent from it would have its negation in it, contradicting consistency. This existence construction uses a consistency test in the metatheory; it is **not** an algorithm for deciding consistency.

Let closed terms satisfy t∼u iff t=u∈S*. Equality rules make ∼ an equivalence and a congruence for every function and relation symbol. Define a domain of classes [t], functions by f([t_1],…)=[f(t_1,…)], and relations by R([t_1],…) iff R(t_1,…)∈S*. Congruence proves that changing representatives changes neither truth nor output class.

The **truth lemma** says, for a formula ψ and a substitution of closed terms for its free variables,
M⊨ψ([t_1],…) iff ψ(t_1,…)∈S*.
Prove it by structural induction. Atomic formulas use the definitions and equality congruence. For negation and conjunction, completeness and consistency give ¬A∈S* iff A∉S* and A∧B∈S* iff both belong. Other classical connectives reduce to those. For ∃x θ(x), membership gives θ(c)∈S* using its witness axiom; induction makes [c] a semantic witness. Conversely, any semantic witness is [u] for a closed term u; induction gives θ(u)∈S*, and existential introduction gives ∃x θ(x)∈S*. Universals follow from ∀x θ≡¬∃x¬θ. Thus M models the original theory. This proves the countable consistency-to-model construction; general cardinal versions require the corresponding larger construction.

**M1.** Fill in both directions of the existential truth-lemma case and explain why the terms must be quotiented. **M2.** Give a consistent S for which using an old constant as an arbitrary existential witness creates inconsistency. **M3.** Derive compactness from consistency-to-model, soundness and finiteness of proofs; explain the finite-model failure.

**Complete local models.** M1 is the two directions in the previous paragraph; the quotient is necessary because S* may contain a=b, and a model must interpret equality as actual identity. Without quotienting, distinct raw terms a,b would violate that axiom. M2: S={∃x P(x),¬P(d)} has a two-element model with d unmarked and another element marked. Using d as the witness adds P(d), contradiction. A fresh c avoids this. M3: if every finite subset of T is satisfiable, soundness forbids a contradiction from any finite subset. Every proof uses finitely many premises, so T is consistent; the construction gives a model for countable T, and the imported general completeness theorem gives the unrestricted cardinal version. Conversely a model of T models every subset. Sentences saying “at least n elements” for every n have finite models for every finite subfamily, but no single finite model of all of them. Ordinary compactness gives an infinite model.

## Elementary substructures and model size

An induced substructure N⊆M restricts functions and relations; it need not preserve quantified truth. The **Tarski–Vaught test** says it is elementary precisely when every existential formula with parameters in N true in M has a witness in N. Here the test ranges over all first-order formulas, not only atomic predicates.

Proof: atomic agreement follows from being a substructure; Boolean agreement follows by induction. In the existential case, a witness in N is a witness in M by induction. In the other direction the test chooses a witness in N, and induction makes the matrix true there. This completes structural induction. Necessity follows by elementary agreement on the existential sentence with parameters and its satisfaction definition.

For an infinite M in a countable language and a countable parameter set A, choose a_0∈M and start from A∪{a_0}. Close this set under constants and functions. At each stage, for every formula ∃x θ(x,b⃗) true in M with parameters from that stage, select a witness in M; then close under functions again. In ZFC we may fix a well-order of M and take the first witness. Countably many formulas and finite tuples add at most countably many elements per stage. The countable union N is nonempty and a substructure. Every finite parameter tuple lies in one stage, so its existential witness lies in a later stage. The test proves N≼M. The use of a well-order of M records the chosen metatheory; no choice-free LS claim is being made here.

Worked failure: in (Z,<), the induced subset 2Z is a substructure of the relational language. With parameters 0,2, the formula ∃x(0<x∧x<2) holds in Z with witness 1 but fails in 2Z. Isomorphism of (2Z,<) to (Z,<) does not make that inclusion elementary. In contrast, source Exercise 1 combines compactness and LS to construct dense linear orders of each specified infinite cardinality; keep lower and upper bounds separate.

Before continuing, write this failure with its parameters explicitly, then reproduce source Model Theory Exercises 1–5 from the assigned keys. In particular, the source nonstandard successor construction is an existence argument: its fresh c differs from every standard numeral. Compactness does not supply a concrete computable operation table.

## Axioms, recursion and choice

ZF has sets as its objects. A schema is one axiom for each formula, with the permitted parameters and free variables; it is not a new quantifier over arbitrary classes. In Separation, for a set A and formula φ(x,p⃗), the variable naming the resulting subset must not occur free in φ. Replacement similarly requires that the defining relation have exactly one output for each input in its set domain.

A useful ZF construction already appears in our capstone: if E⊆D×D is an equivalence relation, then [x]_E={y∈D:E(x,y)} exists by Separation. The quotient can be obtained as a definable subset of P(D): take precisely the subsets equal to some [x]_E. Thus this bounded quotient needs Power Set and Separation and does not by itself demonstrate an essential use of Replacement. No representative choice is needed to define D/E. A map [x]↦[f(x)] still needs a congruence proof.

**Transfinite recursion on a set ordinal.** If G is a definable functional operation taking every preceding set-valued history to a unique set, then for every ordinal α there is a unique function h with domain α satisfying h(β)=G(h↾β) for β<α. Parameters in G are fixed. Here “operation” is a defining formula, not a set containing all possible histories.

The uniqueness proof is substantive: if two histories disagree, Separation gives their set of disagreement indices; its least ordinal β exists, but their restrictions below β agree, so functionality of G forces equality at β. For existence use induction on the required history length. At a successor append the uniquely specified G-value to the preceding history. At a limit λ, every β<λ has a unique previous history; uniqueness makes all of them compatible. Replacement collects this set-indexed family of histories, and Union joins them into a function with domain λ satisfying the same equation. This is a proof by transfinite induction of the recursion theorem; it collects only histories on a given set ordinal, not a set of all ordinal stages. Transfinite induction itself follows by taking the least counterexample within any purported failing ordinal, using Separation.

For the cumulative hierarchy, V_0=∅, V_{β+1}=P(V_β), V_λ=⋃_{β<λ}V_β at nonzero limits. The recursion theorem applies to the operation defined by these cases. Power Set supplies successor stages and Replacement supplies the set of earlier V_β at a limit before Union is applied. Each V_α is a set. The notation V for all stages is a class description; it does not license a universal set. A universal set U would make {x∈U:x∉x} a set by Separation and produce Russell's contradiction. Foundation rules out a finite membership cycle: a nonempty set of its vertices would have an ∈-minimal member, but its predecessor in the cycle belongs to that member and to the same set.

Cantor–Bernstein illustrates a choice-free infinite construction. Given injections f:A→B and g:B→A, define A_0=A∖g(B), A_{n+1}=g(f(A_n)), and C=⋃_{n<ω}A_n. Define h(a)=f(a) on C and h(a)=g^{-1}(a) outside C. The latter is defined because A∖C⊆g(B), and g is injective. If f(c)=g^{-1}(a) with c∈C,a∉C, then a=g(f(c))∈C, contradiction, so the two image pieces are disjoint; each restriction is injective. For any b∈B, if g(b)∉C the second branch maps g(b) to b. If g(b)∈C, it cannot lie in A_0 and hence lies in g(f(A_n)) for some n; injectivity of g gives b=f(a) for a∈A_n, so the first branch hits b. Thus h is bijective. The recursive layers are definable; no arbitrary component choices or AC are needed.

**S1.** Compute |V_0| through |V_4| and identify the first nonempty limit step. **S2.** Prove 1+ω=ω and ω+1≠ω as order types, and show why collecting all V_α as a set is impermissible. **S3.** Prove the Cantor–Bernstein cross-branch and surjectivity claims, then distinguish them from set-theoretic AC and dependent witness projection.

**Complete local models.** S1: 0,1,2,4,16, since each finite successor takes a power set. The first nonzero limit is ω and V_ω=⋃_{n<ω}V_n; Replacement collects the finite-stage sets, Union combines them. S2: the recursive definition of ordinal addition gives 1+ω=sup_n(1+n)=ω; ω+1 has a greatest element while ω has none, so they cannot be order-isomorphic. A set containing every V_α as members would, by Union, contain every set, using the ZF rank theorem (every set lies in some V_α). This would be a universal set, already ruled out above. The rank theorem is imported here, rather than proved by the small V_n calculation. S3: the previous paragraph proves the two claims in full. AC instead asserts a function on any set of nonempty sets without supplying individual witnesses. A term h:Πx:A.Σy:B.R(x,y) already supplies pairs; λx.π_1(h x) extracts the function and λx.π_2(h x) its correctness. The two premises are different.

## Proof reductions and constructive evidence

We use an explicit intuitionistic single-conclusion sequent fragment. Its identity is A⇒A; weakening, exchange and contraction act on the left. Implication-right discharges A from Γ,A⇒B to Γ⇒A→B. Implication-left derives Γ,Δ,A→B⇒C from Γ⇒A and Δ,B⇒C. Cut derives Γ,Δ⇒C from Γ⇒D and Δ,D⇒C. These displayed rules fix the meaning of the following reduction; the full classical first-order calculus in the source has multiple conclusions and extra rules.

Suppose π proves Γ,A⇒B, σ proves Δ⇒A and τ proves Θ,B⇒C. Implication-right turns π into Γ⇒A→B; implication-left turns σ,τ into Δ,Θ,A→B⇒C. A cut on A→B yields Γ,Δ,Θ⇒C. Replace that cut by a cut of σ with π on A, yielding Δ,Γ⇒B, then cut with τ on B, yielding Δ,Γ,Θ⇒C. Exchange restores the displayed order. Both new cut formulas are proper subformulas of A→B. Context duplication or contraction in other cases must be accounted for; this one principal reduction is not the full Hauptsatz.

Term calculation tells the same story for implication: (λx.t)u reduces to t[u/x]. The substitution lemma is proved by induction on t's typing derivation. At a variable x use the supplied derivation of u:A; at another variable keep its assumption; at application use both induction hypotheses and →E; at abstraction first alpha-rename its binder away from free variables of u and use the induction hypothesis under that fresh binder, then →I. Products and sums require their corresponding introduction/elimination cases. Thus Γ,x:A⊢t:B and Γ⊢u:A imply Γ⊢t[u/x]:B. In the beta case this proves preservation of B. One cannot substitute a number where a proof of an unrelated type is required.

For example, with y:A and x:A, (λx:A.λy:B.x)y must rename the inner y to z, giving λz:B.y. The result depends on the outer y:A. The captured λy:B.y instead has type B→B and loses that dependency. Take distinct base types A,B to make the error visible.

Strong normalization of pure simply typed lambda calculus is the imported theorem stated with its reducibility-candidate proof outline in Stage H; preservation alone does not prove termination. In the pure fragment with no added constants or axioms and no general recursion, a closed normal term of empty type cannot exist: a normal term is an introduction form or a neutral term; no introduction rule produces 0, and a closed neutral term would need a head variable or constant, neither available. With normalization and preservation this rules out a closed term of 0 in that fragment. Extra axioms and recursive operators change the analysis.

**PT1.** Draw the principal implication-cut replacement above with all three contexts. **PT2.** Type and normalize (λp.(π_2 p,π_1 p))(a,b), and give the capture-avoiding result of the example with free y. **PT3.** Given h:Πx:A.Σy:B.R(x,y), type the pair of extracted function and correctness proof; explain why h replaced by ¬¬Σy:B.R(x,y) is insufficient for those projections.

**Complete local models.** PT1 is the two smaller cuts displayed above: σ cut π on A, then that result cut τ on B; the end context is the same multiset Γ,Δ,Θ. PT2 has input a:A,b:B and type B×A. The steps are (π_2(a,b),π_1(a,b))→(b,π_1(a,b))→(b,a), following the initial beta step. The other result is λz:B.y, with type B→A in context y:A. PT3: let f=λx.π_1(h x):Πx:A.B and p=λx.π_2(h x):Πx:A.R(x,f x). Then (f,p):Σf:(Πx:A.B).Πx:A.R(x,f x). A double-negated pair has function type ((Σy:B.R(x,y))→0)→0, not a pair type; projection is ill-typed. In a two-world Kripke frame r<u where atom F is forced only at u, r forces ¬¬F (no extension forces ¬F) but not F. This is a semantic obstruction to general double-negation elimination, rather than a claim based on ignorance of a mathematical answer.

## Arithmetization and incompleteness

An effective code for finite syntax is a metatheoretic function. To use it inside arithmetic, represent its graph by an arithmetic formula. If d sends a formula code to the code obtained by substituting its own numeral, choose D representing that computable diagonal-substitution function. Given ψ(y), let θ(x)=∃y(D(x,y)∧ψ(y)) and G=θ(⌜θ⌝). Numeralwise representability at that fixed input proves in a sufficiently strong base that G↔ψ(⌜G⌝). Writing d(x) as an object-language term without supplying such a term or a representation formula would skip the essential bridge.

For a computably enumerable axiom theory, an axiom occurrence carries an enumeration certificate. This makes the certified proof relation primitive recursive in an appropriate coding, while Prov_T(y)=∃p Prf_T(p,y) expresses unbounded proof existence. Checking all p≤B decides only bounded proof existence; increasing B through many values supplies no stopping rule for nonexistence. The finite code below has explicit bounds and does not implement Prov_T or its complement.

For the standard Gödel fixed point G↔¬□G, assume the derivability conditions stated in Stage D. From G→¬□G obtain □G→□¬□G; positive introspection gives □G→□□G; internalized propositional reasoning combines these to □G→□⊥. Consequently Con(T)→¬□G→G. If a consistent T proved Con(T), it would prove G, hence □G by the first derivability condition, while also proving ¬□G by its fixed point: contradiction. This uses the standard provability predicate and its formal properties, not the Rosser sentence as a replacement. Rosser supplies the separate consistency-only first incompleteness theorem.

**I1.** Assuming Con(PA), prove PA+¬Con(PA) is consistent, but show that consistency alone need not make T+Con(T) consistent. **I2.** Give the failed hypothesis for applying Gödel–Rosser to true arithmetic, Presburger arithmetic and a bounded finite closure algorithm.

**Complete local models.** I1: if PA+¬Con(PA) were inconsistent, the deduction theorem and classical logic would give PA⊢Con(PA), contradicting the second theorem under Con(PA). Put U=PA+¬Con(PA). Its standard proof predicate permits elementary arithmetic to verify Con(U)→Con(PA), because every PA proof is a U proof. U already proves ¬Con(PA), so U+Con(U) is inconsistent. Soundness in standard N would instead ensure N models T+Con(T), so the extension is consistent. I2: true arithmetic is not computably enumerable as an axiom theory; Presburger arithmetic does not extend or interpret the required arithmetic strength of Q; a bounded finite algorithm is not an effectively axiomatized arithmetic theory extending Q at all. Decidability of the specific ground task below does not contradict incompleteness or first-order undecidability.

## Finite presentation and public computation

We now prove a narrow positive-ground entailment result, rather than infer general validity from finite runs. Fix n named constants a_0,…,a_{n−1}, unary f, binary E and unary P. T_s contains:

- the equivalence-relation axioms for E;
- ∀x∀y(E(x,y)→E(f(x),f(y)));
- ∀x∀y((P(x)∧E(x,y))→P(y)) and ∀x(P(x)→P(f(x)));
- f(a_i)=a_{f_i} for every printed i, E(a_i,a_j) for the printed generating edges, and P(a_i) for the printed seeds.

There are **no distinctness axioms and no sentence saying that the names exhaust the domain**. E is a relation, not logical equality. Close the generating edges under reflexivity, symmetry, transitivity and f; then close the seeds under E and f. A finite number of pairs and positive names can be added, so iteration terminates. An equivalent congruence implementation merges classes; at most n−1 successful merges occur. After that, at most n new names enter P.

Let E* and P* be these closures. Every addition is justified by an axiom of T_s and finite reasoning, so membership of (i,j) in E* proves T_s⊢E(a_i,a_j), and i∈P* proves T_s⊢P(a_i). Conversely form Q_s=D/E*. Congruence makes [i]↦[f_i] well defined, and E-saturation makes P([i]) iff i∈P* well defined. Interpret E on Q_s as identity and a_i as [i]. All T_s axioms hold. If a pair or a mark is absent from closure, this one finite model falsifies the corresponding E- or P-sentence, and soundness gives nonderivability. We have therefore decided exactly these ground E/P queries for this presentation. We have not decided arbitrary sentences, equality of names in every model, or general first-order consequence. In particular E(a_i,a_j) need not entail a_i=a_j: a model can retain distinct but E-equivalent objects.

| Portfolio | n | f array: index i gives f_i | Generating edges | Seeds |
| --- | --- | --- | --- | --- |
| LOG-ADV-P | 6 | 1,2,0,4,3,5 | 0:1;3:4 | 0 |
| LOG-ADV-C | 6 | 2,3,4,5,0,1 | 0:1 | 0 |
| LOG-ADV-R | 8 | 1,2,3,0,5,6,4,7 | 0:2;4:5 | 0,7 |

Run the following public JavaScript in an existing JavaScript environment. It accepts only the printed finite record format, with n≤8, at most 32 edge pairs, and at most eight distinct seeds. Copy the exact program and your calls into your portfolio. It reads no files, evaluates no supplied code, and mutates no input. Its verifier checks whether a labelled partition and positive list satisfy the presentation; it does **not** certify leastness. Leastness needs the closure proof above and the independent comparison.

```js
// EULER-LOGIC-ADVANCED-CONGRUENCE-V1
(() => {
  const fail = message => { throw new Error(message); };
  function data(s) {
    if (!s || typeof s !== 'object' || Array.isArray(s)
        || Object.keys(s).sort().join(',') !== 'edges,f,n,seeds') fail('record');
    const {n, f, edges, seeds} = s;
    if (!Number.isInteger(n) || n < 1 || n > 8) fail('domain');
    const index = x => Number.isInteger(x) && x >= 0 && x < n;
    if (!Array.isArray(f) || f.length !== n || !Array.from(f).every(index)) fail('function');
    if (!Array.isArray(edges) || edges.length > 32) fail('edges');
    for (const edge of edges) {
      if (!Array.isArray(edge) || edge.length !== 2 || !Array.from(edge).every(index)) fail('edge');
    }
    if (!Array.isArray(seeds) || seeds.length > 8 || !Array.from(seeds).every(index)
        || new Set(seeds).size !== seeds.length) fail('seeds');
    return {n, f: [...f], edges: edges.map(e => [...e]), seeds: [...seeds]};
  }
  function verify(s, labels, positive) {
    const {n, f, edges, seeds} = data(s);
    const index = x => Number.isInteger(x) && x >= 0 && x < n;
    if (!Array.isArray(labels) || labels.length !== n || !Array.from(labels).every(index)) fail('labels');
    if (!Array.isArray(positive) || positive.length > n || !Array.from(positive).every(index)
        || new Set(positive).size !== positive.length) fail('positive');
    const p = new Set(positive);
    for (const [i,j] of edges) if (labels[i] !== labels[j]) return {ok:false, kind:'edge', at:[i,j]};
    for (let i=0; i<n; i+=1) for (let j=0; j<n; j+=1) {
      if (labels[i] === labels[j] && labels[f[i]] !== labels[f[j]]) {
        return {ok:false, kind:'congruence', at:[i,j]};
      }
    }
    for (const i of seeds) if (!p.has(i)) return {ok:false, kind:'seed', at:[i]};
    for (let i=0; i<n; i+=1) for (let j=0; j<n; j+=1) {
      if (p.has(i) && labels[i] === labels[j] && !p.has(j)) {
        return {ok:false, kind:'positive-equivalence', at:[i,j]};
      }
    }
    for (let i=0; i<n; i+=1) {
      if (p.has(i) && !p.has(f[i])) return {ok:false, kind:'positive-function', at:[i,f[i]]};
    }
    return {ok:true};
  }
  function close(s) {
    const {n, f, edges, seeds} = data(s);
    const parent = Array.from({length:n}, (_,i) => i);
    const root = i => { while (parent[i] !== i) i = parent[i]; return i; };
    const merge = (i,j) => {
      const a=root(i), b=root(j);
      if (a === b) return false;
      parent[Math.max(a,b)] = Math.min(a,b);
      return true;
    };
    for (const [i,j] of edges) merge(i,j);
    let stable = false;
    for (let pass=0; pass<n && !stable; pass+=1) {
      stable = true;
      for (let i=0; i<n; i+=1) for (let j=0; j<n; j+=1) {
        if (root(i) === root(j) && merge(f[i],f[j])) stable = false;
      }
    }
    if (!stable) fail('merge bound');
    const labels = parent.map((_,i) => root(i));
    const marked = new Set(seeds);
    stable = false;
    for (let pass=0; pass<=n && !stable; pass+=1) {
      const before = marked.size;
      for (let i=0; i<n; i+=1) if (marked.has(i)) {
        marked.add(f[i]);
        for (let j=0; j<n; j+=1) if (labels[i] === labels[j]) marked.add(j);
      }
      stable = marked.size === before;
    }
    if (!stable) fail('mark bound');
    const classes = [...new Set(labels)].map(r => labels.flatMap((v,i) => v === r ? [i] : []));
    const positive = [...marked].sort((a,b) => a-b);
    return {
      labels, classes, positive,
      fOnClasses: classes.map(block => labels[f[block[0]]]),
      positiveClasses: classes.filter(block => marked.has(block[0])).map(block => block[0])
    };
  }
  globalThis.logicAdvancedAudit = Object.freeze({close, verify});
})();
```

For example call logicAdvancedAudit.close({n:6,f:[1,2,0,4,3,5],edges:[[0,1],[3,4]],seeds:[0]}). The output class names and fOnClasses use the **least original index** in each class, not the positions of classes in the output array. Also call verify on each output's labels and positive list and retain {ok:true}.

Run these explicit refusal controls and retain the thrown message: n=9 gives “domain”; an f entry equal to n gives “function”; an edge endpoint −1 gives “edge”; repeated seeds give “seeds”; a 33-pair edge list gives “edges”; passing n−1 labels to verify gives “labels”. Each case starts from a valid printed record and changes only the named field. These failures are format/bound refusals, not mathematical disproofs. Run the mathematically bad candidate checks assigned in the models too, which return an invariant failure instead of throwing.

## Primary portfolio LOG-ADV-P

Use the P row. Attempt P1–P8 in a fresh first worksheet before the model.

1. **P1, presentation:** Write every ground equation/edge/seed and all six universal axioms: reflexivity, symmetry, transitivity, congruence, E-preservation of P and f-preservation of P. Prove why the quotient construction is well defined without choosing representatives.
2. **P2, model and entailment:** Compute E*, P*, the quotient function and the positive classes by hand. Give an all-model derivation of E(a_0,a_2) and P(a_2). Give a countermodel to E(a_0,a_3), and explain why E(a_0,a_1) does not establish equality.
3. **P3, actual computation:** Run close and verify, reconcile every field with your hand work, and run all six format controls. Also test labels [0,0,2,3,3,5] with positive [0,1,2], and correct labels with positive []. Explain the exact first failed invariant in each case. Check the single-class candidate labels [0,0,0,0,0,0], positive [0,1,2,3,4,5], and explain why acceptance does not show leastness.
4. **P4, models beyond the table:** Add constants b_0,b_1,… and all pairwise inequalities b_i≠b_j to T_P. Prove finite satisfiability and use compactness to obtain an infinite model. Construct an explicit infinite model as a separate check. Does the finite quotient have a proper elementary extension? Give a formula witnessing failure in your infinite extension.
5. **P5, axioms:** Construct the set quotient in ZF and label the axioms used. Apply the recursion theorem to V_ω, and identify precisely where Replacement enters.
6. **P6, proofs and extraction:** Supply PT1's principal cut reduction. For each i∈P*, give f_i and the proof that P(a_{f_i}) follows. Use those finite witnesses to describe h:Πi:I.Σj:D.(j=f_i)×P(a_j), with I the finite subtype of positive indices and D the index set. Type the function and correctness pair extracted from h. Equality j=f_i is equality of indices here.
7. **P7, arithmetic boundary:** Assume T is consistent, computably enumerable, extends Q and has the standard derivability conditions. State separately the Rosser conclusion and the second-theorem conclusion, and reconstruct Con(T)→G. Explain why neither conclusion follows from your finite run.
8. **P8, self-review:** Compare against the public model, record all support opened, revise failures and identify which proofs remain imported. Retain both first and revised work; no score certifies independence.

## Changed portfolio LOG-ADV-C

Use only the changed C row for the finite mathematics. Complete **C1–C8**, with exactly P1–P8's deliverables, changing P2 to derivations of E(a_4,a_5) and P(a_5), and a countermodel to E(a_0,a_2). For C3 use labels [0,0,2,3,4,5] with all indices positive as the congruence failure; use correct labels and positive [0,1] as the predicate failure. Repeat the six format controls and the accepted single-class candidate. C7 assumes **soundness of T in standard N** in addition to the arithmetic hypotheses: prove consistency of T+Con(T) semantically, and identify which assumption is stronger than P7. All other deliverables, including the explicit infinite extension and the cut/extraction work, are required again. A changed numerical row alone is not a completed changed investigation.

## Public return LOG-ADV-R

On a later study occasion, declare any prior exposure and complete **R1–R8** from the R row, with the same eight deliverables. Change R2 to derivations of E(a_4,a_6) and P(a_3), with a countermodel to P(a_4). For R3 use labels [0,1,0,3,4,4,6,7] and positive [0,1,2,3,7] as the congruence failure, and correct labels with positive [0,2,7] as the predicate failure. Repeat the six format controls and the accepted single-class candidate, now with all eight indices positive. R7 assumes Con(PA) and sets U=PA+¬Con(PA): prove U is consistent while U+Con(U) is inconsistent, using the exact reasoning in I1, and explain why U is not sound in standard N. If you opened any prior model first, record a supported reconstruction instead of claiming an unseen return.

## Public models and repair criteria

The following models supply all eight deliverables for each portfolio. Read the shared arguments as part of each model, not as an optional shortcut.

| Field | LOG-ADV-P | LOG-ADV-C | LOG-ADV-R |
| --- | --- | --- | --- |
| Canonical labels | 0,0,0,3,3,5 | 0,0,2,2,4,4 | 0,1,0,1,4,4,4,7 |
| Classes | {0,1,2};{3,4};{5} | {0,1};{2,3};{4,5} | {0,2};{1,3};{4,5,6};{7} |
| fOnClasses, in that class order | 0,3,5 | 2,4,0 | 1,0,4,7 |
| Positive indices P* | 0,1,2 | 0,1,2,3,4,5 | 0,1,2,3,7 |
| Positive class representatives | 0 | 0,2,4 | 0,1,7 |
| Extracted f_i, in positive-index order | 1,2,0 | 2,3,4,5,0,1 | 1,2,3,0,7 |
| First bad-label result | congruence at [0,1] | congruence at [0,1] | congruence at [0,2] |
| Bad-positive result on correct labels | seed at [0] | positive-function at [0,2] | positive-function at [0,1] |

**Presentations and all-model derivations (1–2).** In each case instantiate the n equations f(a_i)=a_{f_i}, the listed edges, and P at exactly the seeds; add the six universal axioms listed in P1. Quotient well-definedness follows from congruence and P's E-invariance as proved before the code. P: E(0,1) gives E(1,2) by applying f and rewriting; transitivity gives E(0,2), and the P-invariance axiom sends P(0) to P(2). C: E(0,1) gives E(2,3), then E(4,5); P(0) gives P(1) by E, then repeated f gives P(2),P(4) from 0 and P(3),P(5) from 1. R: E(4,5) gives E(5,6) and hence E(4,6); P(0) gives P(1),P(2),P(3) by successive f, while seed 7 stays fixed. In the displayed quotient model P has [0]≠[3], C has [0]≠[2], and R's class [4] is unmarked, supplying the requested countermodels. To refute the equality inference separately, retain domain D with E=E*, P=P* and the printed f as an actual function, interpreting a_i as distinct indices. This also models every axiom, but a_0≠a_1 in P. For C and R the same nonquotiented model distinguishes their distinct E-equivalent names too.

**Computational model (3).** The five output fields are labels, classes, positive, fOnClasses and positiveClasses; the table also supplies the extracted witnesses. The table gives every returned value. verify on those labels/positives gives {ok:true}. The three bad-label witnesses in the table have equal supplied labels on the given pair but unequal labels on its f-images. On P's empty positive list seed 0 is missing; C has P(0) but not P(f_0)=P(2); R has P(0) but not P(1). The all-one-class candidate with every name positive satisfies every axiom, so verify returns {ok:true}; it coarsens the least relation and cannot refute the countermodel claims. All six format refusals have the stated messages. These are expected results, not an assertion that you have executed them: attach your actual run and compare. If your runtime differs, first check use of original-index representatives rather than output-array positions.

**Finite satisfiability, infinite extension and elementary failure (4).** For any finite subset of the added b inequalities, take the printed quotient and append enough fresh points, distinct from its old domain and each other. On each new point put f(x)=x, E(x,y) iff x=y, and P false; retain all old interpretations, and make no E-relations between old and new points. Interpret the finitely constrained b's by distinct new points and any remaining b's arbitrarily. This satisfies T_s, because its P/f and E/f rules do not force new elements to join old classes. Compactness yields an infinite model. Independently, take the disjoint union Q_s⊔N with exactly those fixed-point interpretations on N and let b_i be its i-th fresh point. This is an explicit infinite extension as a substructure, unlike a generic compactness presentation.

Let r_1,…,r_k be the class representatives in the table (k=3,3,4 respectively). The old quotient satisfies ∀x(x=a_{r_1}∨⋯∨x=a_{r_k}), while the infinite extension does not. The existential formula ∃x∧_{j=1}^k x≠a_{r_j}, with parameters in the old structure, has no old witness but has a new one. The Tarski–Vaught test therefore fails. A finite structure has no proper elementary extension: an elementary extension must satisfy that same exhaustion sentence. Adding arbitrary many new distinct constants to its **elementary diagram** would thus not be finitely satisfiable; we added them only to T_s. This is why an infinite model of a theory containing a finite ground presentation is compatible with that presentation's finite model.

**Axiomatic construction (5).** D is a finite ordinal; Pairing and Union construct finite tuples and ordered pairs, Power Set supplies P(D) and a bounding set for relations, and Separation defines E*, classes and the quotient from the already specified finite relation. No AC is used. A finite induction implements the bounded closure; the general recursion theorem guarantees compatible histories of any fixed set-ordinal length. For V_ω the stages V_n are uniquely definable, so Replacement collects {V_n:n∈ω} and Union forms V_ω; Power Set supplies the successor stages. Merely writing an infinite union without the indexing set would leave a ZF construction unfinished.

**Proof and witness model (6).** For all three rows take π:Γ,A⇒B, σ:Δ⇒A, τ:Θ,B⇒C; replace the cut on A→B by σ cut π on A and then cut τ on B, preserving Γ,Δ,Θ as a multiset. The types and smaller cut ranks are the ones proved in the proof-reduction lesson. For each positive index i, f-preservation yields a proof q_i:P(a_{f_i}); the exact outputs f_i are in the table, so define h(i)=(f_i,(refl_{f_i},q_i)). Here refl is equality evidence on the finite index, and q_i is the derivation just described. Consequently g=λi.π_1(h i) and p=λi.π_2(h i) give a pair (g,p) inhabiting Σg:(I→D).Πi:I.(g(i)=f_i)×P(a_{g(i)}). The model is a dependent witness construction over finite indices; it does not produce a uniform halting decider or set-theoretic AC. The table together with P/f-preservation supplies every required finite witness.

**Arithmetic models (7).** P: Rosser gives T⊬R_T and T⊬¬R_T under consistency, effective axiomatizability and extension of Q. With the standard provability predicate and derivability conditions, the second theorem gives T⊬Con(T). Derive Con(T)→G exactly through □G→□¬□G and □G→□□G, hence □G→□⊥, as in the arithmetization lesson. These are syntactic assertions about arithmetic theories, while the code computes a bounded presentation. C: soundness gives N⊨T and truth of Con(T), since no actual contradictory T proof exists; hence N⊨T+Con(T) and the extension is consistent by soundness of the calculus. Soundness in the intended N is stronger than mere consistency, as R demonstrates. R: under Con(PA), U is consistent by the deduction-theorem/second-theorem argument in I1. U proves ¬Con(PA), while arithmetic proves Con(U)→Con(PA); adding Con(U) contradicts U. Since Con(PA) is true in standard N under the assumption, U's extra axiom is false there and U is not sound. No finite output proves Con(PA); the metatheoretic hypothesis remains explicit.

**Comparison and repair (8).** For each of the eight deliverables record “complete”, “repair” or “not attempted” and cite the supporting lines of your own worksheet. Repair 1 if an axiom or ground equation is missing; repair 2 if you rely only on a table for an all-model conclusion; repair 3 if actual runs/refusals or a differing output are absent; repair 4 if an infinite substructure extension is called elementary; repair 5 if a quotient needs an unproved representative choice or an infinite union lacks its indexing set; repair 6 if the cut contexts or witness types fail; repair 7 if consistency is silently replaced by soundness or bounded search by proof nonexistence. For 8 attach the comparison, revised arguments and exposure record. A useful completion has all required parts supplied or a named repair still open. These public criteria supply feedback, not a numerical grade or a claim of mastery. If a repair changes an earlier argument, check all later uses of it.

## Provenance and limits

The required native sources and their inline solutions are the substantive spine; the local construction proofs and LOG-ADV-P/C/R presentations supply the missing joined teaching and cumulative work. Mathematical content stays in Atlas. Existing reader and book identities, chapter hypotheses and learner-record meanings are preserved; this course creates no new notebook or private store. Its beta status and null workload do not promote either reference book's working edition or retained earlier PDF.

The countable Henkin proof, Tarski–Vaught argument, ZF set-ordinal recursion proof, specific cut transformation, substitution argument and positive-ground completeness proof are taught here. General cardinal completeness/LS forms, full first-order cut elimination, strong normalization's full candidate proof, ordinal analysis of PA and the general realizability theorem are explicitly imported from the named sources rather than established by finite computation. The ZF rank theorem is a separately stated imported theorem, not a result derived in the assigned native chapters. You still reconstruct their stated hypotheses and assigned examples. The course does not claim specialist forcing, descriptive-set regularity, determinacy or a full higher-type metatheory; those belong to the separately advertised specialist continuation. Public models, successful code and return declarations do not certify retained readiness, verified delay or whole-book qualification.
