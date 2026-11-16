
# Chance Before Formulas

Probability is a language for questions whose answers are not known in advance. It does not mean that events happen “for no reason,” and it does not turn uncertainty into certainty. It starts with a deliberately simplified description of what might happen, assigns weights to those possibilities, and follows the consequences honestly.

This first encounter assumes no previous probability course. Fractions are developed as needed. Its central habit is to keep three layers apart:

1. the real situation;
2. the probability model chosen for it;
3. the conclusions calculated inside that model.

A flawless calculation in a poor model can still mislead.

## 1. Make the experiment visible


**Worked example.**
Imagine a bag holding three blue tiles and one gold tile. Shake, draw one tile without looking, record its colour, and replace it. The possible colours form a tiny **sample space**. An **event** is a claim such as “the draw is gold.”

If shaking makes every tile equally likely, gold has probability $1/4$. This fraction means one favorable tile among four equally weighted tiles. It does not promise that exactly one of the next four draws will be gold. A sequence $B,B,B,B$ has probability $(3/4)^{4}$, which is about $0.316$; it is not strange enough to disprove the model.

Replacement matters. Without replacement, after a blue tile is drawn there are two blue and one gold remaining, so the next gold probability becomes $1/3$. With replacement it remains $1/4$. The physical protocol decides the mathematics.

### Long-run frequency

Repeat the replacement experiment many times. The proportion of gold draws usually settles near $1/4$, though it continues to wobble. Probability predicts the pattern of repeated experiments, not the exact order of outcomes. A run of six blue tiles is compatible with the model; a permanent frequency near $3/4$ would be evidence against it.

## 2. Counting works only after symmetry

Roll two ordinary six-sided dice. There are 36 ordered pairs $(first die, second die)$. Under the ideal fair-and-independent model, those 36 pairs have equal weight. Six pairs sum to 7, so $P(\sum 7)=6/36=1/6$. Only one pair sums to 2, so $P(\sum 2)=1/36$.

A tempting error is to say that the possible sums 2 through 12 are equally likely. They are not: different sums have different numbers of representations. “Count favorable outcomes divided by all outcomes” is valid only when the outcomes being counted are equally weighted.

Complements often simplify a count. With three independent fair coin flips,

$$P(at least one head)=1-P(no heads)=1-(1/2)^{3}=7/8$$

The multiplication $(1/2)^{3}$ uses independence: each new flip keeps probability $1/2$ after earlier results are known.

## 3. New information changes the denominator

Suppose a box contains 20 lamps: 5 are from machine A and 15 from machine B. Machine A produced 2 faulty lamps; machine B produced 1. If a lamp is selected uniformly and is known to be faulty, what is the chance it came from A?

Do not divide by all 20 after learning “faulty.” Restrict attention to the three faulty lamps. Two came from A, so the conditional probability is $2/3$.

In symbols, conditioning on information $B$ means

$P(A given B)=P(A \land B)/P(B)$, provided $P(B)>0$.

Bayes’ rule is the same idea arranged to reverse a condition:

$$P(cause given evidence) = P(evidence given cause) \times P(cause) / P(evidence)$$

### Base rates in a table

Consider 1,000 people. Suppose 10 have a condition. A test is positive for 9 of those 10 and falsely positive for 99 of the 990 without it. There are 108 positive results, only 9 of which correspond to the condition. Therefore

$$P(condition | positive)=9/108=1/12\approx8.3\%$$

The test’s 90% sensitivity did not make the answer 90%. Prevalence and false positives enter the denominator. This is a mathematical illustration, not medical guidance; real testing also involves selection, dependence, measurement uncertainty, and consequences of decisions.

## 4. Turn outcomes into quantities

A **random variable** attaches a number to each outcome. Let $X$ be the number shown on a fair die. Its expected value is the probability-weighted average

$$E[X]=(1+2+3+4+5+6)/6=3.5$$

No roll equals 3.5. Expectation describes an average across repetitions, not the most likely individual result.

Suppose a game pays £5 on gold and costs £1 otherwise in the tile experiment. The expected payoff is

$(1/4)(5)+(3/4)(-1)=1/2$ pound per play.

Positive expectation does not mean every player profits. It also does not by itself make the game sensible: variation, limited funds, utility, and whether the model is credible matter.

Spread matters beside center. Two games can both average zero while one always pays zero and another pays $+£100$ or $-£100$. Variance and standard deviation later quantify this difference.

