var e=`---
id: deep-dive-numerical-mathematics-discretization-verification
title: "From Local Defect to Global Trust: Discretization and Verification"
license: CC BY-SA 4.0
---

# From Local Defect to Global Trust: Discretization and Verification

**Before reading.** Read [Models and Direction Fields](../books/ode-first-course/models-direction-fields.md), [What Is a PDE? Classification and Model Problems](../books/partial-differential-equations/classification-model-problems.md) and [Floating-Point and Factorization](../books/matrix-computation-applications/floating-point-and-factorization.md). These are preparation for the ideas used below.

## Scope

This advanced treatment assumes numerical linear algebra and already posed initial- or boundary-value equations. It does not redevelop general differential-equation theory. Its central question is: **when does a locally accurate discrete rule produce a globally accurate computed solution?**

## Four operators

Let a continuous problem be $L u=f$. A discretization supplies restriction or sampling $R_{h}$, a discrete operator $L_{h}$, and perhaps a reconstruction $P_{h}$. Distinguish:

- exact solution $u$;
- restricted exact data $R_{h} u$;
- exact discrete solution $u_{h}$ satisfying $L_{h} u_{h}=R_{h} f$;
- computed discrete solution $\\widehat{u}_{h}$, which only approximately solves the algebraic system.

Then reconstructed error can be split schematically:

$$u-P_{h} \\widehat{u}_{h} = [u-P_{h} u_{h}] + P_{h}[u_{h}-\\widehat{u}_{h}]$$

The first term is discretization error; the second is algebraic/rounding error. Solver residual controls the second only through discrete conditioning.

### Worked residual warning

**Worked example.**

For

\\[
A=\\begin{pmatrix}1&0\\\\0&10^{-6}\\end{pmatrix},\\qquad
b=\\begin{pmatrix}1\\\\10^{-6}\\end{pmatrix},
\\]

the exact solution is \\(x=(1,1)^{\\mathsf T}\\). The approximation
\\(\\widehat x=(1,0)^{\\mathsf T}\\) has residual

\\[
r=b-A\\widehat x=(0,10^{-6})^{\\mathsf T},
\\]

whose Euclidean norm is \\(10^{-6}\\), while the forward error
\\(\\lVert x-\\widehat x\\rVert_2\\) is \\(1\\). The inverse amplifies the residual in
the second coordinate by \\(10^6\\). Thus a small residual is a backward-error
statement; turning it into a forward-error statement requires conditioning and
scale information. The same issue appears when a discrete operator develops
small eigenvalues as the mesh changes.

## Consistency is a defect statement

Insert the exact solution into the discrete equations:

$$\\tau_{h}=L_{h} R_{h} u-R_{h} L u$$

Consistency means this defect tends to zero in a specified norm for a stated regularity class. It does not by itself say $u_{h}$ exists, is unique, or approaches $u$.

For the centered second difference,

$$[u(x-h)-2u(x)+u(x+h)]/h^{2} = u''(x)+h^{2} u''''(\\xi)/12$$

under sufficient smoothness. If the fourth derivative is unbounded or the mesh crosses a coefficient jump, the advertised local order may fail.

## Stability controls amplification

If $L_{h}$ is invertible, discrete error satisfies

$$R_{h} u-u_{h}=L_{h}^{-1} \\tau_{h}$$

up to sign convention. A stability estimate $\\lVert L_{h}^{-1}\\rVert\\le C$ uniformly in h turns consistency into convergence:

$$\\lVert R_{h} u-u_{h}\\rVert\\le C\\lVert \\tau_{h}\\rVert$$

The norm matters. A method stable in an energy norm may not provide a maximum-norm estimate without further work. Boundary conditions are inside $L_{h}$; changing them can change stability completely.

## Time-stepping equivalence statements

For a fixed linear multistep method applied under its standard initial-value setting, consistency plus zero-stability is equivalent to convergence. Zero-stability constrains roots of the first characteristic polynomial: roots lie in the closed unit disk, and those on the unit circle are simple.

This is not the same as absolute stability for $y'=\\lambda y$. Zero-stability concerns perturbation growth as h tends to zero; absolute stability concerns behavior for a fixed scaled mode $h \\lambda$. A method needs both the appropriate convergence theory and a step inside its stability regime.

For well-posed linear initial-value PDE schemes, a Lax–Richtmyer-style equivalence relates consistency, stability, and convergence under a precisely defined norm and problem class. Quoting the slogan outside that setting is not a proof.

## Energy method as a discrete audit

Consider backward Euler for diffusion after spatial discretization:

$$(M+hK)y_{n+1}=M y_{n}$$

with symmetric positive-definite mass matrix M and positive-semidefinite K. Multiply by $y_{n+1}^{T}$ and use

$$2a^{T} M(a-b)=\\lVert a\\rVert_{M}^{2}-\\lVert b\\rVert_{M}^{2}+\\lVert a-b\\rVert_{M}^{2}$$

The result shows a discrete energy cannot increase, with nonnegative dissipation terms. This proves more than a plot of decay and provides a regression-test invariant. If the linear solve is inexact, residual terms enter the identity and must be bounded.

## Manufactured solutions and their limits

Choose a smooth $u_{\\mathrm{exact}}$, derive forcing and boundary data so it solves the target equation, and compare code output. This checks signs, coefficients, boundaries, and observed order.

A strong suite uses multiple manufactured families:

- a polynomial exactly reproduced by the stencil;
- a smooth nonpolynomial for asymptotic order;
- nonzero mixed boundary data;
- variable coefficients;
- a near-limit case that stresses conditioning.

One polynomial test can pass even if the nominal error term is coded incorrectly, because the missing derivative vanishes.

## Refinement with coupled tolerances

Suppose spatial order is p and algebraic solve error has size eta. To observe spatial convergence, eta should be smaller than—but need not be orders of magnitude below—the expected $C h^{p}$. If eta is fixed while h shrinks, the convergence curve eventually plateaus. This is useful evidence of an error floor.

Time and space must sometimes refine together. For an explicit diffusion method, stability may require $\\Delta t$ proportional to $h^{2}$. Refining h alone while leaving $\\Delta t$ fixed can leave the stability region and turn a spatial study into a time-instability demonstration.

### Worked order and plateau

Suppose errors at h values $1/10,1/20,1/40,1/80$ are $4.1e-3,1.03e-3,2.7e-4,1.2e-4$. The first ratios are near four, consistent with second order. The last ratio is only 2.25, suggesting the asymptotic model is being contaminated—perhaps by a $10^{-4}$ solver or data floor. Fitting one slope through every point would hide the transition.

## Verification matrix

| Claim | Evidence | Failure it can expose |
|---|---|---|
| operator assembled correctly | exact discrete modes | indexing and signs |
| advertised local order | truncation calculation | missing regularity or term |
| global convergence | refinement plus stability argument | amplification |
| algebraic solve adequate | original residual and conditioning | oversolve/undersolve |
| conservation or dissipation | discrete balance table | flux/boundary defect |
| implementation independence | second formulation | shared-code blind spot |

None validates the physical model.

## Common errors

- Measuring only solver residual and calling it solution error.
- Estimating order from two meshes with no asymptotic check.
- Changing geometry or boundary approximation during refinement without documenting it.
- Treating a stable method as accurate at arbitrarily large step.
- Inferring a theorem about long-time dynamics from finite computed trajectories.

## Practice with solutions

<a id="deep-dive-numerical-mathematics-discretization-verification-ex-1"></a>

**Exercise 1.**

**1. Amplification.** If $\\lVert L_{h}^{-1}\\rVert$ grows like $h^{-1}$ and defect is order $h^{2}$, what bound follows?
<details>
<summary>Hint 1</summary>

Global error is controlled by defect multiplied by the inverse operator’s amplification.
</details>
<details>
<summary>Hint 2</summary>

Multiply the stated powers of h before claiming a convergence order.
</details>
<details>
<summary>Solution</summary>

Their product is order h, so only first-order global convergence follows from that estimate. Local order alone did not survive inversion.

</details>

<a id="deep-dive-numerical-mathematics-discretization-verification-ex-2"></a>

**Exercise 2.**

**2. Algebraic floor.** Why can exact solution of each discrete system be wasteful?
<details>
<summary>Hint 1</summary>

Distinguish algebraic solve error from discretization and input-data error.
</details>
<details>
<summary>Hint 2</summary>

Once the solve error is below the latter floors, further exactness does not improve the modeled answer.
</details>
<details>
<summary>Solution</summary>

Once algebraic error lies safely below discretization and data error, further iterations do not materially improve the approximation to the continuous target. Match tolerances to the full budget.

</details>

### Further practice

**3. Energy claim.** A computed energy decreases for 100 steps. Is unconditional stability proved?

**Solution.** No. It is an observation for selected data and arithmetic. A discrete identity or inequality under stated matrix and solver hypotheses supplies the proof.

## Boundary of the guide

This guide connects local defects, stability, algebraic error, and verification. It does not replace specialist convergence theory for shocks, adaptive meshes, nonlinear PDE, finite elements on irregular domains, or long-time dynamical statistics.
`;export{e as default};