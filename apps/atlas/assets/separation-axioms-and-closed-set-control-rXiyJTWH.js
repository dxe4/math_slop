var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: separation-axioms-and-closed-set-control
title: "Separation Axioms and Closed-Set Control"
level: advanced-undergraduate
estimated_minutes: 250
license: CC BY-SA 4.0
---

# Separation Axioms and Closed-Set Control

Separation axioms measure how much the topology can distinguish points and closed sets. They are not cosmetic labels. Hausdorffness makes limits unique, regularity lets one shrink a neighborhood without losing its center, and normality converts disjoint closed sets into continuous real-valued data. Each step has a characteristic proof pattern and a characteristic failure.

Throughout this chapter, points named in a separation statement are distinct and all neighborhoods are open unless stated otherwise.

## 1. The separation ladder and its conventions

A space $X$ is **$T_{0}$**, or Kolmogorov, if for distinct $x,y$ there is an open set containing one but not the other. Equivalently, distinct points have distinct neighborhood systems. This is the weakest usual demand that topology distinguish points at all.

The space is **$T_{1}$** if for distinct $x,y$ there is an open set containing $x$ but not $y$, and another containing $y$ but not $x$. The following are equivalent:

- $X$ is $T_{1}$;
- every singleton is closed;
- every subset is the intersection of all open sets containing it;
- for every $x$, the intersection of all neighborhoods of $x$ is $\\{x\\}$.

For example, the singleton criterion follows because $X\\setminus \\{y\\}$ must be a neighborhood of every $x\\ne y$. Conversely, if singletons are closed, their complements give the required neighborhoods.

The space is **Hausdorff**, or $T_{2}$, if distinct points have disjoint neighborhoods. Hausdorff implies $T_{1}$: if $x\\ne y$, a neighborhood of $x$ disjoint from a neighborhood of $y$ omits $y$.

Two higher axioms require a convention warning. In this chapter:

- **regular** means that whenever $F$ is closed and $x \\notin F$, there are disjoint open sets containing $x$ and $F$;
- **normal** means that any two disjoint closed sets have disjoint open neighborhoods;
- $T_{3}$ means regular and $T_{1}$;
- $T_{4}$ means normal and $T_{1}$.

Some books include $T_{1}$ in the words “regular” and “normal.” Under that convention, their regular and normal are this chapter's $T_{3}$ and $T_{4}$. Stating the convention prevents false implication diagrams. For instance, an indiscrete space is normal under the raw definition—there are essentially no nontrivial disjoint closed sets—but it need not be $T_{0}$.

With these conventions,

$T_{4} \\implies T_{3} \\implies T_{2} \\implies T_{1} \\implies T_{0}$.

Only the first implication needs comment. In a $T_{1}$ normal space, $\\{x\\}$ is closed, so normality separates a point from a disjoint closed set. A $T_{1}$ regular space is Hausdorff by separating $x$ from the closed singleton $\\{y\\}$.

## 2. Canonical spaces that break the implications

Small and classical examples show that the ladder does not collapse.

On $\\{0,1\\}$, the **Sierpinski topology** $\\{\\varnothing,\\{1\\},\\{0,1\\}\\}$ is $T_{0}$: the open set $\\{1\\}$ distinguishes the points. It is not $T_{1}$ because $\\{1\\}$ is not closed. It is the basic warning that one-sided distinguishability is weaker than closed points.

On an infinite set, the **cofinite topology** consists of $\\varnothing$ and all sets with finite complement. It is $T_{1}$ because singletons are closed. Any two nonempty open sets intersect: the union of their finite complements cannot exhaust an infinite set. Thus it is not Hausdorff.

On an uncountable set, the **cocountable topology** similarly declares $\\varnothing$ and all sets with countable complement open. It is $T_{1}$ and not Hausdorff. Moreover, every convergent sequence is eventually constant. If a sequence is not eventually $x$, choose a subsequence of terms different from $x$; the countable set of those values can be removed while retaining a neighborhood of $x$, contradicting convergence. Consequently, uniqueness of sequential limits does not characterize Hausdorffness in arbitrary spaces.

A standard Hausdorff nonregular example is the **$K$-topology** on $\\mathbb{R}$. Put $K=\\{1/n:n\\ge 1\\}$ and take as a basis all usual open intervals together with sets $(a,b)\\setminus K$. This topology is finer than the usual topology, so it is Hausdorff. The set $K$ is closed: points outside $K$, including $0$, have basic neighborhoods avoiding $K$. Yet $0$ and $K$ cannot have disjoint open neighborhoods. Every neighborhood of $0$ contains $(-\\varepsilon,\\varepsilon)\\setminus K$ for some $\\varepsilon>0$; an open set containing $K$ contains a usual interval around some sufficiently small $1/n$, and that interval meets $(-\\varepsilon,\\varepsilon)\\setminus K$. Hence the space is not regular.

The **line with two origins** is another useful boundary. Take two copies of $\\mathbb{R}$ and identify corresponding nonzero points, leaving the two origins distinct. Singletons are closed, and points away from the origins have ordinary interval neighborhoods. However, every neighborhood of either origin contains common nonzero points near zero, so the two origins cannot have disjoint neighborhoods. The quotient is $T_{1}$ but not Hausdorff, even though it is locally homeomorphic to $\\mathbb{R}$.

