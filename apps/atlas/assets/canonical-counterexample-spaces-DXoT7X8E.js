var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: canonical-counterexample-spaces
title: "Canonical Counterexample Spaces"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Canonical Counterexample Spaces

A counterexample is useful only when it answers a precise question. Saying that a space is "strange" does not identify the failed inference; saying that an infinite cofinite space is $T_{1}$ and compact but not Hausdorff does. This chapter is an atlas of such failures. Each dossier gives a construction, verifies the properties that matter, and records the hypothesis that a tempting theorem has lost.

There are two disciplines to keep throughout. First, always name the active topology. The same set can be compact in one topology and noncompact in another. Second, prove both sides of the diagnosis: verify the premise of the false implication and exhibit a direct obstruction to its conclusion.

## 1. How to read the atlas

The following ledger is a text-and-symbol summary. A check means the stated property holds, a cross means it fails, and a dash means that the property is not the point of that row. Qualifiers in parentheses are part of the claim.

| Space | Properties retained | Property lost | Failed implication exposed |
|---|---|---|---|
| non-discrete finite poset space | finite, compact, $T_{0}$, Alexandrov | $T_{1}$ | finite $T_{0}$ does not imply $T_{1}$ |
| infinite cofinite space | $T_{1}$, compact, connected | Hausdorff | compact $T_{1}$ does not imply Hausdorff |
| Sierpinski space | finite, compact, $T_{0}$ | $T_{1}$ | topological distinguishability need not close points |
| included-point space | $T_{0}$, connected | $T_{1}$, compact (if infinite) | an Alexandrov topology need not be compact |
| excluded-point space | compact, $T_{0}$, connected | $T_{1}$, Hausdorff | compactness gives no separation by itself |
| Sorgenfrey line | first-countable, separable, Lindelof, normal | second-countable, metrizable | separable plus Lindelof need not imply metrizable |
| Sorgenfrey plane | separable, first-countable, Hausdorff | Lindelof, normal | finite products need not preserve Lindelofness or normality |
| $[0,\\omega_{1})$ | first-countable, locally compact, countably compact | compact, Lindelof, separable | countably compact need not be compact |
| $[0,\\omega_{1}]$ | compact, Hausdorff | first-countable, sequential | compact Hausdorff spaces need not be sequential |
| closed long ray | Hausdorff, first-countable, locally Euclidean off its endpoint | second-countable, separable | local Euclidean behavior is not a global countability axiom |
| topologist's sine curve | compact, connected | path-connected, locally connected | connected need not imply path-connected |
| comb space | path-connected, compact | locally connected | path-connected need not imply locally connected |
| sequential fan | sequential, $T_{1}$, Hausdorff | first-countable | sequences can detect closure without countable local bases |
| line with two origins | $T_{1}$, locally Euclidean | Hausdorff | locally Hausdorff pieces can glue non-Hausdorffly |
| closed unit ball in infinite-dimensional normed space | closed, bounded | compact | Heine--Borel is finite-dimensional |

The ledger is an index, not a substitute for proofs. Several rows depend on the size of the underlying set or on a specified version of a construction. Those qualifications will be made explicit below.

## 2. Finite and Alexandrov spaces: separation can fail immediately

A topology is **Alexandrov** when arbitrary intersections of open sets are open. Every finite topological space is Alexandrov, because an arbitrary intersection of members of a finite topology is already the intersection of finitely many distinct members.

Given a partially ordered set $(P,\\le)$, declare the upward-closed subsets open. The smallest neighborhood of $x$ is

$U_{x}=\\{y \\in P:x\\le y\\}$.

This topology is $T_{0}$: if $x\\ne y$, antisymmetry ensures that at least one of $x\\le y$ and $y\\le x$ fails, so one minimal neighborhood distinguishes the points. It is $T_{1}$ exactly when the order has no comparable distinct elements, in which case every $U_{x}=\\{x\\}$ and the topology is discrete. Thus the two-element chain already gives a finite compact $T_{0}$ space that is not $T_{1}$.

This description is more than a source of small examples. A map between such poset spaces is continuous exactly when it is order-preserving. If $f$ is monotone, the inverse image of an upward set is upward. Conversely, continuity gives $f(U_x)\\subseteq U_{f(x)}$, hence $x\\le y$ implies $f(x)\\le f(y)$. A topological calculation has become a finite order calculation.

The **Sierpinski space** is $S=\\{0,1\\}$ with topology

$\\{\\varnothing,\\{1\\},S\\}$.

It is the chain example with $1$ as the open point. It is $T_{0}$ but not $T_{1}$, since $\\{1\\}$ is not closed. It also detects open subsets: for a space $X$, a function $\\chi_{U}:X\\to S$ defined by $\\chi_{U}(x)=1$ on $U$ and $0$ off $U$ is continuous exactly when $U$ is open. This role explains why the space is structurally useful even though it has only two points.

Every finite space is compact: from an open cover, choose one member for each point. Compactness therefore says nothing about separation in the finite setting. The indiscrete two-point space is compact but not even $T_{0}$; the Sierpinski space is compact and $T_{0}$ but not $T_{1}$; the discrete two-point space is compact Hausdorff. These three topologies form a minimal separation audit.

## 3. Cofinite and point topologies: compactness without disjoint neighborhoods

Let $X$ be infinite. In the **cofinite topology**, a set is open when it is empty or has finite complement. Singletons are closed, so the space is $T_{1}$. Two nonempty open sets cannot be disjoint: their complements are finite, whereas the union of two finite sets cannot equal the infinite set $X$. Hence the space is not Hausdorff and is in fact hyperconnected, meaning any two nonempty open sets meet.

It is compact. Given an open cover, choose a nonempty member $U$. Only finitely many points remain outside $U$; choose at most one further cover member for each of them. It is also connected, because a separation would consist of two disjoint nonempty open sets.

Sequences display exactly how Hausdorff uniqueness fails. If $(x_{n})$ has pairwise distinct terms, then it converges to every $x \\in X$: a neighborhood of $x$ omits only finitely many points and therefore omits only finitely many terms. More generally, $(x_{n})$ converges to $x$ precisely when every value $y\\ne x$ occurs only finitely often. Thus compact plus $T_{1}$ neither forces Hausdorffness nor unique sequential limits.

Fix $p \\in X$. The **included-point topology** (also called the particular-point topology) consists of $\\varnothing$ and all subsets containing $p$. Its smallest neighborhoods are $\\{p\\}$ at $p$ and $\\{p,x\\}$ at $x\\ne p$, so it is Alexandrov and $T_{0}$. It is not $T_{1}$, because $\\{p\\}$ is not closed when $X$ has more than one point. Every two nonempty open sets contain $p$, so the space is hyperconnected. If $X$ is infinite, it is not compact: the cover

$\\{\\{p,x\\}:x \\in X\\setminus \\{p\\}\\}$

has no finite subcover.

The **excluded-point topology** consists of every subset not containing $p$, together with $X$. It is $T_{0}$: $\\{x\\}$ distinguishes two points away from $p$, and $\\{x\\}$ distinguishes $x\\ne p$ from $p$. It is not $T_{1}$ when $X$ has at least two points, because for $x\\ne p$ the complement $X\\setminus \\{x\\}$ contains $p$ but is not all of $X$, hence is not open. The only open neighborhood of $p$ is $X$, so $p$ cannot have a disjoint neighborhood from any other point; the space is not Hausdorff.

