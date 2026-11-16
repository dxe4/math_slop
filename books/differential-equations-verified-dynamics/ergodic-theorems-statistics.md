
# Invariant Measures, Ergodic Theorems, and Dynamic Statistics

Long trajectories invite averages, histograms, correlations, and uncertainty estimates. These become mathematical statistics only relative to a named invariant probability and dependence assumptions. This chapter develops invariance, ergodicity, recurrence, Birkhoff averages, mixing boundaries, and reproducible finite-time diagnostics.

## 1. Invariant probability

For measurable $T:X\to X$, probability mu is invariant when

$$\mu(T^{-1}A)=\mu(A)$$

for every measurable A. Equivalently, $\int \phi\circ T\,d\mu=\int \phi\,d\mu$ for bounded measurable phi. A fixed point supports a Dirac invariant measure; a period-p orbit supports the uniform measure on its p points. Therefore invariant measures need not be unique or physically relevant.

A measure-preserving system is ergodic if every invariant measurable set has measure zero or one. This is indecomposability relative to mu, not randomness of individual steps.

## 2. Birkhoff theorem

**Theorem 11.1 (Birkhoff pointwise ergodic (cited input)).** If the measurable map $T$ preserves probability $\mu$ and $\phi\in L^1(\mu)$, then

$$A_N\phi(x)=\frac1N\sum_{k=0}^{N-1}\phi(T^kx)$$

converges for mu-almost every x to the conditional expectation of phi on the invariant sigma-algebra. If the system is ergodic, the limit equals $\int \phi\,d\mu$ almost everywhere.

The theorem gives no generic rate, no convergence for every initial point, and no guarantee that a numerical discretization preserves the same measure. “Almost every” names $\mu$. Its maximal-ergodic proof is a general theorem input here, as developed in Walters, *An Introduction to Ergodic Theory*. The recurrence, Hilbert mean-convergence, rotation and finite-variance arguments below are proved directly and do not claim to prove this stronger pointwise theorem.

## 3. Mean ergodic theorem

The Koopman operator $Uf=f\circ T$ is an isometry on L2 for a measure-preserving transformation. Von Neumann’s mean ergodic theorem gives L2 convergence of averages to the orthogonal projection onto invariant functions. Under ergodicity, invariant L2 functions are constants. L2 convergence and pointwise almost-everywhere convergence are distinct claims.

## 4. Recurrence

Poincare recurrence says that in a finite measure-preserving system, almost every point of a measurable set returns to that set infinitely often. It does not give short return times, exact periodicity, or recurrence of every point. Infinite-measure systems require different hypotheses.

Kac’s formula relates mean return time to inverse set probability under an ergodic probability and appropriate first-return conditioning. Rare sets have long mean returns; finite samples are heavily variable.

## 5. Mixing and correlation

Strong mixing means

$$\mu(T^{-n}A\cap B)\longrightarrow\mu(A)\mu(B).$$

It implies ergodicity. Ergodicity alone does not imply mixing: irrational circle rotation is ergodic for Lebesgue measure but correlations need not decay. Rates of mixing support central limit theorems and variance estimation only with additional observable and dependence hypotheses.

For centred phi, autocovariance is $\gamma(k)=\int \phi\,(\phi\circ T^k)\,d\mu$. If covariances are absolutely summable and a suitable CLT holds, asymptotic variance is

$$\sigma_{\mathrm{eff}}^2=\gamma(0)+2\sum_{k=1}^{\infty}\gamma(k).$$

Treating dependent samples as independent can understate uncertainty; negative covariances can also reduce variance. Dependence alone does not determine the direction of the error.

## 6. Invariant densities and transfer operators

The transfer operator evolves densities and is dual to Koopman observables. A fixed density gives an absolutely continuous invariant measure. Ulam discretization replaces it by a finite transition matrix from partition-cell transfers. Convergence needs map regularity, partition refinement, and a theorem; a stationary eigenvector of one matrix proves only discrete invariance.

## 7. Physical measures and basins

A physical measure has a basin of initial states of positive reference volume whose time averages converge to its integrals for a suitable observable class. Uniqueness is not automatic. Multistability creates several basins, and a single orbit samples only its component. Noise or roundoff can cause artificial transitions.

