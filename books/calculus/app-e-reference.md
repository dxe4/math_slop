# Formula, Identity, and Units Reference

This appendix is a lookup aid, not a replacement for hypotheses. Every formula
belongs to a domain and a limiting or regularity context. When a condition is
missing from a problem, return to the cited chapter before applying the row.

## Algebraic and elementary-function identities

For $a,b>0$ and real $r,s$,

$$
a^{r+s}=a^ra^s,\qquad
(a^r)^s=a^{rs},\qquad
\log(ab)=\log a+\log b.
$$

The real logarithm requires positive input. The identity
$\log(a+b)=\log a+\log b$ is false. For complex logarithms, even the product
identity depends on branch choices.

Useful factorizations are

$$
a^2-b^2=(a-b)(a+b),
$$

$$
a^3-b^3=(a-b)(a^2+ab+b^2),
$$

and the finite geometric sum

$$
1+r+\cdots+r^n=
\frac{1-r^{n+1}}{1-r}
\quad(r\ne1).
$$

For an infinite geometric series,

$$
\sum_{n=0}^{\infty}r^n=\frac1{1-r}
$$

only when $|r|<1$.

## Trigonometric identities

Angles are in radians for calculus.

$$
\sin^2x+\cos^2x=1,
\qquad
1+\tan^2x=\sec^2x,
$$

$$
\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b,
$$

$$
\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b,
$$

$$
\sin(2x)=2\sin x\cos x,
\qquad
\cos(2x)=1-2\sin^2x=2\cos^2x-1.
$$

Product-to-sum forms useful in Fourier calculations include

$$
2\cos a\cos b=\cos(a-b)+\cos(a+b),
$$

$$
2\sin a\sin b=\cos(a-b)-\cos(a+b).
$$

The small-angle equivalences
$\sin x\sim x$, $\tan x\sim x$, and
$1-\cos x\sim x^2/2$ apply as $x\to0$.

## Core derivative table

Where the expressions are defined,

| $f(x)$ | $f'(x)$ |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $e^{ax}$ | $ae^{ax}$ |
| $a^x$, $a>0$ | $a^x\log a$ |
| $\log x$, $x>0$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2x$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ for $\vert x\vert <1$ |
| $\arctan x$ | $1/(1+x^2)$ |

Rules:

$$
(fg)'=f'g+fg',
\qquad
\left(\frac fg\right)'
=\frac{f'g-fg'}{g^2},
$$

$$
\frac d{dx}f(g(x))=f'(g(x))g'(x).
$$

For an inverse,

$$
(f^{-1})'(y)=
\frac1{f'(f^{-1}(y))}
$$

where $f$ is locally one-to-one and the denominator is nonzero.

The second-order Taylor formula is

$$
f(a+h)=f(a)+f'(a)h+\frac12f''(a)h^2+R_2(h),
$$

with the meaning of $R_2$ determined by the chosen Taylor theorem.

## Core integral table

Constants of integration apply to indefinite antiderivatives.

| Integrand | Antiderivative |
|---|---|
| $x^n,\ n\ne-1$ | $x^{n+1}/(n+1)$ |
| $1/x$ | $\log\vert x\vert $ on intervals avoiding zero |
| $e^{ax}$, $a\ne0$ | $e^{ax}/a$ |
| $\sin ax$, $a\ne0$ | $-\cos ax/a$ |
| $\cos ax$, $a\ne0$ | $\sin ax/a$ |
| $1/(1+x^2)$ | $\arctan x$ |
| $1/\sqrt{1-x^2}$ | $\arcsin x$ on $(-1,1)$ |

Substitution:

$$
\int_a^bf(g(x))g'(x)\,dx
=\int_{g(a)}^{g(b)}f(u)\,du
$$

when the substitution theorem's continuity or integrability conditions hold.

Integration by parts:

$$
\int_a^bu\,dv=[uv]_a^b-\int_a^bv\,du.
$$

The fundamental theorem:

$$
\frac d{dx}\int_a^xf(t)\,dt=f(x)
$$

at continuity points of $f$, with broader almost-everywhere versions requiring
Lebesgue theory.

Improper integrals are limits. Algebra with them is valid only after convergence
has been established.

## Numerical formulas and leading errors

For step $h=(b-a)/N$, composite midpoint and trapezoid rules have global error
$O(h^2)$ for sufficiently smooth integrands. Composite Simpson has
$O(h^4)$ error with an even number of equal subintervals and a bounded fourth
derivative.

The centred difference

$$
f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}
$$

has truncation error $O(h^2)$. Roundoff grows as $h$ becomes too small, so
the total error is not monotone in $h$.

Forward Euler for $y'=f(t,y)$:

$$
y_{n+1}=y_n+h f(t_n,y_n)
$$

has global error $O(h)$ under standard smoothness and stability conditions.
Classical fourth-order Runge–Kutta has global $O(h^4)$ error for smooth
nonstiff problems. Formal order does not guarantee stability on a chosen step.

## Series and asymptotic reference

Geometric, $p$-series, ratio, root, comparison, integral, and alternating tests
have different hypotheses. In particular,

