var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: martingales-upcrossing-l1-convergence
title: "Martingales, Upcrossing and L1 Convergence"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Martingales, Upcrossing and L1 Convergence

Martingale convergence is not one theorem saying every fair process settles with its expectation preserved. Almost-sure convergence follows from an upcrossing bound under a first-moment condition. Convergence in L one requires uniform integrability, and that stronger conclusion identifies a terminal conditional expectation. This chapter proves those statements and the stopped-integral identities used with them.

Use the RN conditional-expectation construction, uniform integrability and the elementary probability results already developed. The retained L3 martingale source remains earlier preparation; no chapter identities or original exercises are moved. Filtrations are increasing sigma-algebras indexed by nonnegative integers, and all processes are adapted and integrable at each finite time.

## Martingales and one-sided conditional drift

A martingale has conditional next value equal to its current value. A submartingale has conditional next value at least its current value, and a supermartingale has the reverse inequality. Iterating the tower property gives the corresponding comparison between any two deterministic times.

For a bounded predictable multiplier, meaning its time-k value is measurable at time k minus one, a martingale increment has zero expected multiplied value. For a nonnegative predictable multiplier and submartingale increment, the expected multiplied value is nonnegative. Both claims follow by conditional pull-out and the defining drift property.

We use only finite sums of such increments until a limit theorem justifies an infinite or unbounded-time operation. A formal telescoping expression at an unbounded time is not an optional-stopping theorem by itself.

## Greedy upcrossings and a pathwise inequality

Fix real a below b. Buy one unit when the observed submartingale first falls at or below a, hold until it reaches at least b, sell, and repeat. Let U n count completed upcrossings through time n, and let H k indicate whether the unit is held during the kth increment. This strategy is predictable and takes only zero and one values.

Every completed holding interval gains at least b minus a. If a unit is still held at the final time, it was bought at a price at most a. Its unfinished gain is at least minus the negative part of X n minus a. Thus, path by path,
$$G_n=\\sum_{k=1}^nH_k(X_k-X_{k-1})
\\ge(b-a)U_n-(X_n-a)^-.$$
The unfinished position is the reason a terminal correction appears.

The complementary strategy one minus H is also nonnegative and predictable. Its expected gain is nonnegative for a submartingale, so expected G n is at most expected X n minus expected X zero. Combining and writing positive and negative parts gives the useful bound
$$(b-a)EU_n\\le
E(X_n-a)^++E(X_0-a)^-.$$
A slightly sharper bound retains the subtracted initial positive part; the displayed version is sufficient and valid for all starts.

This is the upcrossing inequality proved from the actual strategy. Merely observing that the held strategy has nonnegative expectation would give the wrong direction for an upper bound; the complementary strategy supplies the needed comparison.

## Almost-sure submartingale convergence

Assume the positive-part expectations of a submartingale are uniformly bounded. Its means are at least its initial mean, so its negative-part expectations are bounded too. Therefore its L one norms have a finite uniform bound.

For every rational a below b, the upcrossing inequality gives a uniform bound on expected U n. Monotone convergence makes total upcrossings have finite expectation and hence be finite almost surely. Intersect these events over the countably many rational intervals. If a path's lower and upper limits differed, two rational numbers between them would force infinitely many greedy upcrossings, a contradiction.

Thus the path has an extended real limit almost surely. Fatou applied to absolute values and the uniform L one bound makes this limit finite almost surely and integrable. We have proved a finite almost-sure submartingale limit, without yet proving L one convergence.

For a nonnegative supermartingale, negate it to get a submartingale with positive part identically zero. The theorem gives a finite nonnegative almost-sure limit, with expected limit at most initial expectation by Fatou. Equality of expectations is an additional question.

### Worked example: a nonnegative martingale loses its mean

Toss independent fair coins and let M n equal two to the n while the first n coins are all heads, and zero otherwise. Given survival, the next value doubles with probability one half and becomes zero otherwise, so conditional expectation equals the current value. Its mean is one at every n.

