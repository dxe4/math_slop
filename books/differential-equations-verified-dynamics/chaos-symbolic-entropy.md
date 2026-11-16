
# Chaos, Symbolic Dynamics, and Entropy

“Chaotic” is not one theorem. Sensitive dependence, transitivity, dense periodic points, horseshoes, positive Lyapunov exponents, and positive entropy are related only under hypotheses. This chapter builds exact packages from maps and symbolic coding, then marks the boundary between finite numerical diagnostics and invariant dynamical claims.

## 1. Maps, flows, and invariant sets

Let $T:X\to X$ be continuous on a compact metric space. A set K is invariant when $T(K)=K$ (or forward invariant with inclusion). Topological transitivity means every pair of nonempty open sets U,V has some n with $T^n(U)$ meeting V. Sensitive dependence means there is delta>0 such that every neighborhood contains a point whose iterate separates by more than delta.

Devaney chaos commonly combines transitivity with dense periodic points; sensitivity follows on infinite metric spaces without isolated points. Definitions vary, so every claim must name its package and invariant set.

On a compact invariant regular set where the flow speed is bounded above and away from zero, displacement along the flow direction corresponds to a bounded time shift and has exponent zero. An arbitrary non-equilibrium orbit need not satisfy this: for $x'=-x$, a nonzero orbit has tangent exponent $-1$ while it contracts toward the equilibrium. Chaos for a Poincare map and chaos for the flow require a carefully stated correspondence.

## 2. Full shift

Let $\Sigma$ contain one-sided sequences over $m\ge2$ symbols, indexed from coordinate $0$, with metric $d(x,y)=2^{-N}$, where $N$ is the first differing coordinate. The shift deletes the first symbol. Cylinder sets specify finite prefixes. The shift has dense periodic sequences, is transitive, and has sensitive dependence. Its topological entropy is $\log m$, because there are $m^n$ distinguishable length-$n$ words. (For $m=1$, the space is a singleton and the sensitivity and chaos claims do not apply.)

This exact model separates proof from pictures. A symbolic coding of a physical map may be a conjugacy, semiconjugacy, or only finite itinerary; these support different conclusions.

## 3. Conjugacy and semiconjugacy

A homeomorphism h with $h T=S h$ gives topological conjugacy and transfers orbit structure. A continuous onto h gives semiconjugacy; multiple T-orbits may collapse to one S-orbit, so conclusions do not transfer symmetrically. Markov partitions can code hyperbolic invariant sets, but their construction is a theorem, not a binning choice.

## 4. Horseshoe mechanism

A Smale horseshoe stretches, contracts, and folds a region so an invariant Cantor set is conjugate to a two-sided shift. It supplies exponentially many orbit segments, dense periodic orbits on the invariant set, and positive topological entropy. A numerically folded band does not prove a horseshoe; rigorous verification needs covering/cone conditions or validated invariant-manifold intersections.

## 5. Lyapunov exponents

For a differentiable map, finite-time growth along v is

$$\lambda_n(x,v)=\frac1n\log\frac{\|D(T^n)(x)v\|}{\|v\|}.$$

An asymptotic exponent requires a limit or an almost-everywhere theorem relative to an invariant measure. Repeated normalisation with QR prevents overflow for spectra. Positive finite-time growth can occur in a transient, near a saddle, from noise, or from numerical error; it does not prove an attractor, entropy, or ergodicity.

## 6. Topological entropy

Using $(n,\epsilon)$ separated sets under metric $d_n(x,y)=\max_{0\leq k<n}d(T^kx,T^ky)$, topological entropy measures exponential orbit-complexity growth as n grows then epsilon shrinks. It is invariant under topological conjugacy. A finite partition word count is a lower/upper estimator only under additional coding and resolution control.

Metric entropy belongs to an invariant probability measure and is bounded above by topological entropy under the variational principle’s hypotheses. They are not interchangeable.

## 7. Logistic map exact boundary

At parameter four, $T(x)=4x(1-x)$ is semiconjugate to angle doubling through $x=\sin^2(\pi \theta)$. The two-to-one symmetry matters. It has an absolutely continuous invariant probability with density proportional to $1/\sqrt{x(1-x)}$, but deriving statistical conclusions needs measure theory. Finite precision eventually makes every computer orbit periodic.

## 8. Numerical chaos audit

