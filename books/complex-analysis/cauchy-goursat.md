
# The Cauchy–Goursat Theorem

A holomorphic function has zero integral around every sufficiently small triangle. From that local fact we will obtain primitives on convex domains and invariance under homotopies. The proof uses only existence of the complex derivative, rather than continuity of that derivative. This distinction is the point of Goursat's argument.

Read [Paths and Contour Integrals](paths-contour-integrals.md). All triangles below include their interiors and edges, and a holomorphy hypothesis on a triangle means holomorphy on an open neighborhood of that whole compact set. A function defined only along its boundary is not enough.

## The nested-triangle proof

**Theorem 6.1 (Goursat's triangle theorem).** If \(f\) is holomorphic on an open set containing a closed triangle \(T\), then the positively oriented boundary integral is zero:
\[
 \int_{\partial T} f(z)\,dz=0.
\]

**Proof.** Joining side midpoints divides the triangle into four similar triangles of half the side lengths. Their positively oriented boundary integrals sum to the original integral because shared internal edges have opposite directions. If the original integral is \(I\), one subtriangle has integral modulus at least \(|I|/4\). Choose it and repeat.

This produces nested closed triangles \(T_n\) with diameters \(d/2^n\), perimeters \(p/2^n\), and integral moduli at least \(|I|/4^n\). Compactness and the shrinking diameter give one common point \(a\) in all the triangles: choosing points from them gives a Cauchy sequence, and their closed nested property places its limit in each one.

Differentiability at \(a\) gives
\[
 f(z)=f(a)+f'(a)(z-a)+(z-a)\varepsilon(z),
 \qquad \varepsilon(z)\to0.
\]
The constant and linear parts have polynomial primitives, so their boundary integrals vanish. On \(T_n\), the remaining factor has modulus at most \((d/2^n)\sup_{T_n}|\varepsilon|\). By ML,
\[
 \frac{|I|}{4^n}\le
 \left|\int_{\partial T_n}f\,dz\right|
 \le\frac{dp}{4^n}\sup_{T_n}|\varepsilon|.
\]
Multiplying by \(4^n\) and letting \(n\to\infty\) yields \(|I|=0\). \(\square\)

No bound on \(f'\) over the triangle was assumed. Only its existence at the limiting point was used. A proof based directly on Green's theorem would ordinarily require additional real differentiability hypotheses, whereas this argument does not.

A polygonal region that can be triangulated inside the holomorphy domain has zero complete boundary integral by summing the triangle theorem. Internal edges cancel. If the polygon surrounds a missing point, such a triangulation inside the domain may not exist; this is precisely where an unjustified “interior cancellation” argument can fail.

## Primitives on convex domains

**Theorem 6.2 (Convex Cauchy theorem).** A holomorphic function on a convex domain has a primitive there. Consequently its integral around every closed contour in that domain is zero.

**Proof.** Fix \(a\) in the domain and define \(F(z)\) as the integral of \(f\) along the straight segment from \(a\) to \(z\). For \(z+h\) sufficiently close to \(z\), the triangle with vertices \(a,z,z+h\) lies in the domain by convexity. Its compactness supplies a neighborhood inside the open domain, so Theorem 6.1 applies. The triangle identity gives
\[
 F(z+h)-F(z)=\int_{[z,z+h]}f(w)\,dw
 =h\int_0^1f(z+th)\,dt.
\]
Continuity of \(f\), already implied by holomorphy, gives \(F'(z)=f(z)\). Degenerate triangles give the same segment identity by direct cancellation. The endpoint formula for primitives proves the closed-contour assertion. \(\square\)

Every holomorphic function therefore has local primitives: choose a small disk around any point. The construction is local even if the full domain has holes. Local existence is enough to prove a global deformation theorem, provided the deformation itself stays in the legal domain.

## Homotopy without assuming differentiable deformations

**Theorem 6.3 (Homotopy Cauchy theorem).** Let \(f\) be holomorphic on \(\Omega\). Suppose two piecewise \(C^1\) closed contours are joined by a continuous homotopy of closed paths lying in \(\Omega\). Their integrals are equal. The same holds for a homotopy of joining paths with fixed endpoints.

**Proof.** Let \(H:[0,1]^2\to\Omega\) be the homotopy, with \(t\) the path parameter. Its compact image has a uniform disk margin \(\delta>0\) inside \(\Omega\), by Lemma 1.8. Uniform continuity permits a finite rectangular grid so fine that the image of each grid cell has diameter less than \(\delta/4\).

Map the grid vertices by \(H\), and join neighboring image vertices by straight segments. For any grid cell, its four vertices and these segments lie in one convex disk contained in \(\Omega\). The local primitive on that disk makes the integral around the resulting four-edge image polygon zero, even if the polygon crosses or degenerates.

Sum these zero integrals over all grid cells. Every interior image segment occurs twice with opposite direction and cancels. On the top and bottom boundaries, the piecewise linear vertex paths can be replaced by the actual original contours: each original subarc and its joining chord lie in a common disk with a primitive, hence have equal integrals.

For a closed-path homotopy, \(H(s,0)=H(s,1)\). The left and right vertex paths are therefore identical and occur with opposite orientations, so they cancel. For fixed-endpoint homotopies they are constant paths and contribute zero. The only remaining terms are the two endpoint contours with opposite signs, proving equality. \(\square\)

The intermediate homotopy paths need only be continuous. We integrated the finite polygonal grid edges, not derivatives of \(H\). This avoids assuming regularity that an arbitrary topological contraction does not possess.

**Corollary 6.4 (Simply connected Cauchy theorem).** Every holomorphic function on a simply connected domain has a primitive, and all its closed-contour integrals vanish.

**Proof.** A closed contour contracts inside the domain to a constant path. Homotopy invariance makes its integral equal to zero. The primitive criterion of Chapter 5 supplies a global primitive. \(\square\)

The domain is nonempty, open, and connected by definition. Simply connectedness supplies the additional contraction property. It is sufficient for every holomorphic function to have a primitive; a particular function may still have one on a domain that is not simply connected, as \(1/z^2\) does on the punctured plane.

## A continuous exceptional point

Cauchy's integral formula will involve a quotient which is holomorphic away from one point and continuous at that point. We need the following extension of the triangle conclusion without assuming the quotient's differentiability at its exceptional point.

**Lemma 6.5 (One continuous exception).** Let \(f\) be continuous on a domain and holomorphic except possibly at one point \(a\). Its integral around any triangle contained with a neighborhood in the domain is zero. On a convex domain it therefore has a primitive.

**Proof.** If \(a\) lies outside the triangle, Goursat applies. If \(a\) is a vertex, cut off a small triangle at that vertex by choosing points on its two adjoining edges tending to \(a\). The remaining quadrilateral is a finite union of triangles whose closed sets avoid \(a\), so its complete boundary integral is zero. Cancelling common edges shows that the original triangle integral equals the small corner-triangle integral. Continuity bounds \(f\) near \(a\), while the corner perimeter tends to zero; ML makes that integral tend to zero.

If \(a\) lies on an edge or in the interior, split the original triangle into two or three triangles with \(a\) as a vertex. Their boundary integrals sum to the original, and each is zero by the vertex argument. This proves all cases. On a convex domain the segment construction of Theorem 6.2 now gives a primitive, using continuity and the just-proved triangle identity. \(\square\)

The lemma has not yet concluded that the exceptional function is holomorphic. Its primitive is holomorphic and has derivative \(f\), but the theorem that derivatives of holomorphic functions are themselves holomorphic comes from Cauchy's formula next. Keeping this logical boundary visible prevents a concealed circular proof.

The same argument can treat finitely many continuous exceptional points by subdividing triangles. The single-point version is sufficient for our immediate use. Boundedness without a specified continuous value is a different removable-singularity question, proved later using Laurent coefficients.

## Global logarithms without using unproved derivative regularity

A nonvanishing holomorphic function on a simply connected domain has a holomorphic logarithm. It is tempting to integrate \(f'/f\) immediately, but at this point we have not proved \(f'\) is holomorphic. The following proof uses continuous argument lifting instead and so avoids that circular step.

**Theorem 6.6 (Holomorphic logarithm and roots).** If \(f\) is holomorphic and never zero on a simply connected domain \(\Omega\), there is holomorphic \(L\) with \(e^L=f\). Consequently, for every positive integer \(n\), \(f\) has a holomorphic \(n\)th root on \(\Omega\).

**Proof.** Fix \(a\in\Omega\) and choose one argument of \(f(a)\). Along any joining path from \(a\) to \(z\), the continuous nonzero path obtained by applying \(f\) has an argument lift, constructed in Chapter 5. Define an argument at \(z\) by the endpoint of that lift with the chosen initial value.

This endpoint is independent of the joining path. Concatenate one path with the reverse of the other to obtain a loop in \(\Omega\). It contracts there; composing the contraction with \(f\) gives a homotopy of loops avoiding zero. Its winding is therefore zero. The argument discrepancy from the two joining paths is exactly \(2\pi\) times that winding, hence zero.

Set \(L(z)=\log|f(z)|+i\theta(z)\) using the resulting argument. To verify continuity and holomorphy, fix \(z_0\). By continuity and nonvanishing, a small disk around \(z_0\) has its image in a disk about \(f(z_0)\) avoiding zero and admitting a local logarithm branch \(\ell\). Add a constant \(2\pi ik\) to match the chosen value at \(z_0\). Extending a joining path by paths in that small disk shows the endpoint construction agrees there with \(\ell\circ f\). Thus \(L\) is locally holomorphic everywhere, and \(e^L=f\).

Finally \(g=e^{L/n}\) is holomorphic and \(g^n=e^L=f\). \(\square\)

Different logarithms differ by an integer period on the connected domain. Different \(n\)th-root choices differ by an \(n\)th root of unity: their quotient is continuous, has \(n\)th power one, and therefore is constant in that finite set. Zeros of \(f\) require separate multiplicity conditions; the theorem expressly assumes none.

After Chapter 7 proves derivative regularity, the primitive of \(f'/f\) becomes another construction of the same logarithm. The present argument identifies exactly what topology contributes: loops in the domain cannot produce an argument discrepancy in the nonzero image.

## Worked example 6.1: a triangle whose pole lies outside

Let \(T\) have vertices \(0,1,i\), and \(f(z)=1/(z-3)\). The triangle lies in the closed unit disk, and an open disk of radius two about zero contains it while avoiding the pole three. The function is holomorphic on that convex disk.

Goursat gives \(\int_{\partial T}f\,dz=0\). A local logarithm of \(z-3\) on the disk provides a compatible primitive as well. The relevant check is the field throughout the triangle and a neighborhood, not merely the fact that no vertex equals the pole.

If the pole were moved inside a surrounding contour, the same reasoning would cease to apply. A nonzero boundary integral would then be consistent with the failed interior hypothesis.

## Worked example 6.2: connectedness does not erase an annular period

On \(1<|z|<3\), the function \(1/z\) is holomorphic. The positive circle \(|z|=2\) has integral \(2\pi i\), so no global primitive exists there.

The domain is connected, but the circle does not contract within it. Homotopy Cauchy only compares contours joined by a legal homotopy. It does not permit pushing this circle through the missing disk. The complete positive boundary of a closed subannulus has outer and inner contributions \(2\pi i\) and \(-2\pi i\), whose sum is zero; this is the correct finite-boundary cancellation.

## Worked example 6.3: a global root on a specified disk

On \(D(0,1)\), \(f(z)=1+z^2\) never vanishes, because its only zeros are \(\pm i\), both on the excluded boundary. The disk is simply connected, so Theorem 6.6 supplies a holomorphic square root \(g\).

Choose its value at zero to be one. Any two roots with that value agree, since their quotient is a constant sign and is one at zero. Differentiating \(g^2=1+z^2\) gives \(g'=z/g\), with legal division because \(g\ne0\). The result is global on the disk; it makes no claim of one root branch on the plane with both zeros removed.

## Worked example 6.4: an exceptional quotient used safely

Let \(f\) be holomorphic on a disk and fix \(a\) inside it. Define
\[
 q(z)=
 \begin{cases}(f(z)-f(a))/(z-a),&z\ne a,\\ f'(a),&z=a.\end{cases}
\]
The derivative definition makes \(q\) continuous at \(a\). Away from \(a\), the quotient rule makes it holomorphic. Lemma 6.5 therefore gives a primitive for \(q\) on the disk and makes every closed integral of \(q\) vanish.

We have not differentiated \(q\) at \(a\) or assumed \(f''\) exists. This is precisely the limited assertion needed for the next chapter's Cauchy formula. The formula will then prove those higher derivatives rather than requiring them in advance.

## Scope of a deformation argument

To replace one contour by another, specify the domain, the whole homotopy image, and the endpoint or closed-path conditions. A picture of two curves with the same endpoints does not guarantee that one can be deformed into the other without crossing a singularity. Nor does a derivative calculation on the boundary establish interior holomorphy.

The proofs here apply to piecewise smooth contours, with only continuous intermediate homotopies. Their compact images stay a positive distance inside the open domain, which permits a finite local-primitive grid. Infinite contours, noncompact deformations, and limits reaching singularities require additional estimates rather than a direct reuse of the finite argument.

## Exercises

### Exercise 6.1 {#cauchy-goursat-ex-triangle-hypotheses}

Why is holomorphy only on the three edges insufficient for Goursat's triangle theorem?

<details><summary>Hint 1</summary>

The nested triangles move into the interior.

</details>
<details><summary>Hint 2</summary>

The limiting point can be anywhere in the triangle.

</details>
<details><summary>Solution</summary>

The subdivision proof needs the function and its derivative at interior points, including the common limiting point. For example, a reciprocal with a pole inside the triangle can be holomorphic near every edge while failing the theorem's interior hypothesis. The stated open neighborhood of the whole triangle supplies the missing control.

</details>

### Exercise 6.2 {#cauchy-goursat-ex-four-triangle-factor}

Explain why one of the four subtriangle integrals has modulus at least one quarter of the original integral's modulus.

<details><summary>Hint 1</summary>

Their oriented sum equals the original integral.

</details>
<details><summary>Hint 2</summary>

Apply the triangle inequality to that sum.

</details>
<details><summary>Solution</summary>

If all four moduli were smaller than |I|/4, the modulus of their sum would be smaller than |I|, contradiction. Hence at least one is at least that large. Shared interior edges cancel because they are traversed in opposite directions.

</details>

### Exercise 6.3 {#cauchy-goursat-ex-goursat-scale}

Track diameter, perimeter and remainder product after n midpoint subdivisions.

<details><summary>Hint 1</summary>

Both lengths halve at each step.

</details>
<details><summary>Hint 2</summary>

The ML product therefore gains a factor one quarter per step.

</details>
<details><summary>Solution</summary>

The diameter is d/2^n and perimeter p/2^n. The differentiability remainder is bounded by the diameter times ε_n, so its integral is at most dp ε_n/4^n. This matches the chosen integral's lower factor 1/4^n and leaves |I|≤dp ε_n→0.

</details>

### Exercise 6.4 {#cauchy-goursat-ex-convex-primitive}

For holomorphic f on a convex domain, explain why the segment-integral definition has derivative f.

<details><summary>Hint 1</summary>

Use the triangle with vertices a,z,z+h.

</details>
<details><summary>Hint 2</summary>

Divide its short-segment identity by h.

</details>
<details><summary>Solution</summary>

Triangle cancellation gives F(z+h)-F(z)=h∫_0^1f(z+th)dt. Continuity makes the average tend to f(z), proving the derivative for every complex direction. Convexity keeps the whole triangle inside the domain, rather than merely its endpoints.

</details>

### Exercise 6.5 {#cauchy-goursat-ex-homotopy-grid}

Why need the intermediate homotopy paths not be differentiable in the proof of Theorem6.3?

<details><summary>Hint 1</summary>

Identify which curves are actually integrated.

</details>
<details><summary>Hint 2</summary>

The grid edges are replaced by straight segments.

</details>
<details><summary>Solution</summary>

The proof integrates a finite polygonal grid joining images of vertices. Each grid cell lies in a disk with a primitive, so its polygon integral is zero. Only the original endpoint contours are used as nonpolygonal integrals, and they are piecewise smooth. Continuity of the homotopy supplies proximity and compactness, not derivatives.

</details>

### Exercise 6.6 {#cauchy-goursat-ex-simply-connected-example}

Show exp(z^2) has a primitive on the plane without evaluating an elementary antiderivative.

<details><summary>Hint 1</summary>

The integrand is entire.

</details>
<details><summary>Hint 2</summary>

The plane is convex.

</details>
<details><summary>Solution</summary>

The composition of entire functions is entire, and the plane is a convex domain. The convex Cauchy theorem therefore constructs a primitive by segment integrals. The absence of a familiar elementary formula does not obstruct existence of a holomorphic primitive.

</details>

### Exercise 6.7 {#cauchy-goursat-ex-punctured-reciprocal-square}

Does 1/z^2 have a primitive on the punctured plane? Does this make the domain simply connected?

<details><summary>Hint 1</summary>

Differentiate -1/z.

</details>
<details><summary>Hint 2</summary>

A condition sufficient for every function is stronger than a property of one function.

</details>
<details><summary>Solution</summary>

The function -1/z is a primitive there, so this particular function has zero closed integrals. The punctured plane is still not simply connected, since 1/z has nonzero circle integral. Simple connectedness guarantees primitives for every holomorphic function; it is not inferred from one successful example.

</details>

### Exercise 6.8 {#cauchy-goursat-ex-continuous-exception}

For q from Worked example6.4, justify continuity at a without assuming f'' exists.

<details><summary>Hint 1</summary>

Use the definition of f'(a).

</details>
<details><summary>Hint 2</summary>

The quotient itself is the derivative limit.

</details>
<details><summary>Solution</summary>

As z→a, (f(z)-f(a))/(z-a) tends to f'(a). Assigning that value at a makes q continuous there. Its holomorphy away from a follows from the quotient rule. The exceptional-point lemma then gives the needed zero integrals without an assertion about q'(a).

</details>

### Exercise 6.9 {#cauchy-goursat-ex-logarithm-nonvanishing}

Why must f be nonzero in the global logarithm theorem?

<details><summary>Hint 1</summary>

The exponential never vanishes.

</details>
<details><summary>Hint 2</summary>

Apply the identity exp L=f at a proposed zero.

</details>
<details><summary>Solution</summary>

If f(a)=0, an identity exp(L(a))=f(a) would require an exponential value zero, impossible. Nonvanishing also permits continuous arguments of the image paths. A function with zeros can sometimes have roots, but logarithms cannot take finite values at those zeros.

</details>

### Exercise 6.10 {#cauchy-goursat-ex-root-choice}

If two holomorphic nth roots of the same nonvanishing function are defined on a domain, compare them.

<details><summary>Hint 1</summary>

Their quotient is continuous and never undefined.

</details>
<details><summary>Hint 2</summary>

Its nth power is one.

</details>
<details><summary>Solution</summary>

The quotient takes values in the finite set of nth roots of unity. Connectedness forces it to be one constant from that set. Specifying equal values at one point forces the constant to be one and the two roots to agree everywhere on the domain.

</details>

### Exercise 6.11 {#cauchy-goursat-ex-log-on-slit}

Explain why the principal square root on the slit plane is consistent with the global root theorem.

<details><summary>Hint 1</summary>

The slit plane has a logarithm already constructed.

</details>
<details><summary>Hint 2</summary>

A logarithm gives an explicit root by exponentiation.

</details>
<details><summary>Solution</summary>

The principal logarithm L is holomorphic on the slit plane, so exp(L/2) is a holomorphic root of z there. This explicit construction verifies the root directly. The domain restriction avoids the nonzero winding that prevents a single root branch on the whole punctured plane.

</details>

### Exercise 6.12 {#cauchy-goursat-ex-deformation-domain}

Two circles surround different subsets of poles. Can one assert equal reciprocal integrals merely because both circles are smooth?

<details><summary>Hint 1</summary>

A legal homotopy must avoid every singularity.

</details>
<details><summary>Hint 2</summary>

A winding number about a pole cannot change during such a homotopy.

</details>
<details><summary>Solution</summary>

No. Smoothness of the endpoint contours does not give a homotopy in the holomorphy domain. If their winding numbers about an excluded pole differ, homotopy invariance forbids a deformation avoiding that pole. The full domain check is needed before applying homotopy Cauchy.

</details>

## Worked example: a local logarithm without a global one

On the right half-plane \(H=\{z:\operatorname{Re}z>0\}\), the reciprocal function is holomorphic and the region is convex. The primitive construction from this chapter therefore gives a holomorphic \(L\) with \(L'=1/z\) and \(L(1)=0\). The derivative of \(e^{-L(z)}z\) is zero, and its value at one is one. Hence \(e^{L(z)}=z\) throughout \(H\). This argument constructs a branch using a primitive and a normalization; it does not assume a prior formula for the argument. On positive real \(x\), comparison with the ordinary real logarithm gives \(L(x)=\log x\). On the imaginary boundary, the construction does not assert a value because those points are outside \(H\).

By contrast, on the punctured plane \(1/z\) has circle integral \(2\pi i\). If it had a global primitive, every closed-path integral would vanish, which is impossible. Thus the failure of a global logarithm is measured by one explicit period. A small disk in the punctured plane still has a local primitive, so this does not contradict local Cauchy theory. The global conclusion depends on the domain and the loops it permits.

## Sources

Original exposition and exercises. Primary references: Jiří Lebl, [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), and Stein–Shakarchi, [Complex Analysis](https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis). The proofs here include the triangle subdivision, polygonal homotopy grid, continuous-exception argument, and nonvanishing logarithm construction; no unproved derivative-continuity theorem is used in them.

## Summary

Goursat's nested triangles prove zero local contour integrals using differentiability at one limiting point. Local primitives then give homotopy invariance and global primitives on simply connected domains. A continuous exceptional point can be handled without assuming a higher derivative. Nonvanishing holomorphic functions on simply connected domains have logarithms and roots. The next chapter uses these results to recover interior values and all derivatives from a boundary circle.