## 5. Randomness can unfold through time

Put a token at 0. A head moves it right one unit and a tail moves it left one. After $n$ independent fair steps, its position is a **random walk**. One path is a sequence, not a single number.

The expected position remains 0, but the usual distance from 0 grows roughly like $\sqrt{n}$. “Expected position zero” does not mean the token stays near zero forever. Paths wander even when left and right balance on average.

If walls are placed at 0 and 10 and the walk starts at 3, the exact chance of reaching 10 before 0 is $3/10$. The result follows from an equation for the hitting probability, not from drawing a few paths. Simulation can make the claim plausible and detect implementation errors, but it is not the proof.

## 6. Simulation is an experiment on a model

A computer can imitate many tile draws, tests, or walks. A good simulation states:

- what a single random call represents;
- whether calls are intended to be independent;
- the statistic being estimated;
- the seed, so the run can be repeated;
- the number of trials;
- a known case used to check the program.

If an event has probability $p$, its frequency across $N$ independent trials
typically fluctuates on a scale $\sqrt{p(1-p)/N}$, never more than
$1/(2\sqrt N)$. Ten thousand trials therefore still have worst-case standard
error $0.005$. Printing six decimal places would pretend to know more than the
simulation supports.

Simulation can refute a conjecture by finding a counterexample. Repeated success cannot prove an assertion about every possible case. Nor can simulation show that a real system matches the programmed assumptions.

## Common traps

- **Gambler’s fallacy:** after five tails, an independent fair next flip is still half heads. The past imbalance need not be “repaired.”
- **Outcome versus event:** a continuous model can assign probability zero to each exact point while assigning probability one to the whole interval.
- **Independent versus mutually exclusive:** two positive-probability events that cannot both happen are dependent.
- **Average versus typical:** a rare enormous value can dominate an expectation.
- **Conditioning on a result without its selection rule:** learning “at least one child is a girl” is not the same information experiment as meeting a randomly selected daughter.

## Practice with worked answers

### 1. Replacement

<a id="deep-dive-chance-before-formulas-ex-1"></a>

**Exercise 1.**

A bag has two red and three green tiles. Draw twice with replacement. What is the probability of two reds?


<details>
<summary>Hint 1</summary>

Replacement restores the bag before the second draw, leaving the same red fraction both times.
</details>
<details>
<summary>Hint 2</summary>

Under the stated independent-draw model, multiply the two red probabilities.
</details>
<details>
<summary>Solution</summary>

Each draw has red probability $2/5$, and replacement makes the modeled draws independent. Multiply: $(2/5)(2/5)=4/25$. Without replacement the second factor would be $1/4$, giving $1/10$.

</details>

### 2. At least one

<a id="deep-dive-chance-before-formulas-ex-2"></a>

**Exercise 2.**

What is the probability of at least one six in four independent fair die rolls?


<details>
<summary>Hint 1</summary>

The complement of at least one six is no six on every roll.
</details>
<details>
<summary>Hint 2</summary>

Multiply four five-sixths factors for the complement, then subtract from one.
</details>
<details>
<summary>Solution</summary>

The complement is no six on all four rolls, probability $(5/6)^{4}$. The answer is $1-(5/6)^{4}=671/1296\approx0.518$.

</details>

### 3. Conditional table

Among 50 messages, 8 are spam. A filter flags 6 spam messages and 3 ordinary messages. Given that a message was flagged, what fraction are spam?

**Answer.** Restrict to the $6+3=9$ flagged messages. Six are spam, so the fraction is $6/9=2/3$.

### 4. Expected tickets

A ticket pays 8 points with probability $1/4$ and 0 otherwise. What is its expected payoff?

**Answer.** $(1/4)8+(3/4)0=2$ points. This is an average over repetitions; most individual tickets pay zero.

### 5. Proof or evidence?

A program simulates one million fair walks and none ends outside $[-5000,5000]$ after 100 steps. Has it proved that such an endpoint is impossible?

**Answer.** No. The true endpoints are in $[-100,100]$ because each of 100 steps changes position by only one. That deterministic bound proves the claim; the simulation merely failed to find a violation.

## Where to go next

Use *Probability: Models Before Formulas* for a first course, then the standard probability-and-processes course for distributions, limits, and chains. The Markov coupling laboratory lets you compare an exact recurrence with a seeded sample path. Later routes lead toward statistical inference, randomized algorithms, measure-theoretic probability, martingales, and stochastic calculus.
