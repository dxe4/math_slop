# Appendix D — Hints and selected solutions {#sec-solutions}

The hints are designed to provide a productive first move, not to remove the central decision. Return to a problem after reading only its first sentence. Selected complete solutions model how to state assumptions, calculate, and check.

## Strategic hints by chapter

**Chapter 1.** For inverse functions, solve algebraically and then swap the domain and range. For growth comparisons, inspect ratios as well as differences.

**Chapter 2.** Factor or rationalize before invoking a theorem. In epsilon–delta work, rewrite the output error in terms of $|x-a|$ and impose a simple preliminary bound when another factor varies.

**Chapter 3.** Annotate nested functions from outside inward. In motion problems, make a sign chart for velocity before computing distance.

**Chapter 4.** Differentiate the constraint before substituting an instant. For Newton iteration, show both iterates and residuals.

**Chapter 5.** List endpoints and critical numbers, then evaluate rather than relying on a sketch. In optimization, write the feasible domain before differentiating.

**Chapter 6.** Identify whether the question asks for displacement, distance, area, or average value. When differentiating an accumulation with variable bounds, use the chain rule at both bounds.

**Chapter 7.** Simplify first. Look for a nested derivative, a product that improves under parts, rational factors, or a standard radical. Split improper integrals at every singularity.

**Chapter 8.** Draw one representative slice and label its thickness. The slice formula should have the units of a small amount; integration adds across the slicing interval.

**Chapter 9.** Record equilibria before separating. In Euler's method, use the slope at the current point, not the unknown next point.

**Chapter 10.** Choose a convergence test from term structure. The ratio test is effective for factorials and exponentials but often inconclusive for rational powers.

**Chapter 11.** Mark parameter direction and find special parameter values. For polar area, identify an interval that traces the target exactly once.

**Chapter 12.** Translate geometry into dot products for perpendicularity and cross products for normals. Check cross products by dotting with both inputs.

**Chapter 13.** Two paths disprove a limit; a radial inequality can prove one. Normalize directional vectors. For constrained extrema, include every Lagrange candidate and boundary exception.

**Chapter 14.** Sketch the region and draw both vertical and horizontal test slices before reversing order. In transformed coordinates, derive or verify the Jacobian.

**Chapter 15.** Identify dimension, boundary, and orientation before selecting Green, Stokes, or divergence. Test for a potential before parameterizing a complicated path.

**Chapters 16–23.** Separate truncation from roundoff in numerical experiments;
linearize a dynamical system before classifying an equilibrium; track energy and
phase in oscillators; solve recurrence boundary data before extrapolating; check
constraint qualifications in KKT problems; normalize every density; audit
orientation in forms; and keep calibration distinct from validation.

**Chapter 24.** State the limit beside every $O,o,\sim$. In a dominant-balance
calculation, substitute the proposed scale back into every discarded term.

**Chapter 25.** Write the transform convention and convergence region before
using a table. In sampling problems, list all frequencies modulo the sample rate.

**Chapter 26.** Derive the first variation for arbitrary endpoint-compatible
$\eta$. Use convexity or a global inequality before calling a stationary curve
a minimizer.

**Chapter 27.** Start from an integral balance and label incoming boundary data.
For a numerical scheme, vary space and time steps separately.

**Chapter 28.** Convert parameter derivatives to arc-length derivatives before
interpreting curvature. Treat a coordinate singularity separately from a
surface singularity.

**Chapter 29.** Draw the graph, then choose forward or reverse mode from the
input/output dimensions. Verify one directional derivative across several
finite-difference steps.

**Chapter 30.** Derive the estimator's expectation and variance before
simulating. Separate time-discretisation bias, sampling error, and model
uncertainty.

**Chapter 31.** Test complex differentiability along real and imaginary
directions first, then verify sufficient regularity. Mark poles, branch cuts, and
contour orientation before integrating.

**Chapter 32.** Write the norm and inner product before estimating a matrix or
operator. Separate a statement about the continuous operator from a statement
about its finite-dimensional discretisation.

**Chapters 33–37.** Track invariant sets and bifurcation parameters in nonlinear
dynamics; distinguish topology from metric geometry; derive every numerical PDE
update from its stencil and boundary rule; state the data-generating assumptions
in inverse problems; and keep approximation, conditioning, and floating-point
stability separate in scientific-computing workflows.

**Chapter 38.** Identify the measure, measurable functions, and almost-everywhere
qualification. For a limit under an integral, name the convergence theorem and
verify each hypothesis rather than relying on pointwise convergence alone.

**Chapter 39.** Choose the ambient normed space before discussing convergence.
For projection and variational arguments, write the orthogonality or coercivity
condition explicitly; for a Neumann series, verify that the operator norm is
strictly below one.

**Chapter 40.** Distinguish the residual from the forward error and record the
condition number that connects them. In Krylov experiments, compare work and
preconditioned spectra as well as iteration counts.

**Chapter 41.** State the objective, feasible set, and stopping test before
selecting an algorithm. A small gradient is not a global certificate; audit
convexity, active constraints, line-search acceptance, and scaling.

**Chapter 42.** Start with an integral balance, then derive the weak form and
Rankine–Hugoniot speed. A conservative finite-volume update still needs a
consistent numerical flux, an entropy mechanism, and a mesh-refinement check.

**Chapter 43.** Declare the estimand and sampling design before calculating an
estimator. Check likelihood support, independence or dependence assumptions,
identifiability, and whether optional stopping or missingness changes the
advertised uncertainty statement.

**Chapter 44.** At a corner, write the supporting-line inequality before
choosing a subgradient. Separate the smooth step from the exact proximal map.

