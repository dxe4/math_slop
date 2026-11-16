
# PAC Learning and the Realizable Case

The opening tuple specifies the learning experiment. PAC learning asks for a uniform probability guarantee within that experiment: enough iid observations should make the returned predictor's population risk small, with a separately controlled probability of failure. The realizable case is a stronger model than arbitrary noisy classification. Its sharper rate follows from a different probability calculation, rather than from changing a square root to a linear denominator by analogy.

Preparation for the finite-class result is the tuple and elementary iid probability. The later finite-class concentration chapter gives the noisy comparison. The VC extension here is an optional second reading after the VC chapter develops trace counts and measurable ghost-sample arguments. We keep binary zero-one loss throughout this chapter. Changing to a real-valued regression loss requires another theorem.

## Two probabilities and a distribution-free quantifier

Fix a binary classifier class H before observations arrive. A law P is realizable by H when some member has zero population misclassification risk. Equivalently the outcome agrees with that member almost surely, so there is no irreducible label noise under this loss. An algorithm is a proper learner if its output belongs to H. Its sample consists of n independent observations from P, and any algorithmic seed is independent of that sample.

A realizable PAC guarantee has the form
$$\sup_{P:\,\inf_{h\in H}R_P(h)=0\ {\rm attained}}
P^n\{R_P(A(S))>\varepsilon\}\le\delta.$$
The inner risk averages the loss of the trained rule on a fresh observation. The outer probability averages over training samples and any algorithmic randomness. The target law is fixed inside each probability calculation. The supremum means that the chosen sample-size guarantee works for every law satisfying realizability, rather than for one convenient distribution.

Accuracy epsilon and failure probability delta do different jobs. A smaller epsilon asks for a better future risk on the successful training events. A smaller delta asks that unsuccessful training events be rarer. Neither is a posterior probability assigned to a fixed unknown classifier after observing data. The mathematical procedure and its quantifiers should be stated before interpreting an empirical zero.

## A complete finite consistent-class theorem

Let H be finite and nonempty with M members, and assume realizability. A consistent learner chooses a member making no training errors; a fixed enumeration resolves ties. Such a member exists almost surely because a zero-risk comparator makes no errors on any one observation, and a finite sample contains no error for it with probability one.

For any fixed member whose risk exceeds epsilon, the chance it makes no errors in n iid observations is
$$(1-R(h))^n\le e^{-nR(h)}<e^{-n\varepsilon}.$$
The product probability uses both independence and the binary error event. If the selected consistent member has risk greater than epsilon, at least one such bad class member made no errors. A union bound therefore proves
$$P\{R(A(S))>\varepsilon\}\le M e^{-n\varepsilon}.$$
Taking n at least log M plus log one over delta, divided by epsilon, gives the stated PAC guarantee after rounding upward. No assumption about independence between different classifiers' error events is needed.

The guarantee applies to every consistent selection rule from the fixed class, whether efficient or inefficient. It says nothing about how costly finding that member is. It also does not apply when a numerical training routine returns a rule with errors and the analysis simply calls those errors “approximately zero.” A different empirical-error argument would then be required.

### Worked example: a small fixed family

Suppose a prespecified family has one thousand classifiers and the true law is realizable by one of them. For error target one hundredth and failure probability one twentieth, it suffices to take the integer ceiling of one hundred times log twenty thousand. This is just under one thousand observations. The statement concerns any consistent member selected from that original family, not a new classifier designed after viewing the sample.

The certificate can be conservative if many candidates behave identically or are easily rejected. But its linear dependence on inverse epsilon reflects that a truly bad rule must avoid a real error event on every observation. The noisy finite-class theorem instead controls two-sided deviations of possibly nonzero risks and has a square-root accuracy scale. Their assumptions and comparison targets differ.

## Why realizability is doing mathematical work

With arbitrary label noise, no zero-risk comparator may exist. Even a simple constant-input Bernoulli population can put a positive lower bound on the risk of every binary action. In that case asking for an error target below this lower bound is impossible, regardless of sample size.

### Worked example: a noisy constant input

