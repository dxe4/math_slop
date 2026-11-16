var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: linearisation-hartman-grobman
title: "Linearisation and Hartman–Grobman"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Linearisation and Hartman–Grobman

A Jacobian is a first-order approximation to a rate law. It does not make a nonlinear trajectory equal to a linear trajectory, and it does not decide every equilibrium. This chapter proves a robust sufficient stability theorem and states the local topological bridge supplied by Hartman–Grobman. The distinction between those conclusions matters: a topological orbit correspondence does not supply a numerical decay rate.

Required preparation is [the ODE matrix-exponential chapter](../ode-first-course/linear-systems-matrix-exponential.md), [the linear phase plane](../ode-first-course/linear-phase-plane.md), and differentiability of maps between Euclidean spaces. For the general-dimensional exponential estimate we use the [standard finite-dimensional complex Jordan form](../linear-algebra-structure-proofs/jordan-chains-nilpotent-structure.md); its block exponential is explained below. The planar worked examples can also be checked directly.

## The remainder carries the hypothesis

**Definition 4.1 (Linearisation and hyperbolicity).** Let $F:U\\to\\mathbb R^n$ be $C^1$ on an open neighbourhood of an equilibrium $a$. Translate $a$ to zero and write
$$
F(a+u)=Au+R(u),\\qquad A=DF(a).
$$
Differentiability gives $\\|R(u)\\|/\\|u\\|\\to0$ as $u\\to0$, $u\\ne0$. The equilibrium is hyperbolic if no eigenvalue of $A$ has zero real part. A matrix whose eigenvalues all have negative real part is called Hurwitz.

The small remainder estimate is uniform over all sufficiently small directions, not merely over coordinate axes. A numerical fit to one sampled trajectory does not establish it. Conversely,$C^1$ regularity gives the estimate analytically through the derivative, without simulating any orbit.

**Lemma 4.2 (Decay of a Hurwitz matrix exponential).** If $A$ is Hurwitz, there are $C,\\alpha>0$ such that $\\|e^{At}\\|_2\\le C e^{-\\alpha t}$ for $t\\ge0$.

*Proof.* In complex Jordan coordinates, each block is $\\lambda I+N$ with $N^k=0$ for some finite $k$, and
$$
e^{(\\lambda I+N)t}=e^{\\lambda t}
\\sum_{j=0}^{k-1}\\frac{t^jN^j}{j!}.
$$
This follows by multiplying the exponential series of two commuting matrices, with the nilpotent series terminating. Choose $\\beta>0$ such that every $\\operatorname{Re}\\lambda\\le-\\beta$. Every block norm is bounded by a fixed polynomial in $t$ times $e^{-\\beta t}$. For $0<\\alpha<\\beta$, each function $t^j e^{-(\\beta-\\alpha)t}$ is bounded on $[0,\\infty)$. Summing the finitely many block bounds and including the fixed change-of-basis norm factors proves the estimate. $\\square$

The change-of-basis factors may be large for a nonnormal matrix. A negative spectrum ensures eventual exponential decay but does not imply $\\|e^{At}\\|\\le e^{-\\alpha t}$ with constant one or rule out transient growth.

## A quadratic function adapted to the linear part

**Lemma 4.3 (A Lyapunov matrix).** For Hurwitz $A$, the real matrix
$$
P=\\int_0^\\infty e^{A^Tt}e^{At}\\,dt
$$
is symmetric positive definite and satisfies $A^TP+PA=-I$.

*Proof.* Lemma 4.2 bounds the integrand norm by $C^2e^{-2\\alpha t}$, so the entrywise integral converges. Symmetry follows from the integrand. For nonzero $v$,
$v^TPv=\\int_0^\\infty\\|e^{At}v\\|_2^2dt>0$ because the continuous integrand is positive at $t=0$. Finally, differentiate the matrix product and integrate:
$$
A^TP+PA=
\\int_0^\\infty\\frac{d}{dt}(e^{A^Tt}e^{At})dt
=0-I.
$$
The exponential bound gives the zero endpoint at infinity. $\\square$

