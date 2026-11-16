var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: attractors-lyapunov-exponents
title: "Attractors, Dissipation and Lyapunov Exponents"
level: graduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# Attractors, Dissipation and Lyapunov Exponents

An absorbing region, an attracting invariant set, a physical invariant probability and a positive tangent-growth rate are different mathematical objects. A dissipative system can have several physical basins, and its global attractor can contain unstable equilibria. This chapter constructs a finite-dimensional global attractor from a compact absorbing set, derives explicit dissipative bounds, and states the hypotheses under which Lyapunov exponents have an almost-everywhere meaning.

Required preparation is compact ODE continuation, invariant sets, the variational equation, Liouville's determinant identity and the distinction between invariant measure and reference volume. The compact-attractor and worked-model arguments are proved here. The general multiplicative ergodic theorem is explicitly a theorem input; a finite numerical exponent is never substituted for it.

## Specify what the attractor attracts

For this chapter, a global attractor is a compact invariant set that attracts every bounded set uniformly in the one-sided distance

$$\\operatorname{dist}(B,A)=\\sup_{x\\in B}\\inf_{a\\in A}\\|x-a\\|.$$

Thus the distance of the evolved bounded set from the attractor tends to zero. This is stronger than saying that one selected orbit approaches the set. Invariance means the time map sends the attractor onto itself, not merely into itself. The distance is one-sided; the evolved set need not fill every part of the attractor.

A compact absorbing set is a set that every bounded collection of starts enters after a common sufficiently long time. We will also assume it is positively invariant, so the collection remains there after entry. In finite dimensions, a closed bounded region is compact, but forward existence and invariance still have to be proved. An inequality naming a radius without a boundary or continuation argument is not yet an absorbing-set theorem.

Local attractors use a declared neighbourhood instead of all bounded sets. Some other definitions use only a positive-reference-volume basin or omit Lyapunov stability. Those conventions need to be stated when used. A physical measure concerns limits of time averages for a class of observables; it is not interchangeable with any of these invariant-set definitions.

## Constructing a global attractor from a compact absorbing set

Assume a continuous forward flow on the whole finite-dimensional state space has a nonempty compact positively invariant absorbing set $K$. Define

$$A=\\bigcap_{t\\ge0}\\varphi_t(K).$$

The image sets are nonempty and compact. They are nested because positive invariance gives $\\varphi_{t+s}(K)\\subseteq\\varphi_t(K)$. The finite-intersection property therefore makes their intersection nonempty and compact.

For positive time, the flow sends the intersection into itself. To prove the reverse inclusion, fix a point of the intersection and a positive time $s$. For arbitrarily large times $t$, that point belongs to $\\varphi_{t+s}(K)$, so it has a preimage under time $s$ lying in $\\varphi_t(K)$. These preimages have a convergent subsequence in the compact set $K$. Nestedness places its limit in every fixed late image, hence in $A$. Continuity sends that limit to the chosen point. Thus $\\varphi_s(A)=A$.

The set attracts $K$ uniformly. If not, there would be late times and points in their image sets staying a fixed positive distance from the intersection. Compactness gives a convergent subsequence. Nestedness puts its limit in every image set, contradicting that distance bound. For any bounded set $B$, absorption gives a time after which its image is in $K$. Subsequent images are contained in the corresponding images of $K$, so the same uniform attraction follows.

This proves the global-attractor assertion from the stated hypotheses. It also proves uniqueness. If two compact invariant sets both attracted every bounded set, each would attract the other. Invariance makes their one-sided distance unchanged under evolution of the first set, so the limiting zero distance forces inclusion. Reverse the roles to obtain equality. No statistical ergodicity or chaotic behaviour has been used.

## Bounded complete trajectories explain what the attractor contains

Every bounded complete trajectory lies in the global attractor. To see this, its entire range is a bounded set. Apply the absorbing time to the states far in its past. Their evolved states enter $K$; letting the amount of remaining forward evolution grow places the current point in every sufficiently late image of $K$, hence in the intersection.

Conversely, invariance gives backward preimages within the attractor. For a unique ODE flow, compact continuation and uniqueness assemble these into complete trajectories staying in the attractor. In this setting the attractor consists exactly of states on bounded complete trajectories. This includes unstable equilibria and heteroclinic connections whenever they are bounded, not only asymptotically stable states.

