# Retain only the prime-primary part of a finite module

*Medium · [Abstract algebra problems](index.md)*

Let M=Z/12 as a Z-module. Enter the orders of $M_{(2)},M_{(3)},M_{(5)}$, where localization inverts all integers not divisible by the indicated prime. Count the zero module as having one element.

```answer
{"answer":{"kind":"vector","expected":["4","3","1"],"checker_scope":"Exact requested localized invariant only; no local-to-global theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Use the decomposition into its two-primary and three-primary parts.

</details>

<details>
<summary>Hint 2</summary>

A torsion part killed by an inverted integer vanishes.

</details>

<details>
<summary>Worked solution</summary>

Localization tests support prime by prime.

1. The module decomposes as Z/4 plus Z/3.
2. At two, three is invertible and the Z/3 part vanishes, leaving order four. At three, two is invertible and the Z/4 part vanishes, leaving order three.
3. At five, twelve itself is invertible, so the entire module vanishes and has one element. The ordered result is\[4,3,1\].

</details>
