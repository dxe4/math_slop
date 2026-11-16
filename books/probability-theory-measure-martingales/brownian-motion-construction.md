
# Constructing Brownian Motion and Its Path Law

## From finite observations to a continuous random function

The [real-analysis source](../../../../textbooks/real_analysis/chapters/42-stochastic-processes.qmd) distinguishes a coordinate process from a continuous path and sketches the dyadic continuity argument. This chapter retains that distinction and supplies the construction in full. The [process book](../stochastic-processes-paths/brownian-motion.md) gives the earlier probabilistic interpretation. We use Gaussian vectors, countable-product extension, Borel-Cantelli, and conditional expectation from preceding chapters. Stochastic integration is a later subject; it is not required to create Brownian motion.

A process is a collection of random variables indexed by time. Two processes are modifications if their values agree almost surely at each fixed time. They are indistinguishable if one probability-one event makes their values agree at every time. Countably many times allow an intersection of probability-one events. An uncountable interval does not. Continuity will give a countable determining set and make that distinction manageable, but it must first be proved.

For nonnegative times define the covariance kernel $K(s,t)=\min(s,t)$. For finitely many coefficients and times,
$$
\sum_{i,j}a_ia_jK(t_i,t_j)=\int_0^\infty\left(\sum_i a_i1_{[0,t_i]}(u)\right)^2du\ge0.
$$
Thus every proposed covariance matrix is positive semidefinite. A square root of that matrix applied to independent standard normals constructs the required centred Gaussian vector, including singular cases. Its characteristic function determines the distribution. Deleting or permuting coordinates changes the covariance exactly as required, so the finite-dimensional laws are consistent. The extension theorem supplies a coordinate process on the product sigma-algebra with precisely these laws.

This initial construction establishes centred normal increments with variance equal to elapsed time. Covariances between disjoint increments vanish, and a jointly Gaussian vector with block-diagonal covariance has a factorizing characteristic function, hence independent blocks. It also gives a zero initial value almost surely. It has not yet established measurable paths or continuous trajectories. Indeed the event that every coordinate forms a continuous function need not be something to which one should blindly assign probability in the original product sigma-algebra. We will construct the continuous random function explicitly.

## A full dyadic continuity criterion

Let a real process on the unit interval satisfy
$$
E|X_t-X_s|^a\le C|t-s|^{1+b},\qquad a,b>0.
$$
Choose a positive gamma strictly smaller than b divided by a. At level n, Markov inequality and a union bound give
$$
P\left(\max_{0\le k<2^n}|X_{(k+1)2^{-n}}-X_{k2^{-n}}|>2^{-n\gamma}\right)
\le C2^{-n(b-a\gamma)}.
$$
The series is finite. Borel-Cantelli therefore gives one event of probability one on which all sufficiently fine levels satisfy these adjacent-increment bounds. At the finitely many coarser levels there are only finitely many real increments. Enlarging a random finite constant absorbs them, so every adjacent level-n increment is bounded by that constant times the gamma power of its mesh.

We spell out the chaining step rather than replace it with a continuity assertion. For a dyadic time t, let its lower approximation at level n be the nearest mesh point on its left. Passing from level j to level j plus one either leaves that approximation unchanged or moves it across one adjacent edge at the finer level. Therefore the difference between its value and the value at the level-n approximation is bounded by the sum of the finer mesh bounds. This is a geometric series with total a constant times $2^{-n\gamma}$.

For distinct dyadic times s and t, choose n so that their distance lies between the level-n mesh and twice that mesh. Their lower approximations at that level are at most two adjacent edges apart. The two approximation tails and the at-most-two coarse increments give
$$
|X_t-X_s|\le C_\gamma(\omega)|t-s|^\gamma
$$
on the entire dyadic set. The same finite random constant works for every such pair. Since the real line is complete, these values extend uniquely by limits to a continuous function on the full interval. Define the extension to be the zero function on the exceptional event. Every fixed new coordinate is measurable as a limit along a predetermined sequence of dyadic approximations.

