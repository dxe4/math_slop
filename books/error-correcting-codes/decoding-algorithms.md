
# Decoding Algorithms

Preparation is BCH syndrome exponentials, Vandermonde matrices and exact finite-field elimination. The theorem uses narrow-sense roots through $2t$ and an actual error count at most $t$; Reed–Solomon’s alternative interpolation decoder is proved in Chapter 6.

## Decoding is an optimisation problem with hypotheses

A decoder is not specified by saying “use the syndrome.” The syndrome identifies an error coset; selecting a representative requires a criterion. A worst-case bounded-distance decoder must succeed for every pattern inside a radius. A maximum-likelihood decoder must maximise the stated channel law. An approximate iterative decoder needs its own success and stopping claims.

For a binary symmetric channel with crossover $0<p<1/2$, the likelihood of a received word given a candidate codeword is $p^w(1-p)^{n-w}$, where $w$ is their Hamming distance. This decreases with $w$, so maximum likelihood is nearest-codeword decoding. With uniform messages it is also maximum a posteriori decoding.

For independent but unequal coordinate channels, the correct likelihood is a product of their individual transition probabilities. Negative log likelihood is an additive cost, possibly with different costs at different positions. Minimum Hamming weight is not automatically the correct objective.

This chapter gives an explicit polynomial-time bounded-error decoder for narrow-sense BCH codes, using syndrome matrices rather than assuming a recurrence solver is already available. Reed–Solomon’s interpolation decoder from Chapter 6 provides a second exact route.

## Syndrome data and the error model

Fix a BCH code over $\mathbb F_q$ whose defining zeros include $\alpha,\ldots,\alpha^{2t}$, where $\alpha$ has order $n$ coprime to the characteristic. Suppose the actual error has weight $v\le t$, at distinct positions with locators $X_\ell=\alpha^{i_\ell}$ and nonzero magnitudes $E_\ell\in\mathbb F_q$.

Compute
$$
S_j=y(\alpha^j)=\sum_{\ell=1}^vE_\ell X_\ell^j,\qquad j=1,\ldots,2t.
$$
All calculations may be carried out in the extension field containing $\alpha$. The received and corrected coordinate symbols must still belong to the original base field.

If $t=0$, there is no positive-error correction claim; membership testing is the relevant operation. Assume $t\ge1$ for the matrix construction.

## Recovering the actual error count

Form the $t\times t$ Hankel matrix
$$
\mathcal H_t=(S_{i+j+1})_{0\le i,j<t}.
$$
Let $V_t$ be the $t\times v$ matrix with entries $(V_t)_{i\ell}=X_\ell^i$. Then
$$
\mathcal H_t=V_t\operatorname{diag}(E_\ell X_\ell)V_t^T.
$$
When $v\le t$, the first $v$ rows of $V_t$ form a square invertible Vandermonde matrix. Thus $V_t$ has full column rank, its transpose has full row rank, and the diagonal matrix is invertible.

It follows that $\operatorname{rank}\mathcal H_t=v$. For a direct two-sided proof, choose a left inverse $L$ of $V_t$. Then $L\mathcal H_tL^T=\operatorname{diag}(E_\ell X_\ell)$ has rank $v$, while the displayed factorisation bounds the rank above by $v$.

The leading $v\times v$ Hankel block $\mathcal H_v$ is also invertible, since its Vandermonde factors are square. Smaller leading blocks can be singular because contributions cancel; counting how many initial syndromes are nonzero would therefore be unreliable.

For $v=0$, every syndrome and the whole Hankel matrix vanish. Conversely, under the assumed error budget, zero rank implies no error. This converse does not apply to arbitrary high-weight errors that may themselves be codewords.

## Recovering the locator polynomial

Write
$$
\Lambda(z)=1+\lambda_1z+\cdots+\lambda_vz^v
=\prod_{\ell=1}^v(1-X_\ell z).
$$
The recurrence from Chapter 5 gives the $v$ equations
$$
S_{j+v}+\lambda_1S_{j+v-1}+\cdots+\lambda_vS_j=0,
\qquad j=1,\ldots,v.
$$
Their coefficient matrix is the invertible Hankel block with its columns reversed. Hence they have a unique solution.

