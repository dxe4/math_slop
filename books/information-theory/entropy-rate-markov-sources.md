
# Entropy Rate and Markov Sources

Preparation is entropy chain rules and finite Markov-chain stationarity/occupation laws. The general existence theorem uses stationarity; the pathwise surprise and coding theorem additionally use finite irreducibility.

## Marginal uncertainty is not a process rate

A stochastic process has a joint law for every finite block. Its one-symbol entropy does not determine the uncertainty accumulated over time. An iid fair-bit process and a process that chooses one fair bit once and repeats it forever both have one bit of marginal entropy at every time. Their length-$n$ block entropies are respectively $n$ and one.

For a finite-alphabet process, define its entropy rate when the limit exists by
$$
h=\lim_{n\to\infty}\frac1nH(X_1,\ldots,X_n).
$$
This measures average block uncertainty per time step. It is a property of the full process law, including dependence.

Stationarity means that shifting all time indices together leaves every finite joint law unchanged. It does not mean the observed path is constant, independent, mixing or Gaussian. Each of those is a different property. This chapter proves rate existence under finite-alphabet stationarity and then specialises to finite Markov chains.

## Entropy-rate existence under stationarity

Put $a_1=H(X_1)$ and
$$
a_n=H(X_n\mid X_1,\ldots,X_{n-1})\quad(n\ge2).
$$
Conditioning reduces entropy and stationarity shifts the remaining block:
$$
a_{n+1}
=H(X_{n+1}\mid X_1,\ldots,X_n)
\le H(X_{n+1}\mid X_2,\ldots,X_n)=a_n.
$$
Thus $(a_n)$ is nonincreasing and bounded below by zero. It converges to some $h\ge0$. By the entropy chain rule,
$$
\frac1nH(X_1,\ldots,X_n)=\frac1n\sum_{i=1}^na_i\longrightarrow h
$$
by the elementary Cesàro-average lemma. Hence the entropy rate exists and equals the limit of finite-past conditional entropies.

The proof uses no ergodic theorem and no independence. Finite alphabets supply bounded finite entropies, and stationarity supplies the shift identity. For general continuous variables or infinite alphabets, these steps can require additional hypotheses.

The rate is at most $H(X_1)$, with equality when every $a_n$ equals the first. For a stationary finite process this equality implies every finite block factors into the product of the marginal law: equality at each conditioning step is independence of the current variable from its entire finite past. Thus maximum rate relative to the fixed marginal is the iid process.

The sequence $H(X^n)/n$ also decreases: it averages an initial segment of the nonincreasing $a_i$. This monotonicity is useful for upper approximations. A short-block entropy per symbol can overestimate the true rate when long-range dependencies have not yet appeared.

## A stationary finite Markov source

Let $(X_i)$ be a first-order Markov chain on a finite state set, with transition matrix $P$ and stationary initial law $\pi$. Then $\pi P=\pi$. For every positive-probability past,
$$
P(X_{i+1}=b\mid X_1,\ldots,X_i)=P_{X_i b}.
$$
Its conditional entropy depends only on the current state. Averaging under stationarity gives
$$
h=\sum_a\pi_aH(P_{a\cdot})
=-\sum_{a,b:\pi_aP_{ab}>0}\pi_aP_{ab}\log_2P_{ab}.
$$
Indeed the chain rule gives the exact finite-block identity
$$
H(X_1,\ldots,X_n)=H(\pi)+(n-1)h.
$$
No irreducibility is needed for this identity if the chain is started in a stationary law. Multiple stationary distributions can produce different rates.

For a nonstationary initial law $\mu$, the exact identity becomes
$$
H(X^n)=H(\mu)+\sum_{i=1}^{n-1}\sum_a(\mu P^{i-1})_aH(P_{a\cdot}).
$$
If the chain is finite irreducible, its Cesàro-averaged state laws converge to its unique stationary law, even if the chain is periodic. Dividing by $n$ therefore recovers the same rate formula. Aperiodicity is needed for ordinary convergence of all state laws, but not for this time-average statement.

