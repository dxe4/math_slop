# Interchange a uniform limit and a finite integral

*Medium · [Real analysis](index.md)*

For $f_{n}(x)=x^{2}+2/n$ on $[0,3]$, compute lim as $n\to \infty$ of ∫ from $0$ to $3$ of $f_{n}$(x)dx. The functions converge uniformly to $x^{2}$ with error $2/n$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Every function is continuous on the fixed finite interval.

</details>

<details>
<summary>Hint 2</summary>

Integrate $x^{2}$, then account for the constant $2/n$ over interval length $3$.

</details>

<details>
<summary>Worked solution</summary>

Uniform convergence on a finite interval permits the integral limit interchange.

1. The integral is \[$x^{3}/3$\] from $0$ to $3$ plus $3\cdot (2/n)=9+6/n$.
2. Its limit is $9$, equal to the integral of the uniform limit $x^{2}$.

</details>
