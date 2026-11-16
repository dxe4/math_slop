# Welcome

Calculus is the mathematics of two complementary acts: looking *locally* to measure change and adding *globally* to measure accumulation. A derivative replaces a curved process by its best nearby linear model. An integral assembles many small contributions into a total. The Fundamental Theorem of Calculus says that, under suitable hypotheses, these acts undo one another. The same pattern returns in Taylor series, differential equations, multivariable approximation, and the boundary–interior theorems of vector calculus.

This is an **L1–L2 alternative computational route**, with Outline status. It
assumes fluent arithmetic, elementary algebra, functions and graphs, radians,
and elementary trigonometry. The [concise starting toolkit](00i-precalculus-bridge.md)
reviews notation and immediate techniques; one short primer does not replace
that preparation. Euler’s primary [Single-variable Calculus book](../../apps/calculus/reading/book-a.html)
is the main route for a sustained first course.

The shelf route contains the toolkit and **chapters 1–15**, ending with vectors,
partial derivatives, multiple integrals and vector calculus as a computational
introduction. For the complete multivariable route, continue in
[Multivariable and Vector Calculus](#/books/calculus-multivariable), which states
its calculus and linear-algebra preparation separately.

Chapters 16–51 remain in this native Quarto project as source readings and
continuations. They are outside this compact shelf route. They carry their own
higher prerequisites and support the separately commissioned ODE, Fourier,
complex, measure, functional-analysis, geometry, probability and applied texts.
The existing chapter addresses, worked mathematics and PDF remain available;
retaining a source does not make it a required part of the L1–L2 route.

## Core goals and retained continuation goals

The compact route develops representation, limits, derivatives, integrals, series and elementary multivariable computation. The later goals in this list describe the retained advanced continuations; they are not outcomes promised by completing chapters 1–15 alone. Across the full source project, the goals are to:

- translate a changing situation among words, units, formulas, tables, and graphs;
- state and use limits, derivatives, integrals, and convergence with attention to their hypotheses;
- solve computational problems and explain why the chosen method applies;
- construct and critique mathematical models, including their assumptions and limits;
- control approximation error rather than merely report a decimal answer;
- extend one-variable ideas to curves, surfaces, several variables, and vector fields;
- use asymptotics, transforms, variational equations, and PDE classifications;
- interpret curvature, automatic derivatives, simulation uncertainty, and
  analytic functions without hiding their hypotheses;
- use matrix geometry, stable ODE solvers, bifurcation diagnostics, and tensor
  balance laws;
- design and audit elementary feedback controllers, regularised inversions, and
  sequential data-assimilation calculations;
- use measure and function-space language to justify convergence, projection,
  and operator equations that finite-dimensional calculus only anticipates;
- choose and audit stable linear-algebra and optimization algorithms rather
  than treating solver output as a certificate;
- distinguish classical, weak, and entropy solutions of nonlinear conservation
  laws and verify a conservative finite-volume calculation; and
- construct likelihood estimates, uncertainty statements, and experimental
  designs while separating sampling error from model error.

## How to read actively

Use three passes. First, identify the motivating question and predict what a reasonable answer should look like. Second, work through definitions and examples with pencil and paper, checking dimensions and signs. Third, close the book and reconstruct the argument in your own words. The exercises are part of the exposition: routine items build fluency, explanation items reveal structure, and challenge or project items ask you to make decisions.

Throughout the book, $f'(a)$ means the derivative of $f$ at $a$, $\int_a^b f(x)\,dx$ is a signed accumulation, and vectors are written in bold when prose permits and with angle brackets in formulas. The symbol $\approx$ marks approximation, while $=$ is reserved for exact equality. Unless stated otherwise, angles are in radians and functions are real-valued.

<div class="callout callout-tip">
<p class="callout-title">A durable problem-solving loop</p>

**Represent, estimate, calculate, interpret, check.** Draw or name the objects, predict scale and sign, carry out a justified calculation, translate the answer back into context, and test it against units and limiting cases.

</div>

## A visual and computational companion

The figures were generated reproducibly with Plotnine. Each plot is followed by a prose reading because a graph is an argument, not decoration. Computational tools are welcome for exploration and verification, but a sampled graph cannot prove continuity, a decimal cannot prove convergence, and an antiderivative returned by software is not useful until its domain and derivative have been checked.

## The retained project and its wider source routes

The concise primer supplies the immediate mathematical language. Parts I–III establish
functions, limits, differentiation, integration, applications, and elementary
differential equations. Part IV studies infinite approximation and curved
coordinates, while Part V develops multivariable and vector calculus. Part VI
extends the course into numerical methods, phase space, oscillation, difference
equations, constrained optimization, probability, differential forms, and a
full modeling studio.

Part VII is an advanced continuation rather than an assumed external course.
It develops asymptotic and special-function tools, continuous and discrete
transforms, calculus of variations, partial differential equations, differential
geometry, automatic differentiation, stochastic models, and complex variables.
Each chapter begins with internal preparation links. Readers interested mainly in
scientific computing can take Chapters 24–25, 27, 29–30; geometry readers can
take Chapters 26 and 28 before Chapter 31; modeling readers can continue in
numbered order.

Part VIII connects calculus to data and decision-making. Chapter 32 builds
linear algebra from vectors and equations before using singular values.
Chapters 33–34 develop numerical evolution, bifurcations, chaos, and fractals.
Chapter 35 derives continuum balance laws and tensor notation; Chapter 36
develops feedback and optimal control; Chapter 37 treats inverse problems,
regularisation, Bayesian uncertainty, and filtering. Each includes its own
prerequisite repair kit, so this route does not assume a separate course in
linear algebra, probability, mechanics, or control.

Part IX supplies foundations and algorithms that earlier applied chapters use
only informally. Chapter 38 rebuilds integration through measure and
almost-everywhere convergence; Chapter 39 turns functions into geometric
objects in Banach and Hilbert spaces. Chapter 40 develops stable direct and
iterative linear algebra, and Chapter 41 turns optimality conditions into
computational algorithms with stopping certificates. Chapter 42 extends the
PDE route to nonlinear shocks and conservative finite-volume methods. Chapter
43 completes the data route with likelihood, repeated-sampling uncertainty,
regression inference, and experimental design.

Readers may take Part IX in order, but three shorter internal routes are also
supported. The analysis route is Chapters 38–39 after Chapters 10, 25, and 32.
The computational route is Chapters 40–41 after Chapters 20, 29, and 32. The
modeling-and-data route is Chapter 42 after Chapters 27 and 35, followed by
Chapter 43 after Chapters 21, 32, and 37. Every chapter opens with linked repair
material, so none of these routes assumes an external measure theory,
functional analysis, numerical linear algebra, optimization, conservation-law,
or mathematical-statistics course.

Part X extends calculus where the ordinary smooth, local, Euclidean picture
stops being sufficient. Chapter 44 replaces a missing derivative by convex
subgradients and proximal maps. Chapter 45 makes the chain rule coordinate-free
on manifolds. Chapter 46 packages boundary-value problems into Green kernels
and integral equations; Chapter 47 introduces fractional-memory operators.
Chapter 48 develops symplectic and conservative time stepping, and Chapter 49
turns probability distributions into a transport geometry whose gradient flows
include diffusion. These chapters form a connected route, but each begins with
an internal preparation map.

Part XI repairs two foundations that the PDE and operator chapters previously
used only in abbreviated form. Chapter 50 defines distributions, weak
derivatives, Sobolev spaces, traces, mollifiers, and weak Poisson problems.
Chapter 51 develops Fourier and Chebyshev spectral methods, differentiation
matrices, Galerkin and collocation formulations, aliasing, Gibbs behavior, and
verification. Both chapters distinguish executable finite approximations from
the infinite-dimensional theorems they illustrate.

Appendices gather additional practice, responsible technology use, notation,
solutions, references, and an index-style topic guide. Appendix E is a formula
and units reference with conditions attached, while Appendix F gives six
extended capstone briefs. The [guided project studios](app-g-project-studios.md)
add worked investigations in rates, accumulation, ODEs, vector calculus,
transforms, PDEs, optimization, stochastic and complex methods, plus a
model-comparison casebook and peer-review protocol.

The [Python laboratories for calculus](app-h-python-laboratory.md)
add thirty runnable blocks and seventeen new Plotnine visuals. They begin with
variables and function tables, then code limits, derivatives, root finding,
quadrature, ODE solvers, Taylor approximation, gradients, multiple and line
integrals, Monte Carlo, least squares, a heat equation, and bootstrap
uncertainty. The expanded route adds automatic and complex-step
differentiation, adaptive quadrature, ODE event detection, projected
optimization, a divergence-theorem audit, inverse and implicit differentiation,
arc-length refinement, vector-area computation, and numerical recovery of the
Fundamental Theorem. Each example includes validation, a check, and a statement
of what the finite calculation does not prove. Every numbered chapter also has
at least one described visual checkpoint. Suitable formulas are followed by
small standalone Python translations in the chapters themselves, so the
appendix is enrichment rather than a prerequisite for seeing code.

Mathematics becomes reliable when its assumptions are visible. Accordingly, important results are stated with hypotheses, common false moves are named, and examples include checks. You are encouraged to annotate every theorem with two questions: “What does this let me conclude?” and “What fails if I remove a hypothesis?”
