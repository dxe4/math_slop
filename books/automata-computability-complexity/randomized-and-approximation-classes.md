
# Randomized Computation, Approximation, and Promise Boundaries {#section-1-randomized-computation-approximation-and-promise-bounda}

Randomness can reduce runtime, simplify construction, or improve expected quality, but a theorem must say what is random, which inputs are fixed, and whether error concerns answers, cost, or objective value. Approximation replaces exact optimization by a quantified comparison. Promise problems restrict admissible inputs. This chapter keeps these contracts distinct.

<a id="section-3-1-probability-over-coins"></a>
## 1. Probability over coins {#section-5-1-probability-over-coins}

A randomized algorithm receives fixed input $x$ and random bit string $r$; its output is deterministic given $(x,r)$. Probability is normally over fresh $r$, with $x$ fixed before sampling. An adaptive adversary needs a different interaction model.

A **Las Vegas** algorithm always returns a correct answer, with random runtime. A **Monte Carlo** algorithm has bounded runtime but may return an incorrect answer with bounded probability. Expected runtime does not imply a per-run limit, and “usually correct” does not identify which side can err.

<a id="section-9-2-rp-corp-bpp-and-zpp"></a>
## 2. RP, coRP, BPP, and ZPP {#section-11-2-rp-corp-bpp-and-zpp}

Language $L$ is in RP when a polynomial randomized machine rejects every $x \notin L$ and accepts each $x \in L$ with probability at least $1/2$. coRP reverses the one-sided error. BPP permits two-sided error at most $1/3$. For two-sided BPP, the success constant can be any fixed amount above $1/2$ and then amplified. For one-sided RP/coRP, any fixed positive probability of the conclusive outcome can instead be amplified by repetition with the appropriate OR/AND rule.

ZPP can be defined as zero-error expected polynomial time and equals $RP \cap coRP$. Running one-sided procedures in interleaved trials until one gives its conclusive outcome yields the zero-error algorithm; truncating a ZPP procedure and treating timeout as the appropriate one-sided inconclusive outcome gives the reverse relationship.

<a id="section-15-3-amplification"></a>
## 3. Amplification {#section-17-3-amplification}

Repeat a BPP algorithm independently $k$ times and take majority. If each trial succeeds with probability at least $2/3$, a Chernoff bound makes majority error $\exp(-\Omega(k))$. Thus $\mathcal{O}(\log(1/\delta))$ repetitions achieve error $\delta$.

For RP, accept if any trial accepts; false positives remain impossible and false-negative probability is at most $2^{-k}$. Fresh independent or suitably conditional randomness is essential. Reusing the same random seed can reproduce the same failure and give no amplification.

<a id="section-21-4-randomized-existence-and-derandomization"></a>
## 4. Randomized existence and derandomization {#section-23-4-randomized-existence-and-derandomization}

If a random object satisfies property $P$ with positive probability, then some object satisfies $P$. This probabilistic method proves existence without necessarily finding the object.

Conditional expectation can construct an object when expected objective is efficiently computable. Fix random choices one at a time, always choosing a value whose conditional expected objective is at least the current expectation. The final deterministic object achieves at least the original expectation.

<a id="section-27-5-approximation-ratios"></a>
## 5. Approximation ratios {#section-29-5-approximation-ratios}

For minimization with nonnegative objective, algorithm $A$ is an $\alpha$-approximation when it returns feasible solution with

$cost(A(I)) \le  \alpha \operatorname{OPT}(I)$ for $\alpha\ge 1$.

For maximization, a common convention is $value(A(I)) \ge  \operatorname{OPT}(I)/\alpha$; some literature instead reports fraction $\rho\le 1$. State the convention. Ratios can be meaningless when objectives may be zero or negative, requiring additive guarantees or normalization.

A polynomial-time approximation scheme (PTAS) gives, for every fixed $\varepsilon>0$, a $(1+\varepsilon)$ approximation in time polynomial in input size, though exponent may depend on $\varepsilon$. An FPTAS is polynomial in both input size and $1/\varepsilon$.