Nevertheless the excluded-point space is compact for the simplest possible reason: every open cover must contain $X$ in order to cover $p$. It is connected, since a nontrivial clopen set cannot occur. Indeed, a proper nonempty open set omits $p$, while its complement contains $p$ and is a proper subset, so that complement is not open. Comparing the two point topologies is a useful diagnostic: requiring all nonempty opens to contain $p$ gives hyperconnectedness but not compactness, while permitting $p$ only in the whole space gives compactness but not hyperconnectedness.

## 4. The Sorgenfrey line and plane: good factors, bad product

The **Sorgenfrey line** $S$ is $\\mathbb{R}$ with basis

$[a,b)$, where $a<b$.

It is finer than the Euclidean topology. It is first-countable because $\\{[x,x+1/n):n\\ge 1\\}$ is a local base at $x$. It is Hausdorff: if $x<y$, choose $\\varepsilon<y-x$; then $[x,x+\\varepsilon)$ and $[y,y+\\varepsilon)$ are disjoint. Each basic set $[a,b)$ is also closed, since

$\\mathbb{R}\\setminus[a,b)=(-\\infty,a) \\cup [b,\\infty)$

is Sorgenfrey-open. Thus $S$ has a clopen basis and is zero-dimensional.

The rationals are dense: every nonempty basic interval $[a,b)$ contains a rational. Hence $S$ is separable. It is not second-countable. Suppose $B$ were a countable basis. For each $x$, choose $B_{x} \\in B$ with

$x \\in B_{x} \\subseteq [x,x+1)$.

If $x<y$, then $x \\in B_{x}$ but $x \\notin B_{y}$, because $B_{y} \\subseteq [y,y+1)$. Therefore $x \\mapsto B_{x}$ is injective, contradicting countability of $B$. It follows that $S$ is not metrizable: every separable metrizable space is second-countable.

The line is also Lindelof. Here is a proof that exposes the role of the ordinary Euclidean topology. Let $U$ be a cover by Sorgenfrey-open sets. For each $x$, choose $b_{x}>x$ with $[x,b_{x}) \\subseteq U_{x}$ for some $U_{x} \\in U$. The Euclidean intervals $(x,b_{x})$ cover all points except possibly those that are never captured from the left. Let

$A=\\mathbb{R}\\setminus\\bigcup_{x\\in\\mathbb{R}}(x,b_{x})$.

The displayed union is Euclidean-open, so $A$ is Euclidean-closed. Moreover, for each $x \\in A$, the interval $(x,b_{x})$ contains no point of $A$; hence every point of $A$ is isolated from the right in the order inherited from $\\mathbb{R}$. A right-isolated subset of $\\mathbb{R}$ is countable: choose for each point a distinct rational in a sufficiently small right interval. The Euclidean-open union has a countable subcover by intervals $(x,b_{x})$ because Euclidean $\\mathbb{R}$ is second-countable. Add the countably many $U_{x}$ for $x \\in A$. Their corresponding original cover members form a countable subcover of $S$.

The clopen basis makes $S$ regular: given $x \\in U$, choose a clopen basic interval $V$ with $x \\in V \\subseteq U$, so $\\operatorname{cl}(V)=V \\subseteq U$. A regular Lindelof space is normal. Here is the countable shrinking argument. For disjoint closed $A,B$, choose countable open covers $(U_{n})$ of $A$ and $(V_{n})$ of $B$ such that $\\operatorname{cl}(U_{n})$ misses $B$ and $\\operatorname{cl}(V_{n})$ misses $A$. Then

$U=\\bigcup_{n} (U_{n} \\setminus\\bigcup_{i\\le n} \\operatorname{cl}(V_{i}))$

and

$V=\\bigcup_{n} (V_{n} \\setminus\\bigcup_{i\\le n} \\operatorname{cl}(U_{i}))$

are open neighborhoods of $A$ and $B$. They are disjoint: if a point came from the $n$th term of $U$ and the $m$th term of $V$, then $n\\le m$ makes the $V$ term exclude $\\operatorname{cl}(U_{n})$, while $m\\le n$ makes the $U$ term exclude $\\operatorname{cl}(V_{m})$. Thus the Sorgenfrey line is normal as well.

The product $S \\times S$, the **Sorgenfrey plane**, changes the covering picture. The anti-diagonal

$D=\\{(x,-x):x \\in \\mathbb{R}\\}$

is closed, because if $u+v\\ne 0$, a sufficiently small lower-limit rectangle about $(u,v)$ stays on one side of the ordinary line $s+t=0$. It is discrete: $[x,x+\\varepsilon) \\times [-x,-x+\\varepsilon)$ meets $D$ only at $(x,-x)$. Thus $D$ is an uncountable closed discrete subspace. If the plane were Lindelof, its closed subspace $D$ would be Lindelof; but the singleton cover of an uncountable discrete space has no countable subcover. Therefore $S \\times S$ is not Lindelof.

The plane is not normal either. A counting argument gives a clean proof. The plane is separable because $\\mathbb{Q} \\times \\mathbb{Q}$ meets every nonempty basic rectangle. We use this lemma: if a normal space $X$ has a dense set $E$ and a closed discrete subspace $D$, then

$2^{|D|} \\le 2^{|E|}$.

Indeed, for every subset $A$ of $D$, normality separates the disjoint closed sets $A$ and $D\\setminus A$. Choose an open $U_{A}$ with $A \\subseteq U_{A}$ and $\\operatorname{cl}(U_{A}) \\cap (D\\setminus A)=\\varnothing$. The assignment $A \\mapsto U_{A} \\cap E$ is injective. If, say, $x \\in A\\setminus B$, then $x \\in U_{A}\\setminus \\operatorname{cl}(U_{B})$; this is a nonempty open set and therefore contains a point of the dense set $E$, so $U_{A} \\cap E$ differs from $U_{B} \\cap E$.

Apply the lemma with countable $E=\\mathbb{Q} \\times \\mathbb{Q}$ and with the anti-diagonal $D$, whose cardinality is $\\mathfrak c=2^{\\aleph_{0}}$. Normality would imply $2^{\\mathfrak c} \\le 2^{\\aleph_{0}}=\\mathfrak c$, contradicting Cantor's theorem $2^{\\mathfrak c}>\\mathfrak c$. Therefore the Sorgenfrey plane is not normal.

The factors are Lindelof and Hausdorff, while their square is neither Lindelof nor normal. The example blocks two common transfers: finite products do not preserve Lindelofness, and a product of well-separated spaces need not be normal.

## 5. Ordinal spaces: countable tests can miss the endpoint

Let $\\omega_{1}$ be the first uncountable ordinal, and give ordinal intervals their order topology. Every countable subset of $\\omega_{1}$ has a countable supremum strictly below $\\omega_{1}$. That one fact drives most of the examples.

