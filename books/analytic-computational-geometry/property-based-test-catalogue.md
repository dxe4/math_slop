
# Property-Based Test Catalogue

Correct geometric code is hard to achieve and easy to break. A single sign error in the orientation predicate, or a missing clamp in a distance formula, can produce plausible-looking but wrong results that evade typical unit tests. This chapter presents a catalogue of properties that geometric predicates and constructions should satisfy. These laws are necessary mathematical contracts. Finite observations can expose failures, while universal correctness still requires a proof connecting the declared inputs and outputs.

## Why properties matter

A traditional unit test checks one input and one expected output. A property-based test checks that a function satisfies a universal law for many inputs. For geometric code, the laws are the symmetries and invariants of the underlying mathematics. If a function violates a known invariant, the implementation is wrong, regardless of whether any individual test case failed.

Even without a property-based testing library, one can enumerate invariants and verify them with loops over random, structured, and extreme inputs.

## Planar predicate properties

### Orientation

- **Swap sign:** $\operatorname{orient}(A,C,B)=-\operatorname{orient}(A,B,C)$.
- **Translation invariance:** $\operatorname{orient}(A+t,B+t,C+t)=\operatorname{orient}(A,B,C)$.
- **Cyclic invariance:** $\operatorname{orient}(B,C,A)=\operatorname{orient}(A,B,C)$.
- **Area relation:** $\lvert\operatorname{orient}(A,B,C)\rvert$ equals twice the triangle area.

### Segment intersection

- **Symmetry:** $\operatorname{intersect}(S_{1},S_{2})=\operatorname{intersect}(S_{2},S_{1})$.
- **Self-intersection:** every nonempty segment intersects itself under an inclusive-contact policy; a proper-crossing predicate intentionally returns false.
- **Endpoint consistency:** if two segments share an endpoint, the intersection test should report contact according to the documented boundary policy.

### Projection

- **Perpendicular residual:** for an infinite line, and for a segment whose unconstrained projection lies in its interior, the residual is perpendicular to the direction. At a clamped endpoint it generally is not.
- **Clamping:** for a segment, the closest point parameter lies in $[0,1]$.
- **Idempotence:** projecting a point already on the line yields the point itself.

## Transformation properties

- **Rotation preserves squared distance:** $\lVert R_{\theta}(P)-R_{\theta}(Q)\rVert^{2}=\lVert P-Q\rVert^{2}$.
- **Rotation has determinant $1$:** $\det R_{\theta}=1$.
- **Reflection is an involution:** $R(R(P))=P$.
- **Reflection has determinant $-1$:** $\det R=-1$.
- **Composition order:** for column vectors, $M_{2}M_{1}$ applies $M_{1}$ first.

## Conic properties

- **Conic samples satisfy the unsquared ratio:** for focus $F$, directrix $D$, and eccentricity $e$, every point $P$ on the conic satisfies $PF=e\cdot\operatorname{dist}(P,D)$.
- **Scale invariance:** multiplying all coefficients by $\lambda\neq 0$ gives the same locus.
- **Standard form equivalence:** a reduced conic should satisfy its original equation.

## Three-dimensional properties

- **Slice point duality:** a slice point lies on both its source edge and the slicing plane.
- **Scalar triple product cyclicity:** $u\cdot(v\times w)=v\cdot(w\times u)=w\cdot(u\times v)$.
- **Cross product antisymmetry:** $u\times v=-(v\times u)$.

## Curved metric properties

- **Spherical distance is symmetric:** $d_{S}(u,v)=d_{S}(v,u)$.
- **Spherical distance lies in $[0,\pi]$:** $0\leq d_{S}(u,v)\leq\pi$.
- **Hyperbolic distance is nonnegative:** $d_{H}(u,v)\geq 0$.
- **Hyperbolic distance diverges toward the boundary:** as $\lVert u\rVert\to 1^{-}$, $d_{H}(0,u)\to\infty$.

## Input categories to test

A pleasant typical picture is the easiest test and the least informative. Robust testing includes:

- **Duplicates:** repeated points, zero-length segments, coincident lines.
- **Zero-length objects:** segments with equal endpoints, vectors with zero norm.
- **Parallel lines:** same direction, opposite direction, collinear overlap.
- **Tangency:** ray tangent to circle, line tangent to conic.
- **Incidence degeneracies:** three collinear points, four concyclic points, or repeated inputs.
- **Huge magnitudes:** coordinates near the floating-point limit.
- **Tiny separations:** nearly collinear points, nearly parallel lines.
- **Invalid inputs:** non-finite coordinates (`NaN`, `Infinity`), zero normals, boundary points in hyperbolic space.

