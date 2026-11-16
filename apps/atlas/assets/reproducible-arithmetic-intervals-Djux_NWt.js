var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: reproducible-arithmetic-intervals
status: draft
title: "Reproducible, Mixed-Precision, and Interval Arithmetic"
level: advanced-undergraduate
estimated_minutes: 175
license: CC BY-SA 4.0
---

# Reproducible, Mixed-Precision, and Interval Arithmetic

## Purpose and local prerequisites

The preceding finite-precision chapter separated conditioning from algorithmic
stability. This chapter asks a different question: **what evidence survives
when arithmetic order, precision, or rounding environment changes?** It assumes
the ideal one-operation floating-point model, elementary inequalities, and
Gaussian elimination at the level of a first linear algebra course.

Three ideas must not be collapsed:

- **reproducibility** means that a declared computation returns the same stored
  result under the declared execution contract;
- **accuracy** compares that result with a mathematical target;
- **verification** supplies evidence, often a bound or independent check, that
  justifies a claim about the target.

A reproducible wrong answer is still wrong. An accurate result obtained by an
unspecified reduction order may be hard to reproduce. An interval that contains
the truth can be too wide to answer the intended question. The goal is to use
each tool for the claim it actually supports.

## Reduction order is part of the algorithm

Exact addition is associative, but rounded addition usually is not. Therefore
the expression \\(\\sum_{i=1}^n x_i\\) does not fully specify a floating-point
program. A sequential left-to-right sum, a balanced pairwise tree, and a
parallel reduction may return different last bits.

Under round-to-nearest and the normal finite-result hypotheses, write

\\(\\operatorname{fl}(a+b)=(a+b)(1+\\delta)\\), \\(\\lvert \\delta\\rvert\\le u\\).

For nonnegative inputs, a sequential sum has an error bounded in the familiar
form

\\(\\lvert s_{hat}-s\\rvert \\le \\gamma_{n-1} \\sum_i \\lvert x_i\\rvert\\),

where \\(\\gamma_k=ku/(1-ku)\\) and \\(ku<1\\). A balanced binary tree has only about
\\(\\operatorname{ceil}(\\log_2 n)\\) rounding levels along any input-to-root path. A corresponding
bound replaces a factor of order \\(n\\) by one of order \\(\\log n\\), although the
precise constant depends on the tree and uneven leaves.

### Derivation for four inputs

Let all intermediate results remain normal and finite. Sequential summation
forms

\\(t_2=\\operatorname{fl}(x_1+x_2)\\), \\(t_3=\\operatorname{fl}(t_2+x_3)\\), \\(t_4=\\operatorname{fl}(t_3+x_4)\\).

Expanding the three rounding factors shows that \\(x_1\\) and \\(x_2\\) may be affected
three times, \\(x_3\\) twice, and \\(x_4\\) once. Pairwise summation instead forms

\\(p=\\operatorname{fl}(x_1+x_2)\\), \\(q=\\operatorname{fl}(x_3+x_4)\\), \\(s_{hat}=\\operatorname{fl}(p+q)\\).

Every input passes through two rounded additions. This is the structural reason
for the logarithmic-depth bound. It does not say the pairwise answer is always
closer on every dataset: rounding errors can reinforce or cancel. It says the
worst-case pathway is shorter under the stated model.

### Worked example: a result that needs a contract

Use a three-significant-digit decimal teaching format. Summing

\\(100, 0.4, 0.4, -100\\)

left to right gives \\(100\\) after the first small addend, \\(100\\) again after the
second, and then zero after subtracting \\(100\\). In the fixed pairwise tree
\\((100-100)+(0.4+0.4)\\), the large pair gives zero, the small pair gives \\(0.800\\),
and the final result is \\(0.800\\), which is also the exact sum. The point is not that
“small-first” is universally correct. With mixed signs, a robust contract might
specify a fixed reduction tree and use compensated accumulation, then report a
condition indicator

\\(\\kappa_{\\sum} = \\sum_i \\lvert x_i\\rvert / \\lvert \\sum_i x_i\\rvert\\)

when the denominator is nonzero. Here \\(\\kappa_{\\sum}=200.8/0.8=251\\): the requested
small remainder is sensitive to perturbations in the large cancelling terms.

## Compensated accumulation

Compensated summation carries an auxiliary correction for low-order information
lost at each addition. One common update is

