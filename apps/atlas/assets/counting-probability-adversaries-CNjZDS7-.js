var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: counting-probability-adversaries
title: "Counting, Probability, and Adversarial Examples"
level: undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Counting, Probability, and Adversarial Examples

Counting measures search spaces and certificates. Probability analyzes random choices and uncertain observations. Adversarial reasoning asks what happens when inputs are selected to stress the contract rather than resemble typical examples.

**Learning purpose.** You should be able to count an encoded search space
without double counting, condition on observed information, analyze random
algorithmic cost with indicators, and state what an adversary is allowed to
observe. This chapter uses the finite-object language of Chapter 2 and the
inductive arguments of Chapter 3.

## 1. Product and sum rules

If a construction chooses one of $a$ first options and independently one of $b$ second options for each first choice, it has $ab$ outcomes. If two disjoint cases have $a$ and $b$ outcomes, their union has $a+b$.

A length-$n$ binary string has $2^n$ possibilities. A permutation of $n$ distinct items has $n!$. Choosing a $k$-element subset has

$\\binom{n}{k}=n!/[k!(n-k)!]$.

These formulas imply resource warnings. An exhaustive truth table over $n$ Boolean variables has $2^n$ rows; a verifier that checks one proposed assignment can still run in polynomial time.

## 2. Bijections avoid double counting

To count subsets by size, map each binary string to the subset of positions containing one. This bijection proves

$\\sum_{k=0}^n \\binom{n}{k}=2^n$.

When objects have symmetry, naive encodings may count the same object several times. An undirected edge $\\{u,v\\}$ corresponds to ordered pairs $(u,v)$ and $(v,u)$ when $u\\ne v$, so a sum of degrees counts each edge twice.

## 3. Inclusion–exclusion

For finite sets,

$\\lvert A\\cup B\\rvert=\\lvert A\\rvert+\\lvert B\\rvert-\\lvert A\\cap B\\rvert$.

Three sets add single sizes, subtract pair intersections, then add the triple intersection. In testing, inclusion–exclusion can count inputs triggering at least one fault condition when overlaps are known.

The union bound needs no intersections:

$P(\\cup E_{i})\\le \\sum P(E_{i})$.

It can be loose but is robust and often sufficient for failure budgets.

## 4. Conditional probability and independence

For $P(B)>0$,

$P(A\\mid B)=P(A\\cap B)/P(B)$.

Events are independent when $P(A\\cap B)=P(A)P(B)$. Disjoint nonzero-probability events are not independent: knowing one occurred rules out the other.

Pairwise independence does not imply mutual independence. Let two fair bits $X,Y$ be independent and $\\mathbb{Z}=X \\oplus Y$. Each pair is independent, but knowing any two determines the third.

Algorithm analyses should state exactly which random variables need which independence order.

## 5. Expectation and indicators

Expectation is a weighted average, not the outcome of a typical run. Linearity holds without independence:

$E[X+Y]=E[X]+E[Y]$.

For a random permutation of $n$ items, let $I_{i}$ mark whether position $i$ is fixed. Each has probability $1/n$, so expected fixed points are $\\sum 1/n=1$. Most permutations do not need to have exactly one fixed point.

## 6. Variance and concentration

Variance measures squared deviation:

$Var(X)=E[(X-E[X])^{2}]$.

For independent variables, variances add. Markov’s inequality for nonnegative $X$ gives $P(X\\ge a)\\le E[X]/a$. Chebyshev gives

$P(\\lvert X-E[X]\\rvert\\ge t)\\le Var(X)/t^{2}$.

Sharper Chernoff-style bounds need appropriate independence and bounded-variable hypotheses. Invoking “concentration” without these conditions is not a proof.

## 7. The probabilistic method

If a randomly generated object has positive probability of satisfying a property, an object with that property exists. This can prove combinatorial existence without initially constructing the object.

For a graph, independently color each vertex red or blue. Each edge is bichromatic with probability one half. Expected bichromatic edges are $\\lvert E\\rvert/2$, so some coloring cuts at least half the edges.

Conditional expectation often derandomizes the proof by choosing colors sequentially to preserve the expected remaining total.

## 8. Adversarial input families

Worst-case analysis permits an input depending on algorithm design, not on its secret random bits unless an adaptive model says so. Classic adversarial families include:

