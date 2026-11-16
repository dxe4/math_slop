
# Markov Chains on General State Spaces

## Preparation and the measurable transition rule

The finite-chain calculations in [the process introduction](../stochastic-processes-paths/finite-markov-chains.md) motivate this chapter, but a matrix cannot describe every transition on a continuum. We use the extension theorem of chapter 2, the conditional expectation of chapter 10, and the tightness theorem of chapter 8. State spaces here are standard Borel unless a stronger topology is explicitly required. This assumption makes conditional laws and countable-coordinate constructions behave well. It does not itself give an invariant probability, recurrence, or convergence.

A probability kernel from a measurable space to itself is a function $P(x,A)$ such that, for each state, its second argument is a probability measure, and, for each measurable set, its first argument is measurable. Write
$$
Pf(x)=\int f(y)P(x,dy),\qquad \mu P(A)=\int P(x,A)\mu(dx).
$$
For nonnegative measurable functions the integral is measurable: prove this for indicators by the kernel definition, then for simple functions by addition, and finally for general functions by monotone convergence. The same proof shows that integrating a jointly measurable function of the old and new states produces a measurable function of the old state. Begin with rectangles and apply the functional monotone-class theorem. This last fact is needed when a proposed update depends on its current state.

Kernel composition is $PQ(x,A)=\int Q(y,A)P(x,dy)$. Measurability follows from the integration result, and countable additivity follows from monotone convergence. Tonelli proves associativity by interchanging two nonnegative integrations. Thus powers have a precise meaning even when no transition density exists. A deterministic measurable map gives the kernel $P(x,A)=1_A(Tx)$; a mixture of an atom and a density is equally legitimate. Requiring every transition to have a Lebesgue density would unnecessarily exclude both examples.

## Constructing the chain and its natural filtration

Given an initial probability and a kernel, define finite path laws by iterated integration:
$$
\int f(x_0,\ldots,x_n)\mu(dx_0)P(x_0,dx_1)\cdots P(x_{n-1},dx_n).
$$
These are probabilities. Integrating the last coordinate of a cylinder function removes its last kernel because a transition has total mass one. Consequently the finite path laws are consistent. Chapter 2 constructs their unique probability on the countable product sigma-algebra. No topology on paths or convergence theorem is being invoked in this construction.

For the coordinate process and its natural filtration, testing against a bounded cylinder function of the past gives
$$
E[f(X_{n+1})\mid\mathcal F_n]=Pf(X_n).
$$
Both sides have the same integral against that cylinder by the defining iterated integration. A monotone-class argument extends the equality to every bounded past-measurable test, so this is exactly the conditional-expectation characterization. Truncation extends it to nonnegative functions and to integrable functions whenever the relevant integrals are defined. Iterating the tower property gives the multi-step identity with $P^k$.

Conversely, the initial law and this one-step identity determine the finite path laws by induction: condition the last factor of a cylinder product, then remove it. Thus specifying an update kernel really determines a path law, rather than merely a sequence of marginals. A stationary distribution is a probability satisfying $\pi P=\pi$. Starting from it makes every finite shifted joint law equal to the original one by the same iterated formula. The stationary theorem of chapter 13 then applies. Its limit remains a conditional expectation on the invariant sigma-algebra until ergodicity has been established.

## Stopping times and discrete strong Markov reasoning

Let a stopping time take values in the nonnegative integers or infinity. For an event in its stopped sigma-algebra, its intersection with the event that the stop equals a particular integer belongs to the filtration at that integer. Apply the deterministic-time Markov identity separately on each of these disjoint events and add. For bounded measurable functions and a finite stopping time this proves
$$
E[f(X_{\tau+k})\mid\mathcal F_\tau]=P^kf(X_\tau).
$$
If the stopping time may be infinite, state the identity only on its finite event, using tests supported there. Bounded convergence justifies summing countably many contributions; nonnegative tests permit monotone convergence instead. No continuity of the kernel is needed. Discrete time has a countable decomposition that continuous-time stopping problems cannot automatically imitate.

The same argument for products of future coordinate functions specifies the whole future path law conditional on the stopped state. It does not say that the future is independent of the stopped state. Rather, it says the dependence on earlier history is carried by that state. An independent fresh restart can be constructed on a larger probability space from the kernel law. Confusing this construction with literal independence of the original future gives incorrect statements even for a random walk.

## Invariant laws from compactness: a scoped existence theorem

