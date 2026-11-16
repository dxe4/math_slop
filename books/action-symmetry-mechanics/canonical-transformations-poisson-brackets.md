
# Canonical Transformations and Poisson Brackets

Changing phase-space coordinates can simplify a Hamiltonian while preserving the equations' structure. A canonical transformation is the kind of coordinate change that does this. Merely preserving volume is insufficient in more than one degree of freedom. Time-dependent transformations also change the Hamiltonian by an additional term, so substituting new coordinates into the old energy expression is not always the complete calculation.

Read [Hamiltonian mechanics and the velocity transform](hamiltonian-legendre-transform.md), multivariable chain rules and matrix derivatives. This chapter develops the coordinate and bilinear algebra needed for canonical transformations, proves Liouville's volume theorem and prepares the generating-function viewpoint of [Hamilton–Jacobi theory](hamilton-jacobi-theory.md). The later symplectic-geometry chapter develops the geometric language further.

## A bracket describes evolution of observables

Order coordinates as $z=(q_1,\ldots,q_n,p_1,\ldots,p_n)$ and set
$$
J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}.
$$
Then $J^T=-J$, $J^2=-I$, and Hamilton's equations are $\dot z=J\nabla H$.

**Definition 8.1 (Poisson bracket).** For differentiable scalar functions f and g, define
$$
\{f,g\}=\nabla f^TJ\nabla g
=\sum_i(f_{q_i}g_{p_i}-f_{p_i}g_{q_i}).
$$
Along a Hamiltonian trajectory,
$$
\frac{df}{dt}=\{f,H\}+f_t.
$$
This is the chain rule, with explicit time dependence separated from state evolution. In particular $\{q_i,H\}=H_{p_i}$ and $\{p_i,H\}=-H_{q_i}$ reproduce the coordinate equations.

Bilinearity and antisymmetry follow from matrix multiplication and $J^T=-J$. The product rule gives $\{fg,h\}=f\{g,h\}+g\{f,h\}$. These rules let one calculate composite observables without expanding every coordinate derivative anew.

**Proposition 8.2 (Jacobi identity).** For $C^2$ functions,
$$
\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}=0.
$$

*Proof.* Write $H_g$ for the Hessian of g in this proof only. Differentiating the bracket gives
$\nabla\{g,h\}=H_gJ\nabla h-H_hJ\nabla g$.
Therefore the first term in the cyclic sum is
$\nabla f^TJH_gJ\nabla h-\nabla f^TJH_hJ\nabla g$.
The other two terms have the same form with f, g and h cycled. Because each Hessian is symmetric, $JH_gJ$ is symmetric as well. Its contribution $\nabla f^TJH_gJ\nabla h$ equals $\nabla h^TJH_gJ\nabla f$, which appears with the opposite sign in the cyclic sum. The contributions of the other two Hessians cancel by the same argument. $\square$

For an autonomous H, an observable with no explicit time dependence is conserved throughout a domain if its bracket with H vanishes there. A quantity can be constant on one special trajectory without having zero bracket everywhere. The domain-wide statement concerns every initial condition in that domain.

## Canonical coordinates preserve the bracket

Let $Z=\Phi(z)$ be a $C^1$ diffeomorphism between open phase-space domains, with derivative matrix $S=D\Phi$.

**Definition 8.3 (Canonical transformation).** The transformation is canonical when
$$
SJS^T=J.
$$
Equivalently its new coordinate functions satisfy
$\{Q_i,Q_j\}=0$, $\{P_i,P_j\}=0$ and $\{Q_i,P_j\}=\delta_{ij}$.
The matrix identity lists all those brackets at once, including their sign convention.

**Theorem 8.4 (Invariance of Hamiltonian form).** For a time-independent canonical transformation, define $K(Z)=H(\Phi^{-1}(Z))$. Then the transformed trajectory obeys $\dot Z=J\nabla_ZK$. Moreover brackets of all observables are preserved under composition with $\Phi$.

