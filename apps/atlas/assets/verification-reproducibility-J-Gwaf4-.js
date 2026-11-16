var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: verification-reproducibility
status: draft
title: "Verification, Reproducibility, and Responsible Experiments"
level: advanced-undergraduate
estimated_minutes: 100
license: CC BY-SA 4.0
---

# Verification, Reproducibility, and Responsible Experiments

## Four sources of disagreement

A numerical result can disagree with reality or another implementation because of:

1. **mathematical approximation error:** replacing an exact target by a finite rule;
2. **implementation error:** code does not implement the intended rule;
3. **input or statistical uncertainty:** data and estimated parameters vary;
4. **model discrepancy:** the mathematical problem omits or idealizes relevant mechanisms.

Roundoff and algebraic-solver error are subparts of computation, while discretization error comes from the finite approximation. These categories interact, but merging them into one “uncertainty” number hides the remedy.

## Verification versus validation

**Verification** asks whether equations and algorithms were solved as intended. **Validation** asks whether the model adequately represents its intended setting. A manufactured solution verifies assembly but cannot validate a heat-transfer law. Agreement with one dataset may support validation but can also reflect calibration, confounding, or compensating errors.

The claim ladder is:

- exact identity or theorem;
- proved bound under hypotheses;
- deterministic computation with residual/error evidence;
- convergence observation across refinements;
- empirical comparison;
- application claim under model and data assumptions.

Every report should state where it stops.

## A reproducible experiment contract

A rerunnable numerical experiment records:

- exact mathematical target and parameter units;
- input data, preprocessing, and hashes or embedded small cases;
- algorithm, numeric format, tolerances, and stop rules;
- software/runtime versions and relevant hardware behavior;
- random generator and seed when sampling is used;
- raw diagnostic table, not only a plot;
- expected invariant, bound, or convergence pattern;
- failure states and how they are surfaced.

Bitwise equality across hardware may be unnecessary or impossible for parallel reductions. If so, specify the reproducibility level: same mathematical conclusion, bounded numerical difference, or bitwise output under a fixed environment.

## Independent checks

An effective check fails differently from the primary method. Examples include:

- bisection bracket alongside Newton iteration;
- QR result alongside normal-equation code;
- exact rational small case alongside floating-point general code;
- conservation balance alongside pointwise error;
- primal feasible value and dual bound;
- manufactured solution and mesh refinement;
- automatic derivative and centered directional difference.

Two programs copied from the same formula may share a sign or indexing error. Independence concerns reasoning pathways, not filenames.

## Refinement studies

Suppose \\(Q_h=Q+C h^p+o(h^p)\\). Three resolutions permit an order diagnostic. If the differences shrink by about \\(2^p\\) when \\(h\\) halves, Richardson extrapolation estimates

\\(Q \\approx Q_{h/2}+(Q_{h/2}-Q_h)/(2^p-1)\\).

The method assumes the leading error expansion is active. It can fail before the asymptotic regime, after roundoff dominates, at nonsmooth points, or when a refinement changes another parameter such as solver tolerance or geometry.

<a id="worked-order-audit"></a>

### Worked example 1: order audit

Endpoint approximations are \\(0.8120,0.8030,0.80075\\) at steps \\(h,h/2,h/4\\). Differences are \\(0.009\\) and \\(0.00225\\), ratio four, consistent with order two. Extrapolating from the finer pair gives

\\(0.80075+(0.80075-0.8030)/3=0.80000\\).

This neat result should invite a test at \\(h/8\\), not end the audit.

## Property-based mathematical tests

Example tests confirm selected outputs. Property tests check invariants across bounded families:

- interpolation returns every node value within a declared tolerance;
- quadrature weights sum to interval length;
- a branch-and-bound lower bound never exceeds the best feasible value in minimization;
- a residual-merit line search decreases its merit;
- changing scale consistently transforms a computed result;
- seeded deterministic routines repeat exactly.

Random testing remains finite evidence. Use deterministic seeds and preserve the smallest counterexample when a property fails.

## Statistical uncertainty is different

