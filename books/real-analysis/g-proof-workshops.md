# Guided Proof Workshops {#sec-analysis-proof-workshops}

Analysis is learned by controlling quantifiers, not by memorising theorem names.
These workshops combine proof, counterexample, computation, and exposition. They
are designed for a reader who has completed the relevant chapters but may never
have written a long mathematical investigation.

## Investigation protocol and proof ledger

Open every project with four columns:

| statement | status | dependencies | failure test |
|:---|:---|:---|:---|
| exact definition | fixed | none | compare with neighbouring conventions |
| finite computation | verified range | code or arithmetic | rerun boundary cases |
| lemma | to prove/proved | named earlier results | remove one hypothesis |
| destination theorem | quoted | precise source | check scope and converse |

For an epsilon statement, also write a **quantifier ledger**. For uniform
convergence,

$$
\forall\varepsilon>0\ \exists N\ \forall n\ge N\ \forall x\in E
\quad |f_n(x)-f(x)|<\varepsilon.
$$

The index $N$ cannot depend on $x$. Mark dependencies above each chosen
constant before estimating. This one habit catches many proof failures.

A workshop report has five layers:

1. examples that make the question concrete;
2. a conjectured statement with every hypothesis visible;
3. a proof divided into named lemmas;
4. a counterexample showing at least one hypothesis is needed; and
5. a short audit separating visualization, finite evidence, and proof.

## Completeness and construction workshop

### Project A: build a missing limit

Consider rational decimal truncations of $\sqrt2$, or construct rational
intervals $[a_n,b_n]$ by bisection with

$$
a_n^2<2<b_n^2,
\qquad b_n-a_n=2^{-n}(b_0-a_0).
$$

Prove $(a_n)$ and $(b_n)$ are Cauchy in $\mathbb Q$. Then prove no
rational number can be their common limit by the parity argument for
$x^2=2$. The point is not merely that $\sqrt2$ is irrational: it is that a
Cauchy sequence inside $\mathbb Q$ can demand a limit outside $\mathbb Q$.

Compare three completion descriptions:

- Dedekind cuts;
- equivalence classes of Cauchy sequences;
- nested closed intervals with shrinking diameters.

Build a map between two descriptions for this example and identify which general
theorem proves the constructions equivalent.

### Project B: completeness as a proof engine

Let $(X,d)$ be complete and let $T:X\to X$ satisfy

$$
d(Tx,Ty)\le qd(x,y),
\qquad 0<q<1.
$$

Starting at $x_0$, derive

$$
d(x_{n+r},x_n)
\le\frac{q^n(1-q^r)}{1-q}d(x_1,x_0).
$$

Use completeness to obtain a limit, continuity of $T$ to prove it is fixed,
and contraction to prove uniqueness. Then produce one counterexample for each
missing ingredient:

1. a contraction on an incomplete space whose fixed point lies outside it;
2. a continuous map on a complete space with no contraction and multiple fixed
   points;
3. an iteration that converges slowly because $q$ is close to 1.

### Deliverable

Your proof must explicitly identify the line at which completeness enters. A
sentence such as "the sequence converges because distances get small" skips the
central theorem: small successive increments alone need not make a Cauchy
sequence unless a summable bound is available.

## Function-sequence and approximation workshop

### Convergence laboratory

Study on appropriate domains:

$$
f_n(x)=x^n,
\qquad
g_n(x)=\frac{x}{1+nx},
\qquad
h_n(x)=\frac{nx}{1+n^2x^2}.
$$

For each sequence:

1. determine the pointwise limit;
2. compute or bound $\|f_n-f\|_\infty$;
3. locate points where the maximum error occurs;
4. test continuity of the limit;
5. decide whether integrals and derivatives may be interchanged with the limit,
   citing the exact theorem or supplying a counterexample.

Draw error curves only after solving the maximization analytically. A sampled
grid can miss a boundary layer whose width shrinks with $n$.

### Equicontinuity and compactness

Choose a family $\mathcal F\subset C([0,1])$ satisfying a common Lipschitz
bound and a uniform value bound at one point. Prove it is uniformly bounded and
equicontinuous. Apply Arzelà–Ascoli to any sequence in $\mathcal F$.

Now construct:

- a uniformly bounded family that is not equicontinuous;
- an equicontinuous family that is unbounded because no pointwise bound is
  supplied;
- a family on a noncompact domain for which local compactness does not give a
  globally uniformly convergent subsequence.

Explain which failure each example isolates.

### Approximation pathway

