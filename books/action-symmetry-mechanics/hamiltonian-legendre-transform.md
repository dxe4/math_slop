
# Hamiltonian Mechanics and the Legendre Transform

Lagrangian mechanics describes position and velocity. Hamiltonian mechanics replaces velocity by its conjugate momentum and treats position and momentum as independent phase-space coordinates. This change is useful only where the momentum relation can be inverted. Regularity, global invertibility and convexity are different hypotheses; conflating them can turn a local coordinate construction into a false global statement.

Read [the action principle](from-a-path-to-a-number.md), [constraints](constraints-and-lagrange-multipliers.md), multivariable differentiation and the inverse-function theorem. We keep the existing [Hamilton–Jacobi discussion](hamilton-jacobi-theory.md) as the later endpoint-action treatment. The present chapter derives the velocity transform and Hamilton equations in their own right.

## The velocity-to-momentum map

Let $L(q,v,t)$ be $C^2$ on an open coordinate domain, with n configuration and n velocity coordinates. Define
$$
p_i=\frac{\partial L}{\partial v_i},\qquad
W_{ij}=\frac{\partial^2L}{\partial v_i\partial v_j}.
$$
**Definition 7.1 (Regularity).** The Lagrangian is regular at a point when the velocity Hessian W is nonsingular there. It is regular on a domain when this holds at every point of that domain.

For fixed q and t, the inverse-function theorem gives a local inverse $v=v(q,p,t)$ near a regular point. Because the full map retains q and t, its block derivative has nonsingular determinant exactly when W does. Thus the inverse depends smoothly on all three arguments locally, not merely on p with the other coordinates frozen.

A regular momentum map need not be globally one-to-one. In two velocity dimensions, take
$L(v_1,v_2)=e^{v_1}\cos v_2$. Its Hessian is
$$
W=e^{v_1}\begin{pmatrix}\cos v_2&-\sin v_2\\-\sin v_2&-\cos v_2\end{pmatrix},
\qquad \det W=-e^{2v_1}\ne0.
$$
Yet the momentum $(e^{v_1}\cos v_2,-e^{v_1}\sin v_2)$ repeats when $v_2$ increases by $2\pi$. A globally specified momentum does not select a unique velocity without a branch or a restricted domain. This is a mathematical counterexample, not a proposed kinetic energy for an ordinary particle.

## The local transform and its derivatives

**Definition 7.2 (Hamiltonian on an inverse branch).** Where the velocity map has an inverse, set
$$
H(q,p,t)=p\cdot v(q,p,t)-L(q,v(q,p,t),t).
$$
The velocity in this formula is substituted from the chosen branch. It is not an additional independent argument of H.

**Theorem 7.3 (Legendre derivative identities).** On that branch,
$$
H_{p_i}=v_i,\qquad H_{q_i}=-L_{q_i},\qquad
H_t=-L_t,\qquad H_{pp}=W^{-1}.
$$
Derivatives of L on the right are evaluated at the corresponding velocity.

*Proof.* Differentiate the definition, allowing the inverse velocity to depend on all coordinates:
$$
dH=v\cdot dp+p\cdot dv-L_q\cdot dq-L_v\cdot dv-L_tdt.
$$
The two dv terms cancel because $L_v=p$. Comparison of coefficients proves the first three identities. Differentiating $p=L_v(q,v,t)$ with q and t fixed gives $I=Wv_p$, hence $v_p=W^{-1}$. Since $H_p=v$, this is the fourth identity. $\square$

The identity for $H_t$ holds at fixed q and p on the left and fixed q and v on the right before evaluation. Confusing these partial-derivative conventions can introduce spurious terms. The cancellation already accounts for the hidden velocity dependence.

## Hamilton's equations are equivalent to Euler–Lagrange

**Theorem 7.4 (Equivalence on a regular branch).** A sufficiently smooth curve satisfying the Euler–Lagrange equations corresponds to
$$
\dot q_i=H_{p_i},\qquad \dot p_i=-H_{q_i},
$$
while it remains in the branch. Conversely a Hamiltonian solution in that branch reconstructs an Euler–Lagrange solution.

