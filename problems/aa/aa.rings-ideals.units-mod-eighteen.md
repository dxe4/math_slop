# List all units in a residue ring

*Medium · [Abstract algebra problems](index.md)*

List the units of $\mathbb Z/18\mathbb Z$ using representatives from $0$ to $17$.

```answer
{"answer":{"kind":"set","expected":[1,5,7,11,13,17],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Invertibility of a residue is equivalent to a Bezout relation with the modulus.

</details>

<details>
<summary>Hint 2</summary>

Exclude residues divisible by either prime dividing the modulus.

</details>

<details>
<summary>Worked solution</summary>

Bezout characterizes exactly which residue classes are invertible.

1. A residue $a$ has an inverse modulo $18$ precisely when $\gcd(a,18)=1$.
2. Since $18=2\cdot3^2$, this excludes every even residue and every residue divisible by $3$.
3. The remaining representatives are $\{1,5,7,11,13,17\}$.

</details>
