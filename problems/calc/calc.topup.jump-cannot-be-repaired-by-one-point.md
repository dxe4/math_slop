# Prove a point value cannot repair disagreeing one-sided limits

*Hard · [Calculus](index.md)*

Let $f(x)=-1$ for x&lt;0 and f(x)=1 for x&gt;0, with any assigned f(0). Prove the two-sided limit at zero does not exist, and explain why changing only f(0) cannot help.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Every punctured neighborhood contains values from both constant branches.

</details>

<details>
<summary>Hint 2</summary>

A single proposed limit cannot lie within one half of both values.

</details>

<details>
<summary>Model proof</summary>

Separated one-sided behaviors obstruct every possible two-sided limit.

1. Suppose a finite limit L existed and use output tolerance one half. A valid radius would require both branch values negative one and one to be within one half of L.
2. The triangle inequality would then give distance two between the branch values strictly below one, a contradiction.
3. The punctured limit never uses f(0), so changing that single assigned value cannot remove the contradiction.

**Self-assessment rubric**

- Use points from both branches in every proposed punctured neighborhood.
- Derive a contradiction for one fixed positive tolerance.
- Explain why the central value is irrelevant to this obstruction.

</details>