## Mathematical contracts before observations

**L3 scope.** The required preparation is the proof and boundary analysis in [Orientation](orientation-is-the-central-planar-predicate.md), [Segment Intersection](segment-intersection-needs-boundary-cases.md) and [Conic Predicates](conic-predicates.md). This chapter keeps its earlier investigation prompts, then makes precise what their laws can and cannot establish. A universal identity is a theorem about a declared mathematical function. Observing a finite selection of inputs is logically different: one counterexample refutes a universal claim, while any finite collection of agreements leaves other inputs unexamined.

A contract begins by naming the domain, representation and output type. An orientation routine might return the signed determinant, or only one of three side labels. The determinant has squared-length units and multiplies by the linear map's determinant under an affine change of coordinates. A side label has no area magnitude and changes only according to the sign of that factor. Requiring the determinant's magnitude law of a correct sign-only interface would confuse two different contracts. Conversely, returning a correct side label does not make an interface claiming to return an exact area correct.

Segment intersection has an equally important output distinction. A Boolean predicate reports whether a set is empty. A construction returns the intersection set, which can be empty, a point or an overlap segment. A proper-crossing predicate asks yet another question and intentionally excludes endpoint contact. All three may be useful. They cannot share expected answers indiscriminately. Zero-length inputs, open endpoints and inclusive contact must be declared before symmetry has a precise meaning.

Proof obligations include both soundness and completeness. If a reported intersection point belongs to both segments, that is soundness for that point. It does not show that every real intersection is reported: a routine returning the empty set for every input has no false reported points, but misses almost everything. The exhaustive case analysis in the intersection chapter supplies completeness. Similarly, putting all inputs inside a proposed region does not by itself certify a convex hull; minimality or the reverse containment is also needed. The hull chapter proves equality using both inclusions and a specified boundary representation.

## Worked example 1: symmetric identities do not determine a predicate

Define a candidate determinant value $F(A,B,C)=0$ for every triple. It is translation invariant, cyclically invariant and changes sign when the last two inputs are swapped, because zero is its own negative. It nevertheless fails on any noncollinear triple. For $(0,0),(2,0),(0,3)$ the determinant is six and the triangle area is three. The required area relation distinguishes the false function from the actual one only if that area is supplied independently, rather than defined as half the candidate output.

This example explains a common circularity. If both a candidate area and its expected value are computed from the same flawed determinant, their agreement supplies no independent derivation of the magnitude. The independent rectangle/base-height argument fixes the triangle area here. More generally, a family of algebraic identities may constrain a function without characterizing it uniquely. A correctness proof must connect the computation to the intended geometric definition, as the orientation chapter does through a signed perpendicular height.

The same issue appears in transformations. The identity map is an involution and preserves distances, but it is not reflection in a specified mirror. The fixed-point and signed-normal formula identify which involution is intended, while determinant minus one distinguishes a planar reflection from the identity. Necessary laws work together with a defining construction; no single convenient symmetry should stand in for the complete contract.

## Certified intervals and an exact-sign filter

An enclosure is a closed interval proved to contain the mathematical value. For exact interval endpoints, addition and subtraction use endpoint sums or differences. To multiply two intervals, take the minimum and maximum of their four endpoint products. The product formula follows because a bilinear function on a rectangle has its extrema at corners: fix one variable, use linearity in the other, then repeat for the remaining endpoint choices. These statements are interval theorems, independent of a particular numerical library.

Apply these rules to the determinant's coordinate differences, products and subtraction. If the two product enclosures are $[L_1,U_1]$ and $[L_2,U_2]$, the determinant lies in $[L_1-U_2,U_1-L_2]$. A positive lower bound proves a positive sign; a negative upper bound proves a negative sign. The singleton interval zero proves exact zero. Every other interval containing zero is unresolved by that enclosure. It does not justify a zero answer or prove that both signs are actually attainable.

Dependency can make an enclosure wider than necessary. If a variable is known to be identical to itself, subtracting it gives exactly zero; treating its two occurrences as independent intervals may instead give a nonzero-width interval around zero. This is safe but inconclusive. Symbolic simplification or exact arithmetic can improve such a bound. Safety means never excluding the true value, not always giving the sharpest possible interval.

