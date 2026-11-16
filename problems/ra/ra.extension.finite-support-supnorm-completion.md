# Identify the completion of finitely supported sequences

*Medium · [Real analysis](index.md)*

Let c\_00 be the real sequences with finite support, with supremum norm. Prove its completion is $c_0$, the sequences tending to zero, rather than all of ell-infinity. Prove the required completeness and density claims.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A uniform sequence limit of null sequences still tends to zero.

</details>

<details>
<summary>Hint 2</summary>

Truncate a null sequence, and compare any sequence with finite-support approximants far out in the tail.

</details>

<details>
<summary>Model proof</summary>

The completion retains uniform tail decay, a restriction not shared by every bounded sequence.

1. The space ell-infinity is complete: a sup-norm Cauchy sequence has coordinatewise real limits, a common bound and uniform convergence to the resulting bounded sequence. The subspace c\_0 is closed there: approximate a uniform limit by one null sequence within epsilon/2, then use that sequence's tail bound epsilon/2. Hence c\_0 is complete.
2. Every x in c\_0 is uniformly approximated by its finite truncations, because the supremum of the discarded tail tends to zero. Thus c\_00 is dense in c\_0, giving c\_0 as its completion.
3. It is not dense in all of ell-infinity: the constant-one sequence has distance one from every finitely supported sequence on the untouched tail. Therefore the larger bounded-sequence space is not the asserted completion.

**Self-assessment rubric**

- Prove ambient completeness and closedness of the proposed limit space.
- Use the actual vanishing-tail condition for finite-support approximation.
- Exclude all of ell-infinity by a quantitative counterexample.

</details>
