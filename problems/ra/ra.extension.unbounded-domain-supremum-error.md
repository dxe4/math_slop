# Keep a supremum beyond every finite observation point

*Easy · [Real analysis](index.md)*

For fixed n&gt;=1 let $f_n(x)=x/(n+x)$ on \[0,infinity). Find sup over x of \|f\_n(x)\|. The pointwise limit as n tends to infinity is zero.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested uniform error or derivative observation only; no interchange theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

For every finite x the value is below one.

</details>

<details>
<summary>Hint 2</summary>

Let x grow with n held fixed before taking the supremum.

</details>

<details>
<summary>Worked solution</summary>

A pointwise limit and a domain-wide error bound use different quantifier orders.

1. The values are nonnegative and below one because n+x&gt;x.
2. For fixed n, x/(n+x) tends to one as x tends to infinity.
3. Thus the supremum is one, though unattained; these errors do not tend uniformly to zero.

</details>