*Proof.* Along an Euler–Lagrange solution set $p=L_v(q,\dot q,t)$. The derivative identities give $H_p=\dot q$ and $-H_q=L_q=\dot p$, proving the forward implication. Conversely, from $\dot q=H_p=v(q,p,t)$, the inverse relation gives $p=L_v(q,\dot q,t)$. The second Hamilton equation then reads $dL_v/dt=L_q$, which is Euler–Lagrange. $\square$

This proof makes no assertion past a point where the inverse branch ceases to exist. Singular velocity Hessians require constraint analysis, rather than an ordinary inverse of W. A change of chart can also be needed even when the physical motion remains regular.

Hamilton's equations are first order in 2n variables. Their initial position and momentum encode the same local initial information as the n second-order Euler–Lagrange equations in position and velocity. Introducing phase space does not double the physical degrees of freedom.

## When the transform is a global convex conjugate

**Theorem 7.5 (A global velocity transform).** Fix q and t. Suppose $L(v)$ is $C^2$ on all of $\mathbb R^n$, its Hessian is positive definite everywhere, and $L(v)/\|v\|\to\infty$ as $\|v\|\to\infty$. Then every p determines a unique velocity, and
$$
H(p)=\sup_v\{p\cdot v-L(v)\}
$$
is finite and attained at that velocity. Moreover $H_p=v$, $H_{pp}=W^{-1}$, and
$$
L(v)=\sup_p\{p\cdot v-H(p)\}.
$$

*Proof.* For fixed p, superlinear growth makes $p\cdot v-L(v)$ tend to negative infinity at large norm, so a maximum is attained on a compact ball. Positive Hessian makes L strictly convex along each nonconstant line segment, so the maximiser is unique. The stationarity equation is $p=L_v$, establishing surjectivity and uniqueness of the velocity map. Regularity gives a local smooth inverse around each p, and uniqueness makes these local inverses agree where they overlap. The derivative identities therefore hold globally.

For the final assertion, the definition gives $H(p)\ge p\cdot v-L(v)$, hence $p\cdot v-H(p)\le L(v)$ for every p. Choose $p=L_v(v)$; the preceding maximum statement then gives equality. Thus the supremum equals L and is attained. $\square$

Positive definiteness supplies uniqueness but not, by itself, surjectivity onto every momentum. Superlinear growth supplies the needed control at infinity. These hypotheses are sufficient rather than necessary; the point is to state a complete theorem before using a global transform.

For comparison, $L(v)=-v^2/2$ is regular and has the algebraic Hamiltonian $H(p)=-p^2/2$ under $p=-v$. Its convex-conjugate supremum would be infinite, since $pv+v^2/2$ is unbounded above. The local mechanical Legendre construction and the convex supremum coincide only under appropriate convexity and attainment assumptions.

## Worked example 1: a mechanical mass matrix

Consider
$$
L(q,v,t)=\tfrac12v^TM(q)v+a(q,t)\cdot v-V(q,t),
$$
with smooth symmetric positive-definite M. The momentum is $p=Mv+a$, so $v=M^{-1}(p-a)$ for every p. Substitution yields
$$
H(q,p,t)=\tfrac12(p-a)^TM^{-1}(p-a)+V.
$$
The velocity-linear term cancels from $p\cdot v-L$, but it remains in the relation between p and mechanical velocity. Thus canonical momentum is not generally Mv.

In the one-dimensional oscillator case, $a=0$, $M=m$ and $V=kq^2/2$, giving $H=p^2/(2m)+kq^2/2$. Hamilton's equations give $\dot q=p/m$ and $\dot p=-kq$, hence $m\ddot q=-kq$. This confirms both the coordinate transform and the reconstructed second-order equation.

The matrix inverse in the formula is a mathematical expression. In numerical work, applying it means solving a linear system with the stated matrix, not necessarily forming an explicit inverse. Conditioning of that solve is an additional numerical question, developed in the matrix-computation book.

