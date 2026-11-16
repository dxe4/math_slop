# Separate edge retracing from genuine four-cycles

*Easy · [Computational arithmetic problems](index.md)*

For a simple undirected graph, use $\operatorname{tr}(A^4)=2m+4\sum_v\binom{\deg(v)}2+8c_4$. Given m=6, the binomial sum is 9 and the trace is 56, find c4, the number of unrooted four-cycles.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Subtract the two kinds of repeated-edge closed walks before counting cycles.

</details>

<details>
<summary>Hint 2</summary>

The remaining four-cycle traversals have multiplicity eight.

</details>

<details>
<summary>Worked solution</summary>

The fourth-trace identity distinguishes repeated-edge walks from simple cycles.

1. The noncycle contributions are two times six plus four times nine, totaling forty-eight.
2. The remaining trace contribution is eight.
3. Dividing by the stated cycle multiplicity eight gives one four-cycle.

</details>