<a id="section-37-6-vertex-cover-factor-two"></a>
## 6. Vertex cover factor two {#section-39-6-vertex-cover-factor-two}

Choose any maximal matching $M$ and return both endpoints $C$. It is a vertex cover: if some uncovered edge remained, it could be added to $M$, contradicting maximality. Every cover must contain at least one endpoint of every matching edge, and matching edges are disjoint, so $\operatorname{OPT}\ge |M|$. Therefore $|C|=2|M|\le 2OPT$.

Maximal does not mean maximum. Any greedy maximal matching suffices for the proof.

<a id="section-43-7-random-assignment-for-max-3sat"></a>
## 7. Random assignment for MAX-3SAT {#section-45-7-random-assignment-for-max-3sat}

Assign variables independently and uniformly. A three-literal clause on three distinct variables is false with probability $1/8$, so expected satisfied clauses are $7m/8$. Linearity of expectation needs no independence among clause indicators. Therefore some assignment satisfies at least $7m/8$ clauses. Conditional expectation derandomizes the construction by fixing variables while preserving the expected remaining score.

Repeated variables and tautological clauses require preprocessing or clause-specific probabilities; the $7/8$ statement names its input convention.


<a id="section-50-promise-problem-continuation"></a>
## Promise-problem continuation {#section-52-promise-problem-continuation}

A promise problem specifies disjoint yes and no sets and requires correctness only on their union. Outside-promise behavior is unrestricted unless separately specified. The complete original promise discussion, MAX-3SAT project, exact worked and changed cases, full key, task IDs and reference code are preserved in the linked [Promise Problems and MAX-3SAT Workshop](promise-problems-and-max3sat-workshop.md). This split keeps the main chapter focused while retaining every original mathematical argument and solution.


<a id="section-55-prove-the-zero-error-characterisation"></a>
## Prove the zero-error characterisation {#section-57-prove-the-zero-error-characterisation}

**Theorem 15.1.** ZPP equals $RP\cap coRP$.

*Proof.* Suppose $L$ has both one-sided polynomial-time procedures. In each trial run the RP procedure and the coRP procedure with fresh independent coins. If RP accepts, return yes; it never accepts a no-instance. If coRP rejects, return no; it never rejects a yes-instance. On a yes-instance the first event has probability at least one half; on a no-instance the second does. Thus each trial concludes correctly with probability at least one half. The probability of surviving $k$ trials is at most $2^{-k}$, so the expected number of trials is at most two. Each trial is polynomially bounded, giving zero-error expected polynomial time and almost-sure termination.

Conversely suppose a zero-error procedure has expected runtime at most a known polynomial $p(n)>0$ on every input. Run it for $2p(n)$ steps. Markov's inequality bounds timeout probability by one half. To obtain RP, reject on timeout and otherwise use its correct answer: no-instance acceptance is impossible, while each yes-instance is accepted with probability at least one half. To obtain coRP, accept on timeout instead: yes-instances are always accepted, while no-instances are rejected with probability at least one half. These are polynomial worst-case procedures, proving both memberships. ∎

The proof uses an expected bound valid for every input, not a sample average. The zero-error procedure may have arbitrarily long individual runs. Truncation deliberately turns those runs into one-sided uncertainty; the two different timeout outcomes produce the two different classes.

<a id="section-65-prove-an-exponential-bpp-amplification-bound"></a>
## Prove an exponential BPP amplification bound {#section-67-prove-an-exponential-bpp-amplification-bound}