*Proof.* The chain rule gives $\nabla_zH=S^T\nabla_ZK$ and
$\dot Z=S\dot z=SJS^T\nabla_ZK=J\nabla_ZK$.
For any observables F and G in the new coordinates, the same chain rule gives
$$
\{F\circ\Phi,G\circ\Phi\}_z
=\nabla F^TSJS^T\nabla G
=\{F,G\}_Z\circ\Phi.
$$
Thus the coordinate test preserves the entire bracket algebra, not only one selected Hamiltonian. $\square$

The word diffeomorphism matters. A map can satisfy a formula on selected points without providing a valid coordinate chart. A transformation singular at an endpoint must be restricted to a domain where its inverse and derivatives exist.

Algebraic inversion shows $SJS^T=J$ is equivalent to $S^TJS=J$. The latter says that the antisymmetric bilinear pairing
$$
\omega(u,v)=u_q\cdot v_p-u_p\cdot v_q=u^TJv
$$
is unchanged when both tangent vectors are transformed. This supplies an elementary interpretation of the structure before the differential-form language is introduced.

## Worked example 1: a reciprocal rescaling

For one degree of freedom, take $Q=aq$, $P=p/a$ with $a\ne0$. Its bracket is $\{Q,P\}=a/a=1$, so the transformation is canonical. Scaling both coordinates by a would instead give bracket $a^2$, generally not one.

For $H=p^2/(2m)+m\omega^2q^2/2$ with $m,\omega>0$, choose $a=\sqrt{m\omega}$. Substitution gives
$$
K(Q,P)=\frac\omega2(P^2+Q^2).
$$
The phase portrait becomes circular in the rescaled coordinates, and equations are $\dot Q=\omega P$, $\dot P=-\omega Q$. The two new coordinates have compatible action-based units; they are not automatically dimensionless. Rescaling a phase portrait can simplify its geometry without changing its physical frequency.

## Generating functions and the extra time term

For a sufficiently smooth function $G(q,P,t)$, prescribe
$$
p=G_q,\qquad Q=G_P.
$$
Assume the mixed derivative matrix $B=G_{qP}$ is nonsingular so these equations define a local change of phase-space coordinates. The ordinary differential of G gives
$$
d(G-Q\cdot P)=p\cdot dq-P\cdot dQ+G_tdt.
$$
Consequently the action integrands satisfy
$$
p\cdot dq-Hdt=P\cdot dQ-Kdt+d(G-Q\cdot P),
\qquad K=H+G_t,
$$
after expressing q and p in the new variables. The exact differential changes the action only by endpoint values. The new Hamiltonian includes the explicit derivative of the generating function.

To verify canonical structure without assuming differential forms, fix time and differentiate the two defining equations:
$$
\delta p=A\delta q+B\delta P,\qquad
\delta Q=B^T\delta q+C\delta P,
$$
where $A=G_{qq}$ and $C=G_{PP}$ are symmetric. For two independent variations, expansion gives
$$
\delta q\cdot\widehat{\delta p}-\delta p\cdot\widehat{\delta q}
=\delta q^TB\widehat{\delta P}-\delta P^TB^T\widehat{\delta q}.
$$
The A terms cancel by symmetry. Expanding the analogous expression in Q and P gives the same right side because the C terms cancel. Thus the antisymmetric pairing is preserved. This proves the canonical property under the stated local invertibility condition.

A generating function of this particular type need not represent every canonical map in one chart. Failure of $G_{qP}$ or of the chosen coordinate projection calls for another generating-function type or another chart, rather than a claim that the transformation itself is necessarily invalid.

## Worked example 2: rotating the phase plane

In oscillator-scaled coordinates take a fixed angle $\alpha$ and
$$
Q=q\cos\alpha+p\sin\alpha,\qquad
P=-q\sin\alpha+p\cos\alpha.
$$
The coordinate bracket is $\cos^2\alpha+\sin^2\alpha=1$. Both self-brackets vanish by antisymmetry, so the transformation is canonical. For $H=(q^2+p^2)/2$, the Hamiltonian remains $(Q^2+P^2)/2$. The transformation changes the chosen phase origin without changing the oscillator's dynamics.