These examples diagnose different errors: $T_{0}$ does not close points, closed points do not force disjoint neighborhoods, and locally Hausdorff pieces need not glue to a Hausdorff whole.

## 3. Closure-shrinking criteria

Regularity is most effective in a form involving closure.

**Regular shrinking criterion.** A space $X$ is regular if and only if, for every open $U$ and every $x \\in U$, there is an open $V$ such that

$x \\in V \\subseteq \\operatorname{cl}(V) \\subseteq U$.

To prove the forward direction, separate $x$ from the closed set $X\\setminus U$ by disjoint open sets $V,W$. Since $V$ is disjoint from $W$, its closure is disjoint from $W$; because $X\\setminus U \\subseteq W$, one gets $\\operatorname{cl}(V) \\subseteq U$. Conversely, given closed $F$ and $x \\notin F$, apply shrinking inside $U=X\\setminus F$. Then $V$ and $X\\setminus \\operatorname{cl}(V)$ are disjoint open neighborhoods of $x$ and $F$.

There is a parallel criterion one level higher.

**Normal shrinking criterion.** A space $X$ is normal if and only if, whenever $A$ is closed and $A \\subseteq U$ with $U$ open, there is an open $V$ such that

$A \\subseteq V \\subseteq \\operatorname{cl}(V) \\subseteq U$.

Indeed, separate $A$ from the closed set $X\\setminus U$. The converse applies the criterion to $A \\subseteq X\\setminus B$ for disjoint closed $A,B$; then $V$ and $X\\setminus \\operatorname{cl}(V)$ separate them.

The position of the closure is essential. Merely finding $V$ with $x \\in V \\subseteq U$ says nothing: one could always take $V=U$. Separation is gained from the buffer between $\\operatorname{cl}(V)$ and the complement of $U$.

Every metric space is normal. The claim is immediate if either closed set is empty. Otherwise, if $A,B$ are disjoint closed subsets of a metric space, define $d(x,A)=\\inf\\{d(x,a):a \\in A\\}$ and similarly for $B$. Closedness ensures that no point has distance zero from both. The sets

$U=\\{x:d(x,A)<d(x,B)\\}$ and $V=\\{x:d(x,B)<d(x,A)\\}$

are disjoint open neighborhoods of $A$ and $B$. Equivalently, the continuous function

$f(x)=d(x,A)/(d(x,A)+d(x,B))$

takes value $0$ on $A$ and $1$ on $B$. This formula anticipates Urysohn's lemma.

## 4. Hausdorffness as a closed diagonal

Let $\\Delta_{X}=\\{(x,x):x \\in X\\}$ be the diagonal in $X \\times X$.

**Theorem 10.1 (Diagonal).** A space $X$ is Hausdorff if and only if $\\Delta_{X}$ is closed in $X \\times X$.

If $x\\ne y$ in a Hausdorff space, choose disjoint open $U,V$ containing them. Then $U \\times V$ is a neighborhood of $(x,y)$ missing the diagonal, so the diagonal's complement is open. Conversely, if $(x,y)$ lies off the closed diagonal, some basic neighborhood $U \\times V$ of $(x,y)$ misses it. If a point lay in $U \\cap V$, its diagonal pair would lie in $U \\times V$; hence $U,V$ are disjoint.

This theorem packages point separation into a closed-set statement and makes several proofs automatic. If $f,g:Z\\to X$ are continuous and $X$ is Hausdorff, their **equalizer**

$\\{z:f(z)=g(z)\\}=(f,g)^{-1}(\\Delta_{X})$

is closed. Taking $g$ constant shows that fibers of a map into a Hausdorff space are closed. The graph

$\\Gamma_{f}=\\{(z,f(z)):z \\in Z\\}$

of a continuous $f:Z\\to X$ is closed in $Z \\times X$, because it is the equalizer locus of $f \\circ \\pi_{Z}$ and $\\pi_{X}$. No separation property of $Z$ is needed.

The target hypothesis cannot be deleted. The identity from a non-Hausdorff space to itself is continuous, and its graph is precisely the nonclosed diagonal.

## 5. Limits: nets detect what sequences miss

In a Hausdorff space, a net has at most one limit. If a net $(x_{\\alpha})$ converged to distinct $x,y$, choose disjoint neighborhoods $U,V$. Eventually the net would lie in $U$ and eventually in $V$; beyond a common index it would have to lie in the empty intersection.

The converse is also true: if every net has at most one limit, then $X$ is Hausdorff. Suppose $x,y$ cannot be separated. Direct the set of pairs $(U,V)$ of neighborhoods of $x,y$ by reverse inclusion in both coordinates. Choose $x_{U,V} \\in U \\cap V$, which is possible by nonseparability. Given a neighborhood $U_{0}$ of $x$, every index beyond $(U_{0},X)$ chooses a point in $U_{0}$; hence the net converges to $x$. The same argument gives convergence to $y$.

Therefore

$X\\text{ is Hausdorff}\\iff\\text{every convergent net in }X\\text{ has a unique limit}$.

Sequences do not suffice without extra countability assumptions. The cocountable example above has unique sequential limits but is not Hausdorff. The proof failure is structural: a sequence can test only countably many neighborhood constraints, while a net can be indexed by the entire neighborhood system.