The space $[0,\\omega_{1})$ is first-countable. Successor ordinals and $0$ are isolated on the appropriate side. At a nonzero limit ordinal $\\alpha<\\omega_{1}$, the ordinal $\\alpha$ is countable, so there is an increasing sequence cofinal in $\\alpha$; the resulting intervals form a countable local base. The space is Hausdorff and locally compact because each point has a neighborhood with closure in some compact ordinal interval $[0,\\beta]$.

It is countably compact. Enumerate a countable open cover as $U_{1},U_{2},...$. If no finite subfamily covers, choose $x_{n}$ outside $U_{1} \\cup ... \\cup U_{n}$. The chosen countable set is bounded by some $\\beta<\\omega_{1}$. Compactness of $[0,\\beta]$ gives a finite subfamily of the original cover that covers this initial segment. If $N$ is at least every index in that finite subfamily, then $x_{N}$ belongs to $[0,\\beta]$ but lies outside all those cover members, a contradiction. Equivalently, every countably infinite subset has a limit point below its supremum.

It is not compact. The open sets $[0,\\alpha)$ for $\\alpha<\\omega_{1}$ cover $[0,\\omega_{1})$ but no finite subfamily does: a finite union is contained in $[0,\\beta)$ for the largest index $\\beta$. Consequently it is not Lindelof either, because a countable subfamily is bounded below some countable supremum and still fails to cover. Nor is it separable: every countable subset is bounded, and the open tail above that bound misses it.

Adjoining the endpoint produces $[0,\\omega_{1}]$, a compact Hausdorff space. Compactness follows from the usual least-uncovered-point proof for ordinal intervals: if an open cover has no finite subcover, the set of points whose initial segments have finite subcovers has a least failure, and the openness of a cover member at that failure contradicts minimality. The endpoint $\\omega_{1}$ is not first-countable. Given countably many neighborhoods of it, choose a tail $(\\alpha_{n},\\omega_{1}]$ inside each and let $\\alpha=\\sup_{n} \\alpha_{n}<\\omega_{1}$; the neighborhood $(\\alpha+1,\\omega_{1}]$ contains none of those tails as a subset, so the proposed family is not a local base.

Sequences also miss the endpoint. Every sequence in $[0,\\omega_{1})$ has countable range and hence is bounded below some $\\beta<\\omega_{1}$; the tail $(\\beta,\\omega_{1}]$ prevents convergence to $\\omega_{1}$. Yet $\\omega_{1}$ lies in the closure of $[0,\\omega_{1})$. Therefore $[0,\\omega_{1}]$ is compact Hausdorff but not sequential: closure cannot be characterized solely by sequences. Nets indexed by the countable ordinals recover the missing convergence.

## 6. The long ray and long line: local coordinates do not control global length

Define the **closed long ray** $L_+$ as $\\omega_{1} \\times [0,1)$ in lexicographic order, with the order topology. Its first point is $(0,0)$. Every other point has an interval neighborhood locally homeomorphic to an ordinary real interval; the first point has a half-interval neighborhood. Each ordinal coordinate is countable, so cofinal sequences in countable limit ordinals provide countable local bases. Thus $L_+$ is Hausdorff, first-countable, and locally Euclidean away from its endpoint.

It is not separable. A countable subset uses only countably many ordinal coordinates, whose supremum is some $\\alpha<\\omega_{1}$; an open interval farther along the ray misses the subset. It is therefore not second-countable, since every second-countable space is separable after choosing one point from each nonempty basis member. It is not Lindelof: the increasing initial open sets indexed by countable ordinals cover it, while any countable selection remains bounded in the ordinal coordinate.

The **long line** is obtained by joining two copies of the closed long ray at their first points and ordering one copy to the left and the other to the right. It has no endpoint and is locally homeomorphic to $\\mathbb{R}$ at every point. Orientation matters when using this example. The full long line has two long directions and admits the homeomorphism that exchanges them. A closed long ray has a distinguished boundary point: removing that point from a sufficiently small connected neighborhood leaves one component, whereas removing an interior point of a line-like neighborhood leaves two. So one should not transfer an endpoint statement from the ray to the line, or silently call both constructions "the long line."

The lesson is exact: first countability and Euclidean local charts do not imply second countability. The global countability requirement in the usual definition of a manifold is independent of its local Euclidean requirement.

## 7. Connectedness, paths, and local connectedness

The **topologist's sine curve** is the subspace of $\\mathbb{R}^{2}$

$T=\\{(x,\\sin(1/x)):0<x\\le 1\\} \\cup (\\{0\\} \\times [-1,1])$.

The graph part is the continuous image of the connected interval $(0,1]$, hence connected. Its closure is exactly $T$, and the closure of a connected set is connected. The set is also compact because it is closed and bounded in $\\mathbb{R}^{2}$.

It is not path-connected. Suppose a path joins a point of the vertical segment to a point of the graph. Look at the component $I$ of the parameter set on which the path's first coordinate is positive and which contains the graph endpoint. This component has a left endpoint $a$, where the first coordinate is zero. Fix a later parameter in $I$. By the intermediate value theorem, the first coordinate takes the values

$u_{n}=1/(\\pi/2+2\\pi n)$ and $v_{n}=1/(3\\pi/2+2\\pi n)$

before that fixed parameter. The first hitting times of these values tend to $a$: outside any parameter interval about $a$, the positive coordinate has a positive minimum on the relevant compact subinterval. On the graph, the corresponding second coordinates are $1$ and $-1$. Continuity at $a$ cannot accommodate both subsequences. Thus no path crosses from the vertical segment to the graph. Each part is path-connected on its own, so these are the two path components. The same oscillation shows failure of local connectedness along the vertical segment.

The **comb space** is

$C=([0,1] \\times \\{0\\}) \\cup (\\{0\\} \\times [0,1]) \\cup \\bigcup_{n\\ge 1}(\\{1/n\\} \\times [0,1])$.

It is compact as a closed bounded subset of $\\mathbb{R}^{2}$. It is path-connected: descend any tooth to the base, move along the base, then ascend another tooth; points on the limiting vertical segment use that segment before following the base. Yet it is not locally connected at $(0,y)$ for $0<y\\le 1$. Choose a small Euclidean rectangle $R$ around $(0,y)$ that does not meet the base. The projection of $R \\cap C$ onto the first coordinate lies in $\\{0\\} \\cup \\{1/n:n\\ge 1\\}$, whose connected components are singletons. Therefore every connected subset of $R \\cap C$ containing $(0,y)$ stays on the limiting tooth. But every neighborhood of $(0,y)$ that is open in $C$ meets infinitely many other teeth. It follows that no connected open neighborhood of the point lies inside $R \\cap C$. Path-connectedness therefore does not imply local connectedness or local path-connectedness.

These spaces break different arrows. The sine curve keeps connectedness while losing paths between its two pieces. The comb has global paths but loses connected neighborhoods near its limiting tooth. A picture suggests both claims, but the proofs use different invariants: oscillating function values for the sine curve and unavoidable separated teeth for the comb.

## 8. The sequential fan: sequential does not mean first-countable

Let

$F=\\{\\infty\\} \\cup \\{(n,m):n,m \\in \\mathbb{N}, n,m\\ge 1\\}$.

