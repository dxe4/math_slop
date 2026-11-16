# Refute a shared-witness inference

*Medium · [Foundations bridge](index.md)*

For integers a,b, refute this inference: if $a=2k$ for some integer k and $b=2m$ for some integer m, then there is one integer t with both $a=2t$ and $b=2t$. Give a pair and explain the witness distinction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The original two witnesses are allowed to differ.

</details>

<details>
<summary>Hint 2</summary>

Two distinct even numbers cannot share the same doubled integer.

</details>

<details>
<summary>Model proof</summary>

Independent existential witnesses do not become a single shared witness.

1. Take a=2 and b=4, with separate integer witnesses k=1 and m=2.
2. If one t satisfied both equalities, they would imply a=b, contradicting 2 not equal to 4.
3. The separate evenness assertions are true, but the proposed shared-witness conclusion is false.

**Self-assessment rubric**

- Provide valid integer witnesses for both original assumptions.
- Show no one integer can satisfy the two conclusions simultaneously.
- Explain that separate existential statements allow different witnesses.

</details>
