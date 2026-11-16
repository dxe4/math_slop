
# Extreme Points and the Krein–Milman Theorem

A compact polygon is built from its vertices. The Krein–Milman theorem extends that idea to compact convex sets in locally convex spaces: the whole set is the closed convex hull of its extreme points. The topology is part of the statement. A dual unit ball is often compact only in its weak-star topology, so the corresponding closure concerns finite measurements rather than uniform norm approximation.

Preparation is [locally convex separation](convexity-duality.md), [Banach–Alaoglu](weak-topologies-alaoglu-reflexivity.md), and the definition of compactness by open covers. Work first over real scalars; complex spaces are treated through their underlying real locally convex spaces. We prove existence of extreme points through minimal compact faces, then prove the closed-hull theorem by separation. Finite-dimensional representations, exposed points and unit-ball examples explain the scope and its limitations.

## Extreme points, faces and exposed points

**Definition 15.1 (Extreme point).** A point \(e\) of a convex set \(K\) is extreme if \(e=(1-t)x+ty\), with \(x,y\in K\), \(0<t<1\), forces \(x=y=e\). The set of such points is \(\operatorname{ext}K\).

Checking only midpoints is equivalent: a nontrivial strict convex combination places the point inside a segment, from which a smaller symmetric segment around it gives a nontrivial midpoint representation. Conversely a midpoint is already a strict combination.

**Definition 15.2 (Face).** A convex subset \(F\subseteq K\) is a face if any strict convex combination of points of \(K\) lying in \(F\) has both endpoints in \(F\). A singleton face is exactly an extreme point. A face of a face is a face of the whole set: first force endpoints into the larger face, then into the smaller one.

If a continuous real linear functional attains its maximum on \(K\), its maximizer set is a closed face. Linearity makes the value at a convex combination an average; it can equal the maximum only when both values are maximal. An exposed point is the unique maximizer of some such functional. Every exposed point is extreme, but the converse can fail.

**Worked example 15.3 (Extreme but not exposed).** In the plane take the convex hull of the closed unit disk and \(q=(2,0)\). Let \(p=(1/2,\sqrt3/2)\). The line \(p\cdot x=1\) supports the disk at \(p\) and also contains \(q\), so its maximizer face on the hull is the segment \([p,q]\). The endpoint \(p\) is extreme in that face and hence in the hull. But any linear functional maximizing at \(p\) must, on the contained disk, have normal parallel to \(p\). That same supporting functional also maximizes at \(q\), so \(p\) is not exposed. A vertex-like extreme point need not be isolated by one measurement.

## Minimal compact faces contain only one point

**Lemma 15.4 (Existence in every closed face).** Every nonempty compact convex subset of a Hausdorff locally convex space has an extreme point. Every nonempty closed face contains an extreme point of the whole set.

*Proof.* Start with the given set, or with a specified nonempty closed face. Consider its nonempty closed faces, ordered by reverse inclusion. A chain is a nested collection of nonempty closed subsets of a compact set, so the finite-intersection property gives a nonempty intersection. That intersection is closed, convex and a face: membership of a strict combination in every chain member forces both endpoints into every member. It is therefore an upper bound in the reverse order. Zorn's lemma gives a minimal nonempty closed face \(F\).

If \(F\) contained distinct points, locally convex separation would give a continuous linear functional taking different values at them. Compactness attains its maximum on \(F\). Its maximizer set is then a nonempty proper closed face of \(F\), hence a face of the original set, contradicting minimality. Thus \(F\) is a singleton extreme point. Starting inside a closed face gives an extreme point there that remains extreme in the whole set by the face property. ∎

The choice input is explicit: Zorn selects a minimal face among possibly uncountably many. Compactness ensures that a nested chain does not lose every point at its intersection. No sequence approximation or assumption that the ambient topology is metrizable is used.

## The closed convex hull theorem

**Theorem 15.5 (Krein–Milman).** If \(K\) is nonempty, compact and convex in a Hausdorff locally convex space, then
\[
 K=\overline{\operatorname{conv}(\operatorname{ext}K)}
\]
in that topology.