## 8. Statistical audit

Report invariant measure claimed, observable and units, initial-condition selection, transient rule, horizon blocks, map/integrator and precision, stationarity diagnostics, autocorrelation, batch sizes, effective sample size convention, and refinement across step/precision/initial basin. Compare several observables and starts. Confidence intervals require a stated CLT or resampling theorem adapted to dependence; block bootstrap tuning is not assumption-free.

## 9. Recurrence follows from finite measure, not from numerical closure

Here is a proof of the recurrence statement for a measurable map preserving a finite measure. Fix a measurable set $A$, and let $B$ be the points of $A$ that never return to $A$ at a positive iterate. The sets $T^{-j}B$, for nonnegative integers $j$, are pairwise disjoint. Indeed, if a point belonged to two of them, its earlier visit to $B$ would be followed by a later visit to $B$, hence to $A$, contradicting the defining no-return property.

Measure preservation gives every one of these preimage sets the same measure as $B$. Since they are disjoint inside a finite-measure space, that measure must be zero. Now consider a point of $A$ that returns only finitely often. At its last visit, including time zero if necessary, it enters $B$. It therefore belongs to the union of the preimages of $B$. This countable union has measure zero. Almost every point of $A$ consequently returns infinitely often.

No inverse map was used: preimages exist for every map, so the proof also applies to a noninvertible measure-preserving transformation. No distance was used either. Recurrence to neighbourhoods in a topological space follows by applying the measurable-set statement to an appropriate countable neighbourhood family and taking the union of the resulting exceptional null sets. The finite-measure hypothesis supplies the contradiction in the disjoint-set argument. Translation on the real line with Lebesgue measure illustrates its failure for infinite measure: a bounded interval can be left permanently.

The theorem supplies no maximum waiting time and no exact periodicity. A finite simulation that returns near its starting point may illustrate recurrence, but its rounded state space may also force artificial periodicity. The theorem and the computational observation concern different mathematical objects unless the discretisation has been analysed separately.

## 10. A complete Hilbert-space proof of mean convergence

Work in the complex Hilbert space of square-integrable observables, with the usual convention that functions equal almost everywhere represent the same element. Invariance makes the Koopman operator an isometry: the integral of the squared magnitude of a composed observable equals its original integral. Consequently every Cesàro average of its powers has operator norm at most one.

Let $F$ be the closed subspace of fixed observables. The orthogonal complement of the closure of the range of $I-U$ is the kernel of $I-U^*$. For an isometry these fixed spaces agree. One direction is immediate from $U^*U=I$. In the other direction, if $U^*v=v$, expand the squared norm of $Uv-v$. Both norms equal the norm of $v$, and their real inner product is its squared norm, so the difference is zero. Thus $Uv=v$ too.

The Hilbert-space orthogonal decomposition therefore reads

$$L^2(\mu)=F\oplus\overline{\operatorname{ran}(I-U)}.$$

On a fixed observable, every average is that observable. On an exact range element $g-Ug$, the average telescopes to $(g-U^Ng)/N$, whose norm is at most twice the norm of $g$ divided by $N$. It converges to zero. For an element in the closure of that range, approximate it in norm by one exact range element. Uniform boundedness of the average operators bounds the approximation error independently of the averaging horizon; then the telescoping estimate handles the chosen approximant. First choose its approximation error small and then choose the horizon large. This proves convergence to zero on the whole closed range.

Combining the two components proves mean-square convergence to the orthogonal projection onto fixed observables. This argument proves the mean ergodic theorem for the Koopman isometry, including noninvertible transformations. It does not prove convergence at every point, or even the full almost-everywhere conclusion of Birkhoff. The topology of convergence is part of the theorem.

If the system is ergodic, fixed square-integrable observables are constant almost everywhere. Otherwise a nonconstant real fixed observable would have a level set and its complement both of positive measure, with that level set invariant modulo null sets. This contradicts ergodicity. Apply the argument to real and imaginary parts for complex observables. The constant projection is their integral because the total measure is one.

## 11. An ergodic system can retain perfect oscillatory dependence

