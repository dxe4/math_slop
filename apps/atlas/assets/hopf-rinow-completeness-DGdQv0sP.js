var e=`---
parent_id: book-riemannian-geometry
chapter_id: hopf-rinow-completeness
title: "Hopf–Rinow and Completeness"
level: graduate
license: CC BY-SA 4.0
---

# Hopf–Rinow and Completeness {#section-1-hopf-rinow-and-completeness}

Local geodesics exist uniquely, and sufficiently short radial ones minimize. Hopf–Rinow gives the global bridge: for a connected finite-dimensional Riemannian manifold without boundary, metric completeness, geodesic completeness and compactness of closed bounded sets are equivalent. Under those conditions every pair of points has a minimizing geodesic.

This L4–L5 chapter assumes the [distance and topology construction](riemannian-metrics.md), [local exponential and first variation](geodesics-exponential-map.md), and [Ricci minimizing-segment bound](comparison-theorems.md). Manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary, with a positive smooth metric. We prove the equivalences and minimizing existence rather than cite them. The analytic inputs are compactness of finite-dimensional closed tangent balls, metric subsequence facts and the already named smooth local ODE continuation theorem. Covering-space results used in one final corollary are linked as explicit prior inputs.

<a id="section-5-1-four-conditions-and-one-extra-conclusion"></a>
## 1. Four conditions and one extra conclusion {#section-7-1-four-conditions-and-one-extra-conclusion}

For a connected manifold consider these conditions:

1. Its Riemannian distance is a complete metric.
2. Every maximal geodesic is defined for every real time.
3. For at least one point the exponential is defined on its entire tangent space.
4. Every closed distance-bounded subset is compact.

We will prove their equivalence. In addition they imply that any two points are joined by a geodesic whose length equals their distance. The final assertion alone is not listed as an equivalent condition: an open convex Euclidean ball has minimizing segments between every pair but is incomplete.

Condition three means every initial velocity at the specified point is in the time-one exponential domain. It does not mean merely that the exponential's image covers the manifold while its domain remains a proper subset. The difference matters on incomplete convex domains, where every point can be reached by some allowed straight segment but sufficiently large velocities escape before time one.

<a id="section-18-2-complete-distance-prevents-finite-geodesic-escape"></a>
## 2. Complete distance prevents finite geodesic escape {#section-20-2-complete-distance-prevents-finite-geodesic-escape}

Suppose the distance metric is complete and a maximal geodesic has a finite forward endpoint $b$. Its speed is a constant $c$. The length bound gives $d(\\gamma(s),\\gamma(t))\\le c|s-t|$, so the curve is Cauchy as time tends to $b$. Completeness supplies a limit point $p$ in the manifold.

Choose a coordinate ball around that point whose closure is compact inside a larger chart. The tail of the geodesic remains in the smaller ball because metric and manifold topologies agree. On the compact closure the metric has a uniform positive lower matrix bound. Constant metric speed therefore bounds all coordinate velocity components of the tail. Thus the position-velocity trajectory lies in a compact subset of the tangent bundle chart.

A smooth ODE trajectory staying in such a compact set cannot have a finite maximal endpoint. Cover that compact set by finitely many local existence neighborhoods and shrink them so that each supplies a fixed positive time of continuation. Taking the minimum of those finitely many times gives a common continuation time for every possible tail state. Starting sufficiently near $b$ extends the trajectory past $b$, and uniqueness glues the extension to the original. This contradicts maximality. The backward endpoint is handled by reversing time.

Consequently metric completeness implies geodesic completeness. The compact position-velocity argument uses positive definiteness and finite-dimensional local compactness. Bounded coordinate position alone would not suffice without a velocity bound. Nor would a limit lying in a removed boundary point be a valid initial state for continuation.

Geodesic completeness immediately implies condition three at every point, because all time-one trajectories exist. The main global step is to show how condition three at just one point produces compact metric balls.

<a id="section-30-3-a-minimizing-broken-geodesic-has-no-corner"></a>
## 3. A minimizing broken geodesic has no corner {#section-32-3-a-minimizing-broken-geodesic-has-no-corner}

We first prove a local lemma. Suppose two unit-speed geodesic pieces join and their concatenation minimizes length between its endpoints. Their tangent vectors at the joining point must agree.

Take short subpieces on either side, with endpoints fixed and sufficiently close to the join to lie in normal neighborhoods. Move the join by a small vector $V$ and connect it to those two fixed endpoints by the corresponding short radial geodesics. Their lengths depend smoothly on the moving join because those exponential inverses are smooth away from their centers. First variation of length gives derivative $g(T_{\\mathrm{in}}-T_{\\mathrm{out}},V)$. This endpoint formula follows from the already proved energy variation by parametrizing each short segment at constant speed on the unit interval and differentiating its length, the square root of twice its energy.

If the two unit tangents differ, choose $V=T_{\\mathrm{out}}-T_{\\mathrm{in}}$. The derivative is the negative squared norm of their difference, hence strictly negative. The varied two-piece route is shorter for a small positive displacement, contradicting minimality. Thus the tangents agree. ODE uniqueness makes the two pieces portions of the same smooth geodesic.

This lemma does not assert that every smooth joining of geodesics minimizes. It gives a necessary condition for a route already known to minimize. It will prevent the next existence construction from changing direction halfway toward its target.

<a id="section-40-4-find-a-first-direction-toward-an-arbitrary-target"></a>
## 4. Find a first direction toward an arbitrary target {#section-42-4-find-a-first-direction-toward-an-arbitrary-target}

Assume condition three at a point $p$. Fix a different point $q$, and put $r=d(p,q)>0$. Choose $0<\\varepsilon<r$ inside a normal radius at $p$, with closure contained in a larger normal coordinate domain. The distance sphere of radius $\\varepsilon$ is the exponential image of the compact tangent sphere and hence compact.

Choose piecewise-smooth curves from $p$ to $q$ whose lengths decrease to $r$. Every one leaves the normal ball and first meets its radius-$\\varepsilon$ sphere at some point $y_k$. The initial segment has length at least $\\varepsilon$, so the remaining length bounds $d(y_k,q)$ above by the full length minus $\\varepsilon$. The triangle inequality bounds it below by $r-\\varepsilon$.

A subsequence of these sphere points converges to $y$. Distance is continuous by the triangle inequality, so $d(y,q)=r-\\varepsilon$. Write $y=\\exp_p(\\varepsilon u)$ with unit $u$. Condition three makes $\\gamma(t)=\\exp_p(tu)$ available for every nonnegative $t$: each multiple $tu$ has a time-one solution, and scaling plus uniqueness makes these descriptions agree on their overlapping time intervals. Thus we have selected one complete forward direction from $p$, not a succession of unrelated short paths.

<a id="section-48-5-continue-the-same-direction-all-the-way"></a>
## 5. Continue the same direction all the way {#section-50-5-continue-the-same-direction-all-the-way}

Suppose at some $t<r$ this geodesic satisfies $d(\\gamma(t),q)=r-t$. Then its portion from $p$ to time $t$ is minimizing. Its length is $t$, and the triangle inequality gives

$$r\\le d(p,\\gamma(t))+d(\\gamma(t),q)\\le t+(r-t)=r.$$

Choose a small normal radius $\\delta<r-t$ at $\\gamma(t)$. Repeat the preceding near-minimizing-curve and compact-sphere argument with that point as center. It gives a point $z$ at distance $\\delta$ with $d(z,q)=r-t-\\delta$. The broken route from $p$ along the already selected geodesic and then radially to $z$ has length $t+\\delta$. The reverse distance bound from $q$ forces $d(p,z)\\ge t+\\delta$, so this broken route is minimizing.

The no-corner lemma makes its outgoing direction equal to the incoming direction. Geodesic uniqueness therefore gives $z=\\gamma(t+\\delta)$, preserving the original direction. For every intermediate time the triangle inequality using the remaining portion to $z$ gives the same distance equality. Thus the equality extends to the entire interval through $t+\\delta$.

It holds initially at time $\\varepsilon$. Consider the supremum of times up to which it holds on the whole interval starting there. Continuity makes it hold at the supremum. If that time were less than $r$, the preceding extension would contradict its definition. Hence it holds through time $r$, where the distance to $q$ is zero. Thus $\\gamma(r)=q$, and its length $r$ realizes the original distance.

We have proved minimizing existence from the one specified point using only its full exponential domain, compact local tangent spheres and first variation. We did not assume metric completeness during this step or take a nonexistent compactness theorem for all path families as an input.

<a id="section-62-6-compact-balls-finish-the-equivalences"></a>
## 6. Compact balls finish the equivalences {#section-64-6-compact-balls-finish-the-equivalences}

Every closed metric ball centered at $p$ is exactly the exponential image of the closed tangent ball of the same radius. One inclusion follows because a radial geodesic has length equal to the tangent norm. For the other, the minimizing existence just proved supplies a vector whose norm is the distance to the given point. The tangent ball is compact by finite dimensionality and its exponential is continuous, so the metric ball is compact.

Any closed distance-bounded subset lies in one such ball and is closed there, hence compact. This proves condition four from condition three. Conversely every Cauchy sequence is bounded. Compactness of an enclosing closed ball gives a convergent subsequence, and the Cauchy condition forces the entire sequence to the same limit. Thus condition four implies metric completeness.

All four conditions are now equivalent. Finally, metric completeness gives full geodesic completeness at every point by section 2, so the minimizing argument can be started at any base point. This proves the every-pair minimizing conclusion and completes Hopf–Rinow.

A geodesically complete manifold need not have an injective exponential: compact spheres and flat tori have many repeated endpoints. The theorem gives existence of a minimizing radial choice, not a unique logarithm. It also does not say that every geodesic segment minimizes; sufficiently long great-circle arcs remain counterexamples.

<a id="section-72-7-the-positive-ricci-global-consequence"></a>
## 7. The positive Ricci global consequence {#section-74-7-the-positive-ricci-global-consequence}

Combining Hopf–Rinow with the previous chapter's minimizing-segment bound proves the following statement in dimension at least two. A complete connected manifold with $\\operatorname{Ric}(V,V)\\ge(n-1)\\kappa\\|V\\|^2$ for a positive constant $\\kappa$ has diameter at most $\\pi/\\sqrt\\kappa$ and is compact. Every pair has a minimizing geodesic, so the segment theorem bounds its distance. The whole manifold is then a closed bounded subset of itself, compact by the equivalence just proved.

The fundamental group is finite as well. Use the [universal-cover construction and lifting theorem](../algebraic-topology-chains-spaces/classification-of-coverings-and-deck-groups.md) as the explicit prior topological input. The universal cover carries the pulled-back metric, locally isometric to the base. Every lifted geodesic extends for all time by lifting the complete base geodesic on successive finite intervals. Its Ricci bound is the same by local isometry. The compactness conclusion therefore applies to the cover. A fiber is closed in that compact space and discrete by the covering property, hence finite. The universal-cover fiber corresponds to the fundamental group by the linked covering theorem, proving finiteness.

The round sphere of radius $a$ attains the diameter bound $\\pi a$. The dimension restriction excludes the circle: its Ricci tensor is zero and its infinite fundamental group is no contradiction to the positive lower-bound theorem. No global classification of the equality case is inferred from the diameter calculation here.

<a id="section-80-8-three-worked-examples"></a>
## 8. Three worked examples {#section-82-8-three-worked-examples}

<a id="section-82-worked-example-7-1-euclidean-completeness-from-the-expo"></a>
### Worked example 7.1 — Euclidean completeness from the exponential {#section-84-worked-example-7-1-euclidean-completeness-from-the-expo}

In Euclidean space the exponential is $\\exp_p(v)=p+v$ for every tangent vector. Condition three holds immediately. The proof therefore supplies compact closed balls, metric completeness and globally minimizing segments. These agree with the ordinary Euclidean facts, but the argument identifies where finite-dimensional compactness enters. The same tangent-ball compactness step would fail in an arbitrary infinite-dimensional normed space, so this proof is not a dimension-free theorem about every space with a notion of length.

<a id="section-86-worked-example-7-2-two-different-failures-on-incomplete"></a>
### Worked example 7.2 — Two different failures on incomplete domains {#section-88-worked-example-7-2-two-different-failures-on-incomplete}

An open Euclidean ball has a straight minimizing segment between every pair, since convexity keeps that segment inside. It is nevertheless incomplete: a sequence approaching its missing boundary is Cauchy with no limit in the manifold. Its large initial velocities can leave before time one. Hence minimizing existence alone does not imply the four equivalent completeness conditions.

In the punctured plane, opposite points $(-1,0)$ and $(1,0)$ instead have distance two with no minimizing curve. Every joining curve has Euclidean length at least the endpoint displacement two. A route consisting of two straight segments and a semicircle of radius $\\varepsilon$ around the missing origin has length $2-2\\varepsilon+\\pi\\varepsilon$, tending to two. Equality in the displacement bound would force a straight nonbacktracking segment through the missing point, which is impossible. Thus the distance infimum need not be attained when completeness fails, although its definition still gives a finite genuine metric.

<a id="section-92-worked-example-7-3-complete-upper-half-plane-metric"></a>
### Worked example 7.3 — Complete upper-half-plane metric {#section-94-worked-example-7-3-complete-upper-half-plane-metric}

For $g=(dx^2+dy^2)/y^2$, let $(x_k,y_k)$ be metric Cauchy. The logarithmic-height bound from the first chapter makes $\\log y_k$ an ordinary real Cauchy sequence. Thus the heights converge to a finite strictly positive value and are eventually bounded above and below away from zero.

The horizontal coordinates are Cauchy too. For two sufficiently late points, choose a joining curve whose length is arbitrarily close to their small distance. At every point of that curve, the same logarithmic-height bound limits its height by the starting height times the exponential of the curve length. Hence heights on these short curves have a common finite upper bound. Ordinary horizontal displacement is at most that bound times metric length, by the speed formula. The small metric distances therefore force small horizontal differences.

The Euclidean limit has positive height and belongs to the domain. Local upper metric bounds then make Euclidean convergence there imply metric convergence. Thus every metric Cauchy sequence converges. Hopf–Rinow now proves geodesic completeness, compactness of metric closed bounded sets and minimizing existence for every pair. This supplies the global existence which the earlier vertical-geodesic and curvature calculations intentionally did not claim. Global exponential injectivity would still need another argument.

<a id="section-100-exercises"></a>
## Exercises {#section-102-exercises}

### Exercise 7.1 {#riemannian-hopf-rinow-ex-1}

Why does finite-speed motion on a finite time interval become Cauchy as the endpoint is approached?

<details><summary>Hint 1</summary>
Distance is bounded by the length of the intervening curve segment.
</details>
<details><summary>Hint 2</summary>
Constant geodesic speed bounds that length by elapsed time.
</details>
<details><summary>Full solution</summary>
For speed $c$, the distance between times $s,t$ is at most $c|t-s|$. As both times approach the same finite endpoint, the right side tends uniformly to zero. Any sequence of such times therefore gives a metric Cauchy sequence, and the same estimate controls the entire continuous tail. Completeness supplies a limit in the manifold, not merely a formal endpoint outside it.
</details>

### Exercise 7.2 {#riemannian-hopf-rinow-ex-2}

Explain why a position limit alone must be supplemented by a velocity bound before applying ODE continuation on the tangent bundle.

<details><summary>Hint 1</summary>
The geodesic equation is first order in position and velocity together.
</details>
<details><summary>Hint 2</summary>
Positive metric bounds on a compact chart turn constant speed into bounded coordinate velocity.
</details>
<details><summary>Full solution</summary>
Local existence neighborhoods belong to tangent-bundle states, so unbounded velocities could leave every compact state set even with bounded positions. Once the curve tail lies in a compact chart closure, a positive lower metric bound and constant speed bound its coordinate velocity. The combined states then lie in a compact set, yielding a common continuation time by a finite cover. This is the missing control that a position-only argument would omit.
</details>

### Exercise 7.3 {#riemannian-hopf-rinow-ex-3}

Show why full exponential domain at one point is stronger than surjectivity of a partially defined exponential, using an open Euclidean unit ball centered at that point.

<details><summary>Hint 1</summary>
Every target point in the ball is reached by its displacement vector.
</details>
<details><summary>Hint 2</summary>
A vector of length greater than one leaves the ball before time one.
</details>
<details><summary>Full solution</summary>
The allowed time-one vectors at the center form the open unit tangent ball and map onto the manifold by translation. The image is therefore all of the manifold, but the exponential is undefined at larger vectors. Condition three requires definition on the entire tangent space, which fails. This prevents replacing its precise domain hypothesis by a weaker surjectivity claim on an incomplete convex example.
</details>

### Exercise 7.4 {#riemannian-hopf-rinow-ex-4}

Prove the compact metric ball identity once minimizing geodesics from its center have been established.

<details><summary>Hint 1</summary>
A radial geodesic gives an upper distance bound by its tangent norm.
</details>
<details><summary>Hint 2</summary>
For the reverse inclusion use a minimizing geodesic of length equal to distance.
</details>
<details><summary>Full solution</summary>
Every vector of norm at most the radius exponentiates to a point at distance at most that radius. Conversely a point in the closed metric ball is reached by a minimizing geodesic with initial vector scaled to its length, whose norm is its distance and is at most the radius. This proves equality of the two sets. Continuity of the full exponential and compactness of the closed finite-dimensional tangent ball then make the metric ball compact.
</details>

### Exercise 7.5 {#riemannian-hopf-rinow-ex-5}

Why does a minimizing broken geodesic need matching unit tangents, rather than merely a common joining point?

<details><summary>Hint 1</summary>
Vary the joining point while keeping nearby points on the two pieces fixed.
</details>
<details><summary>Hint 2</summary>
The length derivative pairs the incoming-minus-outgoing unit tangent with the variation vector.
</details>
<details><summary>Full solution</summary>
If the tangents differ, moving in their outgoing-minus-incoming direction makes that derivative the negative squared norm of their difference. Short radial replacements on the two sides then give a shorter joining route. A minimizing route cannot admit that variation, so the tangents must agree. Uniqueness of the geodesic initial-value problem then identifies the two pieces as one continuation. A common point without tangent agreement would leave a shorten-able corner.
</details>

### Exercise 7.6 {#riemannian-hopf-rinow-ex-6}

Give a complete connected Riemannian manifold whose exponential is not globally injective.

<details><summary>Hint 1</summary>
Use a compact round sphere or the unit circle.
</details>
<details><summary>Hint 2</summary>
Different full-turn tangent velocities can have the same endpoint.
</details>
<details><summary>Full solution</summary>
The unit circle is compact, hence its Riemannian distance is complete. Its exponential from one point is periodic in the real tangent parameter, so distinct vectors separated by a full turn have the same image. Hopf–Rinow asserts minimizing existence, not uniqueness of every exponential preimage. The zero vector gives the shortest path from the point to itself, while nonzero full-turn vectors give nonminimizing geodesic circuits.
</details>

### Exercise 7.7 {#riemannian-hopf-rinow-ex-7}

For a complete manifold of dimension at least two with Ricci at least $9(n-1)$ times the metric, state the diameter and compactness conclusion.

<details><summary>Hint 1</summary>
Use the positive Ricci constant nine in the segment threshold.
</details>
<details><summary>Hint 2</summary>
Hopf–Rinow supplies a minimizing segment for every pair and compactness of closed bounded sets.
</details>
<details><summary>Full solution</summary>
The diameter is at most $\\pi/3$. Every pair has a minimizing geodesic, to which the previous chapter's index bound applies. The manifold is then bounded and closed in itself, so it is compact by Hopf–Rinow. The global Ricci lower bound and completeness are both necessary premises of this deduction; the segment estimate alone had not supplied either global minimizing existence or compactness.
</details>

### Exercise 7.8 {#riemannian-hopf-rinow-ex-8}

Why is the universal-cover fiber finite once the positive Ricci argument makes the cover compact?

<details><summary>Hint 1</summary>
The base point is closed and the covering fiber is discrete.
</details>
<details><summary>Hint 2</summary>
A compact discrete space has a finite subcover from its singleton cover.
</details>
<details><summary>Full solution</summary>
The fiber is a closed subset of the compact cover and is therefore compact. Covering neighborhoods make its subspace topology discrete. Its cover by singleton open subsets has a finite subcover, forcing finitely many points. The linked universal-cover theorem identifies this fiber with the fundamental-group choices. Discreteness alone would not imply finiteness without the compactness just established.
</details>

### Exercise 7.9 {#riemannian-hopf-rinow-ex-9}

Explain why the closed interval with its ordinary distance does not contradict the boundaryless hypothesis when geodesics reach its endpoints.

<details><summary>Hint 1</summary>
It is complete as a metric space but has manifold boundary.
</details>
<details><summary>Hint 2</summary>
An outward initial velocity at an endpoint cannot continue within the interval.
</details>
<details><summary>Full solution</summary>
The interval is metrically complete, yet a straight geodesic arriving at an endpoint cannot continue outward as a geodesic inside the same manifold with boundary. Hopf–Rinow here assumes no boundary, so its complete-distance-to-complete-geodesic implication does not apply to that example. The local ODE continuation step needs an open tangent-bundle state neighborhood of the kind supplied by a boundaryless manifold. Reflection at an endpoint would change the smooth geodesic problem rather than repair its hypothesis.
</details>

### Exercise 7.10 {#riemannian-hopf-rinow-ex-10}

In the punctured-plane example, prove why the two-unit distance cannot be attained despite being approached by explicit curves.

<details><summary>Hint 1</summary>
Equality in the Euclidean displacement lower bound forces no change of direction along the route.
</details>
<details><summary>Hint 2</summary>
The straight segment between the endpoints passes through the missing origin.
</details>
<details><summary>Full solution</summary>
The length of any joining route is at least its displacement two. Equality requires its velocity to point in the fixed displacement direction with no backtracking on each smooth piece; equivalently the whole image follows the connecting straight segment. Continuity would then force it through the origin, outside the domain. The semicircle detours have lengths tending to two but strictly greater than two. Hence the distance is an unattained infimum, illustrating exactly what global completeness prevents.
</details>

<a id="section-242-sources-and-provenance"></a>
## Sources and provenance {#section-244-sources-and-provenance}

New L4–L5 development continuing the proved distance, exponential, variation and Ricci bounds in this book, with fresh exercises. Comparison references are Lee, *Introduction to Riemannian Manifolds*, Hopf–Rinow and the positive Ricci compactness theorem, and do Carmo, *Riemannian Geometry*, completeness. The topological input for the finite fundamental-group corollary is the actual Atlas [Classification of Coverings and Deck Groups](../algebraic-topology-chains-spaces/classification-of-coverings-and-deck-groups.md), not an unproved existence assertion about covers.

<a id="section-246-summary"></a>
## Summary {#section-248-summary}

Complete distance gives compact control of finite-time geodesic states. A full exponential at one point, together with a no-corner argument, constructs minimizing geodesics and compact closed balls. Compactness then returns metric completeness, closing all four implications of Hopf–Rinow. Every pair consequently has a minimizing geodesic, and positive Ricci curvature yields compactness and a diameter bound. Incomplete convex and punctured domains show why minimizing existence, metric completeness, exponential domain and injectivity must remain distinct claims.
`;export{e as default};