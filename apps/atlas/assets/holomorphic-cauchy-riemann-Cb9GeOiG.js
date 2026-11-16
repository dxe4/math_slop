var e=`---
parent_id: book-complex-analysis
chapter_id: holomorphic-cauchy-riemann
title: "Holomorphic Functions and the Cauchy–Riemann Equations"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Holomorphic Functions and the Cauchy–Riemann Equations

A function of a complex variable is also a function of two real variables. Yet complex differentiation is much more restrictive than ordinary real differentiation of a plane map. A real linear approximation can stretch different directions differently or reflect the plane. A complex linear approximation must act by multiplication by one number: away from the zero derivative, it is a rotation followed by a uniform scaling. Requiring one derivative to govern every direction creates the rigidity of holomorphic functions.

The preparation is [The Complex Plane and Its Topology](complex-plane-topology.md), elementary differentiation, and the real-analysis definition of a total derivative. The [Euclidean differentiation chapter](../proof-safe-real-analysis/differentiation-in-r-n.md) proves the real chain rule and the continuous-partial criterion. We reproduce the estimates needed here so that a Cauchy–Riemann calculation never becomes an unsupported claim of differentiability.

Our goals are to distinguish a complex derivative at one point from holomorphicity on an open set, prove the correct equivalence with total real differentiation, apply the elementary calculus rules, and construct counterexamples to a partial-derivative-only criterion. The [domain-colouring laboratory](../../visual-labs/domain-coloring-live.md) can illustrate modulus and argument, but its sampled colors do not establish a derivative or a differential equation.

## A limit through the whole plane

**Definition 2.1 (Complex derivative).** Let \\(U\\subseteq\\mathbb C\\) be open, \\(a\\in U\\), and \\(f:U\\to\\mathbb C\\). Its complex derivative at \\(a\\) is the limit
\\[
 f'(a)=\\lim_{h\\to0,\\ h\\ne0}\\frac{f(a+h)-f(a)}h,
\\]
if the limit exists as a complex number. The increment \\(h\\) may approach zero from every direction and along every curve.

Equivalently there is a complex number \\(c\\) such that
\\[
 f(a+h)=f(a)+ch+r(h),\\qquad
 \\frac{|r(h)|}{|h|}\\longrightarrow0.
\\]
The equivalence follows by multiplying the difference quotient error by \\(h\\). It is often the most efficient way to prove a derivative: identify the proposed multiplication \\(c\\), then bound a remainder uniformly over all small increments.

**Definition 2.2 (Holomorphicity).** A function is holomorphic on an open set \\(U\\) if it is complex differentiable at every point of \\(U\\). It is entire if it is holomorphic on the whole plane. To say that a function is holomorphic at a point means it is holomorphic on some open neighbourhood of that point; it means more than having a derivative just at that point.

A derivative is a local condition, but its existence at one point does not automatically persist nearby. Later Cauchy's formula will prove that a holomorphic function has derivatives of every order. We cannot use that conclusion now to silently assume continuity of \\(f'\\); at this point the definition grants only its existence.

**Proposition 2.3 (Differentiability implies continuity).** If \\(f\\) is complex differentiable at \\(a\\), it is continuous there.

*Proof.* Use the remainder form. The term \\(ch\\) tends to zero. For all sufficiently small \\(h\\), the remainder bound \\(|r(h)|\\le|h|\\) holds, so that term also tends to zero. Therefore \\(f(a+h)-f(a)\\to0\\). ∎

**Worked example 2.4 (A polynomial from its increment).** For \\(f(z)=z^2\\),
\\[
 f(a+h)-f(a)=2ah+h^2.
\\]
The remainder satisfies \\(|h^2|/|h|=|h|\\to0\\), independent of direction. Thus \\(f'(a)=2a\\) for every complex \\(a\\), and the function is entire. The same calculation would not be complete if we had only taken real \\(h\\): that checks one approach to the limit instead of all approaches.

## Elementary rules with their assumptions

**Theorem 2.5 (Calculus rules).** If \\(f,g\\) are complex differentiable at \\(a\\), so are their sum and product, with
\\[
 (f+g)'(a)=f'(a)+g'(a),\\qquad
 (fg)'(a)=f'(a)g(a)+f(a)g'(a).
\\]
If additionally \\(g(a)\\ne0\\), the quotient is defined near \\(a\\) and
\\[
 (f/g)'(a)=\\frac{f'(a)g(a)-f(a)g'(a)}{g(a)^2}.
\\]
If \\(f\\) is differentiable at \\(a\\) and \\(G\\) at \\(b=f(a)\\), with the composition defined near \\(a\\), then \\((G\\circ f)'(a)=G'(b)f'(a)\\).

*Proof.* The sum rule is the sum of limits. For the product, write its increment as
\\[
 f(a+h)[g(a+h)-g(a)]+g(a)[f(a+h)-f(a)].
\\]
Divide by \\(h\\) and use continuity of \\(f\\) at \\(a\\). For a reciprocal, continuity and \\(g(a)\\ne0\\) make \\(|g(a+h)|>|g(a)|/2\\) for small \\(h\\); hence
\\[
 \\frac{g(a+h)^{-1}-g(a)^{-1}}h
 =-\\frac{[g(a+h)-g(a)]/h}{g(a+h)g(a)}
 \\longrightarrow-\\frac{g'(a)}{g(a)^2}.
\\]
Combine with the product rule for the quotient.

For the chain rule write \\(f(a+h)=b+ch+r(h)\\), and \\(G(b+k)=G(b)+dk+s(k)\\), where \\(r(h)=o(|h|)\\), \\(s(k)=o(|k|)\\). The displacement \\(k=ch+r(h)\\) satisfies \\(|k|\\le C|h|\\) near zero. Substitution gives linear part \\(dch\\) and errors \\(dr(h)+s(ch+r(h))\\). Each is \\(o(|h|)\\), the latter by \\(|k|\\le C|h|\\). If \\(k=0\\), its error is zero directly. ∎

These proofs are the real calculus proofs with a two-dimensional increment and the complex modulus replacing absolute value. In particular complex polynomials are entire and rational functions are holomorphic away from denominator zeros. A cancellation may extend a rational formula across a missing point, but the original domain must be explicitly enlarged before assigning a derivative there.

## Real differentiability identifies the permitted linear maps

Write \\(f(x+iy)=u(x,y)+iv(x,y)\\). Total real differentiability at \\(a\\) means that there is a real linear map \\(L:\\mathbb R^2\\to\\mathbb R^2\\) for which
\\[
 f(a+h)=f(a)+Lh+o(|h|).
\\]
Not every real linear map is complex multiplication. Multiplication by \\(c=\\alpha+i\\beta\\) has matrix
\\[
 \\begin{pmatrix}\\alpha&-\\beta\\\\\\beta&\\alpha\\end{pmatrix}.
\\]
The first column records the image of one and the second the image of \\(i\\); the second must equal \\(i\\) times the first.

**Theorem 2.6 (Exact Cauchy–Riemann criterion).** A function is complex differentiable at \\(a\\) if and only if it is totally real differentiable there and its real derivative is multiplication by a complex number. In terms of its real Jacobian, this is exactly
\\[
 u_x(a)=v_y(a),\\qquad u_y(a)=-v_x(a).
\\]
When these conditions hold,
\\(f'(a)=u_x(a)+iv_x(a)=v_y(a)-iu_y(a)\\).

*Proof.* Complex differentiability already gives a real linear approximation \\(h\\mapsto f'(a)h\\) with the required remainder, so it implies total real differentiability and the displayed matrix form. Conversely, if the real derivative has that form, put \\(c=u_x+iv_x\\). The real expansion is then \\(f(a+h)=f(a)+ch+o(|h|)\\). Dividing the remainder by the nonzero complex increment gives error of modulus tending to zero. Thus the complex difference quotient tends to \\(c\\). Equality of the four matrix entries is precisely the two Cauchy–Riemann equations. ∎

This theorem identifies the exact missing hypothesis in an informal coordinate argument: existence of the four partial derivatives is not total real differentiability. A partial derivative tests an axis increment, whereas a total derivative controls all directions and curved approaches with a single remainder estimate.

**Corollary 2.7 (A practical sufficient condition).** Suppose \\(u,v\\) have continuous first partial derivatives on an open set \\(U\\). Then \\(f=u+iv\\) is holomorphic on \\(U\\) exactly when the Cauchy–Riemann equations hold throughout \\(U\\).

*Proof.* Necessity follows from Theorem 2.6 at every point. For sufficiency, continuous partial derivatives imply total real differentiability. Explicitly, change \\(x\\) and then \\(y\\) one at a time. The real one-variable mean value theorem expresses each component's increment as a partial derivative at an intermediate point times the coordinate displacement. Subtract the partials at the base point. Continuity makes the two coefficient errors uniformly small as both displacements tend to zero, and \\(|h_x|+|h_y|\\le\\sqrt2|h|\\). Hence the remainder is \\(o(|h|)\\). Theorem 2.6 now applies pointwise. ∎

Continuity of the partials is a convenient sufficient condition, not part of the definition of holomorphicity. The later integral theory removes the need to assume that extra regularity. A proof of Cauchy's theorem under just complex differentiability must therefore avoid presuming the continuous-partial hypothesis of this corollary.

## Examples that expose the distinctions

**Worked example 2.8 (Conjugation reflects instead of rotating).** For \\(f(z)=\\overline z\\), the real components are \\(u=x\\), \\(v=-y\\). They are smooth but \\(u_x=1\\ne-1=v_y\\), so the Cauchy–Riemann criterion fails everywhere. Directly,
\\[
 \\frac{f(a+h)-f(a)}h=\\frac{\\overline h}h.
\\]
For real \\(h\\) this is one; for purely imaginary \\(h\\) it is minus one. Thus no complex derivative exists at any point. Conjugation is nevertheless distance preserving and continuous everywhere. It shows why excellent real regularity is insufficient when the linear map has the wrong form.

**Worked example 2.9 (A derivative at a single point).** Let \\(f(z)=|z|^2\\), considered as a complex-valued function with zero imaginary part. At zero,
\\[
 \\left|\\frac{|h|^2}h\\right|=|h|\\longrightarrow0,
\\]
so \\(f'(0)=0\\). In coordinates, \\(u=x^2+y^2\\), \\(v=0\\), and Cauchy–Riemann requires both \\(2x=0\\) and \\(2y=0\\). It therefore has no complex derivative at any nonzero point. The derivative at zero does not make it holomorphic at zero: every open neighbourhood of zero contains nonzero points where differentiation fails.

**Worked example 2.10 (Cauchy–Riemann at a point without a derivative).** Define
\\[
 f(0)=0,\\qquad f(z)=\\frac{\\overline z^2}{z}\\quad(z\\ne0).
\\]
Its modulus is \\(|z|\\), so it is continuous at zero. For real \\(t\\ne0\\), \\(f(t)=t\\) and \\(f(it)=it\\). Consequently at zero the partials are \\(u_x=v_y=1\\), \\(u_y=v_x=0\\), satisfying Cauchy–Riemann. But
\\[
 \\frac{f(h)}h=\\frac{\\overline h^2}{h^2}.
\\]
Along the real axis this equals one, while along \\(h=t(1+i)\\) it equals minus one. The complex derivative does not exist. The total real derivative must therefore also fail to exist, despite the four partials and continuity. This is precisely why the exact criterion cannot be shortened to the two equations alone.

## Zero derivatives and geometric consequences

**Proposition 2.11 (Zero derivative on a domain).** If \\(f\\) is holomorphic on a domain \\(U\\) and \\(f'=0\\) throughout \\(U\\), then \\(f\\) is constant.

*Proof.* Join any two points by a polygonal path in \\(U\\), using Theorem 1.13. On each segment write \\(z(t)=a+t(b-a)\\). Complex differentiability implies total real differentiability; the real chain rule gives \\((f\\circ z)'(t)=f'(z(t))(b-a)=0\\) for interior segment parameters. Both real components are continuous on the closed parameter interval and differentiable inside. The real mean value theorem makes them constant along the segment. Joining finitely many segments gives equal endpoint values. ∎

Connectedness is essential: a function taking different constants on two disjoint open disks is holomorphic with zero derivative on their union. Every point has a local conclusion, but the missing connecting path prevents a global one.

At a point with nonzero derivative \\(c\\), small increments are transformed to \\(ch+o(|h|)\\). The leading map multiplies lengths by \\(|c|\\) and adds the argument of \\(c\\) to directions. If two differentiable curves through the point have nonzero velocities, their image velocities are multiplied by the same \\(c\\), preserving their oriented angle. This is a statement about tangents with nonzero image velocities. At a zero derivative, such as \\(z^2\\) at zero, it cannot be applied: distinct tangent directions may be folded together or their image velocities may vanish.

## Separating complex linearity from the reflected part

There is a useful way to package the exact criterion without writing four real matrix entries every time. It applies when total real differentiability is already known. Write the complex-valued coordinate partials as \\(f_x=u_x+iv_x\\) and \\(f_y=u_y+iv_y\\), and set
\\[
 A=\\tfrac12(f_x-if_y),\\qquad B=\\tfrac12(f_x+if_y).
\\]
These expressions are often denoted \\(f_z\\) and \\(f_{\\overline z}\\), respectively. The notation does not assert a complex derivative before its existence has been established.

**Proposition 2.12 (Linear and reflected decomposition).** Every totally real differentiable plane map has a unique expansion
\\[
 f(a+h)=f(a)+Ah+B\\overline h+o(|h|).
\\]
It is complex differentiable precisely when \\(B=0\\), in which case its complex derivative is \\(A\\).

*Proof.* For \\(h=s+it\\), the total real linear part is \\(f_xs+f_yt\\). Substituting the definitions gives
\\[
 Ah+B\\overline h=(A+B)s+i(A-B)t=f_xs+f_yt.
\\]
Thus the expansion holds. The coefficients are unique because evaluating a real linear map on one and on \\(i\\) determines it and recovers the two displayed formulas. If \\(B=0\\), the exact criterion applies. Conversely, complex differentiability makes the real linear part multiplication by one complex number, so uniqueness forces its reflected coefficient to be zero. ∎

For instance, the map \\(f(z)=z+\\lambda\\overline z\\), with fixed complex \\(\\lambda\\), has \\(A=1\\), \\(B=\\lambda\\) everywhere. It is entire only when \\(\\lambda=0\\). If \\(\\lambda=1\\), its value is \\(2\\operatorname{Re}z\\): the plane collapses onto a line. For other nonzero choices it can remain an invertible real linear map, yet its reflected component still prevents complex differentiation. Real invertibility and complex differentiability answer different questions.

This decomposition also makes clear what an axis computation can and cannot establish. Computing \\(f_x,f_y\\) suggests \\(A,B\\), but only a uniform real remainder estimate licenses the expansion. In Worked example 2.10 those axis values suggest \\(A=1,B=0\\) at zero, while total real differentiability fails. Introducing a new symbol does not supply that missing estimate.

## Exercises

### Exercise 2.1 {#holomorphic-cauchy-riemann-ex-1}

Derive the complex derivative of \\(z^3\\) directly from the increment, including a bound valid in every direction.

<details><summary>Hint 1</summary>
Expand \\((a+h)^3-a^3\\).
</details>
<details><summary>Hint 2</summary>
After subtracting \\(3a^2h\\), bound the remaining terms by their moduli.
</details>
<details><summary>Solution</summary>
The increment is \\(3a^2h+3ah^2+h^3\\). The remainder divided in modulus by \\(|h|\\) is bounded by \\(3|a||h|+|h|^2\\), tending to zero independently of direction. Therefore the derivative is \\(3a^2\\) at every \\(a\\), and the polynomial is entire.
</details>

### Exercise 2.2 {#holomorphic-cauchy-riemann-ex-2}

Find all points where \\(f(z)=\\operatorname{Re}z\\) is complex differentiable.

<details><summary>Hint 1</summary>
Its components are \\(u=x\\) and \\(v=0\\).
</details>
<details><summary>Hint 2</summary>
Compare real and purely imaginary increments directly if desired.
</details>
<details><summary>Solution</summary>
Cauchy–Riemann requires \\(1=0\\), impossible. Thus there are no such points. Directly, the quotient for real increments equals one, while for purely imaginary increments it equals zero. These conflicting limits occur at every base point.
</details>

### Exercise 2.3 {#holomorphic-cauchy-riemann-ex-3}

Show that \\(f(z)=\\overline z^2\\) has a complex derivative exactly at zero, and find it.

<details><summary>Hint 1</summary>
Write \\(u=x^2-y^2\\), \\(v=-2xy\\).
</details>
<details><summary>Hint 2</summary>
The partials are continuous, so the sufficient criterion applies at each point.
</details>
<details><summary>Solution</summary>
The equations are \\(2x=-2x\\) and \\(-2y=2y\\), forcing \\(x=y=0\\). At zero the quotient has modulus \\(|\\overline h^2/h|=|h|\\to0\\), so the derivative is zero. Elsewhere Cauchy–Riemann fails. Consequently the function is not holomorphic on any nonempty open set.
</details>

### Exercise 2.4 {#holomorphic-cauchy-riemann-ex-4}

Let \\(f=u+iv\\) be holomorphic. Show that the Jacobian determinant at a point equals \\(|f'|^2\\), without assuming second derivatives.

<details><summary>Hint 1</summary>
Use the real matrix of multiplication by \\(f'\\).
</details>
<details><summary>Hint 2</summary>
If \\(f'=\\alpha+i\\beta\\), compute the determinant of the two-by-two matrix.
</details>
<details><summary>Solution</summary>
Theorem 2.6 gives Jacobian \\(\\begin{pmatrix}\\alpha&-\\beta\\\\\\beta&\\alpha\\end{pmatrix}\\). Its determinant is \\(\\alpha^2+\\beta^2=|f'|^2\\). It is positive at nonzero derivative and zero at zero derivative. The calculation uses only the first derivative; concluding existence of a local inverse also requires the appropriate local regularity theorem, not the determinant formula alone.
</details>

### Exercise 2.5 {#holomorphic-cauchy-riemann-ex-5}

Find a harmonic conjugate candidate \\(v\\) for \\(u(x,y)=x^2-y^2+3x\\) by solving the Cauchy–Riemann equations, then verify the resulting holomorphic function.

<details><summary>Hint 1</summary>
Integrate \\(v_y=2x+3\\) with respect to \\(y\\).
</details>
<details><summary>Hint 2</summary>
The other equation determines the remaining function of \\(x\\).
</details>
<details><summary>Solution</summary>
The first equation gives \\(v=(2x+3)y+C(x)\\). The second requires \\(v_x=2y=-u_y\\), hence \\(C'=0\\). Thus \\(v=2xy+3y+c\\), with real constant \\(c\\). The resulting function is \\(z^2+3z+ic\\), an entire polynomial. This verifies the construction globally and shows the freedom in the imaginary constant.
</details>

### Exercise 2.6 {#holomorphic-cauchy-riemann-ex-6}

For \\(f(z)=1/(z^2+1)\\), specify its holomorphic domain and compute the derivative there.

<details><summary>Hint 1</summary>
Factor the denominator over the complex numbers.
</details>
<details><summary>Hint 2</summary>
Use the reciprocal and chain rules only where the denominator is nonzero.
</details>
<details><summary>Solution</summary>
The denominator factors as \\((z-i)(z+i)\\), so the formula is holomorphic on \\(\\mathbb C\\setminus\\{i,-i\\}\\). There \\(f'(z)=-2z/(z^2+1)^2\\). The excluded points are not part of the formula's domain, and neither factor cancels, so this calculation does not assign derivatives at them.
</details>

### Exercise 2.7 {#holomorphic-cauchy-riemann-ex-7}

Suppose a holomorphic function on a domain has only real values. Prove it is constant.

<details><summary>Hint 1</summary>
Its imaginary component and both of that component's partials vanish.
</details>
<details><summary>Hint 2</summary>
Use Cauchy–Riemann, then the zero-derivative proposition.
</details>
<details><summary>Solution</summary>
Write \\(f=u+iv\\) with \\(v=0\\). Then \\(v_x=v_y=0\\), and Cauchy–Riemann gives \\(u_x=u_y=0\\). Hence \\(f'=u_x+iv_x=0\\) throughout the domain. Proposition 2.11 makes \\(f\\) constant. Without connectedness different constants could be assigned to different components.
</details>

### Exercise 2.8 {#holomorphic-cauchy-riemann-ex-8}

Let \\(f\\) be holomorphic on a domain. If \\(\\overline f\\) is also holomorphic there, prove that \\(f\\) is constant.

<details><summary>Hint 1</summary>
Write the Cauchy–Riemann equations for both \\(u+iv\\) and \\(u-iv\\).
</details>
<details><summary>Hint 2</summary>
Compare the signs to force all four first partials to vanish.
</details>
<details><summary>Solution</summary>
For \\(f\\), \\(u_x=v_y\\), \\(u_y=-v_x\\). For its conjugate, \\(u_x=-v_y\\), \\(u_y=v_x\\). Thus \\(u_x=v_y=0\\) and \\(u_y=v_x=0\\). The derivative \\(f'\\) vanishes everywhere, and the domain's connectedness gives constancy. The argument does not assert that conjugating an arbitrary holomorphic function preserves holomorphicity.
</details>

### Exercise 2.9 {#holomorphic-cauchy-riemann-ex-9}

For \\(f(0)=0\\), \\(f(z)=\\overline z^2/z\\) away from zero, compute its directional quotient along \\(h=te^{i\\theta}\\). Explain why linewise limits do not produce a derivative.

<details><summary>Hint 1</summary>
Substitute into \\(f(h)/h\\).
</details>
<details><summary>Hint 2</summary>
The real parameter cancels, but the angle remains.
</details>
<details><summary>Solution</summary>
For real nonzero \\(t\\), \\(\\overline h^2/h^2=e^{-4i\\theta}\\). Each fixed line has a limit as \\(t\\to0\\), but the value depends on the line: \\(\\theta=0\\) gives one and \\(\\theta=\\pi/4\\) gives minus one. A complex derivative requires the same number for every increment approach. In particular the axis partials miss the incompatibility on other lines.
</details>

### Exercise 2.10 {#holomorphic-cauchy-riemann-ex-10}

Find the derivative of \\(f(z)=(z^2+1)^3\\) and characterize where its derivative vanishes.

<details><summary>Hint 1</summary>
Apply the chain rule to the cube and the quadratic.
</details>
<details><summary>Hint 2</summary>
Factor the derivative; work over the complex numbers.
</details>
<details><summary>Solution</summary>
The derivative is \\(6z(z^2+1)^2\\), so its zeros are \\(0,i,-i\\). The function is entire, but the nonzero-derivative tangent-angle argument applies only away from these three points. A zero derivative at an isolated point does not imply that the function is constant on any neighbourhood.
</details>

### Exercise 2.11 {#holomorphic-cauchy-riemann-ex-11}

Let \\(f=u+iv\\) have continuous second real partial derivatives and satisfy Cauchy–Riemann on an open set. Prove \\(u_{xx}+u_{yy}=v_{xx}+v_{yy}=0\\).

<details><summary>Hint 1</summary>
Differentiate the first-order equations once more.
</details>
<details><summary>Hint 2</summary>
Use equality of mixed partials, justified by their continuity.
</details>
<details><summary>Solution</summary>
From \\(u_x=v_y\\), \\(u_y=-v_x\\), we obtain \\(u_{xx}=v_{yx}\\) and \\(u_{yy}=-v_{xy}\\), which cancel. Similarly \\(v_x=-u_y\\), \\(v_y=u_x\\) give \\(v_{xx}=-u_{yx}\\), \\(v_{yy}=u_{xy}\\), again cancelling. The second-order regularity hypothesis is used to interchange mixed derivatives. A later theorem will show such regularity for every holomorphic function; it has not been assumed for all functions in this chapter.
</details>

### Exercise 2.12 {#holomorphic-cauchy-riemann-ex-12}

Give a holomorphic function with zero derivative on a disconnected open set that is not constant. Explain why Proposition 2.11 does not apply.

<details><summary>Hint 1</summary>
Use the two disjoint disks from the preceding chapter.
</details>
<details><summary>Hint 2</summary>
Assign a different constant to each disk.
</details>
<details><summary>Solution</summary>
On \\(D(-2,1)\\cup D(2,1)\\), define \\(f=0\\) on the first disk and \\(f=1\\) on the second. Each point has a neighbourhood where \\(f\\) is constant, so its derivative exists and is zero everywhere in the open set. The function takes two values. The set is not connected and therefore is not a domain; a polygonal path inside it cannot join points of its two components.
</details>

## Worked example: a real-linear map that reverses orientation

Let \\(T(z)=az+b\\overline z\\), where \\(a,b\\in\\mathbb C\\) are fixed. The decomposition established above identifies the complex-linear coefficient as \\(a\\) and the reflected coefficient as \\(b\\). To understand its real geometry, multiplication by \\(a\\) has real determinant \\(|a|^2\\), while conjugation followed by multiplication by \\(b\\) has determinant \\(-|b|^2\\). A direct calculation with the images of \\(1\\) and \\(i\\) gives the combined determinant \\(|a|^2-|b|^2\\). Thus \\(T\\) may be invertible as a map of the real plane when \\(|a|\\ne|b|\\), yet its complex derivative exists only if \\(b=0\\). For example \\(T(z)=z+2\\overline z\\) is an invertible orientation-reversing real-linear map: in coordinates it sends \\(x+iy\\) to \\(3x-iy\\), with determinant \\(-3\\). Its directional quotients along the two axes are \\(3\\) and \\(-1\\), so no complex derivative exists anywhere.

The determinant also explains a common misconception about the Cauchy–Riemann equations. A nonzero real Jacobian allows a local inverse under the real inverse-function theorem, but it does not assert that the inverse is holomorphic. The extra requirement is complex linearity of the derivative, which forbids the conjugate term. Conversely, a holomorphic map with derivative zero can fail to be locally invertible, as \\(z\\mapsto z^2\\) does at the origin. One must check both the structure and the nonvanishing of the derivative before drawing the conformal conclusion used later in the book.

## A quantitative remainder test

The definition can be made operational without presuming continuous partial derivatives. Suppose near \\(a\\) one can prove \\(f(a+h)=f(a)+ch+R(h)\\) and \\(|R(h)|\\le C|h|^{1+\\alpha}\\) for some \\(C>0\\) and \\(\\alpha>0\\). Dividing by \\(h\\ne0\\) gives \\(|R(h)/h|\\le C|h|^\\alpha\\to0\\), independently of direction. The derivative is therefore \\(c\\). The estimate is stronger than necessary, but it gives a certificate that cannot be fooled by separate axis limits.

Apply this to \\(f(z)=z^n\\), where \\(n\\) is a positive integer. The finite binomial identity gives
\\[
 (a+h)^n-a^n-na^{n-1}h=\\sum_{k=2}^n {n\\choose k}a^{n-k}h^k.
\\]
For \\(|h|\\le1\\), the modulus is at most \\(C_a|h|^2\\), where \\(C_a\\) is the finite sum of the absolute coefficients. This proves the derivative in all complex directions at once, including when \\(a=0\\). It also shows why knowing that a function has a real power-series expansion along one axis is insufficient: the remainder has to be controlled for arbitrary complex increments.

For \\(f(z)=\\overline z\\), the corresponding quotient is \\(\\overline h/h\\), whose values at real and purely imaginary \\(h\\) are \\(1\\) and \\(-1\\). No remainder estimate with a complex-linear leading term can hold. The failure is visible before calculating partial derivatives, and it persists at every point because translation does not change the quotient.

## Differentiability on an open set is a local condition

Take \\(f(z)=z\\overline z=|z|^2\\). At zero, \\(f(h)/h=\\overline h\\to0\\), so the complex derivative exists there and equals zero. At a nonzero point \\(a\\), however, the increment quotient is \\(a\\overline h/h+\\overline a+\\overline h\\). The term \\(a\\overline h/h\\) takes different limits on real and imaginary increments, so the derivative fails to exist. The function is complex differentiable at one point but not holomorphic on any neighborhood of that point. This example isolates the quantifier in the definition: holomorphic means differentiable at every point of an open set, not just at a selected point. Its real partial derivatives are smooth everywhere, so lack of regularity is not the issue; the real linear differential has a nonzero reflected component whenever \\(a\\ne0\\).

## Sources and scope

This is original exposition. The local real-analysis source is the chapter on total differentiation; the elementary complex-variable Quarto source motivates the coordinate connection. Ahlfors and Stein–Shakarchi are the full book's syllabus benchmarks. The present chapter proves first-derivative rules and a precise Cauchy–Riemann criterion. It does not presume power-series representation, continuous higher derivatives, conformal local inverses or Cauchy's formula. Those conclusions require later theorems.

## Summary

Complex differentiability is total real differentiability with a very particular linear map: multiplication by one complex number. Cauchy–Riemann expresses the matrix restriction, while a remainder estimate or continuous-partial hypothesis supplies total differentiability. A derivative at one point is weaker than holomorphicity on a neighbourhood. The elementary rules produce many holomorphic examples; the next chapter constructs a far larger family by convergent power series and justifies differentiation of their infinite sums.
`;export{e as default};