## 6. Compact Hausdorff spaces

Compactness and Hausdorffness reinforce each other. The first fundamental result is that every compact subset $K$ of a Hausdorff space $X$ is closed. For $x \\notin K$, separate $x$ from each $y \\in K$ by disjoint open sets $U_{y},V_{y}$. Finitely many $V_{y}$ cover $K$; the intersection of the corresponding $U_{y}$ is a neighborhood of $x$ disjoint from $K$.

It follows that a continuous bijection $f:K\\to Y$ from compact $K$ to Hausdorff $Y$ is a homeomorphism. If $F$ is closed in $K$, it is compact, so $f(F)$ is compact and therefore closed in $Y$. Thus $f$ is a closed bijection and its inverse is continuous.

There is also a rigidity principle. If $tau_{1} \\subseteq tau_{2}$ are topologies on the same set, $(X,tau_{2})$ is compact, and $(X,tau_{1})$ is Hausdorff, then $tau_{1}=tau_{2}$. The identity from the finer compact space to the coarser Hausdorff space is a continuous bijection, hence a homeomorphism.

**Theorem 10.2 (Compact Hausdorff).** Every compact Hausdorff space is normal, hence $T_{4}$.

Let $A,B$ be disjoint closed sets. They are compact. For each $a \\in A$ and $b \\in B$, choose disjoint open neighborhoods $U_{a,b}$ and $V_{a,b}$. Fix $a$. Finitely many $V_{a,b}$ cover $B$; intersect the paired $U_{a,b}$ and unite those finitely many $V_{a,b}$. This produces open $U_{a}$ containing $a$ and open $V_{a}$ containing all of $B$, with $U_{a} \\cap V_{a}=\\varnothing$. Finitely many $U_{a}$ cover $A$. Their union is an open neighborhood of $A$, while the intersection of the paired finitely many $V_{a}$ is an open neighborhood of $B$; the two are disjoint.

This proof uses Hausdorffness point by point and compactness twice to make the choices finite. Neither hypothesis is ornamental. An infinite cofinite space is compact and $T_{1}$ but not Hausdorff. A general Hausdorff space need not be regular, as the $K$-topology shows.

## 7. Urysohn's lemma: closed sets become coordinates

Normality does more than give two open sets.

**Lemma 10.3 (Urysohn).** If $X$ is normal and $A,B$ are disjoint closed subsets, there exists a continuous function $f:X\\to[0,1]$ with $f|_A=0$ and $f|_B=1$.

Here normality uses this chapter's raw convention; $T_{1}$ is not needed for the construction. The lemma's orientation matters: it separates **two closed sets** by a real-valued function. Separating a point from a closed set by such a function is called **complete regularity**; $T_{1}$ plus complete regularity is often called Tychonoff.

The construction reveals why a direct two-neighborhood argument is insufficient. Let $D$ be the dyadic rationals in $[0,1]$. Set $U_{1}=X\\setminus B$. By the normal shrinking criterion choose $U_{0}$ with

$A \\subseteq U_{0} \\subseteq \\operatorname{cl}(U_{0}) \\subseteq U_{1}$.

Inductively, whenever adjacent dyadics $r<s$ have been assigned, choose the midpoint set so that

$\\operatorname{cl}(U_r)\\subseteq U_{(r+s)/2}\\subseteq \\operatorname{cl}(U_{(r+s)/2})\\subseteq U_s$.

Thus $\\operatorname{cl}(U_{r}) \\subseteq U_{s}$ whenever $r<s$. Define

$f(x)=\\inf(\\{r \\in D:x \\in U_{r}\\} \\cup \\{1\\})$.

Points of $A$ lie in $U_{0}$, so $f=0$ there; points of $B$ lie in no $U_{r}$ with $r\\le 1$, so $f=1$ there. The nested-closure relation proves continuity. For example,

$\\{x:f(x)<a\\}=\\bigcup_{r\\in D, r<a} U_{r}\\qquad(0<a\\le 1),$

which is open. For $a\\le0$ the left side is empty, and for $a>1$ it is all of $X$. If $0\\le a<1$ and $f(x)>a$, choose dyadics $a<r<s<f(x)$. Then $x \\notin \\operatorname{cl}(U_{r})$, and $X\\setminus \\operatorname{cl}(U_{r})$ is a neighborhood on which values are at least $r>a$. For $a<0$ the upper ray has preimage $X$, and for $a\\ge1$ it has empty preimage. These two kinds of rays generate the topology of $[0,1]$.

Conversely, if every pair of disjoint closed sets admits such a function, the space is normal: the inverse images $[0,1/3)$ and $(2/3,1]$ are disjoint open neighborhoods. Thus the Urysohn property is exactly normality, not merely a consequence of it.

Urysohn's lemma does not itself say that a normal space is metrizable. Metrization requires enough continuous functions to control all open sets, usually supported by countability hypotheses developed later.

## 8. Subspaces and products

