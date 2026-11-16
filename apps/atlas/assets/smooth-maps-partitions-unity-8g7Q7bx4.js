var e=`---
parent_id: book-smooth-manifolds
chapter_id: smooth-maps-partitions-unity
title: "Smooth Maps, Diffeomorphisms and Partitions of Unity"
level: graduate
license: CC BY-SA 4.0
---

# Smooth Maps, Diffeomorphisms and Partitions of Unity {#section-1-smooth-maps-diffeomorphisms-and-partitions-of-unity}

A smooth atlas makes differentiation compatible across coordinate systems. Smooth maps must respect those systems, while partitions of unity let local smooth information contribute to a global construction. The latter needs two ingredients beyond formal addition: functions whose supports stay inside their coordinate domains, and a family that is locally finite so that its apparent infinite sum is actually finite near every point.

This L4 chapter assumes [Smooth Structures and Atlases](smooth-structures-atlases.md), the Euclidean chain rule and inverse-function theorem, and the compactness and countability results of [Topological Manifolds and Charts](topological-manifolds-charts.md). Manifolds are real, finite-dimensional, Hausdorff and second-countable, with no boundary. Smooth means $C^\\infty$. All partition functions are real-valued and nonnegative. Boundary versions require additional extension conventions and are not included without comment.

We first prove coordinate independence for maps. We then construct a smooth Euclidean cutoff, transport it through charts, and prove the full partition theorem using a countable compact exhaustion. No existence assertion is inferred merely from a continuous topological partition: the smooth functions are constructed explicitly.

<a id="section-7-1-smoothness-is-local-in-coordinates"></a>
## 1. Smoothness is local in coordinates {#section-9-1-smoothness-is-local-in-coordinates}

**Definition 3.1 (Smooth map).** A map $F:M\\to N$ is smooth if around every $p\\in M$ there are charts $(U,\\varphi)$ and $(V,\\psi)$ with $p\\in U$, $F(U)\\subseteq V$, such that $\\psi\\circ F\\circ\\varphi^{-1}$ is a smooth Euclidean map on $\\varphi(U)$.

This condition already implies continuity. On each such domain, $F=\\psi^{-1}\\circ(\\psi F\\varphi^{-1})\\circ\\varphi$ is continuous. These domains cover $M$, so inverse images of open sets are locally open and hence open globally.

**Proposition 3.2 (Coordinate independence and composition).** The definition is unchanged by replacing the charts with compatible charts. Composites of smooth maps are smooth, as are identity maps and constant maps.

*Proof.* Continuity permits shrinking a source neighborhood so its image lies in any chosen target chart about $F(p)$. With new source coordinate $\\alpha$ and target coordinate $\\beta$, the local expression factors as

$$\\beta F\\alpha^{-1}=(\\beta\\psi^{-1})\\circ(\\psi F\\varphi^{-1})\\circ(\\varphi\\alpha^{-1}).$$

The outer factors are transition diffeomorphisms, and the middle factor is smooth by assumption. Their composite is smooth. For composable maps, shrink neighborhoods so the intermediate chart works for both expressions; their coordinate composite is an ordinary composite of smooth Euclidean maps. Identities have identity coordinate expressions, and constant maps have constant coordinate expressions. ∎

Smooth real functions consequently form an algebra under addition and multiplication, because those operations give smooth Euclidean expressions in every chart. The same local criterion applies to a finite sum or product of vector-valued coordinate functions. Infinite sums require a separate argument below.

**Definition 3.3 (Diffeomorphism).** A diffeomorphism is a bijective smooth map with smooth inverse. A local diffeomorphism is a map whose restriction near every point is a diffeomorphism onto an open target subset.

For equal-dimensional manifolds, an invertible coordinate derivative at a point gives a local diffeomorphism there by the inverse-function theorem. The condition is coordinate independent: changing charts multiplies the derivative by invertible transition derivatives. A bijective smooth map with invertible coordinate derivative everywhere is therefore a diffeomorphism. It is open because each local restriction is open, so its global inverse is continuous; the smooth local inverses agree with that inverse and establish its smoothness. A smooth bijection without the derivative condition need not have a smooth inverse.

<a id="section-27-2-a-smooth-function-that-stops-exactly"></a>
## 2. A smooth function that stops exactly {#section-29-2-a-smooth-function-that-stops-exactly}

We need functions supported inside small coordinate neighborhoods, rather than formulas that merely become small outside them.

**Lemma 3.4 (A flat smooth function).** The function

$$\\theta(t)=\\begin{cases}e^{-1/t},&t>0,\\\\0,&t\\le0\\end{cases}$$

is smooth on the real line, and all its derivatives at zero vanish.

*Proof.* For $t>0$, repeated differentiation has form $P_k(1/t)e^{-1/t}$ with a polynomial $P_k$. Starting with $P_0=1$, differentiation replaces $P$ by the polynomial $s^2(P-P')$, where $s=1/t$. For every nonnegative integer $m$, the exponential-series bound $e^s\\ge s^{m+1}/(m+1)!$ gives $s^me^{-s}\\le(m+1)!/s\\to0$ as $s\\to\\infty$. Hence each polynomial-times-exponential derivative tends to zero as $t\\downarrow0$.

The same estimate with one extra power of $1/t$ shows that its difference quotient at zero tends to zero. Inductively, each derivative extends continuously by zero and has derivative zero at the joining point. On the negative half-line the function and its derivatives are identically zero. This proves smoothness of every order and the stated values. ∎

For $0<r<R$, define on $\\mathbb R^n$

$$b(x)=\\frac{\\theta(R^2-\\|x\\|^2)}{\\theta(R^2-\\|x\\|^2)+\\theta(\\|x\\|^2-r^2)}.$$

The denominator is always positive: both terms could vanish only if $\\|x\\|^2\\ge R^2$ and $\\|x\\|^2\\le r^2$ simultaneously. Thus $b$ is smooth, lies between zero and one, equals one on the closed radius-$r$ ball, and equals zero outside the open radius-$R$ ball. Its support, the closure of its nonzero set, is contained in the compact closed radius-$R$ ball. Using a squared norm keeps the formula smooth at the center too.

**Corollary 3.5 (Coordinate cutoff).** Given a point $p$ in an open manifold subset $O$, there is a smooth function $\\beta:M\\to[0,1]$ equal to one on a neighborhood of $p$ and with compact support contained in $O$.

*Proof.* Restrict a chart to $O$ and choose concentric coordinate balls with closed outer ball inside its image. Translate the displayed Euclidean function to their center and pull it back through the chart. Define it to be zero outside the chart domain. The pulled-back support is compact and contained in that domain; Hausdorffness makes it closed in $M$. Every point outside the chart domain therefore has a neighborhood disjoint from the support, on which the extension is identically zero. The extension is smooth there and in the chart, proving the claim. ∎

The support condition is stronger than being zero at a specified exterior point. Nonzero values approaching that point would still place it in the support. This distinction matters in both extension by zero and subordination to a cover.

<a id="section-53-3-local-finiteness-controls-sums"></a>
## 3. Local finiteness controls sums {#section-55-3-local-finiteness-controls-sums}

**Definition 3.6 (Locally finite family and partition).** A family of subsets is locally finite if each point has a neighborhood meeting only finitely many members. A smooth partition of unity is a family $(\\rho_\\alpha)$ of nonnegative smooth functions with locally finite supports and pointwise sum one. It is subordinate to an open cover if each support lies in an assigned cover member.

A sum of a locally finite family of smooth functions is smooth: near any point, all but finitely many functions vanish identically, so the sum is an ordinary finite smooth sum there. There is no exchange of derivatives with an uncontrolled convergent series in this argument.

We will first index the partition by a refinement of the cover, so that each function can have compact support. Grouping by original cover members is possible, but the grouped supports need not be compact when the manifold is noncompact.

**Lemma 3.7 (Compact exhaustion).** There are compact sets $K_j$ with $K_j\\subseteq\\operatorname{int}K_{j+1}$ and union $M$.

*Proof.* The preceding chapter supplies a countable cover by relatively compact open sets $V_j$. Set $K_0=\\varnothing$. Given compact $K_{j-1}$, the set $K_{j-1}\\cup\\overline V_j$ is compact. Cover it by finitely many relatively compact open neighborhoods, and let $K_j$ be the union of their compact closures. Their open union contains the given compact set and lies inside $\\operatorname{int}K_j$. Thus $K_{j-1}\\subseteq\\operatorname{int}K_j$ and $V_j\\subseteq K_j$. Every point belongs to some $V_j$, so the $K_j$ cover $M$. The empty manifold admits the vacuous construction. ∎

**Theorem 3.8 (Smooth partition of unity).** Every open cover of a smooth manifold admits a subordinate smooth partition of unity indexed by a countable refinement, with compact support for each function.

*Proof.* Assume the manifold is nonempty; the empty case has no pointwise obligations. Use the compact exhaustion and set $K_{-1}=K_0=\\varnothing$. For each $j\\ge1$, the annulus $A_j=K_j\\setminus\\operatorname{int}K_{j-1}$ is compact. It lies in the open band $\\operatorname{int}K_{j+1}\\setminus K_{j-2}$, using the nesting of the exhaustion.

At each point of $A_j$, choose a cover member and a coordinate cutoff supported inside that member and the band, equal to one on a smaller open neighborhood. The smaller neighborhoods cover $A_j$. Compactness selects finitely many, with associated functions $\\beta_{j,k}$. Do this for every positive integer $j$. The smaller neighborhoods cover $M$, since every point belongs to some annulus, so at every point at least one selected function equals one.

The supports are locally finite. Around a fixed point choose $\\operatorname{int}K_N$ containing it. Functions selected for $j\\ge N+2$ have support disjoint from $K_{j-2}$ and therefore from $K_N$. Only the finitely many levels $j\\le N+1$ can meet this neighborhood, and each level contributed finitely many functions.

It follows that $B=\\sum_{j,k}\\beta_{j,k}$ is smooth and everywhere positive. Put $\\rho_{j,k}=\\beta_{j,k}/B$. Division is valid because $B>0$. The functions are nonnegative and smooth, have the same supports as their numerators, and are locally finite. Their sum is one. Each compact support lies in its assigned original cover member, proving subordination. ∎

To index by the original cover, sum functions assigned to each member. Local finiteness gives smooth grouped functions and locally finite grouped supports. The union of any subfamily of the original supports is closed, because a locally finite union of closed sets is closed: near a point only finitely many need be considered. Nonnegativity then makes the grouped support exactly that union, still inside the assigned open set. Compactness of a grouped support is not promised.

<a id="section-77-4-worked-examples"></a>
## 4. Worked examples {#section-79-4-worked-examples}

<a id="section-79-worked-example-3-9-height-and-inclusion-on-a-sphere"></a>
### Worked example 3.9 — Height and inclusion on a sphere {#section-81-worked-example-3-9-height-and-inclusion-on-a-sphere}

For the smooth sphere from the preceding chapter, define $h(x,z)=z$. In north-stereographic coordinate $u$, its expression is $(\\|u\\|^2-1)/(1+\\|u\\|^2)$; in south-stereographic coordinate $v$, it is $(1-\\|v\\|^2)/(1+\\|v\\|^2)$. The denominators are positive and the formulas are smooth, so the generating-atlas test proves that height is smooth.

The inclusion into Euclidean space is smooth for the same reason: its coordinate expressions are the full inverse-stereographic formulas, with smooth rational components and nonzero denominators. These calculations establish smoothness directly, before a general submanifold theorem is developed.

<a id="section-85-worked-example-3-10-a-bijection-with-smooth-inverse"></a>
### Worked example 3.10 — A bijection with smooth inverse {#section-87-worked-example-3-10-a-bijection-with-smooth-inverse}

On the standard real line, $F(x)=x+x^3$ has derivative $1+3x^2>0$. The mean-value theorem makes it strictly increasing, and its limits at the two ends of the line are opposite infinities. Continuity and the intermediate-value theorem therefore make it bijective onto the line.

Its derivative never vanishes, so the inverse-function theorem gives a smooth local inverse around every image point. Those inverses are restrictions of the unique global inverse. Hence $F$ is a diffeomorphism without needing a closed formula for its inverse. The smooth bijection $x\\mapsto x^3$ between standard lines has a nonsmooth inverse at zero, as proved in the preceding chapter. Nonvanishing derivatives supply the smooth local inverses used in this argument.

<a id="section-91-worked-example-3-11-a-genuine-two-function-circle-parti"></a>
### Worked example 3.11 — A genuine two-function circle partition {#section-93-worked-example-3-11-a-genuine-two-function-circle-parti}

On $S^1$, let $z$ denote height, and cover the circle by $U_N=S^1\\setminus\\{N\\}$ and $U_S=S^1\\setminus\\{S\\}$. Define $a(z)=\\theta(1/2-z)$ and $b(z)=\\theta(1/2+z)$. They cannot both vanish for $-1\\le z\\le1$, so

$$\\rho_N=\\frac{a}{a+b},\\qquad\\rho_S=\\frac{b}{a+b}$$

are nonnegative smooth functions summing to one. Their supports satisfy $\\operatorname{supp}\\rho_N\\subseteq\\{z\\le1/2\\}\\subset U_N$ and $\\operatorname{supp}\\rho_S\\subseteq\\{z\\ge-1/2\\}\\subset U_S$. Thus they are subordinate in the support sense, not merely zero at the missing poles.

At height zero both functions equal one half. At the north pole the values are zero and one, while at the south pole they are one and zero. Smoothness of height and of $\\theta$, followed by division by a positive function, supplies the regularity at every intermediate height and both cutoff levels.

<a id="section-101-5-what-partitions-can-assemble"></a>
## 5. What partitions can assemble {#section-103-5-what-partitions-can-assemble}

Suppose $f_i$ is a smooth real function on a cover member $U_i$, and $(\\rho_i)$ is subordinate to that cover. On $U_i$, form $\\rho_i f_i$ and extend by zero elsewhere. At a point outside $U_i$, the closed support of $\\rho_i$ is absent, so the extension vanishes on a neighborhood and is smooth there. It is smooth inside $U_i$ by multiplication. Local finiteness now makes the sum of these extended terms a global smooth function.

If the $f_i$ agree on overlaps, this sum equals their common locally defined value: at each point all nonzero weights multiply that same value and their weights sum to one. If they do not agree, the construction gives a smooth weighted combination rather than an equality with every input function. Later geometric constructions use the same mechanism while checking that the property being combined survives nonnegative weighted sums.

<a id="section-107-exercises"></a>
## Exercises {#section-109-exercises}

<a id="section-109-exercise-1"></a>
### Exercise 1 {#section-111-exercise-1}
<a id="smooth-maps-partitions-unity-ex-1"></a>
Show that a map with smooth expressions on generating atlases has smooth expressions in every compatible source and target chart where the expression is defined.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
First use local coordinate expressions to establish continuity and shrink the source domain.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Factor a new expression through two chart transitions and an old expression.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The given local expressions make the map continuous on a cover, hence globally. Near a point, shrink so its image lies in the chosen target chart. The new expression factors as target transition, old smooth expression and source transition. Both transitions are smooth diffeomorphisms, so their composite is smooth. Such neighborhoods cover the expression's domain, proving the assertion everywhere it is defined.
</details>

<a id="section-122-exercise-2"></a>
### Exercise 2 {#section-124-exercise-2}
<a id="smooth-maps-partitions-unity-ex-2"></a>
Prove that sums and products of smooth real-valued functions on a manifold are smooth.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Read each function in the same source chart.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use smooth Euclidean addition and multiplication after taking the pair of coordinate expressions.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
In any chart, $(f+g)\\varphi^{-1}=f\\varphi^{-1}+g\\varphi^{-1}$ and $(fg)\\varphi^{-1}=(f\\varphi^{-1})(g\\varphi^{-1})$. The two scalar expressions are smooth, so the Euclidean rules make their sum and product smooth. The generating-atlas test establishes the intrinsic conclusion. This argument uses only finitely many functions and makes no assertion about an arbitrary infinite series.
</details>

<a id="section-135-exercise-3"></a>
### Exercise 3 {#section-137-exercise-3}
<a id="smooth-maps-partitions-unity-ex-3"></a>
In south-stereographic coordinates near the north pole of $S^n$, $n\\ge1$, height is $h(v)=(1-\\|v\\|^2)/(1+\\|v\\|^2)$. Find its first derivative at $v=0$ and explain why the denominator causes no singularity there.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Write the expression as $1-2\\|v\\|^2/(1+\\|v\\|^2)$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The difference from one is quadratic in the coordinates, with denominator at least one.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The difference satisfies $|h(v)-h(0)|=2\\|v\\|^2/(1+\\|v\\|^2)\\le2\\|v\\|^2$. Dividing by $\\|v\\|$ gives a quantity tending to zero, so the derivative is the zero linear map. The denominator is positive for every $v$, including value one at zero, and its reciprocal is smooth. There is no pole in this chart expression.
</details>

<a id="section-148-exercise-4"></a>
### Exercise 4 {#section-150-exercise-4}
<a id="smooth-maps-partitions-unity-ex-4"></a>
Compute $\\theta'(t)$ for positive $t$ and prove that $\\theta'(0)=0$ directly from the difference quotient.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate the exponent before multiplying by the exponential.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For the right quotient, put $s=1/t$ and compare a polynomial with $e^s$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $t>0$, differentiation gives $\\theta'(t)=t^{-2}e^{-1/t}$. At zero the right difference quotient is $t^{-1}e^{-1/t}=se^{-s}\\to0$; for negative $t$ it is zero. Hence the two-sided derivative exists and equals zero. The same decay mechanism, with higher powers of $s$, is what extends every derivative in Lemma 3.4.
</details>

<a id="section-161-exercise-5"></a>
### Exercise 5 {#section-163-exercise-5}
<a id="smooth-maps-partitions-unity-ex-5"></a>
For the Euclidean cutoff with $r=1$ and $R=2$, prove that it equals one on the unit closed ball, vanishes for norm at least two, and has support inside the radius-two closed ball.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A nonpositive argument makes $\\theta$ vanish.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Distinguish the nonzero set from its closure when stating support.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For squared norm at most one, the second denominator term is zero and the numerator $\\theta(4-\\|x\\|^2)$ is positive, so the quotient equals one. For squared norm at least four, the numerator is zero and the other term is positive, so the quotient vanishes. The nonzero set lies in the open radius-two ball, and its closure lies in the closed ball. This proves the support containment as well as the plateau and vanishing claims.
</details>

<a id="section-174-exercise-6"></a>
### Exercise 6 {#section-176-exercise-6}
<a id="smooth-maps-partitions-unity-ex-6"></a>
On the circle, $q=(1-z)/2$ is smooth and vanishes at the north pole. Why is its support not contained in the north-pole-deleted open set?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Locate where $q$ is nonzero, then take that set's closure in the circle.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Nonzero values occur arbitrarily close to the missing pole.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The function is positive at every point except the north pole. That nonzero set is dense in the circle, so its closure, the support, is the entire circle. The pole belongs to the support even though its function value is zero. Thus the support fails the required containment in the pole-deleted set, and this function cannot replace the cutoff used in Worked example 3.11.
</details>

<a id="section-187-exercise-7"></a>
### Exercise 7 {#section-189-exercise-7}
<a id="smooth-maps-partitions-unity-ex-7"></a>
Is local finiteness necessary for every particular infinite sum of smooth functions to be smooth? Compare the constant functions $f_n=2^{-n}$ for positive integers $n$ with the local-finiteness argument.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Every constant function has support equal to the whole nonempty manifold.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Evaluate the scalar geometric series without claiming the general local-finiteness theorem applies.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
On a nonempty manifold this family is not locally finite, since every neighborhood meets every support. Nevertheless its pointwise sum is the constant geometric sum one, which is smooth. Thus local finiteness is a sufficient condition giving an automatic finite local calculation, not a necessary condition for all specially controlled series to be smooth. An arbitrary infinite family still needs justification beyond smoothness of its individual terms.
</details>

<a id="section-200-exercise-8"></a>
### Exercise 8 {#section-202-exercise-8}
<a id="smooth-maps-partitions-unity-ex-8"></a>
Prove that a locally finite family of nonempty subsets of a compact space has only finitely many members. Apply this to nonzero functions in a partition on a compact manifold.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Cover the space by neighborhoods each meeting only finitely many members.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use compactness to reduce this neighborhood cover to finitely many neighborhoods.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Choose the stated neighborhoods at every point and take a finite subcover. Every nonempty family member contains a point and therefore meets at least one neighborhood in that subcover. Each chosen neighborhood meets only finitely many members; their finite union accounts for the whole family. Supports of nonzero partition functions are nonempty, so only finitely many such functions occur on a compact manifold. Identically zero functions, whose supports are empty, do not affect the conclusion.
</details>

<a id="section-213-exercise-9"></a>
### Exercise 9 {#section-215-exercise-9}
<a id="smooth-maps-partitions-unity-ex-9"></a>
Suppose smooth functions $f_i$ on $U_i$ agree on overlaps and $(\\rho_i)$ is a subordinate partition. Prove that the zero-extended sum of $\\rho_i f_i$ equals the function defined by those agreeing local values.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
At a fixed point only finitely many weights are nonzero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Every nonzero weight at that point is assigned to a cover member containing it.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Fix a point in some $U_j$. If $\\rho_i$ is nonzero there, the support containment puts the point in $U_i$, and overlap agreement gives $f_i=f_j$ at that point. Thus the finite pointwise sum is $f_j\\sum_i\\rho_i=f_j$. The extended terms and their locally finite sum are smooth by the earlier argument. Agreement makes the described function unambiguous, and the equality holds at every point of the cover.
</details>

<a id="section-226-exercise-10"></a>
### Exercise 10 {#section-228-exercise-10}
<a id="smooth-maps-partitions-unity-ex-10"></a>
Why can the real line not have a finite partition of unity in which every function has compact support? Relate this to indexing by a refinement on a noncompact manifold.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A finite union of compact supports is compact.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Outside that union every function in the proposed partition would vanish.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The finite union would be a compact subset of the line, hence bounded. At a point outside it the sum of all proposed functions would be zero, contradicting the required sum one. The partition theorem allows a countable locally finite refinement precisely so compact supports can cover noncompact manifolds. Grouping functions under a finite original cover may produce noncompact supports; compact support is not promised for those grouped functions.
</details>

<a id="section-239-provenance-and-further-reading"></a>
## Provenance and further reading {#section-241-provenance-and-further-reading}

This is new Euler exposition and exercises in British English, CC BY-SA 4.0. The source comparison is Lee, *Introduction to Smooth Manifolds*, and Tu, *An Introduction to Manifolds*. The chain rule and Euclidean inverse-function theorem are named calculus inputs. The smooth cutoff, compact exhaustion and partition theorem are proved here; earlier continuous-partition and point-set manifold sources remain intact.

<a id="section-243-summary"></a>
## Summary {#section-245-summary}

Smooth maps are defined by local coordinate expressions, and transition maps make that definition independent of coordinates. Explicit flat cutoffs give compactly supported smooth functions. A countable compact exhaustion organises these functions into a locally finite positive family; normalization yields a subordinate partition of unity. Support containment and local finiteness then justify assembling smooth local contributions into global functions. Tangent spaces next describe the first-order behavior of these smooth maps without choosing one permanent chart.
`;export{e as default};