*Proof.* Let \(C\) be the displayed closed convex hull. The preceding lemma makes the extreme-point set nonempty. Compact subsets of Hausdorff spaces are closed, so convexity of \(K\) gives \(C\subseteq K\). Suppose \(x\in K\setminus C\). Strict point separation from chapter 14 gives a continuous real linear functional with \(\phi(x)>\sup_C\phi\). Its maximum on compact \(K\) is attained, and the maximizer set is a nonempty closed face. By Lemma 15.4 it contains some \(e\in\operatorname{ext}K\). Thus
\[
 \phi(e)=\max_K\phi\ge\phi(x)>\sup_C\phi,
\]
contradicting \(e\in C\). No such point exists, proving equality. ∎

The conclusion concerns closure of finite convex combinations. It does not by itself give a probability measure representing each point, uniqueness of such a measure, or a countable sequence converging in a nonmetrizable topology. Those are different statements. The theorem needs all three structural hypotheses: compactness, convexity and enough continuous linear functionals supplied by local convexity and Hausdorffness.

## Finite-dimensional representations can dispense with closure

**Lemma 15.6 (Carathéodory reduction).** In real dimension \(d\), any point in the convex hull of a set is a convex combination of at most \(d+1\) of its points.

*Proof.* Start with a finite convex combination with positive coefficients. If more than \(d+1\) points occur, they are affinely dependent: there are coefficients \(a_j\), not all zero, with \(\sum a_j=0\) and \(\sum a_jx_j=0\). Some \(a_j\) is positive. Subtract from the convex weights \(t a_j\), where \(t\) is the minimum of weight divided by \(a_j\) over positive \(a_j\). All new weights stay nonnegative, still sum to one and represent the same point, while at least one becomes zero. Iterate until at most \(d+1\) remain. ∎

**Theorem 15.7 (Finite-dimensional compact convex representation).** Every point of a nonempty compact convex set in dimension \(d\) is a convex combination of at most \(d+1\) extreme points.

*Proof.* Work in its affine hull and induct on that dimension. A singleton is immediate. A boundary point lies in a proper supporting face. To obtain a supporting functional, choose outside points tending to the boundary point, strictly separate each from the set, and normalize their functionals in Euclidean coordinates. A subsequence converges on the finite-dimensional unit sphere to a nonzero functional; the separation inequalities pass to the limit, giving a supporting maximum at the boundary point. Full dimension in the affine hull makes its maximizer face proper. That face has smaller dimension, and its extreme points are extreme in the original set, so induction represents the boundary point.

An interior point lies on a line segment joining two boundary points: intersect a line through it with the compact convex set and take the two interval endpoints. Represent those endpoints by the induction argument and combine the finite convex combinations. Carathéodory then reduces the final number to at most \(d+1\). ∎

This proof supplies the extra finite-dimensional argument. Krein–Milman plus Carathéodory alone would not justify simply deleting the closure when the extreme-point set has not been proved closed.

## Unit balls expose the role of topology

**Worked example 15.8 (A continuous-function ball with only two extreme points).** In the real space \(C([0,1])\), a unit-ball function is extreme exactly when \(|f(t)|=1\) everywhere. If at one point its modulus is below one, continuity gives a small interval with uniform slack. A nonzero continuous bump supported there can be added and subtracted while staying in the unit ball, disproving extremality. Conversely a real endpoint value one or minus one cannot be a nontrivial average of two values in \([-1,1]\), so pointwise endpoint values force any two averaging functions to coincide with \(f\).

Connectedness of the interval and the intermediate value theorem make such continuous endpoint-valued functions only the constants one and minus one. Their closed convex hull contains only constants, while the ball contains nonconstant functions. Hence the ball cannot be weakly compact: otherwise Krein–Milman in the weak topology would force equality with that closed convex hull, and the finite-dimensional constant subspace is weakly closed. The reflexive unit-ball criterion therefore proves that this real continuous-function space is not reflexive.

**Worked example 15.9 (The weak-star ball of \(\ell^\infty\)).** View real \(\ell^\infty\) as the dual of \(\ell^1\). Its unit ball is weak-star compact. Its extreme points are precisely sign sequences, with every coordinate one or minus one. Any coordinate strictly between the endpoints can be perturbed in both directions, while endpoint coordinates force equality pointwise in any averaging decomposition.

One can see the weak-star closed-hull conclusion directly. For a target \(x\) in the ball and a finite first \(N\) coordinates, take all sign choices there with weights
\[
 w_\varepsilon=\prod_{j=1}^N\frac{1+\varepsilon_jx_j}{2}.
\]
These are nonnegative, sum to one and average the \(j\)-th sign to \(x_j\). Extend each sign vector by an all-ones tail. The finite convex combination agrees with \(x\) in its first \(N\) coordinates and remains bounded by one. Against any \(\ell^1\) input, the tail error is at most twice its summable tail, so the combinations converge weak-star to \(x\). For \(x=0\) their norm distance remains one because of that fixed tail; this particular construction is a weak-star approximation, not a norm approximation.

