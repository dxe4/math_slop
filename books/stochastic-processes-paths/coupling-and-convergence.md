
# Coupling and Convergence

## Motivation: how fast does a chain mix?

In Chapter 2, "Discrete-time Markov Chains," we proved that an irreducible, aperiodic finite Markov chain converges to its unique stationary distribution. But the theorem says nothing about *how fast* this happens. If you are designing a Markov chain Monte Carlo algorithm, the convergence rate determines how many samples you need before the chain has "forgotten" its starting point.

**Coupling** is a probabilistic technique that constructs two processes on the same probability space to compare their distributions. It often gives intuitive proofs of convergence and computable bounds on the **total variation distance** between distributions.

## Total variation distance

Let $\mu$ and $\nu$ be probability distributions on a countable state space $S$. The **total variation distance** is
$$\|\mu - \nu\|_{TV} = \sup_{A \subseteq S} |\mu(A) - \nu(A)| = \frac{1}{2} \sum_{s \in S} |\mu(s) - \nu(s)|.$$

The equivalence of the two forms is a standard exercise. Total variation is a metric on probability distributions: it is symmetric, satisfies the triangle inequality, and $\|\mu - \nu\|_{TV} = 0$ if and only if $\mu = \nu$.

## The coupling inequality

A **coupling** of $\mu$ and $\nu$ is a pair of random variables $(X,Y)$ defined on a common probability space such that $X \sim \mu$ and $Y \sim \nu$.

**Theorem 4.1 (coupling inequality).** For any coupling $(X,Y)$ of $\mu$ and $\nu$, and any event $A$,
$$|\mu(A) - \nu(A)| = |\mathbb{P}(X \in A) - \mathbb{P}(Y \in A)| \le \mathbb{P}(X \neq Y).$$

Consequently,
$$\|\mu - \nu\|_{TV} \le \mathbb{P}(X \neq Y).$$

**Proof.** Write
$$\mathbb{P}(X \in A) = \mathbb{P}(X \in A, X=Y) + \mathbb{P}(X \in A, X \neq Y),$$
$$\mathbb{P}(Y \in A) = \mathbb{P}(Y \in A, X=Y) + \mathbb{P}(Y \in A, X \neq Y).$$
On the event $\{X=Y\}$, the indicators $\mathbf{1}_{\{X \in A\}}$ and $\mathbf{1}_{\{Y \in A\}}$ agree. Subtracting,
$$|\mathbb{P}(X \in A) - \mathbb{P}(Y \in A)| = |\mathbb{P}(X \in A, X \neq Y) - \mathbb{P}(Y \in A, X \neq Y)| \le \mathbb{P}(X \neq Y).$$
Taking the supremum over $A$ gives the total variation bound.

**Definition 4.2.** A coupling $(X,Y)$ is **maximal** if $\|\mu - \nu\|_{TV} = \mathbb{P}(X \neq Y)$. Maximal couplings always exist for distributions on countable spaces.

## Coupling of Markov chains

Let $P$ be the transition matrix of an irreducible, aperiodic Markov chain on a finite state space $S$. Fix two starting states $x$ and $y$. We construct two chains $(X_{n})$ and $(Y_{n})$ with $X_{0}=x$ and $Y_{0}=y$, both evolving according to $P$, such that after they meet they stay together.

**Coalescing coupling.** Define a joint transition rule as follows. If $X_{n} \neq Y_{n}$, update both chains independently according to $P$. If $X_{n} = Y_{n}$, update both chains together using the same random choice.

Let $T = \min\{n \ge 0 : X_{n} = Y_{n}\}$ be the **coalescence time**.

**Theorem 4.3.** For this coupling,
$$\|P^{n}(x, \cdot) - P^{n}(y, \cdot)\|_{TV} \le \mathbb{P}(T > n).$$

**Proof.** By construction, $X_{n} \sim P^{n}(x, \cdot)$ and $Y_{n} \sim P^{n}(y, \cdot)$. (This must be verified: the independent updates preserve the marginal law, and the coalesced updates do too because both chains use the same $P$-distributed step.) After time $T$, the chains are equal. Therefore $\mathbb{P}(X_{n} \neq Y_{n}) \le \mathbb{P}(T > n)$. The coupling inequality completes the proof.

**Important caution.** Driving two chains with a shared random number can fail to preserve marginals if the update rule is careless. The independent-update-then-coalesce construction is one valid approach; others require verification that each chain's marginal is $P$.

## A coupling proof of convergence

**Theorem 4.4.** Let $P$ be irreducible and aperiodic on a finite state space. Then for any initial distribution $\mu$,
$$\|\mu P^{n} - \pi\|_{TV} \to 0 \quad \text{as } n \to \infty,$$
where $\pi$ is the unique stationary distribution.

**Proof by coupling.** Start one chain from $\mu$ and another from $\pi$. Since $\pi$ is stationary, the second chain has distribution $\pi$ at all times. Construct a coalescing coupling. Because the state space is finite and the chain is irreducible and aperiodic, $\mathbb{P}(T < \infty) = 1$. (One can prove this by noting that for some $n_{0}$, all entries of $P^{n_{0}}$ are positive, so there is positive probability of meeting at each block of $n_{0}$ steps.) Therefore $\mathbb{P}(T > n) \to 0$, and the coupling inequality gives convergence.

## Worked example: random-to-top shuffle

Consider a deck of $N$ cards. At each step, choose a card uniformly at random and move it to the top. This is a Markov chain on the set of permutations $S_{N}$. It is irreducible (any ordering can be reached) and aperiodic (staying in place has positive probability if we allow choosing the top card).

**Claim.** The uniform distribution on $S_{N}$ is stationary.

**Proof.** If the deck is uniform and we move a uniformly random card to the top, every card is equally likely to be on top, and conditional on the top card, the remaining $N-1$ cards are uniformly distributed among themselves. Thus the result is uniform.

