var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: degree-brouwer-and-borsuk-ulam
title: "Degree, Brouwer and Borsuk-Ulam"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Degree, Brouwer and Borsuk-Ulam

An integer can obstruct a continuous map without describing every detail of that map. Degree is the integer multiplier induced on the top homology of a sphere. It turns composition into multiplication, makes nullhomotopy visible, and rules out a retraction of a disk onto its boundary. A different parity argument makes every antipodal self-map have odd degree and yields Borsuk–Ulam.

We give that parity argument independently of projective-space cup products. Its geometric input is relative cellular approximation for CW pairs, stated and cited in [CW Complexes](cw-complexes.md), together with the proved homotopy-extension property. The equivariant extension step is explained below. It is an application of that named approximation theorem, not a hidden proof of the arbitrary-CW approximation theorem itself.

The homological inputs are sphere homology, homotopy invariance, and the [cellular homology theorem](computations-with-cells.md). Coefficients are integral unless F2 is explicitly written. Sphere orientations are fixed before assigning signed degrees.

## 1. Degree as a homology multiplier

**Definition 12.1.** For n>=1 and f:S^n→S^n, define deg f by
$f_*[S^n]=(\\deg f)[S^n]\\quad\\text{in }H_n(S^n;\\mathbb Z)\\cong\\mathbb Z.$
The same oriented generator is used in source and target when they are identified.

Functoriality gives deg(gf)=deg g deg f. Homotopy invariance makes homotopic maps have equal degree. The identity has degree one, a constant map degree zero, and a homeomorphism degree ±1, since its homology map is invertible.

These statements already prove that a degree-nonzero map is not nullhomotopic. They do not say degree distinguishes every map between every kind of space. Its special target group is essential.

A reflection of the ambient R^{n+1} restricts to a degree -1 map of its sphere. To check the sign, use the oriented relative generator of (D^{n+1},S^n). Reflecting one coordinate reverses its orientation, so acts by -1. The connecting isomorphism to sphere homology commutes with the map, giving the same sign on [S^n]. Applying all n+1 coordinate reflections gives the antipodal degree
$\\deg(-\\operatorname{id}_{S^n})=(-1)^{n+1}.$

## 2. Maps of every degree and useful homotopies

On S1, f_m(z)=z^m has degree m. For positive m, divide the parameter circle into m consecutive arcs; each traverses the target once with positive orientation, so its cellular or singular one-cycle image is m times the generator. Negative m reverses orientation, and m=0 is constant.

Suspension preserves degree. Cover source and target suspensions by their two cone neighborhoods and use the natural connecting isomorphism in reduced Mayer–Vietoris. The commuting square identifies the suspended top homology map with the original map one degree below. Suspending f_m repeatedly therefore constructs maps of every integer degree on every positive-dimensional sphere.

**Proposition 12.2.** If f:S^n→S^n has no fixed point, then deg f=(-1)^{n+1}. If it has no point with f(x)=-x, then deg f=1.

*Proof.* In the first case the vectors (1-t)f(x)-tx never vanish: a zero with 0<t<1 would require f(x)=x because both endpoint vectors have unit length and opposite directions. Normalize them to obtain a homotopy from f to the antipodal map. In the second case normalize (1-t)f(x)+tx, giving a homotopy to the identity. Endpoint nonvanishing is automatic. $\\square$

Thus a map with degree different from the antipodal degree must have a fixed point. This is a sphere-specific consequence, not the full Lefschetz fixed-point theorem. For example any degree-two self-map of a sphere has a fixed point because two is neither possible antipodal sign.

## 3. No retraction and Brouwer

**Theorem 12.3 (no retraction).** For n>=1 there is no continuous r:D^n→S^{n-1} restricting to the identity on the boundary.

*Proof.* If i is boundary inclusion, ri=id. On reduced H_{n-1}, the identity would factor through the zero reduced homology of the contractible disk. But the boundary group is Z, including n=1 where reduced H0(S0)=Z. A zero map cannot equal its identity. $\\square$

**Theorem 12.4 (Brouwer fixed point).** Every continuous f:D^n→D^n has a fixed point.

*Proof.* The n=0 case is a one-point space. Suppose n>=1 and f has none. Set d(x)=x-f(x), never zero. From x continue along the ray pointing away from f(x) until reaching the sphere. The following formula makes continuity explicit:
$r(x)=x+s(x)d(x),$
$s(x)=\\frac{-\\langle x,d(x)\\rangle+
\\sqrt{\\langle x,d(x)\\rangle^2+\\|d(x)\\|^2(1-\\|x\\|^2)}}{\\|d(x)\\|^2}.$
The radicand is nonnegative and the denominator positive. This is the nonnegative root of ||x+s d||²=1, so r maps into the boundary and is continuous.