Suppose now that the state space is compact metric and the kernel is Feller: it maps continuous real functions to continuous functions. For an arbitrary initial law form the Cesaro averages
$$
\nu_N=\frac1N\sum_{j=0}^{N-1}\mu P^j.
$$
Compactness of the space gives tightness of every probability family. Prokhorov therefore supplies a weakly convergent subsequence of the averages. For a continuous function, which is automatically bounded here,
$$
\nu_N(Pf)-\nu_N(f)=\frac{\mu P^Nf-\mu f}{N}\longrightarrow0.
$$
The Feller property allows weak convergence to pass both terms to the limiting law. Therefore that law integrates every continuous function equally before and after applying the kernel. Continuous functions determine probabilities on a metric space by chapter 8, so the limit is invariant. This proves existence, not uniqueness and not convergence of the unaveraged laws.

The same proof works on a Polish space if the displayed Cesaro family is tight and the kernel maps bounded continuous functions to bounded continuous functions. Tightness must be supplied separately. For example, a coercive moment bound can do so when its sublevel sets are compact: Markov inequality controls the mass outside each sublevel set. In an infinite-dimensional space, norm-bounded sets need not be compact, so a bounded second moment alone may fail to supply tightness. Chapter 8 gives the relevant counterexample.

There are two separate obstacles if these assumptions are removed. A deterministic translation on the real line has no invariant probability, despite being Feller. A discontinuous update on a compact interval can move every point upward toward an endpoint and send the endpoint back to zero; averaging its orbit may converge weakly to a point mass which is not invariant. Weak convergence does not commute with integrating an arbitrary discontinuous function, which identifies the precise missing step.

## Doeblin minorization and a complete convergence argument

A useful sufficient condition is a global minorization
$$
P(x,A)\ge\epsilon\nu(A)\quad\text{for all states and measurable sets},\qquad 0<\epsilon\le1.
$$
If the constant is less than one, subtract the common measure and divide by the remaining mass to obtain another measurable kernel $R$. The chain can be generated by a common refresh: with probability epsilon draw from nu; otherwise use the residual kernel at the current state. At equality one the next state simply has law nu.

Use total variation in the convention $d(\mu,\eta)=\sup_A|\mu(A)-\eta(A)|$. Every kernel contracts this distance: for any measurable function between zero and one, the difference of its integrals is at most this distance, by the layer-cake formula. Applying this observation to the transition of an indicator gives the contraction. The common part of a minorized kernel cancels, hence
$$
d(\mu P,\eta P)\le(1-\epsilon)d(\mu,\eta).
$$
The space of probability measures is complete for this metric. Indeed a Cauchy sequence converges in total variation as finite signed measures: one can pass to a subsequence with summable distances, take its absolutely convergent signed-measure increments in variation norm, and use nonnegativity and total mass one in the limit. Alternatively countable additivity follows by a uniform approximation with any sufficiently late probability in the sequence. Thus the contraction mapping argument has a valid complete space behind it.

For clarity, existence can also be seen directly. Consecutive iterates of any initial probability have distances at most a geometric sequence, so they are Cauchy. The limit pi satisfies $\pi P=\pi$ because the kernel is continuous in total variation. Two invariant probabilities have distance at most one minus epsilon times that same distance, so they coincide. Finally
$$
d(\mu P^n,\pi)\le(1-\epsilon)^n d(\mu,\pi).
$$
This is uniform convergence from every initial law. The condition is strong; its failure is not evidence that a chain is unusable or lacks an invariant distribution.

The refresh construction also couples two chains by giving them the same refresh coin and draw. Before their first common refresh they may use any joint residual transition with the correct marginals. After it, use identical future randomization, so they stay together. The probability of no refresh in the first n steps is the geometric bound above. Standard Borel kernels can be randomized using a uniform variable through a measurable encoding and quantile construction; alternatively the joint transition kernels directly construct this coupled law. The coupling inequality follows because indicators can differ only when the two coordinates differ.

## Worked example 1: a refreshed deterministic system

On the unit interval take $P(x,\cdot)=\epsilon\nu+(1-\epsilon)\delta_{T(x)}$, where the map is merely measurable. An explicit stationary law is
$$
\pi=\epsilon\sum_{j=0}^{\infty}(1-\epsilon)^j\nu T^{-j}.
$$
Here each summand means the pushforward after j deterministic updates. The weights sum to one. Applying the kernel contributes a fresh epsilon times nu and shifts every old term one place, exactly reproducing the series. The minorization proves uniqueness and geometric convergence without requiring that the deterministic system itself mix, be continuous, or have a unique invariant law. Long refresh-free segments can still resemble that deterministic dynamics; the bound concerns the distribution after a prescribed number of updates.

## Worked example 2: Gaussian autoregression without global minorization

Let $X_{n+1}=aX_n+\sigma Z_{n+1}$ with independent standard normals, positive sigma, and absolute a less than one. Iterating gives a deterministic initial contribution and a sum of independent Gaussian terms. Their variance is a geometric partial sum, so for deterministic initial state the law converges weakly to the centred normal with variance $\sigma^2/(1-a^2)$. Substituting an independent variable with that normal law verifies invariance directly.

