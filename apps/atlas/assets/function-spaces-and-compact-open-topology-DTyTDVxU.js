var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: function-spaces-and-compact-open-topology
title: "Function Spaces and the Compact-Open Topology"
level: advanced-undergraduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Function Spaces and the Compact-Open Topology

A function space turns maps into points. The choice of topology then decides what it means for nearby maps to behave similarly. Pointwise topology inspects finitely many inputs, uniform topology controls every input at once, and compact-open topology controls one compact region at a time. These topologies agree only under real hypotheses, and the differences determine whether evaluation, composition, and currying are continuous.

Write $C(X,Y)$ for the set of continuous maps from $X$ to $Y$. A topology attached to the symbol will be indicated by $C_{p}(X,Y)$ for pointwise convergence, $C_{u}(X,Y)$ for uniform convergence, and $C_{k}(X,Y)$ for compact-open convergence.

## 1. Pointwise convergence as a product topology

The set of all functions $X\\to Y$ is the Cartesian product $Y^X$, with one copy of $Y$ for each $x \\in X$. Give $Y^X$ the product topology and give $C(X,Y)$ the subspace topology. The resulting space is **$C_{p}(X,Y)$**.

A subbasic pointwise neighborhood is

$[x,U]=\\{f \\in C(X,Y):f(x) \\in U\\}$,

where $x \\in X$ and $U$ is open in $Y$. A basic neighborhood restricts the values at finitely many points $x_{1},...,x_{n}$ and ignores every other input. Thus a net $(f_{\\alpha})$ converges in $C_{p}(X,Y)$ exactly when

$f_{\\alpha}(x)\\to f(x)\\quad\\text{for every }x\\in X$.

This is just coordinatewise convergence in a product. It says nothing uniform in $x$.

For each fixed $x$, the evaluation map

$ev_{x}:C_{p}(X,Y)\\to Y$, $ev_{x}(f)=f(x)$,

is continuous because it is a restricted coordinate projection. The **joint evaluation**

$ev:C_{p}(X,Y) \\times X\\to Y$, $ev(f,x)=f(x)$,

need not be continuous. Take $X=Y=\\mathbb{R}$ and consider $(0,0)$, where $0$ denotes the zero function. A basic neighborhood of $0$ in $C_{p}(\\mathbb{R},\\mathbb{R})$ controls only finitely many values. Given also a neighborhood $V$ of $0$, choose $x \\in V$ outside that finite set and a continuous function $h$ that vanishes at every controlled point but has $h(x)=1$. Hence every product neighborhood of $(0,0)$ contains a pair evaluated outside $(-1/2,1/2)$. Separate continuity in each variable has not produced joint continuity.

Pointwise limits of continuous functions can be discontinuous. On $[0,1]$, the functions $f_{n}(x)=x^n$ converge pointwise to the function that is $0$ on $[0,1)$ and $1$ at $1$. Consequently $C_{p}(X,Y)$ need not be closed in the product $Y^X$, even when both spaces are familiar metric spaces.

## 2. Uniform convergence and its metric dependence

Suppose $Y$ is metric with metric $d$. Replacing $d$ by $\\min(1,d)$ does not change its uniformity, so define the always finite metric

$d_{\\infty}(f,g)=\\sup_{x\\in X} \\min(1,d(f(x),g(x)))$

on $C(X,Y)$, with the supremum defined as $0$ when $X=\\varnothing$; in that case $C(X,Y)$ is a singleton. Its topology is the **uniform topology**. When all relevant suprema are already finite, one may use $\\sup_{x} d(f(x),g(x))$ instead. A net converges uniformly to $f$ precisely when for every $\\varepsilon>0$, eventually

$d(f_{\\alpha}(x),f(x))<\\varepsilon \\text{ for all } x \\in X$.

Uniform convergence implies pointwise convergence. The converse is usually false because the stage at which closeness begins may depend on $x$.

Joint evaluation is continuous for the uniform topology. At $(f,x_{0})$ and for $\\varepsilon>0$, continuity of $f$ supplies a neighborhood $V$ of $x_{0}$ on which $d(f(x),f(x_{0}))<\\varepsilon/2$. If $d_{\\infty}(g,f)<\\varepsilon/2$ with $\\varepsilon<1$, then for $x \\in V$,

$d(g(x),f(x_{0}))\\le d(g(x),f(x))+d(f(x),f(x_{0}))<\\varepsilon$.

This proof exhibits the two controls needed for joint evaluation: uniform control of the changing map and ordinary continuity of the center map.

The uniform topology depends on the **uniformity** of $Y$, not merely on its open sets. On $\\mathbb{R}$, the metrics

$d(s,t)=|s-t|$ and $\\rho(s,t)=|e^s-e^t|$

generate the same ordinary topology, since the exponential is a homeomorphism onto $(0,\\infty)$, but they are not uniformly equivalent. Let $X=\\mathbb{N}$ be discrete, put $f(n)=-n$, and let $f_{k}$ agree with $f$ except that $f_{k}(k)=-k-1$. Then

$\\sup_{n} \\rho(f_{k}(n),f(n))=e^{-k}(1-e^{-1})\\to 0$,

while $\\sup_{n} d(f_{k}(n),f(n))=1$. Thus two compatible metrics on the target can give different uniform topologies on a mapping space.

## 3. Compact-open topology

For compact $K \\subseteq X$ and open $U \\subseteq Y$, define

$[K,U]=\\{f \\in C(X,Y):f(K) \\subseteq U\\}$.

