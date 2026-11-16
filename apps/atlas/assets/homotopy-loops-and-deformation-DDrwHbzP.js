var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: homotopy-loops-and-deformation
title: "Homotopy, Loops, and Deformation"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Homotopy, Loops, and Deformation

Homotopy treats a continuous map as deformable data. It replaces equality by continuous interpolation, turns loops into algebra, and records when a subspace carries all of a space's homotopy information. The definitions are short, but the construction of the fundamental group depends on several well-definedness checks: endpoints must stay fixed, concatenation must respect equivalence classes, and the group laws hold through reparametrization rather than literal equality of paths.

Throughout, $I=[0,1]$. For path concatenation, $\\alpha*\\beta$ means “traverse $\\alpha$ first, then $\\beta$.” This convention fixes the order in every later formula.

## 1. Homotopies of maps

Let $f,g:X\\to Y$ be continuous. A **homotopy from $f$ to $g$** is a continuous map

$H:X \\times I\\to Y$

such that $H(x,0)=f(x)$ and $H(x,1)=g(x)$. We write $f \\simeq g$. The variable in $X$ is the spatial variable and the variable in $I$ is the deformation parameter.

Homotopy is an equivalence relation on $C(X,Y)$:

- reflexivity uses $H(x,s)=f(x)$;
- symmetry reverses time, $H'(x,s)=H(x,1-s)$;
- transitivity concatenates $H$ and $G$ in the time coordinate:

$L(x,s)=H(x,2s)$ for $s\\le 1/2$, and $L(x,s)=G(x,2s-1)$ for $s\\ge 1/2$.

The two formulas agree at $s=1/2$, so the pasting lemma proves continuity.

If $A \\subseteq X$, a homotopy is **relative to $A$** when $H(a,s)=f(a)=g(a)$ for every $a \\in A$ and every $s$. If pointed spaces $(X,x_{0})$ and $(Y,y_{0})$ are involved, a **based homotopy** is relative to $\\{x_{0}\\}$; every intermediate map sends $x_{0}$ to $y_{0}$. This extra condition is what makes induced homomorphisms at a fixed basepoint literally equal rather than equal only up to conjugation.

Homotopies compose with continuous maps. If $f \\simeq g$, $a:W\\to X$, and $b:Y\\to Z$, then

$b \\circ f \\circ a \\simeq b \\circ g \\circ a$

through $(w,s) \\mapsto b(H(a(w),s))$. Relative conditions are preserved when the composed maps respect the relevant subspaces and basepoints.

The function-space viewpoint explains the definition. A homotopy $X \\times I\\to Y$ curries to a path $I\\to C_{k}(X,Y)$. The forward implication is always continuous in compact-open topology; the converse follows from joint evaluation when $X$ is locally compact Hausdorff. Without the exponential-law hypothesis, a set-theoretic path of maps is not automatically a continuous homotopy.

## 2. Paths and homotopy relative to endpoints

A **path** from $x_{0}$ to $x_{1}$ is a continuous $\\alpha:I\\to X$ with $\\alpha(0)=x_{0}$ and $\\alpha(1)=x_{1}$. Two such paths are **path homotopic relative to endpoints** if there is continuous $H:I \\times I\\to X$ satisfying

$H(t,0)=\\alpha(t)$, $H(t,1)=\\beta(t)$,

$H(0,s)=x_{0}$, and $H(1,s)=x_{1}$.

Write $\\alpha \\simeq_{\\mathrm{rel}} \\beta$. It is again an equivalence relation; the constant, time-reversal, and pasted homotopies used above preserve the two endpoint edges.

If $\\alpha(1)=\\beta(0)$, define concatenation by

$(\\alpha*\\beta)(t)=\\alpha(2t)$ for $0\\le t \\le 1/2$,

$(\\alpha*\\beta)(t)=\\beta(2t-1)$ for $1/2\\le t \\le 1$.

Continuity follows from the pasting lemma. The reversed path is $\\overline{\\alpha}(t)=\\alpha(1-t)$, and the constant path at $x$ is $e_{x}(t)=x$.

Concatenation respects endpoint-relative homotopy. If $H$ deforms $\\alpha$ to $\\alpha'$ and $G$ deforms $\\beta$ to $\\beta'$, define

