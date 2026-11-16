var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: spectral-approximation
title: "Spectral Approximation and Fast Transforms"
level: advanced-undergraduate
status: draft
estimated_minutes: 185
license: CC BY-SA 4.0
---

# Spectral Approximation and Fast Transforms

## Purpose and local prerequisites

The prerequisite chapter is **Orthogonal, Weighted, and Minimax
Approximation** (\`orthogonal-minimax-approximation\`), together with its
prerequisite interpolation chapter. We use polynomial interpolation,
orthogonal projection, least squares, and elementary complex exponentials.
Local polynomial methods reduce
error by shortening subintervals or mesh cells. Spectral methods instead use a
global expansion and ask whether the coefficient tail becomes small rapidly.
For a smooth periodic function this may be a Fourier series; on a finite
interval it may be a Chebyshev or Legendre expansion.

The word **spectral** describes a representation and its approximation
behavior, not an automatic accuracy guarantee. Fast convergence depends on
regularity in a stated domain, a compatible basis, adequate resolution, and a
stable transform and evaluation procedure. A tiny last coefficient is evidence
about the computed representation, not by itself a proof of uniform error.

## Three objects that must remain distinct

For a function \\(f\\), separate:

1. the infinite expansion defined by continuous inner products;
2. the finite projection or interpolant of degree or bandwidth \\(N\\);
3. the floating-point coefficients obtained from samples and a transform.

A projection coefficient is an integral. An interpolation coefficient is
chosen to match nodal data. A discrete transform computes coefficients for a
finite sampled problem. These objects can coincide in special polynomial cases,
but conflating them hides quadrature error, aliasing, and roundoff.

## Fourier approximation for periodic data

For a \\(2\\cdot \\pi\\)-periodic integrable function, write formally

\\[
f(x)=\\sum_{k\\in\\mathbb Z}\\widehat f_k e^{ikx},\\qquad
\\widehat f_k=\\frac1{2\\pi}\\int_0^{2\\pi}f(x)e^{-ikx}\\,dx.
\\]

If \\(f\\) has \\(p\\) periodic derivatives with appropriate regularity,
integration by parts makes \\(\\widehat{f}_k\\) decay algebraically like a power of
\\(\\lvert k\\rvert^{-1}\\). If \\(f\\) extends analytically to a strip about the real axis and is
bounded there, the coefficients decay geometrically. The exact rate depends on
the width of the analytic region and its singularities.

This is why a globally smooth-looking plot is insufficient. A jump in the
periodic extension, a corner, or a nearby complex singularity can dominate the
tail. At a jump, Fourier partial sums exhibit Gibbs oscillations whose width
shrinks but whose peak overshoot does not vanish. Away from the jump,
convergence can still improve. Reporting only a global maximum error without
locating nonsmoothness can make a correct method look mysterious.

### Worked exact Fourier representation

**Example 6.0 (A resolved Fourier polynomial).**

Let

\\[
f(x)=\\sin(3x)+\\tfrac12\\cos(2x).
\\]

The only nonzero complex modes are \\(k=\\pm 3\\) and \\(k=\\pm 2\\). A trigonometric
interpolant with a sampling grid capable of distinguishing these modes
represents \\(f\\) exactly in exact arithmetic. Termwise differentiation gives

\\[
f'(x)=3\\cos(3x)-\\sin(2x).
\\]

At \\(x=\\pi/6\\), this is
\\(3\\cdot \\cos(\\pi/2)-\\sin(\\pi/3)=-\\sqrt{3}/2\\). A transform returning a small but
nonzero coefficient at another mode reveals roundoff, sample noise, or an
implementation convention; it does not reveal a new mathematical frequency.

## Chebyshev representation on a finite interval

On \\([-1,1]\\), define

\\[
T_k(x)=\\cos(k\\arccos x).
\\]

The first polynomials are \\(T_0=1\\), \\(T_1=x\\),
\\(T_2=2x^{2}-1\\), and \\(T_3=4x^{3}-3x\\). They are orthogonal with weight
\\(w(x)=(1-x^{2})^{-1/2}\\). The change of variables \\(x=\\cos(\\theta)\\) turns a
Chebyshev expansion into a cosine expansion:

\\[
f(\\cos\\theta)\\approx\\sum_{k=0}^{N}a_k\\cos(k\\theta).
\\]

This identity explains both the endpoint-clustered nodes and the use of a
discrete cosine transform.

Two common node families are the roots

\\[
x_j=\\cos\\frac{(2j+1)\\pi}{2N+2},\\quad 0\\le j\\le N,
\\]

and the Lobatto points

\\[
x_j=\\cos\\frac{j\\pi}{N},\\quad 0\\le j\\le N.
\\]

Lobatto points include both endpoints, which is convenient for boundary
conditions. The order shown runs from \\(1\\) to \\(-1\\); an implementation may
reverse it, but matrices and data must use the same convention.

The clustering is not cosmetic. Equally spaced high-degree interpolation can
have a rapidly growing Lebesgue constant and severe endpoint oscillation.
Chebyshev points control the interpolation amplification much better. They do
not repair nonsmooth data or guarantee that an arbitrary noisy dataset should
be fitted at degree \\(N\\).

## Analyticity and geometric coefficient decay

An ellipse in the complex plane with foci at \\(\\pm 1\\) can be parameterized by a
number \\(\\rho>1\\); larger \\(\\rho\\) means the ellipse extends farther from the
interval. A standard Chebyshev result has the following useful form.

**Analytic coefficient bound (cited).** If \\(f\\) is analytic inside and on the
Bernstein ellipse \\(E_{\\rho}\\) and satisfies \\(\\lvert f(z)\\rvert \\le M\\) there, then its
Chebyshev coefficients obey, with the usual normalization,

\\[
|a_k|\\le 2M\\rho^{-k},\\qquad k\\ge0.
\\]

Consequently the truncation tail is bounded geometrically. The theorem's
complex-domain hypothesis is material. A function can possess many real
derivatives yet have a nearby complex singularity that limits the observed
rate. Conversely, an apparent straight line on a logarithmic coefficient plot
is evidence of geometric decay over the resolved range, not proof of an
analytic continuation.

If the expansion is truncated after degree \\(N\\), the coefficient bound gives

\\[
\\sum_{k>N}|a_k|
\\le \\frac{2M\\rho^{-(N+1)}}{1-\\rho^{-1}}.
\\]

Because \\(\\lvert T_k(x)\\rvert \\le 1\\) on \\([-1,1]\\), this also bounds the uniform truncation
error. It does not automatically bound interpolation error from rounded nodal
values; that adds sampling and transform effects.

## Discrete transforms and aliasing

At Lobatto points \\(x_j=\\cos(j\\cdot \\pi/N)\\),

\\[
T_k(x_j)=\\cos\\frac{kj\\pi}{N}.
\\]

Only \\(N+1\\) samples are available, so different high modes can have identical
sample values. In particular, modes related by reflection modulo \\(2N\\) alias.

### Worked alias

**Example 6.6 (A Chebyshev sampling alias).**

Take \\(N=4\\). At the five Lobatto points,

\\[
T_5(x_j)=\\cos(5j\\pi/4)
=\\cos(3j\\pi/4)=T_3(x_j)
\\]

for every integer \\(j=0,\\ldots,4\\). An interpolation transform therefore
cannot tell sampled \\(T_5\\) from \\(T_3\\); it returns the degree-three alias.
No amount of floating-point precision recovers information absent from the
sampling design.

A direct transform evaluates \\(\\mathcal O(N^{2})\\) sums. Fast Fourier and cosine transform
factorizations reduce the work to \\(\\mathcal O(N \\log N)\\) under their size and layout
conventions. “Fast” is a complexity statement, not a stability proof. Library
normalizations differ: endpoint coefficients may receive half weights, forward
and inverse transforms may distribute factors differently, and real arrays may
store only half a conjugate-symmetric spectrum. Verify the convention with
\\(T_0,T_1\\), a single Fourier mode, and a round trip.

## Stable evaluation: barycentric and Clenshaw forms

Converting a well-conditioned Chebyshev representation to monomial
coefficients can create huge intermediate numbers and cancellation. Evaluate
in the basis that was computed.

For interpolation at distinct nodes \\(x_j\\), the second barycentric formula is

\\[
p(x)=
\\frac{\\displaystyle\\sum_{j=0}^N\\frac{w_jf_j}{x-x_j}}
{\\displaystyle\\sum_{j=0}^N\\frac{w_j}{x-x_j}},
\\]

with weights \\(w_j=1/\\prod_{m \\ne j}(x_j-x_m)\\), up to a common nonzero factor.
Chebyshev families have simple scaled weights. If \\(x=x_j\\), return \\(f_j\\)
directly rather than divide by zero. A near-node implementation also needs a
rounding-aware equality policy.

For a Chebyshev series, Clenshaw recurrence evaluates the three-term basis
without first forming powers. One common convention initializes
\\(b_{N+2}=b_{N+1}=0\\) and computes

\\[
b_k=2xb_{k+1}-b_{k+2}+a_k
\\]

downward, followed by the convention-specific final combination. Because
coefficient normalizations differ, copying only the recurrence and guessing
the last line is a common bug. Test constant, linear, and endpoint cases.

## Spectral differentiation and error amplification

Differentiating an expansion is algebraically straightforward. Fourier mode
\\(\\exp(ikx)\\) acquires the factor \\(ik\\). High-frequency coefficient errors are
therefore amplified by \\(\\lvert k\\rvert\\). A second derivative amplifies them by \\(k^{2}\\).

Chebyshev coefficient recurrences similarly produce coefficients for \\(p'\\).
For example,

\\[
T_4(x)=8x^{4}-8x^{2}+1,\\qquad
T_4'(x)=32x^{3}-16x=8T_3(x)+8T_1(x).
\\]

At the endpoint, \\(T_N'(1)=N^{2}\\). Thus a coefficient perturbation
\\(\\epsilon\\cdot T_N\\) can perturb the endpoint derivative by
\\(N^{2}\\cdot \\epsilon\\), even while the function perturbation is at most
\\(\\lvert \\epsilon\\rvert\\) on the interval. Differentiation is an ill-conditioned
operation on noisy data. Spectral accuracy for a smooth exact function does
not justify differentiating unresolved measurements at ever higher degree.

A nodal differentiation matrix maps values to derivative values. Its norm
grows with \\(N\\), and dense matrix multiplication costs \\(\\mathcal O(N^{2})\\). Transform,
differentiate coefficients, and inverse-transform can exploit fast structure.
Whichever route is used, compare against exact derivatives for manufactured
functions and monitor coefficient tails.

## Nonlinear products and dealiasing

If \\(u\\) and \\(v\\) each contain modes through bandwidth \\(N\\), their product can
contain modes through \\(2N\\). Multiplying only their values on the original grid
and transforming back folds unresolved modes into lower ones. This is aliasing,
not roundoff.

Padding to a larger transform grid before multiplication, then truncating, can
remove aliases for a specified polynomial product. Fourier implementations
often use a three-halves padding rule or a related two-thirds retention rule for
quadratic nonlinearities, but exact index details depend on whether \\(N\\)
counts points, retained positive modes, or total modes. State the layout rather
than citing the slogan alone. For nonpolynomial nonlinearities, repeated
products can generate arbitrarily high modes, so padding controls rather than
eliminates all truncation effects.

## Spectral collocation for a boundary problem

Consider the specified numerical problem

\\[
-u''(x)=g(x),\\quad -1<x<1,\\qquad u(-1)=u(1)=0.
\\]

At Lobatto points, let \\(D^{2}\\) approximate the second derivative. A
collocation system enforces

\\[
-(D^{(2)}u)_j=g(x_j)
\\]

at interior nodes and replaces the endpoint rows with \\(u_0=0\\) and
\\(u_N=0\\), accounting for the chosen node order. This produces a dense linear
system. The method can converge rapidly for analytic \\(u\\), but the matrix can
be poorly scaled, and its condition number grows with degree.

Nodal residual zero is a finite algebraic statement. It does not mean the
differential residual vanishes between nodes. Validation uses a manufactured
solution, coefficient decay, evaluation on a finer independent grid, and a
degree-refinement study. General differential-equation modeling remains outside
this chapter; the focus is the approximation and linear algebra of an already
specified boundary problem.

## Multiple dimensions and the work boundary

Tensor products are natural on rectangles. If one dimension uses \\(N+1\\)
points, \\(d\\) dimensions use \\((N+1)^d\\), which becomes prohibitive quickly.
Separable transforms reduce arithmetic constants but not this exponential
growth in data. Sparse grids, low-rank tensor formats, and problem-specific
separation can help under structural assumptions. They do not abolish the
curse of dimensionality for arbitrary functions.

Coordinate mappings can concentrate points near a layer or singularity. A
mapping also changes derivatives, quadrature weights, and complex singularity
locations. A dramatic coefficient improvement after a tuned mapping must be
reported with the map and parameter; it is not a basis-independent property of
the original function.

## Resolution and verification ledger

For a spectral computation, record:

- interval or period, mapping, and endpoint convention;
- basis, normalization, nodes, and transform layout;
- coefficient magnitude by mode, including parity or symmetry;
- interpolation or projection target and quadrature used;
- physical-space residual on an independent finer grid;
- change under increased degree and, for nonlinear terms, increased padding;
- round-trip transform error and tests on single modes;
- data precision, coefficient precision, and evaluation precision;
- the norm in which an error or tolerance is claimed.

Expected geometric tail decay followed by a flat plateau often indicates a
roundoff or data-noise floor. A tail that rises can indicate insufficient
resolution, a transform convention error, or numerical instability. A clean
tail does not validate the original model or the boundary data.

## Common failure diagnostics

- **Endpoint oscillation with equally spaced nodes:** suspect interpolation
  amplification before blaming floating point.
- **A high mode appears as a low mode:** increase sampling and test for aliasing.
- **Function values converge but derivatives do not:** differentiation is
  amplifying an unresolved or noisy tail.
- **Coefficient decay stops abruptly:** locate the noise or rounding floor and
  avoid interpreting digits below it.
- **A periodic method converges slowly:** inspect whether values and derivatives
  match across the artificial period boundary.
- **Collocation residual is tiny only at nodes:** test between nodes and refine
  degree.
- **Transform round trip changes scale:** reconcile forward/inverse normalization
  and endpoint weights.
- **Increasing \\(N\\) worsens an otherwise smooth result:** inspect conditioning,
  evaluation form, coefficient precision, and oversampling.

<a id="summary"></a>
## Connections

Spectral approximation represents global structure through Fourier or
orthogonal-polynomial modes. Analyticity can produce geometric coefficient
decay, while finite regularity, jumps, and nearby singularities limit it.
Chebyshev clustering controls polynomial interpolation better than equally
spaced high-degree nodes. Discrete transforms are fast but sampled high modes
alias. Stable basis-aware evaluation avoids unnecessary monomial conversion.
Differentiation and nonlinear products magnify unresolved tails, so resolution,
padding, and independent residual checks are essential. Spectral convergence is
a conditional approximation result, never a substitute for a model or data
audit.

## A proved coefficient estimate and an explicit normalization

For a real Chebyshev series we use the convention $f(x)=a_0+\\sum_{k\\ge1}a_kT_k(x)$, with
\\[
a_0=\\frac1\\pi\\int_0^\\pi f(\\cos\\theta)\\,d\\theta,\\qquad
a_k=\\frac2\\pi\\int_0^\\pi f(\\cos\\theta)\\cos(k\\theta)\\,d\\theta\\quad(k\\ge1).
\\]
Other software may halve an endpoint coefficient instead. A recurrence and its final combination must use the same convention.

**Theorem 6.1 (Periodic smoothness controls Fourier coefficients).** Suppose $f$ is $2\\pi$-periodic, has $p\\ge1$ continuous derivatives, and its derivatives through order $p-1$ agree at the period endpoints. For every nonzero integer $k$,
\\[
|\\widehat f_k|\\le\\frac{\\|f^{(p)}\\|_{L^1(0,2\\pi)}}{2\\pi |k|^p}.
\\]

*Proof.* Integrating by parts once transfers the derivative to $f$ and contributes a factor $1/(ik)$. The endpoint term vanishes because the function values match and $e^{-2\\pi ik}=1$. Repeating $p$ times is permitted by the smoothness, with each boundary term vanishing by the corresponding periodic derivative condition. Thus
\\[
\\widehat f_k=(ik)^{-p}\\frac1{2\\pi}\\int_0^{2\\pi}f^{(p)}(x)e^{-ikx}\\,dx.
\\]
Take absolute values and use the unit magnitude of the complex exponential. ∎

This result bounds coefficients directly. Inferring function convergence from a formal series also requires a representation theorem with appropriate hypotheses. The analytic Bernstein-ellipse bound stated earlier is a cited result, not a consequence of this real-variable integration-by-parts proof. Its norm and coefficient convention are now fixed, and the geometric tail deduction from it is an ordinary convergent geometric sum.

The qualitative Gibbs statement concerns, for example, piecewise smooth periodic functions with a nonzero jump and uses the standard cited Fourier convergence theory. It is not a theorem here about every arbitrary integrable function. Distinguishing coefficient bounds, representation, and pointwise convergence avoids silently using more analysis than has been supplied.

## Why a radix-two transform is fast

**Proposition 6.2 (Even–odd factorization).** Let $N=2m$ and $\\omega_N=e^{-2\\pi i/N}$. For the unnormalized transform $X_k=\\sum_{j=0}^{N-1}x_j\\omega_N^{jk}$, let $E_k,O_k$ be the length-$m$ transforms of even and odd input indices. Then for $0\\le k<m$,
\\[
X_k=E_k+\\omega_N^kO_k,\\qquad X_{k+m}=E_k-\\omega_N^kO_k.
\\]

*Proof.* Split the defining sum into $j=2r$ and $j=2r+1$. Since $\\omega_N^{2rk}=\\omega_m^{rk}$, the even terms give $E_k$ and the odd terms give $\\omega_N^kO_k$. Replacing $k$ by $k+m$ leaves both length-$m$ transforms unchanged and multiplies the extra odd factor by $\\omega_N^m=-1$. ∎

For $N=2^\\ell$, recursively applying the identity creates $\\ell$ levels, each with work proportional to $N$. Hence the arithmetic count is proportional to $N\\log_2N$ rather than $N^2$. This proves the work estimate for a declared layout and size family. Bounds on accumulated rounding error require further analysis; the factorization does not establish them merely by being fast.

**Example 6.3 (A four-point transform by hand).** For input $(1,2,3,4)$, the even-index data are $(1,3)$ and their transform is $(4,-2)$. The odd-index data are $(2,4)$ and their transform is $(6,-2)$. With $\\omega_4=-i$, the combined output is
\\[
(X_0,X_1,X_2,X_3)=(10,-2+2i,-2,-2-2i).
\\]
The conjugate pair is consistent with real input. The constant-mode output is the sum ten, and dividing the inverse transform by four restores the original normalization. This exact example specifies index order and signs without making a claim about any installed transform implementation.

## A complete Clenshaw convention

**Proposition 6.4 (Chebyshev evaluation).** For $p(x)=a_0+\\sum_{k=1}^Na_kT_k(x)$, set $b_{N+1}=b_{N+2}=0$ and compute
\\[
b_k=a_k+2xb_{k+1}-b_{k+2},\\quad k=N,N-1,\\ldots,1.
\\]
Then $p(x)=a_0+xb_1-b_2$.

*Proof.* Substitute $a_k=b_k-2xb_{k+1}+b_{k+2}$ into the series and collect coefficients of the $b_k$. For $k\\ge3$, the coefficient is $T_k-2xT_{k-1}+T_{k-2}=0$ by the three-term recurrence. The coefficient of $b_2$ is $T_2-2xT_1=-1$, and the coefficient of $b_1$ is $T_1=x$. The initialized terminal coefficients vanish, leaving the stated expression. The degree-zero case is simply $p=a_0$. ∎

**Example 6.5 (The final line matters).** Evaluate $1+2T_1(x)+3T_2(x)$ at $x=1/2$. The recurrence gives $b_2=3$ and $b_1=2+2(1/2)3=5$. The final value is $1+(1/2)5-3=1/2$. Direct evaluation gives $1+1+3(-1/2)=1/2$. Using a half-weight convention for $a_0$ in only one of these formulas would change the answer. Exact recurrence identities should be settled before interpreting a small numerical discrepancy as roundoff.

The distinction between a proved identity and a floating-point stability theorem remains. Values outside $[-1,1]$ can make $T_k$ grow rapidly; inside the interval, cancellation among series terms can make relative error large even when absolute evaluation error is controlled. A coefficient convention, a domain, and an error scale are part of every evaluation claim.
## Practice with fully worked solutions

### Exercise 6.1
<a id="spectral-approximation-ex-1"></a>

**List nodes and expose an alias.**

For Lobatto degree \\(N=4\\), list the
nodes and show that \\(T_5\\) and \\(T_3\\) agree on them.

<details>
<summary>Hint 1</summary>

Write each node as a cosine of an equally spaced angle.

</details>
<details>
<summary>Hint 2</summary>

Use cosine evenness after subtracting a full integer number of turns.

</details>
<details>
<summary>Solution</summary>

**Solution.** The nodes are

\\[
x_j=\\cos(j\\pi/4)=
1,\\ \\frac{\\sqrt2}{2},\\ 0,\\ -\\frac{\\sqrt2}{2},\\ -1.
\\]

At these nodes, \\(T_5(x_j)=\\cos(5j\\cdot \\pi/4)\\). Since
\\(5j\\cdot \\pi/4=2j\\cdot \\pi-3j\\cdot \\pi/4\\), cosine evenness and \\(2\\cdot \\pi\\)-periodicity give
\\(\\cos(5j\\cdot \\pi/4)=\\cos(3j\\cdot \\pi/4)=T_3(x_j)\\). The samples cannot distinguish the
degree-five mode from its degree-three alias.

</details>

### Exercise 6.2
<a id="spectral-approximation-ex-2"></a>

**Differentiate a resolved Fourier polynomial.**

For
\\(f(x)=2\\cdot \\cos(x)-3\\cdot \\sin(4x)\\), find \\(f'\\) and \\(f'(\\pi/2)\\). What minimum mode
must the discrete representation retain?

<details>
<summary>Hint 1</summary>

Differentiate each resolved trigonometric term.

</details>
<details>
<summary>Hint 2</summary>

Mode retention means distinct positive and negative frequencies under the chosen sampling convention.

</details>
<details>
<summary>Solution</summary>

**Solution.** Termwise differentiation gives

\\[
f'(x)=-2\\sin x-12\\cos(4x).
\\]

At \\(x=\\pi/2\\), \\(\\sin(\\pi/2)=1\\) and
\\(\\cos(2\\cdot \\pi)=1\\), so \\(f'(\\pi/2)=-14\\). The representation must retain modes
through \\(\\lvert k\\rvert=4\\) without identifying mode four with a Nyquist alias. The exact
point count depends on the grid convention; saying only “four points” is not
enough.

</details>

### Exercise 6.3
<a id="spectral-approximation-ex-3"></a>

**Use an analytic tail bound.**

Suppose \\(\\lvert f(z)\\rvert \\le 2\\) on \\(E_{1.5}\\).
Using \\(\\lvert a_k\\rvert \\le 2M\\cdot \\rho^{-k}\\), bound the Chebyshev truncation tail after degree
\\(N=20\\).

<details>
<summary>Hint 1</summary>

Sum the geometric tail starting at degree 21.

</details>
<details>
<summary>Hint 2</summary>

Use the stated Bernstein-ellipse radius and magnitude constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here \\(M=2\\) and \\(\\rho=1.5\\). Therefore

\\[
\\sum_{k>20}|a_k|
\\le\\frac{4(1.5)^{-21}}{1-1/1.5}
=\\frac{12}{1.5^{21}}.
\\]

Since \\(1.5^{21}\\approx 4987.9\\), the bound is about \\(2.41\\times 10^{-3}\\).
This is a rigorous truncation bound if the complex analyticity and magnitude
hypotheses are established. It does not include rounded samples or transform
error.

</details>

### Exercise 6.4
<a id="spectral-approximation-ex-4"></a>

**Quantify derivative amplification.**

A computed Chebyshev expansion has an
unknown coefficient error \\(\\epsilon=1\\times 10^{-12}\\) in mode \\(T_{100}\\). Bound
its contribution to the function on \\([-1,1]\\), and find its derivative
contribution at \\(x=1\\).

<details>
<summary>Hint 1</summary>

The function basis is bounded by one on the real interval.

</details>
<details>
<summary>Hint 2</summary>

At the endpoint, the derivative of mode $N$ is $N^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since \\(\\lvert T_{100}(x)\\rvert \\le 1\\), the function perturbation is at most
\\(1\\times 10^{-12}\\). But \\(T_N'(1)=N^{2}\\), so at the endpoint the derivative
perturbation is

\\[
100^{2}\\times10^{-12}=10^{-8}.
\\]

Four decimal orders have been lost in this component. Raising degree can worsen
derivative accuracy after the coefficient noise floor is reached.

</details>

### Exercise 6.5
<a id="spectral-approximation-ex-5"></a>

**Distinguish projection from interpolation.**

A degree-\\(N\\) transform is
computed from \\(N+1\\) Lobatto samples. Is its coefficient \\(a_k\\) necessarily
the exact continuous Chebyshev projection coefficient?

<details>
<summary>Hint 1</summary>

A transform solves a finite sampled problem.

</details>
<details>
<summary>Hint 2</summary>

Unresolved high modes can contribute to lower sampled coefficients through aliases.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The transform produces coefficients of the finite nodal
interpolant under its discrete cosine convention. Those coefficients combine
the true expansion with aliases from unresolved modes. They equal continuous
projection coefficients only under additional exactness conditions, for
example when the function is a sufficiently low-degree polynomial and all
operations are exact. For a general function, projection, interpolation,
quadrature, and roundoff errors must be separated.

</details>

### Exercise 6.6
<a id="spectral-approximation-ex-6"></a>

**Audit a collocation claim.**

A degree-32 Chebyshev solution has differential
residual \\(1\\times 10^{-13}\\) at every collocation node. Give four checks needed before
claiming a uniform solution error below \\(1\\times 10^{-10}\\).

<details>
<summary>Hint 1</summary>

A collocation equation constrains residuals only at its nodes.

</details>
<details>
<summary>Hint 2</summary>

A uniform solution-error claim also needs an operator inverse or stability bridge.

</details>
<details>
<summary>Solution</summary>

**Solution.** First, evaluate the differential residual on a finer independent
grid, because nodal equations enforce it only at selected points. Second,
repeat at larger degree and compare the solution in the claimed norm. Third,
inspect coefficient decay and the effect of differentiation on the tail.
Fourth, account for boundary residuals, matrix conditioning, and the relation
between residual and solution error for the specified operator. A manufactured
solution or a rigorous inverse bound would strengthen the conclusion. The
nodal residual alone supplies none of those bridges.

</details>

### Exercise 6.7
<a id="spectral-approximation-ex-7"></a>

**A four-point Fourier transform.**

Use the unnormalized forward transform with negative exponential sign to compute the transform of $(1,2,3,4)$.

<details>
<summary>Hint 1</summary>

Compute the two length-two transforms first.

</details>
<details>
<summary>Hint 2</summary>

Use the even–odd formula with $\\omega_4=-i$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The even transform is $(4,-2)$ and the odd transform $(6,-2)$. Combining gives $X_0=10$, $X_2=-2$, $X_1=-2+2i$, and $X_3=-2-2i$. These values depend on the declared sign and normalization convention.

</details>

### Exercise 6.8
<a id="spectral-approximation-ex-8"></a>

**Clenshaw evaluation.**

Evaluate $1+2T_1(x)+3T_2(x)$ at $x=1/2$ using the complete convention in Proposition 6.4.

<details>
<summary>Hint 1</summary>

Initialize both terminal recurrence values to zero.

</details>
<details>
<summary>Hint 2</summary>

After the recurrence use $a_0+xb_1-b_2$, not an inferred endpoint weighting.

</details>
<details>
<summary>Solution</summary>

**Solution.** The recurrence gives $b_2=3$ and $b_1=5$. Thus the value is $1+(1/2)5-3=1/2$. Since $T_1(1/2)=1/2$ and $T_2(1/2)=-1/2$, direct evaluation gives the same result.

</details>

### Exercise 6.9
<a id="spectral-approximation-ex-9"></a>

**A Fourier coefficient bound.**

A twice continuously differentiable periodic function has matching endpoint values and derivatives and $\\|f''\\|_{L^1}=4\\pi$. Bound $|\\widehat f_k|$ for nonzero $k$.

<details>
<summary>Hint 1</summary>

Apply the proved coefficient theorem with $p=2$.

</details>
<details>
<summary>Hint 2</summary>

Keep the $2\\pi$ normalization in the denominator.

</details>
<details>
<summary>Solution</summary>

**Solution.** The estimate is $|\\widehat f_k|\\le(4\\pi)/(2\\pi |k|^2)=2/|k|^2$. It is a coefficient bound under the endpoint and regularity assumptions, not a bound inferred from a finite coefficient plot.

</details>

### Exercise 6.10
<a id="spectral-approximation-ex-10"></a>

**Aliasing in a quadratic product.**

On Lobatto degree four nodes, identify the interpolant to $T_3^2$ and explain how many Lobatto nodes would resolve that polynomial exactly.

<details>
<summary>Hint 1</summary>

Use $T_3^2=(1+T_6)/2$.

</details>
<details>
<summary>Hint 2</summary>

Mode six aliases to mode two when $N=4$.

</details>
<details>
<summary>Solution</summary>

**Solution.** At degree-four Lobatto nodes, $T_6$ and $T_2$ agree, so the interpolant is $(1+T_2)/2$, although the actual product is $(1+T_6)/2$. A degree-six polynomial space, using seven Lobatto nodes, resolves the product exactly in exact arithmetic. This is a sampling issue independent of precision.

</details>


## Forward connection

The next integration chapter uses the same ideas—regularity, transformations,
aliasing, and independent error evidence—for oscillatory and singular
integrands. Fast transforms also reappear in randomized linear algebra and
structured solvers. In every case, computational speed is useful only after the
finite representation and its missing information are explicit.

<a id="source-and-verification-note"></a>
## Sources

The original Euler chapter's Fourier example, alias example, collocation discussion, hypotheses, and six exercise solutions are retained. Further reading: Lloyd N. Trefethen, [Approximation Theory and Approximation Practice, extended edition](https://epubs.siam.org/doi/book/10.1137/1.9781611975949), SIAM, 2019, particularly its analytic-function and coefficient-bound treatment; and John P. Boyd, *Chebyshev and Fourier Spectral Methods*, second revised edition, 2001. The Bernstein-ellipse analytic coefficient bound and general Gibbs/convergence theory are cited results, while the coefficient integration-by-parts, transform factorization, and recurrence evaluation arguments used here are proved. No source locator is invented from a title alone. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Spectral approximation distinguishes continuous coefficients, finite projections or interpolants, and computed transforms. Periodic smoothness gives a proved Fourier coefficient bound; analytic Chebyshev decay is cited with a fixed normalization, and its truncation tail follows geometrically. The even–odd factorization proves radix-two transform complexity, while a complete Clenshaw identity fixes evaluation conventions. Aliasing, derivative amplification, and conditioning remain even in high precision, so coefficient tails and nodal residuals must not be promoted to unsupported continuous error claims.
`;export{e as default};