# Combine two nontrivial prime-power residues

*Hard · [Computational arithmetic problems](index.md)*

Find the least positive integer $x$ with $x\equiv123\pmod{256}$ and $x\equiv321\pmod{625}$.

```answer
{"answer":{"kind":"integer","expected":"136571","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Substitute $x=123+256k$ into the second congruence.

</details>

<details>
<summary>Hint 2</summary>

Find an inverse of $256$ modulo $625$ using the Euclidean algorithm.

</details>

<details>
<summary>Worked solution</summary>

Coprime moduli give one class modulo their product.

1. The second congruence becomes $256k\equiv198\pmod{625}$. The identity $271\cdot256-111\cdot625=1$ gives the inverse.
2. Thus $k\equiv198\cdot271=53658\equiv533\pmod{625}$.
3. Taking $k=533$ gives $x=123+256\cdot533=136571$, in the interval from one to $160000$, so it is the least positive representative.

</details>
