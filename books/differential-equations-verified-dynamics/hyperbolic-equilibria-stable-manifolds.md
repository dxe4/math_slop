
# Hyperbolic Equilibria and Stable Manifolds

A saddle has directions that contract and directions that expand. Its stable set is usually curved, so the stable eigenspace is only its tangent approximation. This chapter constructs that curved set by a contraction argument, proves its local uniqueness and differentiability, and explains the difference between local trapping and the global stable manifold.

Required tools are matrix exponentials, a spectral splitting, completeness of a weighted space of continuous functions, the contraction theorem and differentiability in finite-dimensional parameters. The proof establishes the local continuously differentiable stable-manifold theorem directly. It does not infer an invariant manifold from a plotted family of trajectories or from tangency alone.

## Hyperbolicity creates a two-sided exponential split

Translate an equilibrium to zero and write its continuously differentiable vector field as $z'=Az+f(z)$, where $f(0)=0$ and $Df(0)=0$. Hyperbolicity means no eigenvalue of the real matrix $A$ has zero real part. Its real invariant stable and unstable subspaces form a direct sum. Complex eigenvalues occur in conjugate pairs and are grouped into the corresponding real blocks.

Choose a positive rate smaller than the smallest absolute real part of the eigenvalues. Finite-dimensional Jordan form then gives one finite constant $K$ such that

$$\|e^{A_st}\|\le Ke^{-at},\qquad
\|e^{-A_ut}\|\le Ke^{-at},\qquad t\ge0.$$

Polynomial factors from a nontrivial Jordan block are absorbed by the margin between the chosen rate and the true spectral gap. The constants depend on the coordinates and norm. Negative real parts alone need not give a decreasing Euclidean norm at every instant.

Write the state as $(x,y)$ in these stable and unstable coordinates. Use the maximum of the two component norms, absorbing projection constants into the estimates. Each nonlinear component has an arbitrarily small Lipschitz constant on a sufficiently small neighbourhood, because its derivative vanishes at zero.

## A cutoff makes a global contraction without changing the local equation

The integral construction will evaluate functions at all nonnegative times, so first extend the nonlinear remainder outside a small ball. Multiply it by a smooth cutoff equal to one in that ball and zero outside a slightly larger ball. The extension is continuously differentiable and globally Lipschitz. Its derivative has two terms: the cutoff times the original derivative, and the original remainder times the cutoff derivative.

The second term is small too. The remainder divided by radius tends uniformly to zero near the equilibrium, while the cutoff derivative is bounded by a fixed constant divided by that radius. Thus both derivative terms can be made as small as desired by shrinking the ball. Denote by $\epsilon$ a common Lipschitz bound on the two extended nonlinear components. The extended equation agrees exactly with the original equation in the inner ball. Every local conclusion below will be restricted to trajectories staying there.

This is a proof device, not a modelling change asserted on the original global state space. Different extensions can produce different distant trajectories. The local stable set is characterised later by the original small forward orbits, which makes that local result independent of the arbitrary extension.

## Decaying trajectories satisfy a future boundary condition

Variation of constants gives the stable coordinate from its initial value $\xi$. For the unstable coordinate, a forward-decaying solution must instead cancel the growing homogeneous term. Its future boundary condition yields

$$
\begin{aligned}
x(t)&=e^{A_st}\xi+\int_0^t e^{A_s(t-s)}f_s(x(s),y(s))\,ds,\\
y(t)&=-\int_t^\infty e^{A_u(t-s)}f_u(x(s),y(s))\,ds.
\end{aligned}
$$

The minus sign in the second equation is essential. To derive it, write variation of constants between the current time and a later time, solve backward for the current unstable coordinate, and let the later time tend to infinity. Exponential decay of the backward unstable propagator removes the bounded terminal coordinate. This construction prescribes an entire decaying trajectory, rather than choosing the unstable initial coordinate independently.

Fix a weight $0<\beta<a$ and let the Banach space contain continuous trajectories with finite norm $\sup_{t\ge0}e^{\beta t}\|z(t)\|$. Completeness follows by multiplying trajectories by the continuous weight and using completeness of bounded continuous functions in the uniform norm. A Cauchy sequence of weighted trajectories has a uniform limit, and dividing by the weight recovers a continuous trajectory.