$L(t,s)=H(2t,s)$ for $t\\le 1/2$, and $L(t,s)=G(2t-1,s)$ for $t\\ge 1/2$.

It is a path homotopy from $\\alpha*\\beta$ to $\\alpha'*\\beta'$. Therefore concatenation descends to equivalence classes.

Literal paths are not associative under this parametrization: $(\\alpha*\\beta)*\\gamma$ spends one quarter of the time on $\\alpha$, one quarter on $\\beta$, and one half on $\\gamma$, while $\\alpha*(\\beta*\\gamma)$ uses different speeds. The paths are nevertheless homotopic relative to endpoints.

The general tool is the **reparametrization lemma**. If $r:I\\to I$ is continuous with $r(0)=0$ and $r(1)=1$, then

$\\alpha \\circ r \\simeq_{\\mathrm{rel}} \\alpha$

through $H(t,s)=\\alpha((1-s)r(t)+st)$. Piecewise-linear traversal schedules show associativity up to path homotopy. The same lemma removes constant waiting periods, giving $e_{x_{0}}*\\alpha \\simeq_{\\mathrm{rel}} \\alpha$ and $\\alpha*e_{x_{1}} \\simeq_{\\mathrm{rel}} \\alpha$.

Finally, $\\alpha*\\overline{\\alpha}$ contracts relative to its endpoint $x_{0}$. It is $\\alpha \\circ q$, where $q(t)=2t$ for $t\\le 1/2$ and $q(t)=2-2t$ afterward. The formula

$H(t,s)=\\alpha((1-s)q(t))$

deforms it to $e_{x_{0}}$ while fixing both ends. A symmetric formula contracts $\\overline{\\alpha}*\\alpha$ to $e_{x_{1}}$.

## 3. The fundamental group

Fix $x_{0} \\in X$. A **loop based at $x_{0}$** is a path $\\alpha$ with both endpoints $x_{0}$. Let $[\\alpha]$ denote its path-homotopy class relative to endpoints. Define

$\\pi_{1}(X,x_{0})=\\{\\gamma:I\\to X:\\gamma(0)=\\gamma(1)=x_0\\}/\\simeq_{\\mathrm{rel}}$

and

$[\\alpha][\\beta]=[\\alpha*\\beta]$.

This multiplication is well-defined because concatenation respects representatives. The reparametrization arguments give associativity on classes. The class $[e_{x_{0}}]$ is an identity, and $[\\overline{\\alpha}]$ is the inverse of $[\\alpha]$. Hence $\\pi_{1}(X,x_{0})$ is a group, the **fundamental group**.

It need not be abelian. A loop product remembers traversal order. Later computations for wedges and surfaces make this noncommutativity visible; the circle is a special abelian example.

The basepoint is part of the definition. If $\\lambda$ is a path from $x_{0}$ to $x_{1}$, define

$c_{\\lambda}:\\pi_{1}(X,x_{0})\\to \\pi_{1}(X,x_{1})$

by

$c_{\\lambda}([\\alpha])=[\\overline{\\lambda}*\\alpha*\\lambda]$.

The formula begins at $x_{1}$, travels back to $x_{0}$, follows $\\alpha$, and returns along $\\lambda$. Associativity up to homotopy makes it a homomorphism, and $c_{\\overline{\\lambda}}$ is its inverse. Thus basepoints in one path component have isomorphic fundamental groups. The isomorphism is not canonical: changing $\\lambda$ changes it by an inner automorphism. Basepoints in different path components have no such comparison path.

## 4. Functoriality and homotopy invariance

A based continuous map $f:(X,x_{0})\\to(Y,y_{0})$ induces

$f_*:\\pi_{1}(X,x_{0})\\to \\pi_{1}(Y,y_{0})$, $f_*([\\alpha])=[f \\circ \\alpha]$.

This is well-defined because composing a path homotopy with $f$ gives a path homotopy. It is a homomorphism because $f \\circ (\\alpha*\\beta)$ is literally $(f \\circ \\alpha)*(f \\circ \\beta)$. Moreover,