## Extreme norming functionals

**Corollary 15.10 (Extreme dual support).** For every nonzero vector of a real normed space there is an extreme point of the dual unit ball attaining its norm on that vector.

*Proof.* The dual ball is weak-star compact and convex by Banach–Alaoglu. Evaluation at the fixed vector is weak-star continuous. Its maximum is the vector's norm by Hahn–Banach. The maximizer set is a nonempty closed face, so Lemma 15.4 gives an extreme point of the whole dual ball in that face. ∎

An optimization over a compact convex set therefore has an extreme maximizer for any continuous linear objective. The maximizer need not be unique, and the extreme point need not be exposed. Linear programs on polytopes are a finite-dimensional instance, while dual unit-ball support uses a weaker compact topology in infinite dimensions.

## Strict and uniform convexity

A normed ball is strictly convex when distinct unit vectors have midpoint norm below one. Its extreme points are then all its unit-sphere points: a nontrivial averaging representation on the sphere would contradict the strict midpoint property, while an interior point can be perturbed in both directions. Hilbert geometry supplies the stronger quantitative bound
\[
 \left\|\frac{x+y}{2}\right\|^2
 =\frac{\|x\|^2+\|y\|^2}{2}-\frac{\|x-y\|^2}{4}
 \le1-\varepsilon^2/4
\]
whenever both norms are at most one and their distance is at least \(\varepsilon\). Thus Hilbert spaces are uniformly convex, with a permissible deficit \(1-\sqrt{1-\varepsilon^2/4}\). This estimates how nearly equal two unit-ball vectors must be when their midpoint nearly has norm one.

Uniform convexity has important general Banach consequences, but no general reflexivity theorem for all uniformly convex spaces is used here. Hilbert reflexivity was already proved through Riesz. The inequality above is a complete quantitative statement in the geometry presently available.

## An extreme point need not be exposed

A concrete planar example separates the two notions. Let K be the convex hull of the closed Euclidean unit disk and the point p=(2,0). This is compact and convex. Put t=(1/2,sqrt3/2), a unit vector. The linear functional z↦t·z has maximum one on the disk, attained only at t by equality in Cauchy–Schwarz, and has value one at p. Its maximizing face on K is therefore the whole segment from t to p.

The point t is extreme in K. If it were an average of two points of K, applying that supporting functional would force both points into its maximizing segment. But t is an endpoint of the segment; a nontrivial average of its points cannot equal that endpoint. Thus both points must be t. This proves extremality using the face property rather than an impression from a drawing.

It is not exposed. Any nonzero linear functional attaining its maximum over the disk at t must be a positive multiple of z↦t·z: the disk's unique maximizer for a coefficient vector v is v/||v||. Such a functional gives the same value at p, so it cannot uniquely maximize at t over K. The zero functional is constant and cannot expose it either. Every possible linear objective has been accounted for, establishing the failure of exposure.

Nearby exposed points nevertheless approach t. For θ>π/3 sufficiently close to π/3, let uθ=(cosθ,sinθ). The functional with coefficient uθ has disk maximum one uniquely at uθ, while its value at p is 2cosθ<1. Hence it uniquely exposes uθ in K, and these points tend to t as θ decreases to π/3. This proves a particular approximation statement; it does not invoke a general theorem about density of exposed points in every infinite-dimensional setting.

The example explains what the extreme-maximizer principle promises in optimization. A linear objective on a compact convex set has an extreme maximizer, but its full maximizing face may contain many other points. A procedure returning an interior point of the segment from t to p still returns an optimizer for that supporting objective. It has not contradicted existence of an extreme optimizer, nor has it demonstrated uniqueness.

Krein–Milman's closed-hull conclusion uses extreme points, not only uniquely exposed points, and keeps the relevant topology in its closure. In a finite-dimensional example the compactness is ordinary Euclidean compactness. In dual balls the available compactness may instead be weak-star, and the allowed continuous objectives must be interpreted in that topology. Neither the planar picture nor the word “extreme” licenses dropping those distinctions when passing to an infinite-dimensional application.

## Exercises

### Exercise 15.1 {#extreme-points-krein-milman-ex-1}

Prove an exposed point is extreme.

