# Reduce an exponent tower without applying Euler to a nonunit

*Hard · [Computational arithmetic problems](index.md)*

Find the least nonnegative residue of $6^{\,6^6}$ modulo $1000$.

```answer
{"answer":{"kind":"integer","expected":"656","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Split the terminal-digit modulus into its $2$-power and $5$-power parts; the base is a unit in only one part.

</details>

<details>
<summary>Hint 2</summary>

For the unit part, establish a usable exponent period, reduce the exponent there, and recombine by CRT.

</details>

<details>
<summary>Worked solution</summary>

Nonunit and unit prime-power components require different exponent arguments.

1. Modulo $8$, the outer exponent is at least $3$, so the answer is $0$. Modulo $125$, the binomial expansion of $(1+5)^{25}$ gives $6^{25}\equiv1$.
2. The exponent $6^6$ is $6$ modulo $25$: $6^2\equiv11$, $6^4\equiv21$, and $21\cdot11\equiv6\pmod{25}$.
3. Therefore the outer power is $6^6=46656\equiv31\pmod{125}$. Write the required residue as $31+125k$.
4. Modulo $8$ this is $7+5k$, so $k\equiv5\pmod8$. The least representative is $31+625=656$.

</details>