**Coupling bound.** Start two decks in arbitrary states. At each step choose the same uniformly random *card label* in both decks and move that card to the top. Each deck has the correct random-to-top marginal. Once every card has been chosen, the deck order is determined by the cards' most recent selection times, so both decks agree. The time to choose all $N$ cards is the coupon collector time, with mean $NH_N\approx N\log N$. Markov's inequality (or a coupon-collector tail bound) then gives a mixing-time upper bound of order $N\log N$.

## Common errors in coupling arguments

**Error 1: Unverified marginals.** A coupling argument is invalid unless you verify that each component has the correct marginal distribution. Simply defining a joint update rule is not enough; you must check that $X_{n} \sim \mu_{n}$ and $Y_{n} \sim \nu_{n}$.

**Error 2: Assuming coalescence is inevitable.** In infinite state spaces or non-irreducible chains, two coupled chains may never meet. The coupling inequality $\|\mu - \nu\|_{TV} \le \mathbb{P}(X \neq Y)$ is always true, but if $\mathbb{P}(X \neq Y)$ does not go to zero, you get no convergence information.

**Error 3: Confusing coupling time with mixing time.** The coupling time $T$ gives an upper bound on mixing, but it may not be sharp. There are chains where the true mixing time is much smaller than any coupling time.

## Worked example: a maximal three-category construction

Let $\mu=(1/2,3/10,1/5)$ and $\nu=(1/5,2/5,2/5)$ on labels zero, one and two. Their common masses are the coordinatewise minima $(1/5,3/10,1/5)$, summing to $7/10$. Put these masses on the diagonal of a joint table. The residual mass of $\mu$ is $3/10$ at zero; the residual mass of $\nu$ is $1/10$ at one and $1/5$ at two. Put joint masses $1/10$ at $(0,1)$ and $1/5$ at $(0,2)$.

Every row sum is now the prescribed $\mu$ mass and every column sum the prescribed $\nu$ mass. The disagreement probability is $3/10$, equal to
$$
\tfrac12\left(\left|\tfrac12-\tfrac15\right|
+\left|\tfrac3{10}-\tfrac25\right|
+\left|\tfrac15-\tfrac25\right|\right).
$$
The explicit table therefore attains the total-variation lower bound and is a maximal coupling. It is not an independent coupling; independence would discard the designed common mass.

Merge labels zero and one into a single displayed category. The resulting laws are $(4/5,1/5)$ and $(3/5,2/5)$, at total variation $1/5$. Forgetting distinctions has reduced the distance from $3/10$. This is the contraction principle under a measurable map, made visible in a finite table.

## Worked example: a reset coupling with an exact rate

On a finite state space let
$$
P(x,\cdot)=(1-\varepsilon)\delta_x+\varepsilon\rho,
\qquad 0<\varepsilon\le1,
$$
where $\rho$ is a fixed probability law. At each step use one shared Bernoulli decision for two chains. With probability $\varepsilon$, reset both to the same fresh $\rho$ draw; otherwise leave both at their current states. Each marginal implements the stated kernel, and equality is preserved after the first common reset.

The probability of no reset in the first $n$ steps is $(1-\varepsilon)^n$. Coupling therefore gives a uniform distance bound to stationarity of at most that value. In fact, starting at $x$,
$$
P^n(x,\cdot)=(1-\varepsilon)^n\delta_x+
\{1-(1-\varepsilon)^n\}\rho.
$$
This follows by separating the no-reset event from its complement; after any reset the law is $\rho$, and each later update preserves $\rho$. Thus the exact total-variation distance is $(1-\varepsilon)^n(1-\rho(x))$. The coupling bound is valid but need not be exact when the stationary start already matches the initial state.

For $\varepsilon=1/5$, the simple uniform bound after ten updates is $(4/5)^{10}$. It is a deterministic consequence of the kernel construction, rather than an estimate from a trajectory. The proof records both the correct marginal transitions and permanent coalescence, which are the two obligations a proposed chain coupling must satisfy.

## Practice exercises

### Exercise 1

<a id="stochastic-coupling-and-convergence-original-ex-1"></a>

Let $\mu = \text{Bernoulli}(1/2)$ and $\nu = \text{Bernoulli}(1/3)$. Construct a coupling $(X,Y)$ on $\{0,1\}^{2}$ and compute $\|\mu - \nu\|_{TV}$ exactly.

<details>
<summary>Hint</summary>

Start with the event definition of total variation, then choose a joint construction with the required marginals.

</details>
<details>
<summary>Solution</summary>

**Solution.** The total variation distance is
$$\|\mu - \nu\|_{TV} = \frac{1}{2}(|1/2 - 1/3| + |1/2 - 2/3|) = \frac{1}{2}(1/6 + 1/6) = 1/6.$$

For a maximal coupling, let $U \sim \text{Uniform}(0,1)$. Define $X = \mathbf{1}_{\{U \le 1/2\}}$ and $Y = \mathbf{1}_{\{U \le 1/3\}}$. Then $X \sim \mu$, $Y \sim \nu$, and $\mathbb{P}(X \neq Y) = \mathbb{P}(1/3 < U \le 1/2) = 1/6$. This coupling is maximal.

</details>

### Exercise 2

<a id="stochastic-coupling-and-convergence-original-ex-2"></a>

Consider the two-state chain with transition matrix
$$P = \begin{pmatrix} 1-\alpha & \alpha \\ \beta & 1-\beta \end{pmatrix},$$
where $0 < \alpha, \beta < 1$. The stationary distribution is $\pi = (\beta/(\alpha+\beta), \alpha/(\alpha+\beta))$. Use the coupling inequality to bound $\|P^{n}(0, \cdot) - \pi\|_{TV}$.

<details>
<summary>Hint</summary>

Start with the event definition of total variation, then choose a joint construction with the required marginals.

</details>
<details>
<summary>Solution</summary>

