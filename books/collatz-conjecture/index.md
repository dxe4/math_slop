# Preface

The Collatz conjecture begins with a rule anyone can execute and ends at the
boundary of known mathematics. Start with a positive whole number. If it is even,
divide it by two. If it is odd, multiply it by three and add one. Repeat.
Published computations certify declared finite ranges, but no finite range alone
establishes a statement about all positive integers.

This elective is an L2–L3 introduction to mathematical evidence around an
open problem. Bring school algebra, fractions and inequalities, and readiness
to read quantified claims and short proofs. The [starting toolkit](00i-collatz-bridge.md)
reviews iteration, parity, divisibility and finite computation. Later chapters
introduce local probability and density notation. Programming is optional;
understanding the mathematical specification does not require running code.

<div class="callout callout-warning">
<p class="callout-title">Research status and scope</p>

The classical Collatz conjecture remains **open in the dated research record used
for this edition**. This book does not present, imply, or endorse a proof.
Chapter 13 explains Tao's peer-reviewed almost-bounded-orbits theorem and why it
does not say that almost every orbit reaches 1 ([Tao 2022](d-bibliography.md#ref-tao2022)). Chapter 14 and Appendix
D report completed finite computations and algorithmic preprints with explicit
dates, ranges, and publication status rather than treating any one endpoint as
permanent.

</div>

## Start here: two honest routes

Choose a route by what you can explain, not by the last course title you remember.

**Complete route.** Read the [concise primer](00i-collatz-bridge.md),
then begin Chapter 1. Each later chapter supplies its own local on-ramp when it
needs an unfamiliar concept.

**Accelerated route.** Skim the primer's logic and iteration sections, then begin
Chapter 1. Return to a primer section only when its notation is unfamiliar.

The conceptual text never requires you to run software. Computational readers
can regenerate the plotnine figures and extend the experiments; every displayed
plot still describes a declared finite sample or an explicitly defined model.

## The concise on-ramp

The primer repairs the notation used in the first chapters. It is a bridge
for readers with school arithmetic and algebra, not a claim that research-level
probability, dynamics or verification has no prerequisites. The separate
[research toolkit](#/books/collatz-research-toolkit) names its L4 preparation.

## Four labels that never merge

A **theorem** follows from definitions and stated assumptions by a proof. A
**finite verification** establishes a bounded claim only when its specification,
coverage, arithmetic, code, and run are adequately audited. A **heuristic** uses
a model or observed pattern to guide expectation; it is not automatically a fact
about the deterministic map. An **open conjecture** is not known proved or
disproved.

These labels describe evidence, not prestige. A careful finite theorem is better
mathematics than a universal claim whose quantifiers are unsupported.

## A first trace and its convention

Under the **unaccelerated map**, the orbit starting at 6 is

$$
6\to3\to10\to5\to16\to8\to4\to2\to1.
$$

There are nine displayed states and eight transitions before the first arrival
at 1. Other conventions compress some divisions by two, changing visible lists
and step counts. Chapter 1 defines each convention before comparing results.

Even this tiny example illustrates the book's method:

1. declare the domain and rule;
2. distinguish states from transitions;
3. calculate exactly;
4. state the finite scope; and
5. resist converting an example into a universal conclusion.

## The elective and its companions

Parts I–III develop map conventions, orbit measurements, congruences, parity
formulas, sieves, inverse graphs, finite data, cycles, divergence, random models
and density. Part IV separates classical partial results, Tao's theorem,
completed finite verifications and laboratory specifications. Part V examines
generalised maps, proof attempts and the resulting limits of evidence.

The appendices supply algorithms, a glossary, elective solutions, primary-source
notes and claim ledgers. The [research toolkit](#/books/collatz-research-toolkit)
continues with eighteen retained research chapters and the extended topic guide,
studios, laboratories and solution material. Generic methods also have shorter
companion article drafts. Original chapter and appendix sources remain at their
previous paths so their mathematical content, source references and anchors
remain available.

Code is a second notation for a specified finite calculation. A bound, exact
arithmetic convention and stopping rule belong to the specification. The current
source work does not assert a new execution or independent audit. A universal
quantifier, an asymptotic theorem or unproved termination statement is not
replaced by a finite program or a successful sample run.

## Reader's compact claim audit

Whenever you meet a Collatz statement, ask:

1. Which map, domain, and step convention are in force?
2. What are the quantifiers, and in what order?
3. Is the evidence a proof, a bounded computation, a model, or an open claim?
4. Does “almost all” name natural density, logarithmic density, probability, or
   something else?
5. If code is involved, how are overflow, interval coverage, duplicated work,
   faults, and provenance checked?
6. If probability is involved, which independence or transfer statement is
   actually proved?
7. If induction is invoked, does the orbit reach a genuinely smaller value whose
   case is already established?
8. Could the argument rule out cycles yet leave an aperiodic nonconvergent orbit?

Those questions are not barriers to curiosity. They are the tools that let
curiosity survive contact with an open problem.
