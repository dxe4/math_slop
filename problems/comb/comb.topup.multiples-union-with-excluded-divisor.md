# Combine a divisibility union with an exclusion

*Hard · [Combinatorics](index.md)*

Among integers $1$ through $120$, how many are divisible by 4 or 6 but not by 9?

```answer
{"answer":{"kind":"integer","expected":"34","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Count the union of multiples of four and six first.

</details>

<details>
<summary>Hint 2</summary>

Subtract only the multiples of nine that also lie in that union.

</details>

<details>
<summary>Worked solution</summary>

A second intersection calculation enforces the excluded divisibility condition.

1. There are thirty multiples of four, twenty of six and ten of twelve, giving union count forty.
2. Inside this union, multiples of nine are the union of multiples of thirty-six and eighteen, with counts three and six and overlap three, hence six objects.
3. Subtracting those six from forty gives thirty-four.

</details>