The first three separation axioms are hereditary: every subspace of a $T_{0}$, $T_{1}$, or Hausdorff space has the same property. Intersect the separating ambient open sets with the subspace. Regularity is also hereditary. If $Y \\subseteq X$, $y \\in Y$, and $F$ is closed in $Y$ with $y \\notin F$, write $Y\\setminus F=Y \\cap U$ for an ambient open $U$ containing $y$. Regular shrinking in $X$ gives open $V$ with $y \\in V \\subseteq \\operatorname{cl}_{X}(V) \\subseteq U$. Then $Y \\cap V$ and $Y\\setminus \\operatorname{cl}_{X}(V)$ are disjoint relative-open neighborhoods of $y$ and $F$.

Normality is not hereditary. It does pass to closed subspaces: if $Y$ is closed in normal $X$, disjoint closed subsets of $Y$ are closed in $X$, so ambient separating neighborhoods restrict. Arbitrary subspaces need not be normal.

Products behave cleanly through Hausdorffness. A product of nonempty spaces is $T_{0}$, $T_{1}$, or Hausdorff exactly when every factor has the corresponding property. For the forward direction, fix points in all other coordinates and embed a factor as a subspace. For the reverse direction, two distinct product points differ in some coordinate; inverse images of separating opens under that coordinate projection separate the product points.

Arbitrary products of regular spaces are regular. Given a point in a basic open neighborhood restricting only finitely many coordinates, shrink in each restricted coordinate and take the corresponding basic product; its closure lies in the original basic neighborhood. This proof also shows why only finite coordinate support is used.

Normality, by contrast, is not preserved by products. The **Sorgenfrey line** $S$ is $\\mathbb{R}$ with basis intervals $[a,b)$. Each basic interval is closed as well as open, so $S$ is regular. It is Lindelof: from a cover by basic intervals $[x,b_{x})$, choose countably many ordinary interiors $(x,b_{x})$ covering their union. If distinct uncovered points satisfy $x<y$, then $y\\notin(x,b_x)$, so $b_x\\le y$; therefore the intervals $(x,b_x)$ belonging to uncovered points are pairwise disjoint. Choosing one rational in each proves that only countably many points remain, and adding one original cover member for each of them gives a countable subcover. A regular Lindelof space is normal, so $S$ is normal.

Yet $S \\times S$ is not normal. It is separable because $\\mathbb{Q} \\times \\mathbb{Q}$ is dense. The anti-diagonal

$D=\\{(x,-x):x \\in \\mathbb{R}\\}$

is closed and discrete: a small basic rectangle around $(x,-x)$ meets $D$ only there, and a point off $D$ has a small rectangle staying off it. If a separable normal space contained such a closed discrete set of cardinality $|\\mathbb{R}|$, every subset $E\\subseteq D$ could be separated from $D\\setminus E$. Choosing an open $U_E$ whose closure meets $D$ exactly in $E$, the trace of $U_E$ on a countable dense set would determine $\\operatorname{cl}(U_E)$. This would inject the $2^{|\\mathbb{R}|}$ subsets of $D$ into the $2^{\\aleph_0}=|\\mathbb{R}|$ subsets of a countable set, contradicting Cantor's theorem. Therefore $S \\times S$ is not normal.

## 9. Quotients and closed relations

Separation is fragile under quotients. If $q:X\\to Y$ is quotient, then

$Y\\text{ is }T_1\\iff q^{-1}(\\{y\\})\\text{ is closed in }X\\text{ for every }y\\in Y$.

This follows because the quotient definition detects closed sets by complements. Hausdorffness is harder. Let

$R_q=\\{(x,x')\\in X\\times X:q(x)=q(x')\\}$.

If $Y$ is Hausdorff, then $R_q=(q \\times q)^{-1}(\\Delta_{Y})$ is closed in $X \\times X$. Thus a closed equivalence relation is necessary. It is not sufficient for arbitrary quotient maps, because closedness of the relation does not automatically produce saturated neighborhoods.

A powerful sufficient theorem restores control.

**Theorem 10.4 (Closed-relation quotient).** If $X$ is compact Hausdorff and $R$ is a closed equivalence relation on $X$, then $X/R$ is compact Hausdorff.

Compactness follows from the quotient map. To see Hausdorffness, first note that the saturation of a closed $F \\subseteq X$ is closed:

$\\operatorname{sat}(F)=\\pi_1(R\\cap(X\\times F))$.

The set inside the projection is compact, and its image is compact and hence closed in Hausdorff $X$. Therefore the quotient map is closed.

For two distinct classes $C,D$, compactness and closedness of $R$ give open neighborhoods $U$ of $C$ and $V$ of $D$ with $(U \\times V) \\cap R=\\varnothing$; this is obtained by covering $C \\times D$ with finitely coordinated rectangles contained in the complement of $R$. Replace $U$ by

$U^*=X\\setminus \\operatorname{sat}(X\\setminus U)$

and similarly form $V^*$. These are open saturated neighborhoods of $C,D$. They are disjoint, since $U^* \\subseteq U$, $V^* \\subseteq V$, and the diagonal lies in $R$. Their images are disjoint open neighborhoods of the two quotient points.

This theorem explains why identifying the endpoints of a compact interval produces a Hausdorff circle, while uncontrolled gluing can produce the line with two origins. “All classes are closed” establishes only $T_{1}$; Hausdorffness requires uniform separation between whole classes.

## 10. Proof audit and forward links

When proving a separation claim, first identify the objects being separated: two points, a point and a closed set, or two closed sets. Then choose the matching tool.