**Worked example: irrational circle rotation.** Let the state space be the circle with normalised Lebesgue measure, and add a fixed irrational angle at every iterate. Translation preserves that measure. To prove ergodicity, take a square-integrable invariant observable and examine its Fourier coefficients. Translation multiplies its coefficient at integer frequency $k$ by the corresponding unit complex phase. Invariance forces that coefficient to vanish whenever this phase is different from one. Irrationality makes every nonzero integer frequency have that property. Completeness of the Fourier basis, used here as the Fourier-analysis theorem input, leaves only the constant coefficient. Invariant indicators are therefore constant almost everywhere, establishing ergodicity.

The same calculation disproves mixing. Take the unit-frequency complex observable, whose mean is zero. Its correlation with its own conjugate after $n$ iterates is a complex number of modulus one. It cannot converge to zero. Set mixing would imply decay for bounded simple observables by linearity, then for all bounded observables by uniform simple-function approximation. The nondecaying correlation contradicts that consequence. Ergodicity identified the time-average limit while leaving an undamped oscillatory mode in the dependence structure.

If the angle is rational instead, the circle decomposes into finite cycles and many nonconstant invariant observables exist. The invariant Lebesgue law still exists, but its ergodicity fails. Thus the same invariant reference measure and visually similar motion can support different long-time theorems depending on an exact arithmetic parameter hypothesis.

## 12. Finite covariance identities come before a central limit theorem

Let a real square-integrable observable have zero mean, and start the transformation with its invariant law. The resulting sequence is stationary. Expand the square of the sum of its first $N$ values. There are $N$ diagonal terms of variance $\gamma(0)$, and for each positive lag $k$ there are $N-k$ pairs with that lag. Counting both off-diagonal orientations gives the exact identity

$$
N\operatorname{Var}(A_N\phi)
=\gamma(0)+2\sum_{k=1}^{N-1}\left(1-\frac{k}{N}\right)\gamma(k).
$$

If the covariances are absolutely summable, dominated convergence of this series gives the stated asymptotic variance. In particular that sum is nonnegative, because it is a limit of nonnegative variances. This argument establishes a second-moment limit. It does not establish convergence to a Gaussian distribution or justify a normal confidence interval. A central limit theorem is an additional result with additional dependence and observable hypotheses.

**Worked example: dependence can cancel the leading variance.** Let $X_n$ be independent, centred, variance-one coordinates in a stationary two-sided product system, and observe $X_n-X_{n+1}$. Its variance is two, its lag-one covariance is minus one, and all later covariances vanish. The asymptotic variance sum is therefore zero. Directly, the average telescopes to $(X_0-X_N)/N$ and has variance $2/N^2$. Treating the observations as independent would give $2/N$, a different rate. A generic effective-sample-size expression dividing by the asymptotic variance is not meaningful here.

More generally, an observable of the form $\psi-\psi\circ T$ has telescoping averages with square-integrable norm at most $2\|\psi\|_2/N$. Such an observable is called a coboundary. It demonstrates why the observable matters alongside the transformation: one dependence summary cannot be assigned to an attractor independently of what is measured.

## 13. Physical selection differs from abstract invariance

**Worked example: a contracting map.** On the interval from minus one to one, halve the state at each iterate. Every initial state converges to zero. For every continuous observable, continuity gives convergence of its observed values to the value at zero, and taking Cesàro means preserves that limit. Thus the point mass at zero has a basin of full reference interval length. It is a physical measure for this continuous-observable definition.

It is also the only invariant probability on this interval. Integrate the squared coordinate under any invariant probability. Invariance says that its integral equals one quarter of itself, so the integral is zero. The nonnegative squared coordinate can then be positive only on a null set, forcing all probability onto zero. This proof uses a bounded observable and does not infer uniqueness merely from one trajectory.

For a contrasting flow, consider $x'=x-x^3$ and its time-one map on a bounded invariant interval containing minus one, zero and one. Positive starts approach one, negative starts approach minus one, and zero stays fixed. The two attracting point masses each have a positive-length basin. The point mass at zero is invariant too, but its basin is only the single unstable equilibrium and has zero reference length. An invariant measure need not be physically selected, and a physical measure need not be unique.

Mixtures of the two attracting point masses are invariant as well. A single deterministic orbit in one basin does not generally realise a nontrivial mixture of their time averages. A mixture can instead describe a random initial-state experiment across basins. The sampling protocol determines which interpretation is appropriate.