Use synchronous innovations to compare two starts. Their difference after n updates is $a^n$ times the initial difference. This proves convergence for bounded Lipschitz tests whenever the initial discrepancy is integrable. For an arbitrary real initial variable, the discrepancy still converges to zero almost surely, and bounded convergence handles bounded uniformly continuous tests; tightness and approximation then identify the same weak limit. There is no global positive minorization by one fixed probability on the whole real line: normal transition laws centred arbitrarily far apart put arbitrarily little mass on any fixed bounded set. Their supposed common minorizing measure would therefore assign zero to every bounded set, contradicting total mass one. The global theorem is sufficient, not necessary.

## Worked example 3: Metropolis symmetry with rejection atoms

Suppose a target has a positive integrable density p on the real line and a proposal has a symmetric density $q(y-x)$. Propose a displacement and accept with probability $\min(1,p(y)/p(x))$; otherwise retain the current point. The off-diagonal transition flow under the normalised target is
$$
\frac{\min(p(x),p(y))}{\int p}\,q(y-x)\,dx\,dy,
$$
which is symmetric under interchanging its coordinates. The rejected part is supported on the diagonal and is also symmetric. Integrating this detailed-balance identity over the first coordinate proves invariance. The argument includes rejection atoms rather than pretending that the full kernel has only its off-diagonal density.

This calculation establishes invariance alone. If the proposal never crosses between two parts of the support, a chain started in one part may never sample the other. Positivity of the proposal everywhere would remove that particular obstruction, but convergence still needs a separate theorem. Moreover target invariance does not guarantee small Monte Carlo error at a finite run length. Correlation, initialization, and the chosen observable all matter. The advanced sampling book develops these issues with stronger recurrence and drift tools; they are not assumed here.

## What this chapter deliberately separates

Irreducibility refers to reaching sets of positive reference measure, not to assigning positive probability to each individual state. On a continuous state space individual points usually have zero probability. Aperiodicity rules out a deterministic cyclic obstruction; it does not imply recurrence. Positive Harris recurrence is a stronger general-state concept than the finite-state return arguments established earlier. We have proved the compact Feller existence theorem and the global Doeblin convergence theorem, and have not substituted these for a proof of the full Harris theory.

A useful way to assess a proposed simulation is to write four claims separately: the update is a measurable probability kernel; the intended probability is invariant; the relevant initial laws converge toward it; and the empirical average has the desired limiting behaviour or error bound. Our construction addresses the first, detailed balance can address the second, a contraction can address the third, and the stationary ergodic theorem addresses the fourth under its stated assumptions. Establishing one of these claims does not silently establish all the others.

## Exercises

<a id="markov-chains-general-spaces-ex-1"></a>

### Exercise 1

Prove that kernel composition preserves total mass and countable additivity.

<details><summary>Hint 1</summary>

Fix the initial state.

</details>

<details><summary>Hint 2</summary>

Use monotone convergence for disjoint unions.

</details>

<details><summary>Full solution</summary>

Each component transition has total mass one, so integrating that constant against the first probability gives one. For disjoint measurable sets, the second kernel of their union is the increasing limit of the sums of its probabilities. Monotone convergence moves this limit through the first integral. Measurability follows from integration of nonnegative measurable functions against a kernel. Thus the composition is a probability kernel.

</details>

<a id="markov-chains-general-spaces-ex-2"></a>

### Exercise 2

Why does a stationary initial law imply joint stationarity rather than merely equal marginals?

<details><summary>Hint 1</summary>

Write the finite path integral.

</details>

<details><summary>Hint 2</summary>

Integrate the extra initial transition first.

</details>

<details><summary>Full solution</summary>

The law of a path segment is an iterated integral starting with the invariant law. Moving the segment forward one step replaces that initial law by its image under the kernel. Invariance makes this image equal to the original law, leaving every subsequent transition unchanged. Iterating proves equality for every finite shift. This uses the same kernel at every time, not just equality of one-coordinate laws.

</details>

<a id="markov-chains-general-spaces-ex-3"></a>

### Exercise 3

Prove the Markov identity at a bounded integer-valued stopping time by testing against a stopped event.

<details><summary>Hint 1</summary>

Split the test event according to the stopping value.

</details>

<details><summary>Hint 2</summary>

Every resulting event belongs to the corresponding deterministic past.

</details>

<details><summary>Full solution</summary>

For each possible stopping value, intersect the stopped event with the event that the stopping time takes that value. The intersection belongs to the filtration at that integer. Apply the deterministic multi-step Markov identity to its indicator, then add the finitely many equalities. On the corresponding events the state and future coordinate equal their stopped versions. This proves the defining conditional integral identity.

</details>

<a id="markov-chains-general-spaces-ex-4"></a>

### Exercise 4

Give a compact Feller kernel with more than one invariant probability.

<details><summary>Hint 1</summary>