Approximate $|x|$ on $[-1,1]$ using Bernstein polynomials after mapping the
interval to $[0,1]$, or use a constructive polynomial family from Chapter 25.
Prove an error bound from uniform continuity. Compare it with least-squares
projection onto low-degree polynomials. The two approximations solve different
optimisation problems; a smaller sampled $L^2$ error does not imply a smaller
uniform error.

## Measure and integration workshop

### From coverings to measure

Construct the middle-third Cantor set $C$. At stage $n$, count intervals and
total length. Prove

$$
m(C)=0
$$

by covering $C$ with $2^n$ intervals of length $3^{-n}$. Then prove $C$
is uncountable by mapping binary sequences to ternary expansions using only
digits 0 and 2. Address the ambiguity of terminating ternary expansions rather
than hiding it.

This gives an uncountable null set. Contrast it with a countable dense null set
such as $\mathbb Q\cap[0,1]$, and with a fat Cantor set of positive measure
and empty interior. The three examples separate cardinality, density, category,
and measure.

### Convergence theorems clinic

For each theorem—monotone convergence, Fatou, dominated convergence—write:

1. hypotheses;
2. conclusion;
3. one function sequence satisfying it;
4. one sequence showing a missing hypothesis matters.

A useful family is

$$
f_n(x)=n\mathbf1_{(0,1/n)}(x)
$$

on $(0,1)$. It converges pointwise almost everywhere to zero while every
integral equals 1. Explain why no single integrable dominating function exists.

Next study

$$
g_n(x)=\mathbf1_{(0,n)}(x)
$$

on $(0,\infty)$. Monotone convergence applies, but both the limiting integral
and the sequence of integrals diverge to infinity. State why that is not a
failure of the theorem.

### Fubini audit

Construct or study a function on $\mathbb N^2$ or $\mathbb R^2$ whose
positive and negative parts both have infinite integral and whose iterated sums
or integrals disagree. Then prove Tonelli for the nonnegative absolute value
would report infinity. The lesson is that cancellation cannot repair failure of
absolute integrability for Fubini's theorem.

## Banach and Hilbert space workshop

### Normed-space comparison

On $\mathbb R^n$, prove all $\ell^p$ norms are equivalent, with constants
depending on $n$. Then test the same claim on sequence spaces. Use the standard
basis and partial-one vectors to show no dimension-independent equivalence
between $\ell^1$, $\ell^2$, and $\ell^\infty$ norms.

Explain why finite-dimensional intuition fails: compactness of a closed bounded
set and equivalence of norms rely on finite dimension.

### Uniform boundedness case study

Let $X$ be Banach and $T_n:X\to Y$ bounded linear. The uniform boundedness
principle says pointwise boundedness

$$
\sup_n\|T_nx\|<\infty
\quad\text{for every }x
$$

implies $\sup_n\|T_n\|<\infty$. Reconstruct the proof using the closed sets

$$
E_m=\{x:\sup_n\|T_nx\|\le m\}
$$

and Baire category. Mark where completeness is essential.

As a failure example on an incomplete normed space, take finite sequences with
the supremum norm and define $T_n(x)=nx_n$. Every fixed finite sequence is
pointwise bounded across $n$, while $\|T_n\|=n$. Complete the calculations.

### Hilbert projection project

In $L^2(-\pi,\pi)$, project a chosen function onto

$$
V_N=\operatorname{span}\{1,\cos x,\sin x,\ldots,\cos Nx,\sin Nx\}.
$$

Derive the normal equations from orthogonality and prove the best-approximation
identity

$$
\|f-v\|_2^2
=\|f-P_Nf\|_2^2+\|P_Nf-v\|_2^2.
$$

Compare $L^2$ convergence with pointwise behaviour near a jump. Gibbs
overshoot does not contradict norm convergence.

## Fourier and maximal-function workshop

### Approximate identities

Choose a nonnegative integrable kernel $K$ with integral 1 and set

$$
K_\varepsilon(x)=\varepsilon^{-1}K(x/\varepsilon).
$$

Prove $K_\varepsilon*f\to f$ uniformly when $f$ is bounded and uniformly
continuous. Split the integral into $|y|<\delta$ and $|y|\ge\delta$. The
first part uses uniform continuity; the second uses concentration of kernel mass.

Repeat in $L^p$ using translation continuity. Identify why an arbitrary
oscillating sign-changing kernel with integral 1 need not have uniformly bounded
$L^1$ norm and can fail the approximation theorem.

### Fourier-transform dictionary

For a Gaussian or another explicitly transformable function, verify:

