
# Conic Predicates

A conic classifier, a point-membership query and a ray intersection answer different questions. Giving all three a single approximate ellipse/parabola/hyperbola label loses boundary information before an algorithm can decide what to do with it. This L3 chapter separates exact predicates, algebraic constructions and uncertainty, while the full synthetic and coordinate theory has its home in [Conics in Coordinates](../conics-solids-projections/conics-in-coordinates.md).

Preparation is symmetric quadratic forms, rational arithmetic and the earlier orientation and parameter-interval conventions. The old quadratic-form and focus/directrix readings remain available as companions, including their exercises and learner identities. Their ten original questions and solutions are integrated below with staged help. We do not infer executed numerical behavior from an algebraic proof, and no implementation or example execution is claimed.

## 1. Fix the representation and the output contract

Write a conic polynomial as

$$f(X)=X^TQX+q^TX+c,$$

with Q symmetric and two-dimensional. The two off-diagonal matrix entries are half the expanded mixed coefficient. Assume exact rational input when discussing exact algorithms. Clear denominators, divide the resulting integer coefficient tuple by its common positive gcd, and choose its first nonzero coefficient positive. For a nonzero polynomial this produces a canonical tuple under nonzero rational rescaling. The all-zero polynomial instead represents the whole plane and needs its own output.

This normalization identifies proportional polynomials, not arbitrary equal real loci. Two different positive quadratic forms can both have only the origin as their real zero set without being proportional. A polynomial representation, a real locus and a geometric type are different data objects. A routine must say which equivalence it recognizes.

A point predicate can return the exact sign of f at a rational point. That sign is representation-dependent under a negative rescaling; zero membership is invariant. Normalization resolves the arbitrary coefficient sign, but does not make positive mean outside for every conic. A hyperbola has several complement components and no universal disk-like interior. If the application needs an ellipse interior, first certify a positive-definite centered form with a positive level and declare that convention.

The geometric classification theorem in the linked conics chapter uses rank, inertia, the completed-square constant and null-direction linear terms. The discriminant of the quadratic part alone is insufficient. A computational result should distinguish a regular real conic, a point, real lines, an empty set or the whole plane rather than assign a forced nondegenerate label. An eigenvalue approximation near zero does not by itself certify exact rank. For rational two-by-two input, determinants and the relevant exact coefficient comparisons can make those decisions without approximating eigenvectors.

## 2. A focus/directrix predicate can avoid square roots

Let the focus be F and the directrix be the line $n\cdot X=d$, with n nonzero and F not on the line. Let eccentricity e be positive. The signed distance residual is focus distance minus e times line distance. Multiplying its squared-equation residual by the positive squared normal length gives

$$S(P)=|n|^2|P-F|^2-e^2(n\cdot P-d)^2.$$

For rational data this is a rational expression, requiring no distance square root. It vanishes exactly on the defining conic. More strongly, its sign equals the signed distance residual's sign: divide S by the positive normal-length square and factor a difference of squares. The second factor is the sum of the two nonnegative distances, with the directrix distance multiplied by e. It is strictly positive everywhere under the nonincidence assumption: simultaneous vanishing would require P equal to F on the directrix. Therefore no sign was lost by squaring in this particular nonnegative equality.

This argument would fail for an arbitrary signed distance difference, as the applications chapter's hyperbola example explains. It also does not identify the magnitude of S with Euclidean distance from the conic. Multiplying n and d by a common scalar changes S by that scalar's square while leaving the directrix unchanged. A stopping tolerance for a distance residual cannot simply be reused for this algebraic residual.

The assumptions exclude a circle as a finite focus/directrix representation at eccentricity zero. Setting e zero gives the focus alone. Dropping focus nonincidence yields the point/line-pair degeneracies retained in Exercise 9. Those are meaningful cases to classify explicitly, rather than malformed numbers to force into the standard formulas.

## 3. Restrict the polynomial to a query line

For $X(t)=P+tv$, substitution gives

$$at^2+bt+c_0=0,\qquad
 a=v^TQv,\quad b=2P^TQv+q^Tv,\quad c_0=f(P).$$

First decide whether v is zero. Then the geometric query is the singleton P, independent of its redundant parameter. Otherwise distinct parameters give distinct line points, and the polynomial degree cases have exact geometric interpretations.

