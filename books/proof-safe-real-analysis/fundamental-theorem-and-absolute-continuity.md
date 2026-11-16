
# The Fundamental Theorem and Its Boundaries

**Scope of the current route.** The classical route uses the Riemann fundamental theorem, Newton–Leibniz, parts and substitution. The absolute-continuity and Cantor-function development now belongs to [Measure and Integration, chapter 12](../measure-and-integration/differentiation-absolute-continuity-bv.md). The stable section pointers, original exercises and comparison project remain here. Their measure-theoretic conclusions need that continuation, including [the Lebesgue integral](../measure-and-integration/lebesgue-integral.md) and [convergence theorems](../measure-and-integration/measure-convergence-theorems.md); the classical theorem alone does not establish them.

Differentiation measures local change; integration accumulates change. The fundamental theorem of calculus links them, but not through a single hypothesis-free equation. There are two directions, each with its own assumptions:

1. accumulating a sufficiently regular function produces an antiderivative;
2. integrating the derivative of a sufficiently regular function recovers total change.

The phrase “sufficiently regular” carries the mathematics. A bounded Riemann-integrable function may be discontinuous, yet its accumulation function is still continuous and is differentiable at every continuity point of the integrand. A differentiable function can have a badly behaved derivative. A continuous function can increase while having derivative zero almost everywhere if absolute continuity is absent.

This chapter develops the classical Riemann theorem completely, then maps its boundary and explains why absolute continuity is the correct later replacement. It assumes Darboux sums, continuity, compactness, and the mean value theorem.

## 1. Accumulation functions are controlled before they are differentiated

Let \(f:[a,b]\to R\) be Riemann integrable, and define

\(F(x)=\int _a^x f(t)dt\).

Because every Riemann-integrable function on a compact interval is bounded, choose \(M\) with \(|f(t)|\le M\). For \(x<y\), additivity of the integral gives

\(F(y)-F(x)=\int _x^y f(t)dt\).

Therefore

\(|F(y)-F(x)|\le \int _x^y |f(t)|dt\le M|y-x|\).

Thus \(F\) is Lipschitz, hence uniformly continuous, even if \(f\) is not continuous. Accumulation smooths bounded local irregularities at least enough to produce global continuity.

### Orientation convention

For \(x<a\), if the function is integrable on the segment, define

\(\int _a^x f=-\int _x^a f\).

This convention makes additivity hold without repeatedly sorting endpoints:

\(\int _a^c f=\int _a^b f+\int _b^c f\).

The sign records orientation, not negative area.

## 2. The average-value identity drives differentiation

For \(h\ne 0\) with \(x\) and \(x+h\) in \([a,b]\),

\([F(x+h)-F(x)]/h = (1/h)\int _x^{x+h} f(t)dt\).

The difference quotient of the accumulation function is the average value of \(f\) over a shrinking interval. Subtract \(f(x)\):

\([F(x+h)-F(x)]/h-f(x)=(1/h)\int _x^{x+h}[f(t)-f(x)]dt\).

Taking absolute values and handling either sign of \(h\),

\(|[F(x+h)-F(x)]/h-f(x)|\le \sup_{t \text{ between } x \text{ and } x+h}|f(t)-f(x)|\).

