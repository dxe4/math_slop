# Find the nilpotents of a residue ring

*Medium · [Abstract algebra problems](index.md)*

Find every nilpotent element of $\mathbb Z/18\mathbb Z$, using canonical residues. An element is nilpotent if some positive power is zero.

```answer
{"answer":{"kind":"set","expected":[0,6,12],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A vanishing power modulo a prime forces the original element to vanish modulo that prime.

</details>

<details>
<summary>Hint 2</summary>

After finding a necessary divisibility condition, check that it is sufficient with one fixed power.

</details>

<details>
<summary>Worked solution</summary>

Prime divisibility is necessary for any vanishing power and sufficient here after squaring.

1. If $18\mid a^m$ for some $m>0$, then both $2$ and $3$ divide $a$, so $6\mid a$.
2. Conversely, if $a=6k$, then $a^2=36k^2$ is divisible by $18$.
3. The nilpotent representatives are exactly $\{0,6,12\}$.

</details>
