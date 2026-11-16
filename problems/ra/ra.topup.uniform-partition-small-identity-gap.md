# Choose a least uniform mesh count for a strict Darboux gap

*Medium · [Real analysis](index.md)*

For $f(x)=x$ on \[0,1\], use a uniform partition into N equal subintervals. Find the least positive integer N for which its upper sum minus lower sum is strictly below 3/20.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

On each subinterval the function oscillation equals the subinterval length.

</details>

<details>
<summary>Hint 2</summary>

Sum the equal rectangle gaps before solving the strict inequality.

</details>

<details>
<summary>Worked solution</summary>

Uniform mesh size determines the exact Darboux gap for the identity function.

1. Each of N subintervals has width 1/N and oscillation 1/N, contributing 1/N^2 to the sum gap.
2. The total gap is 1/N. The requirement 1/N&lt;3/20 is equivalent to N&gt;20/3.
3. The least integer is seven; the corresponding ordered cuts 0,1/7,...,1 give gap one seventh, while six intervals fail.

</details>