These sets form a subbasis for the **compact-open topology** on $C(X,Y)$, denoted $C_{k}(X,Y)$. A basic neighborhood is a finite intersection

$\\bigcap_{i=1}^n [K_{i},U_{i}]$.

The word “compact” controls the domain set; the word “open” controls its permitted image. The definition is intrinsic and uses no metric on $Y$.

Every singleton is compact, so $[x,U]=[\\{x\\},U]$ is compact-open. Therefore

$\\text{pointwise topology}\\subseteq\\text{compact-open topology}$.

The inclusion can be strict. On $[0,1]$, choose pairwise disjoint intervals centered at $c_{n}=1/n$, and let $b_{n}$ be a continuous triangular bump supported in the $n$th interval with $b_{n}(c_{n})=1$. Each $x$ belongs to at most one support, so $b_{n}(x)\\to 0$ pointwise. But the convergence is not uniform. Since compact-open and uniform convergence agree on a compact Hausdorff domain with metric target, the sequence does not converge compact-open either.

Each fixed evaluation $ev_{x}:C_{k}(X,Y)\\to Y$ is continuous. Joint evaluation needs more structure on $X$; compact sets must be large enough to contain neighborhoods.

## 4. Compact domain: compact-open equals uniform

Let $X$ be compact Hausdorff and let $Y$ be metric. Then the compact-open topology on $C(X,Y)$ equals the uniform topology.

First take a compact-open subbasic neighborhood $[K,U]$ of $f$. If $K=\\varnothing$ or $U=Y$, it is all of $C(X,Y)$. Otherwise the nonempty compact set $f(K)$ lies in $U$ and has positive distance from the closed set $Y\\setminus U$: finitely many sufficiently small metric balls about points of $f(K)$ remain in $U$. Hence some uniform ball about $f$ lies in $[K,U]$.

Conversely, fix $\\varepsilon>0$. For each $x \\in X$, continuity gives an open neighborhood $W_{x}$ on which $f$ oscillates by less than $\\varepsilon/3$. The finite shrinking argument for compact Hausdorff spaces from the separation chapter gives a finite closed refinement: there are compact sets $K_{1},...,K_{n}$ covering $X$ with $K_{i} \\subseteq W_{x_{i}}$. If

$g(K_{i}) \\subseteq B(f(x_{i}),\\varepsilon/3)$ for every $i$,

then for $x\\in K_i$, both $g(x)$ and $f(x)$ lie within $\\varepsilon/3$ of $f(x_i)$, so $d(g(x),f(x))<2\\varepsilon/3$. The corresponding finite intersection of compact-open subbasic sets is contained in the uniform $\\varepsilon$-ball.

Compactness of the whole domain is material. On $\\mathbb{R}$, let

$b_{n}(x)=\\max(0,1-|x-n|)$.

For every compact $K$, eventually $K$ misses the support $[n-1,n+1]$, so $b_{n}\\to 0$ in the compact-open topology. Yet $\\sup_{x} b_{n}(x)=1$ for every $n$, so there is no uniform convergence. Compact-open convergence is often described as uniform convergence on compacta, although the precise equivalence with compactwise sup metrics is cleanest for suitable metric or locally compact settings.

## 5. Joint evaluation and local compactness

A Hausdorff space $X$ is **locally compact** here if every point has a neighborhood with compact closure. In a locally compact Hausdorff space, the joint evaluation

$ev:C_{k}(X,Y) \\times X\\to Y$

is continuous for every space $Y$.

Fix $(f,x)$ and an open $U$ containing $f(x)$. By continuity, $f^{-1}(U)$ is a neighborhood of $x$. Local compactness and regular shrinking give an open $V$ and compact $K$ with

$x \\in V \\subseteq K \\subseteq f^{-1}(U)$.

Then $[K,U] \\times V$ is a neighborhood of $(f,x)$, and every $(g,v)$ in it satisfies $g(v) \\in U$.

The hypothesis is not a formality. Let $X=\\mathbb{Q}$ with its usual topology and $Y=\\mathbb{R}$. No compact subset of $\\mathbb{Q}$ contains a neighborhood of any point: if it contained a rational interval, a rational sequence converging in $\\mathbb{R}$ to an irrational in that interval would have no convergent subsequence in $\\mathbb{Q}$.

Joint evaluation on $C_{k}(\\mathbb{Q},\\mathbb{R}) \\times \\mathbb{Q}$ is discontinuous at $(0,0)$. Let $N=\\bigcap_{i}[K_{i},U_{i}]$ be any basic neighborhood of the zero function, discard the vacuous constraints with $K_i=\\varnothing$, and let $V$ be a neighborhood of $0$. The finite union $K=\\bigcup_{i} K_{i}$ is compact and has empty interior, so choose $x \\in V\\setminus K$. If $K=\\varnothing$, take $h=1$. Otherwise, since $\\mathbb{Q}$ is metric and $K$ is closed, define

$h(q)=d(q,K)/(d(q,K)+d(q,x))$.

In either case $h \\in N$: after empty constraints were discarded, every remaining $U_i$ contains $0$. Also $ev(h,x)=1$. Thus no product neighborhood maps into $(-1/2,1/2)$.

## 6. Composition: fixed maps and joint variation

Composition with one map fixed is easy in the compact-open topology. If $a:W\\to X$ is continuous, precomposition

$a^*:C_{k}(X,Y)\\to C_{k}(W,Y)$, $a^*(f)=f \\circ a$,

is continuous because

$(a^*)^{-1}([K,U])=[a(K),U]$,