## 14. A finite statistical statement needs a finite hypothesis

An invariant histogram, an ergodic theorem and a confidence interval sit at different levels. Invariance is an exact property of a measure and transformation. Ergodicity identifies an almost-everywhere asymptotic average. A finite confidence procedure needs a probability model, an observable, a sampling mechanism and a quantitative approximation or limit theorem appropriate to the horizon.

Discarding an initial block does not create stationarity by definition. If the starting law differs from the invariant law, its remaining discrepancy needs a mixing or coupling estimate, or an explicit practical qualification. A deterministic starting point can be typical for one invariant measure and exceptional for another. Increasing the horizon can reduce a Monte Carlo error under a valid theorem while leaving a discretisation bias or a wrong basin completely unchanged.

The strongest useful report therefore separates the exact transformation, the declared invariant probability, the initial-state/reference-volume convention, the observable, the finite numerical representation and the inference theorem. The proofs in this chapter show why each item matters. None is supplied automatically by the visual stability of a long orbit.

## Exercises with complete worked solutions

<a id="ergodic-theorems-statistics-ex-1"></a>

### 1. Fixed-point measure
Show delta_p is invariant if T(p)=p.

<details><summary>Hint 1</summary>

Evaluate the mass of a preimage using the definition of a point mass.

</details>

<details><summary>Hint 2</summary>

Membership of the fixed point in a preimage is the same as membership in the original set.

</details>

<details><summary>Full solution</summary>

**Solution.** For any A, $\delta_p(T^{-1}A)$ is one exactly when $T(p)=p$ lies in A, the same condition as $\delta_p(A)=1$.

</details>

<a id="ergodic-theorems-statistics-ex-2"></a>

### 2. Periodic orbit measure
Construct it for a p-cycle.

<details><summary>Hint 1</summary>

Follow what one application of the map does to the finite cycle.

</details>

<details><summary>Hint 2</summary>

The map permutes equally weighted atoms, preserving the mass of every set.

</details>

<details><summary>Full solution</summary>

**Solution.** Put mass $1/p$ at each cycle point. T permutes those points, leaving every set’s total cycle mass unchanged.

</details>

<a id="ergodic-theorems-statistics-ex-3"></a>

### 3. Nonunique measures
If a map has two fixed points, what follows?

<details><summary>Hint 1</summary>

Construct an invariant probability concentrated at each fixed point.

</details>

<details><summary>Hint 2</summary>

Linearity of the invariance identity also preserves every convex mixture of those probabilities.

</details>

<details><summary>Full solution</summary>

**Solution.** Each Dirac mass is invariant, as is every convex mixture. Invariance alone does not select one distribution.

</details>

<a id="ergodic-theorems-statistics-ex-4"></a>

### 4. Ergodic fixed point
Is a Dirac fixed-point system ergodic?

<details><summary>Hint 1</summary>

Ergodicity is relative to the declared probability, not to ambient volume.

</details>

<details><summary>Hint 2</summary>

Every measurable event has probability either zero or one under a point mass.

</details>

<details><summary>Full solution</summary>

**Solution.** Yes relative to its Dirac measure: every measurable set has measure zero or one.

</details>

<a id="ergodic-theorems-statistics-ex-5"></a>

### 5. Birkhoff periodic average
For a p-cycle, compute the time average.

<details><summary>Hint 1</summary>

Split the time sum into complete periods and a bounded remainder.

</details>

<details><summary>Hint 2</summary>

The number of terms in the incomplete period stays below the cycle length.

</details>

<details><summary>Full solution</summary>

**Solution.** It converges to the arithmetic mean of phi over the p points, equal to the integral under the uniform cycle measure.

</details>

<a id="ergodic-theorems-statistics-ex-6"></a>

### 6. Almost every
What must accompany this phrase?

<details><summary>Hint 1</summary>

A null set depends on the measure used to declare it null.

</details>

<details><summary>Hint 2</summary>

Two invariant measures can concentrate on disjoint parts of the same state space.

</details>

<details><summary>Full solution</summary>

**Solution.** The measure mu. A null exceptional set for one invariant measure can have full measure for another.

</details>

<a id="ergodic-theorems-statistics-ex-7"></a>

