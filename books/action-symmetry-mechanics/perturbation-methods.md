
# Perturbation Methods

Exact solutions are rare in mechanics. Perturbation theory provides systematic approximations when a problem is close to one that is exactly solvable. This chapter covers regular perturbation theory, secular terms and their removal, the method of averaging, and canonical perturbation theory for Hamiltonian systems.

## Regular perturbation theory

Consider a system depending on a small parameter $\epsilon$:

$$\dot{x} = f_{0}(x) + \epsilon f_{1}(x) + O(\epsilon^{2}).$$

Assume the unperturbed system $\dot{x} = f_{0}(x)$ is solvable. Seek a solution as a power series:

$$x(t) = x_{0}(t) + \epsilon x_{1}(t) + \epsilon^{2}x_{2}(t) + \cdots.$$

Substituting and matching powers of $\epsilon$:

$$\dot{x}_{0} = f_{0}(x_{0}), \qquad \dot{x}_{1} = Df_{0}(x_{0})x_{1} + f_{1}(x_{0}), \qquad \dots$$

The first equation is the unperturbed system. The second is linear in $x_{1}$ with known coefficients (since $x_{0}(t)$ is known).

These coefficient equations are not yet an error estimate. For a fixed time interval $[0,T]$, suppose the vector field is twice continuously differentiable in state and parameter on a neighborhood containing the unperturbed trajectory, with bounded derivatives there and initial data having a corresponding expansion. Let $z=x_0+\epsilon x_1$. Taylor's theorem and the coefficient equations give a residual $r=\dot z-f(z,\epsilon)$ bounded by $C\epsilon^2$ throughout this interval. If $x$ is the exact solution and the initial discrepancy is at most $C_0\epsilon^2$, the integral equation gives

$$|x(t)-z(t)|\le C_0\epsilon^2+\int_0^t\bigl(L|x(s)-z(s)|+C\epsilon^2\bigr)\,ds.$$

Gronwall's inequality yields $|x-z|\le\epsilon^2(C_0+CT)e^{LT}$. A continuation argument using the neighborhood's positive margin closes the estimate for sufficiently small $\epsilon$. Thus regular perturbation has a rigorous fixed-time meaning. The constants may grow with $T$; the argument does not automatically establish a uniform approximation when $T$ itself grows like $1/\epsilon$. A small residual accumulated over a long interval can cause an order-one phase error.

## Worked example: anharmonic oscillator

Consider $\ddot{q} + \omega_{0}^{2}q + \epsilon q^{3} = 0$ with initial conditions $q(0) = A$, $\dot{q}(0) = 0$.

At $O(1)$: $\ddot{q}_{0} + \omega_{0}^{2}q_{0} = 0$, so $q_{0}(t) = A\cos(\omega_{0}t)$.

At $O(\epsilon)$:

$$\ddot{q}_{1} + \omega_{0}^{2}q_{1} = -q_{0}^{3} = -A^{3}\cos^{3}(\omega_{0}t) = -\frac{A^{3}}{4}(3\cos(\omega_{0}t) + \cos(3\omega_{0}t)).$$

The term $-\frac{3A^{3}}{4}\cos(\omega_{0}t)$ drives the oscillator at its natural frequency, producing a resonant (secular) response that grows linearly in time:

$$q_{1}^{(\text{secular})} = -\frac{3A^{3}}{8\omega_{0}}t\sin(\omega_{0}t).$$

This secular term invalidates the perturbation expansion for $t \sim 1/\epsilon$.

## The Poincaré–Lindstedt method

To remove secular terms, we allow the frequency to depend on $\epsilon$:

$$\omega = \omega_{0} + \epsilon\omega_{1} + \epsilon^{2}\omega_{2} + \cdots.$$

Rescale time: $\tau = \omega t$. The equation becomes

$$\omega^{2}q'' + \omega_{0}^{2}q + \epsilon q^{3} = 0.$$

At $O(\epsilon)$, choosing $\omega_{1} = 3A^{2}/(8\omega_{0})$ cancels the secular term. The corrected frequency is

$$\omega = \omega_{0} + \frac{3A^{2}}{8\omega_{0}}\epsilon + O(\epsilon^{2}).$$