and $a(K)$ is compact. If $b:Y\\to Z$ is continuous, postcomposition

$b_*:C_{k}(X,Y)\\to C_{k}(X,Z)$

is continuous because

$(b_*)^{-1}([K,U])=[K,b^{-1}(U)]$.

Joint composition requires a buffer in the middle space. If $Y$ is locally compact Hausdorff, then

$Comp:C_{k}(Y,Z) \\times C_{k}(X,Y)\\to C_{k}(X,Z)$, $(g,f) \\mapsto g \\circ f$,

is continuous.

Consider a subbasic $[K,U]$ containing $g \\circ f$. The compact set $f(K)$ lies in $g^{-1}(U)$. For each $y\\in f(K)$, local compactness and regularity give an open $V_y$ whose compact closure $L_y$ lies in $g^{-1}(U)$. Choose finitely many $V_y$ covering $f(K)$, put $V$ equal to their union and $L$ equal to the union of their closures. Then $L$ is compact, $f(K) \\subseteq V \\subseteq L$, and $g(L) \\subseteq U$. Consequently

$[L,U] \\times [K,V]$

is a neighborhood of $(g,f)$ whose composites all belong to $[K,U]$.

Without local compactness in the middle space, this proof stops precisely where it tries to enlarge $f(K)$ to a compact set on which nearby outer maps can be controlled. Joint composition can fail; separate continuity of pre- and postcomposition does not repair the missing compact neighborhood.

## 7. Currying and the exponential law

For a function $H:Z \\times X\\to Y$, define its **curried** function

$\\widehat H:Z\\to C(X,Y)$, $\\widehat H(z)(x)=H(z,x)$.

Set-theoretically this is the familiar bijection between functions of two variables and functions whose values are functions. Topologically, two directions use different ideas.

If $H$ is continuous, then $\\widehat H:Z\\to C_k(X,Y)$ is continuous with no local compactness assumption on $X$. To test a subbasic $[K,U]$, suppose $\\widehat H(z_0)$ lies in it. The open set $H^{-1}(U)$ contains $\\{z_0\\}\\times K$. By the tube lemma, compactness of $K$ supplies a neighborhood $N$ of $z_0$ with $N\\times K\\subseteq H^{-1}(U)$. Thus $\\widehat H(N)\\subseteq[K,U]$.

For the reverse direction, the uncurried map is

$H=\\operatorname{ev}\\circ(\\widehat H\\times\\operatorname{id}_X)$.

It is therefore continuous whenever joint evaluation is continuous. In particular, if $X$ is locally compact Hausdorff, then for every $Z,Y$,

$H:Z\\times X\\to Y\\text{ is continuous}\\iff \\widehat H:Z\\to C_k(X,Y)\\text{ is continuous}$.

This is the compact-open **exponential law** at the level of continuous maps. The locally compact Hausdorff hypothesis belongs to the variable being moved into the exponent. In categories of arbitrary spaces, a full function-space adjunction cannot be asserted without it. One remedy, developed in a later chapter, is to change the category to compactly generated spaces and then refine the topology on mapping spaces.

One should also distinguish this adjunction from the stronger statement that currying is a homeomorphism between two compact-open mapping spaces. Such a homeomorphism needs its own hypotheses and topology check; a set-theoretic bijection plus continuity in one direction is not enough.

## 8. Equicontinuity

Let $Y$ be metric. A family $F \\subseteq C(X,Y)$ is **equicontinuous at $x$** if for every $\\varepsilon>0$ there is a neighborhood $V$ of $x$ such that

$d(f(v),f(x))<\\varepsilon$

for every $v \\in V$ and every $f \\in F$. It is equicontinuous if this holds at every point. The neighborhood may depend on $x$ and $\\varepsilon$, but not on the member $f$.

Equicontinuity is stronger than saying every $f$ is continuous. The family $\\{x \\mapsto x^n:n\\ge 1\\}$ on $[0,1]$ consists of continuous maps but is not equicontinuous at $1$: for any neighborhood of $1$, choose $x<1$ in it and then choose $n$ so large that $x^n<1/2$, while $1^n=1$.

If $X$ is metric, **uniform equicontinuity** asks for one $\\delta$ working at every center $x$; ordinary equicontinuity allows the neighborhood scale to vary with the center. On compact metric $X$, an equicontinuous family is uniformly equicontinuous: finitely many local neighborhoods and a Lebesgue-number argument produce one scale.

Pointwise relative compactness is a different requirement. A family $F$ is **pointwise relatively compact** if for every $x$, the closure of $\\{f(x):f \\in F\\}$ is compact in $Y$. Equicontinuity does not imply it: all constant functions $x \\mapsto n$ form an equicontinuous family in $C(X,\\mathbb{R})$ whose value set is unbounded at every point. Pointwise relative compactness does not imply equicontinuity, as the powers $x^n$ show.

## 9. Arzela-Ascoli: compactness of families

One useful form of the **Arzela-Ascoli theorem** is the following.

Let $X$ be compact Hausdorff, $Y$ metric, and $F \\subseteq C(X,Y)$. Then the closure of $F$ in the compact-open, equivalently uniform, topology is compact if and only if:

1. $F$ is equicontinuous;
2. $F$ is pointwise relatively compact.

For real-valued families, the second condition is pointwise boundedness, because closed bounded subsets of $\\mathbb{R}$ are compact. “Uniformly bounded” is stronger and is often convenient, but it is not the conceptual condition. For a general metric target, bounded closure need not be compact.

