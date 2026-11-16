# Compute diameter without inferring compactness

*Easy · [Topology problems](index.md)*

On $\mathbb R$ use $d(x,y)=\min(1,|x-y|)$. Find the diameter of the entire space in this metric.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The metric is bounded above by one.

</details>

<details>
<summary>Hint 2</summary>

Two real points at usual distance at least one attain that bound.

</details>

<details>
<summary>Worked solution</summary>

Metric boundedness is weaker than compactness.

1. Every distance is at most one by definition, so the diameter is at most one.
2. The pair zero and one has distance exactly one, attaining the bound.
3. The diameter is one. This does not imply compactness: distinct integer points are pairwise distance one and have no convergent subsequence.

</details>