- For two points, use disjoint neighborhoods, the closed diagonal, or uniqueness of net limits.
- For a point inside an open set, use regular shrinking.
- For a closed set inside an open set, use normal shrinking.
- For two closed sets in a normal space, Urysohn's lemma creates a continuous coordinate.
- For compact subsets in a Hausdorff space, finite subcovers turn pointwise separation into setwise separation.
- For quotients, check saturation and the equivalence relation rather than relying on a geometric picture.

Common mistakes include using sequence limits to prove Hausdorffness without a countability hypothesis, assuming normality passes to products or arbitrary subspaces, and forgetting whether $T_{1}$ is included in the words regular and normal. Later metrization and compactification arguments will repeatedly invoke the shrinking criteria and Urysohn functions developed here.

## Worked examples: tracking the separation hypothesis

### Worked example 1 — Raw normality need not separate two points

Give a set $X$ with at least two points the indiscrete topology. Its only closed sets are $\\varnothing$ and $X$. Any disjoint closed pair therefore has an empty member, so it can be separated by the open sets $\\varnothing$ and $X$. The space is normal under the raw convention of this chapter. Yet distinct points have identical neighborhoods, so it is not even $T_0$. This is why the statement normal implies Hausdorff is false here. Adding $T_1$ gives $T_4$, and closed singleton points then permit the normal axiom to be applied to distinct points.

### Worked example 2 — Disjoint closed sets can have distance zero

In $\\mathbb R^2$ put $A=\\{(t,0):t\\ge1\\}$ and $B=\\{(t,1/t):t\\ge1\\}$. Both are closed: the first is a closed ray, and the second is the intersection of the closed half-plane $t\\ge1$ with the zero set of the continuous function $(t,y)\\mapsto ty-1$. They are disjoint, but corresponding points have distances $1/t$ tending to zero. Hence no positive global gap separates the sets.

Nevertheless the Urysohn distance formula works. At each fixed point $x$, closedness and disjointness ensure $d(x,A)+d(x,B)>0$, even though these denominators have no uniform positive lower bound over the plane. The ratio is continuous pointwise, equals zero on $A$ and one on $B$, and its inverse images of disjoint intervals separate the sets. Confusing a positive denominator at every point with a uniform positive infimum would unnecessarily invalidate this legitimate metric proof.

### Worked example 3 — Coinciding on a dense set forces equality

Let $f,g:X\\to Y$ be continuous, let $Y$ be Hausdorff, and suppose $f=g$ on a dense subset $D\\subseteq X$. The equalizer $E=\\{x:f(x)=g(x)\\}$ is closed because it is the inverse image of the closed diagonal under $(f,g)$. It contains $D$, so it contains its closure $X$. Therefore the maps agree everywhere. There is no need for a sequence in $D$ approaching every point; such sequences may not exist. The diagonal proof works in arbitrary spaces. The next chapter develops [Urysohn separation and Tietze extension](urysohn-tietze-extension.md), where equality on a closed subset is imposed as a construction requirement rather than forced by density.

## Exercises with complete solutions

### TOP-CH10-E001 — Exercise 1
Prove directly that $T_{1}$ implies $T_{0}$, and give a two-point $T_{0}$ space that is not $T_{1}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

One-sided separation follows from the two-sided T1 condition.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

On two points use just one open singleton for the converse counterexample.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E001 — Solution 1
If $X$ is $T_{1}$ and $x\\ne y$, then the open set $X\\setminus \\{y\\}$ contains $x$ but not $y$, so the points are topologically distinguishable and $X$ is $T_{0}$. On $\\{0,1\\}$, take $\\{\\varnothing,\\{1\\},\\{0,1\\}\\}$. The set $\\{1\\}$ distinguishes $1$ from $0$, so the space is $T_{0}$; but $\\{1\\}$ is not closed, so it is not $T_{1}$.


</details>

### TOP-CH10-E002 — Exercise 2
Show that an infinite set with the cofinite topology is $T_{1}$ but not Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every singleton has open complement.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Two nonempty cofinite opens cannot be disjoint in an infinite set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E002 — Solution 2
A singleton is finite, hence closed, so the space is $T_{1}$. If $U,V$ are nonempty open sets, their complements are finite. If $U \\cap V$ were empty, the whole infinite set would be the union of those two finite complements, impossible. Thus nonempty open sets always meet, and two distinct points cannot have disjoint neighborhoods.


</details>

### TOP-CH10-E003 — Exercise 3
Prove that a space is $T_{1}$ if and only if every subset is an intersection of open sets.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the proposed condition to singletons for one direction.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the reverse intersect complements of all excluded singleton points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E003 — Solution 3
Assume $T_{1}$ and let $A \\subseteq X$. For every $y \\notin A$, the set $X\\setminus \\{y\\}$ is open and contains $A$, and
$A=\\bigcap_{y\\notin A}(X\\setminus \\{y\\})$; the empty index case gives $A=X$. Conversely, apply the stated property to $\\{x\\}$. If $\\{x\\}=\\bigcap_{i} U_{i}$ and $y\\ne x$, then some $U_{i}$ contains $x$ but not $y$. Doing the same with $\\{y\\}$ gives the reverse exclusion, which is the $T_{1}$ condition.