The true locator satisfies these equations, so the unique solution is exactly its coefficient vector. Only syndromes through $S_{2v}$ are needed, and these are available because $v\le t$.

Find all positions by evaluating $\Lambda(\alpha^{-i})$ for $i=0,\ldots,n-1$. Under the hypotheses, exactly the $v$ actual positions are zeros. The roots are distinct because the locations are distinct. This direct finite search is often called a Chien search; the name does not replace the root-count argument.

The locator roots are *inverse* locators. Confusing $X_\ell$ with $X_\ell^{-1}$ changes the position mapping and can produce a decoder that solves the wrong convention.

## Recovering magnitudes and proving correctness

Once the distinct locators are known, use the first $v$ syndrome equations:
$$
S_j=\sum_{\ell=1}^vE_\ell X_\ell^j,\qquad j=1,\ldots,v.
$$
The matrix is a Vandermonde matrix on exponents zero through $v-1$, multiplied by the nonzero locator diagonal. It is invertible, so the magnitudes are uniquely determined.

The true magnitudes satisfy it; therefore the computed ones equal them. Subtract the resulting error word from $y$. This recovers the transmitted codeword exactly.

This proves the whole decoder under $v\le t$: the Hankel rank finds the count, the recurrence system finds the locator, finite root evaluation finds positions, and a Vandermonde solve finds magnitudes. No step appeals to an unspecified successful recurrence guess.

Straight elimination takes $O(t^3)$ extension-field operations for the matrix solves; root search takes $O(nt)$, as does a direct syndrome calculation up to constants. Thus the stated route has polynomial field-operation complexity $O(t^3+nt)$. Bit complexity also depends on the field representation.

## A total decoding rule outside the theorem’s budget

To define a decoder on every received word, not just on promised inputs, add explicit failure cases. Reject if the recovered degree/rank data are inconsistent, if the locator lacks the required number of distinct roots among allowed positions, if recovered magnitudes do not lie in the base field, or if the candidate correction does not produce a codeword with at most $t$ changed positions.

These are part of the mathematical algorithm specification. No implementation has been executed here. Under the proved error budget all these requirements hold automatically, so they do not weaken the theorem.

Outside that budget, the decoder may return failure or a different nearby codeword. The membership and radius checks prove only that its output is a codeword near the received word. They cannot establish an unobserved fact about how many errors the physical channel introduced.

For a stronger subcode with additional defining roots, use the full generator or all required parity checks in the final membership condition. Vanishing only the first $2t$ syndromes certifies membership in the code defined by those roots, which may be a larger space than the actual selected subcode.

## Relation to Berlekamp–Massey and Euclidean decoding

The syndrome sequence has a shortest linear recurrence whose degree is the number of errors under the budget. Berlekamp–Massey finds that recurrence through incremental updates; an extended Euclidean approach solves an equivalent key equation. They can improve the recurrence-solving cost to quadratic order in $t$.

Those faster algorithms require their own invariants and normalisation conventions. The correctness proof in this chapter uses the explicit Hankel linear systems. It does not claim that an omitted update formula has been proved merely by naming a classical algorithm.

The interpolation decoder in Chapter 6 is different: it solves for a numerator and an error-locator polynomial using evaluation positions directly. Its every-solution proof is particularly transparent for Reed–Solomon codes. Both routes exploit polynomial structure, but their syndrome and degree conventions should not be mixed.

## Erasures and a correctness-preserving reduction

For Reed–Solomon codes, delete erased evaluation positions and use the proved interpolation decoder with condition $2t+e\le n-k$. This is an efficient direct reduction.

For a general code of distance $d$ with $2t+e<d$, a simple, possibly expensive reduction is also valid. Enumerate assignments to the $e$ erased coordinates, run the guaranteed radius-$t$ decoder on each filled word, and retain candidates that differ from the observed unerased positions in at most $t$ coordinates.

The actual erased-symbol assignment appears in this enumeration, so the transmitted word is among the candidates. Any two retained codewords differ in at most $2t+e<d$ positions, impossible. Thus at most one candidate survives and it is the true word.

