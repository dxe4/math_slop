# Open, closed, and compact subsets of the line

## Purpose and prerequisites

After this chapter you should distinguish open, closed, and bounded sets; identify accumulation points; and use compactness to extract convergent subsequences. You need completeness and the Bolzano–Weierstrass theorem. Compactness will turn local information about a function into global conclusions. All openness and closedness here refer to the ambient space ℝ.

## Definitions that describe a set from nearby points

An open ball in ℝ is the interval B(x, r) = (x − r, x + r), where r > 0. A set U ⊆ ℝ is **open** if every x ∈ U has some r > 0 for which B(x, r) ⊆ U. The radius may depend on x. Thus (0, 1) is open: at x choose r = min(x, 1 − x)/2. The same set has no positive radius that works at every point.

A set F is **closed** if ℝ ∖ F is open. The interval [0, 1] is closed. A set can be both open and closed: ∅ and ℝ are examples. A set can be neither: [0, 1) fails openness at 0, and its complement fails openness at 1. Open and closed are not opposite answers to a two-choice question.

A point a is an **accumulation point** of A if every B(a, r) contains a point of A other than a. The closure of A consists of the points whose every ball intersects A. An isolated point of A belongs to its closure even though it is not an accumulation point. A set is bounded if A ⊆ [−M, M] for some finite M.

Arbitrary unions of open sets are open: a point in the union belongs to one member, which provides a suitable ball. Finite intersections are open: choose the minimum of finitely many positive radii. Infinite intersections need not be open; the intersection of (−1/n, 1/n) over positive integers n is {0}.

## A useful sequential characterization

**Theorem 5.1.** F ⊆ ℝ is closed exactly when every sequence in F that converges in ℝ has its limit in F.

**Proof.** Suppose F is closed and xₙ ∈ F converges to x. If x ∉ F, openness of its complement gives a ball B(x, r) disjoint from F. Convergence eventually puts xₙ in that ball, a contradiction.

Conversely, suppose F contains the limits of its convergent sequences. If its complement were not open, some x outside F would have no ball disjoint from F. Choose xₙ ∈ F with |xₙ − x| < 1/n. Then xₙ → x, contradicting the assumed property. Therefore F is closed. ∎

For example, {1/n : n ≥ 1} is bounded but not closed: its displayed sequence tends to 0. Adding 0 produces a closed set.

## Compactness and the Heine–Borel theorem

An **open cover** of K is a collection of open sets whose union contains K. The set K is **compact** if every open cover has a finite subcollection that still covers K. It is **sequentially compact** if every sequence in K has a subsequence converging to a point of K.

For subsets of ℝ, these two forms of compactness are equivalent. We state this metric-space equivalence here; the proof below establishes the closed-and-bounded characterization using sequences.

This is a theorem about \(\mathbb R\), not a new definition of compactness. A later metric-space lesson develops the distinction: a set may be bounded and complete yet fail to have a finite cover by small balls.

**Heine–Borel theorem, sequential form.** K ⊆ ℝ is sequentially compact exactly when it is closed and bounded.

**Proof.** If K is closed and bounded, any sequence in K is bounded. Bolzano–Weierstrass gives a convergent subsequence, and closedness puts its limit in K.

Conversely, suppose K is sequentially compact. If K were unbounded, choose xₙ ∈ K with |xₙ| > n. No subsequence could converge, since every convergent sequence is bounded. If K were not closed, the sequential characterization above supplies a sequence in K converging to x outside K. Sequential compactness supplies a subsequence converging to y in K. But every subsequence of a convergent sequence has the original limit; uniqueness gives y = x, a contradiction. ∎

Boundedness prevents escape to infinity. Closedness prevents escape through a missing boundary point. Both are necessary: ℝ fails the first condition, and (0, 1) fails the second.

## Exercises

1. Find the closure and accumulation points of A = {2} ∪ {1/n : n ≥ 1}.
2. Prove that any intersection of closed sets is closed.
3. Give an open cover of (0, 1) with no finite subcover.
4. Prove that a closed subset F of a compact subset K of ℝ is compact, assuming F is closed in ℝ.

<details><summary>Hints</summary>

1. Separate isolated points from the limit of the sequence. 2. Take complements and use the union rule. 3. Let the left endpoint of each interval approach zero. 4. Use the sequential characterization.

</details>

<details><summary>Solutions</summary>

1. The closure is A ∪ {0}; the only accumulation point is 0. Each positive member is isolated by a sufficiently small interval.
2. The complement of an intersection is the union of the complements. Those complements are open, so their union is open.
3. The intervals (1/n, 1), n ≥ 2, cover (0, 1). A finite selection has a largest index N and misses every point in (0, 1/N].
4. Any sequence in F lies in K, so it has a subsequence converging in K. Because F is closed, the limit lies in F. Thus F is sequentially compact and hence compact.