- sorted input for poorly chosen quicksort pivots;
- many equal hash values for weak hashing;
- a long thin graph for recursion depth;
- nearly collinear geometry for cancellation;
- repeated prefixes for backtracking parsers;
- transitions that postpone an error until the deepest state.

An adversarial test is not evidence that ordinary data look adversarial. It establishes robustness boundaries.

## 9. Average-case needs a distribution

“Average input” is undefined until a probability distribution is chosen. Uniform over bit strings of length $n$ differs from uniform over represented integers, graph structures, or real-world files. A distribution may itself be hard to sample or may assign negligible probability to operationally important failures.

Smoothed analysis perturbs an arbitrary input by a stated noise model, interpolating between worst-case and average-case. Its theorem applies only to that perturbation law.

## 10. Randomness in experiments and algorithms

A seeded pseudorandom generator makes an experiment reproducible. Conditional on the seed, its sequence is deterministic. Statistical claims still depend on how seeds are sampled and whether the generator properties match the proof.

Do not reuse a test set as a source of repeated “independent” evaluations after adapting an algorithm to its failures. Adaptivity makes later results conditional on earlier observations.

## 11. Counting by recurrence and generating choices

Let $\\mathbb{F}_{n}$ count binary strings of length $n$ containing no adjacent ones. Such
a string either begins with zero followed by any valid length-$n-1$ string, or
begins with $10$ followed by any valid length-$n-2$ string. The cases are
disjoint and exhaustive, so

\\[\\mathbb{F}_{n}=F_{n-1}+F_{n-2}\\]

with $\\mathbb{F}_{0}=1$ for the empty word and $\\mathbb{F}_{1}=2$ for $0,1$. Thus counts are shifted
Fibonacci numbers.

The recurrence can generate objects without duplicates by following the same
disjoint first-symbol cases. A counting proof and an enumeration algorithm can
share one decomposition, but runtime also includes the length of every output.

## 12. Conditional probability as state update

Suppose a randomized test has sensitivity $0.99$ on faulty components and false
positive probability $0.02$ on good components. Only $1%$ of components are
faulty. For positive test $+$, Bayes’ rule gives

$P(faulty\\mid +) = 0.99\\cdot 0.01 / (0.99\\cdot 0.01+0.02\\cdot 0.99) = 1/3$.

High sensitivity does not make a positive result almost certainly faulty when
the base rate is small. The denominator mixes every route to the observation.

In algorithms, conditioning appears when analyzing a step given current state
or filtration. “Fresh random choice” should mean its conditional distribution
given previous revealed choices still has the required form.

## 13. Expected comparisons in randomized quicksort

Sort distinct ranked items $1,\\ldots,n$ by selecting pivots uniformly from each
current subarray. For $i<j$, indicator $X_{ij}$ records whether those two items
are directly compared. They are compared exactly when the first pivot chosen
from ranks $i,\\ldots,j$ is either endpoint. Hence

$P(X_{ij}=1)=2/(j-i+1)$.

Total comparisons $X=\\sum_{i<j}X_{ij}$, so

$E[X]=\\sum_{i<j}2/(j-i+1)$.

Group by distance $d=j-i$: there are $n-d$ pairs, giving

$E[X]=\\sum_{d=1}^{n-1} 2(n-d)/(d+1) \\le 2n \\sum_{k=2}^n 1/k = \\mathcal{O}(n \\log n)$.

The indicators are dependent, but linearity needs no independence. Correctness
is deterministic for every pivot sequence; only cost is random. One run can
still take quadratic comparisons.

## 14. Tail bounds from first principles

Markov’s inequality follows from pointwise inequality

\\[X \\ge a\\cdot 1[X\\ge a]\\]

for nonnegative $X$. Taking expectations gives
$E[X]\\ge aP(X\\ge a)$.

Chebyshev applies Markov to nonnegative $(X-E[X])^{2}$:

$P(\\lvert X-E[X]\\rvert\\ge t) \\le Var(X)/t^{2}$.

These proofs expose hypotheses. Markov needs nonnegativity; applying it directly
to a signed runtime difference is invalid. Chebyshev needs finite variance.
Neither requires independence once the variance is known.

For sums of bounded independent variables, exponential-moment arguments give
stronger tails. The independence enters when factoring the moment generating
function. Pairwise independence may suffice for variance but not for a standard
Chernoff factorization.

## 15. Union bounds in reliability and verification

