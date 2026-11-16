# Distinguish a supremum from a maximum

*Medium · [Real analysis](index.md)*

Let $S=\{2-1/n : n\text{ is a positive integer}\}$. Give $\inf S$, $\sup S$, $\min S$ and $\max S$, using null if an extremum does not exist. Explain why the proposed upper bound is least.

```answer
{"answer":{"kind":"bounds_record_with_open_reasoning","expected":{"inf":"1","sup":"2","min":"1","max":null},"checker_scope":"Checks the four structured entries only. The least-upper-bound explanation requires a rubric and qualified review; no automatic proof validity claim."}}
```

<details>
<summary>Hint 1</summary>

Compute the first three elements and ask whether $2$ is an element.

</details>

<details>
<summary>Hint 2</summary>

For any $b<2$, choose $n>1/(2-b)$ to find an element larger than $b$.

</details>

<details>
<summary>Worked solution</summary>

A least upper bound need not be attained by an element of the set.

1. The first value is $1$ and all values are at least $1$, so $\inf S=\min S=1$.
2. Every value is less than $2$. For any $b<2$ choose a positive integer $n>1/(2-b)$; then $2-1/n>b$.
3. Thus $\sup S=2$. Since $2$ is absent and every value has a larger successor, no maximum exists.

A term table, the bound $a_n<2$, and the arbitrary-$b$ argument provide the complete information. The plot is only an illustration.

</details>