If ||x||=1, then <x,d>=1-<x,f(x)> is strictly positive: equality would force f(x)=x by Cauchy–Schwarz and ||f(x)||<=1. Therefore the displayed numerator is zero and r(x)=x. Thus r is a forbidden retraction, a contradiction. $\\square$

The ray construction uses compact-ball geometry but not differentiability or a contraction hypothesis on f. A fixed point need not be unique. A theorem about a closed ball cannot be applied to its open interior without checking the boundary: translation-like maps there can evade the conclusion.

## 4. Antipodal cellular approximation

Write S^n as nested equators S0⊂S1⊂...⊂Sn in the coordinate subspaces. In each dimension k there are two open hemispherical k-cells exchanged by the antipodal involution t. This is a free Z/2-CW structure: no nonidentity element fixes a point.

**Lemma 12.5.** An odd map f:S^n→S^n, meaning f(-x)=-f(x), is equivariantly homotopic to a cellular odd map.

*Proof.* Apply relative cellular approximation successively over the skeletal cells, choosing one representative from each free cell orbit. On the 0-skeleton choose the required paths to the target 0-skeleton and define the opposite-point path by applying t. Extend that homotopy to the higher cells by CW homotopy extension.

Inductively the map is cellular on the (k-1)-skeleton. Apply the relative approximation theorem to a characteristic k-disk, fixing its boundary, so its image lies in the target k-skeleton. On its antipodal partner define both the map and homotopy by equivariance. Their boundaries agree with the already fixed lower skeleton. Extend the resulting homotopy across higher cell orbits using the disk-pair extension property, again choosing one representative and reflecting its extension. Finite cellwise gluing gives a continuous equivariant homotopy. After dimension n the whole map is cellular. $\\square$

The freeness is doing work: a cell with nontrivial stabilizer could require compatibility beyond choosing an arbitrary extension and reflecting it. We have proved the equivariant reduction from the stated ordinary relative approximation input, with no cup products involved.

## 5. Full odd-degree parity proof

Let R=F2[Z/2], represented as F2[t]/(t²-1), and write eta=1+t. It has eta²=0. In the antipodal sphere cell structure,
$C_k(S^n;\\mathbb F_2)=R e_k,\\qquad
d e_k=\\eta e_{k-1}\\quad(1\\le k\\le n).$
Indeed the boundary equator of one closed hemisphere consists of its two (k-1)-hemispheres once each. In characteristic two orientation signs disappear. The augmentation epsilon:R→F2 sends a+bt to a+b.

**Theorem 12.6 (odd degree).** Every continuous odd self-map of S^n has odd integral degree for n>=1.

*Proof.* Replace it by the equivariant cellular map from Lemma 12.5. Its cellular chain map is R-linear, so in each degree it is multiplication by some a_k in R. The chain identity gives
$\\eta a_k=a_{k-1}\\eta.$
For every a in R, eta a=epsilon(a) eta. Since eta is nonzero, the equation forces
$\\epsilon(a_k)=\\epsilon(a_{k-1})$.
On the 0-skeleton a point maps to one of the two target points, so a0 is 1 or t and epsilon(a0)=1. Induction gives epsilon(a_n)=1.

The top mod-two cycle is eta e_n. It generates top homology: ker multiplication by eta is the one-dimensional F2-span of eta, and there is no incoming higher cell. The map sends
$\\eta e_n\\longmapsto\\eta a_n e_n
=\\epsilon(a_n)\\eta e_n=\\eta e_n.$
Thus its mod-two degree is one. Reduction of the integral oriented sphere generator gives this nonzero mod-two generator; naturality of coefficient reduction makes integral degree reduce to one. Therefore that integer is odd. Homotopy invariance carries the conclusion back to the original map. $\\square$

The argument does not divide by eta, which is a zero divisor. It uses only the equality of its scalar multiples 0 and eta. Nor does it assume the integral cellular boundary is the same in every dimension; the calculation has deliberately used F2 coefficients.

## 6. Borsuk–Ulam

**Corollary 12.7.** There is no continuous odd map S^n→S^{n-1} for n>=1.

*Proof.* Compose such a map with the equatorial inclusion into S^n. The resulting self-map is odd, hence has odd degree. Its top homology map factors through H_n(S^{n-1};F2)=0, so its mod-two degree is zero. This contradicts the preceding proof. $\\square$

**Theorem 12.8 (Borsuk–Ulam).** For every continuous f:S^n→R^n there is x with f(x)=f(-x).