Let $p_-,p_+>0$ be the smallest and largest eigenvalues of $P$. Then
$p_-\\|u\\|^2\\le u^TPu\\le p_+\\|u\\|^2$.
These constants compare the adapted quadratic energy with ordinary distance. They cannot be omitted when converting an energy estimate to a state estimate.

**Theorem 4.4 (Nonlinear exponential stability).** If $F$ is $C^1$ near an equilibrium and its Jacobian there is Hurwitz, the equilibrium is locally exponentially stable.

*Proof.* Work in the translated coordinates and take $V(u)=u^TPu$ with $P$ from Lemma 4.3. For sufficiently small $\\rho>0$, differentiability gives
$\\|R(u)\\|\\le\\|u\\|/(4p_+)$ whenever $\\|u\\|\\le\\rho$. Along a solution,
$$
\\dot V=-\\|u\\|^2+2u^TPR(u)
\\le-\\tfrac12\\|u\\|^2\\le-\\frac{V}{2p_+}.
$$
Choose a positive level $c<p_-\\rho^2$ whose closed sublevel lies in the open domain. If $V(u_0)<c$, the decreasing-energy inequality prevents the solution from reaching the sublevel boundary. Compact containment supplies global forward continuation. Integrating the scalar inequality gives $V(u(t))\\le e^{-t/(2p_+)}V(u_0)$. Thus
$$
\\|u(t)\\|\\le\\sqrt{\\frac{p_+}{p_-}}\\,
e^{-t/(4p_+)}\\|u_0\\|.
$$
A sufficiently small initial ball lies in the sublevel, giving the required local constants. $\\square$

The proof supplies a neighbourhood, continuation, stability, attraction, and an exponential rate together. It does not make the whole basin equal to the theorem's small sublevel, and it says nothing about distant equilibria or escape outside that neighbourhood.

**Example 4.5 (An explicit nonlinear remainder).** For $x'=-x+x^2$, the linear part is $A=-1$, $P=1/2$, and $R(x)=x^2$. Directly,$V=x^2/2$ satisfies
$\\dot V=-x^2+x^3$. On $|x|\\le1/2$,
$\\dot V\\le-\\frac12x^2=-V$. The interval is forward invariant by its endpoint signs, so $|x(t)|\\le e^{-t/2}|x_0|$ for $|x_0|<1/2$. The other equilibrium $x=1$ remains outside this local conclusion. The linear stability theorem does not assert that every initial value converges to zero.

## Applying the argument to coexistence

**Example 4.6 (A quantitative planar certificate).** Near the equilibrium $(1,1)$ of
$$
x'=x(2-x-y),\\qquad y'=y(3-x-2y),
$$
write $u=x-1$, $v=y-1$. Then
$$
A=\\begin{pmatrix}-1&-1\\\\-1&-2\\end{pmatrix},\\quad
R(u,v)=\\binom{-u^2-uv}{-uv-2v^2}.
$$
The symmetric matrix $A$ is negative definite. Taking
$$
P=-\\tfrac12A^{-1}
=\\begin{pmatrix}1&-1/2\\\\-1/2&1/2\\end{pmatrix}
$$
gives $A^TP+PA=-I$ by direct multiplication. Its eigenvalues are $(3\\pm\\sqrt5)/4$, both positive.

If $r=\\sqrt{u^2+v^2}$, Cauchy–Schwarz gives $|R_1|\\le\\sqrt2\\,r^2$ and $|R_2|\\le\\sqrt5\\,r^2$, hence $\\|R\\|\\le\\sqrt7\\,r^2\\le3r^2$. Therefore any small radius $\\rho\\le1/(12p_+)$ ensures the remainder inequality used in Theorem 4.4. A quadratic sublevel inside that radius proves local exponential attraction to coexistence. This is a complete local nonlinear conclusion, stronger than merely observing negative Jacobian eigenvalues. It remains local; the earlier global bounds alone did not identify every trajectory's limit.

## Nonhyperbolic examples share one Jacobian

