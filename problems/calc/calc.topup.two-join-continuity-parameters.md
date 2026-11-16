# Match a middle affine branch at two joins

*Medium · [Calculus](index.md)*

A function equals $x^2+1$ for x&lt;0, ax+b for 0&lt;=x&lt;=2, and 3x-1 for x&gt;2. Return a and b making it continuous on the real line.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a":"2","b":"1"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Match the left and middle branches at zero first.

</details>

<details>
<summary>Hint 2</summary>

Then match the middle and right branches at two.

</details>

<details>
<summary>Worked solution</summary>

Two joining conditions determine the two affine parameters.

1. At zero, the left limit is one and the middle value is b, so b=1.
2. At two, the right limit is five and the middle value is 2a+b, giving 2a+1=5.
3. Thus a=2 and b=1; each polynomial branch is continuous away from its joins.

</details>
