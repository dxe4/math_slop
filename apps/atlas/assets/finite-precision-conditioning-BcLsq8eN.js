var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: finite-precision-conditioning
title: "Finite Precision, Conditioning, and Stability"
level: advanced-undergraduate
status: draft
estimated_minutes: 95
license: CC BY-SA 4.0
---

# Finite Precision, Conditioning, and Stability

## Local prerequisites and purpose

This chapter assumes algebra, scientific notation, and elementary limits. Its purpose is to separate a sensitive problem from an unstable algorithm. Those two failures can look identical in an output table, but they demand different remedies.

## A finite model of real arithmetic

A normalized binary floating-point number has a sign, a finite significand, and a bounded exponent. The exact details depend on the format, but a useful ideal model for a basic operation is

\\(\\operatorname{fl}(x \\mathrm{op} y) = (x \\mathrm{op} y)(1+\\delta)\\), with \\(\\lvert \\delta\\rvert \\le u\\),

provided the exact result is representable as a normal finite number and the operation is correctly rounded. The hypotheses matter. Overflow, gradual underflow, subnormal inputs, invalid operations, and compound expressions can fall outside this one-step relative model.

Unit roundoff \\(u\\) is roughly half the distance from 1 to the next larger representable number under round-to-nearest. It is not the smallest positive representable number. Near zero, absolute spacing and subnormal behavior replace a uniform relative picture.

### Worked representation example

**Example 1.0 (Rounding in a decimal teaching format).**

Imagine a decimal teaching format with three significant digits and round-to-nearest. Then

\\(\\operatorname{fl}(9.99 + 0.006) = \\operatorname{fl}(9.996) = 10.0\\).

The small addend affects the rounded result, but a further addend \\(0.001\\) may be lost after the partial sum becomes \\(10.0\\). Reversing the summation order can change the stored answer. Exact addition is associative; floating-point addition generally is not.

This does not license arbitrary pessimism. A summation algorithm can have a proved error bound, and pairwise or compensated summation can substantially reduce accumulation error. Reproducibility requires stating the ordering and environment that determine the result.

## Absolute, relative, and componentwise error

If \\(x\\) is exact and \\(\\widehat{x}\\) is computed, absolute error is \\(\\lvert \\widehat{x}-x\\rvert\\). Relative error is \\(\\lvert \\widehat{x}-x\\rvert/\\lvert x\\rvert\\), defined when \\(x\\) is nonzero. Relative error is often scale-aware, but it becomes unsuitable when the correct answer is near zero. A residual in a physical balance may need units and an absolute tolerance.

For vectors, one normwise relative error can hide a destroyed small component. Componentwise analysis compares each coordinate to its own scale. Structured analysis restricts perturbations to those allowed by the problem, such as symmetric matrices or probabilities that still sum to one.

## Conditioning belongs to the problem