If a system has failure events $E_{1},\\ldots,E_{m}$, then

$P(any failure)\\le \\sum P(E_{i})$.

To keep total failure at most $\\delta$, one can allocate budgets $\\delta_{i}$ with
sum at most $\\delta$. This works without independence and is valuable for
composing randomized subroutines.

The bound can be pessimistic. If every event is identical, the sum multiplies
one probability by $m$ although the union is the same event. A guarantee can be
valid yet too weak to support the desired engineering decision.

For infinitely many events, countable union bounds still apply when the sum
converges. If the allocated probabilities form $\\delta/2,\\delta/4,\\ldots$, total is
at most $\\delta$. This pattern supports anytime algorithms with many stages.

## 16. Adversary timing and randomized data structures

Distinguish:

- **oblivious adversary:** fixes the input sequence before random seed is drawn;
- **adaptive adversary:** chooses later actions after observing outputs;
- **white-box adversary:** may inspect internal state or randomness;
- **computationally bounded adversary:** has a named time or query budget.

A randomized hash table can resist fixed worst-case key sets when a secret hash
function is drawn after keys are fixed. If hash values or timing leak enough
information, an adaptive attacker may construct collisions. The theorem must
match the interaction.

Random order is another assumption, not the same as random algorithm choices.
An algorithm can be deterministic on an input arriving in uniformly random
order. Moving randomness from procedure to data changes who controls it and
what conditioning is permitted.

## 17. Simulation as a falsification instrument

A seeded experiment can reveal a mistaken formula. For a proposed collision
bound:

1. state the random generator and sample space;
2. compute an exact small case by enumeration;
3. simulate many independent seeds;
4. compare estimates with uncertainty;
5. vary input scale and adversarial cases.

Agreement does not prove the formula, but disagreement can expose a coding bug,
incorrect independence assumption, or wrong event definition. After adapting
the theory to simulation results, use fresh checks; the original comparison is
no longer an untouched validation.

## 18. Exact collision probability and its bounds

Place $k$ independently uniform samples into $m$ buckets. Assuming $k\\le m$, the
probability of no collision is

$P(no collision)=1\\cdot(1-1/m)\\cdot(1-2/m)\\cdots(1-(k-1)/m)$.

The factors arise conditionally: after $i$ distinct samples, the next avoids
them with probability $(m-i)/m$. Therefore

$P(collision)=1- \\prod_{i=0}^{k-1}(1-i/m)$.

This exact formula and the union bound answer different needs. Since every
pair collides with probability $1/m$, the union bound gives

$P(collision)\\le \\binom{k}{2}/m$.

For a lower estimate, use $1-u\\le \\exp(-u)$ for $u\\ge 0$:

$P(no collision)\\le \\exp(-k(k-1)/(2m))$,

so collision probability is at least
$1-\\exp(-k(k-1)/(2m))$. The scale $k\\approx \\sqrt{m}$ follows without claiming the two
bounds are equal. When the union bound exceeds one it remains valid after
truncation at one but conveys little quantitative information.

If samples are drawn without replacement, collision probability is zero. The
marginal statement “each sample is uniform” is therefore insufficient; the
joint sampling rule matters.

## 19. Amplification requires fresh conditional randomness

Suppose a one-sided randomized checker never rejects a true statement and
accepts a fixed false statement with probability at most $p<1$. Run it $r$
times and accept only if every run accepts. If the runs use independent fresh
coins, the false-accept probability is at most $p^r$.

The multiplication is a conditional calculation:

$P(all accept)=\\prod_{i} P(run i accepts \\mid earlier runs accept)$.

Independence makes every factor at most $p$. Reusing exactly the same seed can
make all outcomes identical, leaving error probability $p$, not $p^r$. It is
also enough to establish the conditional bound directly; literal independence
is a convenient sufficient condition, not magic syntax.

For a two-sided procedure, “take a majority” needs a concentration argument
and an individual success probability strictly above one half. Repeating an
unbiased coin-flip answer does not create information. Repeating a biased but
correlated answer may fail to concentrate.

Amplification also changes cost. If one run takes time $T(n)$ and uses $b(n)$
random bits, $r$ sequential independent runs take $rT(n)$ time and $rb(n)$
fresh bits under the straightforward implementation. A smaller error parameter
is not free.

## 20. Derandomizing the half-cut guarantee

