# Compute an integral limit without claiming uniform convergence

*Hard · [Real analysis](index.md)*

On $[0,1]$, define f\_n(x)=n when 0&lt;x&lt;1/n^2 and f\_n(x)=0 elsewhere, for positive integer n. Find the limit of the integrals from 0 to 1 of f\_n.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Compute the rectangle area before taking the limit.

</details>

<details>
<summary>Hint 2</summary>

The value at zero is explicitly excluded from the spike.

</details>

<details>
<summary>Worked solution</summary>

Large heights can coexist with vanishing total area and pointwise convergence.

1. Each function is Riemann integrable with integral n times 1/n^2, or 1/n; endpoint exclusions do not change the rectangle area.
2. At zero every value is zero. For each fixed positive x the shrinking support eventually excludes x, so the pointwise limit is zero everywhere.
3. The integrals tend to zero, agreeing with the integral of that limit. Nevertheless the uniform error is n, so uniform convergence was not used or obtained.

</details>
