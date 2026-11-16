var e=`---
parent_id: book-ode-first-course
matter_id: reader-guide-and-prerequisite-diagnostic
title: "Reader Guide and Prerequisite Diagnostic"
level: undergraduate
license: CC BY-SA 4.0
---

# Reader Guide and Prerequisite Diagnostic {#section-1-reader-guide-and-prerequisite-diagnostic}

This book is a first undergraduate ODE course. Its entry preparation is calculus rather than a prior analysis course. The proofs are included because they explain what the methods guarantee: why a formula accounts for every solution, when a trajectory can continue, and which approximations need further justification.

<a id="section-3-exact-preparation"></a>
## Exact preparation {#section-5-exact-preparation}

Use these registered Calculus chapters to repair a gap. Their stable resource IDs are calculus:04 through calculus:17.

| Chapter | Preparation used here |
| --- | --- |
| [04: Limits and continuity](/books/calculus-course/calculus-04/) | Limits, continuity, and a function's domain |
| [05: Derivatives from first principles](/books/calculus-course/calculus-05/) | Meaning and existence of a derivative |
| [06: Differentiation techniques](/books/calculus-course/calculus-06/) | Product, quotient, and chain rules |
| [07: Rates, linearisation, and sensitivity](/books/calculus-course/calculus-07/) | Units and local approximation |
| [08: Theorems and shape](/books/calculus-course/calculus-08/) | Mean-value and extreme-value reasoning |
| [09: Optimisation and root finding](/books/calculus-course/calculus-09/) | Algebraic roots and numerical approximation |
| [10: Accumulation and the definite integral](/books/calculus-course/calculus-10/) | Integrals as accumulated rate |
| [11: The fundamental theorem](/books/calculus-course/calculus-11/) | Differentiating and recovering integrals |
| [12: Techniques of integration](/books/calculus-course/calculus-12/) | Substitution, integration by parts, partial fractions |
| [13: Geometric and physical applications](/books/calculus-course/calculus-13/) | Balance laws and model interpretation |
| [14: Numerical and improper integration](/books/calculus-course/calculus-14/) | Improper limits and approximation error |
| [15: Sequences and infinite series](/books/calculus-course/calculus-15/) | Convergence as a limit |
| [16: Convergence tests and approximation](/books/calculus-course/calculus-16/) | Comparison, ratio tests, and tails |
| [17: Power and Taylor series](/books/calculus-course/calculus-17/) | Exponential series and termwise calculus |

These chapters are prerequisite preparation, not replacements for ODE Chapters 1–15. Calculus chapters 27–28 remain shorter previews of differential equations and computation.

From Chapter 13, use the registered L2 Lucent book, resource ID lucent:linear-algebra. The relevant chapters are:

- [Matrices and composition](/books/lucent-linear-algebra/matrices-composition/), ID lucent:linear-algebra:matrices-composition.
- [Inverses, elimination, and LU](/books/lucent-linear-algebra/inverses-lu/), ID lucent:linear-algebra:inverses-lu.
- [Eigenvalues and eigenvectors](/books/lucent-linear-algebra/eigenvalues/), ID lucent:linear-algebra:eigenvalues.
- [Diagonalization and discrete dynamics](/books/lucent-linear-algebra/diagonalization/), ID lucent:linear-algebra:diagonalization.
- [Complex eigenvalues and rotations](/books/lucent-linear-algebra/complex-eigenvalues/), ID lucent:linear-algebra:complex-eigenvalues.

A proof course can help with mathematical writing, but the ODE construction does not assume the advanced real-analysis treatment of function spaces. Chapter 4 proves its uniform-limit facts, and Chapter 15 supplies the needed vector extension.

<a id="section-36-a-diagnostic-with-repair-answers"></a>
## A diagnostic with repair answers {#section-38-a-diagnostic-with-repair-answers}

Try the following questions on paper. The answers are available for checking preparation; they are not a graded entrance test. Difficulty with one item suggests a local repair, while difficulty throughout suggests completing the calculus route before beginning.

**Diagnostic A: a chain rule.** Differentiate \\(e^{t^2}\\), and verify whether \\(y=e^{t^2}\\) solves \\(y'=2ty\\).

<details><summary>Answer and repair</summary>
The derivative is \\(2te^{t^2}\\), so it equals \\(2ty\\). Review Calculus 06 if the inner derivative is missing. Solving an ODE and checking a proposed formula are different tasks; this question checks only verification.
</details>

**Diagnostic B: a product derivative.** Express \\(y'+2y\\) as a multiple of a product derivative.

<details><summary>Answer and repair</summary>
We have \\((e^{2t}y)'=e^{2t}(y'+2y)\\). Thus \\(y'+2y=e^{-2t}(e^{2t}y)'\\). Review product rules in Calculus 06. This identity is the mechanism behind a linear integrating factor.
</details>

**Diagnostic C: separation and a missing value.** Integrate \\(1/y\\) on an interval where \\(y\\ne0\\). Which constant state would division by \\(y\\) remove from \\(y'=ty\\)?

<details><summary>Answer and repair</summary>
The antiderivative is \\(\\log|y|\\), with its sign branch fixed on the interval. Division removes the constant solution \\(y=0\\), which must be checked separately. Review logarithms and domains in algebra and calculus, then read ODE Chapter 2.
</details>

**Diagnostic D: an initial constant.** Find \\(C\\) if \\(y=3+Ce^{-t}\\) and \\(y(0)=1\\).

<details><summary>Answer and repair</summary>
At zero, \\(1=3+C\\), so \\(C=-2\\). The initial condition selects one member of a family; it does not determine the coefficient in the differential equation. Difficulty here calls for algebraic substitution practice.
</details>

**Diagnostic E: an improper integral.** For \\(a>0\\), evaluate \\(\\int_0^\\infty e^{-at}dt\\).

<details><summary>Answer and repair</summary>
The finite integral is \\((1-e^{-aR})/a\\), which tends to \\(1/a\\) as \\(R\\to\\infty\\). Positivity of \\(a\\) gives decay. Review Calculus 14 before the Laplace chapter if the endpoint limit is unfamiliar.
</details>

**Diagnostic F: a series tail.** Why does \\(\\sum_{n=0}^\\infty 2^n/n!\\) converge?

<details><summary>Answer and repair</summary>
The ratio of consecutive nonnegative terms is \\(2/(n+1)\\), tending to zero, so the ratio test proves convergence. Review Calculus 16–17. Factorial denominators will control successive Picard differences and matrix-exponential terms.
</details>

**Diagnostic G: time domains.** What interval containing zero is allowed by \\(y=1/(2-t)\\)?

<details><summary>Answer and repair</summary>
The connected formula interval is \\((-\\infty,2)\\). The separate branch \\(t>2\\) cannot continue a trajectory through the missing time. Review functions and domains if removing that time appears to leave a single solution interval.
</details>

**Diagnostic H: a matrix mode, for Chapter 13.** Compute \\(A(1,1)\\) and \\(A(1,-1)\\) for \\(A=\\begin{pmatrix}-2&1\\\\1&-2\\end{pmatrix}\\).

<details><summary>Answer and repair</summary>
The results are \\(-(1,1)\\) and \\(-3(1,-1)\\). These are eigenvectors with eigenvalues \\(-1\\) and \\(-3\\). If the meaning of eigenvector or change of basis is unfamiliar, use Lucent's eigenvalues and diagonalization chapters before the ODE systems part.
</details>

<a id="section-88-a-productive-chapter-routine"></a>
## A productive chapter routine {#section-90-a-productive-chapter-routine}

Begin by naming the unknown function, the independent variable, and the equation's domain. Before calculating, decide whether a result promises local existence, an explicit formula, a qualitative limit, or an approximation estimate. Those are different outputs.

For a worked example, reproduce the reasoning and verify the answer independently by differentiation. For a theorem, identify each hypothesis and find the line of the proof that uses it. Removing a condition is a useful way to discover a counterexample: a lost equilibrium after division, a waiting-time solution without Lipschitz control, or a boundary term under Robin conditions.

Use the two staged hints in the chapter exercises progressively. The first indicates the relevant structure. The second exposes a more concrete step. The final reveal is a complete solution, not just an answer value. After reading it, write an explanation of the interval and exceptional cases as well as the final expression.

<a id="section-96-status-and-continuation"></a>
## Status and continuation {#section-98-status-and-continuation}


The course stops after constant linear systems and a nonlinear preview. General nonlinear dynamics, singular Sturm–Liouville endpoints, transform inversion in complex function spaces, and general nonlinear Runge–Kutta order theory are further topics. The chapter text states these boundaries where they arise so a reader can distinguish a proved result from an invitation to continue.
`;export{e as default};