## Worked example 2: polar coordinates retain their metric

For a particle in a planar central potential use coordinates $(r,\theta)$ with $r>0$. The kinetic energy is $m(\dot r^2+r^2\dot\theta^2)/2$, so
$$
p_r=m\dot r,\qquad p_\theta=mr^2\dot\theta,
\qquad H=\frac{p_r^2}{2m}+\frac{p_\theta^2}{2mr^2}+V(r).
$$
Hamilton's equations are
$$
\dot r=p_r/m,\quad \dot\theta=p_\theta/(mr^2),\quad
\dot p_r=p_\theta^2/(mr^3)-V'(r),\quad \dot p_\theta=0.
$$
The constant $p_\theta$ is angular momentum, while angular velocity changes with radius. This illustrates why a cyclic coordinate has conserved conjugate momentum rather than necessarily constant coordinate speed.

The velocity Hessian is $\operatorname{diag}(m,mr^2)$, regular for positive r. Its degeneracy at r=0 is a failure of the polar chart. If the Cartesian potential is smooth there, the original physical equations may still be regular; if the potential is singular there, as in the inverse-square problem, a physical domain issue is present as well. Coordinate and force singularities should not be confused.

## Worked example 3: a velocity-linear interaction

In Cartesian planar coordinates take
$$
L=\frac m2(\dot x^2+\dot y^2)+\frac b2(x\dot y-y\dot x),
$$
with constant m positive and b real. Then
$$
p_x=m\dot x-by/2,\qquad p_y=m\dot y+bx/2,
$$
while
$$
H=\frac{(p_x+by/2)^2+(p_y-bx/2)^2}{2m}.
$$
Hamilton's position equations recover the two velocities. The momentum equations give $\dot p_x=b\dot y/2$ and $\dot p_y=-b\dot x/2$. Differentiating the momentum definitions therefore yields
$$
m\ddot x=b\dot y,\qquad m\ddot y=-b\dot x.
$$
The acceleration is perpendicular to velocity, so speed and H are constant. Momentum components are nevertheless not individually constant. Replacing p by m times velocity inside the Hamiltonian would lose the interaction entirely and produce the wrong equation.

The example is the standard algebraic form of a uniform magnetic-type coupling, but no physical interpretation is needed for the transform. It establishes the mathematical distinction between canonical and mechanical momentum directly.

There is also a conserved canonical angular quantity
$$
J=xp_y-yp_x=m(x\dot y-y\dot x)+\frac b2(x^2+y^2).
$$
Its mechanical part alone is not conserved: differentiating it with the derived acceleration equations gives $-b(x\dot x+y\dot y)$. Differentiating the added position term gives the opposite value, so $\dot J=0$. This is an exact calculation for the written velocity-linear model, and it distinguishes the rotation generator from mechanical angular momentum.

The distinction does not contradict the earlier Newtonian angular-momentum balance. The velocity-dependent force has nonzero torque about a general origin, and that balance therefore predicts a changing mechanical angular momentum. A conserved quantity associated with a symmetry of the complete Lagrangian can include additional terms. The canonical formulation records those terms through its momentum definition, rather than silently redefining the mechanical force or declaring every angular momentum conserved.

## Energy and cyclic coordinates

Along any Hamiltonian solution,
$$
\frac{dH}{dt}=H_q\cdot H_p+H_p\cdot(-H_q)+H_t=H_t.
$$
Consequently an autonomous Hamiltonian is conserved. In the corresponding Lagrangian coordinates the same quantity is $E_L=L_v\cdot v-L$, and $dE_L/dt=-L_t$. This is an energy function associated with the written time coordinate and Lagrangian. In moving coordinates it need not equal the original inertial-frame mechanical energy without further interpretation.

If L is independent of a coordinate $q_j$, then $H_{q_j}=-L_{q_j}=0$ and its conjugate momentum is constant. The cyclic-coordinate conclusion is a special symmetry case. The particle Noether chapter develops its variational generalisation; it should not be replaced by a blanket claim that every conserved quantity is an ordinary momentum component.