Every $(n,m)$ is isolated. A neighborhood of $\\infty$ contains $\\infty$ and, for each fixed $n$, all but finitely many points $(n,m)$ on the $n$th spoke. Equivalently, for each function $f:\\mathbb{N}\\to\\mathbb{N}$, set

$U_{f}=\\{\\infty\\} \\cup \\{(n,m):m\\ge f(n)\\}$;

the sets $U_{f}$ form a local base at $\\infty$. This is the **sequential fan**, obtainable by identifying the limit points of countably many convergent sequences.

The fan is Hausdorff. Two isolated points are separated by singletons. To separate $(n,m)$ from $\\infty$, use the singleton and a neighborhood whose threshold on spoke $n$ is greater than $m$. It is not first-countable. Given any proposed countable local base $U_{f_{1}},U_{f_{2}},...$, define $g(k)=f_{k}(k)+1$. Then $U_{f_{k}}$ is not contained in $U_{g}$, because $(k,f_{k}(k))$ lies in the former but not the latter. No listed neighborhood refines $U_{g}$.

Nevertheless sequences detect closure. If $\\infty \\in \\operatorname{cl}(A)$ and $A$ contains no infinity, then some spoke meets $A$ infinitely often. Otherwise every spoke intersection would be finite, and one could choose a threshold beyond all its points to obtain a neighborhood of $\\infty$ disjoint from $A$. An increasing sequence of second coordinates from that infinite spoke converges to $\\infty$. Thus every closure point is the limit of a sequence from the set: the fan is Frechet--Urysohn, hence sequential, but not first-countable.

The example repairs a common overstatement. First countability is sufficient for sequence detection, not necessary. The ordinal endpoint gave the opposite warning: even compact Hausdorff spaces can have closure points that no sequence detects.

## 9. The line with two origins: local models do not force Hausdorff gluing

Take two copies $\\mathbb{R}_{a}$ and $\\mathbb{R}_{b}$ of the real line and identify $x_{a}$ with $x_{b}$ for every $x\\ne 0$, leaving $0_{a}$ and $0_{b}$ distinct. Give the quotient $L_{2}$ the quotient topology. Away from the origins, the quotient has ordinary interval neighborhoods. Each origin also has a neighborhood homeomorphic to an interval: the image of a small interval in its own copy, with the shared punctured points included. Hence every point has a Euclidean local model.

The space is $T_{1}$. A non-origin singleton has closed preimage consisting of the corresponding point in both copies, and an origin singleton has a one-point closed preimage; by direct inspection their quotient complements are open. But $L_{2}$ is not Hausdorff. Every neighborhood of $0_{a}$ contains shared positive and negative points sufficiently near zero, and the same is true at $0_{b}$; therefore any two such neighborhoods intersect.

The quotient map also diagnoses the failure. The equivalence relation in $(\\mathbb{R}_{a}\\sqcup\\mathbb{R}_{b})^{2}$ is not closed: pairs $(x_{a},x_{b})$ with $x\\ne 0$ are equivalent and converge toward $(0_{a},0_{b})$, whose entries are not equivalent. For quotients of Hausdorff spaces, failure of the relation to be closed is a standard warning that the quotient may not be Hausdorff.

Thus being locally homeomorphic to a Hausdorff space does not make the whole space Hausdorff. Hausdorffness is a global compatibility condition on how the local pieces overlap.

## 10. Infinite-dimensional balls: closed and bounded is not compact

In $\\mathbb{R}^n$, Heine--Borel says that closed bounded subsets are compact. The dimension hypothesis cannot be discarded. In the Hilbert space $\\ell^{2}$, let $e_{n}$ be the sequence with $1$ in coordinate $n$ and $0$ elsewhere. Every $e_{n}$ lies in the closed unit ball, while

$\\lVert e_{n}-e_{m}\\rVert=\\sqrt{2}$ for $n\\ne m$.

No subsequence is Cauchy, hence no subsequence converges. Since compact metric spaces are sequentially compact, the closed unit ball of $\\ell^{2}$ is not compact.

The same conclusion holds in every infinite-dimensional normed space. Riesz's lemma says that if $M$ is a proper closed subspace and $0<\\alpha<1$, there is a unit vector whose distance from $M$ exceeds $\\alpha$. Starting with one unit vector and repeatedly applying the lemma to the finite-dimensional span of the vectors already chosen produces a sequence $(x_{n})$ in the unit sphere with $\\lVert x_{n}-x_{m}\\rVert>\\alpha$ for $m<n$. This separated sequence has no convergent subsequence, so the closed unit ball is not compact.

There is also no local compactness. If an infinite-dimensional normed space had a compact neighborhood of $0$, that neighborhood would contain some open ball. Scaling its compact closure would make the closed unit ball compact, contradicting the separated-sequence argument. Closedness plus boundedness and local Euclidean intuition are both finite-dimensional phenomena here.

## 11. A counterexample selection protocol

When confronted with an implication $P \\implies \\mathbb{Q}$, choose the smallest space that makes the obstruction visible.

1. For a low separation failure, try a two-point or point topology.
2. For compactness without separation, try the cofinite or excluded-point topology.
3. For a product failure involving countability, try the Sorgenfrey plane.
4. For a sequence-versus-net failure, try $[0,\\omega_{1}]$; for the converse distinction between sequential and first-countable, try the fan.
5. For connected, path-connected, and locally connected distinctions, choose the sine curve or comb according to the arrow being tested.
6. For local-to-global separation, use the line with two origins; for local-to-global countability, use a long line construction.
7. For a finite-dimensional compactness statement, test the unit vectors in an infinite-dimensional normed space.

Then write the disproof in four sentences: define the space and topology; prove $P$; state a concrete witness against $\\mathbb{Q}$; name the missing hypothesis in the theorem that looked plausible. This format prevents an example's reputation from standing in for an argument.

## Worked examples: selecting the right obstruction

### Worked example 1 — A convergent sequence with every possible limit

Give $\\mathbb N$ the cofinite topology and consider $x_n=n$. For any proposed limit $k$ and any neighborhood $U$ of $k$, only finitely many natural numbers lie outside $U$. Beyond their largest index every term belongs to $U$. Thus the sequence converges to every natural number.

The space is compact and $T_1$, as proved above. The failure is therefore not compactness or closure of individual points. It is Hausdorffness, which is the hypothesis in the uniqueness-of-limits theorem. This calculation also prevents a common converse error: a space in which one particular sequence has a unique limit need not be Hausdorff. The example proves failure by exhibiting multiple limits; it does not characterize all non-Hausdorff spaces by one chosen sequence.

### Worked example 2 — Closure without a sequence from the set

In $X=[0,\\omega_1]$, let $A=[0,\\omega_1)$. Every neighborhood of the endpoint contains an order tail, so it meets $A$ and $\\omega_1\\in\\overline A$. Now take any sequence $(a_n)$ in $A$. Its countable range has countable supremum $\\beta<\\omega_1$. The neighborhood $(\\beta,\\omega_1]$ contains none of its terms. Thus no such sequence converges to $\\omega_1$.

There is nevertheless a convergent net: index the countable ordinals by their own directed order and use $a_\\alpha=\\alpha$. Every endpoint neighborhood contains a final tail of this net. The failure is specifically the replacement of all directed approximation by countable sequential approximation. Compactness and Hausdorffness survive; first countability and sequentiality do not.