Randomly color every vertex of graph $G=(V,E)$ red or blue independently and
uniformly. Each edge crosses colors with probability one half, so expected cut
size is $\\lvert E\\rvert/2$. We can construct such a cut deterministically by conditional
expectation.

Order vertices $v1,\\ldots,vn$. Before assigning $vi$, condition on all earlier
choices and compute the expected final cut size under each possible color for
$vi$, leaving later vertices random. The current conditional expectation is the
average of those two candidate expectations. Therefore at least one choice is
no smaller than the current value. Choose it.

Induction on assigned vertices proves the conditional expectation never drops.
Initially it is $\\lvert E\\rvert/2$. After all vertices are assigned there is no randomness,
so conditional expectation equals the actual cut size. The constructed cut
therefore contains at least $\\lvert E\\rvert/2$ edges.

This proof gives an algorithm when candidate conditional expectations are
efficiently computable. Here only edges incident to the chosen vertex need be
accounted for: edges to assigned vertices have decided status, while edges to
unassigned vertices still contribute one half regardless of the chosen color.
Equivalently, place $vi$ on the side that cuts at least as many edges to already
assigned neighbors as the other side.

The result is an approximation guarantee for maximum cut: since the optimum is
at most $\\lvert E\\rvert$, a cut of at least $\\lvert E\\rvert/2$ is a one-half approximation. It does
not say the constructed cut is always optimal.

## Worked audit: birthday collisions

Hash $k$ distinct keys uniformly and independently into $m$ values. For each pair, collision probability is $1/m$; expected colliding pairs are $\\binom{k}{2}/m$.

The probability of at least one collision is at most this expectation by the union bound. When $k$ is about $\\sqrt{m}$, the bound becomes order one: collisions appear far earlier than filling all $m$ values.

This analysis assumes uniform independent hashes. A deterministic unkeyed hash facing crafted inputs can behave very differently.

## Common errors

- Adding counts from overlapping cases without correcting overlap.
- Treating expected value as a guarantee for every run.
- Assuming independence because variables have the same marginal distribution.
- Applying a concentration inequality without checking range and dependence.
- Saying “average case” without a probability law.
- Letting an adversary see secret random coins in a theorem that assumes it cannot.


## Worked example 1: conditional counting in a finite sample space

Choose three independent fair bits. Each of the eight strings has probability $1/8$. Let $E$ be even parity and $F$ the event that the first bit is zero. Then $E=\\{000,011,101,110\\}$ and $F=\\{000,001,010,011\\}$. Their intersection is $\\{000,011\\}$, so $P(E)=P(F)=1/2$ and $P(E\\cap F)=1/4$.

Consequently $P(E\\mid F)=(1/4)/(1/2)=1/2$, which equals $P(E)$. Thus these two events are independent even though the strings in each event share a structural condition. After conditioning on $F$, the sample space has four equally likely strings; exactly two have even parity. Independence was established by counting, not inferred from a verbal impression. Had the generator used a different joint law on the bits, the eight strings need not have been equally likely and this calculation would need new weights.

## Worked example 2: exact collisions and a conservative bound

Sample three times independently and uniformly from five buckets. The probability of no collision is $1\\cdot(4/5)\\cdot(3/5)=12/25$: the second sample avoids the first, and conditional on two distinct choices the third avoids both. Thus collision probability is $13/25$.

There are three sample pairs, each colliding with probability $1/5$. The expected number of colliding pairs is $3/5$ by linearity, and the union bound gives collision probability at most $3/5=15/25$. The exact value is smaller because outcomes with several colliding pairs are counted repeatedly by the bound. Sampling without replacement would keep each individual sample uniform but make the collision probability zero. That change preserves the marginals while changing the joint sampling rule, showing why the independence hypothesis belongs in the exact product formula.

## Worked example 3: conditional expectation on a triangle

Color the three vertices $a,b,c$ of a triangle independently red or blue. The expected cut has $3/2$ edges. Fixing $a$ red leaves this expectation unchanged. If $b$ is also red, edge $ab$ contributes zero and the two edges to the still-random $c$ each contribute one half, giving conditional expectation one. If $b$ is blue, edge $ab$ contributes one and the other two contribute one half each, giving expectation two. Their average is the previous value $3/2$.

