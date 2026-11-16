# Prove a local ring has only the trivial idempotents

*Medium · [Abstract algebra problems](index.md)*

Let R be a commutative local ring with identity $1\ne0$. Prove its only idempotents are zero and one, explaining why two nonunits cannot sum to one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The nonunits of a commutative local ring form its unique maximal ideal.

</details>

<details>
<summary>Hint 2</summary>

An idempotent gives a zero product with its complement.

</details>

<details>
<summary>Model proof</summary>

Locality forces one complementary factor to be invertible.

1. Let m be the unique maximal ideal. Every nonunit lies in some maximal ideal and hence in m; conversely no element of m is a unit.
2. For an idempotent e, the sum e+(1-e)=1 prevents both terms from lying in m, so at least one is a unit.
3. Since e(1-e)=0, if e is a unit then e=1, and if 1-e is a unit then e=0. Both zero and one are idempotents.

**Self-assessment rubric**

- Justify the description of nonunits by the unique maximal ideal.
- Use the sum one to force a unit among complementary factors.
- Cancel the appropriate unit in the idempotent zero-product relation.

</details>