Repeated simulation can estimate Monte Carlo variability. It does not measure discretization bias unless the design varies the discretization. A bootstrap quantifies variation under a resampling model; it does not detect a systematically wrong numerical solver or an unrepresentative dataset.

Report separate rows for sampling variation, parameter uncertainty, numerical tolerance, discretization, and structural model discrepancy. Some rows may be unknown rather than forced into a false combined standard error.

## Reproducibility hazards

- Parallel reduction changes addition order.
- Unspecified random seeds or generator versions change paths.
- Adaptive algorithms branch on rounded comparisons.
- Compiler optimizations can contract operations or reassociate expressions.
- Data cleaning and unit conversion may be outside the recorded script.
- A cached intermediate can survive changed inputs.

The response is not to ban optimization or parallelism. Define invariants and tolerances appropriate to the claim, and record enough state to investigate deviations.

## A numerical incident template

When results disagree:

1. preserve both outputs and environments;
2. reduce to the smallest failing input;
3. classify whether the target, approximation, implementation, or input differs;
4. check dimensions, units, signs, and boundary indices;
5. compare exact or higher-precision small cases;
6. inspect residual and invariant histories;
7. vary one scale at a time;
8. document root cause and add a regression test.

Do not “fix” a discrepancy by loosening a tolerance until the reason is known.

## Common errors

- Equating deterministic reruns with correctness.
- Calling two rounded displays equal without retaining full diagnostic values.
- Changing mesh, timestep, tolerance, and model simultaneously in a refinement study.
- Treating a statistical confidence interval as containing discretization or model error automatically.
- Omitting failed parameter cases from a report.

## Preparation and a mathematical evidence contract

Required preparation is first-year calculus and linear algebra, basic floating-point error, and the numerical method being inspected. The [finite-precision chapter](finite-precision-conditioning.md) supplies conditioning and rounding; [interval verification](verified-interval-computation.md) supplies certificates when a proof bound is needed. This retained reading develops the reasoning used by the [software-audit capstone](numerical-capstone-software-audit.md). Reading an exact case, an empirical table and a theorem with hypotheses requires different habits, even when all three appear in one report.

**Definition 1 (Mathematical experiment contract).** A contract specifies a target object $Q$, the finite algorithm used to approximate it, the represented input, the quantities measured, and a rule relating those measurements to the intended claim. A target might be an integral, a solution at a specified time, a coefficient vector, or a physical prediction. Moving between these targets requires a mathematical or empirical link; matching a coefficient residual cannot silently establish an application prediction.

An input hash identifies stored bytes. It does not say those bytes contain the intended units or correct preprocessing. Likewise, a code revision identifies an implementation but does not prove the formulas correct. An evidence contract makes these modest facts useful by attaching them to an equation, a domain and an acceptance relation. A replay can then detect changed artifacts without confusing identity with correctness.

For a boundary-value computation, write the domain, boundary split, forcing, coefficient law and output functional explicitly. “The Poisson solution” is insufficient when two programs use different sign conventions or one solves on a rounded geometry. For an ODE, give the final physical time and event policy; a step count is not a time. For a randomized quadrature rule, give the sampling distribution as well as the generator state. A fixed seed cannot repair sampling from the wrong distribution.

## Why residuals need conditioning

**Proposition 2 (Linear residual transfer).** Let $A$ be an invertible matrix and let $x$ solve $Ax=b$. For any computed vector $\\widehat x$ with exact residual $r=b-A\\widehat x$,
$$x-\\widehat x=A^{-1}r,\\qquad
\\|x-\\widehat x\\|\\le\\|A^{-1}\\|\\|r\\|.$$

*Proof.* Subtract the equations to obtain $A(x-\\widehat x)=r$ and apply the inverse. The norm inequality follows from the definition of the subordinate operator norm. ∎

This elementary result specifies what a residual can establish. It tests the assembled equations and is amplified by their inverse. If the residual itself is formed inaccurately, the measured number may be smaller than the exact residual. If $A$ approximates a differential operator, the theorem still concerns its finite-dimensional solution. Domain, discretization and model terms remain outside it.

