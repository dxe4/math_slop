
# Geometric Numerical Integration

Numerical methods for differential equations approximate continuous time by discrete steps. For Hamiltonian systems, generic methods often fail to preserve the geometric structure of phase space: energy drifts, symplectic areas distort, and long-time behavior becomes unreliable. Geometric numerical integration designs methods that respect the underlying geometry---symplecticity, reversibility, and conservation laws. This chapter surveys symplectic integrators, their backward error analysis, and applications to mechanics.

## Why geometric integration matters

Consider the harmonic oscillator $\dot{q} = p$, $\dot{p} = -q$ integrated with the explicit Euler method:

$$q_{n+1} = q_{n} + hp_{n}, \qquad p_{n+1} = p_{n} - hq_{n}.$$

The method is first-order accurate, but over many steps the energy $E_{n} = (q_{n}^{2} + p_{n}^{2})/2$ grows exponentially: $E_{n} \approx E_{0}(1 + h^{2})^{n}$. The phase portrait spirals outward.

The implicit Euler method spirals inward. Neither preserves the closed orbits of the true system.

**Definition 12.1 (Symplectic integrator).** A numerical method for a Hamiltonian system is *symplectic* if the one-step map $\Phi_{h}: (q_{n}, p_{n}) \mapsto (q_{n+1}, p_{n+1})$ satisfies $\Phi_{h}^{*}\omega = \omega$, where $\omega = \sum_{i}dq_{i} \wedge dp_{i}$.

## Symplectic Euler methods

The **symplectic Euler-A** method updates momentum first, then position:

$$p_{n+1} = p_{n} - h\frac{\partial H}{\partial q}(q_{n}, p_{n+1}), \qquad q_{n+1} = q_{n} + h\frac{\partial H}{\partial p}(q_{n}, p_{n+1}).$$

The **symplectic Euler-B** method updates position first:

$$q_{n+1} = q_{n} + h\frac{\partial H}{\partial p}(q_{n+1}, p_{n}), \qquad p_{n+1} = p_{n} - h\frac{\partial H}{\partial q}(q_{n+1}, p_{n}).$$

Both are first-order accurate and symplectic. For separable Hamiltonians $H = T(p) + V(q)$, symplectic Euler-A reduces to:

$$p_{n+1} = p_{n} - hV'(q_{n}), \qquad q_{n+1} = q_{n} + hT'(p_{n+1}).$$

## Worked example: harmonic oscillator with symplectic Euler

For $H = \frac{1}{2}(p^{2} + q^{2})$, symplectic Euler-A gives:

$$p_{n+1} = p_{n} - hq_{n}, \qquad q_{n+1} = q_{n} + hp_{n+1} = q_{n} + h(p_{n} - hq_{n}) = q_{n} + hp_{n} - h^{2}q_{n}.$$

The update matrix is

$$\begin{pmatrix} q_{n+1} \\ p_{n+1} \end{pmatrix} = \begin{pmatrix} 1 - h^{2} & h \\ -h & 1 \end{pmatrix} \begin{pmatrix} q_{n} \\ p_{n} \end{pmatrix}.$$

The determinant of this matrix is $(1 - h^{2}) \cdot 1 - h(-h) = 1 - h^{2} + h^{2} = 1$. Area preservation (symplecticity) is verified. The eigenvalues satisfy $\lambda^{2} - (2 - h^{2})\lambda + 1 = 0$. For $0 < |h| < 2$, the eigenvalues form a nonreal conjugate pair with $|\lambda| = 1$, so the orbit is stable. 

## The Stormer--Verlet method

For separable Hamiltonians, the **Stormer--Verlet** (or leapfrog) method is:

$$p_{n+1/2} = p_{n} - \frac{h}{2}V'(q_{n}),$$
$$q_{n+1} = q_{n} + hT'(p_{n+1/2}),$$
$$p_{n+1} = p_{n+1/2} - \frac{h}{2}V'(q_{n+1}).$$

This is a second-order symplectic method. It is time-reversible and widely used in molecular dynamics and celestial mechanics.

## Worked example: double-well potential

Consider $H = \frac{p^{2}}{2} + V(q)$ with $V(q) = \frac{1}{4}(q^{2} - 1)^{2}$. The potential has minima at $q = \pm 1$ and a local maximum at $q = 0$.

For initial conditions $(q,p)=(1,0.5)$, the energy is $E=0.125< V(0)=0.25$, so the particle remains in the right-hand well in the exact dynamics. A Stormer--Verlet computation can test whether a chosen step reproduces this bounded motion. Any quoted error size or step count must come from an identified run; it cannot be inferred from the method's order alone.