Here is the forward mechanism. If $\\operatorname{cl}(F)$ is compact in the uniform topology, each evaluation image is compact, giving pointwise relative compactness. For equicontinuity, choose a finite uniform $\\varepsilon/3$-net $f_{1},...,f_{n}$ in $\\operatorname{cl}(F)$. At a fixed $x$, intersect neighborhoods on which these finitely many center functions oscillate by less than $\\varepsilon/3$. Every $f \\in F$ lies uniformly within $\\varepsilon/3$ of some $f_{i}$, so the triangle inequality gives oscillation less than $\\varepsilon$ on the common neighborhood.

For the converse, set $K_x=\\operatorname{cl}(\\{f(x):f\\in F\\})$, which is compact. The product $\\prod_{x \\in X}K_x$ is compact by Tychonoff's theorem, and the pointwise closure $P$ of $F$ inside it is compact. Equicontinuity passes to pointwise limits: for a requested $\\varepsilon>0$, use equicontinuity with $\\varepsilon/2$ and then take pointwise limits, obtaining an oscillation at most $\\varepsilon/2<\\varepsilon$. Hence every member of $P$ is continuous.

Finally, pointwise convergence within an equicontinuous family upgrades to uniform convergence on compact $X$. Given $\\varepsilon$, choose finitely many domain neighborhoods on which every family member and the limit oscillate by less than $\\varepsilon/3$; pointwise convergence at the finitely many centers supplies a common eventual index. The triangle inequality then gives uniform $\\varepsilon$-closeness everywhere. Thus the compact pointwise closure and the uniform closure carry the same convergence, yielding compactness in $C_{k}(X,Y)$.

The powers $x^n$ diagnose the equicontinuity hypothesis. They are uniformly bounded and hence pointwise relatively compact, but their pointwise limit is discontinuous and no subsequence converges uniformly. Arzela-Ascoli is a compactness theorem for families of maps, not merely a boundedness theorem.

## 10. Comparison audit

The three topologies can now be placed accurately.

- Pointwise convergence tests each fixed input and permits the stage of convergence to depend on that input.
- Compact-open convergence controls each prescribed compact subset and is defined without a metric.
- Uniform convergence controls the whole domain at once but depends on a chosen target uniformity.
- Pointwise topology is always coarser than compact-open topology.
- On compact Hausdorff $X$ and metric $Y$, compact-open and uniform topologies agree.
- On noncompact domains, compact-open can be strictly coarser than uniform, as moving bumps show.
- Joint evaluation and the reverse exponential implication are guaranteed for locally compact Hausdorff $X$.

A proof should name both the topology on the mapping space and the hypotheses on the domain and target. Saying only “the functions converge” or “evaluation is continuous” hides the very choice that controls whether the statement is true.

## Worked examples: interpreting convergence of functions

### Worked example 1 — A spike escaping along a discrete domain

Let $X=\\mathbb N$ with the discrete topology and let $f_n:X\\to\\mathbb R$ take value one at $n$ and zero elsewhere. Every function on this domain is continuous. A compact subset of $X$ is finite: its cover by singletons has a finite subcover only in that case. Thus the compact-open topology on $C(X,\\mathbb R)$ is exactly the product topology. A compact-open subbasic condition controls finitely many coordinates, and every individual coordinate condition is obtained using the compact singleton.

For each fixed $k$, $f_n(k)=0$ once $n>k$. Hence $f_n$ converges pointwise, and therefore compact-open, to zero. Nevertheless $\\sup_k|f_n(k)|=1$ for every $n$, so uniform convergence fails. The issue is not a discontinuous spike: every spike is continuous. The domain has infinitely many separate places on which an error can escape the finite control.

Because $\\mathbb N$ is locally compact Hausdorff, joint compact-open evaluation is continuous. That theorem is entirely consistent with the example. Joint continuity tests a function and a point near a fixed pair; it does not bound errors simultaneously over every point of a noncompact domain.

### Worked example 2 — A compact family with a common slope bound

On $X=[0,1]$, consider $\\mathcal F=\\{f_{a,b}:f_{a,b}(x)=a+bx,\\ |a|\\le2,\\ |b|\\le3\\}$. Each function is continuous, and
$|f_{a,b}(x)-f_{a,b}(y)|\\le3|x-y|$.
Thus a single input tolerance $\\delta=\\varepsilon/3$ controls every function; this proves equicontinuity. Values at each fixed point lie in $[-5,5]$, so pointwise relative compactness also holds.

We can prove actual compactness without invoking the general compactness theorem. The parameter rectangle $[-2,2]\\times[-3,3]$ is compact, and its map into the uniform function space is continuous because
$\\|f_{a,b}-f_{c,d}\\|_\\infty\\le |a-c|+|b-d|$.
Its image is therefore compact. On this compact domain, uniform and compact-open topologies agree, so it is compact in either description.

This calculation illustrates how to use parameters safely. Compact parameters and a continuous parameter-to-function map yield a compact family. Merely saying that each function has finitely many parameters does not make the parameter range compact. Allowing all real slopes gives an unbounded family whose evaluation at one is unbounded, preventing relative compactness.

### Worked example 3 — Pointwise compactness can lose continuity

For $n\\ge1$, put $g_n(x)=x^n$ on $[0,1]$. Each value lies in the compact interval $[0,1]$, so the family is pointwise relatively compact. Its pointwise limit is zero for $x<1$ and one at $x=1$, a discontinuous function.