**Chapter 45.** Name the chart and transition map. Components may change while
the tangent vector or differential remains the same; use the chain rule.

**Chapter 46.** State operator and boundary conditions before quoting a Green
kernel. Separate continuous invertibility from quadrature and conditioning.

**Chapter 47.** State derivative convention, lower terminal, order, and units.
Treat endpoint singularity and history truncation as different errors.

**Chapter 48.** Decide which structure matters before selecting an integrator.
Report phase error separately from invariant drift.

**Chapter 49.** Check both coupling marginals and ground-cost units. Separate
sampling and grid errors from entropic regularization bias.

**Chapters 50–51.** Move derivatives onto compactly supported test functions
before naming a weak derivative, and state the Sobolev norm and trace space.
For spectral calculations, name the basis, node convention, physical-domain
scaling, boundary enforcement, and aliasing rule before interpreting a small
residual.

## Selected complete solutions

### Limit by rationalization

For Chapter 2, Exercise 1,
$$
\frac{\sqrt{x}-2}{x-4}
\frac{\sqrt{x}+2}{\sqrt{x}+2}
=\frac{1}{\sqrt{x}+2}
$$
for $x\ne4$. Therefore the nearby expression tends to $1/4$ as $x\to4$. We did not assign a value to the original quotient at $4$; we replaced it by an equal expression on a punctured neighborhood.

### Product rule from the definition

For Chapter 3, Exercise 7, begin with
$$
\frac{f(a+h)g(a+h)-f(a)g(a)}h.
$$
Add and subtract $f(a+h)g(a)$, then regroup:
$$
f(a+h)\frac{g(a+h)-g(a)}h
+g(a)\frac{f(a+h)-f(a)}h.
$$
Differentiability implies continuity, so $f(a+h)\to f(a)$. Taking limits gives $f(a)g'(a)+g(a)f'(a)$.

### Closed-interval optimization

For Chapter 5, Exercise 1, let $f=x^4-4x^2$ on $[-3,2]$. Since
$$
f'=4x(x^2-2),
$$
critical points are $0$ and $\pm\sqrt2$, all in the interval. Values are
$$
f(-3)=45,\quad f(2)=0,\quad f(0)=0,
\quad f(\pm\sqrt2)=-4.
$$
The absolute maximum is $45$ at $-3$, and the absolute minimum is $-4$ at both $\pm\sqrt2$. Continuity on the closed interval guarantees extrema occur among these candidates.

### Displacement versus distance

For Chapter 6, Exercise 4, $v(t)=t^2-4t+3=(t-1)(t-3)$. An antiderivative is $V(t)=t^3/3-2t^2+3t$. Displacement on $[0,4]$ is $V(4)-V(0)=4/3$. Velocity is positive on $[0,1)$, negative on $(1,3)$, and positive on $(3,4]$. Total distance is
$$
[V(1)-V(0)]-[V(3)-V(1)]+[V(4)-V(3)]
=\frac43+\frac43+\frac43=4.
$$
The sign partition is essential.

### Improper comparison

For Chapter 7, Exercise 7, when $x\ge1$ we have $x^2\ge x$, hence $e^{-x^2}\le e^{-x}$. Both functions are nonnegative, and
$$
\int_1^\infty e^{-x}dx=e^{-1}
$$
converges. Direct comparison proves convergence of the Gaussian tail without an elementary antiderivative.

### Logistic midpoint time

For Chapter 9, Exercise 4,
$$
P(t)=\frac{1000}{1+9e^{-0.4t}}.
$$
Setting $P=500$ gives $1+9e^{-0.4t}=2$, so
$$
t=\frac{\ln9}{0.4}\approx5.493.
$$
This is also the time of maximum logistic growth because $P=K/2$.

### Series classification

For Chapter 10, Exercise 4, $\sum(-1)^{n-1}/\sqrt n$ converges by the alternating-series test because $1/\sqrt n$ decreases to zero. Its absolute series is a $p$-series with $p=1/2$, which diverges. The original series is therefore conditionally convergent.

### Tangent plane estimate

For Chapter 13, Exercise 4, $f(x,y)=xe^y$. At $(2,0)$, $f=2$, $f_x=1$, and $f_y=2$, so
$$
L(x,y)=2+(x-2)+2y.
$$
At $(2.01,-0.02)$ this gives $2+0.01-0.04=1.97$. The actual expression $2.01e^{-0.02}$ is close because both input changes are small.

### Polar Jacobian

For Chapter 14, Exercise 8,
$$
\frac{\partial(x,y)}{\partial(r,\theta)}
=\begin{vmatrix}
\cos\theta&-r\sin\theta\\
\sin\theta&r\cos\theta
\end{vmatrix}
=r(\cos^2\theta+\sin^2\theta)=r.
$$
Since $r\ge0$ in the usual polar convention, the area scale is $r$.

### Potential and path independence

For Chapter 15, Exercise 2, $\mathbf F=\langle y,x\rangle=\nabla(xy)$. Therefore work from $(0,0)$ to $(2,3)$ is
$$
\phi(2,3)-\phi(0,0)=6.
$$
No path parameterization is needed, and the polynomial potential is defined on all of $\mathbb R^2$.

## Further selected-solution routes {#fifth-edition-selected-solution-routes}

Chapters [38](38-measure-integration.md),
[39](39-functional-analysis.md),
[40](40-numerical-linear-algebra.md),
[41](41-computational-optimization.md),
[42](42-conservation-laws.md), and
[43](43-statistical-inference.md) each conclude with a numbered exercise set
followed by at least three complete selected solutions. Those chapter-local
solutions retain the definitions, assumptions, units, and error audits needed
to understand the argument, while this appendix supplies strategic first moves
and a route back to the relevant theory.
