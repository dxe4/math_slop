
# No Free Lunch: Structure and Unseen Labels

A learning guarantee needs restrictions somewhere: on the predictor family, the distribution, the loss or the intended comparison. This chapter proves a precise impossibility result when labels on many possible inputs are unconstrained. The result is a finite probability calculation, not a slogan that all methods are equally useful. It gives an exact minimax expected risk in one experiment and explicit distribution-free PAC obstructions.

Preparation for the finite experiment is the tuple, the realizable PAC definition and elementary conditional expectation. The extension to rich classes uses shattering, defined here and developed fully in the following VC chapter. The learner may be randomized and may return a rule outside the reference class. Its random seed is independent of the data and of the auxiliary random target used in the proof.

## The finite experiment and its unknown target

Fix m possible inputs with uniform input law. A target assigns a deterministic binary label to every input. Observations are n independent input draws with those labels attached; repetitions are allowed. At a seen input, the target label has been observed. At an unseen input, the sample supplies no direct label information. A fresh observation uses the same uniform law.

For the lower bound, temporarily draw all m target labels independently as fair bits. This is a proof device: after averaging, we will select one fixed target with at least the average difficulty. It does not impose a scientific prior on an application and does not assume that real labels are random coin flips.

Condition on the training inputs, every label that has been observed, and the learner's seed. An unseen target bit remains a fair independent bit under this auxiliary experiment. Whichever prediction the learner makes there, its conditional error probability is one half. On a seen input its error is nonnegative. Hence its expected population risk, averaged over targets, training and seed, is at least one half of the probability that a new input was unseen in training.

For each input that unseen probability is one minus one over m to the power n. Averaging over the uniform test input gives
$$E_{\rm target,S,U}R(A(S,U))\ge\frac12(1-1/m)^n.$$
Because this is an average over finitely many fixed target functions, at least one fixed target has expected learner risk at least the displayed value. The learner was arbitrary, so the conclusion also covers improper learners and complicated computational procedures.

## The bound is the exact randomized minimax expectation

There is a procedure attaining the bound for every fixed target. Memorize all observed labels. At every unseen input, choose an independent fair prediction bit as part of the algorithmic seed. On a seen input it is correct; on an unseen input its expected error over that seed is one half. Consequently its expected population risk equals the lower bound for every target.

The worst-target expected risk of this procedure therefore matches the universal lower bound. This proves the exact randomized minimax expected risk for this finite uniform experiment. It does not say every algorithm has identical risk: an algorithm deliberately contradicting seen labels can do worse. It also does not establish a maximum-error probability statement from an expectation without an additional argument. The choice of experiment, loss and order of averaging is essential to the equality.

### Worked example: four inputs and two observations

With four equally likely inputs and two independent training draws, a fixed test input is unseen with probability three quarters squared, equal to nine sixteenths. The exact randomized minimax expected error is therefore nine thirty-seconds. If the two observed inputs coincide, only one target label is learned; if they differ, two are learned. The formula already averages over both possibilities. Treating the sample as two draws without replacement would define another experiment and give a different unseen probability.

No computation or statistical approximation is needed for this result. It is a finite counting and conditioning identity, and a data table with four stored rows is not itself this iid observation mechanism unless sampling with replacement was actually declared.

## From expected error to a fixed positive failure probability

Set m equal to twice n for a positive n. Bernoulli's inequality gives unseen probability at least one half, so some fixed target has expected risk at least one quarter. A random variable R between zero and one satisfies
$$ER\le a+(1-a)P(R>a).$$
Indeed, on the event R at most a its contribution is bounded by a, and elsewhere by one. Set a equal to one eighth. The chosen target then has probability of risk exceeding one eighth at least one seventh.

Thus for each sample size there is a realizable finite-support distribution and a fixed target defeating any proposed uniform guarantee with these accuracy and failure parameters. The target can depend on the proposed learner and sample size, which is exactly what a distribution-free impossibility quantifier permits. The theorem does not require one single target to defeat every algorithm at every n.

## Infinite shattering rules out distribution-free realizable PAC