</details>

### TOP-CH10-E004 — Exercise 4
Prove the regular shrinking criterion in both directions.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate the point from the complement of its open neighborhood.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Conversely the closure buffer supplies a disjoint open neighborhood of the closed set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E004 — Solution 4
Suppose $X$ is regular, $x \\in U$, and $U$ is open. Separate $x$ from the closed set $X\\setminus U$ by disjoint open $V,W$, with $x \\in V$ and $X\\setminus U \\subseteq W$. Since $W$ is open and disjoint from $V$, it is also disjoint from $\\operatorname{cl}(V)$, so $\\operatorname{cl}(V) \\subseteq X\\setminus W \\subseteq U$. Conversely, given closed $F$ and $x \\notin F$, shrink inside $U=X\\setminus F$ to get $x \\in V \\subseteq \\operatorname{cl}(V) \\subseteq U$. Then $V$ and $X\\setminus \\operatorname{cl}(V)$ are disjoint open neighborhoods of $x$ and $F$.


</details>

### TOP-CH10-E005 — Exercise 5
Prove the normal shrinking criterion in both directions.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Replace the point in regular shrinking by the given closed set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The complement of the smaller closure separates it from the other closed set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E005 — Solution 5
If $X$ is normal and closed $A \\subseteq U$ with $U$ open, separate $A$ and $X\\setminus U$ by disjoint open sets $V,W$. Then $\\operatorname{cl}(V)$ misses $W$, hence lies in $U$. Conversely, if $A,B$ are disjoint closed sets, apply the criterion to $A \\subseteq X\\setminus B$. Obtain open $V$ with $A \\subseteq V \\subseteq \\operatorname{cl}(V) \\subseteq X\\setminus B$. The disjoint open sets $V$ and $X\\setminus \\operatorname{cl}(V)$ contain $A$ and $B$ respectively.


</details>

### TOP-CH10-E006 — Exercise 6
Show that every metric space is normal using distance to a set.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

First show distance to a nonempty subset is 1-Lipschitz.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare the distances to the two disjoint closed sets; their sum is positive at every point.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E006 — Solution 6
For disjoint closed $A,B$, the functions $x \\mapsto d(x,A)$ and $x \\mapsto d(x,B)$ are continuous because $|d(x,A)-d(y,A)|\\le d(x,y)$. No point has both distances zero: distance zero places a point in the corresponding closed set. Hence
$U=\\{x:d(x,A)<d(x,B)\\}$ and $V=\\{x:d(x,B)<d(x,A)\\}$ are open and disjoint. At a point of $A$, the first distance is zero and the second positive, so $A \\subseteq U$; similarly $B \\subseteq V$.


</details>

### TOP-CH10-E007 — Exercise 7
Prove that $X$ is Hausdorff if and only if $\\Delta_{X}$ is closed in $X \\times X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use disjoint neighborhoods for a point off the diagonal.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Conversely an open rectangle missing the diagonal has disjoint factors.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E007 — Solution 7
If $X$ is Hausdorff and $(x,y)$ is off the diagonal, choose disjoint open $U,V$ containing $x,y$. The product $U \\times V$ misses the diagonal, so the complement of the diagonal is open. Conversely, if the diagonal is closed, an off-diagonal $(x,y)$ has a basic neighborhood $U \\times V$ disjoint from it. Any point in $U \\cap V$ would put its diagonal pair in that product, so $U \\cap V=\\varnothing$; these sets separate $x,y$.


</details>

### TOP-CH10-E008 — Exercise 8
Let $f,g:Z\\to X$ be continuous and $X$ Hausdorff. Prove $\\{z:f(z)=g(z)\\}$ is closed. Deduce that the graph of every continuous $f:Z\\to X$ is closed in $Z \\times X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The equality locus is the inverse image of the diagonal under (f,g).

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the graph use the maps f composed with the first projection and the second projection.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E008 — Solution 8
The map $(f,g):Z\\to X \\times X$ is continuous, and the equalizer is its inverse image of the closed diagonal, so it is closed. On $Z \\times X$, compare the continuous maps $f \\circ \\pi_{Z}$ and $\\pi_{X}$ into $X$. Their equalizer is exactly $\\{(z,x):f(z)=x\\}=\\Gamma_{f}$, hence the graph is closed.


</details>

### TOP-CH10-E009 — Exercise 9
Prove that limits of nets are unique in a Hausdorff space.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose disjoint neighborhoods of two proposed limits.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Directedness makes simultaneous eventual membership impossible.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E009 — Solution 9
Suppose $(x_{\\alpha})$ converges to both $x$ and $y$. If $x\\ne y$, choose disjoint neighborhoods $U$ of $x$ and $V$ of $y$. There are indices after which the net lies in $U$ and in $V$; directedness supplies a common later index. Beyond it the net would lie in $U \\cap V=\\varnothing$, a contradiction. Therefore $x=y$.


</details>

