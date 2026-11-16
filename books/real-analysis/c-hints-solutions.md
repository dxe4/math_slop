# Hints and selected solutions

Exercise numbering below refers to the order within each chapter.

## Hints for Chapters 1–4

**1.8.** Interleave three constant subsequences so that each residue class modulo
three has a different value.

**1.9.** Put the $n$th enumeration on row $n$ of an infinite grid and follow
diagonals. Explain why each entry appears.

**2.5.** First prove every $x+y$ is at most $a+b$. Then approximate $a$ and $b$
from below separately with half the requested tolerance.

**2.7.** Let $S=\{x\ge0:x^2\le a\}$ and audit nonemptiness and boundedness before
taking its supremum.

**3.7.** If convergence to $L$ failed, choose a subsequence staying a fixed distance
from $L$; apply the stated property to it.

**3.9.** Take a convergent sequence of subsequential limits. Use a diagonal choice
of original indices, making both the value error and index lower bound improve.

**4.7.** The root test gives radius one. Endpoint tests reduce to a $p$-series and
its signed version.

**4.9.** Trap the total change under a permutation by an absolute tail; only
finitely many large terms need to be located.

## Hints for Chapters 5–8

**5.5.** Apply compactness to the identity function, or use a sequence approaching
the supremum and closedness to retain its limit.

**5.9.** Change one late left/right choice in the ternary coding while keeping the
point arbitrarily close.

**6.8.** If a continuous injective function is not monotone, find three ordered
points with a middle value forming a peak or valley, then apply intermediate values
on both sides.

**6.9.** Choose a uniform-continuity tolerance for $\varepsilon$, then use the
Cauchy cutoff of the input sequence for the resulting $\delta$.

**7.7.** Compare secant slopes on nested intervals, or apply the mean value theorem
to show increasing derivative.

**7.9.** If $f'(a)<\lambda<f'(b)$, minimize $f(x)-\lambda x$ on $[a,b]$ after
shrinking endpoints so the minimum is interior.

**8.8.** Use triangular continuous spikes with height and width chosen to keep area
fixed while support shrinks toward zero.

**8.9.** Enclose each discontinuity in an interval whose total length is small;
uniform continuity on the remaining closed pieces controls oscillation.

## Hints for Chapters 9–14

**9.1.** At each nonzero $x$, compare numerator and denominator powers of $n$.
Maximize by scaling $y=nx$.

**9.9.** Uniform continuity handles the near event. For the far event, use
$(k/n-x)^2\ge\delta^2$ and the binomial variance $x(1-x)/n$.

**10.4.** Map the space by $x\mapsto1/x$ and identify its image in the usual real
metric.

**10.9.** Compactness immediately gives finite epsilon-ball covers. For
completeness, any Cauchy sequence has a convergent subsequence and must share its
limit.

**11.7.** The integrand tends pointwise to zero except possibly at one endpoint and
is dominated by one.

**12.9.** Write any competing polynomial as $S_Nf+h$ with $h$ in the same finite
span, and show the residual is orthogonal to $h$.

**13.9.** If two distinct minimizers existed, use their midpoint and the
parallelogram identity to obtain a smaller distance.

**14.4.** For monotonicity, use a travelling spike. For continuity of the limit, use
$x^n$. For compactness, use a suitable noncompact domain.

## Hints for Chapters 15–24

Each advanced chapter already contains concise answer support. These additional
hints identify the main theorem or construction without carrying out the
calculation.

**15.3.** Insert and subtract $f_ig_{i-1}$ in each product increment. Bound one
factor by a supremum norm and sum the variation of the other.

**15.7.** Choose points at alternating extrema of $\sin(1/x)$. Compare the
resulting variation lower bound with a harmonic tail.

**16.4.** Put $h=tv$ directly into the Fréchet remainder and divide by $t$.
The direction's sign is handled by the two-sided limit.

**16.7.** Compactness gives existence first. The multiplier equations give a
direction proportional to the inverse quadratic weights; normalise only at the
end.

**17.5.** In the normalised proof, compare fixed points of $T_y$ and $T_w$.
Add and subtract $T_y(z)$ before using the contraction estimate.

**17.7.** Write the polar Jacobian. The geometric collapse at the origin should
match the zero determinant.

**18.3.** The linear scaling maps the unit disk to the ellipse. Track the absolute
determinant rather than recomputing area from slices.

**18.5.** Treat coordinate derivative vectors as edges of a small
parallelepiped; their scalar triple product is the determinant.

**19.2.** A subset of a null set and every intersection with it have outer measure
zero, so the Carathéodory equality reduces to equality with a zero term.

**19.8.** Trap a point in one basic Cantor interval at every stage, then apply
continuity from above to their measures.

**20.5.** Verify the claimed density by integrating it over an arbitrary measurable
set. Uniqueness then invokes Radon–Nikodym, not pointwise division on null sets.

