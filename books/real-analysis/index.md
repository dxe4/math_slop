# Welcome

Real analysis asks when approximation can be trusted. A calculator can suggest that
a sequence settles down, a graph can suggest that a curve has a tangent, and a
table of areas can suggest an integral. Analysis supplies definitions and proofs
that separate reliable conclusions from persuasive pictures.

The compact shelf route is **L3, Outline**, and assumes single-variable calculus,
sequences and series, and elementary proof with quantifiers. Euler’s primary
[Real Analysis book](#/books/proof-safe-real-analysis) supplies the sustained
proof course. This Quarto text offers a shorter alternative: the
[concise starting toolkit](00i-calculus-bridge.md), followed by chapters
1–14 **except chapters 11 and 13**, whose vista material is outside the compact
route. Those two files and chapters 15–32 remain source readings in this project
with their original identities. A short reminder of notation is not a substitute
for a calculus or proof prerequisite.

## Advanced Analysis Topics: a separate L5 route

Chapters **33–47** form the separate **Advanced Analysis Topics** shelf entry.
This is specialist continuation material, not a second half implied by the L3
label. In addition to the Real Analysis primary, preparation depends on the
chapter. The table names the Euler book families required by each topic; where a
commissioned primary is still being written, use the stated retained source
chapters and the chapter’s own prerequisites rather than assuming completion.

| Original chapter | Topic | Euler preparation |
| --- | --- | --- |
| 33 | Radon measures | Measure and Integration; point-set topology |
| 34 | Convex duality | Functional Analysis; Measure and Integration |
| 35 | Semigroups | Functional Analysis, including unbounded operators |
| 36 | Weak convergence of probability measures | Measure and Integration; probability with proofs; metric topology |
| 37 | Geometric measure theory | Measure and Integration; Multivariable and Vector Calculus |
| 38 | Nonlinear degree | Real Analysis local inverse theory; topology; Functional Analysis |
| 39 | Polish spaces and disintegration | Measure and Integration; probability with proofs; point-set topology |
| 40 | Optimal transport | Measure and Integration; probability; convex duality from chapter 34 |
| 41 | Ergodic theory | Measure and Integration; probability; Hilbert-space Functional Analysis |
| 42 | Stochastic processes | Probability with proofs; Measure and Integration; chapter 39 |
| 43 | Interpolation and singular integrals | Fourier Analysis; Measure and Integration; Functional Analysis |
| 44 | Unbounded spectral theory | Complex Analysis; Functional Analysis; Hilbert spectral theory |
| 45 | Banach-valued integration | Measure and Integration; Functional Analysis |
| 46 | Fredholm theory | Functional Analysis, including compact operators; PDE for its PDE applications |
| 47 | Extreme points | Functional Analysis weak-star topology; chapter 33 Radon representation; chapter 34 convexity |

The [retained source sequence](#retained-source-sequence) below records the full
native project’s connections. It does not add chapters 15–32 to the compact
shelf route or remove the additional preparation of the L5 entry.

## Retained source sequence {#retained-source-sequence}

The main analysis sequence then develops

$$
\text{completeness}
\longrightarrow \text{convergence}
\longrightarrow \text{compactness and continuity}
\longrightarrow \text{calculus}
\longrightarrow \text{measure and function spaces}.
$$

The advanced sequence continues into multivariable differentiation, change of
variables, construction of Lebesgue measure, Radon–Nikodym theory, product
measures, Sobolev spaces, and differential equations. Throughout, the central
question is the same: **which estimate makes the limiting operation legal?**

The new final sequence continues through Baire category, function-space
compactness, the major Banach-space theorems, Hilbert and spectral theory,
maximal functions, Fourier transforms and distributions, martingales,
variational existence, and weak PDE methods. These chapters do not assume an
unlisted graduate course: each one opens with a dependency statement and points
back to the exact definitions it reuses.

The specialist sequence adds locally compact spaces and Radon measures,
convex duality and monotone operators, semigroups, weak convergence of
probability laws, geometric measure theory, and nonlinear topological degree.
These are connected continuations rather than a list of graduate buzzwords:
each chapter contains a preparation route, a local repair kit, a proof engine,
counterexamples, and a scoped computational or visual laboratory.

The specialist continuation closes six dependency gaps already visible in
those chapters. It constructs Polish and standard Borel spaces before using
probability kernels and disintegration; develops optimal transport and
Wasserstein geometry; studies invariant long-time averages; builds Brownian
motion and stochastic integration; proves the interpolation step previously
quoted by the maximal-function chapter; and extends compact spectral theory to
spectral measures and unbounded self-adjoint operators. Each new chapter begins
with a route from material already proved in this book, so none assumes an
unlisted topology, probability, complex-analysis, or operator-theory course.

The present continuation closes three further gaps identified by comparison
with standard graduate analysis sequences. Chapter 45 constructs the
Banach-valued integral used earlier in Duhamel formulas and distinguishes
Bochner from Pettis integration. Chapter 46 develops Fredholm operators,
compact perturbations, and the solvability alternative for integral and
elliptic equations. Chapter 47 adds Krein–Milman, Choquet representation, and
uniform convexity, so weak compactness and convex representation are no longer
left as disconnected slogans.

## Choose a route

### Route 1: beginning proof-based analysis

Read the [concise primer](00i-calculus-bridge.md), then begin Chapter 1.
The primer is a compact reference, not a sequence of remedial modules. When a
later chapter needs a less familiar idea, its preparation section gives the
definition, example, and shortest internal repair route at that point.

### Route 2: repairing prerequisite notation

Complete the single-variable calculus preparation first. Then skim the [concise primer](00i-calculus-bridge.md) and begin Chapter 1. Return to a primer section when its notation is unfamiliar; the rigorous treatment in Chapters 6–8 presumes enough computational calculus to focus on proof.

### Route 3: calculus-ready or analysis-ready

If you have completed a standard calculus course, skim the primer's logic
section and begin [sec-proof](01-proof.md#sec-proof). Readers who have already studied a first rigorous
analysis course may start with [sec-synthesis](14-synthesis.md#sec-synthesis) as a diagnostic map and move to
the advanced sequence at Chapter 15. The advanced chapters use the definitions
and theorems of Chapters 1–14, not merely computational familiarity.

## What readiness means

Readiness is local, not a single label. Before Chapter 1, you should be able to:

- perform arithmetic with fractions and signed numbers;
- solve a linear equation and factor a simple polynomial;
- interpret function notation, domain, graph, and composition;
- use the Pythagorean theorem and coordinate distance;
- work with powers, logarithms, radians, sine, and cosine;
- translate “every” and “there exists” into a complete sentence;
- read sigma notation for a finite sum; and
- describe average rate and accumulated change in words.

Before Chapter 15, you should additionally be able to:

- write and negate epsilon definitions;
- use compactness, completeness, and uniform convergence;
- prove the mean value and fundamental theorems in their stated settings;
- distinguish Riemann from Lebesgue integration;
- work in a metric space and apply the contraction principle; and
- interpret norms, almost-everywhere statements, and elementary linear maps.

Every advanced chapter begins by recalling its actual dependencies. If one item is
unfamiliar, follow the cited section rather than trying to memorize around the gap.

Before Chapter 25, use Chapters 13 and 19–24 as a local checklist. You should be
able to work with Banach and Hilbert spaces, distinguish strong from weak
convergence, integrate on product spaces, interpret weak derivatives, and read a
fixed-point or energy proof. If any one item is missing, the chapter prerequisite
line gives the shortest repair route.

Before Chapter 33, use Chapters 19–22 and 25–27 as a diagnostic route for
measure, topology, weak convergence, and operator language. If those chapters
are unfamiliar, Chapter 33 rebuilds local compactness and Chapter 34 rebuilds
convexity before either topic is used abstractly.

Before Chapter 39, use Chapters 10, 19, 22, 26–30, and 33–36 as a diagnostic
rather than as a wall of prerequisites. Chapter 39 repairs separability,
countable products, Borel structure, and conditional kernels locally. Chapter
40 then reuses weak convergence and convex duality; Chapter 41 reuses Hilbert
projections and conditional expectation; Chapter 42 reuses Chapter 39's path
spaces; Chapter 43 reuses the maximal and Fourier chapters; and Chapter 44
reuses Hilbert spectra and semigroup domains. Readers may enter any branch once
the chapter's own preparation check is comfortable.

Before Chapter 45, use Chapters 20–22 and 26–27 as the shortest route through
measure, Banach spaces, and bounded operators. Chapter 46 then uses compact
operators from Chapter 27 and PDE language from Chapter 32. Chapter 47 uses
weak-star compactness from Chapter 26, Radon representation from Chapter 33,
and convexity from Chapter 34. Each chapter restates the local concepts that
carry the argument.

### Route 4: a thematic advanced route

After the first-course synthesis, readers interested in pure functional analysis
may take Chapters 25–27, then 29. Readers interested in probability may take
Chapters 19–22 and then 28–30. Readers interested in differential equations may
take Chapters 23–24, then 27, 31, and 32. The routes rejoin because compactness,
duality, and energy estimates are shared proof engines.

For the specialist continuation, take Chapters 33 and 36 for measure and
probability, Chapters 34–35 and 38 for nonlinear and evolution equations, or
Chapter 37 after Chapters 19 and 23 for the geometric-measure route. The
chapters cross-reference one another where the routes rejoin.

For further specialist study, the probability route is
Chapters 39, 42, then 41; the transport route is Chapters 34, 36, 39, then 40;
the dynamics route is Chapters 22, 27, 30, then 41; and the harmonic/operator
route is Chapters 28–29, 43, then 44. Chapter 39 should precede Chapter 42, but
the transport, dynamics, and operator branches are otherwise deliberately
modular.

For the final functional-analysis route, read Chapters 26–27, 33–35, then
45–47. A shorter evolution route is Chapters 35, 45, and 46; a shorter convex
representation route is Chapters 26, 33–34, and 47.

After any route, the [guided proof workshops](g-proof-workshops.md)
provide long-form practice in theorem selection, counterexample construction,
limit passage, functional analysis, martingales, variational methods, and weak
PDE arguments. Extended solution clinics expose every hypothesis, while the
qualifier-style problems train readers to repair plausible but invalid proofs.

The [Python laboratories for analysis](h-python-laboratory.md) form a
parallel beginner route through epsilon witnesses, Cauchy tails, nested
intervals, uniform convergence, Darboux bounds, mollification, contraction
iteration, laws of large numbers, Brownian quadratic variation, algebraic
epsilon–delta witnesses, concentration counterexamples, Fourier sums,
$L^p$ norms, equicontinuity audits, constructive bisection, Bernstein
approximation, Cantor-function approximants, dominated-convergence diagnostics,
and weak convergence through distribution functions. All twenty blocks are
self-contained and automatically executed; every one of the thirteen paired
plots states the finite grid, sample, or precision that it depicts. Every
numbered chapter also includes at least one described visual checkpoint.
Suitable formulas in the numbered chapters are followed immediately by small,
standalone Python translations; the appendix remains a concentrated practice
route rather than a required detour.

## How to study proof-based mathematics

Reading a proof is active work. Before reading it, write the conclusion in your own
words and predict which hypothesis might create the needed object. After reading
it, close the book and give a three-sentence proof map: construction, decisive
estimate, conclusion. Then inspect one missing hypothesis and try to build a
counterexample.

Exercises are part of the exposition. The first questions establish fluency, the
middle questions practise proof design, and the final questions connect chapters.
Advanced chapters include concise answer support immediately after their exercise
sets. Earlier chapters use the hints-and-solutions appendix so that the main
argument can breathe.

Figures are evidence about a specified finite construction, not proofs of universal
claims. Every plotted figure has alternative text and a prose interpretation. The
script `figures.py` regenerates the data-derived images with a fixed design and
colour-blind-conscious palette.

## Notation and conventions

The natural numbers are $\mathbb N=\{1,2,3,\ldots\}$ unless a chapter explicitly
discusses the convention including zero. Intervals may be degenerate. Functions
are real-valued unless another codomain is stated. “Increasing” means
nondecreasing; strict increase is named explicitly. Equality in an $L^p$ space
means equality almost everywhere.

Inline mathematics uses portable delimiters and standard LaTeX commands. The HTML
edition renders mathematics as MathML and the PDF edition uses LuaLaTeX. The
notation appendix collects symbols, while the topic guide provides an index that
works in both formats.

<div class="callout callout-important">
<p class="callout-title">The governing habit</p>

When a theorem feels plausible, audit its hypotheses. When a definition feels
mysterious, write its quantifiers. When a calculation grows long, identify the one
estimate that must become small.

</div>