$(\\operatorname{id}_{X})_*=id$ and $(g \\circ f)_*=g_* \\circ f_*$.

These identities make the fundamental group functorial on pointed spaces.

If based maps $f,g:(X,x_{0})\\to(Y,y_{0})$ are based homotopic, then $f_*=g_*$. For a loop $\\alpha$, the square $(t,s) \\mapsto H(\\alpha(t),s)$ is a path homotopy relative to $y_{0}$ from $f \\circ \\alpha$ to $g \\circ \\alpha$.

For an unbased homotopy, there is a basepoint track

$\\lambda(s)=H(x_{0},s)$

from $f(x_{0})$ to $g(x_{0})$. Reading the boundary of the square $H(\\alpha(t),s)$ gives

$g_* = c_{\\lambda} \\circ f_*$,

where $c_{\\lambda}([\\delta])=[\\overline{\\lambda}*\\delta*\\lambda]$. This is the precise sense in which freely homotopic maps induce the same fundamental-group map up to basepoint change. Omitting $\\lambda$ creates a type error: the two homomorphisms have different target basepoints.

Maps $f:X\\to Y$ and $g:Y\\to X$ are **homotopy inverses** if $g \\circ f \\simeq \\operatorname{id}_{X}$ and $f \\circ g \\simeq \\operatorname{id}_{Y}$. Then $X$ and $Y$ are **homotopy equivalent**. With basepoints and based homotopies, functoriality shows $f_*$ and $g_*$ are inverse isomorphisms. Without based homotopies, the same conclusion holds after the required basepoint-change isomorphisms.

Homotopy equivalence is much weaker than homeomorphism. $\\mathbb{R}$ is homotopy equivalent to a point, but it is not homeomorphic to one. Fundamental groups are homotopy invariants, not complete classifiers: spaces with isomorphic fundamental groups need not be homotopy equivalent.

## 5. Contractions, retracts, and deformation retracts

A space $X$ is **contractible** if $\\operatorname{id}_{X}$ is homotopic to a constant map. Every nonempty convex subset $C$ of a real topological vector space is contractible: fixing $p \\in C$, use

$H(x,s)=(1-s)x+sp$.

Contractible spaces are path connected, since the contraction traces a path from each point to the contraction point. They have trivial fundamental group. One must be slightly careful: an arbitrary contraction need not hold $x_{0}$ fixed, so directly composing it with a loop gives a free homotopy, not necessarily a path homotopy relative to endpoints. The basepoint-track formula from the previous section supplies the missing conjugation and still forces every loop class to be the identity.

If $A \\subseteq X$, a **retraction** is a continuous $r:X\\to A$ whose restriction to $A$ is $\\operatorname{id}_{A}$. With inclusion $i:A\\to X$, the identity $r \\circ i=\\operatorname{id}_{A}$ implies

$r_* \\circ i_*=id_(\\pi_{1}(A,a_{0}))$.

Thus $i_*$ is injective and $r_*$ is surjective. Retraction alone does not say they are isomorphisms: every chosen point of $S^{1}$ is a retract via the constant map, but the circle does not deform to that point.

In this chapter, $A$ is a **deformation retract** of $X$ if there is a retraction $r:X\\to A$ and a homotopy from $\\operatorname{id}_{X}$ to $i \\circ r$ that fixes every point of $A$ throughout. This is often called a **strong deformation retract** to emphasize the fixed-subspace condition. The inclusion and retraction are based homotopy inverses for any basepoint in $A$, so they induce inverse isomorphisms on fundamental groups.

For example, the annulus

$A=\\{z \\in \\mathbb{C}:1\\le|z|\\le 2\\}$

deformation retracts onto $S^{1}$ by

$H(z,s)=((1-s)+s/|z|)z$.

The radius moves linearly to $1$, the angle is unchanged, and points already on $S^{1}$ stay fixed. Therefore the annulus and circle have the same fundamental group.

## 6. The circle and winding number

Choose the counterclockwise orientation on

$S^{1}=\\{z \\in \\mathbb{C}:|z|=1\\}$

and basepoint $1$. Let

$p:\\mathbb{R}\\to S^{1}$, $p(u)=\\exp(2 \\pi i u)$.

