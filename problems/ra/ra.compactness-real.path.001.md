# Find a finite subcover after changing the domain

*Medium · [Real analysis](index.md)*

Keep the SAME open sets $U_{m}=(1/m,1)$, indexed by integers $m\geq 2$, but change the covered set to $K=[1/5,4/5]$. Give any exact integer index m for which the single set $U_{m}$ contains EVERY point of K, so $\{U_{m}\}$ is a finite subcover. The least index is not required; any valid larger index works. In your optional explanation, check the included endpoint $1/5$, explain why the earlier missing-point obstruction no longer applies, and distinguish finding a subcover for this one cover from compactness for every open cover.

```answer
{"answer":{"kind":"integer_witness_with_open_reasoning","public_role":"cover_index","expected_constraints":{"integer":true,"minimum_inclusive":6},"checker_scope":"Checks the exact integer index for a one-set subcover of this specified interval by the stated cover family. Every m>=6 is valid. Optional reasoning, claims about all open covers, and unrestricted compactness proofs remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

The upper endpoint $4/5$ is already strictly below $1$. Which inequality must the lower endpoint $1/5$ satisfy to belong to $U_{m}$?

</details>

<details>
<summary>Hint 2</summary>

$U_{m}$ is open at $1/m$, but K includes $1/5$. Equality of those endpoints therefore does not give a cover.

</details>

<details>
<summary>Worked solution</summary>

Changing the covered domain changes which points a proposed obstruction must contain. One finite subcover concerns one open cover.

1. The interval K has smallest point $1/5$ and largest point $4/5$. Since $4/5<1$, the entire interval is contained in $U_{m}=(1/m,1)$ exactly when $1/m<1/5$, equivalently $m>5$.
2. Thus every integer $m\geq 6$ works, including $m=6$ and all larger conservative choices. The choice $m=5$ fails because $1/5$ belongs to K but is the excluded lower endpoint of $U_{5}$. Every permitted smaller index also fails at $1/5$.
3. For a finite maximum $M\geq 6$, any missing-point rule from the earlier task has $x_{M}\leq 1/M\leq 1/6<1/5$. Its points therefore lie outside the changed K and cannot obstruct a cover of K. A witness must belong to the actual covered set.
4. The checked index establishes a finite subcover for this particular family. Compactness requires a finite subcover for EVERY open cover, so this single result does not prove compactness. Independently, K is closed and bounded in R, and the Heine–Borel theorem establishes its compactness.
5. Optional explanations of the endpoint argument, the changed obstruction, or the universal compactness definition remain unassessed drafts.

</details>
