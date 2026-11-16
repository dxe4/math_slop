# Prove positive separation and exhibit the nonclosed obstruction

*Hard · [Real analysis](index.md)*

Let nonempty K be a compact subset of the real line and $p\notin K$. Prove inf{\|x-p\|:x in K}&gt;0. Explain with K=(0,1), p=0 why boundedness alone is insufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Minimize the continuous distance function on the compact set.

</details>

<details>
<summary>Hint 2</summary>

If a positive-looking function has infimum zero, check whether a minimum was actually attained.

</details>

<details>
<summary>Model proof</summary>

Compact attainment converts pointwise nonzero distance into uniform separation.

1. The function x mapped to \|x-p\| is continuous on nonempty compact K, so it attains a minimum at some x0 in K.
2. That minimum cannot be zero, because zero would force x0=p, contrary to p not belonging to K.
3. For K=(0,1) and p=0 every distance is positive but the infimum is zero, as points 1/n with n&gt;=2 approach zero. This bounded nonclosed set is not a valid compact substitute.

**Self-assessment rubric**

- Use continuity on a nonempty compact set to obtain an actual minimizer.
- Exclude zero using the outside-point hypothesis.
- Verify the bounded counterexample and distinguish infimum from attained minimum.

</details>