At $\alpha=\pi/2$, it gives $Q=p$, $P=-q$. A type-two function G(q,P) cannot describe this map by solving p from P at fixed q, since P is already fixed by q independently of p. Yet the map is a perfectly good invertible canonical rotation. This is a concrete warning that a particular generating-function chart is not a global definition of canonicality.

## Worked example 3: a moving inertial frame

For a free particle of mass m, let u be a constant velocity and choose
$$
G(q,P,t)=(q-ut)(P+mu)+\frac12mu^2t.
$$
Then $p=P+mu$, $Q=q-ut$ and $G_{qP}=1$. Its explicit time derivative at fixed q and P is $-uP-mu^2/2$. Starting from $H=p^2/(2m)$ gives
$$
K=\frac{(P+mu)^2}{2m}-uP-\frac12mu^2
=\frac{P^2}{2m}.
$$
Thus the transformed equations are $\dot Q=P/m$, $\dot P=0$, exactly the free-particle equations with the shifted mechanical momentum. Omitting the generating time term would incorrectly retain an extra velocity contribution.

Another canonical coordinate choice is $Q=q-ut$, $P=p$, generated by $(q-ut)P$. It instead gives $K=P^2/(2m)-uP$ and $\dot Q=P/m-u$. Both representations describe the same positions; the momentum assigned to the moving-frame coordinate differs. One must specify the full canonical transformation before interpreting its Hamiltonian as physical energy.

## Liouville's theorem is a statement about the full phase space

**Theorem 8.5 (Hamiltonian phase-volume preservation).** Suppose H has continuous second spatial derivatives and its Hamiltonian flow is defined as a differentiable diffeomorphism on the region and time interval under consideration. Then the flow derivative has determinant one. Volumes of regions carried by that flow are preserved.

*Proof.* Let $S(t)=D\varphi_t(z_0)$ and $A(t)=J\nabla^2H(\varphi_t(z_0),t)$. Differentiating the ODE with respect to initial conditions gives $\dot S=AS$ and $S(0)=I$. Symmetry of the Hessian gives
$$
A^TJ+JA=0.
$$
Therefore
$$
\frac{d}{dt}(S^TJS)=S^T(A^TJ+JA)S=0,
$$
so $S^TJS=J$. Taking determinants gives $(\det S)^2=1$. Continuity and the initial value $\det S(0)=1$ select the positive sign, hence $\det S=1$ throughout the interval. The change-of-variables formula then preserves region volume. $\square$

This proof works for time-dependent Hamiltonians as well: energy may change while the symplectic and volume identities remain valid. It is local to times and points where the flow exists in the stated domain. A collision singularity or an escaping trajectory cannot be passed over by assuming a global diffeomorphism.

The divergence calculation provides another view:
$$
\operatorname{div}(J\nabla H)
=\sum_i(H_{p_iq_i}-H_{q_ip_i})=0.
$$
Continuous second derivatives justify the mixed-partial cancellation. The matrix proof additionally shows preservation of the symplectic pairing, which is stronger than volume preservation in higher dimensions.

## What volume alone cannot establish

For two degrees of freedom take $Q_1=2q_1$, $Q_2=q_2/2$, $P_1=p_1$, $P_2=p_2$. The determinant is one, but $\{Q_1,P_1\}=2$ and $\{Q_2,P_2\}=1/2$. The map preserves four-dimensional volume without being canonical. In one degree of freedom, the corresponding two-by-two determinant condition is equivalent to the canonical matrix identity, but that simplification does not generalise.

Likewise a projection of phase volume onto configuration space can shrink while momentum directions expand. Liouville's theorem concerns the full 2n-dimensional phase volume. A narrow position distribution is not by itself a violation.

