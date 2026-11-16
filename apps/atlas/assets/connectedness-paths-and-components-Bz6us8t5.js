var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: connectedness-paths-and-components
title: "Connectedness, Paths, and Components"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Connectedness, Paths, and Components

Connectedness says that a space cannot be split into two nonempty open pieces. It is deliberately qualitative: it asks whether a space hangs together, not how far apart its points are. Paths strengthen that global condition by requiring an explicit continuous route between every pair of points. Components and quasicomponents then record what remains when a space is not connected. The distinctions are easy to blur in familiar subsets of Euclidean space, so this chapter pairs every implication with the hypothesis or counterexample that marks its boundary.

The prerequisites are subspace topology, closure, continuity, products, and the elementary topology of the real line. No separation axiom is built into the definition of connectedness.

## 1. Separations and clopen sets

A **separation** of a space $X$ is a pair $(U,V)$ of nonempty, disjoint, open subsets of $X$ such that $X=U \\cup V$. The space is **connected** when it has no separation. The empty space and every one-point space are connected: there are not two nonempty sets available to form a separation.

Because $V=X\\setminus U$, a separation can equivalently be described by a subset $U$ that is both open and closed, but is neither $\\varnothing$ nor $X$. Such a set is **clopen**. Thus the following statements are equivalent:

1. $X$ is connected.
2. The only clopen subsets of $X$ are $\\varnothing$ and $X$.
3. There is no continuous surjection from $X$ onto the discrete two-point space $\\{0,1\\}$.

For the third form, a nontrivial clopen $U$ defines the characteristic map

$\\chi_U(x)=0$ for $x\\in U$, and $\\chi_U(x)=1$ for $x\\notin U$.

Both point-preimages are open, so $\\chi_U$ is continuous and surjective. Conversely, the inverse image of either point under a continuous surjection to discrete $\\{0,1\\}$ is nontrivial and clopen.

The map criterion is often the cleanest proof language: connectedness means that every continuous map from $X$ to a discrete space is constant. It is enough to test $\\{0,1\\}$, because any nonconstant map to any discrete space separates two of its values by the inverse image of a subset of the codomain.

### Relative separations

A subset $A \\subseteq X$ is connected when it is connected in its subspace topology. A separation of $A$ consists of sets open in $A$, not necessarily open in $X$. Equivalently, $A=P \\cup Q$, where $P,Q$ are nonempty and disjoint and neither meets the closure in $A$ of the other:

$P \\cap \\operatorname{cl}_{A}(Q)=\\varnothing$ and $\\operatorname{cl}_{A}(P) \\cap Q=\\varnothing$.

Indeed, if $P,Q$ are a separation, each is closed in $A$ as the complement of the other, giving the closure conditions. Conversely, those conditions say $P$ and $Q$ are each closed in $A$; since they are complements in $A$, they are also open in $A$.

Ambient and relative language must not be mixed. The subset $(0,1)$ is connected although it is not closed in $\\mathbb{R}$, and $\\{0,1\\}$ is disconnected although both of its points lie in the connected ambient space $[0,1]$. Connectedness is not hereditary to arbitrary subspaces, open subspaces, or closed subspaces.

## 2. Continuous images and locally constant data

**Theorem 9.1 (Continuous-image).** If $X$ is connected and $f:X\\to Y$ is continuous, then $f(X)$ is connected.

**Proof.** If $f(X)=P \\cup Q$ were a separation in the subspace $f(X)$, then $f^{-1}(P)$ and $f^{-1}(Q)$ would be disjoint, nonempty, open subsets of $X$ covering $X$. They would separate $X$, a contradiction. $\\square$

Surjectivity is needed only if the conclusion is stated for all of $Y$; every continuous map is surjective onto its image. Homeomorphisms therefore preserve connectedness.

A function is **locally constant** if every point has a neighborhood on which the function is constant. A map into a discrete space is continuous exactly when it is locally constant. Hence every locally constant map on a connected space is constant. This principle appears whenever an invariant takes discrete values: rank, winding number, orientation sign, or the number of roots can change only after continuity or connectedness fails.

The converse direction is false in a useful way: preimages of connected sets under continuous maps need not be connected. For the continuous map $f:\\mathbb{R}\\to \\mathbb{R}$, $f(x)=x^{2}$, the inverse image $f^{-1}((0,1))=(-1,0) \\cup (0,1)$ is disconnected, while $(0,1)$ is connected. Continuous maps preserve connectedness forward, not backward.

Products also behave well. If $X$ and $Y$ are connected, then $X \\times Y$ is connected. Fix $(x_{0},y_{0})$. For every $x \\in X$, the cross

$(\\{x\\} \\times Y) \\cup (X \\times \\{y_{0}\\})$

is the union of two connected sets meeting at $(x,y_{0})$, hence connected; all these crosses share the connected set $X \\times \\{y_{0}\\}$. Their union is $X \\times Y$, so the union theorem of Section 4 applies. Conversely, if a nonempty product is connected, each factor is connected because each coordinate projection is continuous and onto.

## 3. Intervals are exactly the connected subsets of the line

A subset $I \\subseteq \\mathbb{R}$ is an **interval** when, whenever $a,b \\in I$ and $a<c<b$, one also has $c \\in I$. This definition includes empty sets, one-point sets, bounded and unbounded intervals, and intervals with any allowed choice of endpoints.

**Theorem 9.5 (Interval).** A subset of $\\mathbb{R}$ is connected if and only if it is an interval.

**Proof, only if.** Suppose $A \\subseteq \\mathbb{R}$ contains $a<b$ but omits some $c$ with $a<c<b$. Then

$A \\cap (-\\infty,c)$ and $A \\cap (c,\\infty)$

