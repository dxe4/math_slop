# Strengthen finite maximal time to eventual norm escape

*Hard · [Differential equations problems](index.md)*

For a C^1 vector field $F:\mathbb R^d\to\mathbb R^d$, let y have finite forward maximal time T. Prove \|\|y(t)\|\| tends to infinity as t increases to T, not merely that the trajectory is unbounded. You may use local existence, uniqueness and compact continuation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Assume there is a bounded sequence of states at times tending to T.

</details>

<details>
<summary>Hint 2</summary>

A uniform speed bound in a slightly larger ball prevents immediate exit after one sufficiently late such time.

</details>

<details>
<summary>Model proof</summary>

A bounded return arbitrarily near the endpoint would supply a compact final tail and an extension.

1. If the norm did not tend to infinity, there would be times t\_n increasing to T with \|\|y(t\_n)\|\|&lt;=R for one finite R. Let M=max(1,sup on the closed ball of radius R+1 of \|\|F\|\|), which is finite.
2. Starting at such a t\_n, the trajectory cannot leave the ball of radius R+1 in less than 1/M time: before its first exit its speed is at most M and it must travel distance at least one. Choose n so T-t\_n&lt;1/(2M). Then the entire remaining trajectory lies in that fixed compact ball.
3. Compact continuation now extends the solution past T, contradicting maximality. Equivalently bounded speed on this final tail gives a finite endpoint limit to which local existence can be applied. Thus no bounded-return sequence exists, proving the norm tends to infinity.

**Self-assessment rubric**

- Use the precise negation of eventual norm escape.
- Obtain a time-to-exit bound from compact bounded speed.
- Use the resulting compact tail to contradict the finite maximal endpoint.

</details>
