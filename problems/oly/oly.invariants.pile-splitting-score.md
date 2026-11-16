# Telescope a quadratic potential over a splitting tree

*Hard · [Original olympiad-style problems](index.md)*

Start with one pile of $15$ stones. Whenever a pile of size a+b is split into two nonempty piles of sizes a,b, score ab points. Continue until every pile has size one. What is the total score?

```answer
{"answer":{"kind":"integer","expected":"105","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Compare the sum of squared pile sizes before and after one split.

</details>

<details>
<summary>Hint 2</summary>

The initial and final potential values do not depend on the splitting order.

</details>

<details>
<summary>Worked solution</summary>

A potential difference determines the score of every split and telescopes.

1. A split changes the squared-size sum by $(a+b)^2-a^2-b^2=2ab$.
2. The potential starts at $15^2=225$ and ends at fifteen unit squares, totaling 15.
3. The total score is half the potential drop, $(225-15)/2=105$.

</details>