The family $A$ is itself sequentially closed. A sequence in $A$ stays inside some compact closed interval $[0,\\beta]$, so any limit in $X$ still lies in that interval. Hence this example proves nonsequentiality, not merely failure of first countability.

### Worked example 3 — A compact connected set that is not a path

For the closed topologist's sine curve $T$, the graph over $(0,1]$ is connected, and its closure is $T$. Therefore $T$ is connected. Closedness and boundedness in the plane make it compact. These are positive verifications, not just absence of a visible separation.

A path from the vertical segment to the graph would have a parameter interval on which its first coordinate is positive and approaches zero at an endpoint. The intermediate value theorem forces that coordinate through values at which the second coordinate alternates between one and minus one, arbitrarily close to the same parameter endpoint. Continuity of the second coordinate is impossible. Consequently the vertical segment and graph are separate path components.

The diagnosis is connectedness without path connectedness. It does not contradict the theorem that connected, locally path-connected spaces are path connected: the local hypothesis fails along the limiting segment. It also does not say that every compact connected plane set has exactly two path components; the two-component conclusion comes from this particular construction.

## Using the atlas in a proof

A good counterexample search begins with the conclusion one needs to break. To break uniqueness of a limit, inspect separation. To break a countable selection argument, inspect ordinal cofinality or the diagonal neighborhoods of the fan. To break a finite-subcover conclusion in a metric space, distinguish missing Cauchy limits from failure of finite nets. To break a path assertion while retaining connectedness, inspect a closure construction with oscillation or accumulating teeth.

The topology is part of every answer. The underlying real set can carry the Euclidean, lower-limit, discrete, or cofinite topology, and each choice changes which theorem applies. The topology on a product or quotient is equally substantive. The Sorgenfrey anti-diagonal is discrete in the lower-limit product although it is an ordinary Euclidean line in another topology.

Several constructions in the retained [capstone counterexample projects](topology-proof-atlas-and-capstones.md) ask for longer synthesis. Their original task identities remain available there; the full twenty questions now have linked current chapter homes, and the complete construction dossier is integrated below with a worked model. When moving from a dossier to a project, preserve the exact hypothesis ledger rather than collecting unqualified adjectives such as “bad” or “pathological.”

## Exercises with complete solutions

### TOP-CH21-E001 — Exercise 1
Let $P=\\{a<b<c\\}$ carry the upward-set topology. List its open sets, prove it is $T_{0}$, and show it is not $T_{1}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Upward sets contain every larger element.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

List the terminal segments; a singleton at a nonminimal point need not be closed.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E001 — Solution 1
The upward sets are $\\varnothing$, $\\{c\\}$, $\\{b,c\\}$, and $P$. For any two distinct points, the minimal neighborhood of the larger point contains it but not the smaller, so the space is $T_{0}$. It is not $T_{1}$ because, for example, $\\{c\\}$ is not closed: its complement $\\{a,b\\}$ is not upward and hence not open. Equivalently, the comparable distinct points prevent the topology from being discrete, while a finite Alexandrov poset space is $T_{1}$ only for an antichain.


</details>

### TOP-CH21-E002 — Exercise 2
For a space $X$ and $U \\subseteq X$, prove that $\\chi_{U}:X\\to S$ into the Sierpinski space, with value $1$ on $U$, is continuous exactly when $U$ is open.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

There is only one nontrivial open set to test.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its inverse image is exactly U.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E002 — Solution 2
The only inverse image that can impose a condition is $\\chi_{U}^{-1}(\\{1\\})=U$, because the other opens of $S$ are $\\varnothing$ and $S$, whose inverse images are automatically open. Therefore continuity is equivalent to openness of $U$.


</details>

### TOP-CH21-E003 — Exercise 3
Prove that every sequence of pairwise distinct points in an infinite cofinite space converges to every point.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A neighborhood omits finitely many values.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Pairwise distinct sequence terms enter that finite exceptional set only finitely often.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E003 — Solution 3
Fix $x$ and a neighborhood $V$ of $x$. Its complement is finite. Since the terms are pairwise distinct, only finitely many terms can lie in that finite complement. All remaining terms lie in $V$, so the sequence converges to $x$. As $x$ was arbitrary, every point is a limit; in particular the space cannot be Hausdorff.


</details>

### TOP-CH21-E004 — Exercise 4
On an infinite set $X$ with distinguished point $p$, compare compactness of the included-point and excluded-point topologies.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For included-point topology use the two-point opens.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For excluded-point topology any cover member containing the distinguished point is the whole space.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E004 — Solution 4
In the included-point topology, $\\{\\{p,x\\}:x\\ne p\\}$ is an open cover. Any finite subfamily covers only $p$ and finitely many other points, so the space is not compact. In the excluded-point topology, the only open set containing $p$ is $X$. Every open cover must therefore contain $X$, which by itself is a finite subcover. Hence the excluded-point topology is compact.


</details>

### TOP-CH21-E005 — Exercise 5
Prove that every basic interval $[a,b)$ in the Sorgenfrey line is clopen.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute the complement.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Write both complementary rays as unions of lower-limit basis intervals.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E005 — Solution 5
It is open by definition. Its complement is $(-\\infty,a) \\cup [b,\\infty)$. The first set is the union of all basic intervals $[x,a)$ with $x<a$, and the second is the union of $[b,b+n)$ over positive integers $n$. Thus the complement is open, so $[a,b)$ is closed as well.


</details>

### TOP-CH21-E006 — Exercise 6
Prove directly that the Sorgenfrey line is not second-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose a basis member inside each $[x,x+1)$.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Different left endpoints force different chosen basis members.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E006 — Solution 6
Suppose $B$ is a countable basis. For each real $x$, choose $B_{x} \\in B$ with $x \\in B_{x} \\subseteq [x,x+1)$. If $x<y$, then $x \\notin B_{y}$ but $x \\in B_{x}$, so $B_{x}\\ne B_{y}$. The assignment $x \\mapsto B_{x}$ injects the uncountable set $\\mathbb{R}$ into the countable set $B$, a contradiction.


</details>

### TOP-CH21-E007 — Exercise 7
Show that the anti-diagonal $D=\\{(x,-x):x \\in \\mathbb{R}\\}$ is a closed discrete subspace of the Sorgenfrey plane.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

At a point off the anti-diagonal control the coordinate sum.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

On the anti-diagonal a lower-limit rectangle forces both opposite inequalities, hence equality.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E007 — Solution 7
For $(u,v)$ off $D$, $u+v$ is nonzero. If it is positive, choose $\\varepsilon<(u+v)/2$; every $(s,t)$ in $[u,u+\\varepsilon) \\times [v,v+\\varepsilon)$ still has $s+t>0$. If it is negative, choose $\\varepsilon<-(u+v)/2$; then every point of the rectangle has $s+t<0$ after possibly taking a smaller epsilon that controls the increase by $2\\varepsilon$. Thus the complement of $D$ is open. At $(x,-x)$, the rectangle $[x,x+\\varepsilon) \\times [-x,-x+\\varepsilon)$ meets $D$ only there: a second anti-diagonal point would require simultaneously $y\\ge x$ and $-y\\ge-x$, hence $y=x$. So $D$ is discrete.