**Solution.** Start $X_0=0$ and draw $Y_0\sim\pi$. Whenever the chains differ, use a maximal coupling of the two transition rows; once they meet, update them together. The total variation distance between the two rows is

$$\frac12\bigl(|1-\alpha-\beta|+|\alpha+\beta-1|\bigr)=|1-\alpha-\beta|.$$

Thus, conditional on disagreement, a maximal coupling remains unequal for one more step with probability $|1-\alpha-\beta|$. Since $\mathbb P(X_0\ne Y_0)=\pi_1=\alpha/(\alpha+\beta)$,

$$\|P^n(0,\cdot)-\pi\|_{TV}\le \frac{\alpha}{\alpha+\beta}|1-\alpha-\beta|^n.$$

For this two-state chain the bound equals the exact distance. If $\alpha=\beta=1/2$, the distance is already zero for every $n\ge1$.

</details>

### Exercise 3

<a id="stochastic-coupling-and-convergence-original-ex-3"></a>

Show that for any distributions $\mu, \nu, \rho$ on the same space,
$$\|\mu - \nu\|_{TV} \le \|\mu - \rho\|_{TV} + \|\rho - \nu\|_{TV}.$$

<details>
<summary>Hint</summary>

Start with the event definition of total variation, then choose a joint construction with the required marginals.

</details>
<details>
<summary>Solution</summary>

**Solution.** For any event $A$,
$$|\mu(A) - \nu(A)| \le |\mu(A) - \rho(A)| + |\rho(A) - \nu(A)| \le \|\mu - \rho\|_{TV} + \|\rho - \nu\|_{TV}.$$
Taking the supremum over $A$ gives the triangle inequality.

</details>


## Further development from proof-based probability

The following arguments and exercises extend the preceding treatment. They bring together the complementary material previously taught in the probability book; its exercise identifiers and mathematical hypotheses are preserved. The original three questions above remain separate exercises.

## Dominating measures, densities, and duality

Any two probability measures are dominated by $\lambda=\mu +\nu$. Write

$f=d\mu /d\lambda$, $g=d\nu /d\lambda$.

The density formula is

$d_{TV}(\mu ,\nu )=(1/2)\int \lvert f-g\rvert d\lambda$

$=1-\int \min(f,g) d\lambda$.

To prove it, take $D=\{f\ge g\}$. Since $\int (f-g)d\lambda=0$,

$\int_{D}(f-g)d\lambda=(1/2)\int \lvert f-g\rvert d\lambda$.

For any measurable $A$, the integral of $f-g$ over $A$ cannot exceed the integral of its positive part, and its negative cannot have larger magnitude. Thus $D$ attains the supremum.

If $\mu$ and $\nu$ have Lebesgue densities, $\lambda$ may be replaced in the displayed formula by Lebesgue measure. A density is not required: the dominating-measure argument also handles discrete-continuous mixtures.

### Bounded-test-function formulas

Event indicators give one dual description:

$d_{TV}(\mu ,\nu )=\sup_{0\le h\le 1}\lvert \int h d\mu -\int h d\nu \rvert$.

The inequality “at most” follows from the layer-cake identity

$h(x)=\int_{0}^{1} \mathbf{1}_{h(x)>t}dt$

and the event definition. Indicators give the reverse inequality. Allowing signed tests changes the constant:

$2d_{TV}(\mu ,\nu )=\sup_{\lvert h\rvert \le 1}\lvert \int h d\mu -\int h d\nu \rvert$.

This is a frequent source of factor-of-two errors.

### Testing interpretation

Suppose one observation comes from $\mu$ or $\nu$, with prior probability $1/2$ for each. A decision region $A$ declares “$\mu$” on $A$ and “$\nu$” on $A^{c}$. Its success probability is

$(1/2)\mu (A)+(1/2)\nu (A^{c})=1/2+[\mu (A)-\nu (A)]/2$.

Optimizing over $A$ gives

$best success=(1+d_{TV}(\mu ,\nu ))/2$,

$smallest error=(1-d_{TV}(\mu ,\nu ))/2$.

Total variation is therefore the optimal one-observation distinguishing advantage, not merely a coordinatewise discrepancy.

## Every coupling gives an upper bound

**Coupling inequality.** If $(X,Y)$ is any coupling of $\mu$ and $\nu$ on the same standard Borel space, then

$d_{TV}(\mu ,\nu )\le \mathbb{P}(X\ne Y)$.

**Proof.** For every event $A$, the indicators $\mathbf{1}_{X\in A}$ and $\mathbf{1}_{Y\in A}$ agree whenever $X=Y$. Therefore

$\lvert \mu (A)-\nu (A)\rvert =\lvert \mathbb{E}[\mathbf{1}_{X\in A}-\mathbf{1}_{Y\in A}]\rvert$

$\le \mathbb{E}\lvert \mathbf{1}_{X\in A}-\mathbf{1}_{Y\in A}\rvert \le \mathbb{P}(X\ne Y)$.

Take the supremum over $A$. `□`

The inequality converts a law-comparison problem into a construction problem: place variables together so that they fail to agree only on a small event.

### A bound for expectations

If $\lvert h\rvert \le M$, then on any coupling

$\lvert \mathbb{E}[h(X)]-\mathbb{E}[h(Y)]\rvert \le \mathbb{E}\lvert h(X)-h(Y)\rvert \le 2M \mathbb{P}(X\ne Y)$.

For $0\le h\le M$, the sharper last factor is $M \mathbb{P}(X\ne Y)$. Combining with an effective coupling can control many observables at once.

## Maximal coupling and the exact coupling formula

The coupling inequality is sharp. A **maximal coupling** satisfies

$\mathbb{P}(X\ne Y)=d_{TV}(\mu ,\nu )$.

Here is a construction. With densities $f=d\mu /d\lambda$ and $g=d\nu /d\lambda$, let

$r(x)=\min(f(x),g(x))$, $\alpha=\int r d\lambda=1-d_{TV}(\mu ,\nu )$.

