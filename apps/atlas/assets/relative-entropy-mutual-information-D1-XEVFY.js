var e=`---
parent_id: book-information-theory
chapter_id: relative-entropy-mutual-information
title: "Relative Entropy and Mutual Information"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Relative Entropy and Mutual Information

Preparation is the preceding two chapters and the elementary logarithmic inequality. All laws in this chapter have finite alphabets; structural zeros are retained explicitly.

## Comparing two laws on the same alphabet

Let $P=(p_x)$ and $Q=(q_x)$ be probability laws on a common finite alphabet. The relative entropy, or Kullback–Leibler divergence, is
$$
D(P\\Vert Q)=\\sum_{x:p_x>0}p_x\\log_2\\frac{p_x}{q_x}.
$$
If any $p_x>0$ has $q_x=0$, the value is $+\\infty$. Terms with $p_x=0$ contribute zero, including cells where both laws vanish. The direction matters: $P$ is the law used to average, while $Q$ is the law against which its outcomes are compared.

When finite, divergence is an expected log likelihood ratio under $P$. An individual observed ratio can be smaller than one and contribute a negative number. The theorem below concerns the full expectation. Reversing the arguments changes both the logarithm and its averaging law, so divergence is generally asymmetric.

**Theorem 3.1 (Gibbs inequality).** $D(P\\Vert Q)\\ge0$, with equality exactly when $P=Q$.

**Proof.** The infinite case is immediate. Otherwise apply $\\ln u\\le u-1$ to $u=q_x/p_x$ on the positive support of $P$. This gives
$$
-(\\ln2)D(P\\Vert Q)
=\\sum_{p_x>0}p_x\\ln(q_x/p_x)
\\le\\sum_{p_x>0}q_x-1\\le0.
$$
For equality, every positive-support ratio must equal one because the logarithmic inequality is strict away from one. Moreover $Q$ can have no mass outside that support. These conditions are precisely $P=Q$. Conversely identical laws have divergence zero. ∎

This proof handles structural zeros rather than quietly assuming every coordinate is positive. If the reference model declares a genuinely possible event impossible, divergence is infinite; regularising a fitted model changes that reference law and therefore changes the comparison.

## Entropy, cross entropy and coding mismatch

Define the cross entropy
$$
H(P,Q)=E_P[-\\log_2q_X].
$$
It is infinite if $Q$ vanishes on positive $P$ mass. Otherwise direct expansion gives
$$
H(P,Q)=H(P)+D(P\\Vert Q).
$$
A model tuned to $Q$ therefore pays an average logarithmic penalty $D(P\\Vert Q)$ when reality follows $P$. In a later chapter, ideal code lengths will turn this into a statement about expected descriptions, with integer rounding and model-description costs explicitly included.

Let $U$ be uniform on an alphabet of size $m$. Then
$$
D(P\\Vert U)=\\log_2m-H(P).
$$
The maximum-entropy inequality follows immediately, with equality only at the uniform law. The alphabet here is the chosen ambient one; adding impossible symbols changes $U$ and changes this particular divergence calculation.

Divergence is not a distance metric. It need not be symmetric, and no triangle inequality is asserted. Its usefulness comes from its connection to likelihood, conditional experiments and the exponential probability of misleading empirical distributions. A small reference probability can heavily penalise an otherwise rare event; that is a modelling consequence, not a numerical defect in the definition.

For iid observations, log likelihood ratios add. If $P^n$ and $Q^n$ are product laws with $P$ supported inside $Q$, then
$$
D(P^n\\Vert Q^n)=nD(P\\Vert Q).
$$
Indeed the product likelihood ratio is the product of the coordinate ratios; its logarithm is their sum, whose expectation is additive. Independence is needed for these product laws. Arbitrary dependent observations do not automatically supply $n$ times the one-coordinate divergence.

## Mutual information as a divergence

For finite $X,Y$, define
$$
I(X;Y)=D(P_{XY}\\Vert P_XP_Y).
$$
A positive joint cell always has both marginals positive, so this divergence is finite. Its explicit formula is
$$
I(X;Y)=\\sum_{x,y:p(x,y)>0}p(x,y)
\\log_2\\frac{p(x,y)}{p_X(x)p_Y(y)}.
$$
The definition is symmetric in $X,Y$. Gibbs inequality proves nonnegativity and shows that $I(X;Y)=0$ exactly when the joint law is the product of its marginals, that is, exactly when the variables are independent.

Expanding the logarithm yields the equivalent identities
$$
I(X;Y)=H(X)+H(Y)-H(X,Y)
=H(X)-H(X\\mid Y)=H(Y)-H(Y\\mid X).
$$
Mutual information is thus the average reduction in finite uncertainty from an observation. It is bounded above by either marginal entropy. A variable can share all of its uncertainty with another variable while that second variable contains additional independent components.

One can also average divergences of conditional laws:
$$
I(X;Y)=\\sum_{y:p_Y(y)>0}p_Y(y)
D(P_{X\\mid y}\\Vert P_X).
$$
This expression measures how far the posterior source law moves from its prior law on average. For a specific observation, the reduction $H(X)-H(X\\mid Y=y)$ can be negative, while the conditional-law divergence in this formula is always nonnegative. They agree after averaging, not necessarily observation by observation.

Mutual information depends on the entire joint distribution. A correlation coefficient cannot replace it. Nonlinear deterministic relationships may have zero linear correlation but positive information. Conversely, changing units through an invertible relabelling leaves mutual information unchanged because the same joint masses are simply renamed.

## Conditional information and chain decompositions

Define
$$
I(X;Y\\mid Z)=\\sum_zp_Z(z)
D(P_{XY\\mid z}\\Vert P_{X\\mid z}P_{Y\\mid z}).
$$
Zero-weight strata are excluded. It is nonnegative, and it vanishes exactly when $X$ and $Y$ are conditionally independent given $Z$ within every positive-probability stratum. Expanding entropies inside those strata gives
$$
I(X;Y\\mid Z)=H(X\\mid Z)-H(X\\mid Y,Z).
$$

**Theorem 3.2 (information chain rule).**
$$
I(X;Y,Z)=I(X;Z)+I(X;Y\\mid Z).
$$
**Proof.** Subtract $H(X\\mid Y,Z)$ from $H(X)$, and insert $H(X\\mid Z)$ between them. The two resulting differences are the terms on the right. ∎

Because the conditional term is nonnegative, retaining an additional observation cannot reduce mutual information with the source. But conditioning can increase or decrease the mutual information between two *other* variables. In the XOR example, $I(A;B)=0$ yet $I(A;B\\mid C)=1$. If instead $A=B=C$ is a fair bit, then $I(A;B)=1$ but $I(A;B\\mid C)=0$. There is no unconditional monotonicity law under arbitrary conditioning.

The chain rule extends along a sequence:
$$
I(X;Y_1,\\ldots,Y_n)=\\sum_{i=1}^n I(X;Y_i\\mid Y_1,\\ldots,Y_{i-1}).
$$
This is useful when comparing repeated experiments. The added value of one measurement depends on what previous measurements have already revealed, not just on its standalone information.

## Interpreting a statistical experiment

Suppose $\\Theta$ is a finite parameter with a specified prior law and $X$ is sampled from $p(x\\mid\\theta)$. The resulting joint law makes $I(\\Theta;X)$ an average measure of learning. The prior is part of that experiment; different priors can give different answers for the same sampling family.

The expected posterior entropy is $H(\\Theta\\mid X)$, and the difference from prior entropy is $I(\\Theta;X)$. Equivalently it is the expected divergence from the prior to the posterior in the direction $D(P_{\\Theta\\mid X}\\Vert P_\\Theta)$. This direction is important: the posterior law averages the logarithmic update for a given observation.

One must not substitute the entropy of an estimator for the information about the parameter. An estimator could have a wide distribution due to noise while carrying little parameter information. A deterministic summary cannot improve the experiment; Chapter 4 proves this rigorously through data processing.

Optional visual companions are the Unhurried articles on [KL divergence](/articles/information-theory-kl-divergence/) and [mutual information](/articles/information-theory-mutual-information/). The finite-law arguments here supply their support conditions and equality cases.

## Logarithmic scoring and truthful probabilities

Suppose a forecaster announces a probability vector $q$ before an outcome $X$ is drawn from a fixed law $P$. Charge the forecaster the loss $-\\log_2q_X$. This is the logarithmic score, expressed as a loss so that smaller is better. Its expected value is the cross entropy. The decomposition already proved implies
$$
E_P[-\\log_2q_X]-E_P[-\\log_2p_X]=D(P\\Vert Q)\\ge0.
$$
Thus the unique minimiser over all probability vectors is the true vector $P$. This property is called strict propriety. A zero forecast on a genuinely possible outcome incurs infinite loss, consistent with the support convention.

The conclusion is a statement about expected score under a fixed distribution and a forecast announced before seeing the outcome. It does not license choosing $q$ after observing $X$: then a forecaster could place all probability on the realised outcome and report zero loss without predicting anything. In empirical applications, separating fitting data from scoring data is part of defining the forecasting experiment.

A restricted model family need not contain $P$. In that case the best expected log-score forecast within the family minimises $D(P\\Vert Q)$ over the allowed laws. Existence or uniqueness is a separate question: a nonclosed family might have an unattained infimum, and several models might represent the same probability law. Divergence still identifies the objective exactly.

For independent repeated observations, the average realised log-score difference tends to the expected difference when the relevant log ratios are integrable. On a finite alphabet with positive reference probabilities on the true support, they are bounded, so the ordinary law of large numbers applies directly. The asymptotic score gap is then the divergence per observation. If a reference assigns zero probability to a possible outcome, eventual observation of that event creates an infinite cumulative penalty instead.

This scoring interpretation explains why the direction of divergence cannot be silently reversed in statistical modelling. The real source supplies the expectation, and the announced model supplies the predictive probabilities. A reverse divergence corresponds to a different optimisation problem and can favour different approximations.

## Information does not specify the whole experiment

Two experiments can share the same mutual information while giving different error probabilities for a particular decision. Entropy averages logarithmic uncertainty, whereas a decision also needs a loss function and the posterior actions available under each observation. For example, estimating a rare catastrophic category and reconstructing a balanced binary label can attach very different costs to the same entropy reduction.

The coding and testing chapters therefore state operational tasks separately from information identities. A theorem relates a rate, error criterion or distortion constraint to a particular information quantity under specified assumptions. The quantity alone does not replace those assumptions.

## Worked example 3.1: A mismatched coin model

Let $P=(3/4,1/4)$ and $Q=(1/2,1/2)$. Cross entropy is exactly one bit because the reference assigns length-one surprise to either outcome. The actual entropy is $h_2(1/4)$, so $D(P\\Vert Q)=1-h_2(1/4)$. In the reverse direction,
$$
D(Q\\Vert P)=\\tfrac12\\log_2(2/3)+\\tfrac12\\log_2 2
=\\tfrac12\\log_2(4/3).
$$
These are different quantities. Neither is the signed difference between the two head probabilities. Each measures a different expected likelihood penalty under its own averaging law.

## Worked example 3.2: A noisy fair bit

Let $X$ be fair and $Y=X\\oplus N$, where $N$ is independent Bernoulli$(q)$. The output is fair for every $q$, while $H(Y\\mid X)=h_2(q)$. Thus $I(X;Y)=1-h_2(q)$. At $q=0$ the output copies the bit; at $q=1$ it complements it and remains equally informative. At $q=1/2$ the output is independent of the source, so the information is zero. Large error probability relative to the uncorrected output is therefore not itself a measure of information loss.

## Worked example 3.3: Zero correlation with genuine information

Let $X$ be uniform on $\\{-1,0,1\\}$ and let $Y=X^2$. Symmetry gives $EX=0$ and $E[XY]=E[X^3]=0$, so covariance and correlation are zero. Yet $Y$ is a deterministic function of $X$ with probabilities $P(Y=1)=2/3$, $P(Y=0)=1/3$. Hence $I(X;Y)=H(Y)=h_2(1/3)>0$. The observation reveals whether $X$ is zero but does not reveal the sign when $Y=1$. The residual entropy is $(2/3)\\cdot1+ (1/3)\\cdot0=2/3$ bit, and $\\log_2 3-h_2(1/3)=2/3$ checks the identity.

## A finite comparison even when source supports differ

Directed divergence can be infinite when one law assigns zero to an outcome possible under another. Sometimes the question is instead how well an observation distinguishes two candidate source labels. That experiment produces a different, always finite quantity.

Let a selector choose law $P$ with probability $\\lambda$ and law $Q$ otherwise, with both weights strictly positive. The unconditional law is their mixture $M$. Each component is supported inside that mixture, so both divergences to $M$ are finite. Their weighted average is called the weighted Jensen–Shannon divergence.

Expanding those two divergences gives entropy of $M$ minus the weighted component entropies. Equivalently it is the mutual information between the selector and its observed outcome. Consequently it lies between zero and the binary selector entropy.

The lower bound is attained exactly when the component laws agree. The upper bound is attained exactly when the label is recoverable from the outcome, meaning disjoint positive supports. These equality conditions follow from the mixture-label identity, rather than from interpreting a large number on a plot.

With equal label weights, interchanging $P$ and $Q$ leaves the experiment unchanged, so this divergence is symmetric. That symmetry does not make directed KL symmetric, nor does it establish a triangle inequality for every formula obtained from the comparison. No metric property is being asserted here.

For two distinct deterministic outcomes, both directed KL comparisons are infinite, yet the equal-weight Jensen–Shannon value is one bit. A single observation identifies which of the two sources was chosen, and a binary label contains only one bit. Infinite cross-entropy penalty and finite source-label information are answering different questions.

Conversely, highly overlapping component laws make the label hard to identify and reduce this quantity. This need not mean either law is a good predictive approximation to the other under the asymmetric logarithmic score. A small overlap difference can coexist with a reference zero that makes one directed predictive penalty infinite.

The mixture weights are part of the experiment. Giving a candidate an extremely small prior probability limits the total label entropy and can make average information small even when an observation would perfectly distinguish it. A diagnostic should therefore state those weights rather than compare numbers from differently weighted experiments as though they used a common scale of difficulty.

This construction is useful precisely because it keeps its operational interpretation: average learning about a declared finite label. It is not a replacement for checking support when the task is prediction under one particular true law.

## Independent repetitions add divergence exactly

Let P and Q be finite-alphabet laws, with P assigning positive probability only where Q does. For n independent repetitions, the likelihood ratio is the product of the one-coordinate likelihood ratios. Taking its logarithm turns that product into a sum. Expectation under the product P law then gives n times the one-observation divergence. No typical-set approximation is needed for this identity.

More generally, two independent experimental components contribute the sum of their two divergences even if their alphabets and laws differ. If either component has a support violation, the full divergence is infinite, consistent with the extended-value sum. This accounting does not apply to dependent repetitions by simply multiplying the marginal divergence: the correct chain rule uses conditional distributions given the preceding observations. Repeating the same random observation n times reveals no more than the first copy, whereas genuinely independent observations can multiply expected log evidence. The joint-law assumption therefore determines whether information accumulates.

## Exercises

### Exercise 3.1
<a id="relative-entropy-mutual-information-ex-1"></a>

Compute $D(P\\Vert Q)$ for $P=(1,0)$ and $Q=(1/4,3/4)$.

<details>
<summary>Hint 1</summary>

Only positive $P$ cells contribute.

</details>
<details>
<summary>Hint 2</summary>

The realised reference probability is $1/4$.

</details>
<details>
<summary>Solution</summary>

The divergence is $\\log_2(1/(1/4))=2$ bits. The zero-mass cell under $P$ contributes nothing. Cross entropy is also two, since $H(P)=0$. This calculation illustrates that a deterministic true source can still incur a large penalty under a poor reference model.

</details>

### Exercise 3.2
<a id="relative-entropy-mutual-information-ex-2"></a>

Give laws with finite $D(P\\Vert Q)$ but infinite $D(Q\\Vert P)$.

<details>
<summary>Hint 1</summary>

Let one law have smaller support.

</details>
<details>
<summary>Hint 2</summary>

Make the other positive on both binary outcomes.

</details>
<details>
<summary>Solution</summary>

Take $P=(1,0)$ and $Q=(1/2,1/2)$. Then $D(P\\Vert Q)=1$. In the reverse direction the second cell has positive averaging mass but reference probability zero, so $D(Q\\Vert P)=+\\infty$. Support containment has an orientation.

</details>

### Exercise 3.3
<a id="relative-entropy-mutual-information-ex-3"></a>

Prove the divergence chain rule for finite joint laws with the required support containment.

<details>
<summary>Hint 1</summary>

Factor each joint law into a marginal and conditional law.

</details>
<details>
<summary>Hint 2</summary>

Take the expected logarithm under the first joint law.

</details>
<details>
<summary>Solution</summary>

If $P_{XY}$ is supported inside $Q_{XY}$, factor the positive-cell ratio as $(p_X/q_X)(p_{Y\\mid X}/q_{Y\\mid X})$. Averaging its logarithm yields $D(P_{XY}\\Vert Q_{XY})=D(P_X\\Vert Q_X)+\\sum_xp_X(x)D(P_{Y\\mid x}\\Vert Q_{Y\\mid x})$. Conditional terms are only needed when $p_X(x)>0$, which also ensures $q_X(x)>0$.

</details>

### Exercise 3.4
<a id="relative-entropy-mutual-information-ex-4"></a>

If $Y=f(X)$, express $I(X;Y)$ without a joint sum.

<details>
<summary>Hint 1</summary>

Use the entropy identity.

</details>
<details>
<summary>Hint 2</summary>

The conditional entropy of a deterministic output is zero.

</details>
<details>
<summary>Solution</summary>

$I(X;Y)=H(Y)-H(Y\\mid X)=H(Y)$. This need not equal $H(X)$: a constant function gives zero information, while an injective function on the source support gives all $H(X)$ bits. The relevant property is recoverability, not the size of the written formula for $f$.

</details>

### Exercise 3.5
<a id="relative-entropy-mutual-information-ex-5"></a>

Show that $I(X;Y)\\le\\min\\{H(X),H(Y)\\}$.

<details>
<summary>Hint 1</summary>

Use both symmetric entropy identities.

</details>
<details>
<summary>Hint 2</summary>

Finite conditional entropy is nonnegative.

</details>
<details>
<summary>Solution</summary>

The identities $I=H(X)-H(X\\mid Y)$ and $I=H(Y)-H(Y\\mid X)$ each subtract a nonnegative term. Together they give the stated minimum. Equality with $H(X)$ means $X$ is recoverable from $Y$ almost surely; it need not mean that $Y$ is recoverable from $X$.

</details>

### Exercise 3.6
<a id="relative-entropy-mutual-information-ex-6"></a>

For independent fair $A,B$ and $C=A\\oplus B$, compute $I(A;C)$ and $I(A;B,C)$.

<details>
<summary>Hint 1</summary>

A single XOR output is fair for either value of $A$.

</details>
<details>
<summary>Hint 2</summary>

Both observations recover $A$.

</details>
<details>
<summary>Solution</summary>

$A$ and $C$ are independent, so $I(A;C)=0$. But $A=B\\oplus C$, giving $H(A\\mid B,C)=0$ and $I(A;B,C)=1$. By the information chain rule, $I(A;B\\mid C)=1$. Conditional information can exceed the corresponding unconditional information.

</details>

### Exercise 3.7
<a id="relative-entropy-mutual-information-ex-7"></a>

Derive $H(P,Q)-H(P)=D(P\\Vert Q)$ and specify when it is infinite.

<details>
<summary>Hint 1</summary>

Expand the two expectations.

</details>
<details>
<summary>Hint 2</summary>

Check positive averaging mass against a zero reference mass.

</details>
<details>
<summary>Solution</summary>

For support containment, subtracting gives $\\sum_xp_x(-\\log_2q_x+\\log_2p_x)=D(P\\Vert Q)$. If some $p_x>0=q_x$, the cross entropy and divergence are infinite while $H(P)$ remains finite on this finite alphabet. Thus the extended-value identity still reads $+\\infty=H(P)+\\infty$.

</details>

### Exercise 3.8
<a id="relative-entropy-mutual-information-ex-8"></a>

Prove that a bijective relabelling of each variable preserves mutual information.

<details>
<summary>Hint 1</summary>

Relabel the entries of the joint table.

</details>
<details>
<summary>Hint 2</summary>

The product marginal entries are permuted in the same way.

</details>
<details>
<summary>Solution</summary>

For bijections $f,g$ on the supports, the cell of $(f(X),g(Y))$ indexed by $(f(x),g(y))$ has mass $p(x,y)$ and marginal product $p_X(x)p_Y(y)$. Its divergence summand is therefore unchanged. Summing all relabelled cells proves invariance; noninvertible summaries need a separate inequality.

</details>

### Exercise 3.9
<a id="relative-entropy-mutual-information-ex-9"></a>

Let $Z$ be independent of $(X,Y)$. Prove $I(X;Y\\mid Z)=I(X;Y)$.

<details>
<summary>Hint 1</summary>

Each positive-probability conditional joint law is the original law.

</details>
<details>
<summary>Hint 2</summary>

Use the conditional-divergence definition.

</details>
<details>
<summary>Solution</summary>

Independence implies $P_{XY\\mid z}=P_{XY}$ and also preserves both conditional marginals. Each conditional divergence equals $I(X;Y)$, and the weights $p_Z(z)$ sum to one. Independence of $Z$ from the pair is the stated hypothesis; pairwise independence alone would not suffice.

</details>

### Exercise 3.10
<a id="relative-entropy-mutual-information-ex-10"></a>

Explain why a log likelihood ratio from one sample can be negative without contradicting Gibbs inequality.

<details>
<summary>Hint 1</summary>

Distinguish a summand from its expectation.

</details>
<details>
<summary>Hint 2</summary>

Find a cell where the true law assigns smaller mass.

</details>
<details>
<summary>Solution</summary>

For $P=(3/4,1/4)$ and $Q=(1/2,1/2)$, observing the second outcome gives $\\log_2((1/4)/(1/2))=-1$. Observing the first gives $\\log_2(3/2)>0$ and occurs more often under $P$. The weighted sum is nonnegative by Gibbs inequality. The theorem never asserts positivity for each realised observation.

</details>

## Summary

Relative entropy is a directed expected log likelihood ratio, with support conditions that can make it infinite. Mutual information is its joint-versus-product special case. Finite entropy identities, conditional information and chain rules quantify average learning without confusing it with correlation or a pointwise entropy change.
`;export{e as default};