var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: robust-sampled-control
title: Robust, Constrained, and Sampled Feedback
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Robust, Constrained, and Sampled Feedback

Ideal pole placement answers a mathematical question for an exact continuous linear model. A physical loop also samples, delays, saturates, quantizes, and faces parameter and unmodelled-dynamics errors. This chapter separates nominal stability, robust stability, constrained feasibility, and implementation evidence.

## 1. Nominal versus robust claims

For $z'=Az+Bu$, state feedback $u=-Kz$ gives $A_cl=A-BK$. If every eigenvalue of $A_cl$ has negative real part, the exact finite-dimensional continuous-time closed loop is exponentially stable. This theorem assumes exact matrices, full state availability, no saturation or delay, and continuous actuation.

With perturbations $\\Delta$, robust stability means every member of a declared uncertainty set remains stable. It is meaningless without the uncertainty structure and size. Eigenvalue margins alone can mislead for nonnormal matrices: small matrix perturbations may move eigenvalues much more than their nominal distance to the imaginary axis suggests.

## 2. Lyapunov robustness certificate

If $A_cl$ is Hurwitz and $Q$ is symmetric positive definite, the Lyapunov equation

$$A_{\\mathrm{cl}}^TP+PA_{\\mathrm{cl}}=-Q$$

has a unique positive-definite $P$. For additive uncertainty $E$, along $z'=(A_cl+E)z$,

$$V'=-z^TQz+2z^TPEz,$$

hence

$$
V' <=-[\\lambda_{\\min}(Q)-2\\lVert P\\rVert\\lVert E\\rVert]\\lVert z\\rVert^2.
$$

Therefore every perturbation with $2\\lVert P\\rVert\\lVert E\\rVert<\\lambda_{\\min}(Q)$ preserves exponential stability. This is sufficient, often conservative, and tied to the chosen norm and unstructured additive model.

## 3. Input-to-state bounds

For $z'=A_cl z+Ed$, variation of constants yields

$$\\|z(t)\\|\\le Me^{-\\alpha t}\\|z(0)\\|+\\frac{M\\|E\\|}{\\alpha}\\sup_{0\\le s\\le t}\\|d(s)\\|$$

when $\\lVert e^{A_cl t}\\rVert\\leq M e^{-\\alpha t}$. This is an input-to-state stability estimate. A small bounded disturbance produces a bounded state, not exact convergence to zero. Integral action can reject selected constant disturbances only if the augmented model is stabilizable and saturation does not cause windup.

## 4. Saturation and invariant ellipsoids

An actuator implements $u=sat(-Kz)$ with $|u_i|\\leq u_i,\\max$. The nominal linear proof applies wherever $|K_i z|\\leq u_i,\\max$. With Lyapunov function $V=z^TPz$, one certified unsaturated region is an ellipsoid $V\\leq \\rho$ satisfying

$$\\max_{z^TPz\\le\\rho}|K_iz|=\\sqrt{\\rho K_iP^{-1}K_i^T}\\le u_{i,\\max}.$$

For $P\\succ0$, $\\rho\\ge0$, and $u_{i,\\max}\\ge0$, retain the undivided condition $\\rho K_iP^{-1}K_i^{\\mathsf T}\\le u_{i,\\max}^2$. Choose $\\rho$ no larger than $u_{i,\\max}^2/(K_iP^{-1}K_i^{\\mathsf T})$ for each nonzero row $K_i$, whose denominator is positive. A zero row gives identically zero input and no radius limit; omit it from the minimum, and if all rows are zero there is no radius restriction from input bounds. A zero input limit forces $\\rho=0$ only for a nonzero row. Stability and invariance still require the separate Lyapunov conditions. This is a local certificate, not the true region of attraction. Anti-windup changes controller dynamics and needs a separate proof. This online zero-row clarification postdates the retained draft PDF.

## 5. Sampling exactly

Under zero-order hold with period $T$,

$$z_{k+1}=A_dz_k+B_du_k,\\qquad A_d=e^{AT},\\quad B_d=\\int_0^T e^{A\\tau}B\\,d\\tau.$$

Discrete feedback $u_k=-K_dz_k$ is exponentially stable exactly when every eigenvalue of $A_d-B_dK_d$ lies strictly inside the unit disk. Reusing a continuous gain without analysis can fail. Forward Euler approximations $I+TA$ and $TB$ introduce an error whose significance depends on T and fast modes.

The block exponential

$$\\exp\\left(T\\begin{pmatrix}A&B\\\\0&0\\end{pmatrix}\\right)=\\begin{pmatrix}A_d&B_d\\\\0&I\\end{pmatrix}$$

computes the exact held model without requiring $A^{-1}$.

## 6. Sampling zeros, aliasing, and observation

