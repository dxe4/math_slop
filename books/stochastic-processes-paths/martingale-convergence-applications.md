
# Martingale Convergence and Applications

A fair game need not settle down, and a game that settles down need not preserve its expected fortune at the limit. These are different claims about a sequence of random variables. This chapter gives a complete convergence theorem under a particularly usable hypothesis: bounded second moments. The proof explains both where the limit comes from and why an entire sample path converges, rather than merely a selected subsequence.

Required preparation is [Martingales and Stopping](martingales-and-stopping.md), conditional expectation, the Borel–Cantelli lemma, and completeness of the Hilbert space $L^2$ from proof-based probability and analysis. Completeness is a named analytic prerequisite: every Cauchy sequence for the norm $\|X\|_2=(E|X|^2)^{1/2}$ has an $L^2$ limit. The chapter proves its probabilistic applications. The general equivalence between uniform integrability and $L^1$ martingale closure belongs to the measure-theoretic continuation; it is not assumed here or replaced by an assertion that bounded means suffice.

## Which mode of convergence?

**Definition 12.1 (convergence modes).** On one probability space, $M_n\to M$ almost surely means that the numerical sequence $M_n(\omega)$ tends to $M(\omega)$ outside a single null event. Convergence in probability means $P(|M_n-M|>\varepsilon)\to0$ for every $\varepsilon>0$. Convergence in $L^2$ means $E|M_n-M|^2\to0$; convergence in $L^1$ means $E|M_n-M|\to0$.

Cauchy–Schwarz gives $\|X\|_1\le\|X\|_2$ on a probability space, so $L^2$ convergence implies $L^1$ convergence. Markov's inequality applied to $|X|^2$ gives convergence in probability as well. Almost-sure convergence implies convergence in probability by bounded convergence applied to the indicators of deviations, but it need not imply either norm convergence. We will exhibit that failure using a nonnegative martingale.

Let $(\mathcal F_n)$ be an increasing sequence of sigma-algebras. Throughout the second-moment arguments, $(M_n)$ is a real-valued square-integrable martingale adapted to this filtration. Equality of random variables is understood almost surely. Choosing versions at countably many times causes no difficulty: a countable union of their exceptional null sets is still null.

## Orthogonality pays for future variation

**Lemma 12.2 (orthogonal increments).** Put $D_n=M_n-M_{n-1}$ for $n\ge1$. Then $E[D_n\mid\mathcal F_{n-1}]=0$, $E[M_0D_n]=0$, and $E[D_jD_k]=0$ for $j<k$. Consequently

$$E[M_n^2]=E[M_0^2]+\sum_{k=1}^nE[D_k^2],$$

and, for $n\ge m$,

$$E|M_n-M_m|^2=\sum_{k=m+1}^nE[D_k^2].$$

**Proof.** The zero conditional mean is the martingale identity. For $j<k$, the variable $D_j$ is $\mathcal F_{k-1}$-measurable, and the product is integrable by Cauchy–Schwarz. Conditioning gives $E[D_jD_k]=E[D_jE(D_k\mid\mathcal F_{k-1})]=0$. The same argument applies to $M_0D_k$. Expanding the square of $M_0+\sum D_k$ leaves only the squared terms. Expanding a later difference proves the second identity. ∎

Orthogonality is weaker than independence. A martingale's next increment may have a variance depending strongly on the past. Its conditional mean is nevertheless zero, and that is enough to eliminate the cross terms. An argument that says “martingale increments are independent” would replace the actual hypothesis by a much stronger and usually false one.

If $\sup_n E[M_n^2]<\infty$, the nonnegative series $\sum E[D_n^2]$ converges. Its tails therefore tend to zero. Lemma 12.2 shows that $(M_n)$ is Cauchy in $L^2$. Completeness already supplies an $L^2$ limit, but this does not yet prove convergence of the full sample path. Small average tail energy must still be converted into control of all future times.

## A maximal inequality with its proof

**Theorem 12.3 (finite-horizon $L^2$ maximal inequality).** For an integer $N\ge0$,

$$E\left[\max_{0\le k\le N}|M_k|^2\right]\le4E[M_N^2].$$

**Proof.** Write $Y=\max_{k\le N}|M_k|$. For $\lambda>0$, let $A_k$ be the event that $k$ is the first time $|M_k|\ge\lambda$. These disjoint events are in $\mathcal F_k$, and their union is $\{Y\ge\lambda\}$. Conditional Jensen, or the conditional triangle inequality, gives $|M_k|=|E(M_N\mid\mathcal F_k)|\le E(|M_N|\mid\mathcal F_k)$. Hence

