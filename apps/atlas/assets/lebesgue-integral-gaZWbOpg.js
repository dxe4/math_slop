var e=`---
parent_id: book-measure-and-integration
chapter_id: lebesgue-integral
title: "The Lebesgue Integral"
level: graduate
license: CC BY-SA 4.0
---

# The Lebesgue Integral

The measurable/simple construction is in the [preceding chapter](lebesgue-integration.md), which retains the original ANA-CH17 resource identity and exercise bank. This second part transfers the original infinite-integral construction and applications without copying their text. Its references to canonical dyadic approximation point to that preceding development. Monotone convergence is previewed here and proved fully in the [convergence chapter](measure-convergence-theorems.md); it uses the simple integral and supremum definition, not a circular assumption of general integral linearity.

## 4. Integrate nonnegative measurable functions from below

For a measurable \\(f:X\\to [0,\\infty]\\), define

\\(\\int f d\\mu=\\sup\\{\\int \\varphi d\\mu: \\varphi is nonnegative simple \\text{ and } \\varphi\\le f\\}\\).

The integral may be infinite. The definition never subtracts infinities and uses only already-defined simple integrals.

Why approximate from below? Monotonicity then becomes automatic. If \\(0\\le f\\le g\\), every simple minorant of \\(f\\) is also a minorant of \\(g\\), so

\\(\\int f\\le \\int g\\).

If \\(f=0\\) almost everywhere, every simple minorant with positive height can be positive only on a null set, so \\(\\int f=0\\).

The supremum definition also agrees with the earlier simple-function
definition. Indeed, if \\(f\\) itself is simple, it is among its own minorants, so
the new supremum is at least \\(\\int f\\). Order for simple functions shows that no
other simple minorant can have a larger integral. This compatibility is
essential: each stage extends the preceding stage instead of replacing it.

Two further consequences require almost no work:

- if \\(E\\subseteq F\\), then \\(\\int _E f\\le \\int _F f\\) for \\(f\\ge 0\\);
- if \\(c\\ge 0\\), then \\(\\int cf=c\\int f\\), with the convention \\(0\\cdot \\infty=0\\) for this statement.

For \\(c>0\\), scalar homogeneity follows by scaling simple minorants in both
directions. The case \\(c=0\\) says simply that the zero function has integral
zero.

## 6. The monotone convergence principle preview

If \\(0\\le f_n\\uparrow f\\) pointwise, then

\\(\\int f_n\\uparrow \\int f\\).

This is the **monotone convergence theorem**. One inequality follows from monotonicity. For the other, take a simple \\(\\varphi\\le f\\) and a factor \\(0<c<1\\). The sets where \\(f_n\\ge c\\varphi\\) increase to cover the positive levels of \\(\\varphi\\); continuity from below of measure shows that \\(c\\varphi\\) is captured almost entirely by sufficiently late \\(f_n\\). Let the missed measure vanish and then let \\(c\\uparrow 1\\).

The next chapter gives the proof in full and derives Fatou and dominated convergence. Here MCT immediately confirms that the integral of \\(f\\) equals the limit of the integrals of its canonical dyadic approximants.

MCT is also the clean route to additivity for arbitrary nonnegative functions.
Choose increasing simple approximations \\(\\varphi_n\\uparrow f\\) and \\(\\psi_n\\uparrow g\\). Simple-function
linearity yields

\\(\\int (\\varphi_n+\\psi_n)=\\int \\varphi_n+\\int \\psi_n\\).

Since \\(\\varphi_n+\\psi_n\\uparrow f+g\\), applying MCT to all three sequences gives

\\(\\int (f+g)=\\int f+\\int g\\).

Both sides may be infinite; because all quantities are nonnegative, the
identity never asks for an undefined subtraction. Countable additivity for
nonnegative functions follows similarly: for \\(f_k\\ge 0\\), apply finite additivity
to the partial sums and then MCT to obtain

\\(\\int \\sum_k f_k=\\sum_k\\int f_k\\).

This last statement is often called the nonnegative sum theorem. Taking
\\(f_k=1_{E_k}\\) for disjoint sets recovers countable additivity of measure, so
measure and integration genuinely extend one another.

## 7. Positive and negative parts

For a measurable real-valued \\(f\\), define

\\(f^+=\\max(f,0)\\),

\\(f^-=\\max(-f,0)\\).

Then

\\(f=f^+-f^-\\), \\(|f|=f^++f^-\\),

and the two parts are never simultaneously positive.

Define

\\[\\int f=\\int f^+-\\int f^-\\]

provided at least one of the two terms is finite. If both are infinite, the expression \\(\\infty-\\infty\\) is undefined and so is the integral.

The function is **integrable** when

\\(\\int |f|<\\infty\\).

Equivalently, both \\(\\int f^+\\) and \\(\\int f^-\\) are finite. In that case the integral is a finite real number and satisfies

\\(|\\int f|\\le \\int |f|\\).

Cancellation cannot establish integrability: absolute size must be finite.

It is useful to distinguish three cases explicitly.

1. If both parts have finite integral, then \\(f\\) is integrable and \\(\\int f\\) is
   finite.
2. If exactly one part has infinite integral, then the extended signed
   integral is defined and equals \\(\\infty\\) or \\(-\\infty\\), but \\(f\\) is not integrable.
3. If both parts have infinite integral, then \\(\\int f\\) is undefined.

Some authors reserve the phrase “the integral exists” for the first case;
others allow the second case as an extended integral. Stating “integrable”
unambiguously means the first case in this book.

### Example: defined but not integrable

On \\(R\\), the constant function \\(f=1\\) has \\(\\int f=\\infty\\). Its positive part has infinite
integral and its negative part is zero, so the nonnegative extended integral is
perfectly well-defined. It is not an integrable function because
\\(\\int |f|=\\infty\\).

### Example: cancellation is not a definition

For \\(f(x)=x\\) on \\(R\\), both \\(f^+\\) and \\(f^-\\) have infinite integral. Symmetric
truncations satisfy \\(\\int _{[-R,R]}x dx=0\\), while asymmetric truncations such as
\\([-R,2R]\\) give \\(3R^2/2\\). The value supplied by a chosen truncation rule is not
the Lebesgue integral over \\(R\\); without absolute control, the two infinite
masses cannot be subtracted canonically.

## 8. Almost-everywhere equality is invisible to the integral

If nonnegative measurable functions \\(f\\) and \\(g\\) agree almost everywhere, then

\\(\\int f=\\int g\\).

The discrepancy is confined to a null set. Simple functions supported there have integral zero, and approximations outside it coincide. The result extends to integrable signed functions.

Consequently, Lebesgue integration treats functions as equivalence classes modulo null sets. This is why \\(L^p\\) norms later identify almost-everywhere equal representatives.

But point evaluation is not well-defined on such a class. If \\(f=g\\) almost everywhere, a statement such as “the value at zero” can differ between representatives.

Here is a precise proof for nonnegative functions. Let \\(N=\\{f\\ne g\\}\\) and suppose
\\(\\mu(N)=0\\). Then

\\(f\\le g+f\\,1_N\\) and \\(g\\le f+g\\,1_N\\).

Any nonnegative measurable function supported on a null set has integral zero:
its canonical truncations are bounded simple functions supported on that same
null set. Additivity and monotonicity now give \\(\\int f\\le \\int g\\) and \\(\\int g\\le \\int f\\).

There is an important distinction between “almost everywhere” and “everywhere”
in statements that are not integral statements. For example, changing one
value can destroy continuity, change a maximum, or alter membership in a class
of pointwise solutions to a differential equation. The integral forgets null
changes; other structures need not.

## 9. Linearity and order for integrable functions

If \\(f,g\\) are integrable and \\(\\alpha,\\beta\\in R\\), then

\\(\\int (\\alpha f+\\beta g)=\\alpha\\int f+\\beta\\int g\\).

Also,

\\(|\\alpha f+\\beta g|\\le |\\alpha||f|+|\\beta||g|\\),

so the linear combination remains integrable.

If \\(f\\le g\\) almost everywhere and both are integrable, then \\(\\int f\\le \\int g\\). Apply nonnegative monotonicity to \\(g-f\\).

The integral triangle inequality follows from \\(-|f|\\le f\\le |f|\\) or from positive and negative parts:

\\(|\\int f|\\le \\int |f|\\).

These properties let the integral act as a continuous linear functional once a norm is introduced.

The proof of linearity for signed functions is safe because integrability makes
every positive and negative contribution finite. The pointwise identity

\\[f^++g^++(f+g)^-=f^-+g^-+(f+g)^+\\]

involves only nonnegative functions. Integrate it using nonnegative additivity,
then rearrange the resulting finite terms. This gives
\\(\\int (f+g)=\\int f+\\int g\\). The argument explains why one must establish integrability
before manipulating signed integrals algebraically.

### Complex-valued functions

If \\(f=u+iv\\) with real measurable \\(u\\) and \\(v\\), define \\(f\\) to be integrable when
\\(\\int |f|<\\infty\\), and set

\\(\\int f=\\int u+i\\int v\\).

Because \\(|u|,|v|\\le |f|\\), both real components are integrable. Conversely,
\\(|f|\\le |u|+|v|\\), so componentwise integrability is equivalent to integrability
of \\(f\\). The bound \\(|\\int f|\\le \\int |f|\\) remains true; choose a unit complex number that
rotates \\(\\int f\\) onto the nonnegative real axis and apply the real inequality to
the real part of the rotated integrand.

### Simple functions approximate integrable functions in integral error

Pointwise approximation was enough to define the nonnegative integral, but an
integrable function admits a stronger approximation. If \\(f\\ge 0\\) is integrable
and \\(\\varphi_n\\) are its canonical simple approximants, then MCT gives

\\(\\int \\varphi_n\\uparrow \\int f\\).

Because \\(0\\le \\varphi_n\\le f\\), nonnegative additivity applied to
\\(f=\\varphi_n+(f-\\varphi_n)\\) yields

\\(\\int |f-\\varphi_n|=\\int f-\\int \\varphi_n\\to 0\\).

Thus the error tends to zero not only pointwise but also in total integral.
For a signed integrable function, approximate \\(f^+\\) and \\(f^-\\) separately by
nonnegative simple functions \\(\\varphi_n\\) and \\(\\psi_n\\). Then \\(s_n=\\varphi_n-\\psi_n\\) is a signed
simple function and

\\(\\int |f-s_n|\\le \\int |f^+-\\varphi_n|+\\int |f^--\\psi_n|\\to 0\\).

This result is the first density theorem for \\(L^1\\): integrable simple
functions are sufficient to approximate every integrable function in the
natural error metric. It is also a practical proof strategy. Prove an
inequality first for simple functions, show that both sides behave
continuously under integral-error approximation, and then pass to general
integrable functions.

For Lebesgue measure on \\(R\\) one can go further. A finite-measure measurable set
can be approximated in measure by finite unions of bounded intervals, so simple
functions can in turn be approximated by familiar step functions. That
geometric refinement uses regularity of Lebesgue measure; it is not part of the
abstract integral construction and need not hold in the same form on an
arbitrary measure space.

## 10. Restriction, locality, and absolute continuity of the integral

For measurable \\(E\\), define

\\(\\int _E f d\\mu=\\int _X f\\,1_E d\\mu\\).

This notation changes the integrand, not the underlying measure space. If
\\(f\\ge 0\\) and \\(E_k\\) are disjoint, the nonnegative sum theorem gives

\\(\\int _{\\bigcup E_k} f d\\mu=\\sum_k\\int _{E_k} f d\\mu\\).

Thus \\(\\nu(E)=\\int _E f d\\mu\\) is itself a measure when \\(f\\ge 0\\); it is called the measure
with density \\(f\\) relative to \\(\\mu\\). It cannot charge a \\(\\mu\\)-null set, because
\\(f\\,1_E=0\\) almost everywhere whenever \\(\\mu(E)=0\\).

For an integrable signed or complex \\(f\\), restriction obeys

\\(|\\int _E f|\\le \\int _E|f|\\le \\int |f|\\).

A deeper small-set statement will be used repeatedly: if \\(f\\) is integrable,
then for every \\(\\varepsilon>0\\) there exists \\(\\delta>0\\) such that

\\(\\mu(E)<\\delta implies \\int _E|f|<\\varepsilon\\).

To prove it, choose \\(M\\) so that \\(\\int _{|f|>M}|f|<\\varepsilon/2\\); this tail estimate follows
from monotone convergence applied to \\(|f|\\,1_{\\{|f|\\le M\\}}\\). Then

\\(\\int _E|f|\\le M\\mu(E)+\\int _{|f|>M}|f|\\).

Taking \\(\\delta=\\varepsilon/(2M)\\) works when \\(M>0\\). This property is called absolute
continuity of the integral. It is stronger than merely saying null sets have
zero integral: it controls all sufficiently small measurable sets uniformly.

Two easy bounds are worth keeping available. If \\(|f|\\le M\\) almost everywhere on
a set \\(E\\) of finite measure and \\(f=0\\) off \\(E\\), then

\\(\\int |f|\\le M\\mu(E)\\).

Conversely, integral control alone does not bound \\(f\\) pointwise: tall spikes
may live on correspondingly small sets. Markov's inequality in the next
section is the correct replacement, quantifying how much of the space can
support a spike of a specified height.

## 11. Computing with level sets

For a nonnegative measurable function, the **layer-cake formula** is

\\(\\int _X f d\\mu=\\int _0^\\infty \\mu(\\{x:f(x)>t\\})dt\\).

For a simple function, each point of height \\(a\\) contributes one unit for every \\(t\\in [0,a)\\), so the right side reproduces the weighted set measures. Monotone approximation extends the identity to general nonnegative functions.

More explicitly, define the distribution or tail function

\\(D_f(t)=\\mu(\\{f>t\\})\\), \\(t\\ge 0\\).

It is decreasing in \\(t\\), hence measurable. The layer-cake identity states that
the area under \\(f\\) equals the area under its tail function. Endpoint choices do
not affect the outer integral: for each fixed \\(x\\), the set of \\(t\\) with
\\(0\\le t<f(x)\\) has length \\(f(x)\\), while a single endpoint has length zero.

For powers, the same idea gives the useful identity

\\(\\int f^p d\\mu=p\\int _0^\\infty t^{p-1}\\mu(\\{f>t\\})dt\\), \\(p>0\\),

whenever \\(f\\ge 0\\). Apply the ordinary layer-cake identity already proved to
the nonnegative measurable function \\(f^p\\), then substitute \\(s=t^p\\) in its
one-dimensional tail integral. This gives

\\(\\int_0^\\infty \\mu(\\{f^p>s\\})\\,ds
=p\\int_0^\\infty t^{p-1}\\mu(\\{f>t\\})\\,dt\\).

This derivation does not import the product-measure theorem previewed below.
This form makes quantitative tail decay and \\(L^p\\) integrability
two sides of the same fact.

This formula turns function integration back into measurement of superlevel sets. It yields the tail identity for a nonnegative random variable and supports rearrangement inequalities.

### Markov's inequality

For \\(f\\ge 0\\) and \\(\\lambda>0\\),

\\(\\lambda\\,1_{\\{f\\ge \\lambda\\}}\\le f\\).

Integrating gives

\\(\\mu(\\{f\\ge \\lambda\\})\\le (1/\\lambda)\\int f\\).

Finite integral forces high-value sets to have small measure. The inequality gives scale-dependent control, not a pointwise bound.

The estimate is sharp. If \\(f=\\lambda\\,1_E\\), then
\\(\\{f\\ge \\lambda\\}=E\\) and both sides are \\(\\mu(E)\\). It also immediately implies that an
integrable function is finite almost everywhere: for \\(f\\ge 0\\) with finite
integral, the set \\(\\{f=\\infty\\}\\) lies inside \\(\\{f\\ge n\\}\\) for every \\(n\\), so its measure is
at most \\((1/n)\\int f\\) for every \\(n\\) and therefore is zero.

## 12. Riemann and Lebesgue integrals agree when both apply

Every bounded Riemann-integrable function on \\([a,b]\\) is Lebesgue measurable and Lebesgue integrable, and the two integrals agree.

This paragraph uses the standard Riemann-to-Lebesgue bridge theorem. One proof
constructs measurable lower and upper step functions from successively refined
partitions whose mesh tends to zero; their gaps tend to zero in integral and pointwise outside the null
set of discontinuities. This first establishes measurability of the Riemann-
integrable function. Its Lebesgue integral then lies between the same lower and
upper values, forcing equality. The full null-discontinuity characterization is
imported here rather than derived from an integral that has not yet been shown
to exist.

Lebesgue integration handles more functions. The indicator \\(1_Q\\) on \\([0,1]\\) is not Riemann integrable because every subinterval contains rational and irrational points, making every lower sum zero and every upper sum one. It is Lebesgue integrable because \\(Q\\cap [0,1]\\) is null, and its integral is zero.

The advantage is not that one answer corrects the other; the Riemann integral is undefined in this example, while the Lebesgue integral is defined.

The boundedness and finite-interval hypotheses matter in this comparison.
Riemann integration starts with bounded functions on compact intervals,
whereas Lebesgue integration permits unbounded functions and infinite measure
spaces. For a bounded function on \\([a,b]\\), the Lebesgue criterion says that
Riemann integrability is equivalent to having a null set of discontinuities.
This criterion explains why changing finitely or countably many values often
preserves Riemann integrability, but dense oscillation such as \\(1_Q\\) does not.

Agreement does not mean that every Lebesgue computation should be converted
into an antiderivative. Many measurable functions have no usable pointwise
formula. The definition through simple functions still assigns an integral
because it needs measurable level sets, not symbolic primitives.

## 13. Unbounded integrable functions

The function

\\(f(x)=x^{-p}\\) on \\((0,1]\\)

is nonnegative and measurable. Its Lebesgue integral equals the improper integral when the latter converges:

\\(\\int _0^1x^{-p}dx=1/(1-p)\\) for \\(p<1\\),

and is infinite for \\(p\\ge 1\\).

Truncate with \\(f_n=\\min(f,n)\\). These are bounded measurable functions increasing to \\(f\\); monotone convergence recovers the value from their integrals.

An infinite integral is a legitimate value for a nonnegative function. It means the function is measurable and its accumulated mass is infinite, not that the construction failed.

For signed functions, an improper integral and a Lebesgue integral agree when
the function is absolutely integrable. Conditional improper convergence is
different. Oscillation can make symmetric or one-sided truncations converge
even while \\(\\int |f|=\\infty\\); the resulting conditional value depends on the prescribed
limiting procedure and is not a Lebesgue integral over the whole domain.

### Two singularities, one threshold

On \\((0,1)\\), the function \\(x^{-p}\\) is integrable exactly for \\(p<1\\). On
\\((1,\\infty)\\), the same function is integrable exactly for \\(p>1\\). Near zero, larger
\\(p\\) creates too much mass at a singular point; near infinity, larger \\(p\\)
produces faster decay. Splitting an integral into local regions is often the
most efficient way to diagnose integrability.

## 14. Counting measure and series

On \\(N\\), define counting measure by \\(\\mu(E)=|E|\\), allowing infinity. Then for \\(f:N\\to [0,\\infty]\\),

\\(\\int f d\\mu=\\sum_{n=1}^\\infty f(n)\\).

Lebesgue integration therefore contains nonnegative infinite series as a special case. For signed functions, integrability is absolute summability:

\\(\\int |f|d\\mu=\\sum|f(n)|<\\infty\\).

Conditional series do not define integrable functions under counting measure because positive and negative masses are both infinite. Rearrangement sensitivity is the warning that absolute integrability avoids.

This example is more than an analogy. Define \\(f(n)=a_n\\) on \\(N\\). Positive and
negative parts of \\(f\\) are precisely the positive and negative term series.
The theorem that an absolutely convergent series may be rearranged without
changing its sum is the counting-measure instance of the fact that integrable
functions can be assembled over disjoint measurable pieces in any order.

## 15. Product measures and iterated integration preview

For sigma-finite measure spaces \\((X,M,\\mu)\\) and \\((Y,N,\\nu)\\), the standard product
measure assigns

\\((\\mu\\times \\nu)(A\\times B)=\\mu(A)\\nu(B)\\).

If one factor is zero and the other infinite, the rectangle is assigned measure
zero; this is the measure-theoretic convention for the displayed product. The
sigma-finite setting is the one used for the product and iterated-integration
theorems in this volume.

For nonnegative measurable \\(f(x,y)\\), Tonelli's theorem will permit

\\[\\int f d(\\mu\\times \\nu)=\\int [\\int f(x,y)d\\nu(y)]d\\mu(x)\\]

with infinite values allowed. For signed functions, Fubini's theorem requires absolute integrability before exchanging integration order.

This distinction echoes the difference between nonnegative series and conditionally convergent series. Order changes are safe under nonnegativity or absolute control, not from notation alone.

For an indicator of a measurable rectangle, the calculation is transparent:

\\(\\int 1_{A\\times B}d(\\mu\\times \\nu)=\\mu(A)\\nu(B)\\).

Integrating first in \\(y\\) gives \\(\\mu(A)\\nu(B)\\) again, since the inner integral is
\\(1_A(x)\\nu(B)\\). Finite nonnegative sums of rectangle indicators behave the same
way. This is only the rectangle case: arbitrary product-measurable sets are not
pointwise increasing limits of finite rectangle unions in general. The product-
measure construction and a monotone-class argument extend the equality from
rectangles to measurable indicators; arbitrary nonnegative simple functions and
then monotone approximation complete Tonelli's theorem. That extension is
imported in this preview. Fubini's theorem adds the signed case only after
\\(\\int |f|d(\\mu\\times \\nu)<\\infty\\) rules out competing infinite positive and negative masses.

## 16. A proof-safe workflow for integrals

When confronting a new measurable function, the following order of questions
prevents most invalid calculations.

1. **What is the measure space?** Lebesgue, counting, probability, and weighted
   measures can give different answers for the same formula.
2. **Is the function measurable?** The integral is defined only after this
   structural question is settled.
3. **Is the function nonnegative?** If so, its extended integral is always
   defined, though it may be infinite; monotone methods are available.
4. **If signs occur, is absolute integrability known?** Establish
   \\(\\int |f|<\\infty\\) before splitting, rearranging, or exchanging limits.
5. **Which approximation is justified?** Increasing truncations invite MCT;
   domination invites the dominated convergence theorem; arbitrary pointwise
   convergence alone is insufficient.
6. **Are null-set claims adequate for the desired conclusion?** They settle
   integral identities but may not preserve continuity or pointwise equations.

### Worked diagnostic

Consider \\(f(x)=\\sin(x)/x\\) on \\((0,\\infty)\\). It is measurable and signed. Its usual
improper integral converges by cancellation, but absolute integrability fails
at infinity. Therefore it is unsafe to declare \\(f\\) Lebesgue integrable or to
rearrange its positive and negative regions freely. By contrast,
\\(e^{-x}\\sin(x)\\) is dominated in absolute value by \\(e^{-x}\\), whose integral is
finite, so it is Lebesgue integrable and signed manipulations are justified.

## 17. Misconceptions and boundaries

- **Measurable means finite integral.** Nonnegative measurable functions may have integral \\(\\infty\\).
- **A finite signed cancellation proves integrability.** Integrability requires \\(\\int |f|<\\infty\\).
- **Changing a null set can change the integral.** It can change continuity and point values, but not the Lebesgue integral.
- **Simple means constant.** A simple function has finitely many values on measurable sets of arbitrary shape.
- **Every unbounded function is nonintegrable.** Mild singularities such as \\(x^{-1/2}\\) are integrable near zero.
- **Lebesgue and improper integration are unrelated.** For nonnegative or absolutely integrable functions, the values agree where the improper limit exists.
- **Integration order is always interchangeable.** Tonelli uses nonnegativity; Fubini uses absolute integrability.
- **A finite value from symmetric truncation is the Lebesgue integral.** A
  truncation convention can hide two infinite parts; verify absolute
  integrability.
- **Almost-everywhere equality preserves every analytic property.** It
  preserves the integral, but not necessarily continuity, extrema, or
  pointwise differential equations.
- **The notation \\(\\int _E f\\) introduces a different kind of integral.** It is
  shorthand for \\(\\int f\\,1_E\\) on the original measure space.

## Exercises

### MEASURE-INTEGRAL-E001 — Indicator measure

Integrate the indicator of [2,5] with Lebesgue measure.

<details><summary>Hint 1</summary>The indicator integral is the measure of its set.</details>
<details><summary>Hint 2</summary>Endpoints have zero measure.</details>
<details><summary>Full solution</summary>The integral is three. Altering either endpoint or assigning a different value at one point leaves that Lebesgue integral unchanged.</details>

### MEASURE-INTEGRAL-E002 — Disjoint levels

Integrate2 1_A+3 1_B when A,B are disjoint with measures4 and2.

<details><summary>Hint 1</summary>Use the simple-function formula.</details>
<details><summary>Hint 2</summary>Both terms are nonnegative.</details>
<details><summary>Full solution</summary>The integral is2·4+3·2=14. Disjointness makes these the direct level cells; overlapping representations would first be refined or treated by the proved simple linearity.</details>

### MEASURE-INTEGRAL-E003 — Overlap

For arbitrary finite-measure A,B, express the integral of1_A+1_B.

<details><summary>Hint 1</summary>Refine into intersection and two differences.</details>
<details><summary>Hint 2</summary>The intersection has height two.</details>
<details><summary>Full solution</summary>The integral is measure(A)+measure(B). On the intersection the height is two, and adding the three disjoint cell contributions proves the formula without assuming disjointness of A and B.</details>

### MEASURE-INTEGRAL-E004 — Signed parts

When is an extended real signed integral defined?

<details><summary>Hint 1</summary>Separate positive and negative parts.</details>
<details><summary>Hint 2</summary>Do not subtract two infinities.</details>
<details><summary>Full solution</summary>It is defined when at least one of the two nonnegative part integrals is finite. It is a finite integrable value when both are finite, equivalently when the absolute integral is finite.</details>

### MEASURE-INTEGRAL-E005 — Cancellation trap

Can equal positive and negative infinite part integrals be canceled to zero?

<details><summary>Hint 1</summary>Recall extended arithmetic.</details>
<details><summary>Hint 2</summary>A truncation choice can conceal the ambiguity.</details>
<details><summary>Full solution</summary>No. Infinity minus infinity is undefined. A principal-value or symmetric truncation can define another operation under additional rules, but does not turn this into a Lebesgue integrable function.</details>

### MEASURE-INTEGRAL-E006 — A power

For what real a is x^−a integrable on (0,1)?

<details><summary>Hint 1</summary>Compare the elementary improper integral.</details>
<details><summary>Hint 2</summary>Check a=1 separately.</details>
<details><summary>Full solution</summary>It is integrable exactly when a<1, with integral1/(1−a). At a=1 logarithmic divergence occurs, and for a>1 the positive power singularity has infinite integral.</details>

### MEASURE-INTEGRAL-E007 — Counting

What is integration of a nonnegative function on N with counting measure?

<details><summary>Hint 1</summary>Each singleton has mass one.</details>
<details><summary>Hint 2</summary>Use increasing finite partial sums.</details>
<details><summary>Full solution</summary>It is the nonnegative series of its values, allowed to be infinite. Finite signed integrability is exactly absolute summability, so a conditionally convergent series is not a finite counting-measure Lebesgue integral.</details>

### MEASURE-INTEGRAL-E008 — Null representative

Can a function equal infinity on a null set and zero elsewhere have nonnegative integral zero?

<details><summary>Hint 1</summary>Its simple minorants have positive levels only there.</details>
<details><summary>Hint 2</summary>Zero measure removes every finite-height contribution.</details>
<details><summary>Full solution</summary>Yes. Every nonnegative simple minorant integrates to zero, so the supremum definition gives zero. This uses the nonnegative integral and null geometry, without assigning an ordinary numerical value to infinity times zero.</details>

### MEASURE-INTEGRAL-E009 — Absolute bound

For integrable f and measurable E, prove absolute integral over E of f is at most the integral over E of its absolute value.

<details><summary>Hint 1</summary>Use signed or complex triangle control.</details>
<details><summary>Hint 2</summary>First argue for simple approximants, then the integral definition.</details>
<details><summary>Full solution</summary>The integral triangle inequality gives |integral_E f|≤integral_E|f|. Restriction multiplies by the measurable indicator; the result remains integrable because its absolute value is bounded by |f|.</details>

### MEASURE-INTEGRAL-E010 — A changed measure

Integrate1_{1,2,3} under counting and Lebesgue measure.

<details><summary>Hint 1</summary>The function stays the same.</details>
<details><summary>Hint 2</summary>Only the set size changes.</details>
<details><summary>Full solution</summary>The values are three and zero respectively. An integral belongs to a function together with its measure; the formula alone does not determine which geometry is intended.</details>

### MEASURE-INTEGRAL-E011 — Zero nonnegative integral

If f≥0 has integral zero, prove f=0 almost everywhere.

<details><summary>Hint 1</summary>Use the sets {f≥1/n}.</details>
<details><summary>Hint 2</summary>Each measure is bounded by n times the integral.</details>
<details><summary>Full solution</summary>On {f≥1/n}, the integral is at least its measure divided by n, so every such set is null. Their countable union is {f>0}, which is null. Literal zero at every point is not implied.</details>

### MEASURE-INTEGRAL-E012 — Riemann agreement

For continuous f on [a,b], why do its Riemann and Lebesgue integrals agree?

<details><summary>Hint 1</summary>Both lie between the same lower and upper step sums.</details>
<details><summary>Hint 2</summary>Uniform continuity makes their gap small.</details>
<details><summary>Full solution</summary>Interval step functions from a fine partition bound f above and below and have identical Riemann/Lebesgue values. Their integral gap tends to zero by uniform continuity, forcing both integrals to the same limit.</details>

## Sources and scope

The core mathematical sections are transferred from the original Real Analysis Lebesgue Integration chapter, preserving its hypotheses and proof boundaries. The original supported ANA-CH17 exercises and investigation remain in the first part; this part adds twelve original supported exercises. General product measure and representation results receive their own later proofs.

## Summary

The nonnegative integral is the supremum of simple minorants. Signed and complex integrals require controlled parts and absolute integrability; null changes preserve the result. Restriction, level sets, Riemann agreement, singularities and series connect the definition to concrete computations, while limit interchange retains the hypotheses proved in the next chapter.
`;export{e as default};