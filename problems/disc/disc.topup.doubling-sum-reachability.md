# Use an invariant property rather than a fixed value

*Medium · [Discrete mathematics](index.md)*

Start with the nonnegative integer triple $(1,0,0)$. A move replaces (a,b,c) by (a+b,b+c,c+a). Prove that $(1,1,1)$ can never be reached.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Examine how the sum of the coordinates changes on each move.

</details>

<details>
<summary>Hint 2</summary>

The property of being a power of two is preserved even though the sum itself changes.

</details>

<details>
<summary>Model proof</summary>

The coordinate sum has a restricted exact form after every number of moves.

1. The initial sum is one. One move changes the sum to $2(a+b+c)$.
2. After k moves the sum is therefore 2^k, by induction on k&gt;=0.
3. The target sum is three, which is not a nonnegative integer power of two. Hence the target is unreachable.

**Self-assessment rubric**

- Compute the sum after every permitted move.
- Establish its exact power-of-two form for arbitrary move counts.
- Compare the target with the preserved property rather than just with the initial sum.

</details>