Let $X_i$ be the error indicator in independent run $i$, with $P(X_i=1)\le1/3$, and let $X=\sum_iX_i$. For odd $k$, wrong majority implies $X\ge k/2$. Since $E[2^{X_i}]=1+P(X_i=1)\le4/3$, independence gives $E[2^X]\le(4/3)^k$. Markov's inequality, proved from $E[Y]\ge aP(Y\ge a)$ for nonnegative $Y$, yields
$$P(\text{wrong majority})\le\frac{(4/3)^k}{2^{k/2}}=(2\sqrt2/3)^k.$$
The base is strictly below one, so a constant multiple of $\log(1/\delta)$ independent repetitions suffices for error at most $\delta$. This supplies the complete elementary bound behind the earlier concentration statement. No independence among separate clauses is needed for linearity of score expectation, but independence among runs is used in this moment product.

<a id="section-71-worked-example-1-truncating-an-expected-time-computatio"></a>
## Worked example 1: truncating an expected-time computation {#section-73-worked-example-1-truncating-an-expected-time-computatio}

Assume an always-correct procedure has expected runtime at most $10n^2$ on every input of length $n\ge1$. Stop a run after $20n^2$ steps. The chance of timeout is at most one half. If timeouts return no, this gives an RP procedure for its language: every actual yes answer is correct and a yes-instance finishes correctly with probability at least one half. If timeouts return yes, it gives coRP instead. A finite sample of fast runs would not establish the initial expectation hypothesis; it is part of the mathematical contract in this example.

For the empty-input case choose a positive polynomial bound such as $10(n+1)^2$ from the start, or handle it separately. The fixed-length edge case must not cause a zero-step budget to be mistaken for a useful truncation theorem. The original expected-time guarantee and the new worst-case clock answer different resource questions.

<a id="section-77-worked-example-2-a-tight-matching-based-factor-two"></a>
## Worked example 2: a tight matching-based factor two {#section-79-worked-example-2-a-tight-matching-based-factor-two}

Take a three-leaf star with center $b$ and leaves $a,c,d$. The matching containing edge $ab$ is maximal because every remaining edge meets $b$. Its endpoint cover is $\{a,b\}$ of size two. The singleton $\{b\}$ covers every edge, and no empty set does, so OPT is one. Thus the endpoint algorithm achieves ratio two here, exactly its proved guarantee.

The lower bound from this matching is only OPT at least one; it is sufficient to prove a factor-two theorem and is tight in this instance. Maximum matching is unnecessary, and even a maximum matching of this star has only one edge. The example is unweighted: assigning costs to vertices would break the counting proof unless the algorithm and theorem were changed to account for those costs.

<a id="section-83-worked-example-3-conditional-expectation-with-a-complet"></a>
## Worked example 3: conditional expectation with a complete tiny trace {#section-85-worked-example-3-conditional-expectation-with-a-complet}

For $F=(x\lor y\lor z)\land(\neg x\lor y\lor z)$, each clause uses three distinct variables, so the initial expected score is $7/4$. Choosing either value of $x$ leaves one clause automatically true and the other equal to $y\lor z$, with expectation $3/4$; both branches therefore have total $7/4$. Use a fixed tie rule choosing zero, so take $x=0$.

Now $y=0$ leaves total expected score $1+1/2=3/2$, whereas $y=1$ makes both clauses true and gives score two. Choose $y=1$; either value of $z$ then gives two, so the tie rule chooses zero. Assignment $010$ satisfies both clauses. Two is optimal because there are only two clauses. At every step the chosen branch is at least the mean of the alternatives. The longer preserved workshop gives exact cases where tie policy attains only the $7/8$ guarantee and where a changed clause alters the optimal branch; none of those task IDs or keys has been discarded.

<a id="section-89-interpret-approximation-and-promises-precisely"></a>
## Interpret approximation and promises precisely {#section-91-interpret-approximation-and-promises-precisely}

A ratio theorem includes feasibility. For minimization, $ALG\le\alpha OPT$ with $OPT=0$ forces $ALG=0$ rather than permitting a vague bounded relative error. If objectives can be negative, multiplication may reverse the intended quality comparison, and a separately justified additive or shifted formulation is needed. PTAS and FPTAS quantify over an accuracy parameter as well as encoded instance length; a dependence polynomial in a numeric magnitude is not automatically polynomial in its binary length.