Almost surely a tail eventually occurs, making the limit zero. The expected limit is zero rather than one. For any threshold K, choose n with two to the n exceeding K; the tail expectation of M n is still one. Thus the martingale is not UI. Bounded L one norms and nonnegativity gave an almost-sure limit, not preservation of mean or L one convergence.

## The UI martingale theorem and a terminal representation

A UI martingale has a uniform first-moment bound, so the theorem above supplies an integrable almost-sure limit M infinity. Vitali then gives L one convergence because UI and probability convergence hold. For a fixed earlier time n, the conditional expectation of every later value given F n equals M n. Conditional L one contraction lets the later index tend to infinity, proving
$$M_n=E[M_\\infty\\mid\\mathcal F_n].$$
This identifies the whole process as conditional expectations of one integrable terminal variable.

Conversely, if a process is of the form expected Z given F n for one Z in L one, the tower property makes it a martingale and the previous chapter's conditional-expectation family theorem makes it UI. Hence it converges almost surely and in L one. A martingale converging in L one is UI by the earlier norm-convergence criterion. These give the precise equivalence between UI, L one convergence and a closed terminal representation.

The terminal variable need not have been supplied in advance. In the UI direction it is the actual limit constructed by upcrossings and Vitali. An arbitrary first-moment-bounded martingale need not have such an L one terminal representation, as the coin example proves.

## Levy's upward theorem identifies the remaining information

Let F infinity be generated by the union of the increasing filtration. For a fixed integrable Z, its conditional-expectation martingale has a limit Y measurable with respect to F infinity. Choose a measurable version by taking the pointwise limit where it exists and zero on its measurable exceptional event.

For every event in any finite F n, L one convergence passes the defining integral identity to Y. The union of the F n is an algebra, hence a pi-system, generating F infinity. The equality class for the finite signed integrals of Y and Z is a lambda-system. Pi-lambda extends the identity to every F infinity event, so
$$E[Z\\mid\\mathcal F_n]\\longrightarrow
E[Z\\mid\\mathcal F_\\infty]\\quad\\hbox{almost surely and in }L^1.$$
This is Levy's upward theorem proved from the convergence results, with the final identification step included. It does not assume that the filtration eventually contains every possible event in the original probability space.

### Worked example: dyadic information learns an indicator

Let U be uniform on the unit interval and F n reveal its dyadic interval of length two to the minus n. Take Z as the indicator that U is at most one third. Conditional expectation is one on cells entirely below that point, zero on cells above it and the correct within-cell fraction on the one boundary cell.

Its discrepancy from Z is bounded by one and confined to that boundary cell, so the L one error is at most two to the minus n. Except at the boundary point, the cells eventually identify which side contains U, giving almost-sure convergence too. The dyadic sigma-algebras generate the Borel information, so the limit is Z. This particular indicator admits an explicit error rate; the general UI theorem made no universal rate claim.

## Bounded stopping and conditional optional sampling

For a stopping time tau bounded by N, its stopped martingale value has the finite decomposition
$$M_\\tau=M_0+\\sum_{k=1}^N
{\\bf1}_{\\{\\tau\\ge k\\}}(M_k-M_{k-1}).$$
Each indicator is measurable at time k minus one. Expected increments therefore vanish, proving expected stopped value equals expected initial value.

For stopping times sigma at most tau, both bounded by N, test their difference against an event A in the stopped sigma-algebra at sigma. The multiplier that A occurs and sigma is below k at most tau is predictable: decompose A on the events sigma equals j for j below k. Each multiplied increment again has zero expectation. This proves
$$E[M_\\tau\\mid\\mathcal F_\\sigma]=M_\\sigma.$$
Here the stopped sigma-algebra consists of events whose intersection with sigma at most n belongs to F n for every n. Its measurability conditions are part of the proof, not an informal instruction to condition on a random index.

## UI supplies an unbounded-time expectation limit

Suppose the martingale is closed by an integrable Z and tau is finite almost surely. For each n, the bounded stopped value M tau minimum n equals conditional Z given the corresponding stopped sigma-algebra. To verify this, partition an event in that stopped sigma-algebra by each possible bounded stopping value and apply the deterministic conditional tests on its pieces.