One should therefore distinguish the global attractor from the omega-limit set of one orbit. A single start may approach one equilibrium, while the global attractor also contains another basin, their separating saddle and the connecting trajectories. Reference-volume experiments can favour particular physical measures without changing the larger invariant set.

**Worked example: a whole interval as an attractor.** For $x'=x-x^3$ on the real line, the interval from minus two to two is positively invariant and absorbs every bounded set. Outside it the velocity points toward it; the scalar phase line or a separation estimate gives finite entry from any bounded initial range. The endpoints of its evolved images converge monotonically to minus one and one. Order preservation makes each image an interval, so their nested intersection is exactly $[-1,1]$.

That global attractor contains the unstable equilibrium zero and all the connecting orbits from zero toward the stable equilibria. Most individual starts converge to one endpoint, with the sign selecting the basin. The two stable point masses are physical invariant probabilities for ordinary interval reference volume, while the unstable point mass at zero is invariant but not physically selected by a positive-length basin. A global attracting set can thus contain a continuum even when typical limiting probability measures are atomic.

## Dissipative inequalities require a compactness consequence

Suppose a continuously differentiable, coercive nonnegative function satisfies $V'\\le-cV+C$ with $c>0$ along a locally defined solution. Multiplying by the integrating factor gives

$$V(t)\\le e^{-ct}V(0)+\\frac Cc(1-e^{-ct}).$$

Every finite-time value is bounded, so coercivity keeps the state in a bounded region on each finite interval. If the equation is defined and locally Lipschitz on the entire state space, continuation gives global forward existence. A sublevel strictly larger than $C/c$ is positively invariant by the boundary derivative inequality and absorbs every bounded set after a common finite time. Coercivity and continuity make it compact. The preceding construction then gives a global attractor.

The strict margin above the limiting level is convenient: the estimate may approach the exact limiting level asymptotically without entering it in finite time. A domain with a removed boundary requires an additional argument keeping the sublevel inside that domain. Coercivity in ambient coordinates alone does not repair a singular equation boundary.

**Worked example: an explicit Lorenz absorbing ellipsoid.** Take the Lorenz equations

$$x'=\\sigma(y-x),\\qquad y'=rx-y-xz,\\qquad z'=xy-bz,$$

with all three parameters positive. Use the nonnegative quadratic function $V=rx^2+\\sigma y^2+\\sigma(z-2r)^2$. Differentiating makes the mixed cubic and bilinear terms cancel. The result is

$$V'=-2r\\sigma x^2-2\\sigma y^2-2\\sigma b\\,z(z-2r).$$

Put $w=z-2r$. The elementary inequality $w^2+2rw\\ge w^2/2-2r^2$ gives

$$V'\\le-cV+4\\sigma br^2,\\qquad c=\\min(2\\sigma,2,b)>0.$$

Hence every ellipsoid with level strictly greater than $4\\sigma br^2/c$ is compact, positively invariant and absorbing for bounded sets. The polynomial vector field is locally Lipschitz, so the same bound proves global forward existence. A global attractor exists by the proved theorem.

This argument applies throughout the stated positive parameter range. It does not prove a strange attractor, transitivity, positive exponents or any particular physical invariant probability. In parameter regimes with simple attracting equilibria, the absorbing ellipsoid still exists. Dissipation is an important prerequisite for many long-time arguments, not a synonym for chaos.

## Volume contraction and tangent expansion can coexist

For a continuously differentiable flow, the derivative along a trajectory solves the variational equation. Liouville's identity gives its determinant as the exponential of integrated divergence. Negative divergence therefore contracts infinitesimal volume, but volume is a product of directional stretches. One direction can expand while another contracts more strongly.

**Worked example: a fixed point with positive exponent and zero orbit complexity.** The map on the plane with matrix $\\operatorname{diag}(2,1/4)$ has determinant one half. Its origin supports an invariant point mass. At that point the two Lyapunov exponents are the logarithm of two and minus the logarithm of four, so their sum is negative while one is positive. The restricted system on the single-point invariant set has entropy zero and no nontrivial orbit structure. Thus positive tangent growth for a named invariant probability does not alone prove positive metric entropy or an attracting chaotic set.

