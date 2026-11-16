# Keep the alternating determinant sign at a stated index

*Easy · [Computational arithmetic problems](index.md)*

For convergents indexed from zero, use $p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$. Find this signed determinant at n=7.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The expression order is given and must not be reversed.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the parity of n minus one.

</details>

<details>
<summary>Worked solution</summary>

The determinant identity fixes both coprimality and an index-dependent sign.

1. At n=7 the exponent n-1 is six.
2. The value of negative one to the sixth power is one.
3. Therefore the signed determinant in the displayed order is one, rather than its negative.

</details>
