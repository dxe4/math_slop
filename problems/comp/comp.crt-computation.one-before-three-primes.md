# Recognize a common negative remainder

*Medium · [Computational arithmetic problems](index.md)*

Find the least positive $x$ satisfying $x\equiv6\pmod7$, $x\equiv10\pmod{11}$ and $x\equiv12\pmod{13}$.

```answer
{"answer":{"kind":"integer","expected":"1000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Each congruence says the same thing about $x+1$.

</details>

<details>
<summary>Hint 2</summary>

The three pairwise coprime moduli have a common divisibility consequence.

</details>

<details>
<summary>Worked solution</summary>

Equal negative-one residues reduce the CRT system to one divisibility statement.

1. The congruences require $7,11,13$ all to divide $x+1$.
2. Since they are pairwise coprime, this is equivalent to $1001\mid x+1$.
3. The positive solutions are $1000,2001,\ldots$, so the least is $1000$.

</details>