If a and b vanish, zero constant means the whole line is contained in the conic locus; nonzero constant means no point on it is. If a vanishes but b does not, there is one rational parameter. If a does not vanish, the discriminant decides zero, one double, or two distinct real parameters. A contained line can occur for a degenerate conic and must not be returned as two arbitrarily sampled intersections. A double parameter gives one geometric point with multiplicity two, not two distinct points.

After finding line parameters, apply the query's interval: all real parameters for a line, nonnegative ones for a ray, and the closed unit interval for a closed segment. An application excluding endpoints needs a different declared interval. Algebraic root existence does not establish membership in any of those intervals. A segment can lie inside an ellipse's filled region while having no intersection with its boundary curve; the output must state which object was queried.

For rational coefficients the nonrational roots can be stored as quadratic algebraic numbers rather than prematurely rounded decimals. Comparing a root to a rational endpoint reduces to the sign of a rational number plus or minus a square root. If the two summands have the same sign the answer is immediate. If they oppose, compare the rational square with the nonnegative radicand, retaining the original signs. The known sign of a root formula’s rational denominator must also be retained: multiplying an endpoint inequality by a negative denominator reverses it. Squaring before this case split would recreate the extraneous-sign problem. This gives an exact finite comparison procedure, including equality at a ray origin or segment endpoint. It uses a bounded number of rational operations, whose bit cost still depends on coefficient size; arithmetic-operation counts are not constant bit-complexity claims.

## 4. A better root formula is not a certification theorem

When the discriminant is nonnegative, define its square root and choose s as plus one for nonnegative b, minus one otherwise. Put

$$q_0=-\tfrac12(b+s\sqrt\Delta).$$

For a nonzero quadratic coefficient and nonzero q-zero, roots can be evaluated as $q_0/a$ and $c_0/q_0$. The first is one of the quadratic-formula roots. Since $q_0^2+bq_0+ac_0=0$, their sum is minus b over a and their product the constant over a. Thus Vieta proves that the second is the other root. When q-zero vanishes, the quadratic case has b and the constant both zero, so the double root is zero; handle it without division. Linear and constant cases were already separated.

The same-sign addition in q-zero avoids the cancellation of subtracting nearly equal b and square-root magnitudes. It does not certify a discriminant sign computed in floating point, distinguish near-equal roots exactly, or guarantee a rounded root lies on the correct side of a segment endpoint. Those are separate predicates and error questions. Overflow or underflow also requires a stated numerical model before an implementation guarantee can be made.

There is no universal rule that a sufficiently small discriminant means tangency. The polynomials $t^2+\eta$, $t^2$, and $t^2-\eta$ for positive eta have respectively no real root, a double root and two distinct real roots, however small eta is. Coefficient rescaling also rescales the discriminant quadratically. A fixed absolute threshold ignores both facts. With interval-enclosed coefficients and outward-rounded arithmetic, a discriminant enclosure excluding zero can certify its sign; an enclosure containing zero means unresolved, not tangent. Exact rational fallback is another possible policy. The mathematical output should preserve that distinction until adequate information is available.

## Worked example 1: the same roots answer different queries

Intersect the circle of radius two centered at the origin with $P=(0,0)$ and $v=(1,1)$. The restricted equation is $2t^2-4=0$, giving the two line parameters plus and minus the square root of two. A forward ray retains only the positive one. The segment with parameter from zero to one retains neither, because the positive parameter exceeds one and the other is negative. Every point of that segment is inside the filled disk, yet none lies on the circle boundary. Returning the positive root without checking the interval would confuse the ray and segment contracts.

## Worked example 2: containment is different from a double intersection

For the old quadratic example set $u=x-2y$. Its polynomial is $(u-1)(u-2)$. Along $P=(1,0)$ and $v=(2,1)$, u stays identically one, so the restricted polynomial is identically zero and the whole query line is contained in the locus. Along the x-axis instead, the two parameters are one and two. A closed unit segment includes the first endpoint and excludes the second. A line parallel to the contained query but with u zero has constant nonzero residual, hence no intersections. These three outputs come from the same pair of parallel-line conic components; no ellipse/parabola label could replace the degree and interval cases.

## Worked example 3: a near-parabola is still an exact ellipse

