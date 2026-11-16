# Factorial valuation threshold

*Medium · [Original Putnam-style training](index.md)*

Find the least positive integer $n$ for which $2^8 3^3$ divides $n!$.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use Legendre’s floor-sum formula for the exponents of $2$ and $3$.

</details>

<details>
<summary>Hint 2</summary>

Check the candidate and the immediately preceding factorial.

</details>

<details>
<summary>Worked solution</summary>

At $n=9$, $v_2(9!)=4+2+1=7<8$, and valuations are nondecreasing with $n$, so $10$ is least.

1. For $n=10$, $v_2(10!)=\lfloor10/2\rfloor+\lfloor10/4\rfloor+\lfloor10/8\rfloor=5+2+1=8$, and $v_3(10!)=\lfloor10/3\rfloor+\lfloor10/9\rfloor=3+1=4$.
2. Thus $2^8 3^3$ divides $10!$.
3. At $n=9$, $v_2(9!)=4+2+1=7<8$, and valuations are nondecreasing with $n$, so $10$ is least.

</details>
