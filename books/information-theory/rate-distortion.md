
# Rate-distortion

Preparation is mutual information, convexity, finite types and iid frequency laws. Source and reproduction alphabets are finite; distortion is nonnegative and bounded, and the criterion is expected average distortion.

## Reconstruction with an explicit distortion criterion

Lossy coding permits an approximation rather than exact block recovery. Let an iid source have law $P$ on a finite alphabet $\mathcal X$, let reproductions lie in a finite alphabet $\widehat{\mathcal X}$, and fix a distortion function $0\le d(x,\hat x)\le d_{\max}<\infty$.

A block encoder sends one of $M_n$ indices and a decoder reconstructs $\widehat X^n$. Its expected per-symbol distortion is
$$
D_n=\frac1n\sum_{i=1}^nE\,d(X_i,\widehat X_i).
$$
The criterion averages over both source outcomes and positions. It is not a worst-case distortion guarantee, nor is it a block-error criterion.

Define
$$
R(D)=\min_{V:\ E_{PV}d(X,\widehat X)\le D}I_{PV}(X;\widehat X),
$$
where $V(\hat x\mid x)$ ranges over stochastic reproduction channels. If the feasible set is empty, set $R(D)=+\infty$. On finite alphabets a nonempty feasible set is compact and mutual information is continuous, so the minimum is attained.

The smallest feasible distortion is $D_{\min}=\sum_xp_x\min_{\hat x}d(x,\hat x)$. A constant reconstruction has distortion at least $D_0=\min_{\hat x}\sum_xp_xd(x,\hat x)$. Hence $R(D)=0$ for $D\ge D_0$. Randomising a source-independent reconstruction cannot improve on the best constant, because its expected distortion is a convex combination of constant distortions.

## Monotonicity and convexity

Allowing greater distortion enlarges the feasible set, so $R(D)$ is nonincreasing. It is also convex.

To prove convexity, choose reproduction channels $V_1,V_2$ with distortions at most $D_1,D_2$ and informations $R(D_1),R(D_2)$. Their mixture $V_\lambda=\lambda V_1+(1-\lambda)V_2$ has distortion at most $\lambda D_1+(1-\lambda)D_2$. Joint convexity of divergence, applied to the mixed joint laws and their mixed products with fixed $P_X$, gives
$$
I(P,V_\lambda)\le\lambda I(P,V_1)+(1-\lambda)I(P,V_2).
$$
Minimising at the mixed distortion proves the convexity inequality.

Operationally, time-sharing between two long block codes gives the same convex tradeoff up to framing overhead. The analytic proof is useful because it concerns the single-letter optimisation before any code has been constructed.

The reproduction channel in this definition is a *test channel*, an auxiliary joint law used to characterise a limit. The actual encoder sends a finite index and need not generate each reconstructed symbol independently using $V$.

## The rate-distortion theorem

**Theorem 14.1.** Under these finite iid and bounded-distortion assumptions, every block code satisfies
$$
\frac1n\log_2M_n\ge R(D_n).
$$
For each feasible $D$ and every $R>R(D)$, there are deterministic block codes of asymptotic rate at most $R$ with $\limsup_nD_n\le D$.

The first statement is a finite-block converse. The second is an asymptotic existence result. It does not assert a practical algorithm, a worst-case distortion bound, or exact equality at a particular short block length.

## Converse by entropy and convexity

Let $J$ be the transmitted index. Because the decoder reconstructs from $J$,
$$
I(X^n;\widehat X^n)\le H(J)\le\log_2M_n.
$$
Independence of source coordinates and conditional-entropy subadditivity imply
$$
\begin{aligned}
I(X^n;\widehat X^n)
&=nH(P)-H(X^n\mid\widehat X^n)\\
&\ge\sum_i[H(X_i)-H(X_i\mid\widehat X_i)]\\
&=\sum_iI(X_i;\widehat X_i).
\end{aligned}
$$
For each coordinate, its actual joint law is a feasible test channel at distortion $D_i=Ed(X_i,\widehat X_i)$, so its information is at least $R(D_i)$. Convexity gives $\sum_iR(D_i)\ge nR(\sum_iD_i/n)=nR(D_n)$. Combining proves the converse.

Source independence is used when replacing block entropy by the sum of marginal entropies. A source with memory needs a different rate-distortion formulation; one cannot keep the same single-letter proof while ignoring its dependence.

