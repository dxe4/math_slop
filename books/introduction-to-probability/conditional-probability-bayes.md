
# Conditional Probability and Bayes

## Information changes the reference group

Select a token uniformly from a box containing six red and four blue tokens. Before seeing anything, the red probability is $6/10$. If you learn that the chosen token came from a labelled compartment containing two red and three blue tokens, the relevant group has changed. Within that compartment, red has probability $2/5$. The event did not change after selection; the information used to assess it changed.

Conditional probability formalises this restriction and renormalisation. Bayes' rule then reverses the direction of a condition: it relates the probability of evidence under a hypothesis to the probability of the hypothesis after that evidence. The two quantities usually differ because their reference groups differ.

Preparation is [sample spaces and events](sample-spaces-events.md) and [counting](counting.md). We work with finite or countable probability laws. Every ratio definition of conditioning requires a positive denominator. Conditioning on a specified value of a continuous variable needs a different density-based treatment later, not an unexplained division by zero.

## The conditional law

**Definition 4.1 (Conditional probability).** For events $A,B$ with $P(B)>0$, define
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
The event $B$ is the information being given.

In a finite uniform model, the common elementary weight cancels, yielding $P(A\mid B)=|A\cap B|/|B|$. In a nonuniform model, the weights must still be summed; merely counting the remaining outcomes can be invalid.

**Proposition 4.2 (Conditioning gives a probability law).** For fixed $B$ with positive probability, the rule $Q(A)=P(A\mid B)$ is nonnegative, assigns $Q(\Omega)=1$ and is additive on disjoint events.

*Proof.* Numerators are nonnegative and the denominator is positive. Also $Q(\Omega)=P(B)/P(B)=1$. If $A,C$ are disjoint, then $A\cap B$ and $C\cap B$ are disjoint, so
$$
Q(A\cup C)=\frac{P(A\cap B)+P(C\cap B)}{P(B)}
=Q(A)+Q(C).
$$
The same sum argument handles countably many disjoint events in a countable mass model. ∎

Thus every event rule from earlier chapters can be used inside the conditioned model. For example, $P(A^c\mid B)=1-P(A\mid B)$. Notice that the complement remains relative to the whole outcome space, while all its probabilities are assessed under the new information.

**Example 4.3 (Conditioning on a die event).** Roll two distinguishable independent fair dice. Let $A$ mean that the sum is eight, and $B$ mean that the first die is even. There are eighteen ordered pairs in $B$. The sum-eight pairs are $(2,6),(3,5),(4,4),(5,3),(6,2)$; exactly three of them belong to $B$. Therefore
$$
P(A\mid B)=\frac3{18}=\frac16.
$$
In the reverse direction, $P(B\mid A)=3/5$, since the conditioning group now consists of the five sum-eight pairs. The probabilities differ because the same three intersection outcomes are divided by different totals.

Writing the denominator in words before calculating often prevents reversal: first-die-even records for the first conditional probability, sum-eight records for the second.

## Multiplication and sequential information

Rearranging the definition gives the multiplication rule
$$
P(A\cap B)=P(B)P(A\mid B),\qquad P(B)>0.
$$
It does not require independence. The second factor is conditional precisely because earlier information may change the remaining probabilities.

**Proposition 4.4 (A three-stage chain rule).** If $P(A)>0$ and $P(A\cap B)>0$, then
$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$

*Proof.* Substitute the definitions of the two conditional probabilities. The product is
$$
P(A)\frac{P(A\cap B)}{P(A)}
\frac{P(A\cap B\cap C)}{P(A\cap B)}
=P(A\cap B\cap C).
$$
The stated positive probabilities justify both cancellations. ∎

If a prefix event has probability zero, the full intersection also has probability zero, but a ratio conditional on that prefix is undefined. One should state that case directly instead of displaying a product containing an undefined factor.

**Example 4.5 (Three draws without replacement).** A box contains five red and three blue distinguishable counters. Draw three uniformly without replacement. The probability of the ordered colour history red, blue, red is
$$
\frac58\cdot\frac37\cdot\frac46=\frac5{28}.
$$
After a red draw, five red has become four red among seven counters; after the following blue draw, four red remain among six. The last factor refers to that particular history, not to an unchanged box.

If the question asks exactly two red counters, there are three possible positions for the blue counter. Each history has the same product numerator $5\cdot4\cdot3$ and denominator $8\cdot7\cdot6$, giving total $3(5/28)=15/28$. Equivalently, $\binom52\binom31/\binom83=30/56=15/28$. Agreement checks both the conditional update and the role of order.

