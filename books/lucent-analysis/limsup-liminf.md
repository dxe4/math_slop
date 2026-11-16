# Tail limits and recurring behavior

Ordinary limits can fail because a sequence keeps visiting two scales. A graph of the first hundred terms cannot decide whether a later spike returns. Tail bounds ask what values remain possible after *any* cutoff.

For a bounded real sequence \((a_n)\), put \(u_N=\sup\{a_n:n\ge N\}\) and \(\ell_N=\inf\{a_n:n\ge N\}\). As \(N\) grows, the tail shrinks, so \(u_N\) decreases and \(\ell_N\) increases. Both remain bounded. Monotone convergence defines

\[
\limsup_{n\to\infty}a_n=\lim_{N\to\infty}u_N=\inf_Nu_N,
\qquad
\liminf_{n\to\infty}a_n=\lim_{N\to\infty}\ell_N=\sup_N\ell_N.
\]

These levels need not be attained. For \(a_n=1+1/n\), \(\limsup a_n=1\), but no term equals 1.

## An exact test: eventual ceilings and recurring visits

The tail definition has a useful quantified form. For a bounded sequence and a real number \(U\), the following conditions together are equivalent to \(U=\limsup a_n\):

1. For every \(\varepsilon>0\), all sufficiently late terms satisfy \(a_n<U+\varepsilon\).
2. For every \(\varepsilon>0\) and every cutoff \(N\), some \(n\ge N\) satisfies \(a_n>U-\varepsilon\).

The first condition says no values stay appreciably **above** \(U\) forever. The second says values return arbitrarily late **near** \(U\) from below. If \(u_N=\sup_{n\ge N}a_n\to U\), the first follows from \(u_N<U+\varepsilon\) eventually. For the second, \(u_N\ge U\) and supremum approximation supplies a term above \(u_N-\varepsilon\ge U-\varepsilon\). Conversely, the first makes \(u_N\le U+\varepsilon\) for all late \(N\); the second makes \(u_N\ge U-\varepsilon\) for every \(N\). Thus \(u_N\to U\).

The symmetric characterization of \(L=\liminf a_n\) is: eventually \(a_n>L-\varepsilon\), and after every cutoff some term lies below \(L+\varepsilon\). These tests are often easier to apply than finding an exact formula for every tail supremum.

**Worked tail calculation.** Let \(a_n=(-1)^n+1/n\), and let \(e(N)\) be the smallest even integer at least \(N\). Among even terms in the tail, the first is the largest; every odd term is below them. Hence \(u_N=1+1/e(N)\). The odd terms are \(-1+1/n\), which approach \(-1\) from above; consequently \(\ell_N=-1\) for every \(N\), even though no term equals \(-1\). Therefore \(\limsup a_n=1\) and \(\liminf a_n=-1\). This example shows two different kinds of nonattainment: the upper tail bounds are attained at finite indices, while the lower tail bounds are not.

## Largest and smallest subsequential limits

**Theorem 31.1.** For a bounded sequence, the limsup is its greatest subsequential limit and the liminf its least. The sequence converges to \(L\) exactly when both equal \(L\).

**Proof for limsup.** Let \(U=\lim u_N\). If \(a_{n_j}\to L\), then for any fixed \(N\), eventually \(n_j\ge N\), so \(a_{n_j}\le u_N\). Passing to the limit gives \(L\le u_N\) for every \(N\), hence \(L\le U\).

To show \(U\) is itself a subsequential limit, choose indices inductively. Once \(n_{j-1}\) is chosen, let \(N_j=\max(j,n_{j-1}+1)\). By supremum approximation, select \(n_j\ge N_j\) with \(a_{n_j}>u_{N_j}-1/j\). Also \(a_{n_j}\le u_{N_j}\). Since \(N_j\to\infty\) and \(u_{N_j}\to U\), squeezing gives \(a_{n_j}\to U\). The same argument with infima gives the liminf claim. Finally, \(\ell_N\le a_n\le u_N\) for every \(n\ge N\); if both tail limits equal \(L\), these inequalities give \(a_n\to L\). The reverse direction follows from the definition of convergence. ∎

The increasing-index construction matters. Picking an arbitrary nearly maximal term separately for each tail without requiring increasing indices might fail to produce a subsequence.

### All subsequential limits form a closed set

Let \(K\) be the set of subsequential limits of a bounded sequence. Bolzano–Weierstrass says \(K\ne\varnothing\), and every point of \(K\) lies within the original sequence's bound. The set is also **closed**, though this needs another argument. Suppose \(L_j\in K\) and \(L_j\to L\). Since \(L_j\) is a subsequential limit, we can choose an index \(n_j>n_{j-1}\) for which \(|a_{n_j}-L_j|<1/j\). Then

\[
|a_{n_j}-L|\le |a_{n_j}-L_j|+|L_j-L|\longrightarrow0.
\]

