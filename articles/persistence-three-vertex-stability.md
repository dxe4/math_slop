
# Persistence stability on a three-vertex path

Derive every barcode and prove a bottleneck stability bound for all real height triples on one fixed path.

Before reading: [Graph Theory](#/books/graph-theory), [Linear Algebra: Structure and Proofs](#/books/linear-algebra-structure-proofs).

## Fixed filtration and ordinary \(H_0\)

Let \(P\) be the path \(a-b-c\) with edges \(ab,bc\). A height function is the triple \(x=(u,v,w)\) at \(a,b,c\). At every real \(t\), let \(P_t(x)\) contain vertices of height at most \(t\) and edges whose two endpoints are present. Equal-height events are simultaneous. This is a filtration because \(P_s(x)\subseteq P_t(x)\) when \(s\le t\).

Use ordinary \(H_0\) with coefficients in \(\mathbb F_2\). For this finite graph, \(H_0(P_t;\mathbb F_2)\) has one basis vector for each connected component; \(H_0(\varnothing)=0\). The linear map from an earlier to a later threshold sends each component basis vector to the basis vector of the component containing it. This describes both the vector spaces and the inclusion-induced maps. Counts of components alone would omit the maps.

An interval \([b,d)\) represents a one-dimensional summand present at thresholds \(b\le t<d\), with identity maps while present and zero after its death. An essential interval \([b,\infty)\) has no finite death. We omit zero-length intervals. At a merger, the sum of the two merging component vectors maps to zero over \(\mathbb F_2\); an oldest component vector can represent the surviving summand.

## Complete barcode for arbitrary heights

Set

\[
m=\min(u,v,w),\qquad B=\max(u,w).
\]

**Finite-path barcode theorem.** There is always exactly one essential interval \([m,\infty)\). A positive-length finite interval exists if and only if \(v>B\), and in that case it is exactly \([B,v)\). There are no other positive-length intervals.

**Proof, including ties.** First suppose \(v>B\). Both leaves are present before the middle vertex. The first leaf appears at \(m=\min(u,w)\). The other leaf appears at \(B\); the two leaves remain in separate components for \(B\le t<v\). At \(v\), the middle vertex and both edges appear simultaneously and join them. Thereafter the graph is connected.

Choose a leaf of minimum height as the essential basis vector. If the two leaves have equal height, either choice works. At \(B\), the sum of the two leaf-component vectors supplies a second independent vector. At the merger its image is the sum of the same final component vector with itself, hence zero. The essential vector maps to the nonzero final component vector. This gives precisely the interval summands \([m,\infty)\) and \([B,v)\), including the case \(u=w\).

Now suppose \(v\le B\). Every nonempty \(P_t\) is connected. If the middle vertex is absent, both leaves cannot be present: that would require \(B\le t<v\), a contradiction. If the middle vertex is present, every present leaf is attached to it. Thus the first nonempty threshold is \(m\), its \(H_0\) has dimension one, and all later maps send its component vector to the nonzero component vector. The sole interval is \([m,\infty)\). This includes \(v=B\), ties for the minimum, and \(u=v=w\). Any same-time birth and merger has zero length and is omitted. The cases exhaust all real triples. \(\square\)

The strict inequality matters. For \(x=(0,1,1)\), vertex \(c\), vertex \(b\) and their incident edges present at 1 produce one connected graph at that threshold; there is no positive bar \([1,1)\).

## Matching diagrams, with the diagonal included

Represent a finite interval by \((b,d)\). Match two such points at cost \(\max(|b-b'|,|d-d'|)\). Match an unmatched finite interval to a diagonal point at least-cost \((d-b)/2\), attained at \(((b+d)/2,(b+d)/2)\). Account for unmatched bars on both sides. Essential intervals match each other at the absolute difference in births; matching an essential interval to a finite point or to the diagonal has infinite cost.

The bottleneck distance is the infimum of the largest pair cost over these choices. Each diagram here has exactly one essential bar and at most one finite bar, so only finitely many distinct finite-bar matching choices need consideration.

With finite bars \(I=[B,v)\) and \(I'=[B',v')\), the exact distance is

\[
d_B=\max\!\left(
 |m-m'|,
 \min\!\left\{
   \max(|B-B'|,|v-v'|),
   \max((v-B)/2,(v'-B')/2)
 \right\}\right).
\]

The two inner choices pair the finite bars, or send both to the diagonal. If only \(I\) exists, the exact distance is \(\max(|m-m'|,(v-B)/2)\). If neither exists, it is \(|m-m'|\). These are exhaustive choices because essential bars must match each other.

## A proof of stability for every pair of height triples

Let \(x=(u,v,w)\), \(x'=(u',v',w')\), and

\[
\varepsilon=\max(|u-u'|,|v-v'|,|w-w'|).
\]

We will construct a matching of cost at most \(\varepsilon\), proving

\[
d_B(D(x),D(x'))\le\varepsilon
\quad\text{for every }x,x'\in\mathbb R^3.
\]

First, minimum and maximum are 1-Lipschitz under the coordinate sup metric. For example, every coordinate of \(x\) is at least the corresponding coordinate of \(x'\) minus \(\varepsilon\), and hence at least \(m'-\varepsilon\). Taking the minimum gives \(m\ge m'-\varepsilon\); interchange the triples to get \(|m-m'|\le\varepsilon\). The coordinate upper bounds likewise give \(B\le B'+\varepsilon\), and symmetry gives \(|B-B'|\le\varepsilon\).

Always match the essential bars, at cost at most \(\varepsilon\). There are three finite-bar cases.

1. **Both exist.** Pair \([B,v)\) to \([B',v')\). Both endpoint differences are at most \(\varepsilon\), so this finite pair costs at most \(\varepsilon\). This matching need not be optimal, but it proves the bound.
2. **Neither exists.** There is no remaining finite bar to match.
3. **Exactly one exists.** Interchanging the triples if necessary, suppose \(v>B\) but \(v'\le B'\). Then
   \[
   v-B=(v-v')+(v'-B')+(B'-B)
   \le\varepsilon+0+\varepsilon=2\varepsilon.
   \]
   Match the sole finite bar to the diagonal. Its cost is \((v-B)/2\le\varepsilon\).

Each constructed matching accounts for all bars and has largest cost at most \(\varepsilon\). Equality cases and \(\varepsilon=0\) are included; no ordering was assumed or excluded. This completes the all-real-height finite-path proof. \(\square\)

## Why continuous PL sublevels give the same \(H_0\) persistence

Realize the two edges as closed line segments and extend the vertex heights linearly on each edge. This gives a continuous piecewise-linear function \(F_x\) on the same topological path \(X=|P|\). Its sublevel set

\[
L_t(x)=\{p\in X:F_x(p)\le t\}
\]

is usually not the same space as the geometric realization of \(P_t(x)\). An edge with one low endpoint and one endpoint above \(t\) contributes a partial segment to \(L_t(x)\); that whole edge is absent from \(P_t(x)\).

Nevertheless, each such partial segment contracts to its included low endpoint while all of \(|P_t(x)|\) is fixed. An edge with both endpoints included is already in the subcomplex; one with both excluded contributes nothing, by linearity. These contractions agree at shared vertices. They give a deformation retraction of \(L_t(x)\) onto \(|P_t(x)|\), including thresholds equal to vertex heights.

Consequently, inclusion \(|P_t(x)|\hookrightarrow L_t(x)\) induces an \(H_0\) isomorphism. For \(s\le t\), the square formed by these two inclusions and the threshold inclusions commutes, because all four maps are inclusions of the same points. The isomorphisms therefore respect every persistence map. We have justified the same \(H_0\) persistence, not equality of the sublevel spaces or a claim that independently chosen retractions commute.

On each edge, \(F_x-F_{x'}\) is a linear interpolation of its endpoint differences, so its absolute value is at most their largest absolute value. Vertices attain the maximum coordinate error. Thus

\[
\|F_x-F_{x'}\|_{\infty,X}=\varepsilon.
\]

These observations connect our discrete filtration to continuous functions without pretending they are identical constructions.

## Worked example: a finite bar can disappear

Let the vertex heights be $(0,2,0)$ on the fixed three-vertex path. At thresholds $0\le t<2$, the two endpoints are present as separate components; at $t=2$ the middle vertex and both edges join them. Ordinary $H_0$ therefore has intervals $[0,\infty)$ and $[0,2)$. For the constant triple $(0,0,0)$ there is just $[0,\infty)$. Match the two essential bars at cost zero and the finite bar to the diagonal at cost one, half its lifetime. Every matching must dispose of that finite bar, so the bottleneck distance is exactly one. The input sup distance is two. This strict inequality illustrates the theorem without replacing its all-height proof.

## Exercise 1: read the maps at a merger

Find the ordinary degree-zero barcode for heights $(0,2,1)$. State what the inclusion map does to the two component basis vectors when the middle vertex appears.

**Hint 1.** Write down the connected components between each pair of consecutive distinct heights.

**Hint 2.** At the merger both component vectors map to the vector of the same final component. Over the stated field, inspect their sum.

**Solution.** There is no component below zero, one born at zero, and two components for $1\le t<2$. At two the path is connected. Choose the component born at zero for the persistent generator. The sum of the two component vectors is nonzero before the merger and maps to zero afterwards, while the older generator survives. Thus the intervals are $[0,\infty)$ and $[1,2)$. Counting components alone would miss the kernel vector and the inclusion-map explanation.

## Exercise 2: compare direct and diagonal matching

For triples $f=(0,3,1)$ and $g=(0,2,1)$, compute the bottleneck distance and compare it with the vertex sup distance.

**Hint 1.** Apply the complete barcode formula to both triples before choosing a matching.

**Hint 2.** Compare the cost of matching the finite intervals directly with the cost of sending both to the diagonal; the essential intervals must be matched to each other.

**Solution.** Both essential intervals are $[0,\infty)$, so their cost is zero. The finite intervals are $[1,3)$ and $[1,2)$. Direct matching costs one, the maximum endpoint difference. Sending both to the diagonal costs the larger of one and one half, also one. These exhaust the finite-bar options, so the bottleneck distance is one. The vertex sup distance is also one. This is equality in the stability bound for this pair, while the worked disappearing-bar example gives a strict bound.


## Summary

Prove the finite-path stability theorem, including ties and disappearing bars; state which graph, filtration, coefficient field and matching conventions the proof uses.