## A counting lemma for achievability

We need a lower bound on how often a random reconstruction matches a desired empirical joint law. First, for a type with counts $(k_1,\ldots,k_b)$ summing to $m$, its class size satisfies
$$
|\mathcal T|\ge(m+1)^{-(b-1)}2^{mH(k/m)}.
$$
Here is an elementary justification. Under the empirical product law, the probability of exactly those counts can be factored into $b-1$ successive binomial probabilities: choose the first count among $m$ positions, then the second among the remaining positions, and so on, using the corresponding empirical conditional proportions.

In each binomial factor, the requested count is an integer mean and therefore a mode. The ratio of consecutive binomial probabilities verifies this: for parameter $k/s$, the probability increases up to $k$ and decreases after $k$, with possible adjacent ties only at a boundary convention. A modal probability among at most $s+1\le m+1$ outcomes is at least $1/(m+1)$. Thus the product is at least $(m+1)^{-(b-1)}$.

Every sequence of the type has empirical-product probability $2^{-mH(k/m)}$. Dividing the type probability by that value proves the class-size bound. Degenerate counts give binomial probability one and obey the same inequality.

For conditional types, apply this bound independently inside the positions carrying each source symbol. If $S(x,\hat x)$ is an empirical joint table with source marginal $S_X$, then the number of reconstruction blocks with that table, for a fixed source block, is at least
$$
(n+1)^{-|\mathcal X|(|\widehat{\mathcal X}|-1)}
2^{nH_S(\widehat X\mid X)}.
$$
The polynomial factor will be negligible beside an exponential codebook size.

## Random reconstruction codebooks

Choose a feasible test channel $V$ with $I(P,V)<R$, and let $r$ be its reproduction marginal. Delete reproduction symbols with $r(\hat x)=0$; they are never needed. Independently sample $M_n=\lceil2^{nR}\rceil$ reproduction blocks from $r^n$.

For a source block whose empirical law is close to $P$, choose conditional integer counts approximating $n_xV(\hat x\mid x)$, preserving each row sum $n_x$. Rounding down and distributing the remaining units makes every cell discrepancy at most one. Source symbols with $p_x=0$ never occur. The resulting empirical joint table $S$ is therefore uniformly close to $PV$ when the source type is close and $n$ is large.

For a fixed such source block, the probability that one independent reproduction block has this conditional type is at least
$$
(n+1)^{-|\mathcal X|(|\widehat{\mathcal X}|-1)}
2^{-n[I_S(X;\widehat X)+D(S_{\widehat X}\Vert r)]}.
$$
Indeed multiply the conditional-type count by the common $r^n$ probability of each candidate, which is $2^{-n[H(S_{\widehat X})+D(S_{\widehat X}\Vert r)]}$. Subtracting conditional entropy leaves mutual information.

By finite-dimensional continuity on the retained positive support of $r$, the exponent is arbitrarily close to $I(P,V)$. Polynomial overhead can be absorbed into a small exponential slack. Thus for any small $\eta>0$ and sufficiently close source type, the single-candidate success probability is at least $2^{-n(I(P,V)+\eta)}$ for large $n$.

## Covering and distortion control

The chance that none of the independent codebook candidates matches is at most
$$
(1-s_n)^{M_n}\le\exp(-M_ns_n).
$$
Choose $\eta$ with $I(P,V)+\eta<R$. The right side tends to zero faster than an ordinary exponential. Source types outside the chosen neighbourhood have probability tending to zero by the finite iid frequency law.

The encoder sends the first matching reconstruction index, or an arbitrary default index if none matches. Matching empirical tables have average distortion close to $E_{PV}d\le D$. Failed or atypical blocks have distortion at most $d_{\max}$, so their contribution vanishes in expectation.

Averaging over random codebooks gives a deterministic codebook with expected distortion at most $D+\varepsilon+o(1)$ for any chosen positive tolerance $\varepsilon$, while rate is $R+o(1)$. Choose successively smaller tolerances and increasing block-length thresholds, using a diagonal sequence, to obtain $\limsup D_n\le D$ at that rate. This completes achievability, including a justification of the covering probability rather than an unsupported appeal to “many typical codewords.”

The construction can be computationally expensive: the encoder may search an exponential codebook. The theorem identifies the information limit; vector quantisers, transform codes and structured quantisation address tractable designs.

