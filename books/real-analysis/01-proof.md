# Logic, sets, functions, and proof {#sec-proof}

Analysis is a language of controlled approximation. Before discussing limits, we
need to know exactly what a statement claims and what would refute it. This chapter
builds a compact working language for the rest of the book.

## Statements, quantifiers, and negation

A **statement** has a definite truth value. An **open sentence**, such as $x^2<4$,
becomes a statement only after $x$ is fixed or quantified. The universal
quantifier $\forall$ means “for every”; the existential quantifier $\exists$ means
“there is at least one.” Order matters. The assertion

$$
\forall x\in\mathbb R\;\exists y\in\mathbb R\quad y>x
$$

is true, while interchanging the quantifiers claims a largest real number and is
false.

Negation reverses quantifiers and negates the final property:

$$
\neg(\forall x\,\exists y\,P(x,y))
\quad\Longleftrightarrow\quad
\exists x\,\forall y\,\neg P(x,y).
$$

This mechanical rule will prevent many errors. For example, $a_n\to L$ means

$$
\forall \varepsilon>0\;\exists N\in\mathbb N\;\forall n\ge N,
\qquad |a_n-L|<\varepsilon.
$$

Its negation is not merely “$a_n$ is sometimes far from $L$.” It says there is one
fixed tolerance $\varepsilon_0>0$ for which, after every proposed cutoff $N$, some
later term violates the tolerance.

An implication $P\Rightarrow Q$ fails only when $P$ is true and $Q$ is false. Its
**contrapositive**, $\neg Q\Rightarrow\neg P$, is logically equivalent. Its
converse, $Q\Rightarrow P$, need not be. A biconditional $P\Leftrightarrow Q$
requires both directions.

## Sets, images, and inverse images

For sets $A$ and $B$, write $A\subseteq B$ when every member of $A$ belongs to
$B$. Union, intersection, and difference are denoted by $A\cup B$, $A\cap B$, and
$A\setminus B$. De Morgan's laws expose the same quantifier reversal as logical
negation:

$$
(A\cup B)^c=A^c\cap B^c,
\qquad
(A\cap B)^c=A^c\cup B^c.
$$

If $f:X\to Y$ and $A\subseteq X$, its image is
$f(A)=\{f(x):x\in A\}$. If $B\subseteq Y$, its inverse image is
$f^{-1}(B)=\{x\in X:f(x)\in B\}$. The notation $f^{-1}(B)$ does not require an
inverse function. Inverse images preserve all unions, all intersections, and
complements. Images preserve unions but may not preserve intersections because
different inputs can share an output.

**Worked example.** Let $f(x)=x^2$. Then
$f^{-1}([1,4])=[-2,-1]\cup[1,2]$, while $f([-2,1])=[0,4]$. For
$A=[-2,-1]$ and $C=[1,2]$, the sets are disjoint but
$f(A)\cap f(C)=[1,4]$.

A set is **countable** if it is finite or can be listed as a sequence. The integers
are countable, and so are the rationals: arrange positive fractions in a grid and
walk through diagonals, skipping repeats. The real numbers are not countable;
Cantor's diagonal argument changes the $n$th digit of the $n$th listed number to
construct an omitted number. We need only the distinction now; later it will
separate dense from large.

## Functions and structure

A function is **injective** if equal outputs force equal inputs, **surjective** if
every codomain point is attained, and **bijective** if both hold. A left inverse
forces injectivity; a right inverse forces surjectivity. A bijection has a genuine
two-sided inverse.

An equivalence relation is reflexive, symmetric, and transitive. It partitions a
set into equivalence classes. This becomes important in measure theory: functions
that agree except on a null set are treated as representing the same element of an
$L^p$ space.

## Proof architectures

A **direct proof** starts from the hypotheses and derives the conclusion. A
**contrapositive proof** assumes the conclusion fails and shows a hypothesis must
fail. A **proof by contradiction** assumes the entire claim is false and derives an
impossibility. Mathematical induction proves a base case and then
$P(n)\Rightarrow P(n+1)$.

**Proposition 1.1.** If $m^2$ is even for an integer $m$, then $m$ is even.

**Proof.** We prove the contrapositive. If $m$ is odd, then $m=2k+1$ for an integer
$k$, so $m^2=2(2k^2+2k)+1$ is odd. Therefore $m^2$ even implies $m$ even. $\square$

An existence proof may be constructive, displaying an object, or indirect. A
uniqueness proof assumes two candidates and proves they coincide. Keeping existence
and uniqueness separate often reveals the structure. To prove that a linear
equation has exactly one solution, for example, first construct the solution and
then show any solution equals it.

## Inequalities and estimation

The absolute value satisfies the triangle inequality

$$
|x+y|\le |x|+|y|
$$

and the reverse triangle inequality

$$
\bigl||x|-|y|\bigr|\le |x-y|.
$$

The second follows by applying the first to $x=(x-y)+y$ and then exchanging $x$
and $y$. These inequalities convert algebra into distance control.