Consider an update that never moves.

</details>

<details><summary>Hint 2</summary>

Test a point mass.

</details>

<details><summary>Full solution</summary>

The identity kernel sends each state to itself. It maps a continuous function to that same function and is therefore Feller. Every probability is invariant because the update leaves every state unchanged. This example satisfies compactness and the existence theorem while ruling out any inference of uniqueness from those hypotheses.

</details>

<a id="markov-chains-general-spaces-ex-5"></a>

### Exercise 5

On $[0,1]$, let $T(x)=(x+1)/2$ for $x<1$ and $T(1)=0$. Show that the Cesaro laws from zero converge weakly to a noninvariant point mass.

<details><summary>Hint 1</summary>

Compute the deterministic orbit.

</details>

<details><summary>Hint 2</summary>

The orbit approaches the point at which the map jumps.

</details>

<details><summary>Full solution</summary>

The orbit is $x_n=1-2^{-n}$ and never reaches one. Every continuous test along it converges to its value at one, so its Cesaro average does too. Thus the averaged laws converge weakly to the point mass at one. Applying the kernel sends that point mass to the point mass at zero. The limiting law is not invariant. The map is discontinuous at one, and its kernel fails the Feller hypothesis exactly where the compactness proof would need it.

</details>

<a id="markov-chains-general-spaces-ex-6"></a>

### Exercise 6

If an m-step kernel satisfies a global minorization, derive a bound for all times.

<details><summary>Hint 1</summary>

Apply the contraction to blocks of length m.

</details>

<details><summary>Hint 2</summary>

Use ordinary kernel contraction for the remaining updates.

</details>

<details><summary>Full solution</summary>

The m-step kernel has a unique invariant probability and its block iterates contract geometrically. Its invariant probability is also invariant for the original kernel: applying one original step produces another invariant probability for the m-step kernel, hence the same probability by uniqueness. Write the elapsed time as an integer number of blocks plus a remainder. The remainder cannot increase total variation, giving the geometric bound with exponent equal to the number of complete blocks.

</details>

<a id="markov-chains-general-spaces-ex-7"></a>

### Exercise 7

Why is global minorization impossible for the Gaussian autoregression with $a\ne0$ on the whole real line?

<details><summary>Hint 1</summary>

Fix any bounded target set.

</details>

<details><summary>Hint 2</summary>

Move the normal mean to infinity.

</details>

<details><summary>Full solution</summary>

For any bounded set the normal transition probability tends to zero along initial states whose means tend to infinity. A positive global minorization would force its common probability to assign zero mass to that bounded set. The real line is a countable union of bounded intervals, so that probability would have total mass zero, a contradiction. If a is zero, the kernel is independent of its current state and minorization with constant one is available.

</details>

<a id="markov-chains-general-spaces-ex-8"></a>

### Exercise 8

Prove that detailed balance implies invariance without using a density.

<details><summary>Hint 1</summary>

View the balanced measure on pairs of states.

</details>

<details><summary>Hint 2</summary>

Take its two marginals.

</details>

<details><summary>Full solution</summary>

Detailed balance says the measure $\pi(dx)P(x,dy)$ is unchanged when its coordinates are swapped. Its first marginal is pi because the transition has total mass one. Its second marginal is the image of pi under the transition. Symmetry makes those marginals equal, which is invariance. This reasoning allows atoms, singular transitions, and mixed kernels.

</details>

<a id="markov-chains-general-spaces-ex-9"></a>

### Exercise 9

For a Doeblin chain, bound the difference between expectations of a measurable observable in $[0,M]$ after n steps from two initial laws.

<details><summary>Hint 1</summary>

Divide the observable by its bound.

</details>

<details><summary>Hint 2</summary>

Use layer cake and the total-variation contraction.

</details>

<details><summary>Full solution</summary>

An observable divided by M lies between zero and one. Its expectation difference is at most the total-variation distance by integration of its level-set probabilities. The distance after n steps is bounded by the initial distance times the contraction factor to power n. Multiplying by M gives the required bound. For an observable in an interval of length M, subtracting its lower endpoint gives the same result.

</details>

<a id="markov-chains-general-spaces-ex-10"></a>

### Exercise 10

Explain why an invariant target calculation alone does not justify using a chain initialized at a particular point to estimate target expectations.

<details><summary>Hint 1</summary>

Consider an identity transition.

</details>

<details><summary>Hint 2</summary>

Compare the stationary law with the trajectory from that point.

</details>

<details><summary>Full solution</summary>

Every probability is invariant for an identity transition, including the proposed target. But from a specified point the entire trajectory remains at that point, so its average is simply the observable at that point. This need not equal the target expectation. A convergence or ergodicity argument tied to the initial state is missing; the balance calculation cannot supply it. In finite samples an additional error analysis is required even after asymptotic convergence is known.

</details>