Sampling maps continuous eigenvalues through $\\lambda \\to \\exp\\left(\\lambda T\\right)$. Frequencies separated by integer multiples of $2\\pi/T$ alias. A controllable continuous pair can lose controllability at exceptional sampling periods, and observability can likewise fail. The rank tests must be repeated on $(A_d,B_d,C)$.

Between samples, state and input constraints may be violated even when sampled endpoints are safe. Verification must inspect the held continuous trajectory or bound its intersample peak.

## 7. Delay margin

For scalar $x'=-a x-b x(t-\\tau)$, exponential trials give

$$s+a+be^{-s\\tau}=0.$$

When $\\tau>0$ and the delayed coefficient $b\\ne0$, this transcendental equation has infinitely many roots. If $\\tau=0$ or $b=0$, it reduces to an affine characteristic equation instead. In the nondegenerate delay case, a finite-dimensional pole plot of the delay-free system is not a delay certificate. At a possible imaginary crossing $s=i \\omega$, separate real and imaginary parts and solve for candidate margins; then verify crossing direction and that no earlier root destabilizes. Rational delay approximations provide evidence only relative to approximation order and frequency range.

## 8. Small gain

Let $G$ and $\\Delta$ be compatible bounded **linear** causal operators on a specified Banach signal space. If $\\lVert G\\rVert\\lVert\\Delta\\rVert<1$, then $\\lVert G\\Delta\\rVert<1$ and

$$ (I-G\\Delta)^{-1}=\\sum_{k=0}^{\\infty}(G\\Delta)^k$$

converges in operator norm, giving the corresponding robust well-posedness and stability certificate. Nonlinear small-gain theorems require separate feedback-existence and gain/contraction hypotheses; the displayed Neumann-series proof does not apply to arbitrary nonlinear operators. Failure of the inequality does not prove instability; it means this sufficient certificate is silent.

## 9. Robustness computation ledger

A defensible test records uncertainty structure and units, nominal and worst sampled margins, matrix scaling, saturation levels, sample/hold model, delay, initial set, disturbance set, solver tolerances, and intersample peaks. Grid sweeps cannot cover a continuum unless combined with Lipschitz or interval bounds. Monte Carlo cannot establish worst-case robustness.

## Exercises with complete worked solutions

### 1. Nominal pole
For $x'=2x+u$, choose $u=-kx$. Which k stabilizes?

**Solution.** Closed-loop rate is $2-k$; exponential stability requires $2-k<0$, hence $k>2$.

### 2. Additive uncertainty
If the scalar closed-loop rate is $-3+e$, stable for every $|e|\\leq r$, what largest strict radius is certified?

**Solution.** Worst rate is $-3+r$; it remains negative for $r<3$. At $r=3$ a zero eigenvalue appears, so the strict robust radius is any bound below three.

### 3. Lyapunov scalar certificate
For $x'=-2x$, $Q=1$, solve for P.

**Solution.** The equation $2(-2)P=-1$ gives $P=1/4$. The additive bound $2P|e|<1$ gives $|e|<2$, which is exact in this scalar case.

### 4. Disturbance bound
For $x'=-2x+d$, $|d|\\leq 0.1$, bound the asymptotic magnitude.

**Solution.** Variation of constants gives $|x(t)|\\leq e^{-2t}|x_0|+0.1(1-e^{-2t})/2$; the limiting bound is $0.05$.

### 5. Exact sample map
For $x'=ax+bu$ held for T, with $a\\neq0$, find $A_d,B_d$.

**Solution.** $A_d=e^{aT}$ and $B_d=b(e^{aT}-1)/a$. For $a=0$, the continuous limit is $B_d=bT$.

### 6. Discrete stability
For $x_{k+1}=1.2x_k+u_k$, $u=-kx$, find k.

**Solution.** The multiplier is $1.2-k$; unit-disk stability requires $|1.2-k|<1$, or $0.2<k<2.2$.

### 7. Continuous gain reused
For $x'=x+u$, use continuous gain $k=2$ and exact zero-order hold with period T. Find the sampled multiplier.

**Solution.** $A_d=e^{\\mathsf T}$, $B_d=e^{\\mathsf T}-1$, so the multiplier is $e^{\\mathsf T}-2(e^{\\mathsf T}-1)=2-e^{\\mathsf T}$. Stability requires $|2-e^{\\mathsf T}|<1$, which gives $0<T<\\ln 3$. Continuous stability alone did not allow arbitrary T.

### 8. Euler stability trap
For $x'=-100x$, when is Euler stable?

**Solution.** Its multiplier is $1-100T$; require absolute value below one, giving $0<T<0.02$. The exact sampled free decay is stable for every positive T.

### 9. Saturation region
If $P=2$, $K=3$, and $u_{\\max}=6$ in one dimension, find maximum rho with $V=2x^2\\leq \\rho$ unsaturated.

