var e=`---
parent_id: book-measure-and-integration
chapter_id: modes-of-convergence
title: "Modes of Convergence"
level: graduate
license: CC BY-SA 4.0
---

# Modes of Convergence

A limit theorem has two distinct responsibilities. It must describe how functions approach a candidate limit, and it must explain why the operation of interest respects that approach. Pointwise convergence answers a question at each fixed input. An integral asks about the combined contribution of many inputs. Uniform convergence controls every input together, while convergence in measure permits a small exceptional region whose location changes with the index. None of these descriptions should be substituted for another without a theorem.

This chapter makes those distinctions precise. We use the integration and convergence theorems of [chapter 6](measure-convergence-theorems.md) and the norms of [chapter 7](lp-and-banach-spaces.md). Unless a statement says otherwise, functions are measurable and finite almost everywhere on a measure space \\((X,\\Sigma,\\mu)\\). Representatives may be changed to zero on the measurable null sets where they are infinite. Scalar values may be real or complex. Finite total measure is stated wherever it is needed; sigma finiteness is a different hypothesis and cannot replace it silently.

## What is allowed to depend on the input?

Pointwise convergence means that for each input and each positive tolerance an index threshold exists. The threshold can depend on both the input and the tolerance. Almost everywhere convergence permits this statement to fail on one measurable null set. That null set is chosen for the whole sequence, rather than anew for each index.

Uniform convergence means that one threshold works at every input. Essential uniform convergence means that this uniform assertion holds outside one null set. Equivalently the essential supremum of the difference tends to zero. Countable unions of null sets show that the latter description agrees with convergence in the norm of \\(L^\\infty\\), even though a separate exceptional set may initially arise for each index or each rational tolerance.

**Definition 8.1 (Convergence in measure).** We write \\(f_n\\to f\\) in measure when, for every \\(a>0\\),
\\[
 \\mu\\{x:|f_n(x)-f(x)|>a\\}\\longrightarrow0.
\\]
The measure here is the measure on the entire space. On an infinite space this is stronger than asking for the same property after restriction to every finite-measure set. We will call that second property local convergence in measure. The distinction concerns the domain being inspected, rather than a different interpretation of the inequality.

For \\(1\\le p<\\infty\\), convergence in \\(L^p\\) means that the integral of \\(|f_n-f|^p\\) tends to zero. It controls an averaged magnitude, including the heights of exceptional peaks. Convergence in measure controls the size of regions above each fixed height, but places no direct bound on the height attained there. This explains why a sequence may converge in measure while all its integrals remain equal to one.

**Proposition 8.2 (Basic implications and uniqueness).** Essential uniform convergence implies convergence in measure on every measure space. Convergence in \\(L^p\\), for finite \\(p\\), also implies convergence in measure. A limit in measure is unique up to equality almost everywhere.

*Proof.* In the first assertion the region exceeding a fixed tolerance is eventually contained in a null set. In the second, Markov's inequality gives
\\[
 \\mu\\{|f_n-f|>a\\}\\le a^{-p}\\|f_n-f\\|_p^p.
\\]
For uniqueness, if both \\(f\\) and \\(g\\) are limits, the triangle inequality gives
\\[
 \\{|f-g|>a\\}\\subseteq
 \\{|f-f_n|>a/2\\}\\cup\\{|f_n-g|>a/2\\}.
\\]
The measure of the left side is therefore zero. Take the union over positive reciprocal integers to obtain \\(f=g\\) almost everywhere. No subtraction of two infinite measures enters this argument. ∎

On a finite space, essential uniform convergence also implies convergence in every finite \\(L^p\\), provided the differences are measured in those norms: their integrals are bounded by the essential supremum to the power \\(p\\), times \\(\\mu(X)\\). This estimate explains exactly why the analogous assertion on an infinite space needs another assumption.

## Egorov: one small set controls all the slow inputs

**Theorem 8.3 (Egorov).** Suppose \\(\\mu(X)<\\infty\\) and \\(f_n\\to f\\) almost everywhere. For every \\(\\delta>0\\), there is a measurable \\(E\\) with \\(\\mu(E)<\\delta\\) such that convergence is uniform on \\(X\\setminus E\\).

*Proof.* Include the null set of failure in every exceptional set below. For positive integers \\(N,k\\), put
\\[
 A_{N,k}=\\bigcup_{n\\ge N}\\{|f_n-f|>1/k\\}.
\\]
For fixed \\(k\\), these sets decrease with \\(N\\). Their intersection is null, because at each point of convergence the error is eventually at most \\(1/k\\). Continuity of measure from above applies: the first set has finite measure. Thus \\(\\mu(A_{N,k})\\to0\\). Choose \\(N_k\\) with \\(\\mu(A_{N_k,k})<\\delta 2^{-k-1}\\). The union of these sets, together with the original null set, has measure less than \\(\\delta\\). Outside it, for each \\(k\\) all indices at least \\(N_k\\) have error at most \\(1/k\\). Given any tolerance, choose \\(k\\) first. Its threshold then works simultaneously at every remaining input, which is uniform convergence. ∎

The conclusion is called **almost uniform convergence**: one may discard a set of arbitrarily small measure, and obtain uniform convergence on its complement. The discarded set may depend on the allowed measure loss. It usually cannot be replaced by one null set. Egorov moves the order of quantifiers by paying a small positive measure budget.

Almost uniform convergence implies convergence in measure on any space. Given a desired bound on the measure of an error region, discard a still smaller exceptional set and use uniform convergence outside it. It also implies almost everywhere convergence. To see this carefully, choose exceptional sets \\(E_j\\) with measures less than \\(2^{-j}\\). The set where infinitely many of them occur has measure zero, since
\\[
 \\mu\\left(\\bigcup_{j\\ge m}E_j\\right)\\le\\sum_{j\\ge m}2^{-j}\\longrightarrow0.
\\]
At a point outside this null set at least one of the uniform convergence assertions applies. Consequently Egorov proves that almost everywhere and almost uniform convergence are equivalent on a finite measure space. It does not identify either with essential uniform convergence.

**Worked example 8.4 (The endpoint layer).** On \\([0,1]\\), take \\(f_n(x)=x^n\\). The almost everywhere limit is zero, while at the endpoint the value stays one. For any \\(\\delta\\in(0,1)\\), discard \\((1-\\delta,1]\\). The remaining supremum is \\((1-\\delta)^n\\), so convergence there is uniform. The essential supremum on the full interval remains one: for every \\(c<1\\), an interval of positive length has \\(x^n>c\\). Thus this example distinguishes almost uniform from essential uniform convergence without relying on a single isolated endpoint.

The finite-measure hypothesis in Egorov is substantive. On the real line, the functions \\(1_{[n,n+1)}\\) converge pointwise to zero. If an exceptional set has measure less than one, it cannot contain any entire interval of this sequence up to a null set. Each remaining interval therefore contains inputs where the error is one, and the convergence cannot be uniform outside that exceptional set. The continuity-from-above step fails because the union of all sufficiently late intervals has infinite measure.

## Extracting an almost everywhere subsequence

**Theorem 8.5 (Subsequence principle).** If \\(f_n\\to f\\) in measure, some subsequence converges almost everywhere. More precisely, every subsequence has a further subsequence converging almost everywhere to \\(f\\). If the space has finite measure, the converse criterion also holds: the latter property implies convergence in measure.

*Proof.* Choose increasing indices \\(n_k\\) so that
\\[
 \\mu\\{|f_{n_k}-f|>2^{-k}\\}<2^{-k}.
\\]
The union bound used above shows that almost every point belongs to only finitely many of these error regions. At such a point the errors are eventually at most \\(2^{-k}\\). This proves the first assertion on every measure space. Apply the same construction to any subsequence to obtain the second.

For the converse on a finite space, suppose convergence in measure fails. Some positive \\(a,b\\) and subsequence have error regions above \\(a\\) of measure at least \\(b\\) at every index. A further almost everywhere convergent subsequence would converge in measure by Egorov, contradicting that lower bound. ∎

The summability argument is the first Borel–Cantelli argument, requiring no independence. It estimates the set of infinitely many failures by the tails of a convergent sum. Convergence in measure alone does not make those tails summable for the original sequence. Selecting indices is the essential operation, not a cosmetic renaming of every term.

**Worked example 8.6 (The typewriter sequence).** For each \\(k\\ge0\\), list the indicators of the half-open dyadic intervals
\\[
 [j2^{-k},(j+1)2^{-k}),\\qquad 0\\le j<2^k,
\\]
and concatenate the lists in increasing order of \\(k\\). On \\([0,1)\\), every point belongs to exactly one interval in each list. It therefore receives infinitely many values one and infinitely many values zero. There is no pointwise limit anywhere on this domain. Nevertheless the measure of every support in the \\(k\\)-th list is \\(2^{-k}\\). The sequence converges to zero in measure and in every finite \\(L^p\\), its norm being \\(2^{-k/p}\\). A subsequence consisting of the first interval in each list converges almost everywhere to zero; its only exceptional input is zero. The subsequence principle makes precisely this weaker promise.

The principle is useful for transferring theorems whose natural hypothesis is almost everywhere convergence. For example, if \\(f_n\\to f\\) in measure and \\(|f_n|\\le g\\) for one \\(g\\in L^p\\), then \\(f\\in L^p\\) and \\(f_n\\to f\\) in \\(L^p\\). Every subsequence has a further almost everywhere convergent subsequence. Along it \\(|f|\\le g\\), and dominated convergence applied to \\(|f_n-f|^p\\le2^p g^p\\) proves norm convergence. If the original norms did not tend to zero, a subsequence bounded away from zero would contradict this conclusion. A domination assertion holding separately almost everywhere for each index is sufficient, because the exceptional sets have a null countable union.

## Vitali with every estimate visible

The preceding domination criterion can be weakened on finite spaces. Recall that a family \\(\\mathcal F\\subset L^1\\) is uniformly integrable when
\\[
 \\lim_{M\\to\\infty}\\sup_{h\\in\\mathcal F}
 \\int_{\\{|h|>M\\}}|h|=0.
\\]
As proved in chapter 6, this implies a uniform bound on the integrals and uniform absolute continuity: integrals over sets of sufficiently small measure are small uniformly for the whole family.

**Theorem 8.7 (Vitali, finite measure).** If \\(\\mu(X)<\\infty\\), \\(f_n\\to f\\) in measure and \\(\\{f_n\\}\\) is uniformly integrable, then \\(f\\in L^1\\) and \\(\\|f_n-f\\|_1\\to0\\). Conversely, convergence in \\(L^1\\) implies uniform integrability of the sequence together with its limit.

*Proof.* Select an almost everywhere convergent subsequence. Fatou and the uniform integral bound show that \\(f\\) is integrable. For any measurable \\(E\\), Fatou along this subsequence gives
\\[
 \\int_E|f|\\le\\liminf_k\\int_E|f_{n_k}|.
\\]
Thus the integrals of the enlarged family, including \\(f\\), are uniformly absolutely continuous. Fix \\(\\varepsilon>0\\), and choose \\(\\delta>0\\) so that both \\(\\int_E|f_n|\\) and \\(\\int_E|f|\\) are below \\(\\varepsilon\\) whenever \\(\\mu(E)<\\delta\\), uniformly in \\(n\\). For any \\(a>0\\), the set \\(E_n=\\{|f_n-f|>a\\}\\) eventually has measure below \\(\\delta\\). Hence
\\[
 \\int|f_n-f|\\le a\\mu(X)+2\\varepsilon.
\\]
Choose \\(a\\) so that the first term is at most \\(\\varepsilon\\), unless the total measure is zero, in which case the conclusion is immediate. This proves convergence without an unbounded-height truncation left implicit.

Conversely, if \\(\\|f_n-f\\|_1\\to0\\), then for large \\(n\\),
\\(\\int_E|f_n|\\le\\|f_n-f\\|_1+\\int_E|f|\\).
Absolute continuity of the integral of \\(f\\) handles all these large indices together. The finitely many remaining integrable functions are handled by taking the minimum of their individual measure thresholds. The family also has bounded integrals, by the triangle inequality. The equivalence between that bound plus uniform absolute continuity and the displayed high-value tail condition was proved in chapter 6, and gives uniform integrability. ∎

**Worked example 8.8 (A concentrating spike).** Let \\(f_n=n1_{(0,1/n)}\\) on \\([0,1]\\). The sequence tends to zero almost everywhere and in measure. Its integral is one at every index, so it fails to converge in \\(L^1\\). For any fixed height \\(M\\), choose \\(n>M\\); the high-value tail integral is exactly one. This identifies the failed Vitali hypothesis. More generally \\(\\|f_n\\|_p=n^{1-1/p}\\), while the essential supremum equals \\(n\\). The support shrinking to zero does not determine any of these norms without its amplitude.

## A complete metric on measurable functions

Suppose for this section that \\(\\mu(X)<\\infty\\). On finite-valued measurable functions modulo equality almost everywhere, define
\\[
 d(f,g)=\\int_X\\min(1,|f-g|)\\,d\\mu.
\\]
This is a metric. Nonnegativity and symmetry are immediate. Zero distance means that the nonnegative integrand vanishes almost everywhere. The triangle inequality follows from the scalar inequality \\(\\min(1,a+b)\\le\\min(1,a)+\\min(1,b)\\). In particular, truncating the difference before integrating retains enough information to distinguish equivalence classes, while avoiding integrability assumptions on the functions themselves.

For \\(0<a\\le1\\),
\\[
 a\\mu\\{|f-g|>a\\}\\le d(f,g)
 \\le a\\mu(X)+\\mu\\{|f-g|>a\\}.
\\]
The lower bound follows by integrating on the indicated error region; the upper bound splits the domain into that region and its complement. These estimates show that metric convergence is exactly convergence in measure. The metric is not a norm metric: truncation makes it bounded, and multiplying a function by a scalar does not scale distance linearly.

**Theorem 8.9 (Completeness of convergence in measure).** The metric space just defined is complete.

*Proof.* Let \\((f_n)\\) be metric Cauchy. Select a subsequence with
\\(d(f_{n_{k+1}},f_{n_k})<2^{-2k}\\).
The lower bound gives
\\[
 \\mu\\{|f_{n_{k+1}}-f_{n_k}|>2^{-k}\\}<2^{-k}.
\\]
Almost every point lies in only finitely many of these sets. There, all sufficiently late successive differences are bounded by the summable numbers \\(2^{-k}\\). The subsequence is pointwise Cauchy and has a finite scalar limit. Define that limit as zero on the measurable null exceptional set; the resulting \\(f\\) is measurable. Bounded convergence applied to \\(\\min(1,|f_{n_k}-f|)\\) shows that this subsequence converges to \\(f\\) in the metric. For a given positive tolerance, choose a Cauchy tail of the original sequence and then a member of the convergent subsequence inside that tail with distance to \\(f\\) small. The triangle inequality proves convergence of the entire sequence. ∎

On a sigma-finite space choose an increasing measurable exhaustion \\(X_j\\uparrow X\\) with every \\(\\mu(X_j)<\\infty\\). Then
\\[
 D(f,g)=\\sum_{j=1}^\\infty
 \\frac{2^{-j}}{1+\\mu(X_j)}
 \\int_{X_j}\\min(1,|f-g|)\\,d\\mu
\\]
is a complete metric for local convergence in measure. Convergence in this metric implies convergence on each exhaustion set by retaining its positive summand. Conversely, convergence on all these sets controls finitely many summands, while the remaining tail is bounded by the corresponding geometric tail. Completeness follows by taking the complete limit on each \\(X_j\\). Uniqueness on overlaps makes these limits agree almost everywhere; remove the countable union of disagreement sets and paste them. The same finite-summand and tail argument gives convergence in \\(D\\).

The topology does not depend on the chosen exhaustion. Indeed for a finite-measure measurable \\(E\\), the measures of \\(E\\setminus X_j\\) tend to zero. An error region inside \\(E\\) is bounded in measure by its part inside \\(X_j\\) plus that tail. Thus convergence on the exhaustion implies convergence on every finite-measure set. The travelling intervals used above converge locally in measure on the real line but fail to converge globally in measure, since each full error region has measure one.

## Lusin: measurable functions become continuous on large compact sets

Egorov concerns convergence of a sequence. Euclidean regularity lets it also explain the apparent distance between measurable and continuous functions.

**Theorem 8.10 (Lusin on a finite-measure set).** If \\(E\\subset\\mathbb R^d\\) is Lebesgue measurable with finite measure and \\(f:E\\to\\mathbb C\\) is measurable and finite almost everywhere, then for every \\(\\varepsilon>0\\) there is a compact \\(K\\subset E\\) with \\(m(E\\setminus K)<\\varepsilon\\) such that \\(f|_K\\) is continuous in the relative topology.

*Proof.* Modify \\(f\\) on its measurable null set of infinite values. Use the finite-valued simple approximations from chapter 4 to choose \\(s_n\\to f\\) pointwise. Egorov gives a measurable \\(A\\subset E\\) with \\(m(E\\setminus A)<\\varepsilon/4\\) where the convergence is uniform. Inner regularity gives a compact \\(K_0\\subset A\\) with \\(m(A\\setminus K_0)<\\varepsilon/4\\).

For each \\(n\\), write the simple function using its finitely many disjoint level sets inside \\(E\\). Inner regularity supplies a compact subset of each level set so that the union \\(H_n\\) of these compact subsets satisfies \\(m(E\\setminus H_n)<\\varepsilon 2^{-n-2}\\). On \\(H_n\\), the restriction of \\(s_n\\) is continuous: finitely many disjoint compact sets have positive pairwise distances when both sets are nonempty, so each constant piece is relatively open as well as relatively closed. Set
\\[
 K=K_0\\cap\\bigcap_{n\\ge1}H_n.
\\]
This is a closed subset of the compact set \\(K_0\\), hence compact. The union bound gives the required loss of measure, strictly below \\(\\varepsilon\\). Every \\(s_n|_K\\) is continuous, and their convergence is uniform because \\(K\\subset A\\). Their limit is continuous. Finally remove the original null exceptional set in the construction of \\(A\\) if the original function, rather than the modified representative, is required on \\(K\\). ∎

Lusin does not say that a measurable function is continuous at almost every point of its original domain. The indicator of the rationals is discontinuous everywhere on the real line; after deleting the rational inputs from a large compact set it is identically zero there. Restricting the domain changes which nearby inputs are available. Nor does the theorem say that one compact set of full measure suffices. The compact set may depend on the permitted measure loss.

For unbounded finite-measure sets the same proof works, since inner regularity already includes a compact truncation. On the whole real line, a compact set cannot have a complement of finite arbitrarily small measure. One instead applies Lusin on bounded regions. This is the same finite-versus-local distinction that appeared in the metric construction.

## Exercises with hints and complete solutions

### MEASURE-MODES-E001 — Essential uniform versus almost uniform

For \\(f_n(x)=x^n\\) on \\([0,1]\\), prove almost uniform convergence to zero and show that no change on a null set makes convergence uniform.

**Hint 1.** Remove a fixed short interval next to one.

**Hint 2.** For each index, the region where \\(x^n>1/2\\) has positive length.

**Solution.** Outside \\((1-\\delta,1]\\), the supremum is \\((1-\\delta)^n\\to0\\), proving almost uniform convergence. For each \\(n\\), the interval \\((2^{-1/n},1)\\) has positive length and cannot be contained in a null set. The supremum outside any fixed null set is therefore at least \\(1/2\\) for every index. Uniform convergence to zero there is impossible.

### MEASURE-MODES-E002 — A summable error certificate

Suppose \\(a_n\\downarrow0\\) and \\(\\sum_n\\mu\\{|f_n-f|>a_n\\}<\\infty\\). Prove almost everywhere convergence without assuming finite total measure.

**Hint 1.** Bound the measure of the union of all failure sets after index \\(N\\).

**Hint 2.** An input with only finitely many failures eventually has error at most \\(a_n\\).

**Solution.** If \\(E_n=\\{|f_n-f|>a_n\\}\\), then the set of infinitely many failures is contained in every \\(\\bigcup_{n\\ge N}E_n\\), whose measure is at most the tail of the convergent series. Its measure is zero. At every other input, the inequality \\(|f_n-f|\\le a_n\\) holds eventually, so the error tends to zero. No finite-measure continuity argument is needed.

### MEASURE-MODES-E003 — Subsequence indices for an \\(L^p\\) limit

If \\(\\|f_n-f\\|_p\\to0\\), construct a subsequence with \\(\\sum_k\\mu\\{|f_{n_k}-f|>2^{-k}\\}<\\infty\\).

**Hint 1.** Apply Markov with tolerance \\(2^{-k}\\).

**Hint 2.** Choose the norm to the power \\(p\\) below \\(2^{-(p+1)k}\\).

**Solution.** Choose increasing indices satisfying \\(\\|f_{n_k}-f\\|_p^p<2^{-(p+1)k}\\), possible by norm convergence. Markov gives measures below \\(2^{kp}2^{-(p+1)k}=2^{-k}\\). The resulting series converges, and the preceding exercise gives almost everywhere convergence of this subsequence.

### MEASURE-MODES-E004 — Failure on infinite measure

On \\(\\mathbb R\\), compare \\(f_n=1_{[n,n+1)}\\) and \\(g_n=n^{-1}1_{[0,n]}\\) in pointwise, global-in-measure, essential-uniform and \\(L^1\\) convergence to zero.

**Hint 1.** For travelling intervals, test a tolerance below one.

**Hint 2.** For \\(g_n\\), compare its height and its support length separately.

**Solution.** The travelling intervals tend pointwise to zero, but their error region above \\(1/2\\) always has measure one, their essential supremum is one, and their \\(L^1\\) norm is one. For \\(g_n\\), the height \\(1/n\\) tends to zero, so convergence is essential uniform and global in measure, and it is pointwise too. Its \\(L^1\\) norm remains one. Thus finite measure is needed to deduce \\(L^1\\) convergence from uniform control alone.

### MEASURE-MODES-E005 — Addition and multiplication

If \\(f_n\\to f\\) and \\(g_n\\to g\\) in measure on a finite measure space, prove convergence in measure of their sums and products.

**Hint 1.** For addition use two half-tolerance error regions.

**Hint 2.** For multiplication first discard the sets where \\(|f|\\) or \\(|g|\\) is large, then require both approximation errors to be small.

**Solution.** Addition follows from the triangle inequality and a union bound. For products choose \\(M\\) so that \\(\\mu(\\{|f|>M\\}\\cup\\{|g|>M\\})\\) is arbitrarily small, using finiteness of the functions almost everywhere and continuity from above on the finite space. Outside these sets, if both errors are at most \\(\\delta\\le1\\), then \\(|f_ng_n-fg|\\le |f_n-f||g_n|+|f||g_n-g|\\le\\delta(M+1)+M\\delta\\). Choose \\(\\delta\\) to make this less than the target tolerance. The remaining error set is bounded by the discarded tails and the two approximation error regions, whose measures tend to zero. Let the tail budget tend to zero.

### MEASURE-MODES-E006 — Why multiplication needs care globally

On \\(\\mathbb R\\), let \\(f_n=f=x\\) and \\(g_n=1/n\\), \\(g=0\\). Show that both sequences converge globally in measure to their stated limits, but the products do not.

**Hint 1.** The first sequence has identically zero error.

**Hint 2.** Compute the set where \\(|x|/n>a\\).

**Solution.** The first difference vanishes and the second is uniformly \\(1/n\\), so their fixed-tolerance error regions are eventually empty. The product difference is \\(|x|/n\\); for every \\(a>0\\), its region above \\(a\\) is \\(\\{|x|>na\\}\\), of infinite measure for every index. Hence global convergence in measure fails, although local convergence in measure holds on each finite-measure region by bounded convergence of its error indicators.

### MEASURE-MODES-E007 — The metric estimates

Prove the two bounds for \\(d\\) and use them to prove equivalence of metric convergence and convergence in measure, including tolerances greater than one.

**Hint 1.** Split the integral into the region above \\(a\\) and its complement.

**Hint 2.** First choose \\(a\\) small in the upper bound, then take the sequence index large.

**Solution.** On the error region the truncated difference is at least \\(a\\) for \\(a\\le1\\), giving the lower bound. It is at most one there and at most \\(a\\) elsewhere, giving the upper bound. Metric convergence makes every error measure with tolerance at most one tend to zero; a larger-tolerance region is contained in the tolerance-one-half region. Conversely, for a desired metric tolerance choose \\(a\\) with \\(a\\mu(X)\\) smaller than half that tolerance, and use convergence in measure for the remaining term. If \\(\\mu(X)=0\\), all distances already vanish on the single equivalence class.

### MEASURE-MODES-E008 — Typewriter norms

For the typewriter sequence, find its finite \\(L^p\\) and \\(L^\\infty\\) norms, and decide whether the full sequence has an almost everywhere convergent subsequence with a nonzero limit.

**Hint 1.** The indicator in the \\(k\\)-th list has support measure \\(2^{-k}\\).

**Hint 2.** Any almost everywhere limit on a finite space is also a limit in measure.

**Solution.** The finite norm is \\(2^{-k/p}\\); the essential supremum is one. The sequence tends in measure to zero, as does every subsequence. If a subsequence converges almost everywhere to some \\(h\\), Egorov makes it converge in measure to \\(h\\), and uniqueness gives \\(h=0\\) almost everywhere. Thus no nonzero almost everywhere limit is possible even though the original sequence fails pointwise convergence everywhere.

### MEASURE-MODES-E009 — A practical uniform-integrability condition

On a finite measure space, suppose \\(\\sup_n\\|f_n\\|_q<\\infty\\) for some \\(q>1\\). Prove uniform integrability and deduce \\(L^1\\) convergence whenever \\(f_n\\to f\\) in measure.

**Hint 1.** On \\(\\{|f_n|>M\\}\\), compare \\(|f_n|\\) with \\(M^{1-q}|f_n|^q\\).

**Hint 2.** Apply the finite-measure Vitali theorem after obtaining a uniform tail bound.

**Solution.** If the norm bound is \\(C\\), every tail integral is at most \\(M^{1-q}C^q\\), which tends to zero independently of the index. This is uniform integrability. Vitali then proves \\(f\\in L^1\\) and convergence in \\(L^1\\). The exponent inequality \\(q>1\\) is necessary for this argument: an \\(L^1\\) bound alone permits the concentrating spikes of example 8.8.

### MEASURE-MODES-E010 — Domination in measure

Suppose \\(f_n\\to f\\) in measure and \\(|f_n|\\le g\\) almost everywhere for one \\(g\\in L^p\\), with finite \\(p\\). Give the full subsequence contradiction proving norm convergence on an arbitrary measure space.

**Hint 1.** First select an almost everywhere convergent subsequence to establish \\(|f|\\le g\\).

**Hint 2.** If norm convergence fails, select a subsequence whose errors are bounded below by a fixed positive number.

**Solution.** The first selected subsequence gives the asserted bound on the limit, hence \\(f\\in L^p\\). If convergence in norm failed, a subsequence would have norms of its differences from \\(f\\) at least some \\(c>0\\). Extract a further almost everywhere convergent subsequence from it. Its differences to the power \\(p\\) are bounded by the integrable function \\(2^p g^p\\); DCT forces the norms to zero, contradicting the lower bound. Therefore the entire sequence converges in norm. Finiteness of total measure is not used because the common envelope supplies integrable control.

### MEASURE-MODES-E011 — A local metric has no preferred exhaustion

Suppose \\(X_j\\uparrow X\\), with finite measures, and \\(f_n\\to f\\) in measure on every \\(X_j\\). Prove convergence in measure on every finite-measure measurable \\(E\\).

**Hint 1.** Split the error region in \\(E\\) according to membership in \\(X_j\\).

**Hint 2.** Continuity from above applies to \\(E\\setminus X_j\\), since \\(\\mu(E)<\\infty\\).

**Solution.** For fixed tolerance \\(a\\), the error measure inside \\(E\\) is at most \\(\\mu(E\\setminus X_j)+\\mu(X_j\\cap\\{|f_n-f|>a\\})\\). Given a desired bound, choose \\(j\\) so that the first term is small and then \\(n\\) so that the second is small. This proves the assertion and shows that another finite-measure exhaustion gives the same local convergence notion.

### MEASURE-MODES-E012 — What Lusin says about a discontinuous function

Let \\(f=1_{\\mathbb Q}\\) on \\([0,1]\\). Explain its discontinuity at every input, then construct a compact set of measure greater than \\(1-\\varepsilon\\) on which its restriction is continuous.

**Hint 1.** Rational and irrational inputs are both dense.

**Hint 2.** Cover the countable set of rational inputs by an open set of total length less than \\(\\varepsilon\\).

**Solution.** Every relative neighbourhood of every input contains both values zero and one, so continuity fails everywhere. Enumerate the rationals in the interval and place open intervals around them with total length below \\(\\varepsilon\\). The complement of their union inside \\([0,1]\\) is compact, has measure greater than \\(1-\\varepsilon\\), and contains no rational input. The restricted function is constantly zero, hence continuous. This does not repair continuity on the original domain; it changes the domain of the continuity assertion.

## Summary

Convergence in measure controls the sizes of fixed-height error regions and has an almost everywhere convergent subsequence on any measure space. On a finite space, Egorov turns almost everywhere convergence into uniform convergence outside arbitrarily small sets. Vitali combines convergence in measure with uniform integrability to obtain integral convergence, and its converse identifies precisely the no-concentration property carried by an \\(L^1\\) limit. The truncated integral metric is complete on measurable functions modulo null sets; on sigma-finite spaces its localized version describes local convergence in measure. Finally, Lusin combines simple approximation, Egorov and Euclidean regularity to obtain continuity on large compact subsets. In every application, the location, height and total measure of exceptional regions must be accounted for separately.
`;export{e as default};