$$\lambda P(Y\ge\lambda)\le\sum_{k=0}^NE[|M_k|1_{A_k}]
\le E[|M_N|1_{\{Y\ge\lambda\}}].$$

The finite maximum $Y$ is square-integrable because $Y^2\le\sum_{k=0}^NM_k^2$. Integrating the preceding inequality over $\lambda>0$ and using Tonelli gives

$$EY^2=\int_0^\infty2\lambda P(Y\ge\lambda)\,d\lambda
\le2E[|M_N|Y]\le2\|M_N\|_2\|Y\|_2.$$

If $\|Y\|_2=0$, the conclusion is immediate. Otherwise divide by that norm and square to obtain the result. ∎

Apply the theorem to the martingale $M_k-M_m$, indexed from time $m$ through $N$. Markov's inequality then gives

$$P\left(\max_{m\le k\le N}|M_k-M_m|>\varepsilon\right)
\le\frac4{\varepsilon^2}E|M_N-M_m|^2.$$

Letting $N$ increase, continuity of probabilities for increasing events bounds the supremum over all future integers by the corresponding tail of $\sum E[D_k^2]$. This step is legitimate because the time set is countable. It does not invoke an unproved continuous-time maximal theorem.

## The bounded-second-moment convergence theorem

**Theorem 12.4 ($L^2$ martingale convergence).** If $\sup_nE[M_n^2]<\infty$, then there is a square-integrable $M_\infty$ such that $M_n\to M_\infty$ almost surely and in $L^2$. In particular the convergence is in $L^1$, $EM_\infty=EM_0$, and

$$M_n=E[M_\infty\mid\mathcal F_n].$$

**Proof.** Lemma 12.2 and completeness give an $L^2$ limit $M_\infty$. Choose increasing deterministic integers $n_j$ such that

$$\sum_{k>n_j}E[D_k^2]\le2^{-4j}.$$

The maximal bound implies

$$P\left(\sup_{k\ge n_j}|M_k-M_{n_j}|>2^{-j}\right)
\le4\,2^{-2j}.$$

The right sides are summable. Borel–Cantelli says that almost surely only finitely many of these events occur. For every remaining sample point and all sufficiently large $j$, every future value is within $2^{-j}$ of $M_{n_j}$. Two values with indices at least $n_j$ are therefore within $2^{1-j}$ of one another. The real sequence is Cauchy and has a finite limit $L$.

This almost-sure limit agrees with $M_\infty$. Indeed $L^2$ convergence implies convergence in probability to $M_\infty$, while almost-sure convergence implies convergence in probability to $L$. For any $\varepsilon>0$,

$$P(|L-M_\infty|>2\varepsilon)
\le P(|L-M_n|>\varepsilon)+P(|M_n-M_\infty|>\varepsilon)\to0.$$

Thus $L=M_\infty$ almost surely. Cauchy–Schwarz supplies $L^1$ convergence and hence equality of limiting expectations.

Finally fix $n$ and take $k\ge n$. The martingale property gives $E[M_k\mid\mathcal F_n]=M_n$. Conditional expectation contracts the $L^2$ norm: conditional Jensen and averaging give $\|E[X\mid\mathcal F_n]\|_2\le\|X\|_2$. Apply this to $X=M_k-M_\infty$ and let $k$ increase. The result is $E[M_\infty\mid\mathcal F_n]=M_n$. ∎

Both parts of the proof have a purpose. Hilbert-space completeness supplies a norm limit; the maximal inequality prevents large late excursions on an exceptional collection of paths. Convergence along a rapidly chosen subsequence alone would not exclude excursions between its selected times.

**Worked example 12.5 (a summable random series).** Let $\varepsilon_k$ be independent signs with probabilities one half, and let $M_n=\sum_{k=1}^n2^{-k}\varepsilon_k$. Its increments have zero conditional mean and squared norms $4^{-k}$. Thus $EM_n^2=\sum_{k=1}^n4^{-k}=(1-4^{-n})/3$, so Theorem 12.4 applies. In this case the series also converges absolutely on every path, since $\sum2^{-k}=1$. Its limit has mean zero and variance $1/3$.

The theorem gives a quantitative tail bound. The remaining increment energy after $n$ is $4^{-n}/3$, so