The source chapter on [classes, hitting times and stationarity](../stochastic-processes-paths/classes-hitting-times-stationarity.md) supplies the finite-chain preparation. Distinguishing a stationary initial law from irreducibility prevents accidentally using a long-run uniqueness claim in a reducible model.

## A Markov asymptotic equipartition theorem

**Theorem 13.1.** For a finite irreducible Markov chain with any initial distribution, normalised block surprise converges almost surely to
$$
h=-\sum_{a,b}\pi_aP_{ab}\log_2P_{ab},
$$
where only positive transitions enter the sum.

**Proof.** On a realised block,
$$
-\log_2P(X^n)
=-\log_2\mu(X_1)-\sum_{i=1}^{n-1}\log_2P_{X_iX_{i+1}}.
$$
The initial term is finite on every possible starting state and divided by $n$ tends to zero. For every positive transition $(a,b)$, the empirical transition frequency converges almost surely to $\pi_aP_{ab}$ by the finite irreducible Markov occupation law. There are finitely many such transitions, and their logarithms are finite constants. Writing the transition sum as a sum of frequencies times those constants proves the result. ∎

The occupation law can be obtained by regeneration at any chosen state: successive return cycles have iid finite-mean lengths; cycle reward is the number of uses of a specified transition. Renewal-reward averaging gives its stationary frequency. Initial time before the first return contributes a vanishing fraction. This remains valid for a periodic chain; period restricts possible return times but does not invalidate the cycle law of large numbers.

An impossible transition never occurs and is omitted. One must not replace $\log0$ by a large finite number and then claim that the resulting expression is the same model.

## Coding dependent Markov sources

Define a typical set using the actual Markov block probability, with $h$ replacing iid entropy:
$$
T_{n,\varepsilon}=\{x^n:2^{-n(h+\varepsilon)}\le P(x^n)\le2^{-n(h-\varepsilon)}\}.
$$
The Markov equipartition theorem makes its probability tend to one. The cardinality arguments in Chapter 5 use only the displayed probability bounds, so they remain valid.

Consequently rates above $h$ permit fixed-length almost-lossless block compression, while rates below $h$ have success probability tending to zero. The proof is the same count-versus-probability split, with its new source theorem now justified. Marginal entropy generally overstates the best first-order rate.

For a known Markov model, arithmetic coding can use the transition probabilities and initial law directly. Its ideal expected length is below $H(X^n)+2$ bits, giving per-symbol rate tending to $h$. The model is part of shared preparation; transmitting a fitted transition table requires a model-cost analysis.

The iid count-and-index code of Chapter 8 does not automatically exploit Markov dependence. Blocks with the same one-symbol counts can have very different transition patterns. A Markov-universal code needs transition counts or another context model, rather than merely substituting the marginal entropy estimate.

## Why stationarity alone does not give a constant surprise limit

Choose a latent fair bit $B$ once. If $B=0$, output zeros forever; if $B=1$, output iid fair bits. The resulting process is stationary but not ergodic: the latent source regime persists.

Its block entropy satisfies
$$
H(X^n)=H(B)+H(X^n\mid B)-H(B\mid X^n)
=1+\frac n2-H(B\mid X^n).
$$
Since the last term lies between zero and one, its entropy rate is $1/2$ bit. However, along the deterministic component, the all-zero block has mixture probability $1/2+2^{-n-1}$, so its normalised surprise tends to zero.

Along the iid fair component, almost surely a one eventually occurs. Thereafter each realised block has mixture probability $2^{-n-1}$, so its normalised surprise tends to one. The limit is therefore component-dependent, not the constant $1/2$.