Estimates need not be sharp; they need to accomplish the quantifier goal. To make
$|x^2-4|<\varepsilon$ when $x$ is near $2$, factor
$|x^2-4|=|x-2||x+2|$. If we first require $|x-2|<1$, then $1<x<3$ and
$|x+2|<5$. It is enough to impose
$|x-2|<\min\{1,\varepsilon/5\}$. The preliminary bound is not cosmetic: it turns a
variable factor into a fixed constant.

## Counterexamples and hypothesis audits

To disprove a universal claim, one counterexample suffices. Productive designs
include:

- a missing endpoint, such as $(0,1)$, when compactness is absent;
- oscillation, such as $(-1)^n$, when convergence is claimed;
- a moving spike, when pointwise control is confused with uniform control;
- an unbounded object, when boundedness was silently assumed; and
- a discrete metric, when Euclidean geometric intuition is unreliable.

Counterexamples should target the exact missing hypothesis. The false claim “every
bounded sequence converges” is efficiently refuted by $(-1)^n$: boundedness holds,
but oscillation prevents eventual closeness to any one number. The corrected claim
will say that every bounded real sequence has a convergent **subsequence**.

<div class="callout callout-tip">
<p class="callout-title">Proof checklist</p>

Write the hypotheses in usable form. Expand the conclusion into quantifiers.
Identify the quantity to estimate. State where each assumption enters. Check
endpoints and zero denominators. Finish by matching the exact requested claim.

</div>

## Visual checkpoint: a truth table is a complete finite proof object

<figure id="fig-ra-proof-truth-table">
<img src="figures/foundation-logic-table.png" alt="Truth table listing all Boolean cases for an implication, its converse, contrapositive, and negation.">

<figcaption>

Figure 1.1: A complete truth table distinguishes implication from its converse.

</figcaption>
</figure>

The rows in [Figure 1.1](#fig-ra-proof-truth-table) exhaust a finite logical universe, so the
table can prove a propositional equivalence. Later analysis concerns infinite
sets and quantifiers, where sampling cases is no longer exhaustive; the same
discipline survives, but the proof object must change.

<!-- inline-formula-code:start -->
## Formula and finite computation

A useful formula in this chapter is

$$
P\Rightarrow Q\equiv\neg P\lor Q
$$

A truth table checks the equivalence on every Boolean input. The following standalone Python block expresses that finite rule with its inputs and stopping conditions visible.

```python
rows = []
for premise in (False, True):
    for conclusion in (False, True):
        implication = (not premise) or conclusion
        rows.append((premise, conclusion, implication, (not premise) or conclusion))
print(rows)
```

**What the computation establishes.** The output certifies only the declared finite case. The theorem, if one is claimed, still requires the argument developed in the chapter.
<!-- inline-formula-code:end -->

## Chapter synthesis

Analysis depends on disciplined quantifiers. Inverse images interact cleanly with
set operations, contraposition often simplifies universal claims, and the triangle
inequality is the basic engine for approximation. Counterexamples are not merely
objections; they are tools for discovering correct hypotheses.

## Exercises

<div class="exercise" id="real_analysis-01-proof-ex-1">
<p class="exercise-title"><strong>Exercise 1</strong></p>

Negate: “For every $x>0$ there is an integer $n$ such that $0<1/n<x$.”

</div>

<div class="exercise" id="real_analysis-01-proof-ex-2">
<p class="exercise-title"><strong>Exercise 2</strong></p>

Prove both De Morgan laws for an indexed family $(A_i)_{i\in I}$.

</div>

<div class="exercise" id="real_analysis-01-proof-ex-3">
<p class="exercise-title"><strong>Exercise 3</strong></p>

Give functions $f,A,B$ for which $f(A\cap B)\ne f(A)\cap f(B)$.

</div>

<div class="exercise" id="real_analysis-01-proof-ex-4">
<p class="exercise-title"><strong>Exercise 4</strong></p>

Prove the reverse triangle inequality.

</div>

<div class="exercise" id="real_analysis-01-proof-ex-5">
<p class="exercise-title"><strong>Exercise 5</strong></p>

Prove by induction that $1+3+\cdots +(2n-1)=n^2$.

</div>

<div class="exercise" id="real_analysis-01-proof-ex-6">
<p class="exercise-title"><strong>Exercise 6</strong></p>

Show that a function with a left inverse is injective.

</div>

<div class="exercise" id="real_analysis-01-proof-ex-7">
<p class="exercise-title"><strong>Exercise 7</strong></p>

Find the flaw: “If $x^2=y^2$, divide by $x-y$ to obtain $x+y=0$.”

</div>

<div class="exercise" id="real_analysis-01-proof-ex-8">
<p class="exercise-title"><strong>Exercise 8</strong></p>

Construct a bounded sequence with exactly three subsequential limits.

<details class="hint"><summary>Hint 1</summary>

Interleave three constant subsequences so that each residue class modulo
three has a different value.

</details>

</div>

<div class="exercise" id="real_analysis-01-proof-ex-9">
<p class="exercise-title"><strong>Exercise 9</strong></p>

† Prove that a countable union of countable sets is countable, assuming each
set is supplied with an explicit enumeration.

<details class="hint"><summary>Hint 1</summary>

Put the $n$th enumeration on row $n$ of an infinite grid and follow
diagonals. Explain why each entry appears.

</details>

</div>