It remains to connect this extension to the originally given process at nondyadic times. For a fixed t, the moment hypothesis shows that the original variables at its dyadic approximations converge in probability to the original variable at t. By construction those same variables converge almost surely to the extended value. Two probability limits of the same sequence agree almost surely: their discrepancy exceeding a fixed positive amount is bounded by the sum of the two approximation discrepancies. Thus the extension is a modification. We never intersected a probability-one event over all real times.

The proof actually gives Hölder continuity of every exponent below the threshold on one common event: first intersect the events for a countable increasing sequence of allowed exponents. On a bounded interval a larger Hölder exponent implies each smaller exponent, after adjusting a constant. Rescaling treats any bounded interval. A countable intersection over intervals with integer endpoints gives a locally continuous modification on the half-line. At overlaps the constructions agree on dyadic rational points and hence everywhere by continuity, so they define one process.

## Applying the criterion to Gaussian increments

If G is a centred normal with variance h, its even moments are $E[G^{2m}]=(2m-1)!!h^m$. Integration by parts of the normal density proves the recursion from one even moment to the previous one, beginning with the zeroth moment one. Thus the continuity criterion applies with a equal to twice m and b equal to m minus one. Taking positive integers m arbitrarily large yields local Hölder continuity of every exponent strictly smaller than one half.

Call the continuous modification B. At each finite collection of times, the simultaneous equality with the coordinate process follows by a finite intersection, so the Gaussian finite-dimensional laws and independent-increment conclusions persist. Consequently B is Brownian motion: it starts at zero, has independent stationary centred Gaussian increments, and has continuous paths almost surely. On the exceptional event we already chose a continuous zero path, so it is harmless to regard every outcome as a continuous function.

The method does not prove a Hölder exponent equal to one half. It also does not prove nowhere differentiability merely by failing to prove that exponent. Such a negative path statement needs a separate argument. The finite-dimensional construction and continuity proof suffice for everything proved in this chapter. A later quadratic-variation calculation already shows why ordinary finite-variation calculus cannot govern all Brownian behaviour.

## The Borel path law and uniqueness

Put the uniform norm on continuous functions on a fixed compact time interval. Evaluation at any time is continuous. Conversely the supremum distance between two continuous functions equals the supremum over rational times. Open balls can therefore be written using countably many rational evaluations and countable unions or intersections; one convenient expression uses closed balls of strictly smaller radii. Since the continuous-function space is separable under the uniform norm, every open set is a countable union of balls from a countable base. Hence its Borel sigma-algebra is exactly that generated by rational evaluations.

Our continuous extension is measurable as a map into this space because all those evaluations are measurable. Its law is a genuine Borel probability on continuous paths, often called Wiener measure when the starting value is zero. Two such laws with the Brownian finite-dimensional distributions agree on finite rational cylinders and therefore agree everywhere by pi-lambda uniqueness. On the half-line use uniform convergence on compact intervals and a countable sum metric; the same rational-coordinate argument applies.

There is a related uniqueness statement on an already shared probability space. If two continuous processes are modifications, intersect their equality events at rational times. On that common probability-one event, continuity extends equality to every time. They are therefore indistinguishable. This conclusion depends on both paths being continuous; the next example shows what can happen without that assumption.

## Worked example 1: a modification with a spike

Take a uniform random variable U on the unit interval and define $Y_t=1_{\{U=t\}}$. For each prescribed t this variable is zero almost surely, so Y is a modification of the identically zero process. Nevertheless every outcome has a spike at its own random location, so the processes are never equal at every time. The map is jointly measurable because the equality set is closed in the product of time and the unit interval. Joint measurability alone therefore does not turn modifications into indistinguishable processes.

Adding this spike to an independent Brownian motion gives a process with the same Brownian finite-dimensional laws and discontinuous paths. Thus those laws alone cannot establish path continuity. The continuous modification is the object used for path events, hitting times, and maxima. This example also explains why a theorem about each fixed time should never be silently read as a theorem about all times simultaneously.

## Brownian martingales and a maximum estimate