For Lorenz, divergence is the negative constant $-\\sigma-1-b$. Its volume contraction is exact, but this number alone cannot determine the signs of its individual exponents. A trajectory plot or a dissipative determinant does not supply the missing directional information.

## State the multiplicative ergodic input precisely

For an invertible continuously differentiable map near a compact invariant set, let an invariant probability be given. Assume the positive logarithms of the derivative norm and inverse derivative norm are integrable. Oseledets' multiplicative ergodic theorem then gives, at almost every point, an invariant splitting into finitely many subspaces with definite exponential growth rates along nonzero vectors in each subspace. These rates and their multiplicities are invariant measurable quantities; if the probability is ergodic, they are constant almost everywhere.

On a compact invariant set where the map and its inverse have continuous derivatives, the displayed integrability conditions follow from boundedness. The theorem is a general input here, not a consequence of one singular-value calculation. For noninvertible maps or noncompact state spaces the appropriate versions and integrability hypotheses must be stated separately. A map collapsing a direction can also have an exponent equal to negative infinity in versions permitting that case.

An individual nonzero vector not lying in a single subspace generally has the growth rate of its largest nonvanishing component. A spectrum is therefore not recovered merely by evolving several initially parallel generic vectors: expanding directions can align them. Orthogonalisation can separate those directions numerically, but its convergence interpretation still uses the dynamical and measure hypotheses.

## Exact finite-time identities and asymptotic statements

For a derivative product over a finite horizon, the logarithm of its absolute determinant is the sum of the logarithms of its singular values. For a full orthonormal QR propagation, the corresponding sum is also the sum of the logarithms of the absolute diagonal factors accumulated at each step. These are finite-dimensional identities, provided the factors are nonsingular. They provide a consistency relation for a spectrum computation without proving its infinite-time limit.

Under the multiplicative ergodic theorem, the asymptotic sum of exponents equals the limit of the normalised log determinant, counted with multiplicity. Under an ergodic invariant probability and integrable log determinant, Birkhoff identifies that limit with its invariant integral. For a flow, Liouville rewrites it as the time average of divergence. In particular the Lorenz constant divergence fixes the sum to $-\\sigma-1-b$ under these hypotheses, while leaving the separate rates unresolved.

The flow direction has exponent zero on a compact invariant regular set whose speed is bounded above and bounded away from zero. Differentiating a time shift gives $D\\varphi_t(x)f(x)=f(\\varphi_t(x))$, and the two speed bounds make its normalised logarithmic norm ratio tend to zero. A non-equilibrium trajectory approaching an equilibrium need not satisfy the lower speed bound. For $x'=-x$, its tangent exponent is minus one even though the trajectory is nonstationary at every finite time.

## Norms and coordinates change finite reports differently

Two fixed norms in finite dimensions bound one another by positive constant factors. In the finite-time logarithmic growth ratio those factors contribute constants divided by the horizon, so they disappear asymptotically when the limit exists. At finite time they remain and can change a printed estimate substantially.

A continuously differentiable coordinate diffeomorphism with derivative and inverse derivative uniformly bounded along the invariant set has the same asymptotic protection: derivative products transform by the derivative at the final point and its inverse at the initial point. The resulting multiplicative bounds are horizon-independent. A mere homeomorphism has no such derivative bounds. The scalar power conjugacy in the preceding chapter preserves local time evolution but changes coordinate exponents, demonstrating why topological equivalence alone does not preserve a Lyapunov spectrum.

The same norm convention matters when a physical tolerance is expressed in mixed units. An exponent measures asymptotic rate in a declared mathematical representation; a prediction horizon also depends on uncertainty size, nonlinear regime and the observable. A large transient in a stable nonnormal system can be operationally important even when every asymptotic exponent is negative.

## From an invariant set to a statistical claim

The proved absorbing-set theorem gives existence and uniform set attraction. It does not select an invariant probability or prove its ergodicity. A physical measure additionally describes which time averages are selected from a positive-reference-volume collection of starts. Several such basins may coexist, and an invariant saddle measure can have a positive exponent while being irrelevant to a typical initial-state experiment.

