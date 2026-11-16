var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: gradient-based-sampling
title: "Gradient-Based Sampling"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Gradient-Based Sampling

Random-walk Metropolis explores the posterior by making local, undirected proposals. In high dimensions or with strongly correlated parameters, this exploration is inefficient. Hamiltonian Monte Carlo (HMC) augments the parameter space with momentum variables and uses gradients to guide long, directed moves through high-density regions. This chapter explains the mechanics of HMC, the leapfrog integrator, and the role of parameterization in geometry.

## Hamiltonian dynamics

HMC introduces an auxiliary momentum variable $r$ of the same dimension as $\\theta$. The joint density is

$$\\pi(\\theta, r) \\propto \\exp\\bigl(-U(\\theta) - K(r)\\bigr),$$

where $U(\\theta) = -\\log \\pi(\\theta \\mid y)$ is the potential energy and $K(r) = \\frac{1}{2} r^{\\top} M^{-1} r$ is the kinetic energy for a mass matrix $M$. The conditional distribution of $r$ given $\\theta$ is multivariate normal, and the marginal of $\\theta$ is the desired posterior.

Hamilton's equations govern the evolution:

$$\\frac{d\\theta}{dt} = \\frac{\\partial K}{\\partial r} = M^{-1}r, \\qquad \\frac{dr}{dt} = -\\frac{\\partial U}{\\partial \\theta} = \\nabla_{\\theta} \\log \\pi(\\theta \\mid y).$$

The gradient points uphill in log-posterior density, so momentum carries the state toward regions of higher density while kinetic energy allows traversal through lower-density regions. The total energy $H = U + K$ is conserved along exact trajectories.

## The leapfrog integrator

Hamilton's equations are approximated by the leapfrog integrator, which alternates half-steps of momentum and full steps of position:

$$r(t + \\epsilon/2) = r(t) + \\frac{\\epsilon}{2} \\, \\nabla_{\\theta} \\log \\pi(\\theta(t) \\mid y),$$

$$\\theta(t + \\epsilon) = \\theta(t) + \\epsilon \\, M^{-1} r(t + \\epsilon/2),$$

$$r(t + \\epsilon) = r(t + \\epsilon/2) + \\frac{\\epsilon}{2} \\, \\nabla_{\\theta} \\log \\pi(\\theta(t + \\epsilon) \\mid y).$$

The leapfrog integrator is symplectic and time-reversible. For a reversible, volume-preserving integrator, the Metropolis correction at the end of a trajectory removes the discretization bias from the stationary distribution. The acceptance probability is

$$a = \\min\\left\\{1, \\; \\exp\\bigl(-H(\\theta^{*}, r^{*}) + H(\\theta, r)\\bigr)\\right\\},$$

where $H=U+K$ is the total Hamiltonian. **Exact Hamiltonian flow** conserves
$H$. A finite-step leapfrog trajectory generally has nonzero discretization
error even in exact arithmetic, so its acceptance probability can be below
one. Symplecticity typically keeps energy error bounded and oscillatory over
long trajectories; it does not make the error zero. Floating-point roundoff
adds another error source.

## Divergent transitions

**Divergent transitions** occur when the numerical trajectory fails to follow the true Hamiltonian dynamics, often in regions of strong curvature such as funnels or near boundaries. A divergence flag is not merely a rejection; it warns that a declared numerical-error criterion was exceeded and requires investigation. Increasing the acceptance target or reducing the step size may help, but these adjustments can hide rather than solve a pathological parameterization.

For hierarchical models, a noncentered parameterization often reduces divergences. If group data are weak, the funnel geometry between population scale and group effects is severe. Writing $u_{j} = \\tau z_{j}$ with $z_{j} \\sim \\mathcal{N}(0,1)$ makes $z_j$ independent of $\\tau$ in the prior and often weakens posterior dependence and funnel geometry; the likelihood can still couple them. When groups are strongly informed, the centered parameterization may be better. The choice is diagnostic, not universal.

## Step size and trajectory length

The step size $\\epsilon$ controls integration error: smaller $\\epsilon$ means more accurate trajectories but more gradient evaluations per unit trajectory length. The number of leapfrog steps $L$ controls how far the trajectory travels. Modern implementations such as the No-U-Turn Sampler (NUTS) adapt $L$ automatically by stopping when the trajectory begins to double back on itself.

Step size is typically adapted during warmup to achieve a target acceptance rate. For HMC, a target near $0.65$ is common in practice. The adaptation must be discarded from the final sample; only post-warmup iterations are used for inference.


## The No-U-Turn Sampler

The No-U-Turn Sampler (NUTS) automates the choice of trajectory length by detecting when further tree expansion is no longer carrying the trajectory away from itself. NUTS builds a binary tree of leapfrog steps. In a basic Euclidean description, let $\\theta^{-}$ and $\\theta^{+}$ be the two endpoints and let $r^{-}$ and $r^{+}$ be their momenta. A U-turn is detected when an endpoint momentum has negative inner product, under the chosen metric convention, with the endpoint displacement $\\theta^{+}-\\theta^{-}$. Production implementations also apply recursive validity checks to subtrees. This is a stopping diagnostic for useful expansion, not a literal guarantee that no part of the path has retraced another part.

Of the trajectory-length and step-size choices just discussed, NUTS removes manual tuning of the number of leapfrog steps $L$. Implementations commonly adapt both the step size $\\epsilon$ and a metric or mass matrix during warmup. Step-size adaptation often uses a dual-averaging scheme driven by recent acceptance statistics; a target near $0.65$ is common for HMC, while implementation defaults for NUTS may differ.

## Mass matrix adaptation

The mass matrix $M$ in the convention
$K(r)=\\tfrac12r^\\top M^{-1}r$ is the covariance of the Gaussian momentum.
For a Gaussian target with position covariance $\\Sigma$, the linear dynamics
satisfy $\\ddot\\theta=-M^{-1}\\Sigma^{-1}\\theta$. Equalizing their frequencies
therefore calls for $M$ proportional to $\\Sigma^{-1}$, not $\\Sigma$. Many
implementations adapt and report an **inverse metric**; terminology differs,
so documentation must be checked before mapping an empirical covariance to
the symbol $M$. Under the convention here, estimating $\\Sigma$ from warmup
and regularizing its inverse supplies the mass matrix.

A diagonal mass matrix rescales each parameter independently. A full mass
matrix also rotates the dynamics to account for posterior correlations. The
full matrix is more expensive to estimate and apply but can be valuable for
strongly correlated posteriors.

## Numerical issues in HMC

Floating-point arithmetic introduces several sources of error in HMC:

- **Gradient errors:** Finite differences or automatic differentiation can produce inaccurate gradients, especially near boundaries or discontinuities.
- **Accumulated roundoff:** Long trajectories accumulate floating-point error, causing energy drift.
- **Underflow in density evaluation:** Extreme parameter values can cause log-density underflow, producing NaN gradients.

These errors are usually minor for well-behaved posteriors but can become severe for pathological geometries. Verifying gradients against finite differences and monitoring energy conservation are essential debugging steps.


## Riemannian manifold HMC

Standard HMC uses a constant mass matrix $M$, which gives a fixed Euclidean geometry in parameter space. When the posterior has strong correlations or varying curvature, that geometry can be inefficient. Riemannian manifold HMC (RMHMC) instead uses a position-dependent metric. One common likelihood component is the expected Fisher information:

$$G_{\\mathrm{like}}(\\theta) = \\mathbb{E}\\left[\\nabla_{\\theta} \\log p(y \\mid \\theta) \\, \\nabla_{\\theta} \\log p(y \\mid \\theta)^{\\top} \\mid \\theta\\right].$$

A Bayesian metric may combine this with negative log-prior curvature, suitably
regularized, and other positive-definite metric choices are possible. The
resulting nonseparable Hamiltonian adapts motion to local geometry; its full posterior trajectories are Hamiltonian paths, with geodesic flow only as the kinetic-only special case. This can improve sampling efficiency for some strongly correlated posteriors, but requires metric derivatives and usually implicit integration, so the cost must be measured for the target and implementation.