**Worked example 2 (A residual hides a large state error).** Let
$A=\\operatorname{diag}(1,10^{-8})$, $b=(1,10^{-8})$, and $\\widehat x=(1,0)$. The exact solution is $(1,1)$, but $r=(0,10^{-8})$. Its infinity norm is tiny while the forward error has norm one. Since $\\|A^{-1}\\|_\\infty=10^8$, the proposition gives the sharp bound one. Printing eight small residual digits without conditioning would hide the entire second component's error.

For an output $Q(x)=c^{\\mathsf T}x$, one can often avoid bounding the whole vector. Solve the adjoint equation $A^{\\mathsf T}z=c$. Then
$$Q(x)-Q(\\widehat x)=z^{\\mathsf T}r.$$
The proof is the identity $z^{\\mathsf T}A(x-\\widehat x)=c^{\\mathsf T}(x-\\widehat x)$. A different output has a different adjoint and therefore different sensitivity to the same residual. This is why a solver's global residual tolerance should be linked to the reported decision rather than chosen only for an attractive norm history.

**Worked example 3 (An output with unequal residual weights).** For
$A=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$ and $Q(x)=x_2$, the adjoint is $z=(1/3,2/3)$. With exact residual $r=(0.03,-0.03)$, the output error is $0.01-0.02=-0.01$. Taking the sum of residual entries would give zero and miss this output error. The cancellation in a conservation diagnostic and the cancellation in an output functional are not interchangeable.

## Refinement is an assumption to inspect

**Theorem 3 (Richardson cancellation).** Suppose a fixed output has expansion
$$Q_h=Q+Ch^p+O(h^{p+\\alpha}),\\qquad p>0,\\quad\\alpha>0,$$
uniformly over the refinement sequence. Then
$$Q_{\\rm ext}=\\frac{2^pQ_{h/2}-Q_h}{2^p-1}
=Q+O(h^{p+\\alpha}).$$

*Proof.* Substitute the two expansions. The leading terms cancel because
$2^pC(h/2)^p=Ch^p$. Both remainder terms have order $h^{p+\\alpha}$, and the fixed nonzero denominator does not alter that order. ∎

The theorem is conditional on the expansion, rather than a proof that every table with the expected ratio has it. For example, $Q_h=Q+B+Ch^p$ with a fixed bias $B$ produces the expected ratio at every level but converges to $Q+B$. A wrong boundary condition, wrong integration endpoint or wrong unit conversion can supply such a shared bias. An exact reference or independently derived target is therefore especially valuable.

Vary one scale at a time when diagnosing a plateau. If halving the mesh no longer changes the output, tighten the algebraic tolerance on one fixed mesh. If that changes the result, the plateau is not evidence that the spatial discretization has converged. Then hold the algebraic budget sufficiently below the measured spatial error and resume mesh refinement. Similar reasoning separates time error, quadrature error and iteration error.

An observed high order can also be accidental. A quadratic manufactured solution is reproduced exactly by a centered second derivative, so it supplies no nonzero leading truncation coefficient. Add a smooth nonpolynomial case and a boundary-sensitive case rather than attributing infinite order to a zero error table. Near shocks, compare in a norm compatible with small jump displacements; maximum error can stay order one while an integral norm decreases.

## Combining bounds and probabilities honestly

**Proposition 4 (Deterministic budget).** If three stated error terms in the same units are bounded by $D$, $A$ and $R$, then the total error obtained by adding those three differences is at most $D+A+R$.

*Proof.* Add and subtract the intermediate target values and apply the triangle inequality. Correlation does not invalidate this worst-case deterministic bound; it may only make it conservative. ∎

Adding standard errors is different. If random errors $X,Y$ have finite second moments,
$$\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)
+2\\operatorname{Cov}(X,Y).$$
This follows by expanding the centered square and taking expectations. Ignoring covariance needs an assumption such as independence or zero covariance; it cannot be justified by labelling the two rows differently. Deterministic discretization bias is not automatically a random zero-mean error with a standard deviation.

If events $E_1,E_2$ have failure probabilities at most $\\alpha_1,\\alpha_2$, the union bound gives
$\\Pr(E_1\\cup E_2)\\le\\alpha_1+\\alpha_2$ without independence. This can combine coverage statements conservatively under their actual assumptions, but it does not turn uncertain model discrepancy into a bounded event. State the probability space, what is held fixed and which data generate randomness.

