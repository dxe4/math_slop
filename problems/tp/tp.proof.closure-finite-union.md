# Closure preserves a finite union

*Medium · [Topology problems](index.md)*

For subsets $A,B$ of a topological space $X$, prove $\overline{A\cup B}=\overline A\cup\overline B$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

One inclusion follows from monotonicity of closure.

</details>

<details>
<summary>Hint 2</summary>

For the other inclusion, intersect neighborhoods witnessing that a point is outside each separate closure.

</details>

<details>
<summary>Model proof</summary>

The finite-intersection axiom combines two neighborhoods avoiding the separate sets.

1. As $A,B\subseteq A\cup B$, monotonicity gives $\overline A\cup\overline B\subseteq\overline{A\cup B}$.
2. If $x\notin\overline A\cup\overline B$, choose open neighborhoods $U,V$ of $x$ with $U\cap A=\varnothing$ and $V\cap B=\varnothing$.
3. The intersection $U\cap V$ is an open neighborhood of $x$ disjoint from $A\cup B$. Thus $x\notin\overline{A\cup B}$.
4. This proves the reverse inclusion by contraposition and hence equality.

**Self-assessment rubric**

- Prove the inclusion coming from containment of both sets in their union.
- Choose separate avoiding neighborhoods for a point outside both closures.
- Use their open intersection to establish the reverse inclusion.

</details>
