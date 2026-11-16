
# Continuity: Open, Closed, and Neighborhood Tests

Continuity is not fundamentally about formulas or small numerical errors. It says that the topology of the codomain never demands more local control than the topology of the domain can supply. That statement has several equivalent forms: inverse images preserve open sets, inverse images preserve closed sets, closures map into closures, and neighborhoods can be pulled back locally. Each form supports a different proof.

This chapter develops those tests from the axioms and keeps their logical boundaries visible. Unless stated otherwise, $X$ and $Y$ are topological spaces and $f:X\to Y$ is a function. No separation, countability, or metric hypothesis is silently assumed.

## 1. The global open-set definition

A function $f:X\to Y$ is **continuous** when

$V\subseteq Y\text{ open}\implies f^{-1}(V)\subseteq X\text{ open}$.

The inverse image is the correct operation because it respects all set operations used in the topology axioms:

$f^{-1}(\bigcup_\alpha V_\alpha)=\bigcup_\alpha f^{-1}(V_\alpha)$,

$f^{-1}(V\cap W)=f^{-1}(V)\cap f^{-1}(W)$,

and $f^{-1}(Y)=X$. Direct images preserve unions but generally not intersections or complements relative to the full codomain. Continuity therefore does **not** say that images of open sets are open.

For example, the inclusion $i:[0,1]\to \mathbb{R}$ is continuous. The set $[0,1)$ is open in the subspace $[0,1]$, yet its image $[0,1)$ is not open in $\mathbb{R}$. Thus a continuous map need not be an open map. Likewise, the projection of the hyperbola $\{(x,1/x):x\ne 0\}$—a closed subset of $\mathbb{R}^{2}$—onto the first coordinate is $\mathbb{R}\setminus \{0\}$, which is not closed; a continuous map need not be closed.

### A proof from a basis

If $B$ is a basis for $Y$, then $f$ is continuous exactly when $f^{-1}(B)$ is open in $X$ for every $B\in B$. Necessity is immediate. Conversely, every open $V\subseteq Y$ is a union of basis elements, so its inverse image is a union of open inverse images.

This reduces work. To prove a real-valued function continuous, it is enough to pull back open intervals. For a product, it is enough to pull back basic cylinders. A test on a **subbasis** also suffices: finite intersections of subbasic sets form a basis, and inverse images commute with finite intersections.

## 2. Immediate constructions and variance of topology

The identity $\operatorname{id}_{X}:X\to X$ is continuous because $\operatorname{id}_{X}^{-1}(U)=U$. A constant map $c:X\to Y$, $c(x)=y_{0}$, is continuous: the inverse image of an open set is either $X$ or $\varnothing$.

If $f:X\to Y$ and $g:Y\to Z$ are continuous, then $g\circ f$ is continuous, since

$(g\circ f)^{-1}(W)=f^{-1}(g^{-1}(W))$.

The topology comparison rule is worth deriving rather than memorizing. Suppose $T_{X}\subseteq T'_{X}$; the primed domain topology is finer. Any inverse image open in $T_{X}$ remains open in $T'_{X}$, so refining the domain preserves continuity. If $T'_{Y}\subseteq T_{Y}$, the primed codomain topology is coarser. There are fewer target opens to test, so coarsening the codomain preserves continuity.

The reverse changes can destroy continuity. On a set $S$ with at least two points, the identity

$\operatorname{id}:(S,\text{discrete})\to(S,\text{indiscrete})$

is continuous, but the reverse identity is not: a proper nonempty subset is open in the discrete codomain and has the same, nonopen inverse image in the indiscrete domain. This example also shows that a continuous bijection need not have a continuous inverse.

## 3. The closed-set criterion

The following are equivalent:

1. $f$ is continuous;
2. $f^{-1}(F)$ is closed in $X$ whenever $F$ is closed in $Y$.

Indeed, inverse images commute with complements:

$f^{-1}(Y\setminus F)=X\setminus f^{-1}(F)$.

If inverse images of opens are open, take complements to obtain the closed condition. The converse is identical.

The criterion is often efficient when the target is described by equations. If $g:X\to \mathbb{R}$ is continuous, the zero set $g^{-1}(\{0\})$ is closed because $\{0\}$ is closed in $\mathbb{R}$. Thus, assuming the coordinate operations are already known continuous, the unit sphere $\{x\in \mathbb{R}^{n}:\sum_i x_i^2=1\}$ is closed.

The singleton argument depends on the target. If $Y$ is $T_{1}$, every fiber $f^{-1}(\{y\})$ of a continuous map is closed. Without $T_{1}$, this conclusion fails: take the identity map on the Sierpiński space $S=\{0,1\}$ with topology $\{\varnothing,\{1\},S\}$. It is continuous, but the fiber over $1$ is $\{1\}$, which is not closed. Thus continuity forces fibers to be closed only when the corresponding target singletons are closed.