$$P\left(\sup_{k\ge n}|M_k-M_n|>\varepsilon\right)
\le\frac{4^{1-n}}{3\varepsilon^2}.$$

For $n=5,\varepsilon=1/4$, this is $1/48$. It is an upper bound from a general inequality, not a calculated exact tail probability. Absolute convergence happens to offer other deterministic bounds in this particular example.

## Learning a terminal random quantity

**Theorem 12.6 (closed conditional forecasts).** If $Y\in L^2$, then $M_n=E[Y\mid\mathcal F_n]$ is $L^2$ bounded and converges almost surely and in $L^2$. With $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)$, its limit is $E[Y\mid\mathcal F_\infty]$. In particular it equals $Y$ if $Y$ is $\mathcal F_\infty$-measurable.

**Proof.** The tower property makes $(M_n)$ a martingale, and contraction gives $EM_n^2\le EY^2$. Theorem 12.4 yields a limit $M$. Choose its almost-sure version measurable with respect to $\mathcal F_\infty$. For any $A\in\mathcal F_k$ and $n\ge k$, the conditional-expectation identity gives $E[M_n1_A]=E[Y1_A]$. Passing to the $L^1$ limit gives $E[M1_A]=E[Y1_A]$.

The union $\bigcup_k\mathcal F_k$ is an algebra because the sigma-algebras are increasing. The class of sets $A\in\mathcal F_\infty$ for which the last integral identity holds is a Dynkin class: it contains the whole space, is closed under complements, and is closed under countable disjoint unions by integrability and dominated convergence. The pi-lambda theorem extends the identity from that algebra to $\mathcal F_\infty$. This is the defining property of $E[Y\mid\mathcal F_\infty]$. If $Y$ is already measurable there, the conditional expectation is $Y$. ∎

The limit records the information actually revealed. It need not recover a quantity hidden forever. If every $\mathcal F_n$ is the trivial sigma-algebra, the forecast remains $EY$; the theorem does not turn absence of observations into complete information.

**Worked example 12.7 (two bits and a hidden event).** Let $H_1,H_2$ be independent fair bits and $Y=1_{\{H_1=H_2\}}$. At time zero no bits are known, and $M_0=1/2$. After revealing only $H_1$, the other bit still matches with probability one half, so $M_1=1/2$. After revealing both, $M_2=Y$, and it stays there. The only nonzero increment is $M_2-M_1=\pm1/2$, so its squared expectation is $1/4$. The identity $EY^2=EM_0^2+E(M_2-M_1)^2$ reads $1/2=1/4+1/4$. If the second bit is never revealed, all forecasts instead stay one half.

## Nonnegative convergence without preservation of means

**Theorem 12.8 (nonnegative martingale convergence).** An integrable nonnegative discrete-time martingale converges almost surely to a finite integrable random variable $M$. One only obtains $EM\le EM_0$ without an additional condition.

**Proof.** Fix rational $0<a<b$. Buy one unit whenever the observed process is at or below $a$, and sell it at the first subsequent observation at or above $b$, repeating this rule. The decision to hold during increment $n$ depends only on observations through time $n-1$, so the finite-horizon gain $G_N$ is a sum of bounded predictable coefficients times martingale increments and has expectation zero. Each completed upcrossing earns at least $b-a$. If a position remains open, its loss is at most $a$, because its purchase price was at most $a$ and the current value is nonnegative. Hence

$$G_N\ge(b-a)U_N-a,\qquad EU_N\le\frac a{b-a},$$

where $U_N$ is the number of completed upcrossings by $N$. Monotone convergence gives the same finite expectation bound for $U_\infty$, so that count is finite almost surely.

There are countably many rational intervals with positive endpoints. Outside their combined null event, the path crosses none infinitely often. If its liminf were strictly smaller than its limsup, one could put such a rational interval between them, producing infinitely many upcrossings. Thus a limit exists in $[0,\infty]$. Fatou gives $E[\liminf M_n]\le EM_0<\infty$, which rules out an infinite limit on a set of positive probability and proves the expectation inequality. ∎

This supplies the convergence theorem used by the original nonnegative-martingale exercise in Martingales and Stopping. It proves existence of an integrable limit, not $L^1$ convergence to it. The distinction is already visible in the critical branching population.

