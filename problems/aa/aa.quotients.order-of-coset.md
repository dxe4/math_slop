# Find the order of a quotient element

*Medium · [Abstract algebra problems](index.md)*

In $(\mathbb Z/18\mathbb Z)/\langle6\rangle$, find the additive order of the coset $5+\langle6\rangle$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A multiple of the coset is the identity coset exactly when the corresponding representative enters the subgroup.

</details>

<details>
<summary>Hint 2</summary>

The subgroup consists of precisely the residue representatives divisible by its generator.

</details>

<details>
<summary>Worked solution</summary>

Test when a multiple belongs to the subgroup rather than when it is zero in the original group.

1. The subgroup is $\{0,6,12\}$, consisting of residues congruent to zero modulo $6$.
2. The order is the least $k>0$ for which $5k$ belongs to that subgroup, equivalently $6\mid5k$.
3. As $\gcd(6,5)=1$, the least such $k$ is $6$.

</details>
