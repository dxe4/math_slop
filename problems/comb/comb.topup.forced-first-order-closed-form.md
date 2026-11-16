# Prove a recurrence formula with a changing forcing term

*Hard · [Combinatorics](index.md)*

Let $b_0=0$ and b\_n=b\_(n-1)+n 2^n for n&gt;=1. Prove b\_n=(n-1)2^(n+1)+2 for every n&gt;=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Check the expression at zero even though it includes n-1.

</details>

<details>
<summary>Hint 2</summary>

In the induction step, factor out 2^n from the two nonconstant terms.

</details>

<details>
<summary>Model proof</summary>

Induction preserves the interaction between a polynomial index factor and an exponential forcing term.

1. At n=0 the expression is (-1)2+2=0, matching the base.
2. If b\_(n-1)=(n-2)2^n+2, then b\_n=(n-2)2^n+2+n2^n=(2n-2)2^n+2.
3. This is (n-1)2^(n+1)+2, completing induction for every n&gt;=0.

**Self-assessment rubric**

- Check the formula at the actual initial index.
- Insert both the previous formula and the stated forcing term.
- Simplify the coefficient of the common power and complete induction.

</details>
