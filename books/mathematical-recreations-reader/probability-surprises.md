
# Probability Surprises: Condition Before You Count

Probability paradoxes usually expose an ambiguous experiment, not a failure of
mathematics. A probability belongs to a sample space and a sampling rule. “At
least one child is a girl” does not tell us how the family was selected or how
the information was reported.

## Conditional probability

For events $A$ and $B$ with $P(B)>0$,

$P(A \mid B)=P(A \land B)/P(B)$.

Conditioning replaces the original population by cases compatible with $B$ and
renormalizes their probabilities. It does not make those cases equally likely
unless the sampling mechanism does.

## The three-door problem

A prize is placed uniformly behind one of three doors. You choose door 1. A host
who knows the prize location always opens a different door with no prize, and if
two doors are available chooses uniformly. The host offers a switch to the one
remaining closed door.

Your first choice is correct with probability $1/3$; in that case switching
loses. It is wrong with probability $2/3$; the host is forced to expose the other
wrong door, so switching wins. Switching therefore wins with probability $2/3$.

If the host sometimes opens the prize or chooses doors by another rule, this
calculation does not apply. Host behaviour is part of the experiment.

## Birthday collisions

Assume birthdays are independent and uniformly distributed over 365 days. For
$n$ people, it is easier to compute the complement:

$P(no shared birthday) = (365/365)(364/365)...((365-n+1)/365)$.

Thus $P(a collision)=1-P(no collision)$. At $n=23$ this is about $0.507$. The
surprise comes from the number of pairs, $n(n-1)/2$, not from any one person
matching a fixed date.

Real birthdays are not uniform or perfectly independent. The model demonstrates
the combinatorial mechanism; it is not a demographic estimate without data.

## Two-envelope and stopping traps

Expected-value arguments can break when an unspecified distribution is treated
as if it were a proper probability law. If one envelope contains twice the
other, reasoning “the other is equally likely half or double my observed amount”
ignores how observing an amount changes which underlying pairs are plausible.
Specify a distribution for the smaller amount before conditioning.

Likewise, “keep tossing until heads” changes the sample space from fixed-length
strings to sequences of varying length. The probability of exactly $k$ tosses is
$(1/2)^k$ for $k\ge 1$, and the total sums to 1.

## Simulation as a model audit

Simulation can check arithmetic and expose sensitivity to rules. It cannot make
an ambiguous protocol precise and does not prove an exact probability by itself.

```js
function montyHall(trials, switchDoors, random = Math.random) {
  let wins = 0;
  for (let t = 0; t < trials; t += 1) {
    const prize = Math.floor(random() * 3);
    const choice = Math.floor(random() * 3);
    const hostOptions = [0, 1, 2].filter(
      (door) => door !== prize && door !== choice,
    );
    const opened = hostOptions[Math.floor(random() * hostOptions.length)];
    const finalChoice = switchDoors
      ? [0, 1, 2].find((door) => door !== choice && door !== opened)
      : choice;
    if (finalChoice === prize) wins += 1;
  }
  return wins / trials;
}

console.log(montyHall(100000, true));
```

The `random` parameter allows a deterministic test generator to be injected; it
does not improve the quality of the browser's pseudorandom numbers.

## Common errors

- Treating compatible outcomes as equiprobable without a sampling rule.
- Forgetting to compute a complement for “at least one.”
- Confusing independence with mutual exclusivity.
- Changing the host, stopping, or reporting protocol mid-argument.
- Reporting simulation digits as exact truth or ignoring Monte Carlo variation.


## The information protocol is part of the event

**Worked example (Two children, two different reports).** Consider the four
ordered labels $BB,BG,GB,GG$, where the first label describes the older child.
Assume each label is independently B or G with probability $1/2$; this is a
mathematical model, not a demographic assertion. If families are sampled
uniformly and retained precisely when at least one label is B, the equally
likely retained cases are $BB,BG,GB$. The probability of $BB$ is $1/3$.
If instead families are sampled uniformly and the older child is observed to
have label B, the retained cases are $BB,BG$, giving $1/2$. The sentence
“there is a B child” is compatible with both protocols, yet those protocols
condition on different events.

A third protocol samples a family, chooses one of its two children uniformly,
and reports that chosen child's label. Conditional on a B report, the family
$BB$ has weight $(1/4)\cdot1=1/4$, and $BG,GB$ each have weight
$(1/4)\cdot(1/2)=1/8$. The total B-report probability is $1/2$, so the
probability the family is $BB$ is again $1/2$. The three compatible family
labels are not equally weighted in this protocol. Simply crossing out $GG$
would give the wrong answer because reporting is an extra random operation.

**Worked example (An uninformed door opener).** Keep a uniform prize and
initial choice of door 1, but let the host choose door 2 or 3 by a fair coin,
without knowing where the prize is. Retain only observations where the opened
door has no prize. There are six equally likely combinations of prize and
opened door. Four survive: two with the prize at door 1, one with the prize
at door 2, and one with the prize at door 3. Staying wins in two and switching
wins in two, so each has conditional probability $1/2$. This differs from the
informed host's $2/3$ switching probability. Discarding exposed prizes is
conditioning, and the host's rule changes the distribution among survivors.