For a loop $\\alpha:I\\to S^{1}$ at $1$, there is a unique continuous **lift** $\\widetilde{\\alpha}:I\\to \\mathbb{R}$ such that

$p \\circ \\widetilde{\\alpha}=\\alpha$ and $\\widetilde{\\alpha}(0)=0$.

Its endpoint is an integer because $p(u)=1$ exactly for $u \\in \\mathbb{Z}$. Define

$\\operatorname{wind}(\\alpha)=\\widetilde{\\alpha}(1)$.

This chapter uses two specialized lifting facts for the exponential map.

1. **Path lifting.** Cover $S^{1}$ by short open arcs on which $p$ has continuous inverse branches. Compactness of $I$ gives a finite subdivision so that the image of each subinterval lies in one such arc. Starting from the prescribed initial lift, choose the unique compatible inverse branch on each successive interval. Two lifts with the same initial value differ pointwise by an integer; continuity into the discrete space $\\mathbb{Z}$ makes that difference constant, proving uniqueness.
2. **Homotopy lifting.** A homotopy $H:I \\times I\\to S^{1}$ and a lift along one edge extend uniquely to $\\widetilde{H}:I \\times I\\to \\mathbb{R}$. A finite grid subordinate to inverse-image arc neighborhoods constructs the lift rectangle by rectangle; agreement on shared edges follows from uniqueness.

These are the path and homotopy lifting theorems in the special case needed for $S^{1}$. A later covering-spaces chapter proves them for general covering maps; the circle computation here does not assume the classification of coverings or any higher theorem.

If loops $\\alpha,\\beta$ are path homotopic relative to endpoints, lift the homotopy starting at $0$. The function $s \\mapsto \\widetilde{H}(1,s)$ is continuous and integer-valued, hence constant. Therefore $\\operatorname{wind}(\\alpha)=\\operatorname{wind}(\\beta)$, so winding descends to

$\\operatorname{wind}:\\pi_{1}(S^{1},1)\\to \\mathbb{Z}$.

It is a homomorphism. If the lifts of $\\alpha,\\beta$ end at $m,n$, a lift of $\\alpha*\\beta$ first follows $\\widetilde{\\alpha}$ and then follows the translate $m+\\widetilde{\\beta}$. Its endpoint is $m+n$.

The map is surjective because

$\\omega_{n}(t)=\\exp(2 \\pi i n t)$

has lift $nt$ and winding $n$. It is injective because a loop of winding zero has a lifted loop $\\widetilde{\\alpha}$ in $\\mathbb{R}$ based at $0$; the straight homotopy $(t,s) \\mapsto (1-s)\\widetilde{\\alpha}(t)$ contracts it relative to endpoints, and composing with $p$ contracts $\\alpha$. Hence

$\\pi_{1}(S^{1},1) \\cong \\mathbb{Z}$.

The chosen counterclockwise orientation sends $\\omega_{1}$ to $1$; reversing orientation changes the isomorphism by $n \\mapsto -n$. The abstract group is still infinite cyclic. In particular, $S^{1}$ is not contractible, because a contractible space has trivial fundamental group.

## 7. Computation rules and proof boundaries

The degree-$n$ power map $q_{n}:S^{1}\\to S^{1}$, $q_{n}(z)=z^n$, sends $\\omega_{k}$ to $\\omega_{nk}$. Under the winding isomorphism,

$(q_{n})_*:\\mathbb{Z}\\to\\mathbb{Z}$ is multiplication by $n$.

This immediately distinguishes many circle maps up to based homotopy: if two maps induce different multiplications, they cannot be based homotopic. The converse—that based circle maps of the same degree are homotopic—can also be proved by lifting, but is not needed to construct $\\pi_{1}$.

Products admit a direct rule:

$\\pi_{1}(X \\times Y,(x_{0},y_{0})) \\cong \\pi_{1}(X,x_{0}) \\times \\pi_{1}(Y,y_{0})$.

A loop in the product is exactly a pair of coordinate loops; path homotopies and concatenation are coordinatewise. No covering theory is required. Consequently the torus $S^{1} \\times S^{1}$ has fundamental group $\\mathbb{Z}\\times\\mathbb{Z}$.