Damping changes the model. For $\dot q=p$, $\dot p=-q-\gamma p$ with $\gamma>0$, divergence is $-\gamma$ and the linear flow determinant is $e^{-\gamma t}$. This is not a Hamiltonian flow in the stated canonical coordinates with the standard bracket. The contraction is genuine and helps explain why dissipative systems can approach attracting states in ways an isolated conservative model cannot.

## Transporting a smooth phase density

As an optional application, let a nonnegative smooth density describe an ensemble of initial states. Under a volume-preserving Hamiltonian flow, its transported value satisfies $\rho(t,\varphi_t(z_0))=\rho(0,z_0)$. Differentiating along that path gives the Liouville transport equation
$$
\partial_t\rho+\{\rho,H\}=0.
$$
The density is constant along each moving phase point; it need not be constant at a fixed coordinate location. Preservation of the total integral follows by changing variables with the unit flow determinant. The claim assumes the density and flow are defined on the transported domain, with integrability when a finite total mass is intended.

For an autonomous Hamiltonian, a smooth density of the form $\rho=g(H)$ is stationary because $\{g(H),H\}=g'(H)\{H,H\}=0$. This observation does not make every such function a probability distribution. Nonnegativity, a finite integral and normalisation are additional requirements, particularly on an unbounded phase space. Nor does stationarity prove that every initial ensemble approaches that density. The volume theorem supplies transport and invariance, while relaxation or statistical equilibrium requires separate arguments.

## Conserved quantities can generate a noncommuting algebra

For a time-independent Hamiltonian, a time-independent observable F is
conserved exactly when its bracket with H vanishes along the relevant
trajectories. Suppose two observables F and G have brackets with H that
vanish as functions throughout a region. Jacobi's identity then gives
$$\{\{F,G\},H\}=\{F,\{G,H\}\}-\{G,\{F,H\}\}=0.$$
Their bracket is another conserved observable there. The hypothesis is a
functional identity on the region; conservation on one isolated trajectory
does not by itself authorize substituting zero functions in this argument.

Angular momentum provides the central example. In three Cartesian dimensions,
the components of q crossed with p satisfy the cyclic bracket relations,
including {Lₓ,Lᵧ}=L_z. They are all conserved for a rotationally invariant
Hamiltonian, yet they do not commute with one another. The bracket describes
the composition of their infinitesimal canonical transformations: rotations
about different axes have an order-dependent effect. Conservation and
commutation are separate statements.

This matters when counting integrals for Liouville integrability. Having many
conserved components does not automatically supply the required independent
commuting family. For a central potential one may select H, the squared
angular momentum and one chosen component; their pairwise brackets vanish,
as follows from the component algebra and cancellation in the squared sum.
Independence still has to be checked on the declared region, and may fail
at special radial or aligned states. The integrable-systems chapter develops
that regional qualification in detail.

The same calculation explains why replacing one conserved quantity by a
function of already known ones does not increase the number of independent
integrals. Its differential is a combination of their differentials. Conversely,
a bracket-generated conserved quantity may add genuine information in one
region and become dependent in another. A list of formulas therefore needs
both an algebraic bracket table and a differential-rank statement before
it can support a complete reduction argument.

Canonical transformations preserve all these brackets, so they preserve the
algebraic relations when observables are transformed consistently. Choosing
convenient coordinates can simplify the table, but cannot convert genuinely
noncommuting generators into commuting ones merely by relabelling their
values. This is another reason to distinguish physical symmetry, coordinate
choice and the specific hypotheses of an integrability theorem.

## A nonlinear position change requires the reciprocal momentum change

On a chart with q>0, set Q=q³
and P=p/(3q²). Their differential
pairing gives dQ∧dP=dq∧dp: the
additional term proportional to dq
wedges to zero. Thus this nonlinear
coordinate change is canonical where
its derivative is nonzero. Changing
q alone while retaining p would
not preserve the same form.

