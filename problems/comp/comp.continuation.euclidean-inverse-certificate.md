# Recover a modular inverse from a Euclidean remainder chain

*Medium · [Computational arithmetic problems](index.md)*

Find the least positive integer $u$ satisfying $137u\equiv1\pmod{1000}$.

```answer
{"answer":{"kind":"integer","expected":"73","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Run the Euclidean algorithm on $1000$ and $137$ until the remainder is $1$.

</details>

<details>
<summary>Hint 2</summary>

Back-substitute to express $1$ as an integer combination of $137$ and $1000$, then reduce its coefficient.

</details>

<details>
<summary>Worked solution</summary>

Extended Euclid gives an inverse together with a divisibility certificate.

1. The remainder chain is $1000=7\cdot137+41$, $137=3\cdot41+14$, $41=2\cdot14+13$, $14=13+1$.
2. Back-substitution gives $1=3\cdot14-41=3\cdot137-10\cdot41$.
3. Substituting $41=1000-7\cdot137$ yields $1=73\cdot137-10\cdot1000$.
4. Thus $u\equiv73\pmod{1000}$; the displayed value lies in the required positive residue range.

</details>