### TOP-CH10-E010 — Exercise 10
Construct, from two points that cannot be separated, a net converging to both. Conclude that unique net limits characterize Hausdorff spaces.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Order pairs of neighborhoods by refinement.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a point of each intersection and check both limit conditions.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E010 — Solution 10
Let $x,y$ have no disjoint neighborhoods. Index by pairs $(U,V)$ of neighborhoods of $x,y$, ordered so that $(U',V')\\ge(U,V)$ when $U' \\subseteq U$ and $V' \\subseteq V$. This set is directed by intersections. Choose $z_{U,V} \\in U \\cap V$. For any neighborhood $U_{0}$ of $x$, indices beyond $(U_{0},X)$ choose points in $U_{0}$, so the net converges to $x$; symmetrically it converges to $y$. Thus failure of Hausdorffness gives a net with two limits, which combined with Exercise 9 proves the characterization.


</details>

### TOP-CH10-E011 — Exercise 11
On an uncountable set with the cocountable topology, prove every convergent sequence is eventually constant. Why does this not make the space Hausdorff?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Remove the countable set of terms different from the proposed limit.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Uniqueness of sequential limits is weaker than the analogous net criterion.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E011 — Solution 11
Suppose $(x_{n})$ converges to $x$ but is not eventually $x$. Choose a subsequence all of whose terms differ from $x$, and let $C$ be the countable set of its values. Then $X\\setminus C$ is an open neighborhood of $x$, but the chosen subsequence never lies in it, contradicting convergence of the original sequence. Hence a convergent sequence is eventually its limit and has a unique limit. Nevertheless, any two nonempty open sets meet because the union of two countable complements cannot exhaust an uncountable set. The space is therefore not Hausdorff; sequences do not detect all neighborhoods.


</details>

### TOP-CH10-E012 — Exercise 12
Prove every compact subset of a Hausdorff space is closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate the exterior point from each compact-set point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A finite subcover turns their paired neighborhoods into one neighborhood missing the compact set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E012 — Solution 12
Let compact $K \\subseteq X$ and $x \\notin K$. For each $y \\in K$, choose disjoint open $U_{y}$ containing $x$ and $V_{y}$ containing $y$. Select $y_{1},...,y_{n}$ so the $V_{y_{i}}$ cover $K$. Then $U=\\bigcap_{i} U_{y_{i}}$ is an open neighborhood of $x$ disjoint from $K$. Every exterior point has such a neighborhood, so $X\\setminus K$ is open and $K$ is closed.


</details>

### TOP-CH10-E013 — Exercise 13
Prove a continuous bijection from a compact space to a Hausdorff space is a homeomorphism.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Images of closed domain subsets are compact.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compact subsets of the Hausdorff target are closed, so the inverse is continuous.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E013 — Solution 13
Let $f:X\\to Y$ be such a bijection. If $F$ is closed in compact $X$, then $F$ is compact; its continuous image $f(F)$ is compact and, by Exercise 12, closed in Hausdorff $Y$. Thus $f$ is closed. For a closed $F \\subseteq X$, $(f^{-1})^{-1}(F)=f(F)$ is closed, so the inverse is continuous and $f$ is a homeomorphism.


</details>

### TOP-CH10-E014 — Exercise 14
Prove every compact Hausdorff space is regular using only one finite-subcover argument.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate the point from every point of the closed compact set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

One finite selection provides an open neighborhood whose closure avoids that set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E014 — Solution 14
Let $F$ be closed and $x \\notin F$. The set $F$ is compact. For each $y \\in F$, choose disjoint open $U_{y}$ containing $x$ and $V_{y}$ containing $y$. Finitely many $V_{y_{i}}$ cover $F$. Then $U=\\bigcap_{i} U_{y_{i}}$ and $V=\\bigcup_{i} V_{y_{i}}$ are disjoint open neighborhoods of $x$ and $F$. Hence the space is regular; Hausdorffness already supplies $T_{1}$, so it is $T_{3}$.


</details>

### TOP-CH10-E015 — Exercise 15
Prove every compact Hausdorff space is normal.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

First shrink a neighborhood of each point of one closed set away from the other.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use compactness to combine finitely many shrunken neighborhoods and take the complement of their closures.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E015 — Solution 15
Let disjoint closed $A,B$ be compact. For each fixed $a \\in A$, separate $a$ from each $b \\in B$; compactness of $B$ combines finitely many pairs into disjoint open sets $U_{a}$ containing $a$ and $V_{a}$ containing all of $B$. Compactness of $A$ selects $a_{1},...,a_{n}$ with $A \\subseteq \\bigcup_{i} U_{a_{i}}$. Then $U=\\bigcup_{i} U_{a_{i}}$ and $V=\\bigcap_{i} V_{a_{i}}$ are open, contain $A,B$, and are disjoint: each $U_{a_{i}}$ misses its corresponding $V_{a_{i}}$, and $V$ lies in every $V_{a_{i}}$.


</details>

### TOP-CH10-E016 — Exercise 16
Assume that for every pair of disjoint closed sets $A,B\\subseteq X$ there is a continuous $f:X\\to[0,1]$ satisfying $f|_A=0$ and $f|_B=1$. Prove $X$ is normal.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose disjoint open intervals about zero and one.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their inverse images are disjoint open neighborhoods of the given closed sets.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E016 — Solution 16
Given disjoint closed $A,B$, choose continuous $f:X\\to[0,1]$ with $f|_A=0$ and $f|_B=1$. Then $U=f^{-1}([0,1/3))$ and $V=f^{-1}((2/3,1])$ are open in $X$, because the displayed intervals are relatively open in $[0,1]$. They contain $A,B$ and are disjoint. Thus every pair of disjoint closed sets can be separated, so $X$ is normal.