For the free Hamiltonian p²/(2m),
the transformed expression is
$9Q^{4/3}P^2/(2m)$. Hamilton's Q equation
then agrees exactly with differentiating
q³ along the free trajectory. Its
position-dependent coefficient reflects
the coordinate metric, not a new
physical force or changing particle mass.
At q=0 the chart loses its invertible
position derivative, while the original
free-particle equations remain regular.
This is another place where a
coordinate singularity must be distinguished
from a singular dynamical model.
Canonical structure preserves equations
only after the Hamiltonian is transformed
with the same map.

## Exercises

### Exercise 1 — A polynomial bracket
<a id="canonical-transformations-poisson-brackets-ex-1"></a>

Compute $\{q^2,p^3\}$ in one degree of freedom.

<details>
<summary>Hint 1</summary>

Only one product of derivatives is nonzero.

</details>
<details>
<summary>Hint 2</summary>

Keep the order of the bracket arguments fixed.

</details>
<details>
<summary>Full solution</summary>

The value is $(2q)(3p^2)-0=6qp^2$. Reversing the arguments changes its sign by antisymmetry. This agrees with applying the bracket product rule repeatedly.

</details>

### Exercise 2 — A scaling condition
<a id="canonical-transformations-poisson-brackets-ex-2"></a>

For nonzero a and b, when is $Q=aq$, $P=bp$ canonical?

<details>
<summary>Hint 1</summary>

Compute the bracket of the two new coordinates.

</details>
<details>
<summary>Hint 2</summary>

It must equal one rather than merely be nonzero.

</details>
<details>
<summary>Full solution</summary>

The bracket is ab, so the transformation is canonical exactly when $ab=1$. Nonzero ab gives an invertible change of coordinates but is insufficient to preserve the standard Hamiltonian structure.

</details>

### Exercise 3 — A momentum shift
<a id="canonical-transformations-poisson-brackets-ex-3"></a>

For $Q=q$, $P=p+a(q)$ in n degrees of freedom, derive the condition for canonicality.

<details>
<summary>Hint 1</summary>

The mixed Q–P brackets already have the required values.

</details>
<details>
<summary>Hint 2</summary>

Compute the P–P brackets using both cross terms.

</details>
<details>
<summary>Full solution</summary>

The remaining condition is $\{P_i,P_j\}=\partial_ja_i-\partial_ia_j=0$. Thus the derivative matrix of a must be symmetric. A gradient $a=\nabla F$ with F twice continuously differentiable satisfies this condition by equality of mixed partial derivatives.

</details>

### Exercise 4 — A rotation generator
<a id="canonical-transformations-poisson-brackets-ex-4"></a>

For $L=xp_y-yp_x$, compute $\{x,L\}$ and $\{y,L\}$.

<details>
<summary>Hint 1</summary>

A position coordinate brackets with a function by its corresponding momentum derivative.

</details>
<details>
<summary>Hint 2</summary>

Differentiate L with respect to each momentum.

</details>
<details>
<summary>Full solution</summary>

The brackets are $-y$ and x. Therefore the Hamiltonian vector field generated by L rotates positions through $\dot x=-y$, $\dot y=x$, consistent with L being the canonical generator of planar rotations.

</details>

### Exercise 5 — A noncanonical reflection
<a id="canonical-transformations-poisson-brackets-ex-5"></a>

Is $Q=q$, $P=-p$ canonical with the bracket convention used here?

<details>
<summary>Hint 1</summary>

Evaluate the mixed coordinate bracket.

</details>
<details>
<summary>Hint 2</summary>

Orientation reversal is relevant in the phase plane.

</details>
<details>
<summary>Full solution</summary>

No: $\{Q,P\}=-1$. The map reverses the symplectic pairing rather than preserving it. It is an invertible reflection, but treating it as an ordinary canonical transformation without a corresponding time reversal changes the equation signs.

</details>

### Exercise 6 — A time-dependent momentum shift
<a id="canonical-transformations-poisson-brackets-ex-6"></a>

Use $G(q,P,t)=qP+ctq^2/2$ to transform the free Hamiltonian $p^2/(2m)$.

