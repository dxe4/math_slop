# Prove localization exactness and identify its tensor realization

*Hard · [Abstract algebra problems](index.md)*

For a commutative unital ring R and multiplicative S not containing zero, prove $S^{-1}M\cong S^{-1}R\otimes_R M$ naturally for every module M, and prove S^-1 R is flat. Give the denominator-witness proof of exactness without assuming R is a domain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use(r/s) tensor m maps to(r\*m)/s and m/s maps to(1/s) tensor m.

</details>

<details>
<summary>Hint 2</summary>

A localized image that is zero can be cleared by one additional S multiplier.

</details>

<details>
<summary>Model proof</summary>

Fraction equivalence, rather than cancellation, gives both tensor identification and exactness.

1. The indicated maps respect the R-balanced relations and fraction equivalence. In particular, if a multiplier t in S kills s' m-s m', its image is zero after t becomes a unit in S^-1 R. They are inverse on the generators m/s and(r/s) tensor m, proving the natural isomorphism.
2. For an exact sequence M' to M to M'', suppose m/s maps to zero in S^-1 M''. Then some t in S kills its image, so t\*m lies in the original kernel and equals the image of some m' in M'. The fraction m/s is therefore the image of m'/(t\*s). This proves exactness at the middle term.
3. The same witness criterion preserves injectivity at the left, and a lifted numerator proves surjectivity at the right of a short exact sequence. Thus localization is exact. Through the tensor identification, tensoring with S^-1 R is exact, which is flatness.

**Self-assessment rubric**

- Verify the fraction/tensor maps with the actual equivalence relations.
- Clear the zero-image witness and exhibit a valid preimage fraction.
- Handle both ends and identify exact tensoring with flatness.

</details>