are nonempty, disjoint, relatively open, and cover $A$. Thus $A$ is disconnected.

**Proof, if.** Let $I$ be an interval and suppose $I=U \\cup V$ is a separation. Choose $u \\in U$, $v \\in V$, relabeling so $u<v$. Let

$s=\\sup(U \\cap [u,v])$.

Completeness of $\\mathbb{R}$ gives $s$, and the interval property gives $s \\in I$. If $s \\in U$, relative openness supplies $\\varepsilon>0$ with $I \\cap (s-\\varepsilon,s+\\varepsilon) \\subseteq U$; unless $s=v$, this contradicts that $s$ is an upper bound, while $s=v$ contradicts $v \\in V$. If $s \\in V$, relative openness supplies a left-hand interval in $V$; the defining property of a supremum gives a point of $U \\cap [u,v]$ inside it, again a contradiction. Hence no separation exists. $\\square$

Completeness is doing real work in this proof. In the rational line $\\mathbb{Q}$, the set $\\mathbb{Q}$ itself satisfies the between-points interval property relative to its own order, yet it is disconnected: for irrational $\\alpha$, the sets $\\{q:q<\\alpha\\}$ and $\\{q:q>\\alpha\\}$ separate $\\mathbb{Q}$.

The interval theorem and the continuous-image theorem immediately yield the **intermediate value theorem**. If $X$ is connected, $f:X\\to \\mathbb{R}$ is continuous, and $f(x_{0})<r<f(x_{1})$, then $f(X)$ is a connected subset of $\\mathbb{R}$, hence an interval, so $r \\in f(X)$. This version shows that the engine is connectedness of the domain, not a formula involving epsilon and delta.

Useful corollaries include:

- a continuous real-valued function on connected $X$ that never vanishes has constant sign;
- if $f:X\\to \\mathbb{R}$ is continuous and takes only integer values, then $f$ is constant;
- connected subsets of the line are path connected, using the straight path $t \\mapsto (1-t)a+tb$.

## 4. Closure and union mechanisms

Connected spaces can be assembled without explicitly ruling out every possible separation.

**Theorem 9.2 (Common-core union).** Let $\\{C_{i}\\}_{i \\in I}$ be connected subspaces of $X$. If $\\bigcap_{i} C_{i}$ is nonempty, then $\\bigcup_{i} C_{i}$ is connected.

**Proof.** Choose $p$ in every $C_{i}$. If the union had a separation $(U,V)$, put $p \\in U$. Each connected $C_{i}$ must lie in one side of the separation, and because it contains $p$, it lies in $U$. Their union therefore misses $V$, contradicting nonemptiness of $V$. $\\square$

It is enough that all the sets meet one fixed connected set $C_{0}$; apply the same argument to the connected unions $C_{0} \\cup C_{i}$. A finite chain $C_{1},...,C_{n}$ with $C_{i} \\cap C_{i+1} \\ne \\varnothing$ also has connected union by induction. For infinite families, a connected intersection graph is sufficient: if vertices index the $C_{i}$ and edges record nonempty intersection, then paths in the graph reduce the argument to finite chains.

Some overlap condition is essential. The union of the connected singletons $\\{0\\}$ and $\\{1\\}$ is disconnected. Even a decreasing intersection of connected sets can be disconnected when compactness or closedness control is missing; union and intersection arguments have different hypotheses.

**Theorem 9.3 (Closure).** If $A$ is connected and $A \\subseteq B \\subseteq \\operatorname{cl}_{X}(A)$, then $B$ is connected. In particular, $\\operatorname{cl}_{X}(A)$ is connected.

**Proof.** Suppose $(U,V)$ separates $B$. Connectedness puts $A$ entirely in one side, say $U$. Choose $v \\in V$. Because $V$ is relatively open in $B$, there is an ambient open $O$ with $v \\in O$ and $O \\cap B \\subseteq V$. Yet $v \\in B \\subseteq \\operatorname{cl}_{X}(A)$, so $O$ meets $A$, contradicting $A \\subseteq U$ and $U \\cap V=\\varnothing$. $\\square$

This theorem is one-way. A dense subset of a connected space need not be connected: $\\mathbb{Q}$ is dense in connected $\\mathbb{R}$ but disconnected. The theorem begins with a connected dense subset and enlarges it; it does not infer connectedness of a dense subset from its closure.

The closure theorem is the economical proof that many limiting curves and spirals are connected. First exhibit a connected parametrized image, then take its closure. It does not prove path connectedness, because a path in the closure need not be a limit of paths with controlled endpoints.

## 5. Components

Fix $x \\in X$. The **connected component** $C(x)$ is the union of all connected subsets of $X$ containing $x$. Those subsets have the common point $x$, so their union is connected. It is therefore the unique maximal connected subset containing $x$.

Components partition $X$. If $C(x)$ and $C(y)$ meet, their union is connected, so maximality forces equality. Every point belongs to its component. Components are always closed: $\\operatorname{cl}_{X}(C(x))$ is connected by the closure theorem and contains $C(x)$, so maximality gives $\\operatorname{cl}_{X}(C(x))=C(x)$.

Components need not be open. In $\\mathbb{Q}$, every component is a singleton. To see this, a connected subset of $\\mathbb{Q}$ containing distinct rationals $a<b$ would have to be an interval in $\\mathbb{R}$, but it omits every irrational between them and is therefore disconnected. No singleton is open in $\\mathbb{Q}$. Thus “components partition the space into closed pieces” is universally correct; “into clopen pieces” requires more.

If there are only finitely many components, each component is open: its complement is a finite union of closed components. This argument fails for infinitely many components because an infinite union of closed sets need not be closed.

