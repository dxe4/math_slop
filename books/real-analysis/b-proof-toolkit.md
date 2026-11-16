# Proof patterns and prerequisite toolkit

## Quantifier templates

To prove $a_n\to L$, begin:

> Let $\varepsilon>0$. We seek a cutoff after which
> $|a_n-L|<\varepsilon$.

Work backward privately to discover a condition on $n$, then write the proof
forward: choose an integer $N$ satisfying that condition, take arbitrary $n\ge N$,
and show the requested inequality.

To prove continuity at $a$, choose $\delta$ from an estimate on
$|f(x)-f(a)|$. When a factor depends on $x$, first impose a simple restriction such
as $|x-a|<1$ to bound it. Then take the minimum of the preliminary radius and the
epsilon-dependent radius.

To disprove uniform convergence, negate it accurately:

$$
\exists\varepsilon_0>0\;\forall N\;\exists n\ge N\;\exists x_n\in E,
\qquad |f_n(x_n)-f(x_n)|\ge\varepsilon_0.
$$

The witness $x_n$ is allowed to move with $n$. This is why spikes and boundary
layers are effective.

## Completeness templates

**Supremum template.** Define the set whose boundary should be the desired object.
Check nonempty and bounded. Let $s$ be its supremum. Use approximation from below
and the upper-bound property to prove the target condition. Root-existence and the
intermediate value theorem fit this model.

**Monotone template.** Prove the sequence is monotone and independently prove the
appropriate bound. Invoke monotone convergence. Only after a limit is known to
exist should a continuous recursion be passed to the limit.

**Nested-interval template.** Construct nonempty closed intervals, prove nesting,
and show lengths tend to zero. Completeness supplies the common point; shrinking
lengths supply uniqueness.

**Cauchy template.** For a recursively constructed sequence, estimate consecutive
differences and sum along a finite chain:
$d(x_m,x_n)\le\sum_{k=n}^{m-1}d(x_{k+1},x_k)$. A convergent numerical majorant gives
the Cauchy property.

## Compactness templates

For an open-cover proof, start with local neighborhoods whose union covers the
compact set. Extract finitely many. Combine the finite data using a maximum,
minimum, or sum. Do not take the minimum of infinitely many positive radii; it may
be zero.

For a sequential contradiction, assume no uniform object exists and choose a bad
sequence. Compactness gives a convergent subsequence. Pass all nearby companions to
the same limit and use continuity to contradict the fixed bad tolerance.

## Algebraic estimates

Useful decompositions include

$$
|a_nb_n-ab|
\le |a_n|\,|b_n-b|+|b|\,|a_n-a|,
$$

$$
|x^2-a^2|=|x-a|\,|x+a|,
$$

and the three-epsilon split

$$
|f(x)-f(a)|
\le |f(x)-g(x)|+|g(x)-g(a)|+|g(a)-f(a)|.
$$

For positive numbers, the arithmetic–geometric mean inequality is
$\sqrt{xy}\le(x+y)/2$. Cauchy–Schwarz in $\mathbb R^n$ is
$|\sum x_ky_k|\le(\sum x_k^2)^{1/2}(\sum y_k^2)^{1/2}$. It follows by considering
the nonnegative quadratic $\sum(x_k-ty_k)^2$.

Common trigonometric bounds are $|\sin x|\le|x|$, $|\cos x|\le1$, and
$|\sin x-\sin y|\le|x-y|$. The last follows from the mean value theorem once
differentiation is available.

## Countability templates

To show a set is countable, construct an injection into $\mathbb N$, a surjection
from $\mathbb N$, or a listing that explicitly handles duplicates. A countable
union of countable sets can be arranged in a grid and traversed diagonally, provided
enumerations have been chosen.

To prove uncountability, diagonalize against an alleged list or inject the set of
infinite binary strings. When using decimal expansions, avoid ambiguity by choosing
replacement digits that never create an eventually all-nine expansion.

## Advanced-analysis proof templates

**Linearization template.** Identify the candidate linear map $A$. Subtract it:

$$
R(h)=f(a+h)-f(a)-Ah.
$$

