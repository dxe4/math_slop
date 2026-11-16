# Optimise compatible half-open jobs with the correct predecessor

*Medium · [Computational arithmetic problems](index.md)*

Jobs have intervals and weights $([0,3),5)$, $([1,4),6)$, $([3,5),5)$, $([4,7),7)$, $([5,8),6)$, $([7,9),4)$. A job ending when another starts is compatible. Find the maximum total weight of a compatible subfamily.

```answer
{"answer":{"kind":"integer","expected":"17","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Order by finishing time and find the last compatible predecessor of each job.

</details>

<details>
<summary>Hint 2</summary>

For each prefix, compare rejecting its last job with taking it plus the optimum at its predecessor.

</details>

<details>
<summary>Worked solution</summary>

Predecessor-index dynamic programming handles endpoint compatibility and competing chains.

1. The displayed finish order has predecessor indices $[0,0,1,2,3,4]$, with index $0$ denoting the empty prefix.
2. The recurrence $M(j)=\max(M(j-1),w_j+M(p_j))$, $M(0)=0$, gives $M(1),\ldots,M(6)=[5,6,10,13,16,17]$.
3. The last maximum chooses job $6$, its predecessor optimum chooses job $4$, and that optimum chooses job $2$.
4. These jobs are $[1,4)$, $[4,7)$ and $[7,9)$ with total $6+7+4=17$, attaining the prefix-DP bound.

</details>