Let the natural filtration be generated by coordinates up to the present. Independence of future increments from this sigma-algebra follows first for finite past-coordinate cylinders and then by pi-lambda. Thus
$$
E[B_t\mid\mathcal F_s]=B_s,\qquad
E[B_t^2-t\mid\mathcal F_s]=B_s^2-s.
$$
The first uses the centred increment, and the second expands the square and uses its variance. The exponential normal moment similarly proves that $\exp(\theta B_t-\theta^2t/2)$ is a positive martingale for each fixed real theta. Integrability follows directly from Gaussian moments. Completing the natural sigma-algebras by null events preserves these identities. Strong Markov assertions at arbitrary continuous-time stopping times require additional arguments and are not being inferred merely from deterministic-time independence.

We also prove the useful square-integrable maximum inequality in the form needed here. For a nonnegative submartingale Y on a finite time grid, stop at its first crossing of a positive level. Conditional expectation of the terminal value on that stopped event gives
$$
\lambda P(Y^*>\lambda)\le E[Y_N1_{\{Y^*>\lambda\}}].
$$
Integrating twice the level variable and interchanging nonnegative integrals gives $E[(Y^*)^2]\le2E[Y_NY^*]$. Cauchy-Schwarz yields the bound by four times the terminal second moment. On a finite grid the maximum is square-integrable, so division is justified; zero norm is trivial. Apply this to absolute Brownian values, which form a submartingale by conditional Jensen. Increasing rational grids and path continuity then give
$$
E\sup_{0\le t\le T}|B_t|^2\le4T.
$$
Every limiting operation used here is monotone, and the terminal second moment is fixed. This estimate is useful for localization and integrability, not just for bounding the chance of a large path excursion.

## Quadratic variation on deterministic partitions

For a deterministic partition of the interval from zero to T, let Q be the sum of squared Brownian increments. Independence and the fourth normal moment give
$$
EQ=T,\qquad \operatorname{Var}(Q)=2\sum_i(\Delta t_i)^2\le2T\,|\pi|.
$$
Thus Q tends to T in square mean as the partition mesh tends to zero. Along dyadic partitions, the variances form a summable geometric series; Chebyshev and Borel-Cantelli strengthen this to almost-sure convergence along that particular sequence. This statement does not claim convergence along every possible random or path-dependent partition.

A continuous path of finite total variation has squared-increment sum bounded by its largest absolute increment times its total variation. Uniform continuity forces the largest increment to zero on any mesh tending to zero. Its quadratic variation along such partitions is therefore zero. Since the Brownian dyadic limit is positive for a positive interval length, Brownian paths have infinite total variation on that interval almost surely. Countably many rational intervals give the corresponding local statement. The apparent smallness of individual increments is compatible with a nonzero accumulated square.

## Worked example 2: scaling and time inversion of a fixed horizon

For positive c, the process $c^{-1/2}B_{ct}$ is continuous, centred Gaussian, and has covariance equal to the minimum of its two time arguments. Its law is therefore the Brownian path law. This is a distributional symmetry; it is not an assertion that the two functions built from the same outcome are identical.

On a fixed horizon T, the process $B_T-B_{T-t}$ for times between zero and T has the same covariance and continuous centred Gaussian laws as Brownian motion restricted to that interval. Computing disjoint increments confirms the reversed order does not destroy independence in distribution. It does not make this process adapted to the original forward filtration, because it explicitly uses the terminal observation. A law identity does not transfer adaptedness relative to an unrelated filtration.

## Worked example 3: the Brownian bridge

Set $\beta_t=B_t-(t/T)B_T$ on a positive finite horizon. This is a continuous centred Gaussian process, vanishing at both endpoints, with covariance
$$
E[\beta_s\beta_t]=\min(s,t)-st/T.
$$
Its covariance with the terminal variable is zero at every time. Finite Gaussian vectors therefore show independence of any finite bridge vector and the terminal variable. Rational evaluations generate the bridge path sigma-algebra, so pi-lambda promotes this to independence of the entire bridge path and the terminal variable.

