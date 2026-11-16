# Identify the balanced powers in a finite Laurent expansion

*Hard · [Combinatorics](index.md)*

For $x\ne0$, find the constant coefficient in the finite Laurent expansion of (x+2/x)^4.

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

If k factors contribute 2/x, the total exponent is 4-2k.

</details>

<details>
<summary>Hint 2</summary>

Solve the zero-exponent condition before computing its weight.

</details>

<details>
<summary>Worked solution</summary>

The constant term comes from one balanced selection of positive and negative powers.

1. The exponent is zero exactly when two factors contribute 2/x and the other two contribute x.
2. There are six such selections, each with coefficient four.
3. Thus the constant coefficient is twenty-four.

</details>