## 4. Neighborhoods and continuity at a point

A **neighborhood** of $x\in X$ is a set $N\subseteq X$ containing some open set $U$ with $x\in U$. The neighborhood itself need not be open. Define $f$ to be **continuous at $x$** if for every neighborhood $V$ of $f(x)$, there is a neighborhood $U$ of $x$ such that $f(U)\subseteq V$.

It is equivalent to test only open neighborhoods $V$ and to choose $U$ open. Given a general neighborhood $V$, select an open $W$ with $f(x)\in W\subseteq V$. If the open version gives an open $U$ with $f(U)\subseteq W$, it also gives the required inclusion into $V$.

Global continuity is equivalent to continuity at every point. If $f$ is globally continuous and $V$ is open around $f(x)$, then $f^{-1}(V)$ is an open neighborhood of $x$ mapped into $V$. Conversely, suppose the pointwise condition holds. For an open $V\subseteq Y$ and every $x\in f^{-1}(V)$, choose an open $U_{x}$ around $x$ with $f(U_{x})\subseteq V$. Then

$f^{-1}(V)=\bigcup_{x\in f^{-1}(V)} U_{x}$,

so the inverse image is open.

### Local bases

A family $B_{x}$ is a **local base at $x$** if every neighborhood of $x$ contains some $B\in B_{x}$ that is itself a neighborhood of $x$. To check continuity at $x$, it suffices to test a local base at $f(x)$: for each $B\in B_{f(x)}$, find a neighborhood $U$ of $x$ with $f(U)\subseteq B$.

In metric spaces the balls $B(y,\varepsilon)$ form a local base. The neighborhood statement then becomes the familiar $\varepsilon-\delta$ definition. The metric language is a specialization, not the definition's source.

## 5. Closure as a universal contact test

For $A\subseteq X$, a point $x$ lies in the closure $\operatorname{cl}_{X}(A)$ exactly when every neighborhood of $x$ meets $A$. The subscript matters when several ambient spaces are present.

Continuity implies the **closure inclusion**

$f(\operatorname{cl}_{X}(A))\subseteq \operatorname{cl}_{Y}(f(A))$ for every $A\subseteq X$.

To prove it, take $x\in \operatorname{cl}_{X}(A)$ and a neighborhood $V$ of $f(x)$. Continuity at $x$ gives a neighborhood $U$ of $x$ with $f(U)\subseteq V$. Because $x\in \operatorname{cl}_{X}(A)$, choose $a\in U\cap A$. Then $f(a)\in V\cap f(A)$, so every neighborhood of $f(x)$ meets $f(A)$.

The closure inclusion also characterizes continuity. Assume it for all $A\subseteq X$. If $F\subseteq Y$ is closed, put $A=f^{-1}(F)$. Then

$f(\operatorname{cl}_{X}(A))\subseteq \operatorname{cl}_{Y}(f(A))\subseteq F$.

Therefore $\operatorname{cl}_{X}(A)\subseteq f^{-1}(F)=A$, so $A$ is closed. The closed-set criterion gives continuity.

### Equality is too strong

One must not replace inclusion by equality. Let $f:\mathbb{R}\to \mathbb{R}$ be $f(x)=\arctan x$ and take $A=\mathbb{R}$. Then

$f(\operatorname{cl}(A))=(-\pi/2,\pi/2)$, while $\operatorname{cl}(f(A))=[-\pi/2,\pi/2]$.

The two missing endpoint values are approached by images without being images of domain closure points. Continuity controls limits already represented in the domain; it need not make its image closed.

## 6. Interior and closure operators

The closure criterion has an interior dual:

$f^{-1}(\operatorname{int}_{Y}(B))\subseteq \operatorname{int}_{X}(f^{-1}(B))$ for every $B\subseteq Y$.

If $x$ lies on the left, some open target set $V$ satisfies $f(x)\in V\subseteq B$. Its inverse image is open, contains $x$, and lies in $f^{-1}(B)$. Conversely, if this inclusion holds for all $B$, choose $B=V$ open. Then

$f^{-1}(V)\subseteq \operatorname{int}_{X}(f^{-1}(V))\subseteq f^{-1}(V)$,

so the inverse image is open and $f$ is continuous.

Another equivalent formula is

$\operatorname{cl}_{X}(f^{-1}(B))\subseteq f^{-1}(\operatorname{cl}_{Y}(B))$.