## Backward error analysis

A symplectic method can be described by a formal *modified* Hamiltonian locally; a suitably truncated modified flow approximates the numerical step under the hypotheses below.

**Backward-error principle.** For analytic Hamiltonians and symplectic methods on a region where the numerical trajectory remains controlled, one can truncate a formal modified Hamiltonian

$$\tilde H_h=H+h^pH_{p+1}+h^{p+1}H_{p+2}+\cdots$$

so that its time-$h$ flow matches the numerical step to high order. With a suitable optimal truncation and sufficiently small fixed $h$, the defect can be exponentially small over a long but finite interval. These hypotheses and time limits matter: the formal series need not converge, and the claim is not uniform for every smooth Hamiltonian.

For the symplectic Euler method applied to $H = p^{2}/(2) + V(q)$, the modified Hamiltonian is

$$\tilde{H}_{h} = H - \frac{h}{2}pV'(q) + O(h^{2}).$$

Under the hypotheses and finite-time bounds above, the numerical solution nearly conserves a suitably truncated $\tilde{H}_{h}$, and $H$ stays close to its initial value. Symplecticity alone does not guarantee bounded or oscillatory energy error.

## Higher-order methods

**Composition methods:** A second-order symplectic method can be composed with itself using the Suzuki--Yoshida scheme to obtain methods of order 4, 6, etc.

**Runge--Kutta methods:** The Gauss--Legendre Runge--Kutta methods (implicit, based on collocation at Gaussian points) are symplectic. The 2-stage Gauss method is fourth-order and symplectic.

For separable Hamiltonians, **partitioned Runge--Kutta methods** and **symplectic partitioned Runge--Kutta (SPRK)** methods provide explicit higher-order symplectic integrators.

## Variable step sizes and symplecticity

Standard symplectic integrators use fixed step sizes. Variable step sizes can destroy symplecticity unless carefully constructed. One approach is to use a time-reparameterization: introduce a fictitious time variable $\tau$ and treat the step size as a dynamical variable.

## Common errors

- **Assuming symplecticity implies energy conservation:** Symplecticity preserves the symplectic form, not necessarily the original energy. Near conservation of a truncated modified Hamiltonian needs the regularity, controlled trajectory, sufficiently small fixed step and finite-time hypotheses above; arbitrary step sizes need not give bounded energy error. 
- **Ignoring implicit solves and stability hypotheses:** The general symplectic Euler-A formula is implicit in $p_{n+1}$, and Euler-B is implicit in $q_{n+1}$; they become explicit for the separable form $H=T(p)+V(q)$. Gauss--Legendre Runge--Kutta methods are A-stable for the linear test equation, but that is not unconditional stability for every nonlinear or stiff Hamiltonian. Step size, solver convergence, and problem structure still matter.
- **Ignoring time-reversibility:** Not all symplectic methods are time-reversible. Reversibility is important for long-time statistical properties.

## Preparation and the meaning of structure

Required preparation is the [one-step methods chapter](initial-value-methods.md), matrix transposes and determinants, multivariable differentiation, and canonical Hamilton equations. We introduce the symplectic criterion needed here rather than assume a course in differential geometry. Coordinates are $z=(q,p)\in\mathbb R^{2d}$ and
$$J=\begin{pmatrix}0&I\\-I&0\end{pmatrix},\qquad z'=J\nabla H(z).$$
Assume the Hamiltonian is sufficiently differentiable on an open domain and that each exact or numerical substep remains in that domain. Collisions and singular potentials need a separate domain and step analysis.

**Definition 1 (Canonical symplectic map).** A differentiable locally invertible map $\Phi$ is symplectic if
$$D\Phi(z)^{\mathsf T}J\,D\Phi(z)=J$$
at every point of its domain. This is the matrix form of preserving $\sum_i dq_i\wedge dp_i$. It preserves a bilinear pairing on tangent perturbations, not a particular energy function.

**Theorem 2 (Exact Hamiltonian structure).** If $H$ is twice continuously differentiable and its flow exists on the region considered, its time maps are symplectic and conserve $H$.

*Proof.* The energy derivative is $\nabla H^{\mathsf T}J\nabla H=0$ because $J^{\mathsf T}=-J$. For symplecticity let $Y(t)$ be the derivative of the flow with respect to its initial state. Then $Y'=JS(t)Y$, where $S(t)=H''(z(t))$ is symmetric. Hence
$$\frac{d}{dt}(Y^{\mathsf T}JY)
=Y^{\mathsf T}\big((JS)^{\mathsf T}J+J(JS)\big)Y=0.$$
Indeed $(JS)^{\mathsf T}J=S$ and $J(JS)=-S$. Since $Y(0)=I$, the preserved matrix is $J$. ∎