### 7. No generic rate
Can Birkhoff alone produce a sample size?

<details><summary>Hint 1</summary>

Read the conclusion of Birkhoff for a quantitative error term.

</details>

<details><summary>Hint 2</summary>

The theorem supplies almost-everywhere convergence but no universal convergence speed.

</details>

<details><summary>Full solution</summary>

**Solution.** No. It asserts asymptotic convergence without a universal finite-time rate.

</details>

<a id="ergodic-theorems-statistics-ex-8"></a>

### 8. Mean versus pointwise
Does L2 convergence imply convergence at every point?

<details><summary>Hint 1</summary>

Identify the topology used by the mean ergodic theorem.

</details>

<details><summary>Hint 2</summary>

A statement about an integral of squared error is unchanged by altering values on a null set.

</details>

<details><summary>Full solution</summary>

**Solution.** No. It controls mean-square error; pointwise conclusions need separate almost-everywhere arguments or subsequences.

</details>

<a id="ergodic-theorems-statistics-ex-9"></a>

### 9. Recurrence versus periodicity
Why are they different?

<details><summary>Hint 1</summary>

Compare a return to a measurable neighbourhood with an exact equality of states.

</details>

<details><summary>Hint 2</summary>

Recurrence gives repeated visits without specifying one finite period that repeats forever.

</details>

<details><summary>Full solution</summary>

**Solution.** Recurrence means returning arbitrarily near or to a set infinitely often; periodicity requires an exact state repeat after a fixed finite period.

</details>

<a id="ergodic-theorems-statistics-ex-10"></a>

### 10. Return time
If a set has probability 0.01 in an ergodic system, what mean does Kac suggest?

<details><summary>Hint 1</summary>

Use the probability-normalised first-return convention stated with Kac.

</details>

<details><summary>Hint 2</summary>

The reciprocal of the set probability is the mean conditional return, not a bound on every return.

</details>

<details><summary>Full solution</summary>

**Solution.** Mean first return conditioned in the set is 100 iterates, under Kac’s hypotheses. Individual returns can vary greatly.

</details>

<a id="ergodic-theorems-statistics-ex-11"></a>

### 11. Mixing implication
Why does mixing imply ergodicity?

<details><summary>Hint 1</summary>

Apply mixing with both events equal to an invariant event.

</details>

<details><summary>Hint 2</summary>

Its intersection probability stays equal to its own measure, while mixing forces the square as the limit.

</details>

<details><summary>Full solution</summary>

**Solution.** For invariant A, mixing gives $\mu(A)=\mu(A\cap A)\to \mu(A)^2$, so its measure is zero or one.

</details>

<a id="ergodic-theorems-statistics-ex-12"></a>

### 12. Ergodic not mixing
Name the standard example.

<details><summary>Hint 1</summary>

Look for an invariant system with persistent Fourier oscillations.

</details>

<details><summary>Hint 2</summary>

Irrational rotation removes nonconstant invariant observables but does not damp its unit-frequency correlation.

</details>

<details><summary>Full solution</summary>

**Solution.** Irrational rotation of the circle with Lebesgue measure is ergodic but not strongly mixing.

</details>

<a id="ergodic-theorems-statistics-ex-13"></a>

### 13. Effective variance
If gamma(0)=1,gamma(1)=0.2 and later covariances vanish, find asymptotic variance.

<details><summary>Hint 1</summary>

Insert the nonzero covariance terms into the variance sum.

</details>

<details><summary>Hint 2</summary>

The positive lag-one contribution is counted twice.

</details>

<details><summary>Full solution</summary>

**Solution.** $1+2(0.2)=1.4$, larger than the independent variance one.

</details>

<a id="ergodic-theorems-statistics-ex-14"></a>

### 14. Negative correlation
Can dependence increase effective sample size?

<details><summary>Hint 1</summary>

Covariance terms enter with their signs rather than absolute values in the variance identity.

</details>

<details><summary>Hint 2</summary>

A difference of successive independent coordinates gives an exact cancelling example.

</details>

<details><summary>Full solution</summary>

**Solution.** Negative summable correlations can reduce asymptotic variance, but finite estimators and CLT assumptions still need checking.

</details>

