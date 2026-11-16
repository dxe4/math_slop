# Filter right-hand sides of an integer linear equation

*Medium · [Number theory](index.md)*

From $\{-15,-12,0,14,42\}$ select all c for which 18x+30y=c has an integer solution. Return a set.

```answer
{"answer":{"kind":"set","expected":["-12","0","42"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Any such right-hand side must be divisible by gcd(18,30).

</details>

<details>
<summary>Hint 2</summary>

Use an identity for that gcd to justify sufficiency as well.

</details>

<details>
<summary>Worked solution</summary>

The gcd condition gives an exact solvability criterion, including negative and zero targets.

1. The gcd is six, so divisibility by six is necessary.
2. The identity $18(2)+30(-1)=6$ can be multiplied by any integer, proving every multiple of six is attainable.
3. Among the supplied candidates, exactly -12, zero and forty-two are multiples of six.

</details>
