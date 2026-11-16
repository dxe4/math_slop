var e=`---
parent_id: book-galois-theory
chapter_id: ruler-compass-regular-polygons
title: "Ruler and Compass Impossibility and Regular Polygons"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Ruler and Compass Impossibility and Regular Polygons

Ruler and compass operations allow square roots through circle intersections. They do not allow arbitrary radicals. This chapter proves the exact quadratic-tower criterion, then classifies constructible regular polygons using cyclotomic groups. The algebra distinguishes an exact finite construction from a good numerical drawing.

Read the [coordinate-degree obstruction](extensions-degree-constructible-numbers.md), the [finite correspondence](fundamental-theorem-galois-theory.md) and [cyclotomic fields](cyclotomic-fields-polynomials.md). A construction starts from (0,0) and (1,0), uses the unmarked line through two distinct constructed points and circles with constructed centers and constructed radii, and introduces points only at isolated intersections. Coordinates are real unless we explicitly use a complex splitting field to study their conjugates.

## 1. The converse to the coordinate obstruction

The first chapter proved that each isolated line–line, line–circle or circle–circle intersection enlarges the coordinate field by degree at most two. Thus constructible numbers lie in real quadratic towers. We now prove that every such tower can be realised geometrically.

**Lemma 12.1 (Constructible arithmetic).** Constructible real numbers are closed under addition, subtraction, multiplication, division by a nonzero number and positive square roots.

*Proof.* Place numbers as signed lengths on a constructed coordinate axis. Copying a segment with a compass and reflecting across the origin give addition, subtraction and signs. Perpendiculars can be constructed by intersecting equal-radius circles about two points and joining their intersections; parallels are obtained by taking two perpendiculars. These operations make similar triangles available using constructed lines.

For multiplication, take a point A at distance one and a point B at distance |a| on one ray, and put C at distance |b| on another nonparallel ray from the same origin. The line through B parallel to AC cuts the second ray at D. Similar triangles give OD/OC=OB/OA=|a|, hence OD=|ab|. Restore the sign by reflection. For division by b≠0, put the reference length |b| where the construction used one and choose the target length one, obtaining |a/b| by the same proportionality. Nonzero denominators are necessary to form nondegenerate similar triangles.

For a positive a, place adjacent segments of lengths a and one on a line, making a total diameter a+1. Draw the semicircle on that diameter and erect the perpendicular at the join. Its height h satisfies h²=a by the right-triangle altitude relation, which follows from similarity of the two smaller right triangles. Thus h=√a. Zero has square root zero already, and negative real radicands have no real square root. ∎

The geometrical primitives use only the allowed intersections. Similarity explains the exact ratio; the picture is not being used as a measurement device. Selecting one of two reflected intersections chooses a sign, which is part of the construction rather than an ambiguity to ignore.

**Theorem 12.2 (Quadratic-tower criterion).** A real number α is constructible exactly when it lies in a finite tower of real fields
$$\\mathbb Q=K_0\\subseteq K_1\\subseteq\\cdots\\subseteq K_r\\subseteq\\mathbb R$$
with each degree [Kᵢ:Kᵢ₋₁] at most two.

*Proof.* Necessity is the coordinate intersection theorem from Chapter 1. For sufficiency, every genuine real quadratic step has the form K(√d) with d∈K positive. Indeed, for a quadratic generator satisfying x²+bx+c, completing the square gives (2α+b)²=b²−4c; the discriminant is positive because the generator is real and not in K. Thus each element of the larger field is a+b√d with a,b∈K. Inductively the preceding arithmetic constructions produce the required field elements and their positive square roots, so every element of the final field is constructible. Degree-one steps add nothing. ∎

Having degree a power of two is only a necessary condition until a suitable quadratic tower has been established. The theorem uses the tower itself. The next result describes its stronger Galois meaning.

## 2. The normal closure criterion

**Lemma 12.3 (Subgroups in a finite p-group).** If H is a proper subgroup of a finite p-group G, there is a subgroup J containing H with [J:H]=p and H normal in J. Repeating gives a chain from H to G with prime-index steps.

*Proof.* Let H act on the cosets G/H by left multiplication. The fixed cosets are exactly those represented by the normalizer N_G(H): fixation means g⁻¹Hg⊆H, and equal finite orders make it equality. Other orbits have sizes divisible by p. Since [G:H] is divisible by p, the fixed-coset count [N_G(H):H] is divisible by p as well. It is positive, so N_G(H) properly contains H.

The nontrivial p-group N_G(H)/H has an element of order p by Cauchy’s theorem. The preimage J of its cyclic subgroup has index [J:H]=p and normal subgroup H. Repeating strictly increases the subgroup order until reaching finite G. ∎

**Theorem 12.4.** Let α be real algebraic and let N be the splitting field of its minimal polynomial over Q. Then α is constructible if and only if Gal(N/Q) is a 2-group.

*Proof of necessity.* Start with a real quadratic tower containing α. We construct a finite Galois extension of Q of power-of-two degree containing the tower. Initially use Q. Suppose M/Q is such an extension containing a tower stage K, and the next stage adjoins √d with d∈K. Adjoin square roots of all conjugates σ(d), for σ∈Gal(M/Q), to form M′. Each adjunction has degree at most two, so [M′:M] is a power of two.

The product ∏σ(x²−σ(d)) has coefficients fixed by Gal(M/Q), hence rational. Together with a splitting polynomial for M, its roots generate M′. Thus M′/Q is finite normal and separable. Its total degree is still a power of two. After all stages we obtain such an extension containing α. Normality makes it contain every conjugate of α, hence N. Restriction onto Gal(N/Q) makes that group a quotient of a finite 2-group and therefore a 2-group.

*Proof of sufficiency.* Let G=Gal(N/Q) be a finite 2-group and H=Gal(N/Q(α)). Lemma 12.3 gives a chain H=Hᵣ⊆Hᵣ₋₁⊆⋯⊆H₀=G with successive index two. Reverse it through the finite correspondence to obtain a quadratic tower from Q to Q(α). Every field in this tower is a subfield of Q(α) and hence real. The quadratic-tower criterion makes α constructible. ∎

The normal closure used in the necessity proof may have complex elements. For example a real fourth root can acquire imaginary conjugates. Sufficiency nevertheless produces a real tower by using subgroups containing H, whose fixed fields lie inside the real field Q(α). This is why passing through a complex ambient splitting field does not force a geometric construction to use imaginary coordinates.

## 3. The regular polygon criterion

A regular n-gon for n≥3 is constructible from the unit circle if its point with angle 2π/n can be constructed. Once that point is available, its chord can be copied successively around the circle. Conversely the coordinates of any constructed regular polygon give that cosine and sine after choosing the initial vertex on the real axis.

**Theorem 12.5 (Gauss–Wantzel criterion).** For n≥3, a regular n-gon is constructible exactly when φ(n) is a power of two.

*Proof.* Put ζ=ζₙ and y=ζ+ζ⁻¹=2cos(2π/n). If the polygon is constructible then y is constructible. Its field degree is φ(n)/2 by the real cyclotomic theorem. Constructible degrees are powers of two, so φ(n) is a power of two.

Conversely, if φ(n) is a power of two, the cyclotomic group Gal(Q(ζ)/Q) is a 2-group. Its real subfield Q(y) is Galois over Q because the group is abelian, and its group is a quotient 2-group. Thus the splitting field of the minimal polynomial of y is itself a subfield of a finite 2-extension, or directly Q(y), and Theorem 12.4 makes y constructible. The cosine y/2 is constructible, and the positive sine is √(1−(y/2)²), also constructible. These coordinates give the required point and hence the polygon. ∎

The cases n=1,2 are trivial configurations rather than ordinary polygons; no degree-halving argument is needed there. A regular polygon's existence at arbitrary numerical precision does not settle whether its exact coordinates belong to a quadratic tower.

## 4. Which integers satisfy the criterion?

**Theorem 12.6.** The totient φ(n) is a power of two exactly when
$$n=2^k p_1\\cdots p_r,$$
where k≥0 and the pᵢ are distinct Fermat primes, primes of the form 2^(2^j)+1.

*Proof.* Write n as a product of prime powers. Its totient is the product of p^(a−1)(p−1) over those prime powers. If this product is a power of two, an odd prime p dividing n must occur to exponent a=1, since otherwise the odd factor p divides the totient. Also p−1 must be a power of two, say p=2^m+1.

If m has an odd factor b>1, write m=ab. Then 2^m+1=(2^a)^b+1 is divisible by 2^a+1 using the alternating factorisation of X^b+1 for odd b, so cannot be prime. Hence m is a power of two and p is a Fermat prime. No restriction is imposed on the exponent of two in n.

Conversely, each distinct Fermat prime contributes p−1, a power of two, and 2^k contributes either one or 2^(k−1). Their product is a power of two. This proves both directions without assuming any complete list of Fermat primes is known. ∎

**Example 12.7 (A fifteen-gon and a nine-gon).** We have 15=3·5 with distinct Fermat primes, so φ(15)=8 and the regular fifteen-gon is constructible. In contrast 9=3² repeats an odd prime and φ(9)=6, not a power of two, so the regular nine-gon is not constructible. Both can be drawn approximately; the difference concerns exact field operations.

**Example 12.8 (A seventeen-gon by existence).** The number seventeen is prime, since it is divisible by neither two nor three, the only primes at most √17. It equals 2^(2²)+1, so φ(17)=16. The cyclotomic group is a 2-group and the real subfield has degree eight. The theorem gives a chain of quadratic real fields and therefore a finite ruler and compass construction. This proves existence; it does not claim that a particular convenient diagram or numerical coordinate list has been provided.

**Example 12.9 (A forbidden seven-gon).** For n=7, the real cyclotomic coordinate y has degree φ(7)/2=3 and satisfies y³+y²−2y−1=0. A constructible real number cannot have degree three. Thus no exact regular seven-gon construction exists under the permitted operations. Its cubic field is even Galois, with cyclic group C₃; normality and radical solvability alone do not overcome the restriction to quadratic steps.

## 5. Classical impossibilities and their scope

Doubling a cube of side one needs ∛2, whose irreducible degree is three, so is impossible. Trisecting the constructible angle sixty degrees would produce twenty degrees; the coordinate 2cos20° has irreducible polynomial x³−3x−1 and degree three, so that particular trisection is impossible. Other angles, such as ninety degrees, can be trisected because thirty degrees is constructible. An impossibility theorem for a universal trisection procedure does not prohibit every individual trisection.

Squaring a unit circle would require a square of side √π. Here the obstruction is transcendence, not a cubic degree. Lindemann’s theorem that π is transcendental is an external theorem, not proved in this book. With that explicit input, √π cannot be algebraic, whereas every constructible number is algebraic, so circle squaring is impossible. The geometric deduction is elementary once the separate transcendence theorem is supplied.

## Exercises

### Exercise 12.1 — A constructible nested radical
<a id="galois-constructions-ex-1"></a>

Explain why √(3+√2) is constructible.

<details>
<summary>Hint</summary>

Use a real quadratic tower and verify positivity of the radicands.

</details>

<details>
<summary>Solution</summary>

The field chain Q⊆Q(√2)⊆Q(√2,√(3+√2)) has degrees at most two. Both radicands are positive in the chosen real embedding. The quadratic-tower criterion therefore makes the displayed number constructible. The argument supplies allowed operations, not merely the observation that some polynomial relation has degree four.

</details>

### Exercise 12.2 — A cubic obstruction
<a id="galois-constructions-ex-2"></a>

Prove the real root of x³−5 is not constructible from the unit segment.

<details>
<summary>Hint</summary>

Use Eisenstein and the necessary degree condition.

</details>

<details>
<summary>Solution</summary>

Eisenstein at five makes x³−5 irreducible over Q, so its real root has degree three. Every constructible number lies in a quadratic tower and has degree a power of two. Since three is not such a power, the root is not constructible. The argument does not rule out exact algebraic specification or approximation of that root.

</details>

### Exercise 12.3 — Completing the square
<a id="galois-constructions-ex-3"></a>

If L/K is a real quadratic extension, prove it is generated by a square root of a positive element of K.

<details>
<summary>Hint</summary>

Choose α∉K and complete its quadratic minimal polynomial.

</details>

<details>
<summary>Solution</summary>

The monic minimal polynomial is x²+bx+c. It gives (2α+b)²=b²−4c=d∈K. Because α is real and not in K, 2α+b is nonzero, so d>0 in the chosen real ordering. Then α=(−b+(2α+b))/2 belongs to K(√d), choosing one of the two square-root signs, and conversely √d=±(2α+b) lies in L. Thus L=K(√d).

</details>

### Exercise 12.4 — Exact versus approximate
<a id="galois-constructions-ex-4"></a>

Why does an accurate decimal drawing of a regular seven-gon not contradict its impossibility theorem?

<details>
<summary>Hint</summary>

An approximation is a different coordinate from the exact cubic algebraic number.

</details>

<details>
<summary>Solution</summary>

A finite decimal is rational and can approximate the exact cosine arbitrarily closely without equalling it. A construction based on such coordinates may give a polygon close to regular but does not produce the exact root of the degree-three minimal polynomial. The theorem excludes a finite exact quadratic-tower construction of that root. It places no positive lower bound on errors of rational approximations.

</details>

### Exercise 12.5 — Polygon decisions
<a id="galois-constructions-ex-5"></a>

Decide constructibility of regular polygons with 12,20,21 and25 sides.

<details>
<summary>Hint</summary>

Compute the totients or use the distinct-Fermat-prime classification.

</details>

<details>
<summary>Solution</summary>

φ(12)=4 and φ(20)=8, so twelve- and twenty-gons are constructible. φ(21)=12 is not a power of two, so the twenty-one-gon is not. φ(25)=20 is not a power of two, so the twenty-five-gon is not. The latter repeats the odd prime five; the former includes seven, whose predecessor six is not a power of two.

</details>

### Exercise 12.6 — Why the exponent is a power of two
<a id="galois-constructions-ex-6"></a>

Show that if 2^m+1 is prime, m must be a power of two.

<details>
<summary>Hint</summary>

Write m=2^s b with b odd and factor X^b+1 when b>1.

</details>

<details>
<summary>Solution</summary>

If b>1, put X=2^(2^s). Then 2^m+1=X^b+1=(X+1)(X^(b−1)−X^(b−2)+⋯−X+1). Both factors exceed one for X≥2 and odd b>1, contradicting primality. Thus b=1 and m=2^s. The converse is not asserted: a number of Fermat form can still be composite.

</details>

### Exercise 12.7 — Repeated odd primes
<a id="galois-constructions-ex-7"></a>

Why does n divisible by an odd prime square fail the regular-polygon criterion?

<details>
<summary>Hint</summary>

Inspect the corresponding prime-power factor in φ(n).

</details>

<details>
<summary>Solution</summary>

If pᵃ divides n with odd p and a≥2, the factor p^(a−1)(p−1) appears in φ(n). Thus p divides φ(n), preventing the totient from being a power of two. The criterion excludes constructibility. This applies even when p itself is a Fermat prime, as the regular nine-gon and twenty-five-gon illustrate.

</details>

### Exercise 12.8 — A normal closure can be nonreal
<a id="galois-constructions-ex-8"></a>

Explain why the constructibility proof for a positive fourth root of two can use a nonreal normal closure.

<details>
<summary>Hint</summary>

Compare its real quadratic tower with the roots of x⁴−2.

</details>

<details>
<summary>Solution</summary>

The positive root α lies in Q⊆Q(√2)⊆Q(α), a real quadratic tower. Its minimal polynomial also has roots −α and ±iα, so its normal closure is Q(α,i), which is nonreal. That Galois field has degree eight, a power of two. The group criterion uses it to analyse conjugates, while the actual coordinate construction uses the real tower. No imaginary point is required in the Euclidean construction.

</details>

### Exercise 12.9 — A prime-index subgroup chain
<a id="galois-constructions-ex-9"></a>

Why is a chain from H to G, rather than any chain from the identity, needed to construct a chosen real α from its normal closure?

<details>
<summary>Hint</summary>

Its fixing subgroup is H=Gal(N/Q(α)). Track fixed-field containment.

</details>

<details>
<summary>Solution</summary>

Subgroups containing H have fixed fields contained in N^H=Q(α), so those fields are real. A chain from G down to H with index two therefore reverses to a real quadratic tower ending at Q(α). A chain ending at the identity would instead end at all of N, which can be nonreal. The subgroup selected by the desired element keeps the field tower inside the correct coordinate field.

</details>

### Exercise 12.10 — Solvable is weaker than constructible
<a id="galois-constructions-ex-10"></a>

Give an algebraic number solvable by radicals but not constructible by ruler and compass.

<details>
<summary>Hint</summary>

Use a real cube root.

</details>

<details>
<summary>Solution</summary>

The number ∛2 is already one radical and lies in a radical tower. Its polynomial's splitting field also lies in the tower obtained by adding a cube root of unity. Yet its degree over Q is three, ruling out constructibility. General radical towers permit cube roots; ruler and compass towers permit only quadratic steps. The two existence problems therefore have different group restrictions.

</details>

### Exercise 12.11 — A particular trisection
<a id="galois-constructions-ex-11"></a>

Why does impossibility of trisecting sixty degrees not imply impossibility of trisecting ninety degrees?

<details>
<summary>Hint</summary>

Compare the exact target angles and their known constructions.

</details>

<details>
<summary>Solution</summary>

Trisecting sixty degrees requires twenty degrees, whose cosine has the degree-three obstruction. Trisecting ninety degrees requires thirty degrees, obtainable by bisecting a constructible sixty-degree angle from an equilateral triangle. The first result excludes a universal method handling every constructible angle. It does not exclude angles whose particular third is constructible by a different finite construction.

</details>

### Exercise 12.12 — Circle squaring and the imported theorem
<a id="galois-constructions-ex-12"></a>

State precisely the extra theorem used to rule out squaring a circle, and complete the algebraic deduction from it.

<details>
<summary>Hint</summary>

Use transcendence of π and closure of algebraic numbers under squaring.

</details>

<details>
<summary>Solution</summary>

The extra input is Lindemann’s theorem that π is transcendental, which this chapter does not prove. A square with the area of a unit circle has side √π. If that side were constructible it would be algebraic by the quadratic-tower theorem, and its square π would then be algebraic, a contradiction. The geometric deduction is proved here; the transcendence result is explicitly imported.

</details>

## Summary

Constructible real numbers are exactly those lying in real quadratic towers, equivalently those whose normal closures have 2-group Galois groups. Cyclotomic theory then classifies regular polygons by power-of-two totients and distinct Fermat prime factors. The resulting impossibilities concern exact finite constructions, with transcendence input explicitly separated for circle squaring. The final chapter passes from finite correspondences to infinite Galois groups and the topology needed to recover their subfields.
`;export{e as default};