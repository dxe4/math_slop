
# Ordinal Analysis and Gentzen's Consistency Argument {#section-1-ordinal-analysis-and-gentzen-s-consistency-argument}

A finite proof can describe an unbounded induction. Reducing that proof may duplicate subproofs or replace one induction by many smaller instances, so ordinary proof length need not decrease. Ordinal analysis supplies another measure: a notation for an ordinal that decreases when the relevant reduction is performed. Termination then depends on a well-foundedness or induction principle for that notation system.

The distinction between the reduction theorem and its termination principle is essential. Gentzen's consistency result for Peano arithmetic is not an internal proof of arithmetic's own consistency from no additional assumptions. It is a relative metamathematical theorem. This chapter proves the elementary ordinal constructions and the logical implications of the stated reduction input. The detailed assignment of ordinals to arbitrary PA derivations is a named imported result, rather than a proof concealed in the phrase assign decreasing ordinals.

Required preparation is ordinal induction and recursion from [Introduction to Logic and Set Theory](#/books/introduction-to-logic-and-set-theory), together with the fixed proof-predicate and incompleteness conventions of [Incompleteness and Arithmetization](chapter-13.md). We use classical ambient set theory to justify ordinary ordinal facts. When an argument is formalised in weak arithmetic, we identify its coded objects and extra induction schema separately.

<a id="section-7-notations-and-the-ordinals-they-denote"></a>
## Notations and the ordinals they denote {#section-9-notations-and-the-ordinals-they-denote}

An ordinal is a set-theoretic well-order type. A notation is a finite syntactic object intended to name one. The relation between them must be defined and proved order preserving; a natural number coding a notation is not itself the transfinite ordinal. A program can compare finite codes without proving that the represented order has no infinite descending sequence.

For ordinals below the first epsilon number, use finite hereditary Cantor normal forms. A nonzero term has the shape
$$\omega^{a_0}c_0+\omega^{a_1}c_1+\cdots+\omega^{a_{r-1}}c_{r-1},$$
where each coefficient is a positive natural number, the exponents are themselves such terms and $a_0>\cdots>a_{r-1}$. Zero is the empty sum. A finite tree records the nested exponents and finite lists record coefficients. The order is determined recursively by the first exponent, coefficient or tail at which two lists differ.

**Lemma 7.1 (Comparison of normal forms).** This recursive comparison terminates, and agrees with ordinal comparison of the denoted forms.

*Proof.* Each recursive exponent comparison uses strictly smaller expression trees, and each tail comparison removes a leading term. Structural induction therefore proves termination. For correctness, if leading exponents differ, the entire smaller-leading expression lies below the next power $\omega^{a_0+1}$, while the larger leading power is at least that value. If exponents agree but coefficients differ, the finite tail is below one further copy of the leading power, so the smaller coefficient determines the smaller ordinal. If both agree, cancel the common initial segment as an order comparison and compare the tails. A proper initial list is smaller than a longer list with the same earlier terms. These ordinal facts give the induction step in every case. ∎

This is an algorithm on expressions and an external correctness proof. Formal notation systems used in proof theory add specified primitive-recursive coding and checking conventions. Those conventional details matter to the strength of an arithmetical theorem; the word ordinal cannot replace them.

<a id="section-21-construct-the-epsilon-boundary"></a>
## Construct the epsilon boundary {#section-23-construct-the-epsilon-boundary}

Put $a_0=1$ and $a_{n+1}=\omega^{a_n}$. The first values are $1,\omega,\omega^\omega,\omega^{\omega^\omega}$, and so on. Strict increase follows from $1<\omega$ and strict monotonicity of ordinal exponentiation with base $\omega$. Let $\lambda=\sup_n a_n$.

**Theorem 7.2.** $\lambda$ is the least ordinal satisfying $\omega^\lambda=\lambda$. It is denoted $\varepsilon_0$.

*Proof.* Continuity of ordinal exponentiation at a nonzero limit gives
$$\omega^\lambda=\sup_n\omega^{a_n}=\sup_n a_{n+1}=\lambda.$$
If $\beta=\omega^\beta$, then $\beta\ge1$. Inductively $a_n\le\beta$ implies $a_{n+1}=\omega^{a_n}\le\omega^\beta=\beta$. Hence every $a_n\le\beta$, so $\lambda\le\beta$. Thus it is the least fixed point. The supremum is a set-sized ordinal construction, not a set of all ordinals. ∎

Every ordinal below this boundary has a finite hereditary normal form. Indeed an ordinal below the supremum lies below some finite tower $a_n$. Its leading exponents then lie below $a_{n-1}$; repeating this argument lowers the tower level until only zero exponents remain. At each level there are finitely many coefficients and exponents. Conversely finite hereditary forms stay below $\varepsilon_0$: finitely many exponent bounds fit below one tower, and taking powers, finite multiples and their finite descending sum stays below a later tower.

The boundary itself is not a term of this finite smaller-exponent notation system. Although $\varepsilon_0=\omega^{\varepsilon_0}$ is a valid ordinal equality, writing that expression does not make it a finite hereditary term whose exponent already belongs to the smaller domain. Confusing a defining equation with a permitted recursive notation would break the construction.

<a id="section-35-fundamental-sequences-and-legitimate-descent"></a>
## Fundamental sequences and legitimate descent {#section-37-fundamental-sequences-and-legitimate-descent}

A nonzero limit term can be written $\gamma+\omega^\beta$, with $\beta>0$, by separating one copy of its final power from any finite coefficient. Define a sequence of smaller terms by
$$ (\gamma+\omega^{\delta+1})[n]=\gamma+\omega^\delta(n+1),$$
and, when $\beta$ is a nonzero limit,
$$(\gamma+\omega^\beta)[n]=\gamma+\omega^{\beta[n]}.$$
The recursive call uses a smaller exponent term. Our indexing starts at zero, so $\omega[n]=n+1$. Other standard conventions can use $n$ instead; formulas and examples must use one convention consistently.

**Lemma 7.3 (Fundamental-sequence bounds).** Every displayed value is strictly below its limit term, and their supremum is that term.

*Proof.* In the successor-exponent case, each finite multiple $\omega^\delta(n+1)$ is below $\omega^\delta\cdot\omega=\omega^{\delta+1}$, and those multiples are cofinal in it. In the limit-exponent case, apply induction to $\beta[n]<\beta$ and its cofinality, then use strict monotonicity and continuity of $\omega^\alpha$. Adding the same prefix $\gamma$ preserves strict comparison in the right argument and preserves the supremum of this cofinal sequence. This proves both assertions. ∎

A descent step may replace a successor by its predecessor or a limit by any selected fundamental-sequence value. Every step lowers its denoted ordinal, whatever finite index is selected. There is no infinite run of these steps in the external well-order. This does not automatically supply one finite bound on the length of all runs beginning at a fixed limit, or a proof of that uniform statement in a weak arithmetic theory.

<a id="section-49-worked-example-7-4-compare-before-simplifying"></a>
## Worked example 7.4: compare before simplifying {#section-51-worked-example-7-4-compare-before-simplifying}

Compare $\alpha=\omega^3\cdot2+\omega\cdot5+7$ and $\beta=\omega^3\cdot2+\omega^2$. Their first powers and coefficients agree. The next exponent is one in the first tail and two in the second, so $\alpha<\beta$ regardless of the coefficient five and finite tail seven. Replacing $\omega$ by a large finite number and comparing numerical sizes would not prove this ordinal inequality for all terms.

Now compare $\omega^3\cdot3$ with $\beta$. Their leading exponents agree but the first coefficient is larger, so $\beta<\omega^3\cdot3$. These calculations implement the two distinct branches of the comparison lemma. The normal forms are already canonical; commutative rearrangement of terms is not allowed in ordinal addition.

<a id="section-55-worked-example-7-5-a-limit-stage-has-many-finite-contin"></a>
## Worked example 7.5: a limit stage has many finite continuations {#section-57-worked-example-7-5-a-limit-stage-has-many-finite-contin}

For $\alpha=\omega^2\cdot2$, write $\gamma=\omega^2$ and the final exponent as $1+1$. Then $\alpha[n]=\omega^2+\omega(n+1)$. In particular $\alpha[0]=\omega^2+\omega$ and $\alpha[2]=\omega^2+\omega\cdot3$. Each is smaller than $\omega^2\cdot2$, and their supremum is that limit. For $\omega^\omega$, the second rule gives $(\omega^\omega)[n]=\omega^{n+1}$.

Starting from $\omega$, choose index $N$ and move to $N+1$, then take ordinary predecessors to zero. Every such run terminates, but its length grows with $N$. Thus an ordinal descent proof is not the same as a small natural-number runtime bound. The example isolates a reason proof reductions can terminate without their original proof length decreasing at every step.

<a id="section-61-state-the-gentzen-input-as-a-formal-implication"></a>
## State the Gentzen input as a formal implication {#section-63-state-the-gentzen-input-as-a-formal-implication}

Fix the conventional primitive-recursive domain $O$ and relation $<_O$ for hereditary notations below $\varepsilon_0$. Let $\operatorname{Prf}_{PA}(p,\bot)$ be the standard decidable predicate for a finite PA derivation of a fixed contradiction. Let $\operatorname{Con}(PA)$ abbreviate $\forall p\neg\operatorname{Prf}_{PA}(p,\bot)$. The choice of proof predicate is fixed rather than changed to an arbitrary formula named consistency.

For a formula $P(a)$ of first-order arithmetic, with parameters, the transfinite-induction instance along this entire notation system is
$$[\forall a\in O((\forall b<_O a\ P(b))\to P(a))]\to\forall a\in O\ P(a).$$
Write $TI_O(\mathrm{arith})$ for the schema of all such instances. This is a schema over finite formulas, not second-order quantification over every subset of $O$.

**Named imported theorem 7.6 (A sufficient Gentzen formalisation).** In the standard notation and proof coding, primitive recursive arithmetic, interpreted in a first-order language of primitive-recursive functions, together with $TI_O(\mathrm{arith})$ proves $\operatorname{Con}(PA)$.

This deliberately sufficient formulation uses more induction than the sharper primitive-recursive or quantifier-free versions in the literature. We do not claim it is an optimal metatheory. The imported work constructs and verifies the proof-reduction operations and their ordinal control. This chapter has not assigned a correct ordinal to every possible PA proof, and the elementary fundamental-sequence calculation above does not perform that missing verification.

One can understand the logical mechanism without pretending to reconstruct that theorem. Under a specified reduction invariant, a purported contradiction derivation remains a contradiction derivation after reduction, has a valid notation measure, and cannot end in a legitimate terminal contradiction proof. If every nonterminal step lowers the measure, the corresponding induction or no-descent principle excludes that purported derivation. The difficult proof-theoretic task is making those conditions hold for arbitrary induction axioms and structural transformations; that is exactly the named input.

<a id="section-75-worked-example-7-7-why-this-does-not-contradict-second-"></a>
## Worked example 7.7: why this does not contradict second incompleteness {#section-77-worked-example-7-7-why-this-does-not-contradict-second-}

Assume PA is consistent and uses its standard arithmetised proof predicate. The preceding imported implication is formalised in arithmetic over a weak base available inside PA. If PA proved all the uniform notation-system induction instances used by that formal proof, it could combine those finitely many instances with the weak-base derivation and prove $\operatorname{Con}(PA)$. The second incompleteness theorem would then give a contradiction. Hence those instances cannot all be PA theorems under the consistency assumption.

This is compatible with PA proving induction along each fixed notation $\alpha<\varepsilon_0$ for each fixed arithmetic formula, in the conventional analysis. The latter assertion is externally indexed by a fixed initial segment. The former lets one formula range over all notation codes in $O$ and supports the full reduction argument. Uniformity and the allowed induction formulas are mathematical hypotheses, not stylistic qualifications. The comparison proves a conditional nonprovability conclusion; it does not prove PA inconsistent or establish its consistency unconditionally.

<a id="section-81-what-a-proof-theoretic-ordinal-records"></a>
## What a proof-theoretic ordinal records {#section-83-what-a-proof-theoretic-ordinal-records}

The preserved [Sequent Calculus and Proof Theory](chapter-14.md) defines a proof-theoretic ordinal only after fixing notation systems, provability conventions and a metatheory. The standard analysis assigns $\varepsilon_0$ to PA. That calibrated theorem includes an upper analysis and an appropriate lower or optimality analysis; proving only one descent result would not establish both.

Different presentations package well-foundedness, transfinite induction and primitive-recursive descent in different ways. In a strong external metatheory they may express closely related facts, while their exact arithmetical versions can have different strength. When quoting an analysis, record the domain and comparison of notations, the formula class, the base theory, the proof predicate and which direction is proved. Saying simply that PA is epsilon zero replaces all of those data with a misleading slogan.

<a id="section-87-exercises"></a>
## Exercises {#section-89-exercises}

<a id="ordinal-analysis-and-gentzen-consistency-ex-1"></a>
**Exercise 1.** Explain the distinction between an ordinal and a natural number coding a normal-form notation.

<details><summary>Hint 1</summary>

A code is a finite syntactic object in arithmetic.

</details><details><summary>Hint 2</summary>

Its denotation is defined externally by interpreting the recursive expression.

</details><details><summary>Solution</summary>

A notation code is a natural number representing a finite tree and coefficient lists. Deciding whether its syntax is well formed and comparing two such codes are effective operations. Its denotation is an ordinal obtained by interpreting zero, powers of omega and ordered sums. The number's usual finite order is not the denoted ordinal order: a larger numeric code may denote a smaller ordinal under an arbitrary encoding. Order correctness therefore requires the separate semantic lemma, and total code comparison does not by itself prove external well-foundedness of the represented order.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-2"></a>
**Exercise 2.** Compare $\omega^2\cdot4+\omega+9$ and $\omega^2\cdot4+\omega\cdot2$.

<details><summary>Hint 1</summary>

Remove their common leading block as a comparison.

</details><details><summary>Hint 2</summary>

The tails have the same leading exponent and different coefficients.

</details><details><summary>Solution</summary>

The common $\omega^2\cdot4$ leaves tails $\omega+9$ and $\omega\cdot2$. Their leading exponent is one, but the coefficients are one and two. Every finite tail is below another copy of omega, so $\omega+9<\omega\cdot2$. Adding the common prefix on the left preserves this strict comparison. Thus the first ordinal is smaller. The number nine cannot outweigh an additional entire omega block; replacing omega by one finite test value would not justify the transfinite inequality.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-3"></a>
**Exercise 3.** Prove no finite tower $a_n$ is the least fixed point $\varepsilon_0$.

<details><summary>Hint 1</summary>

The sequence of towers is strictly increasing.

</details><details><summary>Hint 2</summary>

Every given term is below a later term and hence below their supremum.

</details><details><summary>Solution</summary>

The base inequality is $a_0=1<\omega=a_1$. Strict monotonicity of exponentiation turns $a_n<a_{n+1}$ into $a_{n+1}<a_{n+2}$, proving strict increase by induction. Therefore $a_n<a_{n+1}\le\sup_k a_k=\varepsilon_0$. No finite tower equals the supremum. Its fixed-point property was proved using continuity at the limit, a step unavailable for any one finite entry. A finite expression showing more towers merely supplies another entry below that limit.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-4"></a>
**Exercise 4.** Compute $(\omega^3)[2]$ and $(\omega^\omega)[2]$ under the stated indexing convention.

<details><summary>Hint 1</summary>

A successor exponent uses a finite multiple of the preceding power.

</details><details><summary>Hint 2</summary>

A limit exponent first uses $\omega[2]=3$.

</details><details><summary>Solution</summary>

Since $3=2+1$, the first rule gives $(\omega^3)[2]=\omega^2(2+1)=\omega^2\cdot3$. Since omega is a limit exponent, the second gives $(\omega^\omega)[2]=\omega^{\omega[2]}=\omega^3$. Both lie below their respective limits. The answers differ because the two clauses recurse on different exponent shapes. Using a convention $\omega[n]=n$ would give a different indexed value, which is why the chapter states $n+1$ explicitly rather than treating all fundamental-sequence conventions as identical.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-5"></a>
**Exercise 5.** Show that termination of every permitted descent from omega does not give one fixed finite bound on all run lengths.

<details><summary>Hint 1</summary>

Choose a large first fundamental-sequence index.

</details><details><summary>Hint 2</summary>

After that step, count down the resulting natural number.

</details><details><summary>Solution</summary>

Given any proposed bound $B$, choose first index $N>B$. The first step goes from omega to $N+1$, followed by $N+1$ predecessor steps to zero. Its length exceeds $B$, yet it is finite and every step lowers the ordinal. Therefore no one finite bound covers all these permitted choices. This is not an infinite descending sequence: each choice gives a different finite sequence. Uniform runtime claims need more data about how indices are selected and which inputs parameterise that selection.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-6"></a>
**Exercise 6.** Why would defining a proof measure without proving its decrease be insufficient for a consistency argument?

<details><summary>Hint 1</summary>

A measure can stay constant or increase under a reduction.

</details><details><summary>Hint 2</summary>

The purported contradiction also has to remain a contradiction derivation.

</details><details><summary>Solution</summary>

A finite syntax can be assigned an ordinal by many arbitrary rules, including the constant zero rule. Such an assignment says nothing about the chosen reduction unless each relevant step is proved to lower it while preserving the hypothetical contradiction and staying within the notation domain. One must also exclude a terminal legitimate contradiction proof. Without these invariants, well-foundedness cannot be applied. The Gentzen input is substantial precisely because it constructs and verifies these relationships for arbitrary PA induction derivations rather than merely naming an ordinal.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-7"></a>
**Exercise 7.** State the sufficient imported consistency implication and identify what this chapter has proved locally.

<details><summary>Hint 1</summary>

Name the weak base, the notation domain and the formula class.

</details><details><summary>Hint 2</summary>

Separate elementary ordinal calculations from the full PA reduction construction.

</details><details><summary>Solution</summary>

The stated input is $PRA+TI_O(\mathrm{arith})\vdash\operatorname{Con}(PA)$ for the conventional primitive-recursive notation domain below epsilon zero and the standard PA proof predicate. Local proofs establish the tower fixed point, hereditary comparison and fundamental-sequence descent, together with the logical conditional consequence for PA. They do not assign ordinals to all PA derivations or verify every arithmetic proof reduction. The imported theorem supplies those missing proof-theoretic operations. The formulation is deliberately sufficient and does not assert optimality of its induction strength.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-8"></a>
**Exercise 8.** Explain why second incompleteness does not prohibit a stronger metatheory from proving the consistency of PA.

<details><summary>Hint 1</summary>

The theorem concerns PA proving its own standard consistency assertion.

</details><details><summary>Hint 2</summary>

Additional transfinite induction is an additional premise, not a PA theorem obtained for free.

</details><details><summary>Solution</summary>

Assuming PA consistent, the second theorem rules out a PA derivation of its standard consistency sentence. It does not rule out a derivation from a stronger stated theory such as the supplied weak base plus sufficient uniform ordinal induction. If PA could itself prove all additional instances needed by that derivation, it could import the argument and violate the second theorem; therefore those premises cannot all be available internally. The relative theorem and internal nonprovability use different axiom sets and are compatible.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-9"></a>
**Exercise 9.** Why does proving one upper consistency reduction not by itself establish the exact proof-theoretic ordinal of a theory?

<details><summary>Hint 1</summary>

An exact calibration needs more than one bound.

</details><details><summary>Hint 2</summary>

Record what smaller initial segments the theory can already handle.

</details><details><summary>Solution</summary>

An upper reduction shows that a specified induction or well-foundedness principle is sufficient for the analysed task. It does not exclude a weaker such principle or show that the theory proves the expected lower collection of ordinal inductions. An exact ordinal analysis also supplies the corresponding lower or optimality result under a fixed definition. The standard epsilon-zero calibration of PA includes that additional work. Calling any convenient sufficient bound the exact ordinal would erase the missing direction and the dependence on notation and formula conventions.

</details>

<a id="ordinal-analysis-and-gentzen-consistency-ex-10"></a>
**Exercise 10.** A writer says “the computer compared every notation I supplied, so the notation order is well-founded.” Give a complete diagnosis.

<details><summary>Hint 1</summary>

Each comparison is finite, while well-foundedness quantifies over descending sequences.

</details><details><summary>Hint 2</summary>

Even an effective linear order can fail to be a well-order.

</details><details><summary>Solution</summary>

Successful finite comparisons establish only the observed outputs, or with a proved comparator, total decidability of comparison. Well-foundedness asserts that no infinite descending chain exists in the represented order. The usual integer order has a total effective comparison and the descending chain $0,-1,-2,\ldots$, so comparison alone cannot establish that property. For the present notation system the external ordinal interpretation supplies well-foundedness; a formal consistency proof must name the internal induction principle it uses. No finite collection of successful comparisons replaces either argument.

</details>

<a id="section-259-sources"></a>
## Sources {#section-261-sources}

New exposition developing the preserved ordinal-analysis section and five solved exercises in [Sequent Calculus and Proof Theory](chapter-14.md), which remain available. Troelstra and Schwichtenberg, *Basic Proof Theory*, second edition, is the benchmark. Michael Rathjen, [“The Art of Ordinal Analysis”](https://www.mathunion.org/fileadmin/ICM/Proceedings/ICM2006.2/ICM2006.2.ocr.pdf), ICM 2006, is an author-written research exposition for the named Gentzen analysis and its induction qualifications. The detailed Gentzen reduction is an imported theorem here; the local ordinal and conditional arguments are proved.

<a id="section-263-summary"></a>
## Summary {#section-265-summary}

Ordinal analysis separates finite notation, ordinal denotation, proof reduction and the induction needed for termination. Hereditary Cantor forms below epsilon zero admit effective comparison and cofinal fundamental sequences. The finite tower supremum is the first fixed point of omega exponentiation. Gentzen's PA reduction is a precisely named imported input, and its consistency consequence uses explicitly stronger induction. Fixed sub-boundary cases and a uniform notation-system principle are different statements, so second incompleteness remains respected.
