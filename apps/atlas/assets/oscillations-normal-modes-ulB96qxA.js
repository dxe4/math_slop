var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: oscillations-normal-modes
title: "Oscillations and Normal Modes"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Oscillations and Normal Modes

Several coupled coordinates can move as one independent pattern. A normal mode is such a pattern for the linearised conservative system: every coordinate shares a single time dependence, with fixed amplitude ratios. Finding the modes requires both the stiffness and mass matrices. Diagonalising the stiffness matrix in an arbitrary Euclidean basis can give the wrong frequencies when masses differ.

Read [Newtonian energy](newtonian-mechanics.md), symmetric matrices, positive definiteness and the spectral theorem. The [ODE linear-systems course](../ode-first-course/linear-systems-matrix-exponential.md) supplies linear evolution. Here we derive the mechanical generalised eigenvalue problem and its interpretation, rather than repeating the general solution of every linear system.

## The quadratic approximation at equilibrium

Let $q\\in\\mathbb R^n$ be configuration coordinates in an open domain. Assume constant symmetric positive-definite mass matrix $M$ and a twice continuously differentiable potential $V$. The equations are
$$
M\\ddot q=-\\nabla V(q).
$$
Let $a$ be an equilibrium, so $\\nabla V(a)=0$. Put $\\xi=q-a$ and $K=\\nabla^2V(a)$. Taylor's theorem gives
$$
V(a+\\xi)=V(a)+\\tfrac12\\xi^TK\\xi+o(\\|\\xi\\|^2),\\qquad
\\nabla V(a+\\xi)=K\\xi+o(\\|\\xi\\|).
$$
The matrix $K$ is symmetric because the second partial derivatives are continuous. Keeping only terms linear in displacement yields
$$
M\\ddot\\xi+K\\xi=0.
$$
This approximation is local. It does not automatically remain accurate for arbitrarily long time or for amplitudes that explore distant parts of the potential. Exact linear equations, such as ideal Hookean spring networks, are special cases where the quadratic model is the complete written model.

**Definition 3.1 (Normal mode).** A nonzero vector $v$ is a mode shape with squared frequency $\\lambda$ when $Kv=\\lambda Mv$. Substitution $\\xi(t)=v\\eta(t)$ then reduces the equations to $\\ddot\\eta+\\lambda\\eta=0$.

The number $\\lambda$ has units of inverse time squared. Positive $\\lambda$ produces oscillation, zero produces a constant or linearly drifting modal coordinate, and negative $\\lambda$ produces exponential solutions. A mode shape can be multiplied by a nonzero constant; its normalisation must therefore be specified when quoting amplitudes or forcing coefficients.

## Why all the modes can be chosen real

**Theorem 3.2 (Mass-orthonormal diagonalisation).** If $M$ is symmetric positive definite and $K$ symmetric, there is a real invertible matrix $S$ such that
$$
S^TMS=I,\\qquad S^TKS=\\Lambda,
$$
where $\\Lambda$ is real diagonal. Its columns are generalised eigenvectors $Kv_i=\\lambda_iMv_i$. If $K$ is positive definite, every $\\lambda_i>0$.

*Proof.* The spectral theorem gives the symmetric positive-definite square root $M^{1/2}$ and its inverse. The matrix $D=M^{-1/2}KM^{-1/2}$ is symmetric. Choose an orthogonal matrix $U$ with $U^TDU=\\Lambda$ and set $S=M^{-1/2}U$. Direct multiplication gives both displayed identities. Since $D U=U\\Lambda$, multiplying by $M^{1/2}$ gives $KS=MS\\Lambda$. For positive-definite $K$, the quadratic form $w^TDw=(M^{-1/2}w)^TK(M^{-1/2}w)$ is positive for every nonzero $w$, so its eigenvalues are positive. $\\square$

The proof uses symmetric similarity after mass weighting. The matrix $M^{-1}K$ is generally not symmetric in the Euclidean inner product, although it is similar to $D$ and therefore has the same real eigenvalues. Its eigenvectors are orthogonal in the mass inner product $\\langle v,w\\rangle_M=v^TMw$, rather than necessarily in ordinary dot product.