Report exact map/flow and parameter, invariant-set evidence, precision, integrator and step, transient policy, initial states, tangent algorithm, QR interval, horizon blocks, refinement, shadowing/defect information, and definition claimed. Compare Lyapunov estimates over growing blocks and precision/step changes. For flows, remove the neutral exponent carefully. Histograms and recurrence plots are diagnostics, not proofs.

## 9. A two-sided symbolic model with an explicit geometric coding

To give the horseshoe mechanism a precise construction, use two-sided binary sequences indexed by all integers. The shift sends the symbol at the next index into the current index. A basic neighbourhood specifies only finitely many coordinates, including past and future coordinates when needed. A metric can weight disagreements at index $j$ by a fixed constant times $2^{-|j|}$; the summable tail makes agreement on a long central block imply closeness. This sequence space is compact: a diagonal subsequence argument fixes one coordinate after another from any sequence of sequences.

Let $C$ be the middle-third Cantor set represented by ternary expansions using only digits zero and two. Encode a two-sided binary sequence by a point in $C\times C$ through

$$
x(a)=\sum_{j=0}^{\infty}\frac{2a_j}{3^{j+1}},
\qquad
y(a)=\sum_{j=1}^{\infty}\frac{2a_{-j}}{3^j}.
$$

The horizontal coordinate records the future symbols and the vertical coordinate records the past, in reverse order toward the present. The sums converge uniformly. Every pair of Cantor coordinates has a unique such allowed digit coding. If two allowed expansions first differ at a digit, that digit's contribution exceeds the largest possible cancellation from all later digits by a positive amount. Familiar ambiguous ternary expansions use a digit one in their alternative representation, so they do not give two different all-zero/two codings here.

The coding is therefore a continuous bijection from a compact space to a Hausdorff space and hence a homeomorphism. This topological step proves continuity of its inverse as well. It would be insufficient merely to assign a finite itinerary to each plotted point: injectivity and a topology controlling the infinite tails are needed for conjugacy.

## 10. An exact affine horseshoe on its complete invariant set

Take two vertical strips in the unit square, one with horizontal coordinate between zero and one third and the other between two thirds and one. Label them by $i=0,1$. On strip $i$ define

$$F(x,y)=\left(3x-2i,\frac{y+2i}{3}\right).$$

Each strip stretches horizontally across the square and contracts vertically into a horizontal strip. Their images are disjoint in the vertical coordinate. Thus the map on the union of the strips is injective and has a single inverse on its image. It is a precisely defined partial map on these strips; no unproved smooth extension to the whole plane is being assumed.

Substitute the digit sums from the preceding section. The horizontal action deletes the leading future digit, while the vertical action inserts that digit at the front of the past expansion. The result is exactly the coding of the shifted sequence. Hence the restriction of this map to $K=C\times C$ is a homeomorphism conjugate to the full two-sided binary shift.

This set is also the set of complete trajectories remaining in the two vertical strips at all integer times. Remaining there forward forces every successive horizontal digit to be zero or two. Remaining there backward forces the same condition on the vertical digits because each inverse step removes its leading past digit. Conversely, a point with both Cantor coordinates has an allowed complete orbit by the coding. This proves invariance and identifies the set, rather than inferring them from the appearance of the stretched strips.

Along each branch the derivative is diagonal with entries three and one third. Horizontal tangent displacements expand and vertical displacements contract. The corresponding exponents are plus and minus the logarithm of three per iterate. A generic vector with nonzero horizontal component has the positive exponent; an exactly vertical vector has the negative one. These derivatives describe the smooth branch maps near the invariant strips. The symbolic coding itself is a homeomorphism on a fractal set, not a smooth coordinate map preserving every metric derivative.

The model supplies an exact hyperbolic symbolic invariant set. A global Smale horseshoe construction additionally extends and folds a smooth map in the surrounding plane. The general theorem about a transverse homoclinic intersection of a hyperbolic saddle producing a horseshoe for an iterate is a named theorem input, not a consequence of an apparent numerical crossing. Our explicit strip model proves the symbolic conclusions without asserting such an intersection for an unrelated physical system.

## 11. Dense periodic points, mixing and sensitivity have direct proofs

Periodic points are dense in the two-sided shift. Any basic neighbourhood fixes finitely many symbols. Choose a period longer than the specified index span, put those symbols at the corresponding positions modulo the period, fill the other positions arbitrarily and repeat. No two specified positions conflict because of the chosen period. The periodic sequence lies in the neighbourhood. Its image under the coding gives a periodic point in the corresponding neighbourhood of $K$.