This counterexample proves that existence of an entropy rate does not by itself imply concentration of block surprise at that rate. The general finite-alphabet stationary *ergodic* equipartition theorem supplies such concentration, but it is a broader theorem than the stationary entropy calculation proved at the start. Our complete coding extension above used the finite irreducible Markov theorem, where the required occupation result is available.

## Observation can change the apparent memory

If a Markov chain is observed through a many-to-one function, the observed process need not remain first-order Markov. The hidden state may retain information not recoverable from the most recent observed symbol. Treating the observed labels as a Markov source can therefore miss longer dependencies.

Nevertheless a stationary finite-valued observation process has an entropy rate by the first theorem. Deterministic processing of each block cannot increase its entropy, so its rate is at most that of the full state process when both are measured per time step.

The bound does not tell us how to compute the hidden-process rate from a one-step observed transition table. Such a table only estimates one finite-past conditional entropy, which can be a strict upper bound on the rate. This is a useful example of a valid inequality that does not by itself yield an identification formula.

## Finite-order memory and enlarged states

A stationary source of order $r$ has next-symbol law depending only on the previous $r$ symbols. Introduce the state $S_i=(X_{i-r+1},\ldots,X_i)$. On its reachable tuple set this is a first-order Markov chain: a transition shifts the tuple and appends one new symbol.

The entropy chain rule then gives
$$
h=H(X_{r+1}\mid X_1,\ldots,X_r)
$$
under stationarity. Once the current tuple is known, the next tuple and the appended symbol determine one another, so the row entropy of the tuple chain is exactly that next-symbol conditional entropy. Enlarging the state did not multiply the time unit.

One must restrict to reachable tuples before asserting irreducibility. A source with forbidden patterns may leave many of the $|\mathcal X|^r$ formal tuples impossible. If the reachable tuple chain is finite irreducible, its occupation law supplies the same equipartition proof as above. If it splits into distinct persistent classes, a mixture can again have component-dependent surprise limits.

This construction explains both the power and the cost of context modelling. Longer contexts can reduce residual entropy, but the number of possible states grows exponentially with context length. A fitted high-order model needs enough data and an explicit model-description convention; a lower empirical conditional entropy alone does not establish better finite-file compression.

## Worked example 13.1: A persistent symmetric bit

Let the state flip with probability $a$ and remain unchanged with probability $1-a$, with $0<a<1$. The stationary law is fair. Marginal entropy is one bit, but the entropy rate is $h_2(a)$. Exact block entropy is $1+(n-1)h_2(a)$. For $a$ close to zero, long runs make the source highly predictable after its first bit, despite a balanced histogram of zeros and ones.

## Worked example 13.2: A deterministic alternation

Take $P_{01}=P_{10}=1$ and a fair initial state. The chain is stationary, irreducible and periodic. Every block is one of two alternating patterns, so $H(X^n)=1$ and the rate is zero. Its marginal entropy is one. Empirical state and transition frequencies converge even though the distribution from a fixed initial state alternates and never converges ordinarily to the fair stationary law.

## Worked example 13.3: An asymmetric chain

Let transitions from zero to one have probability $a>0$ and from one to zero probability $b>0$, with both at most one. Stationary balance gives $\pi_0=b/(a+b)$ and $\pi_1=a/(a+b)$. The entropy rate is
$$
\frac b{a+b}h_2(a)+\frac a{a+b}h_2(b).
$$
The stationary marginal entropy is $h_2(a/(a+b))$. These coincide only in special cases, including when both rows equal the stationary distribution. The rate weights uncertainty of the next transition by the current-state frequency.

## The finite-block excess above entropy rate

For a stationary finite source, subtract block length times entropy rate from block entropy. By the conditional-entropy proof, the result is the sum of the first block-length terms of the nonnegative differences between finite-past conditional entropy and its limiting value.

This excess is therefore nonnegative and nondecreasing with block length. Dividing it by block length tends to zero, because block entropy per symbol converges to the rate. These conclusions follow without assuming the excess itself converges to a finite constant.