</details>

### TOP-CH10-E017 — Exercise 17
Prove that subspaces inherit Hausdorffness and that closed subspaces inherit normality.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Trace disjoint ambient neighborhoods for Hausdorffness.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For normality, relative closed sets are ambient-closed when the subspace is closed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E017 — Solution 17
If $Y \\subseteq X$ and $y_{1}\\ne y_{2}$ lie in $Y$, disjoint ambient neighborhoods in Hausdorff $X$ restrict to disjoint open neighborhoods in $Y$. Now suppose $Y$ is closed in normal $X$. Sets closed in $Y$ are intersections of $Y$ with ambient closed sets and, because $Y$ itself is closed, are closed in $X$. Two disjoint closed subsets of $Y$ therefore have disjoint ambient open neighborhoods, whose intersections with $Y$ separate them in the subspace.


</details>

### TOP-CH10-E018 — Exercise 18
Prove a product of nonempty spaces is Hausdorff if and only if every factor is Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use one differing coordinate to separate product points.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the converse embed a factor as a slice using basepoints elsewhere.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E018 — Solution 18
If every factor is Hausdorff, two distinct product points differ in some coordinate $i$. Choose disjoint neighborhoods of those two coordinates; their inverse images under $\\pi_{i}$ are disjoint neighborhoods of the product points. Conversely, fix basepoints in all nonempty factors except $X_{i}$. Varying only the $i$th coordinate embeds $X_{i}$ homeomorphically as a subspace of the product. Since subspaces of Hausdorff spaces are Hausdorff, a Hausdorff product forces each factor to be Hausdorff.


</details>

### TOP-CH10-E019 — Exercise 19
Let $q:X\\to Y$ be a quotient map. Prove $Y$ is $T_{1}$ if and only if every fiber of $q$ is closed. Then show that Hausdorff $Y$ forces the relation $R=\\{(x,x'):q(x)=q(x')\\}$ to be closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A singleton pulls back to its fiber.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The relation is the inverse image of the target diagonal under q times q.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E019 — Solution 19
For $y \\in Y$, the quotient criterion and complements give $\\{y\\}$ closed in $Y$ exactly when $q^{-1}(\\{y\\})$ is closed in $X$. Thus all singletons are closed exactly when all fibers are. If $Y$ is Hausdorff, its diagonal is closed by Exercise 7. The continuous map $q \\times q:X \\times X\\to Y \\times Y$ has $R$ as the inverse image of that diagonal, so $R$ is closed.


</details>

### TOP-CH10-E020 — Exercise 20
Let $X$ be compact Hausdorff and $R$ a closed equivalence relation. Prove that the quotient $X/R$ is Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Show saturations of closed sets are closed by projecting a closed subset of a compact product.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Separate two compact equivalence classes and remove saturations of the unwanted complements to obtain disjoint saturated open neighborhoods.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH10-E020 — Solution 20
Let $q:X\\to X/R$. For closed $F \\subseteq X$,
$\\operatorname{sat}(F)=\\pi_{1}(R \\cap (X \\times F))$. The intersection is closed in compact $X \\times F$, hence compact; its projection is compact and therefore closed in Hausdorff $X$. So saturations of closed sets are closed and $q$ is a closed quotient map.

Let $C,D$ be distinct equivalence classes. They are closed and compact. Since $R$ is closed, for each $(c,d) \\in C \\times D$ choose an open rectangle $A_{c,d} \\times B_{c,d}$ in its complement. Fix $c$; finitely many $B_{c,d_{j}}$ cover $D$, so intersect their paired $A_{c,d_{j}}$ and unite the $B_{c,d_{j}}$ to obtain $A_{c} \\times B_{c}$ missing $R$, with $c \\in A_{c}$ and $D \\subseteq B_{c}$. Finitely many $A_{c_{i}}$ cover $C$. Set $U=\\bigcup_{i} A_{c_{i}}$ and $V=\\bigcap_{i} B_{c_{i}}$. Then $C \\subseteq U$, $D \\subseteq V$, and $(U \\times V) \\cap R=\\varnothing$.

Define $U^*=X\\setminus \\operatorname{sat}(X\\setminus U)$ and $V^*=X\\setminus \\operatorname{sat}(X\\setminus V)$. They are open and saturated, contain $C,D$, and lie in $U,V$. They are disjoint, since any common point would give a diagonal pair in $(U \\times V) \\cap R$. Therefore $q(U^*)$ and $q(V^*)$ are disjoint open neighborhoods of the two quotient points. Hence $X/R$ is Hausdorff.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## Chapter checkpoint

$T_{0}$, $T_{1}$, Hausdorff, regular, and normal control progressively stronger separation tasks, but convention-sensitive names must be stated before use. Hausdorffness is equivalent to a closed diagonal and to uniqueness of net limits. Regularity and normality are best used through closure shrinking; normality is equivalently the ability to separate closed sets by Urysohn functions. Compact Hausdorff spaces are normal, while subspaces, products, and quotients preserve only carefully specified parts of the separation ladder.
`;export{e as default};