The shift is topologically mixing, which is stronger than transitivity. Given two cylinders with finite specified coordinates, shifting one requirement sufficiently far separates its coordinate positions from the other. The two lists can then be satisfied simultaneously, for every sufficiently large shift time. This proves the intersection property directly. It is a topological statement about open sets. Measure mixing additionally requires an invariant probability and a probability-of-intersection limit; the two uses of the word mixing should not be interchanged.

Sensitivity can be seen geometrically. Given any coded point and any neighbourhood, preserve its past and a sufficiently long finite future block, but change one later future symbol. The initial points become arbitrarily close as the changed index moves farther away. When that index reaches the current position under iteration, the two points lie in different horizontal Cantor strips, separated by at least one third. A fixed smaller positive separation threshold therefore works throughout the invariant set. The perturbation remains in $K$, so no statement about points outside the declared invariant set is required.

**Worked example: counting periods correctly.** Exactly $2^p$ sequences are fixed by the $p$th shift iterate, because their first period block can be chosen freely. These include sequences of smaller minimal period dividing $p$. For period two there are four fixed sequences, but the two constant sequences have minimal period one. Only two points have minimal period two, making one two-cycle. For period three there are eight fixed sequences; removing the two constants leaves six points in two three-cycles. Confusing fixed points of an iterate with distinct minimal-period orbits overcounts the periodic structure.

## 12. The entropy computation needs both a lower and an upper bound

For every binary word of length $n$, choose the sequence with that future prefix and zeros elsewhere. Distinct words differ at some coordinate before time $n$. At that iterate their coded points lie in different horizontal strips and are separated by at least one third. Thus, for any fixed smaller resolution, there are at least $2^n$ distinct orbit segments in the separated-set definition. Taking logarithms and dividing by the horizon gives a lower entropy bound equal to the logarithm of two.

For the upper bound, fix a desired positive resolution. Choose an integer window size so that the uniform digit tails outside that window contribute less than the resolution in each coordinate. If two sequences agree on all indices from minus that window size through the horizon plus that window size, then their first $n$ coded iterates stay closer than the resolution. Partition the sequence space by those finite blocks. The number of classes is at most $2^{n+2m+1}$ for the chosen window size $m$. A separated set has at most one point in each such small-diameter class. Its logarithmic growth rate is therefore at most the logarithm of two, because the extra window length is fixed while the horizon grows.

Combining the two bounds proves entropy exactly. The resolution is fixed first, the horizon tends to infinity, and only then does the resolution shrink as required by the definition. Counting a finite sample of observed words does not carry out those limiting bounds. Missing words can indicate forbidden dynamics, insufficient observation, a poor partition, or simply a short trajectory.

The tangent expansion rate in this model is the logarithm of three, while the entropy is the logarithm of two. One counts geometric growth of an infinitesimal vector; the other counts distinguishable admissible itineraries. They need not agree. An identity relating metric entropy and positive exponents requires its own invariant-measure, regularity and hyperbolicity hypotheses.

## 13. Exact logistic conjugacy calculations have an exceptional-set boundary

**Worked example: the angle-doubling identity.** Put $h(\theta)=\sin^2(\pi\theta)$. The elementary double-angle formula gives

$$4h(\theta)(1-h(\theta))=\sin^2(2\pi\theta)=h(2\theta\bmod1).$$

This proves a semiconjugacy from circle doubling to the parameter-four logistic map. It does not make the two state spaces identical: the angles at reflected positions generally have the same image. Lebesgue probability is preserved by circle doubling, as follows by splitting a preimage into its two half-length branches. Pushing it through this map gives an invariant logistic probability.

For an interior value of the logistic coordinate there are two angle preimages. Differentiating the sine-square map gives absolute derivative $2\pi\sqrt{x(1-x)}$ at either preimage. Adding their change-of-variable contributions gives the normalised density

$$\rho(x)=\frac1{\pi\sqrt{x(1-x)}},\qquad0<x<1.$$

The singularities at the endpoints are integrable. This is a density with respect to interval length, not a finite value assigned at each endpoint. The fixed endpoint zero also supports its own invariant point mass, so even an explicit absolutely continuous invariant law does not imply uniqueness among all invariant probabilities. An almost-everywhere statistical statement must name the probability under which the exceptions are null.

Finite binary expansions under doubling eventually reach zero, while generic real angles do not. This sharp arithmetic distinction illustrates why a fixed finite-state numerical iteration can have a different long-time behaviour from its exact real-number model. A higher-precision run can lengthen the transient without proving that the exact invariant statistics have been recovered.