An alternative orthogonality argument makes the physical weighting explicit. If $Kv_i=\\lambda_iMv_i$ and $Kv_j=\\lambda_jMv_j$, symmetry gives
$$
(\\lambda_i-\\lambda_j)v_j^TMv_i=0.
$$
Thus modes of distinct squared frequency are mass-orthogonal. Within a repeated eigenspace one may choose a mass-orthonormal basis; the individual basis shapes are not uniquely distinguished by the dynamics.

## Independent coordinates and energy

Write $\\xi=S\\eta$. Multiply the linearised equation by $S^T$ to obtain
$$
\\ddot\\eta+\\Lambda\\eta=0.
$$
When all frequencies are positive, its exact solution is
$$
\\eta_i(t)=A_i\\cos(\\omega_i t)+B_i\\sin(\\omega_i t),\\qquad
\\omega_i=\\sqrt{\\lambda_i}.
$$
Initial coordinates follow from $\\eta(0)=S^TM\\xi(0)$ and $\\dot\\eta(0)=S^TM\\dot\\xi(0)$, since $S^{-1}=S^TM$. In particular $A_i=\\eta_i(0)$ and $B_i=\\dot\\eta_i(0)/\\omega_i$.

The quadratic energy becomes
$$
E_{lin}=\\tfrac12\\dot\\xi^TM\\dot\\xi+\\tfrac12\\xi^TK\\xi
=\\sum_i\\left(\\tfrac12\\dot\\eta_i^2+\\tfrac12\\lambda_i\\eta_i^2\\right).
$$
Each term is separately conserved in the unforced uncoupled modal equations. Coordinates can exchange apparent energy in their original representation while these modal energies remain fixed. A plot of one coordinate growing over part of a cycle is not evidence that total energy grows.

Mass-normalised coordinates need not have the units of geometric displacement. If the original coordinates are lengths, a modal coordinate often carries an additional square root of mass. This is harmless provided the transformation, energy and forcing use the same convention.

## Worked example 1: symmetric coupled oscillators

Take two equal masses $m>0$. Each is attached to a fixed support by a spring of stiffness $k>0$, and a coupling spring of stiffness $\\kappa\\ge0$ connects them. With displacements $x_1,x_2$,
$$
V=\\tfrac12k(x_1^2+x_2^2)+\\tfrac12\\kappa(x_1-x_2)^2,
\\quad M=mI,
\\quad K=\\begin{pmatrix}k+\\kappa&-\\kappa\\\\-\\kappa&k+\\kappa\\end{pmatrix}.
$$
The symmetric shape $(1,1)$ stretches neither end of the coupling spring relative to the other, giving $\\omega_s^2=k/m$. The antisymmetric shape $(1,-1)$ stretches that spring and gives $\\omega_a^2=(k+2\\kappa)/m$. Their mass-normalised versions divide each vector by $\\sqrt{2m}$.

From $x_1(0)=a$, $x_2(0)=0$ and zero velocities, the solution is
$$
x_1(t)=\\frac a2(\\cos\\omega_st+\\cos\\omega_at),\\qquad
x_2(t)=\\frac a2(\\cos\\omega_st-\\cos\\omega_at).
$$
Both initial conditions and both equations can be checked by direct substitution. Trigonometric identities express $x_1$ as a fast cosine with envelope $a\\cos[(\\omega_a-\\omega_s)t/2]$, while $x_2$ has the corresponding sine envelope. When the frequencies are close, the displacement passes between the two coordinates on a slow beat timescale. The two modal energies nevertheless stay constant.

At $\\kappa=0$, the frequencies coincide. There is no distinguished symmetric or antisymmetric physical mode basis; any orthonormal pair gives a valid decomposition of the two independent identical oscillators. The formulas reduce to $x_1=a\\cos(\\sqrt{k/m}\\,t)$ and $x_2=0$, as they should.

## Worked example 2: unequal masses require a weighted problem

Now take $M=m\\operatorname{diag}(1,2)$ and
$K=k\\left(\\begin{smallmatrix}2&-1\\\\-1&1\\end{smallmatrix}\\right)$ with $m,k>0$. Write $\\lambda=(k/m)z$. The determinant equation is
$$
\\det(K-\\lambda M)=k^2(1-5z+2z^2)=0,
$$
so $z_\\pm=(5\\pm\\sqrt{17})/4$, both positive. A corresponding shape is
$$
v_\\pm=\\binom{1}{2-z_\\pm}.
$$
These shapes are not generally Euclidean orthogonal. But $z_-+z_+=5/2$ and $z_-z_+=1/2$, giving
$$
v_-^TMv_+=m[1+2(2-z_-)(2-z_+)]=0.
$$
Divide each shape by $\\sqrt{m[1+2(2-z_\\pm)^2]}$ to obtain mass normalisation. Its frequency is $\\sqrt{(k/m)z_\\pm}$.