This follows from continuity because the right side is closed and contains $f^{-1}(B)$. It is related to, but different from, $f(\operatorname{cl}(A))\subseteq \operatorname{cl}(f(A))$. The placement of $f$ and $f^{-1}$ is not cosmetic.

Direct-image interior inclusions generally fail. The constant map from $\mathbb{R}$ to $\mathbb{R}$ sends the open set $\mathbb{R}$ to a singleton with empty interior. Direct-image closure equality also fails by the arctangent example. A reliable proof tracks whether the set operator and the map have the same variance.

## 7. Nets, sequences, and the first-countability boundary

A sequence $(x_{n})$ converges to $x$ if every neighborhood of $x$ contains all sufficiently late terms. Every continuous map preserves convergent sequences: apply the pointwise neighborhood test.

The converse holds in first-countable spaces. Suppose $X$ has a nested countable local base $B_{1}\supseteq B_{2}\supseteq \cdots$ at $x$ and $f$ is not continuous at $x$. Some neighborhood $V$ of $f(x)$ has the property that no $B_{n}$ maps into $V$. Choose $x_{n}\in B_{n}$ with $f(x_{n})\notin V$. The nesting and local-base property imply $x_{n}\to x$, but the image sequence does not converge to $f(x)$.

Without a countability hypothesis, sequential continuity can be strictly weaker. Let $X=[0,\omega_{1}]$, the ordinal interval through the first uncountable ordinal with its order topology, and let $Y=\{0,1\}$ be discrete. Define $f(\alpha)=0$ for $\alpha<\omega_{1}$ and $f(\omega_{1})=1$. The countably many terms of any sequence that stay below $\omega_1$ have a supremum $\beta<\omega_1$. If a sequence converges to $\omega_1$, it is eventually in $(\beta,\omega_1]$ and therefore eventually equal to $\omega_1$. Thus sequential continuity at $\omega_1$ holds. Yet $f^{-1}(\{1\})=\{\omega_{1}\}$ is not open; $f$ is not continuous.

Nets repair this limitation. A **net** is a function from a directed set into $X$. It converges to $x$ when it is eventually in every neighborhood of $x$. A map is continuous exactly when it preserves convergence of all nets. The proof of the difficult direction indexes a net by neighborhoods ordered by reverse inclusion and chooses a witness point from each failed local condition. Sequences are nets indexed only by the natural numbers, so they cannot encode every uncountable neighborhood system.

## 8. Restrictions, pasting, and local-to-global proofs

If $f:X\to Y$ is continuous and $A\subseteq X$ has the subspace topology, then the restriction $f|_{A}:A\to Y$ is continuous. For an open $V\subseteq Y$,

$(f|_{A})^{-1}(V)=A\cap f^{-1}(V)$,

which is open in $A$.

The converse needs a cover. If $\{U_\alpha\}$ is an open cover of $X$ and every restriction $f|_{U_\alpha}$ is continuous, then $f$ is continuous: for open $V\subseteq Y$, each $U_\alpha\cap f^{-1}(V)$ is open in $U_\alpha$ and, because $U_\alpha$ is open in $X$, also open in $X$; their union is $f^{-1}(V)$.

The **pasting lemma** gives a closed-cover version for finitely many pieces. Suppose $X=A_{1}\cup \cdots\cup A_{n}$, every $A_{i}$ is closed, each restriction $f|_{A_{i}}$ is continuous, and the formulas agree wherever pieces overlap. For a closed $F\subseteq Y$,

$f^{-1}(F)=\bigcup_{i=1}^n (f|_{A_{i}})^{-1}(F)$.

Each term is closed in $A_{i}$, hence closed in $X$; a finite union is closed. The finite qualification is essential. Cover $\mathbb{R}$ by closed singletons and define any discontinuous function on $\mathbb{R}$. Every singleton restriction is continuous, but the assembled function need not be.

For a locally finite closed cover the lemma remains true: a locally finite union of closed sets is closed. Local finiteness supplies, near each exterior point, a neighborhood meeting only finitely many pieces.

## 9. Product-valued and coordinate-valued maps

Give $\prod_{i\in I}Y_{i}$ the product topology, and let $\pi_{i}$ be the coordinate projections. A map

$f:X\to \prod_{i\in I}Y_{i}$

is continuous exactly when every coordinate $\pi_{i}\circ f$ is continuous. Necessity follows by composition. For sufficiency, the sets $\pi_{i}^{-1}(V)$ form a subbasis for the product topology, and

$f^{-1}(\pi_{i}^{-1}(V))=(\pi_{i}\circ f)^{-1}(V)$.

