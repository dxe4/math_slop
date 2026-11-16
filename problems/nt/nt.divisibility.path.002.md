# Divisibility and witnesses: signed candidate divisors

*Easy · [Number theory](index.md)*

From $\{-10,-8,-5,0,4,5,8,10\}$, give every d for which 40 = dk for some integer k.

```answer
{"answer":{"kind":"finite_integer_set","expected":[-10,-8,-5,4,5,8,10],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Check exact integer multiplication for each candidate.

</details>

<details>
<summary>Hint 2</summary>

Zero times any integer is zero, while a negative divisor may have a negative witness.

</details>

<details>
<summary>Worked solution</summary>

Negative divisors are legitimate; check the defining equality.

1. The successful witnesses are respectively $-4,-5,-8,10,8,5,4$.
2. The candidate $0$ cannot multiply to 40, so all the other listed candidates qualify.

</details>