- translation becomes phase multiplication;
- modulation becomes frequency translation;
- dilation changes amplitude and reciprocal scale;
- convolution becomes multiplication;
- differentiation becomes multiplication by frequency.

State the normalisation used before every formula. A missing $2\pi$ is a
convention error, not a harmless typographic detail.

### Maximal-function cover

In one dimension, prove the weak $(1,1)$ estimate for a finite union of
interval candidates using a greedy disjoint selection. Track the enlargement
constant. Then explain how the theorem extends from compactly supported simple
functions to $L^1$ and how it supports differentiation of integrals.

A finite grid computation can illustrate where the maximal function is large.
It cannot prove the covering lemma, because the continuum contains intervals
not represented on the grid.

## Probability and martingale workshop

### Finite conditional expectation tree

Use four fair coin tosses. Let $X$ be the total number of heads and
$\mathcal F_k$ the information in the first $k$ tosses. Compute

$$
M_k=\mathbb E[X\mid\mathcal F_k]
$$

at every node. Verify directly that

$$
\mathbb E[M_{k+1}\mid\mathcal F_k]=M_k.
$$

Explain why $M_k$ is a random variable measurable with respect to the current
information, not one fixed number.

Generalize to an integrable $X$ on a finite probability space and a nested
sequence of partitions. Prove the tower property by summing over atoms.

### Stopping audit

Define a bounded stopping time, such as the first head or time 4. Verify optional
stopping for a fair-game martingale by exact enumeration. Then remove the bound
in a doubling strategy and identify which integrability or uniform-integrability
hypothesis fails. Do not conclude that optional stopping is false; conclude that
the stronger hypothesis-free statement is false.

### Convergence comparison

Build a bounded martingale from conditional expectations
$M_k=\mathbb E[X\mid\mathcal F_k]$ and observe its almost-sure convergence.
Compare almost-sure, $L^1$, and $L^2$ convergence. Produce a sequence that
converges almost surely but not in $L^1$ to show why uniform integrability is a
separate bridge.

## Variational and PDE workshop

### One-dimensional energy problem

On $(0,1)$, minimise

$$
J(u)=\frac12\int_0^1|u'(x)|^2\,dx
-\int_0^1f(x)u(x)\,dx
$$

over $H_0^1(0,1)$. Work first with smooth trial functions.

1. Compute the first variation $J'(u)[v]$.
2. Derive the weak equation

   $$
   \int_0^1u'v'=\int_0^1fv
   \quad\text{for every }v\in H_0^1(0,1).
   $$

3. Use Poincaré's inequality to prove coercivity.
4. Apply the direct method or Lax–Milgram to obtain existence and uniqueness.
5. When $f$ is continuous, integrate the classical equation
   $-u''=f$ and compare solutions.

Mark the distinction between existence of a weak solution and additional
regularity proving it is classical.

### Finite-element approximation

Partition $[0,1]$ and use continuous piecewise-linear hat functions. Derive
the stiffness matrix and load vector exactly. Prove the matrix is symmetric
positive definite. Compute solutions under mesh refinement and measure error in
both $L^2$ and energy norms.

A smooth-looking plotted line is not an error bound. Cite Céa's lemma or prove a
one-dimensional best-approximation estimate before claiming convergence order.

### Heat and wave comparison

Use the same spatial eigenfunctions to solve the heat and wave equations with
zero boundary data. Derive exponential decay of heat modes and conservation of
wave energy. Explain why substituting the heat time factor into the wave
equation fails. The shared Laplacian does not make the evolution laws
interchangeable.

## Transport, dynamics, and stochastic-process workshop

This workshop joins Chapters 39–42 without treating “probability” as one
undifferentiated method. Maintain three ledgers: a measurable-structure ledger
for kernels, a marginal-and-cost ledger for transport, and a convergence-mode
ledger for orbit and path limits.

### Kernel-to-coupling project

Choose a three-state source distribution $\mu$ and a $3\times4$ stochastic
matrix $K$. Complete the following tasks.

1. Verify nonnegativity and row normalisation, then compute the target marginal
   $\nu_j=\sum_i\mu_iK_{ij}$.
2. Form $\pi_{ij}=\mu_iK_{ij}$ and verify both marginals by explicit sums.
3. Recover $K$ from $\pi$ on every positive-mass source state. At a zero-mass
   state, construct two different kernel rows and prove that they produce the
   same joint law.
4. Assign ordered coordinates to the states, compute the cost of $\pi$, and
   compare it with the monotone optimal coupling obtained from cumulative mass.