This theorem works for arbitrary products because basic product neighborhoods restrict only finitely many coordinates. It is false for the box topology. Define $f:\mathbb{R}\to \mathbb{R}^{\mathbb{N}}$ by $f(t)=(t,t,t,...)$. Every coordinate is continuous. In the box topology, however, the box

$W=\prod_{n\ge 1}(-1/n,1/n)$

is a neighborhood of the zero sequence. Its inverse image under $f$ is $\{0\}$, not open in $\mathbb{R}$. Coordinatewise continuity does not imply box continuity.

For maps out of a product, separate continuity is weaker than joint continuity. The function

$h(x,y)=xy/(x^{2}+y^{2})$ for $(x,y)\ne(0,0)$, and $h(0,0)=0$,

is continuous in each variable with the other fixed. Along the diagonal $(t,t)$, its value is $1/2$, so it is not continuous at the origin. Testing slices does not test all product neighborhoods.

## 10. Universal sources and targets

Some domain or codomain topologies make continuity automatic:

- Every map **from a discrete space** is continuous because all inverse images are open.
- Every map **to an indiscrete space** is continuous because only $\varnothing$ and the whole space must be tested.
- A map **to a discrete space** is continuous exactly when every fiber is open; equivalently, it is locally constant.
- Every continuous map **from a nonempty indiscrete space** to a $T_{0}$ space is constant.

For the last claim, if an image contained distinct $y_{0},y_{1}$, $T_{0}$ would provide an open set containing one but not the other. Its inverse image would be a proper nonempty subset of the indiscrete domain, impossible for a continuous map.

These extremes are useful counterexample generators. They also prevent a common reversal: discreteness of the **domain** helps continuity, while discreteness of the **codomain** makes continuity demanding.

## 11. Homeomorphisms, embeddings, and compact-to-Hausdorff

A **homeomorphism** is a bijection $f:X\to Y$ for which both $f$ and $f^{-1}$ are continuous. It transports all open sets exactly. A continuous bijection alone does not: the discrete-to-indiscrete identity is the minimal counterexample.

There are useful sufficient conditions. If $f$ is a continuous bijection and is either open or closed, then $f^{-1}$ is continuous. Indeed, for open $U\subseteq X$, $(f^{-1})^{-1}(U)=f(U)$, which is open when $f$ is open; the closed argument is dual.

Most importantly, a continuous bijection from a compact space $X$ to a Hausdorff space $Y$ is a homeomorphism. If $F\subseteq X$ is closed, then $F$ is compact. Its image $f(F)$ is compact by continuity and closed because compact subsets of Hausdorff spaces are closed. Thus $f$ is closed.

Both material hypotheses matter. The identity from an infinite set with the cofinite topology to the same set with the indiscrete topology is a continuous bijection from a compact space to a non-Hausdorff space and need not be a homeomorphism. Conversely, $f:[0,2\pi)\to S^{1}$, $f(t)=(\cos t,\sin t)$, is a continuous bijection into a Hausdorff space, but the noncompact domain permits the inverse to fail at $(1,0)$.

## 12. A continuity proof audit

Before accepting a proof, ask:

1. Is the topology on every source, target, subspace, and product explicit?
2. Would opens, closed sets, a basis, or neighborhoods minimize the work?
3. Is the proof using inverse images, which preserve the relevant operations, or making an unjustified direct-image claim?
4. If sequences are used for a converse, is the domain first-countable or otherwise known to be sequential?
5. If formulas are pasted, is the cover open, finite closed, or locally finite closed, and do formulas agree on overlaps?
6. If coordinate maps are checked, is the target equipped with the product topology rather than the box topology?
7. If a continuous bijection is called a homeomorphism, what makes its inverse continuous?
8. Which hypothesis is ruled indispensable by the nearest counterexample?

## Worked examples: choosing a continuity test

### Worked example 1 — A continuous threshold detector has an open signal

Let $S=\{0,1\}$ have opens $\varnothing,\{1\},S$, and let $f:X\to S$ be any function. There is only one nontrivial open-set test: $f^{-1}(\{1\})$ must be open in $X$. Thus characteristic functions into this Sierpinski space correspond exactly to open subsets of $X$. There is no requirement that the zero fiber be open. This differs from a discrete two-point target, where both fibers must be open. The calculation gives a useful reason for recording the target topology whenever a function is described as an indicator or detector.

### Worked example 2 — Pasting at one boundary point

Define $g:\mathbb R\to\mathbb R$ by $g(x)=x^2$ for $x\le0$ and $g(x)=x$ for $x\ge0$. Both formulas are continuous on their closed half-lines and give zero at the overlap. For any closed $F\subseteq\mathbb R$, the inverse image of $F$ is the union of the two relatively closed inverse images in those half-lines. Because each half-line is ambient-closed and there are only two pieces, this union is closed in $\mathbb R$. Hence $g$ is continuous. Agreement at the overlap is indispensable: changing the second formula to $x+1$ would make the prescriptions disagree at zero, so they would not even define one function there without an additional convention.

