
# The Complex Plane and Its Topology

Why should putting a square root of minus one into arithmetic produce a theory of geometry and functions? The answer begins with two compatible structures. A complex number is a point of the real plane, so distances, open sets, limits and compactness are available. It is also a number that can be multiplied and divided, so geometric motions can be encoded algebraically. Complex analysis studies the unusually strong consequences of making differentiation respect both structures.

This opening chapter fixes the geometry before any differentiation theorem is used. By its end you should be able to calculate in polar form, identify exactly which sets are open or compact, use a quantitative lower bound for a nonvanishing denominator, and distinguish connectedness from the absence of holes. These distinctions become hypotheses of Cauchy's theorem and logarithm constructions later.

The required preparation is the L3 [Real Analysis](#/books/proof-safe-real-analysis) route through metric spaces, compactness, connectedness and continuity. The [metric-space chapter](../proof-safe-real-analysis/metric-spaces-open-and-closed.md) supplies neighbourhood language; [connectedness](../proof-safe-real-analysis/connectedness-and-the-real-line.md) supplies separations and continuous images. We recall the needed ideas here while specializing them to two dimensions. No contour-integral result is assumed.

## Numbers and geometric multiplication

**Definition 1.1 (Complex field).** A complex number is an ordered pair of real numbers, written \(z=x+iy\), with addition component by component and multiplication
\[
 (x+iy)(u+iv)=(xu-yv)+i(xv+yu).
\]
The real part is \(\operatorname{Re}z=x\), the imaginary part is \(\operatorname{Im}z=y\), and conjugation is \(\overline z=x-iy\). The imaginary part is a real number, not the expression \(iy\).

The multiplication rule gives \(i^2=-1\), but the ordered-pair construction avoids treating that equation as a mysterious instruction. Associativity, commutativity and distributivity follow by expanding real coordinates. The additive and multiplicative identities are \(0+0i\) and \(1+0i\). If \(z\ne0\), then
\[
 z^{-1}=\frac{\overline z}{x^2+y^2}.
\]
Multiplication verifies this identity because \(z\overline z=x^2+y^2>0\). Division is therefore possible by every nonzero complex number, and impossible by zero.

**Definition 1.2 (Modulus and distance).** Set \(|z|=\sqrt{x^2+y^2}\) and \(d(z,w)=|z-w|\). This is the Euclidean norm and distance under the identification \(\mathbb C=\mathbb R^2\).

**Proposition 1.3 (Modulus estimates).** For complex numbers,
\[
 |zw|=|z||w|,\qquad |z+w|\le |z|+|w|,\qquad
 \big||z|-|w|\big|\le |z-w|.
\]

*Proof.* Conjugation respects products, so
\(|zw|^2=zw\overline z\,\overline w=|z|^2|w|^2\); take nonnegative square roots. For addition, \(\operatorname{Re}(z\overline w)\le|z\overline w|=|z||w|\), whence
\[
 |z+w|^2=|z|^2+2\operatorname{Re}(z\overline w)+|w|^2
 \le(|z|+|w|)^2.
\]
Again take square roots. Apply the triangle inequality to \(z=(z-w)+w\), giving \(|z|-|w|\le|z-w|\), and interchange the two numbers for the reverse inequality. ∎

These estimates do more work than explicit square roots. In a limit proof the triangle inequality separates errors, the product rule transports size through multiplication, and the reverse triangle inequality keeps a denominator away from zero. For example, if \(|z-a|<|a|/2\) and \(a\ne0\), then \(|z|>|a|/2\). The strict input restriction gives a positive local lower bound before any reciprocal is estimated.

For \(z\ne0\), choose an angle \(\theta\) with \(z=r(\cos\theta+i\sin\theta)\), where \(r=|z|>0\). The angle is determined modulo \(2\pi\). The real trigonometric addition formulas prove that multiplying two such numbers adds their angles and multiplies their moduli. We sometimes write \(e^{i\theta}\) for \(\cos\theta+i\sin\theta\); at this stage that notation abbreviates a trigonometric expression. Its agreement with the exponential power series is proved later.

**Worked example 1.4 (Roots of a number).** Solve \(z^3=-8\). Every solution has \(|z|^3=8\), hence \(|z|=2\). The target angle is \(\pi\) modulo \(2\pi\), so the possible angles are
\[
 \theta=\frac\pi3,\quad\pi,\quad\frac{5\pi}3
 \pmod {2\pi}.
\]
The roots are \(1+i\sqrt3\), \(-2\), and \(1-i\sqrt3\). Cubing each polar form verifies it. Conversely any root must have the modulus and angle just found, so the list is exhaustive. Listing infinitely many angles differing by \(2\pi\) would repeat numbers rather than produce new roots.

## Open sets, boundaries and local information

**Definition 1.5 (Disks and openness).** The open disk \(D(a,r)\) is \(\{z:|z-a|<r\}\), with \(r>0\). A set \(U\subseteq\mathbb C\) is open when every \(a\in U\) has some disk contained in \(U\). A set is closed when its complement is open. The closure \(\overline E\) consists of points whose every disk meets \(E\); the boundary \(\partial E\) consists of points whose every disk meets both \(E\) and its complement.

An open disk contains none of its boundary circle, whereas the closed disk \(\{z:|z-a|\le r\}\) contains all of it. A set may be neither open nor closed. The empty set and the full plane are both open and closed; there is no contradiction because the definitions concern different complements and local conditions.

A neighbourhood need not be the same shape as a disk. A small rectangle containing the point in its interior also contains a disk and can be used to organize calculations. What matters is an entire two-dimensional region around the point. A real interval on the horizontal axis is not open in \(\mathbb C\), even if it is open as a subset of that axis.

**Proposition 1.6 (Strict inequalities define open sets).** If \(g:U\to\mathbb R\) is continuous on an open set \(U\), then \(\{z\in U:g(z)>c\}\) is open in \(\mathbb C\). Finite intersections and arbitrary unions of open sets are open.

*Proof.* At a point where \(g(a)>c\), continuity makes \(|g(z)-g(a)|<(g(a)-c)/2\) on a sufficiently small disk contained in \(U\). There \(g(z)>c\). For a finite intersection, take the minimum of the finitely many available radii. For a union, a point belongs to at least one member and inherits that member's disk. ∎

The word finite in the intersection assertion matters: the intersection of the disks \(D(0,1/n)\) is \(\{0\}\), which is not open. Infinite intersections can impose a limiting equality and eliminate every positive neighbourhood radius.

**Worked example 1.7 (A distance-ratio region).** Describe
\[
 U=\{z:|z-1|<2|z+1|\}.
\]
Write \(z=x+iy\) and square both nonnegative sides. The inequality becomes
\[
 (x-1)^2+y^2<4((x+1)^2+y^2),
\]
or \((x+5/3)^2+y^2>16/9\). Thus \(U\) is the exterior of the closed circle with center \(-5/3\) and radius \(4/3\). It is open. The boundary is that circle, and the closure replaces the strict inequality by equality allowed. The original point \(z=-1\) is excluded because its right-hand distance is zero; the rewritten inequality excludes it as well. Checking a point such as \(z=0\) confirms the correct side of the circle, since \(1<2\).

## Sequences, continuity and denominators

**Proposition 1.8 (Coordinate convergence and completeness).** A sequence \(z_n=x_n+iy_n\) converges to \(z=x+iy\) exactly when \(x_n\to x\) and \(y_n\to y\). Every Cauchy sequence in \(\mathbb C\) converges in \(\mathbb C\).

*Proof.* The bounds \(|x_n-x|\le|z_n-z|\) and \(|y_n-y|\le|z_n-z|\) prove the first forward implication. Conversely,
\(|z_n-z|\le|x_n-x|+|y_n-y|\), so coordinate convergence gives complex convergence. A complex Cauchy sequence has two real Cauchy coordinate sequences by the same first bounds. Real completeness supplies limits for both coordinates, and the converse implication assembles their complex limit. ∎

Consequently the usual sum and product limit laws hold: split a product error as
\(z_nw_n-zw=z_n(w_n-w)+(z_n-z)w\), and use boundedness of the convergent sequence \(z_n\). A quotient law additionally needs a nonzero limiting denominator. The estimate preceding the polar discussion supplies a uniform lower bound on that denominator eventually.

**Definition 1.9 (Continuity).** A function \(f:U\to\mathbb C\) is continuous at \(a\in U\) when for each \(\varepsilon>0\) there is \(\delta>0\) such that \(z\in U\) and \(|z-a|<\delta\) imply \(|f(z)-f(a)|<\varepsilon\). Its real and imaginary components are continuous exactly when \(f\) is continuous.

Complex polynomials are continuous by the sum and product laws. Rational functions are continuous wherever their denominator does not vanish. This assertion specifies the domain, not a promise of continuity through a pole. The modulus itself is continuous by the reverse triangle inequality. Conjugation is an isometry because \(|\overline z-\overline w|=|z-w|\), so it too is continuous. Later we will see that this continuous function has no complex derivative anywhere.

**Worked example 1.10 (A reciprocal error bound).** Prove continuity of \(f(z)=1/z\) at a nonzero \(a\). Restrict \(|z-a|<|a|/2\); then \(|z|>|a|/2\). Therefore
\[
 \left|\frac1z-\frac1a\right|
 =\frac{|z-a|}{|z||a|}
 \le\frac{2|z-a|}{|a|^2}.
\]
For a desired \(\varepsilon\), choose
\(\delta=\min\{|a|/2,\varepsilon|a|^2/2\}\).
The strict condition \(|z-a|<\delta\) gives output error below \(\varepsilon\). This is a local estimate; as \(a\) approaches zero its usable radius shrinks. There is no contradiction between continuity at each nonzero point and unboundedness near the omitted point zero.

## Compactness converts local bounds into uniform ones

**Theorem 1.11 (Plane compactness).** A subset of \(\mathbb C\) is compact if and only if it is closed and bounded. A continuous complex-valued function on a nonempty compact set attains a maximum of its modulus. If it never vanishes there, its modulus also has a strictly positive minimum.

*Proof.* The identification \(x+iy\leftrightarrow(x,y)\) preserves distances, open covers and boundedness. The real-analysis Heine–Borel theorem in \(\mathbb R^2\) therefore proves the first assertion. The modulus of a continuous function is a continuous real-valued function. The extreme value theorem gives maximum and minimum values attained at points of the compact set. If the minimum were zero, the function would vanish at the minimizing point, contradicting the assumption. ∎

This theorem is an application of the prerequisite compactness theorem, not a new assumption about arbitrary metric spaces. Closed and bounded subsets of infinite-dimensional function spaces need not be compact. Even in the plane, omitting a boundary point can destroy attainment. The function \(1/z\) is continuous on \(0<|z|\le1\), but the domain is not closed in the plane and the function is unbounded.

The minimum assertion is particularly useful when dividing by a continuous function on a contour or compact region. It gives one denominator bound for every point, rather than a family of bounds depending on the point. The same compactness method will later turn a local power-series estimate into an estimate over a whole smaller disk.

## Coordinate changes that preserve neighbourhoods

Algebraic transformations also give a controlled way to transport topological questions. A bijection is a homeomorphism when it and its inverse are continuous. Such a map preserves openness, connectedness and compactness because either direction can pull the corresponding neighbourhoods, separations or covers back to the original space.

**Proposition 1.11a (Similarities and inversion).** If \(\alpha\ne0\), the affine map \(T(z)=\alpha z+\beta\) is a homeomorphism of the plane. The map \(J(z)=1/z\) is a homeomorphism of the punctured plane onto itself.

*Proof.* The affine map has inverse \(T^{-1}(w)=(w-\beta)/\alpha\), and both maps are continuous by the modulus laws. More quantitatively,
\[
 |T(z)-T(w)|=|\alpha||z-w|,
\]
so it sends a disk of radius \(r\) exactly to a disk of radius \(|\alpha|r\). For inversion, Worked example 1.10 proves continuity at every point of its domain. The identity \(J(J(z))=z\) proves bijectivity and identifies the inverse as the same continuous map. ∎

For example, inversion maps the annulus \(1<|z|<3\) onto \(1/3<|w|<1\), as follows immediately from \(|1/z|=1/|z|\). Its boundary circles exchange their relative inner and outer roles. A point on the unit circle with argument \(\theta\) maps to a point with argument \(-\theta\). These are geometric properties of the map on a chosen curve; they do not say that inversion is conjugation on an open neighbourhood. On the unit circle the two formulas agree, but away from that circle their moduli differ.

The distinction matters when studying functions from boundary samples. Agreement on one curve can be insufficient to identify arbitrary continuous plane maps. A statement that a formula maps a circle to another circle also does not determine which of the two complementary regions is its image; test a point or use a modulus inequality. The annulus calculation establishes its image by two inequalities, without relying on a diagram's apparent inside and outside.

## Connected domains and holes

**Definition 1.12 (Connectedness and domains).** A set is connected if it is not the union of two disjoint nonempty relatively open subsets. A domain is a nonempty connected open subset of \(\mathbb C\). A polygonal path is a continuous path made of finitely many straight segments.

**Theorem 1.13 (Polygonal connection in a domain).** Any two points of a domain can be joined by a polygonal path lying in that domain.

*Proof.* Fix \(a\in U\). Let \(A\) be the points reachable from \(a\) by such a path. It is nonempty. If \(z\in A\), choose a disk around \(z\) contained in \(U\). Every point of the disk can be joined to \(z\) by a straight segment in the disk, hence belongs to \(A\). Thus \(A\) is relatively open. If \(z\in U\setminus A\), a disk in \(U\) around \(z\) cannot meet \(A\), since a final segment would then make \(z\) reachable. Thus its complement is relatively open as well. Connectedness forces \(A=U\). ∎

The proof uses openness twice, to supply a disk at reachable and unreachable points. A connected subset of the plane without openness need not have this polygonal property. Conversely a path-connected set is connected: a supposed separation pulls back under a path to a separation of the interval, contrary to interval connectedness.

A punctured disk \(0<|z|<1\) is a domain. Two points can be joined by radial pieces and a circular arc at an intermediate positive radius. Nevertheless a circle around its missing center cannot be shrunk to a point while remaining inside the punctured disk. The rigorous invariant measuring that obstruction will be winding number. Connectedness promises routes between points; it does not remove holes or supply a globally consistent angle. We will not infer the existence of a logarithm from connectedness alone.

## Exercises

### Exercise 1.1 {#complex-plane-topology-ex-1}

Compute \((2-i)/(1+2i)\) and verify its modulus by the quotient rule.

<details><summary>Hint 1</summary>
Multiply numerator and denominator by the conjugate of the denominator.
</details>
<details><summary>Hint 2</summary>
The denominator becomes five; expand the numerator before simplifying.
</details>
<details><summary>Solution</summary>
The numerator is \((2-i)(1-2i)=2-4i-i+2i^2=-5i\), so the quotient is \(-i\). Its modulus is one. Independently both original numerator and denominator have modulus \(\sqrt5\), so the quotient modulus is \(\sqrt5/\sqrt5=1\), consistent with the direct value.
</details>

### Exercise 1.2 {#complex-plane-topology-ex-2}

Prove that \(|\operatorname{Re}z|+|\operatorname{Im}z|\le\sqrt2|z|\), and characterize equality.

<details><summary>Hint 1</summary>
Square both nonnegative sides.
</details>
<details><summary>Hint 2</summary>
Use \((|x|-|y|)^2\ge0\).
</details>
<details><summary>Solution</summary>
The stated square inequality is \(x^2+y^2+2|xy|\le2(x^2+y^2)\), equivalent to \((|x|-|y|)^2\ge0\). Equality holds exactly when \(|x|=|y|\), including zero. This also proves directly that coordinate and modulus error bounds differ by controlled constants.
</details>

### Exercise 1.3 {#complex-plane-topology-ex-3}

Find every fourth root of \(-1\), and explain why there are exactly four.

<details><summary>Hint 1</summary>
First determine the modulus of a possible root.
</details>
<details><summary>Hint 2</summary>
Solve \(4\theta=\pi+2\pi k\), then remove repeated angles.
</details>
<details><summary>Solution</summary>
Every root has modulus one. Its angle is \(\pi/4+k\pi/2\), for \(k=0,1,2,3\) modulo four. These four numbers have distinct angles modulo \(2\pi\), and fourth powers equal \(-1\). Every integer \(k\) is congruent to one of those four values, so no additional roots occur.
</details>

### Exercise 1.4 {#complex-plane-topology-ex-4}

Determine the interior, closure and boundary of \(E=\{z:1<|z|\le2\}\).

<details><summary>Hint 1</summary>
A point of the outer circle has nearby points outside the set.
</details>
<details><summary>Hint 2</summary>
The inner circle is approached from radii larger than one.
</details>
<details><summary>Solution</summary>
The interior is \(1<|z|<2\). The closure is \(1\le|z|\le2\), because both boundary circles are limits of points in the annulus and every point outside that closed annulus has a disk missing it. The boundary is the union of the two circles. The original set is neither open nor closed: it contains the outer boundary but omits the inner boundary.
</details>

### Exercise 1.5 {#complex-plane-topology-ex-5}

Show that the real axis is closed in \(\mathbb C\) and has empty interior there. Explain why it is open relative to itself.

<details><summary>Hint 1</summary>
At a point off the axis, use the size of its imaginary part.
</details>
<details><summary>Hint 2</summary>
Every disk centered on the axis contains nonreal points.
</details>
<details><summary>Solution</summary>
If \(z=x+iy\) with \(y\ne0\), the disk of radius \(|y|/2\) around it avoids the real axis. Thus the complement is open and the axis is closed. No disk centered on the axis lies inside it, since adding a sufficiently small nonzero imaginary part stays in the disk. Its interior in the plane is empty. In the subspace topology the entire subspace is always open: it is the intersection of that subspace with the open full plane.
</details>

### Exercise 1.6 {#complex-plane-topology-ex-6}

Prove directly that conjugation preserves distances and is uniformly continuous on the whole plane.

<details><summary>Hint 1</summary>
Conjugate the difference of two numbers.
</details>
<details><summary>Hint 2</summary>
Look for a choice of \(\delta\) independent of the base point.
</details>
<details><summary>Solution</summary>
The difference of conjugates is the conjugate of the difference, and conjugation does not change modulus. Hence \(|\overline z-\overline w|=|z-w|\). For each \(\varepsilon>0\), take \(\delta=\varepsilon\); whenever the input distance is below \(\delta\), the output distance is below \(\varepsilon\). This single choice works for every pair of points, proving uniform continuity.
</details>

### Exercise 1.7 {#complex-plane-topology-ex-7}

Show that \(z_n=(1+i)/n\) converges to zero and that \(w_n=i^n\) does not converge.

<details><summary>Hint 1</summary>
Compute the first sequence's modulus.
</details>
<details><summary>Hint 2</summary>
For the second sequence, compare two constant subsequences.
</details>
<details><summary>Solution</summary>
We have \(|z_n|=\sqrt2/n\to0\). For \(w_n\), the subsequence \(w_{4n}\) is constantly one, while \(w_{4n+2}\) is constantly minus one. A convergent sequence would force both subsequences to have the same limit, impossible. All terms of \(w_n\) nevertheless lie in the compact unit circle; compactness promises convergent subsequences rather than convergence of the whole sequence.
</details>

### Exercise 1.8 {#complex-plane-topology-ex-8}

For \(K=\{z:|z|\le1\}\), prove \(1\le|z-2|\le3\) and find points attaining both bounds.

<details><summary>Hint 1</summary>
Use the reverse and ordinary triangle inequalities.
</details>
<details><summary>Hint 2</summary>
Try the real boundary points \(1\) and \(-1\).
</details>
<details><summary>Solution</summary>
The reverse inequality gives \(|z-2|\ge2-|z|\ge1\); the triangle inequality gives \(|z-2|\le|z|+2\le3\). The values one and three occur at \(z=1\) and \(z=-1\), respectively. Thus \(1/(z-2)\) is continuous on a neighbourhood of \(K\) and its modulus ranges from \(1/3\) to one on \(K\), with neither a hidden zero denominator nor an unattained endpoint.
</details>

### Exercise 1.9 {#complex-plane-topology-ex-9}

Prove that a continuous nonvanishing function on a nonempty compact set has a bounded continuous reciprocal.

<details><summary>Hint 1</summary>
Apply the extreme value theorem to its modulus.
</details>
<details><summary>Hint 2</summary>
Compose with the reciprocal map on the punctured plane.
</details>
<details><summary>Solution</summary>
The modulus attains a minimum \(m\), and nonvanishing forces \(m>0\). Therefore \(|1/f(z)|\le1/m\) everywhere on the compact set. The reciprocal map is continuous at every nonzero complex number by Worked example 1.10; composition proves continuity. Compactness is needed for the single bound, while pointwise continuity of the reciprocal only needs pointwise nonvanishing.
</details>

### Exercise 1.10 {#complex-plane-topology-ex-10}

Show that the union of the disks \(D(-2,1)\) and \(D(2,1)\) is open but is not a domain.

<details><summary>Hint 1</summary>
Unions preserve openness.
</details>
<details><summary>Hint 2</summary>
The two disks give a separation of their union.
</details>
<details><summary>Solution</summary>
Each disk is open and their union is open. They are disjoint because any point in both would give \(4=|2-(-2)|\le|z+2|+|z-2|<2\), impossible. Each disk is nonempty and relatively open in the union. Together they separate the union, proving it is disconnected. A domain must also be connected.
</details>

### Exercise 1.11 {#complex-plane-topology-ex-11}

Prove that every convex open nonempty subset of the plane is a domain. Is every domain convex?

<details><summary>Hint 1</summary>
Convexity places each straight segment inside the set.
</details>
<details><summary>Hint 2</summary>
Consider the punctured plane for the converse.
</details>
<details><summary>Solution</summary>
For any two points of a convex set, the straight interpolation \((1-t)a+tb\) lies inside it and is a continuous path. Thus the set is path connected and hence connected. With the assumed openness and nonemptiness it is a domain. The converse fails: the punctured plane is open and path connected, since radial pieces and a circular arc join any two nonzero points. It is not convex, because the segment from one to minus one passes through the excluded origin.
</details>

### Exercise 1.12 {#complex-plane-topology-ex-12}

Let \(a\ne0\). Find an explicit radius \(r\) such that \(|z-a|<r\) implies both \(z\ne0\) and \(|z^{-2}-a^{-2}|<\varepsilon\).

<details><summary>Hint 1</summary>
Use \(r\le|a|/2\) to bound the denominator and \(|z+a|\).
</details>
<details><summary>Hint 2</summary>
Factor \(a^2-z^2=(a-z)(a+z)\).
</details>
<details><summary>Solution</summary>
When \(|z-a|<|a|/2\), we have \(|z|>|a|/2\) and \(|z+a|\le|z-a|+2|a|<5|a|/2\). Therefore
\[
 |z^{-2}-a^{-2}|=\frac{|z-a||z+a|}{|z|^2|a|^2}
 \le\frac{10|z-a|}{|a|^3}.
\]
Choose \(r=\min\{|a|/2,\varepsilon|a|^3/10\}\). The input strict inequality gives the desired strict output inequality, and the denominator lower bound ensures the expression exists.
</details>

## Worked example: a compact set with a uniform denominator margin

Consider the closed disk \(K=\{z:|z-2|\le1/2\}\) and the function \(q(z)=1/(z^2-1)\). The forbidden points \(1\) and \(-1\) lie outside \(K\), but saying only that the denominator is nonzero at each point gives no numerical error bound. For \(z\in K\), the reverse triangle inequality gives \(|z-1|\ge |2-1|-|z-2|\ge1/2\) and \(|z+1|\ge|2+1|-|z-2|\ge5/2\). Hence \(|z^2-1|\ge5/4\) and \(|q(z)|\le4/5\) throughout the disk. The same calculation applies to every smaller disk, with a stronger margin. Compactness guarantees some positive minimum in much wider situations; here the factorization tells us what that minimum can be bounded by explicitly.

Suppose a numerical approximation \(w\) to \(z\in K\) has \(|w-z|<1/4\). Then \(|w-1|\ge1/4\), \(|w+1|\ge9/4\), so the approximation stays away from both poles. Subtracting fractions rather than separately estimating their values yields
\[
 |q(w)-q(z)|=\frac{|w-z|\,|w+z|}{|w^2-1|\,|z^2-1|}.
\]
Since \(|z|\le5/2\) and \(|w|<11/4\), the numerator factor \(|w+z|\) is below \(21/4\). The two denominator lower bounds now give a uniform Lipschitz estimate on the stated approximation range. This illustrates why a compact interior margin is useful in later contour arguments: a single constant controls all points on a path, including points reached after a small perturbation.

The disk itself is connected and convex, so any two points can be joined by their straight segment without leaving it. By contrast, the complement of the two forbidden points is connected but has loops encircling either point. A path can exist between any two of its points while a continuously chosen argument of \(z-1\) around every closed loop cannot. The distinction between path connectivity and absence of holes will reappear when logarithms and primitives are constructed.

## Sources and scope

This chapter is original exposition based on the prerequisite Euler real-analysis material. The syllabus benchmarks for the full book are Lars Ahlfors, *Complex Analysis*, and Elias Stein and Rami Shakarchi, *Complex Analysis*. Their role is to identify the subject and scope; no external exercises or proofs are reproduced. The root-counting example establishes roots of a particular nonzero number, not the fundamental theorem of algebra for arbitrary polynomials. That theorem is proved later using complex analysis.

## Summary

The complex field is the Euclidean plane with a multiplication that controls moduli and angles. Completeness and compactness come from its two real coordinates. Openness supplies genuinely two-dimensional neighbourhoods, and connected openness supplies polygonal paths. Holes and branches require more than connectedness. The next chapter asks what changes when a difference quotient must have the same limit along every complex direction; that requirement will distinguish holomorphic functions from ordinary continuous maps of the plane.