Quotients and unions require more caution. A quotient map does not automatically induce a surjection or injection on fundamental groups, and knowing the fundamental groups of two overlapping pieces does not by itself determine the group of their union. Those computations require lifting theory or the Seifert–van Kampen theorem. A geometric gluing picture is not a substitute for such a theorem.

## 8. Proof audit

The recurring proof obligations are now visible.

- For a homotopy assembled from formulas, verify agreement on the pasted boundary.
- For path classes, keep both endpoints fixed throughout the homotopy.
- Before defining multiplication on classes, prove concatenation respects representatives.
- Treat associativity, units, and inverses as homotopy statements; they are usually not literal path equalities.
- When basepoints move, record their track and the resulting conjugation.
- A retraction gives a one-sided algebraic inverse; a deformation retraction gives a homotopy inverse.
- For winding number, path lifting defines the integer and homotopy lifting proves it is invariant.

These checks are the difference between a suggestive deformation picture and a valid construction of an invariant.

## Exercises with complete solutions

### TOP-CH18-E001 — Exercise 1
Prove homotopy of maps is an equivalence relation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Treat reflexivity, symmetry and transitivity separately.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For transitivity, rescale each of the two homotopies to half the parameter interval and examine their join.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E001 — Solution 1
For reflexivity use the constant homotopy $H(x,s)=f(x)$. If $H$ runs from $f$ to $g$, then $H'(x,s)=H(x,1-s)$ runs from $g$ to $f$, proving symmetry. If $H$ runs from $f$ to $g$ and $G$ from $g$ to $h$, use $H(x,2s)$ on $s\\le 1/2$ and $G(x,2s-1)$ on $s\\ge 1/2$. Both formulas equal $g(x)$ at the join, so the pasting lemma gives a homotopy from $f$ to $h$.

</details>

### TOP-CH18-E002 — Exercise 2
Prove homotopy relative to a subset $A$ is an equivalence relation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the homotopies from the previous exercise.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Check their restriction to every point of A, including along the pasted join.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E002 — Solution 2
Use the constructions of Exercise 1. The constant homotopy fixes $A$; time reversal still fixes every $a \\in A$; and each half of the concatenated homotopy equals the common value $f(a)=g(a)=h(a)$ on $A$. Thus reflexivity, symmetry, and transitivity all preserve the relative condition.

</details>

### TOP-CH18-E003 — Exercise 3
If $f \\simeq g$, prove $b \\circ f \\circ a \\simeq b \\circ g \\circ a$ for continuous $a,b$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Keep the deformation parameter and compose the spatial variables.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Evaluate the proposed formula at both parameter endpoints, then justify continuity by composition.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E003 — Solution 3
If $H:X \\times I\\to Y$ is the given homotopy, define $L(w,s)=b(H(a(w),s))$. It is continuous as a composite of $(w,s) \\mapsto (a(w),s)$, $H$, and $b$. At $s=0$ it is $bfa$, and at $s=1$ it is $bga$.

</details>

### TOP-CH18-E004 — Exercise 4
Prove endpoint-relative homotopy of paths is an equivalence relation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use time reversal and pasting in the deformation parameter.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Track the two endpoint edges throughout each construction.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E004 — Solution 4
The constant homotopy of a path fixes its endpoints. Reversing the deformation parameter preserves both endpoint edges. For transitivity, paste two path homotopies across $s=1/2$; their values agree on that edge, and each has constant left and right edges $x_{0},x_{1}$. The pasting lemma supplies the required relative homotopy.

</details>

### TOP-CH18-E005 — Exercise 5
Prove concatenation of paths is continuous.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate the two closed half-intervals.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The composability hypothesis supplies the equality needed at their common endpoint.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E005 — Solution 5
On the closed subinterval $[0,1/2]$, the formula $\\alpha(2t)$ is continuous; on $[1/2,1]$, so is $\\beta(2t-1)$. At $t=1/2$, the values are $\\alpha(1)$ and $\\beta(0)$, equal by the composability hypothesis. The closed-set pasting lemma therefore makes $\\alpha*\\beta$ continuous.

</details>