<details>
<summary>Hint 1</summary>

Compute p, Q and the partial derivative G sub t.

</details>
<details>
<summary>Hint 2</summary>

The new Hamiltonian is H plus that time derivative.

</details>
<details>
<summary>Full solution</summary>

The relations are $p=P+ctq$ and $Q=q$, while $G_t=cq^2/2$. Hence $K=(P+ctQ)^2/(2m)+cQ^2/2$. The extra potential-like term is part of the coordinate transformation and cannot be dropped while retaining the transformed equations.

</details>

### Exercise 7 — Why the determinant is positive
<a id="canonical-transformations-poisson-brackets-ex-7"></a>

In the Hamiltonian flow proof, why does the identity $(\det S)^2=1$ imply determinant positive one?

<details>
<summary>Hint 1</summary>

The determinant depends continuously on time.

</details>
<details>
<summary>Hint 2</summary>

Use the initial flow derivative and the impossibility of crossing zero.

</details>
<details>
<summary>Full solution</summary>

At time zero S is the identity, so its determinant is one. A continuous function taking only the values minus one and one cannot change between them on a connected time interval. Thus it stays one. The argument concerns a flow connected to the identity, rather than selecting a sign from the squared equation alone.

</details>

### Exercise 8 — Volume is insufficient
<a id="canonical-transformations-poisson-brackets-ex-8"></a>

Verify both determinant and bracket conditions for the four-dimensional scaling example.

<details>
<summary>Hint 1</summary>

Multiply the four diagonal scaling factors for the determinant.

</details>
<details>
<summary>Hint 2</summary>

Evaluate each matching Q–P bracket separately.

</details>
<details>
<summary>Full solution</summary>

The determinant is $2(1/2)(1)(1)=1$. But the first matching bracket is two and the second is one half, so neither equals its required value one. Preserving total volume does not preserve each canonical position–momentum pairing.

</details>

### Exercise 9 — A driven potential
<a id="canonical-transformations-poisson-brackets-ex-9"></a>

For $H=p^2/(2m)+V(q,t)$ with smooth V, compare phase-volume and energy evolution.

<details>
<summary>Hint 1</summary>

Spatial mixed partials control divergence.

</details>
<details>
<summary>Hint 2</summary>

Explicit time dependence controls the derivative of H along a trajectory.

</details>
<details>
<summary>Full solution</summary>

Hamiltonian divergence remains zero, so the flow preserves phase volume on its existence domain. Energy instead satisfies $dH/dt=V_t(q,t)$ and need not be conserved. Volume and autonomous energy conservation are different structural statements.

</details>

### Exercise 10 — A damped oscillator
<a id="canonical-transformations-poisson-brackets-ex-10"></a>

Find the phase-area multiplier over time t for $\dot q=p$, $\dot p=-q-\gamma p$.

<details>
<summary>Hint 1</summary>

The constant system matrix has trace minus gamma.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the determinant of its fundamental matrix.

</details>
<details>
<summary>Full solution</summary>

The determinant obeys $D'=-\gamma D$ with $D(0)=1$, so $D(t)=e^{-\gamma t}$. For positive gamma the area contracts. This calculation explains why the given damped field does not satisfy the standard Hamiltonian volume theorem.

</details>

## Summary

Poisson brackets encode observable evolution, and canonical transformations preserve the full bracket algebra. Generating functions provide local canonical charts with a necessary time-dependent Hamiltonian correction. Hamiltonian flows preserve the symplectic pairing and hence phase volume, while volume alone does not characterise canonical maps in higher dimensions. Hamilton–Jacobi theory next chooses a generating function that simplifies the transformed evolution as far as possible.

This develops the canonical material retained in the [Hamilton–Jacobi chapter](hamilton-jacobi-theory.md). Taylor's *Classical Mechanics* and Goldstein, Poole and Safko's *Classical Mechanics* are comparison references. The proofs, examples and supported exercises here are original Euler exposition.
