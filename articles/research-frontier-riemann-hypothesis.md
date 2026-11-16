
# The Riemann hypothesis: zeros, primes, and finite evidence

**Before reading.** Read [Dirichlet Series, Euler Products, and Convergence Contracts](../books/number-theory-proof-reference/dirichlet-series-euler-products.md), [Holomorphic Functions and the Cauchy–Riemann Equations](../books/complex-analysis/holomorphic-cauchy-riemann.md) and [Finite-Dimensional Spectral Theorems](../books/linear-algebra-structure-proofs/finite-dimensional-spectral-theorems.md). These are preparation for the ideas used below.

> **Status boundary, checked 2026-08-31.** The Riemann hypothesis remains unsolved. Verified zeros, equivalent criteria, and consequences conditional on the hypothesis are not a proof of the universal statement.

## Prerequisite route

The intended route is `complex-analysis` → `analytic-number-theory`, with
`spectral-theory` useful only for the analogy discussion. You should know
convergent series and products, complex real and imaginary parts, analytic
continuation as a theorem rather than a termwise operation, and unique
factorization. The finite product below is an on-ramp. It does not replace the
complex analysis needed to reason inside the critical strip.

## From a series to a function on the plane

For a complex number \(s\) with \(\operatorname{Re}(s)>1\),

\[
\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}.
\]

Unique factorization turns this into Euler's product

\[
\zeta(s)=\prod_p(1-p^{-s})^{-1},
\]

where the product is over primes. Expanding each geometric factor chooses \(1,p^{-s},p^{-2s},\ldots\); multiplying the choices produces each positive integer once. This is the first bridge from a complex function to prime distribution.

The series itself does not converge everywhere. Analytic continuation extends \(\zeta\) to a meromorphic function on the complex plane with a simple pole at \(s=1\). A functional equation relates \(s\) and \(1-s\). The zeros at negative even integers are called **trivial zeros**. The remaining zeros lie in the critical strip

\[
0<\operatorname{Re}(s)<1.
\]

The Riemann hypothesis says:

\[
\zeta(\rho)=0\text{ and }\rho\text{ nontrivial}
\quad\Longrightarrow\quad
\operatorname{Re}(\rho)=\frac12.
\]

It is a statement about **every** nontrivial zero, not merely many, almost all in an informal sense, or all below a computed height.

## A worked finite Euler-product experiment

**Worked example.**

At \(s=2\), take only primes \(2,3,5\):

\[
(1-2^{-2})^{-1}(1-3^{-2})^{-1}(1-5^{-2})^{-1}
=\frac43\cdot\frac98\cdot\frac{25}{24}
=\frac{25}{16}=1.5625.
\]

The full value is \(\zeta(2)=\pi^2/6\approx1.644934\). Adding prime factors improves this positive-real approximation. This experiment displays the prime encoding where absolute convergence is safe. It says nothing directly about zeros in the critical strip, where analytic continuation and oscillation are essential.

## Why zeros control prime-counting error

The prime number theorem gives the leading scale of the number \(\pi(x)\) of primes at most \(x\). Explicit formulas express refined prime-counting quantities as a main term plus contributions involving zeta zeros. A zero \(\rho=\beta+i\gamma\) contributes oscillation whose size is linked to \(x^\beta\). Constraining every \(\beta\) to \(1/2\) therefore constrains deviations from the average prime distribution.

This paragraph is a mechanism sketch, not a substitute for a precise explicit formula. Different prime-counting functions have different correction terms and smoothing. A consequence quoted “under RH” remains conditional until the hypothesis is proved, even if the derivation from RH is rigorous.

## Symmetry does not force the critical line

The functional equation and complex conjugation create symmetries among nontrivial zeros. Roughly, a zero off the critical line would be accompanied by reflected zeros. Symmetry around a line does not imply that every point lies on the line: a pair at equal distances on opposite sides is also symmetric. Any proof needs more than the observation that \(1/2\) is the symmetry axis.

## What rigorous computation establishes

Platt and Trudgian used interval arithmetic to verify that all zeros \(\beta+i\gamma\) with \(0<\gamma\le 3\cdot10^{12}\) lie on the critical line; their theorem also states that those zeros are simple. The interval arithmetic and zero-counting argument make this a rigorous finite theorem, not merely a floating-point plot.

The universal quantifier remains. A counterexample, if one exists, could lie above every completed finite search. Computation can test implementations, prove a finite range, calibrate conjectures, and support unconditional results whose hypotheses require a verified range. It cannot turn “up to \(T\)” into “for all \(T\).”

## Equivalent statements and hidden work