Let the right-hand side of the two integral equations define an operator on this space. The stable integral's Lipschitz norm is at most $K\epsilon/(a-\beta)$. To obtain it, multiply the integrand bound by the weight, substitute the decaying trajectory difference, and integrate the kernel $e^{-(a-\beta)(t-s)}$ from zero to the current time. The future unstable integral similarly gives $K\epsilon/(a+\beta)$ by integrating $e^{-(a+\beta)(s-t)}$ toward infinity.

A convenient common upper bound for the full operator is

$$q=K\epsilon\left(\frac1{a-\beta}+\frac1{a+\beta}\right).$$

Choose the cutoff neighbourhood small enough that this number is below one. The linear forcing has weighted norm at most $K\|\xi\|$. The contraction theorem therefore gives a unique trajectory $z_\xi$ satisfying the integral equations, with

$$\|z_\xi\|_\beta\le\frac K{1-q}\|\xi\|.$$

The improper integral converges uniformly on bounded time intervals under these exponential bounds. Differentiating the integral identities gives the extended differential equation, so the fixed point is an actual solution. This proves existence of the required decaying trajectory and gives a quantitative decay estimate before any manifold terminology is used.

## The stable graph and its tangent

Define $h(\xi)$ to be the unstable component of this trajectory at time zero. The stable initial coordinate is exactly $\xi$, so its initial states form a graph. Subtract the two fixed-point equations for different stable starts. Contraction gives a Lipschitz bound for the trajectory difference, and evaluating its initial unstable coordinate gives a Lipschitz bound for the graph.

The graph is continuously differentiable, not merely Lipschitz. Here are the details behind that claim. The nonlinear integral operator is a continuously differentiable map on the weighted trajectory space. Its derivative inserts the bounded matrix $Df$ in each integral. The same kernel estimates bound its derivative norm by $q$. Uniform continuity of the cutoff derivative controls the remainder: the nonlinear Taylor error is bounded by a modulus tending to zero with the uniform trajectory increment, times the weighted increment norm and the same integrable kernels.

For a stable-parameter increment, the proposed trajectory derivative solves a linear equation with identity minus that bounded operator on the left and the stable linear forcing on the right. The inverse exists by the norm-convergent Neumann series, since its operator norm is below one. Subtracting this linear equation from the fixed-point difference equation leaves the Taylor remainder just estimated. The Lipschitz bound on fixed points makes that remainder smaller than first order in the parameter increment. Applying the bounded inverse proves differentiability. Continuity of the derivative follows from continuity of the operator derivative and the same Neumann-series inverse bound.

At zero the derivative of the nonlinear remainder is zero. The trajectory derivative is therefore $(e^{A_st}v,0)$ for a stable parameter direction $v$. Its initial unstable component vanishes. Hence $h(0)=0$ and $Dh(0)=0$: the graph is tangent to the stable eigenspace. This tangency has been derived from the construction rather than imposed as an unsupported guess.

For higher finite differentiability, bounded higher cutoff derivatives permit repeated differentiation of the same fixed-point equation. The new highest derivative is again obtained by the same invertible linear operator applied to previously controlled terms. The continuously differentiable proof is the theorem established in full here; stronger regularity statements require their corresponding vector-field derivatives.

## Local invariance and the converse trapping characterisation

Choose stable initial coordinates small enough that the fixed-point norm bound keeps the entire forward trajectory in the inner ball where the cutoff is one. These initial points give a local stable manifold for the original equation. A forward time shift of one such trajectory still decays exponentially and satisfies the same integral equations with its new stable initial coordinate. Whenever that coordinate lies in the chosen graph chart, uniqueness of the fixed point identifies the shifted trajectory with the graph trajectory from that coordinate. This proves local invariance, with the chart qualification stated explicitly.