</details>

### TOP-CH21-E008 — Exercise 8
Deduce that the Sorgenfrey plane is not Lindelof.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use heredity to closed subspaces.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An uncountable closed discrete subspace has a singleton cover with no countable subcover.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E008 — Solution 8
Lindelofness passes to closed subspaces: extend a cover of a closed subspace by adding its open complement. By Exercise 7, the plane contains the uncountable closed discrete subspace $D$. The cover of $D$ by its singleton sets has no countable subcover. Thus $D$, and hence the plane, is not Lindelof.


</details>

### TOP-CH21-E009 — Exercise 9
Show that every countable subset of $[0,\\omega_{1})$ is bounded and use this to prove the space is not separable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take the supremum of the countable ordinal set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

That supremum is still below the first uncountable ordinal, leaving an open tail.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E009 — Solution 9
If $A$ is countable, $\\sup A$ is the supremum of countably many countable ordinals, so it is a countable ordinal $\\beta<\\omega_{1}$. Hence $A \\subseteq [0,\\beta]$. The nonempty open tail $(\\beta,\\omega_{1})$ misses $A$, so $A$ is not dense. Since no countable set is dense, the space is not separable.


</details>

### TOP-CH21-E010 — Exercise 10
Prove no sequence in $[0,\\omega_{1})$ converges to $\\omega_{1}$ in $[0,\\omega_{1}]$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The sequence has countable range.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its supremum bounds every term away from the endpoint.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E010 — Solution 10
For a sequence $(\\alpha_{n})$, the ordinal $\\beta=\\sup_{n} \\alpha_{n}$ is countable and therefore below $\\omega_{1}$. The open neighborhood $(\\beta,\\omega_{1}]$ of $\\omega_{1}$ contains none of the sequence terms. The sequence cannot converge to $\\omega_{1}$.


</details>

### TOP-CH21-E011 — Exercise 11
Prove that $\\omega_{1}$ has no countable local base in $[0,\\omega_{1}]$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Put a tail inside each proposed basic neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The countable supremum of their starting ordinals permits a strictly smaller endpoint neighborhood.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E011 — Solution 11
Suppose $(U_{n})$ were a local base. For each $n$, choose $\\alpha_{n}<\\omega_{1}$ with $(\\alpha_{n},\\omega_{1}] \\subseteq U_{n}$. Put $\\alpha=\\sup_{n} \\alpha_{n}<\\omega_{1}$. The neighborhood $(\\alpha+1,\\omega_{1}]$ would have to contain some $U_{n}$. But $U_{n}$ contains $(\\alpha_{n},\\omega_{1}]$, including an ordinal at most $\\alpha+1$ and greater than $\\alpha_{n}$, so it cannot be contained in $(\\alpha+1,\\omega_{1}]$. This contradiction proves the claim.


</details>

### TOP-CH21-E012 — Exercise 12
Why does a countable subset of the closed long ray fail to be dense?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Project onto the ordinal coordinates.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their countable supremum leaves an entire later open interval unvisited.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E012 — Solution 12
Project the subset to its countable set of ordinal coordinates. Their supremum is a countable ordinal $\\alpha<\\omega_{1}$. Every point of the subset lies before some point whose ordinal coordinate is greater than $\\alpha$. A nonempty order interval entirely beyond that point misses the subset, so the subset is not dense.


</details>

### TOP-CH21-E013 — Exercise 13
Prove that removing the endpoint from a sufficiently small neighborhood in the closed long ray leaves one component, whereas removing any point from a small interval neighborhood in the long line leaves two.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the local interval models.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Deleting a half-interval endpoint leaves one component; deleting an interval interior point leaves two.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E013 — Solution 13
At the first point of the closed long ray, choose an initial half-interval $[0,b)$ in local coordinates. Removing its endpoint leaves $(0,b)$, an interval and hence connected. At any point of the endpoint-free long line, choose an order interval $(a,b)$ around it. Removing the center $x$ produces the disjoint nonempty relatively open intervals $(a,x)$ and $(x,b)$, which are its two components. This local invariant prevents a homeomorphism from sending the ray endpoint to a line point.


</details>

### TOP-CH21-E014 — Exercise 14
Prove that the topologist's sine curve is connected.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Begin with the graph over the positive interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It is connected, and the whole space is its closure.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E014 — Solution 14
The graph $G=\\{(x,\\sin(1/x)):0<x\\le 1\\}$ is the continuous image of the connected interval $(0,1]$, so $G$ is connected. Every point $(0,y)$ with $-1\\le y\\le 1$ is a limit of graph points: choose positive $x_{n}\\to 0$ with $\\sin(1/x_{n})\\to y$. Hence the sine curve is $\\operatorname{cl}(G)$. The closure of a connected set is connected, so the whole curve is connected.


</details>

### TOP-CH21-E015 — Exercise 15
Determine the path components of the topologist's sine curve.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Each of the two visible pieces is path connected.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A crossing path would force alternating second-coordinate values as its first coordinate approaches zero.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E015 — Solution 15
The graph is path-connected because it is a continuous injective parametrized curve over the interval $(0,1]$; the vertical segment is path-connected as an interval. No path joins them. If one did, on the last parameter interval before reaching the graph its positive first coordinate would approach zero. By the intermediate value theorem it would take arbitrarily small values at which $\\sin(1/x)=1$ and also values at which $\\sin(1/x)=-1$, with the corresponding parameter values approaching the same endpoint. The second coordinate would then have two different limiting values, contradicting continuity. Thus the graph and vertical segment are exactly the two path components.


</details>

### TOP-CH21-E016 — Exercise 16
Construct a path in the comb space between arbitrary points and explain why this does not prove local path-connectedness.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Travel down to the base and then along it.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A small rectangle high above the base excludes every connecting route between neighboring teeth.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E016 — Solution 16
From a point on a tooth $\\{1/n\\} \\times [0,1]$, move vertically to $(1/n,0)$; from a point on the limiting tooth, move vertically to $(0,0)$. Travel along the base $[0,1] \\times \\{0\\}$, then ascend to the target. Concatenating these line segments gives a path. But near $(0,y)$ with $y>0$, take a rectangle not reaching the base. Its intersection with the comb has separate vertical pieces at $0$ and at infinitely many $1/n$; paths between them would have to descend to the excluded base. Hence no sufficiently small open neighborhood is path-connected.


</details>

### TOP-CH21-E017 — Exercise 17
Prove that the sequential fan is not first-countable at $\\infty$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Diagonalize across the proposed neighborhood functions.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

At spoke k require one later point than the kth proposed basic neighborhood allows.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E017 — Solution 17
Suppose the neighborhoods $U_{f_{k}}$ formed a countable local base. Define $g(k)=f_{k}(k)+1$. The set $U_{g}$ is a neighborhood of $\\infty$. For each $k$, the point $(k,f_{k}(k))$ belongs to $U_{f_{k}}$ but not to $U_{g}$. Hence no $U_{f_{k}}$ is contained in $U_{g}$, contradicting the local-base property.


</details>