For a numerical study, name the exact flow or map, the claimed attracting set, the initial-state protocol, the observable or tangent quantity, the precision and discretisation, and the theorem used for an asymptotic or uncertainty conclusion. A finite clipped exponent, a stable histogram and a visually bounded trajectory are different observations. Their usefulness increases when each is attached to its actual hypothesis and finite scope, rather than combined into an unsupported single label.

## Exercises with staged hints and full solutions

<a id="attractors-lyapunov-exponents-ex-1"></a>
### Exercise 1: one-sided attraction

Why can a single orbit approach a global attractor without visiting every part of it?

<details><summary>Hint 1</summary>

Inspect the order of the supremum and infimum in the distance definition.

</details>
<details><summary>Hint 2</summary>

The scalar double-well flow has different endpoint basins.

</details>
<details><summary>Full solution</summary>

The distance only asks that each evolved point be near some point of the attractor. It does not require each attractor point to be near the chosen orbit. In $x'=x-x^3$, a positive start tends to one while the global attractor is the entire interval from minus one to one. The one-sided distance tends to zero despite no exploration of the negative half.

</details>

<a id="attractors-lyapunov-exponents-ex-2"></a>
### Exercise 2: strict absorbing level

For $V'\\le-2V+6$, why use a level larger than three for a finite-time absorbing set?

<details><summary>Hint 1</summary>

Solve the scalar comparison inequality exactly.

</details>
<details><summary>Hint 2</summary>

Equality can approach the limiting level from above forever.

</details>
<details><summary>Full solution</summary>

The bound is $V(t)\\le3+e^{-2t}(V(0)-3)$. For a bounded initial collection this enters any fixed level above three in a common finite time. The equality model starting above three never enters the exact level three in finite time, so that level is not justified as absorbing by this estimate alone.

</details>

<a id="attractors-lyapunov-exponents-ex-3"></a>
### Exercise 3: uniqueness of a global attractor

Prove uniqueness using attraction of each compact invariant candidate by the other.

<details><summary>Hint 1</summary>

Each compact candidate is a bounded set eligible for attraction.

</details>
<details><summary>Hint 2</summary>

Its invariance makes its evolved set unchanged.

</details>
<details><summary>Full solution</summary>

If $A_1,A_2$ are both global attractors, attraction gives $\\operatorname{dist}(\\varphi_tA_1,A_2)\\to0$. Invariance replaces the first argument by $A_1$, so its fixed one-sided distance is zero. Closedness gives $A_1\\subseteq A_2$. Reversing the roles gives equality.

</details>

<a id="attractors-lyapunov-exponents-ex-4"></a>
### Exercise 4: bounded complete states

Why must an unstable equilibrium belong to the global attractor under the compact absorbing hypotheses?

<details><summary>Hint 1</summary>

An equilibrium is a complete bounded trajectory regardless of stability.

</details>
<details><summary>Hint 2</summary>

Apply absorption to that singleton and then use its invariance.

</details>
<details><summary>Full solution</summary>

Its singleton is a bounded invariant set. Uniform attraction by the global attractor leaves its distance unchanged, so that distance must already be zero. Closedness places the equilibrium in the attractor. Set inclusion says nothing about whether it attracts a positive-volume basin or is typical for a physical measure.

</details>

<a id="attractors-lyapunov-exponents-ex-5"></a>
### Exercise 5: the Lorenz estimate

Verify the bound on $z(z-2r)$ used in the absorbing-ellipsoid proof.

<details><summary>Hint 1</summary>

Substitute $w=z-2r$.

</details>
<details><summary>Hint 2</summary>

Complete a square to bound the cross term from below.

</details>
<details><summary>Full solution</summary>

The product is $w^2+2rw$. Subtracting $w^2/2-2r^2$ leaves $(w+2r)^2/2$, which is nonnegative. Thus the desired lower bound holds. Multiplication by the negative coefficient in the energy derivative reverses it into the upper bound used there.

</details>

<a id="attractors-lyapunov-exponents-ex-6"></a>
### Exercise 6: volume versus direction

