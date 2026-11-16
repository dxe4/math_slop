# Start the successor chain

*Easy · [Discrete mathematics](index.md)*

You want P(n) for every integer $n\geq 3$. The step is $P(k)\Rightarrow P(k+1)$ for all integers $k\geq 3$. Give the smallest set of base indices needed to start this chain.

```answer
{"answer":{"kind":"finite_integer_set","expected":[3],"checker_scope":"Checks only this authored identify-minimal-base task. Does not certify unrestricted proof validity, general construction ability or full mastery of ordinary induction."}}
```

<details>
<summary>Hint 1</summary>

The step moves forward only.

</details>

<details>
<summary>Hint 2</summary>

The first case must be proved separately.

</details>

<details>
<summary>Worked solution</summary>

Ordinary induction needs a base and a successor implication for arbitrary k. These tasks check supplied steps and explicit starting dependencies.

1. The step at $k=3$ needs $P(3)$ to reach $P(4)$.
2. Once $P(3)$ is established, every later index follows successively. The minimal base set is $\{3\}$.

</details>
