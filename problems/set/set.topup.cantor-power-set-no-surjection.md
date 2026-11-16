# Prove the power-set diagonal obstruction

*Hard · [Set theory](index.md)*

For an arbitrary set X, prove no function $f:X\to\mathcal P(X)$ is onto by constructing a subset missed by f.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Define membership of a candidate subset by comparing x with its own image f(x).

</details>

<details>
<summary>Hint 2</summary>

If that subset were f(d), ask whether d belongs to it.

</details>

<details>
<summary>Model proof</summary>

A diagonal subset disagrees with every proposed image at its own index.

1. Define $D=\{x\in X:x\notin f(x)\}$, a subset of X formed by bounded separation.
2. If f were onto, D=f(d) for some d in X.
3. Then d is in D exactly when d is not in f(d)=D, a contradiction. Thus D is a subset not attained by f.

**Self-assessment rubric**

- Define a genuine subset of the fixed set X.
- Use surjectivity only to obtain an index for that subset.
- Apply the membership definition at that same index and derive a contradiction.

</details>