5. State which steps survive unchanged on standard Borel spaces and which need
   Radon–Nikodym, disintegration, tightness, or lower semicontinuity.

The written proof must distinguish an equality holding at every source state
from one holding $\mu$-almost everywhere. A matrix calculation that silently
divides by a zero row fails the version audit.

### Orbit-average laboratory

Use $R_\alpha x=x+\alpha\pmod1$ with
$\alpha=\sqrt2-1$ and
$f(x)=\cos(2\pi x)+0.4\sin(4\pi x)$. First prove the average of each Fourier
mode tends to zero by summing a geometric progression. Then approximate an
arbitrary continuous observable uniformly by a trigonometric polynomial and
derive uniform convergence of its orbit averages.

Run the same computation with a rational approximation to $\alpha$. Report the
eventual period, the observation window, and the discrepancy from the
irrational formula. Explain why floating-point periodicity does not refute the
continuum theorem. Finally place two irrational circles side by side with no
orbit crossing between them; choose an observable whose component means differ
and compute the conditional Birkhoff limit.

### Brownian quadratic-variation laboratory

Generate one finest dyadic array of independent centred Gaussian increments
with variances $2^{-m}$, and obtain every coarser increment by summing adjacent
blocks. For each level $k\le m$, compute

$$
Q_k=\sum_{j=1}^{2^k}
\big(B_{j2^{-k}}-B_{(j-1)2^{-k}}\big)^2.
$$

Beside the plot, supply the exact calculation
$\mathbb E Q_k=1$ and $\operatorname{Var}(Q_k)=2^{1-k}$. The numerical and
theoretical columns must remain separate: one path illustrates convergence,
while the moment calculation proves $L^2$ convergence. Add a differentiable
comparison path and prove its quadratic variation tends to zero. Record the
seed, finest level, nesting rule, and whether any claim is almost sure, in
probability, or in $L^2$.

