# Functional analysis: spaces of functions {#sec-functional-analysis}

Analysis often treats a function not as a rule to evaluate but as a point in a
space. Norms measure approximation, linear maps represent operations, and
completeness guarantees that limiting algorithms remain inside the space.

## Normed vector spaces

A norm on a real or complex vector space $X$ satisfies

$$
\|x\|\ge0,\qquad
\|x\|=0\Longleftrightarrow x=0,\qquad
\|\alpha x\|=|\alpha|\,\|x\|,\qquad
\|x+y\|\le\|x\|+\|y\|.
$$

It induces the metric $d(x,y)=\|x-y\|$. Examples include Euclidean norm, the
sequence norms $\|x\|_p=(\sum|x_n|^p)^{1/p}$, and function norms
$\|f\|_\infty$ and $\|f\|_p$.

A linear map $T:X\to Y$ is continuous exactly when it is bounded: there is $C$ with
$\|Tx\|\le C\|x\|$ for all $x$. Its operator norm is

$$
\|T\|=\sup_{\|x\|\le1}\|Tx\|.
$$

Continuity at zero implies continuity everywhere by linearity, and scaling a small
neighborhood proves the global bound. This equivalence is special to linear maps.

## Banach and Hilbert spaces

A Banach space is a complete normed vector space. The spaces $C([a,b])$ with the
supremum norm and $L^p$ for $1\le p\le\infty$ are Banach spaces. The space of
polynomials on $[a,b]$ with the supremum norm is not complete: Weierstrass
approximation gives polynomial sequences converging uniformly to nonpolynomial
continuous functions.

An inner product satisfies linearity, conjugate symmetry, and positivity, and
induces $\|x\|=\sqrt{\langle x,x\rangle}$. A complete inner-product space is a
**Hilbert space**. Euclidean space, $\ell^2$, and $L^2$ are examples.

The Cauchy–Schwarz inequality

$$
|\langle x,y\rangle|\le\|x\|\,\|y\|
$$

follows by minimizing $\|x-ty\|^2$ over scalars $t$. It implies the triangle
inequality for the induced norm. Not every norm comes from an inner product; those
that do satisfy the parallelogram identity.

## Projection and best approximation

If $M$ is a closed subspace of a Hilbert space and $x$ is given, there is a unique
$m\in M$ minimizing $\|x-m\|$. The error $x-m$ is orthogonal to $M$. In finite
dimensions this is ordinary orthogonal projection; in function spaces it becomes
least-squares approximation.

For an orthonormal set $e_1,\ldots,e_n$, the projection is

$$
P_nx=\sum_{k=1}^n\langle x,e_k\rangle e_k.
$$

Pythagoras yields

$$
\|x-P_nx\|^2
=\|x\|^2-\sum_{k=1}^n|\langle x,e_k\rangle|^2,
$$

which is Bessel's inequality and explains the Fourier energy calculation. If the
orthonormal system is complete, the projection errors tend to zero.

## Linear functionals and duality

A continuous linear functional is a bounded linear map $X\to\mathbb R$ or
$\mathbb C$. The collection $X^*$ of all such functionals is the **dual space**.
For $1<p<\infty$, functions in the conjugate $L^q$ space define functionals on
$L^p$ by $f\mapsto\int fg$, with Hölder's inequality providing boundedness.

The Hahn–Banach theorem, stated without proof, extends a bounded linear functional
from a subspace to the whole normed space without increasing its norm. Among its
consequences, continuous functionals can separate a point from a suitable closed
convex set. The theorem is an extension principle, not a claim that every algebraic
linear functional is continuous.

In a Hilbert space, the Riesz representation theorem says every continuous linear
functional has the form $x\mapsto\langle x,y\rangle$ for a unique $y$. Thus the
dual can be identified with the space itself, but this special self-duality does
not hold for arbitrary Banach spaces.

## Three structural theorems

Three cornerstone theorems share Baire category as their hidden engine.

**Uniform boundedness principle.** If a family of bounded linear maps
$T_\alpha:X\to Y$ on a Banach space is pointwise bounded—that is,
$\sup_\alpha\|T_\alpha x\|<\infty$ for each fixed $x$—then
$\sup_\alpha\|T_\alpha\|<\infty$.

**Theorem 13.1 (Open mapping).** A surjective bounded linear map between Banach spaces maps
open sets to open sets.

**Theorem 13.2 (Closed graph).** A linear map between Banach spaces is bounded if its
graph is closed in the product space.

These statements turn qualitative pointwise or set information into uniform norm
control. Completeness is essential. Full proofs belong in a functional-analysis
course, but the statements should be recognised as infinite-dimensional
local-to-global principles.