## Tempering and parallel tempering

For multimodal posteriors, standard HMC may get trapped in one mode. For a chosen $T>0$ with $0<\\int\\pi(\\theta)^{1/T}d\\theta<\\infty$, tempering targets the normalized density proportional to $\\pi(\\theta)^{1/T}$; values $T>1$ flatten it. Parallel tempering runs chains at multiple temperatures and periodically swaps states between adjacent temperatures.

The swap acceptance probability is

$$a = \\min\\left\\{1, \\frac{\\pi(\\theta_{j})^{1/T_{i}} \\pi(\\theta_{i})^{1/T_{j}}}{\\pi(\\theta_{i})^{1/T_{i}} \\pi(\\theta_{j})^{1/T_{j}}}\\right\\}.$$

Parallel tempering is effective for multimodal problems but requires tuning the temperature ladder and can be computationally expensive. It is most useful when the number of modes is small and well-separated.


## Shadow Hamiltonians

Under the smoothness, step-size, and bounded-trajectory assumptions of backward-error analysis, leapfrog admits a formal modified Hamiltonian whose suitably truncated expansion stays close to the numerical trajectory over a controlled time regime. Its leading difference from the true Hamiltonian is $O(\\epsilon^{2})$. This shadow-energy picture explains long-run near-conservation in that regime; it does not assert that every finite leapfrog map exactly preserves a global scalar $H^{*}$ or exactly solves one globally defined nearby Hamiltonian system.

Understanding shadow Hamiltonians helps explain why HMC can remain stable despite using approximate trajectories. The Metropolis accept/reject step corrects leapfrog discretization error; together with the reversible, volume-preserving proposal construction and the usual momentum handling, it leaves the extended target invariant.

## SoftAbs metric

For posteriors with complex geometry, the Fisher information metric may be expensive to compute or numerically unstable. The SoftAbs metric is a regularized approximation:

$$M(\\theta) = Q \\, \\mathrm{diag}(\\lambda_{i} \\coth(\\alpha \\lambda_{i})) \\, Q^{\\top},$$

where $Q \\Lambda Q^{\\top}$ is the eigendecomposition of the Hessian of the log posterior and $\\alpha$ is a positive regularization parameter. Define the zero-eigenvalue value by continuity as $1/\\alpha$. For a nonzero eigenvalue, $\\lambda\\coth(\\alpha\\lambda)\\to|\\lambda|$ as $\\alpha\\to\\infty$; as $\\alpha\\to0$, it equals $1/\\alpha+O(\\alpha\\lambda^2)$. Thus the construction is positive definite and moves between an absolute-Hessian geometry and a scaled identity as $\\alpha$ varies. For an indefinite Hessian, it does not converge to the signed Hessian.

The SoftAbs metric is particularly useful for posteriors with varying curvature, where a constant mass matrix is inefficient. However, computing the eigendecomposition at each step adds computational overhead that must be weighed against the sampling efficiency gains.


## Warm-up and adaptation strategies

Warm-up provides a finite initialization and tuning period; it cannot certify stationarity after any fixed number of iterations. A typical workflow uses multiple warm-up windows:

1. **Initial fast adaptation:** Adapt the step size using dual averaging to achieve the target acceptance rate.
2. **Slow adaptation:** Estimate and regularize the position covariance $\\Sigma$ from recent warm-up states, then use its inverse for $M$ under this chapter's convention $K(p)=p^{\\mathsf T}M^{-1}p/2$. Software that calls $\\Sigma$ itself a “mass matrix” is using the opposite naming convention.
3. **Final fast adaptation:** Fine-tune the step size with the adapted mass matrix.

The number of warm-up iterations depends on the model complexity. Simple models may require only $500$ iterations; complex hierarchical models may require $5{,}000$ or more. Insufficient warm-up can leave initialization effects and unstable tuning; no fixed warm-up length guarantees stationarity.

## Numerical stability in gradient computation

Gradient computation is the most common source of numerical instability in HMC. Problems include:

- **Overflow/underflow in densities:** Evaluate on the log scale and use algebraically stable functions such as log-sum-exp. Constrain or transform a parameter only when the declared model justifies that support; an arbitrary numerical bound changes the target.
- **Division by zero:** Reexpress removable ratios with stable algebra and treat a true singularity as a model/domain error. Adding an arbitrary constant to a denominator changes the log density and therefore the posterior unless it is an explicit modeled regularization.
- **Discontinuities:** HMC's differentiability assumptions fail at true nonsmooth points. A smooth approximation changes the model and must be declared and checked; a reparameterization is useful only if it preserves the intended target.

Verifying gradients against finite differences is essential. For each parameter, compute the analytic gradient and compare it to the central difference:

$$\\frac{\\partial \\log \\pi}{\\partial \\theta_{i}} \\approx \\frac{\\log \\pi(\\theta + \\epsilon e_{i}) - \\log \\pi(\\theta - \\epsilon e_{i})}{2\\epsilon}.$$

Compare automatic or analytic derivatives over several finite-difference step sizes. Use a scale-aware test such as $|g_i-d_i|\\le a+r\\max(|g_i|,|d_i|)$ with absolute tolerance $a$ and relative tolerance $r$ chosen for the numeric precision and model scale. A single fixed $10^{-6}$ cutoff can reject correct large-scale gradients or accept poor small-scale ones; failure patterns across step sizes help separate truncation and roundoff from a coding error.

## Common errors

- **Ignoring divergences.** Even a small fraction of divergent transitions raises concerns about biased exploration and requires investigation. Do not report results from a run with divergences without addressing them.
- **Using warmup samples for inference.** Adaptation-period samples are generally not guaranteed to be stationary draws. Discard them.
- **Assuming gradients are correct.** Analytic gradients must be verified against finite differences. A sign error changes trajectories; a correctly implemented reversible proposal and true-energy correction can still preserve the target, while efficiency and numerical reliability can fail.
- **Treating step size reduction as a solution to all problems.** Smaller steps can resolve integration error but do not by themselves establish adequate exploration or remove difficult posterior geometry; compare justified reparameterizations when problems persist.

## Practice exercises

### Exercise 1

Explain why the leapfrog integrator preserves volume exactly, and why this matters for the Metropolis acceptance probability.

**Solution.** Each leapfrog kick or drift substep is a shear transformation with Jacobian determinant one; their composition therefore preserves volume. Volume preservation removes a Jacobian factor, but does not alone make a deterministic proposal reversible. For a fixed-length leapfrog trajectory followed by momentum flip, the proposal is a volume-preserving involution; its Metropolis ratio is $\\exp(-H_{\\rm new}+H_{\\rm old})$, with no Jacobian correction.

### Exercise 2

A hierarchical model shows $15$ divergent transitions in $4{,}000$ post-warmup iterations, concentrated at small values of a population scale parameter $\\tau$. The researcher increases the target acceptance rate from $0.8$ to $0.95$ and the divergences disappear. Is the problem solved?

**Solution.** Not established by the disappearance of flags alone. A smaller step size may genuinely resolve integration error, but disappearance of flags alone establishes neither adequate exploration nor persistent pathological geometry. Compare estimand-specific ESS, MCSE, stability and the formerly flagged region; if problems persist, compare justified centered and noncentered parameterizations and verify their diagnostics.

### Exercise 3

For a standard normal target $\\pi(\\theta) \\propto \\exp(-\\theta^{2}/2)$, write the Hamiltonian and derive one leapfrog step with mass $M = 1$ and step size $\\epsilon$.

**Solution.** The potential energy is $U(\\theta) = \\theta^{2}/2$ and the kinetic energy is $K(r) = r^{2}/2$. The gradient is $\\nabla U = \\theta$. One leapfrog step is:

$$r' = r - \\frac{\\epsilon}{2} \\theta,$$

$$\\theta' = \\theta + \\epsilon r',$$

$$r'' = r' - \\frac{\\epsilon}{2} \\theta'.$$

The total energy change is $H(\\theta', r'') - H(\\theta, r) = \\frac{1}{2}(\\theta'^{2} + r''^{2}) - \\frac{1}{2}(\\theta^{2} + r^{2})$, which is $O(\\epsilon^{3})$ for the leapfrog integrator.