The final deliverable is a two-page audit explaining why a conditional kernel,
an optimal coupling, an orbit average, and a stochastic path use four different
notions of “typical.” Include one false inference and its repaired hypothesis
from [sec-analysis-counterexamples](f-counterexample-atlas.md#sec-analysis-counterexamples).

## Interpolation and spectral-calculus workshop

This workshop pairs the endpoint logic of Chapter 43 with the domain logic of
Chapter 44. Both subjects turn an initially partial estimate or definition into
a robust operator, but their completion mechanisms are different.

### Endpoint interpolation clinic

Begin with the function $g(x)=1/x$ on $(1,\infty)$. Compute its distribution
function, certify weak $L^1$, and prove failure of strong $L^1$. Next take a
sublinear operator with declared weak $(1,1)$ constant $A$ and
$L^\infty$ constant $B$. Reproduce the level-dependent split
$f=g_t+h_t$, including:

1. the threshold $t/(2B)$;
2. the set inclusion that removes $Tg_t$;
3. the weak estimate for $Th_t$;
4. the nonnegative product-space integrand used by Tonelli; and
5. the integral in $t$ that forces $p>1$.

Apply the result to the maximal operator, then identify why the same argument
does not prove a strong endpoint. As a cancellation comparison, carry out the
dyadic Calderón–Zygmund decomposition for
$4\,1_{[0,1/4)}$ at height one and verify the support, size, and zero-mean
certificates of the bad part.

### Spectral-domain clinic

On $L^2(\mathbb R)$ define $Qf=xf$ on the maximal domain. Prove in order that
the domain is dense, $Q$ is closed, and $Q=Q^*$. Compute the nonreal resolvent
and its exact norm. For each real $\lambda$, construct a normalised Weyl
sequence and prove both that $\lambda$ is spectral and that it is not an
eigenvalue.

Now define $E(B)f=1_Bf$. Verify strong countable additivity by an $L^2$ tail
calculation. Derive $\phi(Q)f=\phi f$ and its domain, then specialize to
$\phi_t(x)=e^{-tx^2}$. With
$f_0(x)=\pi^{-1/4}e^{-x^2/2}$, calculate the filtered norm exactly and compare
it with quadrature on successively finer grids. The plot is accepted only with
a bound or convergence explanation for both mesh and truncation error.

### Comparison deliverable

Create a proof table with columns “initial class,” “extension mechanism,”
“limiting topology,” “endpoint or domain obstruction,” and “counterexample.”
For Marcinkiewicz interpolation the extension mechanism is layer cake plus a
level split; for the spectral calculus it is PVM integration plus graph-domain
control. Include the symmetric but non-self-adjoint momentum operator and the
principal-value but non-absolutely-integrable kernel. End with a paragraph
explaining why density alone cannot identify either an almost-everywhere
principal value or the adjoint domain of a differential operator.

## Counterexample-design workshop

A counterexample should target one removed hypothesis at a time.

### Design method

1. Write the theorem as hypotheses $H_1,\ldots,H_r$ implying conclusion $C$.
2. Choose one $H_j$ to remove while retaining the others when possible.
3. Decide which pathology is needed: escape to infinity, concentration,
   oscillation, discontinuity, nonmeasurability, or loss of compactness.
4. Build the simplest candidate and verify every retained hypothesis.
5. Compute explicitly where $C$ fails.

### Construction menu

- **Moving spike:** height grows while support shrinks; separates pointwise and
  integral behaviour.
- **Travelling bump:** mass leaves every compact set; exposes noncompact domains.
- **High-frequency oscillation:** weak cancellation without strong convergence.
- **Standard basis:** bounded sequence in an infinite-dimensional space with no
  norm-convergent subsequence.
- **Unbounded linear functionals on an incomplete space:** exposes Baire's role.
- **Lavrentiev-style gap or concentration sequence:** challenges naive
  variational compactness.

For each construction, make a table of convergence modes, norm bounds,
compactness, and limiting object. A counterexample atlas is useful only when a
reader can see precisely which inference it refutes.

### Original counterexample brief

Choose one false sentence from a draft proof or common textbook mistake. Design
an example not copied verbatim from Appendix F. Your report must show:

- the example is well defined;
- every advertised hypothesis holds;
- the conclusion fails by a calculation;
- a repaired theorem would exclude the example;
- the repair is not stronger than necessary without justification.

## Extended solution clinics

### Clinic 1: prove uniform continuity on a compact interval

Let $f:[a,b]\to\mathbb R$ be continuous. The conclusion is

$$
\forall\varepsilon>0\ \exists\delta>0\ \forall x,y\in[a,b]
\quad |x-y|<\delta\Longrightarrow |f(x)-f(y)|<\varepsilon.
$$

A pointwise continuity proof gives a different $\delta_x$ near every $x$.
To make one uniform $\delta$, cover $[a,b]$ by neighborhoods
$B(x,\delta_x/2)$. Compactness supplies finitely many centres
$x_1,\ldots,x_m$. Set $\delta$ to the minimum of their radii after a
Lebesgue-number adjustment or use the sequential contradiction proof.

Write both proofs.

In the sequential proof, assume uniform continuity fails. Then some
$\varepsilon_0>0$ and sequences $x_n,y_n$ satisfy

$$
|x_n-y_n|<1/n,
\qquad |f(x_n)-f(y_n)|\ge\varepsilon_0.
$$

Compactness gives a convergent subsequence $x_{n_k}\to x$. Prove
$y_{n_k}\to x$, apply continuity twice, and obtain a contradiction.

Now test each hypothesis:

- On $(0,1)$, $f(x)=1/x$ is continuous but not uniformly continuous.
- On $\mathbb R$, $f(x)=x^2$ is continuous but not uniformly continuous.
- A discontinuous function on a compact interval need not be uniformly
  continuous.

Explain why boundedness of the domain alone is insufficient without closedness
and why boundedness of the function alone is insufficient without control of
oscillation.

### Clinic 2: interchange a limit and an integral

Suppose $f_n\to f$ almost everywhere and $|f_n|\le g\in L^1$. The dominated
convergence theorem gives

$$
\int f_n\longrightarrow\int f.
$$

Do not start by writing $\int\lim f_n=\lim\int f_n$; that is the conclusion.
First prove $f$ is measurable and $|f|\le g$ almost everywhere. Apply
Fatou's lemma to the nonnegative functions

$$
g+f_n
\quad\text{and}\quad
g-f_n.
$$

From the first obtain an inequality involving $\int f$ and
$\liminf\int f_n$; from the second obtain the complementary limsup inequality.
Combine them.

Then solve three diagnosis cases.

1. $f_n=n\mathbf1_{(0,1/n)}$: pointwise convergence holds almost everywhere,
   integrals do not converge to the limiting integral, and no integrable
   dominator exists.
2. $f_n=\mathbf1_{[n,n+1]}$ on $\mathbb R$: every point eventually sees
   zero, the integrals stay 1, and mass escapes to infinity.
3. $f_n=x^n$ on $[0,1]$: dominated convergence applies with dominator 1,
   and the exceptional endpoint has measure zero.

For each, write the theorem checklist before calculating. The visual shape of a
shrinking or travelling bump is explanatory but not the argument.

### Clinic 3: weak convergence is not norm convergence

Let $(e_n)$ be the standard orthonormal sequence in $\ell^2$. For every
$y=(y_k)\in\ell^2$,

$$
\langle e_n,y\rangle=\overline{y_n}\longrightarrow0.
$$

Prove $y_n\to0$ from summability of $\sum|y_n|^2$. Hence
$e_n\rightharpoonup0$. But $\|e_n\|_2=1$, so the convergence is not strong. Under the first-slot-linear convention, $y=i e_1$ gives $\langle e_1,y\rangle=-i$.

Now prove a useful Hilbert-space upgrade: if $x_n\rightharpoonup x$ and
$\|x_n\|\to\|x\|$, then $x_n\to x$ in norm. Expand

$$
\|x_n-x\|^2
=\|x_n\|^2+\|x\|^2-2\operatorname{Re}\langle x_n,x\rangle
$$

and pass to the limit. Identify exactly where the inner-product structure is
used and why the same one-line identity is unavailable in a general Banach
space.

Use the example to audit statements about compact operators. A compact operator
maps a bounded weakly convergent sequence to a norm-convergent image sequence
under suitable hypotheses. Verify this for a diagonal operator

$$
T(x_1,x_2,\ldots)=(\lambda_1x_1,\lambda_2x_2,\ldots)
$$

with $\lambda_n\to0$, and prove compactness by finite-rank approximation.

### Clinic 4: a complete direct-method proof

Let $H$ be a Hilbert space and let

$$
J(u)=\frac12\langle Au,u\rangle-\langle f,u\rangle,
$$

where $A:H\to H$ is bounded, self-adjoint, and coercive:

$$
\langle Au,u\rangle\ge\alpha\|u\|^2
$$

for some $\alpha>0$. Prove that $J$ has a unique minimizer.

**Bound a minimizing sequence.** Complete the square estimate with
Cauchy–Schwarz and Young's inequality:

$$
J(u)\ge\frac\alpha2\|u\|^2-\|f\|\|u\|.
$$

This tends to infinity with $\|u\|$, so any sequence whose energies approach
the infimum is bounded.

**Extract weak convergence.** In a Hilbert space, bounded sequences have weakly
convergent subsequences after invoking reflexivity and weak compactness. Name
this theorem; it is not ordinary metric compactness of the closed unit ball.

**Pass to the limit.** The linear term is weakly continuous. The positive
quadratic form is weakly lower semicontinuous. Prove or quote that fact and
deduce the weak limit minimizes $J$.

**Prove uniqueness.** Coercivity implies strict convexity. Alternatively, if
$u,v$ both solve the Euler equation $Au=f$, then

$$
\alpha\|u-v\|^2
\le\langle A(u-v),u-v\rangle=0.
$$

Identify which steps fail if coercivity is replaced by nonnegativity. Give an
example with a nontrivial kernel: minimizers can be nonunique or the linear term
can drive the energy to $-\infty$ along a kernel direction.

### Clinic 5: distributional derivatives and jumps

Let $H(x)=0$ for $x<0$ and $H(x)=1$ for $x>0$. For every compactly
supported smooth test function $\varphi$, compute

$$
\langle H',\varphi\rangle
=-\int_{\mathbb R}H(x)\varphi'(x)\,dx
=\varphi(0).
$$

Thus $H'=\delta_0$ in distributions. The pointwise derivative is zero away
from zero, but it misses the jump mass.

Generalize to a piecewise $C^1$ function with jumps $J_k$ at points $x_k$:

$$
D f=f'_{\mathrm{classical}}+
\sum_kJ_k\delta_{x_k}.
$$

Derive the formula by integration by parts on each smooth interval, keeping the
boundary signs. Apply it to the absolute-value function and to a piecewise
constant conservation-law profile.

Now mollify $H$ with $\rho_\varepsilon$. Show

$$
(H*\rho_\varepsilon)'=\rho_\varepsilon
$$

and that these derivatives concentrate at zero. They do not converge to an
ordinary $L^1$ function, but they converge to $\delta_0$ distributionally.
State which topology makes the limit meaningful.

### Clinic 6: theorem comparison chart

Choose one sequence $(f_n)$ and complete this chart with proofs or explicit
counterexamples:

| question | required hypotheses | conclusion |
|:---|:---|:---|
| preserve continuity? | uniform convergence | continuous limit |
| pass through an integral? | dominated/monotone hypotheses | integral convergence |
| pass through a derivative? | derivative convergence plus anchor control | differentiable limit |
| extract a subsequence? | compactness or weak compactness | chosen convergence mode |
| upgrade weak to strong? | norm convergence in Hilbert setting, or compactness | norm convergence |

Do not fill the hypothesis column with theorem names alone. Write the actual
boundedness, domination, equicontinuity, or completeness conditions. Then add a
row for a tempting false converse and supply the counterexample from Appendix F
that defeats it.

## Qualifier-style synthesis problems

These problems ask for theorem selection, proof architecture, and diagnosis of
failed approaches. A solution is complete only when it states the ambient
space and convergence mode; words such as "bounded," "compact," and
"convergent" have no meaning without that information.

### Synthesis 1: four compactness mechanisms

For each sequence below, decide whether a convergent subsequence must exist and
name the topology of convergence.

1. A bounded sequence in a closed interval of $\mathbb R$.
2. A bounded sequence in an infinite-dimensional Hilbert space.
3. A uniformly bounded, equicontinuous sequence in $C([0,1])$.
4. A bounded sequence in $L^1([0,1])$.

For the first, Bolzano–Weierstrass gives an ordinarily convergent subsequence;
the limit remains in the interval because it is closed. For the second, the
orthonormal sequence $(e_n)$ has no norm-convergent subsequence since
$\lVert e_n-e_m\rVert=\sqrt2$ when $n\ne m$. It does converge weakly to
zero: approximate any fixed Hilbert-space vector by a finite linear combination
of basis vectors, or use square summability of its coefficients.

For the third, Arzelà–Ascoli gives a uniformly convergent subsequence. Write
the diagonal proof on a countable dense set, then show how one common modulus of
continuity upgrades pointwise convergence on that set to uniform Cauchy control
on the whole interval. Pointwise boundedness alone is not enough; construct
continuous spikes whose heights grow while their supports shrink.

For the fourth, boundedness in $L^1$ gives neither norm compactness nor, by
itself, weak sequential compactness. Study translates or concentrating spikes.
State a suitable replacement such as uniform integrability together with the
appropriate finite-measure setting, then quote the Dunford–Pettis conclusion
at the scope actually needed. Finish with a chart separating finite-dimensional
compactness, weak compactness in reflexive spaces, function-space compactness,
and compact embeddings.

### Synthesis 2: identify the legal limit passage

Let

$$
f_n(x)=n\mathbf 1_{(0,1/n)}(x),
\qquad x\in(0,1).
$$

Prove that $f_n(x)\to0$ for every $x>0$, while
$\int_0^1 f_n=1$. Explain precisely why dominated convergence is unavailable:
any pointwise dominator would need increasingly large values near zero, and a
direct distribution-function argument shows that the natural envelope behaves
like $1/x$, which is not integrable.

Now replace $f_n$ by $g_n=\min(f_n,M)$ for fixed $M$. Find an integrable
dominator and pass the limit through the integral. Next let $M\to\infty$ and
explain why reversing these two limits recovers the concentration defect.

Compare this example with

$$
h_n(x)=x^n,
\qquad
k_n(x)=n x(1-x^2)^n.
$$

Determine pointwise limits, integrals, and useful dominators. Do not decide by
appearance. For each family test Fatou's lemma, monotone convergence (possibly
after replacing the sequence by monotone envelopes), dominated convergence,
and uniform integrability. State the weakest theorem from this book that proves
the desired conclusion.

