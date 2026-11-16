
# Axioms, Choice, and Independence Without the Slogans

**Before reading.** Read [The Axioms of ZF](../books/introduction-to-logic-and-set-theory/zf-axioms.md), [Predicates, Quantifiers and Structures](../books/introduction-to-logic-and-set-theory/predicates-quantifiers-structures.md) and [Compactness, Löwenheim–Skolem and Applications](../books/introduction-to-logic-and-set-theory/compactness-lowenheim-skolem.md). These are preparation for the ideas used below.

An independence theorem is not a poll about which answer mathematicians prefer. It is a precise relationship among a formal language, a base theory, candidate extensions, models, and relative consistency assumptions. This deep dive builds that relationship using ZF/ZFC, the continuum hypothesis, constructibility, and forcing.

The article assumes a first course in logic: quantifiers, formal derivations,
structures and satisfaction, and the soundness and completeness theorems.
Transfinite recursion and model-theoretic language are reviewed only at the
level needed to state the independence architecture.

## 1. What is being axiomatized?

The first-order language of set theory has equality and one binary relation $\in$. Everything—numbers, functions, spaces, structures—is represented using sets. A model M of set theory supplies a domain and an interpretation of membership satisfying chosen axioms.

ZF’s major axioms/schemas have distinct jobs:

| Principle | Construction or control |
|---|---|
| Extensionality | sets are determined by members |
| Empty set | starts basic construction |
| Pairing | forms $\{a,b\}$ |
| Union | flattens one membership layer |
| Power set | collects all subsets represented in the model |
| Infinity | supplies an inductive set |
| Separation schema | cuts a definable subclass from an existing set |
| Replacement schema | collects a definable functional image of a set |
| Foundation | supplies ∈-minimal members and blocks ordinary cycles |

ZFC is ZF plus the axiom of choice.

Schemas matter: Separation and Replacement each stand for one axiom per first-order formula (with allowable parameters). ZF is recursively/effectively axiomatizable because formulas can be mechanically enumerated; it is not one finite sentence in the usual presentation.

### Russell’s paradox repaired, not ignored

The condition $x\notin x$ is a legitimate formula. The forbidden leap is unrestricted formation of $\{x:x\notin x\}$ over a universal collection. Separation only forms $\{x\in A:x\notin x\}$ inside an existing set A. If that set belonged to itself, the usual contradiction would show it cannot equal the hypothesized universal collector; the predicate did not become meaningless.

## 2. Internal power sets and external models

If M⊨ZF and $a\in M$, the object M calls $P(a)$ contains exactly the subsets of a that exist **in M**. From outside M, there may be subsets of the external collection represented by a that are not elements of M.

This distinction is essential in countable models. Externally countable M can satisfy “P(ω) is uncountable” internally because there is no bijection **inside M** witnessing countability. An external enumeration of M is not necessarily an object or function of M.

The power-set axiom is therefore not falsified by the existence of a countable model. Its quantifiers range over the model.

## 3. Ordinals organize construction

Von Neumann ordinals are transitive sets well ordered by membership, with every member also a subset. Each ordinal α is the set of smaller ordinals.

- successor: $\alpha+1=\alpha\cup \{\alpha\}$;
- limit: a nonzero ordinal not a successor, such as ω;
- transfinite recursion: define $F(\alpha)$ from values $F↾\alpha$;
- transfinite induction: if $[\forall \beta<\alpha P(\beta)]\Rightarrow P(\alpha)$, then P holds for every ordinal.

The class of all ordinals cannot be a set in ZF. If it were an ordinal Ω, then Ω∈Ω+1 and Ω+1 would be a larger ordinal still inside “all ordinals,” contradiction to its alleged totality/bounding role (Burali–Forti phenomenon).

Cardinals can be represented in ZFC by initial ordinals. Without choice, cardinal comparison and representation need more care; not every set is provably well-orderable.

## 4. The axiom of choice and equivalents

AC states that for every set X of nonempty sets, a function f on X exists with $f(A)\in A$ for every $A\in X$. Over ZF it is equivalent to:

- every set can be well ordered;
- Zorn’s lemma;
- the product of any family of nonempty sets is nonempty.

Many familiar theorems use some choice: every vector space has a basis, Tychonoff’s theorem for arbitrary products, and maximal-ideal existence in common formulations. Some require weaker choice principles; exact reverse implications depend on formulation.

Finite choice is provable in ZF by iterating finitely many nonempty selections. Countable choice and dependent choice sit between many constructive/basic principles and full AC. “Uses choice” should name how much.

The type-theoretic theorem that $\Pi x \sum y R(x,y)$ yields a function choosing y merely projects already supplied witnesses. It is not automatically full set-theoretic AC for arbitrary extensional quotient sets.