1. \\(y = x_i - c\\),
2. \\(t = s + y\\),
3. \\(c = (t-s)-y\\),
4. \\(s = t\\).

In exact arithmetic, \\(c\\) would remain zero. In floating point, the expression
\\((t-s)-y\\) estimates the part of \\(y\\) that failed to enter \\(t\\). The method can
produce an error comparable to a small multiple of \\(u \\sum \\lvert x_i\\rvert\\), rather than a
multiple that grows directly with \\(n\\), under standard no-overflow assumptions.
That statement is an analysis result, not a promise of exact summation.

**Failure boundary.** If \\(x_i-c\\) overflows, if subnormal behavior matters, if a
compiler changes the evaluation contract, or if inputs already contain
measurement error, the simple story is incomplete. A reproducible implementation
must state format, rounding mode, exceptional-value policy, reduction order, and
whether fused operations are permitted.

## Mixed precision as an error budget

Mixed-precision computation stores or evaluates different stages in different
formats. The responsible question is not “Can this stage be made low
precision?” but “Which perturbation does that choice introduce, and will a
higher-precision check detect or repair it?”

Consider solving \\(Ax=b\\). Suppose a low-precision factorization produces an
approximate solve \\(x_0\\). Iterative refinement repeats:

1. compute residual \\(r_k=b-Ax_k\\) in a higher working precision;
2. approximately solve \\(A d_k=r_k\\) using the low-precision factors;
3. update \\(x_{k+1}=x_k+d_k\\) in the working precision.

The correction equation is exact in intent. If the low-precision solve behaves
like applying an approximate inverse \\(B\\), then in exact arithmetic the error
obeys

\\(e_{k+1}=(I-BA)e_k\\), where \\(e_k=x_{*}-x_k\\).

Thus a sufficient convergence condition in a subordinate norm is

\\(\\lVert I-BA\\rVert<1\\).

This is a clean theorem about the stationary refinement model. A floating-point
implementation also needs a sufficiently accurate residual, nonoverflowing
updates, and a factorization whose errors do not make \\(B\\) useless. Rules of
thumb involving \\(\\kappa(A)u_{low}\\) summarize particular analyses; they are not
unconditional laws for every matrix, scaling, pivoting strategy, or collection
of formats.

### Worked refinement step

**Example 18.2 (A complete refinement correction).**

Let

\\(A=\\operatorname{diag}(1,1000)\\), \\(b=(1,1000)^{\\mathsf T}\\), and \\(x_0=(1,0.999)^{\\mathsf T}\\).

The exact solution is \\((1,1)^{\\mathsf T}\\). A high-precision residual is

\\(r_0=b-Ax_0=(0,1)^{\\mathsf T}\\).

Solving the diagonal correction equation gives \\(d_0=(0,0.001)^{\\mathsf T}\\), so one exact
refinement update recovers the solution. If the residual were instead formed
so coarsely that \\(1000-1000(0.999)\\) rounded to zero, refinement would falsely
appear finished. The residual precision is part of the convergence mechanism,
not a reporting detail.

## Intervals and outward rounding

An interval \\([a,b]\\) represents the set \\({x: a\\le x\\le b}\\). Interval arithmetic
extends an operation so that applying it to input intervals encloses every
possible exact result.

For addition,

\\([a,b]+[c,d]=[a+c,b+d]\\).

For multiplication, take the minimum and maximum of the four endpoint products.
For division, the divisor interval must not contain zero; otherwise the ordinary
single finite interval quotient is undefined or unbounded.

On a finite machine the exact endpoint results may be unrepresentable. The
lower endpoint must therefore round toward negative infinity and the upper
endpoint toward positive infinity, or an equivalent next-representable-number
construction must be proved to enclose them. Rounding both endpoints to nearest
can create a narrow interval that misses the truth.

### Inclusion theorem

**Theorem (natural interval inclusion).** Build an expression from variables,
constants, and interval extensions of elementary operations. Suppose every
operation is defined on the intermediate intervals and each interval extension
encloses all exact pointwise results, including outward rounding. Then for every
choice of real inputs from the starting intervals, the exact expression value
lies in the computed final interval.

**Proof.** Proceed by structural induction on the expression tree. The claim is
true for a variable or enclosed constant. For an operation node, the induction
hypothesis places each exact child value inside its computed child interval.
The enclosing property of the interval operation then places the exact parent
result inside the computed parent interval. Applying this argument to the root
proves the claim.