## A fair binary source with Hamming distortion

Let $X$ be fair and let $d(x,\hat x)=1_{\{x\ne\hat x\}}$. For any test channel with error probability $e$, define $E=X\oplus\widehat X$. Given $\widehat X$, the error bit determines $X$, hence
$$
H(X\mid\widehat X)=H(E\mid\widehat X)\le H(E)=h_2(e).
$$
For $0\le D\le1/2$, every feasible $e\le D$ gives
$$
I(X;\widehat X)\ge1-h_2(e)\ge1-h_2(D).
$$
The second inequality uses monotonicity of binary entropy on that interval.

Choose $\widehat X=X\oplus E$ with independent Bernoulli$(D)$ error. The output is fair, the distortion is $D$, and its information is $1-h_2(D)$, attaining the bound. Thus
$$
R(D)=
\begin{cases}
1-h_2(D),&0\le D\le1/2,\\
0,&D\ge1/2.
\end{cases}
$$
At distortion one-half, a constant reconstruction already suffices. The positive branch must not be extended beyond one-half, where binary entropy decreases and would incorrectly predict a rising minimum rate.

## Choosing a distortion is choosing a task

Squared error, perceptual similarity and a weighted classification loss describe different reconstruction goals. A low rate at a generous or poorly chosen distortion level is not a universal statement of fidelity. The distortion must be declared before interpreting the rate.

The finite-alphabet proof also relies on bounded distortion to control rare covering failures. Continuous sources and unbounded squared error require quantisation, moment conditions and additional limiting arguments. The famous Gaussian squared-error formula is therefore a continuation, rather than a result proved by merely replacing finite sums with integrals here.

## The exact zero-rate threshold on finite alphabets

The earlier constant-reconstruction argument gave $R(D)=0$ whenever $D\ge D_0$. The converse also holds. If $R(D)=0$, compactness supplies an attaining test channel with zero mutual information. Its output is independent of the source. Its expected distortion is therefore a convex combination, over reconstruction symbols, of the losses of constant reconstructions. It cannot be below their minimum $D_0$.

Thus on the stated finite alphabets, zero rate is feasible exactly at distortion budgets at least $D_0$. This argument uses attainment. If one changed to a noncompact reproduction space, a sequence of nearly independent channels with ever-changing reproductions could require additional care; an unattained infimum cannot be treated as a minimiser.

The threshold is an especially useful interpretation check: it identifies what the task permits when the decoder receives no source-dependent message at all.

## Worked example 14.1: Zero distortion for a fair bit

At $D=0$, the binary formula gives $R(0)=1$. Exact symbol reconstruction in the expected-distortion limit requires one bit per source bit asymptotically. For a finite block, zero expected Hamming distortion already means every positive-probability block is reconstructed exactly, because the distortion is nonnegative. The asymptotic theorem also allows small nonzero distortions tending to zero.

## Worked example 14.2: A permissible quarter of errors

For a fair binary source and $D=1/4$, the limiting rate is $1-h_2(1/4)$. The achieving test channel flips each bit with probability one-quarter, but an actual rate-distortion code sends an index into a reconstruction codebook. The auxiliary independent flips describe an optimal joint law; they are not themselves a compression algorithm, since sending a separately flipped length-$n$ bit string would still use $n$ raw bits.

## Worked example 14.3: Zero-rate reconstruction with unequal costs

Let $P(X=1)=1/10$, and charge loss one for missing a one and loss two for falsely reporting one on a zero. Constant zero has expected distortion $1/10$, while constant one has expected distortion $18/10$. Therefore $R(D)=0$ for all $D\ge1/10$. Randomising independently between the two constants cannot do better than $1/10$, because its expected loss is their convex combination. The relevant zero-rate threshold is task-specific, not necessarily one-half.

## Side information known at both ends

Suppose iid pairs $(X,Z)$ are generated on finite alphabets and both encoder and decoder know the entire side-information block. The reconstruction target remains $X$, and distortion is still bounded. Conditional source laws can have different useful rate-distortion allocations.

For each positive-probability side-information value, define the ordinary rate-distortion function of that conditional source. Allocate a distortion budget to each stratum, requiring their probability-weighted average not to exceed the overall budget. Minimise the corresponding weighted sum of conditional rate-distortion values.