All these bounded stopped values therefore belong to the UI family of conditional expectations of one Z. They converge almost surely to M tau because tau is finite. Vitali makes the convergence L one, proving integrability of the stopped value and preservation of its expectation. This is an actual limit argument; no integrability of the stopped value was assumed merely from its notation.

For the coin martingale, stop at the first tail. The stopping time is finite almost surely and has mean two by its geometric tail, but the stopped value is zero while initial expectation is one. Thus even finite expected stopping time does not rescue every martingale with uncontrolled increments or missing UI. The bounded or UI hypotheses cannot be replaced by that one number alone.

## A branching martingale and its moment distinction

Consider a supercritical branching process starting from one ancestor, with independent identically distributed offspring of mean m above one. Given the population history, next expected population is m times current population. Normalizing by m to the generation gives a nonnegative martingale W n of mean one. The convergence theorem gives a finite almost-sure limit, with expected value at most one.

If offspring variance v is finite, conditional variance of next population is v times current size. The normalised martingale-increment second moment at generation n is therefore v divided by m to the n plus two. Orthogonality of martingale increments follows by conditioning the later increment on the earlier history. Summing gives
$$EW_n^2=1+\\frac{v}{m(m-1)}(1-m^{-n}).$$
This uniform second-moment bound implies UI, so the limit has mean one and convergence holds in L one. Fatou on squared tails and the summable increment variances also give L two convergence.

### Worked example: why an offspring moment changes the conclusion

The branching construction always gave a nonnegative mean-one martingale under a finite offspring mean. Adding finite offspring variance supplies the displayed bounded L two norms and hence mean preservation. Without that extra bound, the almost-sure theorem alone still permits loss of mean; it does not establish either outcome universally.

The coin martingale already shows why that distinction is real. A process can have every finite-time mean exactly correct while its limit represents a different amount of integrable mass. Uniform integrability identifies when convergence of the random values also converges in the integral sense needed by later probability calculations.

## A nonnegative maximal inequality is not a maximal-mean bound

For a nonnegative submartingale and positive lambda, partition the event of reaching lambda by its first crossing time through n. On the part crossing at k, the submartingale property makes the expected terminal value at least the expected crossing value, since that part is measurable at time k. Sum those comparisons to get lambda times the crossing probability at most the expected terminal value on the crossing event, and hence at most the full terminal mean.

Thus the probability that the maximum through n reaches lambda is at most the terminal mean divided by lambda. This is a tail inequality, not an assertion that expected maximum is bounded by expected terminal value. Integrating its reciprocal-lambda tail does not give a finite bound. In particular, first-moment control of individual times and integrability of a path maximum are distinct hypotheses in stopping or domination arguments.

## Exercises

<a id="martingales-upcrossing-l1-convergence-ex-1"></a>

### Exercise 1

Where does the upcrossing upper expectation bound use the complementary holding strategy?

<details><summary>Hint 1</summary>

The held strategy alone has a lower expected-gain comparison.

</details>

<details><summary>Hint 2</summary>

The complement bounds it above by total expected change.

</details>

<details><summary>Full solution</summary>

Nonnegative submartingale drift makes expected gain of one minus H nonnegative. Since its gain plus the held gain is total process change, the held expectation is at most that total expectation. Combined with the pathwise upcrossing inequality, this gives the required upper bound.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-2"></a>

### Exercise 2

Why are countably many rational intervals sufficient to force a pathwise limit?

<details><summary>Hint 1</summary>

Distinct lower and upper limits contain two rationals between them.

</details>

<details><summary>Hint 2</summary>

They would be upcrossed infinitely often.

</details>

<details><summary>Full solution</summary>

On the event where every rational interval has finitely many upcrossings, differing lower and upper limits are impossible. The countable intersection of these probability-one events remains probability one, giving an extended limit before Fatou excludes infinite values.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-3"></a>

### Exercise 3

Explain the additional hypothesis needed to turn almost-sure martingale convergence into L one convergence.

<details><summary>Hint 1</summary>