**Physical interpretation:** The nonlinear term $q^{3}$ effectively stiffens the spring for positive $\epsilon$, increasing the frequency. The frequency shift depends on amplitude, a hallmark of nonlinear oscillators.

Keeping the initial amplitude fixed also fixes the bounded shape correction. For $\omega_0>0$, division by $\omega_0^2$ gives, after the resonant coefficient is canceled,

$$q_1''+q_1=-\frac{A^3}{4\omega_0^2}\cos3\tau.$$

The initial conditions $q_1(0)=q_1'(0)=0$ therefore give $q_1=A^3(\cos3\tau-\cos\tau)/(32\omega_0^2)$. The approximation is an amplitude-fixed oscillation with a shifted clock, rather than a sinusoid with a growing physical amplitude. For $\epsilon<0$ the frequency shift reverses sign; one must additionally restrict to the bounded small-amplitude well. This local expansion does not predict global confinement in a potential unbounded below. Nor does canceling the first secular term prove convergence of the entire formal series.

## Method of averaging

For systems of the form $\dot{x} = \epsilon f(x, t)$ where $f$ is periodic in $t$ with period $T$, the method of averaging replaces the rapidly oscillating forcing by its average:

$$\dot{\bar{x}} = \epsilon\bar{f}(\bar{x}), \qquad \bar{f}(x) = \frac{1}{T}\int_{0}^{T}f(x, t)\,dt.$$

**Theorem 14.1 (First-order averaging).** Under standard smoothness, boundedness, periodicity, and compact-domain hypotheses, solutions that remain in the controlled domain satisfy $|x(t)-\bar x(t)|=O(\epsilon)$ for $t=O(1/\epsilon)$. The constants and interval depend on those hypotheses; periodicity by itself is not enough.

Here is a precise version and its proof. Let $f$ be $T$-periodic in time, twice continuously differentiable in $x$ on an open set $D$, with $f$ and its first two state derivatives uniformly bounded on a neighborhood of a compact set $K\subset D$. Suppose the averaged solution from $x_*$ stays in $K$ for $0\le t\le L/\epsilon$, with fixed $L$, and that $K$ has a positive margin inside the controlled neighborhood. Then, for sufficiently small positive $\epsilon$, the exact solution from $x_*$ exists on that interval and differs from the averaged solution by at most $C_L\epsilon$.

Define the periodic, bounded primitive

$$u(y,t)=\int_0^t[f(y,s)-\bar f(y)]\,ds.$$

Its integrand has zero mean over each period, so $u(y,t+T)=u(y,t)$; the same is true of its bounded state derivatives. Make the near-identity change $x=y+\epsilon u(y,t)$. For small $\epsilon$, $\mathbf1+\epsilon D_yu$ has a uniformly bounded inverse. Differentiation gives

$$[\mathbf1+\epsilon D_yu]\dot y=\epsilon f(y+\epsilon u,t)-\epsilon[f(y,t)-\bar f(y)]
=\epsilon\bar f(y)+O(\epsilon^2).$$

Thus $\dot y=\epsilon\bar f(y)+\epsilon^2R(y,t,\epsilon)$ with bounded $R$. Since $u(y,0)=0$, $y$ and $\bar x$ have the same initial data. If $B$ bounds $R$ and $M$ is a Lipschitz constant for $\bar f$, their difference satisfies

$$|y(t)-\bar x(t)|\le\epsilon^2B\int_0^t e^{\epsilon M(t-s)}\,ds\le C_L\epsilon,$$

with the $M=0$ case read as $\epsilon^2Bt$. Adding $\epsilon u$ gives the claimed bound for $x$. First apply this estimate only until a trajectory could leave the controlled neighborhood. For small enough $\epsilon$, its distance from $K$ stays less than the margin, ruling out that first exit and proving continuation. This step prevents a circular assumption that both solutions remain bounded. The proof also explains why no conclusion on exponentially long times follows from first-order averaging alone.

## Worked example: weakly forced oscillator

Consider $\ddot{q} + \omega_{0}^{2}q = \epsilon\cos(\omega t)$ with $\omega \approx \omega_{0}$. Write $\omega = \omega_{0} + \epsilon\sigma$ and use the method of averaging.

Take $\omega_0>0$, zero initial displacement and velocity, and fix bounded detuning $\sigma$. Write $q=a\cos\omega_0t+b\sin\omega_0t$ and impose $\dot a\cos\omega_0t+\dot b\sin\omega_0t=0$. Variation of constants gives