The continuous image of a component is connected, but it need not be a whole component of the codomain. A constant map from any connected space into $\\mathbb{R}$ lands in one point, properly inside the component $\\mathbb{R}$. Under a homeomorphism, by contrast, maximality is preserved and components correspond exactly.

## 6. Quasicomponents and clopen detection

The **quasicomponent** $Q(x)$ is the intersection of all clopen subsets of $X$ that contain $x$. Equivalently, $y \\in Q(x)$ when no continuous map $X\\to \\{0,1\\}$ distinguishes $x$ from $y$. Quasicomponents also partition $X$ and are closed, being intersections of closed sets.

Every component lies in a quasicomponent. Indeed, if a clopen set $H$ contains $x$, then $C(x)$ cannot meet both $H$ and its complement, so $C(x) \\subseteq H$. Intersecting all such $H$ gives

$C(x) \\subseteq Q(x)$.

Equality is not automatic. Components are built from actual connected subsets; quasicomponents are what clopen tests can detect. For an explicit Hausdorff example, put

$D=\\{0\\} \\cup \\{1/n:n\\ge 1\\}$ and $X=(D \\times [-1,1])\\setminus \\{(0,0)\\}$

with the Euclidean subspace topology. Projection to totally disconnected $D$ shows every connected subset of $X$ has constant first coordinate. Hence

$L_-=\\{0\\} \\times [-1,0)$ and $L_+=\\{0\\} \\times (0,1]$

are distinct components. They lie in one quasicomponent. If a clopen $H$ contains a point of $L_-$, connectedness makes it contain all of $L_-$. Openness near $(0,-1/2)$ makes $H$ meet $\\{1/n\\} \\times [-1,1]$ for every sufficiently large $n$; since each such vertical interval is connected, $H$ contains the whole interval. Closedness then makes $H$ contain its limit points in $L_+$. Thus every clopen set containing $L_-$ contains $L_+$; applying the same argument to the clopen complement gives the converse. This metric, locally compact example shows that even Hausdorffness and local compactness do not force equality. A compact Hausdorff hypothesis repairs the gap.

**Theorem 9.6 (Compact Hausdorff).** In a compact Hausdorff space, components and quasicomponents coincide.

**Proof.** It suffices to show $Q(x)$ connected. Suppose $Q(x)=A \\cup B$ is a separation with $x \\in A$. The set $Q(x)$ is closed in compact $X$, hence compact, and $A,B$ are closed in $Q(x)$, hence compact. Compact Hausdorff spaces are normal: for fixed $a \\in A$, separate $a$ from each point of compact $B$, use a finite subcover of $B$ to get an open neighborhood of $a$ whose closure misses $B$, and then use a finite subcover of compact $A$ to combine these neighborhoods. Thus choose disjoint open sets $U,V$ of $X$ with $A \\subseteq U$ and $B \\subseteq V$.

Let $F=X\\setminus (U \\cup V)$. For every $y \\in F$, one has $y \\notin Q(x)$, so some clopen $H_{y}$ contains $x$ and omits $y$. The open complements $X\\setminus H_{y}$ cover compact $F$; choose finitely many $y_{1},...,y_{n}$ whose complements cover $F$. Then

$H=H_{y_{1}} \\cap ... \\cap H_{y_{n}}$

is clopen, contains $x$, and lies in $U \\cup V$. Consequently $H \\cap U$ is clopen in $X$: it is open, and its complement is the union of the open sets $X\\setminus H$ and $H \\cap V$. This clopen set contains $x$ and is disjoint from $B$, contradicting $B \\subseteq Q(x)$. Therefore $Q(x)$ is connected, so it lies in $C(x)$; the reverse inclusion was already proved. $\\square$

Compactness is used to reduce infinitely many clopen exclusions to finitely many. Hausdorffness supplies normal separation of the compact pieces. Without an appropriate theorem, one must not silently identify the two notions.

## 7. Paths and path components

A **path** in $X$ from $x$ to $y$ is a continuous map $\\gamma:[0,1]\\to X$ with $\\gamma(0)=x$ and $\\gamma(1)=y$. A space is **path connected** if every two points are joined by a path.

Paths can be reversed by $\\overline{\\gamma}(t)=\\gamma(1-t)$ and concatenated. If $\\gamma$ joins $x$ to $y$ and $\\eta$ joins $y$ to $z$, define

$(\\gamma*\\eta)(t)=\\gamma(2t)$ for $0\\le t \\le 1/2$,

$(\\gamma*\\eta)(t)=\\eta(2t-1)$ for $1/2\\le t \\le 1$.

The two formulas agree at $1/2$, so the pasting lemma gives continuity. These operations show that “joined by a path” is an equivalence relation. Its equivalence classes are the **path components**.

Every path-connected space is connected. Fix $x_{0}$. The images of all paths beginning at $x_{0}$ are connected because $[0,1]$ is connected and continuous images preserve connectedness. They share $x_{0}$, and their union is the whole space, so the common-core union theorem applies.

The converse fails. The topologist's sine curve in Section 10 is connected but not path connected. Thus the containments for a point $x$ are

$path component of x \\subseteq C(x) \\subseteq Q(x)$.

Neither inclusion is an equality in arbitrary spaces. In a locally path-connected space the first becomes equality, while in a compact Hausdorff space the second becomes equality.

Convex subsets of real topological vector spaces are path connected: the straight path $(1-t)x+ty$ stays in the set. Star-shaped subsets are also path connected by routing every point through a star center. These algebraic paths are useful sufficient conditions, not definitions; a circle is path connected without being convex.

## 8. Local connectedness and local path connectedness

A space $X$ is **locally connected at $x$** when every neighborhood $N$ of $x$ contains a connected open neighborhood $U$ of $x$. Equivalently, connected open neighborhoods form a neighborhood basis at $x$. The space is locally connected if this holds at every point.

