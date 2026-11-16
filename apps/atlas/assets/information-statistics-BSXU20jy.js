var e=`---
parent_id: book-information-theory
chapter_id: information-statistics
title: "Information and Statistics"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Information and Statistics

Preparation is finite types, divergence, Fano, Taylor expansion and Cauchy–Schwarz. Sanov uses a fixed finite positive source law; Fisher calculations use fixed positive support and twice continuously differentiable probabilities.

## Three meanings of statistical information

Relative entropy measures a directed discrepancy between laws. Mutual information measures average learning in a joint experiment, which includes a prior when a parameter is random. Fisher information is a local derivative quantity in a smooth parametric family. They are related, but their hypotheses and units differ.

This chapter proves finite-alphabet versions of three connections: empirical-distribution large deviations through Sanov’s theorem, multi-hypothesis lower bounds through Fano’s inequality, and local KL curvature through Fisher information. The finite setting permits explicit support and differentiability conditions without hiding measure-theoretic assumptions.

All divergence and mutual information use bits. Scores use natural logarithms because they differentiate likelihoods; the conversion factor $\\ln2$ remains visible in the local expansion.

## Types under a true iid law

Let $X_1,\\ldots,X_n$ be iid from a fixed law $P$ with strictly positive probabilities on a finite alphabet of size $q$. For an empirical type $Q$, let $\\mathcal T_Q$ be its type class. Every member has $P^n$ probability
$$
\\prod_xp_x^{nQ(x)}
=2^{-n[H(Q)+D(Q\\Vert P)]}.
$$
The type-class bounds from the count construction and conditional-type proof give
$$
(n+1)^{-(q-1)}2^{nH(Q)}
\\le|\\mathcal T_Q|\\le2^{nH(Q)}.
$$
Multiplying yields
$$
(n+1)^{-(q-1)}2^{-nD(Q\\Vert P)}
\\le P^n(\\mathcal T_Q)\\le2^{-nD(Q\\Vert P)}.
$$
Thus divergence is the exponential cost of seeing a particular empirical law that differs from the source.

There are at most $(n+1)^q$ types, since every count lies between zero and $n$. This deliberately loose polynomial bound is sufficient for exponential rates. Its logarithm divided by $n$ tends to zero.

The assumption $p_x>0$ makes divergence continuous on the whole finite probability simplex. If the source has structural zeros, first restrict the alphabet to its positive support; empirical laws assigning mass outside that support are impossible and have infinite divergence.

## Sanov’s finite-alphabet theorem

**Theorem 15.1.** Let $\\widehat P_n$ be the empirical law. For a closed set $F$ and an open set $G$ in the finite probability simplex,
$$
\\limsup_{n\\to\\infty}\\frac1n\\log_2P(\\widehat P_n\\in F)
\\le-\\inf_{Q\\in F}D(Q\\Vert P),
$$
$$
\\liminf_{n\\to\\infty}\\frac1n\\log_2P(\\widehat P_n\\in G)
\\ge-\\inf_{Q\\in G}D(Q\\Vert P).
$$
Use $\\log0=-\\infty$ and the usual empty-set infimum convention.

**Upper bound.** Sum the type-probability upper bound over all types belonging to $F$. There are at most $(n+1)^q$, so the probability is at most $(n+1)^q2^{-n\\inf_FD}$. Taking normalised logs proves the claim. In this finite setting the displayed inequality even holds for arbitrary sets with this infimum; closed sets give the standard large-deviation formulation. ∎

**Lower bound.** Choose any $Q\\in G$. Round its coordinates to empirical counts summing to $n$, obtaining types $Q_n\\to Q$. Openness ensures $Q_n\\in G$ eventually. The single-type lower bound gives
$$
\\frac1n\\log_2P(\\widehat P_n\\in G)
\\ge-D(Q_n\\Vert P)-\\frac{q-1}{n}\\log_2(n+1).
$$
Continuity and a limit inferior yield a bound of $-D(Q\\Vert P)$. Taking the best such $Q$ proves the result. ∎

For a general event set $A$, the upper bound involves its closure and the lower bound its interior. A single exact limit follows when the two divergence infima agree. One must check this regularity rather than turning every upper bound into an equality.

For example, a singleton at an irrational probability vector contains no empirical type at any sample size. Its probability is identically zero even though its divergence can be finite. The lower open-set bound does not apply to that singleton.

## A binary rare-event exponent

For Bernoulli$(p)$ with $0<p<a<1$, consider the event $\\widehat p_n\\ge a$. Binary divergence
$$
d_2(u\\Vert p)=u\\log_2(u/p)+(1-u)\\log_2((1-u)/(1-p))
$$
has derivative $\\log_2[u(1-p)/(p(1-u))]$, positive for $u>p$. Its infimum on $[a,1]$ is therefore attained at $a$.

The open region $(a,1]$ relative to the binary simplex has the same infimum by continuity from above. Sanov’s two bounds consequently agree:
$$
\\lim_{n\\to\\infty}\\frac1n\\log_2P(\\widehat p_n\\ge a)
=-d_2(a\\Vert p).
$$
This is an exponential-rate statement, not a claim that the finite probability equals exactly $2^{-nd_2(a\\Vert p)}$. Polynomial factors and lattice rounding remain at finite $n$.

## Fano turns information into a testing limit

Let $J$ be uniform on $M\\ge2$ model labels and let data $Z$ have conditional law $P_j$ given $J=j$. Its mixture law is $\\overline P=M^{-1}\\sum_jP_j$. Then
$$
I(J;Z)=\\frac1M\\sum_jD(P_j\\Vert\\overline P).
$$
For any common reference law $Q$ with the required support,
$$
\\frac1M\\sum_jD(P_j\\Vert Q)
=I(J;Z)+D(\\overline P\\Vert Q).
$$
The identity follows by inserting and subtracting $\\log_2\\overline p$ in every likelihood ratio and then averaging. Hence information is at most the average reference divergence.

Fano’s inequality from Chapter 10 gives every decoder $\\widehat J(Z)$ the bound
$$
P(\\widehat J\\ne J)\\ge1-\\frac{I(J;Z)+1}{\\log_2M}.
$$
If each $P_j$ is an iid $n$-sample law and its one-sample divergence to a reference is at most $\\alpha$, then $I(J;Z)\\le n\\alpha$ and
$$
P(\\widehat J\\ne J)\\ge1-\\frac{n\\alpha+1}{\\log_2M}.
$$
A negative right side is merely a vacuous lower bound; error is still nonnegative.

The experiment’s prior is uniform on the chosen finite model set. That is a device for deriving a worst-case lower bound, since the maximum risk is at least the average risk. It does not require believing that this artificial prior is the unique scientific prior.

## From testing to estimation

Suppose parameter points $\\theta_1,\\ldots,\\theta_M$ are separated by more than $2s$ in a metric. Given an estimator $\\widehat\\theta$, decode to a nearest parameter point, using a fixed tie rule. If the estimation error is at most $s$ from the true point, every other point is farther away by the triangle inequality, so decoding is correct.

Therefore the average probability of estimation error greater than $s$ is at least the testing lower bound. For a nonnegative loss at least $s^r$ on that event, average loss is at least $s^r$ times the bound, and some parameter has at least that risk.

A complete minimax application must construct the separated model set and bound its divergences. Writing “by Fano” without those two ingredients omits the substantive statistical work. The theorem is a reduction tool, not a substitute for model geometry.

## Fisher information as local KL curvature

Let $\\theta$ lie in an open subset of $\\mathbb R^d$ and suppose $p_\\theta(x)>0$ for every symbol on a fixed finite alphabet in a neighbourhood of $\\theta$. Assume every coordinate probability is twice continuously differentiable there. Define the natural-log score
$$
s_\\theta(x)=\\nabla_\\theta\\ln p_\\theta(x),\\qquad
\\mathcal I(\\theta)=E_\\theta[s_\\theta(X)s_\\theta(X)^T].
$$
Differentiating $\\sum_xp_\\theta(x)=1$ gives $E_\\theta s_\\theta=0$. Differentiating a second time yields
$$
E_\\theta[\\nabla_\\theta^2\\ln p_\\theta(X)]=-\\mathcal I(\\theta).
$$
Both interchanges are finite sums, and positive probabilities permit the derivatives of logarithms.

Taylor expansion under $P_\\theta$ now gives
$$
D(P_\\theta\\Vert P_{\\theta+h})
=\\frac1{2\\ln2}h^T\\mathcal I(\\theta)h+o(\\|h\\|^2).
$$
The first-order term vanishes by the zero mean score; the negative expected log-likelihood Hessian supplies the quadratic term. The matrix is positive semidefinite because $v^T\\mathcal Iv=E(v^Ts)^2\\ge0$.

The expansion is local. Singular Fisher information may mean some parameter direction has no first-order effect; it does not by itself prove global nonidentifiability. Boundary probabilities, changing support or nondifferentiable models can invalidate the Taylor calculation entirely.

## The scalar information inequality

For a scalar parameter and a fixed estimator $T(X)$ unbiased for $\\theta$ throughout a neighbourhood, differentiating its expectation gives
$$
1=\\frac d{d\\theta}E_\\theta T
=E_\\theta[T\\,s_\\theta(X)]
=E_\\theta[(T-\\theta)s_\\theta(X)].
$$
Cauchy–Schwarz gives
$$
\\operatorname{Var}_\\theta(T)\\,\\mathcal I(\\theta)\\ge1.
$$
If $\\mathcal I(\\theta)>0$, this is the Cramér–Rao lower bound. For $n$ iid observations, scores add; their zero means and independence give total information $n\\mathcal I(\\theta)$, so the variance lower bound becomes $1/[n\\mathcal I(\\theta)]$.

The estimator must be the same data function across the neighbourhood, and unbiasedness is a neighbourhood condition. A constant that happens to equal one particular parameter value does not satisfy it. Biased estimators and irregular models need a different bound, rather than being contradictions to this one.

Fisher information, Fano and Sanov therefore address different scales: local smooth sensitivity, finite-model distinguishability and exponentially rare empirical deviations. The optional [information-estimation article](/articles/information-theory-information-estimation/) links the themes, while the proofs here keep their assumptions separate.

## Fisher information also contracts under a statistic

Let $T=t(X)$ be a fixed deterministic statistic in the regular finite model. For every statistic value with positive probability,
$$
p_\\theta^T(t)=\\sum_{x:t(x)=t}p_\\theta(x).
$$
Differentiating the finite sum shows that its score is
$$
s_\\theta^T(t)=
\\frac{\\sum_{x:t(x)=t}\\nabla p_\\theta(x)}{p_\\theta^T(t)}
=E_\\theta[s_\\theta(X)\\mid T=t].
$$
Thus the score after processing is a conditional average of the original score.

For any vector $v$, conditional Jensen gives
$$
E_\\theta[(v^Ts_\\theta^T(T))^2]
\\le E_\\theta[(v^Ts_\\theta(X))^2].
$$
Consequently $\\mathcal I_X(\\theta)-\\mathcal I_T(\\theta)$ is positive semidefinite. More precisely, the matrix difference is
$$
E_\\theta\\bigl[\\operatorname{Cov}_\\theta(s_\\theta(X)\\mid T)\\bigr].
$$
This follows from expanding the squared residual around the conditional score mean. Equality of the full information matrices holds exactly when the original score is a function of the statistic almost surely at that parameter.

This is a local counterpart of mutual-information data processing. A sufficient statistic under the earlier factorisation has a score depending only on the statistic and therefore preserves Fisher information. The converse at a *single parameter* is weaker than global statistical sufficiency: the score may happen to be measurable through $T$ at one point while the full likelihood elsewhere still depends on discarded data.

A parameter-dependent statistic would require care. The observation map in a data-processing argument must be fixed before learning the unknown parameter. Allowing the map to use the unknown true value would give the processor extra information and invalidate the intended comparison.

## Comparing the three bounds in one model

For a Bernoulli source, Sanov gives the exponential cost of an empirical proportion far from the true parameter. The local expansion of its binary divergence is quadratic with coefficient $1/[2\\ln2\\,\\theta(1-\\theta)]$, linking that rare-event cost near the centre to Fisher information. Fano instead compares several candidate parameter values at once, balancing their separation against their pairwise or reference divergences.

These are connections, not interchangeable conclusions. A Taylor approximation for small parameter differences does not establish a global rare-event rate at a distant threshold. An entropy-based testing lower bound does not supply an efficient estimator. Each argument retains the scale and criterion under which it was proved.

## Worked example 15.1: A fair-coin large deviation

For a fair source and threshold $a=3/4$, the exponent is $d_2(3/4\\Vert1/2)=1-h_2(1/4)$. Thus $\\log_2P(\\widehat p_n\\ge3/4)/n$ tends to the negative of that value. The event includes all empirical counts above the threshold, not just exactly $3n/4$ heads. Type counting and the infimum over that region explain why the boundary determines the exponent.

## Worked example 15.2: A many-model lower bound

Suppose $M=256$ candidate models each have one-sample divergence at most $1/100$ bit from a common reference. With $n=100$ independent observations, information is at most one bit. Fano gives error at least $1-(1+1)/8=3/4$ under the uniform model index. This is an analytic consequence of the divergence premise. Establishing that premise for a real model family remains a separate mathematical task.

## Worked example 15.3: Bernoulli Fisher information

For $X\\sim{\\rm Bernoulli}(\\theta)$ with $0<\\theta<1$, score is $X/\\theta-(1-X)/(1-\\theta)$ and information is $1/[\\theta(1-\\theta)]$. The local bit divergence is $h^2/[2\\ln2\\,\\theta(1-\\theta)]+o(h^2)$. The sample mean from $n$ observations has variance $\\theta(1-\\theta)/n$ and is unbiased, attaining the scalar information lower bound. At boundary values zero and one, the positive-support regularity assumptions fail.

## A full binary testing exponent with asymmetric error control

There is another useful connection between divergence and statistical testing. Let $P$ and $Q$ be fixed finite-alphabet laws with $P$ supported inside $Q$. Observe an iid block and test the null law $P$ against $Q$. Fix a null rejection probability bound strictly between zero and one.

The optimal exponential rate of the probability of accepting $P$ when $Q$ is true is $D(P\\Vert Q)$. This finite-alphabet form of Stein’s lemma uses an asymmetric criterion: one error is constrained while the other is made exponentially small. It is not the equal-prior average testing error, whose exponent is a different quantity.

Here is a complete proof of the rate. Let the block log likelihood ratio be the logarithm of $P^n$ divided by $Q^n$. Under $P$, its normalised value converges in probability to the directed divergence, because it is a sum of iid finite one-symbol log ratios.

For achievability, accept $P$ when that ratio exceeds block length times divergence minus a fixed positive tolerance. The null rejection probability tends to zero, so eventually it meets the declared fixed bound. Under $Q$, on this acceptance event, the likelihood ratio is large. Changing measure bounds its probability by two to the negative block length times divergence minus tolerance.

For the converse, take any acceptance sets meeting the null error constraint. Under $P$, the event that the normalised ratio is at most divergence plus tolerance has probability tending to one. Its intersection with acceptance consequently has probability bounded below by a positive constant for all sufficiently large blocks.

On that intersection, changing measure in the opposite direction makes the $Q$ acceptance probability at least that positive constant times two to the negative block length times divergence plus tolerance. An acceptance set containing additional cells impossible under $P$ can only increase its $Q$ probability, so support asymmetry does not invalidate this lower bound.

Take normalised negative logarithms, then let the tolerance decrease to zero. The attainable lower and upper exponents coincide at the directed divergence. Randomised tests can be included by adjoining an independent random seed to the experiment; its likelihood factor cancels in the same argument.

The fixed error bound and support condition are material hypotheses. If the reference law rules out a possible null event, divergence can be infinite and the finite-log-ratio proof needs a separate treatment. If instead both errors must shrink at a balanced exponential rate, this asymmetric theorem no longer identifies the requested exponent.

This result complements Sanov and Fano. Sanov prices empirical-law deviations, Fano limits identification among many alternatives, and Stein’s lemma describes a specific two-law likelihood-ratio tradeoff. Their shared divergence notation does not make their operational criteria interchangeable.

## Independent scores add information, not arbitrary precision

In a regular scalar model, the one-observation score has mean zero and finite second moment. For n independent observations, differentiating the product likelihood gives the sum of their scores. Cross terms in its second moment vanish because independent centred scores have zero covariance. The sample Fisher information is therefore n times the one-observation information, agreeing with the exact additivity of divergence for product laws.

This does not establish that any estimator has variance exactly the reciprocal information. The information inequality applies to its stated unbiased or locally biased class, and attainability needs an estimator and additional regularity. Nor does the calculation cover n duplicated records of one random observation: their joint experiment is one observation represented repeatedly, rather than a product law. The distinction matters for clustered data and repeated measurements. A raw row count is not an information count unless the likelihood factorization and the score covariance justify it. Independent-score additivity is a theorem with a sampling assumption, not a convention for weighting a software objective.

## Exercises

### Exercise 15.1
<a id="information-statistics-ex-1"></a>

Derive the probability of one type under a true finite iid law.

<details>
<summary>Hint 1</summary>

All words in the class have the same source probability.

</details>
<details>
<summary>Hint 2</summary>

Rewrite the product using entropy and divergence.

</details>
<details>
<summary>Solution</summary>

For counts $nQ(x)$, each word has probability $\\prod_xp_x^{nQ(x)}=2^{-n[H(Q)+D(Q\\Vert P)]}$. Multiplying by the multinomial class size gives the exact type probability. Full source support makes every term finite.

</details>

### Exercise 15.2
<a id="information-statistics-ex-2"></a>

Why does a polynomial number of types not change the large-deviation exponent?

<details>
<summary>Hint 1</summary>

Take its logarithm and divide by $n$.

</details>
<details>
<summary>Hint 2</summary>

Use $\\log(n+1)/n\\to0$.

</details>
<details>
<summary>Solution</summary>

The factor $(n+1)^q$ adds $q\\log_2(n+1)/n$ to the normalised logarithm. For fixed alphabet size this tends to zero, leaving only the divergence infimum. A growing alphabet would require reconsidering that step.

</details>

### Exercise 15.3
<a id="information-statistics-ex-3"></a>

Explain why a singleton irrational type has probability zero.

<details>
<summary>Hint 1</summary>

Empirical coordinates are integer multiples of $1/n$.

</details>
<details>
<summary>Hint 2</summary>

No sample size represents the irrational coordinate exactly.

</details>
<details>
<summary>Solution</summary>

The empirical law can never equal that vector, so the singleton event is impossible for every $n$. Its divergence may nevertheless be finite. Sanov gives a closed-set upper bound but no matching singleton lower bound, illustrating the role of the open-set condition.

</details>

### Exercise 15.4
<a id="information-statistics-ex-4"></a>

State what must be checked before concluding an exact Sanov exponent for an event.

<details>
<summary>Hint 1</summary>

Compare closure and interior.

</details>
<details>
<summary>Hint 2</summary>

Their divergence infima must agree.

</details>
<details>
<summary>Solution</summary>

Use the upper bound on the closure and the lower bound on the interior. If their infima coincide, the normalised log probability has that common negative limit. If they differ, the two inequalities alone do not identify an exact exponent.

</details>

### Exercise 15.5
<a id="information-statistics-ex-5"></a>

Prove the common-reference information identity.

<details>
<summary>Hint 1</summary>

Insert the mixture density in the log ratio.

</details>
<details>
<summary>Hint 2</summary>

Average over the model index.

</details>
<details>
<summary>Solution</summary>

Split $\\log(p_j/q)$ into $\\log(p_j/\\overline p)+\\log(\\overline p/q)$. Averaging the first gives $I(J;Z)$; averaging $P_j$ in the second produces $\\overline P$, hence $D(\\overline P\\Vert Q)$. Required support containment prevents undefined finite subtractions.

</details>

### Exercise 15.6
<a id="information-statistics-ex-6"></a>

Why does a uniform-prior testing bound imply a worst-case bound?

<details>
<summary>Hint 1</summary>

Maximum is at least average.

</details>
<details>
<summary>Hint 2</summary>

No scientific prior interpretation is required.

</details>
<details>
<summary>Solution</summary>

The average risk over the finite chosen models cannot exceed their largest risk. Thus a positive lower bound on the uniform average forces at least one model to have that much risk. It is a minimax proof device, independent of whether the uniform prior is scientifically preferred.

</details>

### Exercise 15.7
<a id="information-statistics-ex-7"></a>

Show the score has mean zero in the regular finite model.

<details>
<summary>Hint 1</summary>

Differentiate total probability one.

</details>
<details>
<summary>Hint 2</summary>

Replace the score by derivative divided by probability.

</details>
<details>
<summary>Solution</summary>

$E_\\theta s_\\theta=\\sum_xp_\\theta(x)\\nabla p_\\theta(x)/p_\\theta(x)=\\sum_x\\nabla p_\\theta(x)=\\nabla1=0$. Fixed finite support and positive probabilities justify every term.

</details>

### Exercise 15.8
<a id="information-statistics-ex-8"></a>

Why is Fisher information positive semidefinite?

<details>
<summary>Hint 1</summary>

Test its quadratic form on any vector.

</details>
<details>
<summary>Hint 2</summary>

It is an expected square.

</details>
<details>
<summary>Solution</summary>

For any $v$, $v^T\\mathcal I(\\theta)v=E_\\theta[(v^Ts_\\theta(X))^2]\\ge0$. Strict positivity in every nonzero direction requires additional local sensitivity and is not automatic.

</details>

### Exercise 15.9
<a id="information-statistics-ex-9"></a>

Explain the factor $\\ln2$ in the local divergence expansion.

<details>
<summary>Hint 1</summary>

Scores were natural-log derivatives.

</details>
<details>
<summary>Hint 2</summary>

Divergence was measured in bits.

</details>
<details>
<summary>Solution</summary>

Natural-log KL has quadratic term $\\tfrac12h^T\\mathcal Ih$. Dividing by $\\ln2$ converts it to base-two divergence. Omitting that factor while retaining natural-log scores would mix the chosen units.

</details>

### Exercise 15.10
<a id="information-statistics-ex-10"></a>

Why does a pointwise unbiased constant not contradict Cramér–Rao?

<details>
<summary>Hint 1</summary>

The proof differentiates unbiasedness in a neighbourhood.

</details>
<details>
<summary>Hint 2</summary>

A fixed constant has derivative zero.

</details>
<details>
<summary>Solution</summary>

A constant equal to one selected parameter is unbiased only at that point. Its expectation does not equal the varying parameter nearby, so the derivative identity $dE_\\theta T/d\\theta=1$ fails. The neighbourhood-unbiasedness hypothesis is absent.

</details>

## Summary

Type counting proves finite-alphabet Sanov bounds; Fano converts bounded model information into testing and estimation limits; smooth positive finite models identify Fisher information as local KL curvature and yield the scalar information inequality. These are complementary statements with different global, asymptotic and local hypotheses.
`;export{e as default};