Thus \(L\in K\). The index condition is again essential: we have produced one genuine subsequence of the original sequence, not just one close term for each \(j\). In \(\mathbb R\), \(K\) is therefore nonempty, closed, and bounded, hence compact. The earlier theorem identifies its maximum and minimum as limsup and liminf, but those two numbers rarely describe all of \(K\).

For \((-1)^n\), the cluster set is \(\{-1,1\}\). To build a bounded sequence whose cluster set is the whole interval \([0,1]\), list the grids

\[
0,1;\quad 0,\tfrac12,1;\quad 0,\tfrac13,\tfrac23,1;\quad\ldots
\]

one stage after another. Every term lies in \([0,1]\), so no subsequential limit can leave it. For any \(x\in[0,1]\), choose at stage \(m\) a grid point within \(1/m\) of \(x\); the chosen indices increase with the stages, giving a subsequence converging to \(x\). Both examples have liminf 0 and limsup 1 after shifting \((-1)^n\) to \((1+(-1)^n)/2\), yet one has only two cluster values while the other has every value between them.

## Three different patterns

For \(a_n=(-1)^n+1/n\), the even and odd subsequences approach 1 and −1. Thus \(\limsup a_n=1\) and \(\liminf a_n=-1\). For \(b_n=1\) at perfect-square indices and \(b_n=0\) otherwise, the spikes become sparse, yet 0 and 1 both occur arbitrarily late. Its limsup is 1 and liminf is 0. Frequency does not enter the definition. For \(c_n=(-1)^n/n\), both tail levels approach zero, so the whole sequence converges.

For unbounded sequences, tail suprema or infima can take extended values \(+\infty\) or \(-\infty\). For \(a_n=n(-1)^n\), limsup is \(+\infty\) and liminf is \(-\infty\). The subsequential-limit theorem above concerns bounded sequences; an extended-real version needs matching definitions of divergence to infinity.

## Bounds that survive taking tails

If bounded sequences satisfy \(a_n\le b_n\) for all sufficiently late \(n\), then \(\limsup a_n\le\limsup b_n\) and \(\liminf a_n\le\liminf b_n\). Once the inequality holds on every term of a tail, its suprema and infima preserve the order; now take their monotone limits.

For bounded \(a_n,b_n\), one always has

\[
\limsup(a_n+b_n)\le\limsup a_n+\limsup b_n.
\]

Indeed, for any \(n\ge N\), \(a_n+b_n\le u_N^{(a)}+u_N^{(b)}\). Take a supremum over \(n\ge N\), then let \(N\to\infty\). Equality can fail badly: if \(a_n=(-1)^n\) and \(b_n=-a_n\), both individual limsups equal 1, but the sum is identically zero. Their high values occur on opposite parities. A corresponding lower bound is \(\liminf(a_n+b_n)\ge\liminf a_n+\liminf b_n\). These inequalities are safer than treating limsup as an ordinary linear limit.

```notebook
fn oscillate(x) = cos(pi*x)+1/x;
table oscillate from 1 to 12 count 12;
```

This finite table checks parity and the changing offset. It cannot prove an eventual statement. Before running it, predict whether the even values lie above or below their limiting level and explain the answer algebraically.

```exercise
{"id":"analysis-limsup-sparse","type":"choice","prompt":"A sequence equals 1 at perfect-square indices and 0 otherwise. What are its limsup and liminf?","options":[{"label":"1 and 0, because both values occur after every cutoff.","correct":true,"feedback":"Sparse events still control tail suprema when they recur arbitrarily late."},{"label":"0 and 0, because squares are rare.","correct":false,"feedback":"Frequency is not part of the definition of limsup."},{"label":"The limsup does not exist because the sequence oscillates.","correct":false,"feedback":"For a bounded sequence the monotone tail suprema always converge."}],"hints":["Ask whether any tail contains a square index and a non-square index."]}
```

**Independent transfer.** Let \(a_n=\sin(n\pi/2)+1/n\). Determine its limsup and liminf, prove that no other subsequential limits occur, and decide whether replacing \(1/n\) by \(1/\sqrt n\) changes either answer.

<details><summary>Worked solution</summary>

The sine values repeat \(1,0,-1,0\). Along \(4k+1\), \(a_n\to1\); along \(4k+3\), \(a_n\to-1\); along even indices, \(a_n\to0\). Any subsequence contains an infinite further subsequence in one residue class modulo four. If the original subsequence converges, its limit must therefore be among \(-1,0,1\). Thus limsup is 1 and liminf is −1. Since \(1/\sqrt n\to0\), replacing the offset leaves the same subsequential limits. The extra value 0 shows why limsup and liminf alone do not list every subsequential limit.

</details>

## Problems: justify what happens after every cutoff