For a stationary first-order Markov source, the exact block formula makes the excess constant: it is marginal state entropy minus one-step conditional entropy. That is also mutual information between two consecutive states. The initial state accounts for a finite description cost, while each later step contributes the same residual uncertainty rate.

For a stationary source of fixed order, an analogous calculation applies after the initial context block. Its block entropy is initial-context entropy plus the number of later symbols times the entropy rate. The excess is then a fixed context cost once the block is long enough.

These identities explain why ignoring the initial context can be harmless in a first-order rate limit but inaccurate in a short-file budget. Arithmetic coding with a known transition model still needs a rule for the initial state or context, and the expected cost of that rule is part of the finite description.

For general stationary sources, the existence proof only makes the excess sublinear; it does not bound it by the entropy of one state or by any fixed context length. A claimed finite-memory representation is therefore an additional model assumption. Estimating one-step transition probabilities cannot establish that all longer conditional-entropy reductions have vanished.

This distinction is useful when interpreting a model fit. A small measured one-step conditional entropy can show predictability under that model, while the finite-block excess asks how much uncertainty remains associated with context beyond the limiting per-symbol rate. The same histogram can conceal different answers because it records no temporal order.

## Exercises

### Exercise 13.1
<a id="entropy-rate-markov-sources-ex-1"></a>

Prove the sequence of finite-past conditional entropies decreases under stationarity.

<details>
<summary>Hint 1</summary>

Drop the oldest conditioning variable.

</details>
<details>
<summary>Hint 2</summary>

Shift the remaining indices.

</details>
<details>
<summary>Solution</summary>

Conditioning reduction gives $H(X_{n+1}\mid X_1,\ldots,X_n)\le H(X_{n+1}\mid X_2,\ldots,X_n)$. Stationarity identifies the right side with $H(X_n\mid X_1,\ldots,X_{n-1})$. Thus the sequence decreases and is bounded below by zero.

</details>

### Exercise 13.2
<a id="entropy-rate-markov-sources-ex-2"></a>

Why does its limit equal block entropy rate?

<details>
<summary>Hint 1</summary>

Expand block entropy by the chain rule.

</details>
<details>
<summary>Hint 2</summary>

Use convergence of averages of a convergent sequence.

</details>
<details>
<summary>Solution</summary>

Block entropy divided by $n$ is the average of the first $n$ conditional entropies. For any tolerance, all sufficiently late terms lie within that tolerance of the limit, and the finitely many early terms have vanishing weight. The average therefore has the same limit.

</details>

### Exercise 13.3
<a id="entropy-rate-markov-sources-ex-3"></a>

Compute rate for a process repeating one initial fair bit forever.

<details>
<summary>Hint 1</summary>

Only two entire paths are possible.

</details>
<details>
<summary>Hint 2</summary>

Every block has entropy one.

</details>
<details>
<summary>Solution</summary>

$H(X^n)=1$ for every positive $n$, because the block is determined by the initial fair bit and distinguishes its two possible values. Dividing by $n$ gives rate zero. This contrasts with iid fair bits, whose rate is one.

</details>

### Exercise 13.4
<a id="entropy-rate-markov-sources-ex-4"></a>

Derive the exact stationary Markov block-entropy identity.

<details>
<summary>Hint 1</summary>

Use the Markov property in every chain-rule term.

</details>
<details>
<summary>Hint 2</summary>

Stationarity fixes the distribution of the current state.

</details>
<details>
<summary>Solution</summary>

The first term is $H(\pi)$. Each of the remaining $n-1$ terms is $H(X_{i+1}\mid X_i)=\sum_a\pi_aH(P_{a\cdot})=h$. Hence $H(X^n)=H(\pi)+(n-1)h$.

</details>

### Exercise 13.5
<a id="entropy-rate-markov-sources-ex-5"></a>

Is aperiodicity required for the finite irreducible Markov surprise theorem?

<details>
<summary>Hint 1</summary>