Finally formulate a measure-concentration interpretation: the measures
$f_n(x)\,dx$ converge weakly against continuous test functions to a point mass
at zero after the domain is viewed as $[0,1]$. This does not mean the functions
converge weakly in $L^1(0,1)$. Explain how the test space changes the meaning
of "weak."

### Synthesis 3: choose among the Banach-space pillars

Let $X,Y$ be Banach spaces and let $(T_n)\subset\mathcal L(X,Y)$. Suppose
that for each $x\in X$, the set $\{\lVert T_nx\rVert:n\ge1\}$ is bounded.
Use the uniform boundedness principle to prove

$$
\sup_n\lVert T_n\rVert<\infty.
$$

Do not smuggle the conclusion into the hypothesis by writing "uniformly
bounded on each vector." Reconstruct the Baire-category argument: define the
closed sets

$$
E_m=\{x:\sup_n\lVert T_nx\rVert\le m\},
$$

cover $X$, find one with interior, and use linearity to move the local bound
to a ball about zero. Identify exactly where completeness of $X$ enters.

Then solve three nearby problems and select the correct theorem.

- A linear map is known to have closed graph: use the closed graph theorem to
  infer continuity, after checking both spaces are Banach.
- A bounded linear map is surjective: use the open mapping theorem to obtain a
  quantitative lifting ball.
