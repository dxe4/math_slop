
# Retained Earlier Hyperbolic and Conservation-Law Reading

Hyperbolic equations transport information at finite speed. Even smooth initial data can steepen into shocks, after which classical derivatives fail and conservation alone admits too many weak solutions. This chapter develops characteristics, Rankine–Hugoniot balance, entropy admissibility, finite-volume structure, and verification boundaries.

## 1. Linear transport and domains of dependence

For constant c,

$$u_t+cu_x=0,\qquad u(0,x)=u_0(x),$$

characteristics satisfy $x'=c$ and u is constant along them. Hence

$$u(t,x)=u_0(x-ct).$$

The value at $(t,x)$ depends only on the foot $x-ct$. Boundary data are required only where characteristics enter the domain. Prescribing both ends of a one-way transport interval generally overdetermines the problem.

For variable smooth speed $a(t,x)$, solve $X'=a(t,X)$ and transport u along X while the characteristic flow exists uniquely. Crossing characteristics for a scalar linear field would contradict uniqueness of this characteristic ODE; nonlinear laws behave differently because speed depends on u.

## 2. Quasilinear characteristics and shock formation

For $u_t+a(u)u_x=0$, u is constant along a characteristic and its speed is $a(u_0(\xi))$:

$$x=\xi+a(u_0(\xi))t.$$

Different labels cease to define a single-valued classical solution when

$$\frac{\partial x}{\partial\xi}=1+a'(u_0(\xi))u_0'(\xi)t$$

vanishes. Thus the first candidate breaking time is

$$t_*=-\frac1{\min_\xi[a'(u_0(\xi))u_0'(\xi)]}$$

when that minimum is attained and negative (for example, for a smooth periodic profile). This minimum-attainment hypothesis is assumed here. Before t*, the formula is classical; at breaking the gradient blows up while u can stay bounded.

## 3. Weak conservation law

For $u_t+f(u)_x=0$, require both $u$ and $f(u)$ to be locally integrable. For a continuous nonlinear flux, local boundedness of $u$ is a simple sufficient condition. Then $u$ is a weak solution if

$$\int_0^\infty\int_{\mathbb R}[u\phi_t+f(u)\phi_x]\,dx\,dt+\int_{\mathbb R}u_0(x)\phi(0,x)\,dx=0$$

for every smooth compactly supported test phi in space-time including the initial boundary. This formulation encodes conservation across discontinuities.

A jump from left state $u_L$ to right state $u_R$ moving at speed s must satisfy Rankine–Hugoniot:

$$s(u_L-u_R)=f(u_L)-f(u_R).$$

Balance determines speed but not admissibility.

## 4. Entropy selection

For a scalar law with, for example, bounded initial data on the line (or compatible inflow boundary data) and the standard initial-trace class, the Kruzhkov entropy inequalities give uniqueness and L1 contraction. For a smooth convex flux, the admissibility condition may be expressed using convex entropy pairs: every smooth convex entropy eta has associated flux q with $q'=\eta' f'$, and distributionally

$$\eta(u)_t+q(u)_x\le0.$$

For a jump with $u_L>u_R$, the Lax condition for a convex flux is

$$f'(u_R)<s<f'(u_L),$$

with non-strict variants at degeneracy. Characteristics enter the shock. An expansion jump violates entropy and is replaced by a rarefaction fan.

Entropy is not thermodynamic vocabulary alone; it is the additional inequality selecting the physically relevant vanishing-viscosity solution. For systems, entropy pairs and admissibility are more intricate.

## 5. Burgers Riemann problem

For $f(u)=u^2/2$ with step data, if $u_L>u_R$, the entropy shock speed is $(u_L+u_R)/2$. If $u_L<u_R$, the rarefaction is

$$u(t,x)=\begin{cases}u_L,&x/t\le u_L,\\x/t,&u_L<x/t<u_R,\\u_R,&x/t\ge u_R.\end{cases}$$

At t=0 this is interpreted in the initial-trace sense. At fan boundaries the formula is continuous. Reversing these branches creates a weak but non-entropic expansion shock.

## 6. Finite-volume balance

Cell averages satisfy