Replace “connected” by “path connected” to define **locally path connected**. Local path connectedness implies local connectedness, but the converse can fail. These are local properties: a disjoint union of two open intervals is locally path connected but not connected.

There are useful component tests.

**Theorem 9.7 (Local component).** A space $X$ is locally connected if and only if every component of every open subset of $X$ is open in $X$.

**Proof.** Suppose $X$ is locally connected, $O$ is open, and $C$ is a component of $O$. For each $x \\in C$, local connectedness gives a connected open neighborhood $U_{x}$ with $x \\in U_{x} \\subseteq O$. Maximality gives $U_{x} \\subseteq C$, so $C=\\bigcup_{x\\in C} U_{x}$ is open.

Conversely, let components of open sets be open. Given $x \\in O$ with $O$ open, the component of $x$ in $O$ is an open connected neighborhood contained in $O$. $\\square$

The same proof with paths gives: $X$ is locally path connected if and only if every path component of every open subset is open.

**Global consequence.** In a locally path-connected space, every connected open subset is path connected. Indeed, its path components are open. Each is also closed in that subset because its complement is the union of the other open path components. Connectedness permits only one.

In particular, connected and locally path-connected spaces are path connected. Notice both hypotheses. Local path connectedness alone does not join different components, and connectedness alone does not manufacture paths.

Open subsets of $\\mathbb{R}^n$ are locally path connected: around each point choose a sufficiently small open ball contained in the given open neighborhood, and balls are convex. Their connected components are therefore open and path connected. This familiar Euclidean behavior is a theorem with a local convexity input, not a feature of arbitrary topological spaces.

## 9. Useful constructions and hypothesis boundaries

Several standard operations preserve connectedness.

- Continuous images of connected spaces are connected.
- Products of nonempty connected spaces are connected; the same is true for arbitrary products, using finite-coordinate basic neighborhoods or a closure argument from finite-support slices.
- Quotient spaces of connected spaces are connected because a quotient map is continuous and onto.
- Closures and intermediate enlargements of connected sets are connected.

Other tempting statements fail.

- A subspace of a connected space need not be connected: $\\{0,1\\} \\subseteq [0,1]$.
- An intersection of connected sets need not be connected. In $\\mathbb{R}^{2}$, let $A$ be the upper semicircle together with endpoints $(-1,0),(1,0)$, and let $B$ be the lower semicircle with the same endpoints. Both are path connected, but $A \\cap B=\\{(-1,0),(1,0)\\}$ is disconnected.
- An inverse image of a connected set need not be connected: $x \\mapsto x^{2}$ sends the disconnected $(-1,0) \\cup (0,1)$ onto connected $(0,1)$.
- A bijective continuous image can be connected while its inverse is not continuous; connectedness of both spaces does not upgrade a continuous bijection to a homeomorphism.
- Components need not be open, and path components need not be closed.

In a disjoint topological sum $\\coprod_{i}X_i$, each summand is clopen. Therefore a connected subset lies in one summand, and the components of the sum are precisely the components of its summands. By contrast, quotient identifications can merge components: identifying one point from each of two intervals produces a connected wedge.

## 10. The topologist's sine curve

Let

$G=\\{(x,\\sin(1/x)):x>0\\}$

and let $S=\\operatorname{cl}_{\\mathbb{R}^{2}}(G)$. The map $\\varphi:(0,\\infty)\\to \\mathbb{R}^{2}$ given by $\\varphi(x)=(x,\\sin(1/x))$ is continuous, and $(0,\\infty)$ is an interval, hence connected and path connected. Thus $G$ is path connected. Its closure is

$S=G \\cup V$, where $V=\\{0\\} \\times [-1,1]$.

The inclusion $V \\subseteq \\operatorname{cl}(G)$ follows by choosing sequences $x_{n}\\to 0$ with prescribed values of $\\sin(1/x_{n})$; no other points are added because any convergent graph sequence either has a positive limiting first coordinate and remains on the graph, or has first coordinate tending to zero and second coordinate in $[-1,1]$. By the closure theorem, $S$ is connected.

Yet $S$ is not path connected. The graph $G$ is one path component and the vertical segment $V$ is another.

**Theorem 9.4 (No-path).** No path in $S$ joins a point of $V$ to a point of $G$.

**Proof.** Suppose $\\gamma(t)=(u(t),v(t))$ is such a path, with $\\gamma(0) \\in V$ and $\\gamma(1) \\in G$ after reversing it if necessary. The zero set $Z=\\{t:u(t)=0\\}$ is closed and nonempty, and it omits $1$. Let $t_{0}=\\max Z$. Then $u(t)>0$ for $t>t_{0}$, while continuity gives $u(t)\\to 0$ as $t \\downarrow t_{0}$. On that interval, membership in $S$ forces

$v(t)=\\sin(1/u(t))$.

For every $\\delta>0$, continuity and positivity of $u$ on some point of $(t_{0},t_{0}+\\delta)$ imply that $u([t_{0},t_{0}+\\delta])$ contains $[0,a_{\\delta}]$ for some $a_{\\delta}>0$. Hence values of the form

$r_{n}=1/(\\pi/2+2 \\pi n)$ and $s_{n}=1/(3 \\pi/2+2 \\pi n)$

occur as first coordinates at times arbitrarily close to $t_{0}$. Choose times $a_{n},b_{n} \\in (t_{0},t_{0}+1/n)$ with $u(a_{n})=r_{k_{n}}$ and $u(b_{n})=s_{l_{n}}$ for sufficiently large indices. Then

$v(a_{n})=1$ and $v(b_{n})=-1$,

