# Classify even integers equal to their proper-divisor sum

*Hard · [Original olympiad-style problems](index.md)*

Prove an even positive integer equals the sum of its positive proper divisors if and only if it has form $2^{k-1}(2^k-1)$ with $k\ge2$ and $2^k-1$ prime.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Write the even integer as $2^am$ with $m$ odd, and use multiplicativity of the divisor sum for coprime factors.

</details>

<details>
<summary>Hint 2</summary>

The odd factor $2^{a+1}-1$ must divide $m$. Write $m=(2^{a+1}-1)t$ and compare the required divisor sum with the divisors $1,t,m$.

</details>

<details>
<summary>Model proof</summary>

Exploit the exact divisor-sum equality and a missing extra divisor.

1. Let $\sigma$ include all positive divisors. For coprime factors, every divisor splits uniquely, so divisor sums multiply. If $N=2^am$ with $a\ge1$, the perfect condition is $(2^{a+1}-1)\sigma(m)=2^{a+1}m$.
2. The consecutive factors on the two sides are coprime, so $A=2^{a+1}-1$ divides $m$. Put $m=At$. The equation then gives $\sigma(m)=(A+1)t=m+t$.
3. If $t>1$, the distinct divisors $1,t,m$ already sum to more than $m+t$, a contradiction. Thus $t=1$, and $\sigma(m)=m+1$ forces $m$ prime.
4. Writing $k=a+1$ yields the required form. Conversely, if the indicated odd factor is prime, multiplying the two divisor sums gives exactly twice $2^{k-1}(2^k-1)$.
5. The case $k\ge2$ is necessary because the integer is even and its power-of-two exponent is positive. Both implications include all even candidates, without asserting a classification of odd perfect integers.

**Self-assessment rubric**

- Justify multiplicativity and the exact perfect-number equation.
- Extract the required odd factor using coprimality.
- Exclude t greater than one with distinct positive divisors.
- Verify sufficiency and keep the theorem restricted to even integers.

</details>