### TOP-CH21-E018 — Exercise 18
Prove that if $\\infty \\in \\operatorname{cl}(A)$ in the sequential fan, then a sequence from $A$ converges to $\\infty$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Assume each spoke contributes only finitely many points.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a separate cutoff on each spoke to make a neighborhood disjoint from the set.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E018 — Solution 18
Assume $\\infty \\notin A$, since otherwise the constant sequence works. If every spoke met $A$ only finitely, choose $f(n)$ larger than every second coordinate appearing in $A$ on spoke $n$. Then $U_{f}$ would be a neighborhood of $\\infty$ disjoint from $A$, contradicting closure. Thus some spoke contains points $(n,m_{j}) \\in A$ with $m_{j}$ strictly increasing. Every neighborhood of $\\infty$ contains all sufficiently far points on that spoke, so this sequence converges to $\\infty$.


</details>

### TOP-CH21-E019 — Exercise 19
In the line with two origins, prove that the two origins cannot be separated by disjoint open neighborhoods.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Lift neighborhoods to the two copies of the line.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both lifts contain short nonzero intervals whose images overlap.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E019 — Solution 19
The inverse image of a neighborhood of $0_{a}$ contains an ordinary interval about zero in copy $a$; after quotienting, it therefore contains all shared nonzero points with sufficiently small absolute value. The same holds for a neighborhood of $0_{b}$. Choosing a nonzero real number smaller in absolute value than both radii gives a shared point in both neighborhoods. Thus the origins have no disjoint neighborhoods and the space is not Hausdorff.


</details>

### TOP-CH21-E020 — Exercise 20
Let $E$ be an infinite-dimensional normed space. Assuming Riesz's lemma, prove its closed unit ball is not compact and deduce that $E$ is not locally compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Inductively stay away from the finite-dimensional span.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Riesz's lemma yields uniformly separated unit vectors; a compact neighborhood would contain a smaller closed ball.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH21-E020 — Solution 20
Fix $0<\\alpha<1$. Choose unit vectors inductively. After choosing $x_{1},...,x_{n}$, their span is finite-dimensional and therefore closed and proper. Riesz's lemma supplies a unit vector $x_{n+1}$ at distance greater than $\\alpha$ from that span. In particular $\\lVert x_{n+1}-x_{j}\\rVert>\\alpha$ for every $j\\le n$. The resulting sequence in the closed unit ball has no Cauchy, hence no convergent, subsequence. A compact metric space is sequentially compact, so the ball is not compact. If $E$ had a compact neighborhood $K$ of zero, some radius $r>0$ would satisfy $B_{r}(0) \\subseteq K$. The closed ball of a smaller radius would be a closed subset of $K$, hence compact; scaling it would make the closed unit ball compact, a contradiction. Therefore $E$ is not locally compact.


</details>

## Sources

The constructions are proved directly above. Related dependencies are [Countability, Separability and Lindelof Properties](countability-separability-and-lindelof-properties.md), [Uniform Spaces, Completion and Total Boundedness](uniform-spaces-completion-and-total-boundedness.md), and the retained capstone construction resource.

## Chapter checkpoint

Counterexamples form a map of hypotheses. Finite and point topologies separate compactness from separation; the Sorgenfrey plane blocks optimistic product rules; ordinal and fan spaces show exactly where sequences and countable bases diverge; long spaces split local geometry from global countability; the sine curve and comb distinguish three notions of connectedness; the doubled origin exposes bad gluing; and infinite-dimensional unit vectors mark the boundary of Heine--Borel. The durable method is always the same: state the topology, verify the premise, exhibit the obstruction, and name the missing hypothesis.

A counterexample refutes a specific implication only after its premises and its failed conclusion have both been proved. Its topology, cardinality conditions, and relative-versus-ambient conventions belong in that proof.

## Transferred capstone 6 {#topology-transferred-e006}