while both time sequences converge to $t_{0}$. This contradicts continuity of $v$ at $t_{0}$. $\\square$

The proof exposes the obstruction: approaching the limiting segment through the graph forces the second coordinate to oscillate through a fixed amplitude infinitely often. A picture suggests this; continuity plus the intermediate value property of the first coordinate proves it.

The sine curve is also not locally connected at any point of $V$. Here is a precise boundary argument. Fix $p=(0,y_{0}) \\in V$ and choose a proper relatively open interval $J \\subseteq [-1,1]$ containing $y_{0}$. Let

$O=S \\cap (\\mathbb{R} \\times J) \\cap (\\{(x,y):x<\\varepsilon\\})$

for some $\\varepsilon>0$; this is an open neighborhood of $p$ in $S$. The component of $p$ in $O$ is contained in $V \\cap (\\mathbb{R} \\times J)$. To see why it cannot contain a graph point $q$, choose a vertical line $x=c$ between $0$ and the first coordinate of $q$ at which $\\sin(1/c) \\notin J$. Such $c$ exist arbitrarily close to zero. The line $x=c$ misses $O$, so $O \\cap \\{x<c\\}$ and $O \\cap \\{x>c\\}$ separate $p$ from $q$ inside $O$. But the component containing $p$ is not open in $O$, because every neighborhood of $p$ meets $G$. By the local component theorem, $S$ is not locally connected at $p$.

This single space separates three notions cleanly:

- $S$ is connected;
- $S$ has two path components, $G$ and $V$;
- $S$ is not locally connected, hence not locally path connected, along $V$.

One should not call $V$ a connected component: the connected component of every point of $S$ is all of $S$. It is a path component.

## 11. A connectedness proof audit

When reading or writing a proof, ask:

1. Is the alleged separation relative to the space under discussion?
2. Are both sides nonempty, disjoint, open, and exhaustive?
3. Could a clopen set or a map to discrete $\\{0,1\\}$ shorten the argument?
4. Is connectedness being pushed forward under a continuous map, or incorrectly pulled backward?
5. Does a union have a common point, common connected core, or connected intersection graph?
6. Is the closure theorem being used in its valid direction?
7. Are components being assumed open without local connectedness or finiteness?
8. Are components and quasicomponents being identified without compact Hausdorff control?
9. Has path connectedness been proved, or only connectedness?
10. Does a local argument actually supply a basis of connected neighborhoods?

These checks locate most errors before calculation begins.

## TOP-CH09-P001 — Investigation project: a connectedness counterexample dossier

Choose three spaces from $\\mathbb{Q}$, the topologist's sine curve, the comb space, a convergent-sequence subspace, a finite non-Hausdorff space, or a quotient obtained by gluing intervals. For each space, determine its components, path components, and quasicomponents; decide connectedness, path connectedness, local connectedness, and local path connectedness; and give explicit separations or paths where they exist. At least one chosen space must distinguish two of the notions, and at least one conclusion must be justified through a clopen map to $\\{0,1\\}$ rather than a picture.

The final dossier should contain: exact definitions of the spaces, a table of conclusions, complete proofs of two nontrivial claims, one failed tempting argument with its repaired hypothesis, and a short explanation of which properties survive taking a closure, subspace, product, or quotient in the examples. Numerical plotting may guide conjectures, but every topological claim needs an open-set, closure, continuous-image, or path argument.

## Worked examples: three kinds of connected behavior

### Worked example 1 — A rational-valued continuous function is forced to stop moving

Suppose $X$ is connected and $f:X\\to\\mathbb R$ is continuous with rational values only. If two values $a<b$ occurred, choose an irrational $r$ strictly between them. The intermediate value theorem on a connected domain would require $r$ to occur as a value, a contradiction. Thus $f$ is constant. The proof does not require $X$ to be an interval, metrizable, or path connected. It uses connectedness of the image and the absence of any nontrivial real interval inside the rational set.

### Worked example 2 — Removing one point in two different dimensions

The punctured line $\\mathbb R\\setminus\\{0\\}$ has two components, its negative and positive open rays, because these are a separation and each is an interval. The punctured plane is path connected. For nonzero points $a,b$, choose a point $c$ lying on neither of the two lines through $0,a$ and $0,b$. Such a point exists because two lines cannot exhaust the plane. The line segments from $a$ to $c$ and from $c$ to $b$ avoid zero: otherwise the relevant endpoints would be collinear with zero. Concatenate their affine parametrizations to obtain a path. Hence puncturing does not have a dimension-independent effect on connectedness.

### Worked example 3 — Infinitely many closed components need not be open

Let $Y=\\{0\\}\\cup\\{1/n:n\\ge1\\}$ in the usual line. Any two distinct points can be separated by a real cut missing $Y$, which gives a clopen separation within $Y$. Thus every component and quasicomponent is a singleton. The point $1/n$ is isolated and its singleton is open, but $\\{0\\}$ is not open because every relative neighborhood contains sufficiently late terms $1/n$. All components are closed, yet one is not open. The finite-components proof cannot be repeated here: the complement of $\\{0\\}$ is an infinite union of closed components, and that union fails to be closed precisely because it accumulates at zero.

## Exercises with complete solutions

### TOP-CH09-E001 — Exercise 1

Prove that $X$ is connected if and only if every continuous map $f:X\\to \\{0,1\\}$, with $\\{0,1\\}$ discrete, is constant.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A nonconstant map to two discrete points gives two open fibers.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Conversely use the characteristic function of a nontrivial clopen set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E001 — Solution 1