$$U_j^{n+1}=U_j^n-\frac{\Delta t}{\Delta x}[F_{j+1/2}-F_{j-1/2}].$$

Shared interface fluxes cancel when summing cells, giving exact discrete conservation up to physical boundary flux and roundoff. Consistency requires $F(u,u)=f(u)$. Monotone fluxes under a CFL restriction converge to the scalar entropy solution under the standard bounded-variation/compactness theory.

For upwind linear transport with c>0,

$$U_j^{n+1}=U_j^n-\nu(U_j^n-U_{j-1}^n),\qquad\nu=\frac{c\,\Delta t}{\Delta x}.$$

If $0\leq \nu\leq 1$, the update is a convex combination, preserving bounds and stability. For $\nu>1$, coefficients lose positivity and oscillations/growth can result.

## 7. Godunov boundary and high order

Linear monotone schemes cannot exceed first-order accuracy at smooth extrema. High-resolution methods use nonlinear limiters: higher order in smooth regions, reduced order near discontinuities. A sharp-looking shock on one grid is not an accuracy certificate; compare cell averages on nested meshes in L1 and check mass and entropy residuals.

Artificial viscosity spreads shocks over cells. Too little dissipation permits oscillations; too much erases features. Dispersive oscillations are not automatically Gibbs artifacts, and positivity of density/pressure for systems requires special care.

## 8. Systems and hyperbolicity

For $U_t+F(U)_x=0$, strict hyperbolicity means the Jacobian $DF(U)$ has real distinct eigenvalues and a complete eigenbasis in the relevant state region. Each characteristic family may be genuinely nonlinear or linearly degenerate. Loss of hyperbolicity, vacuum, resonance, or nonconvex equations of state changes the theory. Scalar entropy intuition cannot simply be copied componentwise.

## 9. Verification ledger

Report equation, flux, domain, initial/boundary data, weak/entropy solution class, mesh and time step, numerical flux, reconstruction and limiter, CFL, boundary ghost-cell rule, mass balance, invariant-domain or positivity checks, L1 refinement, shock-location error, and entropy production. A manufactured smooth solution tests formal order but not shock capture. An exact Riemann solution tests discontinuities but not complex boundaries.

## Exercises with complete worked solutions

### 1. Transport solution
Solve $u_t+3u_x=0$, $u(0,x)=\sin x$.

**Solution.** Translate the initial profile: $u(t,x)=\sin(x-3t)$.

### 2. Inflow boundary
For c>0 on $(0,1)$, which boundary needs data?

**Solution.** Characteristics enter at x=0 and leave at x=1, so prescribe the left boundary only, plus compatible initial data.

### 3. Characteristic invariant
For $u_t+u u_x=0$, show u is constant on $x'=u$.

**Solution.** Along x(t), $d u/dt=u_t+x'u_x=u_t+u u_x=0$.

### 4. Breaking time
For Burgers with $u_0(x)=-\sin x$, find first positive breaking time.

**Solution.** $a'(u)=1$, and $\min u_0' = \min(-\cos x)=-1$, so $t_*=1$.

### 5. No breaking case
If Burgers initial data are nondecreasing, what does the formula predict?

**Solution.** $u_0'\geq 0$, so $1+t u_0'>0$ for positive time. Characteristics spread rather than cross; no forward gradient catastrophe follows from this mechanism.

### 6. Shock speed
For Burgers states $u_L=2,u_R=0$, find s.

**Solution.** $s=[f(2)-f(0)]/(2-0)=(2-0)/2=1$, equivalently $(u_L+u_R)/2=1$.

### 7. Lax check
Check entropy for Exercise 6.

**Solution.** Burgers characteristic speed is f'(u)=u. We have $0<s=1<2$; characteristics enter from both sides, so it is an entropy shock.

### 8. Expansion jump
For $u_L=0,u_R=2$, why is the jump inadmissible?

**Solution.** Its Rankine–Hugoniot speed is one, but characteristics have speeds 0 on the left and 2 on the right and move away from the jump. The entropy solution is a rarefaction.

### 9. Rarefaction value
For Exercise 8, find u at $(t,x)$ with $x/t=1.5$.

