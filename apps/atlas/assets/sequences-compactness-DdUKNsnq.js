var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: sequences-compactness
title: "Sequences, Subsequences, and Compactness"
level: advanced-undergraduate
estimated_minutes: 85
license: CC BY-SA 4.0
---

# Sequences, Subsequences, and Compactness

A bounded sequence need not settle down: \\(1,-1,1,-1,\\ldots\\) never chooses a limit. Yet in finite-dimensional space it cannot behave chaotically in every possible way. Some subsequence must converge. Compactness turns that modest extraction principle into a machine for proving global conclusions from local information.

This chapter builds on sequence limits, the least-upper-bound property, and elementary continuity. If quantifier negation or Cauchy sequences are unfamiliar, begin with [Quantifiers, Suprema, and Completeness](#/item/book-proof-safe-real-analysis?chapter=quantifiers-completeness).

## 1. Subsequences preserve order, not spacing

A **subsequence** of \\((a_n)\\) has the form \\((a_{n_k})\\), where \\(n_1<n_2<n_3<\\ldots\\) are natural-number indices. The indices must increase strictly, but they need not be consecutive or regularly spaced.

If \\(a_n\\to L\\), then every subsequence also converges to \\(L\\). Given \\(\\varepsilon>0\\), choose \\(N\\) so that \\(n\\ge N\\) implies \\(|a_n-L|<\\varepsilon\\). Because a strictly increasing sequence of natural indices satisfies \\(n_k\\ge k\\), every \\(k\\ge N\\) gives \\(n_k\\ge N\\), and therefore \\(|a_{n_k}-L|<\\varepsilon\\).

**Worked example 1 (two incompatible subsequences).**

The contrapositive is an efficient divergence test: if two subsequences converge to different limits, the original sequence cannot converge. For

\\(a_n=(-1)^n+1/n\\),

the even terms satisfy \\(a_{2k}=1+1/(2k)\\to 1\\), while the odd terms satisfy \\(a_{2k-1}=-1+1/(2k-1)\\to -1\\). Therefore \\((a_n)\\) diverges.

Be precise about what this test says. Finding two subsequences with the same limit does not prove convergence; another subsequence may behave differently. For \\(a_n=0\\) except when \\(n\\) is a power of two, where \\(a_n=1\\), many subsequences converge to \\(0\\), but the power-of-two subsequence is constantly \\(1\\).

## 2. Bolzano–Weierstrass extracts coherence

The **Bolzano–Weierstrass theorem** says every bounded sequence in \\(R^d\\) has a convergent subsequence. In one dimension, a nested-interval proof makes the role of completeness visible.

Place the bounded sequence inside a closed interval \\(I_1\\). Divide \\(I_1\\) into two closed halves. At least one half contains infinitely many sequence terms; call it \\(I_2\\). Bisect again, choosing a half \\(I_3\\) with infinitely many terms. Continue so that the intervals are nested and their lengths tend to zero. Completeness gives a unique point \\(L\\) common to all \\(I_k\\).

Now choose indices recursively. Select \\(n_1\\) with \\(a_{n_1}\\in I_1\\). After choosing \\(n_k\\), use the infinitely many terms in \\(I_{k+1}\\) to select \\(n_{k+1}>n_k\\) with \\(a_{n_{k+1}}\\in I_{k+1}\\). Since both \\(a_{n_k}\\) and \\(L\\) lie in \\(I_k\\), their distance is at most the length of \\(I_k\\), which tends to zero. Thus the selected subsequence converges to \\(L\\).

The proof has two independent mechanisms. “Infinitely many” allows indices to keep moving forward. Nested intervals with shrinking length force the selected values together. A finite but very large collection of terms would not be enough for an infinite subsequence.

## 3. Cluster points, lim sup, and lim inf

A **subsequential limit** or **cluster point** of a sequence is a limit of some subsequence. For bounded real sequences, the set of subsequential limits is nonempty by Bolzano–Weierstrass.

Define the tail supremum \\(s_n=\\sup\\{a_k:k\\ge n\\}\\) and tail infimum \\(t_n=\\inf\\{a_k:k\\ge n\\}\\). For a bounded sequence, \\((s_n)\\) decreases and \\((t_n)\\) increases, so both converge. Their limits are

\\(\\limsup a_n = \\lim s_n\\) and \\(\\liminf a_n = \\lim t_n\\).

These quantities record the highest and lowest behavior that persists arbitrarily far out. A bounded real sequence converges precisely when its lim sup and lim inf agree; their common value is then the limit.

For \\(a_n=(-1)^n+1/n\\), the lim sup is \\(1\\) and the lim inf is \\(-1\\). For \\(a_n=\\sin(n\\pi/2)\\), the repeating values are \\(1,0,-1,0\\), so the same two extreme persistent values occur. The full set of cluster points is \\(\\{-1,0,1\\}\\), reminding us that lim sup and lim inf record extremes, not every cluster point.

## 4. Compactness: every cover has a finite core

Let \\(K\\) be a subset of a metric space. An **open cover** of \\(K\\) is a collection of open sets whose union contains \\(K\\). The set \\(K\\) is **compact** if every open cover has a finite subcollection that still covers \\(K\\).

This definition can feel detached from sequences, but in metric spaces it is equivalent to **sequential compactness**: every sequence in \\(K\\) has a subsequence that converges to a point of \\(K\\). The final phrase is essential. A subsequence that converges outside the set does not certify compactness.

**Worked example 2 (an escaping boundary limit).**

Consider \\(K=(0,1)\\). The sequence \\(1/n\\), beginning at \\(n=2\\), lies in \\(K\\) and converges in \\(R\\) to \\(0\\), which is not in \\(K\\). Every subsequence has the same limit, so none converges to a point of \\(K\\); the interval is not sequentially compact. An open-cover witness is \\(U_n=(1/n,1)\\). These sets cover \\((0,1)\\), but any finite selection has a largest index \\(N\\) and misses points in \\((0,1/N]\\).

## 5. Heine–Borel has an address

In \\(R^d\\) with its usual metric, the **Heine–Borel theorem** says a set is compact exactly when it is closed and bounded.

Both words do work. The interval \\((0,1)\\) is bounded but not closed and loses limits through its endpoints. The ray \\([0,\\infty)\\) is closed but not bounded and allows the sequence \\(n\\) to escape. The interval \\([0,1]\\) prevents both failures.

Do not treat “closed and bounded” as the definition of compactness in every metric space. Let \\(X\\) be an infinite set with the discrete metric, where \\(d(x,y)=1\\) for distinct points. The entire space is closed and bounded, but the cover by singleton sets has no finite subcover. Similarly, in many infinite-dimensional normed spaces the closed unit ball is not compact. The open-cover definition travels safely; Heine–Borel is a theorem tied to finite-dimensional Euclidean space.

## 6. Continuous images of compact sets

If \\(f:K\\to Y\\) is continuous and \\(K\\) is compact, then \\(f(K)\\) is compact. Here is the cover proof. Let \\(\\{V_\\alpha\\}\\) be an open cover of \\(f(K)\\). The inverse images \\(\\{f^{-1}(V_\\alpha)\\}\\) are open relative to \\(K\\) and cover \\(K\\). Compactness gives finitely many inverse images that cover \\(K\\); their corresponding \\(V_\\alpha\\) sets cover \\(f(K)\\).

When \\(Y=R\\), every compact subset is closed and bounded. Therefore a continuous real-valued function on a compact domain is bounded. More strongly, it attains its bounds.

**Theorem 6.1 (Extreme value).** If \\(K\\) is nonempty and compact and \\(f:K\\to R\\) is continuous, then there exist points \\(x_min,x_max\\in K\\) such that

\\(f(x_min)\\le f(x)\\le f(x_max)\\) for every \\(x\\in K\\).

One proof takes a sequence \\((x_n)\\) with \\(f(x_n)\\) approaching \\(\\sup f(K)\\). Compactness extracts a subsequence \\(x_{n_k}\\to x_max\\) with \\(x_max\\in K\\). Continuity gives \\(f(x_{n_k})\\to f(x_max)\\), while construction gives the same values tending to the supremum. Uniqueness of limits yields \\(f(x_max)=\\sup f(K)\\).

Every hypothesis is visible. Nonemptiness ensures there are values to optimize. Compactness keeps an optimizing sequence from escaping. Continuity transfers limiting behavior through \\(f\\). If the domain is \\((0,1)\\), the continuous function \\(f(x)=x\\) has supremum \\(1\\) but never attains it. If continuity is removed, the function on \\([0,1]\\) defined by \\(f(x)=1/(1-x)\\) for \\(x<1\\) and \\(f(1)=0\\) is unbounded despite its compact domain.

## 7. Compactness makes continuity uniform

A function \\(f:K\\to Y\\) is **uniformly continuous** if for every \\(\\varepsilon>0\\) there exists \\(\\delta>0\\) such that for all \\(x,y\\in K\\),

\\(d(x,y)<\\delta \\Rightarrow d(f(x),f(y))<\\varepsilon\\).

Ordinary continuity chooses a potentially different \\(\\delta\\) around each base point. Uniform continuity demands one scale for the whole domain.

The **Heine–Cantor theorem** says every continuous function on a compact metric space is uniformly continuous. Suppose not. Then some \\(\\varepsilon_0>0\\) defeats every uniform scale. For each \\(n\\), choose \\(x_n,y_n\\in K\\) with \\(d(x_n,y_n)<1/n\\) but \\(d(f(x_n),f(y_n))\\ge \\varepsilon_0\\). Compactness gives a subsequence \\(x_{n_k}\\to x\\in K\\). Because \\(x_{n_k}\\) and \\(y_{n_k}\\) become arbitrarily close, the corresponding \\(y\\) subsequence also converges to \\(x\\). Continuity at \\(x\\) forces both output subsequences to converge to \\(f(x)\\), so their mutual distance tends to zero, contradicting the fixed lower bound \\(\\varepsilon_0\\).

**Worked example 3 (a missing uniform scale).**

The function \\(f(x)=1/x\\) is continuous on \\((0,1]\\) but not uniformly continuous. Choose \\(x_n=1/n\\) and \\(y_n=1/(n+1)\\). Their input distance tends to zero, while \\(|f(x_n)-f(y_n)|=1\\). On \\([a,1]\\) for any fixed \\(a>0\\), compactness restores uniform continuity.

## 8. A numerical and text-only compactness audit

Suppose measurements lie in \\([0,10]\\) and an infinite stream is recorded. Bolzano–Weierstrass guarantees a convergent subsequence, but it does not give an efficient algorithm for finding the most useful one. A bisection audit works without a graph:

1. Count whether infinitely persistent values occur in \\([0,5]\\) or \\([5,10]\\); retain one qualifying half.
2. Bisect the retained interval again.
3. Record the nested intervals and their lengths \\(10,5,2.5,1.25,\\ldots\\).
4. Choose one later data index from each retained interval.

The shrinking interval lengths are a numerical certificate that selected values approach one another. A picture of nested boxes may aid intuition, but the interval endpoints and lengths contain the complete argument for a screen reader or pencil-and-paper reconstruction.

## 9. Common errors

- **Bounded means convergent.** Boundedness provides a convergent subsequence in \\(R^d\\), not convergence of the full sequence.
- **A limit in the ambient space stays in the set.** That requires closedness.
- **Compact means closed and bounded everywhere.** This equivalence is special to finite-dimensional Euclidean spaces.
- **Continuous on a bounded set means bounded.** The correct portable hypothesis is compact domain.
- **A supremum is automatically attained.** Compactness and continuity are what turn the supremum into a maximum.
- **Pointwise continuity supplies one global \\(\\delta\\).** That stronger promise is uniform continuity.

## 10. Exercises with worked answers

### ANA-CH06-E001 — Exercise 1: classify subsequential behavior

Let \\(a_n=\\cos(n\\pi/3)+1/n\\). Find all subsequential limits.

<details><summary>Hint 1</summary>

List the cosine values by residues modulo six.

</details>

<details><summary>Hint 2</summary>

The reciprocal perturbation disappears on every residue subsequence; show no other limit can occur.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E001 — Worked answer

The cosine values repeat with period six: \\(1/2,-1/2,-1,-1/2,1/2,1\\). Along each residue class modulo six, \\(1/n\\to 0\\), so the cluster points are \\(\\{-1,-1/2,1/2,1\\}\\). The lim inf is \\(-1\\) and lim sup is \\(1\\).

</details>

### ANA-CH06-E002 — Exercise 2: show a set is not compact

Is \\(K=\\{1/n:n\\ge 1\\}\\) closed as a subset of \\((0,2)\\)? Then decide whether it is compact in \\((0,2)\\) with the inherited metric.

<details><summary>Hint 1</summary>

Distinguish closedness in the given ambient interval from closedness in R.

</details>

<details><summary>Hint 2</summary>

The reciprocal sequence escapes toward the missing ambient point zero and has no convergent subsequence there.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E002 — Worked answer

The sequence of points \\(1/n\\) converges in \\(R\\) to \\(0\\), but \\(0\\) is not in the ambient space \\((0,2)\\). Relative to \\((0,2)\\), the set actually is closed because its only missing real accumulation point is not in the ambient space. Nevertheless it is not compact: the sequence \\(1/n\\) has no subsequence converging to a point of \\(K\\) in \\((0,2)\\). This example shows that closed subsets of a noncompact metric space need not be compact.

</details>

### ANA-CH06-E003 — Exercise 3: positive minimum

Let \\(K\\) be nonempty and compact, and let \\(f:K\\to R\\) be continuous with \\(f(x)>0\\) for every \\(x\\in K\\). Prove there is a number \\(m>0\\) such that \\(f(x)\\ge m\\) for every \\(x\\in K\\).

<details><summary>Hint 1</summary>

Use attainment of the minimum, rather than merely an infimum.

</details>

<details><summary>Hint 2</summary>

Evaluate the pointwise positivity hypothesis at an actual minimizer.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E003 — Worked answer

The extreme value theorem gives \\(x_min\\in K\\) where \\(f\\) attains its minimum. Set \\(m=f(x_min)\\). The pointwise positivity hypothesis gives \\(m>0\\), and minimality gives \\(f(x)\\ge m\\) throughout \\(K\\). Without compactness, \\(f(x)=x\\) on \\((0,1)\\) is positive but has no positive lower bound.

</details>

### ANA-CH06-E004 — Exercise 4: uniform continuity test

Prove \\(f(x)=x^2\\) is uniformly continuous on \\([0,3]\\) directly, and explain why the same estimate does not work on all of \\(R\\).

<details><summary>Hint 1</summary>

Factor x^2-y^2.

</details>

<details><summary>Hint 2</summary>

On [0,3] bound x+y by 6; explain why that bound disappears on R.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E004 — Worked answer

For \\(x,y\\in [0,3]\\), \\(|x^2-y^2|=|x-y||x+y|\\le 6|x-y|\\). Given \\(\\varepsilon>0\\), choose \\(\\delta=\\varepsilon/6\\). On all of \\(R\\), the factor \\(|x+y|\\) has no uniform bound. Indeed, pairs \\(x_n=n\\) and \\(y_n=n+1/n\\) approach each other while their squared outputs differ by approximately \\(2\\).

</details>

### ANA-CH06-E005 — Exercise 5: closed subsets inherit compactness

Let \\(K\\) be compact in a metric space and let \\(F\\) be closed. Prove that \\(K\\cap F\\) is compact using open covers.

<details><summary>Hint 1</summary>

Enlarge a cover of K intersect F to a cover of K.

</details>

<details><summary>Hint 2</summary>

Add the open complement of F, select finitely many sets, then discard that added set.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E005 — Worked answer

Let \\(\\{U_i\\}\\) be an open cover of \\(K\\cap F\\). Add the open set \\(X\\setminus F\\). The enlarged family covers all of \\(K\\): points of \\(K\\cap F\\) are covered by the original family, while points of \\(K\\setminus F\\) lie in \\(X\\setminus F\\). Compactness of \\(K\\) gives a finite subcover. Remove \\(X\\setminus F\\) if it occurs; the remaining finitely many original sets still cover \\(K\\cap F\\). Thus \\(K\\cap F\\) is compact. In particular, when the ambient space \\(K\\) is compact, apply the same argument in its relative topology to conclude that every relatively closed subset of \\(K\\) is compact.

</details>

### ANA-CH06-E006 — Exercise 6: compact sets are closed in metric spaces

Prove that a compact subset \\(K\\) of a metric space is closed. Hint: separate a fixed point outside \\(K\\) from every point of \\(K\\), then make the separation finite.

<details><summary>Hint 1</summary>

Fix x outside K and place a small ball around every y in K.

</details>

<details><summary>Hint 2</summary>

Use radii d(x,y)/3; a finite subcover makes their minimum positive and gives a ball about x missing K.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E006 — Worked answer

If \\(K=\\varnothing\\), it is closed and there is nothing to prove. Otherwise fix \\(x\\notin K\\). For each \\(y\\in K\\), let \\(r_y=d(x,y)/3>0\\). The balls \\(B_{r_y}(y)\\) cover \\(K\\), so finitely many, centered at \\(y_1,\\ldots,y_m\\), cover it. Put \\(r=\\min_i r_{y_i}>0\\). We claim \\(B_r(x)\\) misses \\(K\\). If \\(z\\in K\\), choose \\(i\\) with \\(d(z,y_i)<r_{y_i}\\). Were \\(d(x,z)<r\\le r_{y_i}\\), the triangle inequality would give

\\(d(x,y_i)\\le d(x,z)+d(z,y_i)<2r_{y_i}=2d(x,y_i)/3\\),

impossible. Hence every point outside \\(K\\) has a neighborhood in the complement, so the complement is open and \\(K\\) is closed. Compactness converted pointwise separations into one positive neighborhood radius.

</details>

### ANA-CH06-E007 — Exercise 7: continuous images of compact spaces

Let \\(f:K\\to Y\\) be continuous and \\(K\\) compact. Prove \\(f(K)\\) compact directly from the open-cover definition.

<details><summary>Hint 1</summary>

Pull the cover back to K using inverse images.

</details>

<details><summary>Hint 2</summary>

Choose a finite subcover there and push only its selected indices back to the original image cover.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E007 — Worked answer

Let \\(\\{V_i\\}\\) be an open cover of \\(f(K)\\). The inverse images \\(\\{f^{-1}(V_i)\\}\\) are open in \\(K\\) by continuity and cover \\(K\\), because every \\(x\\in K\\) has \\(f(x)\\) in some \\(V_i\\). Compactness supplies indices \\(i_1,\\ldots,i_m\\) whose inverse images cover \\(K\\). Then \\(V_{i_1},\\ldots,V_{i_m}\\) cover \\(f(K)\\): if \\(y=f(x)\\), the point \\(x\\) lies in one selected inverse image, so \\(y\\) lies in the corresponding selected set. The proof uses inverse images because continuity controls them; images of open sets need not be open.

</details>

### ANA-CH06-E008 — Exercise 8: positive distance from compact to closed

Let \\(K\\) be a nonempty compact subset of a metric space and \\(F\\) a nonempty closed set disjoint from \\(K\\). Prove there is \\(\\eta>0\\) such that \\(d(x,F)\\ge \\eta\\) for every \\(x\\in K\\), where \\(d(x,F)=\\inf_{y\\in F}d(x,y)\\).

<details><summary>Hint 1</summary>

Consider the function x mapped to its distance from F.

</details>

<details><summary>Hint 2</summary>

Prove it is Lipschitz, minimize it on K, and use closedness of F to rule out a zero minimum.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E008 — Worked answer

The distance-to-set function is 1-Lipschitz: for any \\(x,z\\), the triangle inequality gives \\(d(x,F)\\le d(x,z)+d(z,F)\\), and reversing \\(x,z\\) yields \\(|d(x,F)-d(z,F)|\\le d(x,z)\\). It is therefore continuous. On compact \\(K\\), it attains a minimum \\(\\eta\\ge 0\\). If \\(\\eta=0\\), there is \\(x\\in K\\) with \\(d(x,F)=0\\). Choose \\(y_n\\in F\\) with \\(d(x,y_n)<1/n\\); then \\(y_n\\to x\\). Closedness of \\(F\\) gives \\(x\\in F\\), contradicting disjointness. Thus \\(\\eta>0\\). If \\(K\\) were merely closed, the conclusion could fail for disjoint sets approaching one another at infinity.

</details>

### ANA-CH06-E009 — Exercise 9: nested compact sets intersect

Let \\(K_1\\supseteq K_2\\supseteq \\ldots\\) be nonempty compact subsets of a metric space. Prove their intersection is nonempty. No shrinking-diameter assumption is required.

<details><summary>Hint 1</summary>

Choose one point from each nested set and extract inside the first compact set.

</details>

<details><summary>Hint 2</summary>

For each fixed m the subsequence eventually lies in K_m; use its closedness to retain the limit.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E009 — Worked answer

Choose \\(x_n\\in K_n\\). The sequence lies in compact \\(K_1\\), so some subsequence \\(x_{n_j}\\) converges to a point \\(x\\in K_1\\). Fix \\(m\\). Eventually \\(n_j\\ge m\\); nesting then gives \\(x_{n_j}\\in K_{n_j}\\subseteq K_m\\). The set \\(K_m\\) is compact and hence closed, so it contains the limit \\(x\\). Since \\(m\\) was arbitrary, \\(x\\) lies in every \\(K_m\\). Shrinking diameters would add uniqueness, not existence.

</details>

### ANA-CH06-E010 — Exercise 10: an open cover with no finite subcover

For \\(n\\ge 2\\), let \\(U_n=(1/n,1)\\). Prove that \\(\\{U_n:n\\ge 2\\}\\) covers \\((0,1)\\) but has no finite subcover.

<details><summary>Hint 1</summary>

For a given x choose n with 1/n<x.

</details>

<details><summary>Hint 2</summary>

A finite selection has a largest index, and its union still omits a whole interval near zero.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E010 — Worked answer

Given \\(x\\in (0,1)\\), choose \\(n>1/x\\); then \\(1/n<x<1\\), so \\(x\\in U_n\\). Thus the family covers. For any finite selection, let \\(N\\) be the largest selected index. Since \\(U_n\\subseteq U_N\\) for \\(n\\le N\\), the finite union is \\(U_N=(1/N,1)\\), which misses every point in \\((0,1/N]\\). Hence no finite selection covers. The cover exposes the missing boundary point \\(0\\); adding that point and using open neighborhoods of it changes the finite-control argument.

</details>

### ANA-CH06-E011 — Exercise 11: compactness of a finite set

Prove that every finite subset of any topological space is compact. Do not assume the space is metric or Hausdorff.

<details><summary>Hint 1</summary>

Choose one member of the cover for each point of the finite set.

</details>

<details><summary>Hint 2</summary>

The number of choices is finite without any separation or metric assumption.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E011 — Worked answer

Let \\(K=\\{x_1,\\ldots,x_m\\}\\) and let \\(\\{U_i\\}\\) be any open cover. For each \\(x_j\\), choose one cover member \\(U_{i_j}\\) containing it. The at most \\(m\\) selected sets cover \\(K\\). Neither distances nor closedness were used. In a non-Hausdorff space a finite set need not be closed, showing that “compact implies closed” requires separation; metric spaces provide that separation automatically.

</details>

### ANA-CH06-E012 — Exercise 12: compactness implies total boundedness

A metric space is totally bounded when, for every \\(\\varepsilon>0\\), it can be covered by finitely many open balls of radius \\(\\varepsilon\\). Prove every compact metric space is totally bounded.

<details><summary>Hint 1</summary>

Use all balls of the requested radius as an open cover.

</details>

<details><summary>Hint 2</summary>

A finite subcover supplies exactly the finite net required in the definition.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E012 — Worked answer

Fix \\(\\varepsilon>0\\). The family \\(\\{B_\\varepsilon(x):x\\in K\\}\\) is an open cover of \\(K\\). Compactness supplies finitely many centers \\(x_1,\\ldots,x_m\\) such that \\(K\\subseteq \\bigcup_{i=1}^m B_\\varepsilon(x_i)\\). This is exactly an \\(\\varepsilon\\)-net. Ordinary boundedness says only that one ball of some possibly large radius contains the space; total boundedness demands finite resolution at every scale.

</details>

### ANA-CH06-E013 — Exercise 13: total boundedness extracts a Cauchy subsequence

Prove that every sequence in a totally bounded metric space has a Cauchy subsequence.

<details><summary>Hint 1</summary>

At each smaller radius retain infinitely many indices lying in one covering ball.

</details>

<details><summary>Hint 2</summary>

Choose increasing diagonal indices from nested retained sets; two late selected points lie in the same small ball.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E013 — Worked answer

Cover the space by finitely many balls of radius \\(1/2\\). One ball contains infinitely many sequence terms; retain those indices. Cover the space by finitely many balls of radius \\(1/4\\); one of them contains infinitely many retained terms. Continue, at stage \\(k\\) retaining an infinite index set whose points lie in a ball of radius \\(2^{-k}\\), nested at the level of index selections. Choose the \\(k\\)th subsequence term from the \\(k\\)th retained set with a larger index than before. If \\(m,n\\ge k\\), both selected terms lie in the stage-\\(k\\) ball, so their distance is below \\(2\\cdot 2^{-k}\\). This tends to zero, making the subsequence Cauchy. Total boundedness supplies the repeated finite pigeonhole step.

</details>

### ANA-CH06-E014 — Exercise 14: complete plus totally bounded gives sequential compactness

Use Exercise 13 to prove that a complete, totally bounded metric space is sequentially compact.

<details><summary>Hint 1</summary>

Apply the previous exercise to an arbitrary sequence.

</details>

<details><summary>Hint 2</summary>

Completeness converts the extracted Cauchy subsequence into a convergent subsequence in the space.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E014 — Worked answer

Begin with any sequence. Total boundedness gives a Cauchy subsequence. Completeness guarantees that this Cauchy subsequence converges to a point of the space. Thus every sequence has a convergent subsequence, which is sequential compactness. The hypotheses do distinct work: total boundedness extracts internal tail coherence; completeness prevents the coherent tail from landing in a missing point. The interval \\((0,1)\\) is totally bounded but incomplete, while an infinite set with the discrete metric is complete but not totally bounded.

</details>

### ANA-CH06-E015 — Exercise 15: a closed bounded noncompact set outside finite dimensions

Let \\(X\\) be the set of real sequences with finite support, equipped with the supremum metric \\(d(x,y)=\\sup_k|x_k-y_k|\\). Let \\(e_n\\) have \\(1\\) in coordinate \\(n\\) and zero elsewhere. Show that \\(\\{e_n:n\\in N\\}\\) is bounded and closed but not compact.

<details><summary>Hint 1</summary>

Compute the distance between two different coordinate vectors.

</details>

<details><summary>Hint 2</summary>

Their fixed separation forbids Cauchy subsequences; any convergent sequence of such vectors must be eventually constant.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E015 — Worked answer

Every \\(e_n\\) has distance one from the zero sequence, so the set is bounded. For distinct \\(m,n\\), \\(d(e_m,e_n)=1\\); hence no sequence of distinct \\(e_n\\) is Cauchy and no such sequence can converge. To see the set is closed, if a sequence of its points converges, it must be Cauchy, so it is eventually constant and its limit is one of the \\(e_n\\). Yet the sequence \\((e_n)\\) has no convergent subsequence, so the set is not sequentially compact and therefore not compact. This is why Heine–Borel is a finite-dimensional theorem, not a generic normed-space rule.

</details>

### ANA-CH06-E016 — Exercise 16: compact-domain bijections have continuous inverses

Let \\(f:K\\to Y\\) be a continuous bijection from a compact space \\(K\\) to a metric space \\(Y\\). Prove \\(f^{-1}:f(K)\\to K\\) is continuous.

<details><summary>Hint 1</summary>

Prove the original bijection maps closed sets to closed sets.

</details>

<details><summary>Hint 2</summary>

Closed subsets of K are compact, and their compact images are closed in the metric codomain.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E016 — Worked answer

It suffices to show that \\(f\\) maps closed subsets of \\(K\\) to closed subsets of \\(f(K)\\). If \\(C\\subseteq K\\) is closed, then \\(C\\) is compact because it is closed in compact \\(K\\). Its continuous image \\(f(C)\\) is compact, and compact subsets of the metric space \\(Y\\) are closed. Thus the inverse map takes a closed set \\(C\\) in its codomain \\(K\\) to the closed preimage \\((f^{-1})^{-1}(C)=f(C)\\) in \\(f(K)\\). Therefore the inverse is continuous. Bijectivity alone does not make an inverse continuous; compact-to-Hausdorff separation supplies the missing control.

</details>

### ANA-CH06-E017 — Exercise 17: equivalent metrics preserve compactness

Suppose metrics \\(d\\) and \\(\\rho\\) on the same set \\(X\\) generate exactly the same open sets. Prove a subset \\(K\\) is compact under \\(d\\) exactly when it is compact under \\(\\rho\\).

<details><summary>Hint 1</summary>

Use the open-cover definition, which mentions only open sets.

</details>

<details><summary>Hint 2</summary>

The two metrics have exactly the same eligible covers and the same finite subcovers.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E017 — Worked answer

Open-cover compactness depends only on which subsets are open. A \\(d\\)-open cover of \\(K\\) is therefore exactly a \\(\\rho\\)-open cover, and the meaning of a finite subcover is set-theoretic and unchanged. Hence the compact subsets coincide. Quantitative properties need not coincide: the two metrics may give different diameters, Lipschitz constants, and Cauchy sequences unless stronger uniform equivalence holds.

</details>

### ANA-CH06-E018 — Exercise 18: compactness of a finite product

Let \\(K\\) and \\(L\\) be sequentially compact metric spaces. With product metric \\(D((x,y),(x',y'))=d_K(x,x')+d_L(y,y')\\), prove \\(K\\times L\\) is sequentially compact.

<details><summary>Hint 1</summary>

First extract convergence in K.

</details>

<details><summary>Hint 2</summary>

Extract the L-coordinate subsequence from those already selected indices so that the first-coordinate convergence survives.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E018 — Worked answer

Take a sequence \\((x_n,y_n)\\) in \\(K\\times L\\). Sequential compactness of \\(K\\) gives indices \\(n_j\\) for which \\(x_{n_j}\\to x\\in K\\). Apply sequential compactness of \\(L\\) to the subsequence \\((y_{n_j})\\); obtain further indices \\(j_k\\) with \\(y_{n_{j_k}}\\to y\\in L\\). The corresponding first coordinates still converge to \\(x\\) because a subsequence of a convergent sequence has the same limit. Therefore

\\(D((x_{n_{j_k}},y_{n_{j_k}}),(x,y))\\to 0\\).

Every sequence has a convergent subsequence, proving the claim. The second extraction must be made from the first selected indices so that both coordinates converge along one common schedule.

</details>

### ANA-CH06-E019 — Exercise 19: a compactness proof of uniform continuity

Let \\(f:K\\to Y\\) be continuous, where \\(K\\) is compact and both spaces are metric. Prove \\(f\\) is uniformly continuous using a contradiction and subsequences.

<details><summary>Hint 1</summary>

Negate uniform continuity to obtain close input pairs with a fixed image gap.

</details>

<details><summary>Hint 2</summary>

Extract a convergent subsequence of the first inputs and prove the matching second inputs share its limit.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E019 — Worked answer

If uniform continuity failed, some \\(\\varepsilon_0>0\\) would have the following property: for every \\(n\\), there are \\(x_n,y_n\\in K\\) with \\(d(x_n,y_n)<1/n\\) but \\(d_Y(f(x_n),f(y_n))\\ge \\varepsilon_0\\). Compactness gives a subsequence \\(x_{n_k}\\to x\\in K\\). The triangle inequality shows

\\(d(y_{n_k},x)\\le d(y_{n_k},x_{n_k})+d(x_{n_k},x)\\to 0\\),

so \\(y_{n_k}\\to x\\) as well. Continuity at \\(x\\) gives both image subsequences converging to \\(f(x)\\), and hence their mutual distances tend to zero, contradicting the fixed lower bound \\(\\varepsilon_0\\). Compactness forces the moving bad pairs to accumulate at one point where local continuity defeats them.

</details>

### ANA-CH06-E020 — Exercise 20: diagnose four compactness claims

For each statement, decide whether it is true and justify the decision: (a) every closed subset of a metric space is compact; (b) every compact subset of a metric space is bounded; (c) every sequence in a compact metric space is Cauchy; (d) every sequence in a compact metric space has a Cauchy subsequence.

<details><summary>Hint 1</summary>

Treat all four assertions separately, distinguishing a sequence from a subsequence.

</details>

<details><summary>Hint 2</summary>

Use R and the alternating sequence in {0,1} for false claims; covers by balls and convergent subsequences prove the true ones.

</details>

<details><summary>Solution</summary>

#### ANA-CH06-E020 — Worked answer

(a) False: \\(R\\) is closed in itself but not compact; the open cover \\(\\{(-n,n):n\\in N\\}\\) has no finite subcover. (b) True: fix \\(x_0\\); the balls \\(B_n(x_0)\\) cover the compact set, so finitely many suffice and the largest selected radius bounds it. (c) False: the alternating sequence \\(0,1,0,1,\\ldots\\) lies in compact \\(\\{0,1\\}\\) but is not Cauchy. (d) True: compactness gives a convergent subsequence, and every convergent sequence is Cauchy. Compactness guarantees extractable coherence, not coherence of every original ordering.

</details>

## ANA-CH06-P001 — Project: a compactness equivalence dossier

Build a compactness dossier for each of the spaces \\([0,1]\\), \\((0,1)\\), \\(Q\\cap [0,2]\\) with the usual metric, and \\(\\{0\\}\\cup \\{1/n:n\\in N\\}\\). For every space, submit five linked artifacts:

1. a decision about completeness, with either a proof or an explicit escaping Cauchy sequence;
2. a decision about total boundedness, with an \\(\\varepsilon\\)-net construction or a fixed-scale obstruction;
3. a decision about sequential compactness, with an extraction argument or a sequence defeating every subsequence;
4. one open cover and an analysis of whether a finite subcover must exist;
5. a short dependency diagram explaining which implication uses completeness, which uses total boundedness, and which special facts come from the real line.

As a transfer component, examine the family \\(f_n(x)=x^n\\) in \\(C([0,1])\\) under the supremum norm. It is pointwise bounded, but determine whether it has a uniformly convergent subsequence. Relate your conclusion to equicontinuity and state exactly why boundedness of scalar values is not total boundedness of the function family.

**Verification standard.** Every negative decision must include a witness with the correct quantifier structure. Every positive compactness decision must include a finite-control or subsequence mechanism, not the phrase “closed and bounded” unless the ambient finite-dimensional theorem has been named. The four space dossiers and the function-family transfer should agree with one common implication map.

## 12. Continue the route

[Continuity and Differentiation](#/item/book-proof-safe-real-analysis?chapter=continuity-differentiation) uses compactness to audit the intermediate, extreme, and mean value theorems. [Uniform Convergence](#/item/book-proof-safe-real-analysis?chapter=uniform-convergence) applies the same extraction method to sequences of functions.

Return to the [book overview](#/item/book-proof-safe-real-analysis) for the complete dependency map.

## Summary

Subsequences extract ordered portions of a sequence, and compactness guarantees a convergent extraction whose limit remains in the set. Open covers express the same finite-control principle in metric spaces. Closedness and boundedness characterize compactness specifically in finite-dimensional Euclidean space. Continuous maps transport compactness to their images; this gives attained extrema and converts local continuity to uniform continuity. None of these conclusions forces every original sequence to converge.
`;export{e as default};