If $f$ is nonconstant, it is onto. The sets $f^{-1}(\\{0\\})$ and $f^{-1}(\\{1\\})$ are nonempty, disjoint, open, and cover $X$, so they form a separation. Conversely, if $(U,V)$ separates $X$, define $f=0$ on $U$ and $f=1$ on $V$. The preimages of all subsets of $\\{0,1\\}$ are among $\\varnothing,U,V,X$, hence open, so $f$ is continuous and nonconstant.


</details>

### TOP-CH09-E002 — Exercise 2

Let $A=P\\cup Q$, where $P,Q$ are nonempty and disjoint. Prove that $(P,Q)$ is a separation of $A$ if and only if

$P \\cap \\operatorname{cl}_{A}(Q)=\\varnothing$ and $\\operatorname{cl}_{A}(P) \\cap Q=\\varnothing$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Because the two pieces cover A, being disjoint from the other's closure makes each relatively closed.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The complement relation then makes each piece relatively open as well.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E002 — Solution 2

If $(P,Q)$ is a separation, then $P=A\\setminus Q$ and $Q=A\\setminus P$ are closed in $A$. Hence $\\operatorname{cl}_{A}(P)=P$ and $\\operatorname{cl}_{A}(Q)=Q$, and the two displayed intersections are empty. Conversely, suppose the closure conditions hold. Because $A=P\\cup Q$, every point of $\\operatorname{cl}_{A}(P)\\setminus P$ would lie in $Q$, contradicting $\\operatorname{cl}_{A}(P)\\cap Q=\\varnothing$. Thus $P$ is closed in $A$; similarly $Q$ is closed in $A$. Each is the complement of the other, so both are also open in $A$. They are nonempty, disjoint, and cover $A$, hence form a separation.


</details>

### TOP-CH09-E003 — Exercise 3

Prove that a connected space with at least two points cannot have the discrete topology. Give a connected nontrivial space with the indiscrete topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Two distinct points in a discrete space can be separated by a singleton and its complement.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An indiscrete space has no nontrivial open separation.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E003 — Solution 3

In a discrete space with distinct points $x,y$, the singleton $\\{x\\}$ is a nonempty proper clopen set, so the space is disconnected. On any set $X$ with at least two points, the indiscrete topology $\\{\\varnothing,X\\}$ has no nontrivial open set and hence no nontrivial clopen set. Therefore it is connected.


</details>

### TOP-CH09-E004 — Exercise 4

Let $X$ be connected and $f:X\\to Z$ locally constant. Prove that $f$ is constant, without assuming that $Z$ is discrete.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The fiber of any one value of a locally constant map is open.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its complement is a union of other open fibers, so connectedness forbids two values.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E004 — Solution 4

If $X=\\varnothing$, the conclusion is vacuous. Otherwise fix $x_{0} \\in X$ and let $A=\\{x:f(x)=f(x_{0})\\}$. Local constancy makes $A$ open: every point of $A$ has a neighborhood on which the same value persists. Its complement is also open, because every point with a different value has a neighborhood on which that different value persists. Thus $A$ is nonempty and clopen. Connectedness forces $A=X$, so $f$ is constant.


</details>

### TOP-CH09-E005 — Exercise 5

Prove the continuous-image theorem using the clopen characterization rather than separations.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull back a proposed nontrivial clopen subset of the image.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Surjectivity onto the image preserves its nontriviality.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E005 — Solution 5

Let $f:X\\to Y$ be continuous, with $X$ connected, and suppose $H$ is clopen in the subspace $f(X)$. Regard $f$ as a surjection onto $f(X)$. Then $f^{-1}(H)$ is clopen in $X$, so it is $\\varnothing$ or $X$. Surjectivity gives respectively $H=\\varnothing$ or $H=f(X)$. Hence the image has no nontrivial clopen subset and is connected.


</details>

### TOP-CH09-E006 — Exercise 6

Show that a nonempty product $X \\times Y$ is connected if and only if both $X$ and $Y$ are connected.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use continuous projections for necessity.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For sufficiency assemble vertical slices through one horizontal connected slice.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E006 — Solution 6

If the product is connected, the coordinate projections are continuous and onto, so their images $X$ and $Y$ are connected. Conversely, assume both factors connected and choose $(x_{0},y_{0})$. The slice $X \\times \\{y_{0}\\}$ is homeomorphic to $X$. For each $x$, the slice $\\{x\\} \\times Y$ is homeomorphic to $Y$ and meets the first slice at $(x,y_{0})$. The union of the first slice with all vertical slices is the whole product; it is a union of connected sets with a common connected core, hence connected.


</details>

### TOP-CH09-E007 — Exercise 7

Classify the connected subsets of $Z$ with its usual subspace topology from $\\mathbb{R}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The integer subspace is discrete.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Only empty sets and singletons can avoid a discrete separation.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E007 — Solution 7

The topology on $Z$ is discrete because $\\{n\\}=Z \\cap (n-1/2,n+1/2)$ is open for every integer $n$. Any subset with at least two points has a singleton that is nonempty, proper, and clopen in that subset, so it is disconnected. Therefore the connected subsets are exactly $\\varnothing$ and the singletons.


</details>

### TOP-CH09-E008 — Exercise 8

Let $f:X\\to \\mathbb{R}$ be continuous on connected $X$, and suppose $f(x)$ is rational for every $x$. Must $f$ be constant? Prove the answer.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The image is a connected subset of the real line.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Any two distinct rational values have an irrational number strictly between them.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E008 — Solution 8

Yes. The image $f(X)$ is a connected subset of $\\mathbb{R}$, hence an interval. If it contained distinct rationals $a<b$, it would contain every real number between them, including irrationals, contradicting $f(X) \\subseteq \\mathbb{Q}$. Thus the image has at most one point, and $f$ is constant.


</details>

### TOP-CH09-E009 — Exercise 9

