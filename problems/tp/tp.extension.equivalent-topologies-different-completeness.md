# Compare completeness under two compatible metrics

*Medium · [Topology problems](index.md)*

On $(0,1)$ let $d_1(x,y)=|x-y|$ and $d_2(x,y)=|\log(x/(1-x))-\log(y/(1-y))|$. Both induce the usual topology. Return the labels of the complete metrics, using a\_1 for d\_1 and a\_2 for d\_2.

```answer
{"answer":{"kind":"set","expected":["a_2"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The reciprocal sequence approaches an excluded endpoint for the first metric.

</details>

<details>
<summary>Hint 2</summary>

The log-odds coordinate is an isometry from the second metric onto the complete real line.

</details>

<details>
<summary>Worked solution</summary>

Topological equivalence does not preserve a particular Cauchy structure.

1. For $d_1$, the sequence $1/n$ for n at least two is Cauchy but has no limit inside the interval, so the metric is incomplete.
2. The function $h(x)=\log(x/(1-x))$ is a homeomorphism onto $\mathbb R$, with inverse $e^t/(1+e^t)$. By definition it is an isometry for $d_2$.
3. The real line is complete, so $d_2$ is complete. Only $a_2$ is returned, even though the two topologies agree.

</details>
