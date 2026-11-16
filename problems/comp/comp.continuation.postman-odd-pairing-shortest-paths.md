# Optimise duplicated edges for a closed route inspecting every edge

*Hard · [Computational arithmetic problems](index.md)*

An undirected weighted graph has cycle edges $AB,BC,CD,DA$ of weight $2$, diagonal $AC$ of weight $3$, and leaf edges $BE,CF$ of weight $1$. A closed walk must traverse every edge at least once. Find its minimum total weight.

```answer
{"answer":{"kind":"integer","expected":"18","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Find the odd-degree vertices and the shortest-path distances among them.

</details>

<details>
<summary>Hint 2</summary>

Compare all three perfect pairings of those four vertices before choosing which paths to duplicate.

</details>

<details>
<summary>Worked solution</summary>

Closed route augmentation is a minimum odd-vertex pairing problem, not a greedy nearest-pair rule.

1. The original edge weight is $4\cdot2+3+1+1=13$, and the odd-degree vertices are $A,B,E,F$.
2. The relevant distances are $AB=2$, $EF=4$, $AE=3$, $BF=3$, $AF=4$, $BE=1$. Thus the three pairing totals are $6,6,5$.
3. Duplicate the path $A\to C\to F$ and edge $BE$, adding $4+1=5$. Every degree becomes even, so a closed Euler walk exists in the augmented connected multigraph.
4. Any closed covering walk must add an edge multiset with odd boundary equal to those four vertices; decomposing it into paired paths and nonnegative cycles gives added weight at least the minimum pairing cost. Hence the optimum is $13+5=18$.

</details>
