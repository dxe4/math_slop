
# References, Notation, and Continuations {#section-1-references-notation-and-continuations}

This first-course manuscript is original writing. Its explanations, proofs, examples, and exercises were developed for the stated Euler route. The references below identify established mathematical treatments and syllabus benchmarks. Citation is not a claim that a reference author reviewed this manuscript.

<a id="section-3-primary-references-and-syllabus-benchmarks"></a>
## Primary references and syllabus benchmarks {#section-5-primary-references-and-syllabus-benchmarks}

Jiří Lebl, [Notes on Diffy Qs: Differential Equations for Engineers](https://www.jirka.org/diffyqs/), is an author-hosted open textbook. Its [web contents](https://www.jirka.org/diffyqs/html/diffyqs.html) locate first-order equations, higher-order linear methods, systems, boundary problems, Laplace transforms, power-series methods, and nonlinear systems. This book cites the relevant sections in individual chapters. No external exercise bank or selected-answer appendix substitutes for the solutions authored here.

Gerald Teschl, [Ordinary Differential Equations and Dynamical Systems](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode), Graduate Studies in Mathematics 140, American Mathematical Society, 2012, provides a primary author-hosted reference for existence, continuation, linear equations, Frobenius theory, and further dynamics. Its later chapters exceed this first course's entry level. An advanced reference can support a precise continuation without becoming an unstated prerequisite.

Jiří Lebl, [Basic Analysis: Picard's theorem](https://www.jirka.org/ra/html/sec_picard.html), supplies a primary reference for successive approximations and their convergence. ODE Chapter 4 gives the needed argument directly at the present level instead of requiring the whole analysis book.

William E. Boyce, Richard C. DiPrima, and Douglas B. Meade, [Elementary Differential Equations and Boundary Value Problems, twelfth edition](https://www.wiley.com/en-us/elementary-differential-equations-and-boundary-value-problems-12th-edition-p-9781119782025), Wiley, is a syllabus benchmark for a first undergraduate ODE course combining solution methods, modelling, and qualitative analysis. The publisher's record identifies the edition; no proprietary wording or solutions are reproduced here.

Paul Blanchard, Robert L. Devaney, and Glen R. Hall, [Differential Equations, fourth edition](https://www.cengage.com/c/differential-equations-4e-blanchard-devaney-hall/9780495561989), Cengage, is a second syllabus benchmark, especially for the connection between exact methods and qualitative pictures. The reference supplies context rather than a copied chapter structure.

<a id="section-15-retained-local-source-lineage"></a>
## Retained local source lineage {#section-17-retained-local-source-lineage}

The following local sources were read as seeds. They remain unchanged with their original semantic identities, exercises, solutions, citations, histories, and available PDF editions.

| Source family | Relation to this first-course book |
| --- | --- |
| Calculus chapters 27–28 | Short differential-equation and computation previews remain in the Calculus book |
| Quarto calculus, differential equations and phase space | Orientation for models, separable equations, and phase-line language |
| Quarto calculus, oscillation and transforms | Orientation for forced response and transform methods |
| Quarto calculus, numerical ODEs and bifurcations | Orientation for approximation and the boundary of the nonlinear preview |
| Quarto real analysis, ODE analysis | Reference for precise local existence and continuation arguments |
| Lucent calculus, differential equations | A retained elementary course lesson |
| Lucent analysis, contractions and Picard | A retained function-space perspective with its own investigations |
| Lucent linear algebra, linear systems and capstone | Further matrix-dynamics applications with their own exercises |
| [Atlas Functions and Equations, differential equations](../functions-equations-proof/differential-equations.md) | A shorter retained treatment of linear scalar equations; its declared developed destination is this book's separable/linear first-order chapter |
| Atlas Differential Equations: Verified Dynamics | An advanced continuation retaining ownership of its original chapters |

This book adds a developed course while preserving its sources. Any declared chapter destination names the later treatment explicitly; the original source and its exercises remain readable, and no earlier learner record is reassigned to a new exercise. The new book's exercise IDs use its chapter slugs, while older source exercises keep their own identities.

<a id="section-34-notation-and-conventions"></a>
## Notation and conventions {#section-36-notation-and-conventions}

The independent variable is usually \(t\) for time and sometimes \(x\) for series or exact equations. A prime means differentiation with respect to that independent variable. A solution interval is connected; disconnected formula branches are not automatically one trajectory.

The notation \(y'=f(t,y)\) specifies an explicit scalar rate law. The same letter \(f\) may denote a forcing in a separately stated linear equation, so each chapter identifies its role. An equilibrium of an autonomous equation has zero rate. An initial value supplies a state at one time; a boundary condition can constrain values at distinct endpoints.

For a scalar linear equation, \(p,q\) denote coefficient functions and \(W\) a Wronskian. A leading coefficient must be nonzero on a normalized solution interval. For a regular Sturm–Liouville problem, \(p>0\) and \(w>0\) are coefficient and weight; separated endpoint conditions belong to the definition.

The matrix exponential is \(e^{tA}\), with \(A\) constant unless explicitly stated otherwise. \(I\) denotes an identity matrix in a matrix formula and an interval in a different local context. The planar invariants \(T,D,\Delta\) denote trace, determinant, and discriminant. The determinant symbol \(D\) in that chapter is not a time–state domain.

Numerical states use uppercase \(Y_n\), exact solution values use \(y(t_n)\), and \(h>0\) is a step size. A local defect starts from exact input. Global error compares an accumulated numerical state with the exact trajectory. The notation \(O(h^p)\) refers to a stated limit on a fixed time interval with constants controlled by the given hypotheses.

The Laplace transform uses a real parameter \(s\) and begins at time zero. Its convergence region accompanies a formula. Frobenius real powers are taken on \(x>0\); negative state or time intervals require a separately chosen branch.

<a id="section-48-results-established-and-boundaries-of-the-course"></a>
## Results established and boundaries of the course {#section-50-results-established-and-boundaries-of-the-course}

The course proves local Picard existence and uniqueness, a finite-time initial-data bound, and continuation under interior compact control. It proves regular second-order linear IVP structure and the full constant-matrix solution formula. The planar linear classification includes the repeated and zero-eigenvalue cases.

The Frobenius theorem developed here covers real indicial roots and proves the convergence and logarithmic alternatives. A directly solved Euler example explains complex-root oscillation in the logarithm. A general complex-domain Frobenius treatment belongs to a later course.

Laplace rules have explicit growth and regularity conditions. Transform-based IVP examples are completed by direct verification and uniqueness. General inversion, distributional forcing, and complex contour methods are not silently assumed.

Euler and Heun fixed-interval convergence estimates are proved. The scalar amplification polynomial for RK4 is derived, while a general nonlinear fourth-order theorem is left to numerical analysis. Stability, positivity, conservation, and accuracy remain separate claims.

For regular Sturm–Liouville problems, the book proves Green's identity, real eigenvalues, weighted orthogonality, separated simplicity, and complete elementary constant-coefficient spectra. General eigenfunction completeness and singular endpoint theory require further analysis. Pairwise orthogonality alone does not establish an expansion theorem.

The final nonlinear chapter proves a quadratic local attraction criterion and one global Lyapunov example. General hyperbolic linearisation, stable manifolds, bifurcations, and periodic-orbit theory are continuation topics.

<a id="section-62-further-reading-inside-euler"></a>
## Further reading inside Euler {#section-64-further-reading-inside-euler}

Continue with [Dynamical Systems: A First Course](#/books/dynamical-systems-first-course) for nonlinear flows and planar dynamics. The existing [advanced verified-dynamics book](#/books/differential-equations-verified-dynamics) offers further chapters with additional preparation. Real Analysis supplies a more systematic study of convergence, compactness, and fixed-point methods. Fourier Analysis and Partial Differential Equations continue the boundary-spectrum ideas when their own prerequisite routes are complete.

 This back matter records the scope and lineage of the edition without altering earlier release evidence.