The theorem is powerful because it accounts for every allowed input at once.
Its hypotheses are equally important: undefined intermediate operations,
non-enclosing library functions, or incorrect rounding invalidate the proof.

## Dependency and overestimation

Intervals forget relationships between repeated occurrences of a variable.
For \\(x \\in [0,1]\\), direct interval evaluation of \\(x-x\\) gives \\([-1,1]\\), although
the exact range is \\({0}\\). Rewriting the expression as zero gives the sharp
enclosure. Similarly, evaluating \\(x(1-x)\\) by independent interval operations
gives \\([0,1]\\), while completing the square,

\\(1/4-(x-1/2)^{2}\\),

shows the exact range is \\([0,1/4]\\).

This is not a violation of inclusion; wide intervals still contain the truth.
It is loss of dependency information. Remedies include algebraic reformulation,
subdivision, centered forms, affine arithmetic, or problem-specific monotonicity.
Subdivision is safe but can grow exponentially with dimension, so it needs a
work budget and a stopping report.

### Interval existence and uniqueness orientation

Intervals can do more than bound evaluation. Let \\(f\\) be continuously
differentiable on an interval \\(X\\), choose \\(m \\in X\\), and let \\(F'(X)\\) enclose all
derivative values on \\(X\\). If zero is not in \\(F'(X)\\), an interval Newton image is

\\(N(X)=m-f(m)/F'(X)\\).

Under the standard interval-Newton hypotheses, \\(N(X)\\) contained in \\(X\\) can
certify a unique zero in \\(X\\); disjointness can exclude a zero. A full theorem
must specify closed intervals, derivative enclosure, and the precise interior
condition. This chapter uses the construction as a forward link to verified
root computation, not as permission to label every interval iteration a proof.

## Exact checks and reproducible records

Some invariants can be checked without floating-point ambiguity. Integer row
sums, rational polynomial identities, modular checksums, and symbolic symmetry
can expose implementation defects. Exact arithmetic may still be expensive, so
use it selectively on small instances or projections.

A reproducible numerical record should include:

- input data and parsing convention;
- arithmetic formats, rounding modes, exceptional-value policy, and fused
  operation policy;
- deterministic reduction and task ordering, or an explicit statement that
  last-bit variation is permitted;
- algorithm, tolerances, iteration caps, and termination reason;
- residuals or enclosures computed independently when feasible;
- platform and software identifiers needed to replay the declared contract.

Bitwise identity across machines is stronger than many scientific claims need.
Sometimes a mathematically justified interval or tolerance is the right
reproducibility target. State which one is required before choosing machinery.

## Failure diagnostics

- **Same bits, different meaning:** replaying the same wrong input or formula
  proves reproducibility, not validity.
- **Higher precision everywhere:** this increases cost and may delay, rather
  than diagnose, ill-conditioning or model error.
- **Nearest-rounded interval endpoints:** a displayed enclosure can exclude the
  exact result by one unit in the last place.
- **Interval width treated as only roundoff:** the width may include input
  uncertainty, dependency overestimation, or deliberate subdivision scale.
- **Mixed-precision residual in the cheap format:** refinement can stagnate
  because the correction signal was rounded away.
- **Unspecified parallel reduction:** a set of inputs and a library name do not
  determine a unique addition tree.

## Bounds that expose their arithmetic assumptions

**Definition 1 (Summation contract).** A summation contract specifies the real inputs represented by the stored data, the operation tree, the format and rounding direction at each node, the exceptional-value policy and the permitted result comparison. It distinguishes an exact dyadic input from an uncertain measurement that happens to be stored as the same floating-point value. Without that distinction even an exact accumulator can solve the wrong problem.

**Lemma 2 (A product of rounding factors).** Suppose $|\\delta_j|\\le u$ for $j=1,\\ldots,k$ and $ku<1$. Then
$$\\prod_{j=1}^k(1+\\delta_j)=1+\\theta_k,\\qquad
|\\theta_k|\\le\\gamma_k=\\frac{ku}{1-ku}.$$

*Proof.* Since $u<1$, all factors are positive. Their product lies between $(1-u)^k$ and $(1+u)^k$. Bernoulli's inequality gives $(1-u)^k\\ge1-ku$. The binomial expansion and $\\binom{k}{r}\\le k^r$ give
$(1+u)^k\\le\\sum_{r\\ge0}(ku)^r=1/(1-ku)$.
The upper deviation is at most $ku/(1-ku)$ and the lower deviation at most $ku$, no larger. ∎

**Theorem 3 (Tree summation bound).** Suppose each addition in a fixed binary tree satisfies the relative rounding model with unit roundoff $u$, and every leaf-to-root path contains at most $d$ additions, with $du<1$. Then
$$|\\widehat s-s|\\le\\gamma_d\\sum_i|x_i|.$$

*Proof.* Expanding the tree writes $\\widehat s$ as a sum of each input multiplied by its path's rounding factors. Lemma 2 bounds the difference between each product and one by $\\gamma_d$. Subtract the exact sum and use the triangle inequality. The argument also works with signed inputs; cancellation makes relative error potentially large, which is why the bound uses the absolute sum. ∎

Sequential summation has maximum depth $n-1$ and a balanced tree has depth at most $\\lceil\\log_2n\\rceil$. The theorem is a worst-case absolute estimate. It does not say every balanced result is closer. Its one-operation model assumes no overflow and a suitable treatment of underflow; if a node is subnormal, an additional absolute term may be needed. Exact zero results are allowed when the model is interpreted consistently. Changes in compiler reassociation can replace the tree, invalidating a proof about the original tree.

A bound on the sum's condition number answers another question. When $s\\ne0$, divide the theorem by $|s|$ to get relative error at most $\\gamma_d\\kappa_{\\sum}$. If $s=0$, that relative measure is undefined and an absolute contract is needed. A very large condition number explains why small relative perturbations in inputs can change a small cancelling remainder substantially; it does not excuse a software sign error.

**Worked example 3 (A proved tree bound in a teaching format).** In three-significant-digit decimal round-to-nearest arithmetic, use $u=0.005$ and a balanced tree with four leaves. The depth is two, so $\\gamma_2=0.01/0.99=1/99$. For inputs $(100,0.4,0.4,-100)$ the theorem gives absolute error at most $200.8/99$, about $2.0283$. The earlier carefully chosen tree returns the exact sum $0.8$, hence has zero actual error. There is no contradiction: the theorem bounds all allowed rounding patterns and is deliberately conservative. The example distinguishes a proved uniform bound from the particular realized error.

## Refinement with perturbations rather than an ideal inverse

The exact refinement model earlier in the chapter is useful even when it fails. Suppose the implemented update has an additive perturbation $\\eta_k$:
$$e_{k+1}=Ee_k+\\eta_k,\\qquad \\|E\\|\\le q<1,\\qquad
\\|\\eta_k\\|\\le\\eta.$$
Repeated substitution proves
$$\\|e_k\\|\\le q^k\\|e_0\\|+\\eta\\frac{1-q^k}{1-q}.$$
The proof is just a geometric series: each past perturbation is multiplied by a power of $E$. The limiting floor is at most $\\eta/(1-q)$. Thus a contraction close to one can amplify modest residual or update noise strongly, even though the ideal exact recurrence converges.

This model separates three decisions. A factorization determines the approximate correction operator. Residual precision determines how faithfully the correction signal is seen. Update precision determines whether a correction can alter the stored state. If the update rounds back to the same vector, another iteration with the same precision and formula need not improve it. Record stagnation as a numerical outcome rather than silently treating it as a fulfilled accuracy request.

Compensated summation has a subtler analysis than Theorem 3 because its correction terms depend on rounding relationships between nearby quantities. The earlier leading error statement is a cited result, not a proof obtained by assuming the correction is exact. Its constants and exceptional cases depend on the precise recurrence and evaluation contract. A compiler transformation that removes the compensation as algebraically zero destroys the intended algorithm.

The full root and system existence criteria are developed in [Verified and Interval Computation](verified-interval-computation.md), using closed domains, outward derivative enclosures and explicit contraction bounds. In particular, interval-Newton inclusion must be interpreted with its stated theorem; an interval sequence that merely becomes narrow is not a substitute. This retained reading focuses on the arithmetic contract that makes those later inequalities meaningful.

## Practice with full solutions

### Exercise 1: Pairwise depth
<a id="reproducible-arithmetic-intervals-ex-1"></a>

Eight nonnegative numbers are summed by a balanced binary
tree. How many rounded additions affect any one input, and how does that compare
with a sequential path for the first input?

<details>
<summary>Hint 1</summary>

**Hint.** Count leaf-to-root additions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the longest sequential path.

</details>

<details>
<summary>Solution</summary>

**Solution.** A balanced tree with eight leaves has three addition levels, so
each input participates in three rounded sums. In a left-to-right sequential
sum, the first input is present in all seven additions. Under compatible
one-step assumptions, its worst-case multiplicative rounding pathway therefore
has depth three rather than seven. This comparison is a bound argument, not a
claim about which realized error is smaller for every input list.

</details>

### Exercise 2: An interval quotient
<a id="reproducible-arithmetic-intervals-ex-2"></a>

Let \\(X=[2,3]\\) and \\(Y=[-1,1]\\). Can ordinary interval
division form \\(X/Y\\) as one bounded interval?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the denominator interval.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Values arbitrarily close to zero yield unbounded quotients.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The divisor interval contains zero. Exact quotients with
denominators approaching zero have unbounded magnitude and occur on both sides
of zero. A routine returning a small bounded interval would be unsound. One may
return an extended/disconnected enclosure under an explicitly richer interval
model, or report that the operation is undefined in the ordinary bounded model.

</details>

### Exercise 3: Dependency repair
<a id="reproducible-arithmetic-intervals-ex-3"></a>

Bound \\(x^{2}-2x+1\\) for \\(x \\in [0,2]\\) by naive interval
evaluation and by reformulation.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the polynomial as written.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then complete the square.

</details>

<details>
<summary>Solution</summary>

**Solution.** Naively, \\(x^{2}\\) is \\([0,4]\\) and \\(-2x\\) is \\([-4,0]\\), so adding one
gives \\([-3,5]\\). Algebraically the expression is \\((x-1)^{2}\\). Since \\(x-1\\) lies in
\\([-1,1]\\), its square lies in \\([0,1]\\), which is the exact range. Both enclosures
are inclusive; the second retains more dependency through reformulation.

</details>

### Exercise 4: Refinement matrix
<a id="reproducible-arithmetic-intervals-ex-4"></a>

In the exact stationary model, let
\\(BA=\\operatorname{diag}(0.8,1.1)\\). Does repeated refinement converge for every initial error in
the 2-norm?

<details>
<summary>Hint 1</summary>

**Hint.** Compute the propagation matrix.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its largest absolute diagonal controls the two-norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** The error matrix is \\(I-BA=\\operatorname{diag}(0.2,-0.1)\\), whose induced 2-norm is
\\(0.2<1\\). Therefore \\(\\lVert e_k\\rVert_2\\le 0.2^k\\lVert e_0\\rVert_2\\) and the model converges for every
initial error. This conclusion concerns the stated exact iteration. A real
implementation still needs accurate residual formation and bounded rounding
effects.

</details>

## Bounded project: a reproducible summation dossier

Use exactly three length-\\(65536\\) lists. List A has
\\(x_i=2^((i mod 7)-3)\\). List B repeats the four-term block
\\((2^{53},1,-2^{53},1)\\) exactly \\(16384\\) times. List C is a Fisher--Yates permutation
of B driven by SplitMix64 state \\(20260831\\), with unsigned operations reduced
modulo \\(2^{64}\\) and index \\(j\\) selected by rejection sampling rather than biased
remainder. Store all three lists in hexadecimal binary64 text and hash them.

Implement exactly four reductions: left-to-right, right-to-left, a balanced
pairwise tree that carries the unpaired rightmost value unchanged, and Kahan's
compensated recurrence. Run each list in binary32 and binary64 with every
operation rounded in that declared format, no fused contraction, and a single
thread. Compute the reference by summing the dyadic inputs as exact integer
ratios. The finite work ceiling is \\(3\\cdot 4\\cdot 2=24\\) reductions, plus three exact
references and three hash checks; any nonfinite value or extra/missing element
is failure.

For each case record the exact rational sum, hexadecimal stored result, absolute
error, \\(\\sum \\lvert x_i\\rvert\\), reduction contract, and exceptional behavior. Re-run all 24
reductions once and require identical hexadecimal numerical fields; timing is
outside the equality contract. The conclusion must be the weakest supported
claim—fixed-order bitwise repeatability in the declared environment or
membership in an independently computed enclosure—not a claim that one method
is pointwise best for every list.


## Further exercises

### Exercise 5: Summation condition
<a id="reproducible-arithmetic-intervals-ex-5"></a>

For inputs $(1,-1,10^{-6})$, compute the exact sum and its summation condition number.

<details>
<summary>Hint 1</summary>

**Hint.** Add the signed values exactly.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide their absolute sum by the absolute exact sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** The sum is $10^{-6}$ and the absolute sum is $2+10^{-6}$. Thus $\\kappa_{\\sum}=2\\,000\\,001$. The small remainder is ill-conditioned relative to independent relative input perturbations. This says nothing by itself about the realized rounding of a particular tree.

</details>

### Exercise 6: Rounding depth
<a id="reproducible-arithmetic-intervals-ex-6"></a>

A tree has maximum path depth five and $u=10^{-3}$. Bound its absolute sum error in terms of $\\sum|x_i|$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the tree theorem.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate gamma at depth five.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $5u=0.005<1$, $\\gamma_5=0.005/0.995=1/199$. The bound is $(1/199)\\sum|x_i|$, under the theorem's relative rounding and no-overflow assumptions.

</details>

### Exercise 7: Refinement floor
<a id="reproducible-arithmetic-intervals-ex-7"></a>

If $q=1/2$ and $\\eta=10^{-8}$ in the perturbed refinement recurrence, give the limiting error bound.

<details>
<summary>Hint 1</summary>

**Hint.** Use the geometric accumulation formula.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide eta by one minus q.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $q^k\\|e_0\\|+2\\times10^{-8}(1-q^k)$. Its limiting upper bound is $2\\times10^{-8}$. A sharper actual result may occur, but this model does not guarantee a smaller floor.

</details>

### Exercise 8: Interval product
<a id="reproducible-arithmetic-intervals-ex-8"></a>

Compute the exact interval product $[-2,1][3,4]$.

<details>
<summary>Hint 1</summary>

**Hint.** List all four endpoint products.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take the smallest and largest.

</details>

<details>
<summary>Solution</summary>

**Solution.** The products are $-6,-8,3,4$, so the hull is $[-8,4]$. These integer endpoints are exactly representable in ordinary binary formats; the implementation must nevertheless retain its outward-rounding contract for general inputs.

</details>

### Exercise 9: Dependency and uncertainty
<a id="reproducible-arithmetic-intervals-ex-9"></a>

Why does $X-X$ on $X=[2,3]$ give $[-1,1]$ although $x-x=0$?

<details>
<summary>Hint 1</summary>

**Hint.** Ask whether the two interval operands encode one shared point.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Natural interval operations forget that relationship.

</details>

<details>
<summary>Solution</summary>

**Solution.** Subtraction permits every pair of independently chosen values from $X$, giving endpoints $2-3=-1$ and $3-2=1$. The original expression uses the same point twice and is identically zero. The enclosure is sound but forgets dependency; it is not evidence that the true expression is uncertain.

</details>

### Exercise 10: Repeatability contract
<a id="reproducible-arithmetic-intervals-ex-10"></a>

A parallel sum changes its tree between runs but always encloses the exact sum in a validated interval. What may be claimed?

<details>
<summary>Hint 1</summary>

**Hint.** Separate stored bits from mathematical containment.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Read the permitted comparison level.

</details>

<details>
<summary>Solution</summary>

**Solution.** It supports the validated containment claim, and possibly a declared conclusion-level reproducibility contract. It does not establish fixed-tree or bitwise repeatability. Widths and endpoints may vary while both enclosures remain sound.

</details>

## Sources

[IEEE 754-2019](https://standards.ieee.org/ieee/754/6210/) identifies the arithmetic standard; conformance of a particular language, compiler, hardware, elementary-function library or subnormal policy must be established separately. No clause locator for every implementation claim is asserted. Rump, [Verification methods](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf), develops enclosed arithmetic and dependency. Higham, [Summation, chapter 4 of Accuracy and Stability of Numerical Algorithms](https://epubs.siam.org/doi/10.1137/1.9780898718027.ch4), is the cited dependency for the compensated-summation leading-error statement; its full recurrence analysis is not supplied here. The tree-depth and perturbed-refinement bounds used directly in this reading are proved above.

## Summary

Operation order determines a floating-point program. Tree-depth analysis bounds one part of its rounding, while conditioning describes sensitivity of the mathematical target. Compensation and mixed precision offer different ways to retain information; neither eliminates domain, overflow or input uncertainty. Outward interval arithmetic supplies inclusion under a proved execution contract. The main interval chapter adds existence and uniqueness certificates, and the software-audit chapter records which of these claims a computation actually supports.
`;export{e as default};