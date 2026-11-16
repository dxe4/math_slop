# A mixed strategic equilibrium

*Difficulty 3 of 5 · [Applied modeling and decisions](index.md) · exercise 4 of 4*

In matching pennies, the row player earns +1 when the two choices match and -1 otherwise; the column player receives the negative payoff. Find the mixed-strategy Nash equilibrium and the value to the row player.

<details>
<summary>Hint 1</summary>

Make each opponent indifferent between their two pure choices

</details>

<details>
<summary>Hint 2</summary>

Let q be the probability that the column player chooses Heads

</details>

<details>
<summary>Worked solution</summary>

If the column player chooses Heads with probability q, the row payoff from Heads is $q-(1-q)=2q-1$, while the payoff from Tails is $(1-q)-q=1-2q$. Row is willing to mix only when these are equal, giving $q=1/2$. Symmetrically, column is willing to mix only when row chooses Heads with probability 1/2. With both fair mixtures, matches and mismatches are equally likely, so the expected row payoff is 0. Neither player can improve unilaterally.

**Answer.** Each player chooses Heads and Tails with probability 1/2; the game value is 0.

</details>

*Tags: game theory, mixed strategy, Nash equilibrium*
