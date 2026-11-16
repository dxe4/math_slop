
# Chance, Models, and Simulation

## Start with the experiment

A box contains four orange tokens and two violet tokens. If one token is selected so that each individual token has the same chance of selection, orange has probability $4/6=2/3$. That calculation is short, but its assumptions do most of the work. We specified the contents, the procedure, the elementary outcomes and the symmetry of their probabilities. Merely saying “choose randomly” would not specify all those details.

Probability is a language for models of uncertainty. It lets us calculate consequences of assumptions, compare competing mechanisms and describe the variability of repeated observations. It does not make one uncertain outcome predictable with certainty, and it does not establish that a model faithfully describes a physical experiment. A perfectly correct calculation can answer the wrong question if the experiment was represented incorrectly.

This first chapter develops the habit of specifying a model before calculating. You need fractions, percentages and elementary algebra from [Algebra and Functions](#/books/algebra-and-functions). Later chapters use basic integrals, for which [Calculus as Change and Accumulation](#/courses/atlas-calculus-change) provides preparation. No calculus is needed here. We begin with finite experiments whose possible outcomes can be listed, and distinguish mathematical probability, observed frequency and simulated frequency.

## What belongs in a model?

**Definition 1.1 (Finite probability model).** A finite probability model consists of a nonempty finite set $\Omega$ of elementary outcomes and numbers $p(\omega)\ge0$ for $\omega\in\Omega$ satisfying
$$
\sum_{\omega\in\Omega}p(\omega)=1.
$$
An event $A$ is a collection of outcomes, and its probability is the sum of their weights:
$$
P(A)=\sum_{\omega\in A}p(\omega).
$$

An outcome describes one complete record at the chosen level of detail. An event asks whether that record satisfies a condition. For one die roll, an outcome might be $4$, while the event “even” contains $2,4,6$. With two distinguishable dice, an outcome should normally be an ordered pair, since knowing both faces is more detailed than knowing only their sum.

Different levels of detail can describe the same experiment, but their probabilities must agree after aggregation. A model of the sum of two dice has eleven possible recorded values, from $2$ to $12$. Those values are not equally likely, even when the thirty-six ordered pairs are equally likely. Combining outcomes changes how much probability each recorded category receives.

**Proposition 1.2 (Equal-outcome counting).** If a finite model has $N$ outcomes, each with probability $1/N$, then an event containing $r$ outcomes has probability $r/N$.

*Proof.* The event probability is a sum of $r$ copies of $1/N$, so it equals $r/N$. The equal weights sum to one because there are $N$ of them. ∎

The proposition does not say that every finite list is automatically uniform. A list of weather labels, possible test results or dice sums requires its own weights. Symmetry may motivate a uniform model, but a symmetric drawing is not evidence that a real object behaves fairly.

**Example 1.3 (Why dice sums have unequal probabilities).** Model two distinguishable fair six-sided dice by ordered pairs $(a,b)$, each of probability $1/36$. The sum $4$ comes from $(1,3),(2,2),(3,1)$, so its probability is $3/36=1/12$. The sum $10$ likewise has three representations, while the sum $7$ has six and probability $1/6$.

If we replaced the ordered pairs by eleven equally weighted sums, we would obtain probability $1/11$ for each sum. That would be a different model, rather than a simpler calculation in the same model. A useful check is to ask what physical procedure would actually make the proposed categories equally likely.

## Complements and unavoidable outcomes

The complement $A^c$ consists of the outcomes not in $A$. It represents “not $A$”, always relative to the chosen experiment. If the experiment records one token, “not orange” may mean violet. If the model allows damaged or missing tokens, the same words describe a larger event.

**Proposition 1.4 (Complement rule).** Every event in a finite probability model satisfies
$$
P(A^c)=1-P(A).
$$

*Proof.* The sets $A$ and $A^c$ are disjoint and together contain every outcome. Splitting the sum of all weights gives $1=P(A)+P(A^c)$. Rearranging proves the rule. ∎

For an independent fair coin model with four tosses, the sixteen ordered histories are equally likely. Exactly one history, $TTTT$, has no heads. Thus the chance of at least one head is $1-1/16=15/16$. A complement can replace a long list of successful cases by a short list of failures.

Probability one means the event contains all positive-weight outcomes in the model. In a finite model assigning positive weight to every outcome, this is the whole sample space. A formally allowed zero-weight outcome would change that interpretation, and continuous models later introduce another distinction: a particular possible numerical value can have probability zero. We will avoid turning “probability zero” into a universal synonym for logical impossibility.

## Repetition does not promise balance

Suppose a coin is modelled by independent tosses with head probability $1/2$. Independence means the joint law of the tosses factors into their individual probabilities. Its detailed definition comes in [Chapter 5](independence.md). Here it is an assumption, not a property inferred from the word coin.

A sequence of heads and tails is not required to alternate. The four-toss histories $HHHH$ and $HTHT$ each have probability $1/16$. There are, however, six histories with exactly two heads and only one with four heads. A single prescribed history and a category containing many histories have different probabilities.

After several tails, an independent coin has not acquired a debt of heads. The next probability remains $1/2$. The proportion of heads can move closer to one-half over a long run without the absolute difference between the counts becoming zero. For example, $510$ heads in $1000$ tosses is proportion $0.51$, but still a difference of twenty between heads and tails.

**Definition 1.5 (Observed relative frequency).** If an event occurs $r$ times in $N\ge1$ recorded trials, its observed relative frequency is $r/N$.

This is a property of the data, whereas a model probability is an input or consequence of the mathematical model. The [law of large numbers](law-of-large-numbers.md) will justify a precise relationship under repeated independent sampling. It will not claim that any finite sample must equal its probability, or that repetition repairs a biased selection process.

**Example 1.6 (Reading a record without overclaiming).** A hypothetical wheel has three winning sectors among eight equal sectors, and the model assigns probability $3/8$ to a win on each independent spin. In forty recorded spins there are eighteen wins. The observed frequency is $18/40=0.45$, while the model value is $0.375$.

The disagreement is $0.075$, or $7.5$ percentage points. It is not a proof that the model is false: a particular finite run can fluctuate. Nor is it proof that the wheel is fair: many mechanisms could produce eighteen wins. To investigate, we would examine the recording procedure and collect suitably designed further evidence. A calculation of frequency is descriptive; a judgment about the model needs more than a demand for exact agreement.

## Simulating the stated law

A simulation is another experiment designed to reproduce a model. One simple approach starts with a uniform choice from a finite list. To simulate the token box with orange probability $2/3$, select uniformly from $\{1,2,3,4,5,6\}$ and declare $1,2,3,4$ orange. The mapping is correct because exactly four of the six equally likely values produce orange.

For rational probabilities, a common denominator gives a general recipe. If three categories have probabilities $1/2,1/3,1/6$, a uniform integer from one to six can allocate three values to the first category, two to the second and one to the third. The category probabilities then agree with the intended model.

**Example 1.7 (Sampling with and without replacement).** A box has four orange and two violet tokens. Two draws with replacement, independently mixed between draws, have orange-orange probability
$$
\frac46\cdot\frac46=\frac49.
$$
For draws without replacement, an orange first draw leaves three orange tokens among five remaining tokens. The orange-orange probability is instead
$$
\frac46\cdot\frac35=\frac25.
$$

A simulation of the second experiment must remove the chosen token before the next selection. Reusing the original list without removal simulates replacement and gives the wrong target probability. The sample space and the update rule matter as much as the random selection step.

A careful simulation description says what constitutes one run, which quantities are recorded, how draws are generated and whether repetitions are independent. If a computer uses a deterministic pseudorandom generator, a recorded seed can reproduce its sequence. Reproducibility helps inspect the computation; it does not make the sequence genuinely independent by mathematical proof.

For this book, simulation algorithms are mathematical recipes. We do not need a particular programming language to establish their target laws. A numerical implementation would require additional checks about its random source, finite precision and stopping rules. Chapter 15 develops estimators and Monte Carlo uncertainty explicitly.

## A practical modelling checklist

Before using a probability, identify the trial's beginning and end. One draw and a pair of draws are different experiments. State whether objects are distinguishable: a red token can be a category even when individual tokens are elementary outcomes. Decide whether order is recorded, since “red then blue” and “one of each” are different events.

Next state the probability law. Uniformity and independence need explicit justification or explicit acknowledgement as assumptions. Distinguish choosing a person uniformly from choosing a household uniformly and then a person inside it. These procedures generally weight people differently.

Finally explain the output. A probability is a model quantity, an observed frequency is a data summary, and a simulated frequency approximates a model quantity under a simulation procedure. None by itself determines a causal explanation. Changing one mechanism and recalculating is often more informative than repeating an unsupported numerical claim.

## Exercises

### Exercise 1.1
<a id="chance-models-simulation-ex-1"></a>

A box has five silver and three copper tokens, each individually equally likely to be selected. Specify elementary outcomes and calculate the probability of copper.

<details><summary>Hint 1</summary>

Give distinct labels to individual tokens even when they share a colour.

</details>
<details><summary>Hint 2</summary>

The copper event contains three of the eight equally weighted outcomes.

</details>
<details><summary>Solution</summary>

Use outcomes $S_1,\ldots,S_5,C_1,C_2,C_3$, each with weight $1/8$. Copper is the event $\{C_1,C_2,C_3\}$, so its probability is $3/8$. Grouping by colour gives two recorded categories with weights $5/8$ and $3/8$, not two equally likely outcomes. The uniformity assumption concerns individual tokens.

</details>

### Exercise 1.2
<a id="chance-models-simulation-ex-2"></a>

Two distinguishable fair dice are rolled independently. Find the probabilities of sums $3$ and $8$, explaining the denominator.

<details><summary>Hint 1</summary>

Use the thirty-six ordered face pairs, not the eleven possible sums.

</details>
<details><summary>Hint 2</summary>

List pairs for each sum, keeping reversed pairs when their entries differ.

</details>
<details><summary>Solution</summary>

Sum $3$ comes from $(1,2),(2,1)$, giving $2/36=1/18$. Sum $8$ comes from $(2,6),(3,5),(4,4),(5,3),(6,2)$, giving $5/36$. The denominator is thirty-six because independence and fairness give every ordered pair probability $(1/6)^2$. Equal probabilities for sums would describe a different law.

</details>

### Exercise 1.3
<a id="chance-models-simulation-ex-3"></a>

In a model of three independent fair tosses, find the probability of at least one tail using a complement.

<details><summary>Hint 1</summary>

The complementary event requires no tails at all.

</details>
<details><summary>Hint 2</summary>

There are eight equally likely histories and only one all-heads history.

</details>
<details><summary>Solution</summary>

The complement is $\{HHH\}$, with probability $1/8$. Therefore the requested probability is $1-1/8=7/8$. The complement is taken within the full three-toss experiment. It is not the event that a particular selected toss is a head, which would have probability $1/2$.

</details>

### Exercise 1.4
<a id="chance-models-simulation-ex-4"></a>

A model predicts probability $0.2$ of an event. The event occurs seven times in twenty trials. Calculate the observed frequency and explain what the discrepancy does and does not establish.

<details><summary>Hint 1</summary>

A relative frequency divides the observed count by the number of trials.

</details>
<details><summary>Hint 2</summary>

A finite random record need not equal the model probability exactly.

</details>
<details><summary>Solution</summary>

The frequency is $7/20=0.35$, differing from the model by $0.15$, or fifteen percentage points. This is a real discrepancy in the recorded sample. Alone it proves neither that the model is correct nor that it is false. Investigating requires the sampling and recording assumptions and a suitable assessment of random variability, not an expectation of exact finite balance.

</details>

### Exercise 1.5
<a id="chance-models-simulation-ex-5"></a>

Use a uniform integer from one to twelve to simulate categories with probabilities $1/4,1/3,5/12$.

<details><summary>Hint 1</summary>

Rewrite all three probabilities with denominator twelve.

</details>
<details><summary>Hint 2</summary>

Allocate disjoint groups of sizes three, four and five.

</details>
<details><summary>Solution</summary>

Assign values $1$–$3$ to the first category, $4$–$7$ to the second and $8$–$12$ to the third. Their probabilities are $3/12=1/4$, $4/12=1/3$ and $5/12$. The groups partition the twelve equally likely integers, so no outcome is omitted or counted twice. Other partitions of the same group sizes are equally valid.

</details>

### Exercise 1.6
<a id="chance-models-simulation-ex-6"></a>

A box has three green and two white tokens. Calculate the probability of two green draws with replacement and without replacement, under uniform drawing and independent remixing when replacement is used.

<details><summary>Hint 1</summary>

Replacement restores the original composition before the second draw.

</details>
<details><summary>Hint 2</summary>

After a green draw without replacement, two green tokens remain among four tokens.

</details>
<details><summary>Solution</summary>

With replacement the probability is $(3/5)^2=9/25$. Without replacement it is $(3/5)(2/4)=3/10$. The probabilities differ because the second experiment changes its composition after the first result. A simulation must reproduce that change rather than applying the original success probability again.

</details>

### Exercise 1.7
<a id="chance-models-simulation-ex-7"></a>

For four independent fair tosses, compare the probability of the specific history $HHTT$ with the probability of exactly two heads.

<details><summary>Hint 1</summary>

Every prescribed four-toss history has probability $1/16$.

</details>
<details><summary>Hint 2</summary>

The two-head category allows six different placements of the heads.

</details>
<details><summary>Solution</summary>

The specific history has probability $1/16$. Exactly two heads permits $HHTT,HTHT,HTTH,THHT,THTH,TTHH$, giving $6/16=3/8$. The larger probability belongs to an event containing six outcomes. Comparing one history with an entire category without counting its members confuses two different questions.

</details>

### Exercise 1.8
<a id="chance-models-simulation-ex-8"></a>

Explain why eight successive heads do not make a tail more likely on the next toss in an independent fair-coin model.

<details><summary>Hint 1</summary>

Identify which assumption addresses the effect of previous outcomes.

</details>
<details><summary>Hint 2</summary>

Long-run proportions do not impose a correction rule on the next trial.

</details>
<details><summary>Solution</summary>

Independence specifies that knowledge of earlier tosses does not change the next head or tail probability. Fairness therefore still gives tail probability $1/2$. A future tail may reduce the observed head proportion, but the model contains no mechanism forcing that adjustment. A physical suspicion of bias would be a reason to question the model, not a consequence within the unchanged independent fair model.

</details>

### Exercise 1.9
<a id="chance-models-simulation-ex-9"></a>

One household has one resident and another has three. A procedure chooses a household uniformly, then a resident uniformly within it. Is every resident equally likely to be selected?

<details><summary>Hint 1</summary>

The single resident is selected whenever the first household is chosen.

</details>
<details><summary>Hint 2</summary>

A specified resident in the larger household needs both that household and that person to be chosen.

</details>
<details><summary>Solution</summary>

The single resident has probability $1/2$. Each resident in the three-person household has probability $(1/2)(1/3)=1/6$. Thus the procedure is not uniform over the four residents, whose uniform probability would be $1/4$. The calculation illustrates why a statement about random selection must identify the selection units and stages.

</details>

### Exercise 1.10
<a id="chance-models-simulation-ex-10"></a>

A simulation reports twenty wins in fifty runs for a model whose exact win probability is $2/5$. Explain why the numerical agreement does not validate every part of its implementation, and give one useful additional check.

<details><summary>Hint 1</summary>

One final count can be produced by many different procedures.

</details>
<details><summary>Hint 2</summary>

Check a distribution or an event whose probability follows from an independent calculation.

</details>
<details><summary>Solution</summary>

The reported proportion is exactly $20/50=2/5$, but a faulty program or a deliberately fixed sequence could produce the same count. Agreement in one statistic does not establish the intended joint law or independent repetitions. A useful check is to enumerate a small experiment with known outcome probabilities and compare how the implementation maps its elementary draws. Repeated runs and inspection of the replacement rule can reveal errors hidden by the final average.

</details>

## Sources

This chapter newly develops the modelling ideas of Euler's [Probability You Can Touch](../../articles/probability-you-can-touch.md), preserving that original article. For a complementary primary introduction, see Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), Chapter 1, official CHANCE Project text, consulted 13 November 2026. The numerical examples and exercises here are original; no external passage is reproduced.

## Summary

A probability model specifies outcomes and their weights. Counting favourable outcomes is justified only when the elementary outcomes are equally likely. Complements simplify questions about at least one occurrence, while repetitions require their dependence assumptions to be stated.

Model probabilities, observed frequencies and simulated frequencies play different roles. Correct simulation must reproduce the experiment's selection and update rules, and finite agreement cannot by itself validate a model or implementation. [Sample spaces and events](sample-spaces-events.md) now develops the event language and probability laws systematically.
