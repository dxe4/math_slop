var e=`---
parent_id: book-pde-weak-theory-waves-patterns
chapter_id: elliptic-parabolic-weak-theory
title: Weak Solutions of Elliptic Problems
level: graduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Weak Solutions of Elliptic Problems

Classical derivatives are often too much to demand from rough data, corners, interfaces, or limiting sequences. Weak formulations move derivatives onto test functions, retain boundary information, and place existence in complete normed spaces. This chapter develops the Hilbert-space core without pretending that weak existence automatically gives pointwise smoothness.

## 1. Weak derivatives and Sobolev space

On an open domain Omega, an integrable function v is the weak derivative $D_i u$ if

$$\\int_\\Omega uD_i\\phi\\,dx=-\\int_\\Omega v\\phi\\,dx$$

for every smooth compactly supported test function phi. The space $H^1(\\Omega)$ consists of square-integrable u with square-integrable first weak derivatives. It is a Hilbert space with norm squared $\\lVert u\\rVert_2^2+\\lVert \\nabla u\\rVert_2^2$. $H_0^1$ is the closure of compactly supported smooth functions in this norm; on sufficiently regular domains it encodes zero trace.

The absolute-value function on $(-1,1)$ lies in H1 and has weak derivative $\\operatorname{sign}(x)$ almost everywhere, despite lacking a classical derivative at zero. A jump function is not H1 in one dimension: its distributional derivative contains a point mass, not an L2 function.

## 2. Poisson weak form

For

$$-\\operatorname{div}(a\\nabla u)+cu=f\\quad\\text{in }\\Omega,\\qquad u=0\\quad\\text{on }\\partial\\Omega,$$

multiply by $v \\in H_0^1$ and integrate by parts:

$$A(u,v)=\\int_\\Omega[a\\nabla u\\cdot\\nabla v+cuv]\\,dx=\\int_\\Omega fv\\,dx=F(v).$$

Assume Omega is bounded and supports Poincare’s inequality, $a$ is measurable with $0<a_0\\leq a(x)\\leq a_1$, $c\\in L^\\infty(\\Omega)$ with $c\\geq0$ almost everywhere, and $f$ defines a bounded functional on $H_0^1$. Then $A$ is bounded and coercive:

$$A(v,v)\\ge a_0\\|\\nabla v\\|_2^2\\ge C\\|v\\|_{H^1}^2.$$

Lax–Milgram yields one and only one weak solution and the energy bound $\\lVert u\\rVert_{H1}\\leq C\\lVert F\\rVert$. The theorem does not assert classical second derivatives or pointwise boundary values.

## 3. Neumann compatibility

For $-\\Delta u=f$, $\\partial_n u=g$, the weak form is

$$\\int_\\Omega\\nabla u\\cdot\\nabla v\\,dx=\\int_\\Omega fv\\,dx+\\int_{\\partial\\Omega}gv\\,dS.$$

Assume the bounded regular domain is connected. Testing with $v=1$ gives the necessary compatibility $\\int f+\\int_{\\partial\\Omega}g=0$ under this sign convention. Constants lie in the nullspace, so solutions are unique only modulo one global constant. Restricting to zero-mean functions restores coercivity and uniqueness. On a disconnected domain, compatibility and normalization are required separately on every connected component; one global zero-mean condition does not remove the full kernel.

## 4. Maximum and energy principles

For sufficiently regular classical solutions of $-\\Delta u=f\\geq 0$, the sign says that u is superharmonic: an interior **negative minimum** argument gives a boundary-controlled minimum. Equivalently, with zero Dirichlet data one obtains $u\\geq 0$; positive interior maxima are possible (for example, $-u''=2$ with zero endpoint data). Reversing the sign of the differential inequality reverses the maximum/minimum conclusion. Weak maximum principles use the corresponding negative- or positive-part test function and require coefficient/sign hypotheses. They are not consequences of Lax–Milgram alone.

Taking v=u in the weak Poisson equation gives

$$a_0\\|\\nabla u\\|_2^2\\le\\|F\\|\\,\\|u\\|_{H^1},$$

an a priori estimate. Such bounds support stability and compactness. They do not identify convergence rates without approximation properties.

## 7. Finite-element verification

For a conforming Galerkin approximation $u_h \\in V_h \\subset H_0^1$, Galerkin orthogonality is

$$A(u-u_h,v_h)=0.$$

Cea’s lemma gives

$$\\|u-u_h\\|_{H^1}\\le\\frac M\\alpha\\inf_{v_h\\in V_h}\\|u-v_h\\|_{H^1}.$$

Here M and alpha are the continuity and coercivity constants in the same $H^1$-based norm. This is quasi-optimality, not a rate until u has regularity and the mesh/space has an approximation estimate. When A is symmetric and positive definite, Galerkin orthogonality instead gives the exact best-approximation property in the energy norm $\\lVert v\\rVert_A^2=A(v,v)$. Corners and coefficient jumps can reduce regularity. Report mesh geometry, polynomial degree, quadrature, linear residual, estimator, and refinement in the output norm.

## 8. Failure boundaries

Loss of ellipticity destroys coercivity. Negative reaction terms can cross eigenvalues and lose uniqueness. Non-Lipschitz nonlinearities can allow multiple weak solutions. Rough domains complicate traces and regularity. A small algebraic residual measures the discrete equations, not the PDE error. Point plots can conceal boundary-layer or flux error.

## Coercivity is an inverse bound, not a regularity theorem

Let the domain be bounded and let the space be the closure of compactly supported smooth functions in the first Sobolev norm. The [Sobolev opening](sobolev-spaces.md) proves completeness and the zero-boundary Poincaré inequality. We can use the gradient norm as an equivalent Hilbert norm on this space. Suppose a measurable matrix coefficient is bounded and its symmetric part is uniformly positive: $\\xi^TA(x)\\xi\\ge\\alpha|\\xi|^2$ almost everywhere for every real vector. Let a bounded nonnegative reaction coefficient be given. The bilinear form with diffusion matrix A and reaction coefficient c is bounded by Cauchy–Schwarz and Poincaré, and its diagonal is at least $\\alpha\\|\\nabla v\\|_2^2$.

The Lax–Milgram theorem proved in the opening therefore gives a unique weak solution for every bounded linear load functional. Symmetry of A is not needed for that theorem. Testing the difference of two solutions by that difference gives an inverse bound: the gradient norm of the solution difference is at most the dual norm of the load difference divided by the ellipticity constant. The coefficient is held fixed in this comparison; a varying-coefficient comparison has an additional term.

For that comparison let two uniformly elliptic matrices have a common lower bound, and let their weak solutions have respective loads. Subtract the equations and put the difference on the test side. The coefficient difference contributes an integral bounded by its essential-supremum norm times the second solution's gradient norm times the test gradient norm. Dividing by the difference norm, unless it is zero, proves

$$\\|\\nabla(u-\\widetilde u)\\|_2
\\le\\alpha^{-1}\\bigl(\\|F-\\widetilde F\\|_{V'}+
\\|A-\\widetilde A\\|_\\infty\\|\\nabla\\widetilde u\\|_2\\bigr).$$

This estimate separates load error from coefficient error. It says nothing about second derivatives. A discontinuous coefficient can preserve coercivity perfectly while destroying global second-derivative regularity. Weak well-posedness is stable under the displayed perturbations precisely because it asks for one derivative and measures the flux through a bilinear form.

Nonzero Dirichlet data require a lift. Suppose a given function g belongs to the first Sobolev space and represents the desired trace. Seek $u=g+w$ with w in the zero-boundary space. The equation for w has load $F(v)-A(g,v)$, which is bounded. Lax–Milgram constructs w uniquely. If two lifts have the same Sobolev trace and their difference lies in the zero-boundary space, the resulting physical solution is the same: their difference solves the homogeneous weak equation. Thus the method depends on the boundary class, not the arbitrary interior extension used to represent it.

For a Lipschitz boundary, the trace theorem and its range provide the standard interpretation of which boundary data admit such lifts. That general trace theorem is an input from Sobolev theory here. On an interval the opening's absolute-continuous representative makes the lift elementary: the affine function joining the two endpoint data suffices. On an irregular domain the closure definition remains meaningful even if pointwise boundary language becomes misleading.

### Worked example: an interface with a flux kink

On the unit interval set the diffusion coefficient equal to one on its first half and two on its second half, with zero load and endpoint values zero and one. A weak solution has constant flux. Writing that flux as j gives slopes j and j/2 on the two pieces. The total change is $j/2+j/4$, so j is four thirds. The solution is therefore $4x/3$ on the first half and $2x/3+1/3$ on the second.

It is continuous, has square-integrable piecewise constant derivative and has the correct endpoint values. Its flux is constant across the interface, so testing against every zero-boundary function gives zero. This proves directly that it is the unique weak solution. Its ordinary slope jumps at the interface, so its second distributional derivative has a point mass and is not square integrable. Uniform ellipticity did not prevent this kink.

If one instead glued pieces with unequal flux, integration by parts on the two sides would leave a test-function evaluation at the interface. That residual is a point load. The condition selected by the zero-load weak formulation is continuity of flux, not continuity of the ordinary derivative across a change of material coefficient. The example therefore ties the function-space equation to the physically meaningful transmission condition without demanding unjustified smoothness.

## Neumann data are a quotient-space problem

Let the domain now be bounded, connected and Lipschitz. Use the full first Sobolev space and a diffusion form without a reaction term. A boundary load can be included when it is a bounded functional on the trace space; square-integrable boundary data suffice under the usual bounded trace estimate. The combined load must vanish on constants. This is the compatibility condition in functional form, covering both volume and boundary data without imposing unnecessary pointwise normal derivatives on the unknown solution.

Let $V_\\diamond$ be the closed subspace of mean-zero functions. Its gradient norm is equivalent to its Sobolev norm by the mean-zero Poincaré inequality. For bounded connected Lipschitz domains that inequality is a Sobolev input; it can also be proved from compact embedding by contradiction: a normalized sequence with gradients tending to zero has a strongly square-integrable subsequence, whose limit has zero gradient and hence is constant on a connected domain, contradicting both its zero mean and unit norm. Compact embedding and the zero-gradient characterization are the stated ingredients of that argument.

Apply Lax–Milgram on the mean-zero space to obtain a unique normalized solution. To recover the equation for an arbitrary test function, subtract its mean; the gradient form ignores that constant and compatibility makes the load ignore it too. Every solution differs from the normalized one by a constant, because testing the difference with its mean-zero part forces its gradient to vanish. On a disconnected domain the same reasoning works component by component and requires compatibility on each component.

### Worked example: compatible nonzero flux

On the unit interval take $-u''=1$, outward derivative minus one at the left endpoint and zero at the right endpoint. Their sum plus the integral load is zero. Integrating gives $u'=-x+1$, hence $u=-x^2/2+x+C$. Its mean is one third plus C, so the normalized solution has C equal to minus one third.

Direct integration by parts verifies the weak identity with both boundary terms. Changing the left outward derivative to zero would make the total load on the constant test function equal to one, so no weak solution could exist. Adding an arbitrary constant cannot repair incompatible data because it changes neither derivative nor boundary flux. The compatibility check belongs before solving, not after choosing a normalization.

## Truncation proves a weak sign principle

For a scalar Sobolev function, its negative part belongs to the same first Sobolev space and has gradient minus the original gradient on the negative set and zero elsewhere. A short justification uses smooth approximations of the negative-part function that vanish on the nonnegative half-line, have derivative bounded by one and converge together with their derivatives away from the transition point. The smooth-composition chain rule follows by approximating the Sobolev function locally by smooth functions. Dominated convergence then passes the bounded derivative times the Sobolev gradient to the limit. If the original function has zero trace, so does its negative part, by the same compactly supported approximation argument.

Suppose the zero-Dirichlet weak load is nonnegative on nonnegative tests, the reaction coefficient is nonnegative and the diffusion matrix is uniformly elliptic. Test with the nonnegative negative part. The diffusion and reaction terms become the negatives of their corresponding energies on the negative set. The right side is nonnegative, forcing the negative-part gradient to vanish. Zero boundary and Poincaré then force the negative part itself to vanish. Thus the weak solution is nonnegative almost everywhere.

Subtracting two equations with the same coefficients gives comparison when their loads are ordered as functionals and their boundary traces are ordered in the appropriate truncation sense. This is an almost-everywhere conclusion. Turning it into a pointwise statement requires a continuous representative, which is additional regularity. The sign of the operator is also essential: a positive forcing in minus the Laplacian gives a nonnegative zero-boundary solution, with a possible positive interior maximum.

### Worked example: a reaction threshold

On the unit interval consider $-u''-\\mu u=f$ with zero endpoints. At $\\mu=\\pi^2$, the nonzero function $\\sin(\\pi x)$ solves the homogeneous equation, so uniqueness fails. If f equals that same sine, testing a proposed solution against it gives zero on the left after integration by parts but a positive number on the right. No solution exists for that load.

For $\\mu<\\pi^2$, the sharp interval Poincaré inequality gives a positive coercivity constant for nonnegative $\\mu$ below that threshold; negative $\\mu$ only adds energy. At the threshold the inverse bound fails because a null direction appears. Above it, failure of coercivity does not by itself imply nonexistence for every load: the operator may be invertible away from later eigenvalues. The example distinguishes a sufficient coercive theorem from a full spectral classification.

## Galerkin projection has a direct error proof

Let a finite-dimensional conforming space be given, and restrict the weak equation to that space. Coercivity gives an invertible discrete linear map even when the form is nonsymmetric: a homogeneous discrete solution tested against itself is zero. Finite-dimensional injectivity implies surjectivity. Subtracting the exact and discrete equations gives Galerkin orthogonality against every discrete test.

For any discrete comparison function, split the exact error into its difference from that function plus the comparison function's difference from the discrete solution. The latter contribution vanishes when inserted as the test in the error form. Coercivity on the error and boundedness then yield the quasi-optimality estimate stated earlier. If the error norm is zero the estimate already holds; otherwise divide by it. This proof exposes precisely which two constants must refer to the same norm.

For a symmetric positive form, the solution is the orthogonal projection in the energy inner product. Expanding the squared energy distance to any discrete comparison function gives the exact error energy plus the squared distance between the two discrete functions; the cross term is zero. That Pythagorean identity proves exact best approximation in energy, which can be sharper than inserting unrelated Sobolev continuity constants.

An inexact discrete solution has an extra residual functional. If its dual norm on the discrete space is at most epsilon, coercivity bounds its distance from the exact discrete solution by epsilon divided by the coercivity constant. Add this algebraic error to the approximation error. A tiny coefficient-vector residual without a norm conversion is insufficient: matrix conditioning, basis scaling and the function-space norm determine what that vector means for the solution.

The earlier combined elliptic/parabolic development, including every original heat-energy statement and all twenty worked solutions, remains in the [registered retained reading](back-matter/retained-elliptic-parabolic-reading.md). The separate parabolic chapter develops its evolution-space proof. No weak existence theorem here is presented as a global regularity or finite-element convergence-rate theorem.

## Exercises with complete worked solutions

### 1. Weak derivative
Find the weak derivative of $u(x)=|x|$ on $(-1,1)$.

<details><summary>Hint 1</summary>

Split the test integral at zero.

</details>

<details><summary>Hint 2</summary>

Continuity cancels the interface value terms.

</details>

<details><summary>Full solution</summary>

**Solution.** Split the integral at zero and integrate by parts. Boundary terms at zero cancel because u is continuous, yielding $-\\int \\operatorname{sign}(x) \\phi(x)dx$. Thus the weak derivative is sign(x) almost everywhere.

</details>

### 2. Jump failure
Why is the step function not in $H^1(-1,1)$?

<details><summary>Hint 1</summary>

Compute the distributional derivative at the jump.

</details>

<details><summary>Hint 2</summary>

Shrinking smooth bumps distinguish a point mass from an L2 function.

</details>

<details><summary>Full solution</summary>

**Solution.** Integration by parts produces evaluation of the test function at the jump, corresponding to a Dirac mass. No L2 function represents that functional, so the weak derivative is not in L2.

</details>

### 3. Poisson form
Derive the weak form of $-u''=f$, $u(0)=u(1)=0$.

<details><summary>Hint 1</summary>

Multiply by a zero-boundary test.

</details>

<details><summary>Hint 2</summary>

Move one derivative and retain the sign of the operator.

</details>

<details><summary>Full solution</summary>

**Solution.** Multiply by $v \\in H_0^1$ and integrate: $-\\int u''v=\\int u'v'$, since v has zero trace. Hence $\\int u'v'=\\int fv$.

</details>

### 4. Uniqueness
Show the homogeneous Dirichlet weak Poisson problem has only zero solution.

<details><summary>Hint 1</summary>

Subtract two weak solutions.

</details>

<details><summary>Hint 2</summary>

Test their difference against itself and use Poincaré.

</details>

<details><summary>Full solution</summary>

**Solution.** Set v=u. Then $\\int |\\nabla u|^2=0$, so u is almost everywhere constant. Its zero trace forces that constant to be zero.

</details>

### 5. Neumann compatibility
For $-u''=f$ on $(0,1)$ with outward fluxes g0,g1, state compatibility.

<details><summary>Hint 1</summary>

Integrate minus the second derivative.

</details>

<details><summary>Hint 2</summary>

The left outward derivative has the opposite sign from the coordinate derivative.

</details>

<details><summary>Full solution</summary>

**Solution.** Integrating the equation gives $-u'(1)+u'(0)=\\int f$. With outward derivatives $g1=u'(1)$, $g0=-u'(0)$, this is $\\int f+g0+g1=0$.

</details>

### 6. Neumann nonuniqueness
If u solves a pure Neumann problem, what else solves it?

<details><summary>Hint 1</summary>

Add a constant to the function.

</details>

<details><summary>Hint 2</summary>

Neither the gradient nor its prescribed normal flux changes.

</details>

<details><summary>Full solution</summary>

**Solution.** $u+C$ has the same gradient, Laplacian, and normal derivative for every constant C. Fixing zero mean selects one representative.

</details>

### 7. Coercivity
If $a\\geq 2$ and  $c\\ge0$, bound A(v,v).

<details><summary>Hint 1</summary>

Discard the nonnegative reaction energy.

</details>

<details><summary>Hint 2</summary>

Use Poincaré to convert gradient control to the chosen full norm.

</details>

<details><summary>Full solution</summary>

**Solution.** $A(v,v)\\geq 2\\lVert \\nabla v\\rVert_2^2$. Poincare then controls the full H1 norm on $H_0^1$, with a domain-dependent constant.

</details>

### 8. Negative reaction warning
Why can c<0 cause trouble?

<details><summary>Hint 1</summary>

Use a first Dirichlet eigenfunction.

</details>

<details><summary>Hint 2</summary>

A negative reaction can cancel its derivative energy.

</details>

<details><summary>Full solution</summary>

**Solution.** The term $\\int c v^2$ can cancel gradient energy. At an eigenvalue it creates a nontrivial kernel; beyond it the standard coercivity bound fails.

</details>

### 9. Heat decay
For unforced zero-boundary heat flow, show L2 energy is nonincreasing.

<details><summary>Hint 1</summary>

Use the evolving solution as an energy test.

</details>

<details><summary>Hint 2</summary>

The diffusion contribution has the nonnegative sign.

</details>

<details><summary>Full solution</summary>

**Solution.** Test with u: $1/2 d\\lVert u\\rVert_2^2/dt+\\int a|\\nabla u|^2=0$. The second term is nonnegative, so energy cannot increase.

</details>

### 10. Exponential heat decay
Use Poincare $\\lVert u\\rVert\\leq C_P\\lVert \\nabla u\\rVert$ and $a\\ge a_0$.

<details><summary>Hint 1</summary>

Replace the gradient norm by the Poincaré lower bound.

</details>

<details><summary>Hint 2</summary>

Integrate the resulting scalar differential inequality.

</details>

<details><summary>Full solution</summary>

**Solution.** $d\\lVert u\\rVert^2/dt\\leq -2a0/C_P^2 \\lVert u\\rVert^2$. Gronwall gives $\\lVert u(t)\\rVert^2\\leq \\exp\\left(-2a0t/C_P^2\\right)\\lVert u(0)\\rVert^2$.

</details>

### 11. Weak versus classical
Does H1 weak existence imply u is twice continuously differentiable?

<details><summary>Hint 1</summary>

Recall the interface solution with a flux-continuous kink.

</details>

<details><summary>Hint 2</summary>

Weak well-posedness uses fewer derivatives than classical smoothness.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Additional coefficient, data, boundary, and domain regularity are needed for elliptic regularity. Corners or jumps may prevent classical smoothness.

</details>

### 12. Galerkin orthogonality
Derive $A(u-u_h,v_h)=0$.

<details><summary>Hint 1</summary>

Write both weak equations on the discrete test space.

</details>

<details><summary>Hint 2</summary>

Subtract them without changing the test function.

</details>

<details><summary>Full solution</summary>

**Solution.** Both exact and discrete solutions equal F on every $v_h \\in V_h$; subtract their equations.

</details>

### 13. Best approximation
If M=alpha in Cea’s lemma, what is obtained?

<details><summary>Hint 1</summary>

Keep the norm associated with each constant explicit.

</details>

<details><summary>Hint 2</summary>

Symmetric forms also have their own energy inner product.

</details>

<details><summary>Full solution</summary>

**Solution.** In the $H^1$-based norm, Céa gives a quasi-optimality factor $M/\\alpha$, which becomes one if those constants coincide. For a symmetric positive-definite form, the sharper statement is exact orthogonal projection and best approximation in the energy norm.

</details>

### 14. No rate yet
Why does Cea alone give no power of h?

<details><summary>Hint 1</summary>

Identify what remains on the right side of Céa.

</details>

<details><summary>Hint 2</summary>

An approximation theorem needs regularity and mesh hypotheses.

</details>

<details><summary>Full solution</summary>

**Solution.** It reduces error to an approximation infimum. Converting that infimum to $Ch^p$ requires regularity of u and mesh/finite-element approximation estimates.

</details>

### 15. Algebraic residual
A linear solver residual is tiny. Is PDE error tiny?

<details><summary>Hint 1</summary>

Separate the exact discrete solution from the exact PDE solution.

</details>

<details><summary>Hint 2</summary>

An algebraic residual only controls the first of those differences after norm conversion.

</details>

<details><summary>Full solution</summary>

**Solution.** It only says the finite linear system is nearly solved. Discretization, quadrature, modeling, and conditioning errors remain.

</details>

### 16. Weak nonlinear limit
If $u_n$ converges weakly in L2, must $u_n^2$ converge weakly to u squared?

<details><summary>Hint 1</summary>

Consider oscillations whose means vanish but whose squares do not.

</details>

<details><summary>Hint 2</summary>

Strong convergence controls products that weak convergence alone does not.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Oscillations can retain quadratic energy. Strong convergence or compensated structure is needed to pass such nonlinearities.

</details>

### 17. Boundary meaning
What does zero data in $H_0^1$ mean?

<details><summary>Hint 1</summary>

Start with the closure definition.

</details>

<details><summary>Hint 2</summary>

A trace identification is an additional theorem about the domain.

</details>

<details><summary>Full solution</summary>

**Solution.** It means approximation in H1 by compactly supported smooth functions; on trace-regular domains the trace is zero. It is not a pointwise statement about an arbitrary representative.

</details>

### 18. Manufactured solution
For $u=\\sin(\\pi x)$ on $(0,1)$, find f in $-u''=f$.

<details><summary>Hint 1</summary>

Differentiate the sine twice.

</details>

<details><summary>Hint 2</summary>

The minus sign in the operator reverses the second derivative sign.

</details>

<details><summary>Full solution</summary>

**Solution.** $u''=-\\pi^2 \\sin(\\pi x)$, so $f=\\pi^2 \\sin(\\pi x)$. This exact pair tests assembly and convergence, but not rough-data performance.

</details>

### 19. Flux check
For the manufactured solution, verify integral f equals boundary flux balance.

<details><summary>Hint 1</summary>

Evaluate the endpoint derivatives.

</details>

<details><summary>Hint 2</summary>

Compare their outward-sign balance with the integrated source.

</details>

<details><summary>Full solution</summary>

**Solution.** $\\int_0^1 f dx=2\\pi$. Also $-u'(1)+u'(0)=-(-\\pi)+\\pi=2\\pi$. The balance agrees under the one-dimensional sign convention.

</details>

### 20. Claim repair
Repair: “The mesh plot is smooth, so the PDE has a smooth solution.”

<details><summary>Hint 1</summary>

Separate a finite-dimensional picture from an analytic regularity theorem.

</details>

<details><summary>Hint 2</summary>

A piecewise polynomial can appear smooth even when the limiting exact field is not.

</details>

<details><summary>Full solution</summary>

**Solution.** A finite-element representation is piecewise polynomial and can look smooth independent of exact regularity. Claim only a discrete field with declared residual/refinement; establish exact regularity from analytic hypotheses.

</details>


## Chapter synthesis

Weak derivatives make rough solutions legitimate; coercive forms turn elliptic equations into Hilbert-space problems; energy estimates organize parabolic uniqueness and stability; Galerkin methods connect analysis to computation. Regularity, pointwise interpretation, and numerical error each require additional arguments.

## Dependency ledger

- Integration by parts is replaced by weak derivative definitions and traces.
- Poincare inequality and uniform ellipticity supply coercivity.
- Lax–Milgram supplies linear weak existence and uniqueness, not smoothness.
- Parabolic estimates use duality, energy testing, and Gronwall.
- Galerkin limits require density, compactness, and justified limit passage.
- Finite-element rates require regularity and approximation theory beyond quasi-optimality.
`;export{e as default};