There is a stronger converse. Any forward trajectory remaining in a sufficiently small compact ball is bounded. Variation of constants then gives the same future integral formula for its unstable coordinate, because the backward unstable propagator kills its bounded future terminal value. Use the same integral operator on bounded continuous trajectories with weight zero. Its contraction bound is at most $2K\epsilon/a$, no larger than the bound already made smaller than one. Thus there is only one bounded trajectory for its stable initial coordinate. The exponentially decaying fixed point already constructed is such a bounded trajectory, so the two coincide.

Consequently every sufficiently small trajectory that stays small for all forward time lies on the constructed stable graph and decays exponentially. This characterises the local stable set intrinsically and proves its local uniqueness. A point off the graph must leave that small neighbourhood at some finite forward time. It may later return through global dynamics; the local theorem does not prohibit that excursion or claim permanent global escape.

Apply the entire argument to reversed time to obtain the local unstable manifold, tangent to the unstable eigenspace. Its points converge to the equilibrium backward in time. The two tangent spaces are complementary at the equilibrium. Their nonlinear manifolds are therefore transverse there, even though their global extensions may bend and intersect in more complicated ways away from it.

## Exact curved-manifold examples

**Worked example: a stable parabola in a saddle.** Consider $x'=-x$, $y'=y+x^2$. Solving the first equation and then the second by an integrating factor gives

$$x(t)=x_0e^{-t},\qquad
y(t)=e^t(y_0+x_0^2/3)-x_0^2e^{-2t}/3.$$

Forward convergence occurs exactly when $y_0=-x_0^2/3$. The stable manifold is therefore the parabola with that equation, tangent to the horizontal stable eigenspace. Direct differentiation of its graph also verifies the invariance equation. Choosing the initial unstable coordinate zero instead would generally leave an exponentially growing contribution, even though the chosen start lies on the linear stable eigenspace. The tangent approximation is not an exact invariant set.

**Worked example: an unstable parabola.** For $x'=-x+y^2$, $y'=y$, the explicit solution is

$$y(t)=y_0e^t,\qquad
x(t)=e^{-t}(x_0-y_0^2/3)+y_0^2e^{2t}/3.$$

Backward convergence holds exactly when $x_0=y_0^2/3$. This unstable manifold is tangent to the vertical eigenspace, while the stable manifold is the horizontal axis. Checking the direction of time is indispensable: a trajectory growing forward can be precisely one of the trajectories singled out by the unstable-manifold theorem.

**Worked example: a stable matrix with a large transient.** Let the linear matrix have diagonal entries minus one and minus two, upper off-diagonal entry $M$ and lower off-diagonal entry zero. From initial state $(0,1)$ the coordinates are $y(t)=e^{-2t}$ and $x(t)=M(e^{-t}-e^{-2t})$. The first coordinate reaches $M/4$ at time $\log2$. Both eigenvalues are strictly stable, but the transient can be arbitrarily large as the off-diagonal coupling grows. The semigroup constant in the proof must accommodate that transient. For a nonlinear perturbation, a large constant can require a smaller local neighbourhood to maintain the contraction inequality.

## From the local graph to the global stable set

Every trajectory converging to the equilibrium eventually enters and remains in the local neighbourhood. Its late point lies on the local stable graph by the converse argument. The global stable set is therefore obtained by taking all backward flow images of that local graph for times for which those images exist. Each flow map is a local diffeomorphism, so these images extend its manifold structure.

The resulting global object need not be a single graph over the stable eigenspace. It can fold through the state space and need not be closed or embedded in the simple global-graph sense. The local tangent statement does not count distant intersections with another invariant manifold. In particular, a homoclinic orbit concerns a global intersection of stable and unstable sets away from their common equilibrium; it is not established merely by plotting their tangent lines.

When every eigenvalue is stable, the stable graph has the full state dimension and the construction proves local exponential stability of the equilibrium. When an unstable direction exists, the stable graph has smaller dimension and cannot be a neighbourhood of the equilibrium. Nearby points outside it leave the local neighbourhood, giving instability. Hyperbolicity is what makes these alternatives decisive.

