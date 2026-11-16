var e=`---
parent_id: book-complex-analysis
chapter_id: residue-theorem
title: The residue theorem
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The residue theorem

A Laurent series contains infinitely many coefficients, yet a closed contour integral detects just one of them. This chapter explains why that fact is local, how finitely many local calculations combine into a global integral, and which geometric assumptions make the combination valid. The reward is a method which replaces many difficult parametrized integrals by a finite sum. The method does not remove the obligation to specify a domain or an orientation.

Preparation: read [Laurent series and singularities](laurent-series-singularities.md), [Paths and contour integrals](paths-contour-integrals.md), and [The Cauchy–Goursat theorem](cauchy-goursat.md). We use Laurent convergence on compact subannuli and the contour estimate. The finite-region formulation below additionally requires the classical real Green theorem from [Multivariable Calculus, Chapter 26](/calculus/#chapter/26), for C1 coefficients on a neighborhood of the region closure and its complete positively oriented piecewise smooth boundary. This is additional preparation for that formulation, rather than an assumption in the earlier triangle or homotopy Cauchy theorems. A positive outer boundary is counterclockwise; a positive boundary around a hole is clockwise. All paths below are piecewise continuously differentiable and have finite length.

## A coefficient measured by integration
<a id="residue-coefficient"></a>

**Definition 10.1 (Residue).** Suppose that a function is holomorphic on a punctured disk \\(0<|z-a|<r\\), with Laurent expansion
\\[
f(z)=\\sum_{n=-\\infty}^{\\infty}c_n(z-a)^n.
\\]
Its residue at \\(a\\), written \\(\\operatorname{Res}(f,a)\\), is \\(c_{-1}\\). This definition includes removable singularities, whose residue is zero. It also includes essential singularities: a residue does not require a finite principal part.

**Proposition 10.2 (Small-circle formula).** For every \\(0<\\rho<r\\), with the circle traversed counterclockwise,
\\[
\\int_{|z-a|=\\rho}f(z)\\,dz=2\\pi i\\operatorname{Res}(f,a).
\\]

*Proof.* The Laurent series converges uniformly on the circle, so integration commutes with its sum. Parameterizing by \\(z=a+\\rho e^{it}\\) gives zero for the integral of \\((z-a)^n\\) unless \\(n=-1\\): the integrand then has a nonconstant integer exponential, whose integral over a full period is zero. For \\(n=-1\\), it is \\(i\\,dt\\), whose integral is \\(2\\pi i\\). Uniform convergence justifies using this elementary calculation for the complete Laurent expansion, including its negative tail. ∎

The radius has disappeared from the answer. This is not an approximation valid only when the circle is very small. Every legal radius gives the same answer. Deforming the circle within a region containing no other singularity leaves its integral unchanged. Shrinking it is useful because it isolates a particular singularity, not because the residue is a limiting value of the function itself.

A residue is sensitive to the differential. If a substitution is made in an integral, one must transform \\(f(z)\\,dz\\), not only replace \\(z\\) inside \\(f\\). For example, \\(1/z\\) has residue one at zero, whereas the pullback by \\(z=w^2\\) is \\(2\\,dw/w\\). The latter contour may cover the original circle twice. This observation explains both the factor two and the role of traversal multiplicity.

## The finite-region residue theorem
<a id="finite-region-residue-theorem"></a>


**Boundary Cauchy bridge (from the classical Green theorem).** Suppose \\(D\\) is a bounded region with finitely many disjoint piecewise smooth Jordan boundary curves, and \\(f\\) is holomorphic on an open neighborhood of \\(\\overline D\\). Then \\(\\int_{\\partial D}f(z)\\,dz=0\\), where the complete boundary is positively oriented, including clockwise hole boundaries.

*Proof.* Cauchy's integral formula in Chapter 7 proves derivative regularity, so writing \\(f=u+iv\\), the functions \\(u,v\\) have continuous first partial derivatives on that neighborhood. Expansion gives
\\[
f\\,dz=(u\\,dx-v\\,dy)+i(v\\,dx+u\\,dy).
\\]
Apply the classical Green theorem to each real line integral, with its complete induced boundary. Its hypotheses hold because the coefficients are C1 on a neighborhood of the compact closure. The real part of the boundary integral is
\\[
\\iint_D(-v_x-u_y)\\,dx\\,dy=0,
\\]
and the imaginary part is
\\[
\\iint_D(u_x-v_y)\\,dx\\,dy=0.
\\]
Both integrands vanish by the Cauchy–Riemann equations. Thus the complex boundary integral is zero. This is a full deduction of the needed boundary identity from the explicitly named real Green theorem; it does not replace that prior theorem by a cancellation picture. Removing finitely many closed interior disks gives another region of the same boundary class, so the identity applies to the punctured region in the residue proof below. ∎

**Theorem 10.3 (Residue theorem on a region with finitely many holes).** Let \\(D\\) be a bounded connected region whose boundary consists of finitely many disjoint piecewise smooth Jordan curves. Assume these curves bound the usual region with one outer boundary and finitely many holes. Let \\(f\\) be holomorphic on an open neighborhood of \\(\\overline D\\), except at a finite set \\(a_1,\\ldots,a_N\\) in \\(D\\), each of which is an isolated singularity. There are no singularities on the boundary. Then, using the complete positively oriented boundary,
\\[
\\int_{\\partial D}f(z)\\,dz=2\\pi i\\sum_{j=1}^N\\operatorname{Res}(f,a_j).
\\]

*Proof.* Choose pairwise disjoint closed disks centered at the singularities, contained in \\(D\\), small enough that their punctured disks contain no other singularities. Remove these disks. The remaining region has a boundary consisting of the original boundary and the new circles, with the new circles clockwise. The function is holomorphic on a neighborhood of its closure. The boundary Cauchy theorem therefore says that the sum of all these boundary integrals is zero. Move the clockwise circle integrals to the other side, making them counterclockwise. Proposition 10.2 evaluates each as \\(2\\pi i\\) times its residue. This proves the formula. The same argument for \\(N=0\\) is precisely Cauchy's theorem. ∎

The finite set assumption is substantive. A meromorphic function has only finitely many poles in a compact subset of its domain, but a contour approaching the boundary of the domain can encounter infinitely many of them. A limiting argument with increasingly large contours therefore needs convergence and boundary estimates of its own. The theorem does not automatically turn an infinite residue sum into a legitimate integral identity.

A singularity in an excluded hole does not belong to \\(D\\). Its effect can appear in an individual boundary component, but it is not included in the sum over the region. For \\(f(z)=1/z\\) on an annulus about zero, the outer boundary integral is \\(2\\pi i\\), the inner clockwise boundary integral is \\(-2\\pi i\\), and the complete boundary integral is zero. The origin is outside the annulus and the theorem correctly has an empty residue sum.

The hypothesis of a neighborhood of the closure is a convenient precise formulation of regularity up to the boundary. It can be weakened with limiting assumptions, but those assumptions must then be stated and proved sufficient. A pole lying exactly on a contour is never harmless: the ordinary contour integral is undefined there. Indented contours and principal values belong to the next chapter, where the necessary limits are proved.

## Winding numbers and finite contour sums
<a id="winding-contour-sums"></a>

**Definition 10.4 (Index).** For a closed path \\(\\gamma\\) and a point \\(a\\) outside its image, define
\\[
\\operatorname{Ind}(\\gamma,a)=\\frac1{2\\pi i}\\int_\\gamma\\frac{dz}{z-a}.
\\]
For a finite integer sum of closed paths, extend the integral and index by linearity. Negative coefficients reverse orientation and positive coefficients count repeated traversal.

**Proposition 10.5 (Index under deformation).** The index is an integer, is locally constant off the path, and is unchanged by a homotopy of closed paths avoiding \\(a\\).

*Proof.* Along the interval parametrizing the path, choose a continuous argument of \\(\\gamma(t)-a\\): local argument branches exist, and finitely many overlapping parameter intervals allow successive choices agreeing at endpoints. Write \\(\\gamma-a=\\rho e^{i\\theta}\\). On each smooth piece, integration of its logarithmic derivative gives
\\(\\int dz/(z-a)=\\log\\rho(1)-\\log\\rho(0)+i(\\theta(1)-\\theta(0))\\).
The modulus terms cancel for a closed path, while equality of the endpoint complex numbers makes the argument change an integer multiple of \\(2\\pi\\). Small changes of \\(a\\), or a small deformation of the path uniformly separated from \\(a\\), change the integral continuously by the contour formula and uniform denominator bounds. An integer-valued continuous function is constant. A compact homotopy can be divided into finitely many such small deformations, proving invariance. ∎

Here is a useful finite version that requires no general homology theorem. Suppose a finite contour sum \\(\\Gamma\\) is the oriented sum of boundaries of finitely many regions of the type in Theorem 10.3, with integer coefficients. Suppose \\(f\\) is holomorphic on the relevant closures except at finitely many isolated singularities away from all boundaries. Adding Theorem 10.3 gives
\\[
\\int_\\Gamma f\\,dz=2\\pi i\\sum_a \\operatorname{Ind}(\\Gamma,a)\\operatorname{Res}(f,a).
\\]
Indeed, for a Jordan region its boundary index is one inside and zero outside, including the holes. This follows from the argument-change interpretation or from Cauchy's formula applied to \\(1/(z-a)\\). Linearity then identifies the coefficient of each residue with the displayed index.

This statement permits overlapping cells, cancellation of shared edges, and contours traversed more than once. It does not assert, without proof, that every possible closed path in every open set has such a finite representation. In the usual simple-contour applications, the original region theorem already supplies everything needed. If a contour self-intersects, drawing its oriented cells and checking their multiplicities is a concrete way to supply the required representation.

## Computing residues without integrating
<a id="residue-calculation-rules"></a>

**Proposition 10.6 (Pole formulas).** If \\(f\\) has a pole of order at most \\(m\\ge1\\) at \\(a\\), then
\\[
\\operatorname{Res}(f,a)=\\frac1{(m-1)!}
\\left[\\frac{d^{m-1}}{dz^{m-1}}\\big((z-a)^m f(z)\\big)\\right]_{z=a}.
\\]
If \\(f=g/h\\), with \\(g,h\\) holomorphic near \\(a\\), \\(h(a)=0\\), and \\(h'(a)\\ne0\\), then
\\[
\\operatorname{Res}(g/h,a)=g(a)/h'(a).
\\]

*Proof.* The product \\(F=(z-a)^m f\\) extends holomorphically across \\(a\\). In its Taylor series, the coefficient of \\((z-a)^{m-1}\\) becomes the coefficient of \\((z-a)^{-1}\\) after division. Taylor's derivative formula gives the first identity. For the second, factor \\(h(z)=(z-a)u(z)\\), where \\(u\\) is holomorphic and \\(u(a)=h'(a)\\ne0\\). The residue is the value of \\(g/u\\) at \\(a\\). The formula remains valid if cancellation makes the apparent singularity removable, in which case \\(g(a)=0\\). ∎

Using an unnecessarily large \\(m\\) is allowed by the first statement, but it produces unnecessary differentiation. More importantly, using the simple-pole quotient formula at a multiple zero of the denominator is invalid. One must first determine the orders of both numerator and denominator. Cancellation can change the order, and a zero residue does not establish removability: \\(1/(z-a)^2\\) is the simplest counterexample.

**Proposition 10.7 (Derivatives have zero residue).** If \\(F\\) is holomorphic on a punctured disk, its derivative has residue zero there. Conversely, a holomorphic function on a punctured disk has a single-valued holomorphic primitive on that punctured disk if and only if its residue is zero.

*Proof.* Differentiating the Laurent expansion of \\(F\\) term by term shows that a possible exponent \\(-1\\) would have to arise from differentiating its constant term, which contributes zero. Conversely, integrate the Laurent expansion term by term. Every term except \\(c_{-1}/(z-a)\\) has a single-valued power primitive. When \\(c_{-1}=0\\), the integrated positive and negative series converge normally on compact subannuli: their coefficients are divided by nonzero integers, which preserves the respective convergence radii. They define the required primitive. If a primitive exists, its closed-circle integral is zero, so Proposition 10.2 forces the residue to vanish. ∎

This criterion is local to a punctured disk. On a domain with several holes, vanishing residues at selected points does not alone account for every possible period unless the domain and its holes have been described. The correct global primitive criterion is vanishing integral on every closed path. Residues evaluate those periods in the finitely punctured situations covered by the theorem.

## Worked examples

### Example 10.8: Two simple poles and the choice of circle

Evaluate \\(\\int_{|z|=2}(z^2+1)^{-1}\\,dz\\), with positive orientation. The denominator has simple zeros at \\(i\\) and \\(-i\\), both strictly inside the circle. The quotient formula gives residues \\(1/(2i)\\) and \\(1/(-2i)\\). They sum to zero, so the integral is zero. The integrand is not holomorphic inside the circle; cancellation of residues, rather than Cauchy's theorem applied directly to the integrand, explains the answer.

For the circle \\(|z-i|=1/2\\), only \\(i\\) is enclosed, so the answer is \\(2\\pi i/(2i)=\\pi\\). For \\(|z|=1\\), both poles lie on the path, and neither calculation applies. The ordinary integral on that circle is undefined. Thus three superficially similar circles lead to zero, a nonzero value, and a forbidden setup respectively.

### Example 10.9: A double pole with a nonconstant numerator

Evaluate \\(\\int_{|z|=2}e^z/[z^2(z-3)]\\,dz\\). The only singularity inside is the double pole at zero. The pole at three lies outside, though the integrand must still be defined near the chosen contour. Set \\(F(z)=e^z/(z-3)\\). Then
\\[
F'(z)=\\frac{e^z}{z-3}-\\frac{e^z}{(z-3)^2},\\qquad F'(0)=-\\frac13-\\frac19=-\\frac49.
\\]
This is the residue at zero, and the integral is \\(-8\\pi i/9\\). Differentiating only the numerator would omit the second contribution. One can check by multiplying the Taylor expansions \\(e^z=1+z+\\cdots\\) and \\(1/(z-3)=-1/3-z/9+\\cdots\\): their linear coefficient is again \\(-4/9\\).

### Example 10.10: An essential singularity and a primitive obstruction

For \\(f(z)=e^{1/z}\\), expand on \\(z\\ne0\\):
\\[
e^{1/z}=1+z^{-1}+\\frac{z^{-2}}{2!}+\\cdots.
\\]
The essential singularity has residue one, so every positively oriented circle centered at zero has integral \\(2\\pi i\\). There is no single-valued primitive on any punctured disk about zero. The infinitely many other negative powers do not contribute to this integral.

For \\(g(z)=e^{1/z}/z^2\\), every Laurent exponent is at most \\(-2\\), so its residue is zero. In fact \\(g(z)=-(e^{1/z})'\\), giving the explicit primitive \\(-e^{1/z}\\). Both functions have essential singularities, but their primitive behavior differs. The distinction is precisely the one Laurent coefficient detected by closed integration.

## Exercises

### Exercise 10.1
<a id="residue-theorem-ex-1"></a>
Find the residue of \\(\\sin z/z^3\\) at zero.
<details><summary>Hint 1</summary>
Expand the sine function through the terms needed for exponent minus one.
</details>
<details><summary>Hint 2</summary>
After division, the first exponents are minus two and zero.
</details>
<details><summary>Solution</summary>
The expansion is \\(z^{-2}-1/6+z^2/120-\\cdots\\). There is no \\(z^{-1}\\) term, so the residue is zero. The singularity is nevertheless a double pole, because the leading coefficient of \\(z^{-2}\\) is nonzero.
</details>

### Exercise 10.2
<a id="residue-theorem-ex-2"></a>
Evaluate \\(\\int_{|z|=2} z/(z^2-1)\\,dz\\), positively oriented.
<details><summary>Hint 1</summary>
Locate both denominator zeros before applying a formula.
</details>
<details><summary>Hint 2</summary>
At each zero the numerator and the derivative of the denominator have the same ratio.
</details>
<details><summary>Solution</summary>
The poles are \\(1,-1\\), neither on the contour. Their residues are \\(a/(2a)=1/2\\) at each pole. The sum is one, so the integral is \\(2\\pi i\\).
</details>

### Exercise 10.3
<a id="residue-theorem-ex-3"></a>
Find the residue of \\(e^{2z}/z^4\\) at zero.
<details><summary>Hint 1</summary>
Identify which Taylor coefficient survives division by \\(z^4\\).
</details>
<details><summary>Hint 2</summary>
The required coefficient is that of the cubic term of the exponential.
</details>
<details><summary>Solution</summary>
The cubic coefficient of \\(e^{2z}\\) is \\(2^3/3!=4/3\\). Thus the residue is \\(4/3\\). Equivalently the third derivative of \\(e^{2z}\\) at zero, divided by \\(3!\\), gives the same answer.
</details>

### Exercise 10.4
<a id="residue-theorem-ex-4"></a>
Compute the complete positive boundary integral of \\(1/z\\) on \\(1<|z|<3\\).
<details><summary>Hint 1</summary>
The origin is in the excluded hole.
</details>
<details><summary>Hint 2</summary>
Give the inner circle its induced clockwise orientation.
</details>
<details><summary>Solution</summary>
The outer integral is \\(2\\pi i\\) and the inner clockwise integral is \\(-2\\pi i\\), giving zero. The function is holomorphic on a neighborhood of the closed annulus, so the boundary Cauchy theorem also gives zero. Including a residue at zero in the annular region would be incorrect.
</details>

### Exercise 10.5
<a id="residue-theorem-ex-5"></a>
Find the residue of \\(1/(z^2(z-1))\\) at zero and at one.
<details><summary>Hint 1</summary>
The pole orders differ at the two points.
</details>
<details><summary>Hint 2</summary>
At zero differentiate \\(1/(z-1)\\); at one take the simple-pole limit.
</details>
<details><summary>Solution</summary>
At zero the derivative of \\(1/(z-1)\\) is \\(-1/(z-1)^2\\), whose value is \\(-1\\). At one the residue is \\(1/1^2=1\\). Thus a contour enclosing both has zero integral, although each separate residue is nonzero.
</details>

### Exercise 10.6
<a id="residue-theorem-ex-6"></a>
Show that \\(z^{-3}+2z\\) has a primitive on the punctured plane and give one.
<details><summary>Hint 1</summary>
Check the coefficient which would require a logarithm upon integration.
</details>
<details><summary>Hint 2</summary>
Integrate the two integer powers directly.
</details>
<details><summary>Solution</summary>
There is no inverse first-power term. A primitive is \\(-1/(2z^2)+z^2\\), whose derivative is the given function on the punctured plane. Its closed contour integrals therefore vanish, despite its pole at zero.
</details>

### Exercise 10.7
<a id="residue-theorem-ex-7"></a>
Evaluate \\(\\int_\\gamma dz/(z-a)\\) when a circle centered at \\(a\\) is traversed three times clockwise.
<details><summary>Hint 1</summary>
Orientation and multiplicity are independent pieces of information.
</details>
<details><summary>Hint 2</summary>
Its index about the center is minus three.
</details>
<details><summary>Solution</summary>
One counterclockwise circuit gives \\(2\\pi i\\). Clockwise traversal negates that value, and three circuits multiply it by three. The answer is \\(-6\\pi i\\), agreeing with residue one times index minus three.
</details>

### Exercise 10.8
<a id="residue-theorem-ex-8"></a>
Find the residue of \\(z\\cos(1/z)\\) at zero.
<details><summary>Hint 1</summary>
Use the cosine expansion in powers of \\(1/z\\).
</details>
<details><summary>Hint 2</summary>
The inverse second-power term becomes an inverse first-power term after multiplication by \\(z\\).
</details>
<details><summary>Solution</summary>
The expansion begins \\(z-1/(2z)+1/(24z^3)-\\cdots\\). Its residue is \\(-1/2\\). In particular a positively oriented circle about zero has integral \\(-\\pi i\\), regardless of its radius.
</details>

### Exercise 10.9
<a id="residue-theorem-ex-9"></a>
If \\(f\\) has a simple pole at \\(a\\) with residue \\(r\\), and \\(g\\) is holomorphic near \\(a\\), prove that the residue of \\(gf\\) is \\(g(a)r\\). Explain why a higher-order pole changes the rule.
<details><summary>Hint 1</summary>
Multiply the local expansions and collect just one coefficient.
</details>
<details><summary>Hint 2</summary>
For a simple pole, no negative power below minus one can interact with a positive Taylor coefficient.
</details>
<details><summary>Solution</summary>
Write \\(f=r/(z-a)+h\\), with \\(h\\) holomorphic, and \\(g=g(a)+(z-a)k\\). Their product has inverse first-power coefficient \\(g(a)r\\). For a higher-order pole, lower negative powers can multiply higher Taylor terms: \\(f=1/(z-a)^2\\), \\(g=z-a\\) gives residue one although \\(g(a)\\operatorname{Res}(f,a)=0\\).
</details>

### Exercise 10.10
<a id="residue-theorem-ex-10"></a>
Explain why the residue theorem cannot directly evaluate an ordinary integral over the unit circle of \\(1/(z-1)\\).
<details><summary>Hint 1</summary>
Compare the pole location with the contour image.
</details>
<details><summary>Hint 2</summary>
The theorem requires the integrand to be defined in a neighborhood of every boundary point.
</details>
<details><summary>Solution</summary>
The point one lies on the path. The integrand is undefined there and its parametrized integrand has a nonintegrable simple singularity in the ordinary sense. One may instead define a principal value or choose an indented path, but those are additional constructions with their own limits, not the ordinary contour integral requested.
</details>

### Exercise 10.11
<a id="residue-theorem-ex-11"></a>
For a rational function \\(R\\) satisfying \\(R(z)=O(|z|^{-2})\\) at infinity, prove that the sum of all its finite residues is zero.
<details><summary>Hint 1</summary>
Use one sufficiently large circle containing every finite pole.
</details>
<details><summary>Hint 2</summary>
The circle length grows linearly while the bound on the function decays quadratically.
</details>
<details><summary>Solution</summary>
For all sufficiently large radii, the residue theorem makes the circle integral \\(2\\pi i\\) times the fixed finite sum. Its modulus is at most \\(2\\pi R\\,C/R^2=2\\pi C/R\\), which tends to zero. The fixed sum must therefore be zero. Finiteness of the poles follows because a rational denominator has only finitely many zeros.
</details>

### Exercise 10.12
<a id="residue-theorem-ex-12"></a>
Suppose \\(f\\) is holomorphic on a punctured disk and \\(\\int_{|z-a|=\\rho}f(z)\\,dz=0\\) for one legal radius. Prove that \\(f\\) has a primitive on that punctured disk, but need not extend across its center.
<details><summary>Hint 1</summary>
Use the small-circle formula to identify the missing Laurent coefficient.
</details>
<details><summary>Hint 2</summary>
Apply the Laurent primitive criterion; use an inverse square to disprove extension.
</details>
<details><summary>Solution</summary>
The integral identity forces the residue to be zero. Termwise integration of all remaining Laurent terms gives a single-valued primitive on the punctured disk by Proposition 10.7. The function \\(1/(z-a)^2\\) satisfies the hypothesis and has primitive \\(-1/(z-a)\\), yet has a pole and cannot extend holomorphically across \\(a\\).
</details>

## Worked example: a contour enclosing two simple poles

Consider \\(f(z)=1/[(z-1)(z+2)]\\). Its residues at one and minus two are \\(1/3\\) and \\(-1/3\\). A positively oriented circle of radius \\(3/2\\) encloses one but excludes minus two, so its integral is \\(2\\pi i/3\\). A circle of radius three encloses both and has integral zero. The rational function has no singularity on either circle. Changing the contour changed the collection of enclosed poles; it did not change either local residue.

The same answer follows by partial fractions: \\(f(z)=\\tfrac13/(z-1)-\\tfrac13/(z+2)\\). Each integral of a reciprocal term is \\(2\\pi i\\) times the circle's winding number about its pole. This gives a second derivation that makes orientation and enclosure explicit. If the radius-three circle were traversed twice, both winding numbers would become two and the total would still be zero. If only the first pole were enclosed by a clockwise circle, the answer would be \\(-2\\pi i/3\\).

This example also shows why the formula requires the contour to avoid poles. At radius one, the point \\(z=1\\) lies on the path and the ordinary contour integral is undefined. Deforming through that point is not a harmless limiting operation: passing the pole changes the winding number and therefore changes the integral by \\(2\\pi i/3\\).

## Sources

This chapter's exposition and exercises are original. The local Laurent and contour arguments may be compared with Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), particularly its treatment of counting zeros and singularities. No general infinite-contour or unrestricted homology theorem is needed for the finite-region statement proved here.

## Summary

A residue is a Laurent coefficient, and a small circle extracts it exactly. Removing finitely many disjoint singularity disks converts the boundary Cauchy theorem into the residue theorem. Pole formulas compute the extracted coefficient, while the index records orientation and repeated traversal. Zero residue is exactly the local punctured-disk primitive condition; it is not a removability condition. The next chapter adds the limiting estimates needed to turn finite contour identities into real improper integrals.
`;export{e as default};