## Spectral ideas

For a linear operator $T$, an eigenvalue satisfies $Tx=\lambda x$ for a nonzero
$x$. In infinite dimensions, the **spectrum** includes values of $\lambda$ for
which $T-\lambda I$ lacks a bounded inverse, even if no eigenvector exists.

Compact operators send bounded sequences to sequences with convergent image
subsequences. A compact self-adjoint operator on a Hilbert space has nonzero
spectrum consisting of real eigenvalues of finite multiplicity, with possible
accumulation only at zero; suitable eigenvectors form an orthonormal basis for the
relevant closed range. This spectral theorem is stated as a vista. It generalizes
diagonalizing a symmetric matrix and underlies many boundary-value problems.

## Visual checkpoint: how the structural theorems connect

<figure id="fig-ra-functional-banach-map">
<img src="figures/banach-theorem-map.png" alt="Concept map linking Banach-space completeness to the contraction principle, uniform boundedness, open mapping, closed graph, and Hahn-Banach consequences.">

<figcaption>

Figure 13.1: A dependency map connects completeness, boundedness, openness, and duality theorems.

</figcaption>
</figure>

[Figure 13.1](#fig-ra-functional-banach-map) is a route map rather than a proof. Follow
one arrow at a time and name the hypotheses used there; the visual prevents the
three structural theorems from becoming an interchangeable list of slogans.

<!-- inline-formula-code:start -->
## Formula and finite computation

A useful formula in this chapter is

$$
\|f\|_p=\left(\int|f|^p\right)^{1/p}
$$

A weighted finite sample gives an explicit discrete norm. The following standalone Python block expresses that finite rule with its inputs and stopping conditions visible.

```python
def sampled_lp_norm(values: list[float], exponent: float, cell_width: float) -> float:
    """Return a weighted finite L-p norm for a uniform grid."""
    if not values:
        raise ValueError("values must be nonempty")
    if exponent < 1.0 or cell_width <= 0.0:
        raise ValueError("exponent must be at least one and width positive")
    integral = sum(abs(value) ** exponent for value in values) * cell_width
    return integral ** (1.0 / exponent)

samples = [0.0, 0.5, 1.0, 1.5, 2.0]
for exponent in (1.0, 2.0, 4.0, 8.0):
    print(exponent, sampled_lp_norm(samples, exponent, cell_width=0.25))
```

**What the computation establishes.** The calculation checks a declared finite instance; the surrounding argument explains what is true beyond those inputs.
<!-- inline-formula-code:end -->

## Chapter synthesis

Norms decide what approximation means, completeness keeps limits inside a space,
and inner products add projection geometry. Bounded linear maps are precisely the
continuous ones. Duality records all continuous scalar observations, while Baire
category and compactness produce structural theorems unavailable from finite
algebra alone.

## Exercises

<div class="exercise" id="real_analysis-13-functional-analysis-ex-1">
<p class="exercise-title"><strong>Exercise 1</strong></p>

Verify that the supremum norm is a norm on $C([a,b])$.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-2">
<p class="exercise-title"><strong>Exercise 2</strong></p>

Prove a linear map continuous at zero is bounded.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-3">
<p class="exercise-title"><strong>Exercise 3</strong></p>

Show the differentiation map on polynomials with the supremum norm is not
bounded uniformly over all degrees.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-4">
<p class="exercise-title"><strong>Exercise 4</strong></p>

Derive Cauchy–Schwarz by minimizing a quadratic.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-5">
<p class="exercise-title"><strong>Exercise 5</strong></p>

Prove the parallelogram identity for an inner-product norm.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-6">
<p class="exercise-title"><strong>Exercise 6</strong></p>

Find the best constant approximation to $x$ in $L^2([-1,1])$.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-7">
<p class="exercise-title"><strong>Exercise 7</strong></p>

Show evaluation $f\mapsto f(x_0)$ is bounded on $C([a,b])$ with supremum norm.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-8">
<p class="exercise-title"><strong>Exercise 8</strong></p>

Explain why evaluation at a point is not well-defined on $L^2$ equivalence
classes.

</div>

<div class="exercise" id="real_analysis-13-functional-analysis-ex-9">
<p class="exercise-title"><strong>Exercise 9</strong></p>

† Prove uniqueness of the Hilbert-space best approximation using the
parallelogram identity.

<details class="hint"><summary>Hint 1</summary>

If two distinct minimizers existed, use their midpoint and the
parallelogram identity to obtain a smaller distance.

</details>

</div>