The family fails equicontinuity at one. Given any $\\delta>0$, choose $x<1$ with $1-x<\\delta$. Then choose $n$ sufficiently large that $x^n<1/2$. The output difference $|g_n(1)-g_n(x)|$ exceeds $1/2$. No single neighborhood of one controls all members.

There is no uniformly convergent subsequence. Every subsequence still has the same pointwise limit, and a uniform limit of continuous real functions is continuous. This is the exact gap filled by equicontinuity in Arzela-Ascoli. Pointwise compactness puts limits in the product of value spaces; equicontinuity keeps those product limits continuous and upgrades their convergence.

## Why the hypotheses on evaluation matter

A fixed evaluation $f\\mapsto f(x)$ concerns one coordinate and is continuous for all three function topologies discussed here. Joint evaluation $(f,x)\\mapsto f(x)$ also allows the coordinate to move. That is a stronger requirement. In the product topology, a basic neighborhood of a function controls only finitely many specified points; a nearby moving point can avoid them. Continuity of each individual function does not supply a common neighborhood valid for every function in that product neighborhood.

Local compactness repairs this problem for the compact-open topology by putting the moving point inside a compact neighborhood. If $f(x)\\in O$, shrink an image neighborhood and choose a compact neighborhood $K$ on which $f(K)\\subseteq O$. The condition $[K,O]$ then controls every nearby point simultaneously. The compact set must be a neighborhood, not merely a compact subset containing the point. This distinction explains the failure for rational domains: compact subsets of $\\mathbb Q$ need not provide any neighborhood of a rational point.

Uniform topology supplies common control by another route: it controls every point at once. The triangle inequality compares $g(y)$ first with $f(y)$ and then with $f(x)$. The first comparison is uniform in $y$; continuity of the fixed reference function supplies the second. Neither route should be silently transferred to pointwise convergence.

The compact-open topology itself is defined without choosing a metric on the target. A uniform topology generally needs a chosen uniformity, so two compatible target metrics can produce different uniform function topologies over a noncompact domain. On a compact domain the compact-open description removes that ambiguity. This is a reason to prove equality of topologies rather than treating it as a naming convention.

For the elementary finite-net proof of the compact-metric version of Arzela-Ascoli, and the separate real-algebra density theorem, continue to [Arzela-Ascoli and Stone-Weierstrass](arzela-ascoli-stone-weierstrass.md). The compact-Hausdorff argument above uses [the full product compactness theorem](compactness-covers-and-finite-control.md); it is not justified by finite-product compactness alone.

## Exercises with complete solutions

### TOP-CH14-E001 — Exercise 1
Prove that a net in $C_{p}(X,Y)$ converges exactly when it converges pointwise.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use basic product neighborhoods.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each basic neighborhood mentions finitely many evaluations; coordinatewise eventual membership handles all of them together.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E001 — Solution 1
The pointwise topology is the subspace topology inherited from the product $Y^X$. Convergence in a product is coordinatewise: if $f_{\\alpha}\\to f$, continuity of each coordinate evaluation gives $f_{\\alpha}(x)\\to f(x)$. Conversely, a basic neighborhood of $f$ restricts finitely many values $x_{1},...,x_{n}$. Coordinate convergence gives an eventual index for each restriction, and directedness gives one index beyond all finitely many; thereafter the net lies in the basic neighborhood.


</details>

### TOP-CH14-E002 — Exercise 2
Show that each fixed evaluation $ev_{x}:C_{p}(X,Y)\\to Y$ is continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write an evaluation inverse image.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The set of functions taking $x$ into an open set is a product subbasic open set.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E002 — Solution 2
For open $U \\subseteq Y$,
$ev_{x}^{-1}(U)=\\{f:f(x) \\in U\\}=[x,U]$,
which is subbasic open in the pointwise topology. Therefore $ev_{x}$ is continuous.


</details>

### TOP-CH14-E003 — Exercise 3
Prove joint evaluation $C_{p}(\\mathbb{R},\\mathbb{R}) \\times \\mathbb{R}\\to \\mathbb{R}$ is not continuous at the zero function and $0$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A product neighborhood controls finitely many points.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a nearby point outside that finite set and a continuous function vanishing on it but large at the new point.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E003 — Solution 3
Take the target neighborhood $(-1/2,1/2)$. A basic neighborhood $N$ of the zero function restricts its values only at a finite set $F$, and any neighborhood $V$ of $0$ contains some $x \\notin F$. The polynomial
$h(t)=\\prod_{a \\in F}(t-a)/\\prod_{a \\in F}(x-a)$
is continuous, vanishes on $F$, and has $h(x)=1$; when $F$ is empty take $h=1$. Thus $h \\in N$ but $ev(h,x)=1$. No product neighborhood of $(0,0)$ maps into $(-1/2,1/2)$, so evaluation is discontinuous there.


</details>

### TOP-CH14-E004 — Exercise 4
Show uniform convergence implies pointwise convergence and give a converse failure on $[0,1]$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Uniform control implies each coordinate control.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For failure of the converse, move a narrow continuous bump while keeping its height fixed.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E004 — Solution 4
If $\\sup_{x} d(f_{n}(x),f(x))\\to 0$, then for each fixed $x$, $d(f_{n}(x),f(x))$ is bounded by that supremum and tends to zero. For the converse, choose continuous triangular bumps $b_{n}$ of height $1$ with pairwise disjoint supports centered at $1/n$. Each point lies in at most one support, so $b_{n}(x)\\to 0$ for every $x$. However, $\\sup_{x} |b_{n}(x)|=1$, so convergence is not uniform.


</details>