Let the label be one with probability one tenth and zero otherwise, independently between observations, and let H contain the two constant classifiers. Their risks are one tenth and nine tenths. Neither realizes the law. A consistent member exists only when all observed labels agree, an event whose probability is the sum of nine tenths to the n and one tenth to the n. That probability tends to zero. There is no conflict with the theorem: its almost-sure existence argument used a population zero-risk member, which is absent here. Under this noisy experiment a meaningful objective is excess risk over the best constant, not absolute risk below one tenth.

Perfect empirical fit is therefore not itself evidence that the law is realizable. An expressive rule can memorize noisy labels while having nonzero fresh risk. Realizability is a property of the population-class pair. It can be a useful idealization, but it is not established by the algorithm's final training table.

## Countable consistent learning with an allocation

For a countable class, assign positive weights pi h summing to at most one independently of data. For a candidate with risk greater than its own threshold
$$\frac{\log(1/(\delta\pi_h))}{n},$$
the chance of consistency is at most delta times pi h by the same exponential calculation. A countable union bound proves that every consistent candidate simultaneously has risk no larger than its threshold, with probability at least one minus delta.

This is a candidate-dependent certificate. To get a simple comparator statement, choose a consistent member whose weight is at least that of a chosen realizable comparator. For example, enumerate the class in nonincreasing weight order when a suitable maximum exists and select the first consistent member. Its risk is then bounded by the comparator's threshold. An arbitrary consistent member of a countable class can have tiny weight and a poor certificate, so “replace M by infinity” is not a learning theorem.

A prefix description scheme supplies one possible fixed allocation through Kraft weights. The description language must be chosen before these data are used in the proof. Choosing a convenient short description after inspecting the sample without accounting for that search changes the probability experiment. The argument here is a countable union bound; the later PAC-Bayes chapter addresses random distributions over hypotheses with a different change-of-measure theorem.

## A complete realizable VC extension

Assume the binary class has the measurable countable representation used in the VC chapter. For a fixed sample on which a bad consistent classifier exists, choose the first witness in that representation. Conditional on this sample, its error count on an independent ghost sample is binomial with mean n times its risk and variance at most that mean. If its risk exceeds epsilon and n epsilon is at least eight, Chebyshev gives probability at least one half that the ghost count is at least half that mean, hence at least n epsilon divided by two.

Thus the bad-consistency probability is at most twice the probability that some classifier makes no original errors but at least n epsilon divided by two ghost errors. Condition on the pooled paired observations and independently swap members of each pair. For a fixed loss pattern, if any pair contains two errors, the event of zero original errors is impossible. Otherwise each error occupies a separate pair, and every such pair must orient that error toward the ghost side. With m total errors, this has probability two to the minus m.

There are at most the growth-function number of loss patterns on twice n inputs. On the event under consideration, m is at least n epsilon divided by two, so the orientation probability is at most exp of minus n epsilon divided by four, using log two at least one half. The conditional pattern union bound and the initial ghost factor yield
$$P\{\exists h:R(h)>\varepsilon,\ \widehat R(h)=0\}
\le2\Pi_H(2n)e^{-n\varepsilon/4},\qquad n\varepsilon\ge8.$$
This is a full probability bound with explicit constants. It does not rely on the agnostic square-root theorem. If the VC dimension d lies between one and n, Sauer–Shelah bounds the logarithm of the pattern count by d times log twice e n over d. A valid risk radius is the maximum of eight divided by n and four divided by n times the logarithm of twice that pattern bound over delta. At dimension zero the pattern count is one; no division by d is used.

The guarantee remains relative to the same fixed iid law and binary loss. A data-selected subclass may need to be embedded in a fixed larger class for this counting argument. Computational success in finding a consistent member and statistical success of that member are separate assertions.

### Worked example: a one-sided threshold learner

Let X be uniform on the unit interval and the label indicate X at least an unknown fixed threshold a. Choose the smallest positively labeled training input as the fitted threshold; if no positive label appears, choose one. This rule is consistent almost surely under the continuous input law. It never predicts one below the true threshold, and its risk is the length between the true and fitted thresholds.

For any epsilon with a plus epsilon at most one, risk exceeding epsilon requires no training input in the interval from a through a plus epsilon. That interval has probability epsilon, so the event has probability at most one minus epsilon to the n, bounded by exp of minus n epsilon. If a plus epsilon exceeds one, the bad event is impossible. This direct distribution-specific analysis is sharper than the general VC certificate because it uses the uniform geometry and a particular one-sided learner. It does not show that every threshold learner has the same bound under every input law.