If $\alpha=1$, draw $Z\sim \mu$ and set $X=Y=Z$. If $0\le \alpha<1$, define the common law with density $r/\alpha$ when $\alpha>0$, and residual laws with densities

$(f-r)/(1-\alpha)$ and $(g-r)/(1-\alpha)$.

Flip a Bernoulli coin $B$ with $\mathbb{P}(B=1)=\alpha$. When $B=1$, draw from the common law and set $X=Y$. When $B=0$, draw $X$ and $Y$ from their respective residual laws. The residual densities have disjoint supports up to null sets: where $f-r>0$, one has $g-r=0$, and conversely. Thus the residual draws disagree almost surely. Consequently

$\mathbb{P}(X=Y)=\alpha$, $\mathbb{P}(X\ne Y)=1-\alpha=d_{TV}(\mu ,\nu )$.

The marginals are correct because the common and residual pieces reconstruct $f$ and $g$. Hence

$d_{TV}(\mu ,\nu )=\inf \mathbb{P}(X\ne Y)$,

where the infimum runs over all couplings and is attained on the spaces considered here.

### Finite maximal-coupling algorithm

For mass functions $p,q$, compute $r(x)=\min(p(x),q(x))$ and $\alpha=\sum_{x}r(x)$. With probability $\alpha$, sample $x$ proportional to $r(x)$ and return $(x,x)$. Otherwise sample from the normalised residual masses $p-r$ and $q-r$. This is an exact sampler for a maximal coupling, not an approximation based on many trials.

## Measurable maps cannot increase total variation

Let $T:S\to U$ be measurable. The pushforward laws satisfy the **data-processing inequality**

$d_{TV}(\mu T^{-1},\nu T^{-1})\le d_{TV}(\mu ,\nu )$.

For any event $B\subseteq U$, its inverse image $T^{-1}(B)$ is an event in $S$, so

$\lvert \mu (T^{-1}B)-\nu (T^{-1}B)\rvert \le d_{TV}(\mu ,\nu )$.

Alternatively, apply $T$ to a coupling: $T(X)\ne T(Y)$ can occur only if $X\ne Y$.

The inequality can be strict because a statistic discards information. Mapping every input to a constant makes the pushforward distance zero, even if the original laws are mutually singular.

### Markov-kernel contraction

A Markov kernel $K$ maps a state $x$ to a probability law $K(x,\cdot )$. The output law from input $\mu$ is

$(\mu K)(B)=\int K(x,B)\mu (dx)$.

Then

$d_{TV}(\mu K,\nu K)\le d_{TV}(\mu ,\nu )$.

One coupling proof first maximally couples $X\sim \mu$ and $Y\sim \nu$. If $X=Y$, use exactly the same kernel randomness so the outputs agree. If $X\ne Y$, couple the outputs arbitrarily. Their disagreement probability is at most $\mathbb{P}(X\ne Y)$.

More strongly, if

$\delta(K)=\sup_{x,x'}d_{TV}(K(x,\cdot ),K(x',\cdot ))$,

then

$d_{TV}(\mu K,\nu K)\le \delta(K)d_{TV}(\mu ,\nu )$.

In a maximal input coupling, couple equal inputs identically and unequal inputs by maximal output couplings. Conditional output disagreement is at most $\delta(K)$ on the input-disagreement event. This coefficient becomes a mixing tool in the next chapter.

## Products and tensorization

Let $\mu_{i},\nu_{i}$ be laws on $S_{i}$, and put $d_{i}=d_{TV}(\mu_{i},\nu_{i})$. Independently take maximal couplings $(X_{i},Y_{i})$. Then the vectors have product marginals and

$\mathbb{P}((X_{1},...,X_{n})\ne (Y_{1},...,Y_{n}))$

$=1-\prod_{i=1}^{n}\mathbb{P}(X_{i}=Y_{i})=1-\prod_{i=1}^{n}(1-d_{i})$.

The coupling inequality gives

$d_{TV}(\otimes_{i}\mu_{i},\otimes_{i}\nu_{i})\le 1-\prod_{i}(1-d_{i})\le \sum_{i}d_{i}$.

The second inequality is the union bound. For repeated factors at distance $d$,

$d_{TV}(\mu^{\otimes n},\nu^{\otimes n})\le 1-(1-d)^{n}\le nd$.

Conversely, projection onto coordinate $i$ and data processing show

$\max_{i} d_{i}\le d_{TV}(\otimes_{i}\mu_{i},\otimes_{i}\nu_{i})$.

These bounds need not be equalities. They say that small coordinate errors accumulate at most linearly at first, while the distance never exceeds one. Product structure is essential: arbitrary dependence cannot be reconstructed by independently coupling coordinates.

### Replacement one coordinate at a time

The sum bound also follows by the triangle inequality through hybrid laws:

$\mu_{1}\otimes ...\otimes \mu_{n}$, $\nu_{1}\otimes \mu_{2}\otimes ...\otimes \mu_{n}$, ..., $\nu_{1}\otimes ...\otimes \nu_{n}$.

Two adjacent hybrids differ in one coordinate, and tensoring both laws with the same remaining factor preserves their total variation distance. This telescoping method is useful when coordinate couplings are awkward to display.

## Comparison bounds from a good event

Suppose variables $X$ and $Y$ are constructed so that an event $G$ guarantees equality. Then

$d_{TV}(\operatorname{Law}(X),\operatorname{Law}(Y))\le \mathbb{P}(G^{c})$.

The bound is only as good as the construction. A bad coupling can disagree often even for identical laws. In particular, independent copies of the same diffuse continuous law disagree with probability one while their total variation distance is zero.

For a bounded statistic $h$, a coupling can separate rare mismatch from ordinary approximation:

$\lvert \mathbb{E}[h(X)]-\mathbb{E}[h(Y)]\rvert \le \mathbb{E}[\lvert h(X)-h(Y)\rvert \mathbf{1}_{G}]+\mathbb{E}[\lvert h(X)-h(Y)\rvert \mathbf{1}_{G^{c}}]$.