<details><summary>Hint 1</summary>
Apply its exposing functional to a strict convex combination.
</details>
<details><summary>Hint 2</summary>
An average reaches the maximum only if both terms do.
</details>
<details><summary>Solution</summary>
If \(e=(1-t)x+ty\) and a functional has its unique maximum at \(e\), linearity gives its value as the weighted average of the values at \(x,y\). Both are at most the maximum, so equality forces each to be a maximizer. Uniqueness makes both equal \(e\), proving extremality.
</details>

### Exercise 15.2 {#extreme-points-krein-milman-ex-2}

Why is a maximizer set of a linear functional a face?

<details><summary>Hint 1</summary>
Both endpoints of a strict combination have values at most the maximum.
</details>
<details><summary>Hint 2</summary>
A positive weighted average cannot hide a strict deficit.
</details>
<details><summary>Solution</summary>
If a strict combination has maximum value, neither endpoint can have a smaller value, since both weights are positive and the other endpoint cannot exceed the maximum. Thus both endpoints lie in the maximizer set. The set is convex by linearity and closed when the functional is continuous, proving the asserted face properties.
</details>

### Exercise 15.3 {#extreme-points-krein-milman-ex-3}

Show a face of a face is a face of the original convex set.

<details><summary>Hint 1</summary>
First apply the outer face condition to the endpoints.
</details>
<details><summary>Hint 2</summary>
Then use the inner condition inside that face.
</details>
<details><summary>Solution</summary>
If a strict combination belongs to the smaller face, it belongs to the larger one, whose face property puts both endpoints there. The smaller face property now puts both endpoints in the smaller set. Convexity is inherited by its definition, so it is a face of the original set. This transitivity is needed in the minimal-face proof.
</details>

### Exercise 15.4 {#extreme-points-krein-milman-ex-4}

In the minimal-face argument, explain why a chain intersection remains nonempty.

<details><summary>Hint 1</summary>
A finite subcollection of a nested chain has a smallest member.
</details>
<details><summary>Hint 2</summary>
Use compactness through the closed-set finite-intersection property.
</details>
<details><summary>Solution</summary>
Every finite intersection of chain members equals one of the nonempty members, hence is nonempty. They are closed subsets of the fixed compact starting face. Compactness therefore gives nonempty intersection of the entire chain. Without compactness a decreasing family of nonempty closed sets could have empty intersection, preventing the Zorn upper-bound argument.
</details>

### Exercise 15.5 {#extreme-points-krein-milman-ex-5}

Find the extreme points of the real square \([-1,1]^2\).

<details><summary>Hint 1</summary>
An interior coordinate can be moved slightly in both directions.
</details>
<details><summary>Hint 2</summary>
If both coordinates are endpoints, any average is forced coordinatewise.
</details>
<details><summary>Solution</summary>
The four points \((\pm1,\pm1)\) are extreme by the coordinate endpoint argument. Every other point has at least one coordinate strictly between its two bounds; perturbing only that coordinate in both directions produces a nontrivial midpoint representation within the square. Thus those four vertices are exactly the extreme set.
</details>

### Exercise 15.6 {#extreme-points-krein-milman-ex-6}

Prove every unit vector in a Hilbert space is extreme in its closed unit ball.

<details><summary>Hint 1</summary>
Use the parallelogram identity on a midpoint representation.
</details>
<details><summary>Hint 2</summary>
A midpoint of norm one forces the endpoint distance to be zero.
</details>
<details><summary>Solution</summary>
If \(e=(x+y)/2\), with \(\|e\|=1\), \(\|x\|,\|y\|\le1\), then the midpoint identity gives \(1\le1-\|x-y\|^2/4\). Hence \(x=y=e\). The midpoint characterization yields extremality. Interior vectors in a nonzero space are not extreme because a sufficiently small symmetric perturbation stays in the ball.
</details>

### Exercise 15.7 {#extreme-points-krein-milman-ex-7}

Identify the extreme points of the real unit ball of \(C([0,1])\).

<details><summary>Hint 1</summary>
A modulus deficit on one neighbourhood permits a continuous bump perturbation.
</details>
<details><summary>Hint 2</summary>
A continuous function taking only endpoint values on an interval is constant.
</details>
<details><summary>Solution</summary>
Extremality forces modulus one at every point by the bump argument. Conversely such real endpoint values force equality in any average pointwise. The intermediate value theorem makes a continuous function taking only minus one and one on the connected interval constant. Thus exactly the two constant functions are extreme.
</details>