### TOP-CH18-E006 — Exercise 6
Prove concatenation respects path-homotopy classes.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Concatenate the given homotopies in the path coordinate.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The common joining point must remain fixed for every value of the deformation parameter.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E006 — Solution 6
Let $H$ deform $\\alpha$ to $\\alpha'$ and $G$ deform $\\beta$ to $\\beta'$, all relative to endpoints. Define $L(t,s)=H(2t,s)$ for $t\\le 1/2$ and $L(t,s)=G(2t-1,s)$ for $t\\ge 1/2$. The formulas agree because the joining endpoint is fixed throughout both homotopies. Pasting gives a homotopy relative to the outer endpoints from $\\alpha*\\beta$ to $\\alpha'*\\beta'$.

</details>

### TOP-CH18-E007 — Exercise 7
Prove the reparametrization lemma.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Interpolate between the two clocks inside the interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Convexity of the parameter interval keeps the interpolated clock in its domain and preserves its endpoints.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E007 — Solution 7
For continuous $r:I\\to I$ with $r(0)=0,r(1)=1$, put $H(t,s)=\\alpha((1-s)r(t)+st)$. The argument of $\\alpha$ remains in $I$, so $H$ is continuous. At $s=0$ it is $\\alpha \\circ r$, and at $s=1$ it is $\\alpha$. At $t=0$ and $t=1$, the argument remains $0$ and $1$, so endpoints are fixed.

</details>

### TOP-CH18-E008 — Exercise 8
Verify all group axioms for $\\pi_{1}(X,x_{0})$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate literal path equality from equality of path classes.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the clock-change lemma for associativity and waiting times; contract an out-and-back traversal for inverses.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E008 — Solution 8
Exercise 6 makes $[\\alpha][\\beta]=[\\alpha*\\beta]$ well-defined. The two parenthesizations of a triple concatenation traverse the same three paths with different piecewise-linear schedules, so Exercise 7 makes their classes equal. Constant waiting intervals are removed by the same lemma, giving $[e][\\alpha]=[\\alpha]=[\\alpha][e]$. Finally $\\alpha*\\overline{\\alpha}=\\alpha \\circ q$ with the out-and-back schedule $q$; $H(t,s)=\\alpha((1-s)q(t))$ contracts it relative to $x_{0}$. The analogous contraction handles $\\overline{\\alpha}*\\alpha$, so $[\\overline{\\alpha}]$ is the inverse.

</details>

### TOP-CH18-E009 — Exercise 9
Prove a based map induces a well-defined homomorphism and verify functoriality.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Begin by checking that equivalent loops have equivalent images.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Then compare the image of a concatenation with concatenated images and apply the definitions of identities and composites.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E009 — Solution 9
If $\\alpha \\simeq_{\\mathrm{rel}} \\beta$, composing the homotopy with $f$ shows $f \\alpha \\simeq_{\\mathrm{rel}} f \\beta$, so $f_*$ is well-defined. Since $f(\\alpha*\\beta)=(f \\alpha)*(f \\beta)$, it preserves multiplication. Direct substitution gives $(\\operatorname{id}_{X})_*=id$ and $(g \\circ f)_*([\\alpha])=[g f \\alpha]=g_*(f_*([\\alpha]))$.

</details>

### TOP-CH18-E010 — Exercise 10
Prove based-homotopic maps induce equal homomorphisms on fundamental groups.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the map homotopy to one loop at a time.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The based condition is exactly what fixes the two side edges of the resulting square.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E010 — Solution 10
Let $H$ be a based homotopy from $f$ to $g$. For a loop $\\alpha$, set $L(t,s)=H(\\alpha(t),s)$. Its bottom and top edges are $f \\alpha$ and $g \\alpha$. Since $\\alpha(0)=\\alpha(1)=x_{0}$ and $H(x_{0},s)=y_{0}$, both side edges are constantly $y_{0}$. Thus the two image loops are path homotopic relative to endpoints, and $f_*([\\alpha])=g_*([\\alpha])$ for every class.

</details>

