var e=`---
parent_id: book-information-theory
chapter_id: applications-compression-inference-entropy
title: "Applications: Compression, Inference and Cryptographic Entropy"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Applications: Compression, Inference and Cryptographic Entropy {#section-1-applications-compression-inference-and-cryptographic-en}

Preparation is the complete preceding route, especially cross entropy, conditional coding, source-channel concatenation and bounded-loss bounds. All secrecy and guessing examples use finite classical variables with explicitly stated observer information.

<a id="section-3-begin-with-an-experiment-and-a-counted-resource"></a>
## Begin with an experiment and a counted resource {#section-5-begin-with-an-experiment-and-a-counted-resource}

An information quantity becomes useful when it is connected to a declared task. For compression, specify the source law, exact or approximate reconstruction, model knowledge and length criterion. For communication, specify a channel, input constraint, block length and error criterion. For inference, specify candidate laws, observations and a loss. For secrecy, specify what an observer knows and which guessing or indistinguishability requirement is intended.

The same number of “bits” can describe different resources. Shannon entropy is an average source uncertainty. A codeword length is an integer description cost under a format. Mutual information is an average dependence measure. Min-entropy is a one-guess unpredictability measure. Differential entropy depends on coordinate units. Treating them as interchangeable removes the hypotheses that made the preceding theorems true.

This final chapter develops three applications and three analytical projects. They are hand-derived model studies.

<a id="section-11-compression-with-a-mismatched-model"></a>
## Compression with a mismatched model {#section-13-compression-with-a-mismatched-model}

For a true law $P$ and a predictive law $Q$ positive on its support, expected log loss is
$$
H(P,Q)=H(P)+D(P\\Vert Q).
$$
An ideal arithmetic block code has expected payload below that cross entropy plus two bits. A Shannon prefix code has a related one-bit rounding overhead for its chosen block law.

If the model was fitted from the current message, its description is not free. A two-part code sends a model identifier or parameter description followed by a payload conditioned on that description. Its total is
$$
L(\\text{model})+L(\\text{data}\\mid\\text{model}).
$$
A model that memorises the data can make the second term tiny while making the first enormous. Only the complete decodable description supports a compression claim.

Shared preparation changes the accounting. A model distributed with a standard format can be amortised across many files. A private codebook known only to the sender cannot be treated as shared. The receiver’s available information, rather than the sender’s convenience, determines which costs may be omitted.

The count-and-index code made this principle concrete: the empirical law’s count header was transmitted, and the class index used that already decoded law. Its universal theorem followed from an explicit overhead bound, not from treating a fitted entropy estimate as an actual file length.

<a id="section-29-side-information-and-conditional-uncertainty"></a>
## Side information and conditional uncertainty {#section-31-side-information-and-conditional-uncertainty}

Suppose encoder and decoder both observe a finite variable $Y$ correlated with source $X$. Within each $y$ stratum, they can agree on a prefix code for $P_{X\\mid y}$. The entropy lower bound and Shannon construction give
$$
H(X\\mid Y)\\le E\\,L(X\\mid Y)<H(X\\mid Y)+1
$$
under the usual singleton/framing convention. For iid paired blocks, the rounding cost becomes less than one bit per block.

This is a conditional coding experiment in which *both* parties know the side information. If only the decoder knows it, a different theorem and construction are required. One cannot simply run a conditional encoder that needs a value unavailable at the sender.

Side information can also be an adversary’s observation. A long marginal entropy says little about secrecy if the observer already knows the source. If $E=X$, then $H(X\\mid E)=0$ even when $H(X)$ is very large. Security claims must account for the observer’s actual joint law.

<a id="section-41-inference-and-the-value-of-a-measurement"></a>
## Inference and the value of a measurement {#section-43-inference-and-the-value-of-a-measurement}

With a specified prior on a finite parameter $\\Theta$, $I(\\Theta;Y)$ equals expected posterior-to-prior divergence and the expected reduction in parameter entropy. It can rank experiments under logarithmic uncertainty loss.

Other decisions can rank them differently. A measurement that reduces average uncertainty about common categories may be less valuable than one that detects a rare high-cost category. An optimal expected action depends on posterior loss, not solely on posterior entropy.

Information can nevertheless support bounds. Fano limits identification of many separated candidate models when data information is small. Pinsker bounds event-probability and bounded-loss differences when a directed divergence is small. Fisher information controls local variance bounds under regularity and neighbourhood unbiasedness. Each bridge introduces its own hypotheses and criterion.

The logical pattern is therefore: define the experiment, compute or bound its information quantity, apply an operational or decision inequality, and state the resulting limitation. Skipping the bridge turns a useful summary number into an unsupported practical claim.

<a id="section-51-one-guess-unpredictability-and-min-entropy"></a>
## One-guess unpredictability and min-entropy {#section-53-one-guess-unpredictability-and-min-entropy}

For a finite random variable $X$, define
$$
H_\\infty(X)=-\\log_2\\max_xP(X=x).
$$
The best single guess succeeds with probability $2^{-H_\\infty(X)}$: choose a most probable value. Because every positive-mass outcome has surprise at least this minimum surprise,
$$
H(X)\\ge H_\\infty(X).
$$
A large Shannon entropy need not make the best guess hard. Put mass one-half on a distinguished symbol and spread the other half uniformly over $2^m$ other symbols. Shannon entropy is $1+m/2$ bits, while min-entropy is only one bit. Increasing $m$ makes the average uncertainty arbitrarily large without reducing the best-guess success below one-half.

For observed side information $E$, an appropriate average guessing probability is
$$
P_{\\rm guess}(X\\mid E)=\\sum_eP(E=e)\\max_xP(X=x\\mid E=e).
$$
Its negative base-two logarithm is one common classical conditional min-entropy convention. It is not generally the average of the conditional min-entropies, because taking a logarithm and averaging do not commute.

If $E=X$, conditional guessing probability is one. If $E$ is independent, it remains the original best-guess probability. These extreme cases are simple checks on whether a claimed randomness measure includes side information.

<a id="section-71-deterministic-processing-cannot-create-hidden-randomnes"></a>
## Deterministic processing cannot create hidden randomness {#section-73-deterministic-processing-cannot-create-hidden-randomnes}

For $Y=f(X)$, the probability of the image of a most likely $X$ value is at least that input mass. Therefore $\\max_yP(Y=y)\\ge\\max_xP(X=x)$ and
$$
H_\\infty(Y)\\le H_\\infty(X).
$$
Likewise finite Shannon entropy cannot increase under a deterministic function. A complicated hash or encoding function does not create entropy from a fixed source law.

Now let a public seed $S$ be independent of $X$ and set $Y=f_S(X)$. For every seed value the same maximum-mass argument applies, so
$$
P_{\\rm guess}(Y\\mid S)\\ge\\max_xP(X=x).
$$
The public seed does not increase conditional min-entropy beyond that of the input. Shannon entropy similarly satisfies $H(Y\\mid S)\\le H(X\\mid S)=H(X)$.

This does not say extraction of *fewer* nearly uniform bits is impossible. Randomness extraction can transform sufficient uncertain input into a shorter output with a useful distribution, under stated source and side-information assumptions. Its theorems require more than marginal Shannon entropy and are not being replaced by these elementary inequalities.

Private independent randomness is a real extra resource. If it is supplied to the processor, output entropy can grow because the input experiment is now the pair containing that randomness. Its secrecy and generation assumptions must then be counted.

<a id="section-89-perfect-secrecy-needs-key-uncertainty"></a>
## Perfect secrecy needs key uncertainty {#section-91-perfect-secrecy-needs-key-uncertainty}

Let a finite message $M$ be encrypted with an independent key $K$ into ciphertext $C$, with deterministic decryption satisfying $H(M\\mid C,K)=0$. Perfect secrecy means $M$ and $C$ are independent, equivalently $H(M\\mid C)=H(M)$.

Then
$$
\\begin{aligned}
H(M)
&=H(M\\mid C)-H(M\\mid C,K)\\\\
&=I(M;K\\mid C)
\\le H(K\\mid C)\\le H(K).
\\end{aligned}
$$
Thus perfect secrecy with exact decryption requires at least as much key entropy as message entropy. This is an information-theoretic necessary bound, not a claim that every key with that entropy produces a secure cipher.

For an $n$-bit message, a uniform independent $n$-bit key and ciphertext $C=M\\oplus K$ give the one-time pad. For every $m,c$, $P(C=c\\mid M=m)=2^{-n}$, independent of $m$. Decryption is XOR with the key. This proves perfect secrecy under the independence and one-time-use assumptions.

Reusing the key on two messages reveals $C_1\\oplus C_2=M_1\\oplus M_2$. Each individual ciphertext may remain uniform marginally, while the pair leaks a relation. Joint-law reasoning is therefore essential; marginal entropy alone misses the leakage.

Error correction can protect a ciphertext against random corruption but does not create secrecy. Conversely, perfect secrecy alone does not authenticate a ciphertext or guarantee robust decoding under noise. These are separate properties with separate mathematical definitions.

<a id="section-110-combining-the-shelf-s-routes"></a>
## Combining the shelf’s routes {#section-112-combining-the-shelf-s-routes}

The L3 probability book supplies models and concentration. Stochastic Processes supplies dependence and long-run occupation. Statistical Inference supplies decision criteria. The present text links them through entropy, divergence and operational limits.

The nine Unhurried information articles are optional visual companions, retained as original resources rather than copied chapters. The book’s proofs and exercises supply a distinct sustained route. The L4 coding continuation develops algebraic constructions; cryptography uses the secrecy distinctions above without inheriting a promise that entropy alone ensures computational security.

<a id="section-116-worked-example-16-1-a-complete-finite-file-budget"></a>
## Worked example 16.1: A complete finite-file budget {#section-118-worked-example-16-1-a-complete-finite-file-budget}

Take a four-symbol length-1000 block with counts $(500,250,250,0)$. Its empirical entropy is $3/2$ bits per symbol. The simple universal type header uses four ten-bit counts, and the class index uses at most 1501 bits. Total length is at most 1541 bits, compared with 2000 bits for a fixed two-bit symbol format. This is a bound for the declared count code and known block length, not a measured compressor output. An external length header would add its stated cost.

<a id="section-120-worked-example-16-2-large-entropy-with-an-easy-guess"></a>
## Worked example 16.2: Large entropy with an easy guess {#section-122-worked-example-16-2-large-entropy-with-an-easy-guess}

Put probability one-half on symbol zero and distribute the remainder uniformly over 1024 other symbols. Each rare symbol has probability $1/2048$. Shannon entropy is $(1/2)\\cdot1+1024(1/2048)\\cdot11=6$ bits, while the best guess zero succeeds with probability one-half, giving min-entropy one. A claim of six uniformly unpredictable secret bits would therefore not follow from the Shannon entropy calculation.

<a id="section-124-worked-example-16-3-a-source-channel-budget"></a>
## Worked example 16.3: A source-channel budget {#section-126-worked-example-16-3-a-source-channel-budget}

Suppose a finite iid source has entropy $1/4$ bit per symbol and a memoryless channel has capacity $3/4$ bit per use. With one channel use for every two source symbols, required source information is $1/2$ bit per channel use, strictly below capacity. Choose source and channel rates with a positive intervening gap, then concatenate using a maximum-error channel code. If source entropy instead rose to one-half under the same use budget, the required rate would be one bit per channel use and reliable almost-lossless transmission would violate the channel bound.

<a id="section-128-exercises"></a>
## Exercises {#section-130-exercises}

<a id="section-130-exercise-16-1"></a>
### Exercise 16.1 {#section-132-exercise-16-1}
<a id="applications-compression-inference-entropy-ex-1"></a>

Why is payload length alone insufficient when the model is chosen from the data?

<details>
<summary>Hint 1</summary>

The receiver must identify the selected model.

</details>
<details>
<summary>Hint 2</summary>

Count its description as part of the message.

</details>
<details>
<summary>Solution</summary>

A fitted model can memorise the file and make its conditional payload arbitrarily short. Unless already shared, the model identifier or parameters must be sent. Only their combined decodable length can be compared with an uncompressed representation.

</details>

<a id="section-154-exercise-16-2"></a>
### Exercise 16.2 {#section-156-exercise-16-2}
<a id="applications-compression-inference-entropy-ex-2"></a>

Show marginal entropy does not imply secrecy against a fully informed observer.

<details>
<summary>Hint 1</summary>

Let the observer see the source itself.

</details>
<details>
<summary>Hint 2</summary>

Condition on that observation.

</details>
<details>
<summary>Solution</summary>

Take $E=X$. Regardless of the large value of $H(X)$, one has $H(X\\mid E)=0$ and $P_{\\rm guess}(X\\mid E)=1$. The observer has no uncertainty. A secrecy statement needs the joint source-observer law.

</details>

<a id="section-178-exercise-16-3"></a>
### Exercise 16.3 {#section-180-exercise-16-3}
<a id="applications-compression-inference-entropy-ex-3"></a>

Prove Shannon entropy is at least min-entropy.

<details>
<summary>Hint 1</summary>

Every realised surprise exceeds its smallest possible value.

</details>
<details>
<summary>Hint 2</summary>

Average that inequality.

</details>
<details>
<summary>Solution</summary>

If $p_{\\max}=\\max_xp_x$, then $-\\log_2p_x\\ge-\\log_2p_{\\max}$ on the positive support. Taking expectation gives $H(X)\\ge H_\\infty(X)$. Equality holds when all positive masses equal the maximum, that is, for a uniform law on its support.

</details>

<a id="section-202-exercise-16-4"></a>
### Exercise 16.4 {#section-204-exercise-16-4}
<a id="applications-compression-inference-entropy-ex-4"></a>

Can a deterministic hash increase min-entropy of a fixed input source?

<details>
<summary>Hint 1</summary>

Track the image of a most likely input.

</details>
<details>
<summary>Hint 2</summary>

Output probabilities sum masses in fibres.

</details>
<details>
<summary>Solution</summary>

No. The output value containing a most likely input has probability at least its mass. Therefore output maximum probability cannot be smaller than input maximum probability, and taking negative logarithms gives $H_\\infty(f(X))\\le H_\\infty(X)$.

</details>

<a id="section-226-exercise-16-5"></a>
### Exercise 16.5 {#section-228-exercise-16-5}
<a id="applications-compression-inference-entropy-ex-5"></a>

Why is a public random seed not automatically additional secret entropy?

<details>
<summary>Hint 1</summary>

The observer also sees the seed.

</details>
<details>
<summary>Hint 2</summary>

Condition on each seed value.

</details>
<details>
<summary>Solution</summary>

Conditional on a public seed, the output is a deterministic function of the original source. Averaging its best-guess success over seeds cannot beat the original maximum-mass bound. A private seed would be an additional secret resource and requires a different experiment.

</details>

<a id="section-250-exercise-16-6"></a>
### Exercise 16.6 {#section-252-exercise-16-6}
<a id="applications-compression-inference-entropy-ex-6"></a>

Derive the key-entropy bound for exact perfect secrecy.

<details>
<summary>Hint 1</summary>

Subtract the zero residual message entropy given key and ciphertext.

</details>
<details>
<summary>Hint 2</summary>

Bound conditional mutual information by key entropy.

</details>
<details>
<summary>Solution</summary>

Perfect secrecy gives $H(M\\mid C)=H(M)$ and exact decryption gives $H(M\\mid C,K)=0$. Their difference is $I(M;K\\mid C)\\le H(K\\mid C)\\le H(K)$. Hence $H(M)\\le H(K)$. The inequality is necessary, not sufficient for a secure encryption design.

</details>

<a id="section-274-exercise-16-7"></a>
### Exercise 16.7 {#section-276-exercise-16-7}
<a id="applications-compression-inference-entropy-ex-7"></a>

Prove one-time-pad ciphertext is independent of the message.

<details>
<summary>Hint 1</summary>

Condition on a fixed message.

</details>
<details>
<summary>Hint 2</summary>

There is exactly one key for each ciphertext.

</details>
<details>
<summary>Solution</summary>

With uniform independent key, $P(C=c\\mid M=m)=P(K=c\\oplus m)=2^{-n}$ for every message and ciphertext. The conditional output law does not depend on the message, proving independence. Decryption follows from XORing the same key again.

</details>

<a id="section-298-exercise-16-8"></a>
### Exercise 16.8 {#section-300-exercise-16-8}
<a id="applications-compression-inference-entropy-ex-8"></a>

What leaks when a one-time-pad key is reused?

<details>
<summary>Hint 1</summary>

XOR the two ciphertexts.

</details>
<details>
<summary>Hint 2</summary>

The key terms cancel.

</details>
<details>
<summary>Solution</summary>

$C_1\\oplus C_2=(M_1\\oplus K)\\oplus(M_2\\oplus K)=M_1\\oplus M_2$. Thus the observer learns a relation between the messages, and knowing one reveals the other. Marginal uniformity of each ciphertext does not prevent joint leakage.

</details>

<a id="section-322-exercise-16-9"></a>
### Exercise 16.9 {#section-324-exercise-16-9}
<a id="applications-compression-inference-entropy-ex-9"></a>

When both parties have side information, why is conditional entropy the relevant coding average?

<details>
<summary>Hint 1</summary>

Choose a code inside each side-information stratum.

</details>
<details>
<summary>Hint 2</summary>

Average its conditional expected length.

</details>
<details>
<summary>Solution</summary>

The finite prefix theorem applies separately to each known $Y=y$ law. Averaging its lower and Shannon upper bounds gives conditional expected length between $H(X\\mid Y)$ and $H(X\\mid Y)+1$. This particular construction needs the side information at both encoder and decoder.

</details>

<a id="section-346-exercise-16-10"></a>
### Exercise 16.10 {#section-348-exercise-16-10}
<a id="applications-compression-inference-entropy-ex-10"></a>

Why can two experiments with the same parameter information have different decision value?

<details>
<summary>Hint 1</summary>

Information uses logarithmic uncertainty.

</details>
<details>
<summary>Hint 2</summary>

A decision has its own loss and relevant mistakes.

</details>
<details>
<summary>Solution</summary>

Mutual information averages posterior entropy reduction. A decision may heavily penalise a rare category or care only about one component. Equal entropy reduction need not produce equal expected optimal loss reduction. A decision comparison must calculate posterior risks or invoke an appropriate bound.

</details>

<a id="section-370-analytical-projects"></a>
## Analytical projects {#section-372-analytical-projects}

<a id="section-372-project-16-a-compare-complete-descriptions"></a>
### Project 16.A: Compare complete descriptions {#section-374-project-16-a-compare-complete-descriptions}
<a id="applications-compression-inference-entropy-project-model-cost"></a>

A four-symbol length-$n$ source has empirical counts $(n/2,n/4,n/4,0)$, where $n$ is divisible by four. Compare a raw two-bit format, the count-and-index upper bound, and a fitted model costing 300 bits with arithmetic payload below $3n/2+2$. Include the common known-length convention and determine sufficient block lengths for each bound to beat raw storage.

<details><summary>Hint 1</summary>

Write every complete length before comparing. The count-header length is $4\\lceil\\log_2(n+1)\\rceil$.

</details>
<details><summary>Hint 2</summary>

A sufficient inequality can use an upper bound on the class-index length. Do not confuse it with the exact achieved length.

</details>
<details><summary>Worked solution</summary>

Raw length is $2n$. The count construction has length at most $3n/2+4\\lceil\\log_2(n+1)\\rceil+1$. Thus $n/2>4\\lceil\\log_2(n+1)\\rceil+1$ is sufficient for its bound to beat raw. At $n=128$, the right side is 33 and the left side is 64, so this gives a concrete sufficient example without claiming it is the smallest.

The fitted-model total is below $300+3n/2+2$, so $n/2\\ge302$ is sufficient, giving the divisible-by-four choice $n=604$. These comparisons are bounds, not measurements or proofs of globally optimal formats. If length itself is unknown, each format must gain a compatible framing description; one cannot charge it to only the unfavoured competitor.

</details>

<a id="section-395-project-16-b-prove-the-converse-for-a-source-channel-bu"></a>
### Project 16.B: Prove the converse for a source-channel budget {#section-397-project-16-b-prove-the-converse-for-a-source-channel-bu}
<a id="applications-compression-inference-entropy-project-separation"></a>

Send $k$ iid symbols of a finite source with entropy $H$ over $n$ uses of a finite memoryless channel with capacity $C$. Show that vanishing block reconstruction error requires $\\limsup kH/n\\le C$ when $k/n$ has a finite positive limit.

<details><summary>Hint 1</summary>

Apply the finite-message Fano argument to the source block, even though its distribution need not be uniform.

</details>
<details><summary>Hint 2</summary>

Bound its conditional entropy by $1+P_e k\\log_2|\\mathcal X|$, and its observation information by $nC$.

</details>
<details><summary>Worked solution</summary>

The source block entropy is $kH$. A reconstruction from channel output has block error $P_e$. The nonuniform version of the error-indicator proof gives $H(X^k\\mid Y^n)\\le1+P_e k\\log_2|\\mathcal X|$. Data processing through the channel and its block information bound give $I(X^k;Y^n)\\le nC$. Therefore $kH\\le nC+1+P_e k\\log_2|\\mathcal X|$. Divide by $n$ and use the assumed bounded ratio and vanishing error. This proves the necessary budget. The preceding chapter’s concatenation argument supplies achievability when the inequality has a strict gap.

</details>

<a id="section-416-project-16-c-separate-reliability-and-secrecy"></a>
### Project 16.C: Separate reliability and secrecy {#section-418-project-16-c-separate-reliability-and-secrecy}
<a id="applications-compression-inference-entropy-project-secrecy"></a>

A sender first one-time-pad encrypts an $m$-bit message using a uniform independent key, then applies a public injective error-correcting encoder. Prove that the uncorrupted coded ciphertext remains perfectly secret. Explain why using only the error-correcting encoder on the plaintext has no such guarantee.

<details><summary>Hint 1</summary>

The ciphertext is independent of the message before coding.

</details>
<details><summary>Hint 2</summary>

A public deterministic function of an independent variable remains independent; injectivity instead lets an observer reverse ordinary encoding.

</details>
<details><summary>Worked solution</summary>

Let $C=M\\oplus K$ and $Z=g(C)$ be the public codeword. For every $m,z$, the conditional law of $Z$ is obtained by applying the same $g$ to the uniform ciphertext law, so it does not depend on $m$. Hence $I(M;Z)=0$. Any further channel independent of the message conditional on $Z$ preserves that independence by data processing. The receiver still needs the secret key as well as reliable ciphertext recovery. If the sender merely transmits $g(M)$ and $g$ is public and injective, an observer with an uncorrupted word recovers $M$ exactly. Error protection supplied redundancy, not confidentiality. Neither construction by itself establishes authentication against malicious alteration.

</details>

<a id="section-437-summary"></a>
## Summary {#section-439-summary}

Applications need a declared source, observation, resource and criterion. Complete model costs support compression claims; conditional laws govern side information; decision inequalities connect information to inference. Min-entropy and perfect-secrecy arguments show why large marginal Shannon entropy alone is not a security guarantee.
`;export{e as default};