The decomposition expresses the Brownian path as an independent bridge plus a random straight line to its endpoint. In particular, a regular conditional version of the Brownian path law given endpoint b is the bridge law shifted by the line $tb/T$. This statement is verified by integrating bounded cylinder functions against the independent pair and then using a monotone class. Conditioning on a specified endpoint does not mean dividing by the probability of that zero-probability event. The explicit kernel supplies a version, including values at endpoints outside any almost-everywhere ambiguity.

The bridge is not Brownian motion: its increment variance depends on the interval length through a correction, and its increments are dependent. For example two separated bridge increments have negative covariance equal to minus the product of their lengths divided by the horizon. A process can share continuity and Gaussianity with Brownian motion while failing its independent-increment requirement. These distinctions will matter when constructing Gaussian-process models and when changing a probability law for a path.

## Exercises

<a id="brownian-motion-construction-ex-1"></a>

### Exercise 1

Prove that zero covariance implies independence for jointly Gaussian subvectors.

<details><summary>Hint 1</summary>

Write the joint characteristic function.

</details>

<details><summary>Hint 2</summary>

A block-diagonal covariance makes its quadratic form split.

</details>

<details><summary>Full solution</summary>

The Gaussian joint characteristic function is the exponential of the linear mean term minus one half of its covariance quadratic form. Zero cross-covariance makes that form the sum of the two within-block forms. Hence the characteristic function is the product of the marginal characteristic functions. Uniqueness gives the product law, which is independence. The Gaussian assumption is essential; uncorrelated general variables need not be independent.

</details>

<a id="brownian-motion-construction-ex-2"></a>

### Exercise 2

In the dyadic criterion, why must gamma be strictly below b divided by a?

<details><summary>Hint 1</summary>

Inspect the probability of one bad level.

</details>

<details><summary>Hint 2</summary>

Check summability at equality.

</details>

<details><summary>Full solution</summary>

The union-bound probability is a constant times $2^{-n(b-a\gamma)}$. With a strictly positive exponent its series converges. At equality this bound is constant and gives no summability. Above the threshold it becomes still less useful. The criterion therefore proves only the strict range, even if a particular process might happen to have better paths for another reason.

</details>

<a id="brownian-motion-construction-ex-3"></a>

### Exercise 3

Show that a probability limit and an almost-sure limit of the same real sequence agree almost surely.

<details><summary>Hint 1</summary>

Bound their discrepancy by two approximation errors.

</details>

<details><summary>Hint 2</summary>

Almost-sure convergence implies convergence in probability.

</details>

<details><summary>Full solution</summary>

If the two limits differ by more than epsilon, at least one approximation error exceeds half epsilon. The probabilities of both errors tend to zero, the first by the assumed probability convergence and the second because almost-sure convergence implies it. Their union bound therefore makes the discrepancy probability zero. Intersecting the resulting statements for positive reciprocal integers proves equality almost surely.

</details>

<a id="brownian-motion-construction-ex-4"></a>

### Exercise 4

Explain why the Brownian continuous modification retains independent increments.

<details><summary>Hint 1</summary>

Only finitely many coordinates appear in a finite increment vector.

</details>

<details><summary>Hint 2</summary>

Intersect their equality events.

</details>

<details><summary>Full solution</summary>

For any fixed finite set of endpoints, the modified and original coordinates agree simultaneously outside a finite union of null sets. Their increment vectors consequently have exactly the same joint law. That original law has independent disjoint increments by its Gaussian covariance. The assertion of independence involves arbitrary finite collections, so these equalities supply the required independent-increment property.

</details>

<a id="brownian-motion-construction-ex-5"></a>

### Exercise 5

Compute the variance of the dyadic quadratic sum on $[0,T]$.

<details><summary>Hint 1</summary>

Each squared normal increment has variance twice the squared elapsed time.

</details>

<details><summary>Hint 2</summary>

Add variances using independence.

</details>

<details><summary>Full solution</summary>