A finite input set is shattered when the class realizes every binary assignment on it. Infinite VC dimension means such shattered sets exist at every finite size. If H has infinite VC dimension, then for every n it shatters a set of twice n inputs. Restrict the input law to the uniform law on those points. Every assignment used in the preceding random-target argument is represented by some member of H, so every resulting distribution is realizable by H. The lower bound therefore applies even if the learner is permitted to predict outside H.

For accuracy one eighth and any failure target strictly below one seventh, no sample-size choice can make the realizable PAC statement hold uniformly over these laws. This proves that infinite VC dimension prevents distribution-free realizable PAC learning under the stated measurable binary experiment. It does not prove that every distribution with a rich class is difficult, nor that an algorithm cannot learn a particular structured target.

For finite VC dimension d, the same argument already gives a constant-accuracy sample obstruction whenever twice n does not exceed d. A stronger rare-input construction makes the inverse-accuracy dependence explicit.

## A dimension-over-accuracy lower bound

Assume H shatters d inputs with d at least two. Fix epsilon between zero and one eighth. Put total probability p equal to eight epsilon on d minus one rare inputs, equally divided, and the remaining probability on an anchor input. Give the anchor label zero and draw the rare labels independently as fair bits in the proof experiment. Shattering supplies all these target assignments inside H.

A particular rare input is unseen with probability one minus p divided by d minus one to the power n. Let L be the learner's risk contribution on the rare inputs only. Averaging over the random target as before yields
$$EL\ge\frac p2\left(1-\frac p{d-1}\right)^n.$$
If $n\le(d-1)/(16\varepsilon)$, Bernoulli's inequality makes the parenthesized power at least one half. Thus expected L is at least two epsilon. Also L is bounded between zero and p, whether or not the algorithm errs on the anchor. Splitting at epsilon gives
$$EL\le\varepsilon+(p-\varepsilon)P(L>\varepsilon).$$
It follows that the average failure probability is at least one seventh. Some fixed target has at least that failure probability, and its total risk is at least L. This proves a constant-confidence sample requirement of order d divided by epsilon with explicit constants.

The argument works by bounding rare-region risk separately. Applying only the crude total-risk upper bound one would lose a factor depending on epsilon and would not establish the stated constant failure probability. The distinction matters when turning an expected minimax bound into a PAC lower bound.

### Worked example: rare inputs consume the accuracy budget

Suppose the class shatters seventeen inputs and the desired error is one hundredth. Allocate eight hundredths of input mass equally among sixteen rare sites, with the rest on the anchor. Each rare site has mass one two-hundredth. For a training size at most one hundred, the displayed condition holds. The proof gives a fixed realizable target for which population error exceeds one hundredth with probability at least one seventh. A large fraction of repeated anchor observations cannot identify the many rare labels. This is a mathematical experiment illustrating the role of support mass, not a statement about a supplied empirical dataset.

## A confidence lower bound from one hidden bit

Two shattered inputs suffice for another obstruction. Give the rare input probability two epsilon, where epsilon is at most one quarter, and fix the anchor label zero. Compare the two possible labels at the rare input. With probability one minus two epsilon to the n, no rare input appears. Conditional on that event, the observation laws under the two targets agree, so averaged over the two equally likely targets any learner is wrong about the rare label with probability one half.

A wrong rare label produces risk at least two epsilon, exceeding epsilon. Therefore some fixed target has failure probability at least one half times one minus two epsilon to the n. To make that bound at most delta below one half requires
$$n\ge\frac{\log(1/(2\delta))}{-\log(1-2\varepsilon)}.$$
For epsilon at most one quarter, integrating one over one minus t bounds the denominator by four epsilon. Thus a necessary sample scale includes log one over delta divided by epsilon as well as the dimension contribution. Taking the maximum of the two necessary bounds combines them; the maximum is at least half their sum. These are lower bounds on what any learner can guarantee, while the earlier PAC chapter gives sufficient bounds for particular conditions.

## Distributionwise consistency can coexist with this impossibility

Now fix one probability law on the countable positive integers and a deterministic binary target. The class of all binary functions on this domain has infinite VC dimension. Nevertheless a learner that memorizes observed labels and predicts zero elsewhere is consistent for every fixed such law.

