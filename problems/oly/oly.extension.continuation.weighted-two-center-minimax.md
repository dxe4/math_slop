# Balance two unequal absolute-error penalties

*Medium · [Original olympiad-style problems](index.md)*

For real x, find the minimum of $\max\{|x-1|,2|x+2|\}$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

If the maximum is at most t, the two permitted intervals must overlap.

</details>

<details>
<summary>Hint 2</summary>

Compare the left endpoint of the first interval with the right endpoint of the second.

</details>

<details>
<summary>Worked solution</summary>

Translate a minimax bound into simultaneous interval feasibility.

1. Feasibility requires $x\in[1-t,1+t]$ and $x\in[-2-t/2,-2+t/2]$.
2. The necessary overlap inequality $1-t\le-2+t/2$ forces $t\ge2$.
3. At $x=-1$, both penalties are two. Thus two is both a lower bound and an attained minimum.

</details>
