# Nonnegative polynomial root parity

*Hard · [Original Putnam-style training](index.md)*

If a nonzero real polynomial $P$ satisfies $P(x)\ge0$ for every real $x$, prove every real root of $P$ has even multiplicity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Factor $P(x)=(x-a)^mQ(x)$ near a real root $a$, with $Q(a)\ne0$.

</details>

<details>
<summary>Hint 2</summary>

Compare signs immediately to the left and right of $a$.

</details>

<details>
<summary>Model proof</summary>

If $m$ were odd, $(x-a)^m$ would change sign across $a$, forcing $P$ to be negative on one side. This contradicts global nonnegativity, so $m$ is even.

1. The factor theorem gives $P(x)=(x-a)^mQ(x)$ with $Q(a)\ne0$ and $m$ the multiplicity.
2. Continuity makes $Q$ have a fixed nonzero sign on a small neighborhood of $a$.
3. If $m$ were odd, $(x-a)^m$ would change sign across $a$, forcing $P$ to be negative on one side. This contradicts global nonnegativity, so $m$ is even.

**Self-assessment rubric**

- Factor a chosen real root with its exact multiplicity and nonvanishing quotient.
- Use continuity to hold the quotient sign fixed near the root.
- Show odd multiplicity would force a negative value on one side.

</details>