## Reversals under aggregation

A fraction is a numerator divided by a denominator. Combining groups combines
both quantities, producing a weighted average of group rates rather than an
unweighted average. If two options are applied to different mixtures of easy
and hard cases, their combined ranking can reverse every within-group ranking.
This is the arithmetic mechanism of Simpson's paradox.

**Worked example (Two specified populations).** In an easy group, procedure A
succeeds in $9$ of $10$ cases and B in $80$ of $100$. In a hard group, A
succeeds in $20$ of $100$ and B in $1$ of $10$. Thus A's group rates are
$90\%$ and $20\%$, exceeding B's $80\%$ and $10\%$ respectively. Combined,
A succeeds in $29/110$ cases, while B succeeds in $81/110$. B's larger
combined rate arises because B was used far more often on easy cases.
These counts are a constructed arithmetic example. They alone do not establish
that either procedure causes better outcomes: allocation, comparability and
other variables require their own model.

The correct denominator depends on the question. “Among all A cases” and
“among hard A cases” refer to different populations. A reversal does not
make either calculation false. It makes the choice of population and the
interpretation of the comparison essential.

## Infinite expectations need additional care

Suppose an ideal fair coin is tossed independently on each trial until the first heads. For $k\ge1$,
the probability that this occurs on toss $k$ is $2^{-k}$: $k-1$ tails followed
by one head. These probabilities sum to one. If the payoff is $2^k$, the
expected payoff is the nonnegative sum

$$\sum_{k=1}^{\infty}2^{-k}2^k=\sum_{k=1}^{\infty}1=\infty.$$

This St Petersburg model therefore has no finite mean payoff. That statement
does not say every realised payoff is infinite: the first heads arrives at a
finite time with probability one. Nor does it determine a person's willingness
to pay, which also depends on resources, preferences and the actual contract.
For a finite version paying $2^k$ if heads first appears by toss $m$ and zero
otherwise, the expectation is exactly $m$. Stating this truncated contract
removes any need to manipulate an infinite sum and exhibits how growing rare
payoffs increase the mean. A finite casino limit changes the model; it cannot
be silently substituted while retaining the original infinite expectation.

The earlier [Probability Paradoxes](probability-paradoxes.md) reading and its
original exercises remain available separately. The common three-door,
birthday and conditional-probability explanations are developed once in this
primary chapter, with the additional protocols and aggregation arguments here.

## Worked example: repeated evidence shares a hidden choice

Choose one of two stipulated coins with equal probability. One is fair and
the other has heads on both sides. Toss the chosen coin once and observe
heads. The fair-coin route has probability one quarter: one half for choosing
that coin and one half for its head. The double-headed route has probability
one half. Conditional on the observed head, the double-headed route therefore
has probability two thirds, obtained by dividing its weight by the total
three quarters assigned to heads.

Keep the same chosen coin and toss again. Two heads have weight one eighth
through the fair route and one half through the double-headed route. The
posterior probability of the double-headed coin is now four fifths. The
second head strengthens the evidence, but it does not prove which coin was
chosen: the fair route remains possible.

The tosses are independent conditional on the coin's identity. Before that
identity is known, they share a cause and are not independent. After the first
head, the predictive probability of another head is five sixths, combining
certainty under the double-headed route with probability one half under the
fair route and using their updated weights. Treating the second toss as a
fresh equal-prior coin choice would instead answer a different experiment.
Write down what is selected once, what is repeated, and what is observed;
those details determine the conditioning calculation.

## Exercises with staged help

### Exercise 1
<a id="probability-surprises-ex-1"></a>

**Explorer.** Two independent fair coins are tossed. Given that at least one is heads, what
   is the probability both are heads?

<details>
<summary>Hint 1</summary>

List the four equally likely ordered coin outcomes.

</details>
<details>
<summary>Hint 2</summary>

Remove only TT and renormalise.

</details>
<details>
<summary>Solution</summary>

The equally likely ordered outcomes are HH, HT, TH, TT. Conditioning removes
   TT, leaving three equal cases; one is HH, so the probability is $1/3$.

</details>

### Exercise 2
<a id="probability-surprises-ex-2"></a>

**Foundation.** A fair die is rolled. Given the result is even, what is the
   probability it exceeds 3?

<details>
<summary>Hint 1</summary>

Restrict the die outcomes before counting.

</details>
<details>
<summary>Hint 2</summary>

The even outcomes are 2, 4 and 6.

</details>
<details>
<summary>Solution</summary>

Conditional outcomes are 2, 4, 6. Two exceed 3, so the probability is $2/3$.

</details>

### Exercise 3
<a id="probability-surprises-ex-3"></a>

**Secondary.** In the stated three-door protocol, calculate the chance that
   staying wins.

<details>
<summary>Hint 1</summary>

Staying leaves your initial door unchanged.

</details>
<details>
<summary>Hint 2</summary>

The host does not move the prize.

</details>
<details>
<summary>Solution</summary>

Staying wins exactly when the original choice was correct, probability $1/3$.

</details>

### Exercise 4
<a id="probability-surprises-ex-4"></a>