Take focus at the origin, directrix x one, and exact eccentricity nine hundred ninety-nine divided by one thousand. The coefficient one minus eccentricity squared is exactly nineteen hundred ninety-nine divided by one million, strictly positive. The locus is therefore an ellipse, not a parabola. Its center and semiaxes are large because those geometric constructions divide by the small positive quantity; that sensitivity is a property of the chosen output parameters, not evidence that the exact input changed type.

The implicit residual remains a useful local representation. If $f_e=x^2+y^2-e^2(x-1)^2$ and $f_1$ is its parabolic counterpart, then $f_e-f_1=(1-e^2)(x-1)^2$. On a region with absolute x at most M, the residual difference is bounded by $(1-e^2)(M+1)^2$. This is a precise residual-approximation bound, not a Hausdorff-distance bound between curves. Turning it into point displacement needs additional derivative/nondegeneracy control. At $(1/2,0)$ the parabolic residual is zero while the exact elliptical residual is positive, so replacing the input by a parabola changes even an exact membership answer. Approximation must be explicit about its region, error quantity and changed query meaning.

## Exercises

The next ten questions retain the statements and solutions of the earlier two conic companions. Their old resources remain independently addressable; the new chapter's local anchors organize this combined route rather than moving existing notes silently.

### Exercise 1 {#computational-conic-ex-1}

Classify the conic $x^{2}-4xy+4y^{2}-3x+6y+2=0$.

Retained from [circles-and-conics-as-quadratic-forms, Exercise 1](circles-and-conics-as-quadratic-forms.md).

<details><summary>Hint 1</summary>

Factor the quadratic part using u equal to x minus twice y.

</details>

<details><summary>Hint 2</summary>

Check whether the remaining polynomial factors into two distinct linear factors.

</details>

<details><summary>Full solution</summary>

**Solution.** Put $u=x-2y$. Then the equation is $u^{2}-3u+2=(u-1)(u-2)=0$. The real locus is the pair of parallel lines $x-2y=1$ and $x-2y=2$, so this is a degenerate conic rather than a parabola.

</details>

### Exercise 2 {#computational-conic-ex-2}

Reduce $9x^{2}+4y^{2}-18x+16y-11=0$ to standard form and identify the center and semiaxes.

Retained from [circles-and-conics-as-quadratic-forms, Exercise 2](circles-and-conics-as-quadratic-forms.md).

<details><summary>Hint 1</summary>

Complete squares before reading the semiaxes.

</details>

<details><summary>Hint 2</summary>

Remember that the larger semiaxis is vertical for these coefficients.

</details>

<details><summary>Full solution</summary>

**Solution.** $9(x^{2}-2x)+4(y^{2}+4y)=11$, so $9(x-1)^{2}+4(y+2)^{2}=36$, giving

$$\frac{(x-1)^{2}}{4}+\frac{(y+2)^{2}}{9}=1.$$

This is an ellipse centered at $(1,-2)$ with semiaxes $a=3$ (vertical) and $b=2$ (horizontal).

</details>

### Exercise 3 {#computational-conic-ex-3}

Find the intersection of the ray from $(0,0)$ in direction $(1,1)$ with the circle $x^{2}+y^{2}=4$.

Retained from [circles-and-conics-as-quadratic-forms, Exercise 3](circles-and-conics-as-quadratic-forms.md).

<details><summary>Hint 1</summary>

Restrict the circle equation to the ray parameter.

</details>

<details><summary>Hint 2</summary>

Discard the negative root only after finding both line roots.

</details>

<details><summary>Full solution</summary>

**Solution.** Substitute $x=t$, $y=t$: $2t^{2}=4$, so $t=\sqrt{2}$ (taking the positive root for the ray). The intersection is $(\sqrt{2},\sqrt{2})$.

</details>

### Exercise 4 {#computational-conic-ex-4}

Explain why $x^{2}+y^{2}+1=0$ has no real points despite having ellipse-like quadratic part.

Retained from [circles-and-conics-as-quadratic-forms, Exercise 4](circles-and-conics-as-quadratic-forms.md).

<details><summary>Hint 1</summary>

A positive-definite quadratic part does not guarantee a real zero level.

</details>

<details><summary>Hint 2</summary>

Bound the entire polynomial below, including its constant.

</details>

<details><summary>Full solution</summary>