A promise is not necessarily a syntactically checkable input condition. A representation can be perfectly well-formed while falling between promised objective gaps. Reductions between promise problems must send both promised signs to the correct target signs and stay within the target promise. The workshop retains this distinction alongside exact finite score tables, making clear that public worked solutions and repeated reference executions are learning support rather than unseen independent attempts.


<a id="section-96-fixed-inputs-and-shared-randomness"></a>
## Fixed inputs and shared randomness {#section-98-fixed-inputs-and-shared-randomness}

A bounded-error statement ordinarily has quantifier order: for every fixed input $x$, the probability over coins that the answer is correct is at least the stated bound. It need not provide one seed correct for every input simultaneously. To see this without an asymptotic argument, take the empty language and four inputs $00,01,10,11$. Choose two fair random bits $r$. On a two-bit input $x$, incorrectly answer yes exactly when $x=r$, otherwise answer no; on other lengths always answer no. Each fixed two-bit input is answered correctly with probability $3/4$. Yet every seed fails on the input equal to itself, so no seed is correct on all four.

An adversary that sees $r$ before choosing the input can force error by choosing $x=r$. The fixed-input probability theorem remains true, but it covers a different quantifier order from that adaptive interaction. A reproducibility seed records a run; it does not change which adversary timing the proof permits.

For a fixed finite family $F$, a separate simultaneous guarantee can be obtained by a union bound. If each input's error probability under one shared coin experiment is at most $\delta$, then the probability that any input in $F$ errs is at most $|F|\delta$. Independence between those input-error events is unnecessary: their indicator sum bounds the indicator of their union, and expectation gives the inequality. To make this useful for a large family, the per-input error must be correspondingly small, with sufficient independent run coins for its amplification proof. The theorem still concerns that specified finite family, not every possible input or an unmodelled adaptive query process.

<a id="section-104-exercises-with-complete-solutions"></a>
## Exercises with complete solutions {#section-106-exercises-with-complete-solutions}

<a id="section-106-exercise-1-las-vegas-versus-monte-carlo"></a>
### Exercise 1: Las Vegas versus Monte Carlo {#section-108-exercise-1-las-vegas-versus-monte-carlo}
<a id="randomized-and-approximation-classes-ex-1"></a>

Classify an always-correct algorithm with random finite expected runtime.

<details>
<summary>Hint 1</summary>

Ask which part of the run can vary.

</details>
<details>
<summary>Hint 2</summary>

Every returned answer is correct; time is random.

</details>
<details>
<summary>Solution</summary>

It is Las Vegas. Correctness has zero error; randomness affects runtime.

The word finite in the expected-time condition concerns the mean, not a uniform per-run bound. An algorithm may have a long tail and still meet the zero-error expected polynomial condition. To claim ZPP, the expectation must be polynomially bounded for every input under its own fresh coins.

</details>

<a id="section-132-exercise-2-rp-repetition"></a>
### Exercise 2: RP repetition {#section-134-exercise-2-rp-repetition}
<a id="randomized-and-approximation-classes-ex-2"></a>

After $k$ independent repetitions, what is false-negative probability?

<details>
<summary>Hint 1</summary>

A false negative needs every independent trial to miss.

</details>
<details>
<summary>Hint 2</summary>

One acceptance is conclusive for RP.

</details>
<details>
<summary>Solution</summary>

At most $(1/2)^k$, because all trials must miss. False-positive probability remains zero.

</details>

<a id="section-156-exercise-3-seed-reuse"></a>
### Exercise 3: Seed reuse {#section-158-exercise-3-seed-reuse}
<a id="randomized-and-approximation-classes-ex-3"></a>

Why can repeating one seed fail to amplify?

<details>
<summary>Hint 1</summary>

Conditional on one seed, all repeated outcomes may coincide.

</details>
<details>
<summary>Hint 2</summary>

The events must actually have the independence used in the product.