## 14. Shadowing and prediction concern different initial conditions

A one-step defect bounds how closely a numerical sequence follows the update rule at each recorded state. A shadowing theorem, when applicable, seeks an exact orbit remaining near the whole sequence, often with an adjusted initial point. Predicting the exact orbit of the originally specified initial condition is a different requirement. Expanding directions can separate that orbit from a shadowing orbit even when both start extremely close.

In a fixed affine branch itinerary of the strip model, a horizontal initial error is multiplied by three at each step. Before the itinerary changes, keeping its magnitude below a target tolerance requires the number of steps to stay below a logarithmic ratio of target to initial error divided by the logarithm of three. This is an exact conditional calculation for the branch model. It does not guarantee that an arbitrary perturbed trajectory follows the same itinerary indefinitely.

For a physical application, distinguish state uncertainty, numerical defect, parameter uncertainty and model discrepancy. A proof of a horseshoe establishes a complex invariant subsystem; it does not by itself show that typical physical starts enter that subsystem or that it is an attractor. The invariant set, the probability or reference volume, and the finite prediction target must remain explicit throughout a chaos claim.

## Exercises with complete worked solutions

<a id="chaos-symbolic-entropy-ex-1"></a>

### 1. Periodic density
Why are periodic sequences dense in the full shift?

<details><summary>Hint 1</summary>

A cylinder specifies only finitely many coordinates.

</details>

<details><summary>Hint 2</summary>

Choose a long enough period and repeat a block satisfying every specified coordinate.

</details>

<details><summary>Full solution</summary>

**Solution.** Every cylinder fixes a finite word. Repeating that word periodically produces a periodic sequence inside the cylinder.

</details>

<a id="chaos-symbolic-entropy-ex-2"></a>

### 2. Shift sensitivity
Give a sensitivity constant.

<details><summary>Hint 1</summary>

Preserve the fixed prefix and alter a later symbol.

</details>

<details><summary>Hint 2</summary>

After shifting the altered symbol to the front, the zero-based metric distance becomes one.

</details>

<details><summary>Full solution</summary>

**Solution.** Because $m\ge2$, in any cylinder one can change a coordinate beyond its fixed prefix to a different symbol. After shifting that coordinate to coordinate $0$, the two sequences differ at the front, so their distance is $2^0=1>1/2$. Thus $\delta=1/2$ is a sensitivity constant under the stated zero-based convention.

</details>

<a id="chaos-symbolic-entropy-ex-3"></a>

### 3. Transitivity
Show two cylinders eventually intersect under shift.

<details><summary>Hint 1</summary>

Express both open sets by smaller cylinders.

</details>

<details><summary>Hint 2</summary>

A single sequence can contain the first required word and later the second word without conflicting coordinates.

</details>

<details><summary>Full solution</summary>

**Solution.** Concatenate the word defining the first cylinder with enough symbols and then the word defining the second. The resulting sequence begins in the first and shifts into the second.

</details>

<a id="chaos-symbolic-entropy-ex-4"></a>

### 4. Entropy of three-shift
What is it?

<details><summary>Hint 1</summary>

Count all possible length-n words over three symbols.

</details>

<details><summary>Hint 2</summary>

Divide the logarithm of that count by n and take the horizon limit.

</details>

<details><summary>Full solution</summary>

**Solution.** There are $3^n$ words of length n, so exponential rate is $\lim \log(3^n)/n=\log 3$.

</details>

<a id="chaos-symbolic-entropy-ex-5"></a>

### 5. Conjugacy transfer
Does conjugacy preserve periodic periods?

<details><summary>Hint 1</summary>

Apply the conjugacy identity repeatedly for a fixed positive iterate.

</details>

<details><summary>Hint 2</summary>

Use injectivity to transfer the converse implication and hence the minimal period.

</details>

<details><summary>Full solution</summary>

**Solution.** Yes. $T^n x=x$ iff $S^n h(x)=h(x)$, and injectivity preserves minimal period.

</details>

<a id="chaos-symbolic-entropy-ex-6"></a>

### 6. Semiconjugacy boundary
Can distinct T-orbits map to one S-orbit?

<details><summary>Hint 1</summary>

Compare a homeomorphism with a merely continuous onto map.

</details>

<details><summary>Hint 2</summary>

A many-to-one map can identify points with different complete orbit histories.