There are $2^n$ increments, each with variance parameter $T2^{-n}$. Its square has variance $2T^2 2^{-2n}$ from the fourth Gaussian moment. Independence of the increments also gives independence of their squares. Adding yields $2T^2 2^{-n}$. This tends to zero and is summable over levels, giving square-mean convergence and the stated dyadic almost-sure convergence.

</details>

<a id="brownian-motion-construction-ex-6"></a>

### Exercise 6

Can the continuous modification proof directly show that the original product-coordinate sample paths are continuous?

<details><summary>Hint 1</summary>

Distinguish a fixed-time equality from a simultaneous equality.

</details>

<details><summary>Hint 2</summary>

Recall the random-spike example.

</details>

<details><summary>Full solution</summary>

The construction proves equality with the old coordinate at each prescribed time, which preserves finite-dimensional laws. It does not prove equality simultaneously over all times for an arbitrary original process. A random spike is invisible to every prescribed finite set of times yet destroys continuity. The continuous version is explicitly constructed as a random function; asserting path properties of an arbitrary product-coordinate representative would omit this distinction.

</details>

<a id="brownian-motion-construction-ex-7"></a>

### Exercise 7

For fixed theta, verify the exponential Brownian martingale identity.

<details><summary>Hint 1</summary>

Split the value into its past factor and a future-increment factor.

</details>

<details><summary>Hint 2</summary>

Use the normal exponential moment.

</details>

<details><summary>Full solution</summary>

The ratio between the exponential values at two times is the exponential of theta times the independent normal increment minus one half theta squared times elapsed time. The normal moment-generating formula makes that ratio have mean one. Independence from the past then leaves the earlier exponential after conditional expectation. Gaussian exponential integrability ensures all variables involved are integrable, including for negative theta.

</details>

<a id="brownian-motion-construction-ex-8"></a>

### Exercise 8

Compute the covariance of bridge increments on disjoint intervals of lengths u and v.

<details><summary>Hint 1</summary>

The Brownian increment covariance is zero.

</details>

<details><summary>Hint 2</summary>

Expand the endpoint-subtraction terms.

</details>

<details><summary>Full solution</summary>

Each original increment has covariance equal to its length with the terminal Brownian value. Expanding the two corrected increments gives zero minus uv divided by T twice, plus uv divided by T from the variance of the terminal value. The result is $-uv/T$. For positive lengths it is nonzero, proving the increments are not independent because independent square-integrable variables have zero covariance.

</details>

<a id="brownian-motion-construction-ex-9"></a>

### Exercise 9

Why does equality of finite-dimensional laws determine a continuous path law?

<details><summary>Hint 1</summary>

Use rational evaluations.

</details>

<details><summary>Hint 2</summary>

Those evaluations generate the Borel sigma-algebra under the uniform metric.

</details>

<details><summary>Full solution</summary>

Finite rational cylinders form a pi-system and determine both probability measures on their generated sigma-algebra. Continuity makes the supremum distance computable over rational points, and separability reduces arbitrary open sets to countable unions of metric balls. Thus that generated sigma-algebra is the full Borel sigma-algebra. Pi-lambda uniqueness then identifies the path laws, rather than merely their coordinate projections.

</details>

<a id="brownian-motion-construction-ex-10"></a>

### Exercise 10

Explain why nonzero dyadic quadratic variation rules out finite total variation but does not alone prove nowhere differentiability.

<details><summary>Hint 1</summary>

Compare the squared sum with the maximum increment times total variation.

</details>

<details><summary>Hint 2</summary>

Differentiability at one point is a local statement weaker than finite variation on an interval.

</details>

<details><summary>Full solution</summary>

For a continuous finite-variation path the maximum increment tends to zero and the total variation remains finite, forcing every deterministic-mesh squared sum to zero. The positive Brownian dyadic limit contradicts that property. A path could nevertheless be differentiable at an isolated point while having infinite variation on every interval around it. Excluding each possible differentiability point requires a stronger argument and cannot be read directly from the total-variation contradiction.

</details>