$$
\sum n^{-p}
\begin{cases}
\text{converges},&p>1,\\
\text{diverges},&p\le1.
\end{cases}
$$

The power series

$$
\sum a_n(x-c)^n
$$

has a radius $R$; inside it converges absolutely and can be differentiated
term by term, outside it diverges, and endpoints require separate tests.

Common expansions near zero:

$$
e^x=1+x+\frac{x^2}{2!}+\cdots,
$$

$$
\sin x=x-\frac{x^3}{3!}+\cdots,
\qquad
\cos x=1-\frac{x^2}{2!}+\cdots,
$$

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots
\quad(|x|<1\text{ before endpoint checks}).
$$

Stirling:

$$
n!\sim\sqrt{2\pi n}(n/e)^n.
$$

The symbols $O,o,\sim$ always require a stated limit.

## Multivariable and vector calculus

The gradient and directional derivative are

$$
\nabla f=(f_{x_1},\ldots,f_{x_n}),
\qquad
D_{\mathbf u}f=\nabla f\cdot\mathbf u
$$

for a unit direction $\mathbf u$, when $f$ is differentiable.

The total differential is

$$
df\approx\nabla f\cdot d\mathbf x.
$$

For $F:\mathbb R^n\to\mathbb R^m$, the Jacobian matrix is
$J_F=(\partial F_i/\partial x_j)$. The chain rule is matrix multiplication:

$$
J_{F\circ G}(x)=J_F(G(x))J_G(x).
$$

The second-derivative test uses the Hessian at a critical point. Positive
definite implies a strict local minimum; negative definite implies a strict
local maximum; indefinite implies a saddle; semidefinite is inconclusive.

Coordinate Jacobians:

$$
dA=r\,dr\,d\theta
$$

in polar coordinates,

$$
dV=r\,dr\,d\theta\,dz
$$

in cylindrical coordinates, and

$$
dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta
$$

in spherical coordinates under the stated angle convention.

Vector identities:

$$
\nabla\times(\nabla f)=0,
\qquad
\nabla\cdot(\nabla\times\mathbf F)=0
$$

for sufficiently smooth fields. Converse potential statements also require
domain topology.

## Transform and PDE reference

With

$$
\widehat f(\xi)=\int f(t)e^{-2\pi i\xi t}\,dt,
$$

