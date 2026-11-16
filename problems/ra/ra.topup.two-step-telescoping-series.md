# Keep both surviving initial terms in a telescoping sum

*Hard · [Real analysis](index.md)*

Prove that $\sum_{n=1}^{\infty}1/[n(n+2)]=3/4$ by deriving an exact partial-sum identity and taking its limit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the partial fraction one half times (1/n-1/(n+2)).

</details>

<details>
<summary>Hint 2</summary>

The shift is two, so two initial terms survive.

</details>

<details>
<summary>Model proof</summary>

A two-step telescope leaves two boundary terms rather than one.

1. The partial fraction identity is 1/\[n(n+2)\]=(1/2)(1/n-1/(n+2)).
2. The partial sum through M equals (1/2)(1+1/2-1/(M+1)-1/(M+2)).
3. The two final reciprocals vanish, leaving three quarters.

**Self-assessment rubric**

- Verify the partial-fraction identity for every positive index.
- Retain both initial and both final boundary terms in the finite sum.
- Justify the vanishing remainder and exact infinite sum.

</details>