Adding a total derivative changes the canonical representation without changing fixed-endpoint Euler–Lagrange trajectories. If $L'=L+dF(q,t)/dt$, then
$$
p'=p+F_q,\qquad
H'(q,p',t)=H(q,p'-F_q,t)-F_t.
$$
These relations follow by differentiating L' and substituting into the Legendre definition. Endpoint terms and time dependence matter: the numerical values of canonical momenta can change although the underlying position paths do not.

## A gauge change shifts canonical variables consistently

Consider a particle with velocity-linear interaction
$L=m\|v\|^2/2+eA(q,t)\cdot v-e\phi(q,t)$, where the potentials are
sufficiently smooth and m>0. Choose a smooth scalar function χ and replace
A by A+∇χ and φ by φ−χₜ. The new Lagrangian differs by the total
derivative e times dχ(q(t),t)/dt. Its fixed-endpoint Euler–Lagrange equations
therefore describe the same physical trajectories. The velocity Hessian is
still mI, so the Legendre transform remains regular.

The canonical momentum nevertheless changes: P=p+e∇χ. Mechanical momentum
mv=p−eA is invariant when both p and A are transformed. Computing the
new Hamiltonian at the same physical position and velocity gives
$$K(q,P,t)=\frac{\|P-e(A+\nabla\chi)\|^2}{2m}
+e(\phi-\chi_t)
=H(q,P-e\nabla\chi,t)-e\chi_t.$$
Thus a time-dependent gauge change can alter the numerical Hamiltonian
function while leaving physical motion and mechanical kinetic energy unchanged.
Equating every Hamiltonian value with one gauge-independent measured energy
would ignore that explicit time dependence.

This transformation can be verified as canonical through the type-two
generating function q·P−eχ(q,t). Its configuration derivative gives the old
momentum p=P−e∇χ; its P derivative leaves the position unchanged; its
explicit time derivative supplies precisely the negative eχₜ term in K.
The extra Hamiltonian term is therefore the same endpoint-action bookkeeping
developed in the canonical-transformation chapter, rather than an additional
force inserted by hand.

For time-independent χ the Hamiltonian numerical value at corresponding
states is unchanged, although the coordinates called momentum differ. For
time-dependent χ even that value comparison must include the time term.
In either case, observable predictions should be expressed through the
transformed model consistently. Shifting the momentum while leaving the
potential and Hamiltonian formula fixed describes a different model.

For the electromagnetic interpretation, the electric field combination
minus the potential gradient minus the time derivative of the vector
potential is unchanged: the two mixed derivatives of χ cancel.
The magnetic curl is unchanged because the curl of its gradient vanishes
on the smooth domain. Thus the altered canonical coordinates and explicit
Hamiltonian time term are consistent with the same force field. Domain
and smoothness remain necessary when making these derivative cancellations;
a locally defined scalar does not automatically provide one global gauge.

The example strengthens the distinction between regularity, canonical coordinates
and physical interpretation. The velocity Hessian controls invertibility of
the Legendre map; a total derivative controls representation; and a chosen
observable determines which numerical quantities should be compared across
representations. None of those roles can replace the others.

## A bounded velocity domain can still map onto all momenta

For a massive relativistic free particle,
the Lagrangian is minus mc² times
the square root of one minus ‖v‖²/c²,
defined on the open speed ball.
Its momentum is mv divided by that
square root. Solving gives
$v=cp/\sqrt{m^2c^2+\|p\|^2}$ and Hamiltonian
$H=\sqrt{m^2c^4+c^2\|p\|^2}$. Direct substitution
verifies the transform and shows every
finite momentum corresponds to speed below c.

The whole-space superlinear theorem above
does not apply verbatim because this
velocity domain is a ball. Global
invertibility here follows from the
explicit inverse instead. At small
momentum the Hamiltonian is rest energy
plus the Newtonian kinetic term to
leading order. The constant rest term
does not alter Hamilton's equations.
Setting mass to zero inside the
original Lagrangian destroys this regular
velocity transform, so a massless
model needs a different formulation.
The example distinguishes a convenient
sufficient theorem from the actual
domain-specific proof of a transform.

## Exercises

### Exercise 1 — A shifted velocity
<a id="hamiltonian-legendre-transform-ex-1"></a>

For $L=m v^2/2+av-V(q)$ with constant m positive and a constant, find p and H.

<details>
<summary>Hint 1</summary>

Differentiate with respect to velocity before solving for it.

</details>
<details>
<summary>Hint 2</summary>

Substitute the solved velocity in both terms of the transform.

</details>
<details>
<summary>Full solution</summary>

The momentum is $p=mv+a$, hence $v=(p-a)/m$. The Hamiltonian is $(p-a)^2/(2m)+V(q)$. The shift does not alter the Hessian m but changes the canonical momentum assigned to a given velocity.

</details>

### Exercise 2 — A nonlinear convex transform
<a id="hamiltonian-legendre-transform-ex-2"></a>

For $L(v)=v^4/4+v^2/2$, express H through the unique root of $v^3+v=p$ and find its second derivative.

<details>
<summary>Hint 1</summary>

The derivative of the momentum map is strictly positive.

</details>
<details>
<summary>Hint 2</summary>

Use the stationary equation to simplify pv minus L.

</details>
<details>
<summary>Full solution</summary>

The map $v^3+v$ is strictly increasing and tends to both infinities, so each p has a unique root v. The transform is $H=3v^4/4+v^2/2$, and $H_{pp}=1/(3v^2+1)>0$. No explicit cubic radical formula is needed to define or differentiate it.

</details>

### Exercise 3 — Regularity without convexity
<a id="hamiltonian-legendre-transform-ex-3"></a>

Explain why $L=-v^2/2$ is regular but its mechanical transform is not its finite convex conjugate.

<details>
<summary>Hint 1</summary>

Compute the Hessian and momentum map.

</details>
<details>
<summary>Hint 2</summary>

Inspect the behaviour of pv minus L at large velocity.

</details>
<details>
<summary>Full solution</summary>

The Hessian is -1, so the inverse relation $v=-p$ exists and gives mechanical H equal to $-p^2/2$. But $pv-L=pv+v^2/2$ grows without bound, so its supremum is infinite. Nonsingularity alone does not justify a convex-conjugate formula.

</details>

### Exercise 4 — A cyclic angle
<a id="hamiltonian-legendre-transform-ex-4"></a>

In the polar example, does constant angular momentum imply constant angular velocity?

<details>
<summary>Hint 1</summary>

The momentum includes a factor depending on radius.

</details>
<details>
<summary>Hint 2</summary>

Compare two different radii at the same nonzero momentum.

</details>
<details>
<summary>Full solution</summary>

No. The relation is $\dot\theta=p_\theta/(mr^2)$. With nonzero fixed momentum, changing radius changes angular velocity inversely with its square. A circular orbit has constant radius and therefore constant angular velocity, but that is an extra property.

</details>

### Exercise 5 — Explicit time dependence
<a id="hamiltonian-legendre-transform-ex-5"></a>

For $L=m v^2/2-k(t)q^2/2$, find the derivative of H along a solution.

<details>
<summary>Hint 1</summary>

The momentum relation is unchanged from a usual oscillator.

</details>
<details>
<summary>Hint 2</summary>

Use the partial time derivative of H.

</details>
<details>
<summary>Full solution</summary>

Here $H=p^2/(2m)+k(t)q^2/2$, so along a Hamiltonian solution $dH/dt=k'(t)q^2/2$. Equivalently $-L_t$ gives the same expression. The written time dependence allows energy transfer through the changing stiffness.

</details>

### Exercise 6 — A total derivative
<a id="hamiltonian-legendre-transform-ex-6"></a>

Add $d(cq^2/2)/dt$ to an oscillator Lagrangian, with c constant. Find the new momentum and Hamiltonian.

<details>
<summary>Hint 1</summary>

The added term is cqv.

</details>
<details>
<summary>Hint 2</summary>

Use the momentum shift before evaluating the original Hamiltonian.

</details>
<details>
<summary>Full solution</summary>

The new momentum is $p'=mv+cq$. Since F has no explicit time dependence, the new Hamiltonian is $(p'-cq)^2/(2m)+kq^2/2$. The position trajectories are unchanged under fixed-endpoint variations, while the canonical coordinate used for momentum has shifted.

