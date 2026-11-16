# Solve overlapping congruences and count their bounded representatives

*Medium · [Computational arithmetic problems](index.md)*

Integers $x$ satisfy $x\equiv7\pmod{12}$ and $x\equiv15\pmod{20}$. Return $[a,M,N]$, where $a$ is the least nonnegative solution, $M$ the least positive period of all solutions, and $N$ the number of solutions in $0\le x\le1000$.

```answer
{"answer":{"kind":"vector","expected":["55","60","16"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Substitute $x=7+12k$ into the second congruence and divide only after checking the common divisor.

</details>

<details>
<summary>Hint 2</summary>

After finding one residue class, count its arithmetic progression inside the closed interval.

</details>

<details>
<summary>Worked solution</summary>

Generalised CRT first reconciles the shared factor, then a progression supplies the bounded count.

1. The second congruence gives $12k\equiv8\pmod{20}$, equivalent to $3k\equiv2\pmod5$.
2. The inverse of $3$ modulo $5$ is $2$, so $k\equiv4\pmod5$ and $x=55+60j$.
3. The least positive common period is $\operatorname{lcm}(12,20)=60$, and $55$ is its least nonnegative solution.
4. The bound gives $0\le j\le15$, hence $16$ representatives. The requested vector is $[55,60,16]$.

</details>
