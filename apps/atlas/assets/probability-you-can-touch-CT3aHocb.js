var e=`---
id: deep-dive-probability-you-can-touch
title: "Probability You Can Touch: Coins, Bags, and New Information"
license: CC BY-SA 4.0
---

# Probability You Can Touch: Coins, Bags, and New Information

**Before reading.** Read [Ratio and Proportion](../books/number-and-arithmetic/ratio-proportion.md). These are preparation for the ideas used below.

Put three blue counters and one yellow counter in an opaque bag. Without looking, which colour would you expect to draw? Blue is not certain, but it has three of the four equally reachable counters. Its model probability is $3/4$.

Probability turns incomplete information into numbers between 0 and 1. In the
finite examples below, probability zero means no listed outcome belongs to the
event, while probability one means every listed outcome does. In continuous
models, a possible single value can have probability zero, so zero probability
and logical impossibility must be separated.

## 1. List what can happen

For one fair coin toss, possible outcomes are heads and tails. For two tosses, write ordered outcomes:

$$HH, HT, TH, TT$$

There are four equally likely outcomes, and three contain at least one head. Therefore

$$P(at least one head) = 3/4$$

The word **ordered** matters: $HT$ and $TH$ are different histories. A useful visual is a branching tree. Start with one point, draw H and T branches, then split each again. The four endpoints keep you from accidentally missing a case.

For equally likely outcomes,

$$probability = favourable outcomes / all outcomes$$

But do not use that fraction until “equally likely” is justified. The possible sums of two dice are 2 through 12, but they are not equally likely. Seven can arise in six ordered ways; two can arise only as $(1,1)$.

## 2. Long-run frequency is evidence, not a promise

Toss a coin 20 times and record the running fraction of heads. It may not equal $1/2$; short runs wobble. Repeat to 100 tosses if practical. The fraction often settles nearer one-half, although no finite run is forced to be exact.

This separates two ideas:

- **model probability:** what the assumptions predict;
- **observed frequency:** what occurred in an experiment.

A disagreement can be ordinary randomness, a biased coin, an inconsistent tossing method, or a recording error. More trials reduce random wobble but do not repair a bad experiment.

**Misconception:** after five tails, a head is “due.” For independent fair tosses, the coin has no memory; the next-toss chance remains $1/2$. A balancing tendency in long-run proportions does not create a force alternating individual results.

## 3. “And” multiplies only under independence

For two independent fair tosses,

$$P(H then H) = 1/2 \\times 1/2 = 1/4$$

Independence means learning one result does not change the probability of the other.

Now draw twice from the four-counter bag **without replacing** the first counter. The probability of blue first is $3/4$. If blue occurs, only two blue among three counters remain, so

$$P(blue then blue) = 3/4 \\times 2/3 = 1/2$$

The second factor changed because the first draw changed the bag. With replacement, it would stay $3/4$, giving $9/16$.

## 4. “Or” needs overlap care

Roll one ordinary die. The event “even” is $\\{2,4,6\\}$; “greater than 4” is $\\{5,6\\}$. Listing their union gives $\\{2,4,5,6\\}$, so the chance of even **or** greater than 4 is $4/6 = 2/3$.

Adding $3/6 + 2/6$ gives $5/6$ because outcome 6 was counted twice. Subtract the overlap once:

$$P(A or B) = P(A) + P(B) - P(A \\land B)$$

## 5. New information changes the group

The bag contains three blue and one yellow counter. Draw one counter and hide its colour. Then someone truthfully tells you, “It is not yellow.” Within the reduced group of possible counters, all three are blue, so the chance it is blue is now 1.

A less extreme example: a class has 10 cyclists, 6 of whom wear glasses, and 20 non-cyclists, 4 of whom wear glasses. Pick a student at random.

- Before new information, $P(glasses)=10/30=1/3$.
- Given the student cycles, focus only on 10 cyclists: $P(glasses | cyclist)=6/10=3/5$.

The vertical bar means “given.” Conditioning changes the relevant group; it does not rewrite what already happened.

**Misconception:** $P(glasses | cyclist)$ is generally not the same as $P(cyclist | glasses)$. Here the latter is 6 cyclists among 10 glasses-wearers, also $3/5$ by coincidence. Change the numbers and the two directions differ; always read the words.

## Worked decision: two game wheels

**Worked example.**

Game A wins on 2 of 8 equal sectors. Game B wins unless a fair coin shows two tails in a row.

For A, $P(win)=2/8=1/4$.

For B, two tosses have $HH, HT, TH, TT$. Only $TT$ loses, so $P(win)=3/4$. B offers the better chance of winning, but a financial choice would also require comparing entry cost and prize.

## Boundaries of the elementary model

The calculations above rely on a declared sample space and probability law.
“Fair” means the outcome probabilities are specified as equal; symmetry of a
drawing does not prove a physical wheel is fair. “Random” does not mean every
outcome must be equally likely.

Independence is an assumption or a consequence of a model. Multiplying
\\(P(A)P(B)\\) is justified only when \\(P(A\\cap B)=P(A)P(B)\\). Drawing without
replacement, shared weather, repeated measurements on one person, and a common
manufacturing defect can all create dependence.

Conditional probability

\\[
P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}
\\]

requires \\(P(B)>0\\) in this elementary ratio form. Conditioning on a
zero-probability event needs more advanced structure and may not be uniquely
defined without it.

Finally, a probability model predicts a distribution of outcomes. It does not
promise the most likely event will occur on one trial, prove a causal
explanation, or repair biased data collection. Record how the outcomes and
probabilities were chosen before using the arithmetic.

## Practice

<a id="deep-dive-probability-you-can-touch-ex-1"></a>

### Exercise 1

1. List the ordered outcomes for tossing a coin and rolling a die numbered 1–3. Find the chance of H and an odd number.

<details>
<summary>Hint 1</summary>

List coin outcomes separately from die outcomes, then form ordered pairs.
</details>

<details>
<summary>Hint 2</summary>

Count the pairs with a head and an odd die result out of all equally modeled pairs.
</details>

<details>
<summary>Solution</summary>

$H1,H2,H3,T1,T2,T3$; favourable outcomes $H1,H3$, so $2/6=1/3$.

</details>

<a id="deep-dive-probability-you-can-touch-ex-2"></a>

### Exercise 2

2. Two fair six-sided dice are rolled. Why is a sum of 6 more likely than a sum of 3?

<details>
<summary>Hint 1</summary>

Dice sums are not equally likely even when each ordered pair is.
</details>

<details>
<summary>Hint 2</summary>

List the ordered pairs for each target sum and compare their counts.
</details>

<details>
<summary>Solution</summary>

Sum 6 has five ordered pairs: $(1,5),(2,4),(3,3),(4,2),(5,1)$; sum 3 has two.

</details>

### Further exercises

3. A bag has 2 red and 3 green counters. Find the chance of two reds without replacement.
4. On one die roll, find the chance of “less than 4 or even.”
5. Of 12 buses, 3 are late. Of 8 trains, 4 are late. Given that a randomly selected journey is a train, what is the chance it is late?
6. Explain why ten heads in a row does not make tails more likely on the next independent fair toss.

## Answers


3. $2/5 \\times 1/4 = 1/10$.
4. Less than 4 is $\\{1,2,3\\}$ and even is $\\{2,4,6\\}$; union $\\{1,2,3,4,6\\}$, so $5/6$.
5. Restrict to the eight trains: $4/8=1/2$.
6. Independence says earlier results do not change the next-toss probability, which remains $1/2$ under the fair-coin model.

### Experiment report

Design a bag experiment, state whether you replace draws, predict one probability, and test it at least 30 times. Report both prediction and observed frequency, then name one reason they might differ.

`;export{e as default};