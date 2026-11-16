var e=`---
id: deep-dive-bayes-from-scratch
title: "Bayesian Inference from Scratch: Learning by Reweighting Possibilities"
license: CC BY-SA 4.0
---

# Bayesian Inference from Scratch: Learning by Reweighting Possibilities

**Before reading.** Read [Ratio and Proportion](../books/number-and-arithmetic/ratio-proportion.md) and [Probability You Can Touch: Coins, Bags, and New Information](../deep-dives/probability-you-can-touch.md). These are preparation for the ideas used below.

Bayesian inference can be understood before calculus: begin with possible explanations, predict what each would tend to produce, and reweight the explanations after observing evidence. The mathematics is conditional probability; the intellectual work is choosing possibilities and predictions that deserve to be compared.

This gentle deep dive assumes fractions, ratios, and basic probability by counting. It builds the conditional-probability ideas it needs from exact tables, then points toward continuous and computational models. It does not claim that a prior is automatically objective or that a posterior is correct when the model is wrong.

## 1. The mystery-bag experiment

One of three bags is chosen by rolling a fair three-sided spinner:

\`\`\`text
bag A: 9 blue, 1 gold     prior chance 1/3
bag B: 5 blue, 5 gold     prior chance 1/3
bag C: 1 blue, 9 gold     prior chance 1/3
\`\`\`

One token is drawn and it is blue. Which bag is now most plausible?

Before seeing data, each bag has **prior probability** $1/3$. The probability of blue under each bag—the **likelihood** of the observed evidence—is $.9$, $.5$, and $.1$. Multiply prior by likelihood:

\`\`\`text
hypothesis   prior   P(blue | bag)   unnormalized weight
A             1/3          .9                .30
B             1/3          .5                .1667
C             1/3          .1                .0333
\`\`\`

The weights total $.50$. Divide each by $.50$ to obtain posterior probabilities $.60$, $.333\\ldots$, and $.0667$. Bag A did not become certain; the blue token merely favored explanations that predicted blue more strongly.

Bayes’ rule summarizes the calculation:

$$P(H|D) = P(D|H)P(H) / P(D)$$

The denominator $P(D)=\\sum_{h} P(D|h)P(h)$ normalizes all possibilities to total one. A table is also a nonvisual alternative to a probability tree: imagine 300 repetitions, 100 starting with each bag. About 90, 50, and 10 produce blue. Among the 150 blue outcomes, about 90 came from A, so $90/150=.60$.

## 2. Likelihood ratios say what the evidence did

Posterior odds have a particularly clear form:

$$\\frac{P(A\\mid D)}{P(B\\mid D)}
=\\frac{P(A)}{P(B)}\\frac{P(D\\mid A)}{P(D\\mid B)}.$$

Here the prior odds A:B are $1:1$. The blue token has likelihood ratio $.9/.5=1.8$, so posterior odds are $1.8:1$. Evidence and prior contributions are visible separately.

If the prior chances had been A $.10$, B $.80$, C $.10$, the same blue token would not make A most probable. The unnormalized weights would be $.09$, $.40$, $.01$, giving posterior $.18$, $.80$, $.02$. Saying “the evidence favors A over B” is compatible with “B remains more probable” because B began with much larger prior weight.

## 3. Repeated evidence and dependence

Suppose draws are made **with replacement**, so the bag’s composition remains fixed. Observing blue, blue has likelihood $.9^{2}=.81$ under A, $.5^{2}=.25$ under B, and $.1^{2}=.01$ under C. With equal priors, posterior weights are proportional to $.81,.25,.01$, giving approximately $.757,.234,.009$.

If draws are **without replacement**, multiplying the same probability twice is wrong. Under A, two blues have probability $(9/10)(8/9)=.8$, not $.81$; under B it is $(5/10)(4/9)=2/9$; under C it is zero. The sampling mechanism determines the likelihood.

**Common error.** Multiplying likelihoods assumes conditional independence given the hypothesis. Two measurements from the same person or day may share noise. Pretending they are independent counts the same evidence more than once and makes a posterior too concentrated.

## 4. A testing example and the base-rate boundary

**Worked example.**

A condition affects 1 in 100 people. A test is positive for 90% of affected people and 5% of unaffected people. Among 10,000 comparable people, a frequency table predicts:

\`\`\`text
                    positive   negative   total
condition present       90         10       100
condition absent       495       9405      9900
total                  585       9415     10000
\`\`\`

Therefore $P(condition | positive)=90/585\\approx.154$, not 90%. Sensitivity $P(positive|condition)$ reverses the condition and is not the desired posterior probability. The low base rate supplies a strong prior imbalance.

This is a mathematical illustration, not medical guidance. Real test interpretation depends on the population, selection into testing, verification, changing prevalence, and uncertainty in sensitivity and specificity.

## 5. Learning an unknown coin probability

Instead of three hypotheses, imagine eleven candidate probabilities for a coin: $p=0,.1,\\ldots,1$. Give them equal prior weights. After observing $s$ heads and $f$ tails in conditionally independent flips, reweight each candidate by

$$p^{s}(1-p)^{f}$$

For 3 heads and 1 tail, candidates around $.7$ or $.8$ get more weight than $.1$, while $p=1$ gets zero because it predicted tails were impossible. Normalize the weights and compute predictions by averaging over candidates:

$$P(next is head | data)=\\sum_{p} p P(p|data)$$

This finite grid is a complete Bayesian model. Making the grid finer approaches a continuous prior. With a Beta($a,b$) prior density proportional to $p^{a-1}(1-p)^{b-1}$, binomial data produce a Beta($a+s,b+f$) posterior. This is called **conjugacy** because prior and posterior have the same form.

With a uniform Beta(1,1) prior and 3 heads, 1 tail, the posterior is Beta(4,2), whose mean is $4/(4+2)=2/3$. The observed fraction is $3/4$; the posterior mean is pulled toward the prior mean $1/2$. This is not a universal “add one” law. It follows from this particular prior and likelihood.

## 6. Prior predictive checks and sensitivity

Before observing the real data, generate or enumerate what the prior model predicts. If a prior for a class pass rate makes 0% or 100% almost routine when those outcomes are implausible, revise it. A **prior predictive check** catches consequences hidden by parameter notation.

After inference, repeat the analysis using several defensible priors. If a practical conclusion changes, report that sensitivity; do not hide it by selecting the preferred result. Strong data under an identifiable model often reduce prior influence, but “the data overwhelm the prior” is not guaranteed in sparse, weakly identified, high-dimensional, or selected data.

Priors may encode previous studies, scientific scale information, symmetry, regularization, or a deliberately weak baseline. Their provenance belongs in the report. A supposedly “noninformative” prior can become informative after changing coordinates.

## 7. Posterior prediction and decisions

A posterior describes uncertainty about unknown quantities **conditional on the model and observed data**. A posterior predictive distribution also averages future sampling variation:

$$P(new data | old data)=\\sum_{h} P(new data|h)P(h|old data)$$

in a discrete model, with an integral replacing the sum in continuous models.

Decisions additionally require consequences. If one action is costly but missing a rare event is far worse, the probability threshold should reflect those losses. Bayes’ theorem does not choose values for us; it combines probability with an explicit loss model once consequences are stated.

## Exercises with worked answers

### 1. Unequal priors

<a id="deep-dive-bayes-from-scratch-ex-1"></a>

**Exercise 1.**

Two factories produce 80% and 20% of a store’s lamps. Their defect rates are 1% and 4%. A purchased lamp is defective. What is the probability it came from the second factory?


<details>
<summary>Hint 1</summary>

The defective lamp is more likely to come from a factory that both supplies many lamps and has defects often.
</details>
<details>
<summary>Hint 2</summary>

Multiply each factory share by its defect rate before normalizing the two weights.
</details>
<details>
<summary>Solution</summary>

Weights are $.80\\times .01=.008$ and $.20\\times .04=.008$. Normalizing gives $.5$ for each. The second factory’s higher defect rate exactly offsets its smaller production share.

</details>

### 2. Evidence against certainty

<a id="deep-dive-bayes-from-scratch-ex-2"></a>

**Exercise 2.**

Using the equal-prior bags, observe one gold token with replacement. Find posterior probabilities.


<details>
<summary>Hint 1</summary>

Start with the three equal prior weights, then use the chance of a gold observation under each bag.
</details>
<details>
<summary>Hint 2</summary>

Normalize the three gold likelihoods together; one observed token should not force posterior certainty.
</details>
<details>
<summary>Solution</summary>

Likelihoods are $.1,.5,.9$. Equal-prior weights normalize in the same ratio, giving A $.0667$, B $.3333$, C $.60$. One observation reverses which extreme bag is favored but does not establish certainty.

</details>

### 3. Dependence audit

A website classifies the same photograph with five nearly identical models and multiplies their probabilities as if independent. What is the risk?

**Answer.** Shared training data, architecture, and image features make errors dependent. Multiplying likelihoods can count correlated evidence repeatedly, producing unjustified confidence. A joint dependence model or validation of the ensemble is needed.

### 4. Sensitivity table

A hypothesis has likelihood ratio 4 in its favor. Compute posterior probability for prior probabilities $.01$, $.20$, and $.50$.

**Answer.** Convert prior probability $q$ to odds $q/(1-q)$, multiply by 4, then convert back. Results are approximately $.0388$, $.50$, and $.80$. The same evidence has different posterior consequences because starting odds differ.

### 5. Transfer

Create three competing explanations for a late train. Assign transparent prior weights, state the probability each gives to a 20-minute delay, and update. Then name an omitted explanation and one dependence that could make your likelihoods unreliable.

**Answer standard.** Numbers may vary. A sound response normalizes weights, distinguishes $P(delay|cause)$ from $P(cause|delay)$, and treats model incompleteness as a limitation rather than forcing all posterior mass onto the listed causes.

## Continuation and limits

Continue to Bayesian inference for continuous parameters, hierarchical models for partially pooled groups, and Bayesian computation for distributions that cannot be normalized by hand. The simulation course develops grid approximation and Markov chains; statistical workflow material adds data provenance and posterior predictive checks. Deeper study should cover decision theory, model comparison, causal identification, approximate inference, and prior robustness. Bayesian inference does not replace good sampling, randomization, measurement, or criticism: it makes conditional learning coherent only inside a stated probability model.

## When the model assigns the evidence probability zero

Return to the three bags. Suppose the drawn token is green. Every listed bag contains only blue and gold tokens, so $P(green\\mid A)=P(green\\mid B)=P(green\\mid C)=0$. The normalizing denominator in Bayes' rule is zero. There is no posterior distribution over the three bags under this model: dividing $0$ by $0$ would conceal the fact that the observed event was ruled out in advance.

Possible repairs depend on the situation. The bag description may be incomplete; a fourth bag may exist; labels may be misread; or drawing and recording may have an error rate. Each repair changes the likelihood model and needs a reason. Assigning a tiny arbitrary probability to green solely to make the formula produce numbers is a computational patch, not an explanation. A model that cannot express what happened deserves criticism before it deserves updating.

This is the sharpest version of a broader problem. A model can assign an event very small but nonzero probability, produce a perfectly normalized posterior, and still be a poor account of the data-generating process. Posterior coherence is conditional coherence.

## Prediction makes the posterior testable

With equal bag priors, the chance of blue on the first draw is $(.9+.5+.1)/3=.5$. After one blue, the posterior weights are $.6,1/3,1/15$. If tokens are replaced, the predicted chance of a *second* blue is

$$\\frac35\\frac9{10}+\\frac13\\frac12+\\frac1{15}\\frac1{10}=\\frac{107}{150}\\approx0.713.$$

We average the bag-specific probabilities using updated weights. We do **not** simply use $.9$, the probability under the single most plausible bag; uncertainty about which bag was chosen remains. Nor do we repeat the prior predictive value $.5$, because the first blue changed the weights.

Without replacement, the first draw also changes each bag's composition. After blue, the next-blue probabilities are $8/9$, $4/9$, and $0$ for A, B, and C. The posterior weights after the first blue are unchanged, but the predictive chance becomes

$$\\frac35\\frac89+\\frac13\\frac49+\\frac1{15}\\cdot0=\\frac{92}{135}\\approx0.681.$$

The two predictions differ because they answer different physical experiments. This is an effective model check: ask what the model predicts next, then compare repeated predictions with observations made under a clearly recorded sampling protocol. A mismatch may implicate the prior, likelihood, dependence assumptions, or even the list of possible bags; one surprising token alone does not identify which component failed.

### Practice with feedback

1. After the first blue token, what is the posterior probability of bag C? Why is it not zero?
2. A student predicts the next draw by using only bag A because it has the largest posterior weight. What uncertainty was discarded?
3. If a green token appears, why can you not rank A, B, and C by calculating $P(bag\\mid green)$ under the original model?

**Answers.** (1) It is $1/15$. Bag C made blue unlikely, but possible, so one blue does not eliminate it. (2) The bag identity remains unknown; a predictive probability averages over A, B, and C with their posterior weights. (3) The event has zero probability under every hypothesis, so the denominator is zero. Review the observation protocol or expand the model, then state the new assumptions before updating. If answer 2 felt surprising, calculate the predictive probability directly from a probability tree and compare it with the weighted average above.
`;export{e as default};