### TOP-CH14-E005 — Exercise 5
Prove joint evaluation is continuous on $C_{u}(X,Y) \\times X$ when $Y$ is metric.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a triangle inequality at a fixed reference pair.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Uniform closeness controls the first term and continuity of the reference function controls the second.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E005 — Solution 5
Fix $(f,x_{0})$ and $\\varepsilon$ with $0<\\varepsilon<1$. Continuity of $f$ gives a neighborhood $V$ of $x_{0}$ such that $d(f(x),f(x_{0}))<\\varepsilon/2$ on $V$. If $d_{\\infty}(g,f)<\\varepsilon/2$, then truncation does not affect these distances and, for $x \\in V$,
$d(g(x),f(x_{0}))\\le d(g(x),f(x))+d(f(x),f(x_{0}))<\\varepsilon$.
Metric balls form a target basis, so evaluation is continuous.


</details>

### TOP-CH14-E006 — Exercise 6
Give two metrics generating the usual topology on $\\mathbb{R}$ but different uniform topologies on a function space.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Equivalent metrics need not be uniformly equivalent.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

On the discrete domain, choose functions with very negative values so their exponentials are close while their ordinary differences stay large.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E006 — Solution 6
Use $d(s,t)=|s-t|$ and $\\rho(s,t)=|e^s-e^t|$. Both induce the usual topology because $\\exp:\\mathbb{R}\\to(0,\\infty)$ is a homeomorphism. On discrete $N$, set $f(n)=-n$ and change only the $k$th value to define $f_{k}(k)=-k-1$. Then
$\\sup_{n} \\rho(f_{k}(n),f(n))=e^{-k}(1-e^{-1})\\to 0$,
but $\\sup_{n} d(f_{k}(n),f(n))=1$. Thus $f_{k}$ converges uniformly under $\\rho$ and not under $d$.


</details>

### TOP-CH14-E007 — Exercise 7
Verify that every fixed evaluation $ev_{x}:C_{k}(X,Y)\\to Y$ is continuous and deduce that compact-open topology is finer than pointwise topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A singleton is compact.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The compact-open subbasic set for that singleton is exactly a fixed evaluation inverse image.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E007 — Solution 7
The singleton $\\{x\\}$ is compact, and
$ev_{x}^{-1}(U)=[\\{x\\},U]$
is compact-open subbasic for every open $U$. Hence each evaluation is continuous. The pointwise topology is the coarsest topology making all fixed evaluations continuous, so it is contained in the compact-open topology.


</details>

### TOP-CH14-E008 — Exercise 8
Show the bump sequence from Exercise 4 converges pointwise but not compact-open on $[0,1]$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a compact domain.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

There the compact-open topology is uniform, and bumps of fixed height cannot converge uniformly to zero.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E008 — Solution 8
Pairwise disjoint supports give pointwise convergence to zero. Since $[0,1]$ is compact, the subbasic compact-open neighborhood $[[0,1],(-1/2,1/2)]$ of zero requires the entire image to lie in $(-1/2,1/2)$. Every bump attains $1$, so no term belongs to this neighborhood. Thus convergence is not compact-open, and the pointwise topology is strictly coarser here.


</details>

### TOP-CH14-E009 — Exercise 9
Prove that compact-open and uniform topologies agree when $X$ is compact Hausdorff and $Y$ metric.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Prove both neighborhood containments.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A compact image has positive distance from the complement of an open target set; for the reverse containment use finitely many compact neighborhoods.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E009 — Solution 9
If $K=\\varnothing$ or $U=Y$, then $[K,U]$ is the whole function space. Otherwise, if $[K,U]$ contains $f$, compactness of $f(K)$ and openness of $U$ give $\\varepsilon>0$ such that every point within $\\varepsilon$ of $f(K)$ lies in $U$; the uniform $\\varepsilon$-ball at $f$ is contained in $[K,U]$. Conversely, for a uniform $\\varepsilon$-ball, cover $X$ by open sets on which $f$ oscillates by less than $\\varepsilon/3$. The compact-Hausdorff shrinking argument gives a finite compact refinement $K_{i}$ subordinate to that cover. Requiring $g(K_{i}) \\subseteq B(f(x_{i}),\\varepsilon/3)$ for every $i$ defines a compact-open neighborhood of $f$, and the triangle inequality puts it inside the uniform ball. Both topologies therefore contain the other.


</details>

### TOP-CH14-E010 — Exercise 10
Give a sequence on $\\mathbb{R}$ converging compact-open but not uniformly.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Move a fixed-height bump beyond every bounded interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each compact set eventually misses the support, while the global supremum stays one.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E010 — Solution 10
Let $b_{n}(x)=\\max(0,1-|x-n|)$. If $K \\subseteq \\mathbb{R}$ is compact, it is bounded, so eventually its points lie outside $[n-1,n+1]$, the support of $b_{n}$; hence $b_{n}$ is eventually zero on $K$. This implies compact-open convergence to zero. But $b_{n}(n)=1$, so the uniform distance from zero is always $1$.


</details>

### TOP-CH14-E011 — Exercise 11
Prove joint evaluation $C_{k}(X,Y) \\times X\\to Y$ is continuous when $X$ is locally compact Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose a compact neighborhood of the evaluation point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Control the entire neighborhood with one compact-open condition.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E011 — Solution 11
Let $f(x) \\in U$ with $U$ open. The set $f^{-1}(U)$ is a neighborhood of $x$. Local compactness and regularity yield open $V$ and compact $K$ with $x \\in V \\subseteq K \\subseteq f^{-1}(U)$. The product $[K,U] \\times V$ is a neighborhood of $(f,x)$. If $(g,v)$ lies there, then $v \\in V \\subseteq K$ and $g(K) \\subseteq U$, so $g(v) \\in U$. This proves continuity.


