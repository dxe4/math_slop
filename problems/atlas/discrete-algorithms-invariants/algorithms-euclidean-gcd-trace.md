# The Euclidean algorithm as shrinking state

*Difficulty 2 of 5 · [Discrete algorithms and invariants](index.md) · exercise 2 of 4*

Use the Euclidean algorithm to compute $\gcd(252,105)$. At every division, explain why replacing the larger number by the remainder preserves the gcd.

<details>
<summary>Hint 1</summary>

Start with $252 = 2\cdot105 + 42$

</details>

<details>
<summary>Hint 2</summary>

A common divisor of $a$ and $b$ also divides $a-qb$

</details>

<details>
<summary>Worked solution</summary>

The divisions are $252=2\cdot105+42$, then $105=2\cdot42+21$, then $42=2\cdot21+0$. Hence the last nonzero remainder is $21$, so $\gcd(252,105)=21$. For any $a=qb+r$, a number divides both $a$ and $b$ exactly when it divides both $b$ and $r=a-qb$. Therefore $\gcd(a,b)=\gcd(b,r)$. Each step preserves the set of common divisors while making the second argument smaller, which also ensures termination.

**Answer.** $\gcd(252,105)=21$.

</details>

*Tags: Euclidean algorithm, gcd, termination*
