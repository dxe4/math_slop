# Cover two recurrence lookbacks

*Medium · [Discrete mathematics](index.md)*

A sequence is defined for integers $n\geq 0$, with $a_{n}=a_{n-2}+a_{n-3}$ used only for $n\geq 3$. Give the minimal set of initial indices whose values must be supplied.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,1,2],"checker_scope":"Checks only this authored identify-recurrence-initial-data task. Does not certify unrestricted proof validity, general construction ability or full mastery of strong induction."}}
```

<details>
<summary>Hint 1</summary>

No recurrence equation is supplied below index $3$.

</details>

<details>
<summary>Hint 2</summary>

The dependencies at $3$ and $4$ need all three earlier starting values.

</details>

<details>
<summary>Worked solution</summary>

Strong induction permits all earlier cases in the proven domain. Lookback dependencies determine the needed initial block.

1. The values at $0,1,2$ are outside the recurrence range.
2. For $n\geq 3$, both lookbacks are nonnegative earlier indices. Thus $\{0,1,2\}$ is the minimal initial set.

</details>