### TOP-CH18-E011 — Exercise 11
For an unbased homotopy $H:f \\simeq g$, derive the basepoint-track formula.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Draw the four edges of the square obtained by evaluating the homotopy on a loop.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the basepoint track to transport the top and bottom loops to a common basepoint before comparing classes.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E011 — Solution 11
Let $\\lambda(s)=H(x_{0},s)$. For a loop $\\alpha$, the square $H(\\alpha(t),s)$ has bottom $f \\alpha$, top $g \\alpha$, and both side edges $\\lambda$. Traversing its boundary and shrinking across the square gives $g \\alpha \\simeq_{\\mathrm{rel}} \\overline{\\lambda}*(f \\alpha)*\\lambda$, with both loops based at $g(x_{0})$. Therefore $g_*=c_{\\lambda} \\circ f_*$, where $c_{\\lambda}([\\delta])=[\\overline{\\lambda}*\\delta*\\lambda]$.

</details>

### TOP-CH18-E012 — Exercise 12
Prove a path $\\lambda:x_{0}\\to x_{1}$ gives an isomorphism between the corresponding fundamental groups.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Conjugate loops using the chosen connecting path.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the reversed connecting path for an inverse and cancel the inserted out-and-back traversals.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E012 — Solution 12
Define $c_{\\lambda}([\\alpha])=[\\overline{\\lambda}*\\alpha*\\lambda]$. Concatenation and associativity on classes show it preserves products. Applying $c_{\\overline{\\lambda}}$ inserts $\\lambda*\\overline{\\lambda}$ and $\\overline{\\lambda}*\\lambda$, both null-homotopic relative to their endpoints, so the composite is the identity. The reverse composite is identical in form. Hence $c_{\\lambda}$ is an isomorphism with inverse $c_{\\overline{\\lambda}}$.

</details>

### TOP-CH18-E013 — Exercise 13
If $r:X\\to A$ is a retraction, prove inclusion induces an injection on $\\pi_{1}$ and retraction induces a surjection.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write the defining equation for a retraction and inclusion.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply functoriality and recall the injectivity and surjectivity consequences of a one-sided inverse.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E013 — Solution 13
For inclusion $i:A\\to X$, one has $r \\circ i=\\operatorname{id}_{A}$. Functoriality gives $r_* \\circ i_*=id$. A map with a left inverse is injective, so $i_*$ is injective. A map with a right inverse is surjective, so $r_*$ is surjective.

</details>

### TOP-CH18-E014 — Exercise 14
Prove a deformation retraction induces an isomorphism on fundamental groups.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A retraction gives one composite exactly; deformation gives the other up to homotopy.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The deformation fixes the selected point in the retract, so use based homotopy invariance.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E014 — Solution 14
Let $r:X\\to A$ and $i:A\\to X$. The equality $ri=\\operatorname{id}_{A}$ gives $r_*i_*=id$. The deformation homotopy from $\\operatorname{id}_{X}$ to $ir$ fixes the chosen basepoint in $A$, so Exercise 10 gives $i_*r_*=(ir)_*=(\\operatorname{id}_{X})_*=id$. Thus $i_*$ and $r_*$ are inverse isomorphisms.

</details>

### TOP-CH18-E015 — Exercise 15
Prove every nonempty convex subset of $\\mathbb{R}^n$ is contractible.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose one point of the nonempty convex set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Interpolate linearly from each point to that chosen point and verify the entire segment remains in the set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E015 — Solution 15
Fix $p$ in convex $C$ and define $H(x,s)=(1-s)x+sp$. Convexity keeps $H(x,s)$ in $C$, and the formula is continuous. At $s=0$ it is $\\operatorname{id}_{C}$; at $s=1$ it is the constant map with value $p$. Therefore $C$ is contractible.

</details>

### TOP-CH18-E016 — Exercise 16
Show the annulus $\\{z:1\\le|z|\\le 2\\}$ deformation retracts onto $S^{1}$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Move only the radius, keeping the angle unchanged.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Interpolate the radius to one and check that points already on the inner circle remain fixed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E016 — Solution 16
Set $r(z)=z/|z|$ and $H(z,s)=((1-s)+s/|z|)z$. Its radius is $(1-s)|z|+s$, which stays between $1$ and $2$, so the homotopy remains in the annulus. It begins at $z$, ends at $r(z)$, and if $|z|=1$, it equals $z$ for all $s$. Hence this is a deformation retraction.

