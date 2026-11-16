# Sum all idempotents of a composite ring

*Hard · [Computational arithmetic problems](index.md)*

Find the sum of all integers $r$ with $0\leq r<1000$ satisfying $r^2\equiv r\pmod{1000}$.

```answer
{"answer":{"kind":"integer","expected":"1002","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Factor the modulus into coprime prime powers.

</details>

<details>
<summary>Hint 2</summary>

For each prime power, consecutive integers cannot both contain its prime factor.

</details>

<details>
<summary>Worked solution</summary>

Idempotents correspond to independently choosing zero or one at each prime-power component.

1. Since $1000=8\cdot125$ and $r(r-1)$ has coprime consecutive factors, an idempotent is either zero or one modulo each of $8$ and $125$.
2. CRT gives the four residues $0,1,376,625$. For example, $376\equiv0\pmod8$, $376\equiv1\pmod{125}$, while $625$ has the opposite choices.
3. The sum is $0+1+376+625=1002$.

</details>
