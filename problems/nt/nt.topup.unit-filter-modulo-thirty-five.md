# Find all invertible small residues

*Medium · [Number theory](index.md)*

Find all integers a with $1\le a\le12$ that have an inverse modulo 35. Return a set.

```answer
{"answer":{"kind":"set","expected":["1","2","3","4","6","8","9","11","12"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

A residue is invertible exactly when it is coprime to the modulus.

</details>

<details>
<summary>Hint 2</summary>

The only prime divisors of thirty-five are five and seven.

</details>

<details>
<summary>Worked solution</summary>

A factorization turns the inverse-existence test into two divisibility exclusions.

1. Since $35=5\cdot7$, invertibility means divisibility by neither five nor seven.
2. Within the interval, exclude five, seven and ten.
3. The remaining set is $\{1,2,3,4,6,8,9,11,12\}$.

</details>
