var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: randomness-approximation
title: "Randomness and Approximation"
level: undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Randomness and Approximation {#section-1-randomness-and-approximation}

Randomized and approximation algorithms relax different things. Randomization permits different executions on the same input; approximation permits an output whose objective may differ from optimum. Either may still carry an exact theorem.

<a id="section-3-1-las-vegas-and-monte-carlo-contracts"></a>
## 1. Las Vegas and Monte Carlo contracts {#section-5-1-las-vegas-and-monte-carlo-contracts}

A **Las Vegas** algorithm always returns a correct answer but has random running time. A **Monte Carlo** algorithm has a fixed resource budget but may return an incorrect answer with bounded probability.

Randomized quicksort is commonly analyzed as Las Vegas: every pivot sequence still sorts correctly, while comparison count is random. A primality witness test may be used in a Monte Carlo pattern: after independent random trials, a composite input may escape detection with a proved probability bound under the test’s hypotheses.

Never report “99% accurate” without saying whether probability is over internal coins, sampled data, a distribution of inputs, or measurement noise.

<a id="section-11-2-indicator-variables-and-linearity"></a>
## 2. Indicator variables and linearity {#section-13-2-indicator-variables-and-linearity}

For events $E_{i}$, let $I_{i}$ be one when $E_{i}$ occurs and zero otherwise. Then $E[I_{i}]=P(E_{i})$. Linearity gives

\\[E[\\sum I_{i}]=\\sum P(E_{i})\\]

without independence.

In hashing $n$ keys into $m$ buckets with pairwise collision probability $1/m$, the number of colliding unordered pairs is $C=\\sum_{i<j} I_{ij}$, so

$E[C]=\\binom{n}{2}/m$.

Dependencies among different collision indicators matter for variance but not this expectation.

<a id="section-25-3-amplification-and-its-hypotheses"></a>
## 3. Amplification and its hypotheses {#section-27-3-amplification-and-its-hypotheses}

Suppose one independent run returns the correct Boolean answer with probability at least $3/4$. Repeat $k$ times and take a majority. A concentration bound makes majority error exponentially small in $k$.

Independence is material. Repeating with the same random seed produces identical outcomes and no amplification. If a test has one-sided error, accepting or rejecting after repeated trials should follow the correct side: for a witness-finding compositeness test, reject primality as soon as any valid witness appears.

<a id="section-31-4-reservoir-sampling"></a>
## 4. Reservoir sampling {#section-33-4-reservoir-sampling}

To choose one uniformly random item from a stream of unknown length, keep the first item. On seeing item $i$, replace the reservoir with probability $1/i$.

Induction proves uniformity. The new item is kept with probability $1/i$. An older item had probability $1/(i-1)$ before step $i$ and survives with probability $(i-1)/i$, so its new probability is also $1/i$.

This proof assumes ideal uniform random choices. A finite pseudorandom generator makes a deterministic sequence conditional on its seed; reproducibility is valuable, but it does not create mathematical independence by itself.

<a id="section-39-5-approximation-ratios"></a>
## 5. Approximation ratios {#section-41-5-approximation-ratios}

For a minimization problem with optimum $OPT>0$, an algorithm is an $\\alpha$-approximation when it always returns feasible value $ALG \\le \\alpha\\cdot OPT$. For maximization, the conventional inequality is $ALG \\ge OPT/\\alpha$ for $\\alpha\\ge 1$, or sometimes $ALG \\ge \\alpha\\cdot OPT$ for $0<\\alpha\\le 1$; state the convention.

The metric traveling-salesperson problem has a classic doubling argument. Take a minimum spanning tree of weight at most $OPT$. Double its edges to obtain an Eulerian walk of weight at most $2OPT$. Shortcut repeated vertices; triangle inequality ensures shortcuts do not increase cost. The resulting tour is at most $2OPT$.

Each hypothesis matters. Without triangle inequality, a shortcut can be arbitrarily more expensive than the two edges it replaces.

<a id="section-47-6-greedy-set-cover"></a>
## 6. Greedy set cover {#section-49-6-greedy-set-cover}

Given a universe and subsets with unit cost, repeatedly choose the set covering the most currently uncovered elements. If $r$ elements remain and an optimum uses $k$ sets, one optimum set covers at least $r/k$ of them. Hence the remainder contracts by a factor at most $1-1/k$ per greedy choice, leading to a logarithmic approximation guarantee.

The proof compares progress to a fixed optimum; it does not claim each greedy choice belongs to an optimum solution. Greedy can be locally plausible yet globally suboptimal.

<a id="section-53-7-randomized-rounding"></a>
## 7. Randomized rounding {#section-55-7-randomized-rounding}

A linear relaxation may assign fractional decision values $x_{i}\\in[0,1]$. Randomized rounding independently includes item $i$ with probability $x_{i}$. The expected cost equals the fractional cost by linearity. Feasibility may fail, so the analysis needs concentration, alteration, or dependent rounding.

This method separates three layers:

1. the relaxation is a lower or upper bound on the integer optimum;
2. rounding translates fractional structure into a random discrete candidate;
3. a theorem controls objective and constraint violation.

Showing only expected objective value does not prove that a feasible good realization exists unless feasibility and probability are also handled.

<a id="section-65-8-streaming-approximation"></a>
## 8. Streaming approximation {#section-67-8-streaming-approximation}

Approximate counting and frequency sketches trade exact answers for small memory. A useful contract names additive versus relative error, confidence, update model, and query family. For an additive frequency sketch, a statement might read:

$P\\!\\left(\\lvert \\operatorname{estimate}(i)-\\operatorname{frequency}(i)\\rvert
\\le \\varepsilon\\,\\operatorname{stream\\_length}\\text{ for every queried }i\\right)
\\ge 1-\\delta$.

The guarantee may be simultaneous only for a fixed query set; adaptively chosen queries can require stronger analysis. Hash functions assumed fully random in a proof may be approximated by finite independence in an implementation.

<a id="section-75-9-derandomization-and-adversaries"></a>
## 9. Derandomization and adversaries {#section-77-9-derandomization-and-adversaries}

The probabilistic method proves existence by showing a random object has positive probability of a property. A constructive algorithm must actually find one. Conditional expectation can sometimes fix random choices one by one while preserving a nonworsening expected objective.

Adversary timing matters. A hash function chosen secretly after a fixed input sequence faces an oblivious input. An adaptive adversary observing outputs may select later inputs to exploit state. A guarantee for the first model does not automatically survive the second.

<a id="section-81-worked-audit-a-cut-by-random-assignment"></a>
## Worked audit: a cut by random assignment {#section-83-worked-audit-a-cut-by-random-assignment}

Assign each vertex of an undirected graph independently to left or right with probability one half. Each edge crosses with probability one half, so expected cut size is $\\lvert E\\rvert/2$. Therefore at least one cut has size at least $\\lvert E\\rvert/2$; otherwise the expectation would be smaller.

This is both an existence proof and a randomized half-approximation for maximum cut in expectation. To obtain a deterministic cut, assign vertices sequentially to the side that does not reduce the conditional expected final cut.

<a id="section-87-common-errors"></a>
## Common errors {#section-89-common-errors}

- Confusing probability of correctness with empirical fraction correct on a dataset.
- Amplifying correlated repeats as if independent.
- Reporting expected quality without a tail or existence argument where one is needed.
- Dividing by $OPT=0$ in a ratio definition.
- Omitting feasibility from an approximation claim.
- Assuming a pseudorandom generator meets every independence property used in a proof.


<a id="section-97-worked-example-1-prove-an-amplification-bound"></a>
## Worked example 1: prove an amplification bound {#section-99-worked-example-1-prove-an-amplification-bound}

Let $X_i$ indicate an error in independent run $i$, with $P(X_i=1)\\le1/4$. Put $X=\\sum_{i=1}^kX_i$ and use an odd number $k$ of runs. A wrong majority implies $X\\ge k/2$. For any nonnegative random variable $Y$, $E[Y]\\ge aP(Y\\ge a)$ when $a>0$, giving Markov's inequality. Apply it to $Y=3^X$ and $a=3^{k/2}$.

Independence gives $E[3^X]=\\prod_iE[3^{X_i}]$. Each factor equals $1+2P(X_i=1)\\le3/2$. Hence
$$P(\\text{wrong majority})\\le\\frac{(3/2)^k}{3^{k/2}}=(\\sqrt3/2)^k.$$
This proves exponential decay directly, even when the separate error probabilities differ. It requires independent run coins for the fixed input. If all runs reuse one random outcome, $X$ is either zero or $k$, so the error probability can stay $1/4$ for every $k$; multiplying moment expectations would then be invalid. The earlier exact seven-run binomial answer additionally assumes identical error probability $1/4$.

<a id="section-105-worked-example-2-complete-the-set-cover-approximation-p"></a>
## Worked example 2: complete the set-cover approximation proof {#section-107-worked-example-2-complete-the-set-cover-approximation-p}

Let the finite universe have $N\\ge1$ elements and admit a cover. Every set costs one. In each greedy step, charge each newly covered element the reciprocal of the number $c$ of elements covered at that step. The charges sum to one per chosen set, so their total is the size of the greedy cover.

Fix an optimum of $k$ sets, number those finitely many sets, and assign each element to the first optimum set containing it. This partitions the universe into groups $R_i\\subseteq S_i$, possibly empty. If $r$ assigned members of $R_i$ remain uncovered immediately before a greedy step, the available set $S_i$ covers at least those $r$ members. Greedy therefore covers at least $r$ new elements, and each member of this group covered now receives charge at most $1/r$. Order the group's elements by their covering time, arbitrarily within a tie. The $j$th such element is charged at most $1/(|R_i|-j+1)$: at its step at least that many group members were still uncovered, and simultaneous ties can only improve the bound.

The total group charge is at most the harmonic number $H_{|R_i|}\\le H_N$, with empty groups contributing zero. Summing over the $k$ groups proves $|G|\\le kH_N$. Since $H_N\\le1+\\ln N$ by comparing $1/j$ with the integral of $1/x$ over $[j-1,j]$, this is a logarithmic approximation. For an empty universe both covers have size zero and no ratio is needed. If the family does not cover the universe, the premise fails and the algorithm must report infeasibility rather than claim an approximation to a nonexistent optimum.

<a id="section-113-worked-example-3-metric-tsp-and-an-attained-optimum"></a>
## Worked example 3: metric TSP and an attained optimum {#section-115-worked-example-3-metric-tsp-and-an-attained-optimum}

Take the four points $(0,0),(1,0),(1,1),(0,1)$ with Manhattan distance. Distances are symmetric, nonnegative and obey the triangle inequality coordinatewise. The complete weighted graph has perimeter edges of weight one and diagonals of weight two. A spanning path around three perimeter edges has weight three; no spanning tree can weigh less because it has three edges, each of weight at least one.

Double that path and follow the Euler walk around and back. Its weight is six. Skip repeated vertices after their first visit and close the tour, obtaining the perimeter tour of weight four. Each shortcut replaces a subwalk by a direct edge no longer than its total, by repeated triangle inequalities. Any Hamiltonian tour has four edges of weight at least one, so four is optimal here.

For the general factor-two theorem on at least three vertices, remove one edge from an optimal tour. The result is a spanning path, hence a candidate spanning tree; nonnegative weights make its weight at most OPT. An MST has no greater weight, doubling gives an Eulerian walk of weight at most twice OPT, and metric shortcuts preserve that upper bound. Feasibility follows because the complete graph contains every shortcut edge and the resulting sequence visits each vertex once before returning. Zero OPT is allowed by the inequality proof, but a ratio must be described separately. Empty, singleton and two-vertex inputs require an explicit tour convention rather than an unstated use of a simple graph cycle.

<a id="section-121-checks-with-complete-solutions"></a>
## Checks with complete solutions {#section-123-checks-with-complete-solutions}


<a id="section-124-exercise-1"></a>
### Exercise 1 {#section-126-exercise-1}
<a id="randomness-approximation-ex-1"></a>

A one-sided test misses a bad input with probability at most $1/4$ per independent run. What is the miss probability after five runs?

<details>
<summary>Hint 1</summary>

Failure means every trial misses.

</details>
<details>
<summary>Hint 2</summary>

Multiply probabilities only because the trials are independent.

</details>
<details>
<summary>Solution</summary>

Let $M_{i}$ be the event that run $i$ misses. The repeated procedure misses exactly when all five events occur. Independence gives $P(M_{1}\\cap\\cdots\\cap M_{5})=\\prod_{i} P(M_{i}) \\le (1/4)^{5}=1/1024$. The multiplication would be unjustified if the runs reused correlated coins.

</details>

<a id="section-148-exercise-2"></a>
### Exercise 2 {#section-150-exercise-2}
<a id="randomness-approximation-ex-2"></a>

Why does expected cut size $\\lvert E\\rvert/2$ prove existence of a cut of at least that size?

<details>
<summary>Hint 1</summary>

Expectation is a finite weighted average.

</details>
<details>
<summary>Hint 2</summary>

If every assignment were below the average, the average would also be below itself.

</details>
<details>
<summary>Solution</summary>

The expectation is a probability-weighted average over the finitely many assignments. If every assignment cut strictly fewer than $\\lvert E\\rvert/2$ edges, their weighted average would also be strictly smaller than $\\lvert E\\rvert/2$, contradicting the computed expectation. Thus at least one assignment attains the average or better.

</details>

<a id="section-172-exercise-3"></a>
### Exercise 3 {#section-174-exercise-3}
<a id="randomness-approximation-ex-3"></a>

What breaks the doubled-tree TSP proof on nonmetric costs?

<details>
<summary>Hint 1</summary>

Locate the shortcut step.

</details>
<details>
<summary>Hint 2</summary>

The direct replacement edge needs the triangle inequality.

</details>
<details>
<summary>Solution</summary>

The Euler tour of the doubled tree may revisit vertices. Turning it into a Hamiltonian tour shortcuts subwalks. The triangle inequality is precisely what proves each shortcut costs no more than the subwalk it replaces; without it, a shortcut edge can be arbitrarily expensive, so the factor-two bound disappears.

</details>

<a id="section-196-exercise-4"></a>
### Exercise 4 {#section-198-exercise-4}
<a id="randomness-approximation-ex-4"></a>

Classify two algorithms: randomized quicksort, and a tester that runs for exactly 100 trials and can falsely accept.

<details>
<summary>Hint 1</summary>

Ask whether correctness or runtime is random.

</details>
<details>
<summary>Hint 2</summary>

A bounded budget with possible wrong answers is Monte Carlo.

</details>
<details>
<summary>Solution</summary>

Randomized quicksort is Las Vegas under its ordinary contract: every pivot sequence produces a sorted permutation, while the number of comparisons is random. The fixed-budget tester is Monte Carlo: its resource budget is bounded but its returned proposition can be wrong. The classification concerns the proved contract, not merely the presence of random bits.

</details>

<a id="section-220-exercise-5"></a>
### Exercise 5 {#section-222-exercise-5}
<a id="randomness-approximation-ex-5"></a>

$n$ distinct keys are hashed so that each unordered pair collides with probability $1/m$. Find the expected number of colliding pairs without assuming mutual independence.

<details>
<summary>Hint 1</summary>

Use one indicator per unordered pair.

</details>
<details>
<summary>Hint 2</summary>

Linearity does not require indicator independence.

</details>
<details>
<summary>Solution</summary>

For every pair $\\{i,j\\}$, define $I_{ij}$ to be one on collision. Then $C=\\sum_{i<j} I_{ij}$ and $E[I_{ij}]=1/m$. Linearity of expectation, which needs no independence, gives $E[C]=\\sum_{i<j}1/m=\\binom{n}{2}/m$.

</details>

<a id="section-244-exercise-6"></a>
### Exercise 6 {#section-246-exercise-6}
<a id="randomness-approximation-ex-6"></a>

A Boolean procedure is wrong with probability $1/4$ on each independent run. For seven runs and majority vote, give an exact expression and a simple numerical upper bound for failure.

<details>
<summary>Hint 1</summary>

A wrong seven-run majority has at least four errors.

</details>
<details>
<summary>Hint 2</summary>

Sum the four binomial terms, including their success factors.

</details>
<details>
<summary>Solution</summary>

The majority is wrong when at least four runs are wrong, so the probability is $\\sum_{j=4}^{7} \\binom{7}{j}(1/4)^j(3/4)^{7-j}$. Its numerator over $4^{7}$ is $35*27+21*9+7*3+1=1156$, hence the probability is $1156/16384=289/4096<0.071$. This calculation uses identical independent Bernoulli trials.

</details>

<a id="section-268-exercise-7"></a>
### Exercise 7 {#section-270-exercise-7}
<a id="randomness-approximation-ex-7"></a>

After reservoir sampling has processed $t$ items, prove that every item occupies the reservoir with probability $1/t$.

<details>
<summary>Hint 1</summary>

Consider the new item and one fixed old item separately.

</details>
<details>
<summary>Hint 2</summary>

An old item must survive the new replacement decision.

</details>
<details>
<summary>Solution</summary>

Induct on $t$. The claim is immediate at $t=1$. At step $t$, the new item is selected with probability $1/t$. Each old item had probability $1/(t-1)$ by induction and survives the replacement with probability $1-1/t=(t-1)/t$, so its final probability is $(1/(t-1))*((t-1)/t)=1/t$.

</details>

<a id="section-292-exercise-8"></a>
### Exercise 8 {#section-294-exercise-8}
<a id="randomness-approximation-ex-8"></a>

A maximization algorithm always returns value at least $0.8 OPT$. Express the guarantee in the $\\alpha\\ge 1$ convention.

<details>
<summary>Hint 1</summary>

Match $0.8$ to $1/\x07lpha$.

</details>
<details>
<summary>Hint 2</summary>

Use the convention with approximation factor at least one.

</details>
<details>
<summary>Solution</summary>

Solve $1/\\alpha=0.8$, obtaining $\\alpha=1.25$. Thus it is a $1.25$-approximation under the convention $ALG\\ge OPT/\\alpha$. Stating only “$0.8$-approximation” is ambiguous because another convention reserves ratios at least one.

</details>

<a id="section-316-exercise-9"></a>
### Exercise 9 {#section-318-exercise-9}
<a id="randomness-approximation-ex-9"></a>

In unit-cost set cover, $r$ elements remain and some optimum cover uses $k$ sets. Why must greedy cover at least $r/k$ of the remaining elements next?

<details>
<summary>Hint 1</summary>

The optimum sets cover every remaining element.

</details>
<details>
<summary>Hint 2</summary>

At least one must cover at least the average remaining share.

</details>
<details>
<summary>Solution</summary>

The $k$ optimum sets together cover all $r$ remaining elements, possibly with overlap. If every one covered fewer than $r/k$ remaining elements, their union would contain fewer than $k(r/k)=r$ elements. Therefore one covers at least $r/k$, and greedy covers at least as many as that set.

</details>

<a id="section-340-exercise-10"></a>
### Exercise 10 {#section-342-exercise-10}
<a id="randomness-approximation-ex-10"></a>

Give a fractional rounding example where the expected objective is correct but feasibility often fails.

<details>
<summary>Hint 1</summary>

Round two one-half variables independently.

</details>
<details>
<summary>Hint 2</summary>

Both can become zero despite the expected sum being one.

</details>
<details>
<summary>Solution</summary>

Consider the constraint $y_{1}+y_{2}\\ge 1$ with fractional point $x_{1}=x_{2}=1/2$ and unit cost. Independent rounding has expected cost $E[y_{1}+y_{2}]=1$, equal to the fractional cost, but selects neither item with probability $1/4$, violating the constraint. Expected cost alone therefore does not establish a feasible approximation.

</details>

<a id="section-364-exercise-11"></a>
### Exercise 11 {#section-366-exercise-11}
<a id="randomness-approximation-ex-11"></a>

Derandomize the half-approximation for maximum cut by conditional expectation.

<details>
<summary>Hint 1</summary>

The next vertex has two conditional choices.

</details>
<details>
<summary>Hint 2</summary>

Their mean is the current conditional expectation.

</details>
<details>
<summary>Solution</summary>

Fix vertices one at a time. Given a partial assignment, compute the expected final number of crossing edges under uniformly random assignments of the remaining vertices. The average of the two conditional expectations obtained by placing the next vertex left or right equals the current conditional expectation, so at least one choice does not decrease it. Choose that side. After all choices, the conditional expectation is the actual cut size and remains at least the initial value $\\lvert E\\rvert/2$.

</details>

<a id="section-388-exercise-12"></a>
### Exercise 12 {#section-390-exercise-12}
<a id="randomness-approximation-ex-12"></a>

Distinguish an oblivious from an adaptive adversary in a randomized hash table.

<details>
<summary>Hint 1</summary>

Ask when the input sequence is fixed.

</details>
<details>
<summary>Hint 2</summary>

Observations can correlate later chosen keys with the hidden hash function.

</details>
<details>
<summary>Solution</summary>

An oblivious adversary fixes the entire key sequence without seeing the randomly chosen hash function or intermediate outputs. An adaptive adversary chooses a later key after observing earlier behavior. A bound proved by taking probability over a secret hash function for each fixed sequence covers the first setting; it does not automatically hold after observations correlate future keys with the hash function.

</details>

<a id="section-412-exercise-13"></a>
### Exercise 13 {#section-414-exercise-13}
<a id="randomness-approximation-ex-13"></a>

A sketch promises additive error at most $\\varepsilon N$ with probability $1-\\delta$. For $N=2,000,000$, $\\varepsilon=0.002$, and $\\delta=0.01$, translate the contract numerically.

<details>
<summary>Hint 1</summary>

Multiply the additive fraction by stream length.

</details>
<details>
<summary>Hint 2</summary>

The resulting absolute error is not a relative error for rare items.

</details>
<details>
<summary>Solution</summary>

The permitted absolute error is $0.002*2,000,000=4,000$. Thus, under the theorem's stated query model, the reported frequency lies within 4,000 of the true frequency with probability at least $0.99$. This does not imply two-percent relative error for rare items.

</details>

<a id="section-436-exercise-14"></a>
### Exercise 14 {#section-438-exercise-14}
<a id="randomness-approximation-ex-14"></a>

Why is a multiplicative ratio unsafe when a minimization instance has $OPT=0$, and what can replace it?

<details>
<summary>Hint 1</summary>

A ratio divides by zero.

</details>
<details>
<summary>Hint 2</summary>

An inequality with zero optimum forces exact zero cost.

</details>
<details>
<summary>Solution</summary>

The quotient $ALG/OPT$ is undefined, and the inequality $ALG\\le \\alpha OPT$ forces $ALG=0$, which may be a qualitatively different exactness requirement. A theorem should separately handle zero-optimum instances or use an additive guarantee such as $ALG\\le OPT+\\beta$ when that metric fits the problem.

</details>

<a id="section-460-exercise-15"></a>
### Exercise 15 {#section-462-exercise-15}
<a id="randomness-approximation-ex-15"></a>

Suppose a randomized minimization algorithm always returns a feasible solution and satisfies $E[ALG]\\le \\alpha OPT$. Show that one run exceeds $2 \\alpha OPT$ with probability at most $1/2$, then amplify by keeping the best of $k$ independent runs.

<details>
<summary>Hint 1</summary>

Use Markov for one nonnegative feasible output.

</details>
<details>
<summary>Hint 2</summary>

The minimum is bad only when all independent candidates are bad.

</details>
<details>
<summary>Solution</summary>

Since $ALG$ is nonnegative, Markov's inequality gives $P(ALG>2 \\alpha OPT)\\le E[ALG]/(2 \\alpha OPT)\\le 1/2$ for $OPT>0$. The minimum of $k$ independent runs is bad only if every run is bad, so its failure probability is at most $2^{-k}$. Feasibility is preserved because every candidate is feasible.

</details>

<a id="section-484-exercise-16"></a>
### Exercise 16 {#section-486-exercise-16}
<a id="randomness-approximation-ex-16"></a>

Which independence assumptions are sufficient for the expected-collision calculation and for majority-vote amplification?

<details>
<summary>Hint 1</summary>

Separate marginal pair collision probabilities from many-run joint probabilities.

</details>
<details>
<summary>Hint 2</summary>

A product of error probabilities needs the relevant mutual independence.

</details>
<details>
<summary>Solution</summary>

The collision expectation needs only each pair's marginal collision probability, because linearity does not require the indicators to be independent. The binomial majority calculation requires the run-error indicators to be mutually independent (or a different concentration theorem with explicitly weaker hypotheses). Pairwise independence alone does not justify multiplying probabilities of many simultaneous errors.

</details>

<a id="section-508-project-approximation-claims-under-audit"></a>
## Project: approximation claims under audit {#section-510-project-approximation-claims-under-audit}

Build a dependency-free experimental and proof dossier comparing two algorithms on small undirected weighted graphs. First implement random-cut sampling and its conditional-expectation derandomization; independently check that every reported cut is a vertex partition and recompute its weight. Second implement doubled-tree metric TSP for complete graphs, including an MST checker, Euler-walk checker, shortcut tour checker, and brute-force optimum for instances small enough to enumerate. Generate metric instances from shortest-path distances and deliberately generate at least one nonmetric instance that defeats the shortcut argument. The report must separate deterministic guarantees from empirical distributions, record seeds, plot or tabulate approximation ratios without treating experiments as proof, state every probability space, and supply proofs of the half-cut and factor-two TSP guarantees. Include empty, singleton, disconnected-precondition, tied-weight, and zero-optimum cases, explaining which are valid inputs under each contract.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=cost-amortization-lower-bounds) · [Book overview](#/item/book-algorithms-computation-proof-desk)


<a id="section-515-sources"></a>
## Sources {#section-517-sources}

The original native chapter and every original worked solution and reference implementation remain in this source, developed for the twelve-chapter L2 route. Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [*Mathematics for Computer Science*](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/), is an author-written reference for finite proofs and computational foundations.

<a id="section-519-summary"></a>
## Summary {#section-521-summary}

Randomness changes runs, while approximation changes the permitted objective gap. Independent repeats support amplification; linearity needs no independence. Reservoir sampling follows a survival induction. Metric shortcuts and set-cover charges prove approximation bounds under their exact hypotheses. Expected cost or quality never supplies omitted feasibility, adversary or zero-optimum conditions.
`;export{e as default};