**Solution.** Unsaturation requires $|3x|\\leq 6$, hence $|x|\\leq 2$, so $\\rho\\leq 2(2^2)=8$. The formula gives the same value.

### 10. Integral windup
Why can integral action worsen recovery under saturation?

**Solution.** While the actuator is clipped, the integrator may continue accumulating error and command an unreachable input. After the state crosses the target, the stored integral keeps the actuator saturated, causing overshoot. Anti-windup must limit or back-calculate that state.

### 11. Aliasing
What continuous frequencies sample identically to omega at period T?

**Solution.** Every $\\omega+2\\pi m/T$, integer m, has the same sample multiplier because $\\exp(i(\\omega+2\\pi m/T)T)=\\exp\\left(i \\omega T\\right)$.

### 12. Small gain scalar
If stable gains are $\\lVert G\\rVert=2$ and uncertainty bound $\\lVert \\Delta\\rVert\\leq 0.4$, what follows?

**Solution.** Their product is at most $0.8<1$, so the small-gain sufficient certificate applies in the named induced norm. It does not give an exact margin or handle unmodelled signal spaces.

### 13. Failed small gain
If the product is 1.2, is the loop unstable?

**Solution.** Not necessarily. The sufficient condition is inconclusive. Phase, structure, or a sharper multiplier analysis may still certify stability.

### 14. Intersample violation
Can safe endpoints imply safe continuous trajectories?

**Solution.** No. Nonnormal or oscillatory dynamics can peak between samples. One must compute or bound $e^{A \\tau}z_k+\\int_0^\\tau e^{As}B ds u_k$ for $0\\leq \\tau\\leq T$.

### 15. Delay-free boundary
For $x'=-x-kx(t-\\tau)$, state the characteristic equation.

**Solution.** Substituting $e^{st}$ yields $s+1+k e^{-s \\tau}=0$. When $k\\ne0$ and $\\tau>0$, it has infinitely many roots, so the delay-free root $-(1+k)$ is not enough. For $k=0$ or $\\tau=0$, the equation is affine in $s$ and has only one root; these degenerate cases do not support the infinite-root conclusion.

### 16. Uncertainty structure
Why distinguish repeated scalar from full matrix uncertainty?

**Solution.** Repeated parameters couple entries and permit fewer perturbations than an arbitrary full block. Ignoring structure can be needlessly conservative; inventing structure can miss real failures.

### 17. Rank tolerance
A controllability singular value is $10^{-9}$ with coefficient uncertainty $10^{-5}$. What claim is justified?

**Solution.** Exact floating-point rank is not practically robust. Perturbations larger than the smallest singular value may destroy effective controllability; report scaling and an uncertainty-aware bound.

### 18. Grid sweep
Why do 10,000 stable random plants not prove robust stability?

**Solution.** They cover finitely many draws, not every member of the uncertainty set, and may miss a thin worst-case region. A uniform theorem, interval enclosure, or certified optimization bound is needed.

### 19. Project: sampled saturated loop
For $x'=x+u$, $|u|\\leq 1$, use held $u_k=-2x_k$, period T. Derive the unsaturated map and certified local interval.

**Solution.** The exact unsaturated multiplier is $2-e^{\\mathsf T}$ from Exercise 7, stable for $T<\\ln3$. Unsaturation at sample times requires $|2x_k|\\leq 1$, so $|x_k|\\leq 1/2$. To certify invariance, also require $|(2-e^{\\mathsf T})x|\\leq 1/2$, automatically true under strict sampled stability. Intersample input stays constant and within its bound, but any state constraint still needs the exact held curve. Test T at three values and compute maximum intersample state on a refined tau grid; the grid is evidence, while the analytic multiplier proves the sampled local claim.

### 20. Claim repair
Repair: “All simulated uncertain plants were stable, therefore the controller is robust.”

**Solution.** State instead that the sampled plants remained stable over the declared horizon, solver, and sampled uncertainty distribution. Robust stability for the full uncertainty set remains unproved until a uniform certificate or verified exhaustive bound is supplied.

## Chapter synthesis

Nominal eigenvalues, robustness, disturbance attenuation, constraint feasibility, sampled stability, and delay tolerance are separate claims. Lyapunov, exact discretization, invariant ellipsoids, and small gain give auditable sufficient certificates; refinement and stress tests probe their implementation boundaries.

## Dependency ledger

- Nominal feedback uses controllability and observation results from the preceding control chapter.
- Lyapunov certificates require positive-definite solutions and declared norms.
- Exact sample maps assume zero-order hold and fixed period.
- Saturation certificates are local unless a nonlinear global proof is supplied.
- Small gain depends on causal stable operators in a named signal norm.
- Numerical sweeps remain evidence, not continuum proofs.
`;export{e as default};