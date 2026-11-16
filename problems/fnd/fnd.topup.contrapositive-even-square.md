# State and prove a contrapositive

*Medium · [Foundations bridge](index.md)*

For integers n, prove the implication: if $n^2$ is even, then n is even. State its contrapositive explicitly and explain why proving it suffices.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The contrapositive negates the conclusion first and the hypothesis second.

</details>

<details>
<summary>Hint 2</summary>

Write an odd integer using an arbitrary integer parameter before squaring.

</details>

<details>
<summary>Model proof</summary>

The contrapositive has an immediate odd-integer calculation.

1. The contrapositive is: if n is odd, then its square is odd.
2. Write n=2k+1 for an integer k. Then $n^2=4k^2+4k+1=2(2k^2+2k)+1$, which is odd.
3. An implication is logically equivalent to its contrapositive, so the required original implication holds for every integer n.

**Self-assessment rubric**

- Reverse and negate the two parts correctly.
- Use a representation valid for every odd integer.
- Show the square is odd and connect this back to the original implication.

</details>
