# Find an absolute-distance level set

*Medium · [Original olympiad-style problems](index.md)*

Find the sum of all real solutions of $|x-1|+|x-4|=5$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The breakpoints are the two points whose distances are being added.

</details>

<details>
<summary>Hint 2</summary>

The sum is constant between those points and linear on each outer interval.

</details>

<details>
<summary>Worked solution</summary>

Piecewise distance formulas establish the full solution set.

1. For $1\leq x\leq4$ the sum is $3$, so there are no solutions there.
2. For $x<1$ the equation is $5-2x=5$, giving x=0. For $x>4$ it is $2x-5=5$, giving x=5.
3. The only solutions are 0 and 5, whose sum is $5$.

</details>
