# Combine valuation branches and CRT for a singular quadratic fibre

*Hard · [Computational arithmetic problems](index.md)*

Find the sum of all integers $0\le x<720$ satisfying $x^2\equiv144\pmod{720}$.

```answer
{"answer":{"kind":"integer","expected":"8640","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Factor the modulus into pairwise coprime prime powers and analyse zero and nonzero square targets separately.

</details>

<details>
<summary>Hint 2</summary>

Count the admissible residue classes before pairing a root $x$ with $720-x$; check for self-paired roots.

</details>

<details>
<summary>Worked solution</summary>

Prime-power valuation constraints expose a nonunit root fibre, and symmetry then sums it without listing every root.

1. Since $720=16\cdot9\cdot5$, the congruences are $x^2\equiv0\pmod{16}$, $x^2\equiv0\pmod9$ and $x^2\equiv4\pmod5$.
2. The first requires $4\mid x$ and gives four residues modulo $16$; the second requires $3\mid x$ and gives three residues modulo $9$; the last gives two residues, $\pm2$, modulo $5$.
3. CRT gives $4\cdot3\cdot2=24$ roots in the full range. Neither $0$ nor $360$ is a root, so $x\mapsto720-x$ pairs them into twelve distinct pairs.
4. Every pair sums to $720$, hence the requested sum is $12\cdot720=8640$.

</details>