If equality holds on $G$, only the second term remains. If exact equality is unrealistic but metric closeness is natural, Wasserstein distance will be a better language.

### Conditional comparisons

If $\mathbb{P}(G)>0$, conditioning changes a law by at most the discarded probability:

$d_{TV}(\operatorname{Law}(X),\operatorname{Law}(X \mid G))\le \mathbb{P}(G^{c})$.

Indeed, for every measurable $A$, writing $p=\mathbb{P}(G)$ gives

$\mathbb{P}(X\in A)=p\mathbb{P}(X\in A\mid G)+(1-p)\mathbb{P}(X\in A\mid G^{c})$.

Therefore the absolute difference between $\mathbb{P}(X\in A\mid G)$ and $\mathbb{P}(X\in A)$ is at most $1-p=\mathbb{P}(G^{c})$. Taking the supremum over $A$ proves the bound. Equality need not hold when $G$ contains information not determined by $X$.

## Rare indicators and Poisson approximation

Let $B\sim \operatorname{Bernoulli}(p)$ and $N\sim \operatorname{Poisson}(p)$. Direct calculation gives

$d_{TV}(\operatorname{Law}(B),\operatorname{Law}(N))=p(1-e^{-p})\le p^{2}$.

Indeed, the Poisson law has surplus mass at zero and at values at least two, while the Bernoulli law has the compensating surplus at one. The total surplus is $p-pe^{-p}$.

Now let independent $B_{i}\sim \operatorname{Bernoulli}(p_{i})$ and independent $N_{i}\sim \operatorname{Poisson}(p_{i})$. Product tensorization yields

$d_{TV}(\operatorname{Law}((B_{i})_{i}),\operatorname{Law}((N_{i})_{i}))\le \sum_{i}p_{i}^{2}$.

Apply the sum map. Since $\sum_{i}N_{i}\sim \operatorname{Poisson}(\lambda)$ with $\lambda=\sum_{i}p_{i}$, data processing proves the elementary Le Cam bound

$d_{TV}(\operatorname{Law}(\sum_{i}B_{i}),\operatorname{Poisson}(\lambda))\le \sum_{i}p_{i}^{2}$.

This is a finite, uniform event-probability guarantee. It applies to unequal rare-event probabilities and immediately bounds the error for every tail or point event.

### Where the Poisson comparison stops being informative

The right side must be small. For $n$ Bernoulli variables with common $p$, it is $np^{2}=\lambda p$. The classical rare-event regime keeps $\lambda=np$ moderate while $p$ tends to zero, making the bound vanish. If $p=1/2$, the bound is $n/4$, which reaches one for $n\ge 4$ and says nothing beyond the trivial bound. That failure is structural: the binomial variance is $np(1-p)$, whereas the matched Poisson variance is $np$; with $p$ fixed away from zero, their fluctuation scales do not match.

The inequality is sufficient, not necessary. A large upper bound does not prove a bad approximation. Conversely, matching only the means never proves a good approximation. The dependence assumption also matters: if the indicators occur in clusters, an ordinary Poisson law can fail even when each marginal probability is small.

## Wasserstein distance measures displacement

Suppose $(S,d)$ is a metric space. The first Wasserstein distance is

$W_{1}(\mu ,\nu )=\inf \mathbb{E}[d(X,Y)]$,

where the infimum is over couplings with finite first transport cost. Total variation uses the discrete mismatch cost $\mathbf{1}_{X\ne Y}$; Wasserstein uses the geometry of $S$.

On a space with discrete metric $d(x,y)=\mathbf{1}_{x\ne y}$, the maximal-coupling formula gives

$W_{1}(\mu ,\nu )=d_{TV}(\mu ,\nu )$.

If an ordinary metric has diameter at most $D$, then a maximal coupling shows

$W_{1}(\mu ,\nu )\le D d_{TV}(\mu ,\nu )$.

There is generally no reverse inequality without separation of distinct points. On the real line,

$d_{TV}(\delta_{0},\delta_{\varepsilon})=1$ for every $\varepsilon\ne 0$,

but $W_{1}(\delta_{0},\delta_{\varepsilon})=\lvert \varepsilon\rvert \to 0$. Total variation sees perfectly distinguishable point masses; Wasserstein sees that they are geometrically close.

The opposite mismatch also occurs. Let

$\mu =\delta_{0}$, $\nu =(1-\varepsilon)\delta_{0}+\varepsilon \delta_{M}$.

Then $d_{TV}(\mu ,\nu )=\varepsilon$, while $W_{1}(\mu ,\nu )=\varepsilon M$, which can be arbitrarily large at fixed $\varepsilon$. A rare amount of mass moved a great distance barely affects total variation but dominates transport cost.

For real laws with finite first moments, the quantile coupling is optimal for $W_{1}$ and

$W_{1}(\mu ,\nu )=\int_{0}^{1}\lvert F^{-1}(u)-G^{-1}(u)\rvert du$.

This one-dimensional transport result is imported from Panaretos and Zemel, *An Invitation to Statistics in Wasserstein Space*, Chapter 1, Section 1.5, Theorem 1.5.1, p. 12, and Corollary 1.5.3, p. 13. Proposition 1.5.2 on p. 13 gives the equivalent integral of $\lvert F-G\rvert$ over the real line.

This formula answers a different question from maximal agreement. Choose total variation for uniform control of event probabilities and hypothesis testing; choose Wasserstein when locations and magnitudes matter or when nearby point masses should count as similar.

## Comparison audit

Before accepting a coupling or distance argument, check the following.