</details>

## Workshop: why an open cover is a stronger kind of test

The earlier proof establishes the closed-and-bounded criterion for **sequential** compactness. We now justify its connection with the open-cover definition on the real line. Let [a,b] be a closed interval and suppose an open cover has no finite subcover. Bisect [a,b]. At least one half has no finite subcover, since finite subcovers of both halves could be joined. Repeat to obtain nested closed intervals Iₙ of length (b−a)/2ⁿ, each with no finite subcover. Their left endpoints increase and remain bounded; completeness gives a limit c that lies in every Iₙ. Some open cover member U contains c, so there is r>0 with (c−r,c+r)⊆U. For n sufficiently large the interval Iₙ has length less than r and contains c, hence Iₙ⊆U. That one set finitely covers Iₙ, a contradiction. Therefore [a,b] has a finite subcover.

If K⊆[a,b] is closed, add the open set ℝ∖K to any open cover of K. The enlarged family covers [a,b], so finitely many members cover [a,b]. Removing ℝ∖K, if present, leaves a finite cover of K. Thus every closed bounded subset of ℝ is compact in the open-cover sense.

Conversely, an open-cover compact set must be bounded: the open intervals (−n,n), n∈ℕ, cover ℝ, and a finite selection cannot cover an unbounded set. It must also be closed. If x lies outside K but in its closure, every neighborhood of x meets K. The open sets Uₙ=ℝ∖[x−1/n,x+1/n] cover K, because every point of K differs from x. A finite selection has a largest n and misses a K-point within 1/n of x, contradicting compactness. Combined with the sequential theorem, this completes the equivalence for subsets of ℝ. The proof relies on the order and completeness structure of ℝ; the phrase “closed and bounded” is not the definition of compactness in arbitrary spaces.

**A compactness proof with hypotheses exposed.** If \(f:K\to\mathbb R\) is continuous on nonempty compact \(K\), it is bounded and attains its bounds. For each \(n\), suppose there were \(x_n\in K\) with \(f(x_n)>n\). A convergent subsequence \(x_{n_j}\to x\in K\) would give \(f(x_{n_j})\to f(x)\), impossible for values above \(n_j\). Thus \(f(K)\) is bounded above; the lower side is analogous. Let \(M=\sup f(K)\). Choose \(y_n\in K\) with \(f(y_n)>M-1/n\); a subsequence tends to \(y\in K\), and continuity gives \(f(y)=M\). The minimum is analogous. On the noncompact interval \((0,1)\), \(f(x)=x\) is continuous and bounded but has no maximum. Boundedness of function values is not the same as attainment.

**Choice of witness.** To show a proposed finite cover fails, do not merely point at the missing endpoint. The endpoint is not in K=(0,1). Instead, for the cover Uₙ=(1/n,1), choose any finite subfamily, let N be its largest index, and select x=1/(N+1). This x belongs to K but none of the selected intervals. The witness depends on the finite subfamily, exactly as the negation of compactness requires.

```exercise
{"id":"analysis-compact-cover","type":"choice","prompt":"The family Uₙ=(1/n,2), n≥2, covers (0,1). Why is there no finite subcover?","options":[{"label":"Zero is not covered.","correct":false,"feedback":"Zero is not in the set being covered. A failing witness must belong to (0,1)."},{"label":"For a finite choice with largest index N, 1/(N+1) belongs to (0,1) but to none of its chosen intervals.","correct":true,"feedback":"Yes. The witness is inside the target set and depends on the finite selection."},{"label":"Every Uₙ is unbounded above.","correct":false,"feedback":"The right endpoint does not explain the missing near-zero points."}],"hints":["Choose a positive point closer to zero than the smallest left endpoint in the finite selection."]}
```

```exercise
{"id":"analysis-closed-bounded","type":"written","prompt":"Let K={0}∪{1/n:n∈ℕ}. Prove K is compact using sequences. Then explain why deleting 0 changes the answer.","hints":["Separate a sequence whose terms use one value infinitely often from one whose denominators tend to infinity.","For the deleted set, inspect the sequence 1/n itself."],"rubric":["Shows K is bounded","Proves K is closed or directly extracts a subsequence converging in K","Identifies 0 as the lost limit after deletion","Explains that boundedness alone is insufficient"],"solution":"K⊆[0,1]. To see it is closed, any convergent sequence in K either has a constant subsequence 1/m (or 0) and shares that limit, or its positive terms have denominators escaping every finite bound, in which case it tends to 0∈K. Hence K is closed and bounded, so compact. Without 0, the sequence 1/n lies in the set and converges only to 0 outside it; the set is not sequentially compact and therefore not compact."}
```
