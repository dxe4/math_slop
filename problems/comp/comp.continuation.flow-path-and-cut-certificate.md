# Find a maximum flow and its nontrivial cut certificate

*Hard · [Computational arithmetic problems](index.md)*

A directed network has capacities $sa:7$, $sb:5$, $ab:3$, $ac:4$, $ad:3$, $bd:5$, $cd:2$, $ct:5$, $dt:7$. All listed edges point from the first letter to the second, and no other edges exist. Find the maximum $s$-$t$ flow value.

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Try grouping $d$ with the source side when searching for a restrictive cut.

</details>

<details>
<summary>Hint 2</summary>

After obtaining a cut bound, route flow along several paths to determine whether that bound is attained.

</details>

<details>
<summary>Worked solution</summary>

An explicit feasible flow and an equal-capacity cut provide independent lower and upper certificates.

1. Take source-side set $\{s,a,b,d\}$. Its only outgoing cut edges are $ac$ and $dt$, of total capacity $4+7=11$. Thus no flow exceeds $11$.
2. Send $4$ units along $s\to a\to c\to t$ and $2$ along $s\to a\to d\to t$.
3. Send a further $5$ along $s\to b\to d\to t$. The used source capacities are $6$ and $5$, while $dt$ carries exactly $7$ and $ct$ carries $4$.
4. All capacities and conservation laws hold, giving value $11$ and attaining the cut bound.

</details>