**Worked example 4 (Two confidence statements).** Suppose one statistical interval covers a parameter with probability at least $0.97$ and another at least $0.98$ under the same declared data-generating model. Both cover simultaneously with probability at least $1-0.03-0.02=0.95$. No independence is needed for this lower bound. It says nothing about an unmodelled numerical bias, and it is not a guarantee that the two particular printed intervals contain their targets.

## Failure records as mathematical evidence

A failed calculation can answer a precise question. An explicit heat step beyond its proven restriction demonstrates a numerical-design limitation if the unstable mode and multiplier are shown. A singular fixture demonstrates error propagation through an interface only if the intended failure is returned and downstream code cannot consume a success value. An interval test with contraction bound above one is inconclusive about uniqueness; it is not a counterexample to uniqueness.

Keep the first failing state and the comparison that failed. An iteration cap, a rejected domain evaluation and an arithmetic overflow have different causes and remedies. Replacing all of them by a final “did not converge” message loses the information needed to distinguish mathematics from implementation. On the other hand, a fully reproducible failure should not be hidden because the usual case succeeds.

A fair report includes the same output definition across methods, full diagnostic values before display rounding, actual computational work and every documented exception. Missing runs stay missing. An expected-failure case remains part of the evidence table and is marked according to its declared purpose. This permits a reader to reconstruct the argument without guessing which uncomfortable results were omitted.

## Practice with solutions

### Exercise 1: Classify errors
<a id="verification-reproducibility-ex-1"></a>

A finite-element code passes a manufactured solution, but field observations disagree. What has been learned?

<details>
<summary>Hint 1</summary>

**Hint.** Identify which equations the manufactured case checks.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** List physical assumptions outside that comparison.

</details>

<details>
<summary>Solution</summary>

**Solution.** The test supports implementation verification for that constructed case. It does not validate constitutive laws, boundary data, parameters, or observational processing. Those remain candidate explanations.

</details>

### Exercise 2: Independent derivative check
<a id="verification-reproducibility-ex-2"></a>

Why compare \\(g^{\\mathsf T} v\\) with a centered finite difference for several \\(v\\)?

<details>
<summary>Hint 1</summary>

**Hint.** Use the definition of a directional derivative.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Vary directions and step sizes.

</details>

<details>
<summary>Solution</summary>

**Solution.** It tests the implemented directional derivative without comparing every coordinate individually. Several directions can expose indexing and transpose errors. Step-size variation is necessary because truncation and rounding can otherwise mask disagreement.

</details>

### Exercise 3: Reproducibility level
<a id="verification-reproducibility-ex-3"></a>

Two parallel runs differ in the last few bits but satisfy the same residual bound and decision threshold. Is the experiment necessarily irreproducible?

<details>
<summary>Hint 1</summary>

**Hint.** Read the declared equality contract.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Bitwise equality and preserved conclusions differ.

</details>

<details>
<summary>Solution</summary>

**Solution.** Not under a declared bounded-numerical or conclusion-level contract. It would fail a bitwise contract. The required level must be specified before interpreting the difference.

</details>

## Further exercises

### Exercise 4: A common bias
<a id="verification-reproducibility-ex-4"></a>

Let $Q_h=Q+0.1+3h^2$. What refinement ratio is observed, and what is its limit?

<details>
<summary>Hint 1</summary>

**Hint.** Subtract two levels to remove constant terms.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The bias survives refinement.

</details>

<details>
<summary>Solution</summary>

**Solution.** The differences are $3h^2(1-1/4)$ and one quarter of that, so the ratio is four, suggesting order two. Yet $Q_h\\to Q+0.1$, not $Q$. The table verifies the varying discretization term but cannot detect the common bias.

</details>

### Exercise 5: Exact discrete polynomial
<a id="verification-reproducibility-ex-5"></a>

Why does a central second difference reproduce the second derivative of $u=x(1-x)$ exactly?

<details>
<summary>Hint 1</summary>

**Hint.** Expand the neighboring quadratic values.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** There is no fourth-derivative remainder.