## 5. Worked logical audit: consistency, satisfiability, and independence

**Worked example.**

Let T be a first-order theory and φ a sentence.

- T is syntactically consistent if $T⊬\perp$.
- T is satisfiable if some model satisfies every axiom.
- φ is independent of T if $T⊬\phi$ and $T⊬\neg \phi$.

By first-order soundness and completeness in the surrounding metatheory, consistency and satisfiability align for ordinary first-order theories. But an independence proof usually provides **relative** statements:

$Con(T) \Rightarrow Con(T+\phi)$ and $Con(T) \Rightarrow Con(T+\neg \phi)$.

If T is inconsistent, both extensions are inconsistent and syntactically prove everything. The conditional base matters.

Gödel’s second incompleteness theorem prevents a sufficiently strong consistent effective T from proving its own suitably represented consistency. Consequently, a proof formalizable within weak metatheory must be explicit about where the assumption $Con(T)$ lives.

## 6. The continuum hypothesis

CH states there is no cardinal strictly between the natural numbers and real numbers:

$$2^{\aleph_{0}}=\aleph_{1}$$

under the standard ZFC cardinal notation. Cantor proved the continuum is strictly larger than the naturals; CH asks whether it is the next well-ordered infinite cardinal.

The correct independence summary is conditional:

- Gödel constructed the inner model L and showed, in particular, that if ZF has a model/ is consistent in the appropriate relative sense, then ZF+AC+GCH is relatively consistent. Hence CH cannot be refuted from ZFC if ZFC is consistent.
- Cohen developed forcing and showed relative consistency of ZFC+¬CH; hence CH cannot be proved from ZFC if ZFC is consistent.

Together: if ZFC is consistent, then both ZFC+CH and ZFC+¬CH are consistent, so CH is independent of ZFC.

This does not say CH lacks a truth value in every philosophical conception of sets, nor that it is meaningless. It says the formal axioms ZFC do not decide it, conditional on consistency.

## 7. The constructible universe L

L is built in stages:

- $L₀=\varnothing$;
- $L_{\alpha+1}=Def(L_\alpha)$, subsets of $L_\alpha$ definable over that stage with parameters;
- at limit λ, $L_\lambda=\bigcup_{\alpha<\lambda}L_\alpha$;
- $L=\bigcup_\alpha L_\alpha$.

L is an inner model: a transitive class containing all ordinals and satisfying ZF; moreover it satisfies AC and GCH. If V=L is added as an axiom, every set is constructible.

One cannot infer “all sets really are constructible” from the relative consistency result. L demonstrates a model in which ZFC+GCH holds and gives a canonical inner universe for analysis.

## 8. Forcing: what the outline does and omits

A forcing notion P is a partially ordered set of conditions representing finite/partial information. A filter G is **generic** over a ground model M if it meets specified dense subsets of P belonging to M. Names in M are interpreted using G to form an extension $M[G]$.

The forcing relation

$$p \Vdash \phi$$

is defined inside the ground-model framework and connects conditions to truth in generic extensions through the forcing theorem. Carefully designed P preserves the desired axioms/cardinals while adding an object, such as a new subset of ω, that changes the truth of a target sentence.

Pedagogical accounts often begin with a countable transitive model M so an external construction can enumerate its dense sets and build G. The existence of such a model is stronger than bare $Con(ZFC)$ in the surrounding metatheory. Relative consistency proofs can be organized through Boolean-valued models or syntactic methods without claiming that Con(ZFC) proves a countable transitive model exists. Do not conflate the classroom picture with the exact minimal consistency theorem.

## 9. Forcing and AC independence

Cohen’s methods, together with symmetric submodels, produce models of ZF in which AC fails, yielding $Con(ZF)\Rightarrow Con(ZF+\neg AC)$ under the standard relative-consistency reading. Gödel’s L gives $Con(ZF)\Rightarrow Con(ZF+AC)$. Thus AC is independent of ZF if ZF is consistent.

Ordinary forcing extensions of a ZFC ground model typically satisfy AC; obtaining failure of choice uses a symmetric submodel or related construction, not merely “add a generic set and choice disappears.”

## 10. Absoluteness and statement drift

A formula may be absolute between a transitive model and the surrounding universe under suitable hypotheses, meaning both compute the same truth. Other notions—cardinality, power set, countability—can change.

Independence arguments depend on preserving the exact formal sentence. An informal phrase can conceal parameters or shift between “there exists externally” and “the model satisfies there exists.” Audit:

1. object language and base theory;
2. internal versus external quantifiers;
3. the exact sentence φ;
4. model construction and preserved axioms;
5. relative consistency assumption;
6. whether stronger set-existence assumptions entered the metatheory.

## 11. Other independence phenomena

Independence is not unique to CH.