## Looking backward and forward

This chapter introduced Hamiltonian Monte Carlo as a gradient-driven alternative to random-walk Metropolis. The next chapter, *Diagnostics Are Necessary, Never Sufficient*, shows how to evaluate whether any sampler---Metropolis or HMC---has actually produced reliable approximations.
## The augmented target fixes the momentum law

Let $\\pi(q)$ be a proper target on $\\mathbb R^d$, positive and differentiable on the region used by a trajectory. Choose a constant symmetric positive-definite matrix $M$. Its role here is the covariance of momentum, not the covariance of position. The normalized augmented density is
\\[
\\rho(q,p)=\\pi(q)(2\\pi)^{-d/2}|M|^{-1/2}
             \\exp\\{-p^{\\mathsf T}M^{-1}p/2\\}.
\\]
Integrating over $p$ gives exactly $\\pi(q)$. This calculation explains the momentum distribution and the determinant factor; they cannot be chosen independently of the kinetic energy.

A full refresh draws $p\\sim N(0,M)$ independently conditional on the current position. It is a Gibbs update for the augmented target. Momentum need not be kept in the final scientific output, since the desired law is its position marginal. Partial momentum refreshments can also be valid, but their persistence and sign conventions require a separate invariant update. They are not part of the fixed-refresh laboratory.

With $U(q)=-\\log\\pi(q)$ up to a constant and $K(p)=p^{\\mathsf T}M^{-1}p/2$, Hamilton's equations are $\\dot q=M^{-1}p$ and $\\dot p=-\\nabla U(q)$. A Cholesky factor $M=CC^{\\mathsf T}$ permits a refresh $p=Cz$ with independent standard normal entries. To compute $M^{-1}p$, solve the linear system; forming an explicit inverse is unnecessary. The same matrix convention must be used in both operations.

Mass has a clear dimensional effect. In one dimension, a target with variance $\\sigma^2$ gives $\\ddot q=-q/(m\\sigma^2)$. Equal frequencies across independent coordinates call for masses proportional to inverse position variances. This is why the chapter's convention differs from software documentation that uses “metric” and “inverse metric” differently. Check the kinetic formula before translating a stored adaptation matrix.

The augmentation is exact in probability theory; it does not assert that an arbitrary trajectory is a valid transition. We still need an energy-preserving exact flow or a suitably corrected numerical proposal, together with exploration conditions. Even a perfectly accepted deterministic motion can fail to use the new random momentum in a useful way.

## Exact flow has two separate invariances

Suppose $U$ is twice continuously differentiable and the Hamiltonian flow exists uniquely for the time interval under consideration. Along an exact solution,
\\[
\\frac{dH}{dt}=\\nabla U(q)^{\\mathsf T}M^{-1}p
 +(M^{-1}p)^{\\mathsf T}[-\\nabla U(q)]=0.
\\]
Energy conservation keeps the density value $e^{-H}$ unchanged. Density preservation also needs preservation of phase-space volume, not just this scalar identity.

The vector field $(M^{-1}p,-\\nabla U(q))$ has divergence zero: the derivative of its first part with respect to $q$ is zero, and that of its second part with respect to $p$ is zero. The variational equation for the flow Jacobian gives $d(\\det D\\Phi_t)/dt=(\\operatorname{div}v)(\\Phi_t)\\det D\\Phi_t=0$, starting from determinant one. Hence the flow preserves volume. This argument uses differentiability and a well-defined invertible flow; it cannot be applied to a trajectory that hits an unhandled singular boundary.

For a measurable set $A$, change variables $z=\\Phi_t(x)$ in $\\int\\mathbf1_A(\\Phi_t(x))e^{-H(x)}dx$. Energy and volume preservation together turn the result into $\\int_A e^{-H(z)}dz$. This proves augmented-target invariance for exact flow. Composing it with a valid refresh leaves the same joint target invariant, and marginalizing yields a position sampler.

For the standard normal target with unit mass, the exact solution is a rotation:
\\[
q(t)=q(0)\\cos t+p(0)\\sin t,\\qquad
p(t)=p(0)\\cos t-q(0)\\sin t.
\\]
At time $\\pi$, $q(t)=-q(0)$ regardless of the refreshed momentum. Repeating such updates traps the position among at most two values, even though exact energy conservation makes every proposal acceptable. At time $2\\pi$ the position does not move at all. These examples separate invariant motion from an irreducible sampling mechanism.

In nonlinear models trajectories may explore long distances without random-walk diffusion, but this possibility is not a universal mixing theorem. Travel time, parameterization, refresh law and possible resonances all matter. A finite record of small energy errors establishes neither visits to every important region nor accuracy for every estimand.

## Leapfrog is a composition of explicit shears

For fixed mass, define the momentum half-step $A_h(q,p)=(q,p-h\\nabla U(q)/2)$ and the position step $B_h(q,p)=(q+hM^{-1}p,p)$. One leapfrog step is $F_h=A_h\\circ B_h\\circ A_h$, with the rightmost operation applied first. Each shear is invertible: reverse its sign of $h$. Their Jacobian matrices are triangular by blocks, with identity diagonal blocks, so their determinants are one.

For the momentum shear, the lower-left block is $-h\\nabla^2U/2$ and the other off-diagonal block is zero. For the position shear, the upper-right block is $hM^{-1}$. These formulas make the unit determinant explicit in any dimension. Symmetry of the Hessian and mass inverse additionally gives the symplectic property; unit determinant alone is a weaker statement.

Let $S(q,p)=(q,-p)$. Direct substitution into the shears yields $SF_hS=F_{-h}=F_h^{-1}$. For $L$ fixed steps, the same identity gives $SF_h^LS=F_h^{-L}$. Therefore the proposal $\\Psi=SF_h^L$ is an involution:
\\[
\\Psi^2=SF_h^LSF_h^L=I,
\\qquad |\\det D\\Psi|=1.
\\]
The momentum flip has determinant $(-1)^d$, whose absolute value is one. Its sign is irrelevant for volume, but its role in the inverse construction is essential.

For an involution $\\Psi$, the deterministic proposal can be paired with its exact reverse at the proposed state. The accepted extended-target flow is balanced by
\\[
\\alpha(x)=\\min\\{1,\\rho(\\Psi x)|\\det D\\Psi(x)|/\\rho(x)\\}.
\\]
With unit absolute Jacobian, this is $\\min\\{1,e^{-H(\\Psi x)+H(x)}\\}$. Rejections retain the old extended state. This establishes the energy-only correction; saying only that leapfrog preserves volume omits the reversibility argument.

If full momentum is refreshed at each iteration and only the position is retained, flipping the final momentum does not change that position's transition law. An implementation may exploit this equivalence, but its proof should state it. The laboratory keeps the flip explicit so that the involution can be tested directly.

## Volume alone does not justify an energy-only rule

Consider a three-state cycle that deterministically sends $A$ to $B$, $B$ to $C$ and $C$ to $A$. It preserves counting measure but is not an involution. Give the states target masses $(0.5,0.3,0.2)$ and naively accept with the ratio of destination to current mass. The accepted masses transported are $0.3,0.2,0.2$; the rejected masses staying at $A,B,C$ are $0.2,0.1,0$. The next mass vector is $(0.4,0.4,0.2)$, not the target.

The example can also be realized by translations among three equal-volume cells. Its defect is not volume distortion: there is no one-step reverse proposal for a strict cycle move. A correct deterministic construction must include a reverse direction or an auxiliary label with an appropriate reversal law. Fixed-length leapfrog with the momentum flip supplies exactly that construction.

This diagnostic also distinguishes three implementation tests. A numerical determinant near one checks local volume behavior. A forward-then-reverse test checks whether the implemented inverse agrees. An energy comparison checks the Metropolis weight. None of the three replaces the other two. Tests at a few states can reveal a bug but do not establish a global theorem outside the tested domain.

