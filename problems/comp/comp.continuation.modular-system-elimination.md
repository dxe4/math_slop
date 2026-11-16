# Eliminate a two-variable congruence system with a unit determinant

*Medium · [Computational arithmetic problems](index.md)*

Find the unique pair $(x,y)\in\{0,\ldots,34\}^2$ satisfying $2x+3y\equiv1\pmod{35}$ and $5x+7y\equiv4\pmod{35}$. Return $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["5","32"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Eliminate $x$ by combining the two equations, or inspect their determinant modulo $35$.

</details>

<details>
<summary>Hint 2</summary>

Once one variable is known, retain a unit coefficient when recovering the other.

</details>

<details>
<summary>Worked solution</summary>

An integer determinant of $-1$ makes elimination reversible over the composite modulus.

1. The coefficient determinant is $2\cdot7-3\cdot5=-1$, a unit modulo $35$, so there is exactly one residue pair.
2. Five times the first equation minus twice the second gives $y\equiv5-8=-3\equiv32\pmod{35}$.
3. The inverse coefficient matrix is $\begin{pmatrix}-7&3\\5&-2\end{pmatrix}$, giving $x\equiv-7+12=5$.
4. The pair checks as $2\cdot5+3\cdot32=106\equiv1$ and $5\cdot5+7\cdot32=249\equiv4\pmod{35}$.

</details>