Taking determinants in the criterion gives determinant squared equal to one. A near-identity symplectic step has determinant one by continuity. In two dimensions $M^{\mathsf T}JM=(\det M)J$, so orientation-preserving area preservation suffices. In dimension four or higher a determinant-one test alone is insufficient: it checks volume but misses the pairings between directions.

## Deriving the kick and drift

For $H=T(p)+V(q)$, split the vector field into a potential part and a kinetic part. The exact potential flow for duration $h$ is the kick
$$K_h(q,p)=(q,p-h\nabla V(q)),$$
because $q$ remains constant during that subsystem. The exact kinetic flow is the drift
$$D_h(q,p)=(q+h\nabla T(p),p).$$
Thus momentum-first symplectic Euler is the composition $D_h\circ K_h$. It follows the two subproblems exactly, but their composition usually differs from the full flow.

**Proposition 3 (Shears and compositions).** If $T,V$ are twice continuously differentiable, kicks, drifts, and every defined composition of them are symplectic.

*Proof.* The kick Jacobian is
$$DK_h=\begin{pmatrix}I&0\\-hV''(q)&I\end{pmatrix}.$$
Multiplying out $DK_h^{\mathsf T}JDK_h$ gives $J$, since the Hessian is symmetric. The drift Jacobian is
$\begin{pmatrix}I&hT''(p)\\0&I\end{pmatrix}$ and the same computation applies. If $A^{\mathsf T}JA=J$ and $B^{\mathsf T}JB=J$, then
$(AB)^{\mathsf T}J(AB)=B^{\mathsf T}(A^{\mathsf T}JA)B=J$.
The chain rule completes the composition proof. ∎

For nonseparable $H$ the displayed Euler-A equations remain symplectic whenever they define a differentiable local map. To see this, introduce $S(q,P)=q^{\mathsf T}P+hH(q,P)$. The equations $p=S_q$, $Q=S_P$ give precisely $P=p-hH_q(q,P)$ and $Q=q+hH_p(q,P)$. Taking an exterior derivative of $dS=p^{\mathsf T}dq+Q^{\mathsf T}dP$ yields
$\sum dQ_i\wedge dP_i=\sum dq_i\wedge dp_i$.
The implicit-function theorem requires the mixed step Jacobian to be invertible; without that, the equations can fail to select one local branch. An inexact solve may also spoil exact symplecticity.

**Worked example 1 (An exactly preserved nearby quadratic).** The momentum-first oscillator matrix already derived above preserves
$$\widetilde H_h(q,p)=\frac12(q^2+p^2-hqp).$$
To verify it, substitute $P=p-hq$ and $Q=q+hP$. Expanding $Q^2+P^2-hQP$ and collecting powers of $q,p$ returns $q^2+p^2-hqp$. For $|h|<2$, the associated symmetric matrix has eigenvalues $1\pm |h|/2>0$. Its level sets are bounded ellipses, so all iterates are bounded. The physical energy is comparable to this invariant, but is not equal to it. At $h=2$ the quadratic becomes semidefinite and the update has a repeated eigenvalue minus one with a nontrivial Jordan block; generic solutions grow linearly. Including that endpoint as bounded stability would be wrong.

## Why symmetric half steps give second order

The kick–drift–kick formula is
$$\Phi_h=K_{h/2}\circ D_h\circ K_{h/2}.$$
The rightmost map acts first. Proposition 3 proves symplecticity. Since $K_h^{-1}=K_{-h}$ and $D_h^{-1}=D_{-h}$, reversing the product gives
$$\Phi_h^{-1}=K_{-h/2}\circ D_{-h}\circ K_{-h/2}=\Phi_{-h}.$$
This is self-adjointness, often called time symmetry. Physical momentum reversal additionally uses $T(-p)=T(p)$ and an autonomous position-dependent potential.

**Proposition 4 (Verlet local order).** If $T,V$ have sufficiently bounded derivatives through order three on a common neighborhood of the step, kick–drift–kick has local error $O(h^3)$ and hence global order two under a finite-time Lipschitz propagation bound.

*Proof.* Write $a=\nabla T(p)$, $b=\nabla V(q)$, $A=T''(p)$, $B=V''(q)$. Its half kick is $p_*=p-hb/2$. Taylor expansion gives
$$Q=q+h\nabla T(p_*)=q+ha-\frac{h^2}{2}Ab+O(h^3),$$
and the final kick gives
$$P=p_*-\frac h2\nabla V(Q)
=p-hb-\frac{h^2}{2}Ba+O(h^3).$$
The exact equations have $q'=a$, $p'=-b$, $q''=-Ab$ and $p''=-Ba$, so these expansions match their Taylor flow through degree two. Uniform remainder bounds give local order three. Applying a finite-time error recurrence to this locally Lipschitz step gives global order two, exactly as in the one-step convergence argument. ∎

