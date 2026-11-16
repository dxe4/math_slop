# Evaluate large signed powers by a shared factor

*Hard · [Foundations bridge](index.md)*

Find the exact value of $(-2)^{31}+2(-2)^{30}$ without writing the full decimal powers.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The two terms share a large power.

</details>

<details>
<summary>Hint 2</summary>

After taking it out, inspect the small remaining factor.

</details>

<details>
<summary>Worked solution</summary>

Exponent rules expose cancellation before any large arithmetic is required.

1. The identity $(-2)^{31}=(-2)^{30}(-2)$ gives a common factor.
2. The expression is $(-2)^{30}(-2+2)$.
3. The second factor is zero, so the exact value is $0$.

</details>
