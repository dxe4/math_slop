var e=`---
id: deep-dive-lie-exponential-map
title: "The exponential map"
license: CC BY-SA 4.0
---

# The exponential map

A tangent direction at the identity should generate a motion whose time steps add. The matrix exponential does exactly that: a fixed matrix produces a one-parameter subgroup. Its resemblance to the scalar exponential is useful, provided we keep the crucial distinction between one fixed direction and two noncommuting directions.

This L3 orientation assumes convergent power series, elementary matrix norms and linear ODEs. The single idea is to turn a constant infinitesimal matrix into an exact multiplicative motion. Read [Matrix Groups and Examples](../books/lie-groups-lie-algebras/matrix-groups-examples.md) for the group setting. The primary [Exponential Map and One-Parameter Subgroups](../books/lie-groups-lie-algebras/exponential-one-parameter-subgroups.md) proves smoothness, the determinant formula and the converse classification of continuous one-parameter matrix subgroups. We prove the elementary calculations needed here.

## The series is a genuine solution

The [power-series preparation](../books/proof-safe-real-analysis/power-series-and-analytic-functions.md) and [matrices and change of basis](../books/linear-algebra-structure-proofs/matrices-and-change-of-basis.md) supply the linked prerequisites. Every convergence assertion below includes its norm bound.

For a real or complex square matrix define

$$e^{tA}=\\sum_{r=0}^{\\infty}\\frac{t^rA^r}{r!}.$$

A submultiplicative norm bounds each term by the corresponding scalar exponential term with $|t|\\|A\\|$. The series and its differentiated series therefore converge uniformly on bounded time intervals. Termwise differentiation is justified and gives

$$\\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A,\\qquad e^{0A}=I.$$

The two products agree because both factors involve the same matrix. They do not authorize moving an unrelated matrix through the exponential. The derivative equation says that the columns evolve by one linear differential equation with constant coefficient.

Multiplying the absolutely convergent series and collecting terms by total degree proves $e^{sA}e^{tA}=e^{(s+t)A}$. Equivalently both sides solve the same time-dependent initial-value problem once one parameter is fixed. Setting the parameters opposite shows that every exponential is invertible, with inverse $e^{-tA}$. Thus the curve lies in the invertible group and its real-time parameter respects addition.

## A motion stays in the correct group

If $A$ is real skew-symmetric, differentiate $E(t)^TE(t)$ for $E(t)=e^{tA}$. Its derivative is $E(t)^T(A^T+A)E(t)=0$, so the initial identity remains the identity. The determinant of an orthogonal matrix is either plus or minus one. Continuity in time and the initial value one keep it plus one. The entire exponential curve therefore lies in the special orthogonal group.

For a complex skew-Hermitian matrix the identical calculation with conjugate transpose proves unitarity. To remain special unitary, trace zero is also needed. The primary proves $\\det e^{tA}=e^{t\\operatorname{tr}A}$, without a diagonalizability assumption. Thus a traceless skew-Hermitian direction generates a determinant-one unitary motion.

For instance the diagonal direction with entries $i,-i$ generates the circle subgroup with entries $e^{it},e^{-it}$. Its parameter is real even though the matrices have complex entries. Treating a complex matrix group as a real Lie group does not mean its entries have become real.

## Worked example — A rotation emerges from alternating powers

Take the plane matrix

$$J=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix},\\qquad J^2=-I.$$

Separate the even and odd series powers. The even terms sum to $I\\cos t$ and the odd terms to $J\\sin t$, yielding

$$e^{tJ}=\\begin{pmatrix}\\cos t&-\\sin t\\\\\\sin t&\\cos t\\end{pmatrix}.$$

The initial velocity is $J$, while the finite motion is a rotation through angle $t$. Its time-addition rule follows from the exponential proof above, which also recovers the trigonometric addition identities in matrix form. Appending a zero third coordinate direction gives the familiar axial rotations in three-dimensional space.

This exponential is locally invertible near time zero but globally periodic. The matrices at zero and at a full turn coincide. The local exponential theorem for a Lie group similarly gives a diffeomorphism near the zero tangent vector, using derivative equal to the identity and the inverse-function theorem. It does not promise that distant tangent vectors remain distinct or that every group element has an exponential preimage.

## Two directions need a commutation hypothesis

If $A$ and $B$ commute, the matrix binomial theorem and absolute convergence give $e^Ae^B=e^{A+B}$. Without commutation the binomial step fails, because the mixed words have different orders. The first obstruction is already visible in the quadratic terms: the product has mixed term $AB$, while the exponential of the sum has mixed contribution $(AB+BA)/2$.

This observation is an expansion near zero, not a replacement for a finite-parameter error estimate. It tells us why the commutator appears in Lie theory and why alternating small steps depend on their order. The [Lie bracket primary](../books/lie-groups-lie-algebras/lie-algebras-bracket.md) proves the corresponding infinitesimal statements. A general logarithm-of-a-product formula requires additional convergence and neighborhood hypotheses.

Even connectedness does not guarantee exponential surjectivity. A real two-by-two matrix whose exponential is diagonal with distinct negative entries would have to commute with that diagonal matrix, hence itself be real diagonal. Its exponential would then have positive diagonal entries, a contradiction. The primary gives such examples inside a connected determinant-one group. A local logarithm theorem and a global logarithm theorem are different claims.

## Exercises

### Exercise 1 {#lie-exponential-map-ex-1}

For $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ compute its exponential, its determinant and the product of its values at two times.

<details><summary>Hint 1</summary>
The square of this matrix is zero.
</details>
<details><summary>Hint 2</summary>
All series terms above the linear term vanish.
</details>
<details><summary>Full solution</summary>
The exponential is $I+tN=\\begin{pmatrix}1&t\\\\0&1\\end{pmatrix}$ and has determinant one. Multiplication gives $(I+sN)(I+tN)=I+(s+t)N$ because the quadratic term contains the zero square. Thus it is a one-parameter subgroup of shears, rather than rotations. The same exponential construction can generate very different geometries depending on the initial matrix direction.
</details>

### Exercise 2 {#lie-exponential-map-ex-2}

Let $A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ and $B=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$. Compute $e^{tA}e^{tB}$ and compare it with $e^{t(A+B)}$ for nonzero real $t$.

<details><summary>Hint 1</summary>
Each separate matrix squares to zero, but their sum squares to the identity.
</details>
<details><summary>Hint 2</summary>
Use the hyperbolic cosine and sine series for the sum.
</details>
<details><summary>Full solution</summary>
The product is $\\begin{pmatrix}1+t^2&t\\\\t&1\\end{pmatrix}$. For the sum the exponential is $\\begin{pmatrix}\\cosh t&\\sinh t\\\\\\sinh t&\\cosh t\\end{pmatrix}$. The product's two diagonal entries differ when $t\\ne0$, while the latter matrix has equal diagonal entries, so they cannot coincide. This is an exact counterexample to the unrestricted addition rule, with no numerical approximation or truncated series needed.
</details>

## Continue in the primary book

The [exponential primary](../books/lie-groups-lie-algebras/exponential-one-parameter-subgroups.md) supplies the complete one-parameter correspondence and local theorem, while [Lie Algebras and the Lie Bracket](../books/lie-groups-lie-algebras/lie-algebras-bracket.md) develops the noncommuting directions. This article's exposition, worked example and exercises are original Euler orientation writing, linked to those actual primaries. No independent review is claimed.
`;export{e as default};