### Worked example 3 — A closed image needs more than continuity

The map $h:(0,\infty)\to\mathbb R$, $h(t)=1/t$, is continuous: near any positive input its denominator stays bounded away from zero, and the identity $|1/t-1/s|=|t-s|/(ts)$ gives the local estimate. The whole domain is closed in itself, but its image $(0,\infty)$ is not closed in the target. This is consistent with the closed-set criterion for continuity, which concerns inverse images of target-closed sets. It does not assert that images of domain-closed sets are closed. To obtain that conclusion one needs an additional closed-map hypothesis or a sufficient condition such as compact domain and Hausdorff target.

## 13. Exercises with complete worked solutions

### TOP-CH03-E001 — 1. Preimages and unions

Prove directly that $f^{-1}(\bigcup_{\alpha} V_\alpha)=\bigcup_{\alpha} f^{-1}(V_\alpha)$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Test whether a fixed point belongs to either side.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Membership in a union means that at least one index works.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E001 — Solution

For $x\in X$, membership in the left side means $f(x)\in \bigcup_{\alpha} V_\alpha$, which means that $f(x)\in V_\alpha$ for at least one index $\alpha$. This is equivalent to $x\in f^{-1}(V_\alpha)$ for at least one $\alpha$, hence to membership in the right side. The two sets have the same elements.


</details>

### TOP-CH03-E002 — 2. A basis test

Let $B$ be a basis for $Y$. Prove that if $f^{-1}(B)$ is open for every $B\in B$, then $f$ is continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write a target-open set as a union of basis members.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Take its inverse image and use stability of open sets under unions.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E002 — Solution

Every open $V\subseteq Y$ is the union of all basis elements contained in it, say $V=\bigcup_{\alpha} B_\alpha$. Then $f^{-1}(V)=\bigcup_{\alpha} f^{-1}(B_\alpha)$. Each term is open by hypothesis, and arbitrary unions of open sets are open. Thus inverse images of all target-open sets are open.


</details>

### TOP-CH03-E003 — 3. Continuous does not mean open

Give a continuous function that is not an open map and verify both assertions.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Try a continuous inclusion of a subspace into the line.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A relatively open set at an endpoint need not be ambient-open.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E003 — Solution

The inclusion $i:[0,1]\to \mathbb{R}$, with the usual subspace topology on the domain, is continuous because $i^{-1}(V)=V\cap[0,1]$ is relatively open whenever $V$ is open in $\mathbb{R}$. The domain set $[0,1)$ is open in $[0,1]$, since it equals $(-1,1)\cap[0,1]$, but its image $[0,1)$ is not open in $\mathbb{R}$. Hence $i$ is not open.


</details>

### TOP-CH03-E004 — 4. Continuous does not mean closed

Show that the projection $\pi_{1}:\mathbb{R}^{2}\to \mathbb{R}$ is continuous but is not a closed map.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Consider the hyperbola with equation xy=1.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Multiplication detects its closedness, but its projection misses just zero.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E004 — Solution

It is continuous because the inverse image of an open $U\subseteq \mathbb{R}$ is the open set $U\times \mathbb{R}$. The set $C=\{(x,y):xy=1\}$ is closed: it is the inverse image of $\{1\}$ under the continuous multiplication map. Yet $\pi_{1}(C)=\mathbb{R}\setminus \{0\}$, which is not closed in $\mathbb{R}$. Therefore the projection need not send closed sets to closed sets.


</details>

### TOP-CH03-E005 — 5. Closed-set equivalence

Derive the open-set definition of continuity from the assumption that inverse images of closed sets are closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Replace a target-open set by its closed complement.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Preimages commute with complementation.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E005 — Solution

Let $V\subseteq Y$ be open. Its complement $Y\setminus V$ is closed, so $f^{-1}(Y\setminus V)$ is closed in $X$. Preimages commute with complements, giving $f^{-1}(Y\setminus V)=X\setminus f^{-1}(V)$. Hence the complement of $f^{-1}(V)$ is closed, so $f^{-1}(V)$ is open. This holds for every open $V$.


</details>

### TOP-CH03-E006 — 6. Continuity under topology change

Suppose $f:(X,T_{X})\to(Y,T_{Y})$ is continuous. Prove it remains continuous if the topology on $X$ is refined and the topology on $Y$ is coarsened.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Follow one open set from the new codomain through its inverse image.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The old inverse image remains open in a refined domain.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E006 — Solution

