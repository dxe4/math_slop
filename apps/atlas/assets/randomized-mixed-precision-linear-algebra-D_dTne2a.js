var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: randomized-mixed-precision-linear-algebra
status: draft
title: "Randomized and Mixed-Precision Linear Algebra"
level: advanced-undergraduate
estimated_minutes: 195
license: CC BY-SA 4.0
---

# Randomized and Mixed-Precision Linear Algebra

## Purpose and local prerequisites

The prerequisite chapters are **Direct and Iterative Linear Algebra**
(\`direct-iterative-linear-algebra\`) and **Reproducible, Mixed-Precision, and
Interval Arithmetic** (\`reproducible-arithmetic-intervals\`). We use matrix
factorizations, least squares, singular values, iterative solvers, backward
error, and the floating-point model. Two resources can reduce cost:

- **randomization** compresses or probes a matrix while accepting a named
  failure probability or expectation;
- **mixed precision** assigns storage, factorization, products, residuals, and
  updates to different arithmetic formats.

Neither resource makes conditioning disappear. A random sketch can miss a
direction. A low-precision factorization can erase a small pivot. The design
principle is therefore **accelerate, then verify**: use a cheaper randomized or
low-precision stage to propose a subspace, factor, or correction, and attach
deterministic residual and conditioning diagnostics to the accepted result.

## Randomness is part of the theorem

A randomized algorithm must identify:

1. the random object and its distribution;
2. whether the guarantee is in expectation or with stated probability;
3. whether the matrix is fixed before the draw or may depend on it;
4. whether the guarantee holds for one vector or uniformly over a subspace;
5. which norm and approximation target are controlled;
6. how independent repetitions or validation probes are generated.

A seed makes one implementation run reproducible. It does not turn a
probabilistic guarantee into a deterministic theorem, and it is not enough to
describe a generator, stream splitting, or cross-platform bit pattern.

## Randomized range finding

Let \\(A\\) be an \\(m\\times n\\) matrix and seek a rank-\\(k\\) approximation. Choose an
oversampling parameter \\(p\\) and draw

\\[
\\Omega\\in\\mathbb R^{n\\times(k+p)}.
\\]

Then compute

\\[
Y=A\\Omega,\\qquad Y=QR,
\\]

where the columns of \\(Q\\) are orthonormal. Compress to

\\[
B=Q^TA,
\\]

and use \\(QB\\) as the approximation. A small SVD of \\(B\\) can produce approximate
singular vectors and values.

Matrix multiplication dominates the data pass. Oversampling makes it less
likely that the random test matrix couples poorly to an important right
singular direction. Power iteration replaces \\(Y=A\\cdot \\Omega\\) by a stabilized form
representing \\((A A^{\\mathsf T})^q A \\Omega\\); it amplifies singular-value separation but
adds data passes and can lose information without reorthogonalization.

### What the deterministic core says

Write an SVD split at rank \\(k\\):

\\[
A=
\\begin{pmatrix}U_1&U_2\\end{pmatrix}
\\begin{pmatrix}\\Sigma_1&0\\\\0&\\Sigma_2\\end{pmatrix}
\\begin{pmatrix}V_1^T\\\\V_2^T\\end{pmatrix}.
\\]

Define \\(\\Omega_1=V_1^{\\mathsf T} \\Omega\\) and \\(\\Omega_2=V_2^{\\mathsf T} \\Omega\\). If \\(\\Omega_1\\) has full
row rank, a deterministic spectral-norm range bound has the form

\\[
\\lVert(I-QQ^T)A\\rVert_2^{2}
\\le
\\lVert\\Sigma_2\\rVert_2^{2}+
\\lVert\\Sigma_2\\Omega_2\\Omega_1^\\dagger\\rVert_2^{2}.
\\]

The first term is the unavoidable rank-\\(k\\) tail scale. The second measures how
the test matrix mixes trailing directions into an inadequately captured leading
subspace. A probability theorem controls this mixing term for a stated
distribution. The distribution and oversampling hypotheses may not be dropped
from the headline.

<a id="worked-two-by-two-range-approximation"></a>

### Worked example 1: two-by-two range approximation

Let

\\[
A=\\begin{pmatrix}10&0\\\\0&1\\end{pmatrix},
\\qquad \\omega=\\begin{pmatrix}1\\\\1\\end{pmatrix}.
\\]

Then \\(y=A\\cdot \\omega=(10,1)^{\\mathsf T}\\) and
\\(q=(10,1)^{\\mathsf T}/\\sqrt{101}\\). A unit vector orthogonal to \\(q\\) is
\\(w=(-1,10)^{\\mathsf T}/\\sqrt{101}\\). Because \\(I-qq^{\\mathsf T}=ww^{\\mathsf T}\\),

\\[
\\lVert(I-qq^T)A\\rVert_2
=\\lVert w^TA\\rVert_2
=\\frac{\\sqrt{(-10)^{2}+10^{2}}}{\\sqrt{101}}
=\\sqrt{\\frac{200}{101}}
\\approx1.407.
\\]

The optimal rank-one spectral error is \\(\\sigma_2=1\\), so this one-vector sketch is
reasonable but not optimal. If \\(\\omega=(0,1)^{\\mathsf T}\\), it misses the dominant direction
completely and the error is 10. A continuous Gaussian draw hits exactly zero in
the first component with probability zero, but arbitrarily poor coupling still
has nonzero probability. Oversampling and validation address that risk.

## A posteriori checks for a randomized range

Compute or estimate:

- orthogonality \\(\\lVert Q^{\\mathsf T} Q-I\\rVert\\);
- compression residual \\(A-Q(Q^{\\mathsf T} A)\\) in the norm claimed;
- singular residuals \\(A v_i-\\sigma_i u_i\\) and
  \\(A^{\\mathsf T} u_i-\\sigma_i v_i\\) for reported triplets;
- sensitivity to more oversampling, one power step, or an independent draw;
- held-out action on independent probe vectors.

An independent Gaussian probe can estimate the norm of the residual operator,
but that estimate is itself probabilistic. If a rigorous deterministic norm
bound is required, use a deterministic residual computation or a verified
bounding method. Reusing the construction vectors as validation vectors can
make the check optimistically dependent.

## Sketching least squares

For a tall matrix, solve

\\[
\\min_x \\lVert Ax-b\\rVert_2.
\\]

A sketching matrix \\(S\\) with far fewer rows forms the smaller problem

\\[
\\min_x \\lVert S(Ax-b)\\rVert_2.
\\]

The needed property is not merely preservation of each column length. A
subspace embedding for the span of the columns of \\(A\\) and \\(b\\) requires, for
every vector \\(z\\) in that subspace,

\\[
(1-\\epsilon)\\lVert z\\rVert_2^{2}
\\le\\lVert Sz\\rVert_2^{2}
\\le(1+\\epsilon)\\lVert z\\rVert_2^{2}.
\\]

Under this uniform property, a minimizer of the sketched residual has a
controlled original residual. If the matrix or right-hand side is chosen after
observing \\(S\\), a theorem for a fixed subspace may no longer apply.

Row sampling must include scaling by inverse sampling probability. Uniform row
sampling can miss a rare high-leverage row that determines the fit. Leverage-
aware sampling or a suitable random transform spreads influence more evenly,
but estimating leverage also costs work. The complete cost ledger includes
sketch formation, data passes, factorization, refinement, and verification.

Sketching can also produce a preconditioner rather than the final answer. An
iterative method then solves the original least-squares problem while using the
sketch to improve conditioning. This route naturally returns an original
residual, so it often supports a stronger final audit.

## Mixed precision is an allocation problem

Let \\(u_{low}\\) and \\(u_{high}\\) be unit roundoffs with
\\(u_{high}\\ll u_{low}\\). Possible assignments include:

- store \\(A\\) in a compact format but accumulate products in a wider format;
- factor \\(A\\) in low precision;
- form residuals \\(b-Ax\\) in high precision;
- solve corrections with a low-precision factorization;
- store and update \\(x\\) in high precision;
- recompute a final residual using the original higher-quality data.

“Using low precision” is too vague to analyze. Input conversion, multiplication,
accumulation, factorization, triangular solves, residuals, and output storage
can all have different formats and rounding modes.

## Iterative refinement

Given an approximate factorization, start with \\(x_0\\) and repeat:

1. form \\(r_k=b-Ax_k\\) in high precision;
2. approximately solve \\(A d_k=r_k\\) using the low-precision factors;
3. update \\(x_{k+1}=x_k+d_k\\) in high precision;
4. stop on backward error, stagnation, or a work limit.

Suppose the correction solver acts like an approximate inverse \\(M\\). In exact
high-precision outer arithmetic, the error obeys

\\[
e_{k+1}=(I-MA)e_k.
\\]

Thus a sufficient contraction condition is
\\(\\lVert I-MA\\rVert < 1\\) in a consistent norm. Under a standard stable low-precision
factorization model, a familiar sufficient regime is roughly
\\(\\kappa(A)\\cdot u_{low} < 1\\), with constants and scaling made explicit. It is not a
necessary condition for every modern variant. GMRES-based refinement can
succeed in broader regimes when the low-precision factors give a useful
preconditioner, but it still needs attainable high-precision residuals and a
well-conditioned preconditioned correction problem.

<a id="worked-contraction-ledger"></a>

### Worked example 2: contraction ledger

Assume a correction solver guarantees

\\[
\\lVert d_k-e_k\\rVert\\le0.2\\lVert e_k\\rVert,
\\]

where \\(e_k=x_{*}-x_k\\). Because \\(e_{k+1}=e_k-d_k\\),
\\(\\lVert e_{k+1}\\rVert \\le 0.2\\lVert e_k\\rVert\\). If \\(\\lVert e_0\\rVert=1\\times 10^{-2}\\), then the successive bounds are
\\(2\\times 10^{-3}\\), \\(4\\times 10^{-4}\\), and \\(8\\times 10^{-5}\\). High-precision residual formation makes these
corrections visible, but the contraction comes from the quality of the
approximate inverse. If the low-precision factor is singular, this argument
never starts.

<a id="when-conversion-destroys-the-problem"></a>

## Worked example 3: when conversion destroys the problem

Consider

\\[
A=\\begin{pmatrix}1&1\\\\1&1.0004\\end{pmatrix},
\\qquad
b=\\begin{pmatrix}2\\\\2.0004\\end{pmatrix}.
\\]

The exact solution is \\((1,1)^{\\mathsf T}\\). Near one, a low format whose spacing is about
\\(0.0009766\\) can round \\(1.0004\\) to \\(1\\). The stored low-precision matrix becomes

\\[
A_{low}=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix},
\\]

which is singular. A high-precision residual detects that a candidate is wrong,
but a singular correction factor cannot reliably recover the lost difference.
Scaling, equilibration, a wider factorization, or a different preconditioner is
needed. More refinement iterations do not recreate information removed before
factorization.

Componentwise scaling matters. A normwise condition number can be pessimistic
for a well-scaled structured problem or optimistic about tiny important
components. Equilibrating rows and columns can improve factorization behavior,
but the scales must be applied consistently to residuals and solutions.

## Dot products, accumulation, and reproducibility

A product of low-precision inputs accumulated in a wider format has a different
error model from a product rounded and accumulated entirely in the low format.
Blocked matrix multiplication changes reduction order. Parallel execution can
therefore change last bits even when every worker follows the same format.

Pairwise summation, compensated accumulation, exact fixed-point accumulators,
or reproducible reduction trees may be warranted for sensitive diagnostics.
They cost time or storage. A reproducibility contract should name whether it
promises identical bits, a backward-error bound, or statistically equivalent
randomized output.

Stochastic rounding makes each rounding decision random with a specified
expectation property. It can reduce systematic loss of small updates in some
iterative computations, but it introduces another random source and variance.
It is not the same as randomized sketching, and its independence and hardware
assumptions must be recorded separately.

## Residual, backward error, and forward accuracy

For a computed solution to \\(Ax=b\\), a common normwise relative backward error is

\\[
\\eta=
\\frac{\\lVert b-Ax\\rVert}
{\\lVert A\\rVert\\lVert x\\rVert+\\lVert b\\rVert}.
\\]

It asks for the smallest relative normwise perturbation scale consistent with
the residual. A small \\(\\eta\\) supports “exact solution of a nearby problem.”
Forward accuracy additionally depends on conditioning; schematically,

\\(relative forward error \\le condition number \\cdot backward error\\)

when the perturbation theorem's hypotheses and smallness regime hold. Mixed
precision can produce an excellent backward error for an ill-conditioned
problem whose forward digits remain uncertain.

For a low-rank approximation, report \\(\\lVert A-QB\\rVert\\), the norm, rank, and
orthogonality. For least squares, report the original residual, normal-equation
or projected-gradient residual, and an estimate of conditioning. A sketched
residual alone is not the final evidence unless the embedding event itself has
been established at the claimed confidence.

## Work, communication, and data movement

Randomization often saves communication by replacing several matrix passes with
one or two multiplications. Mixed precision can increase arithmetic throughput
and reduce memory traffic. Those benefits are architecture dependent even when
the mathematical algorithm is fixed. Report both operation structure and data
passes rather than claiming a universal speedup.

If \\(A\\) is sparse or structured, a dense random transform can destroy that
advantage. If \\(A\\) is streamed, a later power iteration may require an
unavailable second pass. If data conversion dominates, a faster low-precision
factorization may not improve total time. Mathematical rank, numerical rank,
and hardware-efficient block size are different design quantities.

## Failure diagnostics

- **Different seeds give incompatible ranks:** inspect the singular-value gap,
  oversampling, power iteration, and residuals.
- **A sketch fits but the original residual is large:** the embedding failed,
  was applied to the wrong subspace, or the sketched answer was not refined.
- **Refinement residual initially falls then stalls:** high-precision arithmetic
  may have reached its floor, updates may be lost, or low factors may be too
  inaccurate.
- **Low conversion makes a pivot zero:** change precision or scaling; repeated
  solves cannot recover a destroyed factor.
- **Reported singular vectors are not orthogonal:** reorthogonalize and check
  the basis and accumulation precision.
- **A probability bound is quoted without a random source:** the guarantee is
  incomplete.
- **Validation probes look exceptionally favorable:** ensure they were
  independent of construction and not selected after inspection.
- **Faster kernels do not reduce total runtime:** count conversion,
  communication, data passes, and verification.


## The deterministic range theorem with a proof

**Theorem 1 (Range residual from a captured leading block).** Use the SVD partition above, with $k$ no larger than the smaller matrix dimension, and suppose $\\Omega_1$ has full row rank. Let $P_Y=QQ^{\\mathsf T}$ be the orthogonal projector onto the entire sampled range. Then
$$
\\|(I-P_Y)A\\|_2^2
\\le\\|\\Sigma_2\\|_2^2+
\\|\\Sigma_2\\Omega_2\\Omega_1^\\dagger\\|_2^2.
$$
The conclusion is deterministic, conditional on the displayed rank condition and exact orthogonal projection.

*Proof.* First assume $\\sigma_k>0$. Orthogonal coordinate changes preserve the norm, so work with the SVD-coordinate matrix $\\operatorname{diag}(\\Sigma_1,\\Sigma_2)$. The sampled range contains the columns of
$$Z=\\begin{pmatrix}I\\\\F\\end{pmatrix},
\\qquad F=\\Sigma_2\\Omega_2\\Omega_1^\\dagger\\Sigma_1^{-1},$$
since multiplying the sample by $\\Omega_1^\\dagger\\Sigma_1^{-1}$ gives this matrix and $\\Omega_1\\Omega_1^\\dagger=I$. For each vector, orthogonal projection has no greater error than any other vector in its range. In particular compare the matrix with the range-valued approximation $Z(\\Sigma_1\\ \\ 0)$. Their difference is
$$
\\begin{pmatrix}
0&0\\\\
-\\Sigma_2\\Omega_2\\Omega_1^\\dagger&\\Sigma_2
\\end{pmatrix}.
$$
For a block row $(B\\ C)$, Cauchy–Schwarz gives
$\\|Bx+Cy\\|\\le(\\|B\\|_2^2+\\|C\\|_2^2)^{1/2}(\\|x\\|^2+\\|y\\|^2)^{1/2}$.
Applying this bound proves the result. If $\\sigma_k=0$, all trailing singular values vanish, so $\\Sigma_2=0$. Multiplying the sample by $\\Omega_1^\\dagger$ yields the entire nonzero leading image; the range contains the range of $A$ and both sides are zero. ∎

The upper bound does not promise a rank-$k$ output: $Q$ may have $k+p$ columns. Truncating the compressed SVD to rank $k$ introduces a separate approximation step and must be included in the final residual. If numerical QR drops nearly dependent columns, the retained range differs from the exact sampled range; rank-revealing thresholds and QR error then belong in the budget.

For a fixed matrix and a standard independent Gaussian test matrix, rotational invariance permits probabilistic analysis of $\\Omega_1$ and $\\Omega_2$. The expected and tail bounds require Gaussian pseudoinverse moment estimates; these are cited results from Halko, Martinsson and Tropp, Theorems 9.1 and 10.5–10.8, rather than proved by the deterministic argument above. A matrix chosen after inspecting the draw can violate their fixed-input setup.

## Transfer and arithmetic claims

**Proposition 2 (Uniform embedding transfers least squares).** Suppose $0\\le\\epsilon<1$ and the embedding inequality above holds for every residual in $\\operatorname{span}(A,b)$. If $x_*$ and $\\widehat x$ minimize the original and sketched problems respectively, then
$$
\\|A\\widehat x-b\\|_2\\le
\\sqrt{\\frac{1+\\epsilon}{1-\\epsilon}}\\|Ax_*-b\\|_2.
$$

*Proof.* Apply the lower embedding inequality to $A\\widehat x-b$, then sketched optimality, then the upper inequality to $Ax_*-b$. Divide the resulting squared bound by $1-\\epsilon>0$ and take square roots. This is the full argument developed again in Exercise 3. ∎

The span includes $b$: preserving the column space of $A$ alone need not preserve every residual when $b$ has a component outside that space. Furthermore, separate length checks on a finite list of columns do not establish the required uniform inequality for all linear combinations. Both quantifiers matter because the minimizing vector is selected after seeing the sketch.

**Proposition 3 (A refinement contraction floor).** If an inexact outer recurrence satisfies $e_{k+1}=Ee_k+\\eta_k$, $\\|E\\|\\le q<1$ and $\\|\\eta_k\\|\\le\\eta$, then
$$\\|e_k\\|\\le q^k\\|e_0\\|+\\frac{\\eta(1-q^k)}{1-q}.$$

*Proof.* Repeated substitution gives $E^ke_0+\\sum_{j=0}^{k-1}E^{k-1-j}\\eta_j$. The triangle inequality and the geometric sum give the bound. ∎

Thus the simple exact correction model cannot promise arbitrarily many accurate digits: the residual and update errors create a floor. The sufficient regimes involving low-precision unit roundoff are shorthand for a detailed rounding model. Carson and Higham's three-precision analysis supplies such conditions and distinguishes ordinary and GMRES-based corrections; its full matrix and componentwise estimates are external dependencies.

For stochastic rounding between adjacent representable values $a<x<b$, choose $a$ with probability $(b-x)/(b-a)$ and $b$ with probability $(x-a)/(b-a)$. The expected rounded value is
$[a(b-x)+b(x-a)]/(b-a)=x$.
Its variance is $(x-a)(b-x)$ by direct expansion. This local unbiasedness is a property of that prescribed distribution. It does not prove independent errors across operations, bounded long-time variance or unbiasedness of a nonlinear final output. Representable endpoints return themselves, and overflow requires a separate policy.

## Practice with fully worked solutions

### Exercise 1: Evaluate the tiny range finder
<a id="randomized-mixed-precision-linear-algebra-ex-1"></a>

For
\\(A=\\operatorname{diag}(10,1)\\) and \\(\\omega=(1,1)^{\\mathsf T}\\), compute the one-dimensional range and its
spectral residual. Compare with the optimal rank-one error.

<details>
<summary>Hint 1</summary>

**Hint.** Find a perpendicular unit vector to the sampled range.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The residual norm reduces to that vector's row action.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sample is \\(y=(10,1)^{\\mathsf T}\\), so
\\(q=y/\\sqrt{101}\\). A perpendicular unit vector is
\\(w=(-1,10)^{\\mathsf T}/\\sqrt{101}\\). Since \\(I-qq^{\\mathsf T}=ww^{\\mathsf T}\\),

\\[
\\lVert(I-qq^T)A\\rVert_2
=\\lVert w^TA\\rVert_2
=\\sqrt{200/101}\\approx1.407.
\\]

The optimal rank-one error is the second singular value, one. The sketch is
within about 41 percent of optimal for this draw, but the example does not give
a probability guarantee.

</details>

### Exercise 2: Combine independent failure probabilities
<a id="randomized-mixed-precision-linear-algebra-ex-2"></a>

One randomized construction
fails its target with probability at most \\(\\delta=0.02\\). If three genuinely
independent constructions are run and the best deterministically verified
result is retained, bound the probability that all fail.

<details>
<summary>Hint 1</summary>

**Hint.** Use the stated independence.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All constructions must fail simultaneously.

</details>

<details>
<summary>Solution</summary>

**Solution.** Independence gives \\(\\delta^{3}=0.02^{3}=8\\times 10^{-6}\\). Without independence,
the only immediate bound is at most \\(0.02\\) if all runs could share the same
failure event. A different seed does not prove independence when streams
overlap or the implementation reuses randomness.

</details>

### Exercise 3: Transfer a sketched least-squares guarantee
<a id="randomized-mixed-precision-linear-algebra-ex-3"></a>

Suppose \\(S\\) preserves every
vector in \\(\\operatorname{span}(A,b)\\) within squared factors \\(1\\pm \\epsilon\\), where \\(0\\le\\epsilon<1\\). Let \\(x_{*}\\) minimize
\\(\\lVert Ax-b\\rVert\\) and \\(\\widehat{x}\\) minimize \\(\\lVert S(Ax-b)\\rVert\\). Bound the original residual of
\\(\\widehat{x}\\).

<details>
<summary>Hint 1</summary>

**Hint.** Apply lower embedding, then optimality, then upper embedding.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide by one minus epsilon before taking a square root.

</details>

<details>
<summary>Solution</summary>

**Solution.** Apply the lower embedding bound to \\(A\\cdot \\widehat{x}-b\\), optimality in the
sketched problem, and the upper bound to \\(A\\cdot x_{*}-b\\):

\\[
(1-\\epsilon)\\lVert A\\widehat x-b\\rVert^{2}
\\le\\lVert S(A\\widehat x-b)\\rVert^{2}
\\le\\lVert S(Ax_*-b)\\rVert^{2}
\\le(1+\\epsilon)\\lVert Ax_*-b\\rVert^{2}.
\\]

Therefore

\\[
\\lVert A\\widehat x-b\\rVert
\\le
\\sqrt{\\frac{1+\\epsilon}{1-\\epsilon}}
\\lVert Ax_*-b\\rVert.
\\]

The uniform subspace property is essential because \\(\\widehat{x}\\) depends on \\(S\\).

</details>

### Exercise 4: Count refinement contractions
<a id="randomized-mixed-precision-linear-algebra-ex-4"></a>

If each refinement step reduces the error
norm by at most a factor 0.1, how many steps reduce a starting bound \\(1\\times 10^{-2}\\)
below \\(1\\times 10^{-8}\\)?

<details>
<summary>Hint 1</summary>

**Hint.** Write the geometric error after j steps.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Distinguish strictly below from equality.

</details>

<details>
<summary>Solution</summary>

**Solution.** After \\(j\\) steps the bound is \\(1\\times 10^{-2}\\cdot (0.1)^j=10^{-2-j}\\). To be
strictly below \\(1\\times 10^{-8}\\) requires \\(-2-j < -8\\), so \\(j>6\\); seven steps suffice.
Six steps reach \\(1\\times 10^{-8}\\) but do not go below it.

</details>

### Exercise 5: Compute a normwise backward error
<a id="randomized-mixed-precision-linear-algebra-ex-5"></a>

Suppose
\\(\\lVert A\\rVert=100\\), \\(\\lVert x\\rVert=10\\), \\(\\lVert b\\rVert=999\\), and
\\(\\lVert b-Ax\\rVert=1\\times 10^{-6}\\) in one consistent norm. Compute \\(\\eta\\).

<details>
<summary>Hint 1</summary>

**Hint.** Compute the backward-error denominator.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Keep conditioning separate from the resulting small ratio.

</details>

<details>
<summary>Solution</summary>

**Solution.** The denominator is \\(100\\cdot 10+999=1999\\). Hence

\\(\\eta=1\\times 10^{-6}/1999\\approx 5.00\\times 10^{-10}\\).

This is a small backward error. It does not state forward error until a
condition estimate and perturbation regime are supplied.

</details>

### Exercise 6: Diagnose low-precision rank loss
<a id="randomized-mixed-precision-linear-algebra-ex-6"></a>

In the worked matrix, suppose the low
format rounds both \\(1\\) and \\(1.0004\\) to \\(1\\). Why can a high-precision residual
not by itself make ordinary refinement succeed?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the converted factor's rank.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A visible residual does not recreate a missing correction direction.

</details>

<details>
<summary>Solution</summary>

**Solution.** The low factorization sees two identical rows and is singular.
High precision can compute a nonzero residual, but the correction stage must
approximately solve \\(A\\cdot d=r\\). A singular stored factor does not represent the
small direction separating the rows, so it cannot supply a contractive
correction in that direction. One must refactor in a wider precision, rescale,
or use another preconditioner that retains the missing information.

</details>

## Forward connection

Implicit multistep and differential-algebraic solvers repeatedly solve Jacobian
systems. Low-precision factors and randomized preconditioners can accelerate
those inner solves, but time-discretization error, nonlinear-solve error, and
constraint residuals remain separate. The next chapter makes that nested ledger
explicit.


## Further exercises

### Exercise 7: Oversampled rank
<a id="randomized-mixed-precision-linear-algebra-ex-7"></a>

A target rank is five and oversampling is three. How many columns does the initial test matrix have, and is $QQ^{\\mathsf T}A$ necessarily rank five?

<details>
<summary>Hint 1</summary>

**Hint.** Add target and oversampling dimensions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A projector can retain every sampled direction.

</details>

<details>
<summary>Solution</summary>

**Solution.** The test matrix has eight columns. Its orthonormal range may have dimension up to eight, so $QQ^{\\mathsf T}A$ can have rank above five. A rank-five result requires truncating the compressed decomposition and checking that final approximation's residual.

</details>

### Exercise 8: Embedding factor
<a id="randomized-mixed-precision-linear-algebra-ex-8"></a>

At $\\epsilon=0.2$, compute the least-squares residual amplification factor.

<details>
<summary>Hint 1</summary>

**Hint.** Use the proved square-root ratio.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate numerator and denominator separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** The factor is $\\sqrt{1.2/0.8}=\\sqrt{1.5}$, about $1.225$. It is conditional on a uniform embedding of the full residual space and an adequately solved sketched problem.

</details>

### Exercise 9: Refinement noise floor
<a id="randomized-mixed-precision-linear-algebra-ex-9"></a>

For $q=0.1$, $\\eta=9\\times10^{-9}$, give the limiting recurrence bound.

<details>
<summary>Hint 1</summary>

**Hint.** Sum the geometric forcing.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide by one minus the contraction factor.

</details>

<details>
<summary>Solution</summary>

**Solution.** The limiting upper bound is $\\eta/(1-q)=10^{-8}$. The exact starting-error contribution decays as $0.1^k$, but the perturbation term persists. Further iterations need not improve the guaranteed floor.

</details>

### Exercise 10: Unbiased local rounding
<a id="randomized-mixed-precision-linear-algebra-ex-10"></a>

Let adjacent values be $a=1$, $b=1.25$, with exact target $x=1.1$. Find the two stochastic-rounding probabilities and variance.

<details>
<summary>Hint 1</summary>

**Hint.** Use relative distances to the opposite endpoints.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply the local variance formula.

</details>

<details>
<summary>Solution</summary>

**Solution.** The probability of $a$ is $0.15/0.25=0.6$ and of $b$ is $0.1/0.25=0.4$. The mean is $0.6(1)+0.4(1.25)=1.1$ and variance is $(0.1)(0.15)=0.015$. This is a local distributional statement, not a guarantee for an entire nonlinear computation.

</details>

## Sources

Halko, Martinsson and Tropp, [Finding Structure with Randomness](https://doi.org/10.1137/090771806), has an [author-hosted text](https://tropp.caltech.edu/papers/HMT11-Finding-Structure.pdf). Theorem 9.1 supplies the deterministic framework and Theorems 10.5–10.8 give Gaussian expected and deviation bounds with their precise hypotheses. Their probability proofs are external dependencies; the deterministic spectral bound needed here is proved above. Carson and Higham, [Accelerating the Solution of Linear Systems by Iterative Refinement in Three Precisions](https://doi.org/10.1137/17M1140819), supplies detailed convergence and attainable-error conditions. Higham, [Accuracy and Stability of Numerical Algorithms](https://epubs.siam.org/doi/book/10.1137/1.9780898718027), is further reading for rounding analysis. No benchmark speed or unreported execution is inferred from these papers.

## Summary

Randomization proposes a smaller subspace under a named distribution and failure model. Mixed precision allocates arithmetic effort across data, factors, residuals and updates. A deterministic range residual, a uniform embedding theorem and a contraction estimate support different conclusions. Oversampled output rank, lost input directions, rounding floors and probe independence remain explicit. The subsequent time-integration chapters use these ideas inside implicit stages while retaining separate time, nonlinear and algebraic error budgets.
`;export{e as default};