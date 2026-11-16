# Identify exactly which subspaces of a complete metric space remain complete

*Medium · [Real analysis](index.md)*

Let X be a complete metric space and A a subset with the induced metric. Prove $A$ is complete exactly when it is closed in X, including the empty subset.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Closedness retains the ambient limit of a Cauchy sequence.

</details>

<details>
<summary>Hint 2</summary>

For the converse, approximate a point of the closure by a sequence from A.

</details>

<details>
<summary>Model proof</summary>

Completeness and closedness coincide only relative to a complete ambient space.

1. If A is closed, any Cauchy sequence in A is Cauchy in X and converges there by ambient completeness. Closedness puts its limit back in A, proving completeness.
2. If A is complete and x lies in its closure, choose a\_n in A with d(a\_n,x)&lt;1/n. This sequence is Cauchy in A, so it has an A-limit a. As it also converges to x in X, uniqueness of metric limits gives x=a in A.
3. Thus A contains its closure and is closed. The empty subset is both closed and complete because it has no Cauchy sequence needing a limit.

**Self-assessment rubric**

- Use both ambient completeness and subspace closedness in the forward direction.
- Construct and complete a sequence from the closure condition.
- Identify the ambient and subspace limits and retain the empty case.

</details>