- A family of continuous linear functionals is pointwise bounded: apply uniform
  boundedness, recognising $Y$ as the scalar field.

Construct one incomplete normed-space example where the corresponding
conclusion can fail, or give a fully sourced example and verify every property.
The lesson is not that the three theorems are interchangeable; they are related
consequences of completeness with different input shapes.

### Synthesis 4: weak formulation, energy, and regularity

Consider

$$
-u''=f\quad\text{on }(0,1),
\qquad u(0)=u(1)=0,
$$

with $f\in L^2(0,1)$. Multiply by a smooth test function vanishing at the
boundary and integrate by parts to obtain

$$
\int_0^1u'v'\,dx=\int_0^1fv\,dx.
$$

Extend this identity to $v\in H_0^1(0,1)$. Prove boundedness of the right-hand
side using Cauchy–Schwarz and Poincaré's inequality. The bilinear form
$a(u,v)=\int u'v'$ is coercive in the $H_0^1$ norm, so Lax–Milgram supplies
a unique weak solution. State which version of that theorem you use.

Take $v=u$ to derive the energy estimate

$$
\lVert u'\rVert_2\le C\lVert f\rVert_2.
$$

This gives existence, uniqueness, and stability but does not yet assert that
$u$ has two classical derivatives. In one dimension, integrate $f$ twice or
invoke Sobolev regularity to identify an $H^2$ representative and then state
what follows from the one-dimensional embedding. In a higher-dimensional or
rough-boundary problem, regularity requires new hypotheses.

