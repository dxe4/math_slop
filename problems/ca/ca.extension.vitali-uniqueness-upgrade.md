# Upgrade sparse pointwise convergence through normality and uniqueness

*Hard · [Complex analysis problems](index.md)*

Let f\_n be a locally uniformly bounded sequence of holomorphic functions on a connected domain. Suppose f\_n(z) converges for each z in a set E having an accumulation point in the domain. Prove $f_n$ converges locally uniformly on the whole domain. You may use Montel's theorem and the identity theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

All locally uniform subsequential limits agree on E.

</details>

<details>
<summary>Hint 2</summary>

If the whole sequence failed to converge on a compact set, extract a subsequence witnessing a fixed error and apply normality again.

</details>

<details>
<summary>Model proof</summary>

Compactness produces limits and analytic uniqueness makes every limit the same.

1. Montel gives at least one locally uniform subsequential limit f. Any other such limit g agrees with f on E because the original pointwise values converge there. The identity theorem gives g=f on the connected domain.
2. If f\_n failed to converge uniformly to f on a compact K, there would be an epsilon&gt;0 and a subsequence with sup\_K \|f\_n-f\|&gt;=epsilon at every selected index.
3. Montel gives that subsequence a further locally uniform limit g, which must equal f by the first step. Uniform convergence on K contradicts the fixed error. Thus the whole sequence converges locally uniformly.

**Self-assessment rubric**

- Identify all subsequential limits using the accumulation set and identity theorem.
- Translate failure of compact uniform convergence into a fixed-error subsequence.
- Extract again and contradict the error on the same compact set.

</details>