1. **Marginals:** were both prescribed laws actually verified?
2. **Convention:** is $d_{TV}$ the half-$L^{1}$ probability convention or the full variation norm?
3. **Direction:** every coupling gives an upper bound on total variation, never a lower bound.
4. **Optimality:** equality requires a maximal coupling or an independently proved witnessing event.
5. **Processing:** a measurable statistic or common random channel can lose information, not create total variation.
6. **Products:** are the compared vector laws genuinely products? Coordinatewise marginals alone do not justify tensorization.
7. **Approximation scale:** is the stated error smaller than one and small enough for the intended event probabilities?
8. **Geometry:** does the application care about exact disagreement or about the distance moved?

## Further exercises with complete solutions

### 1. Verify a coupling

**Exercise S2.1**

<a id="coupling-and-total-variation-ex-1"></a>

Let $U\sim \operatorname{Uniform}(0,1)$, $X=\mathbf{1}_{U\le 1/3}$, and $Y=\mathbf{1}_{U\le 3/4}$. Verify the marginals and find $\mathbb{P}(X\ne Y)$.

<details>
<summary>Hint 1</summary>

Check each marginal from the uniform distribution function.

</details>

<details>
<summary>Hint 2</summary>

The indicators disagree exactly between their two thresholds.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $\mathbb{P}(U\le a)=a$, $X\sim \operatorname{Bernoulli}(1/3)$ and $Y\sim \operatorname{Bernoulli}(3/4)$. Because $1/3\le 3/4$, disagreement occurs exactly when $1/3<U\le 3/4$. Its probability is $3/4-1/3=5/12$.

</details>

### 2. Independent coupling is not maximal

**Exercise S2.2**

<a id="coupling-and-total-variation-ex-2"></a>

Let $X,Y$ be independent and uniform on $\{1,2,3,4\}$. Compare $\mathbb{P}(X\ne Y)$ with the total variation distance between their laws.

<details>
<summary>Hint 1</summary>

Identical marginal laws have total variation zero.

</details>

<details>
<summary>Hint 2</summary>

Under independence the agreement probability is the sum of four products $(1/4)^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Their laws are identical, so the total variation distance is zero. Independence gives $\mathbb{P}(X=Y)=4(1/4)^{2}=1/4$, hence $\mathbb{P}(X\ne Y)=3/4$. The coupling inequality is valid but loose. Setting $Y=X$ would be maximal and give zero disagreement.

</details>

### 3. Compute finite total variation

**Exercise S2.3**

<a id="coupling-and-total-variation-ex-3"></a>

On $\{a,b,c\}$, let $p=(1/2,1/3,1/6)$ and $q=(1/4,1/4,1/2)$. Compute $d_{TV}(p,q)$ and give a witnessing event.

<details>
<summary>Hint 1</summary>

Use half the sum of absolute point-mass differences.

</details>

<details>
<summary>Hint 2</summary>

The states with positive $p-q$ form an event attaining that distance.

</details>

<details>
<summary>Solution</summary>

**Solution.** The absolute differences are $1/4$, $1/12$, and $1/3$, whose sum is $2/3$. Thus $d_{TV}=(1/2)(2/3)=1/3$. The positive discrepancies $p-q$ occur at $a,b$, so $A=\{a,b\}$ witnesses the distance: $p(A)=5/6$, $q(A)=1/2$, and the difference is $1/3$.

</details>

### 4. Overlap formula

**Exercise S2.4**

<a id="coupling-and-total-variation-ex-4"></a>

Prove for finite mass functions that $1-\sum_{x}\min(p(x),q(x))=(1/2)\sum_{x}\lvert p(x)-q(x)\rvert$.

<details>
<summary>Hint 1</summary>

Use the pointwise identity $2\min(p,q)=p+q-|p-q|$.

</details>

<details>
<summary>Hint 2</summary>

Sum over states and use that both mass functions have total one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Pointwise,

$\min(p,q)=[p+q-\lvert p-q\rvert ]/2$.

Summing and using $\sum p=\sum q=1$ gives

$\sum_x \min(p(x),q(x))=1-(1/2)\sum_x \lvert p(x)-q(x)\rvert$.

Rearranging proves the identity.

</details>

### 5. Triangle inequality

**Exercise S2.5**

<a id="coupling-and-total-variation-ex-5"></a>

Prove $d_{TV}(\mu ,\nu )\le d_{TV}(\mu ,\rho)+d_{TV}(\rho,\nu )$ from the event definition.

<details>
<summary>Hint 1</summary>

Insert the intermediate law $\rho$ into each event-probability difference.

</details>

<details>
<summary>Hint 2</summary>

Apply the real triangle inequality and then take the supremum over events.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every measurable $A$,

$\lvert \mu (A)-\nu (A)\rvert \le \lvert \mu (A)-\rho(A)\rvert +\lvert \rho(A)-\nu (A)\rvert$

$\le d_{TV}(\mu ,\rho)+d_{TV}(\rho,\nu )$.

The right side is independent of $A$; taking the supremum over $A$ gives the result.

</details>

### 6. Coupling inequality for an event

**Exercise S2.6**

<a id="coupling-and-total-variation-ex-6"></a>

If $(X,Y)$ is a coupling and $A$ is measurable, prove $\lvert \mathbb{P}(X\in A)-\mathbb{P}(Y\in A)\rvert \le \mathbb{P}(X\ne Y)$.

<details>
<summary>Hint 1</summary>

Express both event probabilities as expectations of indicators.

</details>

<details>
<summary>Hint 2</summary>

Their indicator difference vanishes whenever the coupled variables agree.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write each probability as an expectation of an indicator. The indicator difference is zero when $X=Y$ and has absolute value at most one otherwise. Therefore

$\lvert \mathbb{E}[\mathbf{1}_{X\in A}-\mathbf{1}_{Y\in A}]\rvert \le \mathbb{E}[\mathbf{1}_{X\ne Y}]=\mathbb{P}(X\ne Y)$.

</details>

### 7. Construct a maximal coupling

**Exercise S2.7**

<a id="coupling-and-total-variation-ex-7"></a>