Let $T'_{X}$ contain $T_{X}$ and let $T'_{Y}$ be contained in $T_{Y}$. For every $V\in T'_{Y}$, continuity of the original map gives $f^{-1}(V)\in T_{X}$. Since $T_{X}\subseteq T'_{X}$, that inverse image is open in the new domain. Thus all opens in the new codomain pass the preimage test.


</details>

### TOP-CH03-E007 — 7. A continuous bijection without continuous inverse

Construct a continuous bijection that is not a homeomorphism.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Keep the same two-point underlying set and change its topology.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The identity from discrete to indiscrete is continuous; check the reverse map on a singleton.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E007 — Solution

On $S=\{0,1\}$, let $D$ be the discrete topology and $I=\{\varnothing,S\}$ the indiscrete topology. The identity $id:(S,D)\to(S,I)$ is bijective and continuous because the only target opens have inverse images $\varnothing$ and $S$. Its inverse is not continuous: $\{0\}$ is open in the discrete codomain but its inverse image $\{0\}$ is not open in the indiscrete domain.


</details>

### TOP-CH03-E008 — 8. Pointwise implies global

Assume the neighborhood definition of continuity holds at every $x\in X$. Prove $f$ is globally continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Fix a target-open set and work at each point of its inverse image.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The union of all the resulting domain neighborhoods is that inverse image.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E008 — Solution

Let $V\subseteq Y$ be open. For every $x\in f^{-1}(V)$, the set $V$ is a neighborhood of $f(x)$, so choose an open neighborhood $U_x$ of $x$ satisfying $f(U_x)\subseteq V$. Then every $U_x$ lies in $f^{-1}(V)$, and every point of $f^{-1}(V)$ lies in its chosen $U_x$. Hence

$f^{-1}(V)=\bigcup_{x\in f^{-1}(V)}U_x$,

an open set.


</details>

### TOP-CH03-E009 — 9. Closure preservation

Using neighborhoods only, prove that continuity implies $f(\operatorname{cl}(A))\subseteq \operatorname{cl}(f(A))$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take any neighborhood of the image point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Pull it back, meet the original set, and send that witness forward.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E009 — Solution

Take $x\in \operatorname{cl}(A)$ and any neighborhood $V$ of $f(x)$. Continuity at $x$ gives a neighborhood $U$ of $x$ with $f(U)\subseteq V$. Since every neighborhood of $x$ meets $A$, select $a\in U\cap A$. Then $f(a)\in V\cap f(A)$. Thus every neighborhood of $f(x)$ meets $f(A)$, which says $f(x)\in \operatorname{cl}(f(A))$.


</details>

### TOP-CH03-E010 — 10. Strict closure inclusion

Find continuous $f$ and $A$ for which $f(\operatorname{cl}(A))$ is a proper subset of $\operatorname{cl}(f(A))$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A continuous map may have a nonclosed image.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A bounded increasing homeomorphism onto an open interval supplies missing endpoint limits.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E010 — Solution

Let $f:\mathbb{R}\to \mathbb{R}$ be $f(x)=\arctan x$ and $A=\mathbb{R}$. Since $A$ is closed, $f(\operatorname{cl}(A))=f(\mathbb{R})=(-\pi/2,\pi/2)$. Its closure in $\mathbb{R}$ is $[-\pi/2,\pi/2]$. The endpoints belong to $\operatorname{cl}(f(A))$ but not to $f(\operatorname{cl}(A))$, so the inclusion is strict.


</details>

### TOP-CH03-E011 — 11. Interior criterion

Prove that a continuous map satisfies $f^{-1}(\operatorname{int}(B))\subseteq int(f^{-1}(B))$ for every $B\subseteq Y$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The inverse image of the interior is open.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It is also contained in the inverse image of the original set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E011 — Solution

If $x\in f^{-1}(\operatorname{int}(B))$, then $f(x)\in \operatorname{int}(B)$. The set $\operatorname{int}(B)$ is open, so its preimage is an open neighborhood of $x$. Moreover $f^{-1}(\operatorname{int}(B))\subseteq f^{-1}(B)$. Therefore $x$ has an open neighborhood contained in $f^{-1}(B)$, which means $x\in \operatorname{int}(f^{-1}(B))$.


</details>

### TOP-CH03-E012 — 12. Fibers into a discrete space

Let $Y$ be discrete. Prove $f:X\to Y$ is continuous exactly when every fiber $f^{-1}(\{y\})$ is open.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every target-open set is a union of singletons.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its preimage is the union of the corresponding fibers.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E012 — Solution

