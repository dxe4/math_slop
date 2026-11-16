var e=`---
parent_id: book-complex-analysis
chapter_id: conformal-mobius
title: Conformal maps and Möbius transformations
level: graduate
license: CC BY-SA 4.0
---

# Conformal maps and Möbius transformations

A complex derivative is multiplication by one complex number. When that number is nonzero, multiplication rotates every direction by the same angle and stretches every length by the same factor. This local rigidity explains angle preservation. It does not by itself imply that a map is globally one-to-one. The exponential is the standard warning: locally perfect geometry can coexist with repeated global coverage.

Preparation: [Zeros, identity theorem, maximum modulus](zeros-identity-maximum-modulus.md), [Argument principle and Rouché](argument-principle-rouche.md), and [Harmonic functions and the Poisson kernel](harmonic-functions-poisson.md). We use the Schwarz lemma, its equality case, and the proved local holomorphic inverse theorem. A domain is an open connected subset of the plane; a biholomorphism is a bijective holomorphic map whose inverse is holomorphic.

## Infinitesimal geometry
<a id="conformal-nonzero-derivative"></a>

**Definition 14.1 (Conformal map).** A holomorphic map is conformal at \\(a\\) when \\(f'(a)\\ne0\\). A conformal equivalence between domains is a biholomorphism. In this chapter the term is orientation preserving; antiholomorphic angle-preserving maps, such as conjugation, are a different class.

**Proposition 14.2 (Angles and local inverses).** At a conformal point, oriented angles between regular intersecting curves are preserved. Every holomorphic injection between domains is conformal and has a holomorphic inverse onto its image.

*Proof.* If two differentiable curves through \\(a\\) have nonzero tangents \\(v,w\\), their image tangents are \\(f'(a)v,f'(a)w\\). The ratio of the image tangents equals \\(v/w\\), so its argument, the oriented angle, is unchanged. Their lengths are both multiplied by \\(|f'(a)|\\). For an injective function, its derivative cannot vanish: the local zero-counting consequence of Rouché in the preceding chapter would otherwise give at least two distinct preimages of a nearby value. The local inverse theorem therefore gives a holomorphic inverse around each image point. These inverses agree on overlaps by injectivity, producing the global inverse on the open image. ∎

At a zero of the derivative, the first nonconstant Taylor term has degree \\(m\\ge2\\). Its leading behavior multiplies angles by \\(m\\), and nearby values have \\(m\\) local preimages counted with multiplicity. That is why a critical point is incompatible with a conformal equivalence. Conversely, a nowhere-zero derivative guarantees only local equivalence; it does not rule out different distant points sharing the same image.

**Proposition 14.3 (Harmonicity under conformal change).** If \\(u\\) is harmonic on a domain \\(V\\) and \\(f:U\\to V\\) is holomorphic, then \\(u\\circ f\\) is harmonic on \\(U\\). For \\(C^2\\) \\(u\\),
\\[
\\Delta(u\\circ f)=|f'|^2(\\Delta u)\\circ f.
\\]

*Proof.* Write \\(f=p+iq\\). The real chain rule gives a second-derivative expression containing the Hessian of \\(u\\) contracted with the gradients of \\(p,q\\), plus \\(u_p\\Delta p+u_q\\Delta q\\). The latter terms vanish because \\(p,q\\) are harmonic. Cauchy–Riemann gives \\(|\\nabla p|^2=|\\nabla q|^2=|f'|^2\\) and \\(\\nabla p\\cdot\\nabla q=0\\). Hence the mixed Hessian terms cancel and the pure ones give the displayed formula. ∎

This lets a conformal equivalence transport a known harmonic solution. Transporting boundary conditions additionally requires control of how the map approaches the boundary. A biholomorphism between open domains does not, by its definition alone, extend continuously to every boundary point. Explicit rational maps below have transparent boundary behavior, but general boundary extension is a separate theorem.

## Möbius maps on the sphere
<a id="mobius-sphere"></a>

**Definition 14.4 (Möbius transformation).** For complex \\(a,b,c,d\\) with \\(ad-bc\\ne0\\), set
\\[
T(z)=\\frac{az+b}{cz+d}.
\\]
On the Riemann sphere \\(\\widehat{\\mathbb C}=\\mathbb C\\cup\\{\\infty\\}\\), define \\(T(-d/c)=\\infty\\) when \\(c\\ne0\\), \\(T(\\infty)=a/c\\) when \\(c\\ne0\\), and \\(T(\\infty)=\\infty\\) when \\(c=0\\). Multiplying all four coefficients by the same nonzero number does not change the map.

**Theorem 14.5 (Group and conformality).** Möbius transformations are bijective holomorphic maps of the sphere, with Möbius inverses and compositions. In finite coordinates away from a pole,
\\[
T'(z)=\\frac{ad-bc}{(cz+d)^2}\\ne0.
\\]

*Proof.* Solving \\(w=(az+b)/(cz+d)\\) gives \\(z=(dw-b)/(-cw+a)\\). The inverse determinant is again nonzero. This algebra also verifies the exceptional values involving infinity. Matrix multiplication of the coefficient matrices gives composition, and its determinant is the product of the two nonzero determinants. The derivative follows by the quotient rule.

Holomorphy at infinity or at a pole is checked in sphere coordinates: near a target infinity use \\(1/T(z)=(cz+d)/(az+b)\\), which has a simple zero at the pole because the determinant is nonzero. Near a source infinity substitute \\(z=1/\\zeta\\). The resulting quotient \\((a+b\\zeta)/(c+d\\zeta)\\), or its reciprocal if necessary, is holomorphic at \\(\\zeta=0\\) with nonzero local derivative. Thus the finite-coordinate exceptions are ordinary conformal points on the sphere. ∎

The determinant condition excludes constant quotients and indeterminate expressions where numerator and denominator share their zero. It is also what makes the pole simple and the inverse well-defined. An affine map is the case \\(c=0\\). When \\(c\\ne0\\), rewrite
\\(T(z)=a/c+(bc-ad)/(c^2(z+d/c))\\).
Thus every Möbius map is a composition of translations, nonzero complex scalings, and inversion \\(z\\mapsto1/z\\).

## Generalized circles and three-point normalization
<a id="generalized-circles-three-points"></a>

A generalized circle means a Euclidean circle, or a Euclidean line together with infinity. It is described in finite coordinates by
\\[
A|z|^2+Bz+\\overline B\\overline z+C=0,
\\qquad A,C\\in\\mathbb R,
\\]
with nondegenerate coefficients giving a genuine circle or line. Ordinary circles have \\(A\\ne0\\), and lines have \\(A=0\\), \\(B\\ne0\\).

**Theorem 14.6 (Circle preservation).** A Möbius map sends generalized circles to generalized circles.

*Proof.* Translations and nonzero complex scalings plainly preserve this class by substitution. For inversion substitute \\(z=1/w\\) into the displayed equation and multiply by \\(|w|^2\\). The result is
\\(C|w|^2+\\overline B w+B\\overline w+A=0\\).
This again has the same form. The sphere interpretation includes a possible point at infinity when the original circle passes through zero. Nondegeneracy is preserved because inversion is bijective; an entire genuine circle or line cannot collapse to a point. The decomposition of a general Möbius map into these elementary maps completes the proof. ∎

**Theorem 14.7 (Three-point theorem).** For any two ordered triples of distinct sphere points, exactly one Möbius map sends the first triple to the second.

*Proof.* For distinct finite \\(z_1,z_2,z_3\\), the map
\\[
S(z)=\\frac{(z-z_1)(z_2-z_3)}{(z-z_3)(z_2-z_1)}
\\]
sends them respectively to \\(0,1,\\infty\\). If one is infinity, take the limiting expression, or first apply an inversion with pole away from the three points to make all of them finite. Compose this normalization with the inverse normalization for the target triple to prove existence.

For uniqueness, the quotient of two such maps by composition fixes \\(0,1,\\infty\\). Fixing infinity forces \\(c=0\\), so the map is affine. Fixing zero forces its translation to vanish; fixing one forces its scaling to equal one. It is the identity. ∎

Three points determine the image boundary circle, but a test point determines which side is the image domain. This extra step is easy to overlook. A map may send the real axis to the unit circle while sending the upper half-plane either to the disk or its exterior, depending on the chosen order and coefficients.

## Automorphisms of the disk
<a id="disk-automorphism-classification"></a>

For \\(|a|<1\\), define
\\[
\\phi_a(z)=\\frac{z-a}{1-\\overline a z}.
\\]
Its denominator does not vanish in the closed unit disk except possibly outside it, since \\(|\\overline a z|<1\\) there. Direct expansion gives
\\[
1-|\\phi_a(z)|^2=
\\frac{(1-|a|^2)(1-|z|^2)}{|1-\\overline a z|^2}.
\\]
Thus it maps the disk into itself, sends \\(a\\) to zero, and has inverse \\((w+a)/(1+\\overline a w)\\), also a disk map.

**Theorem 14.8 (Disk automorphisms).** Every biholomorphism of the unit disk has the form \\(e^{i\\theta}\\phi_a\\), with \\(|a|<1\\) and real \\(\\theta\\).

*Proof.* Let \\(F\\) be a disk automorphism and \\(a=F^{-1}(0)\\). Then \\(G=F\\circ\\phi_a^{-1}\\) is an automorphism fixing zero. Schwarz's lemma gives \\(|G(z)|\\le|z|\\); applying it to \\(G^{-1}\\) gives the reverse inequality. Hence \\(|G(z)|=|z|\\) everywhere. The equality case of Schwarz's lemma yields \\(G(z)=e^{i\\theta}z\\). Solving for \\(F\\) proves the statement. Conversely, the displayed functions are compositions of disk automorphisms, so all occur. ∎

This classification supplies uniqueness in the Riemann mapping theorem: two equivalences to the disk with the same source point sent to zero differ by a rotation. Requiring their derivatives at that point to be positive real numbers removes the rotation. The derivative normalization refers to the chosen complex coordinates; it is a convenient way to fix the remaining one-dimensional freedom.

## Worked examples

### Example 14.9: Upper half-plane to disk

Set \\(T(z)=(z-i)/(z+i)\\). Its pole is \\(-i\\), outside the upper half-plane. For \\(z=x+iy\\),
\\[
|z+i|^2-|z-i|^2=4y.
\\]
Thus \\(y>0\\) is equivalent to \\(|T(z)|<1\\). The inverse \\(z=i(1+w)/(1-w)\\) has positive imaginary part for \\(|w|<1\\), so this is a conformal equivalence. The real axis maps to the unit circle, with infinity mapping to one. The point \\(i\\) maps to zero and \\(T'(i)=1/(2i)=-i/2\\), a rotation followed by a scale of one half.

To transport a disk harmonic function \\(u\\), compose with \\(T\\). Its boundary interpretation on the real axis follows directly from the rational formula, away from the point at infinity. No general theorem about arbitrary boundary extensions is required for this explicit map.

### Example 14.10: A sector and a choice of power

Let \\(S=\\{re^{i\\theta}:r>0,0<\\theta<\\alpha\\}\\), where \\(0<\\alpha<2\\pi\\). Choose the argument in that interval and set \\(f(z)=z^{\\pi/\\alpha}\\). It maps the argument interval bijectively onto \\((0,\\pi)\\), and maps the positive radius bijectively onto the positive radius. Hence it is a bijection from the sector to the upper half-plane. Its derivative \\((\\pi/\\alpha)z^{\\pi/\\alpha-1}\\) never vanishes in the sector. The inverse is the corresponding power on the upper half-plane.

Composing with Example 14.9 produces a disk equivalence. The origin is not an interior point of the sector and is not covered by the derivative assertion. Including a vertex where a fractional power has singular derivative would confuse boundary geometry with interior conformality.

### Example 14.11: Mapping three points and testing a side

Find the Möbius map taking \\(0,1,\\infty\\) to \\(-1,0,1\\). Fixing the image of infinity gives the ratio of leading coefficients one. The zero at one gives numerator \\(z-1\\). The value at zero then requires denominator \\(z+1\\). Thus \\(T(z)=(z-1)/(z+1)\\).

The real axis is mapped to itself as a generalized circle. At \\(z=i\\), the value is \\(i\\), so the upper half-plane goes to the upper half-plane, not the lower. More explicitly \\(\\operatorname{Im}T(z)=2\\operatorname{Im}z/|z+1|^2\\), confirming the choice of side everywhere. The pole at \\(-1\\) lies on the boundary, so it causes no interior obstruction.

## Exercises

### Exercise 14.1
<a id="conformal-mobius-ex-1"></a>
Where is \\(z^3\\) conformal, and why is it not an equivalence of the punctured plane to itself?
<details><summary>Hint 1</summary>
Compute its derivative.
</details>
<details><summary>Hint 2</summary>
Compare points differing by a cube root of unity.
</details>
<details><summary>Solution</summary>
Its derivative is \\(3z^2\\), nonzero exactly away from zero. But \\(z,omega z,omega^2z\\) share the same image for a nontrivial cube root (omega). Thus it is locally conformal on the punctured plane and not globally injective there.
</details>

### Exercise 14.2
<a id="conformal-mobius-ex-2"></a>
Find the inverse of \\(T(z)=(2z+1)/(z+3)\\) and its finite pole.
<details><summary>Hint 1</summary>
Solve the equation \\(w(z+3)=2z+1\\).
</details>
<details><summary>Hint 2</summary>
Keep the exceptional sphere values in mind.
</details>
<details><summary>Solution</summary>
Solving gives \\(z=(1-3w)/(w-2)\\). The original pole is \\(-3\\), sent to infinity; infinity is sent to two, the inverse's pole. The determinant \\(6-1=5\\ne0\\), so these formulas define a sphere bijection.
</details>

### Exercise 14.3
<a id="conformal-mobius-ex-3"></a>
Find the image under inversion of the line \\(\\operatorname{Re}z=1\\).
<details><summary>Hint 1</summary>
Substitute \\(z=1/w\\) into the real-part equation.
</details>
<details><summary>Hint 2</summary>
Multiply by \\(|w|^2\\) and complete a square.
</details>
<details><summary>Solution</summary>
Writing \\(w=u+iv\\), the equation becomes \\(u/(u^2+v^2)=1\\), or \\((u-1/2)^2+v^2=1/4\\). On the sphere the original line includes infinity, which maps to zero, so the full image is that circle including zero. For only finite source points, zero is omitted.
</details>

### Exercise 14.4
<a id="conformal-mobius-ex-4"></a>
Prove directly the displayed identity for \\(1-|\\phi_a(z)|^2\\).
<details><summary>Hint 1</summary>
Put both terms over \\(|1-\\overline a z|^2\\).
</details>
<details><summary>Hint 2</summary>
The cross terms cancel when subtracting \\(|z-a|^2\\).
</details>
<details><summary>Solution</summary>
The numerator is \\(|1-\\overline a z|^2-|z-a|^2\\). Expanding gives \\(1-\\overline a z-a\\overline z+|a|^2|z|^2-|z|^2+z\\overline a+\\overline z a-|a|^2\\), equal to \\((1-|a|^2)(1-|z|^2)\\). Division proves the identity and its positive sign in the disk.
</details>

### Exercise 14.5
<a id="conformal-mobius-ex-5"></a>
Classify disk automorphisms fixing zero and having positive real derivative there.
<details><summary>Hint 1</summary>
Use the automorphism classification with \\(a=0\\).
</details>
<details><summary>Hint 2</summary>
A positive real number of modulus one is one.
</details>
<details><summary>Solution</summary>
Such an automorphism is \\(e^{i\\theta}z\\). Its derivative is \\(e^{i\\theta}\\), and the normalization forces that number to equal one. Thus the identity is the only possibility.
</details>

### Exercise 14.6
<a id="conformal-mobius-ex-6"></a>
Find a conformal equivalence from the first quadrant to the unit disk.
<details><summary>Hint 1</summary>
Square to map its angle interval onto the upper half-plane.
</details>
<details><summary>Hint 2</summary>
Compose with the Cayley map from Example 14.9.
</details>
<details><summary>Solution</summary>
The map is \\((z^2-i)/(z^2+i)\\). Squaring is injective on arguments between zero and \\(\\pi/2\\), with image the upper half-plane; the Cayley map is an equivalence from there to the disk. Their composition therefore has the required properties.
</details>

### Exercise 14.7
<a id="conformal-mobius-ex-7"></a>
Give a holomorphic function with nowhere-zero derivative which is not injective.
<details><summary>Hint 1</summary>
Use a periodic entire function.
</details>
<details><summary>Hint 2</summary>
The exponential repeats under translation by \\(2\\pi i\\).
</details>
<details><summary>Solution</summary>
The exponential has derivative \\(e^z\\ne0\\) everywhere, but \\(e^{z+2\\pi i}=e^z\\). It is locally conformal throughout the plane and not globally one-to-one. This disproves the converse of the global injection assertion without additional hypotheses.
</details>

### Exercise 14.8
<a id="conformal-mobius-ex-8"></a>
Find the Möbius map taking \\(0,1,\\infty\\) to \\(1,\\infty,0\\).
<details><summary>Hint 1</summary>
The pole is one and infinity must map to zero.
</details>
<details><summary>Hint 2</summary>
The numerator can be a constant, fixed by the value at zero.
</details>
<details><summary>Solution</summary>
The map is \\(1/(1-z)\\). Its values at zero and one are one and infinity, while its value at infinity is zero. The three-point theorem gives uniqueness. Its determinant is nonzero, so it is a legitimate Möbius transformation.
</details>

### Exercise 14.9
<a id="conformal-mobius-ex-9"></a>
Show that a Möbius transformation fixing three distinct sphere points is the identity.
<details><summary>Hint 1</summary>
Conjugate the three fixed points to \\(0,1,\\infty\\).
</details>
<details><summary>Hint 2</summary>
A map fixing infinity is affine.
</details>
<details><summary>Solution</summary>
After conjugation, the map is \\(az+b\\), since it fixes infinity. Fixing zero gives \\(b=0\\); fixing one gives \\(a=1\\). The conjugated map is identity, so the original is identity too. The distinctness assumption is essential because nontrivial rotations can fix two sphere points.
</details>

### Exercise 14.10
<a id="conformal-mobius-ex-10"></a>
If \\(u(w)=\\operatorname{Re}w\\) on the disk, find the transported harmonic function on the upper half-plane using \\(T(z)=(z-i)/(z+i)\\).
<details><summary>Hint 1</summary>
Compute the real part of that quotient by multiplying by the conjugate denominator.
</details>
<details><summary>Hint 2</summary>
The denominator becomes \\(x^2+(y+1)^2\\).
</details>
<details><summary>Solution</summary>
The numerator's real part is \\(x^2+y^2-1\\). Hence the transported function is \\((x^2+y^2-1)/(x^2+(y+1)^2)\\). It is harmonic for \\(y>0\\) by conformal invariance, or because it is the real part of the holomorphic rational function \\(T\\).
</details>

### Exercise 14.11
<a id="conformal-mobius-ex-11"></a>
Explain why complex conjugation preserves ordinary angles but is excluded from our holomorphic definition of conformality.
<details><summary>Hint 1</summary>
Compare oriented tangent ratios under conjugation.
</details>
<details><summary>Hint 2</summary>
Its real Jacobian has negative determinant.
</details>
<details><summary>Solution</summary>
Conjugation negates the argument of a ratio, reversing oriented angles while preserving their magnitudes. Its matrix is diagonal with entries one and minus one, determinant minus one. It is antiholomorphic rather than holomorphic and reverses orientation. The chapter's conformal maps preserve oriented angles.
</details>

### Exercise 14.12
<a id="conformal-mobius-ex-12"></a>
Prove that two disk equivalences from a domain which both send \\(a\\) to zero and have positive real derivatives at \\(a\\) are equal.
<details><summary>Hint 1</summary>
Compose one equivalence with the inverse of the other.
</details>
<details><summary>Hint 2</summary>
The result is a disk automorphism fixing zero, and its derivative is a positive real ratio.
</details>
<details><summary>Solution</summary>
If the maps are \\(F,G\\), then \\(G\\circ F^{-1}\\) is a disk automorphism fixing zero. It is a rotation. Its derivative at zero is \\(G'(a)/F'(a)>0\\), so the rotation factor is one. Thus \\(G\\circ F^{-1}\\) is identity, and \\(F=G\\).
</details>

## Worked example: the Cayley map and a boundary check

The map \\(C(z)=(z-i)/(z+i)\\) is defined throughout the upper half-plane because its pole \\(-i\\) lies below it. For \\(z=x+iy\\) with \\(y>0\\),
\\[
 |z+i|^2-|z-i|^2=(x^2+(y+1)^2)-(x^2+(y-1)^2)=4y>0.
\\]
Hence \\(|C(z)|<1\\). On the real axis, the same difference is zero and \\(|C(x)|=1\\). The point \\(i\\) goes to zero; as \\(z\\to\\infty\\) on the sphere, \\(C(z)\\to1\\). Solving for the inverse gives \\(z=i(1+w)/(1-w)\\), whose imaginary part is positive for \\(|w|<1\\) because
\\[
 \\operatorname{Im}\\left(i\\frac{1+w}{1-w}\\right)=\\frac{1-|w|^2}{|1-w|^2}>0.
\\]
Thus the map is a biholomorphism of the upper half-plane onto the disk. Checking one interior point and the inverse establishes the side of the boundary circle that is mapped, a step the three-point theorem alone does not settle.

## How a Möbius map acts on a circle through its pole

Consider inversion \\(I(z)=1/z\\). A circle \\(|z-a|=r\\) has equation \\(|z|^2-2\\operatorname{Re}(\\overline a z)+|a|^2-r^2=0\\). Substituting \\(z=1/w\\) and multiplying by \\(|w|^2\\) gives
\\[
 1-2\\operatorname{Re}(\\overline a\\,\\overline w)+(|a|^2-r^2)|w|^2=0.
\\]
If \\(|a|\\ne r\\), the coefficient of \\(|w|^2\\) is nonzero and the image is another circle. If \\(|a|=r\\), the original circle passes through zero, the pole of inversion. The quadratic term disappears and the image is a line, together with infinity on the sphere. For example, \\(|z-1|=1\\) becomes \\(2\\operatorname{Re}w=1\\). This calculation makes “generalized circle” necessary rather than an optional change of vocabulary.

The image of a closed Euclidean disk under inversion requires an additional side check. A circle equation identifies its boundary, but inversion may send the disk to the exterior of the image circle when the original disk contains the pole. Near the pole the image tends toward infinity. To determine the correct image domain, evaluate one interior test point that is not the pole, or track the inequality in the transformed equation. This is the same side-selection issue encountered when mapping a half-plane to a disk.

## Local geometry versus global injectivity

For \\(f(z)=e^z\\), the derivative is \\(e^z\\ne0\\) everywhere, so the map preserves oriented angles locally at every finite point. Yet \\(f(z+2\\pi i)=f(z)\\), so it is not injective on the plane and has no global inverse there. Restrict it to the strip \\(-\\pi<\\operatorname{Im}z<\\pi\\); equality of two exponentials in that strip would make their difference an integral multiple of \\(2\\pi i\\), and the imaginary-part difference has absolute value less than \\(2\\pi\\), forcing that multiple to be zero. The restriction is injective and maps onto the plane cut along the nonpositive real axis. Its inverse is the principal logarithm on that slit plane. The strip boundaries map to the two sides of the cut, showing how a domain restriction turns a local equivalence into a global one.

The derivative of an inverse is \\((f^{-1})'(f(z))=1/f'(z)\\), where the inverse exists. For the restricted exponential this is \\(1/w\\), which is holomorphic on the slit plane. This derivative identity does not independently construct a global inverse; the injectivity and image calculation do that work. It is useful for checking the resulting map after its domain has been established.

## Disk normalization and uniqueness

Let \\(F:D\\to\\mathbb D\\) be any biholomorphism and choose \\(a\\in D\\). Compose \\(F\\) with a disk automorphism carrying \\(F(a)\\) to zero. The derivative at \\(a\\) is nonzero, so a further rotation makes it positive real. This produces a normalized map. If \\(F_1,F_2\\) are both normalized, then \\(F_2\\circ F_1^{-1}\\) is a disk automorphism fixing zero, hence a rotation. Its derivative at zero is \\(F_2'(a)/F_1'(a)>0\\); a rotation with positive real derivative must be the identity. Thus normalization removes exactly the remaining rotational freedom. This argument proves uniqueness *conditional on existence*; the next chapter supplies existence for every proper simply connected planar domain.

## A cross-ratio calculation for four points

Three ordered sphere points determine one Möbius transformation, leaving no freedom to place a fourth independently. For finite points with distinct denominators, the cross ratio \\([z_1,z_2;z_3,z_4]=(z_1-z_3)(z_2-z_4)/[(z_1-z_4)(z_2-z_3)]\\) is unchanged by any Möbius map. Translation and nonzero scaling cancel immediately in this quotient. For inversion, each difference becomes \\(1/z_i-1/z_j=(z_j-z_i)/(z_iz_j)\\); the point factors cancel between numerator and denominator. Since every Möbius map is composed of these elementary maps, the invariant follows. Limiting forms cover a point at infinity.

For example, a proposed map sending \\((0,1,\\infty)\\) to \\((a,b,c)\\) also sends a fourth point \\(w\\) to the unique target having the same cross ratio with the normalized triple. If a proposed fourth image violates that equality, no Möbius map can realize all four assignments. The cross ratio is therefore a practical consistency test rather than just another identity. It depends on the order of its four entries: permuting them may replace the value by its reciprocal or another fractional transform, so the order must be fixed before comparing two configurations.

## Conformal transport of one explicit harmonic function

The imaginary part \\(v(w)=\\operatorname{Im}w\\) is harmonic on the upper half-plane. Compose it with the inverse Cayley map \\(C^{-1}(\\zeta)=i(1+\\zeta)/(1-\\zeta)\\). The resulting disk function is
\\[
 u(\\zeta)=\\operatorname{Im}C^{-1}(\\zeta)=\\frac{1-|\\zeta|^2}{|1-\\zeta|^2}.
\\]
It is positive and harmonic on the open disk by conformal transport. It tends to zero at each boundary point different from one, but grows without bound as \\(\\zeta\\to1\\) radially. Therefore it does not solve a continuous-boundary Dirichlet problem with zero boundary data on the entire circle. The exceptional point one is where the inverse Cayley map approaches infinity, and its behavior must be included when transferring a boundary problem.

This example shows the exact role of the boundary caveat after Proposition 14.3. Holomorphic composition preserves the interior Laplace equation automatically. It does not preserve a proposed boundary condition unless the conformal map has a suitable boundary extension and the transformed data behave well at every boundary point. The failure at one is not a failure of harmonicity; it is a failure of the continuous-closure hypothesis used in the disk uniqueness theorem.

## Sources

The exposition and exercises are original. For the sphere viewpoint, disk automorphisms and their role in uniformization, see Jiří Lebl's author-hosted [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/). General boundary extension theorems are not used or asserted here.

## Summary

A nonzero complex derivative preserves oriented angles locally; injectivity supplies a global holomorphic inverse. Möbius maps extend this geometry across infinity, preserve generalized circles, and are determined by three ordered points. Schwarz's lemma classifies disk automorphisms and fixes the uniqueness normalization for the next chapter. Explicit powers and Cayley transformations give concrete equivalences, while the Riemann mapping theorem will establish existence for every proper simply connected planar domain.
`;export{e as default};