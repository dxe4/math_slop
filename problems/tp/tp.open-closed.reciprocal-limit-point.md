# Find the accumulation points of a reciprocal sequence

*Medium · [Topology problems](index.md)*

In the usual real line, find all accumulation points of $A=\{1/n:n\ge1\}$. An accumulation point requires every neighborhood to contain a point of $A$ different from itself.

```answer
{"answer":{"kind":"set","expected":[0],"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Distinguish accumulation points from isolated members of the set.

</details>

<details>
<summary>Hint 2</summary>

Away from zero, a small neighborhood can avoid the entire tail and then avoid finitely many remaining unwanted points.

</details>

<details>
<summary>Worked solution</summary>

The reciprocal tail approaches zero, while all positive members remain isolated.

1. Every neighborhood of $0$ contains a sufficiently small positive reciprocal, so $0$ is an accumulation point.
2. For any $x>0$, choose $N$ with $1/N<x/2$. The tail lies below $x/2$, away from a small neighborhood of $x$.
3. Only finitely many earlier reciprocals remain; reduce that neighborhood further to avoid all of them except possibly $x$ itself. Thus no positive point is an accumulation point.
4. A small neighborhood of any negative point misses $A$ entirely. The complete accumulation set is $\{0\}$.

</details>
