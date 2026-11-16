# Use exhaustive parity cases

*Medium · [Discrete mathematics](index.md)*

Prove that for every integer n, $n^2$ leaves remainder zero or one on division by four.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Every integer is either even or odd.

</details>

<details>
<summary>Hint 2</summary>

In each case write an explicit integer representation and square it.

</details>

<details>
<summary>Model proof</summary>

Parity gives two exhaustive algebraic cases.

1. If n=2k for an integer k, then $n^2=4k^2$, of remainder zero.
2. If n=2k+1, then $n^2=4k(k+1)+1$, of remainder one.
3. The two cases exhaust every integer, including negative integers, so no other remainder occurs.

**Self-assessment rubric**

- Cover even and odd integers without a positivity restriction.
- Give an explicit multiple of four plus the claimed remainder in each case.
- Explain why the cases exclude every other remainder.

</details>