For quadratic kinetic energy $T(p)=p^{\mathsf T}M^{-1}p/2$, eliminate the half-step momentum to obtain the position recurrence
$$q_{n+1}-2q_n+q_{n-1}=-h^2M^{-1}\nabla V(q_n).$$
Recovering momenta requires the stated convention: centered differences correspond to the full-step momenta, while staggered momenta live at half times. Mixing those conventions creates a false energy defect even with correct position updates.

**Worked example 2 (A double-well step with all quantities specified).** For the seed double-well potential, $V'(q)=q(q^2-1)$. Start at $(q,p)=(1,1/2)$ and choose $h=1/10$. The first kick is zero, so $p_*=1/2$ and $Q=21/20$. Then
$$V'(Q)=\frac{21}{20}\left(\frac{441}{400}-1\right)
=\frac{861}{8000},\qquad
P=\frac12-\frac1{20}\frac{861}{8000}
=\frac{79139}{160000}.$$
The new energy is exactly
$$H(Q,P)=\frac12\left(\frac{79139}{160000}\right)^2+
\frac14\left(\frac{41}{400}\right)^2.$$
This expression can be compared rationally with $1/8$. It is a one-step algebraic fixture; it does not assert that an unidentified long run stays in the right well or meets a quoted tolerance. The exact well confinement follows from energy below the barrier; transferring that conclusion to a numerical orbit needs a proved energy margin or explicit finite computation.

For the oscillator Verlet gives
$$\begin{pmatrix}Q\\P\end{pmatrix}
=\begin{pmatrix}
1-h^2/2&h\\
-h(1-h^2/4)&1-h^2/2
\end{pmatrix}\begin{pmatrix}q\\p\end{pmatrix}.$$
Its determinant is one, trace $2-h^2$, and eigenvalues lie on the unit circle with no defective repetition for $0<|h|<2$. At the endpoints a Jordan block again invalidates boundedness in general. Structure preservation therefore coexists with a finite oscillator step restriction.

## Modified equations with their quantifiers exposed