To prove it, choose any finite input set containing all but an arbitrarily small probability mass; such a set exists because the countable probabilities sum to one. Every point in that finite set with positive probability is eventually observed almost surely, since the chance it remains unseen after n draws tends to zero. A finite union makes the entire chosen set eventually observed. Thereafter any classification error lies outside it, with risk at most its arbitrarily small remaining mass. Using a countable sequence of such finite sets proves almost-sure risk convergence to zero.

### Worked example: the order of the quantifiers changes

The memorization result says that for each fixed distribution and target, the required observation time can depend on that distribution's tail masses. The no-free-lunch result says no single finite sample-size rule depending only on accuracy and failure level works for all distributions in this infinite-VC class. These statements differ by the order of the distribution and sample-size quantifiers, so neither contradicts the other.

A distribution with most mass on a few inputs can be easy for memorization, while another can spread mass over many unseen labels. Calling both “unstructured classification” does not erase their different finite-sample information. Structure, support and the scope of uniformity should therefore accompany every claim about a learning method.

## Sampling without replacement changes the exact obstruction

If training instead selects n distinct inputs uniformly without replacement from the finite m-point domain, with n at most m, the unseen fraction is exactly one minus n divided by m. Independent fair target labels still hide every unobserved bit, so the same conditioning proof gives half that fraction as the randomized minimax expected risk. Memorizing seen labels and guessing fairly elsewhere again attains it for every target.

At n equal to m, every input label has been observed and the minimax risk is zero. In the with-replacement experiment, even m draws can repeat some inputs and omit others, leaving the positive expected risk calculated earlier. Thus the lower bound is not an intrinsic number attached only to the target class and stored sample size. It also depends on how observations are collected.

This alternative does not invalidate the iid PAC results; it defines a different finite-population sampling experiment. A proof should keep one mechanism throughout rather than using without-replacement coverage in an iid lower bound or using independent-trial probabilities for a sample that is constrained to contain distinct inputs. Unseen independent labels give the finite-domain minimax obstruction, and changing the sampling mechanism changes its exact value. The next chapter, VC Dimension, quantifies restrictions on label patterns that can make distribution-free learning possible.

## Exercises

<a id="no-free-lunch-ex-1"></a>

### Exercise 1

Derive the unseen probability for one fixed input under uniform sampling with replacement.

<details><summary>Hint 1</summary>

Each observation avoids it with probability one minus one over m.

</details>

<details><summary>Hint 2</summary>

The n avoidance events are independent.

</details>

<details><summary>Full solution</summary>

The probability is $(1-1/m)^n$. Averaging over the uniform fresh input gives the same value for the expected unseen probability mass. Without-replacement sampling has another formula and is not this experiment.

</details>

<a id="no-free-lunch-ex-2"></a>

### Exercise 2

Why are unseen target labels still fair after conditioning on the training data?

<details><summary>Hint 1</summary>

The proof target assigns independent bits to all inputs.

</details>

<details><summary>Hint 2</summary>

Training reveals only bits at inputs actually observed.

</details>

<details><summary>Full solution</summary>

The prior product of independent fair bits factorizes between seen and unseen coordinates. Conditioning on observed inputs and their labels fixes only the seen bits. The independent algorithmic seed gives no additional target information, so each unseen bit remains fair.

</details>

<a id="no-free-lunch-ex-3"></a>

### Exercise 3

Prove that an average-target lower bound implies a fixed-target lower bound.

<details><summary>Hint 1</summary>

There are finitely many targets.

</details>

<details><summary>Hint 2</summary>

An average cannot exceed every summand.

</details>

<details><summary>Full solution</summary>

If every fixed target had expected risk strictly below the displayed lower bound, their uniform average would also be strictly below it. Hence at least one target reaches or exceeds the average lower bound. This selects a fixed data-generating target after the averaging proof.

</details>

<a id="no-free-lunch-ex-4"></a>

### Exercise 4

Show how expectation at least one quarter yields failure probability at least one seventh at error threshold one eighth.

<details><summary>Hint 1</summary>

Use the unit upper bound on risk.

</details>

<details><summary>Hint 2</summary>

Solve the resulting linear inequality.

</details>

