
# Gaussian Channels

Preparation is Gaussian distributions, differential entropy integrals, Chapter 10’s information-density proof and finite variance concentration. Noise variance is positive, inputs are independent of noise, and power is averaged over a uniform finite message codebook.

## A real-valued channel needs a resource constraint

Consider independent channel noise $Z_i\sim N(0,N)$ with $N>0$, and outputs $Y_i=X_i+Z_i$. The encoder chooses a real input block for each message before observing the noise. Without an input constraint, increasing signal amplitude makes arbitrarily many levels distinguishable, so there is no finite unconstrained capacity.

Here an $(n,M)$ code obeys the average-over-messages power condition
$$
\frac1{nM}\sum_{m=1}^M\sum_{i=1}^n x_i(m)^2\le P,
$$
with $P\ge0$. Messages are uniform, and error is averaged over them. This allows some codewords to have energy above $nP$, provided the codebook average remains within the budget.

A maximum-per-codeword energy condition, a peak-amplitude condition and an expected power constraint under a nonuniform source are different specifications. The theorem proved below uses exactly the displayed average codebook power condition and average error. It does not silently assert all stronger variants.

## Differential entropy and units

For a real random variable with density $f$, define differential entropy, when the integral is meaningful, by
$$
h(X)=-\int f(x)\log_2f(x)\,dx.
$$
A density can exceed one, so differential entropy can be negative. It also depends on the unit of measurement. If $a\ne0$, a change of variables gives
$$
h(aX+b)=h(X)+\log_2|a|.
$$
The translation disappears, while scale changes the density relative to the underlying length unit.

For a uniform variable on an interval of length $1/4$, differential entropy is $-2$ bits in that coordinate. This does not mean that a finite discrete description has negative length. Quantising the real variable into cells of width $\Delta$ introduces a discrete entropy roughly $h(X)+\log_2(1/\Delta)$ under suitable regularity; the resolution term cannot be omitted.

Mutual information is instead a divergence between probability measures. When suitable densities exist, invertible changes of coordinates contribute matching Jacobians in the numerator and denominator and cancel. Thus information between variables is invariant under invertible unit changes even though individual differential entropies shift.

## Gaussian entropy and its extremal property

For $G\sim N(\mu,v)$ with $v>0$,
$$
-\log_2g(G)=\tfrac12\log_2(2\pi v)+\frac{(G-\mu)^2}{2v\ln2}.
$$
Taking expectation gives
$$
h(G)=\tfrac12\log_2(2\pi e v).
$$
The $e$ factor appears from the expected quadratic term and does not change the base-two unit.

**Theorem 11.1 (maximum entropy at fixed variance).** Among densities with mean $\mu$ and variance $v$, Gaussian density has maximal differential entropy:
$$
h(X)\le\tfrac12\log_2(2\pi e v),
$$
with equality exactly for the matching Gaussian law.

**Proof.** Let $g$ be that Gaussian density. Its cross entropy under any such $f$ is
$$
-\int f\log_2g=\tfrac12\log_2(2\pi e v),
$$
because the quadratic expectation is the same. Integral Gibbs inequality, obtained by integrating $\ln u\le u-1$, gives $D(f\Vert g)\ge0$. Subtracting $h(f)$ from the finite cross entropy yields the inequality; if the divergence is infinite, $h(f)$ is interpreted as $-\infty$ where appropriate. Equality in Gibbs requires $f=g$ almost everywhere. ∎

The finite second moment gives a finite Gaussian cross entropy. It does not by itself forbid a density with extremely sharp spikes and differential entropy $-\infty$. The additive Gaussian channel smooths its output, ensuring the output entropy expressions used next are well behaved.

## Single-use information under a power budget

Let $X$ be any input independent of $Z$ with $EX^2\le P$. The output has variance at most $P+N$. Since its conditional law given $X=x$ is a translated Gaussian,
$$
h(Y\mid X)=h(Z)=\tfrac12\log_2(2\pi eN).
$$
The output density is a Gaussian mixture bounded above by $(2\pi N)^{-1/2}$ and has finite second moment. Its entropy is finite; the density bound controls the negative-entropy part and the Gaussian comparison controls the upper entropy. Hence the information identity is legitimate:
$$
I(X;Y)=h(Y)-h(Z)\le\tfrac12\log_2(1+P/N).
$$
The input need not have a density for this identity: the conditional output law has one, and information is defined by the joint experiment.