For a first-order method write a formal modified field $f_h=f+hf_1+\cdots$. Its time-$h$ flow expands as
$$z+h f(z)+h^2\bigl(f_1(z)+\tfrac12 f'(z)f(z)\bigr)+O(h^3).$$
For momentum-first Euler with $T=p^2/(2m)$, the discrete map is
$$Q=q+\frac hm p-\frac{h^2}{m}V'(q),\qquad P=p-hV'(q).$$
Matching coefficients gives
$$f_1=\left(-\frac{V'}{2m},\frac{pV''}{2m}\right).$$
It is Hamiltonian with $H_1=-pV'/(2m)$ because $(\partial_pH_1,-\partial_qH_1)$ is exactly that vector. This derives the seed's first correction, including its sign and mass dependence. Formal matching explains nearby dynamics to a stated order; it does not prove the infinite series converges.

For symmetric Verlet the formal modified Hamiltonian contains only even powers of $h$. One way to understand the parity is that the formal generator of a symmetric map is odd in $h$ before division by $h$. Under sufficient finite differentiability one can match a finite number of terms on a compact region. With analyticity on a neighborhood, fixed sufficiently small step, controlled trajectories and quantified derivative bounds, optimal truncation supports much stronger finite-time conclusions. The complete backward-error theorem is an external dependency, not proved by the preceding first-order coefficient calculation. Hairer's paper linked in Sources gives the finite-truncation statement and explains why the highest frequency times the step is the relevant small quantity in oscillatory systems.

A nonresonance assumption may be needed in further long-time or highly oscillatory results. It is not an automatic consequence of symplecticity. Near collisions derivatives grow; near a separatrix a small energy change can alter qualitative motion; large frequency products invalidate a naive small-step expansion. Roundoff and approximate implicit solves add perturbations outside exact-map conservation.

## Stiffness, splitting and constraints

The second seed emphasizes a separate issue: strongly decaying modes favor L-stability, whereas Hamiltonian oscillations favor nondissipative geometry. Backward Euler is L-stable and trapezoidal is A-stable but leaves a stiff limiting multiplier of minus one. Multistep starting values, variable coefficients, rejected steps and stiff order reduction belong to the [multistep chapter](multistep-stiff-dae-methods.md). Compare observed output convergence and total function, Jacobian and factorization work, rather than using order or step count alone.

For $y'=Ay+g(y)$, a splitting can treat the linear part exactly and the nonlinear part separately. If both subflows are smooth and solved exactly, a symmetric half–full–half composition has local order three by the same Taylor comparison used above. If constant matrices $A$ and $B$ commute, $e^{hA}e^{hB}=e^{h(A+B)}$ and exact splitting error vanishes. Noncommutation, incompatible boundary conditions, discontinuities and inaccurate subsolves can reduce the order. An implicit-explicit or exponential method must state which terms were assigned to each part; a favorable test for one split does not certify a different one.

Holonomic constraints $g(q)=0$ require tangent momenta as well as positions. The differentiated condition is $g_q(q)M^{-1}p=0$. Projecting an unconstrained endpoint onto the surface may satisfy the first equation while violating the second or changing energy and order. SHAKE/RATTLE schemes solve multiplier equations so that both constraints and discrete geometry are treated coherently under regular constraint Jacobians. Their full derivation and convergence theorem are outside this chapter and require the geometric-integration references. Record both position and velocity residuals and every solve tolerance.

## A step specification and a finite claim

~~~text
verlet_step(q, p, h, gradV, inverse_mass):
    p_half = p - (h/2)*gradV(q)
    Q = q + h*inverse_mass(p_half)
    P = p_half - (h/2)*gradV(Q)
    require all states and forces finite and inside their domains
    return Q, P
~~~

For unit mass, oscillator potential $V(q)=q^2/2$, initial $(1,0)$ and $h=1/10$, the expected exact output is $(199/200,-399/4000)$. The intermediate momentum is $-1/20$, the position is $1-1/200$, and the final momentum subtracts $199/4000$. These rational values specify an implementable fixture without claiming an executed result.

**Worked example 3 (Phase error despite bounded energy).** The Verlet oscillator eigenangle $\theta$ satisfies $\cos\theta=1-h^2/2$, so $\theta=2\arcsin(h/2)$ for $0<h<2$. Expanding gives $\theta=h+h^3/24+O(h^5)$. After $n=T/h$ steps the phase bias is $T h^2/24+O(Th^4)$ on a suitable fixed region. The orbit can remain bounded on a nearby ellipse while its phase drifts with elapsed time. An energy-only plot cannot certify the state at a prescribed late time.

## Practice exercises

### Exercise 1
<a id="geometric-numerical-integration-ex-1"></a>

Show that the explicit Euler method for the harmonic oscillator is not symplectic by computing the Jacobian determinant of the one-step map.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the explicit map's determinant.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** In two dimensions symplecticity requires determinant one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Explicit Euler: $q_{n+1} = q_{n} + hp_{n}$, $p_{n+1} = p_{n} - hq_{n}$. The Jacobian is $J = \begin{pmatrix}1 & h \\ -h & 1\end{pmatrix}$ with $\det J = 1 + h^{2} \neq 1$. Since $\det J \neq 1$, the method is not symplectic.

</details>

### Exercise 2
<a id="geometric-numerical-integration-ex-2"></a>

Implement the Stormer--Verlet method for the pendulum equation $\ddot{\theta} + \sin\theta = 0$ with $\theta(0) = \pi/2$, $\dot{\theta}(0) = 0$, and $h = 0.01$. Verify that the energy $E = \dot{\theta}^{2}/2 - \cos\theta$ is approximately conserved.

<details>
<summary>Hint 1</summary>

**Hint.** Start with the half momentum kick.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Substitute into the second kick before expanding energy.

</details>

<details>
<summary>Solution</summary>

**Solution.** In Hamiltonian form: $\dot{\theta} = p$, $\dot{p} = -\sin\theta$. Stormer--Verlet gives $p_{1/2}=-h/2$, $\theta_1=\pi/2-h^2/2$, and $p_1=-h/2-(h/2)\cos(h^2/2)$. Expanding the exact one-step energy,

$$E_1=\frac{p_1^2}{2}-\cos\theta_1=-\frac{h^6}{24}+O(h^{10}),$$

while $E_0=0$. This particularly small first-step defect comes from the chosen initial data; global second-order convergence must be checked over a fixed time interval rather than inferred from this cancellation alone.

</details>

### Exercise 3
<a id="geometric-numerical-integration-ex-3"></a>

Prove that the Stormer--Verlet method is time-reversible: applying the method with step $-h$ to $(q_{n+1}, p_{n+1})$ yields $(q_{n}, p_{n})$.

<details>
<summary>Hint 1</summary>

**Hint.** Invert each substep.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Reverse the order of the three inverses.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Stormer--Verlet step with $-h$ from $(q_{n+1}, p_{n+1})$: $p_{n+1/2}' = p_{n+1} + \frac{h}{2}V'(q_{n+1}) = p_{n+1/2}$. Then $q_{n}' = q_{n+1} - hT'(p_{n+1/2}') = q_{n+1} - hT'(p_{n+1/2}) = q_{n}$. Finally, $p_{n}' = p_{n+1/2}' + \frac{h}{2}V'(q_{n}') = p_{n+1/2} + \frac{h}{2}V'(q_{n}) = p_{n}$.

</details>

### Exercise 4
<a id="geometric-numerical-integration-ex-4"></a>

For the symplectic Euler-A method applied to $H = p^{2}/(2m) + V(q)$, derive the modified Hamiltonian to $O(h)$.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the map to second order.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Match its flow with an unknown first modified Hamiltonian term.

</details>

<details>
<summary>Solution</summary>

**Solution.** The symplectic Euler-A map is $p_{n+1} = p_{n} - hV'(q_{n})$, $q_{n+1} = q_{n} + \frac{h}{m}p_{n+1}$. Expanding in $h$ and matching with the flow of a modified Hamiltonian gives $\tilde{H} = H - \frac{h}{2m}pV'(q) + O(h^{2})$.

</details>

### Exercise 5
<a id="geometric-numerical-integration-ex-5"></a>

Explain why symplectic integrators are particularly important for long-time simulations of the solar system.

<details>
<summary>Hint 1</summary>

**Hint.** Name the preserved form.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** State all assumptions behind the near-energy conclusion.

</details>

<details>
<summary>Solution</summary>

**Solution.** The solar system is modeled as a nearly integrable Hamiltonian system, and secular numerical energy drift can contaminate very long integrations. Symplectic methods preserve the symplectic form exactly and, under suitable step-size and regularity hypotheses, backward-error analysis relates a finite-time computation to a nearby modified Hamiltonian. This often improves long-time qualitative fidelity, but it does not guarantee that all KAM tori, resonances, or orbital boundedness of the full Solar System are preserved for billions of years.

</details>

## Additional exercises from the stiff and geometric route

### Exercise 6: Euler interval
<a id="geometric-numerical-integration-ex-6"></a>

For $\lambda=-20$, when is explicit Euler stable?

<details>
<summary>Hint 1</summary>

**Hint.** Find its multiplier.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve a real modulus inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** For positive steps, absolute stability requires $|1-20h|≤1$, giving $0<h≤0.1$. Strict decay requires $0<h<0.1$; at $h=0.1$ the multiplier is $-1$, so the mode is bounded without decay.

</details>

### Exercise 7: Backward multiplier
<a id="geometric-numerical-integration-ex-7"></a>

For the same equation, find the backward Euler multiplier.

<details>
<summary>Hint 1</summary>

**Hint.** Collect the new value on the left.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve the scalar implicit equation.

</details>

<details>
<summary>Solution</summary>

**Solution.** The multiplier is $1/(1+20h)$, with magnitude below one for all $h>0$. Stability alone does not resolve the transient.

</details>

### Exercise 8: Trapezoidal stiff limit
<a id="geometric-numerical-integration-ex-8"></a>

What is the trapezoidal multiplier limit as the step grows for that equation?

<details>
<summary>Hint 1</summary>

**Hint.** Write its rational stability function.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide numerator and denominator by h.

</details>

<details>
<summary>Solution</summary>

**Solution.** The multiplier $(1-10h)/(1+10h)$ tends to $-1$, so an unresolved component alternates rather than being strongly damped.

</details>

### Exercise 9: A and L stability
<a id="geometric-numerical-integration-ex-9"></a>

State the distinction between A-stability and L-stability.

<details>
<summary>Hint 1</summary>

**Hint.** One property concerns the entire left half-plane.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The other adds a stiff-limit requirement.

</details>

<details>
<summary>Solution</summary>

**Solution.** A-stability bounds multipliers on the left half-plane. L-stability additionally forces the multiplier to zero as its argument tends to infinity there. Backward Euler has both properties; trapezoidal has only the first.

</details>

### Exercise 10: Endpoint accuracy
<a id="geometric-numerical-integration-ex-10"></a>

Can backward Euler use a proposed step $h=10$ accurately for $y'=-y$ when the requested final time is $t=1$?

<details>
<summary>Hint 1</summary>

**Hint.** Check where the step actually ends.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare like time intervals.

</details>

<details>
<summary>Solution</summary>

**Solution.** A ten-unit step ends at $10$, with multiplier $1/11$ versus $e^{-10}$. Clipping it to the requested endpoint instead gives $h=1$, multiplier $1/2$ versus $e^{-1}$. Both illustrate that stability does not certify accuracy.

</details>

### Exercise 11: Inexact solve
<a id="geometric-numerical-integration-ex-11"></a>

Why must nonlinear solve tolerance be tightened separately in an order study?

<details>
<summary>Hint 1</summary>

**Hint.** List time error and iteration error separately.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An unsolved stage changes the numerical map.

</details>

<details>
<summary>Solution</summary>

**Solution.** Otherwise iteration error can dominate or mimic discretization error. Vary the algebraic tolerance independently until it is negligible for the output whose time order is being measured.

</details>

### Exercise 12: Strang composition
<a id="geometric-numerical-integration-ex-12"></a>

Write the symmetric Strang composition and state its order assumptions.

<details>
<summary>Hint 1</summary>

**Hint.** Place equal subflows on the outside.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both subproblems must define regular compatible flows.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use half A, full B, half A. Smooth exact subflows with bounded derivatives and finite-time stable propagation give local order three and global order two. Boundary incompatibility or inexact subsolves can reduce the order.

</details>

### Exercise 13: Commuting flows
<a id="geometric-numerical-integration-ex-13"></a>

If constant matrices $A,B$ commute, what happens to exact splitting?

<details>
<summary>Hint 1</summary>

**Hint.** Use the exponential series.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Commuting factors permit the binomial identity.

</details>

<details>
<summary>Solution</summary>

**Solution.** The exponential product is $e^{hA}e^{hB}=e^{h(A+B)}$. Expanding both series and grouping equal powers proves equality when $AB=BA$, so the linear exact splitting error vanishes.

</details>

### Exercise 14: Symplectic determinant
<a id="geometric-numerical-integration-ex-14"></a>

In two phase dimensions, what determinant does a symplectic map have?

<details>
<summary>Hint 1</summary>

**Hint.** Use the two-dimensional matrix identity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Orientation matters.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is one, since $M^{\mathsf T}JM=(\det M)J$. In two dimensions orientation-preserving area preservation is equivalent to the canonical criterion; in higher dimensions determinant one is insufficient.

</details>

### Exercise 15: Oscillator update
<a id="geometric-numerical-integration-ex-15"></a>

For $H=(p^2+q^2)/2$, write momentum-first symplectic Euler.

<details>
<summary>Hint 1</summary>

**Hint.** Take the two Hamiltonian gradients.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the new momentum in the position update.

</details>

<details>
<summary>Solution</summary>

**Solution.** First $P=p-hq$, then $Q=q+hP=(1-h^2)q+hp$. Using old momentum in both updates would give ordinary explicit Euler and lose symplecticity.

</details>

### Exercise 16: Energy defect
<a id="geometric-numerical-integration-ex-16"></a>

Compute one symplectic Euler step from $q=1,p=0$ and its energy.

<details>
<summary>Hint 1</summary>

**Hint.** Use the preceding update.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Square both new components.

</details>

<details>
<summary>Solution</summary>

**Solution.** The new values are $P=-h$ and $Q=1-h^2$. Thus $H_1=[(1-h^2)^2+h^2]/2=1/2-h^2/2+h^4/2$, generally different from $H_0=1/2$.

</details>

### Exercise 17: Verlet symmetry
<a id="geometric-numerical-integration-ex-17"></a>

Why use symmetric half steps?

<details>
<summary>Hint 1</summary>

**Hint.** Invert the substeps in reverse order.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the resulting map with the negative step.

</details>

<details>
<summary>Solution</summary>

**Solution.** The two equal outside kicks make the inverse equal to the negative-step map. Taylor matching proves local order three, and time symmetry removes odd powers in the formal modified Hamiltonian. Exact arithmetic and consistent subsolves are assumed.

</details>

### Exercise 18: Energy and trajectory
<a id="geometric-numerical-integration-ex-18"></a>

Does exact energy preservation imply an exact trajectory?

<details>
<summary>Hint 1</summary>

**Hint.** A level set contains many points.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Consider a map that traverses it at the wrong speed.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Preserving the correct energy level does not fix phase or traversal speed. Even the identity map conserves every Hamiltonian while usually failing to approximate its nonstationary trajectory.

</details>

### Exercise 19: Constraint residuals
<a id="geometric-numerical-integration-ex-19"></a>

Why check tangent momentum as well as position?

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate the position constraint.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A normal velocity leaves the surface immediately.

</details>

<details>
<summary>Solution</summary>

**Solution.** The differentiated condition is $g_qM^{-1}p=0$. Satisfying $g(q)=0$ alone permits a normal momentum component, producing immediate drift. Check both residuals under a declared norm and solve tolerance.

</details>

### Exercise 20: Stiff order reduction
<a id="geometric-numerical-integration-ex-20"></a>

What should be reported when stiff order falls below formal order?

<details>
<summary>Hint 1</summary>

**Hint.** Focus on the requested output.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Control inner and spatial errors separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** Report observed output errors on several time refinements, algebraic tolerances, spatial and boundary errors, and cost. Formal order for smooth nonstiff data is not a universal stiff-order claim.

</details>

### Exercise 21: Work comparison
<a id="geometric-numerical-integration-ex-21"></a>

Why not compare methods only by step count?

<details>
<summary>Hint 1</summary>

**Hint.** Count what occurs inside each step.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Rejected attempts also cost work.

</details>

<details>
<summary>Solution</summary>

**Solution.** Stages, Jacobians, factorizations, linear solves and nonlinear iterations differ. Compare total declared work at common output accuracy and include rejected steps, rather than treating all steps as equal.

</details>

### Exercise 22: Long-time phase
<a id="geometric-numerical-integration-ex-22"></a>

Can bounded energy error ensure a small late-time phase error?

<details>
<summary>Hint 1</summary>

**Hint.** Use the computed oscillator eigenangle.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A frequency bias accumulates over many periods.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. A frequency bias produces phase error proportional to elapsed time even while a nearby quadratic invariant keeps the orbit bounded. State accuracy at a late fixed time needs its own assessment.

</details>

### Exercise 23: Reversibility audit
<a id="geometric-numerical-integration-ex-23"></a>

Describe a finite reversibility audit.

<details>
<summary>Hint 1</summary>

**Hint.** Compose forward and inverse steps.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare several step sizes and record an arithmetic floor.

</details>

<details>
<summary>Solution</summary>

**Solution.** Advance N steps and then N negative steps, using the same inverse convention, and report the return defect at h, h/2 and h/4. Floating-point rounding and asymmetric implicit stopping can prevent exact return. This checks finite execution rather than proving universal reversibility.

</details>

### Exercise 24: Formal series
<a id="geometric-numerical-integration-ex-24"></a>

Must a formal modified Hamiltonian series converge?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish coefficient matching from an analytic limit.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A useful finite truncation can exist without an infinite sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Such series are often asymptotic. Finite-order matching can be justified with sufficient derivatives; optimal truncation and long-time bounds need additional analytic and step hypotheses.

</details>

### Exercise 25: Claim repair
<a id="geometric-numerical-integration-ex-25"></a>

Repair: a symplectic solver conserves energy, so its orbit is correct forever.

<details>
<summary>Hint 1</summary>

**Hint.** Name exactly what is preserved.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add the hypotheses and duration of any near-energy conclusion.

</details>

<details>
<summary>Solution</summary>

**Solution.** The exact numerical map preserves symplectic geometry. Under sufficient regularity, a controlled trajectory and a sufficiently small fixed step, backward-error analysis can bound near-conservation of a modified energy over a long finite interval. Phase, resonance, singularity, solve and roundoff errors still need separate checks.

</details>

## Sources

Hairer, Lubich and Wanner, [Geometric Numerical Integration, second edition](https://doi.org/10.1007/3-540-30666-8), develops symplectic methods, constraints and backward-error theory. The full general Runge–Kutta symplecticity and SHAKE/RATTLE theorems are external dependencies here. Hairer's [Long-time integration of non-stiff and oscillatory Hamiltonian systems](https://www.unige.ch/~hairer/preprints/icnaam09.pdf), sections “Backward error analysis” and “Modulated Fourier expansion”, supplies the finite-truncation theorem and frequency limitation mentioned above. Hairer's [Variable time step integration with symplectic methods](https://www.unige.ch/~hairer/preprints/varsymp.html) explains why ordinary adaptive substitution needs additional construction. The kick, drift, generating-function, oscillator and first modified-coefficient proofs in this chapter are given explicitly.

## Summary

Hamiltonian geometry asks more than small endpoint error. Kicks and drifts give a direct symplectic construction, momentum-first Euler is first order, and symmetric Störmer–Verlet is second order and reversible. The oscillator exhibits exact nearby quadratic invariants, a finite stability interval and accumulated phase bias. Modified equations explain conditional long-time behavior but require more than symplecticity alone. These methods connect to mechanics through canonical geometry and to field discretization through splitting, constraints and separate error budgets.