**Secondary.** Derive the probability that at least two of four independent fair coin
   tosses are heads.

<details>
<summary>Hint 1</summary>

Classify strings by their number of heads.

</details>
<details>
<summary>Hint 2</summary>

Count the classes with two, three or four heads.

</details>
<details>
<summary>Solution</summary>

There are 16 equally likely strings. Counts with 2, 3, or 4 heads number
   $\binom{4}{2}+\binom{4}{3}+\binom{4}{4}=6+4+1=11$, so the probability is $11/16$.

</details>

### Exercise 5
<a id="probability-surprises-ex-5"></a>

**Undergraduate.** A disease has prevalence 1%. A test has 90% sensitivity and
   a 5% false-positive rate. Find the probability a randomly tested person has
   the disease given a positive result.

<details>
<summary>Hint 1</summary>

Use a hypothetical population to keep denominators visible.

</details>
<details>
<summary>Hint 2</summary>

Separate positive outcomes from the two prevalence groups.

</details>
<details>
<summary>Solution</summary>

Out of 10,000 representative people, 100 have the disease and about 90 test
   positive. Of 9,900 without it, about 495 test positive. Hence
   $P(disease|positive)=90/(90+495)=90/585$, about $15.4\%$. A positive test is
   not “90% certain” because sensitivity is the reverse conditional probability.

</details>

### Exercise 6
<a id="probability-surprises-ex-6"></a>

Under the two-child model and the random-child reporting protocol above, find the probability of BB after a B report.

<details>
<summary>Hint 1</summary>

Weight family types by their probability of producing the report.

</details>
<details>
<summary>Hint 2</summary>

BB reports B surely; mixed labels report B with probability one half.

</details>
<details>
<summary>Solution</summary>

Prior probabilities are $1/4$ each. The B-report weights are $1/4,1/8,1/8,0$ for BB, BG, GB, GG, totalling $1/2$. Therefore $P(BB\mid\text{B report})=(1/4)/(1/2)=1/2$. Equal weighting of the three compatible families would be incorrect.

</details>

### Exercise 7
<a id="probability-surprises-ex-7"></a>

In the uninformed-host model, does switching win with probability two thirds after a goat is observed?

<details>
<summary>Hint 1</summary>

Enumerate the prize and opened-door combinations.

</details>
<details>
<summary>Hint 2</summary>

There are six equally likely combinations and four survivors.

</details>
<details>
<summary>Solution</summary>

No. Of the four surviving combinations, two have the prize behind the initial door and two behind the other unopened door. Staying and switching each win with conditional probability $1/2$. The informed-host calculation uses a different experiment.

</details>

### Exercise 8
<a id="probability-surprises-ex-8"></a>

Compute both combined success rates in the constructed Simpson example.

<details>
<summary>Hint 1</summary>

Add successes and cases separately.

</details>
<details>
<summary>Hint 2</summary>

Both procedures have 110 cases overall.

</details>
<details>
<summary>Solution</summary>

A has $9+20=29$ successes among $10+100=110$ cases. B has $80+1=81$ among $100+10=110$. Thus the combined rates are $29/110$ and $81/110$. A has a higher rate within each group, but the mixtures differ.

</details>

### Exercise 9
<a id="probability-surprises-ex-9"></a>

For the truncated St Petersburg contract with $m=4$, calculate the expected payoff.

<details>
<summary>Hint 1</summary>

There are four nonzero payoff cases.

</details>
<details>
<summary>Hint 2</summary>

Each case contributes $2^{-k}2^k=1$ to the mean.

</details>
<details>
<summary>Solution</summary>

The nonzero contributions are $(1/2)2,(1/4)4,(1/8)8,(1/16)16$, each one. No heads by toss four has probability $1/16$ and payoff zero. The expected payoff is therefore $4$.

</details>

### Exercise 10
<a id="probability-surprises-ex-10"></a>

With independent uniform birthdays among $d$ days, find the collision probability for three people, assuming $d\ge3$.

<details>
<summary>Hint 1</summary>

Compute the probability of three distinct birthdays.

</details>
<details>
<summary>Hint 2</summary>

Successive conditional probabilities are $1,(d-1)/d,(d-2)/d$.

</details>
<details>
<summary>Solution</summary>

The no-collision probability is $d(d-1)(d-2)/d^3$. Thus collision probability is $1-(d-1)(d-2)/d^2=(3d-2)/d^2$. The calculation uses independence and uniformity; it is not a statement about an arbitrary birthday distribution.

</details>

## Project: protocol variants

Implement and compare three precisely stated host protocols: informed-always-
open, uninformed-random-open (discard trials where the prize is exposed), and an
informed host who prefers the lowest-numbered available door. Before simulating,
derive the probability for each observable condition you report. Explain why
discarding trials is conditioning rather than a harmless implementation detail.

## Summary

Specify the random experiment and the reporting event before conditioning.
Compatible outcomes need not have equal weights. Complements simplify collision
counts, aggregation changes group weights, and finite stopping contracts can
differ from formal infinite expectations. A simulation investigates a specified
model; exact probability statements require its counting or analytic argument.
