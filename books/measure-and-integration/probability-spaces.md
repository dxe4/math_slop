
# Probability Spaces

Probability is measure theory with total mass one and an interpretation of measurable sets as events. Random variables are measurable functions, their laws are pushforward measures, and expectation is integration. That translation is more than terminology: it explains independence through product measures, gives rigorous conditional expectation through Radon–Nikodym, and identifies the hypotheses behind limit passages.

This chapter is a measure-theoretic bridge. [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs) provides the primary probability course, including its separate development of counting models, distributions, concentration and further limit theory. Here we prove the constructions that connect the preceding chapters: independence from joint laws, a concrete countably independent model, quantile simulation, conditional averaging, Borel–Cantelli and the integrable independent weak law. Stochastic-process theory continues in [Stochastic Processes](#/books/stochastic-processes-paths).

## Events, variables and laws

A probability space is \((\Omega,\mathcal F,P)\) with \(P(\Omega)=1\). The choice of \(\mathcal F\) records which events have assigned probabilities. A real random variable is an \(\mathcal F\)-to-Borel measurable function \(X\). Its law is \(P_X=X_\#P\), so \(P_X(B)=P(X\in B)\). The pushforward integration identity gives
\[
 E[h(X)]=\int_{\mathbb R}h\,dP_X
\]
for nonnegative measurable \(h\), and for integrable signed or complex \(h\). In particular the expectation depends on the law, although dependence between different variables requires a joint law.

A null event need not be empty. For a uniform input in the unit interval each singleton is null, yet some input occurs. An almost sure assertion can fail at particular inputs without failing probabilistically. Conversely, arbitrary subsets of the sample space need not be events unless the measurable structure admits them. Completion adds subsets of null events without changing old probabilities or expectations.

The distribution function \(F(x)=P(X\le x)\) is increasing, right continuous and has limits zero and one at the two ends of the line. Chapter 9 proved that these properties characterize Borel probability laws through their interval increments. A law can contain atoms, a length density, a continuous singular part, or a mixture. Writing a density is an additional representation claim, rather than part of the definition of a random variable.

## Independence is a product-law statement

Variables \(X_1,\ldots,X_n\) are independent if their joint law equals the product of their individual laws. Equivalently, for all Borel sets,
\[
 P(X_1\in B_1,\ldots,X_n\in B_n)
 =\prod_{j=1}^nP(X_j\in B_j).
\]
The equivalence follows because rectangles form a generating pi system and both joint and product measures are finite. It is enough to check the identity on half-lines, or on dyadic interval generators, by the same uniqueness argument. A sequence is independent when every finite subfamily satisfies this property.

For independent variables and bounded measurable real functions \(h_j\), Fubini and the pushforward identity give
\[
 E\left[\prod_jh_j(X_j)\right]=\prod_jE[h_j(X_j)].
\]
The same identity holds for integrable factors whose absolute product is integrable under the product law; in particular it holds when each separate factor is integrable, since Tonelli makes the product absolute integral the product of their finite absolute integrals. Conversely, the bounded-function identity implies independence by using indicator functions. Measurable transformations of separate independent variables remain independent, because their event inverse images are still separate-coordinate events.

Pairwise independence checks only pairs and is weaker than independence of a whole family. On four equally likely pairs of bits, let \(A,B\) be the coordinates and let \(C\) be their exclusive-or. Every pair is independent, but knowing the first two fixes the third. The event that all three are zero has probability \(1/4\), whereas a product of the three marginal probabilities would be \(1/8\). A theorem requiring independent repeated trials cannot be justified solely by computing pairwise correlations.

**Worked example 15.1 (Zero covariance with dependence).** Let \(X\) be uniform on \([-1,1]\) and \(Y=X^2\). Symmetry gives \(E[X]=E[XY]=0\), so their covariance is zero. Yet \(\{|X|\le1/2\}\) and \(\{Y\le1/4\}\) are the same event, of probability \(1/2\). Their joint probability is therefore \(1/2\), not the product \(1/4\). Independence implies factorization of these indicator expectations as well as ordinary moments; zero covariance checks only one of those identities.

## Constructing countably many independent uniform inputs

An infinite sequence of independent variables needs a sample model. It cannot be established merely by drawing a finite product square and placing dots after its coordinates. Here is a direct construction on \([0,1)\) with length probability.

For \(x\in[0,1)\), define its binary digits by
\[
 b_n(x)=\lfloor2^nx\rfloor-2\lfloor2^{n-1}x\rfloor.
\]
These measurable functions take values zero and one, with a fixed terminating convention at dyadic inputs. Any prescribed pattern in \(m\) distinct digit positions has probability \(2^{-m}\). Indeed, if the largest position is \(N\), the \(2^N\) half-open dyadic intervals of length \(2^{-N}\) each specify the first \(N\) digits. Exactly \(2^{N-m}\) intervals match the selected pattern. This proves finite independence of the whole digit family.

Partition the positive digit positions into the disjoint infinite sets
\[
 I_j=\{2^{j-1}(2k-1):k\ge1\},\qquad j\ge1,
\]
using the unique power of two dividing a positive integer. Define
\[
 U_j(x)=\sum_{k\ge1}2^{-k}b_{2^{j-1}(2k-1)}(x).
\]
Each is measurable as a pointwise limit. Events prescribing the first finitely many output digits have the usual dyadic probabilities, since they prescribe distinct original digits. Ambiguities at a dyadic output have probability zero: an infinite prescribed tail of all zeros or all ones is contained in cylinder events of probabilities tending to zero, and there are only countably many possible starting positions. Thus each \(U_j\) has uniform law, and every finite subfamily has the product law on dyadic rectangles. Finite-measure uniqueness extends this to all Borel rectangles and the joint Borel sigma algebra. Values at exceptional endpoint inputs can be reassigned arbitrarily.

This construction supplies a genuine infinite independent sequence without invoking a general extension theorem for arbitrary stochastic processes. It also shows why deterministic functions of one random input can be independent: different functions inspect disjoint independent digits. The relevant question is the joint law, not whether a computer description mentions the same underlying input.

## Every one-dimensional law can be simulated from a uniform input

For a distribution function \(F\), define the generalized inverse
\[
 Q(u)=\inf\{x\in\mathbb R:F(x)\ge u\},\qquad0<u<1.
\]
It is finite, by the endpoint limits of \(F\). The key identity is \(Q(u)\le x\) if and only if \(u\le F(x)\). One direction follows immediately if \(F(x)\ge u\). For the other, take points in the defining set approaching its infimum. If the infimum is below \(x\), one such point is already at most \(x\); if it equals \(x\), approach from the right and use right continuity. Monotonicity completes both cases. The identity also proves measurability of \(Q\).

For uniform \(U\), it follows that \(P(Q(U)\le x)=P(U\le F(x))=F(x)\). Hence \(Q(U)\) has the desired law. Applying \(Q\) separately to the independent uniforms constructed above gives countably many independent copies with that law. No density, strict increase or ordinary inverse function is required. For a Bernoulli law with mass \(p\) at one and mass \(1-p\) at zero, the quantile is zero up to \(u=1-p\) and one above it; a threshold maps an interval of uniform inputs to an atom.

## Conditional expectation is a density of restricted information

For integrable real \(Z\) and a sub-sigma-algebra \(\mathcal G\), chapter 11 constructed \(W=E[Z\mid\mathcal G]\) by Radon–Nikodym. It is \(\mathcal G\)-measurable and satisfies \(\int_AW\,dP=\int_AZ\,dP\) for every \(A\in\mathcal G\). The identity extends from indicators to bounded \(\mathcal G\)-measurable multipliers by simple approximation and dominated convergence. In particular bounded \(\mathcal G\)-measurable factors can be pulled outside conditional expectation, by testing this identity on each \(\mathcal G\)-event and using uniqueness.

For \(Z\in L^2\), conditional expectation is the orthogonal projection onto the closed subspace of \(\mathcal G\)-measurable \(L^2\) classes. First prove the conditional variable belongs to \(L^2\), rather than assuming it. Test the defining identity with \(W1_{\{|W|\le M\}}\). Cauchy–Schwarz gives
\[
 \int W^2 1_{\{|W|\le M\}}
 \le\|Z\|_2\left(\int W^2 1_{\{|W|\le M\}}\right)^{1/2}.
\]
The integrals are finite at this stage because the test is bounded and \(W\) is integrable. Monotone convergence yields \(\|W\|_2\le\|Z\|_2\). Testing against truncated \(\mathcal G\)-measurable \(L^2\) functions and passing by Cauchy–Schwarz proves orthogonality of \(Z-W\) to that subspace. Consequently
\[
 \|Z-Y\|_2^2=\|Z-W\|_2^2+\|W-Y\|_2^2
\]
for every \(\mathcal G\)-measurable \(Y\in L^2\). This proves the least-squares characterization. The subspace is closed because an \(L^2\) convergent sequence has an almost everywhere convergent subsequence, whose pointwise limit has a \(\mathcal G\)-measurable representative. Completing the sub-sigma-algebra, if needed, changes no classes.

**Worked example 15.2 (Conditioning on a zero-probability coordinate value).** Give \((X,Y)\) the joint density \(2\,1_{\{0<y<x<1\}}\). The marginal density of \(X\) is \(2x\). We claim \(E[Y\mid\sigma(X)]=X/2\). For every bounded Borel \(h\), Fubini gives
\[
 E[Yh(X)]=\int_0^1h(x)x^2\,dx
 =E[(X/2)h(X)].
\]
The candidate is \(\sigma(X)\)-measurable, so this is its defining integral property. The conditional density of \(Y\) at a positive coordinate \(x\) is uniform on \((0,x)\), but the rigorous averaging statement was not obtained by dividing by \(P(X=x)\), which is zero. It was verified through identities on measurable information. Integrating gives \(E[Y]=1/3\), consistent with \(E[X]/2\).

## Infinitely many occurrences: Borel–Cantelli

For events \(A_n\), their limsup \(\bigcap_m\bigcup_{n\ge m}A_n\) is the event that infinitely many occur. If \(\sum_nP(A_n)<\infty\), then
\[
 P\left(\bigcup_{n\ge m}A_n\right)\le\sum_{n\ge m}P(A_n)\longrightarrow0,
\]
so the limsup has probability zero. This first Borel–Cantelli assertion needs no independence.

If the events are independent and the probability sum diverges, the limsup has probability one. For each fixed \(m\), finite independence gives
\[
 P\left(\bigcap_{n=m}^NA_n^c\right)
 =\prod_{n=m}^N(1-P(A_n))
 \le\exp\left(-\sum_{n=m}^NP(A_n)\right)\longrightarrow0.
\]
Continuity from above shows the probability of no occurrences after \(m\) is zero. A countable union over \(m\) proves that finitely many occurrences have probability zero. Without independence, a divergent sum alone gives no such conclusion: repeating the same event of probability one half makes the limsup that same event.

**Worked example 15.3 (Rare events and repeated opportunities).** Let \(U_n\) be the independent uniforms above. For \(A_n=\{U_n\le1/n\}\), the probability sum diverges, so the events occur infinitely often almost surely. For \(B_n=\{U_n\le1/n^2\}\), the sum converges, so only finitely many occur almost surely. Each individual probability tends to zero in both cases. Pointwise rarity does not decide the infinite-occurrence question; summability and dependence decide it together.

## Tail information has probability zero or one

For an independent sequence, define its tail sigma algebra by
\[
 \mathcal T=\bigcap_{m\ge1}\sigma(X_m,X_{m+1},\ldots).
\]
A tail event can be determined after discarding any fixed finite initial segment. This is stronger than merely being unaffected by a selected finite change in one particular calculation: membership in each displayed sigma algebra is a measurable-information condition.

**Kolmogorov's zero–one law.** Every event in this tail sigma algebra has probability zero or one.

To prove it, first note that independence of the sequence makes the first \(n\) coordinates independent of the sigma algebra generated by all later coordinates. Here the infinite part needs justification. For fixed finite-prefix cylinder events, independence gives the factorization against finite cylinders formed from later coordinates. The class of later events for which factorization holds is a lambda system. Later cylinders form a generating pi system, so the pi–lambda theorem extends the factorization to all later events. Repeating the argument on the prefix side gives independence of the two sigma algebras.

Now let \(A\) be a tail event. It is independent of the sigma algebra of the first \(n\) coordinates for every \(n\), since it belongs to the later-coordinate sigma algebra. In particular it is independent of every finite cylinder involving the sequence. For this fixed \(A\), the class of events \(B\) satisfying \(P(A\cap B)=P(A)P(B)\) is a lambda system: complements use the finite probability total and disjoint unions use countable additivity. Finite cylinders form a generating pi system for the sigma algebra of the whole sequence. The factorization therefore holds for every event in that sigma algebra. Taking \(B=A\) gives \(P(A)=P(A)^2\), whose only probability-valued solutions are zero and one.

For example, the event that a sequence of sample averages converges to a specified constant is a tail event for real-valued inputs. Removing a fixed finite initial sum changes the average by that finite sum divided by the growing sample size, which tends to zero. Thus its probability, for independent inputs, is zero or one. This law does not by itself identify which value occurs. A strong-law proof must still establish that the probability is one under its moment hypotheses. The zero–one result isolates the role of finite-coordinate information and gives no numerical rate or integrability estimate. It complements Borel–Cantelli instead of replacing the estimates needed there.

## The weak law under a finite first moment

**Theorem 15.4 (Independent identically distributed weak law).** If \(X_n\) are independent with a common real law and \(E|X_1|<\infty\), then
\[
 \frac1n\sum_{j=1}^nX_j\longrightarrow E[X_1]
 \quad\text{in probability}.
\]

*Proof.* First suppose the common variance \(\sigma^2\) is finite. Independence makes the centered cross moments vanish, so the variance of the average is \(\sigma^2/n\). Markov applied to its squared centered error gives probability at most \(\sigma^2/(n\varepsilon^2)\), which tends to zero.

For merely a finite first absolute moment, fix a truncation height \(K\) and put \(X_j^{(K)}=X_j1_{\{|X_j|\le K\}}\). These variables remain independent and identically distributed, are bounded, and have mean \(m_K\). The finite-variance argument applies to their averages for each fixed \(K\). Let \(t_K=E[|X_1|1_{\{|X_1|>K\}}]\to0\). The average truncation error has expected absolute value at most \(t_K\), uniformly in \(n\), and \(|m_K-E[X_1]|\le t_K\). For a target probability error, choose \(K\) so that this mean difference is small and Markov's bound for the average truncation error is as small as desired. Then let \(n\) grow to control the bounded-variable average. Finally let the desired probability error tend to zero. This proves the full sequence converges in probability, with the order of choices explicit. ∎

The theorem asserts convergence in probability, rather than almost sure convergence. The latter is the strong law and requires its own proof; applying Borel–Cantelli directly to the variance bound would encounter the divergent harmonic series. The primary probability book supplies that further theory. Here truncation demonstrates how an integral tail assumption replaces a stronger finite-variance assumption in a precise conclusion.

Probability convergence is exactly convergence in measure for this finite measure space. Almost sure convergence is almost everywhere convergence. The subsequence principle, Egorov and Vitali therefore apply directly. In particular convergence in probability plus uniform integrability gives \(L^1\) convergence and convergence of expectations. A bound on expectations of absolute values alone is insufficient, as the concentrating spikes of chapter 8 already showed.

## Exercises with hints and complete solutions

### MEASURE-PROB-E001 — Expectation from a law

If \(X\) has law \(\nu\), prove the pushforward expectation formula for nonnegative measurable \(h\).

**Hint 1.** Begin with indicators of Borel sets.

**Hint 2.** Pass through simple functions and monotone approximation.

**Solution.** For \(h=1_B\), the identity is exactly \(P(X\in B)=\nu(B)\). Finite nonnegative linear combinations give simple functions. Increasing simple approximations to \(h\) and monotone convergence on both spaces give the formula, allowing infinity. Integrable signed functions follow by their finite positive and negative integrals.

### MEASURE-PROB-E002 — A null outcome is possible

For a uniform input on \([0,1]\), explain why \(P(X=x)=0\) for every \(x\) does not imply \(P(X\in[0,1])=0\).

**Hint 1.** Identify the union required to cover all possible inputs by singletons.

**Hint 2.** Countable additivity does not apply to arbitrary uncountable unions.

**Solution.** The interval is the union of uncountably many singletons. Countable additivity only gives sums for countable disjoint unions, so there is no authorized sum of the singleton probabilities over that uncountable family. Every particular value has probability zero while the total event has probability one, consistently with the axioms.

### MEASURE-PROB-E003 — Pairwise versus mutual independence

Verify pairwise independence in the bit/exclusive-or example and the failure of mutual independence.

**Hint 1.** List the four equally likely triples.

**Hint 2.** Compare their joint all-zero probability with the product of marginal probabilities.

**Solution.** The triples are \((0,0,0),(0,1,1),(1,0,1),(1,1,0)\). In any chosen pair, the four possible bit pairs occur once each, so that pair has product law. Each bit has probability one half of being zero, but the all-zero triple has probability one quarter rather than one eighth. Thus mutual independence fails.

### MEASURE-PROB-E004 — Arbitrary selected binary digits

Prove that prescribing \(m\) binary digits at arbitrary distinct positions has probability \(2^{-m}\).

**Hint 1.** Partition by all digits up to the largest selected position \(N\).

**Hint 2.** Count the unrestricted positions.

**Solution.** The first \(N\) digits specify one of \(2^N\) half-open intervals of equal length. Fixing the selected \(m\) positions leaves \(N-m\) free binary choices, hence \(2^{N-m}\) matching intervals. Their total length is \(2^{-m}\). This proves the finite-cylinder identities needed for independence, including digit positions that are far apart.

### MEASURE-PROB-E005 — Quantiles with an atom

For a law assigning probability \(1/3\) to minus one and \(2/3\) to two, find its quantile and verify its uniform-input construction.

**Hint 1.** The distribution function has two jumps.

**Hint 2.** The lengths of the two uniform-input regions must match the atomic probabilities.

**Solution.** The quantile is minus one for \(0<u\le1/3\) and two for \(1/3<u<1\). A uniform input falls in these regions with probabilities one third and two thirds. Endpoint assignments have probability zero and do not change the law. An ordinary inverse would not be appropriate because the distribution function is constant on intervals and jumps at its atoms.

### MEASURE-PROB-E006 — Factorization of bounded functions

Show that if bounded Borel test functions satisfy \(E[h(X)k(Y)]=E[h(X)]E[k(Y)]\), then \(X,Y\) are independent.

**Hint 1.** Choose indicator tests.

**Hint 2.** Use rectangle uniqueness for finite measures.

**Solution.** With \(h=1_A\), \(k=1_B\), the hypothesis gives joint probability \(P(X\in A,Y\in B)=P_X(A)P_Y(B)\) on all rectangles. The joint law and the product law are finite measures agreeing on this generating pi system, so they agree on the whole product Borel sigma algebra. This is independence.

### MEASURE-PROB-E007 — Conditional least squares

For real \(Z\in L^2\), prove that its conditional expectation uniquely minimizes mean square error among \(\mathcal G\)-measurable \(L^2\) classes.

**Hint 1.** The residual is orthogonal to that subspace.

**Hint 2.** Expand the square of the sum of the residual and the candidate difference.

**Solution.** Writing \(W=E[Z\mid\mathcal G]\), the defining identities and truncation give \(E[(Z-W)(W-Y)]=0\). Therefore \(\|Z-Y\|_2^2=\|Z-W\|_2^2+\|W-Y\|_2^2\). The second term is nonnegative and vanishes exactly when \(Y=W\) almost surely. This proves both optimality and uniqueness as a class, rather than as particular values on null events.

### MEASURE-PROB-E008 — Summable failure probabilities

If \(P(|X_n-X|>1/n)\le n^{-2}\), prove almost sure convergence. Is independence needed?

**Hint 1.** Apply the first Borel–Cantelli assertion to the error events.

**Hint 2.** Outside their limsup, the shrinking tolerance is eventually respected.

**Solution.** The probability sum is finite, so almost surely only finitely many errors exceed \(1/n\). At every remaining input, all sufficiently late errors are at most \(1/n\), hence tend to zero. Independence is not required; the first assertion uses only the union bound and summability.

### MEASURE-PROB-E009 — Divergence without independence

Give events whose probabilities have divergent sum but whose infinitely-often event has probability strictly between zero and one.

**Hint 1.** Repeat one nontrivial event at every index.

**Hint 2.** Its limsup is the event itself.

**Solution.** On the unit interval set \(A_n=[0,1/2]\) for every \(n\). Each probability is one half, so the sum diverges. An input belongs to infinitely many of these events exactly when it belongs to their common set, of probability one half. The independent Borel–Cantelli conclusion therefore cannot be inferred from divergence alone.

### MEASURE-PROB-E010 — A variance bound for an average

For independent identically distributed variables of variance \(\sigma^2\), derive an explicit probability bound for their centered average.

**Hint 1.** Expand the square and use independence on cross terms.

**Hint 2.** Apply Markov to the squared error.

**Solution.** Centering gives zero means and zero cross expectations. The variance of the sum is \(n\sigma^2\), so that of the average is \(\sigma^2/n\). Markov yields \(P(|n^{-1}\sum X_j-E[X_1]|>\varepsilon)\le\sigma^2/(n\varepsilon^2)\). This tends to zero but its sum over \(n\) generally diverges, so this bound alone does not prove almost sure convergence by Borel–Cantelli.

### MEASURE-PROB-E011 — Truncation error uniformly in sample size

For integrable identically distributed \(X_j\), prove \(P(n^{-1}\sum_j|X_j-X_j^{(K)}|>a)\le t_K/a\), without independence.

**Hint 1.** Compute the expectation of the nonnegative average.

**Hint 2.** Markov only uses that expectation.

**Solution.** Every summand has expected value \(t_K=E[|X_1|1_{|X_1|>K}]\), so their average has that same expectation by finite linearity. Markov gives the displayed bound for every \(n\). Independence is not used here; in the weak-law proof it is needed for the bounded truncated averages, a separate part of the argument.

### MEASURE-PROB-E012 — Convergence of expectations needs a tail condition

For \(X_n=n1_{(0,1/n)}\) on the uniform unit interval, determine almost sure convergence, convergence in probability and convergence of expectations. Identify the failed Vitali hypothesis.

**Hint 1.** A fixed positive input eventually leaves the shrinking interval.

**Hint 2.** The whole integral remains above any fixed height for large indices.

**Solution.** The variables tend to zero at every positive input and at zero under the stated convention, hence almost surely and in probability. Every expectation is one, while the expectation of the limit is zero. For fixed \(M\), any \(n>M\) has \(E[|X_n|1_{|X_n|>M}]=1\), so the family is not uniformly integrable. Vitali's missing no-concentration condition explains the failure of expectation convergence.

## Summary

Random variables are measurable maps and their laws are pushforwards. Independence identifies a joint law with a product law, and is preserved under separate measurable transformations. Splitting binary digits constructs countably many independent uniforms; generalized quantiles turn them into independent copies of any real Borel probability law. Conditional expectation is a Radon–Nikodym density and, in \(L^2\), an orthogonal projection. Borel–Cantelli distinguishes summable failures from independent repeated opportunities. The weak law follows under a finite first moment by bounded truncation and a uniform tail estimate. Convergence in probability and convergence of expectations remain distinct, joined by uniform integrability when that hypothesis is available.