Using an incorrect but consistently evaluated gradient can still yield invertible momentum shears and a reversible fixed-step composition. If the true Hamiltonian is used in acceptance, the idealized invariant-kernel argument can survive, while efficiency and numerical stability deteriorate. If the same coding error changes the target energy, or breaks consistent forward/reverse operations, that conclusion no longer follows. This is why gradient verification and target verification should be recorded separately.

Numerical arithmetic only approximates the ideal maps. Reversal error can grow through roundoff, and implicit integrators add solver tolerances. A small numerical mismatch is not a proof of exact floating-point detailed balance. The appropriate claim is that a validated finite implementation approximates the stated construction with measured errors at its declared scale and precision.

## Local error and fixed-time error use different limits

Assume the potential is sufficiently smooth on a bounded neighborhood containing the exact and numerical paths: bounded derivatives through order three suffice for the usual second-order local state analysis, with the needed derivative bounds on the vector field. Leapfrog is symmetric, and Taylor expansion gives a local state error $O(h^3)$ over one step. If energy is Lipschitz on that neighborhood, the one-step energy discrepancy is likewise bounded by $O(h^3)$. Constants depend on the starting region and derivative bounds.

For a fixed integration time $T$ and $L=T/h$ integer, local errors accumulate through a stable Lipschitz evolution. A discrete Gronwall estimate gives state error $O(h^2)$ uniformly on that fixed interval, hence energy error $O(h^2)$ under the same boundedness assumptions. Holding $L$ fixed while sending $h$ to zero instead shrinks the integration time; it is not this fixed-time limit.

A log-log slope is meaningful only after specifying which limit is tested. The Gaussian laboratory checks one-step energy error at a fixed nonzero position and momentum, where its leading cubic coefficient is nonzero. A different launch point can cancel that coefficient and show a higher apparent order. Neither an unusual slope at one degenerate point nor a finite fitted slope proves a global integrator theorem.

For long trajectories, symplectic backward-error analysis explains controlled near-conservation under stronger smoothness, bounded-path and small-step hypotheses. It is not a blanket claim that every leapfrog trajectory remains stable forever or preserves one global modified Hamiltonian exactly. The step can be too large for the target's curvature, the path may approach singular geometry, or roundoff may dominate the asymptotic truncation terms.

The Metropolis correction uses the actual energy discrepancy of the proposal rather than substituting its asymptotic order. If the path has a huge discrepancy, acceptance may be tiny; that preserves an ideal target but provides little useful exploration. Reducing the step changes the work per unit travel time and can resolve integration error. It cannot, on its own, establish that all relevant posterior regions have been reached.

## The Gaussian matrix exposes both stability and error

For unit mass and $U(q)=q^2/2$, one leapfrog step is multiplication by
\\[
A_h=\\begin{pmatrix}
1-h^2/2 & h\\\\
-h(1-h^2/4) & 1-h^2/2
\\end{pmatrix}.
\\]
Its determinant is $(1-h^2/2)^2+h^2(1-h^2/4)=1$. With $S=\\operatorname{diag}(1,-1)$, $SA_hS=A_h^{-1}$. These are exact algebraic identities before floating-point evaluation.

For $|h|<2$, the positive quadratic form
\\[
\\widetilde H_h(q,p)=\\tfrac12\\{(1-h^2/4)q^2+p^2\\}
\\]
is exactly preserved by this linear map. Expanding $A_h^{\\mathsf T}\\operatorname{diag}(1-h^2/4,1)A_h$ verifies the claim. Its difference from the true energy is $-h^2q^2/8$. Bounded numerical orbits therefore have oscillatory true-energy errors of order $h^2$; they do not generally have zero error.

The one-step energy expansion at a fixed state is
\\[
H(A_h(q,p))-H(q,p)
=\\frac{qp}{4}h^3+\\frac{p^2-q^2}{8}h^4-\\frac{qp}{8}h^5+\\frac{q^2}{32}h^6.
\\]
It displays both the generic cubic leading term and its possible cancellation at $q=0$ or $p=0$. The laboratory uses a launch with $qp\\ne0$ for its order check.

At $|h|=2$, the quadratic form degenerates and repeated steps can grow polynomially. For $|h|>2$, the matrix has real reciprocal eigenvalues, with one magnitude exceeding one; generic trajectories grow geometrically. Thus $h=2.1$ supplies a deliberate inaccurate-step contrast for the same normal target. The finite failure run records actual energy discrepancies, acceptance and retained motion; no particular stochastic outcome is asserted in advance.

These special calculations validate a linear primitive and explain the failure mechanism. They do not establish stability for an arbitrary hierarchy. In several Gaussian dimensions, the relevant bound involves the largest frequency of $M^{-1}\\Sigma^{-1}$, so a step stable in one coordinate can fail in another. Adapting a metric and changing coordinates are ways to address those scales, subject to their own target-preservation checks.

### An exact leapfrog resonance

The stable regime still contains choices that do not explore. Put $k=1-h^2/4>0$ and change phase coordinates to $(Q,P)=(\\sqrt{k}\\,q,p)$. The one-step matrix becomes
\\[
\\begin{pmatrix}a&h\\sqrt{k}\\\\-h\\sqrt{k}&a\\end{pmatrix},
\\qquad a=1-h^2/2,\\qquad a^2+h^2k=1.
\\]
For $0<h<2$ this is a rotation with $\\cos\\varphi=1-h^2/2$. A numerical trajectory can therefore return after an exact integer number of rotations, even though the continuous flow time is different.

At $h=\\sqrt2$, the original matrix is
\\[
A=\\begin{pmatrix}0&\\sqrt2\\\\-1/\\sqrt2&0\\end{pmatrix},
\\qquad A^2=-I,\\qquad A^4=I.
\\]
With fixed length $L=4$, the leapfrog proposal returns to the same $(q,p)$ before its final momentum flip. The flip changes no energy, so acceptance is one. Yet the position never moves, regardless of how often fresh independent momentum is drawn. With $L=2$, the proposed position is $-q$, again with unchanged total energy; its absolute value remains fixed forever.

This is an analytic exact-arithmetic example, not a reported floating-point run. A machine approximation to $\\sqrt2$ generally yields a near-return rather than an exact identity. It can still produce very slow positional movement and excellent-looking acceptance; it does not justify declaring the implemented floating-point chain literally reducible by this algebra alone.

An integration length randomized independently of the state produces a mixture of the valid fixed-length kernels and can avoid this particular exact resonance if it includes useful lengths. That is different from choosing a length using the current position: the section “A state-dependent length can destroy the inverse map” shows why that requires its own reverse-construction proof. Neither randomization nor a valid invariant mixture is a universal efficiency theorem.

The example links the averaging chapter's distinction between stationarity and exploration with the diagnostics chapter's warning about acceptance. Small energy error and acceptance one are compatible with no information about the target beyond the initial radius. The scientific estimand and the movement needed to estimate it must be checked separately.

## Constraints require a transformed posterior

A positive parameter can be written $\\tau=e^\\eta$. If the original target is a density in $d\\tau$, its density in $d\\eta$ includes $e^\\eta$, adding $\\eta$ to the log target. For a bounded probability use a logit and its factor $p(1-p)$. HMC requires gradients of the complete transformed log density, including these terms; an unconstrained optimizer's objective without a Jacobian generally targets a different measure.

In a centered hierarchy, $\\theta_j=\\mu+\\tau z_j$ transforms $J$ group coordinates with absolute Jacobian $\\tau^J$ at fixed $\\mu,\\tau$. Multiplying this factor by the $J$ Gaussian prior normalizers $\\tau^{-J}$ yields independent standard normal priors for $z_j$. A further $\\tau=e^\\eta$ contributes another factor $\\tau$. Forgetting one of these distinct transformations changes the posterior scale distribution.

Parameterization also affects geometry. With weak group information, a centered prior ties the plausible width of each $\\theta_j-\\mu$ to small $\\tau$, creating a narrow neck. Noncentering keeps $z_j$ on a unit prior scale. Strong observations may instead tie $\\mu+\\tau z_j$ tightly to the data and create substantial noncentered dependence. Which representation works better depends on the relative data and prior information, not a universal rule.