</details>

### TOP-CH14-E012 — Exercise 12
Prove joint evaluation fails on $C_{k}(\\mathbb{Q},\\mathbb{R}) \\times \\mathbb{Q}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compact subsets of the rational line have empty interior.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Find a point near the evaluation point outside the finitely many compact controls and insert a continuous bump there.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E012 — Solution 12
At $(0,0)$, take a basic mapping-space neighborhood $N=\\bigcap_{i}[K_{i},U_{i}]$, discard the vacuous constraints with $K_i=\\varnothing$, and take a neighborhood $V$ of $0$. The compact set $K=\\bigcup_iK_i$ has empty interior in $\\mathbb{Q}$, so choose $x\\in V\\setminus K$. If $K=\\varnothing$, take $h=1$. Otherwise $K$ is closed and has positive distance from $x$, and the continuous function
$h(q)=d(q,K)/(d(q,K)+d(q,x))$
is zero on every $K_i$ and satisfies $h(x)=1$. After the empty constraints were discarded, each remaining $U_i$ contains $0$, so in either case $h\\in N$. Therefore every product neighborhood contains a pair evaluated outside $(-1/2,1/2)$, and evaluation is not continuous.


</details>

### TOP-CH14-E013 — Exercise 13
Prove fixed precomposition and fixed postcomposition are continuous in compact-open topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute subbasic inverse images.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Precomposition replaces a compact set by its continuous compact image; postcomposition replaces the target open set by its inverse image.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E013 — Solution 13
For continuous $a:W\\to X$, the inverse image under $f \\mapsto f \\circ a$ of $[K,U]$ is $[a(K),U]$; continuous images of compact sets are compact. For continuous $b:Y\\to Z$, the inverse image under $f \\mapsto b \\circ f$ of $[K,U]$ is $[K,b^{-1}(U)]$, and $b^{-1}(U)$ is open. Inverse images of subbasic opens are open in both cases.


</details>

### TOP-CH14-E014 — Exercise 14
Prove joint composition is continuous when the middle space is locally compact Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use local compactness in the middle space.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Find a compact neighborhood of the compact image on which the outer function remains in the requested open set.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E014 — Solution 14
Suppose $g \\circ f \\in [K,U]$. The compact set $f(K)$ lies in $g^{-1}(U)$. For each of its points choose an open neighborhood with compact closure inside $g^{-1}(U)$, and take a finite subcover. If $V$ is the union of these neighborhoods and $L$ the union of their compact closures, then $f(K) \\subseteq V \\subseteq L$, $L$ is compact, and $g(L) \\subseteq U$. Whenever $g' \\in [L,U]$ and $f' \\in [K,V]$, one has $g'(f'(K)) \\subseteq g'(L) \\subseteq U$. Thus $[L,U] \\times [K,V]$ maps into $[K,U]$, proving continuity on a subbasis.


</details>

### TOP-CH14-E015 — Exercise 15
If $H:Z\\times X\\to Y$ is continuous, prove $\\widehat H:Z\\to C_k(X,Y)$ is continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Work with one compact set in the curried variable.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Cover it by finitely many rectangles on which the original map lands in the chosen target open set.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E015 — Solution 15
Take a subbasic $[K,U]$ containing $\\widehat H(z_0)$. Then $\\{z_0\\}\\times K\\subseteq H^{-1}(U)$, an open subset of $Z\\times X$. The tube lemma for compact $K$ gives a neighborhood $N$ of $z_0$ with $N\\times K\\subseteq H^{-1}(U)$. For every $z\\in N$, $H(\\{z\\}\\times K)\\subseteq U$, so $\\widehat H(z)\\in[K,U]$. Hence the inverse image of each subbasic neighborhood is open.


</details>

### TOP-CH14-E016 — Exercise 16
State and prove the compact-open exponential law at the level of continuous maps.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

One direction is currying of a continuous map.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the converse compose the curried map with continuous joint evaluation.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E016 — Solution 16
If $X$ is locally compact Hausdorff, then for all spaces $Z,Y$, a function $H:Z\\times X\\to Y$ is continuous exactly when $\\widehat H:Z\\to C_k(X,Y)$ is continuous. The forward implication is Exercise 15 and uses compact tubes. Conversely,

$H(z,x)=\\operatorname{ev}(\\widehat H(z),x)$,

so $H=\\operatorname{ev}\\circ(\\widehat H\\times\\operatorname{id}_X)$. The product map is continuous, and joint evaluation is continuous by Exercise 11; therefore $H$ is continuous.


</details>

### TOP-CH14-E017 — Exercise 17
Prove $C_{k}(X,Y)$ is Hausdorff when $Y$ is Hausdorff. If $X$ is nonempty, prove the converse.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate two functions at a point where they differ.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For necessity embed the target using constant functions and evaluate at one chosen domain point.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E017 — Solution 17
If $f\\ne g$, choose $x$ with $f(x)\\ne g(x)$ and disjoint open target neighborhoods $U,V$. Then $[\\{x\\},U]$ and $[\\{x\\},V]$ are disjoint neighborhoods of $f,g$, so $C_{k}(X,Y)$ is Hausdorff. Conversely, fix $x_{0} \\in X$. The constant-map function $c:Y\\to C_{k}(X,Y)$ is continuous: the inverse image of $[K,U]$ is $U$ if $K$ is nonempty and all of $Y$ if $K$ is empty. Evaluation at $x_{0}$ is a continuous inverse on the constant maps, so $Y$ embeds in $C_{k}(X,Y)$. A subspace of a Hausdorff space is Hausdorff.


