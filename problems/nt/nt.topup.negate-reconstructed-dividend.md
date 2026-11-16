# Reconstruct and negate a division record

*Medium · [Number theory](index.md)*

An integer a has division record $a=11(-6)+4$. Divide -a by 11 canonically. Return (a,quotient\_for\_negative\_a,remainder\_for\_negative\_a) as an ordered vector.

```answer
{"answer":{"kind":"vector","expected":["-62","5","7"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Recover a using the complete division equation.

</details>

<details>
<summary>Hint 2</summary>

Negate the dividend, not the old quotient and remainder independently.

</details>

<details>
<summary>Worked solution</summary>

Canonical remainder adjustment matters after a sign change.

1. The original dividend is $a=-66+4=-62$.
2. Its negative is sixty-two, and $62=11(5)+7$.
3. The remainder seven lies between zero and ten, giving the requested vector $(-62,5,7)$.

</details>