**Worked example 12.9 (a fair fortune loses all its limiting mean).** Toss independent fair coins. Put $M_n=2^n$ if the first $n$ tosses are all heads, and put $M_n=0$ otherwise. Before the first tail the next fortune is twice the current one or zero with equal probabilities; after a tail it remains zero. This proves the martingale identity, and $EM_n=2^n2^{-n}=1$.

A tail occurs eventually with probability one, so $M_n\to0$ almost surely. Yet $E|M_n|=1$ for all $n$. Its second moment is $4^n2^{-n}=2^n$, which is unbounded. There is no conflict with Theorem 12.4: its material hypothesis fails. Rare surviving paths carry all the expectation before the limit.

## Applications and boundaries

For a supercritical Galton–Watson process with $m>1$ and finite offspring variance, the preceding chapter proved

$$\sup_nE[(Z_n/m^n)^2]\le1+\frac{\sigma^2}{m(m-1)}.$$

Theorem 12.4 therefore supplies an almost-sure and $L^2$ limit of the normalised population, with mean one. This deduction is available because a second-moment bound was actually established. At criticality the unnormalized population can instead converge almost surely to zero with expectation one at every finite time.

Conditional forecasts and stochastic integrals provide further examples, but only after their own measurability and moment hypotheses are checked. A local martingale obtained after localization is not automatically a true integrable martingale, and an unbounded stopping limit is not a finite-horizon identity. These boundaries will matter again when continuous paths replace integer time.

## The L2 maximal inequality in norm

The earlier probability bound is sufficient for convergence. A related norm inequality is useful for stochastic integrals and solution constructions:
$$
E\left[\max_{0\le k\le N}|M_k|^2\right]\le4E|M_N|^2.
$$
Here is its finite-horizon proof. Put $Y=\max_{k\le N}|M_k|$. On the event of a first crossing of level $a>0$, conditional Jensen gives $E[|M_N|\mid\mathcal F_k]\ge|M_k|\ge a$. Splitting into first-crossing events therefore yields
$$
aP(Y\ge a)\le E[|M_N|\mathbf1_{\{Y\ge a\}}].
$$
Integrate twice this inequality over positive $a$. The tail integral on the left is $EY^2$, while nonnegative interchange makes the right side $2E[|M_N|Y]$. Cauchy–Schwarz gives
$$
EY^2\le2(E|M_N|^2)^{1/2}(EY^2)^{1/2}.
$$
The maximum over finitely many square-integrable variables has finite second moment, so dividing when nonzero and squaring proves the inequality. The zero case is immediate.

For a continuous square-integrable martingale, apply this inequality on nested finite time grids containing the horizon. Continuity makes their maxima increase to the supremum over the whole compact interval. Monotone convergence gives the same constant four. This is the version used with the Ito isometry in the diffusion chapter. The path-continuity condition is what makes dense-grid observations sufficient for this mathematical supremum; it is not assumed for arbitrary processes.

## Quantitative interpretation of convergence

Suppose $M_0=0$ and the future increment energy after time $n$ is $v_n=\sum_{j>n}ED_j^2$. The proof gives $E|M_\infty-M_n|^2=v_n$. The infinite-horizon version of the probability maximal bound also gives
$$
P\left(\sup_{k\ge n}|M_k-M_n|\ge a\right)\le v_n/a^2.
$$
This is a model-based probability statement about a specified martingale. It does not turn the realised remaining error into a deterministic quantity known from the path.

**Worked example 12.10 (a tail bound for dyadic signs).** For coefficients $2^{-j}$, the remaining energy after $n$ terms is $\sum_{j>n}4^{-j}=4^{-n}/3$. Taking threshold $2^{-n/2}$ bounds the probability of a future deviation beyond that threshold by $2^{-n}/3$. The threshold and probability both shrink, but at different rates. The bound controls every future partial sum together, rather than applying an endpoint estimate independently at infinitely many times.

When such a bound is unavailable, convergence in a theorem may still be qualitative. An existence proof of a limit does not automatically supply a practical stopping criterion, and constant observed recent values do not identify the unseen future increment energy. Keeping these statements distinct is particularly important when a martingale is used to study an algorithm or an evolving population.

## Exercises

### Exercise 12.1
<a id="martingale-convergence-applications-ex-1"></a>

Prove that if martingale differences satisfy $\sum_nED_n^2<\infty$ and $M_0\in L^2$, then the partial-sum martingale converges almost surely and in $L^2$.

<details><summary>Hint 1</summary>

Expand the square and use conditional zero means.
</details>
<details><summary>Hint 2</summary>