</details>

<details>
<summary>Solution</summary>

**Solution.** The constant and linear terms cancel and the quadratic term gives exactly $u''=-2$. Its fourth derivative vanishes, so the truncation defect is zero. The example is useful for assembly but cannot measure a nonzero second-order error coefficient.

</details>

### Exercise 6: Error budget
<a id="verification-reproducibility-ex-6"></a>

Proved bounds are $D=0.02$, $A=0.003$, $R=0.0001$. Give the total deterministic bound.

<details>
<summary>Hint 1</summary>

**Hint.** Use a worst-case sum.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All three terms must use the same units and target chain.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $0.0231$ by the triangle inequality. It requires all three stated terms to be genuine bounds for the same target decomposition; a nominal confidence width cannot silently be substituted for one of them.

</details>

### Exercise 7: Coverage combination
<a id="verification-reproducibility-ex-7"></a>

Two failure probabilities are at most $0.01$ and $0.04$. Bound their union without assuming independence.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the union bound.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtract the result from one for simultaneous success.

</details>

<details>
<summary>Solution</summary>

**Solution.** The union probability is at most $0.05$, so simultaneous success is at least $0.95$. Dependence can make this conservative, but cannot invalidate the bound when both marginal statements hold on the same probability space.

</details>

### Exercise 8: Adjoint sensitivity
<a id="verification-reproducibility-ex-8"></a>

For $A=\\operatorname{diag}(2,4)$ and output $Q(x)=x_1+2x_2$, find its adjoint and the output error for residual $(0.02,-0.04)$.

<details>
<summary>Hint 1</summary>

**Hint.** Solve the transposed diagonal system.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Pair its solution with the residual.

</details>

<details>
<summary>Solution</summary>

**Solution.** The adjoint is $z=(1/2,1/2)$ since $A^{\\mathsf T}z=(1,2)$. Thus the output error is $(0.02-0.04)/2=-0.01$. A small residual sum has meaning only after its correct output weights are known.

</details>

### Exercise 9: Sampling versus bias
<a id="verification-reproducibility-ex-9"></a>

A Monte Carlo run doubles sample count repeatedly while using a fixed biased discretization. Does its shrinking sampling uncertainty prove the intended integral accurate?

<details>
<summary>Hint 1</summary>

**Hint.** Separate the expected computed estimator from the mathematical integral.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sampling fluctuation and fixed numerical bias respond to different refinements.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Increasing sample count reduces sampling fluctuation around the discretized estimator's expectation. A fixed quadrature, domain or model bias can remain. Vary the numerical approximation independently or prove its bias bound, then state the combined conclusion under the sampling assumptions.

</details>

### Exercise 10: Failed inclusion
<a id="verification-reproducibility-ex-10"></a>

An interval routine returns a valid image wider than its target box. Has it proved the target has no root?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish a failed sufficient condition from a successful exclusion.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A wide enclosure may be caused by dependency.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Failure of self-inclusion removes that existence or uniqueness certificate. It does not imply nonexistence. A separate range exclusion or disjoint interval-Newton test could prove absence; otherwise sharpen, subdivide or report inconclusive.

</details>

## Sources

The residual, adjoint, Richardson, deterministic-budget and probability calculations are derived here. Roache, *Verification and Validation in Computational Science and Engineering* (1998), remains a terminology reference; an exact consulted locator for the adopted definitions is not asserted. Higham, [Accuracy and Stability of Numerical Algorithms, second edition](https://epubs.siam.org/doi/book/10.1137/1.9780898718027), develops finite-precision and conditioning analysis. Rump, [Verification methods](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf), treats rigorous numerical certificates. No mathematical source certifies a particular unreported software execution.

## Summary

Verification connects the specified equations to their finite approximation and implementation; validation assesses their intended physical use. Residuals need conditioning, refinement needs an error expansion, and reproducibility needs a declared equality contract. Deterministic bounds and statistical coverage require different combination rules. A credible report keeps the raw comparisons, failed cases and unresolved assumptions visible. The software-audit capstone applies these distinctions to complete numerical projects.
`;export{e as default};