## Interpreting success without changing the experiment

A realizable guarantee does not assert that the fitted rule is the unique correct function. Different rules can agree on the support of P while differing elsewhere, or have small but nonzero disagreement in poorly sampled regions. The theorem controls the probability mass of classification error, not recovery of every parameter or behavior at every formal input.

An improper learner may output a rule outside H; its analysis cannot invoke consistency of an H-valued output without another argument. A computational learner may fail to find a consistent member within its budget; that failure belongs to the stated algorithm. A transport claim to a different population adds another law. Preserving these distinctions makes PAC a precise learning statement rather than a label attached to a training score.

## A fixed allowance of training errors has an exact finite bound

Consistency is not the only empirical criterion that can be certified. Fix an integer error allowance k between zero and n before using the sample for this statement. For one fixed classifier of risk r, its training error count is binomial with parameters n and r. If r exceeds epsilon, the probability of at most k training errors is bounded by the binomial lower-tail probability with success parameter epsilon.

A coupling proves the monotonicity needed here. Generate the error indicators by comparing independent uniform variables with the success parameter. Increasing that parameter can only increase every indicator and hence their sum. The event of a sum at most k can only become less likely. Applying a union bound over the fixed finite class yields
$$P\{\exists h:R(h)>\varepsilon,\ n\widehat R(h)\le k\}
\le M\sum_{j=0}^k\binom nj\varepsilon^j(1-\varepsilon)^{n-j}.$$
At k equal to zero this reduces to the sharper unexponentiated consistency bound. The probability implication itself does not require realizability; realizability guaranteed that an eligible zero-error member exists. For a positive allowance, existence and the algorithm's compliance with that allowance must still be established separately.

This exact-tail certificate also explains why “approximately consistent” needs a numerical meaning. One observed error and a fixed fraction of errors define different allowances as sample size grows. Choosing the allowance after inspecting results requires a simultaneous allocation over possible k values or another inversion argument. The one fixed-k event is not automatically an all-choices theorem. No binomial tail is evaluated here; the displayed finite sum specifies the mathematical quantity to calculate. Finite-class consistency controls unseen error through iid avoidance probabilities, with realizability ensuring an eligible rule exists; the optional VC extension uses trace counts instead of finite cardinality. The next chapter separates approximation, estimation and optimization errors to show what changes when exact realizability is unavailable.

## Exercises

<a id="pac-learning-realizable-case-ex-1"></a>

### Exercise 1

Prove the fixed-rule bad-consistency probability.

<details><summary>Hint 1</summary>

Each observation must avoid its error event.

</details>

<details><summary>Hint 2</summary>

Use independence and one minus r at most exponential minus r.

</details>

<details><summary>Full solution</summary>

For fixed risk r, the no-error probability is $(1-r)^n\le e^{-nr}$. If $r>\varepsilon$, this is at most $e^{-n\varepsilon}$. The proof would not factor in this form for arbitrarily dependent observations.

</details>

<a id="pac-learning-realizable-case-ex-2"></a>

### Exercise 2

Solve the finite-class theorem for a sufficient integer sample size.

<details><summary>Hint 1</summary>

Set the union bound no larger than delta.

</details>

<details><summary>Hint 2</summary>

Take logarithms and round upward.

</details>

<details><summary>Full solution</summary>

It suffices that $M e^{-n\varepsilon}\le\delta$, or $n\ge[\log M+\log(1/\delta)]/\varepsilon$. The integer ceiling supplies a sample count. This is a sufficient bound under realizability and consistent selection.

</details>

<a id="pac-learning-realizable-case-ex-3"></a>

### Exercise 3

Why does realizability guarantee an empirical consistent member almost surely?

<details><summary>Hint 1</summary>

Use one fixed zero-risk comparator.

</details>

<details><summary>Hint 2</summary>

A finite union of its zero-probability error events remains null.

</details>

<details><summary>Full solution</summary>

The comparator has error probability zero at every individual draw. With finitely many observations, the chance it errs anywhere is zero by a union bound. Thus it is consistent almost surely, even if some other members are not.

</details>

<a id="pac-learning-realizable-case-ex-4"></a>

### Exercise 4

Distinguish proper and improper learning.

