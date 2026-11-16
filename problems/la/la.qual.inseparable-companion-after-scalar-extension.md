# Track an inseparable operator across a field extension

*Medium · [Linear algebra problems](index.md)*

Let $F=\mathbb F_2(s)$ and let T be multiplication by t on $F[t]/(t^2-s)$. Assume rational-function valuations and extension of scalars as preparation. Return {base\_minimal\_degree, extension\_block\_size}, where the second entry is the size of the sole Jordan block over an algebraic closure of F.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"base_minimal_degree":"2","extension_block_size":"2"},"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A square in F has even valuation at the prime s, so s is not a square.

</details>

<details>
<summary>Hint 2</summary>

Over an algebraic closure choose alpha with alpha squared equal to s and use characteristic two to factor the polynomial.

</details>

<details>
<summary>Worked solution</summary>

Irreducibility over an imperfect field does not imply absolute semisimplicity.

1. The odd s-valuation proves $s$ is not a square in $F$, so $t^2-s$ is irreducible. The cyclic multiplication operator has minimal polynomial of degree two.
2. Over the algebraic closure, $t^2-s=(t-\alpha)^2$. Scalar extension preserves the cyclic basis and the degree of the annihilating relation.
3. The extended module is therefore one length-two primary cyclic block, not two one-dimensional eigenspaces. The requested entries are two and two.

</details>
