# Keep compactness in the nested-set intersection principle

*Medium · [Real analysis](index.md)*

For n&gt;=1 define $F_n=(-\infty,-n]\cup[n,\infty)$. Prove the F\_n are nonempty closed nested subsets of the real line but their intersection is empty. Explain why this does not contradict the nested compact-set theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A fixed real point cannot remain outside every expanding centered interval.

</details>

<details>
<summary>Hint 2</summary>

The first set is closed but unbounded.

</details>

<details>
<summary>Model proof</summary>

Closedness alone does not provide a compact intersection anchor.

1. Each F\_n is a union of two closed rays and is nonempty. Increasing n removes points, so F\_(n+1) is a subset of F\_n.
2. For any real x, choose an integer n&gt;\|x\|. Then x lies in neither ray of F\_n. Hence no real point belongs to every F\_n.
3. The nested compact-set theorem needs compact sets, or at least a compact initial member. These F\_n are unbounded, so that hypothesis fails.

**Self-assessment rubric**

- Verify closedness, nonemptiness and the correct nesting direction.
- Exclude an arbitrary fixed real point using an integer threshold.
- Identify exactly which intersection-theorem hypothesis is absent.

</details>