Choose $b$ blue. Either color for $c$ then cuts exactly two edges: red cuts $bc$, while blue cuts $ac$, in addition to $ab$. Thus the process ends with two crossing edges. This is optimal for a triangle because among three vertices with two colors some pair has the same color, leaving at least its edge uncut. The conditional-expectation method establishes its general half-edge guarantee without needing this special optimality argument; here the small graph lets us check both separately.

## Practice with solutions

### Exercise 1
<a id="counting-probability-adversaries-ex-1"></a>

How many Boolean functions on $n$ Boolean inputs exist, including $n=0$?

<details>
<summary>Hint 1</summary>

Count complete input rows before assigning outputs.

</details>
<details>
<summary>Hint 2</summary>

A function independently chooses one output bit for every input.

</details>
<details>
<summary>Solution</summary>

1. **How many Boolean functions on $n$ Boolean inputs exist?** A truth table has $2^n$ rows and independently chooses one output bit per row, so $2^{2^n}$.

There are $2^n$ input tuples and two choices at each, giving $2^{2^n}$ functions. For $n=0$, the domain contains the unique empty tuple, so there are two constant Boolean functions, agreeing with $2^{2^0}=2$. This counts functions, not formula strings, since many different formulas can define the same function.

</details>

### Exercise 2
<a id="counting-probability-adversaries-ex-2"></a>

Ten bad events each have probability at most 0.001. Bound the probability that any occurs without assuming independence.

<details>
<summary>Hint 1</summary>

Use indicators or the finite union bound.

</details>
<details>
<summary>Hint 2</summary>

Add the ten individual upper bounds.

</details>
<details>
<summary>Solution</summary>

2. **If ten bad events each have probability at most $0.001$, what can the union bound say?** Their union has probability at most $0.01$, regardless of dependence.

The indicator of the union is at most the sum of the ten event indicators pointwise. Taking expectations gives a union probability at most $10(0.001)=0.01$. Dependence does not invalidate this inequality. Equality need not hold, since overlapping events contribute repeatedly to the sum.

</details>

### Exercise 3
<a id="counting-probability-adversaries-ex-3"></a>

A nonnegative runtime has expectation 100. Bound the probability it is at least 1000, and hence the probability it exceeds 1000.

<details>
<summary>Hint 1</summary>

Nonnegativity is the hypothesis needed for Markov.

</details>
<details>
<summary>Hint 2</summary>

Compare the runtime to 1000 times the tail-event indicator.

</details>
<details>
<summary>Solution</summary>

3. **A nonnegative runtime has expectation 100. What does Markov say about exceeding 1000?** Probability at most $0.1$; it may be loose.

Markov gives $P(T\\ge1000)\\le100/1000=0.1$. Since $\\{T>1000\\}\\subseteq\\{T\\ge1000\\}$, the same bound holds for strict exceedance. This is an upper bound, not an estimate or a statement that ten percent of runs must be slow.

</details>

### Exercise 4
<a id="counting-probability-adversaries-ex-4"></a>

Why is a fixed pseudorandom seed useful for reproducibility without itself supplying a random sample?

<details>
<summary>Hint 1</summary>

Condition on the chosen seed.

</details>
<details>
<summary>Hint 2</summary>

Identify the probability law that would generate repeated observations.

</details>
<details>
<summary>Solution</summary>

4. **Why is a fixed seed useful but not random evidence?** It reproduces one deterministic path; a probability estimate requires a declared sampling scheme over seeds or inputs.

For a fixed deterministic generator and fixed input, the seed determines the same entire sequence and execution, so rerunning it reproduces one path. To estimate a probability over seeds, the seeds must be drawn under a specified sampling law, with dependence accounted for. Repeating one chosen seed many times does not create independent observations of that law.

</details>

### Exercise 5
<a id="counting-probability-adversaries-ex-5"></a>

How many length-four binary strings avoid the adjacent pattern $11$? Derive the count from the first-symbol recurrence.

<details>
<summary>Hint 1</summary>

Use the empty word and one-letter words as base cases.

</details>
<details>
<summary>Hint 2</summary>

For length at least two, split into initial zero or initial ten.

</details>
<details>
<summary>Solution</summary>

5. **Count valid binary strings.** How many length-four strings avoid $11$?
   **Solution:** recurrence gives $\\mathbb{F}_{0}=1,\\mathbb{F}_{1}=2,\\mathbb{F}_{2}=3,\\mathbb{F}_{3}=5,\\mathbb{F}_{4}=8$.

