
# Singularity Analysis and Coefficient Transfer

An exact specification gives a formal series; an asymptotic requires more.
The nearest singularities, their local shapes and the domain through which a
coefficient contour can be deformed determine which local approximations control
the coefficients. This chapter proves an explicit remainder-transfer estimate
and combines it with exact algebraic model coefficients. It does not turn an
unqualified real-axis expansion into a coefficient theorem.

Read [The Symbolic Method](symbolic-method.md), the asymptotic enumeration
chapter of Combinatorics, and the contour-integration chapters of
[Complex Analysis](#/books/complex-analysis). The analytic inputs
are Cauchy's coefficient formula, contour deformation in an analytic domain,
compactness and elementary improper integrals. Real powers use their branch
analytic off the outward cut from the singularity. All asymptotic parameters
other than the coefficient index are fixed unless stated otherwise.

## Analytic domain and coefficient contour

**Definition 2.1 (Indented continuation domain).** For $R>1$ and
$0<\phi<\pi/2$, set

$$\Delta(R,\phi)=\{z:|z|<R,\ z\ne1,\ |\arg(z-1)|>\phi\}.$$

The excluded wedge opens to the right of one. A function analytic in this
domain is also assumed analytic at the origin; the domain includes a disk
around zero. A local bound near one is required throughout the permitted
complex approach directions, not merely on the real interval below one.
The corresponding domain at a positive singularity $\rho$ is obtained by
scaling $z$ by $\rho$.

Cauchy's formula on a circle strictly inside the unit disk is

$$[z^n]H(z)=\frac1{2\pi i}\int H(z)z^{-n-1}\,dz.$$

Continuation permits deforming that circle toward one, with an indentation
that avoids the singular point and the excluded wedge. The kernel is small
where $|z|$ is larger than one. The distance of the indentation from one
should be comparable with $1/n$; it balances arc length and the local
singular size of the function.

**Theorem 2.2 (Remainder transfer).** Suppose $H$ is analytic in some
$\Delta(R,\phi)$ and, as $z\to1$ within it,
$|H(z)|\le C|1-z|^\beta$, where $\beta$ is a fixed real number.
Then $[z^n]H(z)=O(n^{-\beta-1})$.

*Proof.* Choose $\theta$ strictly between $\phi$ and $\pi/2$.
Use an indented contour consisting near one of the rays
$z=1+te^{\pm i\theta}$, with $1/n\le t\le\eta$, and the
connecting arc of radius $1/n$ that goes around the left of one. Close
it in a fixed compact part of the continuation domain outside the unit
circle. Such a closure can follow the same rays to a circle of radius
strictly between one and R; its remaining arc avoids the excluded wedge.
All parts stay inside the domain and surround zero, excluding one.

For sufficiently small fixed $\eta$, the ray points satisfy
$|z|\ge1+ct$ for some $c>0$, because $\cos\theta>0$.
Thus their kernel is at most a constant times $e^{-c'nt}$.
Their integral contribution is bounded by a constant times

$$\int_{1/n}^{\eta}t^\beta e^{-c'nt}\,dt
\le n^{-\beta-1}\int_1^\infty u^\beta e^{-c'u}\,du.$$

The final integral is finite for every fixed real beta, since its lower
endpoint is one and its upper tail decays exponentially.
On the small arc, $|H|=O(n^{-\beta})$, the length is $O(1/n)$,
and $|z|\ge1-1/n$ makes $|z|^{-n-1}$ uniformly bounded for
$n\ge2$. Its contribution is again $O(n^{-\beta-1})$.
The fixed closure and ray portions outside the local neighbourhood have
$|z|\ge1+\epsilon$ and bounded H, giving exponentially small
contributions. Summing the bounds in Cauchy's formula proves the claim. ∎

The contour argument proves the exponent in the error, including negative
beta. The constant can depend on H, the domain and beta. Nothing here gives
uniformity as beta, the wedge or the continuation radius varies with n.
Analyticity on the whole continuation contour is an essential hypothesis.

## Exact model coefficients and their asymptotics

**Lemma 2.3 (Algebraic model).** For fixed real
$\alpha\notin\{0,-1,-2,\ldots\}$,

$$[z^n](1-z)^{-\alpha}
=\frac{\Gamma(n+\alpha)}{\Gamma(\alpha)\Gamma(n+1)}
\sim\frac{n^{\alpha-1}}{\Gamma(\alpha)}.$$

The exact quotient for early negative arguments is interpreted by its equivalent
product $\alpha(\alpha+1)\cdots(\alpha+n-1)/n!$.

*Proof.* The differential equation $(1-z)F'=\alpha F$, with $F(0)=1$,
gives $(n+1)c_{n+1}=(n+\alpha)c_n$. Iterating proves the product,
and the gamma recurrence gives its displayed quotient wherever the factors
are defined.

For positive alpha, the beta integral identity follows by writing the product
of two gamma integrals in variables $s=x+y,t=x/(x+y)$; the Jacobian
is s and the integrals separate. In particular
$B(n+1,\alpha)=\Gamma(n+1)\Gamma(\alpha)/\Gamma(n+\alpha+1)$.
After $u=n(1-t)$,

$$n^\alpha B(n+1,\alpha)
=\int_0^n(1-u/n)^n u^{\alpha-1}\,du\longrightarrow\Gamma(\alpha).$$

On a fixed bounded interval away from zero, the integrand converges uniformly
to $e^{-u}u^{\alpha-1}$. Near zero and in the tail it is bounded by
that same integrable function, since $(1-u/n)^n\le e^{-u}$.
Choosing those two excluded integrals arbitrarily small and then passing to
the limit on the remaining interval justifies convergence without interchanging
an uncontrolled infinite tail. Rearranging gives
$\Gamma(n+\alpha+1)/\Gamma(n+1)\sim n^\alpha$;
divide by $n+\alpha$ to obtain the desired quotient asymptotic.

For negative noninteger alpha, choose an integer k with $\alpha+k>0$.
The gamma recurrence expresses the numerator ratio at alpha as the ratio
at $\alpha+k$ divided by the k factors
$(n+\alpha)\cdots(n+\alpha+k-1)$. Each is asymptotic to n.
Define $\Gamma(\alpha)=\Gamma(\alpha+k)/
[\alpha\cdots(\alpha+k-1)]$, consistently with the recurrence.
This reduces the claim to the positive case. ∎

The positive gamma function is the integral
$\Gamma(t)=\int_0^\infty e^{-u}u^{t-1}\,du$ for $t>0$;
integration by parts supplies its recurrence. The change-of-variables and
positive-integral manipulations above use ordinary improper-integral facts
from analysis. The excluded nonpositive integer exponents instead make the
model a polynomial, whose sufficiently late coefficients are zero.

**Theorem 2.4 (One-term algebraic transfer).** Suppose F continues to the
scaled indented domain at $\rho>0$ and there has expansion

$$F(z)=c(1-z/\rho)^{-\alpha}
+O(|1-z/\rho|^\beta),\qquad \beta>-\alpha,$$

with fixed real alpha as in Lemma 2.3 and $c\ne0$. Then

$$[z^n]F(z)=c\rho^{-n}
\frac{\Gamma(n+\alpha)}{\Gamma(\alpha)\Gamma(n+1)}
+O(\rho^{-n}n^{-\beta-1})
\sim\frac{c\rho^{-n}n^{\alpha-1}}{\Gamma(\alpha)}.$$

*Proof.* Substitute $z=\rho w$, subtract the model and apply Theorem 2.2
to the analytic remainder. Rescaling coefficients supplies $\rho^{-n}$.
Lemma 2.3 gives the model asymptotic, and $\beta>-\alpha$ makes
the remainder lower order. ∎

The error term is attached to the exact gamma quotient. Replacing that
quotient by its leading power without a rate would not automatically preserve
the displayed error size. Additional terms in the model's own asymptotic
must be justified separately when a sharper expansion is needed.

## Three different coefficient phenomena

**Worked example 2.5 (A pole and its polynomial scale).** For
$F(z)=(1-2z)^{-3}$, the coefficient is
$2^n\binom{n+2}{2}$. Thus it is asymptotic to $2^n n^2/2$.
The exponential factor comes from the singularity at $\rho=1/2$;
the order-three pole supplies the degree-two polynomial. Both factors are
needed. Merely observing the radius and reporting growth proportional to
$2^n$ misses an unbounded factor.

**Worked example 2.6 (Catalan square roots).** The formal specification
$C=1+zC^2$ selects
$C(z)=(1-\sqrt{1-4z})/(2z)$ by its constant term. Inversion from
the previous chapter gives $C_n=\binom{2n}n/(n+1)$.
The identity
$\binom{2n}n=4^n\Gamma(n+1/2)/(\sqrt\pi\Gamma(n+1))$
follows from the gamma recurrence and $\Gamma(1/2)=\sqrt\pi$,
the Gaussian integral value from analysis. Lemma 2.3 gives

$$C_n\sim\frac{4^n}{\sqrt\pi\,n^{3/2}}.$$

This exact-coefficient route is a complete alternative to applying a transfer
estimate to the local square-root term. The algebraic branch and the combinatorial
specification remain necessary; a different branch would not have constant
term one. The removable expression at z equal to zero is not a singularity
of the chosen series.

**Worked example 2.7 (Two equal-modulus poles).**
$1/(1-z^2)=\frac12(1-z)^{-1}+\frac12(1+z)^{-1}$.
Its coefficients are $(1+(-1)^n)/2$, giving one at even indices and
zero at odd indices. Both poles lie on the unit circle. A one-term positive-pole
approximation would give one half at every large index and fail on both
subsequences. A continuation domain covering a neighbourhood of minus one
is absent for the full function, so Theorem 2.4's one-singularity hypotheses
do not hold.

A numerator can also cancel a visible denominator zero. The rational expression
$(1-z)/(1-z)$ represents the constant one after filling its removable
point. Its eventual coefficients vanish. A formula's typography is not a
singularity classification: inspect the analytic function, its branch and all
singularities of smallest modulus.

## Rational functions admit a complete finite decomposition

**Proposition 2.8 (Rational coefficient decomposition).** Let F be rational
and analytic at zero. Cancel common numerator and denominator factors first.
Over the complex numbers, partial fractions give a polynomial P and finitely
many nonzero pole locations $\rho_j$ with terms
$c_{j,k}(1-z/\rho_j)^{-k}$, where the integers k are positive.
For n beyond the degree of P, its coefficient is exactly

$$[z^n]F(z)=\sum_{j,k}c_{j,k}\rho_j^{-n}
\binom{n+k-1}{k-1}.$$

*Proof.* Polynomial division separates P, and factorization of the remaining
denominator gives the ordinary partial-fraction expansion. Analyticity at
zero excludes a pole there. Each term has the integer-exponent model
coefficient from Lemma 2.3, and P contributes nothing beyond its degree.
There are only finitely many terms, so coefficient extraction commutes
with their sum without a convergence issue. ∎

This proposition is both an exact formula and an asymptotic algorithm for a
fixed rational function. First group terms by pole modulus. Among the smallest
modulus poles, retain all terms whose pole order gives the needed polynomial
scale. Terms at larger moduli are exponentially smaller than the same power
of n at a smaller modulus, while lower pole orders at the same modulus give
smaller polynomial powers. Several terms in a group can still cancel on
subsequences, so describe their sum before declaring one nonzero equivalent.

**Worked example 2.9 (A rational Fibonacci series).** Let
$F(z)=1/(1-z-z^2)$ and put
$\varphi=(1+\sqrt5)/2$, $\psi=(1-\sqrt5)/2$.
Then $1-z-z^2=(1-\varphi z)(1-\psi z)$ and

$$F(z)=\frac{\varphi}{\sqrt5}\frac1{1-\varphi z}
-\frac{\psi}{\sqrt5}\frac1{1-\psi z}.$$

Consequently $[z^n]F=(\varphi^{n+1}-\psi^{n+1})/\sqrt5$.
Since $|\psi|<1<\varphi$, the first term is dominant and the
second is an exact exponentially decaying correction. The coefficients begin
with one at size zero and one at size one, as required by the defining
denominator recurrence. This is a proof from factorization and geometric
series, not a deduction from a finite numerical fit to exponential growth.

There is a useful contrast with an analytic remainder that extends to a full
larger disk. If G is analytic for $|z|<r$ with $r>1$, choose any
fixed $s$ strictly between one and r. On $|z|=s$, compactness gives
a bound $M_s$ on its absolute value. Cauchy's coefficient formula yields
$|[z^n]G|\le M_s s^{-n}$, an exponentially small contribution.
The strict choice $s<r$ matters: no bound at the circle of convergence
has been assumed. An indented-domain remainder may have a singularity at one,
so only the power estimate from its local behaviour is available there.

## Error control and moving parameters

The estimate $O(n^{-\beta-1})$ is a theorem about a fixed analytic
function with a fixed local bound and continuation domain. If a family depends
on a parameter, those domains and constants can degenerate. Differentiating
a fixed-parameter leading asymptotic to obtain a logarithmic-factor asymptotic
is not valid without further uniform control. Likewise, an increasing pole
order changes the location of the dominant contour balance and may call for
a saddle-point method rather than the fixed-exponent theorem.

An exact finite coefficient computation can compare a conjectured leading
term at selected indices. It cannot establish the continuation domain, a
uniform remainder or the eventual limit. Present the structural specification,
analytic hypotheses and coefficient conclusion as separate stages. The symmetric
function chapter returns to exact algebraic structure before later methods
apply probabilistic and geometric bounds to other classes.

## Worked example: cancel before assigning singular contributions

Consider the rational expression

$$F(z)=\frac{1+z}{1-z^2}.$$

The denominator vanishes at both one and minus one. Nevertheless, minus one
is removable: cancelling the common factor gives the geometric generating
function with denominator one minus z. Every coefficient is exactly one.
Treating both denominator roots as genuine simple poles would invent an
alternating contribution that the numerator has cancelled. In formal series
this cancellation is also legitimate because the cancelled factor has a
nonzero constant term and is a unit; analytic continuation then identifies
which apparent boundary points are removable.

Now add a fixed nonzero constant times the geometric series with denominator
one plus z. Its coefficients alternate, so the new coefficient sequence is
one plus that constant at even indices and one minus it at odd indices.
Even a small fixed constant does not produce a relative error tending to
zero when the comparison sequence is constantly one. There are two limiting
subsequences instead of a single asymptotic equivalence.

This example separates three operations: simplifying the actual function,
listing its genuine dominant singularities, and summing their coefficient
contributions. The order matters. A root of a chosen denominator is not an
intrinsic singularity, and a numerically small oscillation is not a vanishing
asymptotic error. If the added constant varies with the coefficient index,
one has introduced a family of functions and must state the required uniform
estimate rather than silently applying the fixed-function theorem.

## Exercises

### Exercise 2.1
<a id="singularity-analysis-ex-1"></a>

Extract the exact coefficients of $(1-3z)^{-2}$ and their leading form.

<details><summary>Hint 1</summary>

Use the algebraic model with alpha two.

</details>
<details><summary>Hint 2</summary>

The gamma quotient simplifies to a linear polynomial.

</details>
<details><summary>Solution</summary>

The coefficient is $3^n(n+1)$, since the model quotient is
$\Gamma(n+2)/(\Gamma(2)\Gamma(n+1))=n+1$.
It is asymptotic to $3^n n$. The extra polynomial factor comes from
the pole's order and cannot be absorbed into a fixed multiplicative constant.

</details>

### Exercise 2.2
<a id="singularity-analysis-ex-2"></a>

Why is a real-axis bound $H(x)=O((1-x)^\beta)$ insufficient for the
contour proof of Theorem 2.2?

<details><summary>Hint 1</summary>

Identify where most of the deformed contour lies.

</details>
<details><summary>Hint 2</summary>

The rays approach one from nonreal directions.

</details>
<details><summary>Solution</summary>

The integral uses complex rays and an indentation arc, not just real points.
A real-axis bound controls none of those values and does not supply analytic
continuation across the larger contour. The theorem requires a bound throughout
the permitted complex approach domain; the proof cannot replace that hypothesis
with observations on one interval.

</details>

### Exercise 2.3
<a id="singularity-analysis-ex-3"></a>

Explain the factor $n^{-\beta-1}$ on the small indentation arc.

<details><summary>Hint 1</summary>

Its radius is $1/n$.

</details>
<details><summary>Hint 2</summary>

Combine the local function bound, arc length and bounded kernel.

</details>
<details><summary>Solution</summary>

On the arc $|1-z|=1/n$, so the local bound is $O(n^{-\beta})$.
Its length is $O(1/n)$, and the kernel is uniformly bounded by the
lower modulus bound $1-1/n$. Their product is
$O(n^{-\beta-1})$, with no appeal to an unproved cancellation.

</details>

### Exercise 2.4
<a id="singularity-analysis-ex-4"></a>

Let $F=(1-z)^{-3/2}+H$, with H satisfying the remainder theorem at
beta minus one half. State the coefficient result without strengthening
the model error unjustifiably.

<details><summary>Hint 1</summary>

Keep the gamma quotient exact in the first term.

</details>
<details><summary>Hint 2</summary>

The remainder exponent is $-\beta-1=-1/2$.

</details>
<details><summary>Solution</summary>

The coefficient is
$\Gamma(n+3/2)/(\Gamma(3/2)\Gamma(n+1))+O(n^{-1/2})$.
It is also asymptotic to $n^{1/2}/\Gamma(3/2)$, but assigning that
leading power the same absolute error requires a quantitative expansion of
the gamma quotient beyond the mere equivalence proved here.

</details>

### Exercise 2.5
<a id="singularity-analysis-ex-5"></a>

Find all nonzero coefficient indices of $1/(1-z^3)$ and explain the
role of its three poles.

<details><summary>Hint 1</summary>

Expand as a geometric series in $z^3$.

</details>
<details><summary>Hint 2</summary>

Every cube root of unity is a denominator zero of modulus one.

</details>
<details><summary>Solution</summary>

The expansion is $\sum_{k\ge0}z^{3k}$, so precisely multiples of
three have coefficient one. Its three simple poles have equal smallest
modulus. Their root-of-unity contributions combine to cancel at the other
indices; keeping only the positive pole loses this periodic restriction.

</details>

### Exercise 2.6
<a id="singularity-analysis-ex-6"></a>

Give a rational expression with a removable denominator zero and identify
its actual series after cancellation.

<details><summary>Hint 1</summary>

Place the same factor in numerator and denominator.

</details>
<details><summary>Hint 2</summary>

Use the analytic extension at the cancelled point.

</details>
<details><summary>Solution</summary>

$(1-z)/(1-z)$ extends to the constant one at z equal to one.
Its constant coefficient is one and every positive-degree coefficient is
zero. The visible denominator zero does not force coefficient growth when
its apparent singularity is removable.

</details>

### Exercise 2.7
<a id="singularity-analysis-ex-7"></a>

Show why the ray integral in the remainder proof is finite for beta less
than minus one as well as for positive beta.

<details><summary>Hint 1</summary>

After rescaling, its lower endpoint is one, not zero.

</details>
<details><summary>Hint 2</summary>

Exponential decay controls every fixed polynomial or reciprocal power at infinity.

</details>
<details><summary>Solution</summary>

The bound involves $\int_1^\infty u^\beta e^{-c'u}\,du$.
There is no singular endpoint at zero, and on $[1,\infty)$ the
exponential dominates any fixed real power. Hence it is finite for every
fixed real beta. Its constant may still vary with beta.

</details>

### Exercise 2.8
<a id="singularity-analysis-ex-8"></a>

Why are nonpositive integer values of alpha excluded from the algebraic
singularity model?

<details><summary>Hint 1</summary>

Write alpha as minus a nonnegative integer.

</details>
<details><summary>Hint 2</summary>

The corresponding function becomes a polynomial.

</details>
<details><summary>Solution</summary>

If $\alpha=-k$ with $k\ge0$, then $(1-z)^{-\alpha}=(1-z)^k$.
It has no singularity at one and coefficients vanish above degree k.
The quoted nonzero leading gamma expression is therefore inapplicable;
this exceptional case is handled directly as a polynomial.

</details>

### Exercise 2.9
<a id="singularity-analysis-ex-9"></a>

Derive the Catalan exponential scale and power of n from its exact
central-binomial formula.

<details><summary>Hint 1</summary>

Use the gamma quotient at alpha one half.

</details>
<details><summary>Hint 2</summary>

The Catalan formula has one further division by $n+1$.

</details>
<details><summary>Solution</summary>

The central binomial coefficient is asymptotic to
$4^n/(\sqrt\pi\sqrt n)$. Dividing by $n+1\sim n$
gives $4^n/(\sqrt\pi n^{3/2})$. Both the exponential scale and
negative three-halves power survive; the latter is not a constant correction.

</details>

### Exercise 2.10
<a id="singularity-analysis-ex-10"></a>

What must be added before a fixed-alpha transfer equivalence can be used
uniformly for a sequence of exponents depending on n?

<details><summary>Hint 1</summary>

Inspect every place a proof constant depends on alpha.

</details>
<details><summary>Hint 2</summary>

The continuation domain and local remainder can vary as well.

</details>
<details><summary>Solution</summary>

One needs a common admissible continuation domain, uniform local bounds,
and a uniform model-coefficient estimate over the stated exponent range.
The contour constants and gamma-ratio error must be controlled jointly.
Pointwise equivalence at each fixed alpha supplies none of those uniform
claims and cannot alone justify substituting a moving exponent.

</details>

## Summary and next connection

A local singular expansion transfers through a valid complex continuation
contour, not from a real-axis resemblance. Exact model coefficients and a
proved remainder bound separate the leading scale from its error. Equal-modulus
singularities, removable points and moving parameters require separate care.
The next exact-algebraic chapters develop the symmetry information used by
more structured enumerative classes.