</details>

<details><summary>Full solution</summary>

**Solution.** Yes, because the factor map need not be injective. Thus orbit distinctions may be lost.

</details>

<a id="chaos-symbolic-entropy-ex-7"></a>

### 7. Invariant subset
Can a map be chaotic on K but simple elsewhere?

<details><summary>Hint 1</summary>

The definition is applied to a named restricted dynamical system.

</details>

<details><summary>Hint 2</summary>

An invariant horseshoe need not be an attracting set for neighbouring initial states.

</details>

<details><summary>Full solution</summary>

**Solution.** Yes. The claim must name K; a horseshoe is often a small invariant subset rather than a global attractor.

</details>

<a id="chaos-symbolic-entropy-ex-8"></a>

### 8. Finite-time exponent
If tangent norm grows from 1 to $e^6$ in 3 iterates, compute it.

<details><summary>Hint 1</summary>

Use logarithmic stretch divided by elapsed iterates.

</details>

<details><summary>Hint 2</summary>

The initial tangent norm is one, so the ratio inside the logarithm is the final norm.

</details>

<details><summary>Full solution</summary>

**Solution.** $(1/3)\log(e^6)=2$ per iterate.

</details>

<a id="chaos-symbolic-entropy-ex-9"></a>

### 9. Coordinate units
Why can raw finite-time growth depend on norm?

<details><summary>Hint 1</summary>

Two equivalent norms differ by bounded multiplicative constants.

</details>

<details><summary>Hint 2</summary>

After taking a logarithm and dividing by a growing horizon, fixed norm constants vanish; at finite time they remain.

</details>

<details><summary>Full solution</summary>

**Solution.** Finite-horizon constants change with scaling/norm. Asymptotic exponents are norm invariant under equivalent norms with suitable bounded coordinate changes.

</details>

<a id="chaos-symbolic-entropy-ex-10"></a>

### 10. QR purpose
Why renormalize tangent vectors?

<details><summary>Hint 1</summary>

Repeated derivative products can leave the representable numerical range.

</details>

<details><summary>Hint 2</summary>

Store normalised directions and accumulate logarithms of the removed stretches rather than multiplying them all.

</details>

<details><summary>Full solution</summary>

**Solution.** It prevents overflow/underflow and separates expanding directions; accumulated logarithmic stretch factors estimate exponents.

</details>

<a id="chaos-symbolic-entropy-ex-11"></a>

### 11. Positive exponent boundary
What does one positive estimate not prove?

<details><summary>Hint 1</summary>

A finite stretch measurement has no invariant-set or limiting hypothesis by itself.

</details>

<details><summary>Hint 2</summary>

Transient expansion can occur near a saddle without producing an attracting chaotic subsystem.

</details>

<details><summary>Full solution</summary>

**Solution.** It does not prove an invariant chaotic attractor, ergodicity, mixing, or positive entropy without hypotheses and limiting control.

</details>

<a id="chaos-symbolic-entropy-ex-12"></a>

### 12. Flow zero exponent
Under what conditions should the flow direction have exponent zero, and why is “non-equilibrium orbit” alone insufficient?

<details><summary>Hint 1</summary>

Differentiate the flow with respect to a time shift along its own trajectory.

</details>

<details><summary>Hint 2</summary>

A uniform upper and positive lower speed bound makes the logarithmic norm ratio sublinear in elapsed time.

</details>

<details><summary>Full solution</summary>

**Solution.** On a compact invariant regular set with speed bounded above and away from zero, a tangent perturbation in the flow direction is a time shift whose norm stays comparable above and below, giving exponent zero. For $x'=-x$ and $x_0\ne0$, however, $D\varphi_t=e^{-t}$ and the trajectory is non-equilibrium at every finite time, yet its tangent exponent is $-1$. The compact-invariant/nonvanishing-speed condition rules out that contraction into an equilibrium.

</details>

<a id="chaos-symbolic-entropy-ex-13"></a>

### 13. Finite precision
Why does a computer map orbit become periodic?

<details><summary>Hint 1</summary>

Assume one fixed deterministic update with only finitely many possible complete machine states.

</details>

<details><summary>Hint 2</summary>

A repeated complete state repeats all subsequent states; an external input or changing precision would alter the assumption.

</details>

<details><summary>Full solution</summary>

**Solution.** A deterministic update on finitely many representable states must eventually repeat, after which it cycles.

</details>

<a id="chaos-symbolic-entropy-ex-14"></a>