At a zero eigenvalue the exponential split is unavailable. The scalar equation $x'=-x^3$ has a stable equilibrium with algebraic decay, while $x'=x^3$ has an unstable one with the same zero linearisation. Neither is covered by this hyperbolic construction. Their different behaviour motivates the centre-manifold chapter rather than weakening the present theorem's hypotheses.

## Exercises with staged hints and full solutions

<a id="hyperbolic-equilibria-stable-manifolds-ex-1"></a>
### Exercise 1: stable and unstable dimensions

For eigenvalues $-2,-1+i,-1-i,3$, identify both real manifold dimensions and explain hyperbolicity.

<details><summary>Hint 1</summary>

A complex conjugate pair gives a two-dimensional real invariant block.

</details>
<details><summary>Hint 2</summary>

Use real parts to classify the blocks, not the signs of imaginary parts.

</details>
<details><summary>Full solution</summary>

Three real dimensions have negative real parts and one has a positive real part. The stable manifold has dimension three and the unstable manifold dimension one. No eigenvalue has zero real part, so the equilibrium is hyperbolic. The complex pair represents a contracting rotation within its two-dimensional stable block.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-2"></a>
### Exercise 2: the future-integral sign

For $y'=by+g(t)$ with $b>0$, derive the bounded-future formula assuming $g$ is bounded.

<details><summary>Hint 1</summary>

Write variation of constants from the current time to a later time.

</details>
<details><summary>Hint 2</summary>

Solve for the current state before sending the later time to infinity.

</details>
<details><summary>Full solution</summary>

The formula is $y(t)=e^{-b(R-t)}y(R)-\int_t^R e^{-b(s-t)}g(s)\,ds$. If the solution is bounded, the terminal term tends to zero. Bounded forcing makes the integral converge, leaving $y(t)=-\int_t^\infty e^{-b(s-t)}g(s)\,ds$. The negative sign cancels the unstable homogeneous growth.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-3"></a>
### Exercise 3: an admissible weight

Take $a=2$, $\beta=1$, $K=3$. Give a sufficient upper bound on the nonlinear Lipschitz constant for the displayed contraction estimate.

<details><summary>Hint 1</summary>

Insert the constants into the sum of stable and unstable kernel bounds.

</details>
<details><summary>Hint 2</summary>

The desired inequality is strict.

</details>
<details><summary>Full solution</summary>

The bound is $q=3\epsilon(1+1/3)=4\epsilon$. Thus any nonnegative Lipschitz constant strictly smaller than one quarter suffices for this estimate. Equality does not produce a strict contraction. The bound is sufficient rather than an optimal description of every possible nonlinear field.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-4"></a>
### Exercise 4: a general stable parabola

For $x'=-ax$, $y'=by+cx^2$, with $a,b>0$, find the stable graph.

<details><summary>Hint 1</summary>

Try a quadratic graph and differentiate it along the first equation.

</details>
<details><summary>Hint 2</summary>

Its coefficient must satisfy a linear equation with denominator $2a+b$.

</details>
<details><summary>Full solution</summary>

For $h(x)=kx^2$, invariance gives $-2akx^2=bkx^2+cx^2$. Hence $k=-c/(2a+b)$. The explicit integrating-factor solution has growing coefficient $y_0+cx_0^2/(2a+b)$, so forward convergence occurs exactly on this graph. The positive denominator shows no resonance obstructs this stable-to-unstable graph coefficient.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-5"></a>
### Exercise 5: tangency is insufficient

In the first curved-saddle example, what happens to a nonzero start $(x_0,0)$ on the stable eigenspace?

<details><summary>Hint 1</summary>

Use the exact coefficient of the exponentially growing term.

</details>
<details><summary>Hint 2</summary>

The stable graph is below the horizontal axis except at zero.

</details>
<details><summary>Full solution</summary>

Its unstable coordinate is $x_0^2(e^t-e^{-2t})/3$, which grows for positive time and eventually exits every fixed bounded neighbourhood. The eigenspace is tangent to the stable manifold but is not itself invariant for this nonlinear system. To obtain convergence one must choose the curved graph value $y_0=-x_0^2/3$.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-6"></a>
### Exercise 6: derivative of the graph