An equivalent criterion can translate RH into positivity, approximation, growth, or spectral language. Equivalence means both implications have been proved. It does not make the criterion easier, and numerical agreement with one side is still finite evidence.

A responsible use of an equivalent statement records:

- exact quantifiers and normalizations;
- whether the equivalence is unconditional;
- function spaces and limiting order;
- whether a bound contains \(\varepsilon\), logarithmic, or smoothing terms;
- which direction is being invoked.

Spectral analogies are especially attractive: zeros resemble eigenvalues in several ways. An analogy becomes a proof only after an appropriate operator is defined, its analytic properties are established, and its spectrum is connected rigorously to all relevant zeros. Producing a numerical matrix whose eigenvalues match an initial list does not supply that chain.

## Known, open, and not equivalent

| Kind | Scoped statement |
| --- | --- |
| Known | The zeta function has meromorphic continuation and a functional equation; nontrivial zeros lie in the critical strip; infinitely many zeros lie on the critical line; and rigorous interval computation verifies the critical-line statement, with simplicity, through height \(3\cdot10^{12}\). |
| Open | Prove that every nontrivial zero of \(\zeta\) has real part \(1/2\), with no height cutoff. |
| Not equivalent | Symmetry about the critical line, a very large finite verification, numerical agreement with a consequence, an unproved spectral analogy, or one direction of a conditional implication is not RH. |

A resolution must establish the unbounded universal statement, either directly
or through a genuinely proved equivalent criterion with every hypothesis and
quantifier discharged. Locating many additional zeros or proving a stronger
finite-height theorem remains finite evidence.

## Common false finishes

**Many zeros are on the line.** The target is every nontrivial zero.

**A formula was tested to enormous height.** Enormous is still finite.

**The zeros are symmetric.** Off-line symmetric tuples are possible.

**The Euler product has no zero factors.** The product identity in its simple form is valid only where it converges absolutely; it cannot be applied naively throughout the critical strip.

**A consequence looks true numerically.** Conditional consequences and equivalent criteria retain their quantifiers and error terms.

## Checkpoints with solutions

<a id="deep-dive-research-frontier-riemann-hypothesis-ex-1"></a>

**Exercise 1.**

**1. Does the finite product above underestimate \(\zeta(2)\)?**
<details>
<summary>Hint 1</summary>

At two, each omitted Euler factor is greater than one.
</details>
<details>
<summary>Hint 2</summary>

Compare a finite positive product with the absolutely convergent product after more primes are included.
</details>
<details>
<summary>Solution</summary>

  
Yes. Every omitted factor \((1-p^{-2})^{-1}\) is greater than one, and the product converges absolutely at \(2\). This monotonic reasoning is special to the positive-real, absolutely convergent setting.

</details>

<a id="deep-dive-research-frontier-riemann-hypothesis-ex-2"></a>

**Exercise 2.**

**2. A computation verifies the first \(N\) zeros. Which logical form is proved?**
<details>
<summary>Hint 1</summary>

A finite computation can quantify only over zeros in a rigorously bounded region.
</details>
<details>
<summary>Hint 2</summary>

State that bounded quantifier explicitly, then compare it with RH’s claim over all nontrivial zeros.
</details>
<details>
<summary>Solution</summary>

  
“For every nontrivial zero in the rigorously enclosed finite region, the real part is \(1/2\).” RH has no finite-region qualifier.

</details>

### Further practice

**3. A paper proves theorem X assuming RH. Does evidence for X become evidence that RH is true?**  
Not without a proved converse. An implication \(RH\Rightarrow X\) permits X even when RH is false. If X is genuinely equivalent, proving X with all hypotheses would prove RH; observing examples of X would not.

## Sources and current-status boundary

- [Clay Mathematics Institute current RH page](https://www.claymath.org/millennium/Riemann-Hypothesis/) — states the conjecture and links the official description; accessed 2026-08-31.
- [Bombieri, official problem description](https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf) — defines analytic continuation, functional equation, trivial and nontrivial zeros, and the critical-line statement; accessed 2026-08-31.
- [Clay 2025–26 Millennium lecture-series page](https://www.claymath.org/events/millennium-prize-problems-lecture-series/) — current institutional statement that only the Poincaré problem among the seven has been resolved; accessed 2026-08-31.
- [Platt and Trudgian, DOI 10.1112/blms.12460](https://doi.org/10.1112/blms.12460) — primary rigorous interval verification through height \(3\cdot10^{12}\), including simplicity in that range; accessed 2026-08-31.

The finite verification is reported with its exact height and cannot be read as the universal hypothesis.