</details>

### TOP-CH18-E017 — Exercise 17
Prove a contractible space has trivial fundamental group, addressing the moving-basepoint issue.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

An arbitrary contraction may move the selected basepoint.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Combine the basepoint-track formula with the fact that a constant map kills every loop class.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E017 — Solution 17
Let $H$ contract $\\operatorname{id}_{X}$ to the constant map at $p$, and let $\\lambda(s)=H(x_{0},s)$. Exercise 11 says the homomorphism induced by the constant map equals $c_{\\lambda}$ composed with the identity-induced homomorphism. The constant map sends every loop to the constant loop, so its induced map is trivial. Since $c_{\\lambda}$ is an isomorphism by Exercise 12, the identity homomorphism on $\\pi_{1}(X,x_{0})$ must be trivial. Thus the group has only its identity element.

</details>

### TOP-CH18-E018 — Exercise 18
Prove winding number is well-defined on path-homotopy classes and additive under concatenation.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Lift a path homotopy through the exponential covering.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its terminal edge is continuous and integer-valued; for concatenation, translate the second lift to the endpoint of the first.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E018 — Solution 18
Lift an endpoint-relative homotopy between loops through $p:\\mathbb{R}\\to S^{1}$, starting its left edge at $0$. Along the right edge, the lift takes integer values because the original homotopy remains at basepoint $1$. That integer-valued function of the homotopy parameter is continuous, hence constant; the two loop lifts have the same endpoint. Thus winding is class-invariant. If lifts of $\\alpha,\\beta$ end at $m,n$, lift $\\alpha*\\beta$ by following the first lift and then the translate $m+\\widetilde{\\beta}$. It ends at $m+n$, proving additivity.

</details>

### TOP-CH18-E019 — Exercise 19
Complete the proof that $\\pi_{1}(S^{1},1) \\cong \\mathbb{Z}$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Establish surjectivity and trivial kernel separately.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use standard integer-turn loops for surjectivity and a straight contraction of a closed lift in the real line for the kernel.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E019 — Solution 19
Exercise 18 gives a homomorphism $\\operatorname{wind}$. It is onto because $\\omega_{n}(t)=\\exp(2 \\pi i n t)$ lifts to $nt$ and has winding $n$. If $\\operatorname{wind}([\\alpha])=0$, the lift $\\widetilde{\\alpha}$ begins and ends at $0$. The homotopy $\\widetilde{H}(t,s)=(1-s)\\widetilde{\\alpha}(t)$ contracts it in $\\mathbb{R}$ while fixing both endpoints. Composing with $p$ contracts $\\alpha$ relative to the basepoint, so $[\\alpha]$ is the identity. The kernel is trivial; therefore $\\operatorname{wind}$ is an isomorphism.

</details>

### TOP-CH18-E020 — Exercise 20
For $q_{n}(z)=z^n$, compute $(q_{n})_*$ and use the result to prove $S^{1}$ is not contractible.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Follow a standard integer-turn loop through the power map.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare the resulting winding number, then use the fundamental-group consequence of a contraction.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH18-E020 — Solution 20
The standard loop $\\omega_{k}(t)=\\exp(2 \\pi i k t)$ is sent to $\\exp(2 \\pi i nk t)=\\omega_{nk}$. Under the winding isomorphism, $(q_{n})_*$ is therefore multiplication by $n$. In particular $\\pi_{1}(S^{1},1)$ is nontrivial because $[\\omega_{1}]$ maps to $1$. Exercise 17 says a contractible space has trivial fundamental group, so $S^{1}$ cannot be contractible.

</details>

## Chapter checkpoint

Homotopy is continuous deformation, and endpoint-relative homotopy is the equivalence relation that makes loop concatenation into the fundamental group. Functoriality turns based maps into homomorphisms; moving basepoints introduce conjugation. Contractions and deformation retracts provide homotopy equivalences, while the exponential lift converts circle loops into integer winding numbers and proves $\\pi_{1}(S^{1}) \\cong \\mathbb{Z}$ using only explicitly stated specialized lifting facts.
`;export{e as default};