Ignoring the factor two in the second mass would instead diagonalise the wrong stiffness-only problem. Symmetry of $K$ does not mean the mass weighting can be discarded. The example also illustrates why the determinant equation is quadratic in squared frequency rather than directly in frequency.

## A positive Hessian gives nonlinear stability

**Proposition 3.3 (Energy stability of a strict quadratic minimum).** Under the conservative equations above, if $K$ is positive definite, the equilibrium $(q,\\dot q)=(a,0)$ is Lyapunov stable for the nonlinear system.

*Proof.* The potential Taylor expansion and positive definiteness give constants $c,C>0$ on a sufficiently small closed configuration ball such that $c\\|\\xi\\|^2\\le V(a+\\xi)-V(a)\\le C\\|\\xi\\|^2$. The mass quadratic has similar positive upper and lower bounds in velocity. Therefore the exact conserved energy minus $V(a)$ is positive definite and comparable to $\\|\\xi\\|^2+\\|\\dot\\xi\\|^2$ there. Choose an energy sublevel small enough to lie inside any prescribed smaller phase-space ball. Conservation prevents crossing its boundary. Compact containment within the smooth equation domain gives forward continuation, proving stability. $\\square$

The conclusion is stability, not attraction. A nonzero nearby initial energy cannot tend to the equilibrium's lower energy while remaining exactly conserved. Positive modal frequencies therefore do not describe damping into rest.

When $K$ has a zero eigenvalue, the quadratic approximation is inconclusive about nonlinear stability. For $V(x)=x^4/4$, the Hessian at zero vanishes, but the exact energy has compact positive sublevels and proves stability. For $V(x)=-x^4/4$, the same zero Hessian hides a force driving positive displacements outward. Zero-frequency directions require higher-order or symmetry analysis; they cannot be classified by the positive-frequency formula alone.

If the kinetic energy is $\\tfrac12\\dot q^TM(q)\\dot q$ with smooth positive-definite $M(q)$, the full mechanical equations include additional velocity-quadratic terms. At a rest equilibrium these terms vanish to first order, leaving $M(a)\\ddot\\xi+K\\xi=0$. The same linear mass-weighted problem remains, but the full nonlinear equations must be derived before applying an exact energy argument.

## Worked example 3: resonance is a forcing projection

For linear forcing $M\\ddot\\xi+K\\xi=f\\cos\\Omega t$, modal coordinates satisfy
$$
\\ddot\\eta_i+\\omega_i^2\\eta_i=g_i\\cos\\Omega t,
\\qquad g_i=v_i^Tf.
$$
The force coefficient follows by multiplying by $S^T$, not $S^TM$. For zero initial data and $\\Omega\\ne\\omega_i$,
$$
\\eta_i(t)=\\frac{g_i}{\\omega_i^2-\\Omega^2}
(\\cos\\Omega t-\\cos\\omega_it).
$$
At $\\Omega=\\omega_i>0$, the limiting expression is
$\\eta_i(t)=[g_i/(2\\omega_i)]t\\sin\\omega_it$.
Differentiation verifies the resonant equation and zero initial data. Its growing envelope reflects external work, not a violation of conservative energy for an unforced model.

For the symmetric two-mass system, a force $f=(F,F)$ has zero projection on the antisymmetric mode. Driving exactly at $\\omega_a$ therefore produces no antisymmetric secular term when that mode starts at rest. Matching a frequency is necessary for this simple resonance, but the forcing must also couple to its shape.

## Rayleigh quotients and damping

For any nonzero trial shape $v$, define
$$
R(v)=\\frac{v^TKv}{v^TMv}.
$$
Expressing $v=S\\eta$ shows $R=\\sum_i\\lambda_i\\eta_i^2/\\sum_i\\eta_i^2$, a weighted average of squared frequencies. Hence $\\lambda_{min}\\le R(v)\\le\\lambda_{max}$. A trial shape gives an upper bound on the lowest squared frequency, not automatically an exact mode or a lower bound. It is exact when the trial lies in the corresponding eigenspace.