This equals the single-letter minimum of conditional mutual information over reconstruction channels allowed to depend on both source and side information. To prove it, condition any such channel on the side-information value; its information and distortion decompose into the stated weighted sums. Conversely, combine attaining conditional channels at any feasible allocation into one joint channel. Finite compactness supplies the required minima.

The coding converse follows the earlier argument with the side-information block conditioned throughout. Conditional iid factorisation makes source block entropy the sum of coordinate conditional entropies. Conditional subadditivity and dropping unnecessary conditioning then bound block information below by the sum of coordinate conditional informations. The index entropy remains at most its message logarithm, since shared side information does not enlarge the index alphabet.

For achievability, both parties can group positions by their already shared side-information values. Their group sizes are known without another header. On typical side-information profiles, each positive-probability group grows proportionally to block length. Apply the proved finite-source distortion code separately within each group and send the tuple of indices.

The sum of the conditional group message logarithms is close to block length times their probability-weighted rate. A strict rate gap absorbs rounding and typical profile fluctuations. On atypical profiles use a fixed default reconstruction; bounded distortion makes their vanishing probability contribute vanishing expected loss. The finite number of strata lets all conditional code remainders be controlled together.

Thus shared side information changes the operational rate to the conditional allocation problem. If it already determines the source, zero rate achieves zero distortion. If it is independent, it cannot create source information, though an allocation can still express a time-sharing choice.

Only the decoder knowing the side information is a different problem: the sender cannot group or encode using labels it has not observed. The construction just proved therefore does not establish the decoder-only side-information theorem. Keeping that resource distinction explicit prevents a plausible conditional formula from being applied to the wrong communication task.

## Random reconstruction can improve the single-letter tradeoff

For a fair binary source with Hamming distortion, a binary symmetric reconstruction channel of crossover probability D produces mutual information one minus binary entropy of D, for D between zero and one half. A deterministic reconstruction rule on a single bit has only four possibilities: preserve it, flip it, or output one of the two constants. Their distortion-information pairs are respectively zero and one, one and one, or one half and zero.

Time-sharing between preservation and a constant yields the straight line one minus twice D. Strict concavity of binary entropy gives a smaller information value for the stochastic symmetric reconstruction at interior D. Random test channels therefore are not a dispensable embellishment in the single-letter minimization. They describe conditional empirical behaviour that a long deterministic block code can approximate; the operational theorem does not require a decoder to toss an independent coin for each received bit. This distinction links the probabilistic optimisation to the deterministic codebook existence construction.

## Exercises

### Exercise 14.1
<a id="rate-distortion-ex-1"></a>

Why is the feasible test-channel set compact?

<details>
<summary>Hint 1</summary>

It is a finite product of probability simplexes.

</details>
<details>
<summary>Hint 2</summary>

The distortion condition is a closed linear inequality.

</details>
<details>
<summary>Solution</summary>

All conditional probability entries lie in a bounded finite-dimensional set, row sums equal one and entries are nonnegative. These conditions are closed. Intersecting with the closed distortion half-space preserves compactness, so continuous mutual information attains its minimum whenever feasible.

</details>

### Exercise 14.2
<a id="rate-distortion-ex-2"></a>

Prove monotonicity of the rate-distortion function.

<details>
<summary>Hint 1</summary>

Compare feasible sets at two distortion budgets.

</details>
<details>
<summary>Hint 2</summary>

A larger set cannot have a larger minimum.

</details>
<details>
<summary>Solution</summary>

If $D_1\le D_2$, every channel feasible at $D_1$ is feasible at $D_2$. Therefore $R(D_2)\le R(D_1)$. The direction follows from minimisation, independently of convexity.

</details>

### Exercise 14.3
<a id="rate-distortion-ex-3"></a>

Where does source independence enter the converse?

<details>
<summary>Hint 1</summary>

Inspect block entropy.

</details>
<details>
<summary>Hint 2</summary>

The conditional-entropy inequality alone is more general.

</details>
<details>
<summary>Solution</summary>

The identity $H(X^n)=\sum_iH(X_i)=nH(P)$ uses iid source coordinates. Conditional subadditivity then lower-bounds block mutual information by the sum of coordinate informations. Without independence that lower bound need not hold in the same form.

</details>

### Exercise 14.4
<a id="rate-distortion-ex-4"></a>