For differentiable scalar \\(f\\), the local absolute condition number is \\(\\lvert f'(x)\\rvert\\). When both \\(x\\) and \\(f(x)\\) are nonzero, the relative condition number is

\\(\\kappa_{rel}(x) = \\lvert x f'(x)/f(x)\\rvert\\).

It predicts first-order amplification:

\\(relative output change \\approx \\kappa_{rel} \\times relative input change\\).

**Example.** For \\(f(x)=\\sqrt{x}\\), \\(\\kappa_{rel}=1/2\\): relative input errors are locally halved. For \\(g(x)=1/(1-x)\\) near \\(x=1\\), the relative condition number \\(\\lvert x/(1-x)\\rvert\\) becomes large. No rearrangement can make the value insensitive to uncertainty in \\(x\\); the problem itself is ill conditioned there.

### A theorem connecting perturbations to derivatives

**Theorem 1.2.** Let \\(f\\) be continuously differentiable on an interval containing nonzero \\(x\\) and \\(x+\\Delta x\\), and suppose \\(f(x)\\) is nonzero. Then for some point \\(\\xi\\) between the two inputs,

\\(\\lvert f(x+\\Delta x)-f(x)\\rvert/\\lvert f(x)\\rvert = \\lvert f'(\\xi) \\Delta x\\rvert/\\lvert f(x)\\rvert\\).

**Reason.** This is the mean value theorem followed by division by \\(\\lvert f(x)\\rvert\\). As \\(\\Delta x\\) tends to zero and \\(f'\\) is continuous, the first-order relative amplification approaches \\(\\lvert x f'(x)/f(x)\\rvert\\) after multiplying and dividing by \\(\\lvert x\\rvert\\).

The theorem licenses a local approximation, not a global bound at an arbitrary perturbation. A rigorous bound uses a supremum of \\(\\lvert f'\\rvert\\) over the whole uncertainty interval.

## Stability belongs to the algorithm

An algorithm is **backward stable** when its computed output is the exact solution to a nearby input, under a stated perturbation model. If the problem is well conditioned, small backward error usually implies small forward error. Schematically,

\\(forward error \\le conditioning \\times backward error + higher-order terms\\).

This is a bridge, not an identity. It needs compatible norms, sufficiently small perturbations, and a problem whose solution is locally well defined.

### Cancellation: symptom, not diagnosis

For large positive \\(x\\), the quadratic root

\\(-x + \\sqrt{x^{2}+1}\\)

subtracts nearby quantities. Rationalization gives

\\(1/(x+\\sqrt{x^{2}+1})\\).

The second form is exact over the real domain and avoids cancellation. But subtraction itself is not always wrong. If two measured quantities are close and their difference is the requested physical signal, the problem may be ill conditioned relative to measurement error. Algebra cannot recover information the inputs never contained.

## Accumulation and a useful bound

Suppose \\(n\\) nonnegative stored numbers are added sequentially under the ideal model, with no overflow or underflow, and \\((n-1)u<1\\). A standard analysis gives

\\[
\\lvert \\widehat{s}-s\\rvert\\le \\gamma_{n-1}s,\\qquad
\\gamma_{n-1}=\\frac{(n-1)u}{1-(n-1)u}.
\\]

There are \\(n-1\\) rounded additions when the first stored input initializes the accumulator. The proof expands the products of factors \\((1+\\delta_i)\\) and bounds higher-order terms. It is a worst-case bound; observed errors may cancel. Pairwise summation reduces the depth of the addition tree from order \\(n\\) to order \\(\\log n\\), improving the corresponding bound. If inputs have mixed signs, the safe absolute bound instead scales with \\(\\sum_i\\lvert x_i\\rvert\\), so a relative bound for a small final sum can be large.

**Boundary case.** Alternating large positive and negative terms can create small exact sums. A small absolute rounding error may then be a huge relative error in the final sum. Report an absolute bound or a condition number such as \\(\\sum \\lvert x_i\\rvert / \\lvert \\sum x_i\\rvert\\).

## Common failures

- Treating displayed decimal digits as independent evidence of accuracy.
- Using one universal relative tolerance when the true result may be zero.
- calling a problem unstable; stability describes an algorithm or dynamical behavior and must be qualified.
- Expecting more precision to repair uncertain or ill-conditioned input indefinitely.
- Comparing floats by a fixed epsilon without regard to scale, operation count, or mathematical contract.

## A format specifies a set and a rounding rule

**Definition 1.1 (Precision and spacing).** In a radix-$\\beta$ normalized teaching format with $p$ significant digits, numbers in $[1,\\beta)$ have spacing $\\beta^{1-p}$. Under rounding to nearest, the conventional unit roundoff is $u=\\tfrac12\\beta^{1-p}$. This is a uniform relative-error bound in the normal range; the spacing itself is often called machine epsilon. Those two quantities differ by a factor of two under this convention.

| Common binary format | Significant bits $p$ | Spacing above $1$ | Unit roundoff, nearest |
| --- | ---: | ---: | ---: |
| binary16 | 11 | $2^{-10}$ | $2^{-11}$ |
| binary32 | 24 | $2^{-23}$ | $2^{-24}$ |
| binary64 | 53 | $2^{-52}$ | $2^{-53}$ |
| binary128 | 113 | $2^{-112}$ | $2^{-113}$ |

The table describes the mathematical precision parameters of these formats. It does not promise that every expression in a language is evaluated in the storage format, that an intermediate never overflows, or that a library function is correctly rounded. Rounding mode, fused operations, conversion, and exceptional values belong to the computation's assumptions. An exact zero result also needs separate treatment in a relative-error formula.

To see the spacing rule, a number in one binade has a leading binary one followed by $p-1$ fraction bits. Incrementing the last fraction bit changes its value by $2^{1-p}$ before exponent scaling. The nearest representable value is at most half a spacing away. Scaling to another normal binade scales the absolute error and the magnitude together, giving the conventional relative bound. At a power-of-two boundary the neighbouring spacings differ, so a sharp relative maximum need not equal the convenient uniform constant $u$.

**Example 1.2 (Exact toy rounding).** In a binary format with $p=3$, the numbers in $[1,2]$ are $1,5/4,3/2,7/4,2$. The midpoint $9/8$ lies between $1$ and $5/4$. Ties-to-even selects $1$, whose last stored fraction bit is even. The absolute error is $1/8$ and its relative size is $(1/8)/(9/8)=1/9$. The conventional unit roundoff is $1/8$, a valid slightly larger bound. “Unit roundoff” is therefore not a claim that every operation loses exactly that fraction.

## A complete accumulation bound

**Lemma 1.3 (Products of rounding factors).** If $|\\delta_j|\\le u$, $u\\ge0$, and $ku<1$, then
\\[
\\left|\\prod_{j=1}^k(1+\\delta_j)-1\\right|\\le\\gamma_k=\\frac{ku}{1-ku}.
\\]

*Proof.* For $k=0$ the empty product is one. For $k\\ge1$, the condition gives $u<1$, so all factors are positive. Their product lies between $(1-u)^k$ and $(1+u)^k$. Bernoulli's inequality, proved by multiplying successively by $1-u$, gives $(1-u)^k\\ge1-ku$. For the upper bound, expand by the binomial theorem and use $\\binom{k}{j}\\le k^j$:
\\[
(1+u)^k\\le\\sum_{j=0}^k(ku)^j\\le\\frac1{1-ku}.
\\]
The upward error is at most $1/(1-ku)-1=\\gamma_k$, and the downward error is at most $ku\\le\\gamma_k$. ∎

**Theorem 1.4 (Sequential summation).** Let $x_1,\\ldots,x_n$ be stored real inputs. Suppose each addition satisfies the stated one-operation relative model with the same $u$, no overflow or underflow occurs, and $(n-1)u<1$. Initialize the accumulator at $x_1$ and add the remaining terms. Then
\\[
|\\widehat s-\\sum_i x_i|\\le\\gamma_{n-1}\\sum_i|x_i|.
\\]

*Proof.* Expanding the rounded recurrence expresses the result as a sum of the inputs, each multiplied by a product of at most $n-1$ factors $(1+\\delta_j)$. The first two inputs pass through the first addition and all later additions; later inputs pass through only the additions after they enter. Lemma 1.3 bounds the deviation of every coefficient from one by $\\gamma_{n-1}$. Subtract the exact sum, apply the triangle inequality, and sum the individual bounds. If $n=1$, no addition occurs and the bound is zero. ∎

This proof also shows exactly what a balanced addition tree changes. Each input is multiplied only by the rounding factors along its route to the root. A fixed tree with maximum depth $\\ell$ has the corresponding bound $\\gamma_\\ell\\sum|x_i|$, provided $\\ell u<1$. For a balanced tree, $\\ell$ is at most $\\lceil\\log_2n\\rceil$. That is an accuracy argument and an operation-order specification. It does not assert that every rearrangement gives a smaller observed signed error.

The theorem treats stored inputs as the exact starting data. If the intended real inputs were rounded on entry, conversion contributes another layer. If an input is itself an approximate solution of another problem, its uncertainty belongs to the data-error term, not to the addition theorem. Keeping those layers separate prevents a tight rounding bound from concealing inaccurate measurements.

## A finite conditioning-to-stability statement

**Proposition 1.5 (A local forward guarantee).** Suppose the exact scalar map $f$ is differentiable on an interval containing $x$ and $x+\\Delta x$, and $|f'|\\le M$ throughout that interval. If a computed output equals $f(x+\\Delta x)$ for some allowed backward perturbation, then its absolute forward error is at most $M|\\Delta x|$.

*Proof.* Apply the mean value theorem to the two inputs. The difference is $f'(\\xi)\\Delta x$ for an intermediate point $\\xi$, and the assumed uniform derivative bound gives the conclusion. ∎

This is a nonasymptotic statement: the derivative bound covers the whole uncertainty interval. A relative version may divide by $|f(x)|$ only when that output is nonzero. The familiar local condition number is the limiting first-order version when the interval shrinks; substituting a single derivative value for $M$ without controlling its variation does not create a rigorous bound.

**Example 1.6 (Avoiding intermediate overflow).** For real $x,y$ and $m=\\max(|x|,|y|)>0$,
\\[
\\sqrt{x^2+y^2}=m\\sqrt{(x/m)^2+(y/m)^2}.
\\]
At $x=y=10^{200}$, the exact norm is $\\sqrt2\\,10^{200}$, while the squares have size $10^{400}$. In a format able to represent the answer but not those squares, the direct expression overflows first. The scaled expression squares numbers of magnitude at most one. It still needs a check that the final result is representable and a separate return value zero when $m=0$. This reformulation addresses an algorithmic range problem rather than changing the Euclidean norm.

Error analysis is therefore a design tool. It can identify an unstable subtraction, an unsafe intermediate, or an excessively long rounding path before any program is run. More precision, a new formula, and better input information repair different problems; choosing among them requires the mathematical diagnosis.
## Units, component scales, and meaningful backward error

A normwise backward error can hide a large change in a small but important datum. Suppose the input vector contains a length of one kilometre and a clearance of one millimetre, both stored in metres. A perturbation that changes the clearance to zero is tiny relative to the Euclidean norm of the complete vector. It nevertheless changes whether two parts touch. The normwise statement is mathematically correct; its interpretation as a harmless physical change is not justified.

Choose positive component scales before analysing such a problem. Writing the physical input as $x=Ds$, with diagonal $D$ containing those scales, turns an error statement about $s$ into a weighted statement about $x$. The exact mathematical map becomes $g(s)=f(Ds)$. Its derivative is $g'(s)=f'(Ds)D$ by the chain rule. Thus conditioning changes with the declared measure of input uncertainty, even though the physical calculation is the same. A change of units alone should be accompanied by the corresponding change of scales; otherwise two reports can appear to disagree because they answer different perturbation questions.

Componentwise relative error is another choice, but zero components need an absolute allowance. Reporting the scale convention alongside the error bound makes the guarantee interpretable and prevents a small aggregate residual from silently replacing a physically meaningful error budget.

## Practice with solutions

### Exercise 1.1
<a id="finite-precision-conditioning-ex-1"></a>

**Condition a subtraction.**

For \\(f(x,y)=x-y\\), show why nearly equal inputs are problematic in relative terms.

<details>
<summary>Hint 1</summary>

Perturb the two inputs separately before subtracting.

</details>
<details>
<summary>Hint 2</summary>

Bound the output perturbation by the sum of the two input perturbation magnitudes.

</details>
<details>
<summary>Solution</summary>

**Solution.** First-order output perturbation is \\(\\Delta x-\\Delta y\\), bounded by \\(\\lvert \\Delta x\\rvert+\\lvert \\Delta y\\rvert\\). Relative to \\(\\lvert x-y\\rvert\\), the amplification can be as large as \\((\\lvert x\\rvert+\\lvert y\\rvert)/\\lvert x-y\\rvert\\) for comparable relative input errors. This ratio explodes as the exact difference approaches zero.

</details>

### Exercise 1.2
<a id="finite-precision-conditioning-ex-2"></a>

**Choose an error scale.**

A computed mass balance is \\(-2\\times10^{-9} kg\\) when the expected exact balance is zero. Is relative error meaningful?

<details>
<summary>Hint 1</summary>

The reference balance is exactly zero.

</details>
<details>
<summary>Hint 2</summary>

Ask whether division by the exact reference is defined.

</details>
<details>
<summary>Solution</summary>

**Solution.** No, division by the exact zero is undefined. Use absolute error in kilograms, scaled perhaps by total mass throughput or an independently justified conservation tolerance.

</details>

### Exercise 1.3
<a id="finite-precision-conditioning-ex-3"></a>

**Diagnose a reformulation.**

Does replacing \\(1-\\cos x\\) by \\(2 \\sin^{2}(x/2)\\) change the mathematical problem?

<details>
<summary>Hint 1</summary>

Use the cosine double-angle identity.

</details>
<details>
<summary>Hint 2</summary>

Distinguish equality of real functions from differences in their evaluation paths.

</details>
<details>
<summary>Solution</summary>

**Solution.** Over real inputs the expressions are exactly equal. It changes the evaluation algorithm. Near zero the sine-squared form avoids subtracting two nearby numbers, though its own library calls and underflow behavior still require an implementation audit.

</details>

### Exercise 1.4
<a id="finite-precision-conditioning-ex-4"></a>

**Spacing and unit roundoff.**

For a binary teaching format with five significant bits, find the spacing above one and the conventional nearest-rounding unit roundoff.

<details>
<summary>Hint 1</summary>

The leading one uses one of the five bits.

</details>
<details>
<summary>Hint 2</summary>

There are four fraction bits, so incrementing the last one adds $2^{-4}$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The spacing is $2^{-4}=1/16$ and the conventional unit roundoff is half of it, $2^{-5}=1/32$. Neither is the smallest positive number; the latter also depends on the exponent range.

</details>

### Exercise 1.5
<a id="finite-precision-conditioning-ex-5"></a>

**A backward interpretation.**

At input $4$, a square-root calculation returns $1.99$. Give its relative forward error and one relative backward input error.

<details>
<summary>Hint 1</summary>

Compare the output with the exact value two.

</details>
<details>
<summary>Hint 2</summary>

Square the returned value to find an input it solves exactly.

</details>
<details>
<summary>Solution</summary>

**Solution.** The forward error is $|1.99-2|/2=0.005$. The returned value is the exact square root of $3.9601$, so a compatible relative backward error is $|3.9601-4|/4=0.009975$. This uses scalar input perturbations and exact evaluation of the mathematical square root.

</details>

### Exercise 1.6
<a id="finite-precision-conditioning-ex-6"></a>

**A sum's conditioning.**

For $x=(10^8,1,-10^8)$, compute $\\sum|x_i|/|\\sum x_i|$ and interpret it.

<details>
<summary>Hint 1</summary>

Compute the signed sum before taking its absolute value.

</details>
<details>
<summary>Hint 2</summary>

The numerator adds magnitudes without cancellation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The exact sum is one and the sum of magnitudes is $200000001$, so the ratio is $200000001$. Small componentwise relative input perturbations can be greatly amplified in the relative sum. Stable summation can control extra algorithmic error, but cannot remove this input sensitivity.

</details>

### Exercise 1.7
<a id="finite-precision-conditioning-ex-7"></a>

**An accumulation budget.**

Under the assumptions of Theorem 1.4, bound the absolute error when summing 101 nonnegative stored numbers with exact sum ten and $u=10^{-8}$.

<details>
<summary>Hint 1</summary>

There are 100 additions after initialization.

</details>
<details>
<summary>Hint 2</summary>

Use $\\gamma_{100}=10^{-6}/(1-10^{-6})$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The error is at most $10\\gamma_{100}=10^{-5}/(1-10^{-6})$, approximately $1.000001\\times10^{-5}$. The count is 100, not 101, because the first input initializes the accumulator without an addition. This is a worst-case bound under the stipulated rounding model.

</details>

### Exercise 1.8
<a id="finite-precision-conditioning-ex-8"></a>

**The scale at zero.**

Write an absolute-plus-relative comparison rule that remains meaningful when the exact reference is zero.

<details>
<summary>Hint 1</summary>

Add a term with the output's units.

</details>
<details>
<summary>Hint 2</summary>

A common form is $|\\widehat x-x|\\le a+r|x|$ with positive absolute tolerance $a$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Choose documented $a>0$ in the output units and dimensionless $r\\ge0$, and require $|\\widehat x-x|\\le a+r|x|$. At zero the rule becomes $|\\widehat x|\\le a$, avoiding division by zero. The application or data scale, rather than a universal machine epsilon, must justify $a$.

</details>

### Exercise 1.9
<a id="finite-precision-conditioning-ex-9"></a>

**A derivative bound over an interval.**

For $f(x)=x^2$, input $x=2$, and $|\\Delta x|\\le0.01$, use a uniform derivative bound to give a rigorous absolute output-error bound.

<details>
<summary>Hint 1</summary>

The uncertainty interval is $[1.99,2.01]$.

</details>
<details>
<summary>Hint 2</summary>

The maximum of $|2t|$ there is $4.02$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The mean value theorem gives $|f(2+\\Delta x)-f(2)|\\le4.02|\\Delta x|\\le0.0402$. The exact expansion gives the slightly sharper maximum $0.0401$, but the derivative bound is valid without relying on a first-order approximation at the center.

</details>

### Exercise 1.10
<a id="finite-precision-conditioning-ex-10"></a>

**Tree depth and mixed signs.**

Why does pairwise summation not guarantee small relative error when the exact signed sum is tiny?

<details>
<summary>Hint 1</summary>

The absolute theorem uses the sum of magnitudes.

</details>
<details>
<summary>Hint 2</summary>

Divide the bound by the magnitude of the final sum only when that sum is nonzero.

</details>
<details>
<summary>Solution</summary>

**Solution.** A depth-$\\ell$ tree gives $|\\widehat s-s|\\le\\gamma_\\ell\\sum|x_i|$. For nonzero $s$, the relative bound is $\\gamma_\\ell\\sum|x_i|/|s|$. The condition ratio can be arbitrarily large through cancellation, regardless of the shorter tree depth. At $s=0$, ordinary relative error is undefined.

</details>


<a id="chapter-checklist"></a>
## Connections

Before trusting a number, name the input uncertainty, output scale, conditioning, backward or residual evidence, exceptional-value behavior, and independent check. “Double precision” is a storage choice, not an error analysis.

<a id="source-and-verification-note"></a>
## Sources

The earlier Euler chapter and all of its mathematical examples and solutions are retained and developed here. For further reading see Nicholas J. Higham, [Accuracy and Stability of Numerical Algorithms, second edition](https://epubs.siam.org/doi/book/10.1137/1.9780898718027), SIAM, 2002, especially its treatments of floating-point arithmetic and summation. The proofs used here are given in the chapter; no unverified theorem or page locator is asserted. The [IEEE 754-2019 standards identity](https://standards.ieee.org/ieee/754/6210/) is retained as a reference for the named formats, without inferring the behaviour of a particular compiler or library. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Finite precision specifies a representable set, rounding rules, and exceptional ranges. Conditioning measures the mathematical problem's sensitivity; stability measures the algorithm's response to finite arithmetic. The proved product and summation bounds expose the operation counts and input scales behind rounding accumulation. A shorter reduction tree helps control algorithmic error, while cancellation in the data can still make a relative answer sensitive. Reformulations and scaled evaluation repair particular arithmetic paths; they do not replace accurate data or justify a universal tolerance.
`;export{e as default};