This proves a general reduction while being honest about its $q^e$ assignment cost. Efficient error-and-erasure algebraic decoders avoid that enumeration by incorporating an erasure locator, but uniqueness alone does not establish their complexity.

## Soft information and decision costs

A communication receiver may provide a reliability value rather than a hard symbol. On an independent binary channel with positive likelihoods, the negative log likelihood difference for choosing coordinate one rather than zero is
$$
L_i=\ln\frac{W_i(y_i\mid0)}{W_i(y_i\mid1)}.
$$
Maximum likelihood minimises $\sum_{i:c_i=1}L_i$ over codewords, up to a constant independent of $c$. Costs can be negative when the observation favours one.

Hard-decision decoding discards the magnitudes of these likelihood ratios. It can remain useful and has its distance theorem, but it may be statistically suboptimal compared with a decoder using full soft observations.

A nonuniform message prior contributes another negative log prior term for maximum a posteriori decoding. The code geometry remains unchanged, while the decision objective changes. A claim of optimality must name which objective is meant.

## Failure probability is a separate calculation

The algebraic theorem guarantees success for every error pattern up to $t$. Under independent substitution probability $p$, it bounds error by the binomial tail beyond $t$. It does not say that every heavier error causes failure, nor does it establish a numerical performance curve without further analysis.

For burst noise, correlated channels or adversarial corruption, use the appropriate distribution or worst-case model. The exact same decoder can have different average performance under different laws. Mathematical correctness of its radius guarantee and empirical suitability of its noise assumptions are different questions.

## Base-field symbols and extension-field arithmetic

Syndromes and locator coefficients can lie in the extension field even when every transmitted symbol is binary. This is expected: evaluating a base-field polynomial at an extension element produces an extension value. It does not enlarge the physical symbol alphabet.

Under the error-budget theorem, uniqueness makes the solved magnitudes equal the actual base-field errors, so the correction returns a base-field word automatically. Outside the theorem, an arbitrary extension-field solution must not be silently interpreted as a valid nonbinary transmitted symbol. Keeping the two fields explicit preserves both the decoder’s algebra and the declared code identity.

## Worked example 7.1: One binary error

With $t=1$ and one error at locator $X$, binary magnitude is one and $S_1=X$, $S_2=X^2$. The Hankel matrix is the nonzero scalar $S_1$, so rank is one. The locator equation is $S_2+\lambda_1S_1=0$, giving $\lambda_1=X$ in characteristic two. Thus $\Lambda(z)=1+Xz$ has zero $X^{-1}$ and identifies the position. The magnitude solve returns one.

## Worked example 7.2: Why a first syndrome can vanish

Over $\mathbb F_5$, take two locators $X_1=1$, $X_2=2$ and magnitudes $E_1=1$, $E_2=2$. Then $S_1=1+4=0$, but $S_2=1+8=4$, $S_3=1+16=2$. The leading $1\times1$ Hankel block is singular, while the $2\times2$ block $\begin{pmatrix}0&4\\4&2\end{pmatrix}$ has determinant $-16=4\ne0$. Counting initial nonzero syndromes would miss the two errors; full rank correctly identifies them.

## Worked example 7.3: A full-support locator search

Suppose a recovered locator is $(1-\alpha^3z)(1-\alpha^8z)$ for an element of order fifteen. Evaluating at $\alpha^{-i}$ gives zero exactly when $i=3$ or $8$ modulo fifteen, since the two factors have those distinct roots. A search over all fifteen positions therefore finds two locations. Evaluating at $\alpha^i$ instead would report the negatives of those exponents under the fixed convention, demonstrating why inverse-location notation matters.

## Sparse recovery is the same uniqueness question

A parity-check syndrome is a linear measurement of the error vector. Recovering an error with at most $t$ nonzero coordinates asks whether that linear map is injective on the set of such sparse vectors.

It is injective exactly when the code kernel contains no nonzero word supported on at most $2t$ coordinates. For one direction, two sparse errors with the same syndrome have a kernel difference of that maximum weight. For the other, split the support of a short nonzero kernel word into two parts of at most $t$ coordinates, assigning opposite signs on the second part. This constructs two allowed errors with the same syndrome.