**20.7.** Sum the Lipschitz increment bound over a finite disjoint interval family.

**21.6.** Preserve small area while increasing height; a rectangular spike is
enough. Compute $L^1$ and supremum norms separately.

**21.8.** At every dyadic level, exactly one interval contains a fixed point. The
enumeration revisits levels indefinitely.

**22.4.** Apply Tonelli to $|f|$. A nonnegative function with finite integral is
finite almost everywhere.

**22.7.** Draw the triangle $x>0$, $y>0$, $x+y\le t$ and integrate the joint
density over it.

**23.2.** Split the indicator integral and integrate the test-function derivative;
the two endpoints survive with opposite signs.

**23.6.** Write $u(x)=\int_0^xu'(t)\,dt$, apply Hölder, then integrate the resulting
pointwise estimate.

**24.5.** Apply the positive-$A$ Grönwall result with $A=\varepsilon$. The estimate
holds for every positive $\varepsilon$.

**24.7.** Derive an a priori bound on $|y|$ over each finite interval before using
the continuation principle.

## Hints for Chapters 25–32

The new chapters include concise answer support. These hints identify the proof
engine behind one less routine exercise in each chapter.

**25.6.** Use absolute continuity to write $f(y)-f(x)=\int_x^yf'$, then apply
Cauchy–Schwarz. This turns the $L^2$ derivative bound into a common
one-half-Hölder modulus; the endpoint value supplies the uniform bound. An
almost-everywhere classical derivative without the fundamental-theorem
representation is insufficient; see [Section 25.5.1](25-baire-ascoli.md#sec-primitive-compactness).

**26.6.** The dual exponent $q$ is finite. Pair $e_n$ against an arbitrary
$\ell^q$ sequence and use the fact that its coordinates tend to zero.

**27.7.** Given a bounded sequence, first use compactness of one approximating
operator, then choose a diagonal subsequence while the operator-norm error tends
to zero.

**28.3.** Integrate the weak distribution bound by the layer-cake formula and
notice the logarithmic divergence at infinity.

**29.6.** Periodise the Schwartz function. Compute its Fourier coefficients by
splitting the real line into unit intervals and use uniform convergence.

**30.7.** Keep the integral of the spike fixed while its support shrinks. This is
exactly the tail concentration uniform integrability forbids.

**31.5.** Name the space, use Poincaré for coercivity, extract a weak subsequence,
and separate the quadratic and linear terms when passing to the limit.

**32.8.** The four headings are uniform estimate, subsequence compactness,
admissibility of the limit, and justified convergence in the weak equation.

## Hints for Chapters 33–38

**33.8.** A compact subset of $\mathbb R$ is bounded, so it misses $n$ for all
sufficiently large integers. Apply this to the point masses $\delta_n$.

**34.7.** For the proximal map of $|x|$, split the minimization into the regions
$y>0$, $y<0$, and $y=0$; check the subgradient inclusion at the join.

**35.6.** Pair the heat equation with the solution, integrate by parts using the
Dirichlet trace, and keep the sign of the gradient term visible.

**36.9.** Let a vanishing mass escape to infinity, choosing its location so the
first moment stays nonzero. Test weak convergence with bounded continuous
functions; for probability measures, also test the constant function one.

**37.9.** An upper dimension bound comes from an explicit efficient cover. A
lower bound needs a mass-distribution or density estimate preventing all covers
from being too cheap.

**38.8.** Homotope the map to one whose degree is known, but first prove that no
map in the homotopy vanishes on the boundary.

## Hints for Chapters 39–47

**39.8.** For each target atom use Radon–Nikodym to obtain one density. Intersect
the countably many full-measure sets on which positivity and normalisation hold;
this common-null-set step is why a countable target is manageable.

**39.9.** Compute the covariance matrix of $(X,Y)$, then use the scalar Gaussian
conditioning formula. The conditional mean coefficient is
$\operatorname{Cov}(X,Y)/\operatorname{Var}(Y)$.

**40.5.** Check separately the inequalities
$\mathbb P(F^{-1}(U)\le x)\le F(x)$ and the reverse, using the infimum definition
and right continuity of $F$.

**40.8.** Disintegrate both couplings over the shared middle marginal, multiply
the two kernels to obtain a triple law, and project onto the first and third
coordinates before applying Minkowski.

**41.7.** Expand $\sum_{k=0}^{N-1}U^k(I-U)g$; every interior term cancels and the
remaining numerator has norm at most $2\|g\|$.

**41.11.** Sum a finite geometric progression with ratio
$e^{2\pi im\alpha}$. Irrationality ensures the denominator is nonzero.

**42.4.** A centred Gaussian $Z$ satisfies $\mathbb E Z^4=3(\mathbb E Z^2)^2$.
Apply this to $B_t-B_s$, then match the result to Kolmogorov's exponent form.

**42.8.** Expand the square of the two-step sum. Conditional expectation makes
the cross term zero because the later increment has conditional mean zero.

**43.4.** After the level-dependent split, write the entire integrand on
$X\times(0,\infty)$. Its nonnegativity, not an assumed finite target norm,
licenses Tonelli.

**43.11.** Use $\int b_j=0$ to subtract $K(x,c_j)$. Only then does kernel
smoothness replace the nonintegrable $|x-c_j|^{-1}$ tail by an integrable
$|x-c_j|^{-2}$ tail.

**44.7.** The imaginary part supplies a lower bound and closed range. Use
$\operatorname{Ran}(A-z)^\perp=\ker(A-\bar z)$ to prove density and hence
surjectivity.

**44.13.** Express both the Hilbert norm and the image norm as scalar spectral
integrals over $|\lambda|>R$, then apply continuity from above and dominated
convergence to the respective tails.

**45.5.** Bound the Euclidean norm by the sum of the coordinate magnitudes.
The function $(1+t)e^{-t}$ is then a scalar majorant.
Check that both $e^{-t}$ and $te^{-t}$ have finite integrals
on $[0,\infty)$.

**45.10.** Apply each $x^*\in X^*$ to the proposed identity and use the scalar
fundamental theorem. Hahn–Banach then separates two vectors if their scalar
evaluations disagree.

**46.6.** Work on the one-dimensional scalar space, with $K$ multiplication by a scalar.
Choose $\lambda K$ with absolute value at least one while keeping
$1-\lambda K$ nonzero.

**46.11.** Inspect the kernel of the zero operator on the whole space.
Compare its dimension with the finite-dimensional-kernel condition
in the definition of a Fredholm operator.

**47.4.** If more than $d+1$ points appear, find a nonzero affine dependence
among the augmented vectors $(a_j,1)$ and move the weights until one reaches
zero.

**47.9.** For unit vectors the parallelogram identity gives
$\|(x+y)/2\|^2=1-\|x-y\|^2/4$, so the modulus is
$\delta(\varepsilon)=1-\sqrt{1-\varepsilon^2/4}$.

## Selected full solutions

### Solution to Exercise 3.6

Let $(a_n)$ be Cauchy. Choose $N$ such that $m,n\ge N$ implies
$|a_m-a_n|<1$. Taking $m=N$ gives $|a_n|\le|a_N|+1$ for $n\ge N$. Let

$$
M=\max\{|a_1|,\ldots,|a_{N-1}|,|a_N|+1\}.
$$

Then $|a_n|\le M$ for every $n$. The finite prefix is handled explicitly because
the Cauchy condition controls only the tail.

### Solution to Exercise 6.5

For $x,y\ge0$, assume $x\ge y$. Then

$$
|\sqrt{x}-\sqrt y|
=\frac{x-y}{\sqrt{x}+\sqrt y}
\le\sqrt{x-y}.
$$

The last inequality follows because $\sqrt{x}+\sqrt y\ge\sqrt{x-y}$. Given
$\varepsilon>0$, choose $\delta=\varepsilon^2$. If $|x-y|<\delta$, then
$|\sqrt x-\sqrt y|<\varepsilon$, with one $\delta$ valid across the entire
half-line.

### Solution to Exercise 9.5

For all real $x$,

$$
\left|\frac{\sin(nx)}{n^2}\right|\le\frac1{n^2}.
$$

Since $\sum n^{-2}$ converges, the Weierstrass M-test shows
$\sum\sin(nx)/n^2$ converges absolutely and uniformly on $\mathbb R$. Each summand
is continuous, so its sum is continuous by the uniform limit theorem.

### Solution to Exercise 10.7

From the contraction property,

$$
d(x_{n+k+1},x_{n+k})\le q^{k+1}d(x_n,x_{n-1}).
$$

Sum the finite chain from $x_n$ to $x_m$, then let $m\to\infty$:

$$
d(x_n,x^*)
\le\sum_{k=0}^\infty q^{k+1}d(x_n,x_{n-1})
=\frac{q}{1-q}d(x_n,x_{n-1}).
$$

Unlike the prior estimate involving the initial step, this posterior estimate can be
computed during iteration.

### Solution to Exercise 11.8

For $f_\varepsilon=1_{(0,\varepsilon)}$ on $(0,1)$,

$$
\|f_\varepsilon\|_1=\varepsilon,\qquad
\|f_\varepsilon\|_2=\sqrt{\varepsilon},\qquad
\|f_\varepsilon\|_\infty=1.
$$

Thus the functions tend to zero in $L^1$ and $L^2$ as
$\varepsilon\downarrow0$, but not in supremum norm. The error is large on a
shrinking set, and the norms weight that geometry differently.
