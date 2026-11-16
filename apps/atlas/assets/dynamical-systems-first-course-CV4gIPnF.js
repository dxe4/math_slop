var e=`---
id: book-dynamical-systems-first-course
title: "Dynamical Systems: A First Course"
level: advanced-undergraduate
status: draft
production_state: complete-draft
planned_chapters: 15
license: CC BY-SA 4.0
---

# Dynamical Systems: A First Course {#section-1-dynamical-systems-a-first-course}

A dynamical system specifies a state space and a rule for evolution. Nonlinear dynamics asks what that rule implies about equilibria, invariant regions, periodic motion, parameter changes and long-time complexity. A formula, a phase portrait and a numerical trajectory support different conclusions. This course develops the proofs needed to tell those conclusions apart.

The book is at L3 and begins after a first ODE course. Its subject is nonlinear dynamics; linear systems and linear phase portraits remain preparation in their existing home. Later chapters introduce iterated maps, symbolic models, Lorenz dynamics, fractal coverings and quadratic complex iteration. Every chapter has worked examples, ten exercises with two hints and complete solution reveals, Sources, and a final Summary.

<a id="section-5-preparation-through-stable-readings"></a>
## Preparation through stable readings {#section-7-preparation-through-stable-readings}

Use these exact readings from [ODE: A First Course](ode-first-course.md):

- [Existence, uniqueness and Picard iteration](ode-first-course/existence-uniqueness-picard.md).
- [Phase lines and equilibria](ode-first-course/phase-lines-equilibria.md).
- [Linear systems and the matrix exponential](ode-first-course/linear-systems-matrix-exponential.md).
- [The phase plane of linear systems](ode-first-course/linear-phase-plane.md).
- [A nonlinear preview](ode-first-course/nonlinear-preview.md), as a useful bridge rather than a substitute for the present nonlinear proofs.

The systems and phase-plane readings are the current ODE chapters13 and14. Study these readings before using the nonlinear stability classifications. Further foundations are [Lucent linear algebra](/lucent/#/course/linear-algebra/course-guide), [multivariable gradients](/lucent/#/course/calculus/gradient-chain-levels), and the Real Analysis treatments of [continuity](proof-safe-real-analysis/continuity-and-uniform-continuity.md) and [compactness](proof-safe-real-analysis/sequences-compactness.md). The bifurcation and regular-level arguments use the [implicit-function theorem](proof-safe-real-analysis/inverse-implicit-function-theorems.md) at the point of use. Complex numbers are reviewed where quadratic complex maps are introduced.

<a id="section-17-main-reading-route"></a>
## Main reading route {#section-19-main-reading-route}

1. [Flows and Maps: Examples](dynamical-systems-first-course/flows-and-maps.md)
2. [One-Dimensional Flows and Bifurcations](dynamical-systems-first-course/one-dimensional-flows-bifurcations.md)
3. [Nonlinear Planar Systems and Nullclines](dynamical-systems-first-course/nonlinear-planar-systems-nullclines.md)
4. [Linearisation and Hartman–Grobman](dynamical-systems-first-course/linearisation-hartman-grobman.md)
5. [Lyapunov Functions](dynamical-systems-first-course/lyapunov-functions.md)
6. [Conservative and Gradient Systems](dynamical-systems-first-course/conservative-gradient-systems.md)
7. [Limit Cycles and Poincaré–Bendixson](dynamical-systems-first-course/limit-cycles-poincare-bendixson.md)
8. [Bifurcations of Equilibria and the Hopf Bifurcation](dynamical-systems-first-course/equilibrium-bifurcations-hopf.md)
9. [One-dimensional Maps and the Logistic Family](dynamical-systems-first-course/one-dimensional-maps-logistic-family.md)
10. [Period Doubling, Sharkovskii and Feigenbaum](dynamical-systems-first-course/period-doubling-sharkovskii-feigenbaum.md)
11. [Chaos, Lyapunov Exponents and the Horseshoe](dynamical-systems-first-course/chaos-lyapunov-exponents-horseshoe.md)
12. [The Lorenz System and Strange Attractors](dynamical-systems-first-course/lorenz-system-strange-attractors.md)
13. [Fractals and Dimension](dynamical-systems-first-course/fractals-dimension.md)
14. [Julia Sets and the Mandelbrot Set](dynamical-systems-first-course/julia-mandelbrot-sets.md)
15. [Numerical Experiments in Dynamics](dynamical-systems-first-course/numerical-experiments.md)

Chapters1–3 establish domains of evolution, scalar order and planar geometry. Chapters4–6 prove local and global stability tools, first-integral results and gradient restrictions. Chapters7–8 develop periodic-orbit and bifurcation arguments. Chapters9–11 distinguish iterated-map complexity, symbolic structure and tangent growth. Chapters12–14 apply those distinctions to Lorenz dynamics, geometric dimension and complex iteration. The final chapter connects exact claims to finite numerical evidence.

<a id="section-37-what-is-proved-and-what-is-cited"></a>
## What is proved, and what is cited {#section-39-what-is-proved-and-what-is-cited}

The course proves flow composition with its domain restrictions, scalar order and comparison, compact scalar convergence, and positivity and global bounds for selected planar systems. It proves nonlinear exponential stability from a Hurwitz Jacobian, finite-dimensional compact-set LaSalle, regular-oval periodicity, gradient cycle exclusion, return-map stability, planar multiplier and Bendixson–Dulac formulas, and scalar fold and crossing results. Exact radial systems supply complete Hopf-pattern examples.

General Hartman–Grobman, Poincaré–Bendixson and Hopf theorems are explicitly cited with their hypotheses. Later chapters likewise identify the deeper results behind full Sharkovskii ordering, Feigenbaum universality, general horseshoe constructions and rigorous Lorenz-attractor existence. A worked normal form is not presented as a proof of every smooth system, and a numerical plot is not presented as proof of an invariant chaotic set.

Compactness, uniqueness, regularity and the declared state domain are used throughout. The finite-time growth of one tangent vector does not by itself prove chaos. A bounded orbit in an open domain need not stay a positive distance from its missing boundary. A neutral direction on a regular periodic flow has different meaning from contraction into an equilibrium.

<a id="section-45-a-connecting-example"></a>
## A connecting example {#section-47-a-connecting-example}

For the smooth planar field
$$
x'=-y+x(1-x^2-y^2),\\qquad
y'=x+y(1-x^2-y^2),
$$
polar coordinates away from the origin give $r'=r(1-r^2)$ and $\\theta'=1$. The unit circle is periodic because its radius is constant while its angle advances. It is not a set of equilibria. A trapping annulus and a return multiplier support its existence and orbital attraction in different ways.

Changing the radial equation to $r'=\\mu r-ar^3$ with $a>0$ produces an exact Hopf-pattern family. The cycle radius is $\\sqrt{\\mu/a}$ on the appropriate side, and its period and multiplier can be calculated. Those special global radial facts must still be distinguished from the general local bifurcation theorem.

<a id="section-56-how-to-study-a-dynamical-claim"></a>
## How to study a dynamical claim {#section-58-how-to-study-a-dynamical-claim}

First state the equation or map, state space, time set and parameter domain. Then list the existence, uniqueness and continuation assumptions. Identify the invariant set and the exact property being claimed: stability, attraction, periodicity, transitivity, dimension or an error bound.

Work each example by hand before using a picture. Check discarded zero factors, coordinate-chart exclusions, boundary signs and the distinction between a curve and a parameterised trajectory. In a proof, locate the step using compactness or a strict inequality; it is often where an appealing false generalisation would fail.

The existing [logistic-map laboratory](../visual-labs/logistic-map-live.md) accompanies chapters9–10. Its cobweb and parameter pictures help formulate questions; the chapters supply exact landmarks and explain the limitations of finite iterates. For numerical preparation, use [initial-value methods](numerical-mathematics-error-algorithms/initial-value-methods.md), [stiff and multistep methods](numerical-mathematics-error-algorithms/multistep-stiff-dae-methods.md), and [geometric integration](numerical-mathematics-error-algorithms/geometric-numerical-integration.md). A small discretisation error on a fixed horizon does not automatically justify a long-time attractor claim.

<a id="section-64-provenance-and-further-sources"></a>
## Provenance and further sources {#section-66-provenance-and-further-sources}

This is new exposition written for the fifteen-chapter first-course route. Earlier Euler discussions supply linked background: [scalar comparison](differential-equations-verified-dynamics/scalar-comparison-invariant-regions.md), [nonlinear stability and bifurcation](differential-equations-verified-dynamics/nonlinear-stability-bifurcation.md), [periodic orbits and planar limits](differential-equations-verified-dynamics/periodic-orbits-planar-limits.md), and [chaos, symbolic dynamics and entropy](differential-equations-verified-dynamics/chaos-symbolic-entropy.md). Their original proofs and solved exercises remain available there. The first-course chapters develop these ideas with their own worked sequence and identify which deeper results are cited.

The [references and continuations](dynamical-systems-first-course/back-matter/references-and-continuations.md) identify the principal textbooks and the distinction between this course and further differential-equation theory.

<a id="section-70-sources"></a>
## Sources {#section-72-sources}

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.
- Additional primary references and precise cited-result qualifications appear in the individual chapters.

The text, proofs, new examples and exercises are original to Euler. The references provide further reading and attribution for explicitly cited facts.

<a id="section-78-summary"></a>
## Summary {#section-80-summary}

The course connects nonlinear evolution to precise invariant and limiting claims. Exact scalar, energy, return-map and symbolic arguments show what can be proved; cited deeper theorems are named honestly. The state space, domain, time convention and numerical horizon remain part of every conclusion.
`;export{e as default};