</details>

### Exercise 7 — Inverse Hessians
<a id="hamiltonian-legendre-transform-ex-7"></a>

Prove $H_{pp}=W^{-1}$ directly from the inverse momentum relation.

<details>
<summary>Hint 1</summary>

Differentiate p equal to the velocity gradient of L.

</details>
<details>
<summary>Hint 2</summary>

Then use H sub p equal to velocity.

</details>
<details>
<summary>Full solution</summary>

At fixed q and t, differentiating $p=L_v(q,v(p),t)$ gives $I=Wv_p$. Regularity implies $v_p=W^{-1}$. Since the transform derivative is $H_p=v$, differentiating again gives $H_{pp}=W^{-1}$ on the chosen inverse branch.

</details>

### Exercise 8 — The reverse supremum
<a id="hamiltonian-legendre-transform-ex-8"></a>

Under Theorem 7.5, why does $p\cdot v-H(p)$ attain its supremum at $p=L_v(v)$?

<details>
<summary>Hint 1</summary>

Start with the defining supremum for H.

</details>
<details>
<summary>Hint 2</summary>

Equality occurs when the selected velocity maximises that definition.

</details>
<details>
<summary>Full solution</summary>

For any p the definition gives $H(p)\ge p\cdot v-L(v)$, hence $p\cdot v-H(p)\le L(v)$. At $p=L_v(v)$, strict convexity makes v the unique maximiser defining H, so equality holds. Thus this p attains the reverse supremum.

