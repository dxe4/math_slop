var e=`---
parent_id: book-matrix-computation-applications
chapter_id: chapter-13
title: "Mixed-Precision and Verified Computing"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Mixed-Precision and Verified Computing

Current computing environments expose multiple arithmetic formats, including binary floating-point, integer, and in some systems block floating-point formats. Which precisions are hardware-native, accelerated, software-emulated, or unavailable depends on the processor, accelerator, compiler, and numerical library; binary128, for example, is commonly implemented in software. This chapter explores how to combine available precisions strategically while checking accuracy, and introduces interval arithmetic as a tool for verified computation.

## Mixed-precision iterative refinement

Iterative refinement improves the accuracy of a computed solution $\\widehat{x}$ to $Ax = b$ by correcting the residual:

1. Compute the residual $r = b - A\\widehat{x}$ in high precision.
2. Solve $Ad = r$ for the correction $d$.
3. Update $\\widehat{x} \\leftarrow \\widehat{x} + d$.

If the factorization of $A$ is computed in low precision and residuals and updates use higher precision, classical analyses often require a condition such as $\\kappa(A)\\varepsilon_{\\text{low}}<1$ for contraction. That inequality is only part of the guarantee: scaling, the backward stability and pivot growth of the low-precision factorization, the accuracy of correction solves, and the residual/update precisions also enter the error bound. Under those hypotheses, single-precision factors with double-precision residuals can often recover double-precision accuracy for suitably scaled matrices with $\\kappa(A)\\ll10^7$.

**GMRES-based refinement.** For very ill-conditioned matrices, LU-based refinement may stall. Using preconditioned GMRES for the correction equation extends the range of condition numbers that can be handled.

## Half precision in machine learning

Half precision (FP16) has $\\varepsilon_{\\text{mach}} \\approx 4.9 \\times 10^{-4}$ and a narrow dynamic range. It is widely used in neural network training because gradients are tolerant of low precision. For numerical linear algebra, FP16 is useful for preconditioners, approximate factorizations, and matrix-vector products, but direct solvers in FP16 alone are rarely reliable.

**Loss scaling.** To prevent gradient underflow in FP16, loss scaling multiplies the loss by a large constant before backpropagation. The analogous idea in linear algebra is scaling the matrix to fit the FP16 range.

## Interval arithmetic

Interval arithmetic computes rigorous bounds on the result of every operation. If $x \\in [\\underline{x}, \\overline{x}]$ and $y \\in [\\underline{y}, \\overline{y}]$, then

$$
x + y \\in [\\underline{x} + \\underline{y}, \\overline{x} + \\overline{y}],
\\qquad
x \\cdot y \\in [\\min S, \\max S],
$$

where $S = \\{\\underline{x}\\underline{y}, \\underline{x}\\overline{y}, \\overline{x}\\underline{y}, \\overline{x}\\overline{y}\\}$. By propagating intervals through an algorithm, we obtain guaranteed enclosures for the exact result.

**Challenges.** Interval arithmetic can suffer from overestimation due to dependency: if $x$ appears multiple times in an expression, the interval treats each occurrence as independent, widening the result. Rewriting expressions to reduce multiple occurrences of the same variable mitigates this.

## Verified linear system solvers

A verified solver computes an approximate solution $\\widehat{x}$ and then uses interval arithmetic to prove that a unique solution exists in a neighborhood of $\\widehat{x}$. INTLAB for MATLAB provides interval arithmetic and verified numerical routines of this kind; its supported MATLAB releases and current package details are maintained at https://www.tuhh.de/ti3/intlab/. A library's use of the word "interval" does not by itself establish directed outward rounding or verified-linear-algebra guarantees. The steps are:

1. Compute an approximate inverse $R \\approx A^{-1}$ in floating point.
2. Form an interval matrix $[C] = I - RA$.
3. Verify that $\\lVert [C] \\rVert_{\\infty} < 1$ using interval arithmetic.
4. If the verification succeeds, the Neumann series guarantees that $A$ is invertible. From $(I-C)(x-\\widehat x)=Rr$, the correction is enclosed by $[I-[C]]^{-1}R[r]$, so $x\\in\\widehat x+[I-[C]]^{-1}R[r]$. Matrix order matters: $R$ cannot generally be moved to the left of the inverse. Every interval operation, including construction of $[C]$ and $[r]$, must use directed outward rounding.

## Example: mixed-precision refinement

Let $A$ be the $3\\times3$ Hilbert matrix and $b=(1,1,1)^T$. This small problem is a useful refinement experiment: compute low-precision LU factors, form residuals and updates in binary64, and record the true forward and backward errors after each step. The numerical values depend on the factorization, rounding, residual evaluation, and implementation, so no fixed sequence of error values is asserted without a registered run. The expected qualitative behavior under stable factors is contraction toward the accuracy allowed by the higher-precision residual and update arithmetic.

## Common errors and misconceptions

**Error: assuming mixed precision is always safe.** A large value of $\\kappa(A)\\varepsilon_{\\text{low}}$, severe scaling, unstable factorization, or inaccurate correction solves can prevent contraction. Check the observed residual reduction and the hypotheses behind the chosen refinement theorem; do not treat one condition-number threshold as necessary and sufficient.

**Error: treating interval width as error magnitude.** A wide interval may reflect dependency overestimation rather than genuine uncertainty. Rewrite the expression or use centered forms to tighten bounds.

**Error: ignoring the cost of interval arithmetic.** Interval operations require directed rounding and often multiple endpoint evaluations. Their overhead depends strongly on hardware, library, vectorization, and expression structure; measure it in the declared environment and reserve rigorous enclosures for the steps that need verification.

## Practice exercises with solutions

### Exercise 17.1

A matrix has $\\kappa_{2}(A) = 10^{5}$. Can single-precision factorization with double-precision iterative refinement achieve full double-precision accuracy?

**Solution.** The condition number is compatible with the usual contraction scale because $10^5\\varepsilon_{\\text{single}}\\ll1$, but it does not by itself guarantee full double-precision accuracy. The conclusion also needs suitable scaling, a backward-stable low-precision factorization without excessive growth, sufficiently accurate correction solves, and double-precision residuals and updates. Under those conditions, full double-precision accuracy is a reasonable expectation and must be confirmed by the scaled backward error.

### Exercise 17.2

Compute the interval product $[1, 2] \\cdot [-1, 3]$.

**Solution.** The set of products is $\\{-1, 3, -2, 6\\}$, so the interval product is $[-2, 6]$.

### Exercise 17.3

Explain why dependency causes overestimation in $[0, 1] - [0, 1]$.

**Solution.** The exact range of $x-x$ for $x\\in[0,1]$ is $[0,0]$. Direct interval subtraction gives $[0,1]-[0,1]=[-1,1]$ because the two occurrences are treated independently. Once the common variable is recognized, rewriting $x-x=x(1-1)$ does help: $[0,1]\\cdot[0,0]=[0,0]$. Centered forms provide a systematic version of the same dependency reduction.

### Exercise 17.4

A verified solver reports $\\lVert I - RA \\rVert_{\\infty} = 0.9$. What does this guarantee?

**Solution.** If the reported $0.9$ is a rigorous outward-rounded upper bound for $\\lVert[I-RA]\\rVert_\\infty$, the Neumann series converges and $RA$, hence square $A$, is invertible. A solution enclosure follows only after outward-rounded evaluation of $\\widehat x+[I-[C]]^{-1}R[r]$; the norm check alone does not specify its width.

## Looking backward and forward

This chapter explored precision trade-offs and verified computation. The next chapter, *Synthesis and Open Directions*, reviews the book's core principles and points toward current research frontiers in numerical linear algebra.
`;export{e as default};