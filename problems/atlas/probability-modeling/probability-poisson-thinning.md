# Thin an arrival stream

*Difficulty 3 of 5 · [Probability modeling](index.md) · exercise 9 of 15*

Events follow a rate-10-per-hour Poisson process. Each event is independently labeled type A with probability 0.3. State the type-A and non-A process rates and name the assumption that makes the thinning conclusion valid.

<details>
<summary>Hint 1</summary>

Multiply the original rate by each label probability

</details>

<details>
<summary>Hint 2</summary>

The labels must be independent across points and of the process

</details>

<details>
<summary>Worked solution</summary>

Independent thinning gives a type-A Poisson process of rate $10\cdot0.3=3$ per hour and a non-A Poisson process of rate $10\cdot0.7=7$ per hour; the two thinned processes are independent. This relies on labeling each point independently with a constant probability independent of the arrival process. Congestion-dependent labels would not satisfy the theorem.

**Answer.** Rates $3$ and $7$ per hour, under independent constant-probability labeling.

</details>

*Tags: Poisson process, thinning, independent increments*