For exact rational stored coordinates, an exact rational determinant settles the sign, including zero. One can first use a cheaper enclosure and perform the exact computation only if needed. More generally, a sequence of enclosures whose widths tend to zero eventually excludes zero when the actual determinant is nonzero: choose a width smaller than its positive distance from zero. That argument does not promise finite separation when the value is exactly zero; a separate equality method or a declared unresolved result is necessary. It also does not solve equality of arbitrary real numbers presented only by approximation procedures.

Input uncertainty is different. If the coordinates genuinely describe intervals of possible measurements, higher arithmetic precision can narrow evaluation overestimation but cannot collapse that admitted family to one intended point. A certificate may establish a uniform sign throughout the family, as in the curvature clinic. If it cannot, an exact determinant of the nominal midpoint answers only the nominal problem. That distinction remains even when every displayed decimal is internally evaluated without error.

## Worked example 2: residual magnitude is representation-dependent

For the unit circle use $G(x,y)=x^2+y^2-1$. Replacing it by $100G$ preserves its exact zero set but multiplies every algebraic residual by one hundred. A fixed residual cutoff therefore changes its geometric meaning when the same equation is rescaled. Multiplication by a negative coefficient also reverses the sign, so an inside/outside interpretation requires a normalized sign convention in addition to a zero-set convention.

For a point of radius $r\ge0$, the true distance to the unit circle is $|r-1|$. For positive radius, Cauchy–Schwarz shows the closest circle point is its radial unit vector: squared distance to any unit vector is $r^2+1-2p\cdot u$, minimized when the dot product is $r$. At the origin every circle point is equally near. Since $|G|=|r-1|(r+1)$, the exact conversion is distance $|G|/(r+1)$, with the origin included. The raw residual alone has squared-length rather than length behavior under coordinate scaling.

No universal linear residual-to-distance conversion works for arbitrary implicit equations. For $G(x,y)=x^2$, the zero set is the vertical axis, distance is $|x|$ and residual is $x^2$. Their ratio grows without bound near zero. A nonvanishing-gradient hypothesis can support local results, but quoting a first-order gradient expression without its neighborhood and error assumptions is not a proof. This is why the conic chapter separates exact membership, defining distance residuals and displacement error.

## Worked example 3: approximate equality is not an equivalence relation

Fix a positive length allowance $\varepsilon$ and call two real coordinates close when their separation is at most that allowance. The numbers zero, $3\varepsilon/4$ and $3\varepsilon/2$ show the problem: the first is close to the second and the second to the third, but the first is not close to the third. Closeness is symmetric and reflexive, yet not transitive. It cannot directly replace equality in a canonical representation or a dictionary key.

Clustering by chains of close pairs produces an equivalence relation, but changes the meaning: two endpoints of an arbitrarily long chain may then be identified despite having arbitrarily large separation. Taking the first observed point as a representative can instead make the result depend on input order. A quantized grid is a different, explicitly declared partition, with cells and boundaries of its own. None of these choices is merely exact equality with a harmless numerical adjustment.

The same issue affects topology. Two distinct point-segments are disjoint even if their distance is tiny. Reporting contact because their distance is below a tolerance answers a thickened-object or near-contact question. That can be useful if the physical model requires it, but the resulting contact policy must be stated in length units. It is not the exact closed-segment predicate silently repaired. A tolerance on a determinant, whose units are squared length, is not automatically the same policy.

## Conditioning and what algebraic rearrangement cannot repair

Consider the lines $y=0$ and $y=\delta x-h$ with nonzero $\delta$. Their intersection has coordinate $x=h/\delta$. Perturbing $h$ by $e$ changes that coordinate by $e/\delta$, so a small slope can amplify a small data displacement greatly. A computed point may satisfy both recorded equations exactly while remaining highly sensitive to input perturbation. Membership correctness and forward stability are different claims.

A better arithmetic arrangement can avoid avoidable cancellation or overflow. It cannot make the mathematical map from these line coefficients to the intersection uniformly insensitive as $\delta$ tends to zero. The limiting parallel or coincident case has a different output type, not one finite point with an inconvenient coordinate. The segment chapter therefore dispatches zero denominators before division and keeps near-parallel conditioning separate from exact incidence.

Combinatorial outputs also have discontinuities at true degeneracies. For points $(-1,0),(0,h),(1,0)$, any nonzero height gives a triangular hull and zero height gives a segment. Crossing through zero reverses orientation. There is no continuous choice of a fixed three-corner nondegenerate boundary across that event. An uncertainty-aware result can state which combinatorial possibilities remain admitted; rounding one state into another does not establish a stability theorem.

