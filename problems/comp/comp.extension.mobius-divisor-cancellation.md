# Use a complete divisor-sum identity instead of enumerating terms

*Easy · [Computational arithmetic problems](index.md)*

Use the identity sum of mu(d) over positive divisors d of n equals 0 for n&gt;1. Find $\sum_{d\mid210}\mu(d)$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Check the one exception to the stated identity.

</details>

<details>
<summary>Hint 2</summary>

The divisor sum must include every positive divisor, including one.

</details>

<details>
<summary>Worked solution</summary>

The complete Mobius divisor convolution vanishes away from the identity input.

1. The integer 210 is greater than one.
2. The displayed sum ranges over all its positive divisors, exactly as the supplied identity requires.
3. The result is zero; no truncation of the divisor list is involved.

</details>
