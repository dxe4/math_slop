# Combine two independent divisibility facts

*Hard · [Foundations bridge](index.md)*

Prove that $n(n+1)(n+2)$ is divisible by six for every integer n, including negative n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Look separately for a factor of two and a factor of three.

</details>

<details>
<summary>Hint 2</summary>

Consecutive integers meet every residue class modulo three, and two and three are coprime.

</details>

<details>
<summary>Model proof</summary>

Independent prime divisibility facts combine into divisibility by their product.

1. Among any two consecutive integers one is even, so the displayed three-factor product is divisible by two.
2. The three consecutive integers have all three residues modulo three; one is divisible by three, so the product is divisible by three as well.
3. Since two and three are coprime, their product six divides the product. The argument uses arbitrary integer residues and also applies to negative n.

**Self-assessment rubric**

- Justify the even factor for arbitrary integer n.
- Justify the factor divisible by three without restricting n to positive values.
- Explain why divisibility by both two and three implies divisibility by six.

</details>