The useful obligations can now be grouped without confusing their evidence. Definitions and exhaustive proofs establish exact correctness. Range and domain bounds establish which arithmetic operations are meaningful. Certified enclosures establish particular sign or error decisions. Counterexamples reveal missing hypotheses. Finite observations can locate defects in an implementation, but do not become a universal proof, and a study completion mark is not any of these mathematical warrants. The earlier prompts below remain investigations with those logical limits.

## Common errors in testing

- **Assuming integer inputs make a test exact.** This holds only for exact arithmetic with sufficient range; fixed-width overflow and floating conversion still need adversarial tests.
- **Testing only convex or regular configurations.** Real data is irregular and contains outliers.
- **Using a single tolerance for all scales.** A tolerance of $10^{-9}$ is meaningless for astronomical coordinates.
- **Not testing the boundary policy.** An intersection routine may pass all interior cases and fail on endpoint contact.

## Practice exercises with solutions

### Exercise 1
Write a test that verifies orientation swap sign for $10^{4}$ random triples of points in $[-1,1]^{2}$.

<details><summary>Hint 1</summary>

Separate the determinant identity from any finite random investigation.

</details>

<details><summary>Hint 2</summary>

A proposed tolerance needs an explicit evaluation-error bound to certify a comparison.

</details>

<details><summary>Full solution</summary>

**Solution.** Generate random points $A,B,C$. Compute $o_{1}=\operatorname{orient}(A,B,C)$ and $o_{2}=\operatorname{orient}(A,C,B)$. Assert $o_{1}==-o_{2}$ within a scale-aware tolerance. Repeat $10^{4}$ times.

This retained investigation is finite and does not prove the identity universally. Its tolerance proposal is heuristic until tied to an arithmetic enclosure; exact rational triples instead permit exact comparison. The theorem itself follows from determinant alternation.

</details>

### Exercise 2
Design a test for the reflection involution property.

<details><summary>Hint 1</summary>

Begin with a valid nonzero mirror normal.

</details>

<details><summary>Hint 2</summary>

An involution alone also describes the identity, so connect the map to the specified mirror.

</details>

<details><summary>Full solution</summary>

**Solution.** Choose a random line (point $M$ and normal $n$) and a random point $P$. Compute $R(P)$ and then $R(R(P))$. Assert that $R(R(P))$ equals $P$ within tolerance. Also assert that points on the line are fixed.

</details>

### Exercise 3
Why is it important to test with nearly collinear points?

<details><summary>Hint 1</summary>

The determinant subtracts two products whose leading digits can cancel.

</details>

<details><summary>Hint 2</summary>

A small exact sign can decide a different hull or intersection branch.

</details>

<details><summary>Full solution</summary>

**Solution.** Nearly collinear points stress the floating-point evaluation of the orientation predicate. The sign may be wrong due to cancellation, and algorithms that depend on orientation may fail or produce inconsistent results.

</details>

### Exercise 4
Write a test that verifies spherical distance symmetry.

<details><summary>Hint 1</summary>

The exact dot product is symmetric.

</details>

<details><summary>Hint 2</summary>

A fixed absolute comparison threshold is an investigation policy, not a universal rounding theorem.

</details>

<details><summary>Full solution</summary>

**Solution.** Generate random nonzero vectors $u,v$. Compute $d_{1}=d_{S}(u,v)$ and $d_{2}=d_{S}(v,u)$. Assert $\lvert d_{1}-d_{2}\rvert<10^{-12}$. Also test with antipodal vectors, identical vectors, and orthogonal vectors.

The retained numerical threshold does not certify every possible normalization and evaluation. The mathematical symmetry proof uses the symmetric dot product; a certified numerical comparison requires its stated arithmetic-error model.

</details>

### Exercise 5
A convex hull routine passes all tests with random points but fails on a grid of $100\times 100$ points. What is the likely cause?

<details><summary>Hint 1</summary>

A grid has many exact collinear triples.

</details>

<details><summary>Hint 2</summary>

Compare the declared output convention with downstream expectations.

</details>

<details><summary>Full solution</summary>

**Solution.** A grid contains many collinear boundary points. With the documented boundary-retaining policy, a strict pop condition $<0$ deliberately retains those points; it does not discard the extreme vertices. Failure more likely indicates that downstream code expected a vertex-only hull, that duplicates or the all-collinear case were mishandled, or that the implementation's policy disagrees with its tests. Test both policies explicitly.

