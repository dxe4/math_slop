
# Mechanics and Fields: From Force Laws to Spatial Models

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-mechanics-fields-core) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A spring, a flowing fluid and a vibrating string can all be described by rates of change, but their unknowns live in different places. A particle model follows a few coordinates. A field model assigns a value at every spatial point. The useful connection is not that their equations look alike: it is that assumptions, balances, boundary data and chosen modes can turn one formulation into another, with quantities and units preserved.

This course joins mechanics, ODEs, fields and mathematical modelling through required source work and a new string portfolio with primary, changed and public return models. It bridges selected passages of the advanced [Action and Symmetry mechanics book](../books/action-symmetry-mechanics/from-a-path-to-a-number.md) and the graduate [Fields and Continua book](../books/fields-fluids-continuum/material-and-spatial-descriptions.md); their whole-book levels and preparation remain as stated. The existing [mathematical-physics standard course](#/courses/atlas-mathematical-physics-standard) and its thermal-qubit MP-CORE tasks remain an advanced continuation. A solved qubit is not a solved spatial mechanics model.

**Preparation.** Bring derivatives, exponentials and trigonometric functions, definite integrals and integration by parts, partial derivatives and the multivariable chain rule, dot products, matrix multiplication, determinants and two-by-two eigenvectors. The field stages also use divergence, curl and the divergence theorem on a smooth bounded region. Basic first- and second-order linear ODEs are needed; Section 1 supplies exact repairs. The [entry bridge](#/courses/atlas-physics-models-entry) develops vectors, units and a first derivative, but does not supply this entire preparation. No prior manifold, differential-form, Hilbert-space or quantum course is required for the selected classical calculations. General weak existence and infinite Fourier-series claims remain separate from the smooth finite-mode proofs here.

**Work and records.** Complete the ordered MF-S selections, then MF-P, MF-C and MF-R. All source answers and new models are public. Study time depends on the selected reading, attempts and corrections; no observed time, credit, grade or learner outcome is claimed. On each task keep separate files using its ID and actual date, for example `2026-11-03-mf-p-first.txt`, `2026-11-03-mf-p-comparison.txt` and `2026-11-03-mf-p-revised.txt`. Preserve the first response before comparing; name the first unsupported step and retain any help or answer already seen. A later task can be reconstruction after public exposure. No prescribed interval or enforced delay establishes retention. A shared reading note is mutable; it does not retain the whole worksheet portfolio. Personal checkmarks and public-model comparison are not graded Practice evidence.

## 1. Preparation release with exact repairs and keys

Start with the [mechanics diagnostic](#/books/action-symmetry-mechanics), Questions 1–7, and the [ODE diagnostic](#/books/differential-equations-verified-dynamics), Items 1–6 and 13–15. Work by dependency, not total correct: missing integration by parts matters even if several matrix questions were right. The diagnostic answers are public self-checks, not admission scores.

Here is a concrete repair order. The native calculus numbers are chapter-global problem numbers; “Lesson 5” does not mean “Practice page 5.”

| Preparation selection | Exact work before its key | Comparison and use |
| --- | --- | --- |
| MF-S01a | [Second-order equations, Lesson 5](../apps/calculus/reading/book-a.html), then [Problem 24](../apps/calculus/reading/book-a.html) | The characteristic root is -2 twice. The general solution is $(C_1+C_2t)e^{-2t}$; data $y(0)=1,y'(0)=0$ give $(1+2t)e^{-2t}$. The polynomial factor is essential. |
| MF-S01b | [Problem 25](../apps/calculus/reading/book-a.html), then [Problem 26](../apps/calculus/reading/book-a.html) | The undamped initial-value solution is $x=\cos t$. For $x''+bx'+x=0$, differentiate $E=((x')^2+x^2)/2$: $E'=x'(x''+x)=-b(x')^2$, nonpositive when $b\ge0$. |
| MF-S01c | [Definite integration by parts, Problem 12.8](../apps/calculus/reading/book-a.html) | $\int_0^1x\cos x\,dx=[x\sin x]_0^1-\int_0^1\sin x\,dx=\sin1+\cos1-1$. Retain endpoints before deciding whether a boundary term vanishes. |
| MF-S01d | [Singular-field audit, Problem 26.17](../apps/calculus/reading/book-a.html), then [theorem audit, Problem 26.23](../apps/calculus/reading/book-a.html) | A radial inverse-square field is singular at the ball's origin, so the divergence theorem on that ball is invalid. On the punctured shell the outer flux is $4\pi$ and the shell-outward inner flux is $-4\pi$. The theorem requires a closed oriented boundary and sufficient smoothness on a neighborhood of the solid. |

The mechanics diagnostic's gradient is $(2xy,x^2+z^3,3yz^2)$, giving $(4,0,6)$ at $(1,2,-1)$. Its field $(yz,xz,xy)$ has divergence zero and curl zero; the circle integral $\oint x\,dy=\pi R^2$ uses counterclockwise orientation. Its damped IVP has solution $(3/2)e^{-t}-(1/2)e^{-3t}$, and the nonzero harmonic oscillator with $\omega_0>0$ has period $2\pi/\omega_0$. For damping classification assume $m,k>0,c\ge0$: compare $c^2$ with $4mk$. Its symmetric matrix has eigenvalues 1 and 3, with normalized directions $(1,-1)/\sqrt2$ and $(1,1)/\sqrt2$. These are worked answers in the source, not a claim that a few substitutions teach all prerequisites.

The selected ODE diagnostic asks for the integral form $x(t)=x_0+\int_{t_0}^t f(s,x(s))ds$, the chain-rule energy calculation, the bound $Mh^2/2$ from a bounded second derivative, units, eigenvalue behavior and repeated-root caution. Its Jacobian is $\left(\begin{smallmatrix}2&-1\\2&1\end{smallmatrix}\right)$ at the named point; integration by parts is $\int u'v=[uv]-\int uv'$. Variations vanish at fixed endpoints because every perturbed path must preserve those endpoints. Use the linked full keys and the explicit calculations below to repair a missing dependency. This route does not invoke Banach's theorem, Sobolev traces or a general PDE existence theorem without teaching or naming that additional preparation.

## 2. MF-S02: force, energy and stationary action

In an inertial frame with constant mass $m>0$, Newton's balance is $m\ddot q=F$. Position is a length, velocity length/time and acceleration length/time²; force has units kg·m/s². A force law is a modelling assumption, unlike the definition of acceleration. For a one-dimensional spring with displacement from equilibrium $q$, Hooke's law $F=-kq$ assumes $k>0$ and a linear elastic regime. Its equation is $m\ddot q+kq=0$ and it needs both $q(0)$ and $\dot q(0)$.

Work in one dimension is $\int F\,dq$. For a differentiable potential $V$, $F=-V'(q)$ makes the work between positions equal the negative potential difference. Multiplying the balance by $\dot q$ gives

$$\frac{d}{dt}\left(\frac m2\dot q^2+V(q)\right)=0.$$

A viscous resistance $-c\dot q$ with $c\ge0$ changes the right side to $-c\dot q^2$; an applied force $F_{\rm in}$ adds $F_{\rm in}\dot q$. Conservative energy, dissipation and boundary or applied power are different ledger entries. A motion can have constant kinetic energy while external power continually pays for dissipation.

Read [From a path to a number](../books/action-symmetry-mechanics/from-a-path-to-a-number.md), then attempt Exercises 1, 2, 3 and 4 in order. Their full solutions follow each exercise. Retain the oscillator equation $m\ddot q+kq=0$, the unchanged equations under $V\mapsto V+C$, both conserved free-particle momenta, and the small-angle pendulum period $2\pi\sqrt{\ell/g}$. The pendulum statement assumes small angles in radians, fixed length and uniform gravity; it does not prove the exact nonlinear period is amplitude independent.

Here is the variational dependency the source uses. For a $C^2$ Lagrangian $L(q,\dot q,t)$ and a $C^2$ path on a compact time interval, perturb the path to $q+\epsilon\eta$, with smooth $\eta$ vanishing at both endpoints. Differentiating the action at zero and integrating by parts gives

$$\delta S=\int\left(L_q\eta+L_{\dot q}\dot\eta\right)dt
=[L_{\dot q}\eta]_{t_a}^{t_b}+\int\left(L_q-\frac{d}{dt}L_{\dot q}\right)\eta\,dt.$$

The boundary term vanishes for these admissible variations. For completeness, if the continuous residual $A=L_q-dL_{\dot q}/dt$ were positive at an interior point, it would be positive throughout a small interval. A nonnegative smooth bump supported inside that interval would make $\int A\eta>0$, contradicting stationarity. A negative residual is handled by reversing the sign. Thus $A=0$ everywhere inside; conversely $A=0$ and fixed endpoints make every first variation zero. This proves the elementary fixed-end Euler–Lagrange equivalence in the stated smooth setting. It proves stationarity, not a minimum.

For $L=m\dot q^2/2-kq^2/2$, this produces the same conservative spring equation. Adding linear drag is a further nonconservative force assumption; it is not obtained by applying this bare $T-V$ stationary-action calculation unchanged. Energy conservation requires the relevant autonomous conservative system. Merely seeing the word “action” supplies no missing hypothesis.

## 3. MF-S03: constraints and Hamiltonian coordinates

Read [Constraints and Lagrange Multipliers](../books/action-symmetry-mechanics/constraints-and-lagrange-multipliers.md), then attempt Exercises 1, 2 and 4. They have complete immediate solutions. For independent smooth holonomic constraints $f_a(q,t)=0$, the source's augmented Lagrangian is $L-\sum_a\lambda_af_a$, so its reaction force is $Q_i=-\sum_a\lambda_a\partial_i f_a$. A permissible virtual displacement satisfies $\sum_i\partial_i f_a\,\delta q_i=0$, hence $\sum_iQ_i\delta q_i=0$. That sign convention and restriction explain the virtual-work statement.

In the circular example, $\lambda=m\dot\theta^2/2$ and the radial force is $-mR\dot\theta^2$. The parabolic wire $y=ax^2$, $a>0$ with units inverse length, gives

$$L=\frac m2(1+4a^2x^2)\dot x^2-mgax^2.$$

Keeping terms quadratic in a small displacement and its velocity gives $\ddot x+2agx=0$, with frequency $\sqrt{2ag}$. This is a local approximation near zero, not the full nonlinear motion. Do not transfer the holonomic augmented-action calculation to arbitrary nonintegrable velocity constraints; the source distinguishes Lagrange–d'Alembert and vakonomic equations.

Next read the opening derivation and oscillator example of [Hamilton–Jacobi Theory](../books/action-symmetry-mechanics/hamilton-jacobi-theory.md), then Exercises 1–3 with their complete solutions. Define $p=L_{\dot q}$ and $H=p\dot q-L$. For the spring $p=m\dot q$ is invertible because $m>0$, and

$$H=\frac{p^2}{2m}+\frac{kq^2}{2},\qquad \dot q=p/m,\quad \dot p=-kq.$$

For a general velocity Hessian, invertibility guarantees only a local inverse unless more is proved. Do not infer a global coordinate system from a nonzero determinant. The selected source exercises prove Newton/Hamilton equivalence, compute $\{q,p\}=1$, and derive $df/dt=\{f,H\}+f_t$ by the chain rule. A conserved quantity requires the bracket and explicit-time conditions. Global symplectic geometry and the full Hamilton–Jacobi solution theory require further source preparation; these selected coordinate calculations do not silently prove them.

## 4. MF-S04: ODE models, repeated roots and numerical structure

Read [Linear Systems and Phase Geometry](#/books/differential-equations-verified-dynamics), Worked Problems 8 then 9, and compare their immediate full keys. The general solution of $q''+2q'+q=0$ is $(C_1+C_2t)e^{-t}$. In $q''+q=\sin t$, a bounded pure sinusoidal trial fails at resonance; $-(t/2)\cos t$ is a particular solution with growing envelope. The source asks about that resonance mechanism, not a fully specified forced initial-value problem. Fit initial conditions only when they are supplied.

For a sustained scalar model, use the model, exact-solution, energy and numerical requests of **DYN-CAP-P, DYN-CAP-C and DYN-CAP-R** in [the ODE course](#/courses/atlas-differential-equations-dynamics-standard). This selection assigns those named requests; its control ranks, invariant probabilities and time-average requests remain additional ODE-course work. The full public models state all their boundaries.

Specifically derive $m\ddot q+c\dot q+kq=F$, then normalize with $x=q/Q$, $\tau=t/t_0$, $v=x'$ and $u=t_0^2F/(mQ)$. For $c=3m/t_0,k=2m/t_0^2,F=0$ and initial state $(1,0)$, the system is $x'=v,v'=-2x-3v$ and the solution is $x=2e^{-\tau}-e^{-2\tau}$, $v=-2e^{-\tau}+2e^{-2\tau}$. Its energy $E=x^2+v^2/2$ satisfies $E'=-3v^2$. The explicit formula proves global existence and decay for these data; it is not an invocation of a local theorem as a global theorem.

For changed $c=2m/t_0,k=m/t_0^2$, the solution is $x=(1+\tau)e^{-\tau},v=-\tau e^{-\tau}$, and $E_c=(x^2+v^2)/2$ has derivative $-2v^2$. For the undamped return, $x=\cos\tau,v=-\sin\tau$ and energy is constant. Stable does not mean attractive; the undamped trajectories do not approach the origin.

The assigned numerical method is explicit Euler in normalized time, with $z_{n+1}=(I+hA)z_n$ and $T=nh$. The DYN primary's modal decomposition gives $x_n=2(1-h)^n-(1-2h)^n$ and $v_n=-2(1-h)^n+2(1-2h)^n$. Taylor's integral remainder for $\alpha=1,2$ and $0<h\le1/2$ gives

$$0\le e^{-\alpha h}-(1-\alpha h)\le\alpha^2h^2/2.$$

The difference-of-powers identity bounds its $n$-step difference by $\alpha^2Th/2$, because both multipliers lie in [0,1]. Combining the modes gives $|x(T)-x_n|\le3Th$ and $|v(T)-v_n|\le5Th$. This exact-arithmetic certificate excludes floating-point and model errors; $h=1/500$ is sufficient for max-norm error at most $1/100$ at $T=1$. It is not a minimum step requirement inferred from a plot.

Strict modal decay for the primary needs $0<h<1$; at $h=1$ one nonzero mode has multiplier -1. In the critical case, write $A_c=-I+N$ with $N^2=0,N\ne0$. Then $(I+hA_c)^n=(1-h)^nI+nh(1-h)^{n-1}N$ for $h\ne1$, while $h=1$ is handled directly by $N^n$, not division by zero. Its strict decay range is $0<h<2$; at $h=2$ the Jordan factor can grow. Both damped Euler schemes increase their chosen mechanical energy on the first step from $(1,0)$, despite the exact dissipation law.

The following are exact algebraic references at $T=1$, not reported code runs. MF-P uses $E=x^2+v^2/2$; MF-C uses $E_c=(x^2+v^2)/2$.

| Euler reference | h | n | x_n | v_n | E_n | E_1-E_0 |
| --- | --- | --- | --- | --- | --- | --- |
| MF-P-E1 | 1/2 | 2 | 1/2 | -1/2 | 3/8 | 1/2 |
| MF-P-E2 | 1/4 | 4 | 73/128 | -65/128 | 14883/32768 | 1/8 |
| MF-C-E1 | 1/2 | 2 | 3/4 | -1/2 | 13/32 | 1/8 |
| MF-C-E2 | 1/4 | 4 | 189/256 | -27/64 | 47385/131072 | 1/32 |

The exact primary state at 1 is $(2/e-e^{-2},-2/e+2e^{-2})$; the critical state is $(2/e,-1/e)$. Compare endpoint error and energy structure separately. For the undamped return Euler multiplies energy by $1+h^2$ per step. Fixed-horizon convergence under refinement does not imply faithful long-time energy at fixed step. A separate implementation may reproduce these tables, but no code execution is required to use the source's algebraic audit. Report actual inputs, arithmetic and observed outputs if running an existing tool; do not label reference values as observations.

## 5. MF-S05: ODE trajectories become material and spatial fields

A velocity field $v(x,t)$ assigns a velocity to each point, while a material trajectory solves $\dot x=v(x,t)$ for a specified particle. Read [Material and Spatial Descriptions](../books/fields-fluids-continuum/material-and-spatial-descriptions.md), then Exercises 3 and 2 in that order, with their complete solutions. For $v=(ax_1,-ax_2,0)$, $a>0$ with units inverse time,

$$\chi(X,t)=(X_1e^{at},X_2e^{-at},X_3),\quad
F=\operatorname{diag}(e^{at},e^{-at},1),\quad J=1.$$

Here global invertibility is established by the explicit inverse, not by the positive determinant alone. The chain rule gives $D_tf=\partial_tf+v\cdot\nabla f$. In a steady spatial field, the material derivative can still be nonzero. The determinant calculation uses $\dot F=(\nabla v)F$ and Jacobi's formula: $\dot J=J\operatorname{tr}(F^{-1}(\nabla v)F)=J\nabla\cdot v$ by cyclicity of trace. The two matrices inside this trace need not themselves be equal.

Then read [Transport Theorem and Reynolds Transport](../books/fields-fluids-continuum/transport-theorem-and-reynolds-transport.md), Exercises 2 then 3. For a smooth field, a smooth globally invertible motion and bounded regions with sufficiently smooth boundaries, pulling an integral back with positive Jacobian gives

$$\frac{d}{dt}\int_{\Omega(t)}f\,dV=\int_{\Omega(t)}(D_tf+f\nabla\cdot v)\,dV.$$

For a boundary moving with velocity $w$ instead of material velocity $v$, the transport term uses $w$ and material crossing flux uses $v-w$. A fixed volume has $w=0$. For continuity, require the integral balance on **every** admissible fixed subvolume, not one chosen volume alone. Differentiation under the integral and the divergence theorem then give $\rho_t+\nabla\cdot(\rho v)=0$. Continuity of the residual and arbitrary small subvolumes justify localization.

The expanding sphere in Exercise 3 has radius $R_0(1+\alpha t)$ and density $\rho_0(1+\alpha t)^{-3}$ where $1+\alpha t>0$, with $R_0,\rho_0>0$. The cube power is geometry, and the inverse cube comes from conserved mass. State the time domain before dividing by the radius.

Next attempt [Conservation of Mass](../books/fields-fluids-continuum/conservation-of-mass.md), Exercises 2 then 1 and their complete keys. The literal $1+t$ trajectory formulas use normalized time with $t>-1$ through zero. For $v=(x_1/(1+t),-x_2/(1+t))$, trajectories are $(X_1(1+t),X_2/(1+t))$ and have Jacobian one. Density is constant along each particle; spatially uniform initial $\rho_0$ makes the solution uniformly $\rho_0$. Divergence-free velocity alone does not make arbitrary density spatially uniform. In steady pipe flow with no lateral mass penetration, no source and uniform cross-sectional station values, the signed end fluxes give $\rho_1v_1A_1=\rho_2v_2A_2$. Without uniform section values, retain the section integrals.

## 6. MF-S06: stress, fluid closure and boundary power

Force across an oriented surface is a vector traction. In the classical Cauchy description, stress is a matrix acting on its unit normal: $t(n)=\sigma n$. Stress has force/area units. With tension positive, pressure is the special isotropic stress $-pI$. The normal scalar is $n\cdot t$; the tangential vector is $t-(n\cdot t)n$. These component operations need matrix multiplication and a Euclidean unit normal, not manifold tensor calculus.

Read [Cauchy Stress and Momentum Balance](../books/fields-fluids-continuum/cauchy-stress-and-momentum-balance.md), Exercises 2, 3 then 1 with their immediate keys. Isotropic pressure gives $\rho D_tv=-\nabla p+\rho b$. At rest with upward $z$, constant $\rho>0$ and $b=-ge_3$, $p_z=-\rho g$ and $p(0)=p_0$ give $p=p_0-\rho gz$. If density varies, integrate its actual function; the constant-density formula is not universal.

For the source's stress matrix and normal the complete comparison is:

| Stress check | sigma row 1 / MPa | sigma row 2 / MPa | sigma row 3 / MPa | Normal direction before normalization | Traction numerator (divide by sqrt(3)) / MPa | Normal stress / MPa | Shear norm squared / MPa^2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MF-STRESS | (50,30,0) | (30,20,0) | (0,0,10) | (1,1,1) | (80,50,10) | 140/3 | 7400/9 |

The unit normal is $(1,1,1)/\sqrt3$. Its shear vector is $(100,10,-110)/(3\sqrt3)$ MPa. A negative normal stress would mean compression under this convention; shear magnitude is nonnegative. No automatic grade follows from matching the table.

Read [Newtonian Fluids](../books/fields-fluids-continuum/newtonian-fluids.md), its Couette example, then Exercises 1 and 3 with full solutions. For both profiles below, take a constant-density incompressible Newtonian fluid of constant viscosity $\mu>0$ with zero streamwise body force ($b_x=0$); steady unidirectional flow between plates reduces the field momentum equation to a boundary-value ODE. With plates $y=\pm h$, $h>0$, and $G=-p_x>0$,

$$\mu u''=-G,\quad u(\pm h)=0,\qquad
u(y)=\frac{G}{2\mu}(h^2-y^2).$$

The maximum is $Gh^2/(2\mu)$; the upper-wall shear is $\mu u'(h)=-Gh$ and its magnitude is $Gh$. The pressure gradient, wall data and constitutive law are all needed; a differential equation alone does not select the profile.

For Couette flow between $0$ and $h$, $u=Uy/h$ and shear is $\mu U/h$. Per plate area, dissipation is $\mu U^2/h$ and upper-wall power is also $\mu U^2/h$. Steady kinetic energy is compatible with nonzero dissipation because the moving wall supplies energy. The source assumes suitable smoothness and classical balance. These exact profiles do not establish existence or regularity for arbitrary three-dimensional Navier–Stokes data.

## 7. MF-S07: field waves, electromagnetic balance and spacetime

Read [PDE Boundaries, Energy, and Fourier Structure](#/books/differential-equations-verified-dynamics), Sections 5–10, then Worked Problems 1–5 before their immediate solutions. Retain the heat-energy uniqueness argument; the string boundary power; sine-mode orthogonality $\int_0^L\sin(n\pi x/L)\sin(m\pi x/L)dx=(L/2)\delta_{nm}$; and the distinction between mean-square completeness and pointwise or uniform equality. Its Neumann mean is preserved for insulated heat boundaries. Its explicit heat alternating mode at ratio $r=0.6$ has multiplier $1-4r=-1.4$, so a dissipative PDE can have a growing numerical scheme.

For a smooth string with constant tension $T>0$ and mass per length $\rho>0$, small transverse slopes and no bending stiffness give $\rho u_{tt}=T u_{xx}$. Initial displacement and velocity and boundary data complete the problem. The energy identity comes from multiplying by $u_t$, not merely quoting conservation:

$$e=\frac12(\rho u_t^2+T u_x^2),\quad J=-T u_tu_x,\qquad e_t+J_x=0.$$

Integration gives $d\mathcal E/dt=T[u_tu_x]_0^{\pi L_0}$. Fixed displacement ends have $u_t=0$; free Neumann ends have $u_x=0$; either removes this boundary power when compatible data hold. A driven end need not do so. Adding a local drag per length $-d u_t$ with $d\ge0$ changes the balance to $e_t+J_x=-d u_t^2$. This constitutive law is an extra assumption, not a consequence of conservative action. Its loss is dissipated mechanical energy, not an unexplained failure of conservation of total energy including the surroundings.

For a second field comparison read [Electromagnetic Field Balance](../books/fields-fluids-continuum/electromagnetic-field-balance.md), its Poynting derivation and Exercises 1 and 3 with complete keys. In smooth source-free vacuum with constant $\varepsilon_0,\mu_0>0$, Maxwell implies $E_{tt}-c^2\Delta E=0$ and the corresponding equation for $B$, where $c=(\mu_0\varepsilon_0)^{-1/2}$. Curl-curl requires the stated zero divergence and commuting derivatives. For the transverse plane wave with $\omega=ck$, $E=E_0\cos(kx-\omega t)e_y$, $B=(E_0/c)\cos(kx-\omega t)e_z$, the flux is $E_0^2\cos^2(kx-\omega t)e_x/(\mu_0c)$ and its time average is half that coefficient. The source's $e_{EM,t}+\nabla\cdot S=-J_{\rm charge}\cdot E$ names exchange with matter. In a perfectly conducting source-free cavity $n\times E=0$ implies $S\cdot n=0$. The open Project A in the advanced course does not supply a complete cavity-mode key; it remains an extension, not a completed assignment here.

Finally read [Spacetime Invariants](../articles/spacetime-invariants.md), all five exercises and their worked solutions. Its interval signature is $(+,-,-,-)$. The exercise answers are intervals 16, 0 and -32 m²; $\gamma=5/4$ and station time 10 s; simultaneity change $-\gamma(0.5)(300)/c\approx-5.77\times10^{-7}$ s; combined speed $0.8c$; and energy-derived $\gamma=5/3,v/c=0.8$. Flipping the entire interval sign translates to the standard course's convention without changing causal classification. These assume inertial frames, $|v|<c$, the stated simultaneous events and negligible gravity. They do not make the Euclidean string energy into a Lorentz invariant.

## 8. MF-P: derive a spatial model and recover the oscillator

### Primary question: keep the first response

Let a string occupy $0\le x\le\pi L_0$ with $L_0,t_0,\rho,Q>0$. Here $L_0,Q$ are lengths, $t_0$ a time and $\rho$ mass per length. Assume constant tension, linear local drag per length, small transverse slopes, no bending stiffness, no external forcing and a smooth classical displacement $u(x,t)$ for $t\ge0$. Take $Q/L_0$ small enough for the declared small-slope modelling regime. Set

$$T=\frac{2\rho L_0^2}{t_0^2},\qquad d=\frac{3\rho}{t_0},\qquad
\rho u_{tt}+d u_t=T u_{xx},$$

$$u(0,t)=u(\pi L_0,t)=0,\quad
u(x,0)=Q\sin(x/L_0),\quad u_t(x,0)=0.$$

Use $\xi=x/L_0$, $\tau=t/t_0$, $w=u/Q$.

P1. Derive the normalized PDE, all coefficient units, the compatibility of these initial and endpoint data and the equation for $w=q(\tau)\sin\xi$. Solve its two initial conditions and verify the PDE and both boundary conditions. Explain why one exact mode does not require an infinite-series convergence theorem.

P2. Derive local and integrated mechanical energy balances with the correct boundary flux. Compute energy, its derivative and the relation to the DYN primary energy. Derive the effective mass, stiffness and drag coefficient by spatial integration. Say which part follows from conservative action and which part is an additional force law.

P3. Prove uniqueness within a smooth classical class with the same data using the difference energy. State how the explicit solution establishes existence here and why no general weak-PDE theorem follows.

P4. Transfer the MF-P Euler references, stability restriction and finite-time error certificate to the modal amplitude. Distinguish the exact dissipation law from numerical energy increase. State whether this calculation is empirical validation and name a model rejection condition.

### Complete primary model

P1. $T$ is a force, $d$ has units kg/(m·s), and every PDE term has force/length units kg/s². Dividing by $\rho Q/t_0^2$ gives

$$w_{\tau\tau}+3w_\tau=2w_{\xi\xi},\qquad0\le\xi\le\pi.$$

The initial sine is zero at the endpoints; the initial velocity is zero there. Its second spatial derivative is minus itself and also vanishes at the endpoints, so the classical compatibility required by this explicit smooth solution holds at the initial corners. Substitution of the finite ansatz gives $q''+3q'+2q=0$, $q(0)=1,q'(0)=0$. Its characteristic roots are -1 and -2, and the two initial equations give

$$q=2e^{-\tau}-e^{-2\tau},\qquad q'=-2e^{-\tau}+2e^{-2\tau}.$$

Direct derivatives verify the equation and data for every $\tau\ge0$. Multiplying by $Q\sin\xi$ gives a smooth global classical solution; no series is being differentiated. Also $0<q\le1$ and $q'\le0$ for $\tau\ge0$, so $|u_x|\le Q/L_0$. The selected initial small-slope bound persists in this model. This is a conditional modelling regime, not an experimentally calibrated cutoff.

P2. Multiply the PDE by $u_t$ and use product differentiation:

$$e_t=T(u_tu_x)_x-d u_t^2,\qquad
\frac{d\mathcal E}{dt}=T[u_tu_x]_0^{\pi L_0}-d\int_0^{\pi L_0}u_t^2\,dx.$$

The outward energy fluxes are $-J(0)$ and $J(\pi L_0)$ with $J=-Tu_tu_x$; their sum is the negative of the displayed boundary power. Fixed endpoints imply $u_t=0$, so that term vanishes. Let

$$M=\frac{\rho\pi L_0}{2},\qquad K=\frac{T\pi}{2L_0}=\frac{2M}{t_0^2},\qquad C=\frac{d\pi L_0}{2}=\frac{3M}{t_0}.$$

These follow from $\int_0^{\pi L_0}\sin^2(x/L_0)dx=\int_0^{\pi L_0}\cos^2(x/L_0)dx=\pi L_0/2$. The physical modal displacement is $y(t)=Qq(t/t_0)$ and obeys $M\ddot y+C\dot y+Ky=0$. The spatially integrated conservative Lagrangian is $M\dot y^2/2-Ky^2/2$; drag $-C\dot y$ is added as a nonconservative force.

Consequently

$$\mathcal E=\frac{MQ^2}{t_0^2}E_P,\qquad E_P=q^2+\frac12q'^2,\qquad
\frac{d\mathcal E}{dt}=-\frac{3MQ^2}{t_0^3}q'^2.$$

Energy has joule units and its derivative watts. The physical integrated dissipation $d\int u_t^2dx$ gives exactly that loss. In normalized field units the energy is $\int_0^\pi(w_\tau^2+2w_\xi^2)d\xi/2=(\pi/2)E_P$. This establishes the DYN connection by integration, not by resemblance of equations.

P3. If two sufficiently smooth classical solutions share all data, their difference $z$ satisfies the homogeneous PDE and zero initial data and endpoints. Its nonnegative energy starts at zero and has nonpositive derivative. Therefore both $z_t$ and $z_x$ vanish everywhere, since they are continuous and their squared integrals vanish. Thus $z$ is constant in space and time, and zero initial or endpoint data make it zero. This proves uniqueness in this class. The formula supplies one member of that class, hence existence for these specific data. No weak solution construction, rough-data regularity or arbitrary nonlinear-string theorem was used.

P4. Use the source Euler recurrence for $q,q'$; its listed values and modal-state error bounds transfer unchanged in dimensionless variables. Multiply amplitude error by $Q$ and velocity error by $Q/t_0$ for physical units. The bound is on the modal coefficients at the stated horizon, not automatically a derivative error in an arbitrary field norm. Multiplying its mechanical energy by $MQ^2/t_0^2$ gives the corresponding field approximation's energy. The positive first-step defects in the table contradict exact monotonicity for every $h>0$, even when $0<h<1$ gives modal decay. The $h\le1/2$ error certificate has a narrower hypothesis than that stability range. Reference fractions and analytic error bounds are not solver observations or empirical validation. Large slopes, nonuniform tension, bending, nonlinear resistance or measured departures could invalidate the chosen constitutive model. No such measurement is supplied.

## 9. MF-C: change the damping and tension together

### Changed question

Keep geometry, positive scales, fixed endpoints and the same initial displacement and velocity, but set $d=2\rho/t_0$ and $T=\rho L_0^2/t_0^2$. Before the model, derive the normalized field equation, the finite-mode initial-value solution, effective parameters, local/integrated energy balances and the physical energy scale. Verify classical compatibility and the small-slope condition. Then audit the claims “the old two-root formula still applies,” “energy cannot increase in stable Euler,” and “the bound $5Th$ was proved for this changed matrix.” Give an actual changed Euler reference and its justified finite-time bound.

### Complete changed model and repair

Now $w_{\tau\tau}+2w_\tau=w_{\xi\xi}$. The same sine mode gives $q''+2q'+q=0$, with $q(0)=1,q'(0)=0$. Factoring $(D+1)^2$ gives $q=(A+B\tau)e^{-\tau}$; the initial equations give $A=B=1$, hence

$$q=(1+\tau)e^{-\tau},\qquad q'=-\tau e^{-\tau}.$$

This formula directly verifies every derivative, data and fixed endpoint, and gives $0<q\le1$. The small-slope bound persists as before. Effective mass remains $M=\rho\pi L_0/2$, while $K=M/t_0^2$ and $C=2M/t_0$. The conservative Lagrangian and the added drag retain their distinct roles.

The local balance is still $e_t+J_x=-d u_t^2$ with the **changed** $T,d$; fixed ends remove boundary power. The energy is

$$\mathcal E=\frac{MQ^2}{t_0^2}E_C,\qquad E_C=\frac12(q^2+q'^2),\qquad
\frac{d\mathcal E}{dt}=-\frac{2MQ^2}{t_0^3}q'^2.$$

The same zero-initial difference-energy argument proves classical uniqueness. The explicit smooth solution proves existence for these data and decay, without a separate infinite-dimensional spectral assertion.

The old distinct-root constants do not solve the changed ODE. Use $A_c=-I+N$, $N^2=0$, to derive the changed Euler formula in Section 4. At $h=1/2,T=1$, $(q_n,v_n)=(3/4,-1/2)$ and $E_{C,n}=13/32$; its first step raises energy by $1/8$. The exact reference is $(2/e,-1/e)$. Strict modal decay requires $0<h<2$ and the endpoint $h=2$ is excluded despite eigenvalue modulus one. In particular $I+2A_c=-I+2N$, whose powers include a growing nonzero nilpotent term.

The primary's $3Th,5Th$ proof used its two distinct scalar modes. It cannot be quoted unchanged for this matrix. A valid changed exact-arithmetic bound on [0,1] follows from $\|A_c\|_\infty=3$ and $\|z''(\tau)\|_\infty\le2$ along the explicit solution. Taylor's integral remainder bounds one local defect by $h^2$. From $e_0=0$ the error recurrence is $e_{j+1}\le(1+3h)e_j+h^2$, whence for $nh=1$

$$\|z(1)-z_n\|_\infty\le\frac h3((1+3h)^n-1)\le\frac h3(e^3-1).$$

This finite-horizon estimate does not require Euler asymptotic stability, though long-time decay claims do. It excludes roundoff and model error. Preserve a valid numerical reference when repairing an invalid proof or physical interpretation; the first unsupported inference is the revision target.

## 10. MF-R: change the boundary operator and retain the mean

### Later public return question

On a later occasion of your choosing, retain a new first response with its actual date and previous public-key exposure. No enforced delay or independent retrieval is claimed.

Use the changed $T,d$ and all positive scales, but impose free Neumann ends $u_x(0,t)=u_x(\pi L_0,t)=0$. Prescribe $u(x,0)=Q[1+\cos(x/L_0)]$ and $u_t(x,0)=0$. A report says: “The fixed-end sine mode can be reused. The boundary term vanishes, damping makes energy tend to zero, and that proves the displacement tends to zero.”

R1. Identify each unsupported inference; find an explicit smooth field satisfying the actual initial and boundary data. Derive equations for its constant and cosine modes rather than guessing only a decaying mode.

R2. Compute the spatial mean, energy and boundary flux, with physical units. Explain why energy can decay to zero while displacement does not. Does this contradict uniqueness for identical initial data?

R3. Transfer the changed Euler approximation to the cosine amplitude, keep the constant mode exactly, and state which numerical and physical claims survive. Give a revised report with a precise limitation on generalizing from this finite-mode solution.

### Complete return model and repair

A sine mode has nonzero derivative at an endpoint unless its amplitude is zero, so it violates these Neumann conditions. Set

$$w(\xi,\tau)=a(\tau)+q(\tau)\cos\xi.$$

The independent constant and cosine coefficients give $a''+2a'=0$ and $q''+2q'+q=0$. Initial data are $a(0)=1,a'(0)=0,q(0)=1,q'(0)=0$. Integrating the first equation gives $a'=0,a=1$; the second is the critical solution. Therefore

$$u(x,t)=Q\left[1+(1+\tau)e^{-\tau}\cos(x/L_0)\right],\qquad\tau=t/t_0.$$

Its endpoint spatial derivative is zero because $\sin0=\sin\pi=0$; the initial velocity and the differentiated boundary compatibility hold. Direct substitution proves a smooth solution for all $t\ge0$. The slope is bounded by $Q/L_0$ as in the changed case. Its spatial mean is $\bar u=(\pi L_0)^{-1}\int u\,dx=Q$. Alternatively integrating the PDE gives $\bar u''+(2/t_0)\bar u'=0$ with initial mean $Q$ and mean velocity zero, which proves that conclusion without the mode formula.

The local flux $J=-T u_tu_x$ vanishes at both ends because $u_x=0$. The constant mode contributes neither velocity nor gradient, so

$$\mathcal E=\frac{MQ^2}{t_0^2}\frac{q^2+q'^2}{2},\qquad
\frac{d\mathcal E}{dt}=-\frac{2MQ^2}{t_0^3}q'^2.$$

It decays to zero as the cosine amplitude decays. Yet $u\to Q$ uniformly, because $|u-Q|\le Q(1+\tau)e^{-\tau}\to0$. The energy controls derivatives; it does not control a free constant displacement. The zero-end Poincare inequality used in the Dirichlet setting cannot be applied to an arbitrary Neumann field. A uniform constant is its counterexample.

This is not nonuniqueness with identical initial data. The zero-initial difference-energy proof again gives a space-time constant; the prescribed initial displacement makes that constant zero. Different constant initial displacements give different solutions with the same derivative energy, but do not share their full initial data.

For a tabulated or Euler approximation, keep $a_n=1,a_n'=0$ exactly and approximate only the changed cosine coefficient. The MF-C state references, finite-horizon error bound and first-step energy warning therefore carry over; there is no extra dissipating constant-mode spring. Multiplying a coefficient error by $Q$ bounds the uniform displacement error for this one cosine; multiplying velocity error by $Q/t_0$ gives its velocity bound. The field approximation's energy is the changed modal energy times $MQ^2/t_0^2$. A correct mean does not certify an accurate mode or justify an empirical claim.

**Revised report.** “The Neumann problem has a constant displacement mode and a cosine mode fixed by its initial data. Boundary power is zero and mechanical energy dissipates. The cosine decays, but the mean stays $Q$, so displacement tends to $Q$, not zero. The explicit smooth finite-mode solution and the classical difference-energy proof establish this particular initial-boundary problem. They do not prove general rough-data Fourier convergence, nonlinear PDE existence or agreement with measurements.”

The following exact coefficient ledger records the finite ansatz used in every new case. All entries are dimensionless. In each row $q(\tau)=(A+B\tau)e^{-\lambda\tau}+C e^{-\mu\tau}$; the full field is $w=\text{mean}+q\,\text{mode}(\xi)$ and the PDE is $w_{\tau\tau}+\gamma w_\tau=\kappa w_{\xi\xi}$. A coefficient zero makes its unused exponential irrelevant.

| Mode reference | gamma | kappa | mode | mean | A | B | lambda | C | mu |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MF-P | 3 | 2 | sin | 0 | 2 | 0 | 1 | -1 | 2 |
| MF-C | 2 | 1 | sin | 0 | 1 | 1 | 1 | 0 | 2 |
| MF-R | 2 | 1 | cos | 1 | 1 | 1 | 1 | 0 | 2 |

For a dimensional arithmetic witness, choose the following positive scales. These are authored exact inputs, not measurements. $M/\pi$ and the last column list coefficients of $\pi$; the energy scale is $MQ^2/t_0^2$. No numerical small-slope acceptance threshold is inferred from this witness.

| Physical witness | rho / (kg/m) | L0 / m | t0 / s | Q / m | M/pi / kg | Primary T / N | Primary d / (kg/(m s)) | Changed T / N | Changed d / (kg/(m s)) | Energy scale/pi / J |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MF-SCALE | 2 | 3 | 4 | 1/10 | 3 | 9/4 | 3/2 | 9/8 | 1 | 3/1600 |

## 11. Compare, repair and continue with the real prerequisites

Use the same descriptive criteria on each portfolio: state/field and domain; units and scales; force/constitutive assumptions; initial and boundary compatibility; exact solution and its proof; local and integrated energy with boundary power; the numerical horizon, step hypotheses and error meaning; and a changed assumption that invalidates a stronger claim. Keep separate first, comparison and revised files. Equivalent valid arguments are welcome. These criteria award no grade and do not authenticate an independent attempt.

Repair the earliest unsupported step. A missing flux sign calls for the integrated boundary ledger. A missing constant mode calls for the actual boundary operator and initial mean. A wrong repeated-root formula calls for the native ODE repair and explicit substitution. An invalid numerical decay claim calls for the actual multipliers and Jordan factor. A correct dimension or residual alone is necessary evidence for its own calculation, not a complete physical validation.

The action/symmetry book, the spacetime reading and the existing mathematical-physics programme retain their original scopes. This course teaches the selected mechanics/ODE/continuum/electromagnetic links above and the complete smooth string family. It does not relabel either book as an elementary whole-book course. Continue to [the mathematical-physics standard course](#/courses/atlas-mathematical-physics-standard) with its named probability, operator, multivariable/vector calculus and later PDE/tensor preparation. Its existing thermal-qubit primary, changed and return tasks remain separate. General relativity, quantum statistical mechanics, nonholonomic theory, global symplectic geometry, weak PDE constructions and QFT require their actual further teaching; no task count establishes those prerequisites or outcomes.