### 14. Horseshoe evidence
Does stretching and folding in a plot prove it?

<details><summary>Hint 1</summary>

A horseshoe theorem needs invariant crossings and contraction/expansion control.

</details>

<details><summary>Hint 2</summary>

A visual fold does not establish a complete orbit for every required bi-infinite itinerary.

</details>

<details><summary>Full solution</summary>

**Solution.** No. One needs an invariant set and rigorous crossing/cone or symbolic coding conditions.

</details>

<a id="chaos-symbolic-entropy-ex-15"></a>

### 15. Word counts
Can observed distinct binary words exceed $2^n$?

<details><summary>Hint 1</summary>

Count the full set of binary strings of the stated length.

</details>

<details><summary>Hint 2</summary>

A smaller observed set need not show forbidden words unless sampling and coding are controlled.

</details>

<details><summary>Full solution</summary>

**Solution.** No. That is the combinatorial maximum for length n; lower counts may reflect forbidden words, insufficient data, or resolution.

</details>

<a id="chaos-symbolic-entropy-ex-16"></a>

### 16. Entropy units
What changes if logarithm base two is used?

<details><summary>Hint 1</summary>

Use the change-of-base identity for logarithms.

</details>

<details><summary>Hint 2</summary>

Only the unit changes; the underlying orbit-complexity growth is the same.

</details>

<details><summary>Full solution</summary>

**Solution.** Entropy is measured in bits instead of natural units; values scale by $1/\log 2$.

</details>

<a id="chaos-symbolic-entropy-ex-17"></a>

### 17. Doubling map
Why is it shift-like in binary?

<details><summary>Hint 1</summary>

Write a circle coordinate as an infinite binary expansion.

</details>

<details><summary>Hint 2</summary>

Multiplication by two moves every digit left; dyadic coordinates require an explicit representation convention.

</details>

<details><summary>Full solution</summary>

**Solution.** Multiplication by two modulo one deletes the leading binary digit, except for the dual representations of dyadic rationals.

</details>

<a id="chaos-symbolic-entropy-ex-18"></a>

### 18. Partition boundary
Can arbitrary bin entropy equal metric entropy?

<details><summary>Hint 1</summary>

Metric entropy belongs to a specified invariant probability and a controlled partition limit.

</details>

<details><summary>Hint 2</summary>

An arbitrary sensor binning can merge distinct states and fail to generate their full history.

</details>

<details><summary>Full solution</summary>

**Solution.** Not generally. The partition must be generating or controlled through refinement, and an invariant measure must be named.

</details>

<a id="chaos-symbolic-entropy-ex-19"></a>

### 19. Shadowing boundary
If a numerical orbit has small one-step defect, is it the exact orbit from the same initial point?

<details><summary>Hint 1</summary>

Read whether the shadowing conclusion fixes the original initial point.

</details>

<details><summary>Hint 2</summary>

A nearby exact orbit may start at a perturbed point, which expanding dynamics can separate from the prescribed orbit.

</details>

<details><summary>Full solution</summary>

**Solution.** No. A shadowing theorem may give an exact nearby orbit under hyperbolicity, usually with a perturbed initial point and finite/infinite qualifications.

</details>

<a id="chaos-symbolic-entropy-ex-20"></a>

### 20. Claim repair
Repair: “The trajectory looks irregular and has a positive finite-time exponent, so the system is chaotic.”

<details><summary>Hint 1</summary>

List the definition and invariant-set hypotheses missing from the observation.

</details>

<details><summary>Hint 2</summary>

Keep the finite diagnostic claim while withholding the unsupported asymptotic chaos conclusion.

</details>

<details><summary>Full solution</summary>

**Solution.** Report irregular finite-time behaviour and the exact exponent protocol. A chaos claim still needs a named definition, invariant set or measure, asymptotic justification, and numerical error controls.

</details>

## Chapter synthesis

Symbolic shifts supply exact chaos packages; conjugacies transfer them; horseshoes embed them; Lyapunov exponents quantify tangent growth; entropy quantifies orbit complexity. Every numerical diagnostic remains finite and definition-relative.

## Dependency ledger

- Topological definitions require a named invariant metric space.
- Symbolic coding strength depends on conjugacy versus semiconjugacy.
- Horseshoe conclusions require verified invariant geometry.
- Lyapunov limits require differentiability and limiting/measure hypotheses.
- Entropy estimates require controlled partitions, horizons, and resolutions.
