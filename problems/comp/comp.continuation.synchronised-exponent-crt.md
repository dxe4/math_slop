# Synchronise three modular power clocks with overlapping periods

*Hard · [Computational arithmetic problems](index.md)*

Find the least integer $n\ge0$ such that $2^n\equiv3\pmod5$, $3^n\equiv5\pmod7$, and $5^n\equiv4\pmod{11}$.

```answer
{"answer":{"kind":"integer","expected":"23","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Find each base period and the location of its target value within that period.

</details>

<details>
<summary>Hint 2</summary>

The exponent congruences need a generalised CRT step because two periods share a factor.

</details>

<details>
<summary>Worked solution</summary>

First solve three small logarithms, then reconcile their exponent classes rather than the original residues.

1. The powers of $2$ modulo $5$ have period $4$, with target $3$ at index $3$. The powers of $3$ modulo $7$ have period $6$, with target $5$ at index $5$.
2. The powers of $5$ modulo $11$ are $1,5,3,4,9$ before returning to $1$, so the third condition is $n\equiv3\pmod5$.
3. The first two conditions combine to $n\equiv11\pmod{12}$: among residues $3,7,11$ modulo $12$, only $11$ is $5$ modulo $6$.
4. Writing $n=11+12k$, the last condition gives $2k\equiv2\pmod5$, so $k\equiv1\pmod5$. Thus all solutions are $n\equiv23\pmod{60}$, whose least nonnegative member is $23$.

</details>
