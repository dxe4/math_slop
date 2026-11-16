var e=`---
parent_id: book-complex-analysis
chapter_id: power-series-analytic-functions
title: "Power Series and Analytic Functions"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Power Series and Analytic Functions

A polynomial can be differentiated one term at a time because it is a finite sum. An infinite sum needs a theorem before the same operation is legitimate. The essential estimate is not merely convergence at each point: on every smaller closed disk inside a power series' convergence disk, both the series and its formal derivative converge uniformly. This allows one finite identity for polynomials to pass to a limit and produces a complex derivative.

The preparation is [Holomorphic Functions and Cauchy–Riemann](holomorphic-cauchy-riemann.md), and the real-analysis chapters on [uniform convergence](../proof-safe-real-analysis/uniform-convergence.md) and [power series](../proof-safe-real-analysis/power-series-and-analytic-functions.md). The shorter retained [Functions and Equations power-series reading](../functions-equations-proof/power-series.md) is an earlier source, with its own identity. We develop the complex theory here rather than reassigning that reading's exercises or notes.

We will define the radius of convergence, prove differentiability of power-series sums, identify coefficients through derivatives, and build the exponential and a local logarithm series. The order matters: a function defined by a series is not automatically differentiable because each of its summands is. Uniform convergence of the derivative series provides the missing argument.

## Radius of convergence and the interior of a disk

**Definition 3.1 (Power series).** A power series centered at \\(a\\in\\mathbb C\\) is
\\[
 \\sum_{n=0}^{\\infty}c_n(z-a)^n,
\\]
where each coefficient \\(c_n\\) is complex. Its partial sums are polynomials. Absolute convergence at \\(z\\) means convergence of the nonnegative real series \\(\\sum |c_n||z-a|^n\\).

**Theorem 3.2 (Radius theorem).** There is \\(R\\in[0,\\infty]\\) such that the series converges absolutely when \\(|z-a|<R\\) and diverges when \\(|z-a|>R\\). If
\\[
 L=\\limsup_{n\\to\\infty}|c_n|^{1/n},
\\]
then \\(R=1/L\\), with conventions \\(1/0=\\infty\\) and \\(1/\\infty=0\\). For every finite \\(r<R\\), the convergence is uniform on \\(|z-a|\\le r\\).

*Proof.* Set \\(t=|z-a|\\). If \\(tL<1\\), choose \\(q\\) strictly between these quantities and one. The definition of limsup gives \\(|c_n|^{1/n}t\\le q\\) for all sufficiently large \\(n\\), so \\(|c_n|t^n\\le q^n\\) eventually. The geometric series proves absolute convergence. If \\(tL>1\\), choose \\(q>1\\) below \\(tL\\). Infinitely many indices satisfy \\(|c_n|t^n\\ge q^n\\), so the terms do not tend to zero and convergence is impossible. The same arguments cover \\(L=0\\) and \\(L=\\infty\\) at positive \\(t\\). At the center only the constant term remains.

For uniform convergence on the smaller closed disk, choose \\(\\rho\\) with \\(r<\\rho<R\\). Absolute convergence at radius \\(\\rho\\) implies convergence of \\(\\sum |c_n|\\rho^n\\), and hence also of \\(\\sum |c_n|r^n\\). The modulus of every tail at a point of the disk is at most the corresponding tail of this latter real series, independent of the point. Its tails tend to zero. The uniform Cauchy criterion proves the assertion. ∎

Nothing in the proof decides the circle \\(|z-a|=R\\). There may be convergence everywhere on it, nowhere on it, or at some points only. This is a boundary question, not a defect in the radius theorem. A claim about the open convergence disk should not silently include its boundary.

The uniform limit on every smaller disk is continuous, since the partial sums are continuous and uniform limits preserve continuity. This is local uniform convergence: one common schedule works on a specified compact region inside the disk. If \\(R<\\infty\\), there need not be a common schedule over the entire open disk right up to its boundary.

**Worked example 3.3 (An exact sum and a tail certificate).** For \\(|z|<1\\), the finite geometric identity gives
\\[
 \\sum_{n=0}^{N}z^n=\\frac{1-z^{N+1}}{1-z}.
\\]
The power \\(z^{N+1}\\) tends to zero, so the sum is \\(1/(1-z)\\). On \\(|z|\\le r<1\\), its error after the \\(N\\)-th power has modulus at most \\(r^{N+1}/(1-r)\\). For \\(r=1/2\\), this is \\(2^{-N}\\), and \\(N=10\\) gives an error below \\(0.001\\). Every point of the unit circle has terms of modulus one, so the original series diverges at every boundary point, even though its rational sum extends holomorphically across many of them. A convergence disk belongs to a representation, not necessarily to the maximal domain of its sum.

## Differentiation needs a separate uniform estimate

Let \\(R>0\\). The formal derivative series is
\\[
 Q(z)=\\sum_{n=1}^{\\infty}n c_n(z-a)^{n-1}.
\\]
Its convergence on a smaller disk follows from the extra room between that disk and the convergence radius. Polynomial growth in \\(n\\) is absorbed by a geometric factor; this is the quantitative reason differentiation does not shrink the open disk.

**Lemma 3.4 (Uniform derivative series).** For \\(0<r<\\rho<R\\), the derivative series converges absolutely and uniformly on \\(|z-a|\\le r\\).

*Proof.* The convergent nonnegative series \\(\\sum |c_n|\\rho^n\\) has bounded terms, say \\(|c_n|\\rho^n\\le M\\). Therefore
\\[
 n|c_n|r^{n-1}\\le\\frac Mr n(r/\\rho)^n.
\\]
For \\(q=r/\\rho<1\\), the series \\(\\sum n q^n\\) converges. For example choose \\(q<s<1\\); the sequence \\(n(q/s)^n\\) is bounded, so its terms are at most a constant times \\(s^n\\). This gives a convergent geometric majorant. Uniform control of the derivative tails now follows as in the radius theorem. ∎

A small positive \\(r\\) can always be chosen around the center, so the factor \\(1/r\\) in the proof causes no exclusion of that point. It is a bound for a whole disk, not a demand that the variable itself be nonzero.

**Theorem 3.5 (Termwise complex differentiation).** Inside \\(|z-a|<R\\), the series sum \\(F\\) is holomorphic and
\\[
 F'(z)=\\sum_{n=1}^{\\infty}n c_n(z-a)^{n-1}.
\\]
It has derivatives of all orders there, and \\(F^{(n)}(a)=n!c_n\\).

*Proof.* Fix \\(z\\) in the disk, and choose a smaller closed disk containing a neighbourhood of \\(z\\). Both the partial sums \\(P_N\\) and their derivatives converge uniformly there, respectively to continuous functions \\(F\\) and \\(Q\\). For sufficiently small complex \\(h\\), the segment \\(z+th\\), \\(0\\le t\\le1\\), remains in that disk. The ordinary fundamental theorem applied to the real and imaginary parts of the polynomial along the segment gives
\\[
 P_N(z+h)-P_N(z)=h\\int_0^1 P_N'(z+th)\\,dt.
\\]
Uniform convergence permits taking the limit inside this real-parameter integral, since its error is bounded by the sup norm error of the integrands. Thus
\\[
 \\frac{F(z+h)-F(z)}h-Q(z)
 =\\int_0^1[Q(z+th)-Q(z)]\\,dt.
\\]
The modulus is bounded by the supremum of \\(|Q(w)-Q(z)|\\) for \\(|w-z|\\le|h|\\), which tends to zero by continuity of \\(Q\\). This is the complex derivative limit in all directions, so \\(F'=Q\\).

The differentiated series also has radius \\(R\\). Its radius is at least \\(R\\) by the lemma. Conversely, if it converges absolutely at a positive radius \\(t\\), then
\\(\\sum_{n\\ge1}|c_n|t^n\\le t\\sum_{n\\ge1}n|c_n|t^{n-1}<\\infty\\), so it cannot have an absolute-convergence radius larger than the original series. Repeating the differentiation proof gives all orders. At the center every term of the \\(n\\)-th derivative vanishes except the one with original index \\(n\\), yielding \\(n!c_n\\). ∎

The proof used a real interval integral of a continuous function, not a theorem about contour integrals or Cauchy's formula. There is no circular appeal to the integral theory we have yet to develop. It also explains why the result is stronger than uniform convergence of the functions alone: the uniformly convergent derivative sequence produced the continuous function \\(Q\\) controlling the difference quotient.

## Analyticity and uniqueness of coefficients

**Definition 3.6 (Analytic function).** A function on an open set is analytic if every point has a neighbourhood on which the function equals a convergent power series centered at that point.

Theorem 3.5 proves that an analytic function is holomorphic. The converse, that every holomorphic function is analytic, is a major theorem to be proved from Cauchy's integral formula. Until then the words describe different definitions, even when all examples presently constructed have both properties.

**Corollary 3.7 (Coefficient uniqueness).** If two power series centered at the same point represent the same function on a neighbourhood of that point, corresponding coefficients are equal.

*Proof.* Differentiate the common function \\(n\\) times at the center. Theorem 3.5 identifies this derivative as \\(n!\\) times either coefficient. Since \\(n!\\ne0\\), the coefficients agree for every \\(n\\). ∎

This is uniqueness for a fixed center and an actual neighbourhood of equality. Equality at finitely many sampled points is insufficient, since distinct polynomials can share those values. Equality on an infinite sequence approaching the center will eventually imply equality of analytic functions through an isolated-zero argument, but that needs an additional theorem and will appear in the zeros chapter.

A power series centered at one point can be expanded about another interior point. This follows by binomial expansion and absolute rearrangement on sufficiently small disks, or later directly from Cauchy's formula. Here we can verify such a recentering explicitly for rational examples instead of assuming every formal rearrangement is valid.

**Worked example 3.8 (The centre changes the radius).** For \\(F(z)=1/(2-z)\\), expand around zero:
\\[
 F(z)=\\frac12\\sum_{n=0}^{\\infty}(z/2)^n,
 \\qquad |z|<2.
\\]
Around one, put \\(w=z-1\\) and obtain
\\[
 F(z)=\\frac1{1-w}=\\sum_{n=0}^{\\infty}w^n,
 \\qquad |z-1|<1.
\\]
Both expressions equal the same rational function on their respective disks, and their common region gives consistent values. Their radii differ because their centers have different distances from the missing point two. This computation is an exact geometric-series argument; a drawing of nearby singularities alone would not prove an arbitrary series' radius.

Differentiating the first geometric identity gives
\\[
 \\frac1{(1-z)^2}=\\sum_{n=1}^{\\infty}n z^{n-1}
 =\\sum_{m=0}^{\\infty}(m+1)z^m,
 \\qquad |z|<1.
\\]
The reindexing is a shift of a convergent series, and Theorem 3.5 supplies differentiation. At a boundary point a new convergence argument would still be required; differentiating an interior formula does not authorize substituting \\(z=1\\).

## Building the exponential and a local logarithm

**Definition 3.9 (Exponential series).** Define
\\[
 E(z)=\\sum_{n=0}^{\\infty}\\frac{z^n}{n!}.
\\]
For any fixed bound \\(|z|\\le r\\), the ratio of successive nonnegative majorant terms is \\(r/(n+1)\\), eventually below one half. Hence the series converges everywhere, with uniform convergence on each bounded disk. The termwise theorem proves \\(E'=E\\) and \\(E(0)=1\\).

**Proposition 3.10 (Exponential addition and nonvanishing).** For all complex \\(z,w\\),
\\[
 E(z+w)=E(z)E(w),\\qquad E(z)\\ne0.
\\]

*Proof.* The double series of absolute values of products has sum
\\((\\sum |z|^n/n!)(\\sum |w|^m/m!)<\\infty\\). Therefore regrouping by total degree is justified. The degree \\(k\\) contribution is
\\[
 \\sum_{n=0}^k\\frac{z^nw^{k-n}}{n!(k-n)!}
 =\\frac{(z+w)^k}{k!}
\\]
by the finite binomial theorem. Summing proves addition. Taking \\(w=-z\\) gives \\(E(z)E(-z)=E(0)=1\\), so no value is zero. ∎

Absolute convergence is the reason the rearrangement was allowed. It is not safe to regroup an arbitrary conditionally convergent double series by whichever geometric pattern is convenient. The real exponential series agrees with the usual real exponential, and separation of even and odd terms gives \\(E(it)=\\cos t+i\\sin t\\) for real \\(t\\), using their real Taylor series. We may now identify the notation \\(e^{it}\\) from the preceding chapters with an actual entire function.

**Worked example 3.11 (A logarithm near one).** On \\(|z|<1\\), set
\\[
 L(z)=\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}z^n}{n}.
\\]
Its derivative is the geometric series \\(1/(1+z)\\), and \\(L(0)=0\\). Define \\(H(z)=E(L(z))/(1+z)\\). The calculus rules and \\(E'=E\\) give
\\[
 H'(z)=\\frac{E(L(z))L'(z)(1+z)-E(L(z))}{(1+z)^2}=0.
\\]
The disk is a domain, so \\(H\\) is constant; at zero it equals one. Thus \\(E(L(z))=1+z\\) throughout the disk. The series constructs a logarithm of \\(1+z\\) on this specific region. It does not produce a single logarithm on the punctured plane. The next chapter explains why choosing a region and branch is unavoidable.

## Boundary questions and invalid limit passages

The series \\(\\sum z^n/n^2\\), starting at \\(n=1\\), has radius one and converges absolutely at every point of the unit circle, because \\(|z^n/n^2|=1/n^2\\) there. Its derivative series inside the disk is \\(\\sum z^{n-1}/n\\); at \\(z=1\\) that becomes the divergent harmonic series. This does not contradict Theorem 3.5, whose conclusion concerns interior points only.

Even uniform convergence of a series on a closed disk does not automatically imply that its sum is complex differentiable at the boundary in the sense used here: the derivative definition requires a function on an open neighbourhood. A boundary point may lack such a neighbourhood in the original domain. One must first define and justify an extension before asking whether it is holomorphic there.

For practical use, keep three questions separate: where a series converges, where its sum is holomorphic, and where a particular representation equals a separately given function. The radius theorem answers the first in the interior and exterior. The derivative theorem answers the second inside the open disk. Algebraic identities, initial conditions or later integral formulas establish the third. None of these questions is answered by a plot of a few partial sums alone.

## Exercises

### Exercise 3.1 {#power-series-analytic-functions-ex-1}

Find the radius of convergence of \\(\\sum_{n\\ge0}3^n(z-2)^n\\), identify the sum, and state its exact convergence set.

<details><summary>Hint 1</summary>
The ratio in the geometric series is \\(3(z-2)\\).
</details>
<details><summary>Hint 2</summary>
On the boundary every term has modulus one.
</details>
<details><summary>Solution</summary>
The radius is \\(1/3\\), and the sum is \\(1/[1-3(z-2)]\\) for \\(|z-2|<1/3\\). Outside that disk the terms grow in modulus; on its boundary they have modulus one and do not tend to zero. Thus the convergence set is exactly the open disk. The rational function itself is defined at points outside that disk other than its pole, but this particular series does not represent it there.
</details>

### Exercise 3.2 {#power-series-analytic-functions-ex-2}

Determine the radii of \\(\\sum z^n/n!\\), \\(\\sum n!z^n\\), and \\(\\sum z^n/n^2\\), with the last series starting at one.

<details><summary>Hint 1</summary>
For the factorial series compare successive absolute terms at a fixed positive radius.
</details>
<details><summary>Hint 2</summary>
For the last series, \\(n^{2/n}\\to1\\).
</details>
<details><summary>Solution</summary>
The first has radius infinity, as proved above by an eventual geometric ratio bound. For the second, at any nonzero \\(z\\), the ratio of successive absolute terms is \\((n+1)|z|\\), eventually above two, so terms cannot tend to zero; its radius is zero. The last has coefficient root \\(n^{-2/n}\\to1\\), hence radius one. At every boundary point it converges absolutely by comparison with \\(\\sum1/n^2\\).
</details>

### Exercise 3.3 {#power-series-analytic-functions-ex-3}

Show that \\(\\sum_{n\\ge0}z^{2n}\\) represents \\(1/(1-z^2)\\) on the unit disk, and compute its derivative there.

<details><summary>Hint 1</summary>
Use a geometric series in \\(z^2\\).
</details>
<details><summary>Hint 2</summary>
Apply the termwise differentiation theorem in the interior.
</details>
<details><summary>Solution</summary>
Since \\(|z^2|<1\\), the geometric identity gives the stated sum. The derivative is both \\(\\sum_{n\\ge1}2n z^{2n-1}\\) and \\(2z/(1-z^2)^2\\). The derivative series converges uniformly on each smaller closed disk. This is an equality of holomorphic functions on \\(|z|<1\\), with no assertion of convergence at \\(z=\\pm1\\).
</details>

### Exercise 3.4 {#power-series-analytic-functions-ex-4}

If \\(F(z)=\\sum c_nz^n\\) near zero, find \\(c_0,c_1,c_3\\) from the values \\(F(0)=2\\), \\(F'(0)=-i\\), \\(F'''(0)=12\\).

<details><summary>Hint 1</summary>
Recall the factorial in the derivative-coefficient formula.
</details>
<details><summary>Hint 2</summary>
The third derivative contributes \\(3!\\), not three.
</details>
<details><summary>Solution</summary>
The coefficients are \\(c_0=2\\), \\(c_1=-i\\), and \\(c_3=12/6=2\\). These data leave all other coefficients undetermined. In particular derivative values through selected orders do not identify an entire analytic function; uniqueness requires all coefficients, or stronger information supplied by an appropriate theorem.
</details>

### Exercise 3.5 {#power-series-analytic-functions-ex-5}

Find the power series for \\(1/(3-z)\\) centered at one, and prove its radius is two.

<details><summary>Hint 1</summary>
Write \\(3-z=2-(z-1)\\).
</details>
<details><summary>Hint 2</summary>
Apply the geometric convergence criterion to \\((z-1)/2\\).
</details>
<details><summary>Solution</summary>
The expansion is \\(\\sum_{n\\ge0}(z-1)^n/2^{n+1}\\). It converges exactly for \\(|z-1|<2\\), since the geometric ratio has modulus below one precisely there and its terms fail to tend to zero at larger or equal modulus. Thus the radius is two. The location of the pole at three is consistent with the calculation, but the geometric criterion establishes it directly.
</details>

### Exercise 3.6 {#power-series-analytic-functions-ex-6}

Prove \\(\\sum_{n\\ge0}(n+1)z^n=1/(1-z)^2\\) for \\(|z|<1\\), and explain why the formula cannot be evaluated at \\(z=-1\\) by substituting into the series.

<details><summary>Hint 1</summary>
Differentiate the geometric series before reindexing.
</details>
<details><summary>Hint 2</summary>
Inspect the terms at \\(-1\\), rather than only the rational expression.
</details>
<details><summary>Solution</summary>
Termwise differentiation yields \\(\\sum_{n\\ge1}n z^{n-1}=1/(1-z)^2\\) in the open disk; shifting the index gives the desired formula. At \\(z=-1\\), the terms \\((n+1)(-1)^n\\) do not approach zero, so the series diverges. The rational function has value \\(1/4\\) there, but that is a value of its extension, not a sum of the divergent ordinary series.
</details>

### Exercise 3.7 {#power-series-analytic-functions-ex-7}

Give a uniform error bound for truncating \\(\\sum_{n\\ge1}z^n/n^2\\) after index \\(N\\) on \\(|z|\\le1/2\\).

<details><summary>Hint 1</summary>
Discard the helpful denominator to obtain a geometric majorant.
</details>
<details><summary>Hint 2</summary>
You can retain the bound \\(n^{-2}\\le(N+1)^{-2}\\) for a sharper estimate.
</details>
<details><summary>Solution</summary>
The tail modulus is at most \\(\\sum_{n>N}2^{-n}/n^2\\). Since \\(n\\ge N+1\\), this is bounded by \\((N+1)^{-2}\\sum_{n>N}2^{-n}=2^{-N}/(N+1)^2\\). The bound is independent of \\(z\\), so it proves a uniform approximation certificate on the whole closed half-unit disk.
</details>

### Exercise 3.8 {#power-series-analytic-functions-ex-8}

Prove that \\(E(z)E(-z)=1\\), and deduce that the complex exponential never vanishes.

<details><summary>Hint 1</summary>
Use the proved addition identity rather than a formal cancellation of infinite sums.
</details>
<details><summary>Hint 2</summary>
The exponential at zero is its constant coefficient.
</details>
<details><summary>Solution</summary>
Proposition 3.10 gives \\(E(z)E(-z)=E(0)=1\\). If \\(E(z_0)=0\\), the left side at \\(z_0\\) would equal zero, contradicting one. The addition identity itself was justified by absolute convergence of the double product series; nonvanishing does not rely on an inverse logarithm existing globally.
</details>

### Exercise 3.9 {#power-series-analytic-functions-ex-9}

For the logarithm series \\(L\\), show that its first four nonzero terms are \\(z-z^2/2+z^3/3-z^4/4\\), and bound the remaining modulus on \\(|z|\\le r<1\\).

<details><summary>Hint 1</summary>
Apply the triangle inequality to the tail beginning at index five.
</details>
<details><summary>Hint 2</summary>
Use \\(1/n\\le1/5\\) for all remaining indices.
</details>
<details><summary>Solution</summary>
The signs follow directly from \\((-1)^{n+1}\\). The tail is bounded by \\(\\sum_{n\\ge5}r^n/n\\le r^5/[5(1-r)]\\). The estimate controls complex arguments without an alternating-series argument, which would apply only to an ordered real expression with the necessary sign pattern.
</details>

### Exercise 3.10 {#power-series-analytic-functions-ex-10}

If a power-series sum is zero on a neighbourhood of its center, prove every coefficient is zero. Explain why agreement at the center alone is insufficient.

<details><summary>Hint 1</summary>
Differentiate the zero function at the center to every order.
</details>
<details><summary>Hint 2</summary>
Compare the zero function with \\(z-a\\) at their common center.
</details>
<details><summary>Solution</summary>
All derivatives at the center vanish. The coefficient formula gives \\(n!c_n=0\\), hence \\(c_n=0\\) for every \\(n\\). Equality just at the center determines only the constant coefficient. For instance the zero function and \\(z-a\\) both vanish at \\(a\\), but their linear coefficients differ. A neighbourhood of equality supplies the higher derivative information missing from one value.
</details>

### Exercise 3.11 {#power-series-analytic-functions-ex-11}

Let \\(\\sum c_nz^n\\) have positive radius \\(R\\). Define \\(G(z)=\\sum c_nz^{n+1}/(n+1)\\). Prove \\(G'=\\sum c_nz^n\\) on \\(|z|<R\\).

<details><summary>Hint 1</summary>
First establish convergence of the new series on every smaller disk.
</details>
<details><summary>Hint 2</summary>
Then use Theorem 3.5, rather than assuming integration of an infinite series.
</details>
<details><summary>Solution</summary>
For \\(|z|\\le r<R\\), the sum of absolute values is at most \\(r\\sum |c_n|r^n\\), which is finite. Thus the new power series has radius at least \\(R\\). The termwise theorem applies there, differentiating \\(c_nz^{n+1}/(n+1)\\) to \\(c_nz^n\\). This constructs an antiderivative on the convergence disk directly, with \\(G(0)=0\\), without asserting a primitive on an arbitrary punctured domain.
</details>

### Exercise 3.12 {#power-series-analytic-functions-ex-12}

A student says: “Since \\(\\sum z^n/n^2\\) converges on \\(|z|\\le1\\), its derivative at one equals \\(\\sum1/n\\).” Identify two distinct gaps.

<details><summary>Hint 1</summary>
The theorem's differentiation conclusion is restricted to the open disk.
</details>
<details><summary>Hint 2</summary>
A derivative in this book is defined for a function on an open neighbourhood.
</details>
<details><summary>Solution</summary>
First, convergence on the boundary does not give convergence of the formal derivative there; the harmonic series in the proposed expression diverges, while Theorem 3.5 only concerns \\(|z|<1\\). Second, the series-defined function on the closed disk has not been extended to any open neighbourhood of one, so the complex derivative at that point is not even defined in the chapter's sense. Any extension and its differentiability would need a separate argument. Neither gap is repaired by calculating the first few partial sums.
</details>

## Worked example: a power series and its integrated companion

For \\(|z|<1\\), start from the geometric series and integrate its polynomial partial sums along the straight segment from zero to \\(z\\). Uniform convergence on every smaller disk permits passing to the limit in the real parameter integral. The result is
\\[
 \\sum_{n=0}^{\\infty}\\frac{z^{n+1}}{n+1}=\\int_0^z\\frac{dw}{1-w},
\\]
where the integral is along that segment and is well defined within the disk. At this stage no general path-independence theorem is needed: the expression is simply the limit of elementary polynomial antiderivatives. Its derivative is \\(1/(1-z)\\) by Theorem 3.5. The series is therefore a specific analytic logarithm of \\(1/(1-z)\\) after the exponential identity from this chapter is used, with the value zero fixed at the center.

The coefficients \\(1/(n+1)\\) have root limsup one, so the radius remains one despite the integration. At \\(z=1\\) the real harmonic series diverges, whereas at \\(z=-1\\) the alternating series converges. The boundary behavior is genuinely different at the two points. Interior termwise integration supplies no claim of uniform convergence on the full closed unit disk, nor any license to differentiate the boundary value at \\(-1\\). This example connects the abstract radius theorem to a concrete change in boundary convergence caused by dividing coefficients by \\(n+1\\).

One can also compare truncation errors quantitatively. For \\(|z|\\le r<1\\), the tail after degree \\(N\\) has modulus at most
\\[
 \\sum_{n>N}\\frac{r^{n+1}}{n+1}\\le\\frac{r^{N+2}}{(N+2)(1-r)}.
\\]
The inequality uses \\(n+1\\ge N+2\\) in the tail and then sums a geometric series. At a fixed interior radius, integration improves the certificate by a factor of order \\(1/N\\), even though it leaves the convergence radius unchanged. When evaluating such a series numerically, choosing the smaller disk first provides an error bound that applies simultaneously to every point in the chosen region.

## Sources and scope

This is original exposition using the Euler real-analysis power-series chapter and the retained Functions and Equations source as local lineage. The full-book benchmarks are Ahlfors and Stein–Shakarchi. We proved analytic implies holomorphic and justified every termwise derivative used here. The converse, the identity theorem, arbitrary analytic continuation and boundary summability are later results rather than tacit assumptions.

## Summary

A power series has a disk of absolute convergence, uniform convergence on every smaller closed disk, and a derivative series controlled by the same interior radius. Passing a polynomial identity through those uniform limits proves holomorphicity and the coefficient formula. Geometric and exponential series give exact examples, while the logarithm series constructs a specific local inverse. Boundary convergence and continuation remain separate questions. The next chapter develops exponential, logarithmic and power functions with explicit branch domains.
`;export{e as default};