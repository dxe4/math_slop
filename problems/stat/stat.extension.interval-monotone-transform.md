# Interval monotone transform

*Easy · [Statistics and probability](index.md)*

An interval for a positive parameter $\theta$ is $[2,5]$. Under the increasing transformation $\phi=3\theta$, what is the transformed upper endpoint?

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

An increasing transformation preserves the order of the endpoints.

</details>

<details>
<summary>Hint 2</summary>

Apply the specified map to the original upper endpoint.

</details>

<details>
<summary>Worked solution</summary>

Transform both endpoints in their existing order.

1. The map $g(t)=3t$ is strictly increasing.
2. Its image of $[2,5]$ is $[g(2),g(5)]=[6,15]$.
3. The upper endpoint is $15$. Moreover, $\theta\in[2,5]$ if and only if $3\theta\in[6,15]$, so this one-to-one transformation preserves coverage.

</details>
