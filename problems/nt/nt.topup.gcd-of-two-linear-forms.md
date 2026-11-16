# Find a constant gcd by elimination

*Hard · [Number theory](index.md)*

For an arbitrary integer $n$, find the positive gcd of 5n+2 and 3n+1.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

A common divisor divides every integer linear combination.

</details>

<details>
<summary>Hint 2</summary>

Choose coefficients that cancel n.

</details>

<details>
<summary>Worked solution</summary>

Eliminating the variable bounds the common divisor by one.

1. Compute $3(5n+2)-5(3n+1)=1$.
2. Every common divisor divides this integer combination and therefore divides one.
3. The positive gcd is one for every integer n; the two forms cannot both be zero.

</details>