### Exercise 15.8 {#extreme-points-krein-milman-ex-8}

Why does that continuous-function example not contradict Krein–Milman?

<details><summary>Hint 1</summary>
Its norm unit ball is not compact in the topology being used.
</details>
<details><summary>Hint 2</summary>
Even weak compactness would imply an impossible closed-hull description here.
</details>
<details><summary>Solution</summary>
The ball is not norm compact in an infinite-dimensional space. It is not weakly compact either: if it were, Krein–Milman would make it the weakly closed convex hull of its two constant extreme points, consisting only of constants. The constant subspace is finite dimensional and weakly closed, so nonconstant ball members rule this out. The compactness premise is absent in both proposed applications.
</details>

### Exercise 15.9 {#extreme-points-krein-milman-ex-9}

Verify the sign weights in Worked example 15.9 sum to one and have coordinate average \(x_j\).

<details><summary>Hint 1</summary>
Factor the sum over all signs into a product of two-term sums.
</details>
<details><summary>Hint 2</summary>
For the chosen coordinate, subtract its two weights instead of adding them.
</details>
<details><summary>Solution</summary>
Each factor sums as \((1+x_j)/2+(1-x_j)/2=1\), so the product sum is one. The signed sum in coordinate \(j\) is \((1+x_j)/2-(1-x_j)/2=x_j\), while all other factors still sum to one. Nonnegativity holds because every target coordinate lies in \([-1,1]\). Thus the finite convex combination matches all prescribed coordinates exactly.
</details>

### Exercise 15.10 {#extreme-points-krein-milman-ex-10}

Prove a continuous linear objective on a nonempty compact convex set has an extreme maximizer.

<details><summary>Hint 1</summary>
Compactness gives a nonempty maximizer set.
</details>
<details><summary>Hint 2</summary>
That set is a closed face containing an extreme point of the whole set.
</details>
<details><summary>Solution</summary>
The objective attains its maximum on the compact set. Its maximizer set is nonempty, closed and a face. Lemma 15.4 supplies an extreme point of the original set inside that face, hence an extreme maximizer. This does not prove the maximizer unique or exposed; the face can contain many points.
</details>

### Exercise 15.11 {#extreme-points-krein-milman-ex-11}

Show a convex combination in real dimension three can be reduced to at most four terms.

<details><summary>Hint 1</summary>
More than four points are affinely dependent.
</details>
<details><summary>Hint 2</summary>
Shift the coefficients until one becomes zero while preserving their sum and represented vector.
</details>
<details><summary>Solution</summary>
Use an affine dependence with coefficients summing to zero. Subtract a positive multiple chosen as the smallest weight-to-positive-dependence ratio. The new weights remain nonnegative and retain both total one and the same vector, but one vanishes. Repeat whenever more than four remain. This proves the reduction for a point already in the convex hull; removing a closure requires the additional compact finite-dimensional argument.
</details>

### Exercise 15.12 {#extreme-points-krein-milman-ex-12}

For Hilbert unit-ball vectors with midpoint norm at least \(1-\eta\), bound their mutual distance.

<details><summary>Hint 1</summary>
Rearrange the midpoint parallelogram inequality.
</details>
<details><summary>Hint 2</summary>
Square the lower midpoint bound before simplifying.
</details>
<details><summary>Solution</summary>
The inequality gives \(\|x-y\|^2\le4[1-\|(x+y)/2\|^2]\le4[1-(1-\eta)^2]\) for \(0\le\eta\le1\). Thus the distance is at most \(2\sqrt{2\eta-\eta^2}\). This is a quantitative form of strict convexity, making near equality in the midpoint norm force nearby endpoints.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto extreme-points chapter, with locally convex separation and dual compactness proved earlier in this book. Conway and Brezis are syllabus benchmarks. Krein–Milman and the finite-dimensional representation theorem are fully proved. General Choquet probability-measure representations and uniqueness conditions are separate theorems and are not inferred from closed convex hull alone.

## Summary

Compactness and Zorn produce minimal closed faces, and local convex separation forces those faces to be singletons. Separating a point from the extreme-point hull then proves Krein–Milman. Finite dimensions add exact finite convex representations, while weak-star dual balls show why the topology of closure matters. Extreme maximizers need not be exposed or unique. The final chapter uses completeness and operator bounds in a different direction, constructing continuous time evolution through semigroups and their generators.