**Solution.** The left side is always at least $1$ for real $x$ and $y$, so it can never equal zero. The quadratic part is positive definite, but the constant term shifts the locus away from the origin.

</details>

### Exercise 5 {#computational-conic-ex-5}

For the conic $x^{2}-y^{2}=0$, find the real locus and explain why it is not a hyperbola.

Retained from [circles-and-conics-as-quadratic-forms, Exercise 5](circles-and-conics-as-quadratic-forms.md).

<details><summary>Hint 1</summary>

Factor the difference of squares.

</details>

<details><summary>Hint 2</summary>

The crossing locus has a singular point at the origin.

</details>

<details><summary>Full solution</summary>

**Solution.** The equation factors as $(x-y)(x+y)=0$. The real locus is the union of the two lines $y=x$ and $y=-x$. A hyperbola is a smooth curve; this is a degenerate conic consisting of two intersecting lines.

</details>

### Exercise 6 {#computational-conic-ex-6}

For focus $(0,0)$, directrix $x=1$, and $e=1/2$, find the center, semiaxes, and vertices of the ellipse.

Retained from [conic-focus-directrix-computation, Exercise 1](conic-focus-directrix-computation.md).

<details><summary>Hint 1</summary>

Use the exact value one minus eccentricity squared.

</details>

<details><summary>Hint 2</summary>

The center is shifted left, while the given focus stays at the origin.

</details>

<details><summary>Full solution</summary>

**Solution.** $h=-(1/4)/(3/4)=-1/3$. $a=(1/2)/(3/4)=2/3$. $b=(1/2)/\sqrt{3/4}=1/\sqrt{3}$. The vertices are at $(h\pm a,0)=(-1,0)$ and $(1/3,0)$.

</details>

### Exercise 7 {#computational-conic-ex-7}

Show that the vertex of the parabola with focus $(0,0)$ and directrix $x=1$ is equidistant from the focus and the directrix.

Retained from [conic-focus-directrix-computation, Exercise 2](conic-focus-directrix-computation.md).

<details><summary>Hint 1</summary>

The vertex lies halfway along the perpendicular from the focus to directrix.

</details>

<details><summary>Hint 2</summary>

Compute both distances rather than comparing squared residual magnitudes.

</details>

<details><summary>Full solution</summary>

**Solution.** The vertex is at $(1/2,0)$. Its distance to the focus is $1/2$, and its distance to the directrix $x=1$ is also $1/2$.

</details>

### Exercise 8 {#computational-conic-ex-8}

For $e=2$, find the center and asymptotes of the hyperbola with focus $(0,0)$ and directrix $x=1$.

Retained from [conic-focus-directrix-computation, Exercise 3](conic-focus-directrix-computation.md).

<details><summary>Hint 1</summary>

Complete the square with the positive quantity eccentricity squared minus one.

</details>

<details><summary>Hint 2</summary>

Asymptote slopes are the conjugate semiaxis divided by the transverse semiaxis.

</details>

<details><summary>Full solution</summary>

**Solution.** $h=4/3$, $a=2/3$, $b=2/\sqrt{3}$. The standard form is

$$\frac{(x-4/3)^{2}}{4/9}-\frac{y^{2}}{4/3}=1.$$

The asymptotes are $y=\pm\frac{b}{a}(x-h)=\pm\sqrt{3}(x-4/3)$.

</details>

### Exercise 9 {#computational-conic-ex-9}

Drop the standard hypothesis $F\notin D$. For $F=(0,0)$ and $D$ the line $x=0$, classify the locus $PF=e\,\operatorname{dist}(P,D)$.

Retained from [conic-focus-directrix-computation, Exercise 4](conic-focus-directrix-computation.md).

<details><summary>Hint 1</summary>

Both sides of the distance equation are nonnegative even in this excluded configuration.

</details>

<details><summary>Hint 2</summary>

After squaring, separate the three signs of eccentricity squared minus one.

</details>

<details><summary>Full solution</summary>

**Solution.** Squaring gives $x^{2}+y^{2}=e^{2}x^{2}$, or $y^{2}=(e^{2}-1)x^{2}$. If $0<e<1$, the only point is the focus. If $e=1$, the locus is the entire $x$-axis. If $e>1$, it is the union of the two lines $y=\pm\sqrt{e^{2}-1}x$. Thus the excluded case produces degenerate loci, not a contradiction.

