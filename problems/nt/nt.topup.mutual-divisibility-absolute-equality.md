# Prove the signed form of mutual divisibility

*Hard · [Number theory](index.md)*

Let nonzero integers a,b satisfy $a\mid b$ and b divides a. Prove \|a\|=\|b\|, and show why concluding a=b would be too strong.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Write b=ak and a=bl with integer witnesses.

</details>

<details>
<summary>Hint 2</summary>

Use nonzero a to constrain the product of the witnesses.

</details>

<details>
<summary>Model proof</summary>

Mutual integer divisibility determines magnitude but allows opposite signs.

1. Write $b=ak$ and $a=bl$. Substituting and cancelling nonzero a yields $kl=1$.
2. Integer k and l must therefore both be one or both be negative one, so $b=a$ or $b=-a$ and the absolute values agree.
3. For example a=3 and b=-3 satisfy both divisibility statements but are unequal, refuting the stronger signed conclusion.

**Self-assessment rubric**

- Introduce integer witnesses in both directions.
- Use the nonzero hypothesis and classify integer products equal to one.
- Conclude absolute equality and exhibit an opposite-sign counterexample.

</details>
