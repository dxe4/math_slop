var e=`---
parent_id: book-statistical-learning-generalization
chapter_id: rademacher-complexity
title: "Rademacher Complexity"
level: graduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Rademacher Complexity

VC dimension provides uniform convergence bounds for binary classifiers, but it has limitations. It is defined only for binary classification, it is worst-case over data distributions, and it does not capture data-dependent behavior. Rademacher complexity addresses all three issues. It applies to real-valued function classes, it is computed on the actual sample, and it can yield tighter bounds when the data are well-behaved.

## Definition

Let $F$ be a class of real-valued functions $f: Z \\to \\mathbb{R}$. Let $S = (Z_{1}, \\dots, Z_{n})$ be a fixed sample. The **empirical Rademacher complexity** of $F$ on $S$ is

$$\\hat{\\mathfrak{R}}_{S}(F) = \\mathbb{E}_{\\sigma}\\left[\\sup_{f \\in F} \\frac{1}{n} \\sum_{i=1}^{n} \\sigma_{i} f(Z_{i})\\right],$$

where $\\sigma_{1}, \\dots, \\sigma_{n}$ are independent Rademacher random variables, each taking values $+1$ and $-1$ with probability $1/2$.

The **Rademacher complexity** is the expectation over the sample:

$$\\mathfrak{R}_{n}(F) = \\mathbb{E}_{S}[\\hat{\\mathfrak{R}}_{S}(F)].$$

Intuition: a rich function class can correlate strongly with random noise; a constrained class cannot. The supremum measures how well the class can align with a random sign pattern. Large complexity means the class can fit noise, which suggests poor generalization.

## Symmetrization and uniform convergence

Under IID sampling, bounded functions, and standard measurability conditions, symmetrization gives the expected one-sided deviation bound

$$\\mathbb{E}_{S}\\left[\\sup_{f \\in F}\\left(\\mathbb{E}[f(Z)] - \\frac{1}{n} \\sum_{i=1}^{n} f(Z_{i})\\right)\\right] \\le 2 \\mathfrak{R}_{n}(F).$$

Concentration converts this expectation statement into high-probability variants. For bounded functions $f(Z) \\in [a, b]$, McDiarmid's inequality gives: with probability at least $1 - \\delta$,

$$\\sup_{f \\in F}\\left(\\mathbb{E}[f(Z)] - \\frac{1}{n} \\sum_{i=1}^{n} f(Z_{i})\\right) \\le 2 \\mathfrak{R}_{n}(F) + (b - a) \\sqrt{\\frac{\\log(1/\\delta)}{2n}}.$$

Two-sided bounds add a factor of $2$ inside the logarithm. Constants depend on whether one uses expected or empirical complexity and one- or two-sided bounds. Do not quote a hybrid formula without naming the version.

## Linear classifiers: a concrete bound

For linear functions $f_{w}(x) = w^{T}x$ with $\\|w\\|_{2} \\le B$ and inputs $\\|x_{i}\\|_{2} \\le C$, the empirical Rademacher complexity satisfies

$$\\hat{\\mathfrak{R}}_{S}(F) \\le \\frac{BC}{\\sqrt{n}}.$$

**Proof.** Move the supremum through the inner product:

$$\\hat{\\mathfrak{R}}_{S}(F) = \\mathbb{E}_{\\sigma}\\left[\\sup_{\\|w\\|_{2} \\le B} w^{T}\\left(\\frac{1}{n}\\sum_{i=1}^{n}\\sigma_{i}x_{i}\\right)\\right] = \\frac{B}{n} \\mathbb{E}_{\\sigma}\\left\\|\\sum_{i=1}^{n}\\sigma_{i}x_{i}\\right\\|_{2}.$$

The equality uses the fact that $\\sup_{\\|w\\|_{2} \\le B} w^{T}v = B\\|v\\|_{2}$, attained at $w = Bv/\\|v\\|_{2}$ when $v \\neq 0$. By Jensen's inequality,

$$\\mathbb{E}_{\\sigma}\\left\\|\\sum_{i=1}^{n}\\sigma_{i}x_{i}\\right\\|_{2} \\le \\sqrt{\\mathbb{E}_{\\sigma}\\left\\|\\sum_{i=1}^{n}\\sigma_{i}x_{i}\\right\\|_{2}^{2}} = \\sqrt{\\sum_{i=1}^{n}\\|x_{i}\\|_{2}^{2}} \\le \\sqrt{nC^{2}} = C\\sqrt{n}.$$

The cross terms vanish because $\\mathbb{E}[\\sigma_{i}\\sigma_{j}] = 0$ for $i \\neq j$. Combining gives $\\hat{\\mathfrak{R}}_{S}(F) \\le BC/\\sqrt{n}$.

This shows why norm constraints control effective capacity even when parameter values are continuous. The bound depends on the product $BC$, not on the dimension $d$. In high dimensions, if the data and weights are constrained to bounded norms, Rademacher complexity can be small.

## Comparison with VC dimension

For binary classifiers, the finite-trace argument proved below bounds empirical complexity by the square root of twice log growth count divided by n. Sauer–Shelah then gives a finite-VC certificate. Sharper bounds removing a logarithmic factor require entropy and chaining arguments, developed separately rather than inferred from a parameter count. The empirical quantity depends on the actual evaluations and can distinguish classes having the same worst-case VC dimension. Ordinary binary VC dimension does not directly measure a real-valued score class.

## Worked example: numerical evaluation

Let $d = 100$, $B = 1$, and $n = 1000$, and assume $\\|X\\|_2\\le C=1$ almost surely. The samplewise linear-class bound therefore holds for every realized sample and gives

$$\\hat{\\mathfrak{R}}_{S}(F) \\le \\frac{1 \\cdot 1}{\\sqrt{1000}} \\approx 0.0316.$$

Every $f_w(X)$ lies in $[-1,1]$, whose range width is $2$. Because the same $0.0316$ complexity bound holds for every sample, it also bounds the expected Rademacher complexity. The corresponding expected-complexity two-sided bound, using a union bound for the two directions and $\\delta = 0.05$, is approximately

$$2 \\cdot 0.0316 + 2\\sqrt{\\frac{\\log(2/0.05)}{2000}} \\approx 0.0632 + 2\\sqrt{\\frac{3.689}{2000}} \\approx 0.149.$$

This controls uniform deviations of the real-valued score class itself. It cannot be compared directly with a binary VC bound by substituting the ambient dimension: a fair comparison must first specify a common loss class, its range or Lipschitz contraction, and the exact VC or pseudo-dimension theorem and constants.

## Common errors

- **Confusing empirical and expected complexity.** Empirical complexity is computed on a fixed sample; expected complexity averages over samples. High-probability bounds typically use empirical complexity plus a concentration term.
- **Ignoring the boundedness assumption.** The bounded-loss high-probability theorem needs a common range. Expected symmetrization can extend under integrable measurable suprema, but it alone supplies no bounded-differences concentration for unbounded losses.
- **Quoting hybrid formulas.** Some references bound the two-sided deviation by $2\\mathfrak{R}_{n}(F) + \\sqrt{\\log(2/\\delta)/(2n)}$; others use $4\\hat{\\mathfrak{R}}_{S}(F) + 3\\sqrt{\\log(4/\\delta)/(2n)}$. The constants differ by version; state which one you are using.

## Expected symmetrization with every comparison visible

Assume a countable class of functions with values in a common finite interval, or a pointwise-separable version as in the VC chapter. Let an independent ghost sample have the same size as the original. The population mean of each function is the ghost empirical mean averaged over the ghost sample. Moving that expectation outside a supremum can only increase it, so the expected upper empirical-to-population discrepancy is at most the expected supremum of ghost mean minus original mean.

Independently swapping each original-ghost pair preserves their joint law. Represent those swaps by fair signs. For a fixed sign realization, the supremum of a difference of two sums is at most the sum of their separate suprema. The ghost term has expected complexity equal to the original term, and negating all signs preserves their law. Therefore
$$E\\sup_f(Pf-P_nf)
\\le E\\sup_f(P_n'f-P_nf)\\le2\\mathfrak R_n(F).$$
Boundedness justifies all expectations and conditional comparisons. This is a one-sided supremum theorem, using the no-absolute-value definition above. Applying it separately to the negative class gives the other direction, since its Rademacher complexity is equal by sign symmetry.

A singleton class has empirical Rademacher complexity zero: averaging the signed sum of its one fixed evaluation vector gives zero. This does not force that function's empirical mean to equal its population mean. The expected one-sided gap is zero, but its positive random fluctuations need concentration. Keeping the one-sided expectation and the random two-sided gap distinct avoids an apparent paradox.

## Bounded differences proved through a martingale

For completeness, suppose a measurable function G of independent inputs changes by at most c i when input i is replaced. Reveal the inputs one at a time and form the Doob martingale of conditional expectations of G. Conditional on the previous inputs, the next martingale increment has mean zero and lies in an interval of width at most c i: integrate the same future inputs when comparing any two possible current values. The bounded-variable exponential lemma then gives a conditional moment-generating-function bound with exponent lambda squared c i squared divided by eight.

Iterate conditional expectations over the martingale increments, apply exponential Markov inequality and minimize in the tilt. The upper-tail bound is exp of minus twice t squared divided by the sum of the c i squared. The proof needs independence to use a common future distribution under coordinate replacement; it is not a theorem for arbitrary dependent inputs.

For G equal to the upper uniform gap, changing one observation changes every empirical mean by at most interval width divided by n, so the same is true of its supremum. Combining this concentration with expected symmetrization proves the expected-complexity high-probability theorem above. Apply the identical argument to the lower uniform gap and allocate half the failure budget to each to obtain its two-sided version.

## An empirical-complexity version with explicit constants

The empirical Rademacher complexity itself has the same replacement sensitivity: for any sign vector the change of a signed function evaluation is at most interval width, and a supremum changes by at most that bound. Averaging over signs and dividing by n preserves the bound. Thus its expectation exceeds its realized value by more than interval width times the usual square-root radius only on a controlled lower-tail event.

Allocate failure probability delta over three events: concentration of the upper gap, the lower gap and the lower tail of empirical complexity. On their common success event, replace expected complexity by empirical complexity plus its concentration allowance. The two gap bounds give
$$\\sup_f|Pf-P_nf|
\\le2\\widehat{\\mathfrak R}_S(F)
+3(b-a)\\sqrt{\\frac{\\log(3/\\delta)}{2n}}.$$
The factor three multiplies one allowance from the gap and twice the allowance from replacing expected complexity. This is the particular empirical two-sided version proved here. Other constants can be valid under other conventions; this proof does not combine an empirical leading term with a concentration constant derived for expected complexity.

## A finite evaluation dictionary bound

For a fixed sample, suppose a finite set of M evaluation vectors has Euclidean norm at most r times square root n. For one vector v, independent signs and the inequality cosh t at most exp of t squared over two give
$$E_\\sigma e^{\\lambda\\sum_i\\sigma_i v_i}\\le
e^{\\lambda^2\\|v\\|^2/2}.$$
The hyperbolic-cosine inequality follows by applying the centered unit-range exponential lemma to a fair sign, rescaled to range width two. Bounding the exponential of the maximum by the sum of exponentials and using Jensen yields expected maximum at most log M divided by lambda plus lambda n r squared divided by two. Minimize over positive lambda and divide by n. The result is r times the square root of twice log M divided by n; for M equal to one the signed expectation is exactly zero.

For a binary class, on a fixed input sample there are at most the growth-function number of evaluation vectors, each with norm at most square root n. This gives the VC comparison promised earlier. It also shows why literal parameter coordinates are absent: only the realized evaluation vectors enter. A data-dependent dictionary created after the sample can have a small evaluation count without the original class being fixed; using that selected dictionary in a population theorem needs an independent or simultaneous argument.

## Lipschitz contraction on a fixed sample

Let each coordinate map phi i be L-Lipschitz. The empirical complexity of the transformed evaluation vectors is at most L times that of the original vectors. Here is the key one-coordinate comparison. Hold all other signs fixed and call their contribution A of v. Averaging the remaining sign produces half the sum of the suprema of A plus phi of the chosen coordinate and A minus phi of that coordinate. Choose vectors arbitrarily close to those two suprema. Their combined transformed contribution is at most their two A values plus L times the absolute difference of their chosen coordinates.

Choose the orientation of that difference and bound the result by the sum of the suprema of A plus L times the coordinate and A minus L times it. Let the near-maximizer error tend to zero. This proves that replacing one coordinate map by its scaled identity cannot decrease the sign-averaged supremum. Repeat for every coordinate to prove the contraction inequality. For this no-absolute-value definition, a fixed offset of each coordinate has zero sign expectation, so no hidden zero-offset assumption is needed. Absolute-supremum formulations use different conventions.

For a loss whose dependence on prediction is L-Lipschitz, condition on the observed outcomes and apply this comparison to the score evaluation class. Then average over observations if expected complexity is needed. Boundedness of the resulting loss class remains necessary for the concentration theorem; contraction by itself does not supply a bounded range.

### Worked example: a bounded square-loss class

Suppose outcomes have absolute value at most Y, inputs have norm at most C and linear coefficients have norm at most B. Scores then have absolute value at most B C. Factoring the difference of two squares bounds loss change by $2(Y+BC)$ times the score change. The loss is nonnegative and at most $(Y+BC)^2$. Contraction and the linear-class norm calculation therefore bound expected loss complexity by $2(Y+BC)BC/\\sqrt n$. Insert this value and the declared loss range in the expected-complexity deviation theorem. A dimension-free expression is possible because both the input and coefficient norms were bounded; arbitrary high-dimensional data do not inherit those constants automatically.

### Worked example: zero complexity with nonzero sampling error

Take a singleton class containing the function f of a binary observation equal to that observation itself. For every sample its empirical Rademacher complexity is zero, because there is no supremum choice to correlate with signs. Under an iid fair-bit law, its empirical average still fluctuates around one half. The high-probability theorem retains its concentration term and correctly allows that fluctuation. Complexity measures the additional search over a class; it does not remove the sampling variability of one fixed measurement.

## Practice exercises

<a id="rademacher-complexity-legacy-1"></a>

### Exercise 1

Prove that $\\sup_{\\|w\\|_{2} \\le B} w^{T}v = B\\|v\\|_{2}$ for $v \\in \\mathbb{R}^{d}$.

<details><summary>Hint 1</summary>

Apply the norm inequality and identify an attaining vector.

</details>

<details><summary>Hint 2</summary>

Treat the zero vector separately.

</details>

<details><summary>Full solution</summary>

By Cauchy–Schwarz, $w^{T}v \\le \\|w\\|_{2}\\|v\\|_{2} \\le B\\|v\\|_{2}$. Equality is attained at $w = Bv/\\|v\\|_{2}$ when $v \\neq 0$. If $v = 0$, both sides are zero.

</details>

<a id="rademacher-complexity-legacy-2"></a>

### Exercise 2

Let $F$ be the class of functions $f(x) = ax$ on $\\mathbb{R}$ with $|a| \\le 2$, and let the sample be $S = \\{-1, 0, 1\\}$. Compute an upper bound on $\\hat{\\mathfrak{R}}_{S}(F)$.

<details><summary>Hint 1</summary>

Only the first and third signs enter.

</details>

<details><summary>Hint 2</summary>

They agree half the time and disagree half the time.

</details>

<details><summary>Full solution</summary>

Directly,

$$\\hat{\\mathfrak R}_S(F)=\\frac23\\,\\mathbb E_\\sigma|\\sigma_3-\\sigma_1|=\\frac23,$$

because the supremum over $|a|\\le2$ aligns the sign of $a$ with $-\\sigma_1+\\sigma_3$, and $|\\sigma_3-\\sigma_1|$ is $0$ or $2$ with equal probability. The generic norm bound $2/\\sqrt3\\approx1.155$ is valid but looser.

</details>

<a id="rademacher-complexity-legacy-3"></a>

### Exercise 3

A researcher claims that because their neural network has Rademacher complexity zero on the training set, it will generalize perfectly. What is wrong with this reasoning?

<details><summary>Hint 1</summary>

One empirical complexity is not an exact population-risk statement.

</details>

<details><summary>Hint 2</summary>

Every applicable finite-sample theorem retains additional terms and assumptions.

</details>

<details><summary>Full solution</summary>

Empirical Rademacher complexity on one training set is not the same as expected complexity over new samples. Even an applicable empirical-complexity theorem retains a nonzero concentration term at finite $n$, and it controls a specified population--empirical gap rather than asserting perfect prediction. A numerically estimated zero must also be distinguished from the mathematical supremum defining the class complexity.

</details>

<a id="rademacher-complexity-ex-4"></a>

### Exercise 4

Prove that taking the convex hull of an evaluation class leaves empirical Rademacher complexity unchanged.

<details><summary>Hint 1</summary>

A linear functional of a convex combination is a convex combination of its values.

</details>

<details><summary>Hint 2</summary>

The original class is contained in its convex hull.

</details>

<details><summary>Full solution</summary>

For each sign vector, the signed linear sum at any convex combination is at most the supremum over original vectors. Inclusion gives the reverse inequality. Thus the suprema agree sign by sign, and so do their expectations. This concerns linear score evaluations; applying a nonlinear loss afterward requires its own contraction argument.

</details>

<a id="rademacher-complexity-ex-5"></a>

### Exercise 5

Explain why a fixed additive offset function does not change empirical complexity under the stated definition.

<details><summary>Hint 1</summary>

Separate its signed contribution from the supremum.

</details>

<details><summary>Hint 2</summary>

Each sign has mean zero.

</details>

<details><summary>Full solution</summary>

For a fixed sample, $\\sup_f\\sum_i\\sigma_i(f(Z_i)+g(Z_i))=\\sup_f\\sum_i\\sigma_if(Z_i)+\\sum_i\\sigma_i g(Z_i)$. The final term has zero sign expectation. Thus complexity is unchanged. The range needed for concentration can change, so an unchanged complexity does not imply identical deviation constants.

</details>

<a id="rademacher-complexity-ex-6"></a>

### Exercise 6

Derive the replacement sensitivity of empirical Rademacher complexity for a bounded range.

<details><summary>Hint 1</summary>

Bound the signed evaluation change for every function.

</details>

<details><summary>Hint 2</summary>

A supremum is Lipschitz with respect to a uniform change.

</details>

<details><summary>Full solution</summary>

Changing one observation changes its function value by at most the range width. For each sign vector, the normalized supremum changes by at most that width divided by n. Averaging over signs preserves the deterministic bound, which supplies the bounded-differences concentration input.

</details>

<a id="rademacher-complexity-ex-7"></a>

### Exercise 7

Why does the empirical two-sided theorem have log three over delta and coefficient three in this proof?

<details><summary>Hint 1</summary>

Count the three controlled events.

</details>

<details><summary>Hint 2</summary>

Replacing twice expected complexity contributes two allowances.

</details>

<details><summary>Full solution</summary>

The proof allocates delta divided by three to upper-gap concentration, lower-gap concentration and the lower tail of empirical complexity. On their joint success event, a gap allowance contributes one radius and replacing the leading twice expected complexity contributes two more. This yields the stated coefficient and logarithm without mixing versions.

</details>

<a id="rademacher-complexity-ex-8"></a>

### Exercise 8

A score class has small complexity. Is zero-one classification loss automatically controlled by a Lipschitz contraction?

<details><summary>Hint 1</summary>

The zero-one threshold loss has a jump.

</details>

<details><summary>Hint 2</summary>

A finite global Lipschitz constant would have to bound that jump across arbitrarily small score changes.

</details>

<details><summary>Full solution</summary>

No. The zero-one threshold loss is not globally Lipschitz in the score near zero. A Lipschitz surrogate or a margin construction can provide another theorem, with its own loss range and calibration argument. Small raw-score complexity alone is not the displayed zero-one population-risk certificate.

</details>

<a id="rademacher-complexity-ex-9"></a>

### Exercise 9

Check the square-loss Lipschitz constant on the bounded score interval.

<details><summary>Hint 1</summary>

Factor the difference of squares.

</details>

<details><summary>Hint 2</summary>

Bound the second factor using the outcome and score bounds.

</details>

<details><summary>Full solution</summary>

$|(y-t)^2-(y-s)^2|=|t-s|\\,|t+s-2y|\\le2(Y+BC)|t-s|$. This proves the constant on the stated bounded score interval, not globally over all real scores. The loss maximum is at most $(Y+BC)^2$.

</details>

<a id="rademacher-complexity-ex-10"></a>

### Exercise 10

Does a data-dependent numerical estimate of the supremum certify mathematical empirical complexity?

<details><summary>Hint 1</summary>

An optimization routine can underestimate a supremum.

</details>

<details><summary>Hint 2</summary>

Its computational error needs a separate upper guarantee.

</details>

<details><summary>Full solution</summary>

A numerical maximization returning one feasible value gives a lower bound on the supremum, not an upper certificate. Monte Carlo over signs also has computational uncertainty. To substitute a computed complexity upper bound in a theorem, both optimization and sign-averaging errors must be bounded in the required direction. A small displayed number alone supplies neither.

</details>

## Looking backward and forward

This chapter developed a data-dependent complexity measure that applies beyond binary classification. The next chapter, "Stability," shifts perspective from the hypothesis class to the algorithm itself, asking how sensitive the learned predictor is to changes in the training data.
`;export{e as default};