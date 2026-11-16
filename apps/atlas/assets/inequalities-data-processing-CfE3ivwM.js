var e=`---
parent_id: book-information-theory
chapter_id: inequalities-data-processing
title: "Inequalities and Data Processing"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Inequalities and Data Processing

Preparation is divergence, conditional mutual information and finite conditional independence. This chapter supplies the inequality tools used in the coding converses.

## The log-sum inequality

Information inequalities are statements about probability laws, including their supports. This chapter keeps all alphabets finite. Logs have base two; natural logarithms appear only in derivatives and carry an explicit conversion factor.

**Theorem 4.1 (log-sum).** Let $a_i,b_i\\ge0$, with totals $A=\\sum_i a_i>0$ and $B=\\sum_i b_i>0$. Then
$$
\\sum_i a_i\\log_2\\frac{a_i}{b_i}\\ge A\\log_2\\frac AB.
$$
The conventions are the same as for divergence. Equality holds exactly when $a_i/A=b_i/B$ for every index.

**Proof.** If some positive $a_i$ has $b_i=0$, the left side is infinite. Otherwise set $r_i=a_i/A$ and $s_i=b_i/B$. Expanding the left side gives $A\\log_2(A/B)+AD(r\\Vert s)$. Gibbs inequality proves the assertion and its equality condition. Indices with zero $a_i$ and positive $b_i$ prevent equality, as the normalised probability vectors then differ. ∎

If $A=0$, the left side and the right-side limit are zero. If $B=0<A$, both sides are infinite, so that case does not provide a useful finite equality criterion. These boundary cases are usually better removed before applying the theorem.

A basic use is combining cells. Replacing detailed outcomes by a group label sums $a_i,b_i$ within each group. Log-sum says that this coarsening cannot increase divergence. Equality requires the two original laws to have identical conditional distributions inside every relevant group.

## Randomised processing also contracts divergence

Let $K(z\\mid x)$ be a stochastic matrix, the same for both source laws $P$ and $Q$. Its rows sum to one. The processed laws are $(PK)(z)=\\sum_xp_xK(z\\mid x)$ and similarly for $QK$.

**Theorem 4.2.**
$$
D(PK\\Vert QK)\\le D(P\\Vert Q).
$$

**Proof.** On the pair space use the laws $p_xK(z\\mid x)$ and $q_xK(z\\mid x)$. Their joint divergence equals $D(P\\Vert Q)$: where the common transition factor is positive, it cancels from the likelihood ratio, and summing over $z$ restores each $p_x$. Apply log-sum over $x$ separately for each $z$ to obtain the divergence of the processed marginals as a lower bound. The infinite case is automatic; the finite case follows by summing these inequalities. ∎

The qualification “the same matrix” is essential. If the processing rule were allowed to depend on which source law was secretly chosen, its output could directly reveal that choice. That is a different experiment, not a contraction of one given observation.

Equality in the finite case means that for each positive-output cell the posterior laws of the original $x$ under $P$ and $Q$ agree. A deterministic grouping therefore loses no divergence exactly when the likelihood ratio $p_x/q_x$ is constant inside each positive-probability fibre, with compatible supports.

## Data processing for mutual information

The statement that $X\\to Y\\to Z$ is a Markov chain means that the joint law factors as
$$
p(x,y,z)=p_X(x)p(y\\mid x)p(z\\mid y).
$$
Equivalently $X$ and $Z$ are conditionally independent given $Y$. This notation describes conditional laws; it need not represent a physical causal claim.

**Theorem 4.3 (data-processing inequality).** Under this Markov condition,
$$
I(X;Z)\\le I(X;Y).
$$

**Proof.** Expand $I(X;Y,Z)$ in two orders:
$$
I(X;Y,Z)=I(X;Y)+I(X;Z\\mid Y)=I(X;Y),
$$
because conditional independence makes the last conditional information zero. The other order gives $I(X;Z)+I(X;Y\\mid Z)$. Nonnegativity of the remaining conditional information proves the bound. ∎

The proof also identifies equality: $I(X;Y\\mid Z)=0$. This says that after seeing $Z$, the finer observation $Y$ supplies no further average information about $X$. It is a condition on this particular joint law, not a universal property of the processing map.

Every deterministic summary $Z=f(Y)$ satisfies the Markov condition. A randomised estimator based only on $Y$ also satisfies it if its additional randomness is independent of the source conditional on $Y$. An algorithm cannot extract more source information than was present in its input, even though it can make existing information easier for a human or a decision rule to use.

The conclusion can fail if the processor receives additional side information correlated with $X$. Then the correct input is the pair containing that side information. The chain rule, rather than a slogan about information loss, specifies how much can be added.

## Sufficiency as no information loss

Consider a finite parameter $\\Theta$ with a prior and a sampling family $p(y\\mid\\theta)$. Let $T=t(Y)$. The information loss is
$$
I(\\Theta;Y)-I(\\Theta;T)=I(\\Theta;Y\\mid T).
$$
It vanishes precisely when the posterior law of $\\Theta$ given $Y$ depends only on $T$ for every positive-probability observation.

A stronger, prior-independent sufficient-statistic condition is that the conditional law of $Y$ given $T$ does not depend on $\\theta$ on the common support. If $p_\\theta(y)=g_\\theta(t(y))h(y)$, normalising within a fibre shows this directly wherever the fibre has positive probability. Under such a factorisation, the Markov chain $\\Theta\\to T\\to Y$ holds for every prior with appropriate support, while $\\Theta\\to Y\\to T$ holds because $T$ is a function.

These two processing inequalities force $I(\\Theta;T)=I(\\Theta;Y)$. A statistic can reduce the size of the recorded data without losing information about a specified parameter family. It can still lose information about other aspects of the observations, or about a larger model in which the factorisation fails.

For iid Bernoulli observations, the number of successes is sufficient for the success probability. Given the count, every binary sequence with that count has the same conditional probability, independent of the parameter. The order can therefore be discarded for that model. In a model with time dependence or a changing success probability, the order may become informative and the same statistic need not remain sufficient.

## Joint convexity and mixture comparisons

Apply log-sum with the two-component lists $\\lambda p_x,(1-\\lambda)r_x$ and $\\lambda q_x,(1-\\lambda)s_x$, separately for each $x$. Summing gives
$$
D(\\lambda P+(1-\\lambda)R\\Vert\\lambda Q+(1-\\lambda)S)
\\le\\lambda D(P\\Vert Q)+(1-\\lambda)D(R\\Vert S).
$$
Thus divergence is jointly convex in the two laws. Endpoint weights follow directly. Infinite values cause no problem on the right.

The mixture selector has been hidden from the observer on the left. If it were observed, the divergence would be the weighted sum on the right. Contraction under forgetting that selector supplies another proof. This interpretation is often easier to remember than the algebra, but both require the same mixture weights in the two compared experiments.

Joint convexity does not say that entropy is convex; finite entropy is concave. Nor does it say that mutual information is jointly convex in an arbitrary joint table. Mutual information contains marginals that themselves depend on that table. For a fixed channel it is concave in the input distribution, a different statement proved in Chapter 9.

## Pinsker’s bound: divergence controls probability error

Define total variation by
$$
\\|P-Q\\|_{\\rm TV}=\\tfrac12\\sum_x|p_x-q_x|.
$$
Let $A=\\{x:p_x\\ge q_x\\}$. Then $P(A)-Q(A)=\\|P-Q\\|_{\\rm TV}$, because the positive and negative mass differences have equal totals.

Coarsen the alphabet into $A$ and its complement. Divergence contraction gives
$$
D(P\\Vert Q)\\ge d_2(P(A)\\Vert Q(A)),
$$
where $d_2$ is binary divergence. For fixed $b\\in(0,1)$, natural-log binary divergence $f(a)=a\\ln(a/b)+(1-a)\\ln((1-a)/(1-b))$ satisfies $f(b)=f'(b)=0$ and
$$
f''(a)=\\frac1{a(1-a)}\\ge4.
$$
Integrating twice between $a$ and $b$, in either order, yields $f(a)\\ge2(a-b)^2$. Continuity handles finite boundary cases; incompatible boundary supports give infinite divergence. Therefore
$$
\\|P-Q\\|_{\\rm TV}\\le\\sqrt{\\frac{\\ln2}{2}D(P\\Vert Q)}.
$$
The $\\ln2$ factor is necessary because our divergence is measured in bits.

For any function $0\\le g\\le1$, $|E_Pg-E_Qg|\\le\\|P-Q\\|_{\\rm TV}$. One proof writes the expectation difference as a weighted sum of the signed mass differences and maximises by choosing $g=1$ on the positive cells and zero on the negative cells. Combining this with Pinsker bounds discrepancies in probabilities and bounded rewards by divergence.

The reverse implication has no uniform bound without additional assumptions. Very close laws in total variation can have infinite divergence if the reference law assigns zero to a tiny positive true mass. Numerical closeness in one criterion is therefore not automatic closeness in every criterion.

## From probability bounds to decision regret

Suppose an action $a$ has loss $\\ell(a,x)\\in[0,L]$ and let $R_P(a)=E_P\\ell(a,X)$. For every fixed action,
$$
|R_P(a)-R_Q(a)|\\le L\\|P-Q\\|_{\\rm TV}.
$$
Assume minimising actions $a_P,a_Q$ exist for the two laws. Insert and subtract the two $Q$ risks:
$$
R_P(a_Q)-R_P(a_P)
=[R_P(a_Q)-R_Q(a_Q)]
+[R_Q(a_Q)-R_Q(a_P)]
+[R_Q(a_P)-R_P(a_P)].
$$
The middle term is nonpositive by optimality of $a_Q$. The other two terms are at most $L\\|P-Q\\|_{\\rm TV}$ each. Hence using the reference-optimal action under the true law incurs regret at most
$$
2L\\|P-Q\\|_{\\rm TV}
\\le L\\sqrt{2(\\ln2)D(P\\Vert Q)}.
$$
For finite action sets the minimisers exist automatically. For larger action spaces one can use approximately minimising actions and carry their approximation errors through the same calculation.

This conclusion depends on bounded loss. A tiny modelling discrepancy can have a large effect on an unbounded tail-sensitive loss, so the probability bound cannot simply be reused without integrability or moment conditions. It also concerns the optimal action for the reference law; an arbitrary badly chosen reference action has no such regret guarantee.

The argument is useful when an information calculation is only an intermediate result in choosing a treatment, predictor or communication action under a declared loss. It states exactly how a divergence bound can support a decision claim, which extra boundedness assumption is needed, and where the factor of two enters.

## Worked example 4.1: Forgetting a coordinate

Let $P$ be uniform on $(0,0),(0,1)$, and let $Q$ assign masses $1/4,3/4$ to those same two pairs. The first coordinate is always zero under both laws. Its marginal divergence is zero even though the joint divergence is $\\tfrac12\\log_2 2+\\tfrac12\\log_2(2/3)>0$. The discarded second coordinate contains every distinguishing feature. The equality condition fails because the conditional laws inside the sole retained fibre differ.

## Worked example 4.2: A sufficient count

Observe three iid Bernoulli$(\\theta)$ bits and let $T$ be their sum. Under any prior supported in $(0,1)$, the likelihood of a sequence $y$ is $\\theta^{T(y)}(1-\\theta)^{3-T(y)}$. Given $T=t$, all $\\binom3t$ sequences are equally likely for every $\\theta$. Thus $\\Theta\\to T\\to Y$ and $\\Theta\\to Y\\to T$, so $I(\\Theta;Y)=I(\\Theta;T)$. This proof makes no claim about learning temporal dependence, which is excluded by the iid model.

## Worked example 4.3: A numerical probability bound without computation

Suppose a modelling argument establishes $D(P\\Vert Q)\\le1/50$ bit. Pinsker gives $\\|P-Q\\|_{\\rm TV}\\le\\sqrt{(\\ln2)/100}<1/10$, since $\\ln2<1$. Every event probability differs by less than one tenth, and the same holds for expectations of rewards in $[0,1]$. The bound is conservative and does not establish exact calibration for individual events. It follows analytically from the divergence premise; no empirical experiment is implied.

## Diminishing returns needs a conditional-independence hypothesis

For a collection of finite variables, entropy of a selected subset is a submodular set function. For two index sets, expand both entropies around their intersection. Their sum minus the entropies of the union and intersection is the conditional mutual information between the two remaining blocks, which is nonnegative.

Equivalently, adding one variable reveals less new joint uncertainty when more variables are already recorded. The increment is that variable’s conditional entropy, and conditioning reduces it. This is a theorem about entropy of observations, not automatically about their information concerning a separate target.

Let a target parameter be random and suppose candidate observations are conditionally independent given that parameter. The gain from adding observation $i$ to a chosen set is its conditional mutual information with the parameter. Write that gain as its entropy conditional on the selected observations minus its entropy conditional on the parameter and those observations.

Conditional independence makes the second term independent of the chosen set. The first term decreases as that set grows. Thus information about the parameter is now a nonnegative monotone submodular function of the selected observations.

Without that hypothesis, the result can fail. Two independent fair bits reveal no information individually about their XOR, but together reveal it exactly. Their target-information gains increase rather than decrease. Dependence conditional on the XOR is the missing assumption; pairwise marginal independence does not supply it.

There is a concrete selection consequence under the valid hypothesis. Suppose at most $k$ observations may be chosen and a greedy rule repeatedly selects the largest remaining information increment. Compare its current set with an optimal set of at most $k$. Submodularity bounds the remaining optimality gap by the sum of the at most $k$ increments those optimal items would have at the current set.

The best available increment is therefore at least one-$k$th of that gap. After each greedy step, the gap shrinks by a factor at most one minus one-$k$th. After $k$ steps, the achieved information is at least one minus that factor to the power $k$, times the optimum; in particular the fraction is at least one minus the reciprocal of the natural exponential base.

This proves an approximation guarantee for that fixed finite selection problem. It requires exact information gains from the declared joint law and the submodularity hypothesis. Estimated gains, unequal costs, dependent measurement mechanisms or outcomes observed adaptively during selection change the problem and need further arguments.

The result illustrates why a useful information inequality must retain its model assumptions when used as an algorithmic design principle. “More data has diminishing returns” is too broad; the entropy and conditional-independence calculations specify exactly which return is diminishing and when.

## Equality after deterministic grouping

For a deterministic map grouping input symbols into output cells, the divergence contraction proof applies log-sum separately within each cell. If the reference law is positive on the relevant input support, equality holds in a cell precisely when the likelihood ratio is constant across its positive-reference symbols. To see the equality condition directly, normalise the two measures within the cell. The difference between the original contribution and the grouped contribution equals the cell's P mass times the divergence between those conditional laws. This is zero precisely when those laws agree.

Consequently deterministic grouping preserves all divergence between this pair of hypotheses when the likelihood ratio can be reconstructed from the grouped observation. The map need not preserve the original symbols: several symbols can be merged if they carry identical relative evidence. The condition is pair-specific. A grouping sufficient for one chosen pair of distributions can discard evidence for another pair, so equality for a single comparison does not by itself prove sufficiency for an entire parameter family.

## Exercises

### Exercise 4.1
<a id="inequalities-data-processing-ex-1"></a>

Prove divergence contraction for a deterministic grouping directly.

<details>
<summary>Hint 1</summary>

Partition the alphabet into fibres.

</details>
<details>
<summary>Hint 2</summary>

Apply log-sum once per fibre.

</details>
<details>
<summary>Solution</summary>

For each fibre $F_z$, log-sum bounds $\\sum_{x\\in F_z}p_x\\log_2(p_x/q_x)$ below by $P(F_z)\\log_2(P(F_z)/Q(F_z))$. Summing over fibres gives the processed divergence. Equality requires equal normalised laws inside every relevant fibre, with compatible supports.

</details>

### Exercise 4.2
<a id="inequalities-data-processing-ex-2"></a>

Can a fair bit be recovered from its independent noisy copy with crossover probability one-half? Relate the answer to data processing.

<details>
<summary>Hint 1</summary>

The copy is independent of the input.

</details>
<details>
<summary>Hint 2</summary>

Any decoder is another processing step.

</details>
<details>
<summary>Solution</summary>

The noisy copy has zero mutual information with the fair input. Any randomised decoder using only that copy and independent randomness also has zero source information. Exact recovery would imply mutual information one bit, so it is impossible. A decoder can still guess correctly with probability one-half.

</details>

### Exercise 4.3
<a id="inequalities-data-processing-ex-3"></a>

Find the information loss from replacing a fair bit by a constant.

<details>
<summary>Hint 1</summary>

Compute the two mutual informations.

</details>
<details>
<summary>Hint 2</summary>

A variable contains its entire own entropy.

</details>
<details>
<summary>Solution</summary>

With $Y=X$ and constant $Z$, the initial information is $I(X;Y)=H(X)=1$ while $I(X;Z)=0$. The loss equals $I(X;Y\\mid Z)=1$. The Markov condition holds because the constant is a function of $Y$.

</details>

### Exercise 4.4
<a id="inequalities-data-processing-ex-4"></a>

Explain why data processing is not a claim that every data summary is useless.

<details>
<summary>Hint 1</summary>

Distinguish retaining information from increasing it.

</details>
<details>
<summary>Hint 2</summary>

Recall the sufficient count example.

</details>
<details>
<summary>Solution</summary>

A summary can preserve all information about a model parameter and make an optimal decision easier to calculate. Data processing rules out creating additional source information from a fixed input. It permits equality, and it says nothing against computational or interpretive advantages of a sufficient summary.

</details>

### Exercise 4.5
<a id="inequalities-data-processing-ex-5"></a>

Show that the total variation definition equals the largest event-probability difference.

<details>
<summary>Hint 1</summary>

Separate positive and negative mass differences.

</details>
<details>
<summary>Hint 2</summary>

Use the event of nonnegative differences.

</details>
<details>
<summary>Solution</summary>

The signed differences sum to zero, so their positive sum is half their absolute sum. Any event sums some of these differences and has absolute difference at most that positive sum. The event $A=\\{p_x\\ge q_x\\}$ attains it. Thus the supremum is exactly total variation.

</details>

### Exercise 4.6
<a id="inequalities-data-processing-ex-6"></a>

State Pinsker’s inequality if divergence uses natural logarithms.

<details>
<summary>Hint 1</summary>

Convert bits to nats.

</details>
<details>
<summary>Hint 2</summary>

Multiply bit divergence by $\\ln2$.

</details>
<details>
<summary>Solution</summary>

Writing $D_{\\rm nat}=(\\ln2)D$, the bound becomes $\\|P-Q\\|_{\\rm TV}\\le\\sqrt{D_{\\rm nat}/2}$. Omitting the conversion factor while retaining base-two divergence would change the constant and is not the theorem proved here.

</details>

### Exercise 4.7
<a id="inequalities-data-processing-ex-7"></a>

Give arbitrarily close laws in total variation whose directed divergence is infinite.

<details>
<summary>Hint 1</summary>

Put a small positive true mass at a reference zero.

</details>
<details>
<summary>Hint 2</summary>

Let that mass tend to zero.

</details>
<details>
<summary>Solution</summary>

Take $P_\\varepsilon=(1-\\varepsilon,\\varepsilon)$ and $Q=(1,0)$, with $0<\\varepsilon<1$. Their total variation is $\\varepsilon$, but $D(P_\\varepsilon\\Vert Q)=+\\infty$ because the second reference mass is zero. Hence no finite uniform reverse bound can depend only on total variation.

</details>

### Exercise 4.8
<a id="inequalities-data-processing-ex-8"></a>

For a Markov chain $X	o Y	o Z$, characterise equality in mutual-information processing.

<details>
<summary>Hint 1</summary>

Expand information of the pair in both orders.

</details>
<details>
<summary>Hint 2</summary>

The lost conditional information must vanish.

</details>
<details>
<summary>Solution</summary>

The identity is $I(X;Y)-I(X;Z)=I(X;Y\\mid Z)$ because $I(X;Z\\mid Y)=0$. Equality therefore holds exactly when $X$ and $Y$ are conditionally independent given $Z$ in every positive-weight stratum. This is a property of the specified experiment.

</details>

### Exercise 4.9
<a id="inequalities-data-processing-ex-9"></a>

Why must the same stochastic matrix process both laws in divergence contraction?

<details>
<summary>Hint 1</summary>

Consider a constant input under both laws.

</details>
<details>
<summary>Hint 2</summary>

Let different rules output different labels.

</details>
<details>
<summary>Solution</summary>

If law-dependent rules were permitted, two identical deterministic inputs could be mapped to distinct deterministic outputs. Input divergence would be zero while output divergence would be infinite. A single common kernel prevents this artificial revelation of the source-law label.

</details>

### Exercise 4.10
<a id="inequalities-data-processing-ex-10"></a>

Prove that a reward in $[a,b]$ has expectation difference bounded by $(b-a)$ times total variation.

<details>
<summary>Hint 1</summary>

Rescale to $[0,1]$.

</details>
<details>
<summary>Hint 2</summary>

Apply the bounded-function consequence of the signed mass formula.

</details>
<details>
<summary>Solution</summary>

For $b>a$, set $g=(r-a)/(b-a)$. Then $0\\le g\\le1$ and $E_Pr-E_Qr=(b-a)(E_Pg-E_Qg)$, since the constant cancels. Taking absolute values gives the bound. If $a=b$, both expectations are the same and the claim is immediate.

</details>

## Summary

Log-sum and Gibbs inequality yield divergence contraction, information data processing and joint convexity. Equality identifies what a summary preserves. Pinsker converts bit divergence into a bound on event probabilities, while support counterexamples prevent an unjustified reverse bound.
`;export{e as default};