# Find an irreducible complement from Sylow incidence counts

*Medium · [Abstract algebra problems](index.md)*

Let $A_5$ act by conjugation on its six Sylow $5$-subgroups. You may use that each normalizer is dihedral of order $10$, and that the conjugacy classes have sizes $1,15,20,12,12$ and element orders $1,2,3,5,5$. Prove the five-dimensional augmentation subrepresentation of the complex permutation representation is irreducible.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Count fixed Sylow subgroups for each class, using normalizers and incidence double counting for involutions.

</details>

<details>
<summary>Hint 2</summary>

Subtract the trivial character and compute the norm of the resulting character.

</details>

<details>
<summary>Model proof</summary>

The selected action turns subgroup incidence into an irreducibility certificate.

1. The identity fixes all six subgroups. Each order-five element normalizes exactly its own Sylow subgroup, because a dihedral normalizer has a unique subgroup of order five. No order-three element lies in a normalizer, so it fixes none.
2. Each of the six normalizers contains five involutions. Conjugacy makes the number of normalizers containing an involution constant, hence it is $6\cdot5/15=2$. The permutation character is therefore $(6,2,0,1,1)$.
3. Subtract the constant vector character to obtain $\psi=(5,1,-1,0,0)$. Its norm is $(25+15+20)/60=1$. A complex representation with character norm one is irreducible, proving the claim.

**Self-assessment rubric**

- Count fixed Sylow subgroups for identity, order-three and order-five elements using normalizers.
- Double-count involution-normalizer incidences to obtain the remaining character value.
- Subtract the trivial constituent and justify irreducibility by the full weighted norm.

</details>
