# Recover a Bézout identity

*Difficulty 3 of 5 · [Number theory through divisibility](index.md) · exercise 1 of 4*

Compute $\gcd(414,662)$ with the Euclidean algorithm, then find integers $u$ and $v$ such that $414u + 662v$ equals that gcd.

<details>
<summary>Hint 1</summary>

The remainders begin $248, 166, 82, 2$

</details>

<details>
<summary>Hint 2</summary>

Back-substitute from $2=166-2\cdot82$

</details>

<details>
<summary>Worked solution</summary>

Euclid gives $662=414+248$, $414=248+166$, $248=166+82$, and $166=2\cdot82+2$, followed by $82=41\cdot2$. Thus the gcd is $2$. Back-substitute: $2=166-2\cdot82=166-2(248-166)=3\cdot166-2\cdot248$. Since $166=414-248$, this is $3\cdot414-5\cdot248$. Finally $248=662-414$, so $2=8\cdot414-5\cdot662$. Therefore $u=8$ and $v=-5$ is one valid pair.

**Answer.** $\gcd(414,662)=2$, with $2=8\cdot414-5\cdot662$.

</details>

*Tags: Bézout identity, Euclidean algorithm, gcd*