<a id="ergodic-theorems-statistics-ex-15"></a>

### 15. Ulam boundary
What does a stationary discrete vector establish?

<details><summary>Hint 1</summary>

Specify the transformation whose stationarity equation the vector actually satisfies.

</details>

<details><summary>Hint 2</summary>

A partition transition matrix is an approximation; its invariant vector alone supplies no refinement theorem.

</details>

<details><summary>Full solution</summary>

**Solution.** It is invariant for the finite partition transition matrix. Convergence to an exact invariant density requires refinement and regularity theory.

</details>

<a id="ergodic-theorems-statistics-ex-16"></a>

### 16. Basin dependence
Why use multiple initial states?

<details><summary>Hint 1</summary>

A single trajectory remains in the basin selected by its initial state.

</details>

<details><summary>Hint 2</summary>

The scalar double-well flow has two positive-length physical basins with different limiting averages.

</details>

<details><summary>Full solution</summary>

**Solution.** Distinct attractor basins can have different physical measures and averages; one orbit cannot reveal inaccessible components.

</details>

<a id="ergodic-theorems-statistics-ex-17"></a>

### 17. Numerical measure
Can a time integrator change invariant statistics?

<details><summary>Hint 1</summary>

A time-step method defines a discrete transformation of its own.

</details>

<details><summary>Hint 2</summary>

Short-time trajectory accuracy need not imply invariance of the exact continuous-system probability.

</details>

<details><summary>Full solution</summary>

**Solution.** Yes. It follows a modified discrete map whose invariant measure may differ, even when short trajectories appear accurate.

</details>

<a id="ergodic-theorems-statistics-ex-18"></a>

### 18. Transient deletion
Is discarding 1,000 steps universally valid?

<details><summary>Hint 1</summary>

Relaxation speed can depend on the observable and initial distribution.

</details>

<details><summary>Hint 2</summary>

No fixed deletion length controls all slow-mixing or metastable systems.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Relaxation depends on basin, observable, parameters, and mixing rate. Declare and test a stationarity rule over longer blocks.

</details>

<a id="ergodic-theorems-statistics-ex-19"></a>

### 19. Project: dynamic-average audit
Design an audit for an observable along a map believed mixing.

<details><summary>Hint 1</summary>

Separate basin selection, discretisation bias, dependent variance and the theorem for the final interval.

</details>

<details><summary>Hint 2</summary>

Use multiple horizons and starts, but state explicitly which aspects remain finite numerical evidence.

</details>

<details><summary>Full solution</summary>

**Solution.** Fix the exact map, parameter, precision, observable, and initial-state protocol. Run multiple starts and horizons $N,2N,4N$; report block means, running averages, autocovariances, and batch estimates at several block lengths. Repeat at higher precision or smaller integration step. If a known invariant integral exists, compare bias; otherwise compare starts and an independently discretized transfer operator. State the theorem used for any interval and its dependence assumptions. Agreement is finite evidence, not proof of ergodicity or uniqueness.

</details>

<a id="ergodic-theorems-statistics-ex-20"></a>

### 20. Claim repair
Repair: “One long histogram stabilized, so the attractor is ergodic.”

<details><summary>Hint 1</summary>

Name the probability and the universal property required by ergodicity.

</details>

<details><summary>Hint 2</summary>

One stable histogram controls neither other basins nor all invariant events and observables.

</details>

<details><summary>Full solution</summary>

**Solution.** Report histogram stability for that orbit, observable partition, precision, and horizon. Ergodicity of a named invariant measure requires a theorem or broader evidence controlling basins, exceptional starts, discretization, and multiple observables.

</details>

## Chapter synthesis

Invariant measures make dynamic statistics meaningful; ergodicity identifies almost-everywhere time and space averages; mixing addresses loss of dependence; recurrence guarantees return without periodicity. Finite trajectories require basin, dependence, discretization, and uncertainty audits.

## Dependency ledger

- Invariance and ergodicity are always relative to a named measure.
- Birkhoff requires probability preservation and an integrable observable.
- Recurrence requires finite invariant measure.
- Mixing rates and CLTs need hypotheses beyond ergodicity.
- Transfer-operator approximations require partition convergence theory.
- Statistical intervals must account for dependence and numerical dynamics.