**Solution.** The ratio lies inside the fan $(0,2)$, so $u=x/t=1.5$.

### 10. Weak not unique
Why is Rankine–Hugoniot insufficient?

**Solution.** Both compressive and expansion jumps can satisfy balance. Entropy inequality or vanishing viscosity selects the compressive shock and rarefaction alternative for convex flux.

### 11. Upwind convexity
Rewrite the c>0 upwind update.

**Solution.** $U_j^{n+1}=(1-\nu)U_j^n+\nu U_{j-1}^n$. It is a convex combination exactly when $0\leq \nu\leq 1$.

### 12. Discrete mass
Show interior finite-volume fluxes cancel.

**Solution.** Sum updates over j. Each $F_{j+1/2}$ appears once with minus sign and once from the neighboring cell with plus sign. Only boundary fluxes remain.

### 13. Consistency
Why require $F(u,u)=f(u)$?

**Solution.** Consistency makes the numerical interface flux approach the physical flux in a smooth local limit: when both traces approach $u$, one needs $F(u,u)=f(u)$. Constant-state preservation alone cannot establish this condition, because any translation-invariant shared flux gives identical fluxes at the two faces of every constant cell and their difference cancels. For example, $F(v,w)=0$ preserves every constant grid state but freezes all nonconstant data even when the physical flux $f$ is nonzero. Thus consistency concerns approximation of the intended conservation law on varying smooth profiles, not merely preservation of constants.

### 14. CFL failure
What goes wrong for upwind nu=1.2?

**Solution.** Weight $1-\nu=-0.2$ is negative, so bound preservation and the convex-combination stability proof fail. Oscillations or growth can occur.

### 15. Shock norm
Why prefer L1 to pointwise error for a shifted shock?

**Solution.** A small location error creates order-one pointwise error near the jump, while its L1 error scales with shift times jump height and reflects convergence meaningfully.

### 16. Smooth manufactured limit
What does a smooth convergence test miss?

**Solution.** It does not test entropy selection, limiter activation, shock speed, discontinuity smearing, or post-shock positivity.

### 17. Strict hyperbolicity
If a two-by-two flux Jacobian has a repeated eigenvalue and one eigenvector, is it strictly hyperbolic?

**Solution.** No. Strict hyperbolicity requires real distinct eigenvalues; the missing eigenbasis also blocks characteristic decomposition.

### 18. Entropy residual sign
For a convex entropy, what sign should total entropy production have in a closed entropy solution?

**Solution.** The distributional inequality is nonpositive after accounting for boundary entropy flux. A numerical diagnostic must use matching sign and boundary terms.

### 19. Numerical Riemann audit
Design a verification for Burgers $u_L=2,u_R=0$.

**Solution.** Use the exact shock at speed one. Run meshes $dx,dx/2,dx/4$ with fixed CFL below the flux’s stability limit. At common time, report total mass with boundary accounting, L1 cell-average error, shock location, minimum/maximum, and discrete entropy production. Verify the numerical flux is consistent and boundary states remain exact. Convergence supports the scheme; only an applicable theorem establishes convergence for all refined meshes.

### 20. Claim repair
Repair: “The method conserves mass, so it converges to the physical shock.”

**Solution.** Conservation is necessary but does not select the entropy solution or ensure stability/compactness. Add consistency, a suitable entropy/stability property, CFL control, and refinement evidence or a convergence theorem.

## Chapter synthesis

Characteristics explain finite propagation and classical breaking; weak forms preserve balance through jumps; entropy selects among weak solutions; finite-volume fluxes preserve discrete conservation. Shock accuracy requires L1 refinement, location, entropy, invariant-domain, and boundary audits.

## Dependency ledger

- Characteristic formulas require sufficient smoothness before crossing.
- Weak solutions use distributional balance and initial traces.
- Entropy uniqueness here relies on scalar convex-flux theory.
- Rankine–Hugoniot gives jump speed, not admissibility.
- Monotone finite-volume convergence requires consistency, CFL stability, and compactness hypotheses.
- System claims require hyperbolicity and system-specific entropy/invariant-region theory.