A first-moment bound need not control exceptional tail mass.

</details>

<details><summary>Hint 2</summary>

Apply Vitali with UI.

</details>

<details><summary>Full solution</summary>

Uniform integrability, together with the established probability or almost-sure limit, gives L one convergence. A bounded sequence of first moments alone does not; the coin martingale keeps one unit of mass in increasingly rare large values.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-4"></a>

### Exercise 4

Prove the closed representation for a UI martingale.

<details><summary>Hint 1</summary>

Condition a later value on a fixed earlier sigma-algebra.

</details>

<details><summary>Hint 2</summary>

Pass to the L one limit using contraction.

</details>

<details><summary>Full solution</summary>

Every later conditional expectation equals the earlier martingale value. L one convergence of later values and conditional contraction make their conditional expectations converge to conditional terminal value. Uniqueness gives M n equal to expected terminal M given F n.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-5"></a>

### Exercise 5

Identify the limit in Levy’s upward theorem.

<details><summary>Hint 1</summary>

Pass integral tests to the L one limit on finite filtration events.

</details>

<details><summary>Hint 2</summary>

Extend from their union algebra by pi-lambda.

</details>

<details><summary>Full solution</summary>

The limit is F infinity measurable and has the same integrals as Z on every event from any finite F n. Their union generates F infinity. Equality of the finite signed integral measures extends to it, identifying the limit as expected Z given F infinity.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-6"></a>

### Exercise 6

Why can the dyadic indicator example have a rate when the general convergence theorem has none?

<details><summary>Hint 1</summary>

Only one dyadic cell crosses the fixed boundary.

</details>

<details><summary>Hint 2</summary>

Its probability has an explicit geometric bound.

</details>

<details><summary>Full solution</summary>

The discrepancy is confined to a cell of mass two to the minus n and bounded by one, giving that particular L one rate. General UI provides only a tail-control condition, not a common geometric boundary structure or rate for all variables.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-7"></a>

### Exercise 7

Derive the bounded-stopping expectation identity.

<details><summary>Hint 1</summary>

Expand the stopped value using finitely many increments.

</details>

<details><summary>Hint 2</summary>

Each survival indicator is predictable.

</details>

<details><summary>Full solution</summary>

The indicator tau at least k belongs to F k minus one. Conditional mean-zero increments therefore integrate to zero after multiplication. The finite sum is integrable and gives expected M tau equal to expected M zero.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-8"></a>

### Exercise 8

Why are bounded stopped values of a closed martingale uniformly integrable?

<details><summary>Hint 1</summary>

Each is conditional expectation of the same terminal Z.

</details>

<details><summary>Hint 2</summary>

Apply the conditional-expectation family theorem.

</details>

<details><summary>Full solution</summary>

Partitioning by the bounded stopping value proves M sigma equals expected Z given F sigma. All those conditional expectations form a UI family. This supplies the legitimate Vitali limit for an almost-surely finite unbounded stop.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-9"></a>

### Exercise 9

Compute the mean and limit in the all-heads coin martingale.

<details><summary>Hint 1</summary>

Survival through n has probability two to the minus n.

</details>

<details><summary>Hint 2</summary>

A tail occurs eventually almost surely.

</details>

<details><summary>Full solution</summary>

Multiplying survival probability by two to the n gives finite-time mean one. Eventually a tail occurs and every later value is zero, giving limit zero. Its tail expectation can remain one at arbitrarily large thresholds, so UI fails.

</details>

<a id="martingales-upcrossing-l1-convergence-ex-10"></a>

### Exercise 10

How does finite offspring variance close the branching martingale’s mean gap?

<details><summary>Hint 1</summary>

Compute conditional increment variance and sum its expectations.

</details>

<details><summary>Hint 2</summary>

A bounded second moment implies UI.

</details>

<details><summary>Full solution</summary>

The normalised increment second moments sum to v divided by m times m minus one. Orthogonality yields bounded W n second moments, hence UI and L one convergence with limit mean one. Finite mean alone supplied only the nonnegative almost-sure convergence theorem.

</details>
`;export{e as default};