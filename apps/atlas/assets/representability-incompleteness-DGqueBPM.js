var e=`---
parent_id: book-introduction-to-logic-and-set-theory
chapter_id: representability-incompleteness
title: "Representability and Gödel's Incompleteness Theorems"
level: advanced-undergraduate
license: "CC BY-SA 4.0"
---

# Representability and Gödel's Incompleteness Theorems {#section-1-representability-and-g-del-s-incompleteness-theorems}

First-order completeness says that every semantic consequence of a theory has a formal proof. Incompleteness says that a suitable consistent arithmetic theory does not decide every sentence in its own language. These are compatible statements. A theory can have models that disagree about one sentence, so neither that sentence nor its negation follows from the axioms, while every consequence that does follow remains provable.

The bridge from computation to arithmetic is coding. Expressions and derivations are finite objects. Effective operations on those objects become operations on natural numbers, and arithmetic formulas can describe those operations. A fixed-point construction then produces a sentence connected, by an actual provable equivalence, with a statement about its own code. No informal claim that a sentence “talks about itself” substitutes for that construction.

We use classical first-order arithmetic with symbols $0,S,+,\\times$, actual equality and nonempty domains. The standard natural-number structure is denoted $\\mathbb N$. A numeral $\\bar n$ is the closed term obtained by applying successor $n$ times to zero. Robinson arithmetic $Q$ is the finitely axiomatized theory expressing successor injectivity, zero not being a successor, every nonzero element being a successor, and the defining zero and successor equations for addition and multiplication. It has no induction schema. Peano arithmetic PA adds induction for every arithmetic formula, with parameters universally closed.

<a id="section-7-codes-do-not-change-the-level-of-a-statement"></a>
## Codes do not change the level of a statement {#section-9-codes-do-not-change-the-level-of-a-statement}

Fix an effective coding of finite symbol strings, terms, formulas and finite proof records by natural numbers. Syntax checking and substitution are computable; with standard sequence coding they can be made primitive recursive. A code is a number, while the expression it names is a syntactic object in our metatheory. Write $\\ulcorner\\varphi\\urcorner$ for the number coding $\\varphi$ and $\\overline{\\ulcorner\\varphi\\urcorner}$ for the numeral naming that number inside arithmetic.

A theory $T$ is computably enumerable, or effectively axiomatized here, if an algorithm lists its nonlogical axioms. Listing need not decide whether an arbitrary sentence is an axiom. To obtain a decidable proof-record predicate, attach to each axiom use a finite certificate showing when it appears in the enumeration. Checking that bounded computation terminates and verifies the use. Thus a code for a proof includes enough finite evidence to check every step without an unbounded wait for an axiom to appear.

This yields a primitive recursive relation $\\operatorname{Proof}_T(p,q)$ saying that $p$ is a correctly certified $T$-proof of the sentence with code $q$. The corresponding arithmetic formula defines
$$\\operatorname{Prov}_T(q)\\equiv\\exists p\\,\\operatorname{Proof}_T(p,q).$$
The same notation is often used for the external relation and its representing formula; the context and presence of numerals must make the distinction clear. The standard provability formula can be chosen $\\Sigma^0_1$, with finite computation witnesses absorbed into its existential number variables.

**Theorem 12.1 (Arithmetic coding; cited input).** Primitive recursive relations have numeralwise correct representations in $Q$: for each tuple of standard numbers, $Q$ proves the corresponding true instance and proves the negation of the corresponding false instance. For the total primitive recursive substitution/diagonal function $d$, there is a formula $D(x,y)$ such that, for every standard $n$,
$$Q\\vdash\\forall y\\,[D(\\bar n,y)\\leftrightarrow y=\\overline{d(n)}].$$
This last condition gives the fixed-input uniqueness needed below. It is stronger than merely asserting that the graph has the intended interpretation in $\\mathbb N$.

The coding theorem requires a substantial construction of sequence coding and represented arithmetic operations. It is an explicit imported theorem in this chapter, rather than a proof hidden in the words “encode the syntax”. The Open Logic Project's treatment of representability in $Q$ is a source for that construction. Our subsequent fixed-point and unprovability arguments prove exactly what follows from the stated input.

**Worked example 12.1 (A number is not its numeral).** Let a formula have code $137$ in some chosen coding. The external assertion “its code is 137” is about a finite string and a natural number. Inside arithmetic, the term $\\overline{137}$ names that number; it is not the string of the original formula. Substituting that numeral into a formula about codes creates a new formula, usually with a different code. Consequently the informal instruction “put the sentence into itself” must be replaced by an effective operation taking a formula code to the code of a numeral-substitution instance. This is what the function $d$ records. The particular integer is illustrative; no canonical coding value is being asserted.

<a id="section-25-the-diagonal-lemma-with-its-substitutions-visible"></a>
## The diagonal lemma, with its substitutions visible {#section-27-the-diagonal-lemma-with-its-substitutions-visible}

For a code $n$ of a formula $\\delta(x)$ with one designated free variable, let $d(n)$ be the code of $\\delta(\\bar n)$. Assign a harmless default code on invalid inputs so that $d$ is total. Use capture-avoiding substitution, renaming bound variables when necessary. Auxiliary variables in the following construction are chosen fresh.

**Theorem 12.2 (Diagonal lemma).** For every arithmetic formula $\\theta(z)$ with one designated free variable, there is a sentence $G$ such that
$$Q\\vdash G\\leftrightarrow\\theta(\\overline{\\ulcorner G\\urcorner}).$$
The formula may contain fixed closed parameters already represented by terms.

*Proof.* Using the representing formula $D$ for $d$, set
$$\\delta(x)\\equiv\\exists y\\,[D(x,y)\\land\\theta(y)].$$
Choose $y$ fresh and perform any required bound-variable renaming in $\\theta$. Let $n=\\ulcorner\\delta\\urcorner$, and let $G$ be the sentence $\\delta(\\bar n)$. By definition, $d(n)=\\ulcorner G\\urcorner$. The coding theorem gives
$$Q\\vdash\\forall y\\,[D(\\bar n,y)\\leftrightarrow y=\\overline{\\ulcorner G\\urcorner}].$$
Substitute this equivalence into the definition of $G$. First-order equality and existential rules give
$$Q\\vdash G\\leftrightarrow\\exists y\\,[y=\\overline{\\ulcorner G\\urcorner}\\land\\theta(y)]
\\leftrightarrow\\theta(\\overline{\\ulcorner G\\urcorner}).$$
The last equivalence follows by taking the named number as a witness in one direction and substituting equals in the other. This proves the assertion. ∎

The construction is syntactic. It does not assume that $T$ proves every truth about its models, nor that there is a truth predicate for arithmetic. A fixed point for a particular formula is different from a predicate deciding truth for all sentences. The same mechanism can be applied to provability because provability has a computable proof-record description.

<a id="section-44-what-consistency-alone-proves-about-the-g-del-sentence"></a>
## What consistency alone proves about the Gödel sentence {#section-46-what-consistency-alone-proves-about-the-g-del-sentence}

Let $T$ be a consistent computably enumerable theory extending $Q$. Apply the diagonal lemma to $\\neg\\operatorname{Prov}_T(z)$ and obtain
$$T\\vdash G\\leftrightarrow\\neg\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner}).$$
Consistency means $T$ has no derivation of a contradiction in the fixed classical calculus. It does not mean that every theorem of $T$ is true in $\\mathbb N$.

**Theorem 12.3.** Under these hypotheses, $T\\nvdash G$.

*Proof.* Suppose there were a $T$-proof of $G$, with standard certified code $p$. Numeralwise correctness of the proof predicate gives
$$Q\\vdash\\operatorname{Proof}_T(\\bar p,\\overline{\\ulcorner G\\urcorner}),$$
so $T$ proves the existential statement $\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner})$. But the supposed proof of $G$, together with its fixed-point equivalence, also gives the negation of that statement in $T$. This contradicts consistency. ∎

In the standard natural numbers there is therefore no proof code for $G$. Hence $\\mathbb N$ satisfies its unprovability statement. Since $Q$ is true in $\\mathbb N$, the fixed-point equivalence is true there too, and $G$ is true in $\\mathbb N$. This external truth conclusion concerns this constructed sentence and the stated consistency hypothesis; it does not establish that every theorem of $T$ is true.

To conclude $T\\nvdash\\neg G$ for this ordinary Gödel sentence, strengthen the hypothesis. A theory is $\\Sigma^0_1$-sound if every $\\Sigma^0_1$ sentence it proves is true in $\\mathbb N$. If $T$ proved $\\neg G$, the fixed-point equivalence and classical logic would make it prove $\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner})$, a $\\Sigma^0_1$ sentence. But Theorem 12.3 shows that statement is false in $\\mathbb N$. Thus $\\Sigma^0_1$-soundness rules out the negative proof as well.

The older sufficient condition of $\\omega$-consistency also rules it out: it forbids proving $\\exists p\\,P(p)$ while proving $\\neg P(\\bar n)$ for every standard numeral. If $T$ proved $\\neg G$, it would prove that some proof code exists, while numeralwise checking refutes each particular standard code because no actual proof exists. Ordinary consistency does not itself rule out this pattern in a nonstandard model.

**Worked example 12.4 (Where the stronger hypothesis enters).** A proposed argument says: “$T$ proves that there exists a proof of $G$, so extract that proof and contradict consistency.” Formal existential provability need not provide a standard witness that can be extracted externally. A nonstandard model may satisfy the existential through a nonstandard element it regards as a proof code. The correct positive-direction proof above began with an actual external finite derivation and its standard code. The negative-direction argument instead needs $\\Sigma^0_1$-soundness or $\\omega$-consistency to bridge the gap. Reversing those two uses of existence would silently strengthen the theory's reliability assumption.

<a id="section-64-the-stronger-first-theorem-and-the-second-theorem"></a>
## The stronger first theorem and the second theorem {#section-66-the-stronger-first-theorem-and-the-second-theorem}

**Theorem 12.5 (Gödel–Rosser, cited).** Every consistent computably enumerable extension of $Q$ is incomplete: there is a sentence $R$ for which $T\\nvdash R$ and $T\\nvdash\\neg R$.

Rosser's modification compares codes for a proof of a sentence and a proof of its negation. Its construction removes the extra reliability hypothesis required for the negative direction of the ordinary Gödel sentence. We cite this theorem; the preceding argument is not presented as a proof of the Rosser strengthening. In particular the sentence $R$ should not silently be identified with our particular $G$.

For the second theorem, write $\\operatorname{Con}(T)$ for the standard arithmetic assertion that there is no certified $T$-proof of a fixed contradiction, such as $0=1$. The choice of a standard proof predicate matters. An arbitrary formula christened “consistency” need not have the requisite properties.

**Theorem 12.6 (Second incompleteness, cited form).** If $T$ is a consistent computably enumerable extension of PA, with its standard arithmetised provability predicate, then $T\\nvdash\\operatorname{Con}(T)$.

The standard proof formalises syntactic reasoning and uses derivability conditions: proofs can be internalised, provability respects implication, and provability of a sentence yields provability of its provability. Establishing these uniformly inside arithmetic is additional work beyond the fixed-numeral representability input stated earlier. We therefore cite the second theorem rather than pretending that Theorem 12.3 already proves it. We use the PA-extension form to keep the internal coding strength explicit.

A stronger theory may prove consistency of a weaker one. A finite verification may prove that no proof below a given length exists. Neither is prohibited. The theorem excludes the designated internal consistency proof by the theory itself under the stated hypotheses. It does not show that mathematics is inconsistent, or that any contradiction is tolerable, or that every question asked in mathematics is undecidable.

**Worked example 12.7 (Completeness and incompleteness together).** Suppose $T$ meets the Gödel–Rosser hypotheses and $R$ is its undecided sentence. Both $T\\cup\\{R\\}$ and $T\\cup\\{\\neg R\\}$ are consistent: an inconsistency in either extension would, by discharge and classical negation, give a decision of $R$ in $T$. First-order completeness therefore gives a model of each extension. The models disagree about $R$. Completeness has supplied models of consistent theories exactly as promised; incompleteness has explained why the original axioms do not select one answer. No contradiction between the two theorem names remains.

<a id="section-80-reading-a-metamathematical-claim"></a>
## Reading a metamathematical claim {#section-82-reading-a-metamathematical-claim}

For any incompleteness assertion, identify the language, the axiom enumeration, the arithmetic strength and the consistency or soundness hypothesis. Ask whether the claim concerns a specific Gödel sentence or merely the existence of some undecidable sentence. Ask whether “true” means true in standard $\\mathbb N$ or true in an arbitrary model. Finally ask which imported coding theorem supports the proof predicate being used.

These questions also prevent misplaced applications. A complete theory of one fixed finite structure need not encode enough arithmetic. The full true theory of $\\mathbb N$ is complete and consistent but is not computably enumerable. A theory with infinitely many axioms may still be effectively axiomatized; finiteness is not required. Removing any one hypothesis can remove the conclusion, and naming the theorem does not restore a missing hypothesis.

<a id="section-86-exercises"></a>
## Exercises {#section-88-exercises}

<a id="representability-incompleteness-ex1"></a>
**Exercise 12.1.** Distinguish a formula, its code and the numeral naming its code in one explicit schematic example.

<details>
<summary>Hint 1</summary>

Use $0=0$ as the formula, without assuming a numerical coding value.

</details>
<details>
<summary>Hint 2</summary>

The code belongs to the metatheory; the numeral is an arithmetic term.

</details>
<details>
<summary>Solution</summary>

Let $a$ be the chosen natural-number code of the string $0=0$. The formula $0=0$ is a syntactic expression. The number $a=\\ulcorner0=0\\urcorner$ is its external code. The closed term $\\bar a$ is a string of successor symbols followed by zero that names this number inside arithmetic. A formula such as $\\operatorname{Prov}_T(\\bar a)$ is another arithmetic expression, asserting that the number named by the term codes a provable sentence. None of these three objects is interchangeable. No particular numerical value for $a$ can be supplied until an encoding has been fixed.

</details>

<a id="representability-incompleteness-ex2"></a>
**Exercise 12.2.** Why does an enumerated axiom set require certificates in the decidable proof-record predicate?

<details>
<summary>Hint 1</summary>

Waiting for an axiom to appear need not terminate when it is absent.

</details>
<details>
<summary>Hint 2</summary>

A finite stage of an enumeration can be checked by bounded simulation.

</details>
<details>
<summary>Solution</summary>

A bare line marked “axiom of $T$” may require running the enumeration indefinitely to verify that it appears. If it never appears, that proposed check would not halt. Instead a proof record includes a stage or finite computation certificate at which the axiom was listed. The checker simulates only the certified finite computation and verifies the claimed output. Incorrect certificates fail in finite time; correct uses have some finite certificate. Thus valid derivations still have codes, but checking a proposed proof record becomes decidable and can be arranged primitive recursive with standard finite computation coding.

</details>

<a id="representability-incompleteness-ex3"></a>
**Exercise 12.3.** Reconstruct the diagonal lemma for $\\theta(z)=\\neg\\operatorname{Prov}_T(z)$, naming $\\delta$, $n$ and $G$ separately.

<details>
<summary>Hint 1</summary>

Let $D$ represent the diagonal substitution function.

</details>
<details>
<summary>Hint 2</summary>

The code of $G$ is $d(n)$, not necessarily $n$.

</details>
<details>
<summary>Solution</summary>

Set $\\delta(x)=\\exists y[D(x,y)\\land\\neg\\operatorname{Prov}_T(y)]$, choose $n=\\ulcorner\\delta\\urcorner$, and set $G=\\delta(\\bar n)$. Then $d(n)=\\ulcorner G\\urcorner$. Fixed-input functional representability gives $Q\\vdash\\forall y(D(\\bar n,y)\\leftrightarrow y=\\overline{\\ulcorner G\\urcorner})$. Substitution into $G$ and equality reasoning yield $Q\\vdash G\\leftrightarrow\\neg\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner})$. Fresh auxiliary variables avoid capture. The argument constructs a provable equivalence; it does not assert literal textual identity between $G$ and the displayed unprovability formula.

</details>

<a id="representability-incompleteness-ex4"></a>
**Exercise 12.4.** Identify the exact contradiction if a consistent $T$ proves its ordinary Gödel sentence $G$.

<details>
<summary>Hint 1</summary>

An actual proof has a standard finite code.

</details>
<details>
<summary>Hint 2</summary>

The fixed-point equivalence supplies the opposite provability assertion.

</details>
<details>
<summary>Solution</summary>

Suppose $p$ codes a real $T$-proof of $G$. Numeralwise verification yields $Q\\vdash\\operatorname{Proof}_T(\\bar p,\\overline{\\ulcorner G\\urcorner})$, hence $T\\vdash\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner})$. The supposed proof of $G$ and the provable equivalence also give $T\\vdash\\neg\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner})$. These two derivations contradict syntactic consistency. No assumption that all theorems of $T$ are standardly true is needed for this direction; the standard finite proof supplies the concrete witness used by arithmetic.

</details>

<a id="representability-incompleteness-ex5"></a>
**Exercise 12.5.** Explain why the negative direction for $G$ follows from $\\Sigma^0_1$-soundness and why consistency alone is not the same hypothesis.

<details>
<summary>Hint 1</summary>

A proof of $\\neg G$ would imply an existential provability sentence.

</details>
<details>
<summary>Hint 2</summary>

Use the already established absence of an actual proof of $G$.

</details>
<details>
<summary>Solution</summary>

By classical logic and the fixed-point equivalence, $T\\vdash\\neg G$ would imply $T\\vdash\\operatorname{Prov}_T(\\overline{\\ulcorner G\\urcorner})$. This is a $\\Sigma^0_1$ sentence and is false in $\\mathbb N$, because consistency has already ruled out any actual proof of $G$. Thus $\\Sigma^0_1$-soundness excludes the negative derivation. Mere consistency prohibits deriving a formula together with its negation; it does not prohibit every false existential arithmetic theorem. Rosser's theorem obtains an undecided sentence from consistency alone by changing the construction, not by declaring consistency equivalent to soundness.

</details>

<a id="representability-incompleteness-ex6"></a>
**Exercise 12.6.** Does first-order completeness imply that every arithmetic sentence is decided by PA? Give a complete model-theoretic diagnosis.

<details>
<summary>Hint 1</summary>

Completeness concerns consequences, not every sentence indiscriminately.

</details>
<details>
<summary>Hint 2</summary>

A sentence can vary among models of the same theory.

</details>
<details>
<summary>Solution</summary>

No. Completeness says that if every model of PA satisfies a sentence, PA proves it. It does not say every sentence is either true in all those models or false in all of them. Assuming PA consistent, Gödel–Rosser gives an undecided sentence $R$. Both PA plus $R$ and PA plus its negation are consistent, so completeness gives models of each. They disagree about $R$, and hence neither sign is a semantic consequence of PA. The semantic completeness theorem and the syntactic incompleteness theorem therefore make compatible assertions about different kinds of completeness.

</details>

<a id="representability-incompleteness-ex7"></a>
**Exercise 12.7.** Explain why the complete true theory of $\\mathbb N$ does not refute incompleteness.

<details>
<summary>Hint 1</summary>

For each sentence it contains exactly the true sign.

</details>
<details>
<summary>Hint 2</summary>

Check effective axiomatization among the theorem's hypotheses.

</details>
<details>
<summary>Solution</summary>

The set of all arithmetic sentences true in $\\mathbb N$ is consistent and decides every sentence, since classical semantics makes exactly one of a sentence and its negation true. It contains $Q$. If this entire true theory were computably enumerable, it would meet the Gödel–Rosser hypotheses and would have an undecided sentence, contradicting its definition. Therefore it is not computably enumerable. The example does not refute the theorem; it demonstrates the necessity of the effectiveness hypothesis. Writing “take all truths as axioms” specifies a set semantically but does not give the required algorithmic enumeration.

</details>

<a id="representability-incompleteness-ex8"></a>
**Exercise 12.8.** State a form of the second theorem used here and give two consistency assertions it does not prohibit proving.

<details>
<summary>Hint 1</summary>

Keep the theory and its standard proof predicate fixed.

</details>
<details>
<summary>Hint 2</summary>

Consider a weaker theory or a finite proof-length bound.

</details>
<details>
<summary>Solution</summary>

For a consistent computably enumerable extension $T$ of PA with its standard provability predicate, the theorem says $T$ does not prove the arithmetic assertion that no $T$-proof of a fixed contradiction exists. It does not prohibit a stronger theory from proving consistency of $T$, provided that stronger theory has the requisite resources. It also does not prohibit verifying that none of the finitely many strings below a specified finite length is a contradiction proof: that is a finite calculation. Neither statement is the unrestricted internal consistency assertion excluded by the theorem. The conclusion is sensitive to both the theory and the chosen formalisation.

</details>

<a id="representability-incompleteness-ex9"></a>
**Exercise 12.9.** If $T$ is complete and computably enumerable, prove its theorem set is decidable, assuming consistency and classical negation.

<details>
<summary>Hint 1</summary>

Enumerate certified proofs of both signs of the input sentence.

</details>
<details>
<summary>Hint 2</summary>

Completeness guarantees one appears, and consistency prevents both.

</details>
<details>
<summary>Solution</summary>

On a well-formed sentence $\\varphi$, enumerate all finite certified $T$-proofs, looking simultaneously for conclusions $\\varphi$ and $\\neg\\varphi$. Syntactic completeness guarantees that one of these has a proof. Consistency prevents both. Accept if the positive sign appears and reject if the negative sign appears. This procedure therefore terminates and decides theoremhood. The consistency and completeness here are properties of $T$, not merely of first-order logic. For theories extending $Q$, the Gödel–Rosser theorem rules out the simultaneous hypotheses, while weaker complete effective theories can satisfy them.

</details>

<a id="representability-incompleteness-ex10"></a>
**Exercise 12.10.** A student says “my proof of $\\operatorname{Con}(T)$ disproves Gödel”. Give a model response and a checklist of mathematical questions that makes the claim assessable.

<details>
<summary>Hint 1</summary>

Ask which axioms the purported proof actually uses.

</details>
<details>
<summary>Hint 2</summary>

Ask whether the asserted consistency formula is the standard one for the same theory.

</details>
<details>
<summary>Solution</summary>

A model response is: first specify $T$, its effective axiom enumeration, the calculus and the proof predicate. Then identify every axiom used in the purported derivation and check whether each belongs to $T$ rather than a stronger metatheory. State exactly which arithmetic sentence is called $\\operatorname{Con}(T)$ and whether it expresses absence of certified proofs of the fixed contradiction. Finally verify the consistency and arithmetic-strength hypotheses. A proof from stronger axioms, a finite bound, or a different formula need not contradict the theorem. This rubric gives concrete ways to assess the claim without assuming either that it is correct or that the theorem applies to every use of the word consistency.

</details>

<a id="section-308-summary"></a>
## Summary {#section-310-summary}

Arithmetic coding represents finite syntax and proof checking. With a stated representability theorem, the diagonal lemma constructs a genuine fixed-point equivalence. Consistency excludes a proof of the ordinary Gödel sentence; the negative direction for that sentence needs an additional hypothesis such as $\\Sigma^0_1$-soundness. The cited Gödel–Rosser theorem obtains incompleteness from consistency alone. The cited second theorem concerns a theory's own standard consistency statement under stronger internal coding assumptions. None conflicts with first-order semantic completeness.

<a id="section-312-sources-and-further-reading"></a>
## Sources and further reading {#section-314-sources-and-further-reading}

This chapter expands the incompleteness contracts in the preserved [Logic Foundations reference](../logic-foundations-proof-reference.md). The [Open Logic Project](https://builds.openlogicproject.org/open-logic-complete.pdf), sections on representability in $Q$ and incompleteness, supplies the imported coding theorem and the full proofs not reproduced here. Wolfgang Schwarz's author-written [Incompleteness notes](https://www.umsu.de/logic3/09-incompleteness.html) discuss the fixed-point distinction. For the consistency-only strengthening, see Barkley Rosser, [“Extensions of some theorems of Gödel and Church”](https://www.cambridge.org/core/journals/journal-of-symbolic-logic/article/abs/extensions-of-some-theorems-of-godel-and-church/0461E34DC1F219C459EE84CC2FA89068), *Journal of Symbolic Logic* 1 (1936), 87–91. Deep cited inputs are identified in the text.
`;export{e as default};