</details>
<details>
<summary>Solution</summary>

The runs are identical conditional on input and seed. A bad seed causes every repetition to fail, so the error event is not multiplied.

</details>

<a id="section-180-exercise-4-positive-probability"></a>
### Exercise 4: Positive probability {#section-182-exercise-4-positive-probability}
<a id="randomized-and-approximation-classes-ex-4"></a>

Why does $Pr(P)>0$ prove existence?

<details>
<summary>Hint 1</summary>

An empty event has probability zero.

</details>
<details>
<summary>Hint 2</summary>

Positive probability needs at least one outcome in the event.

</details>
<details>
<summary>Solution</summary>

If no outcome had property $P$, its event would be empty and have probability zero. Positive mass therefore contains at least one witness.

</details>

<a id="section-204-exercise-5-conditional-branch"></a>
### Exercise 5: Conditional branch {#section-206-exercise-5-conditional-branch}
<a id="randomized-and-approximation-classes-ex-5"></a>

Why must one Boolean choice preserve current conditional expectation?

<details>
<summary>Hint 1</summary>

Condition on the next fair Boolean bit.

</details>
<details>
<summary>Hint 2</summary>

Its two branch expectations average to the present one.

</details>
<details>
<summary>Solution</summary>

#### Exercise 5 — Complete public solution {#exercise-5-complete-public-solution}

The current expectation is the average of the two next conditional expectations under a fair bit. At least one value is at least their average.

</details>

<a id="section-232-exercise-6-vertex-cover-feasibility"></a>
### Exercise 6: Vertex-cover feasibility {#section-234-exercise-6-vertex-cover-feasibility}
<a id="randomized-and-approximation-classes-ex-6"></a>

Why does maximal matching imply selected endpoints cover every edge?

<details>
<summary>Hint 1</summary>

An uncovered edge has both endpoints unmatched.

</details>
<details>
<summary>Hint 2</summary>

It could then be added to the supposedly maximal matching.

</details>
<details>
<summary>Solution</summary>

An edge with neither endpoint selected is disjoint from all matching edges and could be added, contradicting maximality.

</details>

<a id="section-256-exercise-7-vertex-cover-lower-bound"></a>
### Exercise 7: Vertex-cover lower bound {#section-258-exercise-7-vertex-cover-lower-bound}
<a id="randomized-and-approximation-classes-ex-7"></a>

Why is $\operatorname{OPT}\ge |M|$?

<details>
<summary>Hint 1</summary>

Each disjoint edge needs an endpoint in a cover.

</details>
<details>
<summary>Hint 2</summary>

One vertex cannot belong to two disjoint matching edges.

</details>
<details>
<summary>Solution</summary>

Each disjoint matching edge needs at least one covered endpoint, and one chosen vertex cannot cover two disjoint matching edges.

</details>

<a id="section-280-exercise-8-max-3sat-expectation"></a>
### Exercise 8: MAX-3SAT expectation {#section-282-exercise-8-max-3sat-expectation}
<a id="randomized-and-approximation-classes-ex-8"></a>

Why is expected satisfied count $7m/8$?

<details>
<summary>Hint 1</summary>

Exactly one assignment falsifies a three-distinct-variable clause.

</details>
<details>
<summary>Hint 2</summary>

Use indicator expectation and linearity rather than clause independence.

</details>
<details>
<summary>Solution</summary>

#### Exercise 8 — Complete public solution {#exercise-8-complete-public-solution}

Each valid three-distinct-variable clause is false under one of eight assignments. Indicator expectation is $7/8$; linearity sums these expectations even when clauses share variables.

</details>

<a id="section-308-exercise-9-ptas-versus-fptas"></a>
### Exercise 9: PTAS versus FPTAS {#section-310-exercise-9-ptas-versus-fptas}
<a id="randomized-and-approximation-classes-ex-9"></a>

What extra condition defines an FPTAS?

<details>
<summary>Hint 1</summary>