**Example 4.7 (The same linear centre, three nonlinear outcomes).** Consider
$$
x'=-y+\\gamma x(x^2+y^2),\\qquad
y'=x+\\gamma y(x^2+y^2).
$$
For every $\\gamma$, the Jacobian at zero is
$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, with eigenvalues $\\pm i$.
For $r>0$, direct differentiation gives $r'=\\gamma r^3$ and $\\theta'=1$.

When $\\gamma=-1$, the radius is $r_0/\\sqrt{1+2r_0^2t}$, proving asymptotic attraction but not exponential decay. When $\\gamma=0$, each nonzero radius is constant and trajectories are circles, so the origin is stable but not attractive. When $\\gamma=1$, positive radii grow and blow up at $1/(2r_0^2)$, proving instability. The shared linearisation cannot distinguish these outcomes.

A zero or imaginary-axis eigenvalue is therefore an inconclusive boundary for the negative-spectrum sufficient theorem. It is not automatically an unstable equilibrium, a centre, or a bifurcation. Higher-order analysis or another invariant must decide.

## Hartman–Grobman: a cited local statement

**Theorem 4.8 (Hartman–Grobman, local orbit form; cited).** For a $C^1$ vector field near a hyperbolic equilibrium, there are neighbourhoods and a homeomorphism carrying its local oriented orbit segments to those of its linearisation. Standard formulations give more precise local-flow conjugacy statements with their time-domain restrictions. We use only this time-oriented orbit correspondence here.

This theorem is cited from the dynamical-systems references in Sources, rather than proved in this first course. It says that the hyperbolic linear picture captures local orbit structure. It does not assert a differentiable coordinate change, preservation of distances, equality of geometric speeds, global equivalence, or a quantitative trajectory-error bound.

For a hyperbolic saddle, the correspondence separates local entering and leaving directions. The smooth stable- and unstable-manifold theorem gives additional tangent-manifold information and is a distinct cited result; a homeomorphism alone does not prove differentiability of those invariant sets.

Linearised instability when a Jacobian has a positive-real-part eigenvalue is another standard theorem, including cases with other nonhyperbolic directions. Its general proof is not supplied by the Hurwitz argument above. In the hyperbolic case it follows from the cited local orbit structure and the corresponding linear instability; explicit invariant-curve examples can prove special cases directly.

## An exact coordinate correspondence

**Example 4.9 (A nonlinear scalar conjugacy).** For $x'=-x-x^3$, define
$$
h(x)=\\frac{x}{\\sqrt{1+x^2}}.
$$
It is strictly increasing, with derivative $(1+x^2)^{-3/2}>0$, and maps $\\mathbb R$ onto $(-1,1)$. Along a solution,
$$
\\frac{d}{dt}h(x(t))
=(1+x^2)^{-3/2}[-x(1+x^2)]=-h(x(t)).
$$
Thus the transformed coordinate obeys $u'=-u$. The inverse is $h^{-1}(u)=u/\\sqrt{1-u^2}$ for $|u|<1$. This provides an exact local time-preserving conjugacy, and forward trajectories remain in the transformed interval. Backward evolution is restricted when the transformed linear orbit reaches its boundary, consistent with the original equation's possible backward blow-up.

An explicit differentiable example does not strengthen the general topological theorem. Other hyperbolic systems need not admit as smooth a linearising coordinate map.

## What can be concluded from an approximate Jacobian

A computed spectrum near the imaginary axis can have unresolved sign under coefficient or rounding uncertainty. To use Theorem 4.4, justify a negative spectral margin for the intended matrix, or directly verify a positive definite $P$ with $A^TP+PA$ negative definite under the data uncertainty. The latter can be more robust than classifying rounded eigenvalues individually.

For instance, if a proposed $P$ gives $A^TP+PA\\le-\\eta I$ with $\\eta>0$, and the nonlinear remainder obeys $2\\|P\\|\\|R(u)\\|\\le(\\eta/2)\\|u\\|$, the same proof works with the modified margin. If $A$ changes by $E$, the quadratic derivative changes by $E^TP+PE$, whose norm is at most $2\\|P\\|\\|E\\|$. A strict margin larger than that perturbation preserves negativity. These inequalities identify what must be checked.