</details>

### TOP-CH14-E018 — Exercise 18
Let $X$ be compact Hausdorff and $Y$ metric. Prove that a relatively compact family in $C_{k}(X,Y)$ is equicontinuous and pointwise relatively compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compactness gives finite uniform nets near a reference function.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use continuity of the finitely many centers to obtain a common input neighborhood.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E018 — Solution 18
Let $A=\\operatorname{cl}(F)$ be compact. Since each $ev_{x}$ is continuous, $ev_{x}(A)$ is compact and contains $\\{f(x):f \\in F\\}$, proving pointwise relative compactness. Given $x$ and $\\varepsilon$, compactness of $A$ provides a finite uniform $\\varepsilon/3$-net $f_{1},...,f_{n}$, using equality of compact-open and uniform topology. Intersect neighborhoods of $x$ on which all $f_{i}$ oscillate by less than $\\varepsilon/3$. For $f \\in F$, choose $f_{i}$ uniformly within $\\varepsilon/3$; two approximation terms and the center oscillation show $d(f(v),f(x))<\\varepsilon$. Thus $F$ is equicontinuous.


</details>

### TOP-CH14-E019 — Exercise 19
Under the hypotheses of Exercise 18, prove equicontinuity and pointwise relative compactness imply relative compactness.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take the closure in the product of compact value closures.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Equicontinuity makes every product limit continuous and upgrades pointwise convergence to uniform convergence.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E019 — Solution 19
For each $x$, let $K_x=\\operatorname{cl}(\\{f(x):f\\in F\\})$, compact by assumption. Tychonoff makes $\\prod_x K_x$ compact, so the pointwise closure $P$ of $F$ is compact. A pointwise limit $g$ of a net from $F$ is continuous: given $\\varepsilon>0$, equicontinuity supplies one neighborhood on which every net member oscillates by less than $\\varepsilon/2$, and passing to pointwise limits gives oscillation at most $\\varepsilon/2<\\varepsilon$ for $g$.

Moreover, pointwise convergence in $P$ is uniform. Cover compact $X$ by finitely many neighborhoods on which the family and its pointwise limit oscillate by less than $\\varepsilon/3$; convergence at the finitely many centers gives one eventual index, and a three-term triangle inequality gives uniform $\\varepsilon$-closeness on all of $X$. Hence the compact pointwise closure carries the uniform, equivalently compact-open, topology. It is the compact-open closure of $F$, proving relative compactness.


</details>

### TOP-CH14-E020 — Exercise 20
Use $f_{n}(x)=x^n$ on $[0,1]$ to show pointwise relative compactness without equicontinuity does not imply compact-open relative compactness.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inspect the endpoint one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a point just below one, then a power making its value less than one half.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH14-E020 — Solution 20
For each fixed $x$, the set $\\{x^n:n\\ge 1\\}$ has compact closure in $[0,1]$, so the family is pointwise relatively compact. It is not equicontinuous at $1$: in every neighborhood of $1$, choose $x<1$; for sufficiently large $n$, $x^n<1/2$ while $f_{n}(1)=1$. If a subsequence converged uniformly, it would converge pointwise to the same limit as the full sequence, namely $0$ on $[0,1)$ and $1$ at $1$. A uniform limit of continuous functions is continuous, but this limit is not. Therefore no subsequence converges uniformly, and since compact-open equals uniform topology here, the family is not relatively compact.


</details>

## Sources

The general function-space arguments are developed in this chapter. Further proofs and dependencies appear in [Compactness: Covers and Finite Control](compactness-covers-and-finite-control.md) and [Arzela-Ascoli and Stone-Weierstrass](arzela-ascoli-stone-weierstrass.md).

## Chapter checkpoint

Pointwise topology is a product topology, uniform topology records a target uniformity, and compact-open topology controls images of compact subsets. Local compactness turns compact-open control into continuity of evaluation, joint composition, and uncurrying. On compact Hausdorff domains with metric targets, compact-open and uniform convergence agree, and Arzela-Ascoli identifies equicontinuity plus pointwise relative compactness as the exact compactness mechanism for families of maps.

The three examples distinguish finite coordinate control, compact-set control, and control over the entire domain. A compactness claim for a family must identify both the function topology and the hypotheses that keep limiting functions continuous.

## Transferred capstone 13 {#topology-transferred-e013}

Original question identity: [TOP-CH22-E013](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Show that $f_{n}(x)=x^n$ converges pointwise on $[0,1]$ to a discontinuous function and use this to prove the convergence is not uniform.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute the limit separately at one and below one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A uniform limit of continuous functions on this common domain would be continuous.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

For $0\\le x<1$, $x^n\\to 0$; at $x=1$, every term equals one. The pointwise limit is therefore $f(x)=0$ on $[0,1)$ and $f(1)=1$, which is discontinuous at one. If continuous functions on $[0,1]$ converged uniformly, their limit would be continuous: for a chosen point, combine uniform closeness of one sufficiently late function with continuity of that function. Since the actual limit is discontinuous, convergence cannot be uniform. Directly, for each $n$, values $x^n$ can be arbitrarily close to one with $x<1$, while $f(x)=0$, so the supremum error is one.

</details>
`;export{e as default};