<details><summary>Full solution</summary>

$ER\le1/8+(7/8)P(R>1/8)$. Combining with $ER\ge1/4$ gives $P(R>1/8)\ge(1/8)/(7/8)=1/7$. The boundedness assumption is part of this conversion.

</details>

<a id="no-free-lunch-ex-5"></a>

### Exercise 5

Explain why randomized memorization attains the finite lower bound for every fixed target.

<details><summary>Hint 1</summary>

It makes no errors on seen inputs.

</details>

<details><summary>Hint 2</summary>

A fair seed prediction is wrong half the time at each unseen input.

</details>

<details><summary>Full solution</summary>

For any fixed target, seed-averaged error at an unseen point is one half, while seen error is zero. Taking expectation over the training inputs gives exactly half the unseen probability. Thus its worst-target expected risk matches the lower bound.

</details>

<a id="no-free-lunch-ex-6"></a>

### Exercise 6

Why does infinite VC dimension make every target assignment in the finite construction realizable?

<details><summary>Hint 1</summary>

Use the definition of shattering.

</details>

<details><summary>Hint 2</summary>

Only the chosen finite support carries probability.

</details>

<details><summary>Full solution</summary>

Shattering provides a class member for every binary assignment on the chosen support. Extend each assignment with that member outside the support; those outside values have no effect on the constructed input law. Every target distribution in the averaging argument therefore has a zero-risk member of H.

</details>

<a id="no-free-lunch-ex-7"></a>

### Exercise 7

In the rare-input proof, why is it useful to bound the rare-region risk by p rather than total risk by one?

<details><summary>Hint 1</summary>

The expected lower bound is proportional to epsilon.

</details>

<details><summary>Hint 2</summary>

The upper range must have the same scale to obtain constant failure probability.

</details>

<details><summary>Full solution</summary>

The rare contribution satisfies $0\le L\le p=8\varepsilon$ and $EL\ge2\varepsilon$. Thus $P(L>\varepsilon)\ge\varepsilon/(7\varepsilon)=1/7$. Using only total risk at most one would yield a weaker epsilon-dependent bound and would not prove the claimed constant-confidence obstruction.

</details>

<a id="no-free-lunch-ex-8"></a>

### Exercise 8

Derive the log-confidence necessity from the two-target rare-bit construction.

<details><summary>Hint 1</summary>

On no rare observations, the two sample laws agree.

</details>

<details><summary>Hint 2</summary>

The average error about that hidden bit is at least one half.

</details>

<details><summary>Full solution</summary>

The worst-target failure is at least $\frac12(1-2\varepsilon)^n$. Requiring it no larger than delta gives the displayed logarithmic inequality. Since $-\log(1-2\varepsilon)\le4\varepsilon$ for $\varepsilon\le1/4$, it implies $n\ge\log(1/(2\delta))/(4\varepsilon)$.

</details>

<a id="no-free-lunch-ex-9"></a>

### Exercise 9

Does no free lunch say all algorithms have identical average performance?

<details><summary>Hint 1</summary>

The lower bound permits algorithms that waste observed information.

</details>

<details><summary>Hint 2</summary>

One algorithm could intentionally mislabel seen inputs.

</details>

<details><summary>Full solution</summary>

No. The theorem gives a universal lower bound and identifies one randomized procedure attaining it in the specified experiment. An algorithm that deliberately predicts the wrong seen label can have larger risk. Assertions of equality for all algorithms require different restrictions and should not be inferred from this proof.

</details>

<a id="no-free-lunch-ex-10"></a>

### Exercise 10

Explain why countable-domain memorization consistency does not supply a distribution-free PAC sample size.

<details><summary>Hint 1</summary>

The finite high-mass set depends on the fixed input law.

</details>

<details><summary>Hint 2</summary>

Its time to be observed need not have a uniform bound over all laws.

</details>

<details><summary>Full solution</summary>

For each fixed law, eventually observing a finite set covering almost all its mass proves risk convergence. Across all laws, that mass can be spread over arbitrarily many inputs, making the required time arbitrarily large. The existence of a law-dependent asymptotic time does not yield one sample-size function uniform over the entire class of laws.

</details>
