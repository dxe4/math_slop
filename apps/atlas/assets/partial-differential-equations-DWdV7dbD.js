var e=`---
id: book-partial-differential-equations
title: "Partial Differential Equations"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Partial Differential Equations {#section-1-partial-differential-equations}

An L3 classical route through equations, boundary data and Fourier methods. The full preparation is [ODE: A First Course](ode-first-course.md) through boundary problems and the first six chapters of the commissioned Fourier Analysis primary. The chapters state their immediate preparation; transform methods additionally use Fourier chapters 7–9. Weak solutions, Sobolev methods and nonlinear wave theory belong to the separate L4 book [PDE: Weak Theory, Waves and Patterns](pde-weak-theory-waves-patterns.md).

All twelve chapters below are authored manuscript drafts with proofs, worked examples and twelve exercises each with staged hints and full solutions.  The [source guide](partial-differential-equations/back-matter/references-and-source-lineage.md) names the Evans/Strauss benchmarks and retained local lineage.

<a id="section-5-reading-route"></a>
## Reading route {#section-7-reading-route}

1. [What Is a PDE? Classification and Model Problems](partial-differential-equations/classification-model-problems.md)
2. [First-Order Equations and Characteristics](partial-differential-equations/first-order-characteristics.md)
3. [Transport and Conservation Laws](partial-differential-equations/transport-conservation-laws.md)
4. [Laplace’s Equation, Mean Value, and Maximum Principles](partial-differential-equations/laplace-mean-value-maximum.md)
5. [Green’s Functions and the Poisson Kernel](partial-differential-equations/green-functions-poisson-kernel.md)
6. [The Heat Equation and the Parabolic Maximum Principle](partial-differential-equations/heat-equation.md)
7. [The Wave Equation](partial-differential-equations/wave-equation.md)
8. [Separation of Variables](partial-differential-equations/separation-of-variables.md)
9. [Sturm–Liouville Expansions](partial-differential-equations/sturm-liouville-expansions.md)
10. [Fourier Transform Methods](partial-differential-equations/fourier-transform-methods.md)
11. [Green’s Functions and Duhamel’s Principle](partial-differential-equations/green-functions-duhamel.md)
12. [Numerical Methods for PDE](partial-differential-equations/numerical-pde-methods.md)

The [diagnostic](partial-differential-equations/front-matter/prerequisite-diagnostic-and-repair.md) repairs the main derivative and boundary habits. In particular, a maximum principle proves comparison and uniqueness in a stated class; it does not construct every solution. The Gaussian chapter separates whole-space construction from bounded-domain estimates.
`;export{e as default};