Adding damping gives $M\\ddot\\xi+C\\dot\\xi+K\\xi=0$. The same transformation produces damping matrix $S^TCS$, which need not be diagonal. Stiffness modes can remain coupled through velocity terms. Proportional damping $C=\\alpha M+\\beta K$ is a special case giving diagonal entries $\\alpha+\\beta\\lambda_i$. For positive-semidefinite symmetric $C$, energy obeys $\\dot E=-\\dot\\xi^TC\\dot\\xi\\le0$, but nonincrease alone does not prove every mode decays: undamped directions may remain. State the damping hypotheses before inferring asymptotic attraction.

## How a mode responds to a changed parameter

Suppose M and K depend differentiably on a parameter s, and a differentiable eigenpair satisfies $Kv=\\lambda Mv$ with $v^TMv=1$. Differentiating the equation and multiplying by $v^T$ gives
$$
v^TK'v+v^TKv'=\\lambda'+\\lambda v^TM'v+\\lambda v^TMv'.
$$
Symmetry and the original eigenvalue equation give $v^TKv'=\\lambda v^TMv'$, so these terms cancel. Therefore
$$
\\lambda'=v^T(K'-\\lambda M')v.
$$
This identity is conditional on the differentiable eigenpair; at a repeated eigenvalue an arbitrary previously chosen mode label need not continue differentiably. One must analyse the repeated subspace instead of dividing by a vanishing frequency gap.

With fixed mass and positive-semidefinite stiffness increment $K'$, the formula makes every such simple squared frequency nondecreasing. With fixed stiffness and positive-semidefinite mass increment $M'$, a positive squared frequency has nonpositive derivative. These signs express how added stiffness and inertia enter differently. For a positive frequency, $\\omega'=\\lambda'/(2\\omega)$; this conversion is unavailable at a zero mode. In the equal-mass example, increasing the support stiffness k gives $\\lambda'=1/m$ for both modes, agreeing with their exact formulas.

## Beating is interference between exact normal modes

For the symmetric pair of coupled oscillators, let the symmetric and
antisymmetric frequencies be positive and distinct. Displace only the first
mass initially by a, leave the second at zero and release both from rest.
Decomposition into the two mass-normalized shapes gives equal configuration
amplitudes. In the original displacement coordinates the exact solution is
$$q_1(t)=\\frac a2(\\cos\\omega_s t+\\cos\\omega_a t),\\qquad
q_2(t)=\\frac a2(\\cos\\omega_s t-\\cos\\omega_a t).$$
Initial displacement and velocity follow by direct evaluation; adding and
subtracting the two independent mode equations proves the coupled equations.
The trigonometric sum and difference identities write these as a rapid
carrier multiplied by a slower envelope when the two frequencies are close.
The first envelope involves the cosine of half their difference, whereas
the second involves the sine of half their difference.

This behaviour is called beating. The modal energies remain constant in
the unforced conservative system; it is the allocation of visible motion
between the original masses that changes. A mass can temporarily have
very small displacement while some energy remains in its velocity or in
the connecting spring. Displacement envelopes should therefore not be labelled
individual mechanical energies without defining how spring energy is being
assigned. The exact conserved total energy is obtained from the quadratic
mass and stiffness forms, not from a displacement peak alone.

The envelope period depends on the frequency difference, while each mode
has its own oscillation period. Exact return of the entire state requires
a common integer multiple of both modal periods, hence a rational frequency
ratio. If that ratio is irrational, the motion can display repeated near
transfers and clear beating without having a finite exact common period.
A finite plot cannot turn an approximate recurrence into an exact one.

As coupling becomes weak, the two frequencies approach one another and
the envelope timescale grows. A short observation may then suggest that
one mass stays nearly at rest or that energy has been lost, even though
the exact conservative solution is still valid. Resolve both the carrier
and the envelope before interpreting that observation. This is a useful
case where diagonalizing the equations gives both a proof and the relevant
measurement timescales, while the original coordinates retain the physical
meaning of which mass is being observed.

## Gyroscopic coupling preserves energy while changing the mode problem

Consider a linear system Mq̈+Gq̇+Kq=0 with
symmetric M,K and skew-symmetric G. Dotting
with velocity makes the G contribution
vanish, so the usual quadratic kinetic-plus-potential
energy is conserved. Nevertheless the modal
equation is now a quadratic matrix pencil
in the growth rate, not merely Kv=λMv.
Zero work does not mean zero effect on motion.

