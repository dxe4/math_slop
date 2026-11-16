# Three arithmetic functions from one factorization

*Difficulty 3 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 4 of 13*

Factor $360$ and compute Euler's totient $\phi(360)$, the divisor count $\tau(360)$, and the Möbius value $\mu(360)$. Explain which part of the prime factorization each formula reads.

<details>
<summary>Hint 1</summary>

$360=2^3\cdot 3^2\cdot 5$

</details>

<details>
<summary>Hint 2</summary>

For $\phi$, remove the fraction $1/p$ for each distinct prime

</details>

<details>
<summary>Hint 3</summary>

The Möbius function vanishes when a square divides $n$

</details>

<details>
<summary>Worked solution</summary>

The factorization is $360=2^3\cdot 3^2\cdot 5$. Euler's product gives $\phi(360)=360(1-1/2)(1-1/3)(1-1/5)=360\cdot 1/2\cdot 2/3\cdot 4/5=96$; the exponents affect $n$ itself, while the correction uses each distinct prime once. A positive divisor chooses exponents $0$ through $3$, $0$ through $2$, and $0$ through $1$ independently, so $\tau(360)=(3+1)(2+1)(1+1)=24$. Finally $\mu(360)=0$ because $2^2$ and $3^2$ divide $360$. If $n$ were squarefree with $r$ distinct primes, $\mu(n)=(-1)^r$. These functions are multiplicative on coprime inputs, not generally completely multiplicative.

**Answer.** $360=2^3\cdot 3^2\cdot 5$, $\phi(360)=96$, $\tau(360)=24$, and $\mu(360)=0$.

</details>

*Tags: Euler totient, divisor function, Mobius function*
