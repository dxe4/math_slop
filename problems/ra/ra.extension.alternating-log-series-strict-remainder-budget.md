# Keep strict tolerance in an alternating remainder estimate

*Easy · [Real analysis](index.md)*

For the alternating harmonic expansion of log 2, the error after N terms is at most $1/(N+1)$. Find the least positive integer N for which this stated upper bound is strictly less than 1/100.

```answer
{"answer":{"kind":"integer","expected":100,"checker_scope":"Exact requested series scale or error bound only; no convergence proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Solve the strict inequality for N+1.

</details>

<details>
<summary>Hint 2</summary>

An error bound equal to the requested tolerance does not meet this question's strict requirement.

</details>

<details>
<summary>Worked solution</summary>

A strict budget must be imposed on the given bound itself.

1. The sufficient inequality is 1/(N+1)&lt;1/100.
2. Positive denominators give N+1&gt;100, so N&gt;99.
3. The least positive integer is N=100. This is the least for the specified bound, not a claim about the exact remainder.

</details>
