# Welcome

The core of this book is **L3–L4**, with an **L5 continuation**. Before beginning,
study Chapters 1–9 of [Elementary Number Theory](#/books/number-theory-proof-reference),
[Real Analysis](#/books/proof-safe-real-analysis) through Cauchy sequences,
limits and completeness, and Chapters 1–13 of
[Groups, Rings, and Fields](#/books/algebra-patterns-structure).
The [starting toolkit](00i-p-adic-bridge.md) refreshes notation and
basic methods. It does not replace this preparation.

The core route is the toolkit, Chapters **1–15 and 19–21**. Chapter 20 additionally
requires finite Galois theory: normal and separable extensions, automorphism
groups and the subgroup–subfield correspondence, developed in the
[finite Galois correspondence](#/books/galois-theory/fundamental-theorem-galois-theory)
in Galois Theory Chapters 1–5. The [earlier algebra Galois reading](#/books/algebra-patterns-structure/galois-groups-correspondence)
remains available under its original identity.

Chapters **16–18 and 22–45 are L5**. Their opening paragraphs name additional
preparation. Commutative algebra, algebraic geometry, Galois cohomology and
representation theory are substantial prerequisites where used, rather than
consequences of reading a short vocabulary reminder. In particular, the
perfectoid and étale-cohomology chapters are graduate introductions.

The ordinary absolute value answers a geometric question: how far is a number
from zero on the real line? A *p*-adic absolute value answers an arithmetic one:
how strongly is a rational number divisible by a chosen prime $p$? Replacing the
ruler changes what it means to be close. Powers $p,p^2,p^3,\ldots$ approach
zero; every triangle has two equally long largest sides; digit expansions extend
toward higher powers; and a root known modulo $p$ can sometimes be lifted to an
exact root in a complete field.

The construction is the same kind of mathematical response that produces the
real numbers. Start with $\mathbb Q$, choose a distance, identify the Cauchy
sequences, and adjoin their missing limits. The choice of distance determines
the completed world.

## Choose a reading route

### Core route with preparation

Read the [concise primer](00i-p-adic-bridge.md), then begin Chapter 1.
Use the preparation paragraph in each chapter to check the relevant prior
study. Complete the linked prerequisites before applying an unfamiliar theorem.

### Fast-start route

If the arithmetic, algebra and analysis prerequisites above are familiar, skim
the primer and continue through Chapters 1–15, then 19–21. Definitions are
recalled where useful; proof fluency and completeness arguments are assumed.

### Local-analysis route

Read the primer's proof and computation sections as needed; then Chapters 1–11, 16–18, and 22–23. This route
emphasizes ultrametric geometry, convergence, Banach spaces, Mahler expansions,
analytic groups, harmonic analysis, and analytic spaces.

### Arithmetic route

After the concise primer, read Chapters 1–6, 9–12, 14, and 19–24. This route
emphasizes Hensel lifting, square classes, extensions, Newton polygons,
ramification, algebraic closures, reduction of elliptic curves, and *p*-adic
periods.

### Computational route

Read the primer, Chapters 1, 3, 5–6, 9, 13, and 15, then use Chapters 17 and
19 for initial capstone projects. Continue through Chapters 25, 29–31, 39, and
Appendix F for Witt arithmetic, differential equations, modular data, tower
growth, certified local-field algorithms, and formal certificate design. Every computational representation in
the book keeps valuation, residue, and precision explicit; no floating-point
approximation is accepted as a divisibility certificate.

### Modern arithmetic route

Read the primer and Chapters 1–12 first. Then follow Chapters 19–20,
24–28, 31, and 33. This route moves from extensions and ramification through
Witt vectors, profinite Galois theory, reciprocity, formal groups, Iwasawa
modules, and period comparisons. Chapter 26 supplies the topology needed before
local class field theory; Chapter 25 supplies Frobenius coordinates needed
before perfectoid and Hodge constructions.

### Analytic-geometry route

After Chapters 1–12, read Chapters 16–18, 21–23, 29–30, and 32–33. The
sequence passes from Banach and analytic groups to $\mathbb C_p$, rigid
spaces, differential equations, Coleman integration, perfectoid spaces, and
comparison theory. Algebraic-geometry destinations are labeled when their full
proof would require schemes or cohomology beyond this volume.

### Uniformization and descent route

After Chapters 1–12 and 19–21, continue through Chapters 34–36. This route
builds the Tate curve from convergent products, introduces local Galois
cohomology from cocycles, and develops Selmer conditions as an exact
local-to-global filtering problem. Each chapter recalls its notation; the L5 route still requires prior study
of algebraic curves, continuous group actions and cohomology.

### Representations and families route

Read Chapters 25–28 and 33, then Chapters 35, 37, and 38. This route connects
Witt and period rings to local representations, $(\varphi,\Gamma)$-modules,
deformation functors, tangent spaces, and universal parameter rings. Chapter 39
provides a computational companion in which local-field objects carry explicit
precision and verification certificates.

### Buildings and automorphic route

Read Chapters 3, 11–12, 22–23, and 26–27, then Chapters 40–41. Chapter 40
turns rank-two lattices into the Bruhat–Tits tree and proves its exact local
geometry. Chapter 41 uses that tree to build spherical Hecke operators, smooth
principal series, newvector language, and a carefully scoped route toward local
Langlands. No prior representation theory or linear algebra over a valuation
ring is assumed; both are repaired where they first enter.

### Cohomology, heights, and definability route

After Chapters 9, 11–12, 23–24, and 35, read Chapters 42–45. The route starts
with finite etale algebras and the Kummer sequence, passes through polynomial
local zeta integrals and $p$-adic height symbols, and ends with definable sets,
cell decomposition, and exact volume-generating series. Chapters 43 and 45 share
one congruence-count ledger so that rationality claims remain reproducible rather
than pictorial.

## Notation that recurs

Throughout, $p$ denotes a prime unless stated otherwise. For nonzero rational
$x$, the integer $v_p(x)$ is the net exponent of $p$ in $x$, and
$v_p(0)=+\infty$. Our normalization is

$$
|x|_p=p^{-v_p(x)}.
$$

Thus $|p|_p=p^{-1}$, not $p$. We write $\mathbb Z_p$ for the *p*-adic integers,
$\mathbb Q_p$ for their fraction field, and

$$
x\equiv y\pmod {p^N}
$$

to mean that $x-y$ is divisible by $p^N$ in the appropriate valuation ring.
The concise primer and Chapter 1 introduce these ideas slowly; this paragraph is a
reference, not an entrance test.

## How explanations are organized

Each numbered chapter begins with goals and ends with a summary and exercises.
Definitions are followed by examples; theorem hypotheses are stated explicitly;
proofs are supplied when the mechanism is accessible, and a labeled proof idea
marks results whose full proof needs machinery beyond the current stage.
Pitfall callouts isolate common real-intuition traps. Advanced Chapters 16–45
include concise exercise support so that a reader can check the key idea without
turning the text into a complete solution manual.

The [guided problem studios](appendix-g-problem-studios.md) supply a
second pass through the subject as investigations. They require precision
ledgers, theorem-status cards, reproducible certificates, and complete solution
clinics ranging from elementary Hensel lifting to ramification, Fourier
normalizations, reciprocity, perfectoid tilting, and period comparisons.

The [Python laboratories for $p$-adic computation](appendix-h-python-laboratory.md)
provide twenty executable examples using exact integers and rational numbers:
valuations, distances, digits, carries, inverse and Hensel lifting, exhaustive
root counts, ultrametric matrices, Mahler differences, factorial valuations,
linear congruences, series-precision ledgers, Newton polygons, geometric-series
certificates, exponential-term valuations, Teichmüller lifting, Haar ball
measures, and finite residue dynamics. Thirteen paired Plotnine figures accompany
the route. Every result carries an explicit prime, finite precision, and
congruence certificate. Every numbered chapter also includes at least one
described visual checkpoint. Suitable finite formulas are followed by
standalone Python translations inside the numbered chapters, while Appendix H
remains a deeper exact-computation route.

Computable formulas are translated where the translation adds information:
valuations, finite residue counts, lifts, recurrences, transforms, norms,
traces, and precision laws all receive executable examples. Closely related
displayed identities may share one routine instead of repeating cosmetic code.
An existence theorem, universal property, infinite Galois group, cohomological
duality statement, or representation-theoretic correspondence is not replaced
by a misleading simulation. In those cases the chapter computes a complete
finite model or a necessary certificate and labels exactly where the theorem
begins. Code is evidence for its declared finite inputs, never proof by sampled
output.

All plotted figures are generated from deterministic data. A *p*-adic space
cannot be faithfully embedded in a Euclidean page, so captions state what each
coordinate encodes: a residue, valuation, precision level, root count, or tree
position. Every figure has an explicit text alternative and a prose
interpretation.

## A first surprise

Once geometric series have been introduced, consider

$$
s_N=1+p+p^2+\cdots+p^N.
$$

Ordinarily these sums grow. In the *p*-adic metric, however,

$$
|s_{N+1}-s_N|_p=|p^{N+1}|_p=p^{-(N+1)}\longrightarrow0.
$$

Indeed $s_N$ converges in $\mathbb Q_p$ to $(1-p)^{-1}$. At $p=2$ this gives
$1+2+4+8+\cdots=-1$. There is no contradiction: an infinite sum is a claim
about a distance, and a different distance can produce a different limit.

<div class="callout callout-tip">
<p class="callout-title">Standing computational principle</p>

A finite *p*-adic approximation is a congruence class with a precision
certificate. Store the prime, valuation, residue, and known power $p^N$.
Precision belongs to the object; arithmetic must report any loss.

</div>

## What completion of the book enables

By the end you can construct $\mathbb Q_p$, compute digit expansions, prove
ultrametric convergence results, lift roots with Hensel and Newton methods,
classify elementary square classes, integrate simple functions with Haar
measure, analyze finite dynamical shadows, and use local data in global
arithmetic. The later chapters then develop functional analysis,
Mahler interpolation, Newton polygons, ramification, $\mathbb C_p$, local
Fourier transforms, rigid and Berkovich viewpoints, and the role of local fields
in arithmetic geometry. The modern continuation develops Witt vectors,
local reciprocity, Lubin–Tate groups, arithmetic differential equations,
Coleman integration, Iwasawa theory, perfectoid tilting, and the hierarchy of
period rings, then adds Tate uniformization, local Galois cohomology, Selmer
descent, $(\varphi,\Gamma)$-modules, deformation rings, and certified local-field
computation. Part VIII then adds Bruhat–Tits buildings, smooth representations and
Hecke algebras, finite etale cohomology, Igusa integration, $p$-adic height
pairings, and definable $p$-adic geometry. Just as important, you will know where
each advanced claim begins, which earlier ideas support it, and which statements
remain research frontiers.