The shared eight-schools fixture in the hierarchy chapter fixes all eight measurements and known errors, $\\mu\\sim N(0,20^2)$ and $\\tau\\sim\\operatorname{HalfNormal}(10)$. This chapter uses that exact fixture for its hierarchy protocol, not an unspecified “standard prior.” The Gaussian sampler below is a different target and cannot supply the hierarchy's fitted diagnostics.

Transforms must be invertible on the declared support and compatible with differentiability along trajectories. A hard truncation introduced solely to avoid a numerical exception changes the model. A smooth approximation to a real discontinuity likewise changes the target unless an explicit approximation analysis accompanies it. Numerical convenience does not authorize replacing the scientific support.

## Nonconstant metrics change the Hamiltonian itself

Suppose momentum is conditionally Gaussian with covariance $G(q)$, positive definite and differentiable for every relevant $q$. Its normalized conditional density contributes a determinant, giving
\\[
H(q,p)=U(q)+\\tfrac12\\log|G(q)|+\\tfrac12p^{\\mathsf T}G(q)^{-1}p
\\]
up to a constant. Omitting the log determinant would leave a position marginal proportional to $\\pi(q)|G(q)|^{1/2}$ after momentum integration. This is a wrong target, not merely a different preconditioner.

The position equation is $\\dot q=G(q)^{-1}p$. For a component $q_i$, the momentum equation contains
\\[
-\\partial_i U-\\tfrac12\\operatorname{tr}(G^{-1}\\partial_iG)
+\\tfrac12p^{\\mathsf T}G^{-1}(\\partial_iG)G^{-1}p.
\\]
These derivatives explain why substituting a position-dependent matrix into the ordinary fixed-mass shear formula is invalid. A position update now depends on $q$ through the metric, and the simple triangular-volume proof no longer applies.

Riemannian algorithms need an appropriate reversible, volume-preserving generalized integrator or an explicitly corrected alternative. Implicit substeps require solver convergence criteria and a reversal check at the actual tolerance. A failed implicit solve must not be silently accepted as though it were the exact prescribed map. This chapter imports such integrator constructions rather than presenting an ordinary leapfrog implementation as an RMHMC program.

SoftAbs makes an indefinite symmetric Hessian into a positive matrix by applying $s_\\alpha(\\lambda)=\\lambda\\coth(\\alpha\\lambda)$ to its eigenvalues, with $\\alpha>0$ and $s_\\alpha(0)=1/\\alpha$ by continuity. For small $|\\alpha\\lambda|$, the expansion $1/\\alpha+\\alpha\\lambda^2/3+\\cdots$ avoids a removable zero-over-zero computation. For large magnitude the value approaches $|\\lambda|$, not the signed eigenvalue.

A positive metric is necessary but does not by itself validate derivatives, an implicit solver or a sampler. Degenerate or repeated eigenvalues require a numerically appropriate derivative treatment; differentiating an arbitrary eigensolver's eigenvectors naively can be unstable. The source duty remains an explicit metric/integrator import with these assumptions, not an executed production fit or a claim that Hessian regularization automatically resolves every funnel.

## NUTS constructs a reversible selection problem

Stopping an HMC path when it first looks unhelpful is not automatically a valid proposal. The stopping time can depend on the starting point, so the same endpoint might generate a different reverse path. Selecting the last point at a first U-turn and applying only an energy ratio therefore needs a new proof; it is not the construction imported here.

In the original slice-based NUTS construction, augment the current position and momentum with a slice variable uniform between zero and the joint density at that point. Build a trajectory tree by repeatedly choosing a direction and doubling with reversible leapfrog steps. The tree contains candidate states satisfying the slice constraint, together with recursively checked validity and turning conditions. The current state is included among eligible candidates. Uniform sampling in a simplified set-based construction can be implemented by reservoir selection: accept a new subtree's candidate with probability its eligible count divided by the combined count.

The proof requires symmetry of the set-construction and selection procedure from every eligible state, including the internal subtree stopping checks. An endpoint dot-product test is just one ingredient. The exact algorithm imported for the protocol below is the original Hoffman–Gelman slice algorithm with its recursive BuildTree and dual-averaging construction; it is not a claim that these few sentences implement production NUTS. Modern multinomial variants have different weighting and termination details and must be identified separately.

A maximum tree depth bounds work but introduces another diagnostic: reaching that cap can mean the chosen expansion stopped before the turning criterion. It is not the same event as an integration-error divergence. A large tree depth can also spend many gradient evaluations on a well-behaved trajectory. Compare ESS or MCSE per gradient evaluation as well as per retained draw.

Warmup may adapt step size and a regularized fixed metric; these are then frozen for the retained transitions in the stated protocol. Removing a manually fixed $L$ does not remove all choices: maximum depth, adaptation target, metric convention and numerical divergence criterion still matter. The supplied fixed-$L$ Gaussian laboratory has no NUTS tree and cannot generate a meaningful tree-depth statistic.

## A declared hierarchy protocol with an honest implementation boundary