For $n\\ge2$, the disjoint cases give $F_n=F_{n-1}+F_{n-2}$ with $F_0=1,F_1=2$. Thus $F_2=3,F_3=5,F_4=8$. The eight words are $0000,0001,0010,0100,0101,1000,1001,1010$, confirming the decomposition at this small size. The recurrence is applied only from length two upward.

</details>

### Exercise 6
<a id="counting-probability-adversaries-ex-6"></a>

In the component-test example with faulty rate 0.01, sensitivity 0.99 and false-positive rate 0.02, compute the probability of faulty status given a positive result.

<details>
<summary>Hint 1</summary>

Partition positive results according to the two possible underlying statuses.

</details>
<details>
<summary>Hint 2</summary>

The denominator must contain both true and false positives.

</details>
<details>
<summary>Solution</summary>

6. **Base-rate calculation.** In the worked test example, why is the positive
   predictive probability only one third? **Solution:** among a normalized 100
   population units, about $0.99$ true positives compete with $1.98$ false
   positives; positives are not sampled from the faulty group alone.

The joint probability of faulty and positive is $0.01\\cdot0.99=0.0099$. The joint probability of good and positive is $0.99\\cdot0.02=0.0198$. Their sum is $0.0297$, so the desired conditional probability is $0.0099/0.0297=1/3$. Sensitivity conditions on faulty status, whereas the requested probability conditions on the observation, so these probabilities cannot be substituted for each other.

</details>

### Exercise 7
<a id="counting-probability-adversaries-ex-7"></a>

For independent fair bits $X,Y$ and $Z=X\\oplus Y$, prove pairwise independence and failure of mutual independence.

<details>
<summary>Hint 1</summary>

List the four equally likely triples.

</details>
<details>
<summary>Hint 2</summary>

Compare one joint triple probability with the product of its three marginals.

</details>
<details>
<summary>Solution</summary>

7. **Pairwise versus mutual.** Independent fair bits $X,Y$ and $\\mathbb{Z}=X \\oplus Y$.
   **Solution:** every pair is independent, but $X \\oplus Y \\oplus \\mathbb{Z}=0$ always, so
   the triple is not mutually independent.

The triples are $000,011,101,110$, each with probability $1/4$. For each choice of two coordinates, their four possible bit pairs occur once, so that pair is independent and both coordinates are fair. But $P(X=0,Y=0,Z=0)=1/4$, whereas mutual independence would give $(1/2)^3=1/8$. Thus every pair is independent and the triple is not.

</details>

### Exercise 8
<a id="counting-probability-adversaries-ex-8"></a>

A nonnegative runtime has mean 50. Bound the probability it exceeds 500, stating what is and is not determined.

<details>
<summary>Hint 1</summary>

Apply Markov at threshold 500.

</details>
<details>
<summary>Hint 2</summary>

An upper bound supplies no matching lower bound.

</details>
<details>
<summary>Solution</summary>

8. **Markov audit.** A nonnegative runtime has mean 50. Bound probability it
   exceeds 500. **Solution:** at most $0.1$. The inequality says nothing about
   tightness.

We have $P(T>500)\\le P(T\\ge500)\\le50/500=0.1$. The actual probability could be zero, for example when runtime is always 50. Therefore the inequality does not identify the tail probability or claim that the bound is tight. Nonnegativity is essential to the displayed Markov argument.

</details>

### Exercise 9
<a id="counting-probability-adversaries-ex-9"></a>

Find the variance of a sum of independent Bernoulli variables with parameters $p_i$, and state the correction without independence.

<details>
<summary>Hint 1</summary>

For one Bernoulli variable, its square equals itself.

</details>
<details>
<summary>Hint 2</summary>

Expand the square of the centered sum.

</details>
<details>
<summary>Solution</summary>

9. **Variance of a sum.** For independent Bernoulli variables with parameters
   $p_{i}$, **solution:** variance is $\\sum p_{i}(1-p_{i})$. Without independence add
   twice the covariance sum.

For $X_i\\in\\{0,1\\}$, $E[X_i]=p_i$ and $E[X_i^2]=p_i$, so $Var(X_i)=p_i-p_i^2$. Expanding yields $Var(\\sum_iX_i)=\\sum_iVar(X_i)+2\\sum_{i<j}Cov(X_i,X_j)$. Independence makes each covariance zero, giving $\\sum_i p_i(1-p_i)$. Pairwise independence also suffices for this covariance conclusion; mutual independence is not needed for this variance formula.