</details>

### Exercise 10 {#computational-conic-ex-10}

A comet trajectory is modeled as a conic with focus at the Sun and eccentricity $e=1.1$. Is the orbit bound or unbound? What is the sign of the energy?

Retained from [conic-focus-directrix-computation, Exercise 5](conic-focus-directrix-computation.md).

<details><summary>Hint 1</summary>

Specify the force law and potential normalization before interpreting orbital energy.

</details>

<details><summary>Hint 2</summary>

Use the proved relation between energy and eccentricity in Applications and Synthesis.

</details>

<details><summary>Full solution</summary>

**Solution.** In the ideal Newtonian attractive two-body inverse-square model, with potential energy normalized to zero at infinity, $e>1$ describes a hyperbolic unbound orbit and its total specific orbital energy is positive. The sign conclusion depends on that dynamical model; eccentricity alone is only a geometric parameter.

</details>

### Exercise 11 {#computational-conic-ex-11}

Classify the conic $x^{2}+6xy+9y^{2}-2x+4y+1=0$. Is it degenerate?

Retained from [Worked Exercises and Synthesis, Exercise 6](worked-exercises-and-synthesis.md).

<details><summary>Hint 1</summary>

Separate the rank-one square from the surviving null-direction linear term.

</details>

<details><summary>Hint 2</summary>

An invertible coordinate change can reveal a parabola even when the quadratic part is singular.

</details>

<details><summary>Full solution</summary>

**Solution.** $A=1$, $B=6$, $C=9$. The discriminant is $B^{2}-4AC=36-36=0$, so the quadratic part is parabola-like. The quadratic matrix is

$$Q=\begin{pmatrix}1&3\\3&9\end{pmatrix}.$$

Its determinant is $9-9=0$, confirming rank $1$. The equation factors as $(x+3y)^{2}-2x+4y+1=0$. Setting $u=x+3y$ gives $u^{2}-2x+4y+1=0$. Since $x=u-3y$, this becomes $u^{2}-2(u-3y)+4y+1=u^{2}-2u+10y+1=0$. Solving for $y$ gives a parabola. The conic is nondegenerate.

</details>

### Exercise 12 {#computational-conic-ex-12}

For focus $(0,0)$, directrix $x=2$, and $e=1/3$, find the center, semiaxes, and eccentricity of the ellipse.

Retained from [Worked Exercises and Synthesis, Exercise 7](worked-exercises-and-synthesis.md).

<details><summary>Hint 1</summary>

Changing the directrix offset scales the standard configuration by two.

</details>

<details><summary>Hint 2</summary>

Retain exact rational quantities before extracting the semiaxis square root.

</details>

<details><summary>Full solution</summary>

**Solution.** Shifting the directrix to $x=2$ is equivalent to scaling the standard formulas. The center is at $h=-e^{2}/(1-e^{2})\cdot 2=-(1/9)/(8/9)\cdot 2=-1/4$. The semiaxes are $a=e/(1-e^{2})\cdot 2=(1/3)/(8/9)\cdot 2=3/4$ and $b=e/\sqrt{1-e^{2}}\cdot 2=(1/3)/\sqrt{8/9}\cdot 2=1/\sqrt{2}$.

</details>

## Summary

A conic polynomial supports several distinct queries. Exact coefficient signs certify membership and degree cases; rank/sign/null-linear data classify its real locus; quadratic algebraic numbers retain root and interval identity. Focus/directrix squaring is reversible because its two distances are nonnegative, with a positive sum under the named hypotheses. Better quadratic evaluation avoids one cancellation but does not certify uncertain discriminant signs. Near-parabolic parameters can be ill-conditioned while the implicit equation remains an exact useful representation. Approximation must name its domain and error quantity.

## Source and provenance

This canonical L3 chapter integrates the earlier Atlas quadratic-form and focus/directrix questions, plus capstone Exercises 6–7, while retaining every old manuscript and resource. The earlier sources own the copied problem wording and full solutions; the predicate contracts, proofs, worked examples and staged hints are new Euler exposition. Full geometric classification and focal constructions belong to the actual Conics book Chapters 1–6, linked above. The next reading is Three-Dimensional Predicates. No code, property-test runner, numerical execution or independent-review evidence is supplied by this authorship step.
