
# Variational and Direct Methods

A differential equation can arise as the stationarity condition of an energy, but stationarity is not existence and is not minimality. This chapter derives Euler–Lagrange equations with their boundary terms, develops convexity and second-variation tests, and proves the direct-method architecture that produces minimizers from compactness and lower semicontinuity.

## 1. First variation with fixed endpoints

For

$$J[u]=\int_a^b L(x,u,u')\,dx,$$

take $u_\epsilon=u+\epsilon \eta$, where eta is smooth and vanishes at a and b. If L is continuously differentiable and differentiation under the integral is justified,

$$\left.\frac{d}{d\epsilon}J[u_\epsilon]\right|_{\epsilon=0}=\int_a^b(L_u\eta+L_p\eta')\,dx=\int_a^b\left(L_u-\frac{d}{dx}L_p\right)\eta\,dx.$$

The fundamental lemma gives the Euler–Lagrange equation

$$L_u-\frac{d}{dx}L_p=0.$$

It is necessary for a sufficiently smooth local extremum under admissible variations. Corners, obstacles, inequality constraints, and weak minimizers require modified statements.

## 2. Boundary and symmetry terms

If an endpoint value is free, integration by parts retains $L_p \eta$ there, producing a natural boundary condition such as $L_p(b)=0$. If the endpoint lies on a curve or the endpoint time varies, transversality changes accordingly. Silently discarding boundary terms changes the problem.

When L has no explicit x-dependence, a smooth extremal satisfies the Beltrami identity

$$L-u'L_p=\text{constant}.$$

When L has no explicit u-dependence, $L_p$ is constant. These are first integrals, not existence theorems.

## 3. Second variation and convexity

At a smooth extremal,

$$\delta^2J[\eta]=\int_a^b[L_{uu}\eta^2+2L_{up}\eta\eta'+L_{pp}(\eta')^2]\,dx.$$

Positive second variation on every nonzero admissible direction supports strict local minimality only with appropriate uniformity and regularity. A negative direction disproves local minimality. Semidefinite second variation is inconclusive.

If $(u,p)\to L(x,u,p)$ is convex and the admissible set is convex, every stationary admissible point is a global minimizer. Strict convexity on the admissible set gives uniqueness. If the functional has null directions, it is only convex rather than strictly convex there, and uniqueness requires a normalization or is understood modulo that nullspace.

## 4. Direct method

To minimize J over a set A in a reflexive Banach space:

1. show the infimum is finite and choose a minimizing sequence;
2. use coercivity to bound it;
3. use weak compactness to extract a weakly convergent subsequence;
4. show A is weakly closed, so the limit is admissible;
5. use weak lower semicontinuity to obtain $J[u]\leq liminf J[u_n]$.

Then u attains the infimum. Each step is essential. Boundedness alone gives no strong convergence; pointwise constraints may not be weakly closed; a nonconvex derivative integrand may fail lower semicontinuity.

## 5. Dirichlet energy example

On $H_0^1(\Omega)$, minimize

$$J[u]=\tfrac12\int_\Omega|\nabla u|^2\,dx-\int_\Omega fu\,dx.$$

Poincare and Young inequalities give coercivity. The quadratic energy is weakly lower semicontinuous, and the linear term is weakly continuous. The minimizer satisfies

$$\int_\Omega\nabla u\cdot\nabla v\,dx=\int_\Omega fv\,dx$$

for all v, exactly the weak Poisson equation. Strict convexity gives uniqueness. This equivalence relies on the declared boundary space and data class.

## 6. Constraints and multipliers

For an isoperimetric constraint $G[u]=c$, a regular constrained extremum satisfies stationarity of $J+\lambda(G-c)$ for some multiplier lambda. Constraint qualification matters. An obstacle constraint $u\geq \psi$ yields a variational inequality, not the Euler–Lagrange equality everywhere:

$$A(u,v-u)\ge F(v-u)$$

for every admissible v. Equality holds away from contact under further regularity.

## 7. Discrete verification

Galerkin or finite-element minimization restricts J to $A_h$. Report energy, Euler residual, constraint violation, mesh, quadrature, and nested-space refinement. For conforming nested spaces, minimum energies decrease toward the continuous infimum under density and consistency. A small optimization gradient only certifies the discrete algebraic problem under its conditioning.

## A complete direct-method theorem on an interval

Let I be a bounded interval, prescribe its two endpoint values, and consider an energy with one half the squared derivative, a continuous potential W bounded below, and a square-integrable linear load. The admissible space is an affine translate of the zero-boundary first-Sobolev space. Assume at least one admissible function has finite energy, which holds for the affine endpoint lift because its values lie in a compact interval and W is continuous.

Subtract that lift. Poincaré bounds the remaining function norm by its derivative norm, and Cauchy–Schwarz controls the load term by a constant plus a constant times the unknown derivative norm. The positive quadratic derivative term then dominates as that norm tends to infinity. Thus every minimizing sequence is bounded in the first-Sobolev space, even though W need not be convex.

Weak compactness gives a subsequence with weakly convergent derivatives and functions. The interval compactness theorem proved in the Sobolev opening gives, after a further subsequence, uniform convergence of the continuous representatives. The two endpoint values pass to the limit. Uniform convergence keeps all values in a fixed compact scalar range, so uniform continuity of W there gives convergence of its integral. The load term converges as well, since uniform convergence implies square-integrable convergence.

The derivative energy is weakly lower semicontinuous. A direct Hilbert proof uses the identity that the squared norm is the supremum, over all comparison vectors, of twice the inner product minus the comparison vector's squared norm. Each inner product is weakly continuous; a supremum of these continuous functions is lower semicontinuous. Combining this with the convergent potential and load terms shows that the admissible limit attains the infimum.

This proves existence for continuous bounded-below nonconvex potentials in one dimension. The argument does not claim weak continuity of an arbitrary nonlinear expression: it obtained strong uniform convergence of the undifferentiated state first. In higher dimensions that compact embedding changes, and the growth of W must be matched to an available compact integral embedding. The derivative term remained convex throughout; a later example shows why changing that part can destroy attainment.

If W is continuously differentiable, the minimizer satisfies the weak Euler equation. Every fixed energy-space variation is continuous and bounded on the interval. Along a small range of variation parameters, W and its derivative are bounded on the resulting compact scalar range, justifying differentiation under the integral. The equation is

$$\int_Iu'v'+W'(u)v=\int_Ifv\qquad(v\in H_0^1(I)).$$

The regularity of this particular solution can then be studied from that equation. On the interval, boundedness of W'(u) and the square-integrable load imply a square-integrable second weak derivative. Existence was proved before this improvement, so the argument is not circular. If the potential is only continuous, minimization still makes sense although this differentiable Euler equation need not.

### Worked example: a double well changes with interval length

Take zero endpoints on $(0,L)$, zero load and $W(u)=(u^2-1)^2/4$. The theorem gives a minimizer, but the nonconvex potential does not give uniqueness. Compare any admissible u with the zero state. Their energy difference is

$$\frac12\int_0^L|u'|^2-\frac12\int_0^Lu^2+
\frac14\int_0^Lu^4.$$

If L is at most pi, the sharp interval Poincaré inequality makes the first two terms nonnegative, and the quartic term is strictly positive for every nonzero function. Thus zero is the unique minimizer, including the critical length pi. The nonnegative second variation at that critical length is not the whole proof; the positive quartic term resolves its null direction.

If L is greater than pi, use $u=a\sin(\pi x/L)$. Its energy difference is $a^2(\pi^2/L-L)/4+3La^4/32$. The quadratic coefficient is negative, so sufficiently small nonzero amplitudes lower the energy below that of zero. Every global minimizer is consequently nonzero. Since the energy is even, its negative is another distinct minimizer. This proves existence of at least two minimizers without solving the nonlinear boundary ODE or asserting a complete classification of its other stationary states.

With free Neumann endpoints, the constants plus one and minus one have zero energy and are exactly the two zero-energy minimizers on a connected interval. That different boundary class has a different variational problem. One cannot use those constant competitors in the zero-Dirichlet comparison above because they violate its endpoint constraints.

## Convexity gives an exact sufficiency inequality

Suppose the integrand is differentiable and convex jointly in state and derivative, and its supporting-plane inequality can be integrated against admissible functions. At a stationary admissible u, convexity gives the energy at v at least the energy at u plus its first variation applied to $v-u$. The variation vanishes, proving global minimality. Strict convexity along every nontrivial admissible segment makes the inequality strict and gives uniqueness.

For the quadratic Dirichlet functional, expansion gives more: the energy gap between an arbitrary admissible v and the weak solution u is exactly half the squared gradient norm of $v-u$. The cross term cancels by the weak equation. This identity simultaneously proves minimality, uniqueness and an error measure for approximate admissible solutions. It relies on the same load and boundary class for both functions.

A stationary point of a nonconvex functional lacks that supporting-plane bound. A positive second variation with a uniform coercivity constant can establish a local minimum when the Taylor remainder is controlled in the chosen topology. Merely checking positivity on each individual direction is weaker than a uniform bound over a unit sphere in an infinite-dimensional space. The topology and remainder estimate therefore belong to any local sufficiency statement.

## Obstacles replace arbitrary variations by a tangent cone

Let K be a nonempty closed convex subset of a Hilbert energy space, and let a bounded symmetric coercive form and a bounded load define a quadratic energy. A minimizing sequence is bounded by coercivity. A closed convex set is weakly closed: if a weak limit were outside it, the separating-hyperplane theorem would provide a continuous linear functional separating the point from K, contradicting weak convergence. This standard separation theorem is the abstract input in that closure step.

Weak lower semicontinuity gives a minimizer in K. Strict convexity gives uniqueness. For every v in K, the segment from the minimizer towards v remains admissible, so its right directional derivative is nonnegative. This yields the variational inequality stated earlier. Conversely, expanding the quadratic energy at a point satisfying that inequality shows the energy difference is a nonnegative linear variation plus half the coercive squared difference. The inequality is therefore both necessary and sufficient for this convex quadratic problem.

For a pointwise obstacle, weak closure also has a concrete proof: the nonnegative cone is convex and norm closed in the square-integrable space, and its inverse image under the continuous energy-space embedding is closed and convex. In an interval the continuous representative upgrades an almost-everywhere obstacle inequality to every interior point when the obstacle is continuous. Compatibility with endpoint traces is required for K to be nonempty.

### Worked example: a point contact and a measure reaction

On $(-1,1)$ minimize half the squared derivative with zero endpoints and obstacle $\psi(x)=1-2|x|$. The tent $u(x)=1-|x|$ is admissible and touches the obstacle only at zero. For any admissible v, integration on the two half-intervals gives

$$\int_{-1}^1u'(v-u)'=2[v(0)-1]\ge0.$$

Thus it satisfies the variational inequality and is the unique minimizer. Its distributional reaction is $-u''=2\delta_0$, concentrated at the contact point. This is a bounded energy-dual functional in one dimension, as the Sobolev opening proved. It is not an ordinary square-integrable forcing, and the free Euler equation does not hold as an equality at the contact.

The obstacle is negative at the endpoints, so it is compatible with the zero boundary class. If it had a strictly positive lower bound up to an endpoint, continuity would make that admissible class empty. Establishing nonemptiness before applying the direct method avoids converting an inconsistent constraint into an imagined solution.

## Coercivity without lower semicontinuity can fail completely

### Worked example: oscillations with an unattained infimum

On the zero-boundary space $W^{1,4}(0,1)$ consider

$$J(u)=\int_0^1[(u'^2-1)^2+u^2]dx.$$

The integrand is nonnegative and has quartic derivative growth, so bounded energy gives a derivative bound; zero-boundary Poincaré supplies the remaining function bound. Thus minimizing sequences are bounded in this reflexive space. Nevertheless the infimum is not attained.

Construct triangular waves on n equal cells, starting and ending at zero on every cell, with slope plus one on its first half and minus one on its second half. Their heights are $1/(2n)$. The derivative part of their energy is exactly zero, and their squared function integrals tend to zero. Hence the infimum is zero. If a function attained zero energy, the second term would force u to vanish almost everywhere, so its weak derivative would be zero. The first term would then integrate to one, a contradiction.

These waves converge uniformly to zero while their gradients oscillate between the two energy wells. Their weak derivative limit is zero, but the limiting derivative energy is larger than the sequence's derivative energy. This is exactly failure of weak lower semicontinuity. Compactness and admissible closure both hold; it is the remaining lower-semicontinuity step that fails. Relaxation replaces the gradient energy by an appropriate lower envelope to represent such fine mixtures, but that solves a modified variational problem and should be named as such.

## Constraints and approximation need the correct limiting problem

An equality constraint is not generally weakly closed merely because it is written as a continuous nonlinear formula. For a unit-norm sphere in an infinite-dimensional Hilbert space, an orthonormal sequence converges weakly to zero, which lies outside the sphere. A normalized eigenvalue problem can still have a minimizer when stronger compactness makes its norm constraint pass to the limit; that additional compactness is the decisive ingredient.

Multipliers likewise require a constraint qualification. If the constraint derivative vanishes at a candidate, the usual scalar multiplier conclusion may fail to encode stationarity. An obstacle uses one-sided feasible directions instead of a single equality multiplier. The Euler equation, multiplier equation and variational inequality therefore represent different admissible geometries, rather than alternative notations for the same unrestricted variation.

For nested conforming discrete spaces and the exact same energy, minimum energies decrease because the admissible sets enlarge. To identify their limit with the continuous minimum, approximate a continuous minimizer by admissible discrete functions whose energies converge. Their energies bound the discrete minima above, while continuous minimality bounds them below. This squeeze proves energy convergence under that density-and-consistency hypothesis.

In the strictly quadratic case the exact gap identity then gives strong gradient convergence. For nonconvex problems, energy convergence alone need not choose one minimizer or control the distance to it. A quadrature-modified functional, relaxed constraint or nonconforming space can change the limiting minimization problem, so monotone discrete energy values alone do not prove that the intended continuous problem has been approximated.

## Exercises with complete worked solutions

### 1. Basic Euler equation
For $L=(u')^2/2+V(u)$, derive the equation.

<details><summary>Hint 1</summary>

Differentiate with respect to the state and derivative separately.

</details>

<details><summary>Hint 2</summary>

Move the variation derivative using the zero endpoints.

</details>

<details><summary>Full solution</summary>

**Solution.** $L_u=V'(u)$ and $L_p=u'$; hence $V'(u)-u''=0$.

</details>

### 2. Shortest graph
For $L=\sqrt{1+(u')^2}$, find the first integral.

<details><summary>Hint 1</summary>

Use the absence of explicit state dependence.

</details>

<details><summary>Hint 2</summary>

The momentum expression is strictly increasing in the slope.

</details>

<details><summary>Full solution</summary>

**Solution.** $L$ is independent of $u$, so $L_p=u'/\sqrt{1+(u')^2}$ is constant. Thus $u'$ is constant and the extremal is a line.

</details>

### 3. Beltrami identity
For Exercise 1 with no x-dependence, find the conserved quantity.

<details><summary>Hint 1</summary>

Insert the derivative of the kinetic term into the autonomous first integral.

</details>

<details><summary>Hint 2</summary>

The kinetic contribution is subtracted twice before simplification.

</details>

<details><summary>Full solution</summary>

**Solution.** $L-u'L_p=V(u)-(u')^2/2$, constant along a smooth extremal.

</details>

### 4. Free endpoint
If u(a) is fixed but u(b) is free, what natural condition holds?

<details><summary>Hint 1</summary>

Retain the upper-end boundary term.

</details>

<details><summary>Hint 2</summary>

Its variation is arbitrary when the endpoint value is free.

</details>

<details><summary>Full solution</summary>

**Solution.** The remaining boundary term is $L_p(b)\eta(b)$. Arbitrary eta(b) forces $L_p(b)=0$.

</details>

### 5. Fixed endpoints
Why is there no natural condition for fixed u(b)?

<details><summary>Hint 1</summary>

Identify the allowed endpoint variation.

</details>

<details><summary>Hint 2</summary>

A zero variation removes the boundary term without adding another condition.

</details>

<details><summary>Full solution</summary>

**Solution.** Every admissible variation has eta(b)=0, so the boundary term vanishes without constraining $L_p(b)$.

</details>

### 6. Quadratic energy
Minimize $\int_0^1 (u')^2/2$ with u(0)=0,u(1)=1.

<details><summary>Hint 1</summary>

The straight line meets the endpoint constraints.

</details>

<details><summary>Hint 2</summary>

Convex derivative energy makes its stationary equation sufficient.

</details>

<details><summary>Full solution</summary>

**Solution.** Euler equation is u''=0, giving u=x. Convexity makes it the unique global minimizer. Its energy is 1/2.

</details>

### 7. Direct proof of Exercise 6
Prove minimality without Euler–Lagrange.

<details><summary>Hint 1</summary>

Subtract the affine endpoint lift.

</details>

<details><summary>Hint 2</summary>

The cross term integrates to the difference of zero endpoint values.

</details>

<details><summary>Full solution</summary>

**Solution.** Write u=x+v with v zero at endpoints. Energy is $1/2 \int(1+2v'+(v')^2)=1/2+1/2 \int(v')^2$, since integral v'=0.

</details>

### 8. Negative direction
If the second variation is negative for one eta, what follows?

<details><summary>Hint 1</summary>

Use the Taylor expansion along that fixed direction.

</details>

<details><summary>Hint 2</summary>

A negative quadratic coefficient lowers the energy for small nonzero parameters.

</details>

<details><summary>Full solution</summary>

**Solution.** The stationary point cannot be a local minimum in the relevant topology, because small perturbations in that direction lower J to second order.

</details>

### 9. Semidefinite boundary
Does nonnegative second variation prove a minimum?

<details><summary>Hint 1</summary>

Consider a scalar function with vanishing quadratic term and negative quartic term.

</details>

<details><summary>Hint 2</summary>

A semidefinite Hessian does not control the remainder.

</details>

<details><summary>Full solution</summary>

**Solution.** Not by itself. Higher-order terms or lack of uniform positivity may create a saddle or flat direction.

</details>

### 10. Coercivity purpose
What does coercivity do to a minimizing sequence?

<details><summary>Hint 1</summary>

A minimizing sequence has a common energy upper bound.

</details>

<details><summary>Hint 2</summary>

Coercivity converts that bound into a state-space norm bound.

</details>

<details><summary>Full solution</summary>

**Solution.** A uniform upper bound on J forces a norm bound, preventing escape to infinity and enabling weak compactness in a reflexive space.

</details>

### 11. Lower semicontinuity
Why is $liminf$ the useful direction?

<details><summary>Hint 1</summary>

The sequence approaches the infimum from above.

</details>

<details><summary>Hint 2</summary>

The limit must not gain energy when compared with that limiting value.

</details>

<details><summary>Full solution</summary>

**Solution.** It ensures the limit energy is no larger than the limiting best energies, so a weak limit of a minimizing sequence attains the infimum.

</details>

### 12. Weak closure
Why must the limit remain admissible?

<details><summary>Hint 1</summary>

Separate compactness from admissible closure.

</details>

<details><summary>Hint 2</summary>

A limit outside the constraints solves no minimization problem over the original set.

</details>

<details><summary>Full solution</summary>

**Solution.** Otherwise compactness could produce a lower-energy point outside the constraints, which cannot serve as a minimizer of the original problem.

</details>

### 13. Poisson variation
Differentiate $J[u]=1/2 \int|\nabla u|^2-\int fu$.

<details><summary>Hint 1</summary>

Expand the quadratic derivative term at u plus a parameter times v.

</details>

<details><summary>Hint 2</summary>

The coefficient of the linear parameter is the first variation.

</details>

<details><summary>Full solution</summary>

**Solution.** $\delta J[v]=\int \nabla u \cdot \nabla v-\int fv$. Setting this to zero for every test v is the weak Poisson equation.

</details>

### 14. Strict convexity
What does it add?

<details><summary>Hint 1</summary>

Suppose two different minimizers exist.

</details>

<details><summary>Hint 2</summary>

Use their midpoint and the strict convexity inequality.

</details>

<details><summary>Full solution</summary>

**Solution.** Two distinct minimizers would have a midpoint with strictly smaller energy, contradiction. Thus the minimizer is unique.

</details>

### 15. Multiplier equation
For constraint $\int u^2=1$, what term enters Euler–Lagrange?

<details><summary>Hint 1</summary>

Differentiate the constraint as well as the energy.

</details>

<details><summary>Hint 2</summary>

The factor two comes from differentiating the square.

</details>

<details><summary>Full solution</summary>

**Solution.** Stationarity of $J+\lambda(\int u^2-1)$ adds $2\lambda u$ to the $L_u$ term, subject to a regularity/constraint qualification.

</details>

### 16. Obstacle contact
Why not impose the free Euler equation on the contact set?

<details><summary>Hint 1</summary>

Which signs of variations remain feasible at contact?

</details>

<details><summary>Hint 2</summary>

The constraint excludes arbitrary downward perturbations there.

</details>

<details><summary>Full solution</summary>

**Solution.** Downward variations may violate $u\geq \psi$; admissible variations are one-sided, yielding an inequality and a contact force.

</details>

### 17. Discrete energy
In nested conforming spaces, why can minimum energy only decrease?

<details><summary>Hint 1</summary>

Compare the two admissible sets.

</details>

<details><summary>Hint 2</summary>

An infimum over a larger set cannot be larger.

</details>

<details><summary>Full solution</summary>

**Solution.** The finer admissible set contains the coarser one, so its infimum cannot be larger.

</details>

### 18. Stationarity versus minimum
Give a scalar counterexample.

<details><summary>Hint 1</summary>

Choose a stationary scalar function with negative curvature.

</details>

<details><summary>Hint 2</summary>

Its derivative can vanish at a strict maximum.

</details>

<details><summary>Full solution</summary>

**Solution.** $J(x)=-x^2$ has derivative zero at x=0 but a strict local maximum there.

</details>

### 19. Quadrature boundary
A discrete energy decreases under refinement. Is continuous convergence proved?

<details><summary>Hint 1</summary>

Identify whether the functional and admissible set are unchanged.

</details>

<details><summary>Hint 2</summary>

A sequence can approach the minimum of the wrong quadrature functional.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Inconsistent quadrature or nonconforming constraints can converge to the wrong functional. Density, consistency, stability, and a limit theorem remain necessary.

</details>

### 20. Claim repair
Repair: “The Euler–Lagrange equation has a solution, therefore the minimizer exists.”

<details><summary>Hint 1</summary>

Euler–Lagrange is a necessary stationarity relation under its hypotheses.

</details>

<details><summary>Hint 2</summary>

Supply a separate sufficiency or direct-method attainment argument.

</details>

<details><summary>Full solution</summary>

**Solution.** The solution is only a stationary candidate. Existence and minimality require admissibility plus convexity/second-variation sufficiency or a direct-method argument with coercivity, closure, compactness, and lower semicontinuity.

</details>


## Chapter synthesis

First variations produce interior and boundary conditions; second variations and convexity distinguish candidates; the direct method proves attainment through coercivity, compactness, closure, and lower semicontinuity. Discrete stationarity remains separate from continuous minimality.

## Dependency ledger

- Euler–Lagrange derivation requires admissible differentiable variations.
- Natural conditions depend on which endpoint data are free.
- Convexity supplies global sufficiency; second variation alone may be inconclusive.
- Direct-method existence needs every compactness and closure step.
- Constraint multipliers require qualification; obstacles yield inequalities.
- Numerical minimizers require mesh, residual, constraint, and energy audits.