1. Let \(a_n=(1+(-1)^n)/2+1/n\). Compute \(\limsup a_n\), \(\liminf a_n\), and the full set of subsequential limits. Find the exact supremum and infimum of the tail beginning at \(N\).
2. Prove directly from the quantified tail characterization that if \(\limsup|a_n|=0\), then \(a_n\to0\). Give a bounded counterexample showing that \(\limsup a_n=0\) alone does not force convergence to zero.
3. Prove \(\liminf(a_n+b_n)\ge\liminf a_n+\liminf b_n\) for bounded sequences. Give an example where the inequality is strict.
4. Construct two bounded sequences with the same limsup and liminf but different sets of subsequential limits. Prove that your lists of cluster values are complete.
5. Let \(K\) be the subsequential-limit set of a bounded sequence. Rebuild the proof that \(K\) is closed by choosing one index at each stage. Explain why the condition \(n_j>n_{j-1}\) cannot be omitted.

<details><summary>Hints for the problems</summary>

1. The first even term of a tail is its largest. The odd values stay positive and tend to zero.
2. Apply the eventual-ceiling condition to the nonnegative sequence \(|a_n|\).
3. Compare every tail term with the sum of the two tail infima.
4. Contrast alternating endpoints with the sequence made from finer and finer finite grids.
5. A cluster value has terms within any radius at arbitrarily late indices.

</details>

<details><summary>Worked solutions to the problems</summary>

1. Let \(e(N)\) be the first even integer at least \(N\). Then \(u_N=1+1/e(N)\). Every odd term is positive, and odd indices tend to infinity, so \(\ell_N=0\), an infimum not attained. Even-index terms tend to 1 and odd-index terms tend to 0; every convergent subsequence has a further even or odd sub-subsequence, so its limit is 1 or 0. Thus the cluster set is \(\{0,1\}\), with limsup 1 and liminf 0.
2. Let \(U=\limsup|a_n|=0\). For any \(\varepsilon>0\), the eventual-ceiling property gives \(|a_n|<\varepsilon\) for all sufficiently late \(n\), exactly the definition of \(a_n\to0\). In contrast, \(a_{2n}=0\) and \(a_{2n-1}=-1\) has limsup 0 but does not converge.
3. For every \(n\ge N\), \(a_n\ge\ell_N^{(a)}\) and \(b_n\ge\ell_N^{(b)}\). Therefore \(\ell_N^{(a+b)}\ge\ell_N^{(a)}+\ell_N^{(b)}\); take limits. For \(a_n=(-1)^n,\ b_n=-a_n\), the sum is zero, so its liminf is 0, while the two separate liminfs sum to \(-2\).
4. The alternating sequence \(a_n=(1+(-1)^n)/2\) has liminf 0, limsup 1, and cluster set \(\{0,1\}\): every subsequence has an infinite further parity class. The sequence obtained by listing the grids \(\{0,1/m,\ldots,1\}\) stage by stage has the same extreme limits, but every \(x\in[0,1]\) is a cluster value by choosing one grid point within \(1/m\) of \(x\) from each stage. All its terms lie in \([0,1]\), so it has no cluster values outside that interval.
5. If \(L_j\in K\) and \(L_j\to L\), choose \(n_j>n_{j-1}\) with \(|a_{n_j}-L_j|<1/j\). Such a late index exists because \(L_j\) is a subsequential limit. Then \(|a_{n_j}-L|\le1/j+|L_j-L|\to0\), making \(L\) a subsequential limit and proving closure. Without increasing indices, the chosen terms would not necessarily form a subsequence and might reuse finitely many early observations.

</details>

```exercise
{"id":"analysis-limsup-moving-spikes","type":"written","prompt":"Set a_n=1+1/n when n is a perfect square, and a_n=−1/n otherwise. Find limsup a_n, liminf a_n, and every subsequential limit. Justify the answer with arbitrarily late indices and a proof that no other limit is possible.","hints":["Use n=k² for the spikes and n=k²+1 for a nonsquare subsequence.","Any convergent subsequence has infinitely many square or infinitely many nonsquare indices; pass to that sub-subsequence."],"rubric":["Finds limsup 1 and liminf 0","Exhibits a square-index subsequence converging to 1","Exhibits a nonsquare-index subsequence converging to 0","Rules out all other subsequential limits using an infinite index class","Explains why spike frequency does not alter limsup"],"solution":"Along n=k², a_n=1+1/k²→1. Along n=k²+1 for k≥1, the indices are nonsquares and a_n=−1/(k²+1)→0. Thus 1 and 0 are subsequential limits, so limsup is at least 1 and liminf at most 0. Every square term differs from 1 by 1/n and every nonsquare term differs from 0 by 1/n. If a subsequence converges, one of those two index classes occurs infinitely often and gives a sub-subsequence converging to 1 or 0; the entire subsequence must have that same limit. Hence the cluster set is exactly {0,1}, whose maximum and minimum are the limsup and liminf.","transfer":"Change the square-index values to (−1)^k+1/k² when n=k², leaving nonsquare values at −1/n. Find the new cluster set and both tail limits.","transferSolution":"Square indices with even k approach 1; square indices with odd k approach −1; nonsquare indices approach 0. Each class occurs arbitrarily late. Every convergent subsequence has an infinite sub-subsequence in one of these three classes, so no other cluster value is possible. The cluster set is {−1,0,1}, limsup is 1, and liminf is −1."}
```
