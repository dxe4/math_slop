# Compare min-cost demands when the cheapest path must be undone

*Hard · [Computational arithmetic problems](index.md)*

A directed network has edges $(\text{capacity},\text{cost per unit})$: $s\to a:(2,1)$, $s\to b:(2,0)$, $a\to b:(1,-2)$, $a\to t:(2,1)$, $b\to t:(2,2)$. Return the minimum total costs $[C_3,C_4]$ of integral flows of values $3$ and $4$.

```answer
{"answer":{"kind":"vector","expected":["5","8"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

List the three possible $s$-$t$ path types and their unit costs.

</details>

<details>
<summary>Hint 2</summary>

For value $4$, both source edges and both sink edges are saturated; determine what that forces on the internal edge.

</details>

<details>
<summary>Worked solution</summary>

Optimal flow at one demand need not extend without a residual rerouting at the next demand.

1. The paths $sabt$, $sat$, and $sbt$ have respective costs $1,2,2$, and the cheap path has capacity only $1$. Any value-$3$ flow therefore costs at least $1+2+2=5$.
2. One unit on each of those paths respects all capacities and attains cost $5$.
3. At value $4$, both source edges carry $2$ and $bt$ also carries $2$. Conservation at $b$ forces the internal flow $ab$ to be zero.
4. Hence the only edge totals use $2$ units on each direct path $sat$ and $sbt$, at cost $4+4=8$. The cheap internal routing used at demand $3$ must be reversed to reach this optimum.

</details>