Explain why the fixed-point derivative at the equilibrium has zero unstable component.

<details><summary>Hint 1</summary>

The nonlinear derivative vanishes at the equilibrium trajectory.

</details>
<details><summary>Hint 2</summary>

Only the stable linear forcing remains in the differentiated integral equation.

</details>
<details><summary>Full solution</summary>

At the zero trajectory the derivative of each nonlinear integral is zero because $Df(0)=0$. The derivative with respect to stable initial data is therefore $(e^{A_st}v,0)$. Evaluating its unstable component at time zero gives $Dh(0)v=0$ for every stable direction. The tangent graph is exactly the stable eigenspace.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-7"></a>
### Exercise 7: bounded converse

Why is it useful to apply the integral operator with weight zero as well as with a positive weight?

<details><summary>Hint 1</summary>

An arbitrary small trapped orbit is known to be bounded before its rate is known.

</details>
<details><summary>Hint 2</summary>

Uniqueness in the larger bounded space identifies it with the already constructed decaying solution.

</details>
<details><summary>Full solution</summary>

The positive-weight construction creates an exponentially decaying fixed point. A trapped orbit initially supplies only a bounded trajectory, but variation of constants still gives the same future integral. The weight-zero contraction has a unique bounded fixed point for that stable initial coordinate. Since the decaying fixed point is bounded too, the two coincide, establishing exponential decay rather than assuming it.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-8"></a>
### Exercise 8: transient amplification

Derive the maximum of $M(e^{-t}-e^{-2t})$ for $M>0$ and nonnegative time.

<details><summary>Hint 1</summary>

Differentiate and solve the scalar stationary equation.

</details>
<details><summary>Hint 2</summary>

Check the endpoints as well as the stationary time.

</details>
<details><summary>Full solution</summary>

The derivative is $M(-e^{-t}+2e^{-2t})$, zero at $e^t=2$. It is positive before that time and negative afterward. At $t=\log2$ the value is $M(1/2-1/4)=M/4$, whereas the initial and limiting values are zero. Stable eigenvalues therefore coexist with arbitrarily large transient magnitude as the coupling grows.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-9"></a>
### Exercise 9: a local exit and a global return

Does leaving the local stable graph imply that a trajectory can never converge to the equilibrium after a distant excursion?

<details><summary>Hint 1</summary>

The converse theorem concerns orbits that stay inside one small neighbourhood for all future time.

</details>
<details><summary>Hint 2</summary>

The global stable set includes backward images of local stable points.

</details>
<details><summary>Full solution</summary>

No. A point off the chosen local graph cannot remain in that small neighbourhood forever, but it may leave and later return onto the local stable branch through global dynamics. Such a converging orbit belongs to the global stable set and is represented by a backward image of a local stable point. A global stable manifold need not be one graph over the original stable eigenspace.

</details>

<a id="hyperbolic-equilibria-stable-manifolds-ex-10"></a>
### Exercise 10: why the centre case is different

Why does the weighted proof not classify the origin for $x'=-x^3$?

<details><summary>Hint 1</summary>

Inspect the linear spectrum and the required positive exponential gap.

</details>
<details><summary>Hint 2</summary>

The exact nonzero solutions decay algebraically rather than exponentially.

</details>
<details><summary>Full solution</summary>

The linearisation has eigenvalue zero, so it supplies neither a stable nor an unstable exponential estimate with a positive rate. There is no admissible weight strictly between zero and the required spectral gap. The nonzero solution is $x_0/\sqrt{1+2x_0^2t}$, whose algebraic decay does not belong to any positive exponentially weighted trajectory space. Centre analysis is needed; failure of hyperbolicity does not itself imply instability.

</details>

## Chapter synthesis

Hyperbolicity supplies exponential kernels in opposite time directions. A weighted contraction chooses the unstable initial coordinate that cancels future growth, and differentiating that fixed point gives a tangent invariant graph. A bounded-orbit converse proves local uniqueness. Global extensions, transient amplification and centre spectrum each mark a different boundary of the local theorem.