A trajectory plot spiralling inward is not a proof of uniform local stability for every nearby initial state. Conversely, a growing finite-time perturbation in a nonnormal stable system does not contradict eventual exponential attraction with a prefactor $M>1$. The theorem's quantifiers, neighbourhood, and constants distinguish those phenomena.

The next chapter develops Lyapunov functions directly, including cases where linearisation is inconclusive or a nonincreasing energy requires an invariance argument.

## Stable eigenvalues can coexist with transient growth

**Example 4.10 (An explicit nonnormal stability certificate).** For a real parameter $K$, consider the linear system $u'=A_Ku$, where
$$
A_K=\\begin{pmatrix}-1&K\\\\0&-1\\end{pmatrix},
\\qquad
e^{A_Kt}=e^{-t}\\begin{pmatrix}1&Kt\\\\0&1\\end{pmatrix}.
$$
The exponential formula follows by writing $A_K=-I+N$, with $N^2=0$, so the exponential series for $N$ stops after its linear term. Both eigenvalues equal minus one for every parameter value. Nevertheless, the solution starting from $u_0=(0,1)^{\\mathsf T}$ has
$$
u(t)=e^{-t}(Kt,1)^{\\mathsf T},
\\qquad
\\|u(1)\\|_2=e^{-1}\\sqrt{K^2+1}.
$$
For $K=10$ this norm exceeds three, although the initial norm is one. More generally, it exceeds one whenever $K^2>e^2-1$. Thus a negative spectrum does not imply monotone decrease of ordinary Euclidean distance. The coupling transfers the second component into the first before their shared exponential damping eventually dominates.

The matrix construction explains how this behaviour fits the stability theorem. Write a symmetric candidate as $P=\\begin{pmatrix}p&q\\\\q&s\\end{pmatrix}$. Multiplying out the Lyapunov equation gives
$$
-2p=-1,\\qquad Kp-2q=0,\\qquad 2Kq-2s=-1.
$$
Solving these three equations yields
$$
P=\\begin{pmatrix}
1/2&K/4\\\\
K/4&1/2+K^2/4
\\end{pmatrix}.
$$
Its first leading principal minor is positive, and
$$
\\det P=\\frac14+\\frac{K^2}{16}>0.
$$
The two-dimensional positive-definiteness criterion therefore proves that this is a valid adapted energy matrix for every real $K$. Direct substitution gives $\\dot V=-\\|u\\|_2^2$ along the linear flow. The energy decreases even during an increase of Euclidean distance, because its level sets are ellipses with cross terms rather than Euclidean circles.

For the concrete value $K=10$, the matrix has trace twenty-six and determinant $13/2$. Hence
$$
p_\\pm=\\frac{26\\pm\\sqrt{650}}2.
$$
The conversion factor $\\sqrt{p_+/p_-}$ is about ten. This large allowance is consistent with the observed transient amplification. Dropping the prefactor from the earlier exponential estimate would turn a valid bound into a false claim for this initial state. Eigenvalues alone did not supply a unit prefactor.

Now add a $C^1$ nonlinear remainder with the explicit local estimate $\\|R(u)\\|_2\\le\\|u\\|_2^3$. The sufficient smallness condition in Theorem 4.4 follows whenever
$$
\\|u\\|_2\\le\\rho,\\qquad
\\rho\\le\\frac{1}{2\\sqrt{p_+}}.
$$
Indeed, the squared radius bound implies $\\|u\\|_2^3\\le\\|u\\|_2/(4p_+)$. Choose this radius inside the neighbourhood where the remainder estimate holds, and then take the smaller invariant quadratic sublevel required by the proof. The radius inequality by itself does not assert that the whole Euclidean ball is invariant.

As the coupling becomes large, this particular sufficient radius becomes smaller. That is a statement about this certificate and its norm comparison, not a proof that the actual nonlinear basin becomes smaller. A different Lyapunov function or a sharper remainder estimate may certify more initial states. Likewise, the decay exponent supplied by a sufficient inequality need not be the best possible rate, even when the differential equation is exactly known.