- Goodstein’s theorem is true in standard natural numbers but not provable in first-order Peano arithmetic, assuming consistency in the relevant stronger analysis.
- Paris–Harrington strengthens finite Ramsey theory and is independent of PA.
- Suslin’s hypothesis is independent of ZFC.
- Large-cardinal axioms extend ZFC with increasing consistency strength and powerful consequences; their own consistency cannot generally be established within the theories they strengthen.

Each statement has specific hypotheses and proof history. “Gödel says no axiom system can settle mathematics” is false: particular theories can be complete, and extending an incomplete theory decides some previous sentences while new undecidable ones may arise under incompleteness hypotheses.

## Exercises

<a id="deep-dive-axioms-choice-independence-ex-1"></a>

### Exercise 1

1. Explain why Replacement cannot be replaced merely by Separation when constructing a long sequence of outputs not already known to lie inside one set.

<details>
<summary>Hint 1</summary>

Separation begins with an already available set and filters its members.
</details>

<details>
<summary>Hint 2</summary>

Replacement instead collects the outputs of a definable function on a set; ask where a bound for those outputs would come from.
</details>

<details>
<summary>Solution</summary>

Separation only selects members of a prior bounding set A. Replacement asserts that a definable functional image of a set of indices is itself bounded/collected as a set, enabling transfinite ranges whose bound was not previously available.

</details>

<a id="deep-dive-axioms-choice-independence-ex-2"></a>

### Exercise 2

2. State CH as a cardinal equation and explain where AC enters that notation.

<details>
<summary>Hint 1</summary>

Write the continuum cardinal as a power of the natural-number cardinal.
</details>

<details>
<summary>Hint 2</summary>

Express CH by comparing that power with the next aleph, then identify the well-ordering convention used in ZFC.
</details>

<details>
<summary>Solution</summary>

$2^{\aleph_{0}}=\aleph_{1}$. Identifying every cardinal with an initial ordinal and comparing all sets cleanly uses well-orderability supplied by AC/ZFC; formulations over ZF need more care.

</details>

### Further exercises

3. Diagnose: “Because M is countable, M has a bijection between its naturals and its reals.”
4. What two relative consistency directions establish independence of φ from T?
5. Why does an ordinary forcing extension of a ZFC model not by itself demonstrate $\neg AC$?
6. Explain why L establishes compatibility of CH with ZFC rather than truth of CH in every model.
7. Distinguish $Con(ZFC)$ from “there exists a countable transitive model of ZFC.”
8. A proof uses Zorn’s lemma. Under ZF, what foundational assumption should be recorded?
9. Why may an external generic construction enumerate dense sets of countable M even though M does not contain that enumeration?
10. What is wrong with using CH in one lemma and ¬CH in another lemma of the same unqualified ZFC proof?

## Solutions


3. External countability supplies a bijection in the surrounding metatheory, not necessarily a function belonging to M. M’s internal quantifiers over functions do not see it.
4. $Con(T)\Rightarrow Con(T+\phi)$ and $Con(T)\Rightarrow Con(T+\neg \phi)$, together with appropriate soundness/completeness metatheory, show neither side is provable if T is consistent.
5. Standard forcing extensions preserve ZFC, including choice. Failure of AC typically appears in a symmetric inner submodel where only suitably symmetric names are retained.
6. L is a model/inner-model construction satisfying ZFC+GCH under the relative hypothesis. Other forcing extensions satisfy ¬CH. One model cannot establish universal truth across all models.
7. A countable transitive model is a particular well-founded model-existence assertion stronger than the arithmetical consistency statement. Bare consistency, via completeness, supplies some model but not necessarily a well-founded/transitive one.
8. Zorn’s lemma is equivalent to AC over ZF, so the theorem is a ZFC result unless a weaker specialized choice principle suffices and is proved.
9. The enumeration exists outside M because M is externally countable. It need not be coded by any object of M; external construction deliberately uses the metatheory’s viewpoint.
10. The lemmas live in incompatible extensions unless each conclusion is explicitly conditional and later combined in a logically valid metatheoretic statement. Independence does not license both assumptions simultaneously.

## Sources and continuation

For standard context see the [Stanford Encyclopedia entry on the continuum hypothesis](https://plato.stanford.edu/entries/continuum-hypothesis/) and [set theory](https://plato.stanford.edu/entries/set-theory/). Cohen’s primary announcements are [*The Independence of the Continuum Hypothesis I*](https://doi.org/10.1073/pnas.50.6.1143) and [II](https://doi.org/10.1073/pnas.51.1.105). Future Atlas material should develop Boolean-valued models, symmetric extensions, absoluteness, descriptive set theory, inner-model theory, large cardinals, determinacy, forcing axioms, reverse mathematics, and philosophy of new axioms at specialist depth.
