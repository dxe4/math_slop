var e=`---
parent_id: book-functional-analysis
chapter_id: open-mapping-closed-graph
title: "Open Mapping and Closed Graph Theorems"
level: graduate
license: CC BY-SA 4.0
---

# Open Mapping and Closed Graph Theorems

An algebraic inverse need not preserve small errors. In Banach spaces, however, a bounded linear bijection automatically has a bounded inverse. The underlying theorem says more: every bounded surjective linear map between Banach spaces sends open sets to open sets. From it we obtain a criterion for boundedness based on the graph being closed, a condition often easier to prove than a direct norm estimate.

Read [Bounded Operators and Duals](bounded-operators-duals.md), including operator norms, and the [Baire theorem in Real Analysis](../proof-safe-real-analysis/baire-category.md). The proof uses completeness twice in different spaces: Baire gives a ball in the closure of an image in the target, and a summable correction process produces a preimage in the domain. Identifying those two uses prevents the common mistake of assuming a closed image ball is already an actual image ball.

We will prove open mapping, bounded inverse and closed graph, then study closed ranges and two explicit incomplete-space counterexamples. None of these results asserts that the inverse of an arbitrary unbounded or nonsurjective operation exists. Domains, target spaces and norms remain part of every statement.

## What openness of a linear map means

**Definition 5.1 (Open map).** A map \\(T:X\\to Y\\) is open if it sends every open subset of \\(X\\) to an open subset of \\(Y\\). This is separate from continuity, which concerns inverse images of open sets.

For a linear map, it suffices to know that the image of the open unit ball contains an open ball about zero. Indeed, translating and rescaling then handles a small ball around any input point. If \\(T\\) is not surjective, openness into the full target is usually impossible for a proper linear image: a linear subspace containing a neighbourhood of zero must equal the whole space by rescaling.

An image containing a neighbourhood in its own relative topology is a different notion. For example the inclusion of a line in the plane may behave perfectly well as a map onto that line, but it does not send an interval to an open subset of the plane. The target in the theorem must therefore be stated exactly.

## Baire supplies an approximate preimage bound

**Lemma 5.2 (A ball in the closure).** If \\(T:X\\to Y\\) is bounded, linear and surjective, and \\(Y\\) is Banach, then there is \\(\\delta>0\\) with
\\[
 B_Y(0,\\delta)\\subseteq\\overline{T(B_X(0,1))}.
\\]
Completeness of \\(X\\) is not needed for this step.

*Proof.* Surjectivity gives \\(Y=\\bigcup_{n\\ge1}T(B_X(0,n))\\). Hence the closed sets \\(\\overline{T(B_X(0,n))}\\) cover \\(Y\\). By Baire one has interior, say it contains \\(B_Y(y_0,r)\\). For \\(\\|h\\|<r\\), both \\(y_0+h\\) and \\(y_0\\) are in that closure. Choose approximating image sequences for each and subtract them. Their preimages have differences of norm less than \\(2n\\), so
\\[
 B_Y(0,r)\\subseteq\\overline{T(B_X(0,2n))}.
\\]
Rescaling by \\(1/(2n)\\) proves the claim with \\(\\delta=r/(2n)\\). The argument subtracts approximating sequences; it does not assume a difference of closure points is itself an exact image. ∎

The conclusion means every sufficiently small target vector can be approximated arbitrarily well by images of vectors of norm below one. It does not say the target vector is one of those images with that norm bound. Removing the closure requires a second argument and domain completeness.

## Summable corrections produce an actual preimage

**Lemma 5.3 (Removing the closure).** If \\(X\\) is Banach and \\(B_Y(0,\\delta)\\subseteq\\overline{T(B_X(0,1))}\\), then
\\[
 B_Y(0,\\delta/2)\\subseteq T(B_X(0,1)).
\\]

*Proof.* Fix \\(y\\) with \\(\\|y\\|<\\delta/2\\). Choose a number \\(a\\) with \\(\\|y\\|/\\delta<a<1/2\\). Rescaling the closure inclusion gives
\\(B_Y(0,\\delta a)\\subseteq\\overline{T(B_X(0,a))}\\). Thus choose \\(x_1\\) with \\(\\|x_1\\|<a\\) and residual \\(\\|y-Tx_1\\|<\\delta a/2\\). Inductively, after residual \\(r_{k-1}\\) has norm below \\(\\delta a/2^{k-1}\\), choose \\(x_k\\) with
\\[
 \\|x_k\\|<a/2^{k-1},\\qquad
 \\|r_{k-1}-Tx_k\\|<\\delta a/2^k.
\\]
This is possible by the rescaled closure inclusion. Set \\(r_k=y-T\\sum_{j\\le k}x_j\\).

The norms of the corrections have sum at most \\(2a<1\\). Completeness of \\(X\\) makes \\(x=\\sum x_k\\) exist there, with \\(\\|x\\|<1\\). Boundedness of \\(T\\) permits passage to the limit, while \\(\\|r_k\\|\\to0\\), so \\(Tx=y\\). ∎

Choosing \\(a<1/2\\) preserves the strict open-ball bound. An argument that merely bounds the correction sum by one and then asserts the input lies in the open unit ball has missed an endpoint. Often the theorem survives a harmless change of radius, but recording the slack keeps the proof exact.

**Theorem 5.4 (Open mapping theorem).** A bounded surjective linear map between Banach spaces is open.

*Proof.* Lemmas 5.2 and 5.3 give \\(B_Y(0,\\eta)\\subseteq T(B_X(0,1))\\) for some \\(\\eta>0\\). If \\(O\\subseteq X\\) is open and \\(y=Tx\\in T(O)\\), choose \\(r>0\\) with \\(B_X(x,r)\\subseteq O\\). Linearity gives
\\[
 B_Y(y,r\\eta)\\subseteq T(B_X(x,r))\\subseteq T(O).
\\]
Every image point therefore has a neighbourhood inside the image, proving openness. ∎

Baire supplies existence of a radius rather than a useful numerical value. If a problem has an explicit inverse formula or energy estimate, that estimate can give quantitative information beyond the theorem's qualitative conclusion.

## Bounded inverse and equivalent complete norms

**Corollary 5.5 (Bounded inverse theorem).** A bounded linear bijection \\(T:X\\to Y\\) between Banach spaces has a bounded linear inverse.

*Proof.* The inverse is algebraically linear. Openness gives \\(B_Y(0,\\eta)\\subseteq T(B_X(0,1))\\). For nonzero \\(y\\), rescale it to \\(\\eta y/(2\\|y\\|)\\), whose norm is below \\(\\eta\\). Its unique preimage has norm below one. Scaling back gives \\(\\|T^{-1}y\\|\\le2\\|y\\|/\\eta\\). The estimate also holds at zero. ∎

**Worked example 5.6 (Two complete norms become equivalent).** Suppose one vector space has Banach norms \\(\\|\\cdot\\|_a,\\|\\cdot\\|_b\\) with \\(\\|x\\|_b\\le C\\|x\\|_a\\). The identity from the first normed space to the second is a bounded bijection. Its inverse is bounded by Corollary 5.5, so \\(\\|x\\|_a\\le C'\\|x\\|_b\\). Thus the norms are equivalent.

Both completeness assumptions matter. On the underlying vector set \\(\\ell^1\\), the one-norm is complete and the inherited two-norm is not. The identity from the one-norm to the two-norm is bounded because \\(\\|x\\|_2\\le\\|x\\|_1\\), but its inverse is unbounded: the vector with its first \\(n\\) coordinates equal to \\(1/n\\) has one-norm one and two-norm \\(1/\\sqrt n\\). This does not contradict finite-dimensional norm equivalence, because the vectors use increasing coordinate dimensions.

The Neumann theorem from the operator chapter is a quantitative special construction of an inverse near the identity. Bounded inverse is a general existence theorem for continuity of an already existing algebraic inverse. One theorem should not be substituted for the assumptions of the other.

## Closed graphs turn convergence into boundedness

**Definition 5.7 (Graph).** For a linear map \\(T:X\\to Y\\) defined on all of \\(X\\), its graph is
\\[
 G(T)=\\{(x,Tx):x\\in X\\}\\subseteq X\\times Y.
\\]
Give the product the norm \\(\\|(x,y)\\|=\\|x\\|+\\|y\\|\\). The graph is closed exactly when \\(x_n\\to x\\) and \\(Tx_n\\to y\\) imply \\(y=Tx\\).

**Theorem 5.8 (Closed graph theorem).** If \\(X,Y\\) are Banach and a linear map \\(T:X\\to Y\\) is defined everywhere, then \\(T\\) is bounded if and only if its graph is closed.

*Proof.* If \\(T\\) is bounded, \\(x_n\\to x\\) implies \\(Tx_n\\to Tx\\). If also \\(Tx_n\\to y\\), uniqueness of limits gives \\(y=Tx\\), so the graph is closed.

Conversely the product \\(X\\times Y\\) is Banach because a product-norm Cauchy sequence has two Cauchy coordinate sequences. A closed graph is therefore a Banach subspace. The first-coordinate projection \\(P:G(T)\\to X\\), \\(P(x,Tx)=x\\), is a bounded linear bijection. By the bounded inverse theorem its inverse \\(x\\mapsto(x,Tx)\\) is bounded. Thus \\(\\|x\\|+\\|Tx\\|\\le C\\|x\\|\\), which supplies a bound for \\(T\\). ∎

The domain being all of \\(X\\) is essential. Many differential operators are closed on a proper domain inside a Banach space and remain unbounded in the ambient norm. They belong to the later theory of unbounded operators; their closedness is not an exception to this theorem because its premise is absent.

**Worked example 5.9 (A graph proof without an explicit norm constant).** Let \\(T:C([0,1])\\to C([0,1])\\) be linear and defined on every continuous function. Suppose whenever \\(f_n\\to f\\) uniformly and \\(Tf_n\\to g\\) uniformly, a known defining identity for \\(T\\) passes to the limit and forces \\(g=Tf\\). Then the graph is closed, and Theorem 5.8 gives boundedness without first deriving its constant.

For a concrete identity take \\((Tf)(t)=\\int_0^t f(s)ds\\). Uniform convergence of \\(f_n\\) gives uniform convergence of their integrals to that same expression, forcing the claimed graph limit. The theorem supplies boundedness, while direct estimation gives the sharper explicit result \\(\\|T\\|=1\\). The constant is attained by the function one. A closed-graph argument proves existence of control; direct formulas can still reveal its optimal size.

**Worked example 5.10 (Closed derivative graph, missing Banach premise).** Let \\(D:C^1([0,1])\\to C([0,1])\\) send \\(f\\) to \\(f'\\), with the input carrying only the supremum norm. If \\(f_n\\to f\\) uniformly in that input space and \\(f_n'\\to g\\) uniformly, the fundamental theorem gives
\\[
 f(t)-f(0)=\\int_0^t g(s)ds.
\\]
Thus \\(f'=g\\), proving the graph closed. Yet \\(D\\) is unbounded since \\(f_n(t)=t^n\\) has uniform norm one and derivative norm \\(n\\).

The input with this norm is incomplete: smooth functions can converge uniformly to a nondifferentiable continuous function, for instance \\(\\sqrt{(t-1/2)^2+1/n}\\to|t-1/2|\\). If instead the domain carries \\(\\|f\\|_\\infty+\\|f'\\|_\\infty\\), it is Banach by the same integral-limit argument, and differentiation is bounded there. A changed norm changes the operator problem.

## Closed ranges and lower bounds

**Proposition 5.11 (Bound below and closed range).** If \\(X\\) is Banach and a bounded linear \\(T:X\\to Y\\) satisfies \\(\\|Tx\\|\\ge c\\|x\\|\\) for some \\(c>0\\), then it is injective and its range is closed in \\(Y\\). Conversely, if \\(X,Y\\) are Banach, \\(T\\) is injective and its range is closed, then such a \\(c\\) exists.

*Proof.* The lower bound makes a zero output force zero input. If \\(Tx_n\\to y\\), the bound makes \\((x_n)\\) Cauchy, hence convergent to some \\(x\\in X\\); continuity gives \\(Tx=y\\), proving closed range. Conversely a closed range in a Banach target is Banach. Regard \\(T\\) as a bounded bijection onto that range. Its bounded inverse satisfies \\(\\|x\\|\\le C\\|Tx\\|\\), giving \\(c=1/C\\). ∎

Injectivity by itself is not enough. The inclusion \\(\\ell^1\\hookrightarrow\\ell^2\\) is bounded and injective, but its range is not closed: finite truncations of \\((1/n)\\) lie in \\(\\ell^1\\) and converge in \\(\\ell^2\\) to a sequence outside it. The earlier block vectors also show no uniform lower bound can hold. Closed range is the additional topological condition that upgrades one-to-one algebra to a stable inverse on the image.

## The quotient isomorphism behind a surjection

A surjection can have many preimages for each target vector. Open mapping controls their distance to the kernel rather than selecting one distinguished representative.

**Proposition 5.12 (Quotient isomorphism).** If \\(T:X\\to Y\\) is a bounded surjection between Banach spaces, then the induced map
\\[
 \\widetilde T:X/\\ker T\\to Y,\\qquad \\widetilde T(x+\\ker T)=Tx,
\\]
is a bounded linear bijection with bounded inverse.

*Proof.* Boundedness makes the kernel closed, so the quotient is Banach. The formula is independent of the representative because adding a kernel vector leaves the output unchanged. It is injective by the definition of the kernel, and surjective by the original surjectivity. For every kernel vector \\(m\\), \\(\\|Tx\\|=\\|T(x-m)\\|\\le\\|T\\|\\|x-m\\|\\). Taking the infimum gives \\(\\|\\widetilde T(x+\\ker T)\\|\\le\\|T\\|\\|x+\\ker T\\|\\). Bounded inverse now applies to this bijection of Banach spaces. ∎

Consequently there is a constant \\(C\\) such that the infimum of norms of preimages of \\(y\\) is at most \\(C\\|y\\|\\). Choosing representatives close to that infimum gives actual preimages with a slightly larger bound. The statement does not produce a linear continuous choice of representatives. A bounded linear right inverse would require a bounded complementary subspace to the kernel, which is an additional property not established by open mapping alone.

In a finite-dimensional system a choice of free coordinates often supplies such a complement, so it is easy to overlook this distinction. In a general Banach space the quotient itself is the canonical object: all preimages differing by a kernel vector represent the same coset. Stability of the coset is exactly what the theorem proves, while a preferred representative needs further geometry or an explicitly constructed selection.

## When a surjection has a bounded linear choice of preimages

Open mapping bounds the norm of some preimage, but does not by itself choose preimages linearly. There is an exact additional condition. A bounded surjection T:X→Y between Banach spaces has a bounded linear right inverse S:Y→X if and only if its kernel is the range of a bounded projection on X. A projection means P²=P; its range and kernel are closed because they are kernels of I−P and P respectively.

If TS=I, define P=I−ST. Its square is I−2ST+STST=I−ST because TS=I. Also TP=0, so its range lies in ker T, and Pm=m for every m in that kernel. Thus its range is exactly ker T. This implication needs no selection theorem: the proposed right inverse constructs the complement explicitly.

Conversely suppose P is a bounded projection onto ker T. Let N=ker P. Every x splits as Px+(I−P)x, with the first term in ker T and the second in N. The restriction T:N→Y is injective because a vector in N∩ker T is fixed and annihilated by P, hence zero. It is onto because replacing any preimage x by (I−P)x leaves its output unchanged. Both N and Y are Banach, so bounded inverse gives a bounded map S:Y→N. Inclusion into X gives TS=I, proving the equivalence.

A finite-dimensional kernel always has such a projection. Choose a basis m1,…,mr of it. Its coordinate functionals are bounded by finite-dimensional norm equivalence. Hahn–Banach extends them to bounded functionals φi on X without changing their restrictions. Then Px=Σφi(x)mi is bounded and acts as the identity on the kernel, so P²=P and its range is precisely that kernel. Therefore bounded surjections with finite-dimensional kernels admit bounded linear right inverses.

In Hilbert spaces every closed subspace has an orthogonal projection, proved in chapter 7, so every bounded surjection between Hilbert spaces has a bounded minimum-norm linear right inverse. In a general Banach space the kernel complement remains a separate property. The quotient isomorphism does not assert it. This distinction identifies exactly which part of a familiar finite-dimensional linear solve can fail to generalize: stable output cosets still exist, while a bounded linear rule for selecting representatives needs extra geometry.

The right inverse is also not the same as a two-sided inverse. If the kernel is nonzero, ST=I−P differs from I, even though TS=I on every target vector. Keeping the two compositions and their spaces explicit prevents an incorrect claim that a surjection with a chosen preimage rule is automatically injective.

## Exercises

### Exercise 5.1 {#open-mapping-closed-graph-ex-1}

For a linear map, prove that an image unit ball containing a neighbourhood of zero implies openness.

<details><summary>Hint 1</summary>
Start with an image point of an arbitrary open set.
</details>
<details><summary>Hint 2</summary>
Translate and rescale an input ball contained in that set.
</details>
<details><summary>Solution</summary>
If \\(B_Y(0,\\eta)\\subseteq T(B_X(0,1))\\) and \\(Tx\\in T(O)\\), openness of \\(O\\) gives \\(B_X(x,r)\\subseteq O\\) for some \\(r>0\\). Linearity yields \\(B_Y(Tx,r\\eta)\\subseteq T(B_X(x,r))\\subseteq T(O)\\). Thus every point in the image has an open neighbourhood inside the image, which is the definition of openness.
</details>

### Exercise 5.2 {#open-mapping-closed-graph-ex-2}

Identify exactly where each completeness assumption enters the open mapping proof.

<details><summary>Hint 1</summary>
One step takes place in the target and uses closed sets covering it.
</details>
<details><summary>Hint 2</summary>
The other step sums corrections in the domain.
</details>
<details><summary>Solution</summary>
Target completeness allows Baire to find an interior ball in one closed image closure. Domain completeness allows the absolutely summable correction vectors to converge to an input vector. Boundedness of the operator then passes their images to the target limit. The two completeness uses establish different conclusions and cannot be silently merged into one invocation of Baire.
</details>

### Exercise 5.3 {#open-mapping-closed-graph-ex-3}

Why does \\(y\\in\\overline{T(B_X(0,1))}\\) alone not prove \\(y\\in T(B_X(0,1))\\)?

<details><summary>Hint 1</summary>
A closure records approximating points, not necessarily membership.
</details>
<details><summary>Hint 2</summary>
Convergence of images need not force convergence of arbitrary chosen preimages.
</details>
<details><summary>Solution</summary>
The closure statement supplies preimages whose images approach \\(y\\), but does not say the preimages form a Cauchy sequence or have a limit in the open ball. The image need not be closed. The correction construction instead arranges summable preimage increments with a strict total norm budget, producing a limit whose image is exactly \\(y\\). That additional argument is what removes the closure.
</details>

### Exercise 5.4 {#open-mapping-closed-graph-ex-4}

Show that the sum norm makes \\(X\\times Y\\) Banach when both factors are Banach.

<details><summary>Hint 1</summary>
A product-norm Cauchy sequence is Cauchy in each coordinate.
</details>
<details><summary>Hint 2</summary>
Add the two coordinate convergence estimates.
</details>
<details><summary>Solution</summary>
If \\((x_n,y_n)\\) is Cauchy for \\(\\|x\\|+\\|y\\|\\), each coordinate difference is bounded by the product difference. Completeness gives limits \\(x\\in X\\), \\(y\\in Y\\). Then \\(\\|(x_n,y_n)-(x,y)\\|=\\|x_n-x\\|+\\|y_n-y\\|\\to0\\). Thus the product is complete. Closed subspaces such as a closed graph inherit completeness.
</details>

### Exercise 5.5 {#open-mapping-closed-graph-ex-5}

Prove that a bounded linear map has closed graph without any completeness assumptions.

<details><summary>Hint 1</summary>
Suppose both input and output sequences have limits.
</details>
<details><summary>Hint 2</summary>
Continuity identifies the output limit uniquely.
</details>
<details><summary>Solution</summary>
If \\(x_n\\to x\\) and \\(Tx_n\\to y\\), boundedness gives \\(Tx_n\\to Tx\\). Uniqueness of metric limits implies \\(y=Tx\\). Therefore every convergent sequence in the graph has its limit in the graph, which is closed in the metric product. Completeness is required for the converse, not this direction.
</details>

### Exercise 5.6 {#open-mapping-closed-graph-ex-6}

On the vector set \\(\\ell^1\\), show that the two-norm is incomplete by a concrete Cauchy sequence.

<details><summary>Hint 1</summary>
Truncate the sequence \\((1/n)\\).
</details>
<details><summary>Hint 2</summary>
It is square summable but not absolutely summable.
</details>
<details><summary>Solution</summary>
Let \\(x^{(N)}\\) be \\((1,1/2,\\ldots,1/N,0,\\ldots)\\). Each belongs to \\(\\ell^1\\), and their two-norm differences are square-sum tails of \\(\\sum1/n^2\\), tending to zero. Their limit in \\(\\ell^2\\) is \\((1/n)\\), which is not in \\(\\ell^1\\). Any putative two-norm limit within \\(\\ell^1\\) would have the same coordinate limits, impossible. Thus this normed version of \\(\\ell^1\\) is incomplete.
</details>

### Exercise 5.7 {#open-mapping-closed-graph-ex-7}

Prove the derivative graph in Worked example 5.10 is closed using the integral identity.

<details><summary>Hint 1</summary>
Write the fundamental theorem for each member before taking limits.
</details>
<details><summary>Hint 2</summary>
Uniform convergence permits the continuous-function integrals to pass to the limit.
</details>
<details><summary>Solution</summary>
For every \\(n\\), \\(f_n(t)-f_n(0)=\\int_0^t f_n'(s)ds\\). Uniform convergence of both sequences makes the left side tend to \\(f(t)-f(0)\\) and the right side to \\(\\int_0^t g(s)ds\\), uniformly in \\(t\\). Since \\(g\\) is continuous, the fundamental theorem gives \\(f'=g\\). Thus any graph limit satisfies the defining relation. Unboundedness remains possible because the supremum-norm input space is incomplete.
</details>

### Exercise 5.8 {#open-mapping-closed-graph-ex-8}

Show that \\(C^1([0,1])\\) with \\(\\|f\\|_\\infty+\\|f'\\|_\\infty\\) is Banach.

<details><summary>Hint 1</summary>
A Cauchy sequence gives separate uniform limits for functions and derivatives.
</details>
<details><summary>Hint 2</summary>
Use the preceding exercise to identify the derivative of the function limit.
</details>
<details><summary>Solution</summary>
A Cauchy sequence in the sum norm has \\(f_n\\to f\\) and \\(f_n'\\to g\\) uniformly in the Banach space of continuous functions. Passing the integral identity to the limit gives \\(f'=g\\), so \\(f\\in C^1\\). Both uniform differences tend to zero, proving convergence in the sum norm. Differentiation is bounded by one for this norm, consistent with the closed graph theorem.
</details>

### Exercise 5.9 {#open-mapping-closed-graph-ex-9}

Prove that a linear operator bounded below has closed range when the domain is Banach, even if the target is incomplete.

<details><summary>Hint 1</summary>
Start from a sequence of image points converging to a point in the target.
</details>
<details><summary>Hint 2</summary>
The lower bound makes its preimages Cauchy.
</details>
<details><summary>Solution</summary>
If \\(Tx_n\\to y\\in Y\\) and \\(\\|Tx\\|\\ge c\\|x\\|\\), then \\(\\|x_n-x_m\\|\\le c^{-1}\\|Tx_n-Tx_m\\|\\to0\\). Domain completeness supplies \\(x_n\\to x\\), and continuity gives \\(Tx=y\\). Thus every target limit of range points lies in the range. The target need not be complete because the limit \\(y\\) is already assumed to exist there.
</details>

### Exercise 5.10 {#open-mapping-closed-graph-ex-10}

If a bounded operator between Banach spaces is injective with closed range, prove its inverse on that range is Lipschitz.

<details><summary>Hint 1</summary>
The closed range is itself Banach.
</details>
<details><summary>Hint 2</summary>
Apply bounded inverse to the map with its target restricted to that range.
</details>
<details><summary>Solution</summary>
The operator is a bounded linear bijection from the Banach domain onto its closed Banach range. Bounded inverse gives a constant \\(C\\) with \\(\\|T^{-1}y\\|\\le C\\|y\\|\\) for all range points. By linearity this gives \\(\\|T^{-1}y-T^{-1}z\\|\\le C\\|y-z\\|\\), the Lipschitz assertion. Surjectivity onto the original larger target is not required once the range is the explicitly stated target.
</details>

### Exercise 5.11 {#open-mapping-closed-graph-ex-11}

Let two Banach norms on the same vector space satisfy one continuous comparison. Prove the reverse comparison and explain why algebraic identity alone is insufficient.

<details><summary>Hint 1</summary>
Regard the identity as a map between two different normed spaces.
</details>
<details><summary>Hint 2</summary>
Use bounded inverse, noting both completeness assumptions.
</details>
<details><summary>Solution</summary>
If \\(\\|x\\|_b\\le C\\|x\\|_a\\), the identity from norm \\(a\\) to norm \\(b\\) is bounded and bijective. Since both spaces are Banach, its inverse is bounded, giving \\(\\|x\\|_a\\le C'\\|x\\|_b\\). Merely sharing the same vectors and linear operations does not supply either comparison; different norms on infinite-dimensional spaces can give genuinely different convergence. The theorem uses both the initial continuity and completeness.
</details>

### Exercise 5.12 {#open-mapping-closed-graph-ex-12}

Suppose a linear map \\(T:X\\to Y\\) between Banach spaces is everywhere defined and \\(\\phi\\circ T\\) is continuous for every \\(\\phi\\in Y^*\\). Prove \\(T\\) is bounded.

<details><summary>Hint 1</summary>
Prove the graph closed by applying all target functionals to a graph limit.
</details>
<details><summary>Hint 2</summary>
Hahn–Banach says continuous functionals separate target vectors.
</details>
<details><summary>Solution</summary>
If \\(x_n\\to x\\) and \\(Tx_n\\to y\\), continuity of \\(\\phi\\) and of \\(\\phi\\circ T\\) gives \\(\\phi(y)=\\lim\\phi(Tx_n)=\\phi(Tx)\\) for every \\(\\phi\\in Y^*\\). Functionals separate vectors, so \\(y=Tx\\). Thus the graph is closed, and Theorem 5.8 gives boundedness. The argument does not presume a uniform bound on all the scalar composites; closed graph supplies the needed global conclusion.
</details>

## Sources and scope

This is original exposition and supported exercise development. The local source lineage is the Quarto Banach-pillars chapter, with Baire proved once in the linked Real Analysis text. Conway and Brezis are syllabus benchmarks. The correction proof supplies actual preimages rather than identifying an image with its closure. Later unbounded-operator theory studies proper domains separately and does not inherit the everywhere-defined premise of the present closed graph theorem.

## Summary

Baire places a ball in the closure of a surjective image; summable corrections remove that closure using domain completeness. Open mapping then gives bounded inverses and, through the graph projection, the closed graph theorem. Complete norms, closed ranges and proper operator domains require careful distinctions. The next chapter changes the topology itself, using dual measurements to define weak convergence and compactness beyond norm-compact unit balls.
`;export{e as default};