For the shared fixture CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1, use $y=(28,8,-3,7,-1,1,18,12)$ and known standard deviations $(15,10,16,11,9,11,10,18)$. The likelihoods are independent Normal$(\\theta_j,\\sigma_j^2)$, with the proper priors stated above and independent $\\theta_j\\mid\\mu,\\tau\\sim N(\\mu,\\tau^2)$. The independent reference is [COMM06-HIERARCHY-03 in the hierarchy chapter](#/item/book-computational-bayesian-modeling?chapter=hierarchical-models-and-partial-pooling), under “Solutions: the shared proper eight-schools hierarchy reference”. It requests $4000$ accepted collapsed-hyperposterior draws followed by conditional normals, with zero warmup and a four-million-proposal cap per prior, failing rather than reducing the draw count. Its primary HalfNormal$(10)$ model is exactly the target used here; its separately labelled HalfNormal$(5)$ sensitivity target is not pooled with it. Those ideal iid reference draws are distinct from HMC/NUTS output and require their own actual reproduction evidence.

Compare centered coordinates $(\\theta_1,\\ldots,\\theta_8,\\mu,\\eta)$ with noncentered $(z_1,\\ldots,z_8,\\mu,\\eta)$, where $\\tau=e^\\eta$. In each representation evaluate exactly its transformed target and verify gradients on the same declared physical parameter points, including $\\tau=0.1,1,10$ and moderate group deviations. Map all retained output back to $(\\mu,\\tau,\\theta)$ before comparing estimands.

An explicit imported NUTS protocol uses the original slice algorithm, maximum depth ten, target acceptance $0.8$, $2000$ warmup transitions and $4000$ retained per chain from four starts. Use $\\mu=(-10,0,10,20)$, $\\tau=(0.1,1,5,10)$ and $\\theta_j=\\mu$ for centered starts; corresponding noncentered starts have $z_j=0$. Use seed base $20261105$ with offsets $0,1,2,3$ for the centered and $10,11,12,13$ for the noncentered NUTS protocol. Use the original dual-averaging constants $\\gamma=0.05$, $t_0=10$, $\\kappa=0.75$, freeze after $2000$ warmup transitions and keep $M=I$ for this particular protocol. Apply the depth cap only at complete symmetric doubling rounds under the imported validity construction. No current public code for this NUTS protocol is supplied here, so no run, default software version or fitted diagnostic is claimed.

A fixed-mass comparison can use the same target and starts with $M=I$, $L=10$, initial step $0.01$, and the same acceptance-target $0.8$ dual-averaging schedule during $2000$ warmup updates, frozen before $4000$ retained updates. Use seed offsets $20,21,22,23$ for centered and $30,31,32,33$ for noncentered fixed-length HMC from base $20261105$. These initial values define an experimental template, not a promise that they are efficient or stable in either coordinate system. In particular a scale near zero may demand far smaller steps in centered coordinates.

For each actual fit retain transition energies, numerical-error criterion, acceptance, tree depth when a tree exists, and the estimand-specific diagnostic output. Compare $\\mu,\\tau$, all group effects, a tail event such as $\\tau>10$, and predictive discrepancies under the same model. Agreement with an independent posterior reference is evidence for those summaries at their simulation errors, not proof of convergence of every output coordinate.

## Warmup, divergences and finite evidence

Warmup changes an initialization and often tunes algorithmic parameters. It cannot certify stationarity after a fixed number of updates. A declared retained segment begins only after tuning freezes, but its initial state can still carry transient effects. Multiple dispersed starts, sensitivity to longer runs, and independently checked reference calculations address different parts of this uncertainty.

A divergence flag records failure of a particular numerical criterion, such as a very large energy error or an unsuccessful implicit solve. Different algorithms can define it differently. A rejection with moderate energy error is an ordinary part of a Metropolis kernel, whereas a large-error flag may identify a region with systematically poor exploration. The flag is not a finite proof that the ideal invariant-kernel theorem has become false.

Likewise, removing flags by reducing the step size can genuinely resolve integration error. It does not on its own establish adequate exploration or accurate tail estimates. Neither does it prove the geometry necessarily remains pathological. Compare relevant summaries and uncertainty, inspect where the original flags occurred, and investigate parameterizations or model changes when a remaining problem calls for them. Reparameterizing is a principled option, not a logical consequence of any one diagnostic count.

For the Gaussian laboratory, the recorded energy is $H(q_n,p_n)$ immediately after a fresh momentum draw and before the retained proposal. Its endpoint energy and acceptance are recorded separately. An energy-based diagnostic must use that precise sequence and explain its definition. There is no latent hierarchy, no NUTS tree and no production divergence threshold in that experiment.

Finite diagnostic thresholds are scoped regression checks. Four agreeing chains can share a failure; a small MCSE from an inadequately mixing trace can be misleading; and a numerical gradient check can miss a bug outside its tested points. Record both successes and warning cases without converting a finite pass into a universal convergence statement. The mathematical kernel proof and the finite software evidence support one another while answering different questions.

## Typical posterior mass need not lie near its mode

The gradient points toward larger density locally, but posterior sampling is about probability mass, which also includes volume. For a $d$-dimensional standard normal, the density is largest at the origin while the squared radius $R^2=\\sum q_i^2$ has mean $d$ and variance $2d$. Chebyshev's inequality gives
\\[
P(|R^2/d-1|\\ge\\varepsilon)\\le2/(d\\varepsilon^2).
\\]
For large $d$, much of the mass therefore lies in a shell of radius about $\\sqrt d$, even though each point in that shell has lower density than the origin.

This explains why describing HMC as continually climbing toward the mode is incomplete. A refreshed momentum contributes kinetic energy, which can convert into potential energy and carry the position through lower-density regions with substantial total probability. Exact motion conserves total energy; it does not conserve potential energy separately.

The extended Gaussian target has both position and momentum radii. Refreshing momentum changes the trajectory's energy distribution without moving the current position instantaneously. Subsequent dynamics exchange the two forms of energy. A momentum refresh is thus a probabilistic update for a specified joint law, not an arbitrary kick intended only to help optimization.

A sampler confined near one local mode can report small numerical errors while missing most posterior mass. An optimizer can correctly locate a mode without producing a useful posterior sample. Conversely a sampling path need not repeatedly visit the maximizer to be accurate for a probability integral. These distinctions are especially important for hierarchical scales and high-dimensional latent effects, where a visually attractive central point may be atypical under the posterior.

The concentration calculation is a property of the normal model, not an assertion that every posterior has a thin spherical shell. Heavy tails, constraints, multimodality and nonlinear dependence alter the geometry. It is a worked warning about equating high density with high mass, and about transferring an optimization stopping rule into a sampling claim.

## Whitening and mass conventions can be checked algebraically

For a Gaussian position target with covariance $\\Sigma$ and constant mass $M$, the equation is $\\ddot q=-M^{-1}\\Sigma^{-1}q$. Taking $M=\\Sigma^{-1}$ makes all frequencies one. Taking $M=\\Sigma$ instead generally squares the disparity of the original position scales.

For example let $\\Sigma=\\operatorname{diag}(100,0.01)$. With identity mass, the frequencies are $0.1$ and $10$. With $M=\\Sigma$, they are $0.01$ and $100$. With $M=\\Sigma^{-1}$, both are one. The leapfrog stability constraint must accommodate the largest frequency, while useful travel in a slow direction depends on the smallest. A poor convention can therefore cost many unnecessary steps.

Whitening makes the same issue visible in coordinates. Write $q=Cz$ with $CC^{\\mathsf T}=\\Sigma$, so $z$ has identity covariance. A canonical momentum change preserving the pairing $p_q^{\\mathsf T}dq=p_z^{\\mathsf T}dz$ is $p_z=C^{\\mathsf T}p_q$. A unit kinetic energy in $z$ becomes a kinetic energy in $q$ with mass $\\Sigma^{-1}$. The calculation matches the frequency argument.

When covariance is estimated during warmup, regularization prevents a nearly singular finite estimate from creating an unusable inverse. One can shrink a covariance estimate toward a positive diagonal matrix, check its eigenvalues and freeze the resulting mass before retaining draws. The regularization rule and convention must be recorded. A noisy estimate updated at every retained state is a different adaptive or position-dependent algorithm, not the fixed-mass construction proved above.

Whitening does not remove nonlinear curvature globally. A single covariance describes a linear scale and correlation structure; a funnel changes its scale across the state space. It can improve a Gaussian example dramatically while leaving a hierarchical neck difficult. This is another reason the normal laboratory is a primitive check rather than a substitute for a fitted hierarchy.

## Why candidate selection probabilities matter

A finite analogue isolates the selection condition behind trajectory methods. Suppose a target is uniform on a finite slice set. From current state $x$, construct a candidate subset $C$ containing $x$ with probability $Q(C\\mid x)$, then draw $y$ uniformly from $C$. If $Q(C\\mid x)=Q(C\\mid y)$ for every eligible $x,y\\in C$, then
\\[
P(x,y)=\\sum_{C\\ni x,y}Q(C\\mid x)/|C|
\\]
is symmetric. Hence it preserves the uniform slice law. The symmetry of the constructed set, not just its size, is doing essential work.

With a nonuniform finite target $\\rho$, drawing from weights proportional to $\\rho(y)$ within $C$ gives terms $\\rho(x)Q(C)\\rho(y)/\\sum_{z\\in C}\\rho(z)$ in the balance equation, again symmetric under the same construction condition. This is a precise small model of why weighted trajectory selection can work. It is not a proof for an arbitrary stopping rule on a continuous path.

Uniform reservoir selection from two eligible collections of sizes $n_1,n_2$ chooses the second collection's uniform candidate with probability $n_2/(n_1+n_2)$. Multiplication shows that every member then has probability $1/(n_1+n_2)$. This explains one recursive building block. The efficient original NUTS algorithm also uses a different outer progressive-selection probability, including $\\min(1,n'/n)$, with its exact validity conditions. Replacing that outer rule with a plausible-looking reservoir rule is a different algorithm.

The imported Algorithms 3 and 6 must consequently be followed as complete constructions. Their recursive exclusions are not decorative safeguards that can be dropped after checking only the final endpoints. Multinomial trajectory samplers likewise require their own weighting and symmetric construction proof. The finite calculation provides a way to ask the right question when inspecting such an algorithm: which reverse constructions have exactly the same probability?

## Funnel curvature and a fully transformed gradient

The shared hierarchy permits an explicit comparison of local scales. In centered coordinates, the negative-log-density curvature in $\\theta_j$ is $\\tau^{-2}+\\sigma_j^{-2}$. With identity mass, the corresponding small-scale frequency grows like $1/\\tau$ as $\\tau$ approaches zero. The Gaussian stability calculation suggests a necessary local step scale of order $\\tau$ for that direction. Couplings and nonlinear trajectory changes still need analysis; this is a local mechanism, not a global bound.