For $p=(1/2,1/2,0)$ and $q=(1/4,1/4,1/2)$, describe the common and residual parts and a maximal coupling.

<details>
<summary>Hint 1</summary>

Take the pointwise common mass $\min(p,q)$.

</details>

<details>
<summary>Hint 2</summary>

Couple that shared mass identically; normalise the residual laws on their disjoint supports.

</details>

<details>
<summary>Solution</summary>

**Solution.** The common masses are $r=(1/4,1/4,0)$, totaling $\alpha=1/2$. With probability $1/2$, choose the first or second state equally and set $X=Y$ there. The residual of $p$ is $(1/4,1/4,0)$, which after normalisation is uniform on the first two states; the residual of $q$ is $(0,0,1/2)$, concentrated on the third. With probability $1/2$, draw from those residuals, which necessarily disagree. Thus $\mathbb{P}(X\ne Y)=1/2=d_{TV}(p,q)$.

</details>

### 8. Best testing error

**Exercise S2.8**

<a id="coupling-and-total-variation-ex-8"></a>

If $d_{TV}(\mu ,\nu )=0.4$ and the two hypotheses have equal prior probabilities, find the optimal success and error probabilities for one observation.

<details>
<summary>Hint 1</summary>

Equal-prior optimal error is $(1-d_{TV})/2$.

</details>

<details>
<summary>Hint 2</summary>

Take its complement to obtain the success probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** The best success probability is $(1+d_{TV})/2=(1+0.4)/2=0.7$. The smallest error is its complement, $0.3$, equivalently $(1-d_{TV})/2$.

</details>

### 9. Signed dual constant

**Exercise S2.9**

<a id="coupling-and-total-variation-ex-9"></a>

On $\{0,1\}$, take $\mu =\delta_{0}$ and $\nu =\delta_{1}$. Evaluate $\sup_{\lvert h\rvert \le 1}\lvert \mathbb{E}_\mu h-\mathbb{E}_\nu h\rvert$ and compare it with $d_{TV}$.

<details>
<summary>Hint 1</summary>

Choose the two endpoint values of a test bounded by one in absolute value.

</details>

<details>
<summary>Hint 2</summary>

The expectations can differ by two, while total variation under the probability convention is one.

</details>

<details>
<summary>Solution</summary>

**Solution.** The total variation distance is one. Choose $h(0)=1$ and $h(1)=-1$; then the expectation difference is $2$. No larger value is possible because each expectation lies in $[-1,1]$. Thus the signed-test supremum is $2d_{TV}$, confirming the factor two.

</details>

### 10. Data processing by parity

**Exercise S2.10**

<a id="coupling-and-total-variation-ex-10"></a>

Let $\mu$ be uniform on $\{0,1,2,3\}$ and $\nu$ uniform on $\{0,2\}$. Compute their total variation distance, then compute the distance after applying parity.

<details>
<summary>Hint 1</summary>

First compute the four point-mass discrepancies.

</details>

<details>
<summary>Hint 2</summary>

Then push each law through the even/odd map and recompute on the two-state space.

</details>

<details>
<summary>Solution</summary>

**Solution.** The masses differ by $1/4$ at all four points, so $d_{TV}=(1/2)(4/4)=1/2$. Under parity, $\mu$ becomes uniform on $\{even,odd\}$, while $\nu$ is concentrated on $even$. Their distance is $1/2$. Here data processing gives equality because parity retains a witnessing event.

</details>

### 11. Strict data processing

**Exercise S2.11**

<a id="coupling-and-total-variation-ex-11"></a>

Give a measurable map that sends the two laws in Exercise 10 to identical laws.

<details>
<summary>Hint 1</summary>

A constant map erases all distinguishing information.

</details>

<details>
<summary>Hint 2</summary>

Both pushforwards then become the same point mass.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take the constant map $T(x)=0$. Both pushforward laws are $\delta_{0}$, so their distance is zero, strictly below the original $1/2$. The map discards all distinguishing information.

</details>

### 12. A kernel contraction coefficient

**Exercise S2.12**

<a id="coupling-and-total-variation-ex-12"></a>

On $\{0,1\}$, let $K(x,\cdot )$ equal $\operatorname{Bernoulli}(0.4)$ for $x=0$ and $\operatorname{Bernoulli}(0.7)$ for $x=1$. Find $\delta(K)$ and bound $d_{TV}(\mu K,\nu K)$ in terms of $d_{TV}(\mu ,\nu )$.

<details>
<summary>Hint 1</summary>

The two kernel rows are Bernoulli laws.

</details>

<details>
<summary>Hint 2</summary>

Their total variation is the absolute difference of their success probabilities; apply the contraction coefficient.

</details>

<details>
<summary>Solution</summary>

**Solution.** For Bernoulli laws, total variation is the absolute difference of success probabilities. Hence $\delta(K)=\lvert 0.7-0.4\rvert =0.3$. The contraction bound is

$d_{TV}(\mu K,\nu K)\le 0.3d_{TV}(\mu ,\nu )$.

</details>

### 13. Two-factor product bound

**Exercise S2.13**

<a id="coupling-and-total-variation-ex-13"></a>

If $d_{TV}(\mu_{1},\nu_{1})=0.1$ and $d_{TV}(\mu_{2},\nu_{2})=0.2$, give the independent maximal-coupling bound for the product laws and compare it with the sum bound.

<details>
<summary>Hint 1</summary>

Use independent maximal couplings for the two factors.

</details>

<details>
<summary>Hint 2</summary>

The probability of at least one disagreement is bounded by one minus the product of agreement probabilities.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sharper displayed product bound is

$1-(1-0.1)(1-0.2)=1-0.72=0.28$.

The union or sum bound is $0.1+0.2=0.3$. Both are valid; $0.28$ retains the overlap of the two disagreement events.

</details>

### 14. A product lower bound

**Exercise S2.14**

<a id="coupling-and-total-variation-ex-14"></a>