For two coordinates with M=I, K=kI and
G equal to twice Ω times the planar
rotation matrix, circularly polarized complex
modes diagonalize that rotation matrix.
Their positive frequencies are the square
root of k+Ω² plus or minus Ω,
for k>0 and Ω≥0. Substituting a complex
exponential verifies both roots. Real and
imaginary parts give real motions.
Thus the earlier mass-orthonormal diagonalization
applies to its stated velocity-independent
conservative equations. Additional gyroscopic
terms can preserve energy without fitting
that simpler theorem. Derive the actual
linearized equations before interpreting
their frequencies as eigenvalues of K alone.

## Exercises

### Exercise 1 — Mass normalisation
<a id="oscillations-normal-modes-ex-1"></a>

Normalise the symmetric mode $(1,1)$ when both masses are m.

<details>
<summary>Hint 1</summary>

Compute its squared norm in the mass inner product.

</details>
<details>
<summary>Hint 2</summary>

Divide by the square root of that norm.

</details>
<details>
<summary>Full solution</summary>

Its squared mass norm is $m+m=2m$. The normalised vector is $(1,1)/\\sqrt{2m}$, which has mass norm one. Euclidean normalisation by $\\sqrt2$ would leave mass norm squared equal to m.

</details>

### Exercise 2 — Coupling stiffness
<a id="oscillations-normal-modes-ex-2"></a>

Why does increasing coupling stiffness leave the symmetric frequency unchanged in Example 1?

<details>
<summary>Hint 1</summary>

Inspect the coupling spring extension for equal displacements.

</details>
<details>
<summary>Hint 2</summary>

Its potential depends on the difference of the two coordinates.

</details>
<details>
<summary>Full solution</summary>

For $x_1=x_2$, the difference vanishes, so the coupling spring is unstretched and contributes no restoring force in that direction. The only restoring stiffness is k per mass, giving $\\omega_s^2=k/m$ independently of the coupling parameter.

</details>

### Exercise 3 — Zero stiffness
<a id="oscillations-normal-modes-ex-3"></a>

Solve the modal equation with $\\lambda=0$ and explain why its general solution need not stay close to the origin.

<details>
<summary>Hint 1</summary>

The acceleration vanishes.

</details>
<details>
<summary>Hint 2</summary>

A small nonzero initial velocity can accumulate displacement over long time.

</details>
<details>
<summary>Full solution</summary>

The solution is $\\eta=A+Bt$. If B is nonzero, its magnitude grows without bound. Thus a zero restoring eigenvalue does not give an oscillatory bound. A translation symmetry or nonlinear higher-order restoring term needs a separate interpretation.

</details>

### Exercise 4 — Negative squared frequency
<a id="oscillations-normal-modes-ex-4"></a>

For $\\lambda=-a^2$ with $a>0$, find the modal solution.

<details>
<summary>Hint 1</summary>

Solve the scalar characteristic equation.

</details>
<details>
<summary>Hint 2</summary>

The two real characteristic roots have opposite signs.

</details>
<details>
<summary>Full solution</summary>

The equation is $\\ddot\\eta-a^2\\eta=0$, giving $\\eta=Ae^{at}+Be^{-at}$. Initial conditions with A nonzero have a growing component. This is an unstable linear direction rather than an oscillation with an imaginary physical frequency.

</details>

### Exercise 5 — Weighted orthogonality
<a id="oscillations-normal-modes-ex-5"></a>

Prove mass orthogonality for two distinct generalised eigenvalues using only symmetry of M and K.

<details>
<summary>Hint 1</summary>

Multiply each eigenvalue equation by the other eigenvector.

</details>
<details>
<summary>Hint 2</summary>

The two stiffness scalar products are equal by symmetry.

</details>
<details>
<summary>Full solution</summary>

The equations give $v_j^TKv_i=\\lambda_i v_j^TMv_i$ and, after transposition, $v_j^TKv_i=\\lambda_j v_j^TMv_i$. Subtraction gives $(\\lambda_i-\\lambda_j)v_j^TMv_i=0$. Distinct eigenvalues therefore force the mass product to vanish.

</details>