$$\dot a=-\frac\epsilon{\omega_0}\sin\omega_0t\cos(\omega_0t+\epsilon\sigma t),\qquad
\dot b=\frac\epsilon{\omega_0}\cos\omega_0t\cos(\omega_0t+\epsilon\sigma t).$$

Holding the slow phase fixed while averaging the fast phase gives $\dot a=\epsilon\sin(\epsilon\sigma t)/(2\omega_0)$ and $\dot b=\epsilon\cos(\epsilon\sigma t)/(2\omega_0)$. Thus, when $\sigma\ne0$,

$$a=\frac{1-\cos\epsilon\sigma t}{2\omega_0\sigma},\qquad b=\frac{\sin\epsilon\sigma t}{2\omega_0\sigma}.$$

The exact solution is $q=\epsilon(\cos\omega t-\cos\omega_0t)/(\omega_0^2-\omega^2)$. For fixed bounded nonzero $\sigma$, comparison of the denominators confirms the averaged expression to order $\epsilon$ on the slow time interval. The continuous resonant limit is $q=\epsilon t\sin\omega_0t/(2\omega_0)$, which is exact for $\omega=\omega_0$. Its envelope grows linearly even though the driving force is small. It becomes order one on times $t=O(1/\epsilon)$; this does not invalidate the exact linear model, but a physical nonlinear or damped oscillator may then need additional terms. The earlier amplitude-phase description requires a specified phase convention and becomes singular at zero amplitude; the Cartesian quadratures avoid that singularity.

## Worked example: an exactly controlled average

For $\dot x=\epsilon x\sin^2t$, $x(0)=x_*$, direct separation gives

$$x(t)=x_*\exp\left(\frac{\epsilon t}{2}-\frac\epsilon4\sin2t\right),\qquad
\bar x(t)=x_*e^{\epsilon t/2}.$$

For $0\le t\le L/\epsilon$ their difference is at most $|x_*|e^{L/2}(e^{\epsilon/4}-1)$, hence $O(\epsilon)$ with a constant depending on $L$. The relative error is bounded by $e^{\epsilon/4}-1$ for every nonnegative time, but the absolute error need not remain small for arbitrarily long times because the common exponential envelope grows. This distinction matters when interpreting any approximation guarantee. The example also shows why averaging preserves slow growth while discarding a small bounded oscillation; replacing the original coefficient by zero would miss the order-one slow change entirely.

## Canonical perturbation theory

For a Hamiltonian $H = H_{0} + \epsilon H_{1}$ where $H_{0}$ is integrable, we seek a canonical transformation to new action-angle variables $(I, \phi) \mapsto (J, \theta)$ such that the new Hamiltonian depends only on $J$.

Using a type-2 generating function $S(J, \phi) = J\phi + \epsilon S_{1}(J, \phi) + \cdots$, the Hamilton--Jacobi equation becomes

$$H_{0}\left(\frac{\partial S}{\partial\phi}\right) + \epsilon H_{1}\left(\frac{\partial S}{\partial\phi}, \phi\right) = K(J).$$

At $O(\epsilon)$:

$$\omega_{0}(J)\frac{\partial S_{1}}{\partial\phi} + H_{1}(J, \phi) = K_{1}(J),$$

where $\omega_{0}(J) = \partial H_{0}/\partial J$. Choosing $K_{1}(J) = \bar{H}_{1}(J)$ (the average of $H_{1}$ over $\phi$) and integrating:

