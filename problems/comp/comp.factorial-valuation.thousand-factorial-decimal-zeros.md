# Count decimal trailing zeros

*Medium · [Computational arithmetic problems](index.md)*

How many trailing zeros are in the decimal representation of $1000!$?

```answer
{"answer":{"kind":"integer","expected":"249","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

A trailing decimal zero uses one factor of two and one factor of five.

</details>

<details>
<summary>Hint 2</summary>

Count all contributions of powers of five; factors of two are more plentiful.

</details>

<details>
<summary>Worked solution</summary>

The scarcer prime controls the number of complete factors of ten.

1. The exponent of five is $\lfloor1000/5\rfloor+\lfloor1000/25\rfloor+\lfloor1000/125\rfloor+\lfloor1000/625\rfloor$.
2. This equals $200+40+8+1=249$.
3. The exponent of two exceeds this, so the decimal trailing-zero count is $249$.

</details>