### Exercise 6 — Recovering modal coordinates
<a id="oscillations-normal-modes-ex-6"></a>

Show that $S^{-1}=S^TM$ and use it to express modal initial velocities.

<details>
<summary>Hint 1</summary>

Use the mass-orthonormality identity.

</details>
<details>
<summary>Hint 2</summary>

Both matrices are square and S is invertible.

</details>
<details>
<summary>Full solution</summary>

The relation $S^TMS=I$ makes $S^TM$ a left inverse, hence the inverse of the square invertible S. Therefore $\\dot\\eta(0)=S^TM\\dot\\xi(0)$. This differs from the force projection $S^Tf$ because force enters the equations as a covector on the displacement coordinates.

</details>

### Exercise 7 — A Rayleigh bound
<a id="oscillations-normal-modes-ex-7"></a>

For Example 2 use trial shape $(1,1)$ to bound the lowest squared frequency.

<details>
<summary>Hint 1</summary>

Compute the stiffness and mass quadratic forms separately.

</details>
<details>
<summary>Hint 2</summary>

A trial quotient bounds the minimum from above.

</details>
<details>
<summary>Full solution</summary>

The numerator is k and the denominator is 3m, so $R=k/(3m)$. Therefore $\\lambda_{min}\\le k/(3m)$. The exact value is $(k/m)(5-\\sqrt{17})/4$, which is smaller; the trial shape need not itself satisfy the mode equation.

</details>

### Exercise 8 — A mode that forcing misses
<a id="oscillations-normal-modes-ex-8"></a>

For equal masses, which mode is excited by force $(F,-F)$, and which projection vanishes?

<details>
<summary>Hint 1</summary>

Pair the force with the symmetric and antisymmetric normalised shapes.

</details>
<details>
<summary>Hint 2</summary>

Opposite force components cancel against equal shape components.

</details>
<details>
<summary>Full solution</summary>

The symmetric projection is $(F-F)/\\sqrt{2m}=0$. The antisymmetric projection is $2F/\\sqrt{2m}$. Starting from rest, the forcing drives only the antisymmetric mode, so resonance at the symmetric frequency alone produces no symmetric secular response.

</details>

### Exercise 9 — Proportional damping
<a id="oscillations-normal-modes-ex-9"></a>

Derive the modal damping coefficient when $C=\\alpha M+\\beta K$.

<details>
<summary>Hint 1</summary>

Apply S transpose on the left and S on the right.

</details>
<details>
<summary>Hint 2</summary>

Use both diagonalisation identities.

</details>
<details>
<summary>Full solution</summary>

The transformed damping is $S^TCS=\\alpha I+\\beta\\Lambda$. Mode i therefore satisfies $\\ddot\\eta_i+(\\alpha+\\beta\\lambda_i)\\dot\\eta_i+\\lambda_i\\eta_i=0$. This decoupling is a property of this damping model, not of an arbitrary damping matrix.

</details>

### Exercise 10 — A vanishing Hessian
<a id="oscillations-normal-modes-ex-10"></a>

Compare the exact local stability information supplied by $V(x)=x^4/4$ and $V(x)=-x^4/4$ despite their identical Hessians at zero.

<details>
<summary>Hint 1</summary>

Inspect the full conserved energy and force signs.

</details>
<details>
<summary>Hint 2</summary>

The quadratic approximation has discarded the first nonzero potential term.

</details>
<details>
<summary>Full solution</summary>

For the positive quartic, $E=m\\dot x^2/2+x^4/4$ is positive definite with compact small sublevels, proving stability. For the negative quartic, a small positive displacement released from rest has positive outward acceleration $x^3/m$. The energy identity makes its velocity positive and increasing thereafter, so it leaves any fixed small interval, proving instability. The zero Hessian alone distinguishes neither case.

</details>

## Summary

Small conservative oscillations are governed by a symmetric stiffness matrix together with a positive mass matrix. Mass weighting proves a complete real mode decomposition and turns quadratic energy into independent modal energies. Positive frequencies describe bounded linear motion; nonlinear stability, resonance, damping and zero modes require their own hypotheses. The action principle next derives mechanical equations from a variational description, including the coordinate-dependent structures behind these matrices.

Taylor's *Classical Mechanics* and Goldstein, Poole and Safko's *Classical Mechanics* are the comparison references. The proofs, examples and exercises above are original Euler exposition.
`;export{e as default};