Compute the spectrum and determinant rate at the origin of the diagonal map in the worked example.

<details><summary>Hint 1</summary>

The derivative product is diagonal with the nth powers of its entries.

</details>
<details><summary>Hint 2</summary>

Add the two logarithmic rates and compare with the log determinant.

</details>
<details><summary>Full solution</summary>

The rates are $\\log2$ and $\\log(1/4)=-\\log4$. Their sum is $-\\log2=\\log(1/2)$, the logarithm of the determinant magnitude. One direction expands despite volume contraction. On the invariant singleton the dynamics has zero entropy, so this calculation supplies no chaotic attracting behaviour.

</details>

<a id="attractors-lyapunov-exponents-ex-7"></a>
### Exercise 7: the missing zero exponent

Why does the nonstationary orbit of $x'=-x$ not contradict a zero flow-direction exponent on compact regular invariant sets?

<details><summary>Hint 1</summary>

Its velocity tends to zero as it approaches the equilibrium.

</details>
<details><summary>Hint 2</summary>

The claimed zero exponent used both an upper and a positive lower speed bound.

</details>
<details><summary>Full solution</summary>

Its speed is $|x_0|e^{-t}$ and is not bounded away from zero. Its derivative is $e^{-t}$, giving exponent minus one. The orbit contracts into an equilibrium rather than staying in a compact invariant regular set with a uniform positive speed bound. The omitted hypothesis is exactly what prevents the contradiction.

</details>

<a id="attractors-lyapunov-exponents-ex-8"></a>
### Exercise 8: a sum does not determine the spectrum

Under the stated ergodic hypotheses, Lorenz parameters are positive and the divergence is constant. What spectral information follows directly?

<details><summary>Hint 1</summary>

Use the determinant identity and the invariant time average.

</details>
<details><summary>Hint 2</summary>

A negative sum admits several patterns of individual signs.

</details>
<details><summary>Full solution</summary>

The sum of exponents counted with multiplicity is $-\\sigma-1-b$. This alone does not identify any separate exponent or prove that one is positive. All negative rates, or an expanding rate balanced by stronger contraction, can have a negative sum. A zero flow exponent also needs its appropriate regularity/nonvanishing-speed or measure-theoretic justification.

</details>

<a id="attractors-lyapunov-exponents-ex-9"></a>
### Exercise 9: equivalent norms

Show why fixed equivalent norms give the same existing asymptotic vector exponent.

<details><summary>Hint 1</summary>

Bound the final and initial norm ratios by fixed constants.

</details>
<details><summary>Hint 2</summary>

Their logarithms are divided by the growing time horizon.

</details>
<details><summary>Full solution</summary>

If one norm lies between positive constants times the other, the two growth ratios differ by multiplicative constants independent of the derivative horizon. Their logarithms differ by a bounded quantity. Dividing by the horizon makes that difference tend to zero. This does not say their finite-time estimates are equal, or extend to a coordinate change with unbounded derivative or inverse derivative.

</details>

<a id="attractors-lyapunov-exponents-ex-10"></a>
### Exercise 10: a dissipative claim repair

Repair the statement: an absorbing ellipsoid and one positive finite-time exponent prove a unique physical strange attractor.

<details><summary>Hint 1</summary>

List separately what the compact absorbing theorem and the finite tangent calculation establish.

</details>
<details><summary>Hint 2</summary>

Neither selects one invariant probability or controls every basin and infinite-time limit.

</details>
<details><summary>Full solution</summary>

Under the stated global-existence and invariance hypotheses the ellipsoid supplies a compact global attractor. The finite exponent reports directional growth along a particular finite computed orbit and protocol. A unique physical invariant measure, positive asymptotic rate, strange geometry or chaotic dynamics needs additional exact definitions and theorems controlling basins, measure selection, limiting growth and numerical error. The two observations alone do not provide them.

</details>

## Chapter synthesis

A compact absorbing set constructs a unique global attracting set and contains its bounded complete dynamics. Dissipation and volume contraction do not choose physical measures or force chaos. Lyapunov exponents require a derivative cocycle, a limiting theorem and a named probability; finite-time calculations and topological conjugacies have their own narrower scopes.
`;export{e as default};