This example separates three questions that otherwise look similar in a plot: whether every sufficiently small perturbation ultimately decays, whether its distance decreases at every instant, and how large a temporary amplification the chosen estimate permits. The Hurwitz theorem answers the first with quantitative local constants; the displayed calculation shows why the other two require examining those constants and the chosen norm.

## A stability margin in the Lyapunov metric

The matrix proof also supplies a concrete robustness statement. Let a
Hurwitz matrix A have the positive-definite solution P of
$A^TP+PA=-I$. For a perturbed linear system with matrix A+E, the derivative
of V(x)=xᵀPx is
$$\\dot V=-\\|x\\|^2+x^T(E^TP+PE)x
\\le-(1-2\\|P\\|\\|E\\|)\\|x\\|^2.$$
Thus every constant perturbation with norm strictly below the reciprocal of
twice the norm of P preserves exponential stability. The bound is sufficient,
not a claim that the first destabilizing perturbation reaches exactly that
size. Its value depends on the chosen norm and on the normalisation of the
Lyapunov equation.

The same inequality applies to a time-dependent perturbation if its norm is
uniformly below that threshold. There is then one common positive-definite
quadratic function whose derivative stays negative for every allowed matrix.
No differentiability of E in time is needed beyond the regularity required
to define solutions and the almost-everywhere derivative; a continuous E is
an elementary sufficient assumption here. This conclusion is stronger than
checking that each frozen matrix happens to have stable eigenvalues, because
it controls the same evolving state with one common energy estimate.

For a nonlinear perturbation, a uniform small derivative bound near the
equilibrium makes the remainder sufficiently small relative to the state,
which returns to the proof of nonlinear exponential stability above. A small
function value at just one state is insufficient: the Lyapunov derivative
must be controlled throughout a trapping neighbourhood. This calculation
shows how a qualitative classification can be turned into a quantified
margin while keeping local domain restrictions explicit.

## Exercises

### Exercise 4.1 — A remainder
<a id="linearisation-hartman-grobman-ex-1"></a>

For $F(x)=-2x+3x^2$, identify A and R and prove R(x)/|x|→0.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate at zero.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the absolute value of the quadratic term.

</details>
<details>
<summary>Solution</summary>

**Solution.** $A=-2$ and $R(x)=3x^2$. For x≠0, $|R(x)|/|x|=3|x|\\to0$. Thus the differentiability hypothesis supplies a uniform small relative remainder near zero.

</details>

### Exercise 4.2 — A scalar Lyapunov matrix
<a id="linearisation-hartman-grobman-ex-2"></a>

Find P for $A=-3$ with $A^{\\mathsf T}P+PA=-1$.

<details>
<summary>Hint 1</summary>

**Hint.** All matrices are scalar.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the linear equation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation is -6P=-1, so $P=1/6$>0. The integral definition gives∫₀∞e^{-6t}dt=1/6 as well, agreeing with the algebraic solution.

</details>

### Exercise 4.3 — Checking P
<a id="linearisation-hartman-grobman-ex-3"></a>

Verify $A^{\\mathsf T}P+PA=-I$ for the planar matrices in Example 4.6.

<details>
<summary>Hint 1</summary>

**Hint.** The matrix A is symmetric.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $P=-A^{-1}/2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Both AP and PA equal-I/2 because P is a scalar multiple of A⁻¹. Their sum is-I. The displayed positive eigenvalues of P complete the quadratic certificate.

</details>

### Exercise 4.4 — An adapted norm
<a id="linearisation-hartman-grobman-ex-4"></a>

If $p_-=1,\\ p_+=4$ and $V(t)\\le e^{-t/8}V(0)$, derive the state bound.

<details>
<summary>Hint 1</summary>

**Hint.** Use both quadratic comparison inequalities.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Take a square root at the end.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $\\|u(t)\\|^2\\le V(t)\\le4e^{-t/8}\\|u_0\\|^2$. Therefore $\\|u(t)\\|\\le2e^{-t/16}\\|u_0\\|$. Omitting the square root would give an incorrect exponent and prefactor.

</details>

### Exercise 4.5 — A centre warning
<a id="linearisation-hartman-grobman-ex-5"></a>

