# Choose an experiment for the question you need to answer

Bayesian inference updates uncertainty after a result arrives. Experimental design asks which measurement to take while that result is still unknown. You must average over possible results, decide what counts as a useful change, and account for the cost of collecting information.

By the end, derive the prior predictive probabilities, enumerate the posterior branches, compute expected information gain, and compare it with the improvement in an explicit decision. You need finite Bayes updates and expected loss from [Chapter 1](../../books/bayesian/01_bayes.md) and [Chapter 12](../../books/bayesian/12_decisions.md).

Before reading further, write a prediction: **must the test that tells us most about the world also improve our next decision most?** Keep the prediction to revisit after the example.

## A machine and two measurements

A machine remains in one of three states during the measurement and decision. The incoming probabilities and the chance of a positive measurement are stipulated:

| Fixed machine state | Prior | Wear assay positive | Jam probe positive |
|---|---:|---:|---:|
| Ready | 3/5 | 1/10 | 1/10 |
| Worn | 3/10 | 9/10 | 1/10 |
| Jammed | 1/10 | 11/30 | 9/10 |

Each assay has two possible outcomes, positive and negative; each negative probability is one minus its positive probability. Each costs 1/4 loss unit. These are fictional rates chosen to make the reasoning transparent. They are treated as known; uncertain calibration rates would need a larger model.

We will either **run** or **service** the machine after the result. Running a jammed machine incurs loss 20; running either other state incurs loss zero. Servicing incurs loss 3 in every state. Loss is a common consequence scale for this example, not a measured currency or a safety recommendation.

| Action | Ready loss | Worn loss | Jammed loss |
|---|---:|---:|---:|
| Run | 0 | 0 | 20 |
| Service | 3 | 3 | 3 |

The action model deliberately treats ready and worn alike. Learning their distinction can be useful for another goal, but cannot change their loss under these two actions.

**Retrieve:** Which table describes how evidence behaves given the state? Which table expresses consequences of actions? Explain why an experiment cannot be ranked for decision value using only the first table.

## Enumerate before observing

Let $s$ denote a state, $d$ an assay and $y$ its result. Write the prior as $p(s)$ and its likelihood as $p(y\mid s,d)$. For each possible result, multiply and sum:

$$
p(y\mid d)=\sum_s p(s)p(y\mid s,d),\qquad
p(s\mid y,d)=\frac{p(s)p(y\mid s,d)}{p(y\mid d)}.
$$

The denominator is the **prior predictive probability of this result**. The update applies when it is positive. A result with zero predictive probability contributes zero to the pre-experiment average; its posterior is undefined under the model.

For the jam probe, positive probability is

$$
(3/5)(1/10)+(3/10)(1/10)+(1/10)(9/10)=9/50.
$$

The positive joint weights are $(3/50,3/100,9/100)$. Dividing by $9/50$ gives posterior $(1/3,1/6,1/2)$. Repeat for a negative result and for the wear assay:

| Assay and result | Result probability | Posterior ready | Posterior worn | Posterior jammed |
|---|---:|---:|---:|---:|
| Wear positive | 11/30 | 9/55 | 81/110 | 1/10 |
| Wear negative | 19/30 | 81/95 | 9/190 | 1/10 |
| Jam positive | 9/50 | 1/3 | 1/6 | 1/2 |
| Jam negative | 41/50 | 27/41 | 27/82 | 1/82 |

Every posterior row sums to one. More strongly, averaging its state probabilities with the result probabilities recovers the original prior:

$$
\sum_y p(y\mid d)p(s\mid y,d)=p(s).
$$

This identity checks the branches, the denominators and the averaging weights together. Weighting positive and negative equally would generally fail it.

The wear assay's jammed likelihood, $11/30$, equals its positive rate among the nonjammed mixture:

$$
\frac{(3/5)(1/10)+(3/10)(9/10)}{9/10}=11/30.
$$

Consequently it leaves the jam probability at 1/10 after either result while separating ready from worn. This property uses the specified ready-to-worn ratio of two to one; changing that ratio need not preserve it.

## Measure information about the complete state

For a finite probability distribution, Shannon entropy in bits is

$$
H(S)=-\sum_s p(s)\log_2 p(s),
$$

with zero terms contributing zero. The prior entropy is 1.295462 bits. A design's expected information gain averages the entropy change over all results:

$$
I_d=H(S)-\sum_y p(y\mid d)H(S\mid y,d).
$$