*Proof.* For n=0 the codomain is a point. Otherwise if no such x existed, the normalized difference
$g(x)=\\frac{f(x)-f(-x)}{\\|f(x)-f(-x)\\|}$
would be a continuous odd map into S^{n-1}. Its denominator is positive everywhere under that supposition. Corollary 12.7 forbids it. $\\square$

This proof is independent of the cohomology ring of RPn, avoiding a circular argument in which Borsuk–Ulam and that ring calculation prove each other. A later projective-space calculation provides another route, not a prerequisite.

The statement compares exactly n real outputs on an n-sphere. It does not say every pair of antipodes has equal outputs, or that n+1 arbitrary outputs must coincide somewhere. The identity inclusion S^n⊂R^{n+1} has different values at antipodes and shows the dimension condition matters.

## 7. Worked examples

### Worked example 1 — Circle powers and parity

The map z↦z³ is odd because (-z)³=-z³, and its degree is three. The map z↦z² has degree two and is not odd, since (-z)²=z². Both agree with Theorem 12.6. The antipodal circle map z↦-z has degree one, not -1: in dimension one it is a rotation, and the formula (-1)^{n+1} gives +1.

### Worked example 2 — A disk map with many fixed points

Let f:D²→D² send (x,y) to (x,0). Its fixed set is the whole horizontal diameter. Brouwer asserts existence, not uniqueness or attraction. The map is not a retraction onto the boundary circle, because most image points lie inside the disk. Confusing an arbitrary retraction onto a subspace with the forbidden boundary retraction would misread the obstruction.

### Worked example 3 — Two continuous readings on a sphere

Let a,b:S²→R be continuous and define f=(a,b). Borsuk–Ulam gives antipodal points with both a-values and both b-values equal. Nothing in the theorem requires a or b individually to be constant. For the coordinate readings a=x,b=y, the north and south poles supply the coincidence, both mapping to (0,0).

This is a mathematical model for two simultaneous continuous observables, not an assertion that a discrete or discontinuous dataset satisfies the continuity hypothesis.

### Worked example 4 — A fixed point detected by degree

Take the twice-suspended degree-two circle power to obtain a degree-two map S³→S³. The antipodal map on S³ has degree +1. Proposition 12.2 therefore forces a fixed point. The same proposition does not force a fixed point for the antipodal map itself, which has none and has exactly the exceptional degree. The integer obstruction gives a sufficient condition, not a complete location algorithm.

## 8. Limits of the obstruction

Degree can rule out a map or force a coincidence while leaving many geometric details unspecified. It cannot locate the fixed point from the homology multiplier alone. A homology calculation also cannot automatically classify all maps into arbitrary targets.

The parity proof has a clearly named geometric input, relative cellular approximation. The homological part after that input is explicit and finite. Broader equivariant obstruction theory and general fixed-point formulas belong to later study and are not concealed inside this argument.

## Exercises

<a id="degree-brouwer-and-borsuk-ulam-ex-1"></a>
### Exercise 12.1

Prove degree is multiplicative under composition.

<details>
<summary>Hint 1</summary>

Apply both homology maps to the oriented generator.

</details>

<details>
<summary>Hint 2</summary>

Functoriality identifies the composite map.

</details>

<details>
<summary>Full solution</summary>

If f_*[S]=a[S] and g_*[S]=b[S], then (gf)_*[S]=g_*(a[S])=ab[S]. Thus deg(gf)=deg g deg f. Homotopic maps have the same multiplier by homotopy invariance, independently of this multiplication calculation.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-2"></a>
### Exercise 12.2

Why is a nonzero-degree sphere map not nullhomotopic?

<details>
<summary>Hint 1</summary>

A nullhomotopic map is homotopic to a constant.

</details>

<details>
<summary>Hint 2</summary>

Positive-dimensional reduced sphere homology is nonzero.

</details>

<details>
<summary>Full solution</summary>

A constant map factors through a point and acts as zero on Hn for n>=1. A nullhomotopic map therefore has degree zero. The contrapositive gives the claim. No converse for maps into arbitrary spaces is asserted.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-3"></a>
### Exercise 12.3

Explain the n=1 no-retraction proof using reduced H0.

<details>
<summary>Hint 1</summary>

The boundary of an interval has two components.

</details>

<details>
<summary>Hint 2</summary>

The interval has zero reduced H0.

</details>

<details>
<summary>Full solution</summary>

Reduced H0(S0)=Z while reduced H0(D1)=0. If r restricted to the boundary were the identity, the induced identity of Z would factor through zero, impossible. Using unreduced H0 alone would lose this simple obstruction.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-4"></a>
### Exercise 12.4

Check that the Brouwer ray formula restricts to the identity on the boundary.

<details>
<summary>Hint 1</summary>

Compute <x,x-f(x)> for ||x||=1.

</details>