Complete the argument a second way by minimizing

$$
J(v)=\frac12\int_0^1|v'|^2\,dx-\int_0^1fv\,dx.
$$

Show coercivity, take a minimizing sequence, extract weak convergence, use weak
lower semicontinuity, and derive the Euler–Lagrange equation. Mark which step
uses reflexivity, which uses compactness only if you choose a stronger route,
and why strict convexity gives uniqueness. The operator proof and direct-method
proof should arrive at the same object through different theorem engines.

### Synthesis 5: repair a broken proof

Audit the following argument: "A bounded sequence of continuous functions has a
pointwise convergent subsequence. The limit is continuous, and bounded
convergence permits integration term by term." Every sentence can fail.

Give an explicit counterexample to each transition, then propose two valid
repairs. One repair may assume uniform boundedness and equicontinuity on a
compact interval, use Arzelà–Ascoli, and conclude uniform convergence plus
integral convergence. Another may work in a measure space with almost-everywhere
convergence and one integrable dominator, using dominated convergence without
claiming continuity of the limit.

Write both repaired theorems with quantifiers. Compare their conclusions:
uniform convergence is a statement in the supremum norm, whereas dominated
convergence is an integral statement and allows far rougher functions. A proof
is not repaired by adding the name of a theorem; it is repaired by adding and
checking the hypotheses that make the theorem applicable.

## Portfolio rubric and selected support

Score 0–4 in each category:

| category | full-credit standard |
|:---|:---|
| quantifiers | dependencies of every epsilon, index, and point are visible |
| theorem use | hypotheses are checked where invoked |
| estimates | constants and domains remain controlled to the final line |
| examples | computations are exact or have certified error bounds |
| counterexample | one hypothesis is isolated and failure is proved |
| exposition | notation, cross-references, and status labels are consistent |
| review | another reader's objections receive a written response |

### Selected proof checks

- Shrinking successive differences imply Cauchy only with a summable tail bound
  or another global estimate.
- A pointwise limit can be discontinuous; a uniform limit of continuous
  functions is continuous.
- Dominated convergence requires one integrable dominator independent of $n$.
- Uniform boundedness needs completeness of the domain space.
- Orthogonal projection minimises Hilbert norm because of the Pythagorean
  identity, not by coordinate guesswork.
- Fourier normalisation must be fixed before translation and differentiation
  formulas are compared.
- Optional stopping is a family of theorems with integrability hypotheses.
- Weak PDE existence and classical differentiability are separate conclusions.

### Oral defence

Present one studio in ten minutes, then answer:

1. Which hypothesis would you least like to lose, and why?
2. Where does completeness or compactness enter?
3. Which line is qualitative and which is quantitative?
4. What would a finite plot fail to detect?
5. Is the converse true? If not, give a counterexample.
6. Which stronger theorem could replace your proof, and why did you not need it?

The goal is not speed. It is the ability to locate the exact bridge between
assumptions and conclusion.