In noncentered coordinates let $r_j=y_j-\\mu-\\tau z_j$ and $\\tau=e^\\eta$. Up to constants, the transformed log target is
\\[
\\ell=-\\mu^2/800-\\tau^2/200-\\tfrac12\\sum_jz_j^2
-\\tfrac12\\sum_jr_j^2/\\sigma_j^2+\\eta.
\\]
The derivatives are
\\[
\\partial_{z_j}\\ell=-z_j+\\tau r_j/\\sigma_j^2,\\qquad
\\partial_\\mu\\ell=-\\mu/400+\\sum_jr_j/\\sigma_j^2,
\\]
\\[
\\partial_\\eta\\ell=1-\\tau^2/100+\\tau\\sum_jz_jr_j/\\sigma_j^2.
\\]
The leading one in the last derivative comes from the log-scale Jacobian. Omitting it shifts the scale posterior.

In centered coordinates the corresponding log target contains $(1-J)\\eta-\\sum_j(\\theta_j-\\mu)^2/(2\\tau^2)$ rather than the standard-normal $z$ term. Its gradients are
\\[
\\partial_{\\theta_j}\\ell=-(\\theta_j-\\mu)/\\tau^2+(y_j-\\theta_j)/\\sigma_j^2,
\\quad
\\partial_\\mu\\ell=-\\mu/400+\\sum_j(\\theta_j-\\mu)/\\tau^2,
\\]
\\[
\\partial_\\eta\\ell=1-J-\\tau^2/100+\\sum_j(\\theta_j-\\mu)^2/\\tau^2.
\\]
These formulas use exactly the proper HalfNormal$(10)$ and Normal$(0,20^2)$ priors, with $J=8$.

Noncentered $z$ curvature is $1+\\tau^2/\\sigma_j^2$, bounded as $\\tau\\to0$. Strong likelihood information can make other noncentered directions highly dependent, so the calculation explains a local advantage without declaring one representation universally superior. The two targets must give the same expectations of mapped physical quantities when sampled correctly; their coordinate densities and gradients are intentionally different.

## Gradient checks are comparisons with an error budget

For a smooth scalar log target, a centered finite difference has truncation error $O(h^2)$, with a constant involving the third derivative. Subtracting nearby floating-point values contributes an opposing roundoff scale roughly proportional to machine precision divided by $h$, with a scale determined by the function values. Reducing $h$ indefinitely therefore does not guarantee a more accurate check.

Use several steps around a scale-aware choice, and compare $|g-d_h|$ with $a+r\\max(|g|,|d_h|)$. Both tolerances need a declared precision and parameter scale. A broad plateau of agreement followed by deterioration at very small steps is consistent with the two error sources. A persistent sign discrepancy across steps suggests an algebraic or coordinate error.

For a quadratic Gaussian potential, the centered derivative is exact in real arithmetic, so any finite-difference discrepancy is roundoff or implementation error. For the transformed hierarchy, testing the same physical point in centered and noncentered coordinates checks the chain rule and Jacobian terms. A point at $\\tau=0$ is outside the transformed support and is not an admissible finite-difference test.

Finally count work honestly. A straightforward leapfrog implementation evaluates a gradient twice per step; adjacent half-steps can share a force evaluation, reducing a length-$L$ trajectory to $L+1$ evaluations. Either implementation can be correct. ESS per gradient evaluation depends on which one is actually run, while ESS per retained iteration hides that difference. The laboratory declares its simple unmerged implementation and counts its two gradients per step rather than borrowing an optimized cost from another implementation.

## A state-dependent length can destroy the inverse map

A fixed step count in the involution proof is a mathematical condition. Replacing it by a length chosen from the current position without a symmetric construction law can invalidate the transition. Even exact energy conservation and unit determinants on individual branches do not rescue an arbitrary rule.

For the Gaussian oscillator, take exact flow time $\\pi/2$ when $q\\ge0$ and time $\\pi$ when $q<0$, followed by momentum flip. In the first region the map is $(q,p)\\mapsto(p,q)$; in the second it is $(q,p)\\mapsto(-q,p)$. Each branch preserves energy and has unit absolute determinant. Yet $(-1,0.5)$ and $(0.5,1)$ both map to $(1,0.5)$. The piecewise proposal is not one-to-one, hence is not the volume-preserving involution assumed by the simple Metropolis proof.

Accepting every move on the grounds of zero energy error would use an unjustified kernel. The missing information is the law for selecting the trajectory, including its reverse construction. Randomizing a length independently of the state gives a mixture of fixed-length invariant kernels. Choosing a length from the state requires a separately proven augmented scheme, as in a fully specified NUTS construction.

This also explains why local Jacobian tests cannot establish global invertibility. Two locally valid branches can overlap in their images. A proposal proof must identify the inverse and its selection probability, not merely calculate a determinant at selected points. The fixed laboratory keeps its length constant so that its reversal test matches the proven construction.

## Solutions: Gaussian HMC laboratory reference

COMM06-CASE-02 targets exactly $N(0,1)$ with unit mass and a fresh independent $N(0,1)$ momentum each transition. There are no observations or fitted hierarchy. The proper joint density is $(2\\pi)^{-1}e^{-(q^2+p^2)/2}$. Position mean, variance and SD are $0,1,1$; quantiles are $\\Phi^{-1}(0.025),0,\\Phi^{-1}(0.975)$. At stationarity the refreshed joint energy has mean and variance one.

The primary profile preserves starts $(-8,-2,2,8)$, step $0.25$, seven leapfrog steps, $1000$ warmup and $4000$ retained transitions per chain. The starts, step, length, warmup and retained counts match the historical internal benchmark. This public implementation deliberately assigns separate Generator(PCG64) streams using base $20260906$ and offsets $50,\\ldots,53$; the historical internal program used one shared stream seeded at base plus $50$. These are new random trajectories, not reused observations. There is no adaptation. The unmerged implementation uses two gradient evaluations per leapfrog step.

Its deterministic audit applies the proposal twice to $(0.7,-0.3)$, checking reversal below $10^{-13}$ and determinant error below $10^{-14}$. The determinant is calculated from basis images of the actual one-step Gaussian callable and compared with the derived matrix; linearity makes this its exact-arithmetic Jacobian, rather than a finite-difference approximation. One-step energy-order slopes use steps $0.04,0.02,0.01,0.005$ and criterion $2.85$–$3.15$. The deliberate unstable-step launch $(1,0)$ at step $2.1$ and length twenty has an energy-error criterion greater than one. These are scoped regression checks, not universal integrator guarantees.

A separate inaccurate-step stochastic profile repeats the same four starts, seeds, warmup, retained draws and length seven with step $2.1$. Only its actual summaries are reported. The count $|\\Delta H|>100$ is explicitly a toy numerical warning, not a claimed production divergence definition.

The primary JSON retains chain/time order for positions, initial refreshed energies, proposed endpoint energies, energy differences and acceptance flags. Rejected positions remain repeated entries. Its energy-start sequence is $H(q_{\\rm current},p_{\\rm fresh})$ immediately before each retained proposal. A separately declared diagnostics companion can use these exact arrays; it must not invent NUTS tree depths.

The report includes schema and program IDs. Its authoritative source/fence/body and output hashes are bound by the external root receipt rather than a self-referential digest embedded in its code. The historical mean/SD error thresholds $0.04$ and quantile error $0.08$ apply to the pooled $4\\times4000$ positions; per-chain checks are additional diagnostic warnings. All are finite observations to report, not guaranteed realized passes. Rank-normalized split/folded R-hat is supplied by the separately declared diagnostics companion, with the scoped historical criterion below $1.01$. All code remains unexecuted by authors until the whole owning source and passports freeze and root reproduces them.

For CBM-CLAIM-029 at content/books/computational-bayesian-modeling/gradient-based-sampling.md:49, NUTS and Riemannian constructions have explicit_import disposition, while the shared-hierarchy comparison has template_scope disposition. The hierarchy chapter supplies the exact fixture and independent posterior reference. The Gaussian toy does not discharge hierarchy/NUTS/state-dependent metric or production-fit duties.

## References: gradient sampler boundaries

