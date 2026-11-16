var e=`---
parent_id: book-ode-first-course
chapter_id: boundary-value-sturm-liouville
title: "Boundary Value Problems and Sturm–Liouville Theory"
level: undergraduate
license: CC BY-SA 4.0
---

# Boundary Value Problems and Sturm–Liouville Theory

An initial-value problem gives position and velocity at the same time. A boundary-value problem may prescribe displacement at two different locations. A stretched string fixed at both ends is the basic example: the endpoints constrain the shape, while the allowable oscillation frequencies become part of the answer.

Moving one condition to the other endpoint changes existence and uniqueness. Depending on a parameter, a problem can have one solution, no solution, or infinitely many. Sturm–Liouville form exposes a useful structure behind such questions. An integration-by-parts identity proves that eigenvalues are real and that different eigenfunctions are orthogonal with the correct weight.

**Preparation.** Read [Second-Order Linear Equations](second-order-linear-equations.md), including regular IVP uniqueness, and [Forcing and Variation of Parameters](forcing-variation-parameters.md). We use integration by parts, elementary trigonometry and complex conjugation only in the proof that eigenvalues cannot be nonreal. No abstract operator or Hilbert-space theory is assumed. Completeness of eigenfunction expansions is a later theorem, clearly separated below.

## 1. Two endpoints change the question

Consider \\(y''+y=0\\) on [0,L] with \\(y(0)=0\\). The first condition gives \\(y=B\\sin x\\). The right-end condition \\(y(L)=b\\) becomes \\(B\\sin L=b\\).

If \\(\\sin L\\ne0\\), there is exactly one choice of B. If \\(\\sin L=0\\) and b≠0, there is no solution. If \\(\\sin L=0\\) and b=0, every B works. This is not a failure of IVP uniqueness: the right-end value does not prescribe the initial velocity until this algebraic condition can be solved.

A boundary-value solution still satisfies its differential equation throughout the interval. Endpoint conditions alone do not make an arbitrary interpolating curve a solution. Likewise an eigenfunction must be nonzero. The zero function satisfies every homogeneous boundary condition for every parameter and therefore carries no spectral information.

**Worked Example 12.1 (one, none, or infinitely many).** On [0,\\(\\pi\\)], solve \\(y''+y=0,y(0)=0,y(\\pi)=1\\). Every candidate is B sin x and has value zero at \\(\\pi\\), so there is no solution. Replacing the final value by zero gives infinitely many solutions. On [0,\\(\\pi/2\\)], replacing the endpoint condition by \\(y(\\pi/2)=1\\) gives the unique solution sin x. The same differential expression has all three possibilities because the interval and boundary data differ.

## 2. Regular self-adjoint form

**Definition 12.1 (regular Sturm–Liouville problem).** On a finite interval [a,b], a<b, let p be real \\(C^1\\), q and w real continuous, with p(x)>0 and w(x)>0 everywhere. Define
\\[
L[y]=-(p(x)y')'+q(x)y.
\\]
The eigenvalue equation is \\(L[y]=\\lambda w y\\), with real separated homogeneous boundary conditions
\\[
\\alpha_a y(a)+\\beta_a p(a)y'(a)=0,\\qquad
\\alpha_b y(b)+\\beta_b p(b)y'(b)=0,
\\]
where each coefficient pair is not both zero. An eigenfunction is a nonzero \\(C^2\\) solution satisfying both conditions; its parameter is an eigenvalue.

Dirichlet means a prescribed zero value, Neumann means a prescribed zero derivative, and Robin means a linear combination of value and flux p y'. Our endpoint signs are explicitly those in the displayed conditions. An outward-normal convention may use different signs at the two ends; formulas must follow their stated convention.

Positivity and continuity on a compact interval keep p and w bounded away from zero. Dividing by p yields a regular second-order equation, so the IVP theorem applies. Problems on infinite intervals, with vanishing p or w, or with singular coefficients require additional endpoint theory and are outside this regular definition.

Many equations can be converted to this form. For \\(y''+P(x)y'+Q(x)y+\\lambda R(x)y=0\\), multiply by \\(p=e^{\\int P}>0\\). Then \\((py')'+pQy+\\lambda pRy=0\\), so
\\[
-(py')'-pQy=\\lambda pRy.
\\]
Thus q=-pQ and w=pR. A Sturm–Liouville problem with positive weight requires R>0 in this construction. Multiplication by an integrating factor does not automatically turn an arbitrary sign-changing coefficient into a positive weight.

## 3. Green's identity and the boundary term

**Theorem 12.2 (Green identity).** For real \\(C^2\\) functions u,v,
\\[
\\int_a^b[uL[v]-vL[u]]\\,dx
=[p(vu'-uv')]_a^b.
\\]
If both satisfy the same separated boundary conditions of Definition 12.1, this boundary expression is zero.

**Proof.** Substitute the expression for L. The q terms cancel. Integration by parts gives
\\[
\\int_a^b -u(pv')'+v(pu')'
=[-upv'+vpu']_a^b+
\\int_a^b(u'pv'-v'pu')\\,dx.
\\]
The remaining integrand is zero, leaving the stated boundary term.

At either endpoint, if β=0, the nonzero α forces both u and v to vanish, so the endpoint expression is zero. If β≠0, both satisfy \\(py'=-(\\alpha/\\beta)y\\). Substitution cancels the two products. This holds separately at both endpoints. \\(\\square\\)

The identity is called self-adjoint because integration can transfer L between the two factors without a surviving boundary term on this boundary class. Here the word describes an explicit formula; a complete operator-theoretic definition requires a function space and an operator domain, which are not being silently asserted.

For complex functions, replace one factor by its conjugate. Since p,q and the boundary coefficients are real, conjugation commutes with L and preserves the boundary conditions. The same integration-by-parts calculation therefore applies to complex eigenfunctions as well.

## 4. Real eigenvalues and weighted orthogonality

**Theorem 12.3 (reality).** Every eigenvalue of a regular Sturm–Liouville problem with the stated real separated conditions is real, even if complex-valued candidate eigenfunctions are initially allowed.

**Proof.** Let \\(L[y]=\\lambda wy\\). Its conjugate satisfies \\(L[\\overline y]=\\overline\\lambda w\\overline y\\). Apply Green's identity to \\(\\overline y,y\\); its boundary term vanishes by the same endpoint calculation. Hence
\\[
(\\lambda-\\overline\\lambda)\\int_a^b w|y|^2\\,dx=0.
\\]
The integral is positive. Indeed, y is nonzero somewhere, continuity makes its magnitude bounded below on a small relative interval of positive length, and w has a positive minimum there. Therefore \\(\\lambda=\\overline\\lambda\\), proving reality. \\(\\square\\)

**Theorem 12.4 (orthogonality).** If real eigenfunctions u,v have different eigenvalues λ,μ, then
\\[
\\int_a^b w(x)u(x)v(x)\\,dx=0.
\\]

**Proof.** Green's identity with the two eigenvalue equations gives
\\[
0=\\int[u(\\mu wv)-v(\\lambda wu)]
=(\\mu-\\lambda)\\int wuv.
\\]
Since μ-λ is nonzero, the weighted integral vanishes. \\(\\square\\)

The weight is not optional. It comes from the equation's right-hand side, and in a variable-weight problem ordinary unweighted orthogonality need not follow. Similarly the theorem requires distinct eigenvalues; eigenfunctions for the same eigenvalue need a separate analysis.

**Proposition 12.5 (simplicity for separated regular problems).** For a fixed eigenvalue, all real eigenfunctions are scalar multiples.

**Proof.** The left boundary condition is one nontrivial linear condition on the two initial quantities \\(y(a),p(a)y'(a)\\). Its allowed pairs form a one-dimensional line. For two eigenfunctions, choose a constant so that one initial pair equals that constant times the other. Neither pair can be zero in both entries, since IVP uniqueness would make that eigenfunction identically zero. Their difference has zero value and derivative at a, so IVP uniqueness makes it zero throughout the interval. \\(\\square\\)

Thus the elementary boundary algebra and initial-value theorem already prove a strong spectral fact, without invoking an abstract spectral theorem.

## 5. Energy and the sign of an eigenvalue

Multiplying the equation by \\(\\overline y\\) and integrating once by parts gives
\\[
\\lambda\\int_a^b w|y|^2
=\\int_a^b[p|y'|^2+q|y|^2]\\,dx
-[\\overline y\\,p y']_a^b.
\\]
For Dirichlet or Neumann conditions at each end, the boundary product vanishes. If q≥0, the right side is then nonnegative, so λ≥0. Under Dirichlet conditions, λ=0 would force y'=0 and hence a constant zero endpoint value, giving only the forbidden zero function. Thus λ>0 in that case.

For Robin conditions, the boundary term need not vanish in this quadratic identity. It vanished in Green's antisymmetric expression because both functions obeyed the same ratio. These are different statements. Positivity of p,w and nonnegativity of q do not by themselves force nonnegative eigenvalues for arbitrary Robin data.

**Worked Example 12.2 (a negative Robin eigenvalue).** On [0,1], take p=w=1,q=0 and impose \\(y'+y=0\\) at both endpoints. The function \\(y=e^{-x}\\) satisfies both conditions and \\(-y''=-y\\), so λ=-1 is an eigenvalue. In the energy formula, the boundary contribution can offset the nonnegative derivative integral. This example satisfies the regular self-adjoint assumptions and illustrates why reality and positivity are separate conclusions.

## 6. Complete calculation for constant coefficients

**Theorem 12.6 (Dirichlet spectrum).** For constants p₀>0,w₀>0,q₀ real on [0,L], L>0, all eigenvalues of
\\[
-p_0y''+q_0y=\\lambda w_0y,\\qquad y(0)=y(L)=0
\\]
are
\\[
\\lambda_n=\\frac{q_0+p_0(n\\pi/L)^2}{w_0},\\quad n=1,2,\\ldots,
\\]
and their eigenfunctions are nonzero multiples of \\(\\sin(n\\pi x/L)\\).

**Proof.** Put \\(\\sigma=(\\lambda w_0-q_0)/p_0\\), so \\(-y''=\\sigma y\\). The reality theorem makes σ real. If σ=0, solutions are A+Bx; the two zero endpoint conditions force A=B=0. If σ<0, write σ=-κ² with κ>0. The condition at zero leaves \\(y=B\\sinh(\\kappa x)\\), and sinh(κL)>0 forces B=0. Thus no eigenfunction occurs in either case.

If σ>0, write σ=k². The zero condition at the left gives y=B sin kx. A nonzero B satisfies the right condition exactly when sin kL=0, meaning kL=nπ for a positive integer n. This gives the listed values and functions. Each listed function directly satisfies the equation and both endpoints. The three sign cases exhaust all real σ, so there are no other eigenvalues. \\(\\square\\)

**Worked Example 12.3 (the first string modes).** For \\(-y''=\\lambda y\\) on [0,2], the first three eigenvalues are \\(\\pi^2/4,\\pi^2,9\\pi^2/4\\), with shapes \\(\\sin(\\pi x/2),\\sin(\\pi x),\\sin(3\\pi x/2)\\). The eigenvalue is a squared spatial frequency, not the frequency itself. Integrating the square of each shape gives one because the interval length is two. Their cross integrals vanish either by the product-to-sum identity or Theorem 12.4. These facts permit normalization but do not yet prove every function is an expansion in these shapes.

For Neumann conditions \\(y'(0)=y'(L)=0\\), the σ<0 case has no nonzero solution: the first condition leaves A cosh κx, whose derivative at L forces A=0. At σ=0 the constants survive. At σ=k²>0, the first condition leaves A cos kx and the second requires sin kL=0. Therefore the spectrum is the same formula with n=0,1,2,... and cosine eigenfunctions, with the n=0 function constant.

For mixed conditions \\(y(0)=0,y'(L)=0\\), neither σ=0 nor σ<0 allows a nonzero solution: the corresponding x or sinh form has nonzero derivative at L. For σ=k²>0, the sine form requires cos kL=0. Thus
\\[
\\lambda_n=\\frac{q_0+p_0((n+1/2)\\pi/L)^2}{w_0},
\\quad n=0,1,2,\\ldots.
\\]
These calculations prove the full constant-coefficient spectra for the stated three boundary classes, including the zero mode where it actually exists. Boundary conditions change the allowed frequencies, not just their normalization.

## 7. Inhomogeneous data and shooting

A scalar shooting construction makes the uniqueness issue practical. For a regular forced equation with y(a)=A, first solve one IVP z with that value and a convenient initial slope zero. Let h solve the homogeneous equation with h(a)=0,h'(a)=1. Every solution with the left value A is \\(z+ch\\), by initial-value uniqueness. The condition at b becomes \\(z(b)+ch(b)=B\\).

If h(b)≠0, there is a unique c and hence one boundary solution. If h(b)=0, existence requires z(b)=B, and then every c works. This is an exact statement about a linear BVP, not merely a numerical heuristic. Numerical shooting additionally needs accurate IVP values and may become sensitive when h(b) is small.

**Worked Example 12.4 (a resonant compatibility condition).** On [0,\\(\\pi\\)], consider \\(-y''-y=f(x)\\) with zero values at both ends. The homogeneous eigenfunction sin x has eigenvalue zero for this differential expression. Green's identity gives the necessary condition \\(\\int_0^\\pi f(x)\\sin x\\,dx=0\\). For f=1, the integral is two, so no solution exists. For f=sin 2x, a particular solution is \\((1/3)\\sin2x\\), since \\(-y''-y=(4/3-1/3)\\sin2x\\). It satisfies both endpoints, and adding any multiple of sin x gives infinitely many solutions. This verifies compatibility and nonuniqueness in explicit cases without asserting a general Fredholm theorem.

## 8. What has not yet been proved

Reality, orthogonality and explicit spectra do not by themselves prove completeness. A complete expansion theorem says that suitable functions can be approximated or represented using all eigenfunctions, in a specified mode of convergence. That theorem requires additional analysis. Uniform, mean-square and pointwise convergence are different conclusions, particularly near boundaries or jumps.

For the sine family, Fourier theory supplies the appropriate expansion theorems. General regular Sturm–Liouville completeness belongs to a deeper course in analysis or differential operators. This chapter establishes the identities and constant-coefficient examples that make such a continuation meaningful; it does not infer an infinite expansion from pairwise orthogonality alone.

The same caution applies to physical separation of variables. A spatial eigenproblem may identify possible modes of a string or heat equation, but satisfying arbitrary initial data through an infinite sum requires an expansion theorem and justification of termwise operations. These are the next mathematical questions, not missing algebraic constants.

## Exercises

### Exercise 12.1 {#boundary-value-sturm-liouville-ex-1}

Solve \\(y''=0,y(0)=1,y(2)=5\\).

<details><summary>Hint 1</summary>

The general solution is affine.

</details>
<details><summary>Hint 2</summary>

Use the two endpoint values to determine its slope.

</details>
<details><summary>Solution</summary>

Write y=A+Bx. The data give A=1 and 1+2B=5, so \\(y=1+2x\\). This BVP has one solution.

</details>

### Exercise 12.2 {#boundary-value-sturm-liouville-ex-2}

Why does \\(y''+y=0,y(0)=0,y(\\pi)=2\\) have no solution?

<details><summary>Hint 1</summary>

Use the left condition first.

</details>
<details><summary>Hint 2</summary>

Every remaining sine solution vanishes at pi.

</details>
<details><summary>Solution</summary>

The left condition gives y=B sin x, and thus y(π)=0 for every B. It cannot equal two. IVP uniqueness is not contradicted because no initial velocity was prescribed.

</details>

### Exercise 12.3 {#boundary-value-sturm-liouville-ex-3}

Find all Dirichlet eigenvalues of \\(-2y''+3y=4\\lambda y\\) on [0,1].

<details><summary>Hint 1</summary>

Identify p₀,q₀,w₀.

</details>
<details><summary>Hint 2</summary>

The admissible squared wave numbers are n²π².

</details>
<details><summary>Solution</summary>

The values are \\(\\lambda_n=(3+2n^2\\pi^2)/4\\), n≥1, with eigenfunctions sin(nπx). The constant q term shifts the spectrum and the weight rescales it.

</details>

### Exercise 12.4 {#boundary-value-sturm-liouville-ex-4}

Derive Green's identity for p=1,q=0.

<details><summary>Hint 1</summary>

Integrate \\(-uv''+vu''\\).

</details>
<details><summary>Hint 2</summary>

The first-derivative integral terms cancel.

</details>
<details><summary>Solution</summary>

Integration by parts gives \\(\\int(-uv''+vu'')=[-uv'+vu']+\\int(u'v'-v'u')=[vu'-uv']\\). This is the stated identity in the constant-p case.

</details>

### Exercise 12.5 {#boundary-value-sturm-liouville-ex-5}

Show directly that sin x and sin 2x are orthogonal on [0,π].

<details><summary>Hint 1</summary>

Use a product-to-sum identity.

</details>
<details><summary>Hint 2</summary>

The integrals of cos x and cos 3x over this interval vanish.

</details>
<details><summary>Solution</summary>

\\(\\sin x\\sin2x=(\\cos x-\\cos3x)/2\\). Integrating from zero to pi gives zero. They also correspond to distinct eigenvalues 1 and 4 under Dirichlet conditions.

</details>

### Exercise 12.6 {#boundary-value-sturm-liouville-ex-6}

Find the Neumann spectrum of \\(-y''=\\lambda y\\) on [0,π], including zero.

<details><summary>Hint 1</summary>

Separate λ=0 from λ>0.

</details>
<details><summary>Hint 2</summary>

Positive modes are cosines.

</details>
<details><summary>Solution</summary>

The zero mode is the nonzero constant function with λ=0. Positive eigenvalues are n² for n≥1, with cos nx. Negative values yield only the zero function after both derivative conditions, so this list is exhaustive.

</details>

### Exercise 12.7 {#boundary-value-sturm-liouville-ex-7}

Find the mixed spectrum for \\(y(0)=0,y'(1)=0\\) and \\(-y''=\\lambda y\\).

<details><summary>Hint 1</summary>

The left condition selects a sine.

</details>
<details><summary>Hint 2</summary>

Its derivative at one requires a cosine zero.

</details>
<details><summary>Solution</summary>

The eigenvalues are \\(((n+1/2)\\pi)^2\\), n≥0, with sine eigenfunctions at those wave numbers. Zero and negative parameters fail the right derivative condition unless the solution vanishes identically.

</details>

### Exercise 12.8 {#boundary-value-sturm-liouville-ex-8}

Explain why arbitrary Robin conditions do not ensure nonnegative eigenvalues when q=0.

<details><summary>Hint 1</summary>

The quadratic energy identity retains a boundary term.

</details>
<details><summary>Hint 2</summary>

Test \\(e^{-x}\\) with y'+y=0 at both ends.

</details>
<details><summary>Solution</summary>

That function satisfies \\(-y''=-y\\) and both Robin conditions on [0,1], giving eigenvalue -1 despite p=w=1,q=0. Self-adjoint boundary cancellation proves reality, but the different quadratic boundary term need not vanish or be nonnegative.

</details>

### Exercise 12.9 {#boundary-value-sturm-liouville-ex-9}

Convert \\(y''+2xy'+\\lambda y=0\\) to Sturm–Liouville form.

<details><summary>Hint 1</summary>

Use an integrating factor for the first-derivative coefficient.

</details>
<details><summary>Hint 2</summary>

The factor is \\(e^{x^2}\\).

</details>
<details><summary>Solution</summary>

Multiplication gives \\((e^{x^2}y')'+\\lambda e^{x^2}y=0\\), or \\(-(e^{x^2}y')'=\\lambda e^{x^2}y\\). Thus p=w=\\(e^{x^2}>0\\) and q=0. On any finite interval these coefficients meet the regular assumptions with suitable separated endpoint conditions.

</details>

### Exercise 12.10 {#boundary-value-sturm-liouville-ex-10}

Show why every eigenfunction's initial value and derivative cannot both vanish.

<details><summary>Hint 1</summary>

The eigenvalue equation is a regular homogeneous ODE for a fixed parameter.

</details>
<details><summary>Hint 2</summary>

Apply the zero-data uniqueness theorem.

</details>
<details><summary>Solution</summary>

Since p is nonzero and its normalized coefficients are continuous, IVP uniqueness applies. Zero value and derivative would force the solution identically zero, forbidden for an eigenfunction. This fact permits the one-dimensional initial-data argument proving simplicity.

</details>

### Exercise 12.11 {#boundary-value-sturm-liouville-ex-11}

For \\(-y''-y=f\\) on [0,π] with zero endpoint values, prove \\(\\int f\\sin x=0\\) is necessary.

<details><summary>Hint 1</summary>

The function sin x solves the homogeneous equation and both endpoints.

</details>
<details><summary>Hint 2</summary>

Use Green's identity between y and sin x.

</details>
<details><summary>Solution</summary>

The boundary term vanishes, so \\(\\int \\sin x\\,L[y]=\\int y\\,L[\\sin x]=0\\). Since L[y]=f and L[sin x]=0, the condition follows. Necessity alone is not a proof of the full general solvability alternative.

</details>

### Exercise 12.12 {#boundary-value-sturm-liouville-ex-12}

Does orthogonality of all the displayed eigenfunctions prove every continuous function has a uniformly convergent expansion in them?

<details><summary>Hint 1</summary>

Orthogonality describes pairwise integrals.

</details>
<details><summary>Hint 2</summary>

Expansion and its mode of convergence are additional assertions.

</details>
<details><summary>Solution</summary>

No. Orthogonality alone neither proves the span dense nor supplies convergence of an infinite series to a prescribed target. A completeness theorem must specify a function class and convergence norm or pointwise statement. Fourier and general Sturm–Liouville expansion theorems provide those deeper results under additional analysis.

</details>

## Sources

Original exposition. Jiří Lebl's author-written [Sturm–Liouville problems](https://www.jirka.org/diffyqs/html/slproblems_section.html) provides a reference for regular problems and their broader spectral theory. Green's identity, reality, orthogonality, separated-eigenfunction simplicity and the stated constant-coefficient spectra are proved here. General eigenfunction completeness and singular-endpoint spectral theory are further topics, not established by the calculations in this chapter.

## Summary

Boundary conditions at two endpoints can change an ODE problem from uniquely solvable to incompatible or nonunique. Regular Sturm–Liouville form and real separated conditions make Green's boundary term cancel, proving real eigenvalues and weighted orthogonality. Initial-value uniqueness proves simplicity. Constant coefficients permit exhaustive Dirichlet, Neumann and mixed spectra by separating the parameter's sign cases. Robin boundary terms require care before asserting positivity. Infinite eigenfunction expansion needs a separate completeness theorem. The next chapter develops linear systems and the matrix exponential as a broader language for coupled trajectories.
`;export{e as default};