Original question identity: [TOP-CH22-E006](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Show directly that the indiscrete two-point space has nonunique net limits and a compact subset that is not closed.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

List the neighborhoods in the indiscrete topology.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use a singleton subset for the compact-but-not-closed claim and a constant net for limits.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $X=\\{0,1\\}$ with topology $\\{\\varnothing,X\\}$. Every open cover of any subset is finite after removing repetitions, so every subset is compact; in particular $\\{0\\}$ is compact. It is not closed because its complement $\\{1\\}$ is not open. For any net $(x_{d})$ and either proposed limit $a \\in X$, the only neighborhood of $a$ is $X$. The net is always in $X$, hence eventually in every neighborhood of $a$. Thus every net converges to both $0$ and $1$, and limits are not unique.

</details>

## Transferred capstone 11 {#topology-transferred-e011}

Original question identity: [TOP-CH22-E011](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Let $X=\\mathbb{R} \\times \\{0,1\\}$ and identify $(x,0)$ with $(x,1)$ whenever $x\\ne 0$. Prove that the resulting line with two origins is not Hausdorff.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull neighborhoods of the two distinct origins back to the two copies of the real line.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every such pair contains nonzero coordinates close enough to zero that are identified in the quotient.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $q:X\\to L$ be the quotient and let $o_{0}=q(0,0)$, $o_{1}=q(0,1)$. These points are distinct. Suppose $U_{0},U_{1}$ were disjoint open neighborhoods of them. Then $q^{-1}(U_{i})$ is open and contains $(0,i)$, so for some $\\varepsilon_{i}>0$ it contains $(-\\varepsilon_{i},\\varepsilon_{i}) \\times \\{i\\}$. Choose nonzero $x$ with $|x|<\\min(\\varepsilon_{0},\\varepsilon_{1})$. The points $(x,0)$ and $(x,1)$ are equivalent, so their common image belongs to both $U_{0}$ and $U_{1}$, contradicting disjointness. Thus the two origins cannot be separated and $L$ is not Hausdorff.

</details>

## Proof-and-construction dossier {#topology-current-dossier}

Original project identity: [TOP-CH22-P001](topology-proof-atlas-and-capstones.md). The complete retained assignment follows, with a worked model after it.

This is the chapter's one major capstone. Choose one of the following focal constructions:

- a quotient model of a circle, torus, projective space, or finite graph;
- a covering of a graph or a familiar manifold;
- a one-point compactification of a noncompact locally compact Hausdorff space;
- a completion of a concrete metric space;
- a compact-open or k-ified mapping-space comparison.

Submit a single dossier with all of the following artifacts.

**1. Typed construction record.** State every underlying set, topology, equivalence relation, metric, base point, and ambient category. Give every canonical map with domain and codomain. If points are equivalence classes, prove representative independence before making topological claims.

**2. Universal-property proof.** State the relevant initial, final, completion, compactification, lifting, or exponential property with quantifiers. Prove it in the chosen example, including uniqueness. If a general theorem is imported, state its hypotheses and verify them one by one.

**3. Theorem dependency ledger.** Present at least six nontrivial claims in a table with columns \`claim\`, \`incoming hypotheses\`, \`earlier result\`, \`mechanism\`, and \`status\`. At least one dependency chain must have three logical steps. Rewrite the chain in prose so the submission remains accessible without reading arrows or a diagram.

**4. Map audit.** Complete the six-line certificate for every map central to the construction. At least one map must require a genuine well-definedness proof, and at least one claimed homeomorphism must be established by more than “continuous and bijective.”

**5. Hypothesis-removal suite.** Select three theorems used in the dossier. For each, delete one hypothesis and give a certified counterexample: verify all retained hypotheses, prove the exact conclusion fails, and identify the proof line that breaks. The three witnesses must use different mechanisms, such as loss of separation, loss of compactness, sequence blindness, bad quotient behavior, or category mismatch.

**6. Invariant comparison.** Compare the focal space with one plausible nonhomeomorphic or nonequivalent space. State and prove preservation of the chosen invariant, compute it on both objects, and explain why a mere picture or cardinality count would not settle the comparison.

**7. Boundary and convention note.** List every convention on which the result depends: whether local compactness includes Hausdorffness, whether homotopies are based, whether products are ordinary or k-ified, and which choice principle is imported if relevant. Label unproved external results explicitly.

**8. Accessible presentation.** If the dossier includes a diagram, model, or computation, include a text or numerical alternative giving the objects, arrows, identifications, and conclusion. A computational sample may check a finite model or illustrate a lift, but the proof status of each output must be labeled as theorem, exact calculation, or experiment.

The dossier passes when an independent reader can reconstruct the object, replay every map and theorem audit, locate each hypothesis at its proof step, and distinguish certified conclusions from pictures or experiments. Decorative complexity earns nothing: one small construction with complete logical control is stronger than several impressive spaces described informally.

### Worked dossier model: the endpoint quotient circle

Let I be the closed unit interval with its usual topology. Identify only its two endpoints and otherwise leave points distinct. Write Y for the quotient set with the quotient topology and q for the surjective quotient map. Let the target circle be the unit circle in the Euclidean plane with its subspace topology. No metric on Y is assumed before proving the comparison. All maps are ordinary continuous maps of unbased topological spaces; no compact-generation convention or lifting theorem is needed.

Define $f(t)=(\\cos(2\\pi t),\\sin(2\\pi t))$. Its endpoint values agree, and no other distinct interval parameters have equal images. Thus it descends to a set map $g:Y\\to S^1$ by the rule $g([t])=f(t)$. Representative independence follows because the only nonsingleton class is the endpoint pair. Surjectivity of q makes g the unique possible map with gq equal to f. This establishes existence, independence and uniqueness separately rather than hiding them under a formula involving brackets.

The map f is continuous by its coordinate functions. By the defining quotient property, continuity of gq proves continuity of g. Circular angle parametrization makes g onto. Equality of two images means the parameters differ by an integer; within the closed unit interval they are equal or are its two endpoints. They therefore define the same quotient class, proving injectivity. The quotient Y is compact as a continuous image under q of the compact interval, and the circle is Hausdorff as a subspace of the Euclidean plane.

For a closed subset A of Y, compactness of Y makes A compact; continuity makes g(A) compact; Hausdorffness of the circle makes g(A) closed. Thus g is closed. Its bijectivity gives an inverse set map, and the closed-image calculation proves that inverse continuous. Hence g is a homeomorphism. This is the required three-step dependency chain, with the stronger compact-to-Hausdorff conclusion justified rather than inferred from continuous bijectivity alone.

| Claim | Incoming hypotheses | Earlier result or mechanism | Status in this model |
| --- | --- | --- | --- |
| The formula descends | Endpoint values agree; all other classes are singletons | Representative independence | Proved explicitly |
| The induced map is unique | q is surjective | Evaluate at a representative | Proved explicitly |
| The induced map is continuous | f is continuous; q has the quotient topology | Final-topology mapping criterion | Proved from the definition |
| It is bijective | Circular parameter values coincide exactly modulo one | Elementary trigonometric parametrization | Proved using the named parameter fact |
| Y is compact | I is compact; q is continuous and onto | Continuous images preserve compactness | Hypotheses verified |
| The inverse is continuous | Y compact; circle Hausdorff; g continuous and bijective | Closed-map dependency chain | Proved explicitly |

The map certificate is now complete for each arrow. The source map q has specified set rule, domain and codomain, is onto and is continuous by the quotient topology, but is not injective. The coordinate map f is continuous and constant on precisely the declared classes. The induced g has a representative-independent rule, verified continuity, proved bijectivity and separately proved inverse continuity. Replacing any of these statements by “the drawing closes the endpoints” would leave a logical obligation unproved.

### Three hypothesis-removal witnesses for the dossier

First remove Hausdorffness of the target from the compact-to-Hausdorff theorem. Let the domain be a discrete two-point space and the target the same set with indiscrete topology. The identity is a continuous bijection and its domain is compact, since the set is finite. The inverse is not continuous: the inverse preimage of a discrete singleton is not open in the indiscrete source. The broken proof line is the claim that a compact target subset must be closed. Indeed a singleton in the indiscrete target is compact but not closed.

Second retain Hausdorffness and continuous bijectivity but remove compactness of the domain. Use the identity from the real set with discrete topology to the ordinary real line. It is continuous because every inverse image is open in a discrete space, and it is bijective with Hausdorff target. Its domain is not compact: the singleton cover has no finite subcover. The inverse is discontinuous because ordinary real singletons are not open. This time the initial assertion that every closed domain subset is compact fails; the mechanisms differ from the finite non-Hausdorff witness.

Third remove fiber constancy from the quotient descent theorem. Keep the same interval quotient q but let the proposed continuous map upstairs be the identity function from the interval into the real line. It takes the two equivalent endpoints to different values. A putative downstairs map would have to take their single common quotient point to both zero and one, impossible. Continuity of the upstairs formula is retained, yet there is not even a well-defined set map downstairs. This is a representative failure, not a difficult inverse-continuity issue.

### A deletion invariant distinguishes the quotient from the interval

A homeomorphism restricts to a homeomorphism after deleting corresponding points, so connectedness of point complements is preserved. Every point complement of the circle is connected. Rotate the deleted point to $(1,0)$ and use the explicit homeomorphism

$$(x,y)\\longmapsto\\frac{y}{1-x},\\qquad
 t\\longmapsto\\left(\\frac{t^2-1}{t^2+1},\\frac{2t}{t^2+1}\\right)$$

between that punctured circle and the real line. Its denominators are nonzero on the stated domains; substitution proves the maps are mutual inverses, and the rational coordinate expressions prove continuity. The real line is connected. Rotations give the same conclusion for every deleted circle point.

Deleting the midpoint from the closed interval instead leaves two nonempty disjoint relatively open pieces, one on either side. Thus the interval has a point with disconnected complement while the circle has none, and they cannot be homeomorphic. Both original spaces are compact and connected, so those coarser properties alone would not have distinguished them. No classification of arbitrary surfaces or computation of a fundamental group is used.

The remaining named inputs are compactness of the closed interval, connectedness of the real line, elementary trigonometric parametrization, the quotient mapping criterion and the compact/Hausdorff lemmas proved earlier in the book. The formulas specify all identifications and arrows without requiring a diagram. The model is one full response to the project; other focal constructions must supply their own universal-property proof, witnesses and invariant, rather than merely replacing the space name in this dossier.
`;export{e as default};