# Count paths by reflecting a first crossing

*Hard · [Original olympiad-style problems](index.md)*

How many paths from $(0,0)$ to $(5,5)$ using unit east and north steps never go strictly above the line $y=x$?

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Count all paths, then subtract paths that first cross the diagonal.

</details>

<details>
<summary>Hint 2</summary>

Reflect the segment up to the first crossing to obtain a bijection with paths having one unequal step count.

</details>

<details>
<summary>Worked solution</summary>

The reflection principle counts exactly the paths violating the barrier.

1. All paths number $\binom{10}{5}=252$.
2. Reflecting the initial segment through the first step above y=x gives a bijection from bad paths to step words with six east and four north steps, numbering $\binom{10}{4}=210$. The inverse reflects through the first excess east step.
3. The good-path count is $252-210=42$.

</details>
