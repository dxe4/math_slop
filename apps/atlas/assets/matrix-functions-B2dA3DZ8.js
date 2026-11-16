var e=`---
parent_id: book-matrix-computation-applications
chapter_id: matrix-functions
status: draft
title: "Matrix Functions"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Matrix Functions

Matrix functions extend scalar functions to square matrices. The matrix exponential $e^{A}$ governs linear differential equations, the matrix sign function arises in control theory, and matrix powers $A^{p}$ appear in graph analysis and fractional calculus. This chapter defines matrix functions via the Jordan form and polynomial interpolation, presents the scaling-and-squaring algorithm for the exponential, and discusses condition estimation and verification.

## Definitions

For a diagonalizable matrix $A = V\\Lambda V^{-1}$, the natural definition is

$$
f(A) = Vf(\\Lambda)V^{-1} = V\\operatorname{diag}(f(\\lambda_{1}), \\dots, f(\\lambda_{n}))V^{-1}.
$$

For general $A$, let $\\nu_\\lambda$ be the size of the largest Jordan block belonging to eigenvalue $\\lambda$. If $f$ has derivatives through order $\\nu_\\lambda-1$ at every eigenvalue, choose a Hermite interpolation polynomial $p$ satisfying

$$p^{(j)}(\\lambda)=f^{(j)}(\\lambda),\\qquad 0\\le j<\\nu_\\lambda.$$

Such a polynomial is unique modulo the minimal polynomial of $A$, so $p(A)$ is unique; define $f(A)=p(A)$. This is the precise sense in which values and derivatives on the spectrum determine the matrix function. If $f$ is analytic on a domain containing $\\sigma(A)$, the contour integral

$$
f(A) = \\frac{1}{2\\pi i} \\oint_{\\Gamma} f(z)(zI - A)^{-1}\\, dz
$$

provides another equivalent definition.

## The matrix exponential

The matrix exponential is defined by the power series

$$
e^{A} = \\sum_{k=0}^{\\infty} \\frac{A^{k}}{k!},
$$

which converges for all $A$. It solves the linear ODE $\\dot{x} = Ax$ with $x(0) = x_{0}$: the solution is $x(t) = e^{At}x_{0}$.

### Scaling and squaring

Direct evaluation of the series is slow and numerically unstable for large $\\lVert A \\rVert$. The standard algorithm is scaling and squaring:

1. Choose the degree $m$ and scaling $s$ from a validated analytic backward-error bound for $X=2^{-s}A$ in an induced norm; the target tolerance determines the applicable threshold.
2. Evaluate the diagonal Pad\\'{e} approximant $r_m(X)$ where its denominator is invertible; for fixed $m$, its local analytic approximation error is $O(\\lVert X\\rVert^{2m+1})$ as $X\\to0$.
3. Square the result $s$ times: $e^{A} = (e^{2^{-s}A})^{2^{s}}$.

A backward-stability claim needs both analytic truncation control and floating-point analysis. In an analytic neighborhood of zero where the Pad\\'{e} denominator is invertible and the logarithm branch satisfies $\\log r_m(0)=0$, put $E_m(X)=\\log r_m(X)-X$. Exact squaring gives $r_m(X)^{2^s}=\\exp(A+2^sE_m(X))$. Thus an analytic bound $\\lVert E_m(X)\\rVert\\le\\tau\\lVert X\\rVert$ gives the same relative backward-error budget $\\tau$ at $A\\ne0$. Selecting $m,s$ must enforce that bound; a fixed cutoff alone does not make truncation error proportional to unit roundoff. Rounding in rational evaluation, linear solves and squaring requires a separate algorithm-specific bound, including overflow/underflow assumptions. 

## Matrix square root and sign

For a nonsingular matrix $A$ with no eigenvalues on the closed negative real axis $(-\\infty,0]$, the principal square root $A^{1/2}$ is the unique square root whose eigenvalues lie in the open right half-plane. This clean hypothesis excludes singular and branch-cut cases, where existence or uniqueness needs a more careful Jordan-block statement. It can be computed by a Schur method or, under suitable convergence conditions, by an iteration such as Denman–Beavers.

When $A$ has no eigenvalues on the imaginary axis, the matrix sign function has eigenvalue $+1$ on the invariant subspace associated with the open right half-plane and $-1$ on that associated with the open left half-plane. The sign matrix itself is not a projector. The spectral projectors are

$$P_{\\mathrm{right}}=\\frac{I+\\operatorname{sign}(A)}2,\\qquad
P_{\\mathrm{left}}=\\frac{I-\\operatorname{sign}(A)}2.$$

## Condition estimation

The Fr\\'{e}chet derivative of $f$ at $A$ in direction $E$ is the linear map $L_{f}(A, E)$ such that

$$
f(A + E) = f(A) + L_{f}(A, E) + o(\\lVert E \\rVert).
$$

The absolute condition number of the map $A\\mapsto f(A)$ in a chosen matrix norm is $\\lVert L_f(A)\\rVert$, the induced operator norm of the Fr\\'{e}chet derivative. When $A\\ne0$ and $f(A)\\ne0$, the corresponding relative condition number is

$$\\operatorname{cond}_{\\mathrm{rel}}(f,A)=
\\frac{\\lVert L_f(A)\\rVert\\,\\lVert A\\rVert}{\\lVert f(A)\\rVert}.$$

Evaluating $L_f(A,E)$ in a few random unit directions supplies sampled lower bounds on $\\lVert L_f(A)\\rVert$; it is not by itself a certified maximum. A condition estimator must state its norm, scaling, and probability or deterministic guarantee.

## Example: exponential of a small matrix

**Example 12.1 (exponential of a small matrix).**

Let

$$
A = \\begin{pmatrix}
0 & 1 \\\\
0 & 0
\\end{pmatrix}.
$$

Since $A^{2} = 0$, the series truncates after two terms:

$$
e^{A} = I + A = \\begin{pmatrix}
1 & 1 \\\\
0 & 1
\\end{pmatrix}.
$$

**Example 12.2 (A rotation exponential).** For $B = \\begin{pmatrix} 0 & -\\pi \\\\ \\pi & 0 \\end{pmatrix}$, the eigenvalues are $\\pm i\\pi$, so

$$
e^{B} = \\begin{pmatrix}
\\cos\\pi & -\\sin\\pi \\\\
\\sin\\pi & \\cos\\pi
\\end{pmatrix}
= \\begin{pmatrix}
-1 & 0 \\\\
0 & -1
\\end{pmatrix}
= -I.
$$

## Common errors and misconceptions

**Error: inferring commutation from one exponential product equality.** Commutation $AB=BA$ guarantees $e^{t(A+B)}=e^{tA}e^{tB}$ for every real $t$. Equality at one fixed time need not imply commutation, as [Higham's exposition](https://nhigham.com/2020/05/28/what-is-the-matrix-exponential/) emphasizes. Conversely, for square matrices of the same size over $\\mathbb R$ or $\\mathbb C$, equality for every real $t$ in a neighborhood of zero forces $AB=BA$. Exercise 13.5 proves these statements and distinguishes such a local identity from agreement at common integer times.

**Error: computing $e^{A}$ by the Taylor series for large $\\lVert A \\rVert$.** The series converges slowly and suffers from catastrophic cancellation. Use scaling and squaring instead.

**Error: ignoring the principal branch for matrix square roots.** The matrix square root is not unique. The principal square root is the standard choice, but other branches may be needed in applications.

## Preparation, definitions and a convergent construction

Required preparation is the Jordan form, scalar power series, matrix norms and the [eigenvalue-computation chapter](eigenvalue-computations.md). The contour formulation additionally uses complex integration and is cited as a functional-calculus theorem. The elementary exponential results below do not require that formulation or diagonalizability.

**Definition 12.3 (Primary matrix function).** Given the scalar values and enough derivatives at each eigenvalue to cover its largest Jordan block, the primary function $f(A)$ is the Hermite interpolation polynomial evaluated at A, with polynomials identified modulo the minimal polynomial. A scalar branch for a logarithm, square root or fractional power is part of the data. Different branches can define different matrix functions.

For a Jordan block $J=\\lambda I+N$, $N^\\nu=0$, the definition gives
$$f(J)=\\sum_{j=0}^{\\nu-1}\\frac{f^{(j)}(\\lambda)}{j!}N^j.$$
Indeed a polynomial's Taylor expansion about lambda is exact modulo $N^\\nu$; matching the derivatives makes the result independent of the interpolating polynomial. Applying this blockwise under similarity explains why function values alone are insufficient for defective matrices.

**Example 12.4 (A derivative enters a Jordan function).** For
$J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, the nilpotent part squares to zero. Thus
$$e^J=e^2\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix},\\qquad
J^{-1}=\\begin{pmatrix}1/2&-1/4\\\\0&1/2\\end{pmatrix}.$$
The off-diagonal entries are $f'(2)$, respectively $e^2$ and $-1/4$. Merely replacing the diagonal eigenvalues by their scalar function values would miss them. Direct multiplication verifies the inverse, while the exponential follows from the convergent series or Jordan formula.

**Theorem 12.5 (Exponential convergence and a truncation bound).** In an induced matrix norm, the exponential series converges absolutely for every finite matrix. Its degree-m Taylor truncation satisfies
$$
\\left\\|e^A-\\sum_{j=0}^{m}\\frac{A^j}{j!}\\right\\|
\\le e^{\\|A\\|}\\frac{\\|A\\|^{m+1}}{(m+1)!}.
$$
The function $t\\mapsto e^{tA}$ is differentiable and solves $Y'=AY=YA$, $Y(0)=I$.

*Proof.* Submultiplicativity bounds the term norms by $\\|A\\|^j/j!$, a convergent scalar exponential. For the tail use $(m+1+r)!\\ge(m+1)!\\,r!$ and sum the resulting exponential in r. On every bounded t interval both the original series and its formally differentiated series are uniformly dominated by scalar exponential series. Uniform convergence justifies termwise differentiation, giving $Ae^{tA}$. Every power commutes with A, giving the right-action identity too. ∎

A linear ODE solution is unique: the difference of two solutions satisfies an integral norm inequality, and Gronwall forces it to vanish from zero initial data. Thus $e^{tA}x_0$ is the specified solution, not merely one formal series satisfying a symbolic equation. The identity $e^{sA}e^{tA}=e^{(s+t)A}$ follows from absolutely convergent products, as developed with full noncommutation qualifications in Exercise 13.5.

**Example 12.6 (A finite Taylor certificate).** Suppose $\\|X\\|\\le0.1$ and approximate $e^X$ by $I+X+X^2/2$. The theorem bounds the omitted norm by
$$e^{0.1}(0.1)^3/6<1.85\\times10^{-4}.$$
This is an exact-arithmetic truncation certificate based on a norm bound. Floating-point evaluation adds its own error and the comparison needs enclosed constants if used in a machine proof. For a nilpotent X with $X^2=0$, the omitted error is exactly zero; the uniform bound remains valid but conservative.

## Finite perturbations and the ordered exponential derivative

**Theorem 12.7 (A finite exponential perturbation identity).** For same-size matrices $A,E$,
$$
e^{A+E}-e^A=\\int_0^1 e^{(1-s)(A+E)}E e^{sA}\\,ds,
$$
and consequently
$$\\|e^{A+E}-e^A\\|\\le\\|E\\|e^{\\|A\\|+\\|E\\|}.$$

*Proof.* Differentiate $F(s)=e^{(1-s)(A+E)}e^{sA}$ using the preceding theorem. The two middle terms combine, in their original order, to
$F'(s)=-e^{(1-s)(A+E)}E e^{sA}$. Integrate from zero to one and rearrange endpoint values. Since $\\|e^B\\|\\le e^{\\|B\\|}$, the integrand norm is at most
$\\|E\\|e^{(1-s)(\\|A\\|+\\|E\\|)+s\\|A\\|}$, which is bounded by the claimed constant. ∎

Replacing the first exponential inside the integral by $e^{(1-s)A}$ produces the linear map
$$L_{\\exp}(A,E)=\\int_0^1e^{(1-s)A}Ee^{sA}\\,ds.$$
The finite perturbation bound, applied to the first exponential over duration $1-s$, shows that the substitution remainder is at most
$$\\frac12 e^{\\|A\\|+\\|E\\|}\\|E\\|^2.$$
Indeed its integrand bound is $(1-s)e^{\\|A\\|+\\|E\\|}\\|E\\|^2$, and the integral of $1-s$ is one half. Dividing by $\\|E\\|$ makes this remainder tend to zero uniformly over all perturbation directions. This proves a full Fréchet derivative, rather than a formula along one commuting path.

When A and E commute, the integral simplifies to $e^AE$. In general the E factor cannot be moved across either exponential. The same ordering issue appears in the retained inversion exercise, where the derivative is $-A^{-1}EA^{-1}$, not an arbitrary product of scalar-looking powers.

## Stability of an algorithm versus sensitivity of a function

A backward-stable computation of $e^A$ approximates the exact exponential at a nearby matrix under a stated perturbation model. The finite bound above turns a small input perturbation into one forward estimate, though it can be pessimistic for a structured normal matrix. A small backward error does not imply a small relative forward error if the function is highly conditioned or the output norm is very small.

Scaling and squaring separates an analytic rational-approximation defect from rounding in solving the Padé denominator and repeatedly multiplying. The logarithm identity already stated makes the analytic defect precise. It does not imply that every choice of degree and scaling is stable in machine arithmetic. Excessive scaling can add squaring errors; poor norm estimates can select an insufficient scale; overflow may occur even when an action on one vector is moderate. The cited algorithmic analysis supplies selection rules and error estimates for a particular implementation.

Evaluating $f(A)v$ can be much cheaper than assembling the full matrix function. A Krylov approximation uses $Q_k f(H_k)Q_k^*v$, but its output error needs a residual or approximation theorem appropriate to f, the interval or complex region, and the starting vector. An accurate small projected function alone does not prove the action accurate. Preserve the distinction between the requested matrix, a vector action and a selected scalar output.

For a square root, a small residual $\\widehat X^2-A$ is backward evidence for the equation, while branch identification and forward error depend on the linearized map $H\\mapsto \\widehat XH+H\\widehat X$. A root on the wrong branch can have zero residual. For the sign function, check both its squared identity and its selected invariant subspaces; $S^2=I$ alone permits many unrelated involutions. These checks should be tied to the chosen primary function and domain.

The principal-square-root existence theorem, contour functional calculus and full Padé rounding analysis are external results. Their hypotheses are stated here to keep them usable without pretending that a finite example proves them. The chapter's series and finite perturbation arguments establish the specific convergence and sensitivity bounds used directly.

## Practice exercises with solutions

### Exercise 13.1
<a id="matrix-functions-ex-13-1"></a>

Compute $e^{A}$ for $A = \\operatorname{diag}(1, 2, 3)$.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the scalar exponential to each diagonal entry.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** No eigenvector conditioning enters a diagonal unitary basis.

</details>

<details>
<summary>Solution</summary>

**Solution.**  
$$e^{A} = \\operatorname{diag}(e^{1}, e^{2}, e^{3}) \\approx \\operatorname{diag}(2.718, 7.389, 20.086).$$

</details>

### Exercise 13.2
<a id="matrix-functions-ex-13-2"></a>

Show that $(e^{A})^{-1} = e^{-A}$ for any square $A$.

<details>
<summary>Hint 1</summary>

**Hint.** A and minus A commute.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the absolutely convergent product law.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Since $A$ and $-A$ commute, $e^{A}e^{-A} = e^{A - A} = e^{0} = I$. Thus $e^{-A}$ is the inverse of $e^{A}$.

</details>

### Exercise 13.3
<a id="matrix-functions-ex-13-3"></a>

A matrix $A$ has eigenvalues $-1\\pm10i$. What can the eigenvalues alone imply about $\\lVert e^{At}\\rVert_2$ for large $t$, and what additional conclusions follow if $A$ is normal or diagonalizable?

<details>
<summary>Hint 1</summary>

**Hint.** Separate asymptotic exponential rate from a norm bound.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use normality, a conditioned eigenbasis or Jordan factors as appropriate.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The spectral abscissa is $-1$, so the asymptotic exponential rate is $-1$, but eigenvalues alone do not determine the norm or a constant-factor estimate. If $A$ is normal, $\\lVert e^{At}\\rVert_2=e^{-t}$. If $A=V\\Lambda V^{-1}$ is diagonalizable, $\\lVert e^{At}\\rVert_2\\le\\kappa_2(V)e^{-t}$. A defective matrix can carry polynomial factors such as $t e^{-t}$ from Jordan blocks, in addition to transient amplification.

</details>

### Exercise 13.4
<a id="matrix-functions-ex-13-4"></a>

What analytic truncation and floating-point error controls are needed for a backward-stability claim for scaling and squaring?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish an analytic defect from rounding.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Degree and scaling must enforce the chosen defect budget.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Fixed-degree exact Pad\\'{e} truncation is independent of unit roundoff $u$. For the scalar $r_1(x)=(1+x/2)/(1-x/2)$ with $|x|<2$, $\\log r_1(x)-x=x^3/12+x^5/80+\\cdots$. At $x=1/2$, $r_1(x)=5/3$ and $\\log(5/3)-1/2>1/96$, even in exact arithmetic; this defect is not $O(u)$ as $u\\to0$. For an induced norm with $x=\\lVert X\\rVert<2$, the same series gives $\\lVert E_1(X)\\rVert/\\lVert X\\rVert\\le x^2/[12(1-x^2/4)]$ when $X\\ne0$. For example, the analytic relative target $\\tau=10^{-3}$ is met at $x=1/16$, since this upper bound is below $\\tau$. For general degree, use its validated bound to select $m,s$ so that $\\lVert E_m(X)\\rVert\\le\\tau\\lVert X\\rVert$ for $X=2^{-s}A$ on the stated logarithm branch. Exact squaring then gives $\\exp(A+2^sE_m(X))$ and an analytic backward bound $\\tau\\lVert A\\rVert$. A floating-point implementation additionally needs controlled rational evaluation, solves and squaring; choosing a sufficiently small analytic defect does not itself prove an $O(u)$ rounding bound.

</details>

### Exercise 13.5
<a id="matrix-functions-ex-13-5"></a>

**One time, integer times, or all nearby times?** For same-size finite square matrices $A,B$ over $\\mathbb R$ or $\\mathbb C$, and real $t$, write

$$
L(t)=e^{t(A+B)},\\qquad R(t)=e^{tA}e^{tB},\\qquad D(t)=L(t)-R(t).
$$

**(a)** Prove that $AB=BA$ implies $L(t)=R(t)$ for every real $t$. Conversely, if $L(t)=R(t)$ for every real $t$ with $|t|<\\varepsilon$, for some $\\varepsilon>0$, prove $AB=BA$. Justify the series products, regrouping, and second-order remainder.

**(b)** Now work over $\\mathbb C$. Let

$$
P=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},
$$

$$
Q=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix},
$$

and set $S=(P+Q)/2$, $A=2\\pi iP$, $B=2\\pi iQ$, and $z=e^{2\\pi it}$ for real $t$. Check that $P,Q,S$ are idempotent, meaning $H^2=H$. Derive $L(t),R(t),D(t)$, compute $[A,B]=AB-BA$, and classify every real time when equality holds. Include $t=1$ and $t=1/2$.

**(c)** For this pair, does agreement at every common integer time $n$ also give

$$
e^{kA+\\ell B}=e^{kA}e^{\\ell B}\\qquad\\text{for every }(k,\\ell)\\in\\mathbb Z^2?
$$

Test $(k,\\ell)=(1,-1)$. Give a brief real $4\\times4$ reformulation using real and imaginary block matrices.

**(d)** Change to the real matrices

$$
U=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},
$$

$$
V=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}.
$$

For real $t$, derive $e^{tU}e^{tV}$ and $e^{t(U+V)}$, and classify all equality times. Explain the difference from part (b).

<details>
<summary>Hint 1</summary>

**Hint.** For (a), bound the double series in an induced matrix norm, then compare the quadratic coefficients near zero. For (b), powers of an idempotent stabilize after the first power. For (c), $P-Q$ has square zero. For (d), $U^2=V^2=0$, while $(U+V)^2=I$; separate even and odd powers.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the converse divide the second-order defect by t squared; for idempotents compute exact scalar coefficients.

</details>

<details>
<summary>Solution</summary>

**Solution.**  **(a)** Choose an induced matrix norm, so $\\|I\\|=1$ and $\\|XY\\|\\le\\|X\\|\\|Y\\|$. Finite dimension makes convergence independent of this choice of norm. Put $a=|t|\\|A\\|$ and $b=|t|\\|B\\|$. The product series satisfies

$$
\\begin{aligned}
\\sum_{j,k\\ge0}\\left\\|\\frac{t^{j+k}A^jB^k}{j!\\,k!}\\right\\|
&\\le\\sum_{j,k\\ge0}\\frac{a^j b^k}{j!\\,k!}\\\\
&=e^ae^b<\\infty.
\\end{aligned}
$$

Thus multiplying the exponential series and grouping by $j+k=n$ is justified by absolute convergence. If $AB=BA$, the binomial theorem gives

$$
\\begin{aligned}
R(t)&=\\sum_{n=0}^{\\infty}\\frac{t^n}{n!}
       \\sum_{j=0}^n\\binom nj A^jB^{n-j}\\\\
&=\\sum_{n=0}^{\\infty}\\frac{t^n(A+B)^n}{n!}=L(t).
\\end{aligned}
$$

This proves the product law for every real $t$.

For the converse, the tail after degree two for any fixed finite matrix $M$ obeys

$$
\\left\\|\\sum_{j=3}^{\\infty}\\frac{t^jM^j}{j!}\\right\\|
\\le\\frac{|t|^3\\|M\\|^3}{6}e^{|t|\\|M\\|}.
$$

Indeed $(r+3)!\\ge6r!$, so the absolute tail is bounded by the displayed scalar exponential. In particular, each tail is $O(t^3)$ in norm near zero. Multiplying the expansions, whose factors stay bounded there, yields

$$
\\begin{aligned}
L(t)&=I+t(A+B)+\\tfrac{t^2}{2}(A+B)^2+O(t^3),\\\\
R(t)&=I+t(A+B)\\\\
&\\quad+t^2\\bigl(\\tfrac12A^2+AB+\\tfrac12B^2\\bigr)+O(t^3).
\\end{aligned}
$$

Here $O(t^3)$ means a matrix remainder with norm at most $C|t|^3$ near zero, for a constant depending on the fixed matrices. Subtracting gives

$$
D(t)=\\frac{t^2}{2}(BA-AB)+O(t^3).
$$

If $D(t)=0$ whenever $|t|<\\varepsilon$, divide by $t^2$ for nonzero $t$ and let $t\\to0$. The remainder tends to zero after division, so $BA-AB=0$. A single time, or common integer times without nonzero times approaching zero, supplies no such limiting argument.

**(b)** Direct multiplication gives $P^2=P$, $Q^2=Q$, $PQ=Q$, and $QP=P$. Hence

$$
S^2=\\frac{P^2+PQ+QP+Q^2}{4}=\\frac{P+Q}{2}=S.
$$

These are idempotents; $Q$ and $S$ are not Hermitian, so they are not orthogonal projectors for the standard inner product. Write

$$
E_{12}=Q-P=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}.
$$

Then

$$
[A,B]=(2\\pi i)^2(PQ-QP)=-4\\pi^2E_{12}\\ne0.
$$

For any idempotent $H$ and complex scalar $c$, $H^m=H$ for every $m\\ge1$. Its absolutely convergent exponential series therefore gives

$$
e^{cH}=I+\\left(\\sum_{m=1}^{\\infty}\\frac{c^m}{m!}\\right)H
=I+(e^c-1)H.
$$

Since $A+B=4\\pi iS$ and $z=e^{2\\pi it}$, applying this formula and multiplying the two factors yields

$$
\\begin{aligned}
L(t)&=\\begin{pmatrix}z^2&\\frac{z^2-1}{2}\\\\0&1\\end{pmatrix},\\\\
R(t)&=\\begin{pmatrix}z^2&z(z-1)\\\\0&1\\end{pmatrix}.
\\end{aligned}
$$

Thus the left-minus-right defect is

$$
D(t)=-\\frac{(z-1)^2}{2}E_{12}.
$$

It vanishes exactly when $z=1$. For real $t$, $e^{2\\pi it}=1$ exactly when $t\\in\\mathbb Z$. Thus these noncommuting matrices agree at every common integer time and at no other real time. At $t=1$ both sides are $I$; at $t=1/2$, $z=-1$ gives

$$
L(1/2)=I,\\qquad
R(1/2)=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}.
$$

Their defect there is $-2E_{12}$. Integer-time agreement is therefore insufficient for the neighborhood hypothesis in (a).

**(c)** Common integer times use the same coefficient on both matrices. Two independent integers allow different coefficients. At $(k,\\ell)=(1,-1)$,

$$
A-B=2\\pi i(P-Q)=-2\\pi iE_{12},\\qquad E_{12}^2=0.
$$

Consequently

$$
\\begin{aligned}
e^{A-B}&=I-2\\pi iE_{12},\\\\
e^Ae^{-B}&=I.
\\end{aligned}
$$

The second equality follows from the idempotent formula and $e^{2\\pi i}=e^{-2\\pi i}=1$. Thus this pair fails the independent-integer hypothesis. [De Seguins Pazzis, §1.2 and Theorem 1](https://arxiv.org/pdf/1012.4420) uses every $(k,\\ell)\\in\\mathbb Z^2$, a strictly stronger requirement than common integer times.

For a real-matrix version, define the block map

$$
\\mathcal R(X)=\\begin{pmatrix}\\operatorname{Re}X&-\\operatorname{Im}X\\\\
\\operatorname{Im}X&\\operatorname{Re}X\\end{pmatrix}.
$$

Direct block multiplication shows that $\\mathcal R$ is injective, real-linear, multiplicative, and sends $I_2$ to $I_4$. Its continuity lets us apply it to the exponential partial sums and take limits:

$$
e^{t\\mathcal R(X)}=\\mathcal R(e^{tX})\\qquad(t\\in\\mathbb R).
$$

Hence the real $4\\times4$ pair $\\mathcal R(A),\\mathcal R(B)$ has the same exact equality times and half-time failure; its commutator is the nonzero matrix $\\mathcal R([A,B])$. This map is being used as a real-linear construction.

**(d)** Here $U^2=V^2=0$ and $(U+V)^2=I$. Thus $e^{tU}=I+tU$ and $e^{tV}=I+tV$, while even and odd powers of $U+V$ give

$$
\\begin{aligned}
e^{tU}e^{tV}&=\\begin{pmatrix}1+t^2&t\\\\t&1\\end{pmatrix},\\\\
e^{t(U+V)}&=\\begin{pmatrix}\\cosh t&\\sinh t\\\\\\sinh t&\\cosh t\\end{pmatrix}.
\\end{aligned}
$$

Equality forces $\\cosh t=1$ from the bottom-right entry. For real $t$,

$$
\\cosh t=1+\\sum_{j=1}^{\\infty}\\frac{t^{2j}}{(2j)!}
\\ge1+\\frac{t^2}{2}.
$$

It equals 1 only at $t=0$, when both exponentials are $I$. The periodic scalar $e^{2\\pi it}$ in (b) returns to 1 at every integer; this real hyperbolic cosine has no nonzero real return to 1. The changed pair therefore agrees exactly at zero.

</details>

### Exercise 13.6
<a id="matrix-functions-ex-13-6"></a>

**An inverse is a map on perturbations.** The condition-estimation section defines a derivative's operator norm. Now certify both the nearby domain and the error in a linear prediction. The [derivative foundations](#/item/book-optimization-backprop-from-scratch?chapter=derivatives-differentials-shapes) already develop the arbitrary-displacement remainder and chain rule; this exercise applies that viewpoint to a matrix-valued function.

Fix an invertible $A\\in\\mathbb F^{n\\times n}$, where $\\mathbb F=\\mathbb R$ or $\\mathbb C$ and $n\\ge1$. Matrix norms are spectral norms, and derivative operator norms use that norm on both their matrix domain and codomain. Write

$$
C=A^{-1},\\quad c=\\|C\\|_2,\\quad
e=\\|E\\|_2,\\quad q=ce.
$$

Here $E$ is an arbitrary matrix perturbation. Constants may depend on the fixed $A$, but not on the direction of $E$. You need geometric series, singular vectors, and conjugate transpose for the norm-attainment argument. Write $E_{ij}$ for a matrix unit.

**(a)** Prove that $q<1$ implies $B=(A+E)^{-1}$ exists and $\\|B\\|_2\\le c/(1-q)$. Establish the exact expansion

$$
B=C-CEC+R(E),\\qquad R(E)=CECEB,
$$

and prove $\\|R(E)\\|_2\\le c^3e^2/(1-q)$. Deduce a uniform quadratic bound on $q\\le1/2$ and identify the Fréchet derivative of inversion.

**(b)** Let

$$
A_0=\\operatorname{diag}(1,2),\\qquad
H=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}.
$$

Compare the derivative action on $H$ with $-A_0^{-2}H$ and $-HA_0^{-2}$. Find $(A_0+tH)^{-1}$ exactly. Why does a zero remainder on this path not establish differentiability for arbitrary perturbations?

**(c)** Compute the derivative's operator norm and the relative inversion condition number, giving an attaining perturbation. For
$A_\\delta=\\operatorname{diag}(1,\\delta)$ with $0<\\delta\\le1$, find the absolute and relative numbers and a certified perturbation radius. Derive a finite relative-error bound in terms of $\\epsilon=e/\\|A\\|_2$, including its domain condition. At $A_0$, compare the sampled response from $H$ with an attaining direction.

**(d)** Change the output to $G(A)=A^{-2}=(A^{-1})^2$. Derive its Fréchet derivative and an arbitrary-$E$ quadratic remainder bound on $q\\le1/2$. Keep $A_0$ but change the perturbation to

$$
K=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}.
$$

For real $t$, find $G(A_0+tK)$ exactly, its linear term, and its nonsingular domain. Compare the derivative with $-2A_0^{-3}K$ and distinguish the exact domain from the sufficient norm-ball certificate.

<details>
<summary>Hint 1</summary>

**Hint.** For (a), factor $A+E=A(I+CE)$, then bound and multiply the geometric partial sums before calling their limit an inverse. For (c), use unit singular vectors $Cv=cu$, $C^*u=cv$ and try $E_\\star=vu^*$. For (d), put $\\Delta=B-C$, expand $(C+\\Delta)^2$ with the factors in order, and substitute part (a).

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Keep factors in order, then use singular vectors for norm attainment.

</details>

<details>
<summary>Solution</summary>

**Solution.**  **(a)** Put $Z=CE$. Since $\\|Z\\|_2\\le q<1$, the series
$T=\\sum_{j=0}^{\\infty}(-Z)^j$ converges in norm: its tail after $m$ has norm at most $q^{m+1}/(1-q)$. Finite dimension supplies completeness. The finite left and right products with $I+Z$ both equal $I-(-Z)^{m+1}$, which tends to $I$. Thus $T=(I+Z)^{-1}$ and $\\|T\\|_2\\le(1-q)^{-1}$. The ordered factorization $A+E=A(I+CE)$ now gives

$$
B=(A+E)^{-1}=TC,\\qquad
\\|B\\|_2\\le\\frac{c}{1-q}.
$$

From $B+CEB=C$, substitute $B=C-CEB$ once to obtain

$$
\\begin{aligned}
B&=C-CEC+R(E),\\\\
R(E)&=CECEB,\\\\
\\|R(E)\\|_2&\\le\\frac{c^3e^2}{1-q}.
\\end{aligned}
$$

For fixed $A$, the map $E\\mapsto-CEC$ is linear over $\\mathbb F$ and bounded by $c^2\\|E\\|_2$. If $q\\le1/2$, the remainder is at most $2c^3e^2$. Dividing by $e>0$ gives a bound $2c^3e\\to0$ for arbitrary $E\\to0$, independent of its direction. Therefore

$$
L_{\\mathrm{inv}}(A)[E]=-A^{-1}EA^{-1}.
$$

A derivative along one fixed path would not establish this all-perturbation remainder.

**(b)** Here $C_0=\\operatorname{diag}(1,1/2)$, so

$$
-C_0HC_0=-\\tfrac12H,\\qquad
-C_0^2H=-H,\\qquad
-HC_0^2=-\\tfrac14H.
$$

Direct multiplication verifies, for every real or complex $t$,

$$
(A_0+tH)^{-1}
=\\begin{pmatrix}1&-t/2\\\\0&1/2\\end{pmatrix}
=C_0-\\tfrac t2H.
$$

Its determinant before inversion is always $2$. This path has zero remainder, but inversion is not a linear map on a neighborhood of $A_0$. For example, a diagonal perturbation changes an inverse diagonal entry reciprocally. A particularly simple direction cannot replace part (a).

**(c)** Submultiplicativity gives $\\|L_{\\mathrm{inv}}(A)\\|\\le c^2$. To prove equality, choose unit singular vectors satisfying $Cv=cu$ and $C^{*}u=cv$, where $^{*}$ denotes conjugate transpose, or ordinary transpose over $\\mathbb R$. For $E_\\star=vu^{*}$,

$$
\\|E_\\star\\|_2=1,\\qquad
CE_\\star C=(Cv)(u^{*}C)=c^2uv^{*}.
$$

The last rank-one matrix has norm $c^2$, so the derivative's operator norm is exactly $c^2$. The condition-estimation definition earlier in this chapter gives

$$
\\operatorname{cond}_{\\mathrm{abs}}(\\mathrm{inv},A)=c^2,\\qquad
\\operatorname{cond}_{\\mathrm{rel}}(\\mathrm{inv},A)
=\\frac{c^2\\|A\\|_2}{c}=\\kappa_2(A).
$$

For $A_\\delta$, $\\|A_\\delta\\|_2=1$ and $c=1/\\delta$. The absolute and relative numbers are therefore $\\delta^{-2}$ and $\\delta^{-1}$. Every $\\|E\\|_2<\\delta$ is certified admissible, and $\\|E\\|_2\\le\\delta/2$ permits the uniform half-radius remainder bound. At the boundary, $E=-\\delta E_{22}$ makes $A_\\delta+E$ singular.

A finite bound needs its domain condition. With $\\Delta=B-C=-CEB$ and $\\epsilon=e/\\|A\\|_2$, we have $q=\\kappa_2(A)\\epsilon$, and

$$
\\frac{\\|(A+E)^{-1}-A^{-1}\\|_2}{\\|A^{-1}\\|_2}
\\le\\frac{q}{1-q}
=\\frac{\\kappa_2(A)\\epsilon}{1-\\kappa_2(A)\\epsilon},
\\qquad \\kappa_2(A)\\epsilon<1.
$$

The local condition number alone does not supply this finite guarantee. At $A_0$, the absolute condition number is $1$ and the relative number is $2$. The unit perturbation $H$ samples only $\\|L_{\\mathrm{inv}}(A_0)[H]\\|_2=1/2$, while $E_{11}$ attains $1$. This illustrates the existing distinction between a sampled direction and an operator norm.

**(d)** Write $B=C+\\Delta$ and use $\\Delta=-CEC+R$ from part (a). Expanding without reordering factors gives

$$
\\begin{aligned}
B^2-C^2&=C\\Delta+\\Delta C+\\Delta^2,\\\\
L_G(A)[E]&=-C^2EC-CEC^2,\\\\
R_G(E)&=CR+RC+\\Delta^2.
\\end{aligned}
$$

The proposed $L_G(A)$ is linear in arbitrary $E$. Since
$\\|\\Delta\\|_2\\le c^2e/(1-q)$, the remainder satisfies

$$
\\begin{aligned}
\\|R_G(E)\\|_2
&\\le c^4e^2\\left(\\frac2{1-q}+\\frac1{(1-q)^2}\\right)\\\\
&\\le8c^4e^2\\qquad(q\\le1/2).
\\end{aligned}
$$

Dividing by $e>0$ proves the full Fréchet remainder as arbitrary $E\\to0$, not just a directional formula.

For the changed perturbation, $\\det(A_0+tK)=2-t^2$. Multiplying its inverse numerator by itself yields

$$
\\begin{aligned}
(A_0+tK)^{-1}
&=\\frac1{2-t^2}\\begin{pmatrix}2&-t\\\\-t&1\\end{pmatrix},\\\\
G(A_0+tK)
&=\\frac1{(2-t^2)^2}
  \\begin{pmatrix}4+t^2&-3t\\\\-3t&1+t^2\\end{pmatrix}.
\\end{aligned}
$$

These formulas hold exactly when $t^2\\ne2$. At zero,
$G(A_0)=\\operatorname{diag}(1,1/4)$ and the linear term is $-3tK/4$, agreeing with $-C_0^2KC_0-C_0KC_0^2$. In contrast,

$$
-2A_0^{-3}K=\\begin{pmatrix}0&-2\\\\-1/4&0\\end{pmatrix}
$$

is wrong. The two diagonal remainder entries have respective quadratic coefficients $5/4$ and $1/2$, so this changed path does not inherit the zero-remainder shortcut in (b). Its exact real nonsingular domain excludes only $t=\\pm\\sqrt2$. Because $\\|K\\|_2=c=1$, the general certificate supplies the sufficient interval $|t|<1$; it does not claim this is the maximal domain. On $|t|\\le1/2$, the arbitrary-perturbation theorem gives $\\|R_G(tK)\\|_2\\le8t^2$.

The inversion derivative and its conditioning are classical; see [Higham and Relton, §5.2, equation (5.11)](https://eprints.maths.manchester.ac.uk/2160/01/130945259.pdf). [Higham's Fréchet-derivative exposition](https://nhigham.com/2020/06/23/what-is-a-frechet-derivative/) explains the all-perturbation requirement and ordered product rule. The finite certificates above establish the exercise's error bounds directly.

</details>

## Further exercises

### Exercise 7: Jordan derivative
<a id="matrix-functions-ex-7"></a>

For $J=\\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}$, compute $J^2$ using the primary-function formula.

<details>
<summary>Hint 1</summary>

**Hint.** The nilpotent part squares to zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For f(x)=x squared, use f(3) and f'(3).

</details>

<details>
<summary>Solution</summary>

**Solution.** The result is $\\begin{pmatrix}9&6\\\\0&9\\end{pmatrix}$ because $J^2=9I+6N$. Replacing only eigenvalues would omit the derivative term.

</details>

### Exercise 8: Taylor remainder
<a id="matrix-functions-ex-8"></a>

Give a degree-one Taylor bound when $\\|A\\|\\le1/4$.

<details>
<summary>Hint 1</summary>

**Hint.** Set m=1 in the theorem.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The remainder begins at the squared norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $e^{1/4}(1/4)^2/2=e^{1/4}/32$. It bounds exact truncation and does not include rounding in the retained terms.

</details>

### Exercise 9: A branch check
<a id="matrix-functions-ex-9"></a>

Both I and minus I square to I. Which is the principal square root of I?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect eigenvalue half-planes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The principal root uses the open right half-plane.

</details>

<details>
<summary>Solution</summary>

**Solution.** The principal root is I, since its eigenvalues are one. Minus I has eigenvalues minus one and is another exact square root on a different branch. A zero square-root residual alone does not select the principal function.

</details>

### Exercise 10: Ordered derivative
<a id="matrix-functions-ex-10"></a>

For $f(A)=A^2$, derive its Fréchet derivative and bound the remainder.

<details>
<summary>Hint 1</summary>

**Hint.** Expand (A+E) squared without commuting terms.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The last term is quadratic.

</details>

<details>
<summary>Solution</summary>

**Solution.** The expansion is $A^2+AE+EA+E^2$. Thus $L_f(A,E)=AE+EA$ and the remainder norm is at most $\\|E\\|^2$, uniformly in the direction. Only when A and E commute can the derivative simplify to $2AE$.

</details>

## Sources

Higham, [Functions of Matrices: Theory and Computation](https://epubs.siam.org/doi/book/10.1137/1.9780898717778), is the reference for primary functions, principal roots, contour calculus and algorithm-specific Padé analysis. Those full general proofs are external dependencies. Higham's [matrix exponential](https://nhigham.com/2020/05/28/what-is-the-matrix-exponential/) and [Fréchet derivative](https://nhigham.com/2020/06/23/what-is-a-frechet-derivative/) expositions clarify commutation and ordered derivatives. The retained exercises preserve [Higham and Relton's derivative reference](https://eprints.maths.manchester.ac.uk/2160/01/130945259.pdf) and [de Seguins Pazzis's commuting-exponentials result](https://arxiv.org/abs/1012.4420) with their original qualified roles. Series convergence, Taylor tails, the finite exponential perturbation identity and the inversion certificates are proved directly in this chapter.

<a id="looking-backward-and-forward"></a>

## Summary

A matrix function depends on spectral values, derivatives and branch choices. The exponential series converges for every matrix, with a proved truncation bound and finite perturbation identity. Scaling and squaring adds separate analytic and floating-point budgets, while a function residual alone may not identify the intended branch. Ordered Fréchet derivatives connect local conditioning to arbitrary perturbations; the retained exercises show why scalar shortcuts and agreement at isolated times can fail.
`;export{e as default};