$$S_{1}(J, \phi) = \frac{1}{\omega_{0}(J)}\int^{\phi}[\bar{H}_{1}(J) - H_{1}(J, \phi')]\,d\phi'.$$

**Resonance and small divisors:** In the displayed one-angle equation, nonzero $\omega_{0}(J)$ gives a periodic primitive of the mean-zero forcing in $H_{1}$; Fourier harmonics commensurate with $\omega_{0}$ do not themselves make this integral diverge. For example, $H_{0}=J$, $H_{1}=\cos\phi$, and $\omega_{0}=1$ give the smooth periodic solution $S_{1}=-\sin\phi$. If $\omega_{0}(J) = 0$, the displayed division is unavailable; at that action the equation is compatible only if its oscillatory forcing vanishes. With several angles, each nonzero integer Fourier vector introduces the divisor $\mathbf{k}\cdot\boldsymbol{\omega}$; a zero divisor obstructs removal at that action only when the corresponding forcing coefficient is nonzero. Zero forcing in a resonant mode is compatible there, but does not guarantee a smooth extension across nearby actions. Small nonzero divisors require quantitative control against Fourier-coefficient decay, rather than implying automatic series divergence. Resonant terms may instead be retained in a normal form.

## The KAM theorem

**Theorem 14.2 (KAM (one standard analytic form)).** Let $H=H_0(I)+\epsilon H_1(I,\phi)$ be real analytic on a specified bounded action-angle domain, periodic in the angles, with a nondegenerate frequency map $\det D^2H_0\ne0$. If an unperturbed torus has a Diophantine frequency and the perturbation is sufficiently small in the corresponding analytic norm, a nearby invariant torus with that frequency persists. Quantitative versions describe a large-measure Cantor family of surviving tori as $\epsilon\to0$.

The surviving tori are those with sufficiently irrational frequency ratios (Diophantine condition). Between these tori, chaotic regions may exist. The KAM theorem explains the persistence of quasiperiodic motion in slightly perturbed integrable systems.

More precisely, this cited analytic KAM theorem guarantees tori satisfying a quantitative condition $|\mathbf k\cdot\boldsymbol\omega|\ge\gamma|\mathbf k|^{-\tau}$ for every nonzero integer $\mathbf k$, with fixed $\gamma>0$ and suitable $\tau>n-1$. Its perturbation threshold depends on these constants, an analytic complex neighborhood, bounds on $H_0$, and the inverse twist matrix. It is not a statement that every other torus is destroyed, or that the complement must be chaotic. Nor is its proof supplied by the first-order calculation: controlling an infinite iterative scheme and the shrinking analytic domains is additional machinery. The standard analytic invariant-torus theorem is an explicit input here; the calculations establish the homological equation that explains its hypotheses.

In several angles, if $H_1=\sum_{\mathbf k}h_{\mathbf k}(J)e^{i\mathbf k\cdot\phi}$, solving the first-order equation gives $S_{1,\mathbf k}=-h_{\mathbf k}/(i\mathbf k\cdot\boldsymbol\omega)$ for nonzero modes. A Diophantine lower bound turns exponentially decaying analytic coefficients into coefficients still exponentially decaying on a slightly smaller strip, because polynomial growth is dominated by that lost exponential margin. This explains one local estimate, without asserting convergence of a naive power series in $\epsilon$. Nondegeneracy permits a small action adjustment to compensate a frequency correction. Other versions of KAM use different nondegeneracy conditions; failure of this version's twist assumption is not a theorem of universal instability.

## Common errors

- **Ignoring secular terms:** Regular perturbation theory produces valid short-time approximations but fails for long times. Always check for resonant forcing terms.
- **Applying averaging outside its domain:** The method of averaging requires $\epsilon \ll 1$ and timescales $t = O(1/\epsilon)$. For longer times or larger $\epsilon$, higher-order corrections or different methods are needed.
- **Misidentifying resonances:** A resonance occurs when the unperturbed frequencies satisfy $\mathbf{k} \cdot \boldsymbol{\omega} = 0$ for some nonzero integer vector $\mathbf{k}$. A nonzero forcing coefficient in such a mode obstructs the attempted nonresonant removal of that term; the zero integer vector represents the angle average. Small nonzero divisors require estimates, while resonant normal forms may retain resonant terms.

## A small frequency change creates an order-one phase shift

Take an action-angle Hamiltonian
Hε=(ω+εa)I with fixed real a.
The action is exactly constant
and the angle advances by
(ω+εa)t. Comparing with the
unperturbed angle gives phase
difference εat. A coordinate
of fixed oscillation amplitude
therefore has an error bounded
by that amplitude times |εa|t,
until the trigonometric bound
by twice the amplitude becomes
the more useful statement.

The unperturbed approximation is
of first order in ε on
a fixed interval, but its
phase error need not remain
small over times proportional
to one divided by ε.
Including the corrected frequency
removes that drift exactly in
this simple integrable example.
Thus an approximation can preserve
an action and energy scale
while losing a phase-sensitive
output. Long-time perturbation
claims must state which variables
or observables are controlled
and which secular terms have
been incorporated into the
reference dynamics. A small
Hamiltonian coefficient alone
does not supply uniform-time
coordinate accuracy.

## Practice exercises

<a id="perturbation-methods-ex-1"></a>

### Exercise 1
Use the Poincaré–Lindstedt method to find the frequency correction to $O(\epsilon)$ for $\ddot{q} + q + \epsilon q^{2} = 0$ with $q(0) = A$, $\dot{q}(0) = 0$.

<details>
<summary>Hint 1</summary>

At first order expand both the rescaled frequency squared and the quadratic nonlinearity.

</details>

<details>
<summary>Hint 2</summary>

Only a cosine at the fundamental frequency forces a secular term. Enforce the initial data after canceling it.

</details>

<details>
<summary>Full solution</summary>

Expand $q = q_{0} + \epsilon q_{1} + \cdots$ and $\omega = 1 + \epsilon\omega_{1} + \cdots$. At $O(1)$: $q_{0}'' + q_{0} = 0$, so $q_{0} = A\cos\tau$. At $O(\epsilon)$: $q_{1}'' + q_{1} = -2\omega_{1}q_{0}'' - q_{0}^{2} = 2\omega_{1}A\cos\tau - \frac{A^{2}}{2}(1 + \cos(2\tau))$. Removing the resonant forcing gives $\omega_1=0$. Enforcing $q_1(0)=q_1'(0)=0$ then gives

$$q_1(\tau)=-\frac{A^2}{2}+\frac{A^2}{6}\cos(2\tau)+\frac{A^2}{3}\cos\tau.$$

The first nonzero frequency correction is therefore of order $\epsilon^2$.

</details>

<a id="perturbation-methods-ex-2"></a>

### Exercise 2
Apply the method of averaging to $\dot{x} = \epsilon x\sin^{2}t$ with $x(0) = x_{0}$. Find the averaged equation and its solution.

<details>
<summary>Hint 1</summary>

The average of sine squared over a period is one half.

</details>

<details>
<summary>Hint 2</summary>

Separate the original equation as well; its exact exponent provides a direct comparison.

</details>

<details>
<summary>Full solution</summary>

Since $\sin^{2}t = (1 - \cos(2t))/2$, the average is $\overline{x\sin^{2}t} = x/2$. The averaged equation is $\dot{\bar{x}} = \epsilon\bar{x}/2$, with solution $\bar{x}(t) = x_{0}e^{\epsilon t/2}$. The exact solution oscillates around this exponential growth.

</details>

<a id="perturbation-methods-ex-3"></a>

### Exercise 3
For the Hamiltonian $H = \frac{1}{2}(p^{2} + q^{2}) + \epsilon q^{4}$, compute the first-order frequency shift using canonical perturbation theory.

<details>
<summary>Hint 1</summary>

Use the unperturbed oscillator action and angle.

</details>

<details>
<summary>Hint 2</summary>

Average sine to the fourth power, then differentiate the averaged Hamiltonian with respect to the new action.

</details>

<details>
<summary>Full solution</summary>

In action-angle variables for the harmonic oscillator, $q = \sqrt{2I}\sin\phi$. In the convention $H=H_0+\epsilon H_1$, the coefficient is $H_1=4I^2\sin^4\phi$. Averaging over $\phi$ gives $\overline{\sin^4\phi}=3/8$ and $K_1=3I^2/2$. Thus $K(I)=I+3\epsilon I^2/2+O(\epsilon^2)$ and $\omega=1+3\epsilon I+O(\epsilon^2)$. The perturbation itself is $\epsilon H_1$; including that factor again in the definition of $H_1$ would count it twice. Here the new action is denoted $I$ after the near-identity change.

</details>

<a id="perturbation-methods-ex-4"></a>

### Exercise 4
Explain why the KAM theorem requires the nondegeneracy condition $\det(\partial^{2}H_{0}/\partial I_{i}\partial I_{j}) \neq 0$.

<details>
<summary>Hint 1</summary>

Differentiate the frequency map with respect to the action.

</details>

<details>
<summary>Hint 2</summary>

The implicit adjustment of action requires an invertible Jacobian; distinguish this theorem from variants.

</details>

<details>
<summary>Full solution</summary>

Nondegeneracy ensures that the frequency map $I \mapsto \omega(I)$ is a local diffeomorphism. This allows the Diophantine condition to be imposed on the frequencies. Without nondegeneracy, all tori could share the same frequencies, and perturbation theory would not distinguish between resonant and nonresonant tori.

More specifically, the inverse function theorem permits adjusting actions to compensate a small frequency shift while targeting a chosen Diophantine vector. A degenerate map need not be constant, and its frequencies can still be nonresonant; it is the stated theorem's compensation argument that is unavailable. Degenerate or isoenergetic variants require their own hypotheses. The claim is a requirement of this version of KAM, rather than a necessary condition for every possible surviving invariant torus.

</details>

<a id="perturbation-methods-ex-5"></a>

### Exercise 5
Consider a weakly damped oscillator $\ddot{q} + 2\gamma\dot{q} + \omega_{0}^{2}q = 0$ with $\gamma \ll \omega_{0}$. Use perturbation theory to find the approximate solution and discuss the validity of the approximation.

<details>
<summary>Hint 1</summary>

Treat the two rotating quadratures as slowly varying.

</details>

<details>
<summary>Hint 2</summary>

Compare the resulting envelope and carrier with the exact underdamped solution to identify a phase-error timescale.

</details>

<details>
<summary>Full solution</summary>

Write $q(t) = a(t)\cos(\omega_{0}t) + b(t)\sin(\omega_{0}t)$ with slowly varying $a, b$. Averaging gives $\dot a=-\gamma a$ and $\dot b=-\gamma b$, hence $q(t)\approx Ae^{-\gamma t}\cos(\omega_0t+\phi)$. The exact underdamped frequency is $\sqrt{\omega_0^2-\gamma^2}=\omega_0-\gamma^2/(2\omega_0)+O(\gamma^4/\omega_0^3)$. Thus the displayed carrier-frequency approximation has phase error of order $\gamma^2t/\omega_0$ and is uniform while $t\ll\omega_0/\gamma^2$; its envelope is already informative on the damping timescale $t=O(1/\gamma)$.

</details>

<a id="perturbation-methods-ex-6"></a>

### Exercise 6

For $\dot x=\epsilon\sin t$, $x(0)=0$, compare the exact and averaged solutions on arbitrarily long time intervals. Why is this not a general long-time averaging theorem?

<details>
<summary>Hint 1</summary>

The average vector field vanishes.

</details>

<details>
<summary>Hint 2</summary>

Integrate the original equation explicitly and bound the periodic primitive.

</details>

<details>
<summary>Full solution</summary>

The averaged solution is identically zero. The exact solution is $x=\epsilon(1-\cos t)$, so its error is at most $2\epsilon$ for every time. Here the forcing is independent of the state, its primitive is bounded, and there is no residual slow drift. The general change-of-variables proof has an $O(\epsilon^2)$ remainder that can accumulate over longer intervals. A special exact cancellation does not remove that remainder for other systems.

</details>

<a id="perturbation-methods-ex-7"></a>

### Exercise 7

For the one-angle Hamiltonian $H=I+\epsilon\cos\phi$, find a periodic first-order generating function and check whether it gives an exact transformation.

<details>
<summary>Hint 1</summary>

The angle average of the perturbation is zero and the unperturbed frequency is one.

</details>

<details>
<summary>Hint 2</summary>

Try $S(J,\phi)=J\phi-\epsilon\sin\phi$ and differentiate it.

</details>

<details>
<summary>Full solution</summary>

The homological equation is $\partial_\phi S_1=-\cos\phi$, so $S_1=-\sin\phi$. The full generator gives $I=J-\epsilon\cos\phi$ and $\theta=\phi$. Substitution gives $H=J$ exactly, because the unperturbed Hamiltonian is linear in the action. The mixed derivative is one, so this is a valid canonical change on the cylinder. The absence of twist prevents application of the stated nondegenerate KAM theorem, but does not prevent this exact integrable example.

</details>

<a id="perturbation-methods-ex-8"></a>

### Exercise 8

Let $H_0=I_1+I_2$ and $H_1=\cos(\phi_1-\phi_2)$. Show why this perturbation cannot be removed by a periodic first-order generating function. Describe a resonant coordinate.

<details>
<summary>Hint 1</summary>

The Fourier vector is $(1,-1)$ and the frequency vector is $(1,1)$.

</details>

<details>
<summary>Hint 2</summary>

Integrate the proposed homological equation along an unperturbed orbit, on which the angle difference is constant.

</details>

<details>
<summary>Full solution</summary>

The equation would be $(\partial_{\phi_1}+\partial_{\phi_2})S_1=-\cos(\phi_1-\phi_2)$. Its left side integrates to zero along the closed orbit $(\phi_1+t,\phi_2+t)$ over $2\pi$, while its right side integrates to $-2\pi\cos(\phi_1-\phi_2)$, generally nonzero. Thus no global periodic solution exists. Take $\theta=\phi_1-\phi_2$, $\psi=\phi_2$; from $I_1d\phi_1+I_2d\phi_2=I_1d\theta+(I_1+I_2)d\psi$, the conjugate actions are $J=I_1$, $P=I_1+I_2$. The Hamiltonian is $P+\epsilon\cos\theta$. Keeping the resonant term gives $\dot\theta=0$, $\dot J=\epsilon\sin\theta$; resonance causes slow action change rather than an illegal division by zero.

</details>

<a id="perturbation-methods-ex-9"></a>

### Exercise 9

An approximate solution has residual bounded by $C\epsilon^2$ and initially agrees with the exact solution. For a vector field with Lipschitz constant $L>0$, derive the resulting fixed-time error bound and explain its limitation at $t=1/\epsilon$.

<details>
<summary>Hint 1</summary>

Subtract the integral equations for the exact and approximate trajectories.

</details>

<details>
<summary>Hint 2</summary>

Compare with the scalar equation $z'=Lz+C\epsilon^2$, $z(0)=0$.

</details>

<details>
<summary>Full solution</summary>

Gronwall gives $|e(t)|\le C\epsilon^2(e^{Lt}-1)/L$ while both trajectories remain in the controlled domain. For fixed $t$ this is $O(\epsilon^2)$. At $t=1/\epsilon$ the upper bound contains $e^{L/\epsilon}$ and provides no small-error conclusion. This does not prove the actual error is large; it shows that this estimate is insufficient. Averaging changes variables to obtain a Lipschitz factor of size $\epsilon$ in the slow equation and thereby controls its natural slow interval.

</details>

<a id="perturbation-methods-ex-10"></a>

### Exercise 10

Suppose $|h_{\mathbf k}|\le Ae^{-\rho|\mathbf k|}$ and $|\mathbf k\cdot\boldsymbol\omega|\ge\gamma|\mathbf k|^{-\tau}$. Explain why the first-order generating function is analytic on every smaller strip of width $\rho'<\rho$.

<details>
<summary>Hint 1</summary>

Bound each nonzero Fourier coefficient after dividing by its frequency divisor.

</details>

<details>
<summary>Hint 2</summary>

The number of integer vectors of a given size grows at most polynomially. A positive exponential decay margin dominates every polynomial.

</details>

<details>
<summary>Full solution</summary>

The coefficients satisfy $|S_{1,\mathbf k}|\le(A/\gamma)|\mathbf k|^\tau e^{-\rho|\mathbf k|}$. On the smaller strip each Fourier exponential has magnitude at most $e^{\rho'|\mathbf k|}$, leaving a summable series bounded by $(A/\gamma)\sum_{\mathbf k\ne0}|\mathbf k|^\tau e^{-(\rho-\rho')|\mathbf k|}$. The same argument with any extra fixed polynomial factor controls each derivative on an intermediate strip. Uniform convergence therefore defines an analytic periodic function there. This solves one homological equation; it does not by itself control all higher perturbation orders.

</details>

<a id="connections"></a>

## Summary and connections

Perturbation methods bridge integrable and chaotic dynamics. In **Rigid Body Dynamics**, perturbation theory describes the effect of small torques on a freely rotating body. The limits of nonresonant removal near resonances motivate resonant normal forms and help organise the study of chaos, which we touch upon in relation to **Geometric Numerical Integration**. Symplectic methods often reproduce long-time qualitative features of Hamiltonian dynamics under method-, problem-, and step-size hypotheses; no unconditional preservation or superiority claim for KAM tori is made here. The field-theoretic extensions appear in **Field Theory Action** and **Noether's Theorem in Field Theory**.
