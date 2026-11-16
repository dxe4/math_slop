# Collatz Research Toolkit

This L4 companion studies methods for analysing iteration, symbolic coding,
probability models and proof-producing finite computation. Bring undergraduate
proof fluency, congruence arithmetic, elementary real analysis and probability,
finite graphs and algorithms. Measure-theoretic probability, dynamical systems
and formal verification are introduced locally, but this is a research-methods
text rather than a zero-prerequisite introduction.

Read the [Collatz elective](#/books/collatz-conjecture) first if map
conventions, stopping times, affine parity formulas or density distinctions are
unfamiliar. The toolkit assumes those definitions and keeps the distinction
between a proved identity, a finite certificate, a stochastic model and an open
claim throughout.

<div class="callout callout-warning">
<p class="callout-title">Research status and scope</p>

The classical Collatz conjecture remains **open in the dated research record used
for this edition**. This book does not present, imply, or endorse a proof.
Chapter 13 explains Tao's peer-reviewed almost-bounded-orbits theorem and why it
does not say that almost every orbit reaches 1 (Tao 2022). Chapter 14 and Appendix
D report completed finite computations and algorithmic preprints with explicit
dates, ranges, and publication status rather than treating any one endpoint as
permanent.

</div>

## Source provenance and chapter references

The eighteen main chapters are retained from the earlier combined
`collatz_conjecture` manuscript: source chapters 19–23, 25–34 and 37–39.
No new mathematical result is claimed by this reorganisation. Every original
section anchor is retained. References in the inherited prose to numbered
chapters use the original combined source numbering; the contents provides the
current reading order. The original source files remain at their previous paths.

The 2-adic, large-deviation, optimisation, combinatorial, information, martingale,
coupling, Presburger and interval methods have companion article treatments.
Their longer original sources and solutions remain available through the legacy
paths. A short article does not replace the hypotheses or derivations of its
longer source.

## Three routes through the toolkit

The first part connects discrete dynamics, explicit probability models, residue
automata, certificate engineering, cycle constraints, transfer operators and a
research practicum. The second studies accelerated renewal, symbolic measures,
graph spectra, statistical inference, distributed certificates, computability,
affine comparisons and inverse branching. The third develops formal proof,
verified-dataset specifications and neighbouring maps.

Use the [topic guide](e-topic-guide.md) to locate a method, the
[research studios](g-research-studios.md) for extended worked projects,
and the [research solutions](c-research-solutions.md) after attempting
the tasks. The [Python laboratory](h-python-laboratory.md) preserves
source examples and their stated finite scope. This source reorganisation does
not report a new execution, replicated computation or completed independent
review of those examples.

## The boundary every method must respect

A finite-state theorem needs a finite state space or a proved sound abstraction.
A probability theorem needs a probability space and its independence or
conditional assumptions. A certificate needs a precise predicate and a coverage
argument. None automatically yields a theorem about every positive integer's
unbounded Collatz orbit. When a method changes the state space, map, measure or
clock, state the transfer claim separately and identify whether it is proved.