</details>

### Exercise 10
<a id="counting-probability-adversaries-ex-10"></a>

The expected comparison bound for randomized quicksort is $\\mathcal O(n\\log n)$ over what random choices and for which fixed data?

<details>
<summary>Hint 1</summary>

Separate ranks of the input from the random pivot sequence.

</details>
<details>
<summary>Hint 2</summary>

The indicator calculation fixes one distinct-key input first.

</details>
<details>
<summary>Solution</summary>

10. **Quicksort quantifier.** Expected $\\mathcal{O}(n \\log n)$ over what? **Solution:**
    over fresh random pivot choices for each fixed distinct-key input under the
    stated pivot scheme, not necessarily over input data.

For every fixed distinct-key input, choose each pivot uniformly from its current subarray with the stated fresh conditional randomness. The expectation averages over those pivot choices. The correctness claim holds for every pivot sequence, while a particular costly sequence can still cause quadratic work. This theorem neither assumes a random input distribution nor promises that every individual run is fast.

</details>

### Exercise 11
<a id="counting-probability-adversaries-ex-11"></a>

Ten subroutines have failure probabilities at most $10^{-7}$ each. Bound the probability of any failure and identify any needed dependence hypothesis.

<details>
<summary>Hint 1</summary>

The failure event is a union.

</details>
<details>
<summary>Hint 2</summary>

Sum the supplied marginal guarantees without multiplying them.

</details>
<details>
<summary>Solution</summary>

11. **Union budget.** Ten subroutines each fail with probability at most
    $10^{-7}$. **Solution:** total probability of any failure is at most $10^{-6}$
    without independence.

The union bound gives at most $10\\cdot10^{-7}=10^{-6}$. It requires no independence among the failure events. If a subroutine guarantee holds only for fixed independent inputs while the actual caller chooses inputs adaptively, one must first justify that the supplied failure bound still applies in that interaction; the union bound cannot repair an inapplicable premise.

</details>

### Exercise 12
<a id="counting-probability-adversaries-ex-12"></a>

Why can selecting the best reported score among one hundred seeds on the same evaluation data make that selected score optimistic?

<details>
<summary>Hint 1</summary>

The reported seed was chosen using the very observations being reported.

</details>
<details>
<summary>Hint 2</summary>

Selection conditions on favourable fluctuations.

</details>
<details>
<summary>Solution</summary>

12. **Adaptive seed reuse.** Why can selecting the best of 100 seeds and
    reporting its test score be optimistic? **Solution:** test outcomes entered
    selection; the reported seed is conditioned on high observed noise. Use a
    separate final evaluation or account for selection.

Even equally good seed choices can show different noisy scores. Choosing the maximum retains positive noise more often than negative noise, so the reported value is not an untouched estimate for the selection procedure. Use separate final data drawn under a stated law or analyse the selection effect explicitly. No particular numerical bias follows without a sampling model, and independence of generator runs does not undo reuse of the evaluation information.

</details>

### Exercise 13
<a id="counting-probability-adversaries-ex-13"></a>

Compute the exact collision probability for three independent uniform samples in four buckets and compare the union bound.

<details>
<summary>Hint 1</summary>

Multiply conditional probabilities of staying distinct.

</details>
<details>
<summary>Hint 2</summary>

There are three pairs, each with collision probability one quarter.

</details>
<details>
<summary>Solution</summary>

13. **Exact birthday case.** For $k=3,m=4$, compute collision probability.
    **Solution:** no-collision probability is
    $1\\cdot(3/4)\\cdot(2/4)=3/8$, so collision probability is $5/8$. The union bound
    gives $\\binom{3}{2}/4=3/4$, valid but not exact.

The no-collision probability is $1\\cdot3/4\\cdot2/4=3/8$, so the collision probability is $5/8$. The pair-event union bound gives $3/4=6/8$, which is larger by $1/8$ and therefore valid but not exact. Overlap between pair-collision events explains why adding their probabilities can overcount.

</details>

### Exercise 14
<a id="counting-probability-adversaries-ex-14"></a>

A randomized checker accepts a fixed false statement with probability 0.1. Ten repetitions reuse exactly the same seed, and the combined procedure accepts only if all ten accept. What false-accept probability is justified?