The increment-energy sum bounds every second moment, so apply Theorem 12.4.
</details>
<details><summary>Solution</summary>

For $M_n=M_0+\sum_{k=1}^nD_k$, adaptedness and zero conditional means make it a martingale. Conditioning proves cross terms vanish, including $E[M_0D_k]$, so $EM_n^2=EM_0^2+\sum_{k\le n}ED_k^2$. The finite total bounds these moments uniformly. Theorem 12.4 supplies both modes of convergence and a square-integrable limit.
</details>

### Exercise 12.2
<a id="martingale-convergence-applications-ex-2"></a>

For independent fair signs, does $M_n=\sum_{k=1}^n\varepsilon_k/\sqrt{k}$ satisfy the bounded-second-moment hypothesis? Does your answer by itself prove divergence almost surely?

<details><summary>Hint 1</summary>

The second moment is the sum of the coefficient squares.
</details>
<details><summary>Hint 2</summary>

Failure of a sufficient condition is not a proof of the opposite conclusion.
</details>
<details><summary>Solution</summary>

Here $EM_n^2=\sum_{k=1}^n1/k$, which diverges, so Theorem 12.4 does not apply. This calculation alone proves neither convergence nor almost-sure divergence. A separate random-series argument would be needed to decide the pathwise question. The exercise asks about the scope of the theorem, not that further theorem.
</details>

### Exercise 12.3
<a id="martingale-convergence-applications-ex-3"></a>

Suppose $\sum_{k>n}ED_k^2\le 10^{-4}$. Bound $P(\sup_{k\ge n}|M_k-M_n|>1/10)$.

<details><summary>Hint 1</summary>

Use the maximal tail bound with threshold $\varepsilon=1/10$.
</details>
<details><summary>Hint 2</summary>

Its factor is $4/\varepsilon^2=400$.
</details>
<details><summary>Solution</summary>

The probability is at most $400\cdot10^{-4}=0.04$. This bounds all future deviations from $M_n$ jointly. It is stronger than applying a separate probability bound to one chosen future time, although it need not be sharp.
</details>

### Exercise 12.4
<a id="martingale-convergence-applications-ex-4"></a>

Let $M_n\to M$ in $L^2$. Prove $EM_n\to EM$ and $EM_n^2\to EM^2$.

<details><summary>Hint 1</summary>

For the means use Cauchy–Schwarz on $M_n-M$.
</details>
<details><summary>Hint 2</summary>

For second moments factor $M_n^2-M^2$ and note that $\|M_n\|_2$ is bounded.
</details>
<details><summary>Solution</summary>

The absolute mean difference is at most $\|M_n-M\|_1\le\|M_n-M\|_2\to0$. Also $|EM_n^2-EM^2|\le\|M_n-M\|_2\|M_n+M\|_2$. The second factor is bounded because $\|M_n\|_2\le\|M_n-M\|_2+\|M\|_2$. Thus the product tends to zero.
</details>

### Exercise 12.5
<a id="martingale-convergence-applications-ex-5"></a>

For the all-heads fortune in Worked example 12.9, calculate $P(M_n>1)$ for $n\ge1$, $EM_n$ and $EM_n^2$. Explain its convergence in probability.

<details><summary>Hint 1</summary>

Its only values are zero and $2^n$.
</details>
<details><summary>Hint 2</summary>

The positive value occurs with probability $2^{-n}$.
</details>
<details><summary>Solution</summary>

The probability is $2^{-n}$, the mean is one, and the second moment is $2^n$. For any fixed positive $\varepsilon$, eventually $2^n>\varepsilon$ and $P(M_n>\varepsilon)=2^{-n}\to0$. Thus it converges in probability to zero, consistently with its almost-sure convergence, while neither $L^1$ nor $L^2$ convergence to zero occurs.
</details>

### Exercise 12.6
<a id="martingale-convergence-applications-ex-6"></a>

If $|Y|\le3$ and $M_n=E[Y\mid\mathcal F_n]$, show the convergence theorem applies. Must its limit equal $Y$?

<details><summary>Hint 1</summary>

Conditional expectation preserves the bound in absolute value.
</details>
<details><summary>Hint 2</summary>

Identify the limit using $\mathcal F_\infty$, and consider a trivial filtration.
</details>
<details><summary>Solution</summary>

