# Keep the sign and constant weight in a binomial coefficient

*Medium · [Combinatorics](index.md)*

Find the coefficient of $x^3$ in (2-x)^5.

```answer
{"answer":{"kind":"integer","expected":"-40","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Choose which three factors contribute negative x.

</details>

<details>
<summary>Hint 2</summary>

The other two factors still contribute their constant weights.

</details>

<details>
<summary>Worked solution</summary>

A binomial term includes a selection count, a sign and the remaining constant power.

1. There are ten choices of the three factors contributing x.
2. Their product contributes sign negative one, while the other two factors contribute $2^2=4$.
3. The coefficient is therefore negative forty.

</details>