## Total probability and Bayes' rule

**Theorem 4.6 (Total probability).** Let $H_1,\ldots,H_m$ partition $\Omega$, with $P(H_i)>0$ for each $i$. For every event $E$,
$$
P(E)=\sum_{i=1}^mP(E\mid H_i)P(H_i).
$$

*Proof.* The events $E\cap H_i$ are disjoint and cover $E$. Add their probabilities and use the multiplication rule on each term. ∎

Zero-probability partition cells may be omitted from the sum; they contribute zero intersection probability, but their ratio conditionals are not defined by this elementary formula.

**Theorem 4.7 (Bayes' rule).** If $P(H)>0$ and $P(E)>0$, then
$$
P(H\mid E)=\frac{P(E\mid H)P(H)}{P(E)}.
$$
For a positive-probability partition as above and $P(E)>0$,
$$
P(H_j\mid E)=
\frac{P(E\mid H_j)P(H_j)}
{\sum_iP(E\mid H_i)P(H_i)}.
$$

*Proof.* The numerator $P(E\mid H)P(H)$ equals $P(E\cap H)$. Dividing by $P(E)$ is exactly the definition of $P(H\mid E)$. Substituting the total-probability formula yields the partition form. ∎

The original weights $P(H_i)$ are often called prior probabilities, and the reweighted quantities $P(H_i\mid E)$ posterior probabilities. These are roles in a conditional calculation. They do not mean that every unknown fixed parameter automatically has a probability law; such a law must be specified when a model requires one.

**Example 4.8 (A hypothetical inspection signal).** Suppose a randomly selected item is defective with probability $0.02$. An inspection signal is positive with probability $0.90$ for defective items and $0.10$ for nondefective items. Let $D$ mean defective and $+$ mean a positive signal. Total probability gives
$$
P(+)=0.90(0.02)+0.10(0.98)=0.116.
$$
Bayes gives
$$
P(D\mid+)=\frac{0.018}{0.116}=\frac9{58}.
$$

A frequency table on a model population of ten thousand illustrates the same weights. There would be two hundred defective items, contributing one hundred eighty expected positive signals, and nine thousand eight hundred nondefective items, contributing nine hundred eighty. Among the total expected one thousand one hundred sixty positives, the defective share is $180/1160=9/58$.

The value $0.90$ answers how often a defective item signals positive. It is not the probability that a positive item is defective. The base rate matters because the nondefective group is much larger. This hypothetical calculation assesses the stated law; applying it to a real inspection system would also require appropriate selection and signal-performance assumptions.

## Odds and evidence strength

For $0<P(H)<1$, prior odds are $P(H)/P(H^c)$. If both relevant posterior probabilities are positive and the likelihoods permit the ratios, Bayes' rule gives
$$
\frac{P(H\mid E)}{P(H^c\mid E)}
=
\frac{P(H)}{P(H^c)}
\frac{P(E\mid H)}{P(E\mid H^c)}.
$$
The second factor is a likelihood ratio. The formula follows by dividing the two Bayes expressions and cancelling their common positive evidence denominator.

In the inspection example, prior odds are $0.02/0.98=1/49$, and the likelihood ratio for a positive is $0.90/0.10=9$. Posterior odds are therefore $9/49$, corresponding to probability $9/(9+49)=9/58$. Odds make the multiplicative effect visible, but they do not remove the need for the original prior and likelihood assumptions.

A zero likelihood can make an ordinary finite odds ratio unavailable. It is safer to return to Bayes' numerator and denominator than to multiply undefined or infinite expressions without qualification. Probability-zero evidence cannot be conditioned on by the ratio definition at all.

## The information-generating protocol

**Example 4.9 (Two ways to learn about two coins).** Toss two independent fair coins. Given that at least one is heads, the possible equally likely histories are $HH,HT,TH$. Therefore
$$
P(HH\mid\text{at least one head})=\frac13.
$$

Now change the information protocol. Independently select one of the two positions uniformly and reveal that selected coin. Condition on the revealed coin being heads. Extend the sample space to record both tosses and the chosen position; its eight outcomes are equally likely. The observed-head event contains $HH$ with either position selected, $HT$ with position one selected, and $TH$ with position two selected. Two of those four outcomes have $HH$, giving posterior probability $1/2$.

The statements sound similar, but they are different evidence events. A protocol determines which underlying records can produce a message and with what probability. Conditioning must include that mechanism rather than treating every sentence mentioning a head as interchangeable evidence.

## Common mistakes and interpretation

Reverse conditioning changes the denominator. Repeated evidence cannot automatically be multiplied: two signals may share a defect mechanism even after the item's state is fixed. Chapter 5 will formalise both independence and conditional independence.

Conditioning also does not establish causation. If late departures and traffic congestion are associated, knowing one may change the probability of the other without implying that changing the observed label would change the system. The probability calculation describes an information relationship under its model.

When a problem supplies numbers, first verify that each conditioning group has positive probability and that the evidence probability computed by total probability is positive. Then check that posterior weights sum to one. These are mathematical checks of the proposed law, distinct from external evidence that its assumptions fit a particular application.

## Exercises

### Exercise 4.1
<a id="conditional-probability-bayes-ex-1"></a>

A fair die is rolled. Find the probability of an even result given that the result exceeds two, and the reverse conditional probability.

<details><summary>Hint 1</summary>

The two conditioning sets have four and three outcomes respectively.

</details>
<details><summary>Hint 2</summary>

Their intersection is $\{4,6\}$.

</details>
<details><summary>Solution</summary>

Given a result above two, the outcomes are $\{3,4,5,6\}$, two of which are even, giving $1/2$. Given an even result, the outcomes are $\{2,4,6\}$, two of which exceed two, giving $2/3$. The same intersection count is divided by different conditioning-group counts.

</details>

### Exercise 4.2
<a id="conditional-probability-bayes-ex-2"></a>

Suppose $P(A)=0.4$, $P(B)=0.5$ and $P(A\cap B)=0.1$. Calculate $P(A\mid B)$ and $P(B\mid A)$.

<details><summary>Hint 1</summary>

Both conditioning probabilities are positive.

</details>
<details><summary>Hint 2</summary>

Divide the intersection probability by the probability following the conditioning bar.

</details>
<details><summary>Solution</summary>

The values are $0.1/0.5=0.2$ and $0.1/0.4=0.25$. Reversing the letters changes the conditioning event and therefore the denominator. Both lie between zero and one, as required for probabilities under the respective conditional laws.

</details>

### Exercise 4.3
<a id="conditional-probability-bayes-ex-3"></a>

A box has four red and two blue counters. Draw two uniformly without replacement. Find the probability of blue followed by red, and of one of each colour.

<details><summary>Hint 1</summary>

After a blue first draw, four red remain among five counters.

</details>
<details><summary>Hint 2</summary>

One of each colour is the disjoint union of two ordered histories.

</details>
<details><summary>Solution</summary>

Blue then red has probability $(2/6)(4/5)=4/15$. Red then blue has probability $(4/6)(2/5)=4/15$. Adding the disjoint histories gives $8/15$. The second-draw denominator is five because the first counter was removed; using six would model replacement.

</details>

### Exercise 4.4
<a id="conditional-probability-bayes-ex-4"></a>

Two factories supply $30\%$ and $70\%$ of items in a model. Their defect probabilities are $0.04$ and $0.01$. Find the overall defect probability and the probability that a defective item came from the first factory.

<details><summary>Hint 1</summary>

Partition by the supplying factory.

</details>
<details><summary>Hint 2</summary>

The first factory's defective contribution is $0.3(0.04)$.

</details>
<details><summary>Solution</summary>

Total probability gives defect probability $0.012+0.007=0.019$. Conditioning on a defect, Bayes gives first-factory probability $0.012/0.019=12/19$. The posterior can exceed the first factory's $0.3$ supply share because its defect likelihood is higher. Both supplier probabilities and the defect denominator are positive.

</details>

### Exercise 4.5
<a id="conditional-probability-bayes-ex-5"></a>

A hypothesis has prior probability $1/5$. An event has likelihood $3/4$ under the hypothesis and $1/4$ under its complement. Find posterior odds and posterior probability.

<details><summary>Hint 1</summary>

Convert the prior to odds before multiplying by the likelihood ratio.

</details>
<details><summary>Hint 2</summary>

Odds $a:b$ correspond to probability $a/(a+b)$.

</details>
<details><summary>Solution</summary>

Prior odds are $(1/5)/(4/5)=1/4$. The likelihood ratio is $3$, giving posterior odds $3/4$. The posterior probability is therefore $3/7$. Directly, the evidence probability is $(1/5)(3/4)+(4/5)(1/4)=7/20$, and the hypothesis-evidence numerator is $3/20$, confirming the same ratio.

</details>

### Exercise 4.6
<a id="conditional-probability-bayes-ex-6"></a>

For two independent fair tosses, compute the probability of two heads given that the first toss is heads. Compare it with conditioning on at least one head.

<details><summary>Hint 1</summary>

The first condition leaves two equally likely histories.

</details>
<details><summary>Hint 2</summary>

The at-least-one condition leaves three equally likely histories.

</details>
<details><summary>Solution</summary>

Given the first toss is heads, the possible histories are $HH,HT$, so the probability of $HH$ is $1/2$. Given at least one head, the histories are $HH,HT,TH$, giving $1/3$. These conditions select different subsets of the original equally weighted space, so different answers are appropriate.

</details>

### Exercise 4.7
<a id="conditional-probability-bayes-ex-7"></a>

Explain why $P(A\mid B)$ is undefined by the elementary ratio when $P(B)=0$, even if $A\cap B$ is empty.

<details><summary>Hint 1</summary>

The numerator is then also zero by monotonicity.

</details>
<details><summary>Hint 2</summary>

Zero divided by zero does not specify a probability.

</details>
<details><summary>Solution</summary>

Since $A\cap B\subseteq B$, its probability is zero. The ratio would be $0/0$, which is undefined, not automatically zero or one. The conditional-law normalisation cannot be performed on a zero-probability group. More advanced conditioning may use additional structure, but it does not follow from this elementary ratio without such a construction.

</details>

### Exercise 4.8
<a id="conditional-probability-bayes-ex-8"></a>

Let $H_1,H_2,H_3$ have prior probabilities $1/2,1/3,1/6$ and evidence likelihoods $1/5,3/5,3/5$. Find the evidence probability and all three posterior weights.

<details><summary>Hint 1</summary>

Multiply each prior by its own likelihood.

</details>
<details><summary>Hint 2</summary>

The three unnormalised weights are $1/10,1/5,1/10$.

</details>
<details><summary>Solution</summary>

The evidence probability is $1/10+1/5+1/10=2/5$. Dividing each contribution by $2/5$ gives posterior weights $1/4,1/2,1/4$. Their sum is one, checking the normalisation. A larger likelihood does not by itself determine the largest posterior: the prior contribution also enters the product.

</details>

### Exercise 4.9
<a id="conditional-probability-bayes-ex-9"></a>

Prove $P(A^c\mid B)=1-P(A\mid B)$ for $P(B)>0$, and explain which partition is used.

<details><summary>Hint 1</summary>

Split $B$ according to whether $A$ occurs.

</details>
<details><summary>Hint 2</summary>

The sets $A\cap B$ and $A^c\cap B$ are disjoint and cover $B$.

</details>
<details><summary>Solution</summary>

Additivity gives $P(B)=P(A\cap B)+P(A^c\cap B)$. Divide by positive $P(B)$ to obtain $1=P(A\mid B)+P(A^c\mid B)$ and rearrange. The partition is within the evidence event $B$; it retains every record consistent with the information exactly once.

</details>

### Exercise 4.10
<a id="conditional-probability-bayes-ex-10"></a>

A message reports that a selected pair of coins contains a head. Explain why a probability question using this message may need to specify how the message was generated.

<details><summary>Hint 1</summary>

Compare inspecting both coins with selecting and revealing one random coin.

</details>
<details><summary>Hint 2</summary>

The likelihood of receiving a head-related message can differ between $HH$ and mixed histories.

</details>
<details><summary>Solution</summary>

Inspection of both coins followed by the message at least one head conditions on three histories $HH,HT,TH$, yielding $P(HH)=1/3$ under independent fair tosses. Revealing one uniformly selected position and observing a head weights $HH$ twice as heavily as each mixed history, yielding $P(HH)=1/2$. The words alone may not identify the evidence event. Its generation protocol is part of the probability model.

</details>

## Sources

This original chapter develops the conditioning themes in Euler's retained [Probability: Models Before Formulas](../../course-texts/atlas-probability-models.md), including the distinction between information protocols. For a complementary primary treatment, see Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), Chapter 4, official CHANCE Project text, consulted 13 November 2026. The inspection and factory examples are hypothetical mathematical models.

## Summary

Conditioning restricts and renormalises a probability law, with a positive evidence probability required for the elementary ratio. Multiplication handles sequential information, total probability combines disjoint cases, and Bayes reverses a condition by using both likelihoods and prior weights.

The information protocol determines the evidence event. Reversed conditions, repeated messages and causal interpretations need separate attention. [Independence](independence.md) next explains precisely when information leaves probabilities unchanged and when repeated likelihoods may be multiplied.