Thus minimum distance greater than $2t$ is not merely sufficient for the decoder uniqueness theorem; it is precisely the restricted-injectivity condition. The argument works over the declared finite field and needs no real-valued convex optimisation surrogate.

Counting also gives a necessary measurement budget. The number of error vectors of weight at most $t$ is the Hamming-ball volume, and every one needs a distinct syndrome if recovery is guaranteed. A check matrix with redundancy rank $r$ has only the field size raised to power $r$ syndromes, so that many must be at least the ball volume. This is Hamming’s bound expressed as a measurement-information limit.

Unique recovery still does not specify an efficient method. Searching all sparse supports can take combinatorial time, while the algebraic decoder uses the additional geometric-series structure of BCH syndromes. A general matrix with the same restricted-injectivity property need not admit that locator construction.

The comparison is useful because it separates information from computation. Distance proves that the measurements contain enough information about a bounded-weight error; the Hankel and locator arguments prove that a particular structured family allows that information to be recovered by the stated algorithm.

Changing the alphabet to real vectors, changing the loss or introducing approximate measurement noise leads to different sparse-recovery theorems. Their names cannot be imported as proofs for exact finite-field syndrome decoding.

## A verified nearby codeword does not identify the sent word globally

A bounded-distance decoder can verify that its returned word belongs to the code and lies within a declared radius t of the received word. If twice t is smaller than the code distance, at most one codeword passes that test: otherwise the triangle inequality would put two codewords at distance at most twice t. This is a complete uniqueness certificate for the decoding ball.

It is not a certificate that the returned word was sent when the true corruption exceeded the promised budget. A different codeword may have been sent and moved close to the returned one by a larger error. Conversely, finding no codeword in the ball proves failure of the radius-t explanation, not absence of a most likely codeword under a probabilistic channel. A total decoder should therefore distinguish verified bounded-distance output, declared failure and any optional outside-radius heuristic. The labels express different mathematical claims. Syndrome verification and distance counting are useful certificates precisely because their guarantee is stated with the channel budget rather than inferred from the existence of an output.

## Exercises

### Exercise 7.1
<a id="decoding-algorithms-ex-1"></a>

Prove the Hankel factorisation entry by entry.

<details>
<summary>Hint 1</summary>

Multiply the displayed three factors.

</details>
<details>
<summary>Hint 2</summary>

Use the syndrome sum of exponentials.

</details>
<details>
<summary>Solution</summary>

The $(i,j)$ entry is $\sum_\ell X_\ell^i(E_\ell X_\ell)X_\ell^j=\sum_\ell E_\ell X_\ell^{i+j+1}=S_{i+j+1}$. This proves the identity with the exact index offset.

</details>

### Exercise 7.2
<a id="decoding-algorithms-ex-2"></a>

Why does the Hankel rank equal the error count under the budget?

<details>
<summary>Hint 1</summary>

The rectangular Vandermonde has a left inverse.

</details>
<details>
<summary>Hint 2</summary>

Apply it to both sides.

</details>
<details>
<summary>Solution</summary>

Full column rank follows from its leading square Vandermonde block. If $L V=I$, then $L\mathcal HL^T$ is the invertible error-magnitude/locator diagonal, giving rank at least $v$. The factorisation gives rank at most $v$, so equality holds.

</details>

### Exercise 7.3
<a id="decoding-algorithms-ex-3"></a>

Why is a leading smaller Hankel block allowed to be singular?

<details>
<summary>Hint 1</summary>

Error contributions can cancel in a finite field.

</details>
<details>
<summary>Hint 2</summary>

Use the two-error worked example.

</details>
<details>
<summary>Solution</summary>

The first syndrome can vanish even with nonzero errors. The theorem guarantees invertibility at the full actual-error size $v$, not at every smaller size. The example has singular size one and nonsingular size two, so a rule stopping at the first singular block would fail.

</details>

### Exercise 7.4
<a id="decoding-algorithms-ex-4"></a>

Show the locator system uses no syndrome beyond $S_{2t}$.

<details>
<summary>Hint 1</summary>

Its largest index is $2v$.

</details>
<details>
<summary>Hint 2</summary>