</details>

### Exercise 6

A candidate orientation value is always zero. Prove it satisfies swap-sign, cyclic and translation identities but still fails the geometric contract.

<details><summary>Hint 1</summary>

Every displayed homogeneous identity reduces to equality of zeros.

</details>

<details><summary>Hint 2</summary>

Use a triangle with positive base and height to obtain an independent nonzero area.

</details>

<details><summary>Full solution</summary>

Zero is its own negative, and changing or translating the inputs leaves the candidate zero, so all three identities hold. For the triangle $(0,0),(2,0),(0,3)$, the independent base-height area is three, requiring determinant magnitude six. The candidate returns zero and fails that requirement. Necessary symmetry identities therefore do not uniquely characterize the intended function. Defining the comparison area from the same zero output would conceal this failure rather than resolve it.

</details>

### Exercise 7

A proved determinant enclosure is $[-1/10,1/5]$. Which sign can it certify? What if a refined enclosure is $[1/100,1/50]$?

<details><summary>Hint 1</summary>

Containment of zero is not equality to zero.

</details>

<details><summary>Hint 2</summary>

A positive lower endpoint excludes every nonpositive value.

</details>

<details><summary>Full solution</summary>

The first enclosure certifies no definite sign and no exact zero. It is compatible with negative, zero and positive values, although not every value in the interval need be attainable. The refined enclosure certifies a strictly positive determinant because its lower bound is positive. If both are valid, their intersection is the refined interval here. A refinement that excluded the true value would not be an enclosure and could not support the conclusion.

</details>

### Exercise 8

For $G(x,y)=x^2$, prove that no fixed finite constant $C$ can bound distance to its zero set by $C|G|$ throughout a neighborhood of the origin.

<details><summary>Hint 1</summary>

Distance to the vertical axis is $|x|$.

</details>

<details><summary>Hint 2</summary>

Divide a proposed inequality by a nonzero $|x|$ and let it tend to zero.

</details>

<details><summary>Full solution</summary>

The proposed bound would require $|x|\le Cx^2$, or $1\le C|x|$, for all sufficiently small nonzero $x$. Taking $0<|x|<1/(C+1)$ contradicts it for any nonnegative finite $C$. A negative constant cannot bound a positive distance either. The vanishing gradient on the zero set explains why an unqualified linear residual estimate fails; the exact residual remains a correct zero-membership predicate.

</details>

### Exercise 9

For $y=0$ and $y=\delta x-h$, quantify the intersection-coordinate change when $h$ changes by $e$. Does exact substitution of the new point into both new equations prove stability?

<details><summary>Hint 1</summary>

Solve the scalar equation before and after the perturbation.

</details>

<details><summary>Hint 2</summary>

A residual concerns the recorded equations; sensitivity concerns changes in their data.

</details>

<details><summary>Full solution</summary>

The coordinates change from $h/\delta$ to $(h+e)/\delta$, a difference $e/\delta$. For small nonzero $\delta$ this can be arbitrarily large relative to $e$. Both points can satisfy their own defining equations exactly, so zero residual does not bound the forward change. The family is ill-conditioned near parallelism. Arithmetic improvement can preserve the exact recorded answer but cannot remove this mathematical sensitivity.

</details>

### Exercise 10

Show why declaring two coordinates equal when their separation is at most $\varepsilon$ cannot supply canonical equivalence classes without an additional clustering rule.

<details><summary>Hint 1</summary>

Consider zero, three quarters of the allowance, and three halves of it.

</details>

<details><summary>Hint 2</summary>

Equivalence requires transitivity.

</details>

<details><summary>Full solution</summary>

The first and second coordinates are close, as are the second and third, but the first and third are not. Thus closeness is not transitive and is not an equivalence relation. Taking connected chains of close pairs gives transitivity but can merge points much farther apart than the original allowance; representative-based insertion may instead depend on order. A canonical grouping must state which changed relation it means, rather than calling all these policies exact equality.

</details>

## Looking backward and forward

This chapter catalogued the properties that geometric predicates, transformations, and constructions should satisfy. Testing these properties with degenerate, extreme, and invalid inputs is essential for reliable geometric software.

The earlier **Worked Exercises and Synthesis** remains an optional companion with its original identity; its questions also appear in their current subject chapters. Return to those proofs when a contract is unclear, and distinguish a mathematical guarantee from a finite observation or an unproved numerical tolerance.