<details>
<summary>Hint 1</summary>

For a deterministic checker conditioned on its seed, repeated outcomes can be identical.

</details>
<details>
<summary>Hint 2</summary>

Fresh repetitions would require a product or conditional-probability hypothesis.

</details>
<details>
<summary>Solution</summary>

14. **Failed amplification.** A checker has error $0.1$; ten repetitions reuse
    the same random seed. **Solution:** all outcomes can coincide, so the error
    may remain $0.1$, not $10^{-10}$. Fresh independence or a direct conditional
    error bound is required.

If the checker accepts on a seed set of probability 0.1 and rejects otherwise, reusing the seed makes all ten outcomes coincide. Accepting only when every run accepts then has probability 0.1. A bound of $0.1^{10}$ is justified by independent fresh seeds, or by a proved conditional error bound of 0.1 at each repetition given all earlier acceptances. The single-run marginal alone supplies neither condition.

</details>

### Exercise 15
<a id="counting-probability-adversaries-ex-15"></a>

Two possible next colors give conditional expected cut sizes 12.5 and 11.5. Which choice preserves the current guarantee and why?

<details>
<summary>Hint 1</summary>

The next unbiased random choice averages the two candidate expectations.

</details>
<details>
<summary>Hint 2</summary>

Conditional expectation can guide a deterministic choice.

</details>
<details>
<summary>Solution</summary>

15. **Conditional-expectation step.** Candidate colors give conditional
    expected cut sizes 12.5 and 11.5. **Solution:** choose the first; their
    average was the previous conditional expectation 12, so the choice does
    not decrease it.

The current conditional expectation is their average, 12. Choosing the first color raises it to 12.5 and therefore preserves any lower bound of 12. Continuing with nondecreasing conditional expectations ends at an actual deterministic cut size at least the initial expectation. This step assumes the candidate expectations were computed under the same conditional law for all remaining choices.

</details>

### Exercise 16
<a id="counting-probability-adversaries-ex-16"></a>

An adversary chooses keys after seeing public hash values. Why might a theorem for a fixed key set and secret random hashing not apply?

<details>
<summary>Hint 1</summary>

Record the order in which the key set and hash function are chosen.

</details>
<details>
<summary>Hint 2</summary>

The selected inputs can depend on revealed collisions.

</details>
<details>
<summary>Solution</summary>

16. **Adversary order.** Keys are chosen after public hash values are observed.
    **Solution:** a theorem for an oblivious key set and secret random hash does
    not apply. State an adaptive model, hide/rekey the hash, or prove a stronger
    conditional collision bound.

A bound established for each fixed key pair before the hash is sampled need not hold conditionally for a pair chosen after observing the hash. Such selection may deliberately choose a collision. One must either use an applicable adaptive theorem, change the information available through hiding or rekeying, or prove the needed conditional collision bound directly. A sampling calculation for an oblivious adversary cannot simply be relabelled as an adaptive guarantee.

</details>

## Project: probability and adversary audit

Choose a randomized algorithm with a small finite sample space. Enumerate every
random outcome for a tiny fixed input and compute exact correctness and cost
distributions. Then simulate larger cases with recorded seeds. Your report must
state fixed quantities, random variables, dependence assumptions, expectation,
one tail statement, an adversary model, and why the simulation is evidence
rather than deductive proof. Include one intentionally correlated repetition
showing an invalid amplification argument.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=induction-recursion-loop-reasoning) · [Book overview](#/item/book-algorithms-computation-proof-desk)

## Sources

For a primary companion text, see Eric Lehman, F. Thomson Leighton and Albert R. Meyer, [Mathematics for Computer Science, MIT OpenCourseWare](https://www.ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/). The original chapter text, proofs, investigations and numbered practice items are retained here; the additional examples, staged hints and developed solution explanations are new Euler exposition under the chapter licence.

## Summary

Counting requires disjoint cases or a proof that an encoding is bijective. Probability adds a declared joint law, and conditional analysis must track what has already been revealed. Indicators give expectations without independence, whereas amplification and sharper concentration require stronger hypotheses. Exact collision calculations and conditional-expectation choices expose those hypotheses concretely. An adversarial or average-case conclusion is meaningful only after the input law and adversary information are fixed. Modular arithmetic and finite graph structure next provide further objects on which these computational arguments operate.
`;export{e as default};