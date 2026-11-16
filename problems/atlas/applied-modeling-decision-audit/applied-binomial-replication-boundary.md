# Price by replication, not a forecast

*Difficulty 4 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 11 of 12*

A stock costs 100 and becomes 120 or 80 after one period. Cash has zero interest. A strike-100 call pays 20 or 0. Find its replicating portfolio and no-arbitrage price. Explain why a physical up-probability estimate of 0.7 does not change that replication cost.

<details>
<summary>Hint 1</summary>

Solve $120\Delta+B=20$ and $80\Delta+B=0$

</details>

<details>
<summary>Hint 2</summary>

Subtract the state equations

</details>

<details>
<summary>Hint 3</summary>

Replication matches each state separately

</details>

<details>
<summary>Worked solution</summary>

Subtracting the payoff equations gives $40\Delta=20$, so $\Delta=1/2$. The down equation gives $80(1/2)+B=0$, hence $B=-40$. Initial cost is $100(1/2)-40=10$. Under frictionless attainable trading and no arbitrage, the claim must share that price because portfolio and claim have identical payoff in every modeled state. A physical probability 0.7 changes the physical expected claim payoff to 14 but not the statewise identity. Pricing weights and forecasts are different objects. Costs, constraints, funding, or incompleteness would change the conclusion.

**Answer.** Hold one-half share and borrow 40; the conditional no-arbitrage price is 10, independent of a physical 0.7 forecast.

</details>

*Tags: financial mathematics, no arbitrage, replication, pricing measure, not advice*