The inequality $|M_n|\le E[|Y|\mid\mathcal F_n]\le3$ gives $EM_n^2\le9$. Its limit is $E[Y\mid\mathcal F_\infty]$. It equals $Y$ when $Y$ is measurable with respect to that information, but need not otherwise. Under a trivial filtration and a nonconstant $Y$, the limit is the constant $EY$.
</details>

### Exercise 12.7
<a id="martingale-convergence-applications-ex-7"></a>

For offspring mean two and variance two, show that a one-ancestor normalised branching population has an $L^2$ limit with mean one and variance one.

<details><summary>Hint 1</summary>

Use the variance sum from the branching chapter.
</details>
<details><summary>Hint 2</summary>

Its variances tend to $2/[2(2-1)]=1$; justify passing second moments using Exercise 12.4.
</details>
<details><summary>Solution</summary>

For $W_n=Z_n/2^n$, $EW_n=1$ and $\operatorname{Var}(W_n)=1-2^{-n}$. Hence $EW_n^2\le2$, and Theorem 12.4 gives an $L^2$ limit $W$. Norm convergence preserves means and second moments, so $EW=1$ and $EW^2=2$, yielding variance one. No claim that $W>0$ exactly on survival is required for this conclusion.
</details>

### Exercise 12.8
<a id="martingale-convergence-applications-ex-8"></a>

Why is convergence along a subsequence insufficient to prove almost-sure convergence of a whole sequence? Give a deterministic example and identify the extra control in Theorem 12.4.

<details><summary>Hint 1</summary>

Make even terms zero and odd terms one.
</details>
<details><summary>Hint 2</summary>

The maximal inequality bounds every term after each selected index.
</details>
<details><summary>Solution</summary>

The sequence $x_{2n}=0,x_{2n+1}=1$ has a convergent even subsequence but no full limit. In the theorem, almost surely all sufficiently late tails lie within $2^{-j}$ of their selected starting values $M_{n_j}$. This uniform tail control rules out excursions between the selected indices and proves the full sequence is Cauchy.
</details>

### Exercise 12.9
<a id="martingale-convergence-applications-ex-9"></a>

In the nonnegative upcrossing argument, explain both why $EG_N=0$ and why the possible unfinished trade loses at most $a$.

<details><summary>Hint 1</summary>

The holding indicator for increment $n$ is determined before that increment.
</details>
<details><summary>Hint 2</summary>

The unfinished position was bought at a value no larger than $a$, and the current value cannot be negative.
</details>
<details><summary>Solution</summary>

For a bounded predictable holding indicator $H_n$, $E[H_n(M_n-M_{n-1})]=0$ by conditioning on $\mathcal F_{n-1}$. There are finitely many increments through $N$, so their gain sum has expectation zero. An unfinished purchase at price $x\le a$ has marked gain $M_N-x\ge-a$, since $M_N\ge0$. This gives the deterministic lower bound on trading gain used to bound expected upcrossings.
</details>

### Exercise 12.10
<a id="martingale-convergence-applications-ex-10"></a>

Suppose $M_n\to M$ almost surely and $|M_n|\le C$ for one fixed finite constant. Prove $L^2$ convergence, and explain why the all-heads example cannot use this argument.

<details><summary>Hint 1</summary>

The almost-sure limit also satisfies $|M|\le C$.
</details>
<details><summary>Hint 2</summary>

Apply dominated convergence to $|M_n-M|^2\le4C^2$.
</details>
<details><summary>Solution</summary>

Outside the null event of failed convergence, the limit inherits the bound. Squared differences tend to zero and are dominated by the integrable constant $4C^2$, so their expectations tend to zero. The all-heads fortunes reach $2^n$ on positive-probability events for every $n$, so no single finite deterministic bound applies to all times.
</details>

## Sources

Hao Wu's primary [MIT 18.445 lecture notes](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/pages/lecture-notes/), lectures 15–18, provide a further route through martingales, convergence and uniform integrability. James Norris's author [Markov Chains source page](https://www.statslab.cam.ac.uk/~jrn10/Markov/), section 4.1, supplies another conventional reference. Links were verified for attribution; the proofs and exercises in this chapter are original.

## Summary

Bounded second moments make martingale increments have summable average energy. A maximal inequality turns that energy bound into control of whole tails, giving both almost-sure and $L^2$ convergence and preserving the mean. Nonnegative martingales still converge almost surely, but can lose limiting expectation. Continue to [Brownian Motion](brownian-motion.md), carrying these distinctions between information, paths and integrability into continuous time.