This is mutual information between the fixed unknown state and the future observation under the chosen design. The information objective is standard in Bayesian experimental design; see [Foster and colleagues, section 2.1](https://arxiv.org/html/1911.00294v2).

| Assay | Expected posterior entropy | Expected information gain |
|---|---:|---:|
| Wear | 0.864287 bits | 0.431174 bits |
| Jam | 1.084380 bits | 0.211081 bits |

The wear assay has higher expected information about the complete state. The table averages each posterior entropy using its own result probability. It does not compare the most dramatic branch from each assay.

An equivalent calculation is the predictive average of posterior-to-prior Kullback–Leibler divergence:

$$
I_d=\sum_y p(y\mid d)\sum_s p(s\mid y,d)
      \log_2\frac{p(s\mid y,d)}{p(s)}.
$$

To verify the equivalence, distribute the logarithm into posterior and prior terms. The first averaged sum is minus expected posterior entropy. In the second, the averaged posterior identity above replaces $\sum_y p(y\mid d)p(s\mid y,d)$ by $p(s)$, leaving prior entropy. A zero prior state cannot acquire positive posterior mass through a finite likelihood.

The expectation is essential. A **particular** observation can raise entropy. After a positive jam result, the posterior $(1/3,1/6,1/2)$ has entropy 1.459148 bits, higher than the prior's 1.295462 bits. The result challenges a previously concentrated belief. This does not contradict nonnegative expected information gain. Nor does this individual entropy change equal the posterior-to-prior divergence for that result; those expressions agree after the appropriate expectation.

**Explain:** Why would choosing the assay whose positive result has the lowest posterior entropy use the wrong objective? Where did the probability of obtaining that positive result enter your reasoning?

## Measure improvement in the action

For posterior state probabilities $q$, the Bayes risk is the smallest expected loss among available actions:

$$
R(q)=\min_a\sum_s q(s)L(a,s).
$$

Running has expected loss $20q(\text{jammed})$; service has loss 3. Service is preferred when jam probability exceeds $3/20$, running when it is below, and both actions are optimal at equality.

Before testing, run has risk 2 and service has risk 3, so we run. The value of sample information is the reduction in risk obtained by letting the action depend on the result:

$$
\operatorname{EVSI}(d)=R(p)-\sum_y p(y\mid d)R(p(\cdot\mid y,d)).
$$

Minimize **inside** the result average: we can choose a different action after each result. Minimizing only after averaging posteriors would reconstruct the prior and throw away this ability. This decision-based definition and the option to ignore free information are discussed by [Poole and Mackworth, section 9.4](https://www.cs.ubc.ca/~poole/aibook/html1e/ArtInt_223.html).

The wear assay leaves jam probability at 1/10 in both branches. Run is optimal both times, the posterior risk is always 2, and EVSI is zero. Its substantial state information cannot improve this particular decision.

For the jam probe, choose service after positive and run after negative:

$$
\operatorname{E}[R\mid\text{jam probe}]
=\frac{9}{50}(3)+\frac{41}{50}\left(20\frac{1}{82}\right)
=\frac{37}{50}=0.74.
$$

Its EVSI is $2-37/50=63/50=1.26$. After paying cost $1/4$, net value is $101/100=1.01$. The wear assay's net value is $-1/4$. Acting now has net improvement zero, so the specified decision favors the jam probe over either the wear assay or immediate action.

We have opposite rankings: **wear reveals more about the complete state; jam helps this action more.** EIG measures bits. EVSI and assay cost use loss units. Combining them would require an explicit preference converting information into consequences.

For these fixed actions and a noninvasive observation, free information cannot worsen the optimized expected loss: the agent can ignore every result and keep its old action. Paid information may have negative net value. If measurement changes the machine, delays a decision, or constrains the available actions, those effects must enter the model before using this argument.

Perfect state observation provides a useful ceiling. We would run ready and worn machines and service jammed ones, giving risk $3/10$. Thus no observation in this model can reduce risk by more than $2-3/10=17/10$. This ceiling is in loss units, separate from the information ceiling $I_d\leq H(S)$.

## Predict a changed prior before running code

Keep the two-to-one ready-to-worn ratio but reduce prior jam probability to 1/100. Will a positive jam result cross the action threshold? Use odds or the table before running:

```sh
python3 -B extensions/experiment_design_v1/design.py --jam-prior 0.01
```

A positive jam probe now gives jam probability $1/12$, below $3/20$. Both branches choose run. Its expected information remains positive, about 0.024858 bits, but EVSI is zero. Neither paid assay improves this decision.

Changing the prior changes both result frequencies and the meaning of their results. Changing the losses can also change decision value without changing EIG. Identify which of these two changes you made whenever you compare designs.

## Repeated evidence needs a model

For two fresh assays conditionally independent given the fixed state, multiply their likelihoods within each state. Two positive jam probes then have joint probability

$$
(9/10)(1/10)^2+(1/10)(9/10)^2=9/100,
$$

where the nonjammed states have been combined. Jam probability after both positives is $9/10$. After the first positive it was only $1/2$.

The second positive is not marginally independent of the first: $9/100\neq(9/50)^2$. Both are informative about the same unknown state. Copying the first result into another column supplies no new measurement and leaves the posterior at $1/2$. Shared sensor faults can also invalidate the independent-product model.

The function `independent_pair` in [design.py](../../downloads/bayesian/extensions/experiment_design_v1/design.py) explicitly assumes fresh conditionally independent results. It describes a fixed pair, with both measurement costs incurred. It does not optimize an adaptive stop-or-continue policy.

## Check your explanation

Return to your opening prediction. Explain the ranking using the state distinction each assay reveals, the threshold that changes the action, and the units of each objective. Then attempt [the practice tasks](./experiment_design_v1-practice.md) before reading [worked answers](./experiment_design_v1-answers.md).

A complete analysis states the prior, likelihoods, available actions, losses, measurement costs and timing assumptions; averages over all possible observations; and distinguishes what the calculation establishes from whether those assumptions describe the actual problem.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/experiment_design_v1.pdf), the lesson and practice without worked answers.