Why does the rotation Jacobian in Example 4.7 not imply nonlinear stability?

<details>
<summary>Hint 1</summary>

**Hint.** All three parameter choices share it.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare their exact radial equations.

</details>
<details>
<summary>Solution</summary>

**Solution.** The common eigenvalues are±i, outside the Hurwitz hypothesis. The choices γ=-1,0,1 give attraction, neutral circles and instability respectively. Higher-order terms determine the outcome, so the linear centre alone is inconclusive.

</details>

### Exercise 4.6 — Hyperbolicity
<a id="linearisation-hartman-grobman-ex-6"></a>

Which spectra are hyperbolic: {-1,-2}, {-1,2}, {-1,0}, {i,-i}?

<details>
<summary>Hint 1</summary>

**Hint.** Check real parts, not just zero eigenvalues.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A saddle may still be hyperbolic.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first two spectra are hyperbolic because no real part is zero. The third has a zero eigenvalue and the fourth has imaginary-axis eigenvalues, so they are nonhyperbolic. Hyperbolic does not mean stable.

</details>

### Exercise 4.7 — What HG does not preserve
<a id="linearisation-hartman-grobman-ex-7"></a>

Why does a local topological orbit correspondence not supply a Euclidean decay constant?

<details>
<summary>Hint 1</summary>

**Hint.** A homeomorphism need not be Lipschitz.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Distances can be distorted strongly near the equilibrium.

</details>
<details>
<summary>Solution</summary>

**Solution.** The correspondence identifies orbit structure, but no quantitative upper and lower distance comparison is assumed. Without such metric bounds one cannot transfer an exponential inequality with specified constants. The quadratic argument proves rates separately.

</details>

### Exercise 4.8 — A conjugacy derivative
<a id="linearisation-hartman-grobman-ex-8"></a>

Check $h'(x)F(x)=-h(x)$ for Example 4.9.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate h exactly.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Factor F as $-x(1+x^2)$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The derivative is $(1+x^2)^{-3/2}$. Multiplying by $-x(1+x^2)$ gives $-x/(1+x^2)^{1/2}=-h(x)$, proving the transformed scalar rate law on its actual coordinate range.

</details>

### Exercise 4.9 — A perturbed matrix margin
<a id="linearisation-hartman-grobman-ex-9"></a>

If $A^{\\mathsf T}P+PA\\le-I$ and $\\|P\\|=2$, give a sufficient bound on ||E|| preserving strict negativity for A+E.

<details>
<summary>Hint 1</summary>

**Hint.** Bound $E^{\\mathsf T}P+PE$ in operator norm.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Require its norm to be smaller than 1.

</details>
<details>
<summary>Solution</summary>

**Solution.** The added symmetric term has norm at most $4\\|E\\|$. Thus $\\|E\\|<1/4$ ensures the new quadratic form is at most-(1-$4\\|E\\|$)I, still negative definite. This is sufficient rather than necessary.

</details>

### Exercise 4.10 — Local versus global
<a id="linearisation-hartman-grobman-ex-10"></a>

Why does a locally exponential equilibrium not imply every trajectory converges to it?

<details>
<summary>Hint 1</summary>

**Hint.** The remainder estimate holds in a neighbourhood.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Other equilibria or escape can occur outside it.

</details>
<details>
<summary>Solution</summary>

**Solution.** The proof traps only starts in a sufficiently small sublevel. It does not control the vector field elsewhere. The scalar equation-x+$x^2$ has stable zero locally and another equilibrium 1, while starts above 1 move away and can blow up.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.
- Earlier Euler treatment: [Nonlinear Stability and Bifurcation](../differential-equations-verified-dynamics/nonlinear-stability-bifurcation.md). Additional original worked material and solved exercises remain available there.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

A differentiable rate law is a linear part plus a uniformly small remainder. A Hurwitz Jacobian yields a positive quadratic Lyapunov matrix and a complete local exponential-stability proof. Nonhyperbolic examples require higher-order information. Hartman–Grobman supplies a cited local topological orbit statement, while metric rates and global basins need separate arguments.
`;export{e as default};