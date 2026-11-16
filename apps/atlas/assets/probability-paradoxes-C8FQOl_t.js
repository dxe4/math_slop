var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: probability-paradoxes
title: "Probability Paradoxes"
level: secondary
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Probability Paradoxes

Probability paradoxes usually expose an ambiguous experiment, not a failure of mathematics. A probability belongs to a sample space and a sampling rule. "At least one child is a girl" does not tell us how the family was selected or how the information was reported. Clarifying the protocol resolves the paradox.

## Conditional probability

For events $A$ and $B$ with $P(B)>0$,

$$P(A \\mid B) = \\frac{P(A \\land B)}{P(B)}.$$

Conditioning replaces the original population by cases compatible with $B$ and renormalises their probabilities. It does not make those cases equally likely unless the sampling mechanism does.

## The Monty Hall problem

A prize is placed uniformly behind one of three doors. You choose door $1$. A host who knows the prize location always opens a different door with no prize, and if two doors are available chooses uniformly. The host offers a switch to the one remaining closed door.

Your first choice is correct with probability $1/3$; in that case switching loses. It is wrong with probability $2/3$; the host is forced to expose the other wrong door, so switching wins. Switching therefore wins with probability $2/3$.

If the host always knows the prize location, opens an unchosen door with no prize and offers a switch, switching wins with unconditional probability $2/3$ regardless of how the host chooses between available doors. Conditioning on which specific door was opened can depend on that choice rule. If the host can expose the prize or selectively offer a switch, a different calculation is required. Host behaviour is part of the experiment.

## The two-child problem

"A family has two children, and at least one is a boy. What is the probability both are boys?" The answer depends on how the information was obtained. For the two calculations below, use a model in which each child is independently a boy or a girl with probability $1/2$, ordered by age. Select a two-child family without regard to its children's sexes, and assume truthful reports with no selective reporting.

- If you asked every selected family "Is at least one a boy?" and conditioned on the answer yes, the sample space is $\\{BB,BG,GB\\}$, each equally likely, and the answer is $1/3$.
- If you observed the selected family's older child and conditioned on seeing a boy, the sample space is $\\{BB,BG\\}$, and the answer is $1/2$.

The difference is not mathematical sloppiness; it is a difference in the information protocol.

## Birthday collisions

Assume birthdays are independent and uniformly distributed over $365$ days. For $n$ people, it is easier to compute the complement:

$$P(\\text{no shared birthday}) = \\frac{365}{365} \\cdot \\frac{364}{365} \\cdots \\frac{365-n+1}{365}.$$

Thus $P(\\text{a collision}) = 1 - P(\\text{no collision})$. At $n=23$ this is approximately $0.507$. The surprise comes from the number of pairs, $n(n-1)/2$, not from any one person matching a fixed date.

Real birthdays are not uniform or perfectly independent. The model demonstrates the combinatorial mechanism; it is not a demographic estimate without data.

## Simpson's paradox

Simpson's paradox occurs when a trend appears in several groups of data but disappears or reverses when the groups are combined. A famous example involves kidney stone treatments: treatment A is more effective for both small stones and large stones, yet treatment B appears more effective overall.

The resolution is that the treatments were not applied to comparable populations. If treatment A was used mostly for severe cases, its overall success rate is dragged down by the harder cases, even though it outperforms B in every severity category.

## The St. Petersburg paradox

A fair coin is tossed independently on each trial until the first heads appears. If the first heads is on toss $n$, the payoff is $2^n$ ducats. The expected value is

$$E = \\sum_{n=1}^{\\infty} \\frac{1}{2^n} \\cdot 2^n = \\sum_{n=1}^{\\infty} 1 = \\infty.$$

Yet no rational person would pay an infinite amount to play. The paradox exposes the limitations of expected value as a decision criterion when the distribution has infinite mean. Alternative resolutions include utility theory (diminishing marginal utility of wealth) and the observation that no casino can offer infinite payoffs.

## Common errors

- Treating compatible outcomes as equiprobable without a sampling rule.
- Forgetting to compute a complement for "at least one."
- Confusing independence with mutual exclusivity.
- Changing the host, stopping, or reporting protocol mid-argument.
- Reporting simulation digits as exact truth or ignoring Monte Carlo variation.

## Exercises

1. **Explorer.** Two independent fair coins are tossed. Given that at least one is heads, what is the probability both are heads?
2. **Foundation.** A fair die is rolled. Given the result is even, what is the probability it exceeds $3$?
3. **Secondary.** In the stated three-door Monty Hall protocol, calculate the chance that staying wins.
4. **Secondary.** Derive the probability that at least two of four independent fair coin tosses are heads.
5. **Undergraduate.** A disease has prevalence $1\\%$. A test has $90\\%$ sensitivity and a $5\\%$ false-positive rate. Find the probability a randomly tested person has the disease given a positive result.

## Complete solutions

1. The equally likely ordered outcomes are $HH, HT, TH, TT$. Conditioning removes $TT$, leaving three equal cases; one is $HH$, so the probability is $1/3$.

2. Conditional outcomes are $2, 4, 6$. Two exceed $3$, so the probability is $2/3$.

3. Staying wins exactly when the original choice was correct, probability $1/3$.

4. There are $16$ equally likely strings. Counts with $2, 3,$ or $4$ heads number $\\binom{4}{2}+\\binom{4}{3}+\\binom{4}{4}=6+4+1=11$, so the probability is $11/16$.

5. Out of $10\\,000$ representative people, $100$ have the disease and about $90$ test positive. Of $9\\,900$ without it, about $495$ test positive. Hence

$$P(\\text{disease} \\mid \\text{positive}) = \\frac{90}{90+495} = \\frac{90}{585} = \\frac{2}{13} \\approx 0.154.$$

A positive test is not "$90\\%$ certain" because sensitivity is the reverse conditional probability.

## Project: protocol variants

Implement and compare three precisely stated host protocols for a Monty Hall variant: informed-always-open, uninformed-random-open (discard trials where the prize is exposed), and an informed host who prefers the lowest-numbered available door. Before simulating, derive the probability for each observable condition you report. Explain why discarding trials is conditioning rather than a harmless implementation detail.
`;export{e as default};