If $f$ is continuous, each singleton is open in $Y$, so every fiber is open. Conversely, every $V\subseteq Y$ is a union of singletons. Thus $f^{-1}(V)=\bigcup_{y\in V}f^{-1}(\{y\})$, a union of open fibers. Hence every open target set has open inverse image.


</details>

### TOP-CH03-E013 — 13. Maps from an indiscrete space

Prove that every continuous map from a nonempty indiscrete space to a $T_{0}$ space is constant.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

If two image values differ, apply the T0 condition.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The separating open set would pull back to a forbidden proper nonempty open subset.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E013 — Solution

Suppose $f(x_{0})\ne f(x_{1})$. By $T_{0}$, an open set $V$ contains one of these image points and not the other. Then $f^{-1}(V)$ is nonempty and proper. Such a set is not open in a nonempty indiscrete space, contradicting continuity. Therefore no two image points are distinct.


</details>

### TOP-CH03-E014 — 14. Restriction

If $f:X\to Y$ is continuous and $A\subseteq X$, prove $f|_{A}:A\to Y$ is continuous for the subspace topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute the inverse image of a target-open set under the restriction.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It is the trace on the subspace of the old inverse image.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E014 — Solution

For open $V\subseteq Y$, $(f|_{A})^{-1}(V)=A\cap f^{-1}(V)$. The second factor is open in $X$ by continuity, so its intersection with $A$ is open in the subspace $A$. This is precisely the inverse-image test for the restriction.


</details>

### TOP-CH03-E015 — 15. An infinite closed pasting failure

Show that the pasting lemma cannot be extended to arbitrary closed covers without an additional hypothesis.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Cover the line by closed singletons.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A function supported at zero has continuous restrictions but is discontinuous globally.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E015 — Solution

Cover $\mathbb{R}$ by the closed sets $\{x\}$, one for each real number. Define $f:\mathbb{R}\to \mathbb{R}$ by $f(0)=1$ and $f(x)=0$ for $x\ne 0$. Every restriction to a singleton is continuous, and overlaps cause no conflict. But $f$ is not continuous because $f^{-1}((1/2,3/2))=\{0\}$ is not open. The proof for finitely many closed pieces fails because an arbitrary union of closed inverse images need not be closed.


</details>

### TOP-CH03-E016 — 16. Product coordinate criterion

Let $f:X\to Y\times Z$. Prove $f$ is continuous exactly when $\pi_{Y}\circ f$ and $\pi_{Z}\circ f$ are continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a basic open rectangle in the target.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its inverse image is the intersection of the two coordinate inverse images.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E016 — Solution

If $f$ is continuous, composition with the continuous projections gives continuous coordinates. Conversely, a basic open set in $Y\times Z$ is $U\times V$. Its preimage is $(\pi_{Y}\circ f)^{-1}(U)\cap(\pi_{Z}\circ f)^{-1}(V)$, an intersection of two open sets. Since basic opens suffice to test continuity, $f$ is continuous.


</details>

### TOP-CH03-E017 — 17. The box-topology boundary

Show that coordinatewise continuity need not imply continuity into a box product.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the diagonal map into a countable power of the line.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A shrinking box pulls back to a singleton.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E017 — Solution

Define $f:\mathbb{R}\to \mathbb{R}^{\mathbb{N}}$ by $f(t)=(t,t,...)$, giving the target the box topology. Every coordinate is the identity on $\mathbb{R}$, hence continuous. But the box $W=\prod_{n\ge 1}(-1/n,1/n)$ is open and contains $f(0)$. A nonzero $t$ fails $|t|<1/n$ for all $n$, so $f^{-1}(W)=\{0\}$, not open in $\mathbb{R}$. Thus $f$ is not box-continuous.


</details>

### TOP-CH03-E018 — 18. Separate versus joint continuity

Verify that $h(x,y)=xy/(x^{2}+y^{2})$ off $(0,0)$, with $h(0,0)=0$, is separately but not jointly continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Fix one variable first, including the zero case.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Then approach the origin along the diagonal rather than a coordinate axis.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E018 — Solution

Fix $y$. If $y\ne 0$, the denominator stays nonzero near every $x$, so the slice is continuous; if $y=0$, the slice is constantly zero. The same argument holds after fixing $x$. Along the diagonal, however, $h(t,t)=1/2$ for every $t\ne 0$, which does not approach $h(0,0)=0$. Therefore joint continuity fails at the origin.


</details>

### TOP-CH03-E019 — 19. Compact to Hausdorff

Prove that a continuous bijection $f:X\to Y$ is a homeomorphism when $X$ is compact and $Y$ is Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Show the bijection is closed.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Closed subsets of the compact domain have compact images, closed in the Hausdorff target.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E019 — Solution