</details>

### Exercise 9 — Perpendicular acceleration
<a id="hamiltonian-legendre-transform-ex-9"></a>

Use the velocity-linear example to show directly that speed is constant.

<details>
<summary>Hint 1</summary>

Differentiate the sum of the two squared velocity components.

</details>
<details>
<summary>Hint 2</summary>

Insert both acceleration equations with their opposite signs.

</details>
<details>
<summary>Full solution</summary>

The derivative is $2\dot x(b\dot y/m)+2\dot y(-b\dot x/m)=0$. Therefore $\dot x^2+\dot y^2$ is constant. The direction can rotate, so the conserved speed does not imply vanishing force or constant canonical momenta.

</details>

### Exercise 10 — A singular coordinate
<a id="hamiltonian-legendre-transform-ex-10"></a>

For $L(v_1,v_2)=v_1^2/2$, why does the ordinary transform fail to give a Hamiltonian on unrestricted four-dimensional phase space?

<details>
<summary>Hint 1</summary>

Find both momenta.

</details>
<details>
<summary>Hint 2</summary>

One velocity never appears in the momentum relation.

</details>
<details>
<summary>Full solution</summary>

The momenta are $p_1=v_1$ and $p_2=0$, with Hessian $\operatorname{diag}(1,0)$. No inverse determines $v_2$, and momenta are constrained to the surface $p_2=0$. The regular-branch construction does not apply; further constraint or gauge treatment is required rather than assigning an ordinary inverse Hessian.

</details>

## Summary

A regular velocity Hessian gives a local momentum coordinate, and the Legendre derivative identities prove equivalence of Hamilton and Euler–Lagrange equations. Positive convex curvature and growth at infinity can strengthen this to a global conjugate transform. Canonical momentum, mechanical velocity and energy have distinct meanings, especially in curvilinear or velocity-linear models. Canonical transformations next identify which phase-space coordinate changes preserve the Hamiltonian structure and its volume law.

The development refines the Legendre material retained in the later [Hamilton–Jacobi chapter](hamilton-jacobi-theory.md). Taylor's *Classical Mechanics* and Goldstein, Poole and Safko's *Classical Mechanics* are the comparison references; the worked derivations and exercises here are original Euler exposition.