$$
\widehat{f'}=2\pi i\xi\widehat f,
\qquad
\widehat{f*g}=\widehat f\,\widehat g.
$$

For the one-sided Laplace transform,

$$
\mathcal L\{f'\}=sF(s)-f(0),
\qquad
\mathcal L\{f*g\}=FG.
$$

Useful PDE prototypes:

$$
u_t+cu_x=0
\quad\text{(transport)},
$$

$$
u_t=\kappa\Delta u
\quad\text{(heat)},
$$

$$
u_{tt}=c^2\Delta u
\quad\text{(wave)},
$$

$$
\Delta u=f
\quad\text{(Poisson)}.
$$

Initial and boundary conditions are part of each problem. The formula alone does
not determine a solution.

## Geometry reference

For a regular curve,

$$
ds=\|\mathbf r'(t)\|\,dt,
\qquad
\kappa=
\frac{\|\mathbf r'\times\mathbf r''\|}
{\|\mathbf r'\|^3}.
$$

For a patch $\mathbf X(u,v)$,

$$
E=\mathbf X_u\cdot\mathbf X_u,\quad
F=\mathbf X_u\cdot\mathbf X_v,\quad
G=\mathbf X_v\cdot\mathbf X_v,
$$

$$
dS=\sqrt{EG-F^2}\,du\,dv.
$$

Principal curvatures $k_1,k_2$ give

$$
K=k_1k_2,\qquad H=(k_1+k_2)/2.
$$

The sign of $H$ depends on the normal; $K$ does not.

## Probability and stochastic reference

$$
\mathbb E[aX+bY]=a\mathbb E[X]+b\mathbb E[Y],
$$

$$
\operatorname{Var}(X)
=\mathbb E[X^2]-\mathbb E[X]^2.
$$

For independent $X,Y$,
$\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$.
Without independence, add $2\operatorname{Cov}(X,Y)$.

For an independent Monte Carlo mean,

$$
\operatorname{SE}(\overline X)=\sigma/\sqrt N.
$$

Euler–Maruyama:

$$
X_{n+1}
=X_n+a_n\Delta t+b_n\sqrt{\Delta t}\,Z_n.
$$

Its convergence order and interpretation depend on the SDE assumptions and on
whether strong pathwise or weak distributional error is requested.

## Measure, operators, algorithms, and inference

For nonnegative measurable functions, monotone convergence gives

$$
f_n\uparrow f
\quad\Longrightarrow\quad
\int f_n\,d\mu\uparrow\int f\,d\mu.
$$

For dominated convergence, $f_n\to f$ almost everywhere and
$|f_n|\le g\in L^1$ imply $\int f_n\,d\mu\to\int f\,d\mu$.
Tonelli permits iterated integration for nonnegative measurable functions;
Fubini permits it for integrable functions. The hypotheses are different.
Hölder's inequality is

$$
\int |fg|\,d\mu\le \|f\|_p\|g\|_q,
\qquad \frac1p+\frac1q=1.
$$

If $A$ is a bounded operator with $\|A\|<1$, then

$$
(I-A)^{-1}=\sum_{k=0}^{\infty}A^k,
\qquad
\left\|(I-A)^{-1}\right\|\le\frac1{1-\|A\|}.
$$

In numerical linear algebra, a normwise backward-error indicator for
$A\widehat x=b$ is

$$
\eta=
\frac{\|b-A\widehat x\|}
{\|A\|\,\|\widehat x\|+\|b\|}.
$$

For symmetric positive-definite $A$, conjugate gradients satisfies the
idealized energy-norm bound

$$
\frac{\|x_k-x_*\|_A}{\|x_0-x_*\|_A}
\le
2\left(\frac{\sqrt{\kappa_2(A)}-1}
{\sqrt{\kappa_2(A)}+1}\right)^k.
$$

For an $L$-smooth objective, the descent lemma is

$$
f(y)\le f(x)+\nabla f(x)^\mathsf T(y-x)
+\frac L2\|y-x\|^2.
$$

A scalar conservation law $u_t+f(u)_x=0$ has shock speed

$$
s=\frac{f(u_R)-f(u_L)}{u_R-u_L},
$$

and a conservative finite-volume update has the form

$$
U_j^{n+1}=U_j^n-
\frac{\Delta t}{\Delta x}
\left(F_{j+1/2}^n-F_{j-1/2}^n\right).
$$

For log-likelihood $\ell(\theta)$, the score is
$U(\theta)=\partial\ell/\partial\theta$ and Fisher information is
$I(\theta)=\mathbb E_\theta[U(\theta)^2]$ when the regularity assumptions hold.
The approximation

$$
\widehat\theta\ \mathrel{\dot\sim}\
N\!\left(\theta,I_n(\theta)^{-1}\right)
$$

supports a large-sample confidence interval only under the stated model,
identifiability, regularity, and sampling or stopping design.

### Weak and spectral calculus

Distributional differentiation transfers derivatives to tests:

$$
\langle D^\alpha T,\varphi\rangle
=(-1)^{|\alpha|}\langle T,D^\alpha\varphi\rangle.
$$

For a regular function, a weak derivative is a distributional derivative
represented by an integrable function. The $H^1$ norm is

$$
\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|\nabla u\|_{L^2}^2.
$$

Boundary values require a trace theorem; they are not point values attached
automatically to every almost-everywhere equivalence class. Chapter 50 gives
finite pairing and mollifier code. These universal definitions and embedding
theorems are proof statements rather than algorithms.

For a Fourier mode on a domain of length $L$,

$$
\frac d{dx}e^{i2\pi kx/L}
=\frac{i2\pi k}{L}e^{i2\pi kx/L}.
$$

For Chebyshev–Lobatto nodes $x_j=\cos(j\pi/N)$, a nodal differentiation
matrix maps values of the degree-$N$ interpolant to its derivative values.
Chapter 51 supplies standalone FFT and differentiation-matrix implementations.
Both require domain scaling, resolution, and boundary assumptions.

## Units and dimensional analysis

An equation must be dimensionally homogeneous. Common dimensions:

| Quantity | Dimensions |
|---|---|
| position | $L$ |
| velocity | $LT^{-1}$ |
| acceleration | $LT^{-2}$ |
| force | $MLT^{-2}$ |
| energy | $ML^2T^{-2}$ |
| pressure | $ML^{-1}T^{-2}$ |
| diffusion coefficient | $L^2T^{-1}$ |
| frequency | $T^{-1}$ |

Arguments of $\exp,\log,\sin,\cos$ must be dimensionless. Writing
$\log(3\text{ metres})$ is meaningless until divided by a reference length.

Nondimensionalisation chooses characteristic scales. For
$mx''+cx'+kx=0$, time scale $\sqrt{m/k}$ produces the dimensionless damping
ratio

$$
\zeta=\frac{c}{2\sqrt{mk}}.
$$

Dimensionless groups reveal regimes and reduce parameter count; they do not
determine empirical parameter values.

## Frequently misused formulas

- L'Hôpital applies to a quotient in an indeterminate form under local
  differentiability and denominator conditions; it is not a general
  simplification rule.
- $\int f(g(x))\,dx$ does not permit substitution without a matching $g'(x)$
  or a deliberate algebraic step.
- A Taylor polynomial approximates only where its remainder is controlled.
- $\nabla f=0$ is necessary for an unconstrained interior extremum, not
  sufficient for a minimum.
- Green, Stokes, and divergence theorems require orientation, regularity, and an
  appropriate boundary.
- Fourier inversion and termwise differentiation require convergence
  hypotheses.
- A confidence interval quantifies sampling under a model; it does not validate
  that model.
- Euler–Lagrange gives stationarity, not automatic global optimality.
- A finite-difference result is not a PDE solution until stability and
  refinement are addressed.
- A narrow sampled peak is not a Dirac distribution; convergence must be
  tested through pairings.
- Spectral accuracy depends on regularity and basis compatibility; a small
  nodal residual does not certify continuous error.
