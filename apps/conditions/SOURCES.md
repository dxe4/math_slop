# Mathematical sources and design

Sources inspected 20 October 2026. The examples, proofs, exercises and diagrams
are original constructions for this workshop. They reuse elementary real
algebra and the positive-argument logarithm laws; they do not reproduce an
external text's exercise sequence or figures.

## Functions and domains

[Richard Hammack, Book of Proof, Section 12.1, especially printed page 227](https://richardhammack.github.io/BookOfProof/Main.pdf)
defines function equality through graphs and explains why equal functions have
the same domain. Our comparisons keep the codomain fixed at ℝ, so differences
in domain cannot be hidden by a convention about codomains.

For the cancellation family, factorization on x≠a proves fₐ=gₐ restricted to
ℝ∖{a}. The linear expression is continuous everywhere, giving the limit 2a at
the omitted point. A new value k defines an extension; it is continuous at a
exactly when k=2a. These are elementary derivations, not conclusions sampled
from a drawing.

## Computer algebra and a recorded exclusion

[Wolfram FunctionDomain documentation, Possible Issues](https://reference.wolfram.com/language/ref/FunctionDomain.html)
explains that ordinary expression evaluation can cancel singularities before
the domain function receives its argument. This motivates carrying an original
exclusion alongside a transformed expression. The workshop is not a Wolfram
runtime or a general symbolic solver.

Its rational models evaluate three authored families. They preserve exact
integer numerators and denominators, and domain decisions use cross products
and signs. A finite decimal probe is rational; using it does not change the
real domain of the mathematical function under study.

## Roots, logarithms and reversibility

[Wolfram PowerExpand documentation, Details and Options](https://reference.wolfram.com/language/ref/PowerExpand.html)
describes branch-sensitive transformations and the role of explicit
assumptions. The workshop investigates analogous real-variable questions with
written proofs, rather than treating a simplification command as a proof.

For √((x−a)²)=b, nonnegativity of the principal square root gives the exact
condition b≥0 required to reverse squaring. When that condition holds, equality
of squares recovers the original equality. For real logarithms, positivity of
the argument gives the domains x≠a and x>a directly. Applying the square law to
the positive number |x−a| yields the repaired identity on its complete domain.

## Teaching route and limits

The activities follow the existing Euler program's prediction, explanation,
changed problem and delayed reconstruction approach. This is a design choice
informed by the [pedagogy review](../lectures/research/pedagogy-and-homotopy.md),
not a measured learning result. A practical route uses each initial prediction
and experiment, the analytic argument, and one changed task before proceeding.
Tasks 4 and 6 change the structure of the question, rather than merely its
parameters. They test whether the learner tracks conditions after the scaffold
changes.

Mathematical and software reviews do not establish instructional effectiveness.
Current model/content checks test the exact implementation separately from
browser observations. Neither schematic probes nor software checks establish
human accessibility conformance or measured learner effectiveness.

An earlier independent review reported 35,332 binary64 rounding cases and 4,861
activity cases. Those were transient, read-only reviewer runs reported in the
agent transcript, not a retained executable test script. The repeatable model
suite is `tests/model.test.cjs`; numerical probes do not replace the real-parameter
classifications above. The [current rational model](model.js) and repeatable model/content tests
provide implementation checks separately from those historical observations.