The local proofs can be compared with Neal, [MCMC using Hamiltonian dynamics](https://arxiv.org/abs/1206.1901), Sections 2–3. The NUTS protocol imports Hoffman and Gelman, [The No-U-Turn Sampler](https://www.jmlr.org/papers/volume15/hoffman14a/hoffman14a.pdf), Algorithms 3 and 6 with their complete recursive validity and distinct inner/outer selection probabilities.

The metric and SoftAbs construction is imported from Betancourt, [A General Metric for Riemannian Manifold Hamiltonian Monte Carlo](https://arxiv.org/abs/1212.4693), Sections II–III. The determinant and force derivatives are derived above; ordinary fixed-mass leapfrog is not asserted valid for a varying metric.

## Solutions: Gaussian HMC reference program

The pinned listing reads no input and emits one compact sorted-key JSON document. It performs no file, network, process or installation I/O. It is unexecuted by the authors.

\`\`\`python
import json
import math
import platform
import numpy as np
import scipy
from scipy.special import ndtri

DEPS = {"python":"3.14.7","numpy":"2.5.2","scipy":"1.18.1"}
BASE = 20260906
STARTS = (-8.0,-2.0,2.0,8.0)
WARMUP, KEEP, L = 1000, 4000, 7

def need(ok, message):
    if not ok:
        raise RuntimeError(message)

def energy(q,p):
    return 0.5*(q*q+p*p)

def leapfrog(q,p,step,length):
    for _ in range(length):
        p -= 0.5*step*q
        q += step*p
        p -= 0.5*step*q
    return q,p

def proposal(q,p,step,length):
    q,p = leapfrog(q,p,step,length)
    return q,-p

def integrator_checks():
    q,p = 0.7,-0.3
    u,v = proposal(q,p,0.25,L)
    back = proposal(u,v,0.25,L)
    reversal = max(abs(back[0]-q),abs(back[1]-p))
    h = 0.25
    a,b,c = 1-h*h/2,h,-h*(1-h*h/4)
    first = leapfrog(1.0,0.0,h,1)
    second = leapfrog(0.0,1.0,h,1)
    determinant_error = abs(first[0]*second[1]-second[0]*first[1]-1)
    matrix_error = max(abs(first[0]-a),abs(first[1]-c),
                       abs(second[0]-b),abs(second[1]-a))
    steps = (0.04,0.02,0.01,0.005)
    errors = [abs(energy(*leapfrog(q,p,e,1))-energy(q,p)) for e in steps]
    slopes = [math.log(errors[i]/errors[i+1],2) for i in range(3)]
    bad_q,bad_p = leapfrog(1.0,0.0,2.1,20)
    bad_error = abs(energy(bad_q,bad_p)-0.5)
    need(reversal<1e-13,"reversal check")
    need(determinant_error<1e-14,"determinant check")
    need(matrix_error<1e-14,"Gaussian callable versus derived matrix")
    need(all(2.85<x<3.15 for x in slopes),"local energy order")
    need(bad_error>1.0,"declared unstable-step contrast")
    return {"launch":[q,p],"reversal_max_abs":reversal,
            "determinant_abs_error":determinant_error,
            "determinant_scope":"basis images of the actual Gaussian linear callable",
            "matrix_formula_max_abs_error":matrix_error,
            "local_steps":list(steps),"local_energy_abs_errors":errors,
            "local_log2_slopes":slopes,
            "step_failure":{"epsilon":2.1,"L":20,"launch":[1,0],
                            "energy_abs_error":bad_error,"criterion":"energy_abs_error>1"}}

def chain(start,seed,step):
    rng = np.random.Generator(np.random.PCG64(seed))
    q = start
    draws,before,after,delta,accept = [],[],[],[],[]
    warning = accepted_all = 0
    for t in range(WARMUP+KEEP):
        p = float(rng.normal())
        e0 = energy(q,p)
        u,v = proposal(q,p,step,L)
        e1 = energy(u,v)
        difference = e1-e0
        need(math.isfinite(e1) and math.isfinite(difference),"nonfinite Gaussian trajectory")
        log_u = math.log1p(-float(rng.random()))
        take = difference <= 0.0 or log_u < -difference
        if take:
            q = u
        accepted_all += int(take)
        if t >= WARMUP:
            draws.append(q); before.append(e0); after.append(e1)
            delta.append(difference); accept.append(bool(take))
            warning += int(abs(difference)>100)
    x = np.asarray(draws)
    summary = {"mean":float(x.mean()),"sd":float(x.std(ddof=1)),
               "quantiles":np.quantile(x,[0.025,0.5,0.975],method="linear").tolist(),
               "acceptance":sum(accept)/KEEP,
               "acceptance_all":accepted_all/(WARMUP+KEEP),
               "large_energy_error_count_abs_gt100":warning}
    return {"seed":seed,"start":start,"draws":draws,"energy_start":before,
            "energy_proposal":after,"delta_energy":delta,"accepted":accept,
            "summary":summary}

def run_case():
    actual = {"python":platform.python_version(),
              "numpy":np.__version__,"scipy":scipy.__version__}
    need(platform.python_implementation()=="CPython" and actual==DEPS,"dependency versions")
    checks = integrator_checks()
    chains = [chain(s,BASE+50+j,0.25) for j,s in enumerate(STARTS)]
    failures = [chain(s,BASE+50+j,2.1) for j,s in enumerate(STARTS)]
    refs = [float(ndtri(p)) for p in (0.025,0.5,0.975)]
    pooled = np.asarray([c["draws"] for c in chains]).reshape(-1)
    combined = {"mean":float(pooled.mean()),"sd":float(pooled.std(ddof=1)),
                "quantiles":np.quantile(pooled,[0.025,0.5,0.975],method="linear").tolist()}
    combined["finite_scope_checks"] = {
        "mean_abs_error_lt_0.04":abs(combined["mean"])<0.04,
        "sd_abs_error_lt_0.04":abs(combined["sd"]-1)<0.04,
        "max_quantile_abs_error_lt_0.08":
            max(abs(x-y) for x,y in zip(combined["quantiles"],refs))<0.08}
    for c in chains:
        s = c["summary"]
        s["per_chain_diagnostic_checks"] = {
            "mean_abs_error_lt_0.04":abs(s["mean"])<0.04,
            "sd_abs_error_lt_0.04":abs(s["sd"]-1)<0.04,
            "max_quantile_abs_error_lt_0.08":
                max(abs(a-b) for a,b in zip(s["quantiles"],refs))<0.08}
    return {
        "schema_version":"1.0.0","case_id":"COMM06-CASE-02",
        "program_id":"COMM06-PROGRAM-02-GAUSSIAN-HMC",
        "dependencies":actual,"target":{"mean":0,"variance":1,"mass":1},
        "settings":{"epsilon":0.25,"L":L,"warmup":WARMUP,"retained":KEEP,
                    "starts":list(STARTS),"base_seed":BASE,
                    "chain_seeds":[BASE+50+j for j in range(4)],
                    "rng":"NumPy Generator(PCG64)",
                    "adaptation":"none; fixed-kernel initialization only",
                    "gradients_per_transition":2*L,
                    "momentum":"independent standard normal refresh each transition",
                    "proposal":"L leapfrog steps followed by momentum flip"},
        "integrator_checks":checks,
        "references":{"mean":0,"sd":1,"variance":1,"quantiles":refs,
                      "normalizing_constant":"sqrt(2*pi)",
                      "energy_mean_at_stationarity":1,"energy_variance_at_stationarity":1},
        "energy_definition":"energy_start=H(current position,fresh momentum) before retained "
                            "proposal; energy_proposal=H(leapfrog+flip endpoint); "
                            "delta_energy=energy_proposal-energy_start",
        "chains":chains,"combined_summary":combined,
        "inaccurate_step_profile":{"epsilon":2.1,"L":L,"warmup":WARMUP,
                                  "retained":KEEP,"same_starts_and_chain_seeds":True,
                                  "summaries":[c["summary"] for c in failures]},
        "limits":"Finite criteria are observations, not guaranteed realized passes. "
                 "Large-energy warning is a toy count, not a production divergence. "
                 "No NUTS tree, hierarchy or state-dependent metric is implemented."}

if __name__=="__main__":
    print(json.dumps(run_case(),ensure_ascii=False,sort_keys=True,
                     separators=(",",":"),allow_nan=False))
\`\`\`
`;export{e as default};