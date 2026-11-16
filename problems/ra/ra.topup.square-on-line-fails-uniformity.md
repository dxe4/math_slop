# Refute uniform continuity with a fixed gap and shrinking input distances

*Hard · [Real analysis](index.md)*

Prove $f(x)=x^2$ is not uniformly continuous on the whole real line using x\_n=n and y\_n=n+1/n. Your argument must give a fixed tolerance and work against every positive radius.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The input difference tends to zero.

</details>

<details>
<summary>Hint 2</summary>

The output difference has a positive lower bound independent of n.

</details>

<details>
<summary>Model proof</summary>

Unbounded locations can turn arbitrarily close inputs into persistently separated outputs.

1. The input distance is 1/n, while the output distance is (n+1/n)^2-n^2=2+1/n^2.
2. Fix output tolerance one. Given any delta&gt;0, choose a positive integer n&gt;1/delta, so the input distance is below delta.
3. The output distance exceeds two and thus violates that fixed tolerance. No uniform radius exists over the real line.

**Self-assessment rubric**

- Compute both input and output distances exactly.
- Choose one positive output tolerance before the radius.
- Select a sufficiently large pair to refute each proposed radius.

</details>