Prove that if a family of connected subsets has a connected intersection graph, then its union is connected.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A graph path uses only finitely many intersections.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Each chain has connected union, so any separation would force adjacent pieces to the same side.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E009 — Solution 9

Fix one member $C_{0}$. For any member $C$, a finite graph path $C_{0},C_{1},...,C_{n}=C$ has successive nonempty intersections. Induction with the two-set union theorem shows $C_{0} \\cup ... \\cup C_{n}$ is connected and contains $C_{0}$. The union over all such finite-chain unions is a family of connected sets with common subset $C_{0}$, so its union is connected. That union is exactly the union of the original family.


</details>

### TOP-CH09-E010 — Exercise 10

Suppose $A$ is connected and $A \\subseteq B \\subseteq \\operatorname{cl}_{X}(A)$. Prove directly that every continuous map $g:B\\to \\{0,1\\}$ is constant.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

First restrict the map to A.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The fiber of the other value, if nonempty, would be relatively open and miss the dense subset A.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E010 — Solution 10

The restriction $g|_{A}$ is continuous, hence constant; say it equals $0$. Then $A \\subseteq g^{-1}(\\{0\\})$. This preimage is closed in $B$, so it contains $\\operatorname{cl}_{B}(A)$. Because $A \\subseteq B \\subseteq \\operatorname{cl}_{X}(A)$, every point of $B$ lies in $\\operatorname{cl}_{B}(A)$: a relative neighborhood $B \\cap U$ of such a point meets $A$ whenever ambient $U$ does. Thus $\\operatorname{cl}_{B}(A)=B$, so $g$ is constantly $0$. By the two-point map criterion, $B$ is connected.


</details>

### TOP-CH09-E011 — Exercise 11

Prove that components form a partition and are closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Two intersecting connected sets have connected union.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use maximality for partition and connectedness of closure for closedness.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E011 — Solution 11

Every point belongs to the union of all connected sets containing it, because its singleton is one such set. If $C(x)$ meets $C(y)$, their union is connected, so maximality gives $C(x)=C(y)$; otherwise they are disjoint. Hence components partition $X$. The closure $\\operatorname{cl}_{X}(C(x))$ is connected and contains $C(x)$. Maximality forces the closure to equal $C(x)$, so every component is closed.


</details>

### TOP-CH09-E012 — Exercise 12

Show that if a space has finitely many components, every component is clopen. Explain why the proof does not extend to infinitely many components.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The complement of one component is a finite union of closed components.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

An infinite union of closed sets need not be closed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E012 — Solution 12

Each component is closed. If the components are $C_{1},...,C_{n}$, then $X\\setminus C_{i}$ is the finite union of the other closed components, hence closed. Therefore $C_{i}$ is open as well as closed. With infinitely many components, the complement is an infinite union of closed sets, which need not be closed. In $\\mathbb{Q}$, components are singleton closed sets, but no singleton is open.


</details>

### TOP-CH09-E013 — Exercise 13

Compute the components and quasicomponents of $\\mathbb{Q}$ in its usual topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use an irrational cut between two different rationals.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It gives a clopen set separating them, so both kinds of component are singletons.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E013 — Solution 13

Every component is a singleton: if a connected subset contained rationals $a<b$, choose an irrational $\\alpha$ between them; the traces of $(-\\infty,\\alpha)$ and $(\\alpha,\\infty)$ would separate it. For distinct rationals $p<q$, choose irrational $\\alpha$ between them. The set $\\mathbb{Q} \\cap (-\\infty,\\alpha)$ is clopen in $\\mathbb{Q}$, contains $p$, and omits $q$, since its complement is $\\mathbb{Q} \\cap (\\alpha,\\infty)$. Therefore clopen sets distinguish every pair, so each quasicomponent is also a singleton. The equality here does not make the singleton components open.


</details>

### TOP-CH09-E014 — Exercise 14

Let $f:X\\to Y$ be continuous. Prove that $f(C)$ lies in one component of $Y$ whenever $C$ is a component of $X$. Give an example where it is a proper subset of that component.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The continuous image of a component is connected.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A constant map into a nontrivial connected space shows proper containment can occur.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E014 — Solution 14

The image $f(C)$ is connected by continuity. It contains $f(x)$ for any chosen $x \\in C$, so maximality of the component $C_{Y}(f(x))$ gives $f(C) \\subseteq C_{Y}(f(x))$. For strict containment, take any nonempty connected $X$, let $Y=\\mathbb{R}$, and let $f$ be constant. Then $f(C)$ is one point while the component of that point in $\\mathbb{R}$ is all of $\\mathbb{R}$.


</details>

### TOP-CH09-E015 — Exercise 15

Prove that path connectedness is preserved by continuous images and, assuming the needed coordinate paths are chosen, by arbitrary products of nonempty path-connected spaces.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compose a path with the continuous map.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For products, assemble chosen coordinate paths using the product universal property.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E015 — Solution 15

If $\\gamma$ joins $x$ to $y$ in $X$ and $f:X\\to Y$ is continuous, then $f \\circ \\gamma$ joins $f(x)$ to $f(y)$, proving the image path connected. For a product $\\prod_iX_i$, choose points $x=(x_i)$ and $y=(y_i)$. For each $i$, choose a path $\\gamma_i$ from $x_i$ to $y_i$; for an arbitrary index family, making all these choices uses the corresponding choice principle. Define $\\gamma(t)=(\\gamma_{i}(t))_{i}$. Every coordinate $\\pi_{i} \\circ \\gamma=\\gamma_{i}$ is continuous, so the product continuity criterion makes $\\gamma$ continuous. It has endpoints $x,y$, proving the product path connected.


</details>

### TOP-CH09-E016 — Exercise 16

