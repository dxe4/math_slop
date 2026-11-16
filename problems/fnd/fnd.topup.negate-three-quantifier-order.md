# Negate three quantifiers and construct ordered witnesses

*Hard · [Foundations bridge](index.md)*

Negate the statement $\forall a\in\mathbb Z\,\exists b\in\mathbb Z\,\forall c\in\mathbb Z\ (a+b>c)$. Prove that your negation is true with choices respecting its quantifier order.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Each quantifier changes type when a negation passes through it.

</details>

<details>
<summary>Hint 2</summary>

After choosing a fixed a and receiving an arbitrary b, choose c so that the non-strict opposite inequality holds.

</details>

<details>
<summary>Model proof</summary>

Exact logical negation and admissible witness order both matter.

1. The negation is $\exists a\in\mathbb Z\,\forall b\in\mathbb Z\,\exists c\in\mathbb Z\ (a+b\leq c)$.
2. Choose a=0. For an arbitrary integer b, choose the integer c=b.
3. Then a+b=b&lt;=c, so the negation holds. The fixed a does not depend on b, while c is allowed to depend on it.

**Self-assessment rubric**

- Switch all three quantifiers in the correct order.
- Negate the strict inequality as a non-strict opposite.
- Provide witnesses with exactly the dependence allowed by the negated statement.

</details>