Look at the accuracy parameter as well as instance size.

</details>
<details>
<summary>Hint 2</summary>

The dependence on $1/\varepsilon$ must itself be polynomial.

</details>
<details>
<summary>Solution</summary>

Runtime must be polynomial jointly in encoded input length and $1/\varepsilon$, not merely polynomial in input length for each fixed epsilon.

For example a runtime $n^{1/\varepsilon}$ is polynomial in $n$ for every fixed positive epsilon but is not polynomial jointly in $n$ and $1/\varepsilon$. A bound such as $n^3(1/\varepsilon)^2$ satisfies the latter dependence. These formulas illustrate the runtime definitions, not a claim that an FPTAS exists for every optimization problem.

</details>

<a id="section-334-exercise-10-negative-objectives"></a>
### Exercise 10: Negative objectives {#section-336-exercise-10-negative-objectives}
<a id="randomized-and-approximation-classes-ex-10"></a>

Why can multiplicative ratios mislead?

<details>
<summary>Hint 1</summary>

A ratio can divide by zero or compare signs incorrectly.

</details>
<details>
<summary>Hint 2</summary>

State a separate meaningful additive or normalized objective guarantee.

</details>
<details>
<summary>Solution</summary>

Multiplying or dividing by a negative or zero optimum reverses or destroys the intended comparison. An additive or shifted/normalized guarantee is needed.

</details>

<a id="section-358-exercise-11-promise-output"></a>
### Exercise 11: Promise output {#section-360-exercise-11-promise-output}
<a id="randomized-and-approximation-classes-ex-11"></a>

What must a promise-preserving reduction prove?

<details>
<summary>Hint 1</summary>

Specify both promised source signs.

</details>
<details>
<summary>Hint 2</summary>

Their images must satisfy the target promise as well as the correct answer.

</details>
<details>
<summary>Solution</summary>

Promised yes inputs map to target yes instances, promised no inputs to target no instances, and outputs fall within the target promise. Outside-source-promise behavior is irrelevant unless specified.

</details>

<a id="section-382-exercise-12-sampling-evidence"></a>
### Exercise 12: Sampling evidence {#section-384-exercise-12-sampling-evidence}
<a id="randomized-and-approximation-classes-ex-12"></a>

What do one million successful trials establish?

<details>
<summary>Hint 1</summary>

Name the sample distribution and finite evidence.

</details>
<details>
<summary>Hint 2</summary>

A worst-case theorem needs a quantified proof beyond the sample.

</details>
<details>
<summary>Solution</summary>

They estimate behavior under the sampled generator and inputs. They do not prove worst-case correctness, independence, or a universal probability bound without additional analysis.

A model answer records which generator and inputs were used, the observed finite outcomes and any estimation assumptions. It cannot infer that an unobserved adversarial instance is covered, that reused seeds are independent, or that a displayed mathematical probability inequality holds for every input. Those conclusions require the hypotheses and proofs stated separately in the chapter.

</details>

[Book overview](#/books/formal-computation-proof-reference)


<a id="section-412-sources"></a>
## Sources {#section-414-sources}

The preserved Randomized Computation source is copied with its twelve solved exercises, while its full promise/project continuation and all MAX3SAT task IDs, data, tables, keys and inert code remain in credited [back matter](promise-problems-and-max3sat-workshop.md). The ZPP and amplification proofs and three small worked examples develop the source. Sanjeev Arora and Boaz Barak, [*Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/), is the benchmark for randomized classes and approximation.

<a id="section-416-summary"></a>
## Summary {#section-418-summary}

One-sided, two-sided and zero-error algorithms impose distinct correctness and runtime conditions. ZPP equals RP intersect coRP by conclusive repetition and Markov truncation. Independent-run moment bounds prove exponential amplification. Matching endpoints and conditional expectations give approximation guarantees under their exact input conventions. Feasibility, accuracy dependence, objective signs and promise domains remain part of the theorem; the preserved workshop supplies complete public worked cases.
