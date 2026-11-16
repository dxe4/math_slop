# Compute pointwise limits at endpoints and interior points

*Medium · [Real analysis](index.md)*

On $[-1,1]$, let f\_n(x)=x^(2n). Return limit\_at\_minus\_one, limit\_at\_zero, limit\_at\_half and limit\_at\_one.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"limit_at_minus_one":"1","limit_at_zero":"0","limit_at_half":"0","limit_at_one":"1"},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

An even power treats the two domain endpoints equally.

</details>

<details>
<summary>Hint 2</summary>

At every interior point the absolute base is below one.

</details>

<details>
<summary>Worked solution</summary>

Pointwise convergence separates endpoint behavior from interior decay.

1. At both endpoints, every even power equals one, so both endpoint limits are one.
2. At zero every term is zero, and at one half the terms form a geometric sequence (1/4)^n tending to zero.
3. The requested four values are one, zero, zero and one in the declared fields.

</details>
