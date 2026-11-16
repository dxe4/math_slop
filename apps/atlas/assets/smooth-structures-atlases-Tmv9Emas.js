var e=`---
parent_id: book-smooth-manifolds
chapter_id: smooth-structures-atlases
title: "Smooth Structures and Atlases"
level: graduate
license: CC BY-SA 4.0
---

# Smooth Structures and Atlases {#section-1-smooth-structures-and-atlases}

A topological coordinate change is a homeomorphism. Differentiation requires more: a function that is differentiable in one chart should remain differentiable after another permitted chart is chosen. The right condition is smoothness of transition maps in both directions. This chapter constructs the resulting notion of smooth structure and proves that a small generating atlas determines its unique maximal collection of compatible charts.

The level is L4. Required preparation is [Topological Manifolds and Charts](topological-manifolds-charts.md), multivariable differentiation and the chain rule, and the inverse-function theorem in [Real Analysis](/books/proof-safe-real-analysis/inverse-implicit-function-theorems/). The manifolds are real, Hausdorff, second-countable and without boundary, of a fixed finite dimension. Our smoothness convention is $C^\\infty$. Finite differentiability and boundary conventions require corresponding changes and are not silently included.

The point-set topology remains part of the data. Smooth transition formulas do not replace Hausdorffness or second countability. The examples below construct actual smooth atlases on spaces whose topological-manifold properties are established, and distinguish equality of chart collections from equivalence by a change of underlying points.

<a id="section-7-1-euclidean-smoothness-is-the-local-input"></a>
## 1. Euclidean smoothness is the local input {#section-9-1-euclidean-smoothness-is-the-local-input}

**Definition 2.1 (Euclidean diffeomorphism).** For open subsets $U,V\\subseteq\\mathbb R^n$, a diffeomorphism $F:U\\to V$ is a bijection such that both $F$ and $F^{-1}$ are $C^\\infty$. Smoothness means that component functions have continuous partial derivatives of every order.

Composition of diffeomorphisms is a diffeomorphism: the ordinary chain rule and its repeated application give smoothness of the composite, and the inverse is the reverse composite of the smooth inverses. Restrictions to open subsets remain diffeomorphisms onto their images. Empty overlap domains cause no problem; there are no points at which a smoothness condition could fail.

A smooth bijection need not have a smooth inverse. The map $F(x)=x^3$ is a smooth homeomorphism of the line, but its inverse has difference quotient $|t|^{-2/3}$ at zero and is not differentiable there. The word “bijection” alone cannot carry the inverse regularity that a coordinate change needs.

The inverse-function theorem gives a useful criterion. If a smooth homeomorphism between Euclidean open sets has invertible derivative at every point, its inverse is smooth. Around each source point the theorem supplies a smooth local inverse. That inverse agrees with the global inverse by injectivity. These neighborhoods cover the target, and smoothness is local, so the global inverse is smooth. Conversely, differentiating $F^{-1}\\circ F=\\operatorname{id}$ shows that a diffeomorphism has invertible derivative everywhere.

<a id="section-17-2-atlases-and-their-maximal-extension"></a>
## 2. Atlases and their maximal extension {#section-19-2-atlases-and-their-maximal-extension}

**Definition 2.2 (Smooth atlas).** A smooth atlas on a topological $n$-manifold $M$ is a topological atlas such that for every ordered pair of charts $(U,\\varphi)$ and $(V,\\psi)$ the transition

$$\\psi\\circ\\varphi^{-1}:\\varphi(U\\cap V)\\longrightarrow\\psi(U\\cap V)$$

is smooth. Because the pair is ordered, the reverse transition is required too. Thus every nonempty transition is a Euclidean diffeomorphism.

A topological chart is compatible with an atlas when its transitions with every atlas chart are smooth in both directions on their overlap. The chart domain must still be open in the given topology. Compatibility does not authorise a new domain topology or an arbitrary bijection onto a coordinate set.

**Theorem 2.3 (Unique maximal extension).** Every smooth atlas $\\mathcal A$ is contained in a unique maximal smooth atlas. It consists exactly of all topological charts compatible with $\\mathcal A$.

*Proof.* Let $\\mathcal A^{\\max}$ be that stated collection. It contains $\\mathcal A$, so its chart domains cover $M$. We must show that two charts in the collection are compatible with one another, since compatibility with a fixed family alone is not formally the same assertion.

Take charts $\\varphi$ and $\\psi$ in the collection, and a point of their overlap. Choose a chart $\\alpha\\in\\mathcal A$ containing that point and restrict all maps to the triple overlap. There,

$$\\psi\\circ\\varphi^{-1}=(\\psi\\circ\\alpha^{-1})\\circ(\\alpha\\circ\\varphi^{-1}).$$

Both factors are smooth by their compatibility with $\\mathcal A$. The same argument gives the reverse transition. These triple-overlap neighborhoods cover the original overlap, so the transitions are smooth everywhere on their open domains. Thus $\\mathcal A^{\\max}$ is a smooth atlas.

Any chart compatible with all of $\\mathcal A^{\\max}$ is in particular compatible with $\\mathcal A$, and hence already belongs to $\\mathcal A^{\\max}$. This proves maximality. If another maximal smooth atlas contains $\\mathcal A$, each of its charts belongs to $\\mathcal A^{\\max}$. Since the latter is an atlas, maximality of the former forces equality. ∎

The proof is local and uses the coverage of the original atlas. A family of charts that failed to cover $M$ could not supply the intermediate chart at an uncovered point. Coverage is a mathematical requirement, not merely a convenience for presenting a contents list.

**Corollary 2.4 (Equivalent generating atlases).** Two smooth atlases generate the same maximal atlas exactly when their union is a smooth atlas.

*Proof.* If the maximal atlas is the same, their union is a subcollection of it, covers $M$, and has smooth transitions. Conversely, a maximal extension of the union contains each original atlas. The uniqueness in Theorem 2.3 makes it the maximal extension of each. ∎

**Definition 2.5 (Smooth structure).** A smooth structure on a topological manifold is a maximal smooth atlas. A smooth manifold is the topological manifold together with this structure. A smaller generating atlas is enough to specify it, provided its transitions are proved smooth.

The maximal atlas is a mathematical way to make “all permitted coordinates” precise. One usually works with a convenient finite or countable generating atlas and invokes the extension theorem, rather than listing every compatible chart. In particular, the countable-atlas result from the preceding chapter remains useful even though a maximal atlas usually contains many more charts.

<a id="section-49-3-smooth-functions-do-not-depend-on-the-chosen-generati"></a>
## 3. Smooth functions do not depend on the chosen generating atlas {#section-51-3-smooth-functions-do-not-depend-on-the-chosen-generati}

**Definition 2.6 (Smooth real function).** A function $f:M\\to\\mathbb R$ is smooth if $f\\circ\\varphi^{-1}$ is smooth on every chart image. The same definition applies to maps into $\\mathbb R^k$ by taking component functions.

These coordinate expressions also make $f$ continuous: each is continuous, and the local coordinate continuity test from the preceding chapter applies. Thus a discontinuous function cannot become smooth simply because its formula looks familiar on a proper part of the manifold.

**Proposition 2.7 (Generating-atlas test).** It is enough to check the expressions on a generating smooth atlas, rather than on every chart of its maximal extension.

*Proof.* Let $\\psi$ be a compatible chart and choose an original atlas chart $\\varphi$ around any point of its domain. On the relevant overlap,

$$f\\circ\\psi^{-1}=(f\\circ\\varphi^{-1})\\circ(\\varphi\\circ\\psi^{-1}).$$

The first factor is smooth by the hypothesis and the second by compatibility. These local formulas cover the domain of $\\psi$, proving smoothness there. The converse follows because the generating charts belong to the maximal atlas. ∎

For a map between two manifolds, the corresponding local expression is $\\psi\\circ F\\circ\\varphi^{-1}$, using a target chart where the image lies. A diffeomorphism of manifolds is a bijection for which the map and inverse are smooth in these coordinate expressions. The next chapter develops these notions fully; the construction below already gives an important example.

<a id="section-65-4-transporting-and-combining-structures"></a>
## 4. Transporting and combining structures {#section-67-4-transporting-and-combining-structures}

**Proposition 2.8 (Pullback by a homeomorphism).** If $h:M\\to N$ is a homeomorphism and $N$ is smooth, then the charts $(h^{-1}(V),\\psi\\circ h)$ pulled back from a smooth atlas of $N$ form a smooth atlas on $M$. Its maximal extension makes $h$ a diffeomorphism.

*Proof.* The pulled-back maps are topological charts because $h$ is a homeomorphism. A transition between two of them is

$$(\\psi_2\\circ h)\\circ(\\psi_1\\circ h)^{-1}=\\psi_2\\circ\\psi_1^{-1},$$

on the appropriate overlap, so is smooth with smooth inverse. They cover $M$. In a pulled-back source chart and its corresponding target chart, $h$ has coordinate expression the identity. Its inverse has the same property. The generating-atlas test, applied locally to source and target coordinates, therefore makes both maps smooth. ∎

This construction separates the chosen identification of points from the resulting abstract smooth manifold. Two different maximal chart collections on the same topological set can still be related by a diffeomorphism whose underlying point map is not the identity.

**Proposition 2.9 (Product atlas).** Smooth manifolds $M$ and $N$ have a product smooth atlas with charts $(\\varphi,\\psi)$ on products of their chart domains.

*Proof.* The preceding chapter establishes the product topological-manifold axioms. Its coordinate changes split into the corresponding changes on the two factors. Their component functions are smooth, so the product transition and its inverse are smooth on their Euclidean open domains. These product charts cover $M\\times N$ and hence determine a smooth structure by maximal extension. ∎

The local nature of all these statements permits disconnected chart domains and overlaps. A transition formula may have different elementary expressions on different connected components and still be smooth, as long as each point has a neighborhood with a smooth expression. The torus example uses exactly this observation.

<a id="section-83-5-worked-examples"></a>
## 5. Worked examples {#section-85-5-worked-examples}

<a id="section-85-worked-example-2-10-the-sphere-by-stereographic-coordin"></a>
### Worked example 2.10 — The sphere by stereographic coordinates {#section-87-worked-example-2-10-the-sphere-by-stereographic-coordin}

For $n\\ge1$, write $S^n\\subseteq\\mathbb R^n\\times\\mathbb R$ as points $(x,z)$ with $\\|x\\|^2+z^2=1$. Remove the north pole $N=(0,1)$ and define $\\sigma_N(x,z)=x/(1-z)$. Its proposed inverse is

$$u\\longmapsto\\left(\\frac{2u}{1+\\|u\\|^2},\\frac{\\|u\\|^2-1}{1+\\|u\\|^2}\\right).$$

Its squared coordinate norm is one because $4\\|u\\|^2+(\\|u\\|^2-1)^2=(1+\\|u\\|^2)^2$. It avoids $N$ because $1-z=2/(1+\\|u\\|^2)>0$, and substitution into $x/(1-z)$ returns $u$. Conversely, for a point off $N$, the sphere equation gives $\\|\\sigma_N(x,z)\\|^2=(1+z)/(1-z)$; inserting this into the inverse formula returns both $x$ and $z$. All denominators are nonzero on their stated domains. Thus both inverse identities hold, and the maps are continuous.

At the south pole use $\\sigma_S(x,z)=x/(1+z)$, with inverse

$$v\\longmapsto\\left(\\frac{2v}{1+\\|v\\|^2},\\frac{1-\\|v\\|^2}{1+\\|v\\|^2}\\right).$$

The same norm calculation and the complementary sign verify this chart. The sphere is Hausdorff and second-countable in its Euclidean subspace topology. The two charts cover it. On their overlap, $u\\ne0$ and the transition is $v=u/\\|u\\|^2$. This rational map is smooth away from zero and is its own inverse. Hence these two charts form a smooth atlas. Establishing inverse identities and the overlap domain is part of the construction, rather than an inference from the projection drawing.

<a id="section-99-worked-example-2-11-two-chart-collections-on-the-real-l"></a>
### Worked example 2.11 — Two chart collections on the real line {#section-101-worked-example-2-11-two-chart-collections-on-the-real-l}

Let $\\mathcal A_0$ be the standard structure generated by the identity chart, and $\\mathcal A_3$ the structure generated by $h(x)=x^3$. A single global topological chart is a smooth atlas by itself, because its only self-transition is the identity. Thus both structures exist.

Their union is not a smooth atlas: the transition from the cubic coordinate to the standard coordinate is cube root, which is not differentiable at zero. By Corollary 2.4 their maximal atlases are different collections.

Nevertheless $h:(\\mathbb R,\\mathcal A_3)\\to(\\mathbb R,\\mathcal A_0)$ is a diffeomorphism. The source coordinate is $u=h(x)$ and the target coordinate is the ordinary value $h(x)$, so the coordinate expression is $u\\mapsto u$. Its inverse has the same identity expression in the corresponding charts. This is the pullback construction of Proposition 2.8.

As a further check, the ordinary real-valued function $f(x)=x$ is smooth for $\\mathcal A_0$ but not for $\\mathcal A_3$: its latter coordinate expression is cube root. The function $x\\mapsto x^3$ is smooth for $\\mathcal A_3$ because its coordinate expression is the identity. The chosen structure controls which particular functions on the fixed set are smooth, while the map $h$ relates the two abstract smooth manifolds.

<a id="section-109-worked-example-2-12-smooth-quotient-coordinates-on-a-to"></a>
### Worked example 2.12 — Smooth quotient coordinates on a torus {#section-111-worked-example-2-12-smooth-quotient-coordinates-on-a-to}

Use the quotient torus $T^2=\\mathbb R^2/\\mathbb Z^2$ from the preceding chapter. Choose sufficiently small boxes on which the quotient map is injective and use the inverse restrictions as coordinates. We already know these are topological charts.

On an overlap, the two representatives of a point differ by an integer vector. Near any fixed overlap point this vector is constant: the representative difference is continuous and takes values in the discrete lattice. Consequently the coordinate change is locally $u\\mapsto u+m$ for a fixed integer vector $m$, and its inverse is locally translation by $-m$. Both are smooth.

A disconnected overlap need not use the same $m$ on every component. Smoothness only requires the local assertion just proved. Therefore the quotient charts form a smooth atlas. This example constructs the atlas directly; its relation to a product of circle manifolds can later be proved by a map with smooth coordinate expressions, rather than assumed from the common name “torus”.

<a id="section-117-6-global-topology-remains-a-prerequisite"></a>
## 6. Global topology remains a prerequisite {#section-119-6-global-topology-remains-a-prerequisite}

Glue two real lines by identifying corresponding nonzero points, leaving two origins. The overlap transition between the two line charts is the identity on $\\mathbb R\\setminus\\{0\\}$, a smooth diffeomorphism. However, the resulting topological space is not Hausdorff, as established in the preceding chapter. Thus smooth transition formulas alone do not establish a smooth manifold under our conventions.

Similarly, an uncountable disjoint union of Euclidean spaces has smooth local identity charts but fails second countability. The smooth-atlas discussion always begins with a topological manifold, so neither construction passes the initial global assumptions. This order of definitions prevents local coordinate formulas from silently broadening the category in which later theorems are stated.

<a id="section-123-exercises"></a>
## Exercises {#section-125-exercises}

<a id="section-125-exercise-1"></a>
### Exercise 1 {#section-127-exercise-1}
<a id="smooth-structures-atlases-ex-1"></a>
Prove that restricting all charts to an open subspace gives the inherited smooth structure on that subspace.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the chart restriction proposition and restrict each transition to its new open domain.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Generate a maximal atlas only after showing that the restricted charts still cover.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
If $O\\subseteq M$ is open, restrict each chart to $U\\cap O$. These domains cover $O$ and are topological chart domains. Their transitions are restrictions of smooth transitions and have smooth inverse restrictions. Hence they form a smooth atlas on $O$. Its unique maximal extension is the inherited structure; equivalent generating atlases give compatible restricted atlases and therefore the same extension.
</details>

<a id="section-138-exercise-2"></a>
### Exercise 2 {#section-140-exercise-2}
<a id="smooth-structures-atlases-ex-2"></a>
Explain why the maximal standard smooth atlas on the real line does not contain every topological chart on the line.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Maximality concerns smooth compatibility, rather than arbitrary topological compatibility.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Compare the identity and cubic coordinates at zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The cubic map is a topological chart because it is a homeomorphism of the line. Its inverse transition to the identity chart is cube root and is not differentiable at zero. It is therefore incompatible with the standard atlas and is excluded from its maximal smooth extension. Adding an incompatible chart would destroy the atlas property, so maximality does not require its inclusion.
</details>

<a id="section-151-exercise-3"></a>
### Exercise 3 {#section-153-exercise-3}
<a id="smooth-structures-atlases-ex-3"></a>
For real $a\\ne0$ and $b$, show that the global coordinate $h(x)=ax+b$ generates the standard structure on the real line. Why does $a=0$ not define a chart?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Check the transition to the identity and its inverse.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A chart must first be a bijection onto an open coordinate image.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $a\\ne0$, $h$ and $h^{-1}(u)=(u-b)/a$ are smooth on the line. Thus $h$ and the identity belong to a common smooth atlas and generate the same maximal atlas. At $a=0$, the map is constant and is not injective; its singleton image is not open in $\\mathbb R$ either. It fails the topological-chart requirements before smoothness is considered.
</details>

<a id="section-164-exercise-4"></a>
### Exercise 4 {#section-166-exercise-4}
<a id="smooth-structures-atlases-ex-4"></a>
For the two line structures in Worked example 2.11, determine whether the identity map from the standard structure to the cubic structure is smooth, and whether its inverse identity map is smooth.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use a source chart inverse first, the point map next and the target chart last.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Smoothness of one direction does not by itself prove a diffeomorphism.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
From the standard source to the cubic target the coordinate expression is $x\\mapsto x^3$, so the identity point map is smooth in that direction. In the reverse direction the coordinate expression is $u\\mapsto u^{1/3}$, which is not differentiable at zero. Thus this identity map is a smooth bijection with a nonsmooth inverse. It is different from the cubic point map between the two structures, whose expressions are identities in both directions.
</details>

<a id="section-177-exercise-5"></a>
### Exercise 5 {#section-179-exercise-5}
<a id="smooth-structures-atlases-ex-5"></a>
On $S^1$, compute the point represented by north-stereographic coordinate $u=2$ and its south-stereographic coordinate.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the displayed inverse with $\\|u\\|^2=4$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The transition on the overlap is $u\\mapsto u/\\|u\\|^2$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The inverse gives $(x,z)=(4/5,3/5)$, which has squared norm one and is neither pole. Its south coordinate is $(4/5)/(1+3/5)=1/2$, also obtained as $2/4$. The south inverse at $1/2$ returns $(4/5,3/5)$, checking the sign convention and transition formula.
</details>

<a id="section-190-exercise-6"></a>
### Exercise 6 {#section-192-exercise-6}
<a id="smooth-structures-atlases-ex-6"></a>
For $n\\ge1$, prove that $u\\mapsto u/\\|u\\|^2$ is a diffeomorphism of $\\mathbb R^n\\setminus\\{0\\}$ and cannot be extended continuously to zero.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute the norm of the image and apply the map a second time.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Test continuity along a fixed ray approaching zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The denominator is positive off zero, so all component functions are smooth. The image norm is $1/\\|u\\|$, and applying the map twice returns $u$, making the inverse the same smooth map. Along $u=t e_1$ with positive $t\\to0$, the image is $e_1/t$ and is unbounded. A finite continuous value at zero is therefore impossible. Zero is rightly excluded from the stereographic overlap domain.
</details>

<a id="section-203-exercise-7"></a>
### Exercise 7 {#section-205-exercise-7}
<a id="smooth-structures-atlases-ex-7"></a>
For the circle, compare the upper-semicircle chart $t=x$ with north-stereographic coordinate $u=x/(1-y)$. Give the transition and its exact domain and image.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
On the upper semicircle $y=\\sqrt{1-t^2}$, but the north pole must be removed from the overlap.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Rationalise the denominator and use the inverse stereographic expression for $x$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The overlap has $t\\in(-1,0)\\cup(0,1)$. Its transition is $u=t/(1-\\sqrt{1-t^2})=(1+\\sqrt{1-t^2})/t$, a smooth function on that domain. Its image is $(-\\infty,-1)\\cup(1,\\infty)$: the inverse $t=2u/(1+u^2)$ gives the upper semicircle precisely when $y=(u^2-1)/(1+u^2)>0$. Both transitions are smooth on the stated open sets, proving compatibility for these charts.
</details>

<a id="section-216-exercise-8"></a>
### Exercise 8 {#section-218-exercise-8}
<a id="smooth-structures-atlases-ex-8"></a>
On the standard sphere $S^n$ with $n\\ge1$, let $f$ equal zero away from the north pole and one at that pole. Why does a smooth coordinate expression on the north-pole-deleted chart not establish smoothness of $f$ on the sphere?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A single chart may omit a point where the function has different local behavior.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Approach the omitted point through points on which the value is zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
On the stated chart the coordinate expression is the constant zero function and is smooth. That chart does not cover the pole. In a chart containing the pole, points other than the pole approach it while their values remain zero, contradicting continuity at the value one. Smoothness implies continuity, so $f$ is not smooth. The generating-atlas test requires an atlas covering every point, not just one dense chart domain.
</details>

<a id="section-229-exercise-9"></a>
### Exercise 9 {#section-231-exercise-9}
<a id="smooth-structures-atlases-ex-9"></a>
Explain why quotient-torus coordinate changes can be smooth even when different connected components of an overlap use different integer translations.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Smoothness on an open set is a condition checked near each point.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The difference of the two continuous representatives takes values in a discrete lattice.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Near a fixed overlap point, continuity into the discrete lattice makes the representative difference constant. The transition is therefore a fixed translation in that neighborhood and has derivatives of every order. Every point has such a neighborhood, so the transition is smooth on the full overlap. A different translation on another component does not change this local conclusion. Its inverse is locally the reverse translation and is smooth too.
</details>

<a id="section-242-exercise-10"></a>
### Exercise 10 {#section-244-exercise-10}
<a id="smooth-structures-atlases-ex-10"></a>
Two real lines are glued along their punctured copies by the identity. Their overlap transition is a smooth diffeomorphism. Explain why this does not yield a smooth manifold under this book's conventions.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Check the topological-manifold axioms before asking about smooth transitions.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Every pair of neighborhoods of the two unglued origins meets at identified nonzero points.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The quotient is the line with two origins. Any two neighborhoods of those origins contain corresponding sufficiently small nonzero real points, so their images intersect. The two origins cannot be separated by disjoint neighborhoods, and the space is not Hausdorff. Our smooth atlas is defined on a Hausdorff topological manifold; smooth overlap formulas do not remove the failed global axiom.
</details>

<a id="section-255-provenance-and-further-reading"></a>
## Provenance and further reading {#section-257-provenance-and-further-reading}

This is original Euler exposition and exercises, in British English, CC BY-SA 4.0. The preceding point-set source and all earlier sphere, projection and topology readings remain intact. Book-scale comparisons are Lee, *Introduction to Smooth Manifolds*, and Tu, *An Introduction to Manifolds*. The multivariable chain rule and inverse-function theorem are explicitly named calculus inputs. The text constructs the displayed atlases and their maximal extensions; it does not classify all smooth structures on spheres or prove an existence theorem for a smooth structure on every topological manifold.

<a id="section-259-summary"></a>
## Summary {#section-261-summary}

A smooth atlas requires diffeomorphic transition maps, and any such atlas determines a unique maximal smooth structure. Coordinate expressions for functions can be checked on a generating atlas. Pullback and product constructions give new structures from existing ones, while the sphere, line and torus examples show how the definitions work in full. Smooth maps next turn these compatible coordinate systems into a calculus that is independent of the chosen chart.
`;export{e as default};