If \(f\) is continuous at \(x\), the supremum on the right tends to zero as \(h\to 0\). Hence \(F'(x)=f(x)\).

This proof is more informative than the mnemonic “integral and derivative cancel.” It says shrinking local averages converge to the point value at continuity points.

## 3. Fundamental theorem, accumulation form

**Fundamental theorem of calculus, Part I.** Let \(f:[a,b]\to R\) be Riemann integrable and define \(F(x)=\int _a^x f\). Then \(F\) is continuous on \([a,b]\). At every interior point where \(f\) is continuous, \(F\) is differentiable and \(F'(x)=f(x)\). At continuous endpoints, the corresponding one-sided derivatives have the same value.

If \(f\) is continuous on all of \([a,b]\), then \(F'=f\) throughout the interior. Every continuous function therefore has an antiderivative.

### Worked example 1 (a changed point value)

### A discontinuity that does not survive accumulation

Define \(f(0)=7\) and \(f(x)=0\) for \(x\ne 0\) on \([-1,1]\). Changing a bounded function at one point does not change its Riemann integral. Thus

\[F(x)=\int _0^x f(t)dt=0\]

for every \(x\), and \(F'(0)=0\), not \(f(0)=7\). Continuity at the point is sufficient for the derivative identity; without it the identity can fail, as it does here because the local averages converge to zero rather than to the assigned point value.

### Worked example 2 (a corner in the accumulator)

### A jump becomes a corner

Let \(f(t)=0\) for \(t<0\) and \(f(t)=1\) for \(t\ge 0\). Its accumulation from zero is

\(F(x)=0\) for \(x\le 0\), and \(F(x)=x\) for \(x\ge 0\).

The function \(F\) is continuous but not differentiable at zero. Its one-sided derivatives reproduce the one-sided values of the step. A jump in the integrand becomes a corner in the accumulator.

## 4. Fundamental theorem, evaluation form

**Fundamental theorem of calculus, Part II.** If \(f\) is continuous on \([a,b]\), \(G\) is continuous on \([a,b]\), and \(G'=f\) on \((a,b)\), then

\(\int _a^b f(x)dx=G(b)-G(a)\).

Let \(F(x)=\int _a^x f\). Part I gives \(F'=f=G'\) on \((a,b)\). Hence \((F-G)'=0\), so the mean value theorem makes \(F-G\) constant. Since \(F(a)=0\),

\(F(x)=G(x)-G(a)\).

Set \(x=b\).

The proof uses the interval domain when it concludes that zero derivative implies constancy. It uses continuity of \(f\) to build an antiderivative by accumulation. It uses the mean value theorem to compare antiderivatives.

### Antiderivatives differ by constants

If \(G'=H'=f\) on an interval, then \((G-H)'=0\), so \(G-H\) is constant. The statement can fail across disconnected domains: separate components may carry different constants.

## 5. A stronger evaluation theorem for Riemann-integrable derivatives

Continuity of \(f\) is a convenient sufficient condition, but the evaluation direction can be stated differently.

**Theorem 12.1 (Newton–Leibniz).** Suppose \(G\) is continuous on \([a,b]\), differentiable on \((a,b)\), and \(G'\) is Riemann integrable on \([a,b]\) after assigning arbitrary endpoint values. Then

\(\int _a^b G'(x)dx=G(b)-G(a)\).

To see the mechanism, take a partition \(a=x_0<\ldots<x_n=b\). On each subinterval, the mean value theorem supplies \(c_i\in (x_{i-1},x_i)\) with

\(G(x_i)-G(x_{i-1})=G'(c_i)(x_i-x_{i-1})\).

Summing telescopes:

\(G(b)-G(a)=\sum G'(c_i)\Delta x_i\).

The right side is a tagged Riemann sum for \(G'\). Integrability forces such sums to converge to the integral as the mesh shrinks.

Not every derivative is Riemann integrable. Derivatives have the intermediate value property, but they may be unbounded or discontinuous on large sets. Differentiability alone therefore does not license Newton–Leibniz through the Riemann integral.

## 6. Integration by parts is the product rule accumulated

If \(u,v\) have continuous derivatives on \([a,b]\), the product rule gives

\((uv)'=u'v+uv'\).

Integrating and applying Part II yields

\(\int _a^b u(x)v'(x)dx=[u(x)v(x)]_a^b-\int _a^b u'(x)v(x)dx\).

The boundary term is part of the identity. Omitting it changes a definite integral into a false statement.

### Worked example

Take \(u=x\) and \(v'=e^x\). Then \(v=e^x\), so

\(\int _0^1 xe^x dx=[xe^x]_0^1-\int _0^1e^x dx=e-(e-1)=1\).

The formula trades one derivative for another. A successful choice makes the remaining integral simpler and keeps endpoint terms computable.

## 7. Substitution is the chain rule accumulated

Suppose \(\varphi:[\alpha,\beta]\to [a,b]\) is continuously differentiable and \(f\) is continuous on a region containing \(\varphi([\alpha,\beta])\). If \(G'=f\), then the chain rule gives

\((G\circ \varphi)'(t)=f(\varphi(t))\varphi'(t)\).

Therefore

\(\int _\alpha^\beta f(\varphi(t))\varphi'(t)dt=G(\varphi(\beta))-G(\varphi(\alpha))=\int _{\varphi(\alpha)}^{\varphi(\beta)}f(x)dx\).

The orientation is automatic. The map \(\varphi\) need not be increasing for this one-dimensional formula; reversals and retracing are recorded by the sign of \(\varphi'\).

### Worked example with reversal

Let \(\varphi(t)=1-t\) on \([0,1]\). Then

\(\int _0^1 f(1-t)(-1)dt=\int _1^0 f(x)dx=-\int _0^1f(x)dx\).

If the minus sign is moved to the other side, the familiar positive substitution formula appears.

## 8. Differentiation under a parameter requires uniform control

Let

\(F(x)=\int _a^b g(x,t)dt\).

It is tempting to write

\(F'(x)=\int _a^b \partial g/\partial x(x,t)dt\).

This is a limit interchange. One classical sufficient theorem assumes \(g\) and its partial derivative in \(x\) are continuous on a compact rectangle. For small \(h\), the one-variable mean value theorem in the \(x\) variable writes

\([g(x+h,t)-g(x,t)]/h=\partial g/\partial x(\xi_{h,t},t)\).

Uniform continuity of the partial derivative on the compact rectangle controls all \(t\) with one choice of \(h\), allowing the difference quotient to converge uniformly before integration.

### Worked example

For

\(F(x)=\int _0^1 e^{xt}dt\),

the integrand and its \(x\)-derivative \(t e^{xt}\) are continuous on every compact \(x\)-interval times \([0,1]\). Hence

\(F'(x)=\int _0^1 t e^{xt}dt\).

At \(x=0\), this gives \(F'(0)=\int _0^1t dt=1/2\) without first simplifying \(F(x)=(e^x-1)/x\) away from zero.

## 9. Absolute continuity controls many small intervals at once

The definition, Lipschitz implication and bounded-variation argument continue in [Measure and Integration, chapter 12](../measure-and-integration/differentiation-absolute-continuity-bv.md#9-absolute-continuity-controls-many-small-intervals-at-once). They require the measure route when used with the almost-everywhere theorem. The original ANA-CH13 exercises below keep their identities and solutions.

## 10. The later complete theorem

The full [fundamental theorem for absolutely continuous functions](../measure-and-integration/differentiation-absolute-continuity-bv.md#the-full-fundamental-theorem-for-absolute-continuity) is proved in the measure continuation. Absolute continuity gives exact recovery by the integrable almost-everywhere derivative; the classical Riemann theorem established above remains the theorem used in this chapter's primary route.

## 11. The Cantor function marks the boundary

The [Cantor function and its retained finite-stage figure](../measure-and-integration/differentiation-absolute-continuity-bv.md#11-the-cantor-function-marks-the-boundary) show why a continuous increasing function may have derivative zero almost everywhere and still increase from zero to one. Its change is singular rather than absolutely continuous. The original comparison exercises and project remain below; their full measure-theoretic explanation is in that continuation.

## 12. Improper integrals are limits, not direct FTC instances

For a singular endpoint, notation such as

\[\int _0^1 x^{-p}dx\]

means

\(\lim_{\varepsilon\downarrow 0}\int _\varepsilon^1x^{-p}dx\),

provided the limit exists. The classical FTC evaluates each proper truncated integral, but convergence of the outer limit is a separate question.

For \(p\ne 1\),

\(\int _\varepsilon^1x^{-p}dx=[1-\varepsilon^{1-p}]/(1-p)\).

The limit is finite exactly when \(p<1\). For \(p=1\), the value is \(-\log \varepsilon\), which diverges. An antiderivative formula does not by itself turn a divergent improper integral into a finite number.

The same separation applies on infinite intervals. First integrate on \([a,R]\), then analyze \(R\to \infty\).

## 13. A hypothesis ledger for the theorem family

Use the following distinctions.

- **Bounded Riemann-integrable \(f\):** \(F(x)=\int _a^x f\) is Lipschitz.
- **\(f\) continuous at \(x\):** the accumulator satisfies \(F'(x)=f(x)\).
- **\(f\) continuous on \([a,b]\):** the accumulator is an antiderivative everywhere inside, and any antiderivative evaluates the integral.
- **Differentiable \(G\) with Riemann-integrable \(G'\):** Newton–Leibniz recovers endpoint change.
- **Absolutely continuous \(G\):** after Lebesgue theory, \(G'\) exists almost everywhere and recovers \(G\) by integration.
- **Merely continuous or bounded-variation \(G\):** recovery from the almost-everywhere derivative can fail.
- **Improper domain or singularity:** a further limiting argument is mandatory.

The notation \(\int f'=f\) conceals all of these layers. A proof should name the layer it uses.

## 14. Misconceptions and counterexamples

- **Changing one point changes the integral.** A bounded one-point change leaves the Riemann integral unchanged.
- **The accumulator's derivative always equals the integrand.** Equality is guaranteed at continuity points; a badly assigned point value can disappear under integration.
- **Every derivative is continuous.** Derivatives can be discontinuous, though they satisfy the intermediate value property.
- **Every derivative is Riemann integrable.** A derivative may be unbounded or discontinuous too widely.
- **Derivative zero almost everywhere implies constant.** It does for absolutely continuous functions, not for the Cantor function.
- **Uniform continuity implies absolute continuity.** The Cantor function is a counterexample.
- **Substitution requires a one-to-one increasing map.** The oriented chain-rule formula does not, although alternative area interpretations may.
- **An antiderivative makes an improper integral converge.** The truncated endpoint limit must still exist.

## Derivatives have intermediate values even when discontinuous

**Darboux's theorem for derivatives.** If \(F\) is differentiable on an open interval, its derivative takes every value between any two of its values.

Choose \(a<b\) in that interval and a number \(\lambda\) strictly between \(F'(a)\) and \(F'(b)\). Suppose first that the derivative at \(a\) is below \(\lambda\) and the derivative at \(b\) is above it. Put \(G(x)=F(x)-\lambda x\). Continuity gives a minimum of \(G\) on the compact interval. That minimum cannot occur at \(a\), because its negative derivative there makes some sufficiently close right-hand value smaller. It cannot occur at \(b\), because its positive derivative there makes some sufficiently close left-hand value smaller. Therefore a minimum occurs at an interior point \(c\). Fermat's derivative condition gives \(G'(c)=0\), hence \(F'(c)=\lambda\). If the endpoint derivative ordering is reversed, use a maximum instead; its exclusion from the endpoints follows from the reversed signs. Values equal to the two original derivatives are already attained.

No continuity of the derivative was assumed. Connectedness of its image follows from an extremum argument for the original differentiable function, rather than from the continuous-image theorem applied to the derivative. This distinction prevents a circular proof that silently assumes the very regularity being discussed.

For example a step function taking minus one to the left of zero and one to the right cannot be a derivative throughout an interval containing zero, whatever single value is assigned at zero. Choose a number strictly between minus one and one different from that assigned value. The intermediate-value property would require the derivative to take it somewhere, but the proposed function never does. Derivative discontinuities can oscillate; an isolated jump is impossible.

The function \(F(x)=x^2\sin(1/x)\) away from zero, with \(F(0)=0\), illustrates the oscillatory alternative. The difference quotient at zero tends to zero. Elsewhere the derivative is \(2x\sin(1/x)-\cos(1/x)\), which has no limit at zero. Nevertheless it is bounded on a compact interval and is continuous outside that one input. It is Riemann integrable: isolate zero in a sufficiently short interval, where boundedness controls the contribution to the upper-minus-lower sum; on the two remaining compact pieces uniform continuity supplies partitions with small oscillation sums. This is an elementary Darboux-sum argument, requiring no later measure criterion. The stronger Riemann evaluation theorem in this chapter therefore recovers its endpoint change despite its discontinuous derivative.

### The Riemann derivative also recovers total variation

Suppose \(F\) is continuous on a compact interval, differentiable in its interior, and has a bounded derivative whose chosen endpoint values make it Riemann integrable. Its variation equals the Riemann integral of \(|F'|\). For one inequality, apply Newton–Leibniz on every subinterval of a partition, bound each absolute increment by the integral of the absolute derivative, and add. Taking the supremum over partitions gives variation at most that integral.

For the reverse inequality take partitions with mesh tending to zero. The mean value theorem on each subinterval supplies an interior tag whose derivative times the interval length equals that increment. The corresponding sum of absolute increments is therefore a tagged Riemann sum for \(|F'|\). Since the absolute value of a Riemann-integrable function is Riemann integrable, these sums converge to its integral. Every such sum is bounded by the variation supremum, giving the opposite inequality. Endpoint assignments do not enter the selected interior tags and do not alter the integral.

This identity records all rises and falls, rather than only the signed endpoint difference. It remains a classical theorem under the stated Riemann hypothesis. The measure continuation shows why merely having an integrable almost-everywhere derivative for a bounded-variation function is weaker: a singular remainder can contribute variation that the derivative integral misses.

## Exercises with complete solutions

### ANA-CH13-E001 — Exercise 1: Lipschitz accumulator

Let \(f\) be Riemann integrable on \([a,b]\) with \(|f|\le 7\). Show \(F(x)=\int _a^x f\) is 7-Lipschitz.

<details><summary>Hint 1</summary>

Subtract the two accumulation values using interval additivity.

</details>

<details><summary>Hint 2</summary>

The integral bound over the segment between x and y gives 7 times its length.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E001 — Solution

For any \(x,y\), orientation and additivity give \(F(y)-F(x)=\int _x^y f\). Hence
\(|F(y)-F(x)|\le |\int _x^y f|\le 7|y-x|\).

</details>

### ANA-CH13-E002 — Exercise 2: Differentiate an accumulation

Let \(F(x)=\int _0^x \cos(t^2)dt\). Find \(F'(x)\).

<details><summary>Hint 1</summary>

Check continuity of the integrand at the moving upper endpoint.

</details>

<details><summary>Hint 2</summary>

Apply the first fundamental theorem without finding an elementary antiderivative.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E002 — Solution

The integrand \(\cos(t^2)\) is continuous everywhere. Part I of the fundamental theorem gives \(F'(x)=\cos(x^2)\).

</details>

### ANA-CH13-E003 — Exercise 3: Different lower limit

Let \(H(x)=\int _x^3 e^{t^2}dt\). Find \(H'(x)\).

<details><summary>Hint 1</summary>

Reverse the limits to make x the upper endpoint.

</details>

<details><summary>Hint 2</summary>

The resulting minus sign remains after differentiation.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E003 — Solution

Rewrite \(H(x)=-\int _3^x e^{t^2}dt\). The fundamental theorem gives \(H'(x)=-e^{x^2}\). The variable lower limit contributes the minus sign.

</details>

### ANA-CH13-E004 — Exercise 4: Chain rule with a moving endpoint

Let \(K(x)=\int _1^{x^2} \log(1+t)dt\). Find \(K'(x)\).

<details><summary>Hint 1</summary>

Introduce an accumulation function with a separate endpoint variable u.

</details>

<details><summary>Hint 2</summary>

Differentiate that function first, then apply the chain rule to u=x squared.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E004 — Solution

If \(A(u)=\int _1^u \log(1+t)dt\), then \(A'(u)=\log(1+u)\). Since \(K=A\circ (x^2)\), the chain rule gives \(K'(x)=2x \log(1+x^2)\).

</details>

### ANA-CH13-E005 — Exercise 5: A point-value mismatch

Define \(f(0)=4\) and \(f(x)=x\) otherwise. If \(F(x)=\int _0^x f\), find \(F'(0)\).

<details><summary>Hint 1</summary>

A change at one point does not alter the Riemann integral.

</details>

<details><summary>Hint 2</summary>

Replace f by the identity function when computing the accumulation, then differentiate that explicit formula.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E005 — Solution

Changing the value at zero does not affect any Riemann integral, so \(F(x)=\int _0^x tdt=x^2/2\). Therefore \(F'(0)=0\), not \(f(0)=4\).

</details>

### ANA-CH13-E006 — Exercise 6: A corner from a jump

Let \(f=-1\) on \((-1,0)\) and \(f=2\) on \([0,1]\). For \(F(x)=\int _0^x f\), find the one-sided derivatives at zero.

<details><summary>Hint 1</summary>

Integrate the constant on each side of zero separately.

</details>

<details><summary>Hint 2</summary>

Keep orientation for negative x and compare the two slopes at the origin.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E006 — Solution

For \(x<0\), orientation gives \(F(x)=\int _0^x(-1)dt=-x\); hence the left derivative is \(-1\). For \(x>0\), \(F(x)=2x\); hence the right derivative is \(2\). The derivatives disagree, so \(F\) is not differentiable at zero.

</details>

### ANA-CH13-E007 — Exercise 7: Evaluate by an antiderivative

Compute \(\int _0^2(3x^2-4x+1)dx\).

<details><summary>Hint 1</summary>

Find a polynomial whose derivative is the integrand.

</details>

<details><summary>Hint 2</summary>

Evaluate its difference at 2 and 0.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E007 — Solution

An antiderivative is \(G(x)=x^3-2x^2+x\). Thus the integral is \(G(2)-G(0)=8-8+2=2\).

</details>

### ANA-CH13-E008 — Exercise 8: Antiderivative uniqueness

Suppose \(F'=G'\) on an interval \(I\). Prove \(F-G\) is constant.

<details><summary>Hint 1</summary>

Apply the mean value theorem to F-G between arbitrary points of the interval.

</details>

<details><summary>Hint 2</summary>

Its derivative vanishes throughout the connecting segment.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E008 — Solution

The difference \(H=F-G\) has derivative zero on \(I\). For any \(x<y\) in \(I\), the mean value theorem on \([x,y]\) gives \(H(y)-H(x)=H'(c)(y-x)=0\). Hence all values agree.

</details>

### ANA-CH13-E009 — Exercise 9: Why the interval matters

Give two differentiable functions on \((-2,-1)\cup (1,2)\) with equal derivatives that do not differ by one global constant.

<details><summary>Hint 1</summary>

Use different additive constants on the two interval components.

</details>

<details><summary>Hint 2</summary>

Each component can have zero derivative without fixing its constant relative to the other.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E009 — Solution

Let \(F=0\) everywhere. Let \(G=0\) on the left interval and \(G=1\) on the right. Both derivatives are zero at every domain point, but \(F-G\) takes two constants on the two components.

</details>

### ANA-CH13-E010 — Exercise 10: Integration by parts

Compute \(\int _0^1 x \cos x dx\).

<details><summary>Hint 1</summary>

Differentiate x and integrate cosine in the parts formula.

</details>

<details><summary>Hint 2</summary>

Evaluate the boundary term and the remaining sine integral separately.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E010 — Solution

Take \(u=x\) and \(v'=\cos x\), so \(v=\sin x\). Then
\(\int _0^1x \cos x\,dx=[x \sin x]_0^1-\int _0^1\sin x\,dx=\sin 1-(1-\cos 1)\).
Thus the value is \(\sin 1+\cos 1-1\).

</details>

### ANA-CH13-E011 — Exercise 11: A substitution with orientation

Evaluate \(\int _0^1 2t e^{t^2}dt\).

<details><summary>Hint 1</summary>

Set the new variable equal to t squared.

</details>

<details><summary>Hint 2</summary>

Transform both endpoints and integrate the exponential in that new variable.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E011 — Solution

Set \(x=t^2\), so \(dx=2t dt\) and the endpoints remain 0 and 1. The integral becomes \(\int _0^1e^x dx=e-1\).

</details>

### ANA-CH13-E012 — Exercise 12: Parameter differentiation

Let \(F(x)=\int _0^1 \cos(xt)dt\). Find \(F'(0)\) by differentiating under the integral.

<details><summary>Hint 1</summary>

Check the parameter derivative on a compact rectangle around x=0.

</details>

<details><summary>Hint 2</summary>

The derivative is -t sin(xt), which vanishes when x=0.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E012 — Solution

On a compact rectangle near \(x=0\), the partial derivative \(-t \sin(xt)\) is continuous, so interchange is valid. Hence
\(F'(0)=\int _0^1[-t \sin(0)]dt=0\).

</details>

### ANA-CH13-E013 — Exercise 13: Lipschitz implies absolute continuity

Prove an \(L\)-Lipschitz function is absolutely continuous.

<details><summary>Hint 1</summary>

Sum the Lipschitz bound over the disjoint intervals.

</details>

<details><summary>Hint 2</summary>

Use delta=epsilon/L if L>0 and treat the zero-constant case separately.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E013 — Solution

For pairwise disjoint intervals,
\(\sum|F(y_k)-F(x_k)|\le L\sum|y_k-x_k|\).
Given \(\varepsilon>0\), choose \(\delta=\varepsilon/L\) when \(L>0\). If \(L=0\), the function is constant and any positive \(\delta\) works.

</details>

### ANA-CH13-E014 — Exercise 14: Absolute implies uniform continuity

Prove every absolutely continuous function on \([a,b]\) is uniformly continuous.

<details><summary>Hint 1</summary>

Use the absolute-continuity definition for a collection with just one interval.

</details>

<details><summary>Hint 2</summary>

Its delta then controls the difference at any pair of sufficiently close points.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E014 — Solution

Given \(\varepsilon>0\), use the \(\delta\) from absolute continuity. For any \(x<y\) with \(y-x<\delta\), apply the definition to the collection containing only \((x,y)\). It gives \(|F(y)-F(x)|<\varepsilon\) independently of the points.

</details>

### ANA-CH13-E015 — Exercise 15: Variation of a monotone function

If \(F\) is nondecreasing on \([a,b]\), compute its total variation.

<details><summary>Hint 1</summary>

Every increment of a nondecreasing function has nonnegative sign.

</details>

<details><summary>Hint 2</summary>

Remove absolute values and telescope before taking the supremum over partitions.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E015 — Solution

For every partition, each increment is nonnegative, so
\(\sum|F(x_i)-F(x_{i-1})|=\sum[F(x_i)-F(x_{i-1})]=F(b)-F(a)\).
The supremum is therefore exactly \(F(b)-F(a)\).

</details>

### ANA-CH13-E016 — Exercise 16: Diagnose the Cantor-function inference

What is wrong with “\(C'=0\) almost everywhere, so \(C(x)=C(0)+\int _0^xC'=0\)”?

<details><summary>Hint 1</summary>

Identify the hypothesis needed to recover a function from its almost-everywhere derivative.

</details>

<details><summary>Hint 2</summary>

Continuity and bounded variation do not replace absolute continuity; the Cantor function is the obstruction.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E016 — Solution

Recovery from the almost-everywhere derivative requires absolute continuity. The Cantor function is not absolutely continuous; it concentrates an increase of 1 on a measure-zero set. Thus the invoked representation theorem does not apply.

</details>

### ANA-CH13-E017 — Exercise 17: Improper power threshold

Determine for which real \(p\) the integral \(\int _0^1x^{-p}dx\) converges.

<details><summary>Hint 1</summary>

Truncate the lower endpoint at a positive epsilon.

</details>

<details><summary>Hint 2</summary>

For p unequal to one examine epsilon^(1-p); use a logarithm at p=1.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E017 — Solution

For \(p\ne 1\), truncation gives \([1-\varepsilon^{1-p}]/(1-p)\). This has a finite limit as \(\varepsilon\downarrow 0\) exactly when \(1-p>0\), or \(p<1\). For \(p=1\), \(-\log \varepsilon\to \infty\). Hence convergence occurs exactly for \(p<1\).

</details>

### ANA-CH13-E018 — Exercise 18: Infinite-interval boundary

Determine for which \(p\) the integral \(\int _1^\infty x^{-p}dx\) converges.

<details><summary>Hint 1</summary>

Truncate the upper endpoint at R.

</details>

<details><summary>Hint 2</summary>

Finite convergence requires R^(1-p) to vanish; separate the logarithmic boundary case.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E018 — Solution

For \(p\ne 1\), integrate to \(R\) to obtain \([R^{1-p}-1]/(1-p)\). A finite limit exists exactly when \(1-p<0\), or \(p>1\). At \(p=1\), \(\log R\) diverges.

</details>

### ANA-CH13-E019 — Exercise 19: Newton–Leibniz with a discontinuous derivative

Suppose \(G\) is differentiable, \(G'\) is bounded and has only finitely many discontinuities, and endpoint continuity holds. Why does \(\int G'=G(b)-G(a)\) still follow?

<details><summary>Hint 1</summary>

Determine whether the derivative is Riemann integrable under the stated discontinuity hypothesis.

</details>

<details><summary>Hint 2</summary>

Newton-Leibniz requires an integrable derivative, not a continuous derivative.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E019 — Solution

A bounded function with finitely many discontinuities is Riemann integrable. The Newton–Leibniz theorem applies to the Riemann-integrable derivative; continuity of \(G'\) is not required.

</details>

### ANA-CH13-E020 — Exercise 20: Local averages

Let \(f\) be bounded and Riemann integrable on an interval containing \(a\), \(x\), and the points \(x+h\) under consideration. Suppose \(m_h\le f(t)\le M_h\) whenever \(t\) lies between \(x\) and \(x+h\). Show the difference quotient of \(F(u)=\int _a^u f\) lies between \(m_h\) and \(M_h\).

<details><summary>Hint 1</summary>

Integrate the bounds on the segment joining x and x+h.

</details>

<details><summary>Hint 2</summary>

For h<0 reverse the integral and then track the sign when dividing by h.

</details>

<details><summary>Solution</summary>

#### ANA-CH13-E020 — Solution

For \(h>0\), integrate the inequalities on \([x,x+h]\) and divide by \(h\), obtaining
\(m_h\le [F(x+h)-F(x)]/h\le M_h\).
For \(h<0\), reverse orientation and divide carefully; the same bounds result. If both \(m_h\) and \(M_h\) tend to \(L\), the squeeze theorem gives \(F'(x)=L\).

</details>

## ANA-CH13-P001 — Project: three versions of “undoing a derivative”

Build a comparison dossier for three functions:

1. a \(C^1\) function;
2. a function whose derivative is Riemann integrable but discontinuous;
3. the Cantor function.

For each, record differentiability, continuity of the derivative, Riemann integrability, bounded variation, absolute continuity, and whether endpoint change equals the appropriate integral of the derivative. Every “yes” must cite a theorem with checked hypotheses; every “no” must include a concrete failure mechanism. Finish by explaining why the three cases cannot be compressed into the slogan “integration undoes differentiation.”

## Chapter synthesis

The fundamental theorem is a family of inverse statements held together by local averages. Bounded integrands produce Lipschitz accumulators. Continuity makes shrinking averages recover point values. Riemann-integrable derivatives recover endpoint change through tagged sums. Absolute continuity is the later exact class in which an almost-everywhere derivative determines the function.

At every boundary, the correct response is another question: Is the integral proper? Is the integrand continuous at the differentiation point? Is the derivative integrable? Is the function absolutely continuous? The notation becomes trustworthy only after those hypotheses are visible.

## Summary

Accumulation converts bounded Riemann-integrable data into a Lipschitz function. Continuity at a point makes its shrinking local averages recover the assigned value there. Conversely, a Riemann-integrable derivative recovers endpoint change through Newton–Leibniz. The classical parts and substitution rules inherit those hypotheses and orientation conventions. The retained measure-theoretic continuation requires absolute continuity to recover a function from an almost-everywhere derivative; the Cantor function marks the boundary of that stronger assertion.