Prove $d_{TV}(\mu_{1}\otimes \mu_{2},\nu_{1}\otimes \nu_{2})\ge d_{TV}(\mu_{1},\nu_{1})$.

<details>
<summary>Hint 1</summary>

Project the product observations onto the first coordinate.

</details>

<details>
<summary>Hint 2</summary>

Data processing says that this projection cannot increase total variation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Project each pair onto its first coordinate. The resulting pushforwards are $\mu_{1}$ and $\nu_{1}$. Data processing says the distance after projection cannot exceed the original product distance, giving the claim.

</details>

### 15. Repeated-product error budget

**Exercise S2.15**

<a id="coupling-and-total-variation-ex-15"></a>

Suppose $d_{TV}(\mu ,\nu )\le 0.002$. Bound $d_{TV}(\mu^{\otimes 100},\nu^{\otimes 100})$ using both product formulas.

<details>
<summary>Hint 1</summary>

Apply both the sum bound and the independent-product disagreement bound.

</details>

<details>
<summary>Hint 2</summary>

Use $100(0.002)$ and $1-(0.998)^{100}$; neither need be the exact distance.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum bound gives $100(0.002)=0.2$. The independent maximal-coupling bound gives

$1-(1-0.002)^{100}=1-0.998^{100}\approx 0.1814$.

The latter is smaller. Neither calculation claims equality.

</details>

### 16. Bernoulli versus Poisson

**Exercise S2.16**

<a id="coupling-and-total-variation-ex-16"></a>

Compute $d_{TV}(\operatorname{Bernoulli}(p),\operatorname{Poisson}(p))$ at $p=0.1$ and compare it with $p^{2}$.

<details>
<summary>Hint 1</summary>

Use the exact Bernoulli–Poisson distance $p(1-e^{-p})$.

</details>

<details>
<summary>Hint 2</summary>

Insert $p=0.1$ and compare the result with $0.01$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The exact formula is

$p(1-e^{-p})=0.1(1-e^{-0.1})\approx 0.009516$.

The elementary upper bound is $p^{2}=0.01$, which is slightly larger and therefore valid.

</details>

### 17. A Poisson-binomial error bound

**Exercise S2.17**

<a id="coupling-and-total-variation-ex-17"></a>

Let independent indicators have probabilities $0.01,0.02,0.03,0.04$. Bound the total variation distance between their sum and the Poisson law with matching mean.

<details>
<summary>Hint 1</summary>

The matching Poisson rate is the sum of the four probabilities.

</details>

<details>
<summary>Hint 2</summary>

The elementary total-variation bound is the sum of their squares.

</details>

<details>
<summary>Solution</summary>

**Solution.** The matching mean is $\lambda=0.10$. Le Cam's bound gives

$0.01^{2}+0.02^{2}+0.03^{2}+0.04^{2}$

$=0.0001+0.0004+0.0009+0.0016=0.003$.

Thus every event probability differs by at most $0.003$.

</details>

### 18. Diagnose a useless approximation bound

**Exercise S2.18**

<a id="coupling-and-total-variation-ex-18"></a>

Apply the same bound to $\operatorname{Binomial}(100,1/2)$. What does it establish?

<details>
<summary>Hint 1</summary>

Insert the common success probability one half into $np^2$.

</details>

<details>
<summary>Hint 2</summary>

A bound greater than one reduces to the trivial probability bound and certifies no closeness.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $100(1/2)^{2}=25$. Since total variation is always at most one, the result reduces to the trivial bound one and establishes no useful closeness. One must not interpret a loose upper bound as a measured distance. Here the rare-event premise is absent.

</details>

### 19. Compare total variation and Wasserstein

**Exercise S2.19**

<a id="coupling-and-total-variation-ex-19"></a>

For $\mu =\delta_{0}$ and $\nu =0.99\delta_{0}+0.01\delta_{1000}$ on the real line, compute $d_{TV}$ and $W_{1}$.

<details>
<summary>Hint 1</summary>

The unmatched mass is one percent.

</details>

<details>
<summary>Hint 2</summary>

Transport distance also multiplies that mass by its displacement of one thousand.

</details>

<details>
<summary>Solution</summary>

**Solution.** The unmatched mass is $0.01$, so $d_{TV}(\mu ,\nu )=0.01$. Every coupling must move that mass from zero to $1000$; the remaining mass stays at zero. Hence $W_{1}=0.01(1000)=10$. Small total variation need not mean small transport cost on an unbounded space.

</details>

### 20. Select the appropriate metric

**Exercise S2.20**

<a id="coupling-and-total-variation-ex-20"></a>

For each task, choose total variation or Wasserstein and justify the choice: (a) uniformly bound errors in all rejection-event probabilities; (b) compare forecasts where a one-degree temperature error should be cheaper than a twenty-degree error.

<details>
<summary>Hint 1</summary>

Decide whether the task concerns event probabilities or geometric displacement.

</details>

<details>
<summary>Hint 2</summary>

Total variation controls all rejection events; Wasserstein records how far an erroneous point forecast is moved.

</details>

<details>
<summary>Solution</summary>

**Solution.** For (a), total variation is designed for the supremum over measurable event-probability errors and directly controls every rejection region. For (b), Wasserstein is appropriate because its ground metric records the magnitude of displacement. Total variation treats any two unequal point forecasts as maximally different, regardless of whether they differ by one degree or twenty.

</details>



## Sources

This chapter combines Euler's original stochastic-process and proof-based probability treatments. Specific cited theorems retain their attributions. See Rick Durrett, *Probability: Theory and Examples*, fifth edition, and the book's reference guide. Exercises retain their original semantic identifiers.

## Summary

A coupling specifies a joint law with fixed marginals. Every coupling bounds total variation by its disagreement probability, and a maximal coupling attains that bound. For chains, coalescence must be preserved after meeting. Contraction, product bounds and good-event comparisons express different forms of controlled approximation.
