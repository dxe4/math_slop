# Filter a finite list of signed candidates

*Easy · [Number theory](index.md)*

From the candidate set $\{-6,-4,-3,0,3,4,6,9\}$, return every integer d for which 12 = dk for some integer k. Use the stated equality definition, including when $d = 0$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[-6,-4,-3,3,4,6],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

A negative candidate is allowed if its multiplier is also an integer.

</details>

<details>
<summary>Hint 2</summary>

For $d = 0$, ask whether any integer k can make $0k$ equal $12$.

</details>

<details>
<summary>Worked solution</summary>

Negative divisors are legitimate; zero divides a nonzero number under neither the equality definition nor exact multiplication.

1. The witnesses for $-6,-4,-3,3,4,6$ are respectively $-2,-3,-4,4,3,2$.
2. Zero times an integer is always zero, and $12/9 = 4/3$ is not an integer.
3. The requested set is $\{-6,-4,-3,3,4,6\}$.

</details>