<details><summary>Hint 1</summary>

The class appears in the output requirement.

</details>

<details><summary>Hint 2</summary>

An output outside the class needs its own comparator theorem.

</details>

<details><summary>Full solution</summary>

A proper algorithm always returns a member of H; an improper algorithm may use a larger output family. The finite consistent-class theorem applies to an output chosen from H. An improper learner can have valid guarantees, but they must be proved for its actual output procedure rather than inferred from this theorem.

</details>

<a id="pac-learning-realizable-case-ex-5"></a>

### Exercise 5

For the noisy constant-input example, compute the probability that any constant rule fits every training label.

<details><summary>Hint 1</summary>

Either every label is zero or every label is one.

</details>

<details><summary>Hint 2</summary>

These two events are disjoint for positive n.

</details>

<details><summary>Full solution</summary>

The probability is $(9/10)^n+(1/10)^n$. It tends to zero, and the smallest population risk remains one tenth. This shows why zero empirical error is not generally guaranteed without realizability.

</details>

<a id="pac-learning-realizable-case-ex-6"></a>

### Exercise 6

Prove the candidate-dependent countable consistency certificate.

<details><summary>Hint 1</summary>

Give each candidate its own exponential threshold.

</details>

<details><summary>Hint 2</summary>

Sum delta times the fixed allocation weights.

</details>

<details><summary>Full solution</summary>

For candidate h whose risk exceeds $\log(1/(\delta\pi_h))/n$, consistency probability is at most $\delta\pi_h$. Summing over the countable class gives total failure at most delta. On the complementary event every consistent candidate meets its own bound; an arbitrary tiny-weight candidate need not get a useful uniform radius.

</details>

<a id="pac-learning-realizable-case-ex-7"></a>

### Exercise 7

Explain the role of the condition n epsilon at least eight in the VC proof.

<details><summary>Hint 1</summary>

Use Chebyshev on the ghost error count.

</details>

<details><summary>Hint 2</summary>

Its variance is at most its mean.

</details>

<details><summary>Full solution</summary>

For ghost count K of mean nr, Chebyshev bounds $P(K<nr/2)$ by $4/(nr)$. When $r>\varepsilon$ and $n\varepsilon\ge8$, this is at most one half. The resulting ghost-success probability supplies the factor two in symmetrization. It is not a hidden asymptotic convention.

</details>

<a id="pac-learning-realizable-case-ex-8"></a>

### Exercise 8

Why does a pair containing two pooled errors make the zero-original-error event impossible?

<details><summary>Hint 1</summary>

Swapping only chooses which member of that pair goes to the original sample.

</details>

<details><summary>Hint 2</summary>

Both choices still carry an error.

</details>

<details><summary>Full solution</summary>

Whichever member is assigned to the original side, that pair contributes an original error. Thus such a pattern has probability zero of meeting consistency under random swaps. When all errors occupy separate pairs, each orientation must be favorable, giving the product probability two to the minus number of errors.

</details>

<a id="pac-learning-realizable-case-ex-9"></a>

### Exercise 9

Derive the threshold learner’s direct tail bound and name its additional distribution assumption.

<details><summary>Hint 1</summary>

A risky fitted threshold leaves an unsampled interval of length epsilon.

</details>

<details><summary>Hint 2</summary>

Uniform input law makes length equal probability.

</details>

<details><summary>Full solution</summary>

For $a+\varepsilon\le1$, the bad event implies no input in an interval of probability epsilon. Its probability is $(1-\varepsilon)^n\le e^{-n\varepsilon}$. Beyond the unit interval the event is impossible. The argument uses uniform continuous inputs and this particular one-sided selection rule; VC theory does not need that exact input law.

</details>

<a id="pac-learning-realizable-case-ex-10"></a>

### Exercise 10

Does a small realizable PAC risk imply parameter recovery outside the input support?

<details><summary>Hint 1</summary>

Risk integrates only observed-law disagreement.

</details>

<details><summary>Hint 2</summary>

Change a threshold or function on a null input region.

</details>

<details><summary>Full solution</summary>

No. Two predictors differing only where the input law puts zero probability have identical risk, and a low-risk predictor can still behave arbitrarily there. Parameter or pointwise recovery requires identification and support assumptions beyond the PAC error-mass statement.

</details>