Prove that a convex subset $C$ of $\\mathbb{R}^n$ is path connected. Then show the punctured plane $\\mathbb{R}^{2}\\setminus \\{0\\}$ is path connected even though it is not convex.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A line segment gives a path in a convex set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

In the punctured plane use two segments through an intermediate point avoiding the two dangerous rays.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E016 — Solution 16

For $x,y \\in C$, convexity keeps $(1-t)x+ty$ in $C$; this formula is continuous and joins the points. For the punctured plane, join each point radially to its normalization on the unit circle, use an arc of the unit circle between the normalized points, and then travel radially to the second point. None of these path segments passes through the origin. Concatenating the three paths gives a path in $\\mathbb{R}^{2}\\setminus \\{0\\}$. Nonconvexity follows because the segment from $(1,0)$ to $(-1,0)$ contains the omitted origin.


</details>

### TOP-CH09-E017 — Exercise 17

Prove that in a locally path-connected space, connected components and path components coincide and are open.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every point has path-connected neighborhoods.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Path components therefore are open, and a connected component cannot split among distinct such open pieces.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E017 — Solution 17

Let $C$ be a connected component. The subspace $C$ is connected. Local path connectedness of $X$ implies that path components of the open set $X$ are open in $X$. Each path component is connected, so each lies within a connected component. Therefore $C$ is partitioned into path components that are open in $C$; the complement of each is a union of the others and is also open. Connectedness of $C$ permits only one path component. Hence $C$ equals a path component, and it is open in $X$ by the local path-component theorem.


</details>

### TOP-CH09-E018 — Exercise 18

Determine the connected components and path components of the topologist's sine curve $S$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use connectedness of the closure of the oscillating graph.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The oscillation obstruction prevents a path from the limiting vertical segment to the graph.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E018 — Solution 18

The graph $G$ is the continuous image of path-connected $(0,\\infty)$, so it is path connected. Its closure $S=G \\cup V$ is connected, hence all of $S$ is one connected component. The vertical segment $V=\\{0\\} \\times [-1,1]$ is path connected by straight vertical paths. No path joins $V$ to $G$: after the last time its first coordinate is zero, continuity and the intermediate value theorem force first-coordinate values at which $\\sin(1/x)=1$ and $\\sin(1/x)=-1$ arbitrarily near that time, contradicting continuity of the second coordinate. Therefore the path components are exactly $G$ and $V$.


</details>

### TOP-CH09-E019 — Exercise 19

Give two connected subsets of $\\mathbb{R}^{2}$ with disconnected intersection, and explain why this does not contradict the union theorem.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the upper and lower semicircles including their endpoints.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Their intersection consists of two points; the union theorem concerns a union with overlap, not the intersection.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E019 — Solution 19

Let $A=\\{(\\cos t,\\sin t):0\\le t\\le \\pi\\}$ be the upper semicircle and $B=\\{(\\cos t,\\sin t):\\pi\\le t\\le 2\\pi\\}$ the lower semicircle. Each is a continuous image of an interval and is path connected. Their intersection is $\\{(-1,0),(1,0)\\}$, a discrete two-point subspace and therefore disconnected. The union theorem concerns unions of connected sets that meet; since $A \\cap B$ is nonempty, it correctly says $A \\cup B=S^{1}$ is connected. It makes no claim that their intersection is connected.


</details>

### TOP-CH09-E020 — Exercise 20

For each implication below, either prove it or give a counterexample and state a sufficient repair:

(a) connected implies path connected;

(b) locally path connected implies connected;

(c) every component is open;

(d) component equals quasicomponent.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Audit global connectedness, paths, and local properties separately.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The sine curve, a disconnected union of intervals, and the rational line supply several counterexamples; compact Hausdorffness repairs the quasicomponent equality.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH09-E020 — Solution 20

(a) False: the topologist's sine curve is connected but has two path components. A sufficient repair is connected plus locally path connected; then open path components would separate the space unless there were only one.

(b) False: $(0,1) \\cup (2,3)$ is locally path connected but disconnected. Adding connectedness gives path connectedness by the same open-path-component argument.

(c) False: components of $\\mathbb{Q}$ are singletons, none open. Components are open if the space is locally connected; they are also open when there are only finitely many components.

(d) False in general. In $X=((\\{0\\} \\cup \\{1/n:n\\ge 1\\}) \\times [-1,1])\\setminus \\{(0,0)\\}$, projection to the first coordinate shows that $\\{0\\} \\times [-1,0)$ and $\\{0\\} \\times (0,1]$ are different components. Yet they lie in the same quasicomponent: a clopen set containing the lower component contains, by openness, points on all sufficiently late vertical intervals; connectedness makes it contain each whole interval, and closedness then puts the upper limiting component into it. The universal inclusion is only $C(x) \\subseteq Q(x)$. Compact Hausdorff is a sufficient repair: normality separates a proposed disconnection of $Q(x)$, and compactness reduces the clopen exclusions of exterior points to finitely many, producing a clopen set that contradicts the definition of $Q(x)$. Thus quasicomponents are connected and equal components under those hypotheses.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## Chapter checkpoint

Connectedness can be tested by separations, clopen sets, or continuous maps to a discrete two-point space. Continuous images, common-core unions, and closures preserve it; inverse images, arbitrary subspaces, and intersections do not. Components are maximal connected closed pieces, quasicomponents are pieces invisible to clopen tests, and path components are equivalence classes of explicit routes. Local connectedness controls openness of components, while local path connectedness lets connectedness promote to path connectedness. The topologist's sine curve marks the boundary: closure preserves its connected graph, but infinite oscillation prevents paths to the limiting segment and destroys local connectedness there.
`;export{e as default};