A zero-mean Gaussian input of variance $P$ makes $Y$ Gaussian of variance $P+N$ and attains the bound. Thus the single-letter information optimum is
$$
C(P,N)=\tfrac12\log_2(1+P/N)
$$
bits per real channel use. At $P=0$, the input is zero almost surely under the power constraint and information is zero.

## The block converse

For a code satisfying the stated average power condition, let $P_i=EX_i^2$, where expectation uses the uniform message. Then $\sum_iP_i\le nP$. Memoryless additive noise and entropy subadditivity give
$$
I(X^n;Y^n)\le\sum_i I(X_i;Y_i)
\le\frac12\sum_i\log_2(1+P_i/N).
$$
Concavity of logarithm yields
$$
I(X^n;Y^n)\le\frac n2\log_2\left(1+\frac{\sum_iP_i}{nN}\right)
\le nC(P,N).
$$
The coordinates can be correlated and can have different powers. Jensen’s inequality is what turns the average budget into the common-power upper bound.

Fano’s inequality applies to the finite message even though the observation is continuous. Its proof uses a finite error indicator and finite message entropy, not a finite output alphabet. Consequently
$$
(1-P_e)\frac{\log_2M}{n}\le C(P,N)+\frac1n.
$$
No rate strictly above $C(P,N)$ can have vanishing average error under this power condition.

## Achievability with a genuine finite-codebook constraint

Fix $P'<P$ and use iid $N(0,P')$ coordinates to sample every codeword independently. The induced output is iid Gaussian with variance $P'+N$. Information density is the log ratio of conditional and marginal output densities, and its per-coordinate value has a finite variance because it is a quadratic expression in Gaussian variables.