Why is a bounded distortion assumption useful in random covering?

<details>
<summary>Hint 1</summary>

Some blocks or codebooks fail to match.

</details>
<details>
<summary>Hint 2</summary>

Their small probability must control their expected cost.

</details>
<details>
<summary>Solution</summary>

On failed or atypical blocks, distortion is at most $d_{\max}$. Their total expected contribution is therefore at most $d_{\max}$ times their failure probability, which vanishes. For unbounded distortion, small probability alone cannot exclude a large or infinite expected tail cost.

</details>

### Exercise 14.5
<a id="rate-distortion-ex-5"></a>

Explain the distinction between a test channel and the actual encoder.

<details>
<summary>Hint 1</summary>

One is an auxiliary single-letter joint law.

</details>
<details>
<summary>Hint 2</summary>

The other sends a finite block index.

</details>
<details>
<summary>Solution</summary>

The test channel specifies a joint distribution achieving the information optimisation. Random covering builds a finite codebook whose selected reconstructions approximate that law empirically. It need not generate each reconstruction independently from the test channel at transmission time.

</details>

### Exercise 14.6
<a id="rate-distortion-ex-6"></a>

Why is the type-class lower bound polynomially sufficient?

<details>
<summary>Hint 1</summary>

Codebook size is exponential in $n$.

</details>
<details>
<summary>Hint 2</summary>

A fixed power of $n+1$ has vanishing log rate.

</details>
<details>
<summary>Solution</summary>

The polynomial factor contributes only a multiple of $\log_2(n+1)/n$ to the exponent per symbol. Any fixed positive gap between code rate and test-channel information eventually dominates it, making the no-match probability vanish.

</details>

### Exercise 14.7
<a id="rate-distortion-ex-7"></a>

Find the fair-bit rate-distortion value at distortion one-half.

<details>
<summary>Hint 1</summary>

A constant reconstruction is feasible.

</details>
<details>
<summary>Hint 2</summary>

Information cannot be negative.

</details>
<details>
<summary>Solution</summary>

A constant output disagrees with the fair source half the time and requires no transmitted information. Thus $R(1/2)\le0$, while nonnegativity gives the reverse inequality. The value is zero.

</details>

### Exercise 14.8
<a id="rate-distortion-ex-8"></a>

Why is the fair-bit positive formula restricted to distortion at most one-half?

<details>
<summary>Hint 1</summary>

Binary entropy is increasing only on that half interval.

</details>
<details>
<summary>Hint 2</summary>

Beyond it the constant reconstruction remains feasible.

</details>
<details>
<summary>Solution</summary>

The lower-bound step $h_2(e)\le h_2(D)$ uses $e\le D\le1/2$. For larger budgets, one may retain distortion one-half with zero rate. Extending $1-h_2(D)$ beyond one-half would violate monotonicity.

</details>

### Exercise 14.9
<a id="rate-distortion-ex-9"></a>

How does the codebook failure bound use independence?

<details>
<summary>Hint 1</summary>

Each candidate independently matches with probability at least $s_n$.

</details>
<details>
<summary>Hint 2</summary>

Multiply failure probabilities.

</details>
<details>
<summary>Solution</summary>

For a fixed source block, independently sampled candidates all fail with probability at most $(1-s_n)^{M_n}$. The inequality $1-u\le e^{-u}$ turns this into $\exp(-M_ns_n)$. Dependence among arbitrary candidate blocks would not justify that product.

</details>

### Exercise 14.10
<a id="rate-distortion-ex-10"></a>

Why does a different distortion function change the operational question?

<details>
<summary>Hint 1</summary>

It changes what counts as an acceptable reconstruction.

</details>
<details>
<summary>Hint 2</summary>

Compare rare-event classification with ordinary Hamming loss.

</details>
<details>
<summary>Solution</summary>

A reconstruction that cheaply sacrifices a rare category under unweighted Hamming loss can be costly when that category has a large penalty. The feasible test channels and their information minimum change. Rate-distortion is therefore a task-specific theorem, not a universal quality score.

</details>

## Summary

For a finite iid source and bounded distortion, a compact test-channel optimisation gives a convex nonincreasing rate-distortion function. Entropy bounds prove the converse; conditional-type counting and random covering prove achievability. The fair binary Hamming case is explicit, and the operational role of distortion is kept visible.
