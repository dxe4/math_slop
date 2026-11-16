# Separate a dependent witness from one uniform witness

*Medium · [Foundations bridge](index.md)*

Over the real numbers, prove $\forall x\,\exists y\ (y>x)$ and refute $\exists y\,\forall x\ (y>x)$. Explain the difference in allowed dependence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For the first statement the witness may be chosen after x is known.

</details>

<details>
<summary>Hint 2</summary>

To refute a proposed uniform witness, select an x after that witness has been proposed.

</details>

<details>
<summary>Model proof</summary>

The quantifier order determines which choices may depend on previous ones.

1. Given any real x, choose y=x+1. This proves the first statement.
2. For any proposed real y in the second statement, choose x=y. Then y&gt;x fails.
3. The first witness depends on x; the second statement demands one y that works simultaneously for all real x, which is impossible.

**Self-assessment rubric**

- Give a real witness after an arbitrary x.
- Refute every proposed uniform y with a valid x.
- Explain how quantifier order changes the permitted dependence.

</details>