The weak law therefore gives concentration of normalised information density at $C(P',N)$. For an independent wrong candidate and output, the expectation of the likelihood-ratio exponential is one by integrating the conditional density. The threshold-decoding argument from Chapter 10 carries over with integrals replacing finite sums:
$$
E_{\rm codebook}P_e
\le P(\imath(X^n;Y^n)\le n(C(P',N)-\delta))
+M2^{-n(C(P',N)-\delta)}.
$$
For any $R<C(P',N)$, choose a positive gap $\delta$ and $M=\lfloor2^{nR}\rfloor$ so this expectation tends to zero.

But a randomly sampled Gaussian codebook does not automatically obey the deterministic power bound. Define its average energy
$$
A_n=\frac1{nM}\sum_{m,i}X_i(m)^2.
$$
There are $nM$ independent squared Gaussian terms, so $EA_n=P'$ and $\operatorname{Var}(A_n)=2P'^2/(nM)$. Chebyshev gives
$$
P(A_n>P)\le\frac{2P'^2}{nM(P-P')^2}\longrightarrow0.
$$

Write $e_n=E_{\rm codebook}P_e\to0$. If $e_n>0$, Markov bounds the probability that a sampled codebook has error exceeding $\sqrt{e_n}$ by $\sqrt{e_n}$. Together with the power-failure probability, this is eventually below one. Thus a deterministic codebook exists with both $A_n\le P$ and error at most $\sqrt{e_n}$. If $e_n=0$, error is zero for almost every sampled codebook and the same intersection argument is simpler.

Finally let $P'$ approach $P$ from below. Continuity of $C(P',N)$ makes every rate strictly below $C(P,N)$ achievable. This proves operational capacity for the average-power, average-error formulation, rather than merely evaluating a single-letter Gaussian integral.

## Scope of the Gaussian formula

The factor one-half belongs to one real scalar channel use. A complex channel contains two real dimensions and needs a stated variance convention. A continuous-time bandwidth formula additionally requires a sampling model and a noise spectral-density convention. Multiplying by a bandwidth without defining these quantities can introduce factors of two.

Signal-to-noise ratio is $P/N$ in the chosen per-use model. Scaling signal and noise together by a nonzero factor leaves this ratio and capacity unchanged. Scaling signal alone changes the allowed experiment and can increase capacity.

The theorem assumes Gaussian additive noise independent of the input and across uses. Among noises with a fixed variance, Gaussianity has important extremal properties, but the capacity of an arbitrary non-Gaussian channel cannot be obtained merely by inserting its noise variance into this formula.

The expected codebook constraint also differs from expurgation. Removing messages with large error might increase the average power of those retained. Therefore the earlier maximum-error upgrade cannot be copied without checking power again. The theorem here claims exactly the average-error result that has been proved.

## Density calculations remain model calculations

A physical measurement device has finite precision and may saturate. Its actual output law can be discrete or truncated rather than the ideal additive Gaussian law. The present theorem describes the declared mathematical model. Quantisation, clipping, synchronisation and channel estimation each add another transformation or unknown quantity requiring its own analysis.

None of these observations weakens the capacity theorem within its hypotheses. They locate the boundary between an exact mathematical result and the additional decisions needed to apply it.

## Parallel Gaussian coordinates and water allocation

For $d$ independent real Gaussian subchannels with noise variances $N_j>0$ and total power budget $\sum_jp_j\le P_{\rm total}$, the same converse and product Gaussian construction give a total information optimum
$$
\max_{p_j\ge0,\ \sum_jp_j\le P_{\rm total}}
\frac12\sum_{j=1}^d\log_2(1+p_j/N_j).
$$
The sum is measured per simultaneous use of all $d$ coordinates. It is not the per-coordinate rate unless divided by $d$.

For positive total power, choose $\lambda$ so that
$$
p_j^\star=(\lambda-N_j)_+,\qquad \sum_jp_j^\star=P_{\rm total}.
$$
Existence follows because the sum of positive parts is continuous, is zero below the smallest noise level, and grows without bound. To prove optimality, the derivative of the $j$th objective term is $1/[2\ln2(N_j+p_j)]$. At every active coordinate this equals $1/(2\lambda\ln2)$. At an inactive coordinate its derivative at zero is no greater than that value.

Concavity bounds each objective change by its supporting tangent at $p^\star$. Summing, the common active derivative times the total power change is nonpositive, while the inactive-coordinate derivatives can only reduce that upper bound. Hence no other feasible allocation improves the objective. This is the mathematical content of the usual water-filling picture.

A very noisy coordinate can receive zero power. Equal allocation is optimal only under the appropriate noise symmetry; Jensen’s equal-power conclusion for repeated copies of one channel should not be transferred to unequal channels without this optimisation.

## Worked example 11.1: One bit per real use

Set $P=3N$. Then $C=\tfrac12\log_2(1+3)=1$ bit per real channel use. This is a limiting reliable rate, not a claim that a two-level uncoded signal with those powers has zero error. For every rate strictly below one, the random-coding proof provides an asymptotic code sequence under the stated average-power criterion.

## Worked example 11.2: Changing units

Measure both input and output in units scaled by $a=10$. Powers become $100P$ and $100N$, so their ratio and capacity remain unchanged. Differential entropies of both output and noise rise by $\log_2 10$, which cancels from $I(X;Y)=h(Y)-h(Z)$. Reporting a differential entropy without its coordinate unit can therefore be misleading, while the information difference is invariant.

## Worked example 11.3: Uneven power allocation

For two uses with powers $0$ and $2P$, the single-use information upper bounds sum to $\tfrac12\log_2(1+2P/N)$. Equal allocation gives $\log_2(1+P/N)$, which is at least as large because $(1+P/N)^2\ge1+2P/N$. The average budget is the same. This hand comparison illustrates the Jensen step in the converse; no optimal code construction is inferred from the inequality alone.

## Fixed total energy cannot transmit unlimited information

Suppose an entire codebook has a fixed total average energy budget over its block, rather than a fixed power per coordinate. Its allowed average power is total energy divided by block length. The capacity upper bound then limits block information by block length times one-half the logarithm of one plus that ratio to the per-use noise variance.

The elementary inequality that the natural logarithm of one plus a nonnegative number is at most that number makes this information bound no larger than total energy divided by twice the noise variance and the natural-log conversion constant. It holds for every block length.

Thus adding more very low-power uses cannot make the information from a fixed finite energy budget grow without bound in this model. The increasing block length is being used to spread the same resource more thinly; it is not a source of free signal energy.

Combining with Fano’s inequality gives a direct message constraint: one minus error probability, multiplied by the message logarithm, is at most that energy-based information ceiling plus one bit. A fixed energy budget therefore cannot support arbitrarily many reliably distinguishable messages.

If message count grows and error tends to zero, divide the same inequality by the message logarithm. It gives the necessary asymptotic energy per message bit of at least twice the per-use noise variance times the natural logarithm of two. This is in the chapter’s real-scalar noise convention; changing to a spectral-density convention requires the corresponding conversion.

The bound is necessary. Its derivation does not establish a finite-energy coding construction attaining the limit, nor does it eliminate synchronisation, bandwidth or delay constraints absent from the model. In particular, sending one particular bit at a fixed finite energy is not the same asymptotic problem as letting the number of message bits grow.

The derivative of the Gaussian capacity formula gives the same local intuition: an extra unit of power has diminishing information return as existing power grows. Concavity therefore favours distributing a total budget across equal-noise coordinates, while different noise levels lead to the earlier water-allocation calculation.

These energy statements are useful because they retain the resource units explicitly. “More channel uses” and “more energy” are distinct changes, and a capacity formula alone does not decide which is available.

## A hard amplitude bound excludes the Gaussian equality case

The average-power converse applies to every input with finite second moment, including inputs constrained to a bounded amplitude. For positive permitted power, a bounded nondegenerate input cannot attain the equality case of the Gaussian entropy bound with full power. If its noisy output were Gaussian, division of its characteristic function by the nonvanishing Gaussian noise characteristic function would force the input itself to be Gaussian with the remaining variance. A nondegenerate Gaussian input is not bounded.

Thus the Gaussian average-power expression remains an upper bound under a hard amplitude constraint, but the Gaussian input used to attain the average-power formula is no longer feasible. This argument shows nonattainment by any particular bounded nondegenerate input; establishing a strict gap for the supremum over all amplitude-constrained laws additionally needs an existence or compactness argument. The distinction prevents an equality characterization from being mistaken for a complete capacity theorem under a different constraint. Zero power is the separate deterministic-input case with zero capacity.

## Exercises

### Exercise 11.1
<a id="gaussian-channels-ex-1"></a>

Find differential entropy of a uniform law on an interval of length eight.

<details>
<summary>Hint 1</summary>

Its density is constant on that interval.

</details>
<details>
<summary>Hint 2</summary>

Average its negative log density.

</details>
<details>
<summary>Solution</summary>

The density is $1/8$, so $h=3$ bits in the stated coordinate. Translation does not change it. Scaling the interval length by $a>0$ adds $\log_2a$, consistent with the change-of-variable formula.

</details>

### Exercise 11.2
<a id="gaussian-channels-ex-2"></a>

Why can differential entropy be negative?

<details>
<summary>Hint 1</summary>

A density is not a probability mass.

</details>
<details>
<summary>Hint 2</summary>

Consider an interval shorter than one coordinate unit.

</details>
<details>
<summary>Solution</summary>

Uniform density on an interval of length $1/4$ is four, so $h=-\log_2 4=-2$. This measures density relative to a coordinate unit, not a discrete description length. Discrete quantisation contributes a resolution-dependent term.

</details>

### Exercise 11.3
<a id="gaussian-channels-ex-3"></a>

Derive the entropy of a Gaussian from its log density.

<details>
<summary>Hint 1</summary>

The quadratic expectation equals its variance.

</details>
<details>
<summary>Hint 2</summary>

Keep the natural-log conversion factor.

</details>
<details>
<summary>Solution</summary>

For variance $v$, the expected negative log density is $\tfrac12\log_2(2\pi v)+1/(2\ln2)=\tfrac12\log_2(2\pi ev)$. The conversion is necessary because the exponential in the Gaussian density uses the natural base.

</details>

### Exercise 11.4
<a id="gaussian-channels-ex-4"></a>

Why does input variance alone not need to equal input second moment?

<details>
<summary>Hint 1</summary>

A nonzero mean consumes power.

</details>
<details>
<summary>Hint 2</summary>

Variance is second moment minus squared mean.

</details>
<details>
<summary>Solution</summary>

$\operatorname{Var}(X)=EX^2-(EX)^2\le EX^2\le P$. A deterministic mean shift carries no information through an additive channel but consumes second-moment power. The zero-mean Gaussian uses the budget entirely as variance.

</details>

### Exercise 11.5
<a id="gaussian-channels-ex-5"></a>

Explain the role of the slack power $P'<P$ in achievability.

<details>
<summary>Hint 1</summary>

A random codebook fluctuates around its mean energy.

</details>
<details>
<summary>Hint 2</summary>

A positive gap permits concentration below the allowed ceiling.

</details>
<details>
<summary>Solution</summary>

The strict gap makes Chebyshev bound the probability that average sampled energy exceeds $P$ by a term tending to zero. Sampling at exactly $P$ would not make that exceedance probability vanish by the same argument. Continuity later recovers all rates below the desired capacity.

</details>

### Exercise 11.6
<a id="gaussian-channels-ex-6"></a>

Why is Fano’s inequality still valid with real observations?

<details>
<summary>Hint 1</summary>

The uncertain message and error indicator remain finite.

</details>
<details>
<summary>Hint 2</summary>

The proof does not count output symbols.

</details>
<details>
<summary>Solution</summary>

Fano bounds conditional entropy of a finite message through a finite decoding error event. The observation may have any measurable alphabet provided an estimate is defined. Data processing and the finite-message entropy identity then combine with the continuous-channel information bound.

</details>

### Exercise 11.7
<a id="gaussian-channels-ex-7"></a>

Compute capacity at $P=N$.

<details>
<summary>Hint 1</summary>

The signal-to-noise ratio is one.

</details>
<details>
<summary>Hint 2</summary>

Substitute into the proved formula.

</details>
<details>
<summary>Solution</summary>

$C=\tfrac12\log_2 2=1/2$ bit per real use. Rates strictly below this are asymptotically achievable under the declared criterion; the boundary and finite-block error are not determined solely by this substitution.

</details>

### Exercise 11.8
<a id="gaussian-channels-ex-8"></a>

Does expurgating high-error messages automatically preserve average codebook power?

<details>
<summary>Hint 1</summary>

The removed messages may have low energy.

</details>
<details>
<summary>Hint 2</summary>

Recompute the average over the retained subset.

</details>
<details>
<summary>Solution</summary>

No. Removing low-energy messages can raise the remaining average above $P$. A maximum-error theorem under power constraints needs a construction or expurgation argument controlling both quantities. The average-error theorem here avoids making that unproved upgrade.

</details>

### Exercise 11.9
<a id="gaussian-channels-ex-9"></a>

What happens when $P=0$ under the finite-codebook constraint?

<details>
<summary>Hint 1</summary>

Every squared codeword coordinate is nonnegative.

</details>
<details>
<summary>Hint 2</summary>

Their average can be zero only if all are zero.

</details>
<details>
<summary>Solution</summary>

Every codeword is the all-zero block. Output law is independent of the message, so capacity is zero. Fano then excludes every positive reliable rate, agreeing with the formula at zero power.

</details>

### Exercise 11.10
<a id="gaussian-channels-ex-10"></a>

Why does knowing noise variance not generally identify a non-Gaussian channel’s capacity?

<details>
<summary>Hint 1</summary>

The transition density contains more than its second moment.

</details>
<details>
<summary>Hint 2</summary>

The achieving and extremal Gaussian steps used its full law.

</details>
<details>
<summary>Solution</summary>

Different noise distributions with the same variance can have different likelihood ratios and different mutual information for a given input. The proof used Gaussian entropy, independent additive structure and Gaussian-output achievability. Replacing only $N$ does not reproduce those steps for another noise law.

</details>

## Summary

Gaussian maximum entropy gives the AWGN information bound and block converse. Random Gaussian codebooks with slack power, together with a separate energy-concentration argument, prove achievability under average codebook power and average error. Differential entropy, units and stronger power/error variants remain distinct.
