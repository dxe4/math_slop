# Include unsuccessful-search gaps in an interval optimisation

*Hard · [Computational arithmetic problems](index.md)*

An ordered binary search tree has keys $k_1<k_2<k_3$ with weights $[3,3,1]$ and its four unsuccessful-search gaps have weights $[2,3,1,1]$. The root has depth $1$, and every key or external gap contributes its weight times its depth. Return $[r,C]$, where $r$ is the index of an optimal root and $C$ the minimum weighted cost.

```answer
{"answer":{"kind":"vector","expected":["2","32"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Treat an empty interval as its one external gap, rather than giving it zero cost.

</details>

<details>
<summary>Hint 2</summary>

Choosing a root raises every weight in either subtree by one depth level; include gap weights in that increment.

</details>

<details>
<summary>Worked solution</summary>

Gap-aware interval costs can select a different root from a successful-frequency-only heuristic.

1. For interval $[i,j]$, use $E(i,j)=\min_r(E(i,r-1)+E(r+1,j))+W(i,j)$, where $W$ sums all its key and gap weights and $E(i,i-1)=q_{i-1}$.
2. The one-key costs are $13,11,5$, using total interval weights $8,7,3$ and their two external gap costs.
3. The two-key intervals have costs $E(1,2)=25$ and $E(2,3)=17$, after comparing both root choices in each interval.
4. The full weight is $14$, so roots $1,2,3$ give costs $2+17+14=33$, $13+5+14=32$, and $25+1+14=40$. Thus the result is $[2,32]$.

</details>
