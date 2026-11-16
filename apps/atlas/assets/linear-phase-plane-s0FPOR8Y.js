var e=`---
parent_id: book-ode-first-course
chapter_id: linear-phase-plane
title: "The Phase Plane of Linear Systems"
level: undergraduate
license: CC BY-SA 4.0
---

# The Phase Plane of Linear Systems

A phase portrait shows state against state, rather than state against time. It suppresses the clock but retains equilibria, invariant directions, orientation, and long-term motion. For a real planar linear system, these features can be derived completely. The result is a classification with important boundary cases: repeated eigenvalues, lines of equilibria, and centers all require more than a slogan about eigenvalue signs.

Preparation is [Linear Systems and the Matrix Exponential](linear-systems-matrix-exponential.md), including the L2 Lucent linear algebra chapters named there. Throughout this chapter, \\(A\\) is a fixed real \\(2\\times2\\) matrix, time is continuous, and the system is \\(z'=Az\\). Stability refers to forward time and the Euclidean distance, unless a different norm is explicitly stated.

## Geometry before classification

**Definition 14.1 (Orbit and invariant line).** The orbit through \\(z_0\\) is the set of states \\(e^{tA}z_0\\) as time ranges over \\(\\mathbb R\\), with its forward orientation. A set is invariant if a trajectory starting there stays there for all time. An eigenvector line is invariant because \\(e^{tA}v=e^{\\lambda t}v\\).

Different points on a nonzero orbit can represent the same geometric trajectory at different times. A phase portrait does not specify the speed by its shape alone. Arrows or a parameterization must supply the time direction.

The equilibria are exactly the vectors in \\(\\ker A\\). If \\(A\\) is invertible, the origin is the only equilibrium. If \\(A\\) is singular, a whole line or the whole plane may consist of equilibria. A portrait showing only an isolated origin in that case is incorrect.

An invertible coordinate change \\(z=Sw\\) transforms the system into \\(w'=S^{-1}ASw\\). Such a change preserves convergence and stability, though it can turn circles into ellipses and alter measured lengths. To see why stability is preserved, use the finite constants \\(\\|S\\|\\) and \\(\\|S^{-1}\\|\\) in
\\[
 \\|Sw\\|\\le\\|S\\|\\|w\\|,\\qquad
 \\|w\\|\\le\\|S^{-1}\\|\\|z\\|.
\\]
Small neighborhoods in either coordinate system therefore contain sufficiently small neighborhoods from the other.

## Three numbers and an exact exponential

Write
\\[
 T=\\operatorname{tr}A,\\qquad D=\\det A,\\qquad
 \\Delta=T^2-4D.
\\]
The eigenvalues are the roots of \\(\\lambda^2-T\\lambda+D\\). Here \\(D\\) denotes a determinant, not a time–state domain.

**Lemma 14.2 (Planar Cayley–Hamilton identity).** Every real \\(2\\times2\\) matrix satisfies \\(A^2-TA+DI=0\\).

**Proof.** Write \\(A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\). Its squared off-diagonal entries are \\(b(a+d)\\) and \\(c(a+d)\\), which cancel the corresponding entries of \\(TA\\). The first diagonal entry of \\(A^2-TA+DI\\) is \\(a^2+bc-(a+d)a+ad-bc=0\\); the second is the same calculation with \\(a,d\\) interchanged. \\(\\square\\)

Put \\(B=A-(T/2)I\\). Substitution gives \\(B^2=(\\Delta/4)I\\). This identity yields a real exponential formula without choosing eigenvectors.

**Theorem 14.3 (Three discriminant formulas).** If \\(\\Delta>0\\), put \\(\\kappa=\\sqrt\\Delta/2\\). Then
\\[
 e^{tA}=e^{Tt/2}
 \\left(\\cosh(\\kappa t)I+\\frac{\\sinh(\\kappa t)}{\\kappa}B\\right).
\\]
If \\(\\Delta=0\\), then
\\[
 e^{tA}=e^{Tt/2}(I+tB).
\\]
If \\(\\Delta<0\\), put \\(\\omega=\\sqrt{-\\Delta}/2\\). Then
\\[
 e^{tA}=e^{Tt/2}
 \\left(\\cos(\\omega t)I+\\frac{\\sin(\\omega t)}{\\omega}B\\right).
\\]

**Proof.** The matrices \\((T/2)I\\) and \\(B\\) commute, so their exponentials multiply. In the positive case, \\(B^{2j}=\\kappa^{2j}I\\) and \\(B^{2j+1}=\\kappa^{2j}B\\); separate the absolutely convergent even and odd series to obtain hyperbolic cosine and sine. In the zero case \\(B^2=0\\), so only \\(I+tB\\) remains. In the negative case \\(B^2=-\\omega^2I\\), and the same even/odd separation gives cosine and sine. \\(\\square\\)

These formulas cover every real planar matrix, including matrices with only one eigenvector direction. They also justify the classification's growth claims, rather than relying on a sketch.

## Nonzero determinant: saddles, nodes, spirals, centres

**Definition 14.4 (Linear phase types).** A saddle has one contracting and one expanding real eigenvector direction. A node has real eigenvalues of the same nonzero sign; its forward type is attracting or repelling according to that sign. A spiral has a nonreal conjugate pair with nonzero real part. A center has closed nonconstant orbits surrounding the equilibrium.

**Theorem 14.5 (Classification when \\(D\\ne0\\)).**

- If \\(D<0\\), the origin is an unstable saddle.
- If \\(D>0\\) and \\(T<0\\), the origin is asymptotically stable: a node for \\(\\Delta\\ge0\\), a spiral for \\(\\Delta<0\\).
- If \\(D>0\\) and \\(T>0\\), the origin is unstable: a repelling node or spiral according to the same discriminant distinction.
- If \\(D>0\\) and \\(T=0\\), the origin is a stable, nonattracting center.

**Proof.** If \\(D<0\\), the two real eigenvalues have opposite signs, since their product is negative. Distinct eigenvalues have independent eigenvectors. In those coordinates one component grows exponentially and the other decays. Arbitrarily small data on the expanding eigenline eventually leave any fixed small neighborhood, proving instability.

For \\(D>0,\\Delta>0\\), the real roots have the same sign, and their sum \\(T\\) decides that sign. In eigenvector coordinates both components decay when \\(T<0\\), giving a bound \\(C e^{-\\alpha t}\\|z_0\\|\\) with positive constants. This bound proves stability and attraction. If both roots are positive, any eigenvector gives instability.

For \\(\\Delta=0\\), the formula is an exponential times \\(I+tB\\). When \\(T<0\\), both \\(e^{Tt/2}\\) and \\(te^{Tt/2}\\) tend to zero and are bounded for \\(t\\ge0\\). This again gives stability and attraction. When \\(T>0\\), a nonzero eigenvector grows exponentially, proving instability.

For \\(\\Delta<0\\), the trigonometric factor is uniformly bounded. If \\(T<0\\), it is multiplied by a decaying exponential. If \\(T>0\\), use also the bounded inverse of that trigonometric factor: it equals \\(e^{-tB}\\). Consequently every nonzero orbit has a norm bounded below by a positive constant times \\(e^{Tt/2}\\|z_0\\|\\), and the origin is unstable.

Finally \\(D>0,T=0\\) forces \\(\\Delta=-4D<0\\). Both \\(e^{tA}\\) and its inverse are bounded, so the origin is stable and no nonzero solution tends to it. To see the orbit shape, choose nonzero \\(v\\), and set \\(w=Av/\\omega\\). The vectors \\(v,w\\) are independent: dependence would give a real eigenvalue whose square is \\(-\\omega^2\\), impossible. In this basis \\(Av=\\omega w\\), \\(Aw=-\\omega v\\), so the dynamics is a rotation. Its nonzero circles become closed ellipses under the invertible coordinate change. \\(\\square\\)

A repeated eigenvalue requires a further distinction. If \\(B=0\\), then \\(A=(T/2)I\\), every line through zero is invariant, and the node is a star. If \\(B\\ne0\\) but \\(B^2=0\\), its kernel is one-dimensional, giving only one eigenvector line; the factor \\(tB\\) produces a defective node. The sign of the repeated eigenvalue decides eventual attraction or repulsion in either case.

## Zero determinant: the cases a table can hide

**Theorem 14.6 (Classification when \\(D=0\\)).** If \\(T<0\\), there is a line of equilibria, every solution approaches a point on it, and the origin is stable but not attracting. If \\(T>0\\), the origin is unstable. If \\(T=0\\), then \\(A^2=0\\); the zero matrix makes every point an equilibrium, while a nonzero such matrix makes the origin unstable through linear growth.

**Proof.** For \\(T\\ne0\\), the distinct eigenvalues are zero and \\(T\\). In an eigenbasis, solutions are \\((u_0,e^{Tt}v_0)\\). A negative \\(T\\) gives bounded evolution and convergence to \\((u_0,0)\\), proving stability of the origin but not attraction to it. A positive \\(T\\) supplies an expanding direction. For \\(T=0\\), Lemma 14.2 gives \\(A^2=0\\), hence \\(e^{tA}=I+tA\\). If \\(A=0\\), every solution is constant. Otherwise choose \\(z_0\\) with \\(Az_0\\ne0\\); then \\(\\|z_0+tAz_0\\|\\ge t\\|Az_0\\|-\\|z_0\\|\\) is unbounded. Scaling \\(z_0\\) arbitrarily small proves instability. \\(\\square\\)

Thus “zero eigenvalue means stable” and “zero eigenvalue means unstable” are both false. The actual matrix, including its eigenvectors and nilpotent part, decides the result.

## Worked example 14.1: a saddle and its invariant geometry

Take \\(A=\\begin{pmatrix}1&3\\\\3&1\\end{pmatrix}\\). The eigenvectors \\((1,1)\\), \\((1,-1)\\) have eigenvalues \\(4,-2\\). Writing \\(u=x+y\\), \\(v=x-y\\) gives \\(u'=4u\\), \\(v'=-2v\\).

The line \\(x+y=0\\) is the stable line: points there approach zero forward. The line \\(x-y=0\\) is the unstable line. Elsewhere, \\(u=u_0e^{4t}\\), \\(v=v_0e^{-2t}\\), so \\(uv^2=u_0v_0^2\\) is constant. These level relations describe orbit geometry, with signs of \\(u,v\\) fixed along each trajectory.

A trajectory on the stable line does not make the equilibrium stable. Every neighborhood contains data with a nonzero \\(u\\)-component, and that component grows. The determinant \\(1-9=-8<0\\) is a quick saddle diagnosis, while the eigenvectors locate its invariant lines.

## Worked example 14.2: a rotating sink

Let \\(A=\\begin{pmatrix}-1&-2\\\\2&-1\\end{pmatrix}\\). Here \\(T=-2\\), \\(D=5\\), \\(\\Delta=-16\\), and
\\[
 e^{tA}=e^{-t}
 \\begin{pmatrix}\\cos2t&-\\sin2t\\\\\\sin2t&\\cos2t\\end{pmatrix}.
\\]
For initial vector \\((1,0)\\), \\(x=e^{-t}\\cos2t\\), \\(y=e^{-t}\\sin2t\\). Its radius is \\(e^{-t}\\), and its angle increases at rate two. It is an attracting counterclockwise spiral.

For this special matrix, Euclidean radius decreases monotonically. A general similar spiral need not have monotonic Euclidean radius because the coordinate change can distort circles. Its eventual exponential decay and orientation remain determined by the exact solution.

For a general matrix with \\(\\Delta<0\\), the direction at \\((1,0)\\) has vertical component \\(c\\). The angular numerator is \\(cx^2+(d-a)xy-by^2\\); its discriminant is \\((d-a)^2+4bc=\\Delta<0\\), so it has one fixed sign, namely the sign of \\(c\\). Thus \\(c>0\\) gives counterclockwise rotation and \\(c<0\\) clockwise rotation, with no change of direction around the orbit.

## Worked example 14.3: a defective node

For \\(A=\\begin{pmatrix}-1&1\\\\0&-1\\end{pmatrix}\\),
\\[
 x(t)=e^{-t}(x_0+ty_0),\\qquad y(t)=e^{-t}y_0.
\\]
The only eigenvector line is the \\(x\\)-axis. For \\(y_0\\ne0\\), the ratio \\(x/y=x_0/y_0+t\\) changes linearly with time, so those trajectories are not straight eigenvector rays.

Both components tend to zero because \\(te^{-t}\\to0\\), proving attraction. The evolution is bounded for forward time, proving stability. The repeated eigenvalue alone would not distinguish this portrait from \\(A=-I\\), whose trajectories are all straight radial lines. Computing the eigenspace or the matrix \\(B\\) supplies the missing distinction.

## Reading a portrait responsibly

A complete linear portrait should state all equilibria, invariant lines, forward orientation, and the appropriate stability claim. A picture of a few trajectories does not prove the classification; the exact formulas do. Long transients can hide the eventual behavior, and starting precisely on a saddle's stable line is a nongeneric special case.

The conclusions here concern constant linear systems. A nonlinear system may have the same matrix as its first-order approximation, but a center or zero eigenvalue can change behavior under higher-order terms. The final chapter examines exactly that limitation.

## Exercises

### Exercise 14.1 {#linear-phase-plane-ex-1}

Classify \\(A=\\operatorname{diag}(-1,-4)\\) and identify its eigenvector lines.

<details><summary>Hint 1</summary>
The diagonal entries are the eigenvalues.
</details>
<details><summary>Hint 2</summary>
Check both signs before choosing the phase type.
</details>
<details><summary>Solution</summary>
Both eigenvalues are negative and distinct, so the origin is an asymptotically stable node. The coordinate axes are invariant eigenvector lines. Solutions are \\((x_0e^{-t},y_0e^{-4t})\\); the second component decays faster.
</details>

### Exercise 14.2 {#linear-phase-plane-ex-2}

Classify \\(A=\\begin{pmatrix}2&0\\\\0&-3\\end{pmatrix}\\).

<details><summary>Hint 1</summary>
The determinant is negative.
</details>
<details><summary>Hint 2</summary>
Identify the contracting axis separately from the expanding one.
</details>
<details><summary>Solution</summary>
The origin is an unstable saddle. The \\(y\\)-axis is stable because its solutions decay as \\(e^{-3t}\\), while the \\(x\\)-axis is unstable because its solutions grow as \\(e^{2t}\\). The stable direction does not make the full equilibrium stable.
</details>

### Exercise 14.3 {#linear-phase-plane-ex-3}

For \\(A=\\begin{pmatrix}1&-3\\\\3&1\\end{pmatrix}\\), state the phase type and rotation direction.

<details><summary>Hint 1</summary>
Its exponential is a scalar growth factor times a rotation.
</details>
<details><summary>Hint 2</summary>
At \\((1,0)\\), the vertical derivative is positive.
</details>
<details><summary>Solution</summary>
The eigenvalues are \\(1\\pm3i\\). Thus the origin is an unstable repelling spiral, and \\(c=3>0\\) gives counterclockwise rotation. Explicitly the radius grows as \\(e^t\\) and the angle increases at rate three in these coordinates.
</details>

### Exercise 14.4 {#linear-phase-plane-ex-4}

Show \\(A=\\begin{pmatrix}0&-4\\\\1&0\\end{pmatrix}\\) is a center, and find a conserved quadratic quantity.

<details><summary>Hint 1</summary>
Compute \\(d(x^2+4y^2)/dt\\).
</details>
<details><summary>Hint 2</summary>
The two mixed terms cancel.
</details>
<details><summary>Solution</summary>
The derivative is \\(2x(-4y)+8y(x)=0\\). Hence nonzero trajectories lie on ellipses \\(x^2+4y^2=C>0\\). Since \\(A^2=-4I\\), the explicit trigonometric exponential makes these periodic closed orbits. The origin is stable but not attracting.
</details>

### Exercise 14.5 {#linear-phase-plane-ex-5}

Distinguish the portraits of \\(-2I\\) and \\(\\begin{pmatrix}-2&1\\\\0&-2\\end{pmatrix}\\).

<details><summary>Hint 1</summary>
Both have the same repeated eigenvalue.
</details>
<details><summary>Hint 2</summary>
Compare their eigenspace dimensions.
</details>
<details><summary>Solution</summary>
For \\(-2I\\), every vector is an eigenvector and every nonzero orbit is a straight ray: it is an attracting star node. The second matrix has only the \\(x\\)-axis as an eigenvector line and exponential \\(e^{-2t}\\begin{pmatrix}1&t\\\\0&1\\end{pmatrix}\\), giving a defective attracting node. Both are asymptotically stable.
</details>

### Exercise 14.6 {#linear-phase-plane-ex-6}

Classify \\(A=\\operatorname{diag}(0,-2)\\), including all equilibria.

<details><summary>Hint 1</summary>
Solve both component equations.
</details>
<details><summary>Hint 2</summary>
A nonzero constant first component prevents attraction to the origin.
</details>
<details><summary>Solution</summary>
Solutions are \\((x_0,y_0e^{-2t})\\). Every point on the \\(x\\)-axis is an equilibrium, and each trajectory approaches \\((x_0,0)\\). The origin is stable because neither component can grow beyond its initial absolute size, but it is not attracting.
</details>

### Exercise 14.7 {#linear-phase-plane-ex-7}

Explain why \\(A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}\\) is unstable despite both eigenvalues being zero.

<details><summary>Hint 1</summary>
The exponential is \\(I+tA\\).
</details>
<details><summary>Hint 2</summary>
Start at \\((0,\\eta)\\) with arbitrarily small nonzero \\(\\eta\\).
</details>
<details><summary>Solution</summary>
The solution is \\((t\\eta,\\eta)\\), which leaves any fixed neighborhood for sufficiently large forward time. Initial data can be arbitrarily small, so the origin is unstable. The entire \\(x\\)-axis is still a line of equilibria.
</details>

### Exercise 14.8 {#linear-phase-plane-ex-8}

Derive \\(B^2=(\\Delta/4)I\\) from the Cayley–Hamilton identity.

<details><summary>Hint 1</summary>
Expand \\((A-TI/2)^2\\).
</details>
<details><summary>Hint 2</summary>
Replace \\(A^2-TA\\) by \\(-DI\\).
</details>
<details><summary>Solution</summary>
We obtain \\(B^2=A^2-TA+(T^2/4)I=(-D+T^2/4)I=(T^2-4D)I/4\\). This scalar-square identity is why the planar exponential reduces to the three elementary formulas.
</details>

### Exercise 14.9 {#linear-phase-plane-ex-9}

For the saddle in Worked example 14.1, verify that \\((x+y)(x-y)^2\\) is constant along trajectories.

<details><summary>Hint 1</summary>
Use \\(u=x+y\\) and \\(v=x-y\\).
</details>
<details><summary>Hint 2</summary>
Differentiate \\(uv^2\\) using \\(u'=4u\\), \\(v'=-2v\\).
</details>
<details><summary>Solution</summary>
The derivative is \\(4uv^2+2uv(-2v)=0\\). Thus \\(uv^2\\) is conserved. The level relation describes orbit geometry but not its time direction; that comes from the exponential formulas and the signs of the two eigenvalues.
</details>

### Exercise 14.10 {#linear-phase-plane-ex-10}

Can a real planar linear system have \\(D>0\\), \\(T=0\\), and two nonzero real eigenvalues of the same sign?

<details><summary>Hint 1</summary>
Use both their sum and product.
</details>
<details><summary>Hint 2</summary>
The discriminant is \\(-4D\\).
</details>
<details><summary>Solution</summary>
No. Here \\(\\Delta=-4D<0\\), so the eigenvalues are purely imaginary conjugates. Two real same-sign nonzero numbers could not have zero sum. The linear portrait is a center, with stable but nonattracting origin.
</details>

### Exercise 14.11 {#linear-phase-plane-ex-11}

Why does an invertible change of coordinates preserve stability but not necessarily circular orbit shape?

<details><summary>Hint 1</summary>
Use upper bounds for \\(S\\) and \\(S^{-1}\\).
</details>
<details><summary>Hint 2</summary>
A nonscalar diagonal scaling changes a circle into an ellipse.
</details>
<details><summary>Solution</summary>
The bounds \\(\\|Sw\\|\\le C\\|w\\|\\) and \\(\\|S^{-1}z\\|\\le C'\\|z\\|\\) transfer sufficiently small neighborhoods between the coordinate systems, preserving the stability quantifiers and convergence. But \\(S=\\operatorname{diag}(2,1)\\) sends \\(u^2+v^2=1\\) to \\(x^2/4+y^2=1\\), an ellipse.
</details>

### Exercise 14.12 {#linear-phase-plane-ex-12}

Classify the zero matrix and explain why it differs from a nonzero nilpotent matrix.

<details><summary>Hint 1</summary>
For the zero matrix, every derivative is zero.
</details>
<details><summary>Hint 2</summary>
A nonzero nilpotent planar matrix has a \\(tA\\) term.
</details>
<details><summary>Solution</summary>
For \\(A=0\\), every point is an equilibrium and every solution is constant. The origin is stable but not attracting. For nonzero \\(A\\) with \\(A^2=0\\), some solution \\(z_0+tAz_0\\) grows linearly, so the origin is unstable. Equal eigenvalues and equal trace/determinant do not distinguish these two matrices.
</details>

## Sources

Original exposition. Primary references are Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, autonomous linear flow](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode) and Jiří Lebl's [Notes on Diffy Qs, planar systems and repeated eigenvalues](https://www.jirka.org/diffyqs/html/diffyqs.html). Atlas Linear Systems and Phase Geometry remains a separate retained advanced seed chapter.

## Summary

Trace, determinant, and discriminant organize planar linear systems, while exact exponential formulas prove the classification. Eigenvectors locate invariant lines, repeated roots require an eigenspace check, and zero determinant introduces nonisolated equilibria. Centres are stable closed-orbit systems rather than attractors. The final chapter explains how nonlinear terms can preserve, strengthen, or defeat a linear prediction.
`;export{e as default};