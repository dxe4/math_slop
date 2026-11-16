# Turn a growth bound into a multiplicity count

*Medium · [Complex analysis problems](index.md)*

Let f be holomorphic near $|z|\le2$, with f(0)=1, no zeros on \|z\|=2, and \|f(z)\|&lt;=16 there. Jensen's formula says that the sum of log(2/\|a\|) over zeros a in \|z\|&lt;2, counted with multiplicity, equals the boundary mean of log\|f\| minus log\|f(0)\|. What integer upper bound does this give for the number of zeros in \|z\|&lt;=1?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested consequence or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Every zero in the smaller disk contributes at least log 2.

</details>

<details>
<summary>Hint 2</summary>

Other zeros in the larger disk contribute nonnegative amounts.

</details>

<details>
<summary>Worked solution</summary>

A multiplicity-weighted logarithmic budget bounds the inner count.

1. The boundary mean is at most log16, and log\|f(0)\|=0.
2. If N zeros lie in \|z\|&lt;=1, their Jensen contributions alone sum to at least N\*log2.
3. Thus N\*log2&lt;=log16=4\*log2, giving N&lt;=4. This is the requested bound, without an assertion of attainability.

</details>
