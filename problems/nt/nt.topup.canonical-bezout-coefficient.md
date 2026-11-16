# Choose a unique Bezout pair by a coefficient window

*Hard · [Number theory](index.md)*

Find integers x,y with $17x+29y=1$ and 0&lt;=x&lt;29. Return x and y.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"x":"12","y":"-7"},"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Use Euclidean back-substitution to find one identity.

</details>

<details>
<summary>Hint 2</summary>

All admissible x values lie in one residue class modulo twenty-nine.

</details>

<details>
<summary>Worked solution</summary>

A coefficient interval removes the usual nonuniqueness of Bezout witnesses.

1. The divisions $29=17+12$, $17=12+5$, $12=2(5)+2$, $5=2(2)+1$ back-substitute to $1=12(17)-7(29)$.
2. The coefficient x=12 lies in the required interval, and y=-7.
3. If two solutions existed in that interval, seventeen times their x difference would be divisible by twenty-nine; coprimality forces the difference divisible by twenty-nine, hence zero.

</details>
