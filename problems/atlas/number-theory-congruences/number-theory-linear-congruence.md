# Solve a congruence with multiple classes

*Difficulty 3 of 5 · [Number theory through divisibility](index.md) · exercise 3 of 4*

Solve $14x \equiv 8 \pmod{20}$. Give all incongruent solutions modulo $20$ and verify each one.

<details>
<summary>Hint 1</summary>

First divide the congruence and modulus by $\gcd(14,20)=2$

</details>

<details>
<summary>Hint 2</summary>

The inverse of $7$ modulo $10$ is $3$

</details>

<details>
<summary>Worked solution</summary>

Because $\gcd(14,20)=2$ divides $8$, solutions exist. Dividing by $2$ gives $7x\equiv4\pmod{10}$. Multiplying by $3$, the inverse of $7$ modulo $10$, yields $x\equiv12\equiv2\pmod{10}$. Thus modulo $20$ there are two classes: $x\equiv2$ and $x\equiv12$. Indeed, $14\cdot2=28\equiv8\pmod{20}$, and $14\cdot12=168\equiv8\pmod{20}$. Dividing did not permit collapsing these two distinct classes modulo the original modulus.

**Answer.** $x \equiv 2$ or $12 \pmod{20}$.

</details>

*Tags: linear congruence, modular inverse, gcd*
