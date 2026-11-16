# Count maximal ideals surviving an inversion set

*Medium · [Abstract algebra problems](index.md)*

For $R=Z[1/6]$, count its maximal ideals whose residue fields have fewer than twenty elements. Use prime correspondence for localization.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact requested localized invariant only; no local-to-global theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Maximal ideals come from prime integers not inverted in R.

</details>

<details>
<summary>Hint 2</summary>

Exclude two and three, and do not count the zero prime as maximal.

</details>

<details>
<summary>Worked solution</summary>

Inverting denominators removes exactly the primes meeting that denominator set.

1. The nonzero prime ideals of Z surviving the localization are(p) with p neither two nor three, and their residue fields have p elements.
2. The surviving primes below twenty are5,7,11,13,17,19.
3. These give six maximal ideals. The zero prime does not give a field quotient because Z\[1/6\] is not itself a field.

</details>