Its proof uses occupation averages.

</details>
<details>
<summary>Hint 2</summary>

Return-cycle averaging works for periodic returns too.

</details>
<details>
<summary>Solution</summary>

No. Irreducibility on a finite state space gives the required finite-mean regeneration and transition-frequency law. Aperiodicity concerns ordinary time-marginal convergence, not the time-averaged occupation law used in the surprise calculation.

</details>

### Exercise 13.6
<a id="entropy-rate-markov-sources-ex-6"></a>

Why does the initial-law term disappear from normalised surprise?

<details>
<summary>Hint 1</summary>

There are finitely many possible initial states.

</details>
<details>
<summary>Hint 2</summary>

Only states with positive initial probability can be realised.

</details>
<details>
<summary>Solution</summary>

The realised value $-\log_2\mu(X_1)$ is a finite random constant that does not grow with block length. Dividing by $n$ sends it to zero almost surely. Zero initial masses never occur and do not create an infinite realised term.

</details>

### Exercise 13.7
<a id="entropy-rate-markov-sources-ex-7"></a>

Explain why one-symbol type coding can miss Markov compressibility.

<details>
<summary>Hint 1</summary>

The same histogram can have many different run structures.

</details>
<details>
<summary>Hint 2</summary>

Transitions contain dependence information.

</details>
<details>
<summary>Solution</summary>

A persistent balanced binary chain can have marginal entropy near one but a much smaller entropy rate. A one-symbol type index still distinguishes many orderings with the same counts. Transition-aware modelling can exploit the preference for long runs, while the iid count code was not designed to do so.

</details>

### Exercise 13.8
<a id="entropy-rate-markov-sources-ex-8"></a>

For the latent mixture example, compute the entropy rate without assuming ergodicity.

<details>
<summary>Hint 1</summary>

Use joint entropy with the latent regime.

</details>
<details>
<summary>Hint 2</summary>

Its conditional entropy lies between zero and one.

</details>
<details>
<summary>Solution</summary>

The identity $H(X^n)=1+n/2-H(B\mid X^n)$ places it between $n/2$ and $n/2+1$. Dividing gives rate $1/2$. The separate surprise limits zero and one demonstrate why that average rate is not a constant pathwise limit.

</details>

### Exercise 13.9
<a id="entropy-rate-markov-sources-ex-9"></a>

Show a deterministic finite-alphabet observation cannot increase entropy rate.

<details>
<summary>Hint 1</summary>

Apply entropy reduction to each finite block.

</details>
<details>
<summary>Hint 2</summary>

Divide by the common block length and take limits.

</details>
<details>
<summary>Solution</summary>

If $Y_i=f(X_i)$, then $Y^n$ is a deterministic function of $X^n$, so $H(Y^n)\le H(X^n)$. If both rates exist, dividing by $n$ and passing to the limit gives $h_Y\le h_X$. Stationarity with finite alphabets guarantees their existence.

</details>

### Exercise 13.10
<a id="entropy-rate-markov-sources-ex-10"></a>

When does a stationary finite source have rate equal to its marginal entropy?

<details>
<summary>Hint 1</summary>

All decreasing conditional entropies must equal their first value.

</details>
<details>
<summary>Hint 2</summary>

Use equality in conditioning reduction.

</details>
<details>
<summary>Solution</summary>

If the rate equals $H(X_1)$, every conditional entropy in the decreasing sequence equals that value. Thus each variable is independent of its entire finite past. The chain rule for probabilities then makes every finite joint law a product of the common marginal, so the process is iid. The converse is immediate.

</details>

## Summary

Finite stationarity guarantees an entropy rate as a decreasing conditional-entropy limit. For a stationary Markov source it is the stationary average row entropy. Irreducible finite-chain occupation laws prove Markov equipartition and coding at that rate; a stationary nonergodic mixture shows why stationarity alone is insufficient for a constant surprise limit.