Estimate $\|R(h)\|/\|h\|$, not merely each coordinate limit. For a chain rule,
write both functions as linear term plus remainder and track which bounded
operator multiplies each error.

**Contraction template.** Specify a complete closed subset, prove the operator maps
that set into itself, and obtain a contraction factor strictly below one. These are
three distinct checks. State the fixed-point equation, uniqueness domain, and
error estimate after applying the theorem.

**Measure-construction template.** Begin with coverings and an outer measure.
Verify null empty set, monotonicity, and countable subadditivity. Define measurable
sets by a splitting criterion, prove they form a sigma-algebra, and only then use
countable additivity. Never assume outer measure is additive on arbitrary sets.

**Positive-to-signed template.** Prove a result for nonnegative simple functions,
pass upward by monotone convergence, then handle signs through positive and
negative parts. Check that the subtraction does not take the form
$\infty-\infty$.

**Approximation template.** Choose a dense simple class, prove the claim there,
and control the error in the norm relevant to the theorem. A uniform approximation
cannot be replaced silently by pointwise approximation. Regularity of measure,
mollification, and truncation are common routes to the dense class.

**Weak-derivative template.** Start from

$$
\int u\,\partial_j\varphi=-\int g_j\varphi
$$

for arbitrary compactly supported smooth $\varphi$. Approximate nonsmooth $u$ only
after identifying a uniform integrable bound. Boundary terms vanish because of
test-function support, not because boundaries are irrelevant.

**Order-exchange audit.** Before interchanging integrals or sums, ask whether terms
are nonnegative (Tonelli), absolutely integrable (Fubini), monotonically increasing,
or dominated by one integrable function. Name the theorem and verify its hypothesis
in the actual product space.

**Stability template.** Subtract two equations, estimate the difference, and
apply a contraction bound or Grönwall inequality. Keep initial-data error, forcing
error, and amplification factor separate so the final estimate can be interpreted.

**Kernel and disintegration template.** Verify separately that
$B\mapsto K(x,B)$ is a probability measure and $x\mapsto K(x,B)$ is measurable.
Prove the integral identity first on rectangles or a generating class, then use
a monotone-class argument. Record the marginal null set on which versions may
differ; do not condition by dividing by a zero-probability event.

**Transport and gluing template.** Check both marginals before evaluating cost.
For existence, obtain tightness or compactness of couplings and prove lower
semicontinuity of the cost. For the triangle inequality, glue two couplings over
their common marginal, apply the pointwise metric inequality, and use Minkowski
before taking infima.

**Ergodic-average template.** Put composition into a Koopman operator, identify
the invariant subspace, and decide whether the required limit is in norm or
almost everywhere. Ergodicity converts conditional expectation onto the
invariant sigma-algebra into a constant; it does not create independence or a
uniform convergence rate.

**Stochastic-process template.** Declare the finite-dimensional laws and prove
consistency before invoking an extension theorem. Treat path regularity as a
second theorem. For stochastic integrals, prove the isometry on adapted step
processes, extend by completion, and identify the convergence mode before using
Itô's formula.

**Interpolation level-split template.** Express the target norm by layer cake,
split the input at a threshold depending on the output level, and send the two
pieces to different endpoint bounds. Tonelli must be justified before reversing
the level and space integrals. The exponent restriction should emerge from an
explicit convergent integral.

**Spectral-domain template.** Specify $D(A)$ before manipulating the formula.
Test closedness through graph convergence, calculate $D(A^*)$ from the defining
pairing, and separate symmetry from self-adjointness. Use the resolvent or PVM
to define $\phi(A)$, including
$D(\phi(A))=\{f:\int|\phi|^2d\mu_f<\infty\}$ when $\phi$ is unbounded.

## Writing a polished proof

A polished proof has a visible spine:

1. state arbitrary objects and tolerances;
2. name the theorem or construction that creates any new object;
3. provide the decisive estimate;
4. say where each hypothesis is used; and
5. close with the exact conclusion, including domain and convergence mode.

Diagrams, computations, and numerical checks may discover a proof but do not
replace its universal argument. Conversely, a long symbolic derivation without a
quantifier plan may be correct yet unreadable. The goal is an auditable chain.
