
# A Nonlinear Preview

Linear equations provide exact formulas, a complete planar classification, and a useful vocabulary for local behavior. Nonlinear equations bring those ideas together with a new question: how much of the linear prediction survives when higher-order terms are present? The answer depends on a bound on the neglected terms, and in borderline cases the nonlinear terms can decide everything.

This is a short first-course preview, after [The Phase Plane of Linear Systems](linear-phase-plane.md). The linear algebra preparation is the L2 [Lucent book](#/books/lucent-linear-algebra), particularly eigenvalues and complex eigenvalues. We introduce the Jacobian and one energy argument here. Full nonlinear dynamics, bifurcation theory, periodic-orbit theory, and general conjugacy theorems belong to the continuation, rather than to this chapter's proof obligations.

## Equilibria of a vector field

**Definition 15.1 (Autonomous system and equilibrium).** Let \(U\subset\mathbb R^n\) be open and \(F:U\to\mathbb R^n\) continuously differentiable. The system is \(z'=F(z)\). An equilibrium is a point \(z_*\in U\) with \(F(z_*)=0\), giving the constant solution \(z(t)=z_*\).

For a planar system, both component rates must vanish at an equilibrium. A point where only one rate vanishes lies on a nullcline. A trajectory crossing that nullcline has a horizontal or vertical tangent, provided the other rate is nonzero. Intersections of the two nullclines are the equilibria.

The scalar existence proof extends to finite-dimensional systems without any new infinite-dimensional theorem. Here are the details needed to justify that extension.

**Proposition 15.2 (Local systems existence and uniqueness).** A continuously differentiable vector field on an open set has a unique local solution through each interior initial point.

**Proof.** Choose a closed state box around the initial point, contained in \(U\). Use the maximum component norm. Continuity bounds \(\|F\|_\infty\) by some \(M\). If every first partial derivative is bounded, a coordinate-by-coordinate mean-value estimate gives
\[
 \|F(u)-F(v)\|_\infty\le L\|u-v\|_\infty
\]
with \(L\) the maximum, over component rows, of the sums of partial-derivative bounds. Choose \(h\) so \(Mh\) is at most the box's smallest half-width. Starting from the constant vector, define \(u_{k+1}=z_0+\int_{t_0}^t F(u_k(s))ds\), componentwise.

The rate bound keeps every iterate in the box. Exactly the integral estimate of Chapter 4, with the norm in place of absolute value, gives successive differences at most \(ML^k|t-t_0|^{k+1}/(k+1)!\). Their tails tend uniformly to zero. Each component therefore converges uniformly to a continuous limit, the Lipschitz bound passes \(F\) through the limit, and the componentwise fundamental theorem produces a solution. For two solutions in the box, iterating their integral difference gives \(D(Lh)^k/k!\), tending to zero, so they agree. \(\square\)

The same bounded-rate argument gives continuation while the state remains in a compact subset of \(U\). All norms on a fixed finite-dimensional space give the same local convergence and stability notions; the concrete inequalities from Chapter 14 suffice whenever we change coordinates.

## The Jacobian and the first-order remainder

**Definition 15.3 (Jacobian matrix).** The Jacobian \(DF(z_*)\) has entry \((i,j)\) equal to the partial derivative of component \(F_i\) with respect to coordinate \(z_j\), evaluated at \(z_*\). It records the linear part of the rate law near that point.

For a small displacement \(u\), continuous first partial derivatives give
\[
 F(z_*+u)=F(z_*)+Au+r(u),\qquad A=DF(z_*),
 \qquad \frac{\|r(u)\|}{\|u\|}\longrightarrow0.
\]
The quotient is considered only for nonzero \(u\).

To justify this expansion, change the coordinates one at a time between \(z_*\) and \(z_*+u\). The one-variable mean-value theorem expresses the corresponding change in \(F_i\) as a partial derivative at an intermediate point times \(u_j\). Subtract \(\sum_j A_{ij}u_j\). As \(u\to0\), all intermediate points tend to \(z_*\), so continuity makes the derivative differences arbitrarily small. The finite sum is bounded by that small number times \(\sum_j|u_j|\), which is at most \(\sqrt n\|u\|\) in Euclidean norm. Applying the bound to finitely many components proves the stated remainder.

At an equilibrium \(F(z_*)=0\), so the displaced equation is
\[
 u'=Au+r(u).
\]
The linearisation is \(u'=Au\). The omitted rate is small relative to the displacement near zero; it need not stay small along an orbit that leaves that neighborhood. This is a local statement about rates, not an equality of nonlinear and linear trajectories.

## Worked example 15.1: a competition model's equilibria

Consider
\[
 x'=x(1-x-y),\qquad y'=y(2-x-y).
\]
For a population interpretation take \(x,y\ge0\). An equilibrium must satisfy both products equal to zero. If both coordinates are positive, their remaining factors would require \(x+y=1\) and \(x+y=2\), impossible. The equilibria are therefore \((0,0)\), \((1,0)\), and \((0,2)\).

The Jacobian is
\[
 DF(x,y)=
 \begin{pmatrix}
 1-2x-y&-x\\
 -y&2-x-2y
 \end{pmatrix}.
\]
At the three equilibria it is respectively
\[
 \begin{pmatrix}1&0\\0&2\end{pmatrix},\quad
 \begin{pmatrix}-1&-1\\0&1\end{pmatrix},\quad
 \begin{pmatrix}-1&0\\-2&-2\end{pmatrix}.
\]
The corresponding linear approximations are a repelling node, a saddle, and an attracting node. These are exact classifications of those matrices. A nonlinear conclusion requires a justified bridge, such as the estimate below, or a separate invariant-trajectory argument.

For example, on the invariant axis \(y=0\), the equation reduces to \(x'=x(1-x)\). Positive small initial \(x\) moves away from zero toward one, proving that the nonlinear origin is unstable. Axis invariance follows directly from uniqueness: the solution with \(y=0\) remains a solution of both equations.

Nonnegative populations stay nonnegative while the solution exists. Indeed each component equation has a scalar linear form along a given solution, giving
\[
 x(t)=x_0\exp\!\left(\int_0^t(1-x(s)-y(s))ds\right),
\]
and an analogous formula for \(y\). Positive initial components remain positive; zero components remain zero. Moreover \(S=x+y\) satisfies \(S'=x+2y-S^2\le2S-S^2\). Whenever \(S>2\), its derivative is negative, so \(S\le\max(S(0),2)\) forward. The compact bound in the nonnegative quadrant gives global forward continuation. These conclusions concern the full nonlinear model and were proved without relying on the linear classification.

## A proved sufficient attraction test

**Proposition 15.4 (A quadratic local attraction test).** Suppose \(F(z_*)=0\), \(F\) is continuously differentiable near \(z_*\), and \(A=DF(z_*)\). If there is \(a>0\) such that
\[
 u\mathbin{\cdot}Au\le-a\|u\|^2
 \quad\hbox{for every }u\in\mathbb R^n,
\]
then \(z_*\) is locally asymptotically stable. Here the norm and dot product are Euclidean.

**Proof.** The remainder estimate gives a radius \(\rho>0\), with its closed ball inside \(U-z_*\), such that \(\|r(u)\|\le(a/2)\|u\|\) whenever \(\|u\|\le\rho\). Along a solution in this ball, put \(V=\|u\|^2\). Cauchy–Schwarz gives
\[
 V'=2u\cdot Au+2u\cdot r(u)
 \le-2a\|u\|^2+a\|u\|^2=-aV.
\]
Thus \(V(t)\le V(0)e^{-at}\) while the solution stays in the ball.

If \(\|u(0)\|<\rho/2\), a first exit through radius \(\rho\) would contradict this decreasing bound. The solution remains in the smaller compact ball of its initial radius, so continuation gives all forward time. The bound now holds for all \(t\ge0\), and \(\|u(t)\|\le\|u(0)\|e^{-at/2}\to0\). Given \(\varepsilon>0\), choose \(\delta<\min(\rho/2,\varepsilon)\); the same bound proves stability. \(\square\)

The condition can be checked using the symmetric part \((A+A^T)/2\), because \(u\cdot Au=u\cdot((A+A^T)/2)u\). It is a sufficient test, and not a necessary one. The defective stable matrices in Chapter 13 can fail a monotonic Euclidean energy test while still being asymptotically stable. More general choices of a positive quadratic form enlarge the method, but we do not need them for the promised example.

## Worked example 15.2: identical linearisation, opposite behaviour

The scalar equations \(x'=-x^3\), \(x'=x^3\), and \(x'=0\) all have derivative zero at the equilibrium zero. Their linearisation is the same equation \(u'=0\), whose solutions are constant.

For the first nonlinear equation, the phase line points toward zero and
\[
 x(t)=\frac{x_0}{\sqrt{1+2x_0^2t}}
\]
tends to zero for all forward time. The equilibrium is asymptotically stable, with algebraic decay. For the second, the denominator becomes \(\sqrt{1-2x_0^2t}\), so every nonzero initial state moves away and eventually becomes unbounded. The equilibrium is unstable. The third keeps every state fixed and is stable but not attracting.

Consequently a zero eigenvalue in the linearisation cannot decide the nonlinear question. Its higher-order remainder is the entire rate law in these examples. The derivative approximation is correct in each case; it is the attempted stability conclusion from insufficient information that fails.

## Worked example 15.3: one Lyapunov calculation

Consider the planar system
\[
 x'=-x-y-x(x^2+y^2),\qquad
 y'=x-y-y(x^2+y^2).
\]
The origin is an equilibrium. Its linearisation is the rotating sink
\(\begin{pmatrix}-1&-1\\1&-1\end{pmatrix}\).
The cubic terms strengthen radial decay.

Define \(V=x^2+y^2\). This nonnegative function vanishes only at the origin. Along every solution,
\[
 \begin{aligned}
 V'&=2x[-x-y-x(x^2+y^2)]
     +2y[x-y-y(x^2+y^2)]\\
   &=-2(x^2+y^2)-2(x^2+y^2)^2
    =-2V-2V^2\le-2V.
 \end{aligned}
\]
The mixed terms cancel exactly. Hence \(V(t)\le V(0)e^{-2t}\), and
\(\|(x(t),y(t))\|\le\|(x_0,y_0)\|e^{-t}\).

The field is polynomial on the whole plane. This norm bound traps every forward solution in a compact disk, so continuation proves global forward existence. The inequality then proves stability and attraction for every initial point, not just nearby ones. This is called a Lyapunov calculation: a scalar function decreases along the actual trajectories even though their exact component formulas were not needed.

The calculation establishes more than the picture of a rotating sink. It gives a rate and a global domain of attraction. Conversely, a merely nonpositive derivative of an arbitrary energy would not automatically imply attraction: a conserved energy on a linear center is nonincreasing too. Strict control of the state appears explicitly in this proof.

## What this preview leaves open

Purely imaginary eigenvalues present another borderline. The two fields
\[
 x'=-y\mp x(x^2+y^2),\qquad
 y'=x\mp y(x^2+y^2)
\]
have the same linear rotation at zero. With the minus choice their squared radius satisfies \(V'=-2V^2\); with the plus choice it satisfies \(V'=2V^2\). One attracts and the other repels. The linear center alone cannot choose between them.

For hyperbolic equilibria, where no eigenvalue has zero real part, broader linearisation theorems connect the nonlinear and linear geometry. Their precise conclusions distinguish stability, orbit shape, coordinate changes, and time parameterization. Proving those theorems requires more local dynamics than this first course supplies. They are not invoked to fill a gap in any proof above.

The next route is the planned Dynamical Systems: A First Course. The existing [Differential Equations: Verified Dynamics](#/books/differential-equations-verified-dynamics) provides a more advanced continuation with explicit additional preparation, including nonlinear stability, bifurcations, periodic orbits, and verified computation. A first-course learner should take its prerequisite guidance seriously rather than treating all advanced results as immediate consequences of an eigenvalue computation.

## Exercises

### Exercise 15.1 {#nonlinear-preview-ex-1}

Find the equilibria and Jacobian of \(x'=x-x^2\), \(y'=-2y\).

<details><summary>Hint 1</summary>
Both component rates must vanish.
</details>
<details><summary>Hint 2</summary>
The Jacobian is diagonal in this example.
</details>
<details><summary>Solution</summary>
The equilibria are \((0,0)\) and \((1,0)\). The Jacobian is \(\operatorname{diag}(1-2x,-2)\), giving \(\operatorname{diag}(1,-2)\) and \(\operatorname{diag}(-1,-2)\). The linear approximations are a saddle and an attracting node. At \((1,0)\), Proposition 15.4 applies with \(a=1\), proving local asymptotic stability of the nonlinear system there.
</details>

### Exercise 15.2 {#nonlinear-preview-ex-2}

Show directly that \((0,0)\) in Exercise 15.1 is unstable.

<details><summary>Hint 1</summary>
Start on the invariant axis \(y=0\).
</details>
<details><summary>Hint 2</summary>
Positive small \(x\) follows a logistic equation.
</details>
<details><summary>Solution</summary>
With \(y_0=0\), uniqueness keeps \(y=0\). For \(0<x_0<1\), \(x'=x(1-x)\) increases toward one. In particular, arbitrarily small positive \(x_0\) eventually reaches \(x=1/2\). This disproves stability using one fixed departure distance and arbitrarily close initial states.
</details>

### Exercise 15.3 {#nonlinear-preview-ex-3}

For \(F(x,y)=(-x-y+x^2,\ x-y)\), find the linearisation at zero and bound the remainder.

<details><summary>Hint 1</summary>
Keep only degree-one terms in the Jacobian at zero.
</details>
<details><summary>Hint 2</summary>
The remainder vector is \((x^2,0)\).
</details>
<details><summary>Solution</summary>
The matrix is \(A=\begin{pmatrix}-1&-1\\1&-1\end{pmatrix}\). The remainder has norm \(x^2\le x^2+y^2=\|u\|^2\), so its norm divided by \(\|u\|\) tends to zero. Since \(u\cdot Au=-\|u\|^2\), the quadratic local test proves local asymptotic stability.
</details>

### Exercise 15.4 {#nonlinear-preview-ex-4}

For the competition model, explain why the two positive-rate factors cannot vanish simultaneously at an equilibrium with both populations positive.

<details><summary>Hint 1</summary>
Division by a positive population is allowed at such a point.
</details>
<details><summary>Hint 2</summary>
Compare the two required values of \(x+y\).
</details>
<details><summary>Solution</summary>
Positive \(x,y\) require \(1-x-y=0\) and \(2-x-y=0\). These imply \(x+y=1\) and \(x+y=2\), a contradiction. Therefore every equilibrium lies on at least one coordinate axis, yielding exactly the three points found in the worked example.
</details>

### Exercise 15.5 {#nonlinear-preview-ex-5}

Check the symmetric-part condition for \(A=\begin{pmatrix}-2&-3\\3&-2\end{pmatrix}\).

<details><summary>Hint 1</summary>
Compute \(u\cdot Au\) directly.
</details>
<details><summary>Hint 2</summary>
The two mixed terms have opposite signs.
</details>
<details><summary>Solution</summary>
For \(u=(x,y)\), \(u\cdot Au=-2x^2-3xy+3xy-2y^2=-2\|u\|^2\). Thus the condition holds with \(a=2\). Any continuously differentiable field with this Jacobian at an equilibrium satisfies the proposition's local attraction conclusion.
</details>

### Exercise 15.6 {#nonlinear-preview-ex-6}

Why does \(V'\le0\) alone fail to prove that every trajectory approaches an equilibrium?

<details><summary>Hint 1</summary>
Use a linear rotation.
</details>
<details><summary>Hint 2</summary>
Its squared radius is constant, not shrinking.
</details>
<details><summary>Solution</summary>
For \(x'=-y,\ y'=x\), the function \(V=x^2+y^2\) satisfies \(V'=0\le0\). Every nonzero solution stays on a circle and never approaches the origin. A decreasing or nonincreasing quantity needs a further condition linking its decrease to the state before attraction follows.
</details>

### Exercise 15.7 {#nonlinear-preview-ex-7}

For the Lyapunov example, bound the time sufficient to reduce the norm to at most one tenth of its initial value.

<details><summary>Hint 1</summary>
Use the proved inequality \(\|z(t)\|\le e^{-t}\|z_0\|\).
</details>
<details><summary>Hint 2</summary>
Solve \(e^{-t}\le1/10\).
</details>
<details><summary>Solution</summary>
Every \(t\ge\log10\) is sufficient. The inequality may overestimate the actual waiting time because the extra term \(-2V^2\) makes decay faster. The bound is uniform over all initial states and does not depend on a numerical simulation.
</details>

### Exercise 15.8 {#nonlinear-preview-ex-8}

For \(x'=-y+x(x^2+y^2)\), \(y'=x+y(x^2+y^2)\), derive the squared-radius equation and determine stability at zero.

<details><summary>Hint 1</summary>
The rotation terms cancel in \(2xx'+2yy'\).
</details>
<details><summary>Hint 2</summary>
Solve \(V'=2V^2\) for a positive initial value.
</details>
<details><summary>Solution</summary>
We obtain \(V'=2V^2\), so \(V(t)=V_0/(1-2V_0t)\). Every nonzero arbitrarily small initial radius grows and reaches any fixed larger small radius before its blow-up time. Thus zero is unstable, despite its purely imaginary linear eigenvalues.
</details>

### Exercise 15.9 {#nonlinear-preview-ex-9}

For the same system with both cubic signs negative, find the squared-radius formula.

<details><summary>Hint 1</summary>
Now \(V'=-2V^2\).
</details>
<details><summary>Hint 2</summary>
Use separation, including \(V_0=0\) separately.
</details>
<details><summary>Solution</summary>
For \(V_0>0\), \(V=V_0/(1+2V_0t)\); for \(V_0=0\), \(V=0\). The radius never exceeds its initial value and tends to zero. The polynomial field and bounded radius give global forward existence. Thus the origin is asymptotically stable, with algebraic decay.
</details>

### Exercise 15.10 {#nonlinear-preview-ex-10}

Why must the local remainder estimate be combined with a trapping argument in Proposition 15.4?

<details><summary>Hint 1</summary>
The estimate is guaranteed only in a chosen ball.
</details>
<details><summary>Hint 2</summary>
A differential inequality cannot be used after its hypotheses cease to hold.
</details>
<details><summary>Solution</summary>
The inequality \(\|r(u)\|\le(a/2)\|u\|\) holds only for \(\|u\|\le\rho\). The first-exit contradiction proves a sufficiently small solution never leaves that region. Only then can the energy inequality be extended to every forward time and used to prove attraction.
</details>

### Exercise 15.11 {#nonlinear-preview-ex-11}

Give a scalar equilibrium that is stable but not attracting and has the same linearisation as both an attracting and an unstable nonlinear equilibrium.

<details><summary>Hint 1</summary>
Consider the three equations in Worked example 15.2.
</details>
<details><summary>Hint 2</summary>
The equation with zero rate keeps every initial state fixed.
</details>
<details><summary>Solution</summary>
For \(x'=0\), zero is stable because every nearby state remains at its initial distance, but it is not attracting. Its linearisation is \(u'=0\), also the linearisation of \(x'=-x^3\) and \(x'=x^3\) at zero. Those have asymptotically stable and unstable equilibria, respectively.
</details>

### Exercise 15.12 {#nonlinear-preview-ex-12}

State precisely what must be proved before a finite nonlinear trajectory plot can justify a claim of global attraction.

<details><summary>Hint 1</summary>
A plot samples initial data and a finite time horizon.
</details>
<details><summary>Hint 2</summary>
Separate existence, boundedness, and the limiting assertion.
</details>
<details><summary>Solution</summary>
One must establish forward existence for every claimed initial state, show trajectories remain in the rate law's domain, and prove convergence as time tends to infinity for all those states. A bound such as the Lyapunov example's \(\|z(t)\|\le e^{-t}\|z_0\|\), together with continuation, supplies these statements. A finite plot alone supplies none of their universal or infinite-time quantifiers.
</details>

## Sources

Original exposition. Primary references for nonlinear equilibria, linearisation, and Lyapunov methods are Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, Chapters 6 and 9](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode) and Jiří Lebl's [Notes on Diffy Qs, nonlinear systems](https://www.jirka.org/diffyqs/html/diffyqs.html). Quarto calculus's Bifurcations, Chaos, and Fractals chapter is a retained orientation seed. General hyperbolic linearisation and nonlinear conjugacy results are cited as continuation topics and are not used as unproved steps in this chapter.

## Summary

Equilibria solve every component equation, and the Jacobian gives a local linear approximation with a controlled remainder. Borderline linear data can correspond to attraction, instability, or neutral behavior. A quadratic decay estimate can bridge from a linear part to a nonlinear stability proof; one explicit Lyapunov calculation also gives global existence and attraction. This completes the first-course route and identifies the additional questions studied in nonlinear dynamics.
