# Closure preserves connectedness

*Hard · [Topology problems](index.md)*

If $A$ is a connected subset of a topological space $X$, prove that its closure $\overline A$ is connected.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

A nonempty relatively open part of the closure must meet the original set.

</details>

<details>
<summary>Hint 2</summary>

A separation of the closure would restrict to two nonempty pieces of the original set.

</details>

<details>
<summary>Model proof</summary>

Density of a set in its closure prevents a new separation from appearing.

1. If the closure were separated into nonempty disjoint relative open sets $U,V$, their intersections with $A$ would be disjoint, relatively open in $A$, and cover $A$.
2. To show $U\cap A\ne\varnothing$, choose $x\in U$ and an ambient open set $O$ with $U=O\cap\overline A$. As $x$ is a closure point, $O$ meets $A$, hence so does $U$.
3. The same argument gives $V\cap A\ne\varnothing$.
4. These two sets separate $A$, contradicting its connectedness. Therefore the closure is connected. The empty case is immediate.

**Self-assessment rubric**

- Restrict a hypothetical relative separation to the original set.
- Prove each nonempty closure-side must meet the original set.
- Obtain a genuine separation with both sides nonempty and conclude.

</details>