If $F\subseteq X$ is closed, then $F$ is compact. Its continuous image $f(F)$ is compact, and every compact subset of a Hausdorff space is closed. Hence $f$ is a closed bijection. For any closed $F\subseteq X$, $(f^{-1})^{-1}(F)=f(F)$ is closed in $Y$; the closed-set criterion shows that $f^{-1}$ is continuous. Thus $f$ is a homeomorphism.


</details>

### TOP-CH03-E020 — 20. Why sequences can be insufficient

Explain why preservation of convergent sequences does not characterize continuity in arbitrary spaces, using $[0,\omega_{1}]$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A countable collection of countable ordinals has a countable supremum.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The indicator of the last point preserves sequences but has a nonopen singleton inverse image.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

#### TOP-CH03-E020 — Solution

Give $[0,\omega_{1}]$ its order topology and define $f(\alpha)=0$ for $\alpha<\omega_{1}$, $f(\omega_{1})=1$, with discrete codomain $\{0,1\}$. The supremum of countably many countable ordinals is still below $\omega_{1}$; hence no sequence of ordinals below $\omega_{1}$ converges to $\omega_{1}$. Any sequence converging to $\omega_{1}$ is eventually equal to $\omega_{1}$, so its image converges to $1$; elsewhere the function is locally constant enough for sequential continuity. Nevertheless $f^{-1}(\{1\})=\{\omega_{1}\}$ is not open, so $f$ is not continuous. First countability or a comparable sequential hypothesis is needed for the converse.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## 14. Summary and forward route

Continuity can be read globally through inverse images, locally through neighborhoods, algebraically through closure and interior operators, or dynamically through nets. These views are equivalent without metric assumptions, while sequence tests require additional countability. Restrictions and suitable pasting lemmas make continuity local; product topology makes it coordinatewise; compact-to-Hausdorff turns a continuous bijection into a homeomorphism. The next chapter uses these tests in subspaces and asks when a map identifies its domain with its image rather than merely mapping onto it.

## Transferred capstone 1 {#topology-transferred-e001}

Original question identity: [TOP-CH22-E001](topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Give a complete dependency proof that a continuous bijection $f:X\to Y$ from a compact space to a Hausdorff space is a homeomorphism. Identify exactly where every hypothesis is used.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Prove the map is closed before examining its inverse.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Track closed-subset compactness, continuous images and closed compact subsets of Hausdorff spaces as distinct steps.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $A$ be closed in $X$. A closed subset of a compact space is compact, so here compactness of $X$ implies $A$ is compact. Continuity of $f$ implies $f(A)$ is compact. Hausdorffness of $Y$ implies the compact subset $f(A)$ is closed. Thus $f$ is a closed map. Bijectivity makes the inverse set map $f^{-1}:Y\to X$ exist, and for closed $A \subseteq X$ its inverse preimage is $(f^{-1})^{-1}(A)=f(A)$, which is closed. Hence $f^{-1}$ is continuous. Therefore $f$ is a homeomorphism. Compactness, continuity, Hausdorffness, and bijectivity have been used at distinct steps.

</details>

## Transferred capstone 12 {#topology-transferred-e012}

Original question identity: [TOP-CH22-E012](topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Prove that a finite closed cover supports the gluing lemma. Then give an infinite closed cover for which piecewise continuous, overlap-compatible maps glue to a discontinuous function.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Prove continuity by inverse images of closed sets on each cover member.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the failure, try the cover of the real line by all singletons and remember what subspace continuity means.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $X=F_{1} \cup ... \cup F_{n}$ with each $F_{i}$ closed, and let continuous $f_{i}:F_{i}\to Y$ agree on overlaps. Agreement defines a unique set map $f:X\to Y$. For closed $C \subseteq Y$,

$f^{-1}(C)=\bigcup_{i=1}^n f_{i}^{-1}(C)$.

Each inverse image is closed in $F_{i}$, hence closed in $X$ because $F_{i}$ is closed. The finite union is closed, so $f$ is continuous.

For failure with an infinite closed cover, use

$F_{n}=\{0\} \cup [1/n,\infty)$, $G_{n}=(-\infty,-1/n]$ for $n\ge 1$,

together with the singleton $\{0\}$. These closed sets cover $\mathbb{R}$. Let $f(0)=1$ and $f(x)=0$ for $x\ne 0$. On every $F_{n}$, the point zero is isolated, so the restriction is continuous; on every $G_{n}$ it is constantly zero; and on $\{0\}$ it is constant. All restrictions agree on overlaps. Their glued function is nevertheless discontinuous at zero. Thus the finiteness condition cannot simply be dropped.

</details>