Use the promised bound $v\le t$.

</details>
<details>
<summary>Solution</summary>

The equations run from $j=1$ to $v$ and their leading term is $S_{j+v}$, at most $S_{2v}$. Since $v\le t$, all required syndromes are among the supplied first $2t$. The proof does not assume unavailable future data.

</details>

### Exercise 7.5
<a id="decoding-algorithms-ex-5"></a>

Why do locator roots correspond to inverse positions?

<details>
<summary>Hint 1</summary>

Each factor is $1-X_\ell z$.

</details>
<details>
<summary>Hint 2</summary>

Solve that factor’s zero equation.

</details>
<details>
<summary>Solution</summary>

The root is $z=X_\ell^{-1}$, so one tests $\Lambda(\alpha^{-i})$. Testing the positive exponent instead locates a different convention unless all later formulas are changed consistently. This is a representational issue with mathematical consequences.

</details>

### Exercise 7.6
<a id="decoding-algorithms-ex-6"></a>

Prove the magnitude system is invertible.

<details>
<summary>Hint 1</summary>

Factor one locator from each column.

</details>
<details>
<summary>Hint 2</summary>

The remaining matrix is square Vandermonde.

</details>
<details>
<summary>Solution</summary>

The matrix with entries $X_\ell^j$ for $j=1,\ldots,v$ equals the exponents-zero-through-$v-1$ Vandermonde times $\operatorname{diag}(X_\ell)$. Distinct locators and nonzero diagonal entries make both factors invertible.

</details>

### Exercise 7.7
<a id="decoding-algorithms-ex-7"></a>

Does a returned nearby codeword certify the true channel error count?

<details>
<summary>Hint 1</summary>

The transmitted word is unknown.

</details>
<details>
<summary>Hint 2</summary>

Beyond the radius another codeword can be nearer.

</details>
<details>
<summary>Solution</summary>

No. It certifies only that a codeword lies within the checked radius of the received word. If the actual channel introduced more errors, the decoder can miscorrect to that codeword. The success theorem remains conditional on the true error budget.

</details>

### Exercise 7.8
<a id="decoding-algorithms-ex-8"></a>

Why check the full selected code rather than only the first syndrome block?

<details>
<summary>Hint 1</summary>

The selected code might impose extra root constraints.

</details>
<details>
<summary>Hint 2</summary>

The first roots define a possible supercode.

</details>
<details>
<summary>Solution</summary>

Vanishing the first $2t$ root syndromes ensures membership only in the code generated by those minimal polynomials. A stronger subcode can require more zeros. Its complete generator divisibility or parity checks must therefore be used for membership.

</details>

### Exercise 7.9
<a id="decoding-algorithms-ex-9"></a>

Prove uniqueness in the erasure-assignment reduction.

<details>
<summary>Hint 1</summary>

Compare two retained candidates.

</details>
<details>
<summary>Hint 2</summary>

Their distance is at most $2t+e$.

</details>
<details>
<summary>Solution</summary>

Outside erasures, each candidate disagrees with the observation in at most $t$ positions, so they differ there in at most $2t$ positions. They can also differ at all $e$ erased positions. The total remains below $d$, forcing equality. The actual assignment guarantees existence under the hypothesis.

</details>

### Exercise 7.10
<a id="decoding-algorithms-ex-10"></a>

When is nearest Hamming decoding maximum likelihood?

<details>
<summary>Hint 1</summary>

Compare likelihoods under a symmetric memoryless channel.

</details>
<details>
<summary>Hint 2</summary>

The crossover must make lower error weight more likely.

</details>
<details>
<summary>Solution</summary>

For a BSC with $0<p<1/2$, likelihood is $p^w(1-p)^{n-w}$ and decreases with distance. Under a different channel, coordinate reliabilities or dependence can change the ranking. Nonuniform message priors also change the maximum a posteriori objective.

</details>

## Summary

An explicit Hankel-rank, locator-system, root-search and magnitude-solve decoder corrects every promised BCH error pattern. Each step has a finite-field proof and polynomial operation bound. Failure rules, erasures, soft likelihoods and beyond-radius behaviour remain part of the declared decoding specification.
