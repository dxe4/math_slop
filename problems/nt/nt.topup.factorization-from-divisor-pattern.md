# Recover a number from two divisor constraints

*Hard · [Number theory](index.md)*

Let $N=2^a3^b$ with nonnegative integers a,b. N has exactly twenty positive divisors, and its largest odd divisor is 81. Using the divisor formula (a+1)(b+1), find N.

```answer
{"answer":{"kind":"integer","expected":"648","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The largest odd divisor is the full power of three.

</details>

<details>
<summary>Hint 2</summary>

Once b is fixed, the divisor-count equation determines a.

</details>

<details>
<summary>Worked solution</summary>

Odd divisors isolate one exponent while the total divisor count determines the other.

1. The largest odd divisor is $3^b=81=3^4$, so b=4.
2. The count equation is $(a+1)5=20$, giving a=3.
3. Hence $N=2^3 3^4=8\cdot81=648$.

</details>