<details>
<summary>Hint 2</summary>

Equality with zero would force a fixed point.

</details>

<details>
<summary>Full solution</summary>

One has <x,d>=1-<x,f(x)>>0 under the no-fixed-point supposition. With ||x||=1 the square root equals that positive number, so the numerator defining s is zero. Hence s=0 and r(x)=x, as needed for the retraction contradiction.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-5"></a>
### Exercise 12.5

In F2[t]/(t²-1), prove eta a=epsilon(a) eta.

<details>
<summary>Hint 1</summary>

Write a=u+vt.

</details>

<details>
<summary>Hint 2</summary>

Use t²=1 and characteristic two.

</details>

<details>
<summary>Full solution</summary>

Multiplication gives (1+t)(u+vt)=(u+v)+(u+v)t=(u+v)eta. Thus the coefficient is exactly augmentation epsilon(a). Eta is nonzero but eta²=0, so one must not cancel it as an invertible element.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-6"></a>
### Exercise 12.6

Why does equivariance make the cellular chain map R-linear?

<details>
<summary>Hint 1</summary>

The second cell is the antipodal translate of the first.

</details>

<details>
<summary>Hint 2</summary>

The map commutes with that translate.

</details>

<details>
<summary>Full solution</summary>

For a chosen basis cell e, equivariance gives f#(t e)=t f#(e). Additivity and F2-linearity extend this to every u+vt combination. A map Re_k→Re_k is therefore determined by one multiplier a_k, which is the algebra used in the parity recurrence.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-7"></a>
### Exercise 12.7

Prove there is no odd map S²→S¹ using the parity theorem.

<details>
<summary>Hint 1</summary>

Compose with equatorial inclusion.

</details>

<details>
<summary>Hint 2</summary>

The resulting self-map factors its top homology through zero.

</details>

<details>
<summary>Full solution</summary>

The composite S²→S¹→S² is odd, so its mod-two degree must be one. But H2(S¹;F2)=0, making the induced composite top homology map zero. This contradiction excludes the original odd map without invoking projective cup products.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-8"></a>
### Exercise 12.8

Give a counterexample to extending Borsuk–Ulam to n+1 arbitrary real outputs.

<details>
<summary>Hint 1</summary>

Use the sphere's coordinate inclusion.

</details>

<details>
<summary>Hint 2</summary>

Antipodal unit vectors are distinct.

</details>

<details>
<summary>Full solution</summary>

The map S^n→R^{n+1}, x↦x, is continuous and sends antipodes to distinct vectors. Thus no antipodal coincidence occurs. The theorem's equal source-sphere dimension and output dimension is essential.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-9"></a>
### Exercise 12.9

Show that any degree-two self-map of S^n has a fixed point.

<details>
<summary>Hint 1</summary>

Compare its degree with the antipodal degree.

</details>

<details>
<summary>Hint 2</summary>

Use the normalized straight homotopy from Proposition 12.2.

</details>

<details>
<summary>Full solution</summary>

If it had no fixed point it would be homotopic to the antipodal map, whose degree is either +1 or -1. Degree two differs from both, so the supposition is impossible. This proves existence, not uniqueness or a method for finding the point.

</details>

<a id="degree-brouwer-and-borsuk-ulam-ex-10"></a>
### Exercise 12.10

Identify the imported geometric theorem in the odd-degree proof and the independent algebra that follows it.

<details>
<summary>Hint 1</summary>

Separate equivariant approximation from the group-ring calculation.

</details>

<details>
<summary>Hint 2</summary>

The later cup-product chapter is not used.

</details>

<details>
<summary>Full solution</summary>

Relative cellular approximation for CW pairs is the named geometric input. Freeness lets us apply it on one cell from each antipodal orbit and reflect, using homotopy extension. The F2 group-ring boundary eta, augmentation recurrence, and top-cycle calculation then prove odd degree explicitly. No RPn cohomology-ring result is assumed.

</details>

## Sources

Primary references: [Hatcher, Algebraic Topology, Chapter 2 degree theory and Theorem 4.8 cellular approximation](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), and [May, A Concise Course](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). The antipodal F2 cellular parity proof is supplied directly here; the named relative cellular-approximation theorem is explicitly imported as described in [CW Complexes](cw-complexes.md).

## Summary

Degree is the multiplier on oriented sphere homology. It obstructs boundary retractions and, through an explicit continuous ray construction, proves Brouwer. Relative cellular approximation reduces odd maps to a free antipodal cell complex; its F2 augmentation recurrence proves odd degree without cup products. No odd map can lower sphere dimension, yielding Borsuk–Ulam. Each conclusion keeps its dimension, continuity, and geometric-input hypotheses.
`;export{e as default};