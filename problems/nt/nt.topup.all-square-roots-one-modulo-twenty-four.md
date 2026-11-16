# Find all roots through two local conditions

*Hard · [Number theory](index.md)*

Find every x with $0\le x<24$ such that x^2 is congruent to 1 modulo 24. Return a set.

```answer
{"answer":{"kind":"set","expected":["1","5","7","11","13","17","19","23"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

A root must be odd and not divisible by three.

</details>

<details>
<summary>Hint 2</summary>

Every odd square is one modulo eight, and every nonzero square is one modulo three.

</details>

<details>
<summary>Worked solution</summary>

Local square conditions modulo eight and three characterize the complete root set.

1. A root modulo twenty-four must be odd and not divisible by three. These conditions are necessary from reduction modulo two and three.
2. Conversely an odd square is one modulo eight: $(2k+1)^2-1=4k(k+1)$ is divisible by eight. A nonmultiple of three also has square one modulo three, so the coprime moduli imply square one modulo twenty-four.
3. Exactly the residues $1,5,7,11,13,17,19,23$ satisfy those conditions in the specified range.

</details>
